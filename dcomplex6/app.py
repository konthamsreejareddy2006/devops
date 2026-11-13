from flask import Flask
app=Flask(__name__)
@app.route("/")
def Home():
    return "app running inside docker "
app.run(host="0.0.0.0",port=5000)