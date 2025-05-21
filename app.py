
from flask import Flask, render_template, jsonify, request

app = Flask(__name__, static_folder='static', template_folder='templates')

# Mock data that would normally come from a database
visitor_count = 5432

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/visitors', methods=['GET'])
def get_visitors():
    global visitor_count
    return jsonify({
        'count': visitor_count
    })

@app.route('/api/log-visit', methods=['POST'])
def log_visit():
    global visitor_count
    visitor_count += 1
    return jsonify({
        'success': True
    })

if __name__ == '__main__':
    app.run(debug=True)
