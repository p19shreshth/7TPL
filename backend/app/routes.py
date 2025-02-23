from flask import Blueprint, request, jsonify
from app.models import User, Project
from app.utils import create_user, authenticate_user, create_project, get_projects, get_search_suggestions, search_query
from app.ai.summarizer import summarize_query
from app.data_sources import fetch_world_bank_data, fetch_euromonitor_data

bp = Blueprint('api', __name__)
main = Blueprint('main', __name__)

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

@bp.route('/search/suggestions', methods=['GET'])
def search_suggestions():
    query = request.args.get('q')
    suggestions = get_search_suggestions(query)
    return jsonify({"suggestions": suggestions}), 200

@bp.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    filter = request.args.get('filter')
    sort = request.args.get('sort')
    results = search_query(query, filter, sort)
    return jsonify({"results": results}), 200

@bp.route('/data/world_bank', methods=['GET'])
def get_world_bank_data():
    query = request.args.get('query')
    data = fetch_world_bank_data(query)
    return jsonify({"data": data}), 200

@bp.route('/data/euromonitor', methods=['GET'])
def get_euromonitor_data():
    query = request.args.get('query')
    data = fetch_euromonitor_data(query)
    return jsonify({"data": data}), 200

@bp.route('/data/sources', methods=['GET'])
def get_data_sources():
    sources = [
        {"name": "World Bank", "endpoint": "/data/world_bank"},
        {"name": "Euromonitor", "endpoint": "/data/euromonitor"}
    ]
    return jsonify({"sources": sources}), 200

@bp.route('/feedback', methods=['POST'])
def submit_feedback():
    data = request.json
    feedback = data['feedback']
    # Implement logic to store feedback
    return jsonify({"message": "Feedback submitted successfully."}), 201

@main.route('/')
def index():
    return "Hello, World!"

bp = Blueprint('main', __name__)

@bp.route('/api/search/suggestions', methods=['GET'])
def get_suggestions():
    query = request.args.get('q')
    # Implement your logic to fetch suggestions based on the query
    suggestions = ["suggestion1", "suggestion2", "suggestion3"]  # Example suggestions
    return jsonify({"suggestions": suggestions})

@bp.route('/api/summarize', methods=['POST'])
def summarize():
    data = request.json
    query = data.get('query')
    summary = summarize_query(query)
    return jsonify({"summary": summary}), 200

@bp.route('/api/search', methods=['GET'])
def search():
    query = request.args.get('query')
    filter = request.args.get('filter')
    sort = request.args.get('sort')
    # Implement your logic to fetch search results based on the query, filter, and sort
    results = ["result1", "result2", "result3"]  # Example results
    return jsonify({"results": results})