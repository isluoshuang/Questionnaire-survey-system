<!-- v-model="requiredItem[item.num]" -->
<template>
  <div class="fill-container">
    <div class="fill" v-if="!isError">
      <router-link to="/" tag="span" class="back">&lt; 返回</router-link>
      <h2>{{qsItem.title}}</h2>
      <div class="content">
        <div class="content-item" v-for="item in qsItem.question">
          <p class="qs-title">
            {{item.num}}&nbsp;{{item.title}}&nbsp;{{getMsg(item)}}
          </p>
          <p v-for="option in item.options" class="option">
            <label>
              <input 
              type="radio" 
              id = "radio"
              :name="`${item.num}-${item.title}`"
              v-model="requiredItem[item.num]"
              v-if="item.type === 'radio'"
              :value="option">
              <input 
              type="checkbox" 
              id = "checkbox"
              :name="`${item.num}-${item.title}`"
              v-model="requiredItem[item.num]"
              v-if="item.type === 'checkbox'"
              :value="option">{{option}}
            </label>
          </p>
          <textarea 
          id = "textarea"
          v-if="item.type === 'textarea'" 
          v-model="requiredItem[item.num]"></textarea>
        </div>
      </div>
      <transition name="fade">
        <div class="dialog" v-if="showDialog">
          <div class="submit-dialog" v-if="submitError">
            <header>
              <span>提示</span>
              <span class="close-btn" @click="showDialog = false">X</span>
            </header>
            <p>{{info}}</p>
            <div class="btn-box">
              <button class="yes" @click="showDialog = false">确定</button>
              <button @click="showDialog = false">取消</button>
            </div>
          </div>
          <div class="submit-dialog" v-else>
            <header>
              <span>提示</span>
              <span class="close-btn" @click="showDialog = false">X</span>
            </header>
            <p>{{info}}</p>
          </div>
        </div>
      </transition>  
      <footer>
        <button @click="submit" class="submit">提交</button>
      </footer>
    </div>
    <div class="error" v-else>
      404 Not Found
    </div>
  </div>
</template>

<script>
// import storage from '../store.js'

/**
 * A module that define qs-fill router view
 */
  export default {
    name: 'qsFill',
    data() {
      return {
        qsItem: [],
        qsList: [],
        isError: false,
        showDialog: false,
        info: '',
        submitError: false,
        requiredItem: {},
      }
    },
    created() {
      this.fetchData()
    },
    // mounted() {
    //   this.getRequiredItem()
    // },
    methods: {
      fetchData() {
        // console.log("fetchData")
        var that = this;
        $.ajax({  
            type:"get",//type可以为post也可以为get  
            url: "../list/",  
            data:{
            },//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
            dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
            success:function(value){ 
              that.qsList = value
              console.log(that.qsList)
              let i = 0;
              for (let length = that.qsList.length; i < length; i++) {
                if (that.qsList[i].num == that.$route.params.num) {
                  that.qsItem = that.qsList[i]
                  break
                }
              }
              if (i === that.qsList.length) that.isError = true

              that.qsItem.question.forEach( item => {
                if (item.isNeed) {
                  if (item.type === 'checkbox') {
                    that.requiredItem[item.num] = []
                  } else {
                    that.requiredItem[item.num] = ''
                  }
                }
              } )

            },  
            error:function(value){ 
                alert("问卷查询出现错误");  
            } 
        }); 
      },    
      getMsg(item) {
        let msg = ''
        if (item.type === 'radio') {
          msg = '(单选题)'
        } else if (item.type === 'checkbox') {
          msg = '(多选题)'
        } else {
          msg = '(文本题)'
        }

        return item.isNeed ? `${msg} *` : msg
      },
      submit() {
        if (this.qsItem.state === 'inissue') {
          let result = this.validate()
          if (result) {
            this.showDialog = true
            this.submitError = false
            // let that = this
            let send_data = {}
            send_data["num"] = this.qsItem.num
            send_data["question"] = this.requiredItem          
            $.ajax({  
                type:"post",//type可以为post也可以为get  
                url: "../addChoose/",
                data: JSON.stringify(send_data),//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
                contentType: 'application/json; charset=UTF-8',
                dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
                success:function(value){ 
                  if (value["status"] == 'success') {
                    // this.$Message.success('新建问卷成功!')
                  }                     
                },  
                error:function(value){ 
                  alert("提交问卷失败！");  
                } 
            });              
            this.info = '提交成功！'
            setTimeout(() => {
              this.showDialog = false
            }, 500)
            setTimeout(() => {
              this.$router.push({path: '/'})
            }, 1500)
          } else {
            this.showDialog = true
            this.submitError = true
            this.info = '提交失败！ 存在必填项未填'
          }
        } else {
          this.showDialog = true
          this.submitError = true
          this.info = '提交失败！ 只有发布中的问卷才能提交'
        }
      },
      // getRequiredItem() {    
      //   this.qsItem.question.forEach( item => {
      //     if (item.isNeed) {
      //       if (item.type === 'checkbox') {
      //         this.requiredItem[item.num] = []
      //       } else {
      //         this.requiredItem[item.num] = ''
      //       }
      //     }
      //   } )
      // },
      validate() {
        for (let i in this.requiredItem) {
          if (this.requiredItem[i].length === 0) return false
        }
        return true
      },
      // saveOption(num){
      //   console.log("fortest")
      //   console.log(num)
      //   console.log(this.requiredItem)
      //   // console.log(this.choose)
      // }      


    },
    watch: {
      '$route': 'fetchData'
    }
  }
</script>

<style lang="scss" scoped>
@import '../style/QS-fill'
</style>