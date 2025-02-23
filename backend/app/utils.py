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