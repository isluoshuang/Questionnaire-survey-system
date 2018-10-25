webpackJsonp([1],{

/***/ 160:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(160)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(90),
  /* template */
  __webpack_require__(176),
  /* scopeId */
  "data-v-1fa96368",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(161)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(177),
  /* scopeId */
  "data-v-35f4c6a8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(166)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(182),
  /* scopeId */
  "data-v-5a13bfa5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(165)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(181),
  /* scopeId */
  "data-v-54851580",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(162)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(178),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(163)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(179),
  /* scopeId */
  "data-v-42dcfeec",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "data-container"
  }, [(!_vm.isError) ? [_c('span', {
    staticClass: "back",
    on: {
      "click": function($event) {
        _vm.goBack()
      }
    }
  }, [_vm._v("< 返回")]), _vm._v(" "), _c('h2', [_vm._v(_vm._s(_vm.qsItem.title))]), _vm._v(" "), _c('p', [_vm._v("此统计分析只包含完整回收的数据(数据皆为自制数据模拟来mock数据)")])] : _vm._e(), _vm._v(" "), (!_vm.isError) ? _c('div', {
    staticClass: "content"
  }, [_vm._l((_vm.qsItem.question), function(item, index) {
    return [_c('div', {
      staticClass: "content-item"
    }, [_c('div', {
      staticClass: "item-left"
    }, [_c('p', [_vm._v(_vm._s(item.num) + "   " + _vm._s(item.title))]), _vm._v(" "), _vm._l((item.options), function(option) {
      return _c('p', {
        staticClass: "option"
      }, [_vm._v(_vm._s(option))])
    })], 2), _vm._v(" "), (item.type === 'radio') ? _c('div', {
      staticClass: "item-right"
    }, [_c('p', [_vm._v("数据占比")]), _vm._v(" "), _vm._l((item.options), function(option, index) {
      return [_c('div', {
        staticClass: "progress-bar"
      }, [(_vm.renderProgressMath(item.options.length, index) !== '0%') ? _c('div', {
        staticClass: "bar-inner",
        style: ({
          width: _vm.renderProgressMath(item.options.length, index)
        })
      }) : _vm._e()]), _vm._v(" "), _c('span', {
        staticClass: "percent"
      }, [_vm._v(_vm._s(_vm.renderProgressMath(item.options.length, index)))])]
    })], 2) : (item.type === 'textarea') ? _c('div', {
      staticClass: "item-right"
    }, [_c('p', [_vm._v("有效回答占比")]), _vm._v(" "), _c('div', {
      staticClass: "progress-bar"
    }, [_c('div', {
      staticClass: "bar-inner",
      style: ({
        width: '85%'
      })
    })]), _vm._v(" "), _c('span', {
      staticClass: "percent"
    }, [_vm._v("85%")])]) : _c('div', {
      staticClass: "item-right"
    }, [_c('p', [_vm._v("数据占比")]), _vm._v(" "), _c('div', {
      attrs: {
        "id": ("chart-" + (item.num))
      }
    })])])]
  })], 2) : _vm._e(), _vm._v(" "), (_vm.isError) ? _c('div', {
    staticClass: "error"
  }, [_vm._v("\n    404 Not Found\n  ")]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "edit-container"
  }, [(!_vm.titleChange) ? _c('h2', {
    on: {
      "click": _vm.titleClick
    }
  }, [_vm._v(_vm._s(_vm.qsItem.title))]) : _vm._e(), _vm._v(" "), (_vm.titleChange) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.titleValue),
      expression: "titleValue"
    }],
    ref: "titleInput",
    attrs: {
      "type": "text",
      "name": "qsTitle"
    },
    domProps: {
      "value": (_vm.titleValue)
    },
    on: {
      "blur": _vm.onblur,
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.onsubmit($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.titleValue = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._l((_vm.qsItem.question), function(qs, index) {
    return _c('div', {
      staticClass: "questions"
    }, [_c('div', {
      staticClass: "qs-left"
    }, [_c('p', {
      staticClass: "qs-title"
    }, [_vm._v("\n          " + _vm._s(qs.num) + " " + _vm._s(qs.title) + " " + _vm._s(_vm.getMsg(qs)) + "\n        ")]), _vm._v(" "), _vm._l((qs.options), function(option) {
      return _c('p', {
        staticClass: "option"
      }, [_c('label', [(qs.type === 'radio') ? _c('input', {
        attrs: {
          "type": "radio",
          "name": ((qs.num) + "-" + (qs.title))
        }
      }) : _vm._e(), _vm._v(" "), (qs.type === 'checkbox') ? _c('input', {
        attrs: {
          "type": "checkbox",
          "name": ((qs.num) + "-" + (qs.title))
        }
      }) : _vm._e(), _vm._v(_vm._s(option) + "\n          ")])])
    }), _vm._v(" "), (qs.type === 'textarea') ? _c('textarea') : _vm._e()], 2), _vm._v(" "), _c('div', {
      staticClass: "qs-right"
    }, [_c('label', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (qs.isNeed),
        expression: "qs.isNeed"
      }],
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "value": qs.isNeed,
        "checked": Array.isArray(qs.isNeed) ? _vm._i(qs.isNeed, qs.isNeed) > -1 : (qs.isNeed)
      },
      on: {
        "change": function($event) {
          var $$a = qs.isNeed,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = qs.isNeed,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.$set(qs, "isNeed", $$a.concat([$$v])))
            } else {
              $$i > -1 && (_vm.$set(qs, "isNeed", $$a.slice(0, $$i).concat($$a.slice($$i + 1))))
            }
          } else {
            _vm.$set(qs, "isNeed", $$c)
          }
        }
      }
    }), _vm._v("\n        此题是否必填")]), _vm._v(" "), _c('p', [(index !== 0) ? _c('span', {
      on: {
        "click": function($event) {
          _vm.goUp(index)
        }
      }
    }, [_vm._v("上移")]) : _vm._e(), _vm._v(" "), (index !== _vm.qsItem.question.length - 1) ? _c('span', {
      on: {
        "click": function($event) {
          _vm.goDown(index)
        }
      }
    }, [_vm._v("下移")]) : _vm._e(), _vm._v(" "), _c('span', {
      on: {
        "click": function($event) {
          _vm.copy(index, qs)
        }
      }
    }, [_vm._v("复用")]), _vm._v(" "), _c('span', {
      on: {
        "click": function($event) {
          _vm.del(index)
        }
      }
    }, [_vm._v("删除")])])])])
  }), _vm._v(" "), _c('div', {
    staticClass: "add"
  }, [_c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [(_vm.showBtn) ? _c('div', {
    staticClass: "add-option"
  }, [_c('button', {
    on: {
      "click": _vm.addRadio
    }
  }, [_vm._v("单选")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.addCheckbox
    }
  }, [_vm._v("多选")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.addTextarea
    }
  }, [_vm._v("文本框")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "add-item",
    on: {
      "click": _vm.addItemClick
    }
  }, [_c('span', {
    staticClass: "add-icon"
  }, [_vm._v("+")]), _c('span', [_vm._v("添加问题")])])], 1)], 2), _vm._v(" "), (_vm.showAddQsDialog) ? _c('div', {
    staticClass: "shadow"
  }, [_c('div', {
    staticClass: "add-qs-dialog"
  }, [_c('header', [_c('span', [_vm._v("提示")]), _vm._v(" "), _c('span', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        _vm.showAddQsDialog = false
      }
    }
  }, [_vm._v("X")])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.info))]), _vm._v(" "), _c('label', [_vm._v("输入题目标题"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.qsInputTitle),
      expression: "qsInputTitle"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.qsInputTitle)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.qsInputTitle = $event.target.value
      }
    }
  })]), _vm._v(" "), (_vm.showAddOptionInput) ? _c('label', [_vm._v("输入选项"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.qsInputOptions),
      expression: "qsInputOptions"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.qsInputOptions)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.qsInputOptions = $event.target.value
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "btn-box"
  }, [_c('button', {
    staticClass: "yes",
    on: {
      "click": _vm.validateAddQs
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
    on: {
      "click": function($event) {
        _vm.showAddQsDialog = false
      }
    }
  }, [_vm._v("取消")])])])]) : _vm._e(), _vm._v(" "), (_vm.showDialog) ? _c('div', {
    staticClass: "shadow"
  }, [_c('div', {
    staticClass: "dialog"
  }, [_c('header', [_c('span', [_vm._v("提示")]), _vm._v(" "), _c('span', {
    staticClass: "close-btn",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("X")])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.info))]), _vm._v(" "), _c('div', {
    staticClass: "btn-box"
  }, [_c('button', {
    staticClass: "yes",
    on: {
      "click": function($event) {
        _vm.iterator.next()
      }
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("取消")])])])]) : _vm._e(), _vm._v(" "), _c('footer', [_c('span', [_vm._v("问卷截止日期")]), _vm._v(" "), _c('calendar-input', {
    attrs: {
      "showCalendar": false,
      "limit": _vm.limit
    },
    on: {
      "getValue": _vm.getValue
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn-box"
  }, [_c('button', {
    staticClass: "save",
    on: {
      "click": function($event) {
        _vm.iterator = _vm.save();
        _vm.iterator.next()
      }
    }
  }, [_vm._v("保存问卷")]), _vm._v(" "), _c('button', {
    staticClass: "issue",
    on: {
      "click": function($event) {
        _vm.iterator = _vm.issueQs();
        _vm.iterator.next()
      }
    }
  }, [_vm._v("发布问卷")])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "calendar-input-container orange-theme",
    style: (_vm.containerStyle)
  }, [_c('label', {
    attrs: {
      "for": "calendar-input"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectValue),
      expression: "selectValue"
    }],
    ref: "mainInput",
    staticClass: "calendar-input",
    class: {
      focus: _vm.isfocus
    },
    attrs: {
      "type": "text",
      "readonly": "readonly"
    },
    domProps: {
      "value": (_vm.selectValue)
    },
    on: {
      "click": _vm.focus,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.selectValue = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.changeShowCalendar),
      expression: "changeShowCalendar"
    }],
    attrs: {
      "id": "calendar"
    }
  }, [_c('div', {
    attrs: {
      "id": "calendar-header"
    }
  }, [_c('span', {
    staticClass: "arrow",
    on: {
      "click": _vm.subMonth
    }
  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
    attrs: {
      "id": "date-box"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.trueSelectYear) + "年" + _vm._s(_vm.trueSelectMonth) + "月\n        ")]), _vm._v(" "), _c('span', {
    staticClass: "arrow",
    on: {
      "click": _vm.addMonth
    }
  }, [_vm._v(">")])]), _vm._v(" "), _c('div', {
    staticClass: "week"
  }, _vm._l((_vm.week), function(item, index) {
    return _c('span', {
      class: {
        weekend: index === 0 || index === 6
      }
    }, [_vm._v("\n          " + _vm._s(item) + "\n        ")])
  })), _vm._v(" "), _c('div', {
    staticClass: "days"
  }, _vm._l((_vm.renderData), function(item, index) {
    return _c('span', {
      class: {
        weekend: index % 7 === 0 || index % 7 === 6,
          unselect: _vm.unselectArr.includes(index),
          select: index === _vm.firstDayInWeek + _vm.trueSelectDay - 1
      },
      on: {
        "click": function($event) {
          _vm.changeSelectDay(index)
        }
      }
    }, [_vm._v("\n          " + _vm._s(item) + "\n        ")])
  }))])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("问卷管理")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("我的问卷")])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('v-header'), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qs-list"
  }, [(_vm.qsList.length == 0 ? false : true) ? _c('ul', [_c('li'), _vm._v(" "), _c('li', [_vm._v("标题")]), _vm._v(" "), _c('li', [_vm._v("截止时间")]), _vm._v(" "), _c('li', [_vm._v("状态")]), _vm._v(" "), _c('li', [_vm._v("操作"), _c('span', {
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'qsEdit',
          params: {
            num: 0
          }
        })
      }
    }
  }, [_vm._v("+新建问卷")])])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.qsList), function(item) {
    return [_c('ul', [_c('li', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.checked),
        expression: "item.checked"
      }],
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(item.checked) ? _vm._i(item.checked, null) > -1 : (item.checked)
      },
      on: {
        "change": function($event) {
          var $$a = item.checked,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.$set(item, "checked", $$a.concat([$$v])))
            } else {
              $$i > -1 && (_vm.$set(item, "checked", $$a.slice(0, $$i).concat($$a.slice($$i + 1))))
            }
          } else {
            _vm.$set(item, "checked", $$c)
          }
        }
      }
    })]), _vm._v(" "), _c('li', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(item.time))]), _vm._v(" "), _c('li', {
      class: item.state === 'inissue' ? 'inissue' : ''
    }, [_vm._v(_vm._s(item.stateTitle))]), _vm._v(" "), _c('li', [_c('button', {
      on: {
        "click": function($event) {
          _vm.iterator = _vm.edit(item);
          _vm.iterator.next()
        }
      }
    }, [_vm._v("编辑")]), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.iterator = _vm.delItem(item.num);
          _vm.iterator.next()
        }
      }
    }, [_vm._v("删除")]), _vm._v(" "), _c('router-link', {
      attrs: {
        "to": ("/fill/" + (item.num)),
        "tag": "button"
      }
    }, [_vm._v("查看问卷")]), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.iterator = _vm.watchData(item);
          _vm.iterator.next()
        }
      }
    }, [_vm._v("查看数据")])], 1)])]
  }), _vm._v(" "), (_vm.qsList.length == 0 ? false : true) ? _c('div', {
    staticClass: "list-bottom"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectAll),
      expression: "selectAll"
    }],
    attrs: {
      "type": "checkbox",
      "id": "all-check"
    },
    domProps: {
      "checked": Array.isArray(_vm.selectAll) ? _vm._i(_vm.selectAll, null) > -1 : (_vm.selectAll)
    },
    on: {
      "change": function($event) {
        var $$a = _vm.selectAll,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.selectAll = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.selectAll = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.selectAll = $$c
        }
      }
    }
  }), _vm._v("全选")]), _vm._v(" "), _c('button', {
    on: {
      "click": function($event) {
        _vm.iterator = _vm.delItems();
        _vm.iterator.next()
      }
    }
  }, [_vm._v("删除")])]) : _vm._e(), _vm._v(" "), (_vm.qsList.length === 0) ? _c('div', {
    staticClass: "add-qs"
  }, [_c('button', {
    staticClass: "add-btn",
    on: {
      "click": function($event) {
        _vm.$router.push({
          name: 'qsEdit',
          params: {
            num: 0
          }
        })
      }
    }
  }, [_vm._v("+  新建问卷")])]) : _vm._e(), _vm._v(" "), (_vm.showDialog) ? _c('div', {
    staticClass: "shadow"
  }, [_c('div', {
    staticClass: "del-dialog"
  }, [_c('header', [_c('span', [_vm._v("提示")]), _vm._v(" "), _c('span', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        _vm.showDialog = false
      }
    }
  }, [_vm._v("X")])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.info))]), _vm._v(" "), _c('div', {
    staticClass: "btn-box"
  }, [_c('button', {
    staticClass: "yes",
    on: {
      "click": function($event) {
        _vm.iterator.next();
      }
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
    on: {
      "click": function($event) {
        _vm.showDialog = false
      }
    }
  }, [_vm._v("取消")])])])]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fill-container"
  }, [(!_vm.isError) ? _c('div', {
    staticClass: "fill"
  }, [_c('router-link', {
    staticClass: "back",
    attrs: {
      "to": "/",
      "tag": "span"
    }
  }, [_vm._v("< 返回")]), _vm._v(" "), _c('h2', [_vm._v(_vm._s(_vm.qsItem.title))]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.qsItem.question), function(item) {
    return _c('div', {
      staticClass: "content-item"
    }, [_c('p', {
      staticClass: "qs-title"
    }, [_vm._v("\n          " + _vm._s(item.num) + " " + _vm._s(item.title) + " " + _vm._s(_vm.getMsg(item)) + "\n        ")]), _vm._v(" "), _vm._l((item.options), function(option) {
      return _c('p', {
        staticClass: "option"
      }, [_c('label', [(item.type === 'radio') ? _c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (_vm.requiredItem[item.num]),
          expression: "requiredItem[item.num]"
        }],
        attrs: {
          "type": "radio",
          "name": ((item.num) + "-" + (item.title))
        },
        domProps: {
          "value": option,
          "checked": _vm._q(_vm.requiredItem[item.num], option)
        },
        on: {
          "change": function($event) {
            _vm.$set(_vm.requiredItem, item.num, option)
          }
        }
      }) : _vm._e(), _vm._v(" "), (item.type === 'checkbox') ? _c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (_vm.requiredItem[item.num]),
          expression: "requiredItem[item.num]"
        }],
        attrs: {
          "type": "checkbox",
          "name": ((item.num) + "-" + (item.title))
        },
        domProps: {
          "value": option,
          "checked": Array.isArray(_vm.requiredItem[item.num]) ? _vm._i(_vm.requiredItem[item.num], option) > -1 : (_vm.requiredItem[item.num])
        },
        on: {
          "change": function($event) {
            var $$a = _vm.requiredItem[item.num],
              $$el = $event.target,
              $$c = $$el.checked ? (true) : (false);
            if (Array.isArray($$a)) {
              var $$v = option,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && (_vm.$set(_vm.requiredItem, item.num, $$a.concat([$$v])))
              } else {
                $$i > -1 && (_vm.$set(_vm.requiredItem, item.num, $$a.slice(0, $$i).concat($$a.slice($$i + 1))))
              }
            } else {
              _vm.$set(_vm.requiredItem, item.num, $$c)
            }
          }
        }
      }) : _vm._e(), _vm._v(_vm._s(option) + "\n          ")])])
    }), _vm._v(" "), (item.type === 'textarea') ? _c('textarea', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.requiredItem[item.num]),
        expression: "requiredItem[item.num]"
      }],
      domProps: {
        "value": (_vm.requiredItem[item.num])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(_vm.requiredItem, item.num, $event.target.value)
        }
      }
    }) : _vm._e()], 2)
  })), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.showDialog) ? _c('div', {
    staticClass: "dialog"
  }, [(_vm.submitError) ? _c('div', {
    staticClass: "submit-dialog"
  }, [_c('header', [_c('span', [_vm._v("提示")]), _vm._v(" "), _c('span', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        _vm.showDialog = false
      }
    }
  }, [_vm._v("X")])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.info))]), _vm._v(" "), _c('div', {
    staticClass: "btn-box"
  }, [_c('button', {
    staticClass: "yes",
    on: {
      "click": function($event) {
        _vm.showDialog = false
      }
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
    on: {
      "click": function($event) {
        _vm.showDialog = false
      }
    }
  }, [_vm._v("取消")])])]) : _c('div', {
    staticClass: "submit-dialog"
  }, [_c('header', [_c('span', [_vm._v("提示")]), _vm._v(" "), _c('span', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        _vm.showDialog = false
      }
    }
  }, [_vm._v("X")])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.info))])])]) : _vm._e()]), _vm._v(" "), _c('footer', [_c('button', {
    staticClass: "submit",
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")])])], 1) : _c('div', {
    staticClass: "error"
  }, [_vm._v("\n    404 Not Found\n  ")])])
},staticRenderFns: []}

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const STORAGE_KEY = 'questionnaire';

