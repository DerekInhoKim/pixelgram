from flask import Blueprint, request
from app.forms import PostForm
from app.models import db, Post, User
from sqlalchemy.exc import IntegrityError
from flask_login import login_required, current_user

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:postId>', methods=['GET'])
def getPost(postId):
    post = Post.query.join(User).filter(Post.id == postId).one()
    return {'post': post.to_user_dict()}


@post_routes.route('/user/<int:userId>', methods=['GET'])
def getPosts(userId):
    posts = Post.query.filter(Post.userId == userId).all()
    return {'posts': [post.to_dict() for post in posts]}


@post_routes.route('/create', methods=['POST'])
@login_required
def createPost():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form:
        try:
            post = Post(
                userId=current_user.id,
                content=form.data['content'],
                caption=form.data['caption']
            )
            db.session.add(post)
            db.session.commit()
            return post.to_dict()
        except IntegrityError:
            return {"error": "new error"}
