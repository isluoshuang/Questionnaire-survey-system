# -*- encoding:utf-8 -*-
import hashlib
import json

import datetime
from flask import Flask
from flask import make_response
from flask import redirect
from flask import render_template
from flask import request

from urllib import parse as urlparse

import sys
import db

# from urlparse import unquote
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

#获取问卷列表信息
@app.route('/list/', methods=["get"])
def showList():
    result = db.get_list_info()
    # print(result)
    ret = []
    for i in result:
        ret.append({
            "num": i['num'],
            "title": i['title'],
            "time": i['time'],
            "state": i['state'],
            "stateTitle": i['stateTitle'],
            "checked": i['checked'],
            "question": i['question']
        })
    # print (ret)
    return json.dumps(ret)

#新增问卷
@app.route('/editList/',methods=["POST"])
def addList():
    data = request.get_json() #bytes
    print("hhhhh\n")
    print(data)    
    db.addList(data)
    ret = {"status": "success"}
    return json.dumps(ret)

#删除问卷
@app.route('/deleteList/',methods=["POST"])
def deleteList():
    # print("hhhhhhh\n")
    temp = request.get_data()
    num = bytes.decode(temp)
    num = json.loads(num)
    # print(type(num))
    db.deleteList(num)
    ret = {"status": "success"}
    return json.dumps(ret)

# #管理页
# @app.route('/manage/')
# def manage():
#     if verifyToken(request.cookies.get("token"))[0]:
#         #print "HERE"
#         return render_template("manage.html")
#     return redirect("../login/")

# #添加博文
# @app.route('/API/addArticle/', methods=["POST"])
# def addArticle():
#     isUser, userId = verifyToken(request.cookies.get("token"))

#     if isUser:
#         data = json.loads(request.get_data())
#         print data
#         db.addArticle(data["data"], userId,data["op"])
#         ret = {"status": "success"}
#         return json.dumps(ret)
#     ret = {"status": "fail"}
#     return json.dumps(ret)

#博文信息
# @app.route('/API/getStu/<id>')
# def getStu(id=id):
#     result = db.get_stu_info(id)
#     #id,title,type,pubTime
#     ret = []
#     for i in result:
#         ret.append({
#             "id": i[0],
#             "name": i[1],
#             "age": i[2],
#             "sex": i[3],
#             "birthtime": i[4].strftime("%Y-%m-%d"),
#             "class": i[5],
#             "address": i[6],
#             "tel":i[7]
#         })
#     print "ret"+json.dumps(ret)
#     return json.dumps(ret)

# #修改博文
# @app.route('/API/alterArticle/<id>',methods=["POST"])
# def alterArticle(id=id):
#     isUser, userId = verifyToken(request.cookies.get("token"))
#     if isUser:
#         data = json.loads(request.get_data())
#         print data
#         db.alterArticle(data,id)
#         ret = {"status": "success"}
#         return json.dumps(ret)
#     ret = {"status": "fail"}
#     return json.dumps(ret)

    

# #修改博文状态
# @app.route('/API/change/', methods=["POST"])
# def change():
#     #每一次需要修改数据库的操作前都需要先验证
#     isUser, userId = verifyToken(request.cookies.get("token"))
#     if isUser:
#         ret = {"status": "success"}
#         result = json.loads(request.get_data())
#         # if (result[1] == '4'): #删除博文
#         #     result = json.loads(request.get_data())
#         #     db.delete(result)
#         #     return json.dumps(ret)
#         print result
#         db.change(result)
#         return json.dumps(ret)
#     ret = {"status": "fail"}
#     return json.dumps(ret)


# @app.route('/favicon.ico')
# def favicon(id=id):
#     return app.send_static_file("./static/favicon.ico")

# # token <=> password id
# # verifyToken return isUser userId
# #验证账户
# def verifyToken(token):
#     SQLresult = db.verifyToken()
#     if token == None:
#         return False, "null"
#     for i in SQLresult:
#         print i
#         if token == genCookie(i[0]):
#             return True, i[1]
#     return False, "null"


# #加密
# def genCookie(passMd5):
#     today = datetime.date.today()
#     Md5 = hashlib.md5()
#     Md5.update(passMd5 + today.strftime("%Y/%m/%d"))
#     Md5hex = Md5.hexdigest()
#     return Md5hex


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=False, port=80)
