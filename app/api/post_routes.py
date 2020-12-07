from flask import Blueprint
from app.models import db, Post, User

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:postId>', methods=['GET'])
def getPost(postId):
    post = Post.query.join(User).filter(Post.id == postId).one()
    return {'post': post.to_user_dict()}
