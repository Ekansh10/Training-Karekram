import mysql.connector as connector

mydb = connector.connect(
    host='localhost',
    user='username',       # <-- Replace with your actual MySQL username
    password='password',   # <-- Replace with your actual MySQL password
    port=3306
)

print('Connected to database:', mydb)

cursor = mydb.cursor()

# 1. Create the database if it doesn't exist
query = "CREATE DATABASE IF NOT EXISTS user_management"
cursor.execute(query)

# 2. Select the database
cursor.execute("USE user_management")

# 3. Create the users table
query3 = """
CREATE TABLE IF NOT EXISTS users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    email VARCHAR(100)
)
"""
cursor.execute(query3)

# 4. Inserting data in users table
# query4 = """
# INSERT INTO users(id, username, email)values(001, 'EKANSH', 'em@gmail.com')
# """
# cursor.execute(query4)

# cursor.execute("INSERT INTO users(id, username, email)values(2, 'JAY', 'jay@gmail.com')")
# cursor.execute("INSERT INTO users(id, username, email)values(3, 'PAWAN', 'pawan@gmail.com')")


# 5. Deleting data from users table
# query5 = """
# DELETE FROM users WHERE id = 1
# """
# cursor.execute(query5)

cursor.execute("SELECT * FROM users")
print(cursor.fetchall())




mydb.commit()
