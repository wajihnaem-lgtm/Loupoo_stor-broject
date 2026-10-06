from flask import Flask, jsonify, render_template
import sqlite3

app = Flask(__name__)

def get_db_connection():
    connection = sqlite3.connect("loupo_store.db")
    connection.row_factory = sqlite3.Row
    return connection

@app.route("/")
def home():
    return "مرحبا بك في متجر لوبو للأدوات الطبية!"

@app.route("/products")
def get_products():
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM products")
    rows = cursor.fetchall()
    connection.close()

    products = []
    for row in rows:
        products.append(dict(row))

    return jsonify(products)

@app.route("/store")
def store():
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM products")
    rows = cursor.fetchall()
    connection.close()

    products = []
    for row in rows:
        products.append(dict(row))

    return render_template("index.html", products=products)

if __name__ == "__main__":
    app.run(debug=True)