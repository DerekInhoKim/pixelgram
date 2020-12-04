from flask import Blueprint
from app.models import Post, User
from app.models.user import followers

follow_routes = Blueprint('follow', __name__)


# This route will return all posts for users that a user is following
@follow_routes.route('/<int:id>/posts', methods=['GET'])
def followingPosts(id):
    posts = Post.query.join(User).join(followers,
                            (followers.c.followingId == Post.userId)).filter(
                                followers.c.followerId == id).order_by(
                                    Post.createdAt.desc()).all()
    print(posts)
    return {'posts': [post.to_user_dict() for post in posts]}
