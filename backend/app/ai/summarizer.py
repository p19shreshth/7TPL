from transformers import pipeline

class Summarizer:
    def __init__(self):
        self.summarizer = pipeline("summarization")

    def generate_summary(self, text):
        summary = self.summarizer(text, max_length=200, min_length=50, do_sample=False)
        return summary[0]['summary_text']

    def generate_citations(self, text):
        citations = ["Sample Citation 1", "Sample Citation 2"]
        return citations

def summarize_query(query):
    summarizer = pipeline("summarization")
    summary = summarizer(query, max_length=200, min_length=50, do_sample=False)
    return summary[0]['summary_text']