from flask import Blueprint, request
from app.models import Like

likes_routes = Blueprint('likes', __name__)


@likes_routes.route('/create', methods=['POST'])
def createLike():
    return {'likes': "hehe"}


# This route will return the number of likes for a user
@likes_routes.route('/<int:postId>', methods=['GET'])
def getPostLikes(postId):
    likes = Like.query.filter(Like.postId == postId).count()
    return {'likes': likes}


# This route will return a boolean whether or not if a user likes a post
@likes_routes.route('/<int:userId>/post/<int:postId>', methods=['GET'])
def getUserLiked(userId, postId):
    likes = Like.query.filter(Like.postId == postId and Like.userId == userId).count()
    return {'likes': likes}
