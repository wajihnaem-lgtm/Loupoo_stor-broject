import csv
import sqlite3

connection = sqlite3.connect("loupo_store.db")
cursor = connection.cursor()

with open("products.csv", "r", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        cursor.execute(
            "INSERT INTO products (id, name, category, price, description, image_url) VALUES (?, ?, ?, ?, ?, ?)",
            (row["id"], row["name"], row["category"], row["price"], row["description"], row["image_url"])
        )

connection.commit()
connection.close()

print("تم استيراد المنتجات بنجاح!")