from app.models import db, Follower

# Adds a demo user, you can add other users here if you want


def seed_followers(users):
    followers = [
        Follower(
            userId=users[0].id,
            followingUserId=users[1].id),
        Follower(
            userId=users[1].id,
            followingUserId=users[2].id),
        Follower(
            userId=users[4].id,
            followingUserId=users[1].id),
        Follower(
            userId=users[4].id,
            followingUserId=users[0].id),
        Follower(
            userId=users[4].id,
            followingUserId=users[3].id),
        Follower(
            userId=users[2].id,
            followingUserId=users[4].id),
        Follower(
            userId=users[3].id,
            followingUserId=users[4].id),

    ]

    db.session.add_all(followers)
    db.session.commit()
    return followers

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_followers():
    db.session.execute('TRUNCATE followers CASCADE')
    db.session.commit()
