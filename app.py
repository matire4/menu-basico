from flask import Flask, render_template, send_file, redirect, url_for
import os

# Importar los Blueprints
from back.Conciliacion import conciliacion_bp
from back.Extractos import extractos_bp

app = Flask(__name__)

# Definir la ruta para "/"
@app.route("/")
def home():
    return render_template("index.html")  # Renderiza la página index.html

@ app.route('/download/<filename>')
def download_file(filename):
    file_path = os.path.join('output', filename)
    return send_file(
        file_path,
        as_attachment=False, 
        mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )

@app.route("/static/<path:filename>")
def static_files(filename):
    return send_from_directory("static", filename)

@app.route('/resultado/<filename>')
def resultado(filename):
    return render_template('download_and_redirect.html', filename=filename)

# Registrar Blueprints
app.register_blueprint(conciliacion_bp)
app.register_blueprint(extractos_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
