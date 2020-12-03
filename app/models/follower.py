from .db import db


class Follower(db.Model):
    __tablename__ = "followers"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    followingUserId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="followers")
    followingUser = db.relationship("User", back_populates="followers")

    def to_dict(self):
        return {
            "id": self.id
        }

    def to_joined_dict(self):
        return {
            "id": self.id,
            "user": self.user.to_dict(),
            "followerUser": self.followingUser.to_dict()
        }
