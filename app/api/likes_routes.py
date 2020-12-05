from flask import Blueprint, request
from sqlalchemy.exc import IntegrityError
from app.models import db, Like

likes_routes = Blueprint('likes', __name__)


@likes_routes.route('/create', methods=['POST'])
def createLike():
    req_data = request.get_json()
    postId = req_data['postId']
    print(postId)
    userId = req_data['userId']
    print(req_data)
    print("================================================================")

    try:

        like = Like(
            postId=postId,
            userId=userId,
        )

        db.session.add(like)
        db.session.commit()
        return {'like': like.to_dict()}
    except IntegrityError:
        return {'errors': 'User already likes'}, 404


# This route will return the number of likes for a user
@likes_routes.route('/<int:postId>', methods=['GET'])
def getPostLikes(postId):
    likes = Like.query.filter(Like.postId == postId).all()
    if likes_routes:
        return {'like': [like.to_dict() for like in likes]}
    else:
        return {'like': []}


# This route will return a boolean whether or not if a user likes a post
@likes_routes.route('/<int:userId>/post/<int:postId>', methods=['GET'])
def getUserLiked(userId, postId):
    likes = Like.query.filter(Like.postId == postId and Like.userId == userId).count()
    return {'likes': likes}
