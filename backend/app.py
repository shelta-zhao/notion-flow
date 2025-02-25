from flask import Flask
from flask_cors import CORS  # 引入 CORS，解决跨域问题

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World from Flask!'

if __name__ == '__main__':
    app.run(debug=True)
