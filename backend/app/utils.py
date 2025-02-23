from app.models import db, User, Project

def generate_dummy_citation():
    return {
        "title": "Sample Title",
        "author": "John Doe",
        "year": 2023,
        "source": "Sample Source"
    }

def format_citation(citation):
    return f"{citation['author']} ({citation['year']}). {citation['title']}. {citation['source']}."

def validate_project_data(data):
    required_fields = ['title', 'description', 'research_topics']
    for field in required_fields:
        if field not in data:
            return False, f"Missing required field: {field}"
    return True, "Validation successful."

def sanitize_input(input_string):
    return input_string.strip()

def create_user(username, email, password):
    new_user = User(username=username, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()
    return new_user

def authenticate_user(email, password):
    user = User.query.filter_by(email=email, password=password).first()
    return user

def create_project(title, description, user_id):
    new_project = Project(title=title, description=description, user_id=user_id)
    db.session.add(new_project)
    db.session.commit()
    return new_project

def get_projects(user_id):
    projects = Project.query.filter_by(user_id=user_id).all()
    return projects

def get_search_suggestions(query):
    suggestions = ["AI", "Machine Learning", "Deep Learning", "NLP"]
    return [s for s in suggestions if query.lower() in s.lower()]

def search_query(query, filter, sort):
    results = [
        {"title": "AI in Healthcare"},
        {"title": "Machine Learning Basics"},
        {"title": "Deep Learning Advances"}
    ]
    if filter:
        results = [r for r in results if filter.lower() in r['title'].lower()]
    if sort == 'asc':
        results.sort(key=lambda x: x['title'])
    elif sort == 'desc':
        results.sort(key=lambda x: x['title'], reverse=True)
    return results