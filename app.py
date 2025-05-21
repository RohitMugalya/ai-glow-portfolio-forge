
from flask import Flask, render_template, jsonify, request, send_from_directory
from flask_assets import Environment, Bundle
import os

app = Flask(__name__, static_folder='static', template_folder='templates')

# Setup Flask-Assets
assets = Environment(app)

# Define asset bundles
css = Bundle(
    'css/custom.css',
    output='gen/packed.css'
)
assets.register('css_all', css)

# Mock data that would normally come from a database
visitor_count = 5432

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/site.webmanifest')
def webmanifest():
    return send_from_directory(app.static_folder, 'site.webmanifest')

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
    if not os.path.exists(os.path.join(app.static_folder, 'gen')):
        os.makedirs(os.path.join(app.static_folder, 'gen'))
    app.run(debug=True)
