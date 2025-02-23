from flask import Blueprint, request, jsonify
from app.models import User, Project
from app.utils import create_user, authenticate_user, create_project, get_projects
from app.ai.summarizer import summarize_query

bp = Blueprint('routes', __name__)

@bp.route('/register', methods=['POST'])
def register():
    data = request.json
    user = create_user(data['username'], data['password'])
    if user:
        return jsonify({"message": "User registered successfully."}), 201
    return jsonify({"message": "User registration failed."}), 400

@bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = authenticate_user(data['username'], data['password'])
    if user:
        return jsonify({"message": "Login successful."}), 200
    return jsonify({"message": "Invalid credentials."}), 401

@bp.route('/projects', methods=['POST'])
def create_new_project():
    data = request.json
    project = create_project(data['title'], data['description'], data['topics'], data['user_id'])
    if project:
        return jsonify({"message": "Project created successfully.", "project": project}), 201
    return jsonify({"message": "Project creation failed."}), 400

@bp.route('/projects', methods=['GET'])
def list_projects():
    user_id = request.args.get('user_id')
    projects = get_projects(user_id)
    return jsonify({"projects": projects}), 200

@bp.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    summary, citations = summarize_query(data['query'])
    return jsonify({"summary": summary, "citations": citations}), 200