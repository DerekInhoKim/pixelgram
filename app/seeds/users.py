from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():
    users = [
        User(
            fullname='James Ballard',
            username='YaaaBoiJames',
            email='james@james.com',
            hashed_password="pbkdf2:sha256:150000$cayYFXNj$a4e7c14d1e10f2f90d07516423c20a789dbcb8e976a866e20728264b77b1f0b6",
            about="I am the scrum master 3000",
            profilePicture='https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg'),
        User(
            fullname='Bart Dorsey',
            username='Bartholomew',
            email='bart@bart.com',
            hashed_password="pbkdf2:sha256:150000$cayYFXNj$a4e7c14d1e10f2f90d07516423c20a789dbcb8e976a866e20728264b77b1f0b6",
            about="I am the all knowing",
            profilePicture='https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864'),
        User(
            fullname='Sergey',
            username='SergimusPrime',
            email='sergey@sergey.com',
            hashed_password="pbkdf2:sha256:150000$cayYFXNj$a4e7c14d1e10f2f90d07516423c20a789dbcb8e976a866e20728264b77b1f0b6",
            about="I wvant to create many wvebsites!",
            profilePicture='https://livewire.thewire.in/wp-content/uploads/2019/11/Dracula-Season-1-BBC-Netflix.jpg'),
        User(
            fullname='Alfredo',
            username='Alfredabest',
            email="alfredo@alfredo.com",
            hashed_password="pbkdf2:sha256:150000$cayYFXNj$a4e7c14d1e10f2f90d07516423c20a789dbcb8e976a866e20728264b77b1f0b6",
            about="Cool a cuucumber",
            profilePicture='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539856907.jpeg'),
        User(
            fullname='Demo User',
            username='Demo',
            email="demo@pixelgram.com",
            hashed_password="pbkdf2:sha256:150000$7Tu6i8SA$7ebf0dfa99e00bf682ba21f83f0daf9811eaacd0c39eb103e143221727da6461",
            about="This is a user for demonstration purposes",
            profilePicture='https://i.redd.it/cosm6mk0jg941.jpg'),
    ]

    db.session.add_all(users)
    db.session.commit()
    return users

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE')
    db.session.commit()
