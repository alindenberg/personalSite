from flask import Flask, render_template, redirect, url_for, send_file

app = Flask('app')

@app.route('/')
def index():
    return redirect(url_for('about'))

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/thoughts")
def thoughts():
    return render_template('thoughts.html')

@app.route("/thoughts/2018-reads")
def readsArticle():
    return "gary"

@app.route("/resume")
def resume():
    return send_file('static/Resume2018.pdf')

@app.route("/reads")
def reads():
    return render_template('reads.html')

@app.route("/projects")
def projects():
    return render_template('projects.html')

if __name__ == "main":
	app.run('0.0.0.0')