import requests

def fetch_world_bank_data(query):
    url = f"https://api.worldbank.org/v2/country/{query}?format=json"
    response = requests.get(url)
    return response.json()

def fetch_euromonitor_data(query):
    url = f"https://api.euromonitor.com/v1/search?q={query}"
    response = requests.get(url)
    return response.json()