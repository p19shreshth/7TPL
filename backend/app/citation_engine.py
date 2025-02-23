def format_citation(citation, style):
    if style == "APA":
        return f"{citation['author']} ({citation['year']}). {citation['title']}. {citation['source']}."
    elif style == "MLA":
        return f"{citation['author']}. \"{citation['title']}\". {citation['source']}, {citation['year']}."
    elif style == "Chicago":
        return f"{citation['author']}. {citation['title']}. {citation['source']}, {citation['year']}."
    else:
        return f"{citation['author']} ({citation['year']}). {citation['title']}. {citation['source']}."