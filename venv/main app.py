from flask import Flask

app = Flask(__name__)


@app.route('/')
def greeting():
    return 'This is the opening page of the chats app'


@app.route('/register')
def register():
    return 'This is the route to the registry page'


@app.route('/Groups/<int:user_id>')
def groups(user_id):
    return 'This is the route to the list of groups of user number: %s' % user_id


@app.route('/Profile/<user>')
def profile(user):
    return 'Welcome to %s profile page, where you can see which group she is a part of.' % user


@app.route('/Group/<group_name>')
def specific_group(group_name):
    return 'This is group %s : whose name is' % group_name

