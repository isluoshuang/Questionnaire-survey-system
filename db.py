# encoding:utf-8 -*-
#!/usr/bin/python3
 
from pymongo import MongoClient
import hashlib
import sys
import datetime

host = "localhost"
# user = "root"
# password = "ls269031126"
database = "question"
connection = "list"
charset = "utf8"

#连接数据库
def open():
    #client = MongoClient()
    conn = MongoClient('mongodb://localhost:27017/')
    return conn

#断开数据库连接
def close(conn):
    conn.close()

#获取首页的list
def get_list_info():
    conn = open()
    mydb = conn[database]
    mycol = mydb[connection]
    # for x in mycol.find():
    #   print(x)    
    result = mycol.find()
    close(conn)
    return result

#将新问卷存入数据库
def addList(data):
    conn = open()
    mydb = conn[database]
    mycol = mydb[connection]
    # result = mycol.find()
    # result_list = list(result[:])
    if data["num"] == 1:
        result = list(mycol.find().sort("num", -1).limit(1))[0]['num']
        data["num"] = result + 1
        mycol.insert_one(data)
    else:
        myquery = { "num": data["num"] }
        newvalues = { "$set": data }
        mycol.update_one(myquery, newvalues)
        # mycol.delete_one(myquery)

    close(conn)
    return

#删除问卷
def deleteList(num):
    conn = open()
    mydb = conn[database]
    mycol = mydb[connection]
    myquery = num
    mycol.delete_one(myquery)
    close(conn)
    return

#获取帐号密码
# def APIlogin(result):
#     conn, cursor = open()
#     result[0] = MySQLdb.escape_string(result[0])
#     result[1] = MySQLdb.escape_string(result[1])
#     cursor.execute("select user_id,password from login where user_id = '%s'" % result[0])
#     result = cursor.fetchall()
#     close(conn, cursor)
#     return result

# #添加博文
# def addArticle(data, userId, op):
#     conn, cursor = open()
#     data["title"] = MySQLdb.escape_string(data["title"].decode("utf-8"))
#     data["content"] = MySQLdb.escape_string(data["content"].decode("utf-8"))
#     cursor = conn.cursor()
#     today = datetime.date.today()
#     cursor.execute(
#         "insert into craft(userid,title,content,pubTime,type) values ('%s','%s','%s','%s','%s')" % (
#             userId, data["title"], data["content"], today.strftime("%Y-%m-%d"), op))
#     conn.commit()
#     #cursor.execute("select id from craft where ")
#     #result = cursor.fetchall()
#     close(conn, cursor)
#     return 

# #获取博文信息
# def articleManage():
#     conn, cursor = open()
#     cursor.execute("SELECT id,title,type,pubTime from craft where type != '4' ORDER BY pubTime desc;")
#     result = cursor.fetchall()
#     close(conn, cursor)
#     return result

# #更改类型
# def change(result):
#     conn, cursor = open()
#     #用户输入转义，防止SQL注入
#     result[0] = MySQLdb.escape_string(str(result[0]))
#     result[1] = MySQLdb.escape_string(result[1])
#     cursor = conn.cursor()
#     if (result[1] == '4'):
#         cursor.execute("DELETE FROM craft where id = '%s'; "%(result[0]))
#     else:
#         cursor.execute("UPDATE craft set type = '%s' where id = '%s';" % (result[1], result[0]))
#     conn.commit()
#     close(conn, cursor)
#     return

# def alterArticle(content,id):
#     conn, cursor = open()
#     # data["title"] = MySQLdb.escape_string(data["title"].decode("utf-8"))
#     content= MySQLdb.escape_string(content.decode("utf-8"))
#     cursor = conn.cursor()
#     cursor.execute(
#         "update craft set content='%s' where id='%s' " % (content,id))
#     conn.commit()
#     #cursor.execute("select id from craft where ")
#     #result = cursor.fetchall()
#     close(conn, cursor)
#     return 


# # #删除博文
# # def delete(result):
# #     conn,cursor = open()
# #     result[0] = MySQLdb.escape_string(str(result[0]))
# #     result[1] = MySQLdb.escape_string(result[1])
# #     cursor = conn.cursor()
# #     cursor.execute("DELETE FROM craft where id = '%s'; "%(result[0]))
# #     conn.commit()
# #     close(conn,cursor)
# #     return


# #获取所有账号密码
# def verifyToken():
#     conn, cursor = open()
#     cursor.execute("select password,id from user ;")
#     result = cursor.fetchall()
#     close(conn, cursor)
#     return result

# #添加用户表
# def createUser():
#     conn, cursor = open()
#     cursor.execute("DROP table if EXISTS user")
#     cursor.execute('''create table user (
# id INT(11) primary key not null unique auto_increment,
# name VARCHAR(45) NOT NULL,
# isAdmin VARCHAR(45),
# regTime DATE NOT NULL,
# password VARCHAR(45) NOT NULL
# )''')
#     close(conn, cursor)
#     return

# #添加博文表
# def createCraft():
#     conn, cursor = open()
#     cursor.execute("DROP table if EXISTS craft")
#     cursor.execute('''create table craft (
# id INT(11) primary key not null unique auto_increment,
# userid INT(11) NOT NULL,
# title LONGTEXT,
# content LONGTEXT,
# pubTime date NOT NULL,
# type INT(11) NOT NULL
# )
# ''')
#     close(conn, cursor)
#     return

# #添加用户,密码两次 md5 加密
# def insertUser(username, password):
#     conn, cursor = open()
#     today = datetime.date.today()
#     Md5 = hashlib.md5()
#     Md5.update(password)
#     Md5hex = Md5.hexdigest()
#     Md52 = hashlib.md5()
#     Md52.update(Md5hex)
#     password_twice = Md52.hexdigest()
#     cursor.execute("insert into user values('1','%s','1','%s','%s')" % (
#         username, today.strftime("%Y-%m-%d"), password_twice))
#     conn.commit()
#     close(conn, cursor)
#     return

# #添加博文
# def insertCraft():
#     conn, cursor = open()
#     today = datetime.date.today()
#     cursor.execute(
#         "insert into craft values('1','1','Hello World！','# Hello World!\n\n* 这是一个轻量的博客，支持 markdown； \n* 这是博客的第一篇文章；','%s','1');" % (
#             today.strftime(
#                 "%Y-%m-%d")))
#     conn.commit()
#     close(conn, cursor)
#     return
