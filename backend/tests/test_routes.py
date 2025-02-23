from flask import json
from app import create_app, db
from app.models import User, Project

app = create_app()

def test_user_registration(client):
    response = client.post('/api/register', json={
        'username': 'testuser',
        'password': 'testpassword'
    })
    assert response.status_code == 201
    assert 'token' in response.json

def test_user_login(client):
    client.post('/api/register', json={
        'username': 'testuser',
        'password': 'testpassword'
    })
    response = client.post('/api/login', json={
        'username': 'testuser',
        'password': 'testpassword'
    })
    assert response.status_code == 200
    assert 'token' in response.json

def test_create_project(client):
    client.post('/api/register', json={
        'username': 'testuser',
        'password': 'testpassword'
    })
    token_response = client.post('/api/login', json={
        'username': 'testuser',
        'password': 'testpassword'
    })
    token = token_response.json['token']
    response = client.post('/api/projects', json={
        'title': 'Test Project',
        'description': 'This is a test project.',
        'topics': ['AI', 'Research']
    }, headers={'Authorization': f'Bearer {token}'})
    assert response.status_code == 201
    assert 'id' in response.json

def test_list_projects(client):
    client.post('/api/register', json={
        'username': 'testuser',
        'password': 'testpassword'
    })
    token_response = client.post('/api/login', json={
        'username': 'testuser',
        'password': 'testpassword'
    })
    token = token_response.json['token']
    client.post('/api/projects', json={
        'title': 'Test Project',
        'description': 'This is a test project.',
        'topics': ['AI', 'Research']
    }, headers={'Authorization': f'Bearer {token}'})
    response = client.get('/api/projects', headers={'Authorization': f'Bearer {token}'})
    assert response.status_code == 200
    assert len(response.json) > 0

def test_search_api(client):
    response = client.get('/api/search?q=test')
    assert response.status_code == 200
    assert 'summary' in response.json
    assert 'citations' in response.json