from app import db
from app.models import User, Project
import pytest

@pytest.fixture
def new_user():
    user = User(username='testuser', email='test@example.com', password='password')
    return user

@pytest.fixture
def new_project():
    project = Project(title='Test Project', description='A project for testing', user_id=1)
    return project

def test_user_creation(new_user):
    assert new_user.username == 'testuser'
    assert new_user.email == 'test@example.com'
    assert new_user.password == 'password'  # In a real scenario, passwords should be hashed

def test_project_creation(new_project):
    assert new_project.title == 'Test Project'
    assert new_project.description == 'A project for testing'
    assert new_project.user_id == 1

def test_user_repr(new_user):
    assert repr(new_user) == "<User 'testuser'>"

def test_project_repr(new_project):
    assert repr(new_project) == "<Project 'Test Project'>"