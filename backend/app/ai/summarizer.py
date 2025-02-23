from transformers import pipeline

class Summarizer:
    def __init__(self):
        self.summarizer = pipeline("summarization")

    def generate_summary(self, text):
        summary = self.summarizer(text, max_length=130, min_length=30, do_sample=False)
        return summary[0]['summary_text']

    def generate_citations(self, title, authors, year):
        return f"{authors}. ({year}). {title}."

def summarize_query(query):
    summarizer = pipeline("summarization")
    summary = summarizer(query, max_length=150, min_length=40, do_sample=False)
    return summary[0]['summary_text']