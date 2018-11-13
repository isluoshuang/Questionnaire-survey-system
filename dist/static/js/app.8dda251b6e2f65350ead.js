webpackJsonp([1],{125:function(t,e,s){"use strict";var i=s(69),n=s(260),a=s(250),o=s.n(a),r=s(247),c=s.n(r),l=s(249),u=s.n(l),h=s(248),d=s.n(h);i.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"qsList",component:o.a},{path:"/data/:num",name:"qsData",component:c.a},{path:"/fill/:num",name:"qsFill",component:u.a},{path:"/edit/:num",name:"qsEdit",component:d.a}]})},126:function(t,e,s){s(241);var i=s(17)(s(127),s(259),null,null);t.exports=i.exports},127:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(252),n=s.n(i),a=s(33);s.n(a);e.default={name:"app",components:{vHeader:n.a}}},128:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(70),n=s(2),a=s.n(n),o=s(175),r=(s.n(o),s(209)),c=(s.n(r),s(201));s.n(c);e.default={name:"qsData",data:function(){return{qsItem:{},qsList:i.a.get(),isError:!1,chartData:[],chartNum:[]}},created:function(){this.fetchData()},mounted:function(){var t=this;this.renderChartData(),this.chartNum.forEach(function(e,s){t.renderEChart(e,t.chartData[s])})},methods:{fetchData:function(){for(var t=0,e=this.qsList.length;t<e;t++)if(this.qsList[t].num==this.$route.params.num){this.qsItem=this.qsList[t];break}t===this.qsList.length&&(this.isError=!0)},renderProgressMath:function(t,e){return t<2?"100%":t>=2?0===e?"85%":1===e?"15%":"0%":void 0},renderChartData:function(){var t=this;this.qsItem.question.forEach(function(e){if("checkbox"===e.type){var s=0,i=0,n=[],a=e.options.length;t.chartNum.push(e.num),e.options.forEach(function(t,e){e==a-1?s=1e3-i:(s=Math.floor(Math.random()*(1001-i)),i+=s),n.push({value:s,name:t})}),t.chartData.push(n)}})},renderEChart:function(t,e){var s=a.a.init(document.getElementById("chart-"+t)),i={tooltip:{trigger:"item",formatter:"{a} <br/>{b}选择人次 : {c} ({d}%)"},series:[{name:"数据占比",type:"pie",radius:"55%",center:["50%","60%"],data:e}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},n=-1;setInterval(function(){var t=i.series[0].data.length;s.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:n}),n=(n+1)%t,s.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:n}),s.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:n})},1e3),s.setOption(i)},goBack:function(){this.$router.push({path:"/"})}},watch:{$route:"fetchData"}}},129:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var i=s(72),n=s.n(i),a=s(45),o=s.n(a),r=s(138),c=s.n(r),l=s(71),u=s.n(l),h=(s(70),s(251)),d=s.n(h);e.default={name:"qsEdit",components:{calendarInput:d.a},data:function(){return{qsItem:{},qsList:[],isError:!1,showBtn:!1,titleChange:!1,titleValue:"",showAddQsDialog:!1,showAddOptionInput:!0,qsInputTitle:"",qsInputOptions:[],info:"",selectTime:"",addOptionType:"",limit:{},showDialog:!1,iterator:{},isGoIndex:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){if(this.limit={minYear:(new Date).getFullYear(),minMonth:(new Date).getMonth()+1,minDay:(new Date).getDate(),maxYear:2030,maxMonth:3,maxDay:20},0==this.$route.params.num){var e={};e.num=this.qsList.length+1,e.title="这里是标题",e.time="",e.state="noissue",e.question=[],e.stateTitle="未发布",e.checked=!1,this.qsItem=e,this.qsList.push(this.qsItem)}else{var s=this;t.ajax({type:"get",url:"../list/",data:{},dataType:"json",success:function(t){s.qsList=t;for(var e=0,i=s.qsList.length;e<i;e++)if(s.qsList[e].num==s.$route.params.num){s.qsItem=s.qsList[e];break}e===s.qsList.length&&(s.isError=!0)},error:function(t){alert("编辑出现了错误！")}})}},getMsg:function(t){var e="";return e="radio"===t.type?"(单选题)":"checkbox"===t.type?"(多选题)":"(文本题)",t.isNeed?e+" *":e},onblur:function(){this.titleValue=this.titleValue.trim(),this.qsItem.title=""===this.titleValue?this.qsItem.title:this.titleValue,this.titleChange=!1},onsubmit:function(){this.titleValue=this.titleValue.trim(),this.qsItem.title=""===this.titleValue?this.qsItem.title:this.titleValue,this.titleChange=!1},titleClick:function(){var t=this;this.titleChange=!this.titleChange,setTimeout(function(){t.$refs.titleInput.focus()},150)},swapItems:function(t,e){var s=this.qsItem.question.splice(e,1,this.qsItem.question[t]),i=u()(s,1),n=i[0];this.qsItem.question.splice(t,1,n)},goUp:function(t){this.swapItems(t,t-1)},goDown:function(t){this.swapItems(t,t+1)},copy:function(t,e){if(10===this.questionLength)return alert("问卷题目已满！");e=c()({},e),this.qsItem.question.splice(t,0,e)},del:function(t){this.qsItem.question.splice(t,1)},addItemClick:function(){!1===this.showBtn&&10===this.questionLength?alert("问卷题目已满！"):this.showBtn=!this.showBtn},showAddDialog:function(t,e){this.showAddQsDialog=!0,this.showAddOptionInput=e,this.info=t,this.qsInputTitle="",this.qsInputOptions=""},addRadio:function(){if(10===this.questionLength)return alert("问卷题目已满！");this.showAddDialog('分别在下面的输入框中输入问题的名称以及选项, 选项用半角逗号","分隔开',!0),this.addOptionType="radio"},addCheckbox:function(){if(10===this.questionLength)return alert("问卷题目已满！");this.showAddDialog('分别在下面的输入框中输入问题的名称以及选项, 选项用半角逗号","分隔开',!0),this.addOptionType="checkbox"},addTextarea:function(){if(10===this.questionLength)return alert("问卷题目已满！");this.showAddDialog("在输入框中输入问题名称",!1),this.addOptionType="textarea"},validateAddQs:function(){var t=this.qsInputTitle.trim();if(""===t)return alert("题目不能为空");if(this.showAddOptionInput){var e=this.qsInputOptions.trim();if(""===e)return alert("选项不能为空！");e=e.split(",");for(var s=0,i=e.length;s<i;s++)if(""===e[s].trim())return alert("存在某个选项内容为空");this.qsItem.question.push({num:this.qsItem.question.length-1,title:t,type:this.addOptionType,isNeed:!0,options:e}),this.showAddQsDialog=!1}else this.qsItem.question.push({num:this.qsItem.question.length-1,title:t,type:"textarea",isNeed:!0}),this.showAddQsDialog=!1},getValue:function(t){this.selectTime=t,this.qsItem.time=this.selectTime},save:n.a.mark(function e(){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.showDialog=!0,this.info="确认保存?",void(e.next=4);case 4:return 0===this.qsItem.question.length?(this.showDialog=!1,alert("问卷为空无法保存")):(s=this.qsItem,console.log("hhhhh"),console.log(s),t.ajax({type:"post",url:"../editList/",data:o()(s),contentType:"application/json; charset=UTF-8",dataType:"json",success:function(t){t.status},error:function(t){that.loading=!1,alert("新建问卷失败！")}}),this.info="是否发布?",this.isGoIndex=!0),void(e.next=7);case 7:this.qsItem.state="inissue",this.qsItem.stateTitle="发布中",s=this.qsItem,t.ajax({type:"post",url:"../editList/",data:{list:s},dataType:"json",success:function(t){t.status},error:function(t){alert("新建问卷失败！")}}),this.showDialog=!1,this.$router.push({path:"/"});case 13:case"end":return e.stop()}},e,this)}),issueQs:n.a.mark(function e(){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.showDialog=!0,this.info="确认发布?",void(e.next=4);case 4:0===this.qsItem.question.length?(this.showDialog=!1,alert("问卷为空无法保存")):(this.qsItem.state="inissue",this.qsItem.stateTitle="发布中",s=this.qsItem,t.ajax({type:"post",url:"../editList/",data:{list:s},dataType:"json",success:function(t){t.status},error:function(t){alert("新建问卷失败！")}}),this.showDialog=!1,this.$router.push({path:"/"}));case 5:case"end":return e.stop()}},e,this)}),cancel:function(){this.showDialog=!1,!0===this.isGoIndex&&this.$router.push({path:"/"})}},computed:{questionLength:function(){return this.qsItem.question.length}},watch:{$route:"fetchData",qsItem:{handler:function(t){t.question.forEach(function(t,e){t.num="Q"+(e+1)})},deep:!0}}}}.call(e,s(33))},130:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){e.default={name:"qsFill",data:function(){return{qsItem:[],qsList:[],isError:!1,showDialog:!1,info:"",submitError:!1,requiredItem:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){console.log("fetchData");var e=this;t.ajax({type:"get",url:"../list/",data:{},dataType:"json",success:function(t){console.log("pig"),console.log(t),e.qsList=t,console.log(e.qsList);for(var s=0,i=e.qsList.length;s<i;s++)if(e.qsList[s].num==e.$route.params.num){e.qsItem=e.qsList[s];break}s===e.qsList.length&&(e.isError=!0),e.qsItem.question.forEach(function(t){t.isNeed&&("checkbox"===t.type?e.requiredItem[t.num]=[]:e.requiredItem[t.num]="")})},error:function(t){alert("问卷查询出现错误")}})},getMsg:function(t){var e="";return e="radio"===t.type?"(单选题)":"checkbox"===t.type?"(多选题)":"(文本题)",t.isNeed?e+" *":e},submit:function(){var t=this;if("inissue"===this.qsItem.state){this.validate()?(this.showDialog=!0,this.submitError=!1,this.info="提交成功！",setTimeout(function(){t.showDialog=!1},500),setTimeout(function(){t.$router.push({path:"/"})},1500)):(this.showDialog=!0,this.submitError=!0,this.info="提交失败！ 存在必填项未填")}else this.showDialog=!0,this.submitError=!0,this.info="提交失败！ 只有发布中的问卷才能提交"},validate:function(){for(var t in this.requiredItem)if(0===this.requiredItem[t].length)return!1;return!0}},watch:{$route:"fetchData"}}}.call(e,s(33))},131:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var i=s(72),n=s.n(i),a=s(45),o=s.n(a),r=s(71),c=s.n(r);e.default={name:"qsList",data:function(){return{qsList:[],showDialog:!1,iterator:{},info:""}},mounted:function(){var e=this;t.ajax({type:"get",url:"../list/",data:{},dataType:"json",success:function(t){e.qsList=t,e.qsList.forEach(function(t){var e=t.time.split("-"),s=c()(e,3),i=s[0],n=s[1],a=s[2];i<(new Date).getFullYear()?(t.state="issueed",t.stateTitle="已发布"):i==(new Date).getFullYear()&&n<(new Date).getMonth()+1?(t.state="issueed",t.stateTitle="已发布"):i==(new Date).getFullYear()&&n==(new Date).getMonth()+1&&a<(new Date).getDate()&&(t.state="issueed",t.stateTitle="已发布")})},error:function(t){alert("查询出现了错误！")}})},methods:{showDialogMsg:function(t){this.showDialog=!0,this.info=t},delItem:n.a.mark(function e(s){var i=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.showDialogMsg("确认要删除此问卷？");case 2:return e.next=4,function(){for(var e=i,n=0,a=i.qsList.length;n<a&&i.qsList[n].num!==s;n++);var r={num:s},c=o()(r);t.ajax({type:"post",url:"../deleteList/",data:c,dataType:"json",success:function(t){e.qsList.splice(n,1)},error:function(t){e.loading=!1,alert("删除失败！")}}),i.showDialog=!1}();case 4:case"end":return e.stop()}},e,this)}),delItems:n.a.mark(function t(){var e=this;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showDialogMsg("确认要删除选中的问卷？");case 2:return t.next=4,function(){if(e.showDialog=!1,e.selectAll)return void(e.qsList=[]);e.selectGroup!=[]&&e.selectGroup.forEach(function(t){e.qsList.indexOf(t)>-1&&e.qsList.splice(e.qsList.indexOf(t),1)})}();case 4:case"end":return t.stop()}},t,this)}),edit:n.a.mark(function t(e){var s=this;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,function(){"noissue"===e.state?s.showDialogMsg("确认要编辑？"):s.showDialogMsg("只有未发布的问卷才能编辑")}();case 2:return t.next=4,function(){"noissue"!==e.state?s.showDialog=!1:(s.showDialog=!1,s.$router.push({name:"qsEdit",params:{num:e.num}}))}();case 4:case"end":return t.stop()}},t,this)}),watchData:n.a.mark(function t(e){var s=this;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,function(){"noissue"===e.state?s.showDialogMsg("未发布的问卷无数据可查看"):s.$router.push({name:"qsData",params:{num:e.num}})}();case 2:return t.next=4,this.showDialog=!1;case 4:case"end":return t.stop()}},t,this)})},computed:{selectAll:{get:function(){return this.selectCount===this.qsList.length&&0!==this.selectCount},set:function(t){return this.qsList.forEach(function(e){e.checked=t}),t}},selectCount:function(){var t=0;return this.qsList.forEach(function(e){e.checked&&t++}),t},selectGroup:function(){var t=[];return this.qsList.forEach(function(e){e.checked&&t.push(e)}),t}}}}.call(e,s(33))},132:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(139),n=s.n(i);e.default={name:"calendar-input",props:{show:{type:Boolean,default:!0},limit:{type:Object,default:function(){return{minYear:1900,minMonth:1,minDay:1,maxYear:2030,maxMonth:3,maxDay:20}}},showCalendar:{type:Boolean,default:!0},containerStyle:{type:Object}},data:function(){return{isfocus:!1,changeShowCalendar:this.showCalendar,week:["日","一","二","三","四","五","六"],date:new Date,selectYear:(new Date).getFullYear(),selectMonth:(new Date).getMonth()+1,selectDay:(new Date).getDate()}},methods:{focus:function(){this.isfocus=!this.isfocus,this.changeShowCalendar=!this.changeShowCalendar},subMonth:function(){1===this.selectMonth?(this.selectMonth=12,this.selectYear-=1):this.selectMonth-=1,this.selectYear<this.limit.minYear&&(this.selectYear=this.limit.minYear),this.selectYear===this.limit.minYear&&this.selectMonth<=this.limit.minMonth&&(this.selectMonth=this.limit.minMonth)},addMonth:function(){12===this.selectMonth?(this.selectMonth=1,this.selectYear+=1):this.selectMonth+=1,this.selectYear>this.limit.maxYear&&(this.selectYear=this.limit.maxYear),this.selectYear===this.limit.maxYear&&this.selectMonth>=this.limit.maxMonth&&(this.selectMonth=this.limit.maxMonth)},changeSelectDay:function(t){if(this.unselectArr.includes(t))return!1;this.selectDay=t-this.firstDayInWeek+1}},computed:{trueSelectYear:function(){return this.selectYear<this.limit.minYear?this.limit.minYear:this.selectYear>this.limit.maxYear?this.limit.maxYear:this.selectYear},trueSelectMonth:function(){return this.selectYear===this.limit.minYear&&this.selectMonth<this.limit.minMonth?this.limit.minMonth:this.selectYear===this.limit.maxYear&&this.selectMonth>this.limit.maxMonth?this.limit.maxMonth:this.selectMonth},trueSelectDay:function(){return this.selectYear===this.limit.minYear&&this.selectMonth===this.limit.minMonth&&this.selectDay<this.limit.minDay?this.limit.minDay:this.selectYear===this.limit.maxYear&&this.selectMonth===this.limit.maxMonth&&this.selectDay>this.limit.maxDay?this.limit.maxDay:this.selectDay>this.dayCount?this.dayCount:this.selectDay},selectValue:function(){return this.trueSelectYear+"-"+this.trueSelectMonth+"-"+this.trueSelectDay},firstDayInWeek:function(){return new Date(this.trueSelectYear,this.trueSelectMonth-1,1).getDay()},dayCount:function(){return new Date(this.trueSelectYear,this.trueSelectMonth,0).getDate()},lastMonthDay:function(){var t=this.firstDayInWeek,e=[];if(0===t)return e;for(var s=0,i=new Date(this.trueSelectYear,this.trueSelectMonth-1,0).getDate();s<t;s++)e.unshift(i),i--;return e},nextMonthDay:function(){var t=42-this.firstDayInWeek-this.dayCount,e=[];if(0===t)return e;for(var s=1;s<=t;s++)e.push(s);return e},renderData:function(){for(var t=[],e=1;e<=this.dayCount;e++)t.push(e);return[].concat(n()(this.lastMonthDay),t,n()(this.nextMonthDay))},unselectArr:function(){var t=0,e=[];if(this.trueSelectYear===this.limit.minYear&&this.trueSelectMonth===this.limit.minMonth)for(;t<this.firstDayInWeek+this.limit.minDay-1;t++)e.push(t);else for(;t<this.firstDayInWeek;t++)e.push(t);if(this.trueSelectYear===this.limit.maxYear&&this.trueSelectMonth===this.limit.maxMonth)for(t=this.firstDayInWeek+this.limit.maxDay;t<42;t++)e.push(t);else for(t=this.firstDayInWeek+this.dayCount;t<42;t++)e.push(t);return e}},watch:{selectValue:function(t){this.$emit("getValue",t)}},mounted:function(){this.$emit("getValue",this.selectValue)}}},133:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"header"}},134:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(69),n=s(126),a=s.n(n),o=s(125);i.a.config.productionTip=!1,new i.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})},235:function(t,e){},236:function(t,e){},237:function(t,e){},238:function(t,e){},239:function(t,e){},240:function(t,e){},241:function(t,e){},247:function(t,e,s){s(236);var i=s(17)(s(128),s(254),"data-v-0c6577b2",null);t.exports=i.exports},248:function(t,e,s){s(235);var i=s(17)(s(129),s(253),"data-v-013fc612",null);t.exports=i.exports},249:function(t,e,s){s(240);var i=s(17)(s(130),s(258),"data-v-764de90b",null);t.exports=i.exports},250:function(t,e,s){s(237);var i=s(17)(s(131),s(255),"data-v-1c10c2b4",null);t.exports=i.exports},251:function(t,e,s){s(238);var i=s(17)(s(132),s(256),null,null);t.exports=i.exports},252:function(t,e,s){s(239);var i=s(17)(s(133),s(257),"data-v-5a848570",null);t.exports=i.exports},253:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit-container"},[t.titleChange?t._e():s("h2",{on:{click:t.titleClick}},[t._v(t._s(t.qsItem.title))]),t._v(" "),t.titleChange?s("input",{directives:[{name:"model",rawName:"v-model",value:t.titleValue,expression:"titleValue"}],ref:"titleInput",attrs:{type:"text",name:"qsTitle"},domProps:{value:t.titleValue},on:{blur:t.onblur,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onsubmit(e):null},input:function(e){e.target.composing||(t.titleValue=e.target.value)}}}):t._e(),t._v(" "),s("div",{staticClass:"content"},[t._l(t.qsItem.question,function(e,i){return s("div",{staticClass:"questions"},[s("div",{staticClass:"qs-left"},[s("p",{staticClass:"qs-title"},[t._v("\n          "+t._s(e.num)+" "+t._s(e.title)+" "+t._s(t.getMsg(e))+"\n        ")]),t._v(" "),t._l(e.options,function(i){return s("p",{staticClass:"option"},[s("label",["radio"===e.type?s("input",{attrs:{type:"radio",name:e.num+"-"+e.title}}):t._e(),t._v(" "),"checkbox"===e.type?s("input",{attrs:{type:"checkbox",name:e.num+"-"+e.title}}):t._e(),t._v(t._s(i)+"\n          ")])])}),t._v(" "),"textarea"===e.type?s("textarea"):t._e()],2),t._v(" "),s("div",{staticClass:"qs-right"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isNeed,expression:"qs.isNeed"}],attrs:{type:"checkbox"},domProps:{value:e.isNeed,checked:Array.isArray(e.isNeed)?t._i(e.isNeed,e.isNeed)>-1:e.isNeed},on:{change:function(s){var i=e.isNeed,n=s.target,a=!!n.checked;if(Array.isArray(i)){var o=e.isNeed,r=t._i(i,o);n.checked?r<0&&t.$set(e,"isNeed",i.concat([o])):r>-1&&t.$set(e,"isNeed",i.slice(0,r).concat(i.slice(r+1)))}else t.$set(e,"isNeed",a)}}}),t._v("\n        此题是否必填")]),t._v(" "),s("p",[0!==i?s("span",{on:{click:function(e){t.goUp(i)}}},[t._v("上移")]):t._e(),t._v(" "),i!==t.qsItem.question.length-1?s("span",{on:{click:function(e){t.goDown(i)}}},[t._v("下移")]):t._e(),t._v(" "),s("span",{on:{click:function(s){t.copy(i,e)}}},[t._v("复用")]),t._v(" "),s("span",{on:{click:function(e){t.del(i)}}},[t._v("删除")])])])])}),t._v(" "),s("div",{staticClass:"add"},[s("transition",{attrs:{name:"slide"}},[t.showBtn?s("div",{staticClass:"add-option"},[s("button",{on:{click:t.addRadio}},[t._v("单选")]),t._v(" "),s("button",{on:{click:t.addCheckbox}},[t._v("多选")]),t._v(" "),s("button",{on:{click:t.addTextarea}},[t._v("文本框")])]):t._e()]),t._v(" "),s("div",{staticClass:"add-item",on:{click:t.addItemClick}},[s("span",{staticClass:"add-icon"},[t._v("+")]),s("span",[t._v("添加问题")])])],1)],2),t._v(" "),t.showAddQsDialog?s("div",{staticClass:"shadow"},[s("div",{staticClass:"add-qs-dialog"},[s("header",[s("span",[t._v("提示")]),t._v(" "),s("span",{staticClass:"close-btn",on:{click:function(e){t.showAddQsDialog=!1}}},[t._v("X")])]),t._v(" "),s("p",[t._v(t._s(t.info))]),t._v(" "),s("label",[t._v("输入题目标题"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.qsInputTitle,expression:"qsInputTitle"}],attrs:{type:"text"},domProps:{value:t.qsInputTitle},on:{input:function(e){e.target.composing||(t.qsInputTitle=e.target.value)}}})]),t._v(" "),t.showAddOptionInput?s("label",[t._v("输入选项"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.qsInputOptions,expression:"qsInputOptions"}],attrs:{type:"text"},domProps:{value:t.qsInputOptions},on:{input:function(e){e.target.composing||(t.qsInputOptions=e.target.value)}}})]):t._e(),t._v(" "),s("div",{staticClass:"btn-box"},[s("button",{staticClass:"yes",on:{click:t.validateAddQs}},[t._v("确定")]),t._v(" "),s("button",{on:{click:function(e){t.showAddQsDialog=!1}}},[t._v("取消")])])])]):t._e(),t._v(" "),t.showDialog?s("div",{staticClass:"shadow"},[s("div",{staticClass:"dialog"},[s("header",[s("span",[t._v("提示")]),t._v(" "),s("span",{staticClass:"close-btn",on:{click:t.cancel}},[t._v("X")])]),t._v(" "),s("p",[t._v(t._s(t.info))]),t._v(" "),s("div",{staticClass:"btn-box"},[s("button",{staticClass:"yes",on:{click:function(e){t.iterator.next()}}},[t._v("确定")]),t._v(" "),s("button",{on:{click:t.cancel}},[t._v("取消")])])])]):t._e(),t._v(" "),s("footer",[s("span",[t._v("问卷截止日期")]),t._v(" "),s("calendar-input",{attrs:{showCalendar:!1,limit:t.limit},on:{getValue:t.getValue}}),t._v(" "),s("div",{staticClass:"btn-box"},[s("button",{staticClass:"save",on:{click:function(e){t.iterator=t.save(),t.iterator.next()}}},[t._v("保存问卷")]),t._v(" "),s("button",{staticClass:"issue",on:{click:function(e){t.iterator=t.issueQs(),t.iterator.next()}}},[t._v("发布问卷")])])],1)])},staticRenderFns:[]}},254:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-container"},[t.isError?t._e():[s("span",{staticClass:"back",on:{click:function(e){t.goBack()}}},[t._v("< 返回")]),t._v(" "),s("h2",[t._v(t._s(t.qsItem.title))]),t._v(" "),s("p",[t._v("此统计分析只包含完整回收的数据(数据皆为自制数据模拟来mock数据)")])],t._v(" "),t.isError?t._e():s("div",{staticClass:"content"},[t._l(t.qsItem.question,function(e,i){return[s("div",{staticClass:"content-item"},[s("div",{staticClass:"item-left"},[s("p",[t._v(t._s(e.num)+"   "+t._s(e.title))]),t._v(" "),t._l(e.options,function(e){return s("p",{staticClass:"option"},[t._v(t._s(e))])})],2),t._v(" "),"radio"===e.type?s("div",{staticClass:"item-right"},[s("p",[t._v("数据占比")]),t._v(" "),t._l(e.options,function(i,n){return[s("div",{staticClass:"progress-bar"},["0%"!==t.renderProgressMath(e.options.length,n)?s("div",{staticClass:"bar-inner",style:{width:t.renderProgressMath(e.options.length,n)}}):t._e()]),t._v(" "),s("span",{staticClass:"percent"},[t._v(t._s(t.renderProgressMath(e.options.length,n)))])]})],2):"textarea"===e.type?s("div",{staticClass:"item-right"},[s("p",[t._v("有效回答占比")]),t._v(" "),s("div",{staticClass:"progress-bar"},[s("div",{staticClass:"bar-inner",style:{width:"85%"}})]),t._v(" "),s("span",{staticClass:"percent"},[t._v("85%")])]):s("div",{staticClass:"item-right"},[s("p",[t._v("数据占比")]),t._v(" "),s("div",{attrs:{id:"chart-"+e.num}})])])]})],2),t._v(" "),t.isError?s("div",{staticClass:"error"},[t._v("\n    404 Not Found\n  ")]):t._e()],2)},staticRenderFns:[]}},255:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"qs-list"},[0!=t.qsList.length?s("ul",[s("li"),t._v(" "),s("li",[t._v("标题")]),t._v(" "),s("li",[t._v("截止时间")]),t._v(" "),s("li",[t._v("状态")]),t._v(" "),s("li",[t._v("操作"),s("span",{on:{click:function(e){t.$router.push({name:"qsEdit",params:{num:0}})}}},[t._v("+新建问卷")])])]):t._e(),t._v(" "),t._l(t.qsList,function(e){return[s("ul",[s("li",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"item.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?t._i(e.checked,null)>-1:e.checked},on:{change:function(s){var i=e.checked,n=s.target,a=!!n.checked;if(Array.isArray(i)){var o=t._i(i,null);n.checked?o<0&&t.$set(e,"checked",i.concat([null])):o>-1&&t.$set(e,"checked",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(e,"checked",a)}}})]),t._v(" "),s("li",[t._v(t._s(e.title))]),t._v(" "),s("li",[t._v(t._s(e.time))]),t._v(" "),s("li",{class:"inissue"===e.state?"inissue":""},[t._v(t._s(e.stateTitle))]),t._v(" "),s("li",[s("button",{on:{click:function(s){t.iterator=t.edit(e),t.iterator.next()}}},[t._v("编辑")]),t._v(" "),s("button",{on:{click:function(s){t.iterator=t.delItem(e.num),t.iterator.next()}}},[t._v("删除")]),t._v(" "),s("router-link",{attrs:{to:"/fill/"+e.num,tag:"button"}},[t._v("查看问卷")]),t._v(" "),s("button",{on:{click:function(s){t.iterator=t.watchData(e),t.iterator.next()}}},[t._v("查看数据")])],1)])]}),t._v(" "),0!=t.qsList.length?s("div",{staticClass:"list-bottom"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],attrs:{type:"checkbox",id:"all-check"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,null)>-1:t.selectAll},on:{change:function(e){var s=t.selectAll,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.selectAll=s.concat([null])):a>-1&&(t.selectAll=s.slice(0,a).concat(s.slice(a+1)))}else t.selectAll=n}}}),t._v("全选")]),t._v(" "),s("button",{on:{click:function(e){t.iterator=t.delItems(),t.iterator.next()}}},[t._v("删除")])]):t._e(),t._v(" "),0===t.qsList.length?s("div",{staticClass:"add-qs"},[s("button",{staticClass:"add-btn",on:{click:function(e){t.$router.push({name:"qsEdit",params:{num:0}})}}},[t._v("+  新建问卷")])]):t._e(),t._v(" "),t.showDialog?s("div",{staticClass:"shadow"},[s("div",{staticClass:"del-dialog"},[s("header",[s("span",[t._v("提示")]),t._v(" "),s("span",{staticClass:"close-btn",on:{click:function(e){t.showDialog=!1}}},[t._v("X")])]),t._v(" "),s("p",[t._v(t._s(t.info))]),t._v(" "),s("div",{staticClass:"btn-box"},[s("button",{staticClass:"yes",on:{click:function(e){t.iterator.next()}}},[t._v("确定")]),t._v(" "),s("button",{on:{click:function(e){t.showDialog=!1}}},[t._v("取消")])])])]):t._e()],2)},staticRenderFns:[]}},256:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"calendar-input-container orange-theme",style:t.containerStyle},[s("label",{attrs:{for:"calendar-input"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectValue,expression:"selectValue"}],ref:"mainInput",staticClass:"calendar-input",class:{focus:t.isfocus},attrs:{type:"text",readonly:"readonly"},domProps:{value:t.selectValue},on:{click:t.focus,input:function(e){e.target.composing||(t.selectValue=e.target.value)}}})]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.changeShowCalendar,expression:"changeShowCalendar"}],attrs:{id:"calendar"}},[s("div",{attrs:{id:"calendar-header"}},[s("span",{staticClass:"arrow",on:{click:t.subMonth}},[t._v("<")]),t._v(" "),s("span",{attrs:{id:"date-box"}},[t._v("\n          "+t._s(t.trueSelectYear)+"年"+t._s(t.trueSelectMonth)+"月\n        ")]),t._v(" "),s("span",{staticClass:"arrow",on:{click:t.addMonth}},[t._v(">")])]),t._v(" "),s("div",{staticClass:"week"},t._l(t.week,function(e,i){return s("span",{class:{weekend:0===i||6===i}},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),s("div",{staticClass:"days"},t._l(t.renderData,function(e,i){return s("span",{class:{weekend:i%7==0||i%7==6,unselect:t.unselectArr.includes(i),select:i===t.firstDayInWeek+t.trueSelectDay-1},on:{click:function(e){t.changeSelectDay(i)}}},[t._v("\n          "+t._s(e)+"\n        ")])}))])])],1)},staticRenderFns:[]}},257:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("router-link",{attrs:{to:"/"}},[t._v("问卷管理")]),t._v(" "),s("router-link",{attrs:{to:"/"}},[t._v("我的问卷")])],1)},staticRenderFns:[]}},258:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fill-container"},[t.isError?s("div",{staticClass:"error"},[t._v("\n    404 Not Found\n  ")]):s("div",{staticClass:"fill"},[s("router-link",{staticClass:"back",attrs:{to:"/",tag:"span"}},[t._v("< 返回")]),t._v(" "),s("h2",[t._v(t._s(t.qsItem.title))]),t._v(" "),s("div",{staticClass:"content"},t._l(t.qsItem.question,function(e){return s("div",{staticClass:"content-item"},[s("p",{staticClass:"qs-title"},[t._v("\n          "+t._s(e.num)+" "+t._s(e.title)+" "+t._s(t.getMsg(e))+"\n        ")]),t._v(" "),t._l(e.options,function(i){return s("p",{staticClass:"option"},[s("label",["radio"===e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.requiredItem[e.num],expression:"requiredItem[item.num]"}],attrs:{type:"radio",name:e.num+"-"+e.title},domProps:{value:i,checked:t._q(t.requiredItem[e.num],i)},on:{change:function(s){t.$set(t.requiredItem,e.num,i)}}}):t._e(),t._v(" "),"checkbox"===e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.requiredItem[e.num],expression:"requiredItem[item.num]"}],attrs:{type:"checkbox",name:e.num+"-"+e.title},domProps:{value:i,checked:Array.isArray(t.requiredItem[e.num])?t._i(t.requiredItem[e.num],i)>-1:t.requiredItem[e.num]},on:{change:function(s){var n=t.requiredItem[e.num],a=s.target,o=!!a.checked;if(Array.isArray(n)){var r=i,c=t._i(n,r);a.checked?c<0&&t.$set(t.requiredItem,e.num,n.concat([r])):c>-1&&t.$set(t.requiredItem,e.num,n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.requiredItem,e.num,o)}}}):t._e(),t._v(t._s(i)+"\n          ")])])}),t._v(" "),"textarea"===e.type?s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.requiredItem[e.num],expression:"requiredItem[item.num]"}],domProps:{value:t.requiredItem[e.num]},on:{input:function(s){s.target.composing||t.$set(t.requiredItem,e.num,s.target.value)}}}):t._e()],2)})),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.showDialog?s("div",{staticClass:"dialog"},[t.submitError?s("div",{staticClass:"submit-dialog"},[s("header",[s("span",[t._v("提示")]),t._v(" "),s("span",{staticClass:"close-btn",on:{click:function(e){t.showDialog=!1}}},[t._v("X")])]),t._v(" "),s("p",[t._v(t._s(t.info))]),t._v(" "),s("div",{staticClass:"btn-box"},[s("button",{staticClass:"yes",on:{click:function(e){t.showDialog=!1}}},[t._v("确定")]),t._v(" "),s("button",{on:{click:function(e){t.showDialog=!1}}},[t._v("取消")])])]):s("div",{staticClass:"submit-dialog"},[s("header",[s("span",[t._v("提示")]),t._v(" "),s("span",{staticClass:"close-btn",on:{click:function(e){t.showDialog=!1}}},[t._v("X")])]),t._v(" "),s("p",[t._v(t._s(t.info))])])]):t._e()]),t._v(" "),s("footer",[s("button",{staticClass:"submit",on:{click:t.submit}},[t._v("提交")])])],1)])},staticRenderFns:[]}},259:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("v-header"),t._v(" "),s("router-view")],1)},staticRenderFns:[]}},70:function(t,e,s){"use strict";var i=s(45),n=s.n(i);e.a={get:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"questionnaire";return JSON.parse(window.localStorage.getItem(t))},save:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"questionnaire";window.localStorage.setItem(e,n()(t))}}}},[134]);
//# sourceMappingURL=app.8dda251b6e2f65350ead.js.map