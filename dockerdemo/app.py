from flask import Flask
app=Flask(__name__)
@app.route("/")
def home():
    return "hello student! this application is running inside docker"
app.run(host="0.0.0.0",port=5000)