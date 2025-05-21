
from flask import Flask, render_template, jsonify, request
import os

app = Flask(__name__, static_folder='static', template_folder='templates')

# Use a data file to persist visitor count between server restarts
VISITOR_COUNT_FILE = 'visitor_count.txt'

# Initialize visitor count from file or default
def get_visitor_count():
    try:
        if os.path.exists(VISITOR_COUNT_FILE):
            with open(VISITOR_COUNT_FILE, 'r') as f:
                return int(f.read().strip())
        else:
            return 5432  # Default starting count
    except Exception:
        return 5432  # Fallback to default if any error occurs

# Save visitor count to file
def save_visitor_count(count):
    try:
        with open(VISITOR_COUNT_FILE, 'w') as f:
            f.write(str(count))
    except Exception as e:
        print(f"Error saving visitor count: {e}")

# Initialize visitor count
visitor_count = get_visitor_count()

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
    save_visitor_count(visitor_count)
    return jsonify({
        'success': True,
        'count': visitor_count
    })

@app.errorhandler(404)
def page_not_found(e):
    return render_template('index.html'), 404

@app.errorhandler(500)
def server_error(e):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    print("Server starting at http://127.0.0.1:5000/")
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
