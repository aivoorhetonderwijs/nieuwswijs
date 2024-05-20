from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/news')
def get_news():
    apiKey = 'YOUR_API_KEY'  # Vervang door je eigen NewsAPI sleutel
    url = 'https://newsapi.org/v2/everything'
    params = {
        'sources': 'de-volkskrant',
        'from': '2024-05-20',
        'to': '2024-05-20',
        'sortBy': 'publishedAt',
        'apiKey': apiKey
    }
    response = requests.get(url, params=params)
    return jsonify(response.json())

if __name__