/* harmony default export */ __webpack_exports__["a"] = ({
  get(key = STORAGE_KEY) {
    return JSON.parse(window.localStorage.getItem(key)); //将json字符串转换为对象
  },
  save(items, key = STORAGE_KEY) {
    window.localStorage.setItem(key, JSON.stringify(items)); //从对象中解析出json字符串
  }
});

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_QS_list__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_QS_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_QS_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_QS_data__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_QS_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_QS_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_QS_fill__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_QS_fill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_QS_fill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_QS_edit__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_QS_edit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_QS_edit__);







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'qsList',
    component: __WEBPACK_IMPORTED_MODULE_2__components_QS_list___default.a
  }, {
    path: '/data/:num',
    name: 'qsData',
    component: __WEBPACK_IMPORTED_MODULE_3__components_QS_data___default.a
  }, {
    path: '/fill/:num',
    name: 'qsFill',
    component: __WEBPACK_IMPORTED_MODULE_4__components_QS_fill___default.a
  }, {
    path: '/edit/:num',
    name: 'qsEdit',
    component: __WEBPACK_IMPORTED_MODULE_5__components_QS_edit___default.a
  }]
}));

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(164)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(180),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_public_header__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_public_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_public_header__);
//
//
//
//
//
//
//

/**
 * description app.vue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    vHeader: __WEBPACK_IMPORTED_MODULE_0__components_public_header___default.a
  }
});

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_echarts_lib_echarts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_echarts_lib_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_pie__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_pie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_pie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts_lib_component_tooltip__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts_lib_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_echarts_lib_component_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_echarts_lib_component_toolbox__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_echarts_lib_component_toolbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_echarts_lib_component_toolbox__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/**
 * A module that define qs-data router view
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'qsData',
  data() {
    return {
      qsItem: {},
      qsList: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].get(),
      isError: false,
      chartData: [],
      chartNum: []
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.renderChartData();
    this.chartNum.forEach((chartNum, index) => {
      this.renderEChart(chartNum, this.chartData[index]);
    });
  },
  methods: {
    fetchData() {
      let i = 0;
      for (let length = this.qsList.length; i < length; i++) {
        if (this.qsList[i].num == this.$route.params.num) {
          this.qsItem = this.qsList[i];
          break;
        }
      }
      if (i === this.qsList.length) this.isError = true;
    },
    renderProgressMath(length, index) {
      if (length < 2) return '100%';
      if (length >= 2) {
        if (index === 0) {
          return '85%';
        } else if (index === 1) {
          return '15%';
        } else {
          return '0%';
        }
      }
    },
    renderChartData() {
      this.qsItem.question.forEach(item => {
        if (item.type === 'checkbox') {
          let value = 0;
          let sum = 0;
          let data = [];
          let length = item.options.length;

          this.chartNum.push(item.num);

          item.options.forEach((optionName, index) => {
            if (index == length - 1) {
              value = 1000 - sum;
            } else {
              value = Math.floor(Math.random() * (1001 - sum));
              sum += value;
            }
            data.push({ value: value, name: optionName });
          });
          this.chartData.push(data);
        }
      });
    },
    renderEChart(chartNum, chartData) {
      let myChart = __WEBPACK_IMPORTED_MODULE_1_echarts_lib_echarts___default.a.init(document.getElementById(`chart-${chartNum}`));
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}选择人次 : {c} ({d}%)"
        },
        series: [{
          name: '数据占比',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: chartData
        }],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      };

      let currentIndex = -1;

      setInterval(function () {
        var dataLen = option.series[0].data.length;

        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen;

        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex
        });

        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 1000);

      myChart.setOption(option);
    },
    goBack() {
      this.$router.push({ path: '/' });
    }
  },
  watch: {
    '$route': 'fetchData'
  }
});

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_input__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__calendar_input__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/**
 * A module that define qs-edit view
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'qsEdit',
  components: {
    calendarInput: __WEBPACK_IMPORTED_MODULE_1__calendar_input___default.a
  },
  data() {
    return {
      qsItem: {},
      qsList: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].get(),
      isError: false,
      showBtn: false,
      titleChange: false,
      titleValue: '',
      showAddQsDialog: false,
      showAddOptionInput: true,
      qsInputTitle: '',
      qsInputOptions: [],
      info: '',
      selectTime: '',
      addOptionType: '',
      limit: {},
      showDialog: false,
      iterator: {},
      isGoIndex: false
    };
  },
  beforeRouteEnter(to, from, next) {
    let num = to.params.num;
    let theItem = {};
    if (num != 0) {
      let length = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].get().length;
      if (num < 0 || num > length) {
        alert('非法路由!');
        next('/');
      } else {
        for (let i = 0; i < length; i++) {
          if (__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].get()[i].num == num) {
            theItem = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].get()[i];
            break;
          }
        }
      }
      if (theItem.state === 'noissue') {
        next();
      } else {
        alert('非法路由');
        next('/');
      }
    } else {
      next();
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.limit = {
        minYear: new Date().getFullYear(),
        minMonth: new Date().getMonth() + 1,
        minDay: new Date().getDate(),
        maxYear: 2030,
        maxMonth: 3,
        maxDay: 20
      };
      if (this.$route.params.num == 0) {
        let item = {};
        item.num = this.qsList.length + 1;
        item.title = '这里是标题';
        item.time = '';
        item.state = 'noissue';
        item.question = [];
        item.stateTitle = '未发布';
        item.checked = false;
        this.qsItem = item;
        this.qsList.push(this.qsItem);
      } else {
        let i = 0;
        for (let length = this.qsList.length; i < length; i++) {
          if (this.qsList[i].num == this.$route.params.num) {
            this.qsItem = this.qsList[i];
            break;
          }
        }
        if (i === this.qsList.length) this.isError = true;
      }
    },
    getMsg(item) {
      let msg = '';
      if (item.type === 'radio') {
        msg = '(单选题)';
      } else if (item.type === 'checkbox') {
        msg = '(多选题)';
      } else {
        msg = '(文本题)';
      }

      return item.isNeed ? `${msg} *` : msg;
    },
    onblur() {
      this.titleValue = this.titleValue.trim();
      this.qsItem.title = this.titleValue === '' ? this.qsItem.title : this.titleValue;
      this.titleChange = false;
    },
    onsubmit() {
      this.titleValue = this.titleValue.trim();
      this.qsItem.title = this.titleValue === '' ? this.qsItem.title : this.titleValue;
      this.titleChange = false;
    },
    titleClick() {
      this.titleChange = !this.titleChange;
      setTimeout(() => {
        this.$refs.titleInput.focus();
      }, 150);
    },
    swapItems(oldIndex, newIndex) {
      let [newVal] = this.qsItem.question.splice(newIndex, 1, this.qsItem.question[oldIndex]);
      this.qsItem.question.splice(oldIndex, 1, newVal);
    },
    goUp(index) {
      this.swapItems(index, index - 1);
    },
    goDown(index) {
      this.swapItems(index, index + 1);
    },
    copy(index, qs) {
      if (this.questionLength === 10) return alert('问卷题目已满！');
      qs = Object.assign({}, qs); //花括号叫目标对象，后面的obj是源对象。对象合并是指：将源对象里面的属性添加到目标对象中去
      this.qsItem.question.splice(index, 0, qs); //在index下标处添加一项qs
    },
    del(index) {
      this.qsItem.question.splice(index, 1);
    },
    addItemClick() {
      if (this.showBtn === false) {
        this.questionLength === 10 ? alert('问卷题目已满！') : this.showBtn = !this.showBtn;
      } else {
        this.showBtn = !this.showBtn;
      }
    },
    showAddDialog(msg, showOption) {
      this.showAddQsDialog = true;
      this.showAddOptionInput = showOption;
      this.info = msg;
      this.qsInputTitle = '';
      this.qsInputOptions = '';
    },
    addRadio() {
      if (this.questionLength === 10) return alert('问卷题目已满！');
      this.showAddDialog('分别在下面的输入框中输入问题的名称以及选项, 选项用半角逗号","分隔开', true);
      this.addOptionType = 'radio';
    },
    addCheckbox() {
      if (this.questionLength === 10) return alert('问卷题目已满！');
      this.showAddDialog('分别在下面的输入框中输入问题的名称以及选项, 选项用半角逗号","分隔开', true);
      this.addOptionType = 'checkbox';
    },
    addTextarea() {
      if (this.questionLength === 10) return alert('问卷题目已满！');
      this.showAddDialog('在输入框中输入问题名称', false);
      this.addOptionType = 'textarea';
    },
    validateAddQs() {
      let qsTitle = this.qsInputTitle.trim();
      if (qsTitle === '') return alert('题目不能为空');
      if (this.showAddOptionInput) {
        let qsOptions = this.qsInputOptions.trim();
        if (qsOptions === '') return alert('选项不能为空！');
        qsOptions = qsOptions.split(',');
        for (let i = 0, length = qsOptions.length; i < length; i++) {
          if (qsOptions[i].trim() === '') {
            return alert('存在某个选项内容为空');
          }
        }
        this.qsItem.question.push({
          'num': this.qsItem.question.length - 1,
          'title': qsTitle,
          'type': this.addOptionType,
          'isNeed': true,
          'options': qsOptions
        });
        this.showAddQsDialog = false;
      } else {
        this.qsItem.question.push({
          'num': this.qsItem.question.length - 1,
          'title': qsTitle,
          'type': 'textarea',
          'isNeed': true
        });
        this.showAddQsDialog = false;
      }
    },
    getValue(selectTime) {
      this.selectTime = selectTime;
      this.qsItem.time = this.selectTime;
    },
    *save() {
      this.showDialog = true;
      this.info = '确认保存?';
      yield;
      if (this.qsItem.question.length === 0) {
        this.showDialog = false;
        alert('问卷为空无法保存');
      } else {
        __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].save(this.qsList);
        this.info = '是否发布?';
        this.isGoIndex = true;
      }

      yield;
      this.qsItem.state = 'inissue';
      this.qsItem.stateTitle = '发布中';
      __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].save(this.qsList);
      this.showDialog = false;
      this.$router.push({ path: '/' });
    },
    *issueQs() {
      this.showDialog = true;
      this.info = '确认发布?';
      yield;
      if (this.qsItem.question.length === 0) {
        this.showDialog = false;
        alert('问卷为空无法保存');
      } else {
        this.qsItem.state = 'inissue';
        this.qsItem.stateTitle = '发布中';
        __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].save(this.qsList);
        this.showDialog = false;
        this.$router.push({ path: '/' });
      }
    },
    cancel() {
      this.showDialog = false;
      if (this.isGoIndex === true) {
        this.$router.push({ path: '/' });
      }
    }
  },
  computed: {
    questionLength() {
      return this.qsItem.question.length;
    }
  },
  watch: {
    '$route': 'fetchData',
    qsItem: {
      handler(newVal) {
        newVal.question.forEach((item, index) => {
          item.num = `Q${index + 1}`;
        });
      },
      deep: true
    }
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(27);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/**
 * A module that define qs-fill router view
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'qsFill',
  data() {
    return {
      qsItem: [],
      qsList: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].get(),
      isError: false,
      showDialog: false,
      info: '',
      submitError: false,
      requiredItem: {}
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.getRequiredItem();
  },
  methods: {
    fetchData() {
      let i = 0;
      for (let length = this.qsList.length; i < length; i++) {
        if (this.qsList[i].num == this.$route.params.num) {
          this.qsItem = this.qsList[i];
          break;
        }
      }
      if (i === this.qsList.length) this.isError = true;
    },
    getMsg(item) {
      let msg = '';
      if (item.type === 'radio') {
        msg = '(单选题)';
      } else if (item.type === 'checkbox') {
        msg = '(多选题)';
      } else {
        msg = '(文本题)';
      }

      return item.isNeed ? `${msg} *` : msg;
    },
    submit() {
      if (this.qsItem.state === 'inissue') {
        let result = this.validate();
        if (result) {
          this.showDialog = true;
          this.submitError = false;
          this.info = '提交成功！';
          setTimeout(() => {
            this.showDialog = false;
          }, 500);
          setTimeout(() => {
            this.$router.push({ path: '/' });
          }, 1500);
        } else {
          this.showDialog = true;
          this.submitError = true;
          this.info = '提交失败！ 存在必填项未填';
        }
      } else {
        this.showDialog = true;
        this.submitError = true;
        this.info = '提交失败！ 只有发布中的问卷才能提交';
      }
    },
    getRequiredItem() {
      this.qsItem.question.forEach(item => {
        if (item.isNeed) {
          if (item.isNeed) {
            if (item.type === 'checkbox') {
              this.requiredItem[item.num] = [];
            } else {
              this.requiredItem[item.num] = '';
            }
          }
        }
      });
    },
    validate() {
      for (let i in this.requiredItem) {
        if (this.requiredItem[i].length === 0) return false;
      }
      return true;
    }
  },
  watch: {
    '$route': 'fetchData'
  }
});

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(27);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/**
 * A module that define qs-list router view
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'qsList',
  data() {
    return {
      qsList: [],
      showDialog: false,
      iterator: {},
      info: ''
    };
  },
  mounted() {
    if (__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].get() !== null) {
      this.qsList = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].get();
      this.qsList.forEach(item => {
        let [year, month, day] = item.time.split('-');
        if (year < new Date().getFullYear()) {
          item.state = 'issueed';
          item.stateTitle = '已发布';
        } else if (year == new Date().getFullYear() && month < new Date().getMonth() + 1) {
          item.state = 'issueed';
          item.stateTitle = '已发布';
        } else if (year == new Date().getFullYear() && month == new Date().getMonth() + 1 && day < new Date().getDate()) {
          item.state = 'issueed';
          item.stateTitle = '已发布';
        }
      });
    } else {
      __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].save([{ 'num': 1,
        'title': '第一份问卷',
        'time': '2030-1-1',
        'state': 'inissue',
        'stateTitle': '发布中',
        'checked': false,
        'question': [{ 'num': 'Q1', 'title': '单选题', 'type': 'radio', 'isNeed': true, 'options': ['选项一', '选项二'] }, { 'num': 'Q2', 'title': '多选题', 'type': 'checkbox', 'isNeed': true, 'options': ['选项一', '选项二', '选项三', '选项四'] }, { 'num': 'Q3', 'title': '文本题', 'type': 'textarea', 'isNeed': true }]
      }, { 'num': 2,
        'title': '第二份问卷',
        'time': '2030-1-1',
        'state': 'noissue',
        'stateTitle': '未发布',
        'checked': false,
        'question': [{ 'num': 'Q1', 'title': '单选题', 'type': 'radio', 'isNeed': true, 'options': ['选项一', '选项二'] }, { 'num': 'Q2', 'title': '多选题', 'type': 'checkbox', 'isNeed': true, 'options': ['选项一', '选项二', '选项三', '选项四'] }, { 'num': 'Q3', 'title': '文本题', 'type': 'textarea', 'isNeed': true }]
      }, { 'num': 3,
        'title': '第三份问卷',
        'time': '2017-3-27',
        'state': 'issueed',
        'stateTitle': '已发布',
        'checked': false,
        'question': [{ 'num': 'Q1', 'title': '单选题', 'type': 'radio', 'isNeed': true, 'options': ['选项一', '选项二'] }, { 'num': 'Q2', 'title': '多选题', 'type': 'checkbox', 'isNeed': true, 'options': ['选项一', '选项二', '选项三', '选项四'] }, { 'num': 'Q3', 'title': '文本题', 'type': 'textarea', 'isNeed': true }]
      }]);
      this.qsList = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].get();
    }
  },
  methods: {
    showDialogMsg(info) {
      this.showDialog = true;
      this.info = info;
    },
    *delItem(num) {
      yield this.showDialogMsg('确认要删除此问卷？');

      yield (() => {
        let index = 0;
        for (let length = this.qsList.length; index < length; index++) {
          if (this.qsList[index].num === num) break;
        }
        this.qsList.splice(index, 1); //delete the index element
        this.showDialog = false;
      })();
    },
    *delItems() {
      yield this.showDialogMsg('确认要删除选中的问卷？');

      yield (() => {
        this.showDialog = false;
        if (this.selectAll) {
          this.qsList = [];
          return;
        }
        if (this.selectGroup == []) return;

        this.selectGroup.forEach(item => {
          if (this.qsList.indexOf(item) > -1) this.qsList.splice(this.qsList.indexOf(item), 1);
        });
      })();
    },
    *edit(item) {
      yield (() => {
        if (item.state === 'noissue') {
          this.showDialogMsg('确认要编辑？');
        } else {
          this.showDialogMsg('只有未发布的问卷才能编辑');
        }
      })();
      yield (() => {
        if (item.state !== 'noissue') {
          this.showDialog = false;
        } else {
          this.showDialog = false;
          this.$router.push({ name: 'qsEdit', params: { num: item.num } });
        }
      })();
    },
    *watchData(item) {
      yield (() => {
        if (item.state === 'noissue') {
          this.showDialogMsg('未发布的问卷无数据可查看');
        } else {
          this.$router.push({ name: 'qsData', params: { num: item.num } });
        }
      })();
      yield this.showDialog = false;
    }
  },
  computed: {
    selectAll: {
      get() {
        return this.selectCount === this.qsList.length && this.selectCount !== 0;
      },
      set(value) {
        this.qsList.forEach(item => {
          item.checked = value;
        });
        return value;
      }
    },
    selectCount() {
      let i = 0;
      this.qsList.forEach(item => {
        if (item.checked) i++;
      });
      return i;
    },
    selectGroup() {
      let group = [];
      this.qsList.forEach(item => {
        if (item.checked) group.push(item);
      });
      return group;
    }
  },
  watch: {
    qsList: {
      handler(val) {
        val.forEach((item, index) => {
          item.num = index + 1;
        });
        __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].save(val);
      },
      deep: true
    }
  }
});

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'calendar-input',
  props: {
    show: { //是否显示组件
      type: Boolean,
      default: true
    },
    limit: { //日期可选范围
      type: Object,
      default() {
        return {
          minYear: 1900,
          minMonth: 1,
          minDay: 1,
          maxYear: 2030,
          maxMonth: 3,
          maxDay: 20
        };
      }
    },
    showCalendar: { //是否显示日历
      type: Boolean,
      default: true
    },
    containerStyle: { //组件容器样式
      type: Object
    }
  },
  data() {
    return {
      isfocus: false,
      changeShowCalendar: this.showCalendar,
      week: ["日", "一", "二", "三", "四", "五", "六"],
      date: new Date(),
      selectYear: new Date().getFullYear(),
      selectMonth: new Date().getMonth() + 1,
      selectDay: new Date().getDate()
    };
  },
  methods: {
    focus() {
      this.isfocus = !this.isfocus;
      this.changeShowCalendar = !this.changeShowCalendar;
    },
    subMonth() {
      if (this.selectMonth === 1) {
        this.selectMonth = 12;
        this.selectYear -= 1;
      } else {
        this.selectMonth -= 1;
      }
      if (this.selectYear < this.limit.minYear) this.selectYear = this.limit.minYear;
      if (this.selectYear === this.limit.minYear) {
        if (this.selectMonth <= this.limit.minMonth) {
          this.selectMonth = this.limit.minMonth;
        }
      }
    },
    addMonth() {
      if (this.selectMonth === 12) {
        this.selectMonth = 1;
        this.selectYear += 1;
      } else {
        this.selectMonth += 1;
      }
      if (this.selectYear > this.limit.maxYear) this.selectYear = this.limit.maxYear;
      if (this.selectYear === this.limit.maxYear) {
        if (this.selectMonth >= this.limit.maxMonth) {
          this.selectMonth = this.limit.maxMonth;
        }
      }
    },
    changeSelectDay(index) {
      if (this.unselectArr.includes(index)) return false;
      this.selectDay = index - this.firstDayInWeek + 1;
    }
  },
  computed: {
    trueSelectYear: function () {
      if (this.selectYear < this.limit.minYear) return this.limit.minYear;
      if (this.selectYear > this.limit.maxYear) return this.limit.maxYear;
      return this.selectYear;
    },
    trueSelectMonth: function () {
      if (this.selectYear === this.limit.minYear && this.selectMonth < this.limit.minMonth) return this.limit.minMonth;
      if (this.selectYear === this.limit.maxYear && this.selectMonth > this.limit.maxMonth) return this.limit.maxMonth;
      return this.selectMonth;
    },
    trueSelectDay: function () {
      if (this.selectYear === this.limit.minYear && this.selectMonth === this.limit.minMonth && this.selectDay < this.limit.minDay) return this.limit.minDay;
      if (this.selectYear === this.limit.maxYear && this.selectMonth === this.limit.maxMonth && this.selectDay > this.limit.maxDay) return this.limit.maxDay;
      if (this.selectDay > this.dayCount) return this.dayCount;
      return this.selectDay;
    },
    selectValue: function () {
      return `${this.trueSelectYear}-${this.trueSelectMonth}-${this.trueSelectDay}`;
    },
    firstDayInWeek: function () {
      return new Date(this.trueSelectYear, this.trueSelectMonth - 1, 1).getDay();
    },
    dayCount: function () {
      return new Date(this.trueSelectYear, this.trueSelectMonth, 0).getDate();
    },
    lastMonthDay: function () {
      let lastNum = this.firstDayInWeek;
      let lastDays = [];
      if (lastNum === 0) return lastDays;

      let i = 0;
      let lastDayNum = new Date(this.trueSelectYear, this.trueSelectMonth - 1, 0).getDate();
      for (; i < lastNum; i++) {
        lastDays.unshift(lastDayNum);
        lastDayNum--;
      }
      return lastDays;
    },
    nextMonthDay: function () {
      let num = 42 - this.firstDayInWeek - this.dayCount;
      let nextDays = [];
      if (num === 0) return nextDays;

      let i = 1;
      for (; i <= num; i++) {
        nextDays.push(i);
      }
      return nextDays;
    },
    renderData: function () {
      let nowDays = [];
      let i = 1;
      for (; i <= this.dayCount; i++) {
        nowDays.push(i);
      }
      return [...this.lastMonthDay, ...nowDays, ...this.nextMonthDay];
    },
    unselectArr: function () {

      let index = 0;
      let arr = [];

      if (this.trueSelectYear === this.limit.minYear && this.trueSelectMonth === this.limit.minMonth) {
        for (; index < this.firstDayInWeek + this.limit.minDay - 1; index++) {
          arr.push(index);
        }
      } else {
        for (; index < this.firstDayInWeek; index++) {
          arr.push(index);
        }
      }

      if (this.trueSelectYear === this.limit.maxYear && this.trueSelectMonth === this.limit.maxMonth) {
        index = this.firstDayInWeek + this.limit.maxDay;
        for (; index < 42; index++) {
          arr.push(index);
        }
      } else {
        index = this.firstDayInWeek + this.dayCount;
        for (; index < 42; index++) {
          arr.push(index);
        }
      }

      return arr;
    }
  },
  watch: {
    selectValue: function (newVal) {
      this.$emit('getValue', newVal);
    }
  },
  mounted() {
    this.$emit('getValue', this.selectValue);
  }
});

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/**
 * A module that define public header component
 * @exports header
 * @author oyh(Reusjs)
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'header'
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(87);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ })

},[96]);
//# sourceMappingURL=app.5113dce854881abcf8e0.js.map