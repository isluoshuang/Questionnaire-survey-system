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
    # print("test\n\n")   
    # print (ret)
    return json.dumps(ret)

#新增问卷
@app.route('/editList/',methods=["POST"])
def addList():
    data = request.get_json() #bytes
    # print("data_receive\n")
    # print(data)    
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

#填写问卷
@app.route('/addChoose/',methods=["POST"])
def addChoose():
    data = request.get_json() #bytes
    # print("data_receive\n")
    # print(data)    
    db.addChoose(data)
    ret = {"status": "success"}
    return json.dumps(ret)

#获取问卷回答信息
@app.route('/showData/', methods=["POST"])
def showData():
    data = request.get_json() #bytes
    # print("data_receive\n")
    # print(data)

    choose_result = db.get_choose_info(data)
    choose = []
    for i in choose_result:
        choose.append({
            "num": i['num'],
            "question": i['question']
        })
    # print(type(choose))
    # print(type(choose[0]))
    #[{'num': 1, 'question': {'Q1': '选项一', 'Q2': ['选项二', '选项三'], 'Q3': '猪猪傻逼'}}, 
    #{'num': 1, 'question': {'Q1': '选项二', 'Q2': ['选项一', '选项二', '选项三'], 'Q3': '我也觉得'}}, 
    #{'num': 1, 'question': {'Q1': '选项一', 'Q2': ['选项二', '选项三', '选项一', '选项四'], 'Q3': '我不认可'}}]

    result = db.get_question(data)
    ques = []
    for i in result:
        ques.append({
            "num": i['num'],
            "question": i['question']
        })
    ques = ques[0]

    # print(ques['question'])
    # [{'num': 'Q1', 'title': '单选题', 'type': 'radio', 'isNeed': True, 'options': ['选项一', '选项二']}, 
    # {'num': 'Q2', 'title': '多选题', 'type': 'checkbox', 'isNeed': True, 'options': ['选项一', '选项二', '选项三', '选项四']}, 
    # {'num': 'Q3', 'title': '文本题', 'type': 'textarea', 'isNeed': True}]
    res = []
    for q in ques['question']:
        if q['type'] != 'textarea':
            # print("q = \n")
            # print(q)
            q_dict = dict()
            chos = q['options']
            # print("chos = \n")
            # print(chos)
            for cho in chos:
                q_dict[cho] = 0
            count_dict = {
                q['num'] : q_dict
            }
            # print("count_dict = \n")
            # print(count_dict)
            for c in choose:
                # print("c = \n")
                # print(c)
                # print(c['question'][q['num']])
                if(type(c['question'][q['num']]) == str):
                    ans = c['question'][q['num']]
                    # print(ans)
                    count_dict[q['num']][ans] = count_dict[q['num']][ans] + 1
                else:
                    for ans in c['question'][q['num']]:
                        # print(ans)
                        count_dict[q['num']][ans] = count_dict[q['num']][ans] + 1
            # print("count_dict = \n")
            # print(count_dict)
            # print("res = \n")
            res.append(count_dict)
        else:
            pass
    print("res\n")
    print(res)
    # [{'Q1': {'选项一': 2, '选项二': 1}}, 
    # {'Q2': {'选项一': 2, '选项二': 3, '选项三': 3, '选项四': 1}}]
    return json.dumps(res)








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
