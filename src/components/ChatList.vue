<template>
    <div>
        <section class="chatlist" :class="showSelBox>0?'chatlist-bottom-collapse':'chatlist-bottom'">
            <mt-loadmore :top-method="loadTop" top-pull-text="加载更多" top-drop-text="释放加载" @top-status-change="handleTopChange" ref="loadmore">
                <ul>
                    <template v-for="item in records">
                        <li class="chat-mine" v-if="item.type==1">
                            <div class="chat-user"><img src="../assets/image/user.png"></div>
                            <div class="time"><cite><i>{{item.time}}</i>{{item.name}}</cite></div>
                            <div class="chat-text" v-html="replaceFace(item.content)"></div>
                        </li>
                        <li v-if="item.type==2">
                            <div class="chat-user"><img src="../assets/image/default.png"></div>
                            <div class="time"><cite>{{item.name}}<i>{{item.time}}</i></cite></div>
                            <div class="chat-text" v-html="replaceFace(item.content)"></div>
                        </li>
                    </template>
                </ul>
            </mt-loadmore>
        </section>
        <section class="foot">
            <mt-field id="txtContent" placeholder="请输入消息" class="con" v-model="content"></mt-field>
            <span class="btn-face" v-on:click="showSelBox=showSelBox===1?0:1"><i class="iconfont icon-smile" aria-hidden="true"></i></span>
            <!--<span class="btn-plus" v-on:click="showSelBox=showSelBox===2?0:2"><i class="iconfont icon-add" aria-hidden="true" :class="showSelBox===2?'fa-minus-circle':'fa-plus-circle'"></i></span>-->
            <span class="btn btn-send" v-on:click="sendMsg">发送</span>
            <section class="selbox" :class="showSelBox>0?'show':'hide'">
                <section v-show="showSelBox===1" class="face-box">
                    <mt-swipe :auto="0" :continuous="false">
                        <mt-swipe-item v-for="n in Math.ceil(EXPS.length/18)">
                            <li v-for="(item, index) in getEXP(n,18)">
                                <img :src="'static/emotion/'+item.file" alt="" :data="item.code" v-on:click="content+=item.code">
                            </li>
                        </mt-swipe-item>
                    </mt-swipe>
                </section>
                <div v-show="showSelBox===2">{{selOther}}</div>
            </section>
        </section>
    </div>
</template>

<script>
import time from '../utils/time'

import { Toast } from 'mint-ui'
export default {
  name: 'chatlist',
  data () {
    return {
      showSelBox: 0, // 0隐藏 1显示表情 2显示其他
      selFace: '表情',
      selOther: '其他功能',
      content: '',
      topStatus: '',
      // 聊天记录
      records: [{
        type: 1,
        time: time.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        name: '游客',
        content: '你好！'
      }, {
        type: 2,
        time: time.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        name: '客户MM',
        content: '这里是<a target="_blank" href="https://github.com/taylorchen709/vue-chat">源码</a>'
      }],
      // 表情
      EXPS: [
        { file: '100.gif', code: '/::)', title: '微笑', reg: /\/::\)/g },
        { file: '101.gif', code: '/::~', title: '伤心', reg: /\/::~/g },
        { file: '102.gif', code: '/::B', title: '美女', reg: /\/::B/g },
        { file: '103.gif', code: '/::|', title: '发呆', reg: /\/::\|/g },
        { file: '104.gif', code: '/:8-)', title: '墨镜', reg: /\/:8-\)/g },
        { file: '105.gif', code: '/::<', title: '哭', reg: /\/::</g },
        { file: '106.gif', code: '/::$', title: '羞', reg: /\/::\$/g },
        { file: '107.gif', code: '/::X', title: '哑', reg: /\/::X/g },
        { file: '108.gif', code: '/::Z', title: '睡', reg: /\/::Z/g },
        { file: '109.gif', code: '/::\'(', title: '哭', reg: /\/::'\(/g },
        { file: '110.gif', code: '/::-|', title: '囧', reg: /\/::-\|/g },
        { file: '111.gif', code: '/::@', title: '怒', reg: /\/::@/g },
        { file: '112.gif', code: '/::P', title: '调皮', reg: /\/::P/g },
        { file: '113.gif', code: '/::D', title: '笑', reg: /\/::D/g },
        { file: '114.gif', code: '/::O', title: '惊讶', reg: /\/::O/g },
        { file: '115.gif', code: '/::(', title: '难过', reg: /\/::\(/g },
        { file: '116.gif', code: '/::+', title: '酷', reg: /\/::\+/g },
        { file: '117.gif', code: '/:--b', title: '汗', reg: /\/:--b/g },
        { file: '118.gif', code: '/::Q', title: '抓狂', reg: /\/::Q/g },
        { file: '119.gif', code: '/::T', title: '吐', reg: /\/::T/g },
        { file: '120.gif', code: '/:,@P', title: '笑', reg: /\/:,@P/g },
        { file: '121.gif', code: '/:,@-D', title: '快乐', reg: /\/:,@-D/g },
        { file: '122.gif', code: '/::d', title: '奇', reg: /\/::d/g },
        { file: '123.gif', code: '/:,@o', title: '傲', reg: /\/:,@o/g },
        { file: '124.gif', code: '/::g', title: '饿', reg: /\/::g/g },
        { file: '125.gif', code: '/:|-)', title: '累', reg: /\/:\|-\)/g },
        { file: '126.gif', code: '/::!', title: '吓', reg: /\/::!/g }
      ]
    }
  },
  methods: {
    getEXP: function (pageNow, pageSize) {
      return this.EXPS.slice((pageNow - 1) * pageSize, pageSize * pageNow)
    },
    // 发送消息
    sendMsg: function () {
      let _this = this
      if (this.content === '') {
        Toast('请输入消息')
        return
      }
      let data = {
        type: 1,
        time: time.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        name: '游客',
        content: this.content
      }
      this.records.push(data)
      setTimeout(function () {
        _this.records.push({
          type: 2,
          time: time.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
          name: '客服MM',
          content: '你好！'
        })
      }, 100)
      this.content = ''
      this.scrollToBottom()
      // this.focusTxtContent();//聚焦输入框
    },
    // 聚焦输入框
    focusTxtContent: function () {
      document.querySelector('#txtContent input').focus()
    },
    // 滚动条滚动到底部
    scrollToBottom: function () {
      setTimeout(function () {
        var chatlist = document.getElementsByClassName('chatlist')[0]
        chatlist.scrollTop = chatlist.scrollHeight
      }, 100)
    },
    // 替换表情代码
    replaceFace: function (con) {
      // var _this = this
      var exps = this.EXPS
      for (var i = 0; i < exps.length; i++) {
        // con = con.replace(new RegExp(exps[i].code,'g'), '<img src="static/emotion/' + exps[i].file +'"  alt="" />');
        con = con.replace(exps[i].reg, '<img src="static/emotion/' + exps[i].file + '"  alt="" />')
      }
      return con
    },
    handleTopChange (status) {
      this.topStatus = status
    },
    loadTop (id) {
      var _this = this
      setTimeout(() => {
        var chatlist = document.getElementsByClassName('chatlist')[0]
        var oldHeight = chatlist.scrollHeight
        _this.records.unshift({
          type: 1,
          time: time.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
          name: '游客',
          content: '你好！13213'
        }, {
          type: 2,
          time: time.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
          name: '客户MM',
          content: '这里是<a target="_blank" href="https://github.com/taylorchen709/vue-chat">源码</a>13213'
        })
        setTimeout(function () {
          var newHeight = chatlist.scrollHeight
          chatlist.scrollTop = newHeight - oldHeight
        }, 100)
        this.$refs.loadmore.onTopLoaded(id)
      }, 1500)
    },
    initWebSocket () { // 初始化weosocket
      const url = 'ws://localhost:2346' // ws地址
      this.websock = new WebSocket(url)
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onmessage = this.websocketonmessage
      this.websock.onclose = this.websocketclose
    },
    websocketonopen () {
      console.log('WebSocket连接成功')
    },
    websocketonerror (e) { // 错误
      console.log('WebSocket连接发生错误')
    },
    websocketonmessage (e) { // 数据接收
      const redata = JSON.parse(e.data)
      // 注意：长连接我们是后台直接1秒推送一条数据，
      // 但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
      // 这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
      console.log(redata.value)
    },
    websocketsend (agentData) { // 数据发送
      this.websock.send(agentData)
    },
    websocketclose (e) { // 关闭
      console.log('connection closed (' + e.code + ')')
    }
  },
  mounted: function () {
    this.scrollToBottom()
    this.focusTxtContent()
  },
  created () {
    this.initWebSocket()
  }
// updated:function(){
//     this.scrollToBottom();
// }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .chatlist {
        position: absolute;
        top: 81px;
        left: 0;
        right: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 20px;
        background-color: #fff;
    }
    
    .chatlist-bottom {
        bottom: 96px;
    }
    .chatlist-bottom-collapse {
        bottom: 400px;
    }
    .chatlist ul {
        min-height: 600px;
        .chat-mine {
            text-align: right;
            padding-left: 0;
            padding-right: 90px;
        }
        li {
            position: relative;
            /*font-size: 0;*/
            margin-bottom: 20px;
            padding-left: 90px;
            min-height: 138px;
        }
    }
    .chat-mine .chat-user {
        left: auto;
        right: 6px;
    }
    .chat-user {
        position: absolute;
        left: 6px;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
    }
    .chat-text,
    .chat-user {
        display: inline-block;
        vertical-align: top;
        /*font-size: 14px;*/
    }


    .time {
        width: 100%;
    }

    cite {
        left: auto;
        right: 120px;
        text-align: right;
    }
    
    cite {
        font-style: normal;
        line-height: 48px;
        font-size: 24px;
        white-space: nowrap;
        color: #999;
        text-align: left;
        i {
            font-style: normal;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 24px;
        }
    }



    .chat-mine .chat-text {
        margin-left: 0;
        text-align: left;
        background-color: #33DF83;
        color: #fff;
    }

    .chat-text {
        position: relative;
        line-height: 44px;
        /*margin-top: 25px;*/
        padding: 20px 30px;
        background-color: #eee;
        border-radius: 6px;
        color: #333;
        word-break: break-all;
        max-width: 462px\9;
    }
    
    .chat-text,
    .chat-user {
        display: inline-block;
        vertical-align: top;
        font-size: 28px;
    }

    .chat-text img {
        max-width: 100%;
        vertical-align: middle;
    }

    .chat-user {
        position: absolute;
        left: 6px;
    }
    
    .chat-text:after {
        content: '';
        position: absolute;
        left: -20px;
        top: 30px;
        width: 0;
        height: 0;
        border-style: solid dashed dashed;
        border-color: #eee transparent transparent;
        overflow: hidden;
        border-width: 20px;
    }
    
    .chat-mine .chat-text:after {
        left: auto;
        right: -20px;
        border-top-color: #33DF83;
    }

    .foot {
        width: 100%;
        min-height: 96px;
        position: fixed;
        bottom: 0px;
        left: 0px;
        background-color: #F8F8F8;
        .con {
            position: absolute;
            left: 66px;
            right: 80px;
            /*bottom: 10px;*/
        }
        .btn-plus {
            width: 28px;
            padding: 9px 3px;
            position: absolute;
            left: 0px;
            border-left: 1px solid #d9d9d9;
            i {
                font-size: 2em;
                color: #ccc;
            }
        }
        .btn-face {
            width: 56px;
            padding: 9px 3px 9px 0;
            position: absolute;
            left: 3px;
            /*border-right: 1px solid #d9d9d9;*/
            i {
                font-size: 2em;
                color: #d9d9d9;
            }
        }
        .selbox {
            height: 300px;
            margin-top: 96px;
            border-top: 1px solid #d9d9d9;
            background-color: #eee;
        }
        /deep/ {
            .mint-cell {
                height: 40px;
            }
            .mint-cell-wrapper {
                font-size: 16px;
            }
            .mint-swipe-indicator {
                opacity: 0.5;
            }
            .mint-swipe-indicator{
                background-color: #fff;
                &.is-active {
                    background-color: #000;
                }
            }
        }
    }

    .show {
        display: block;
    }
    
    .hide {
        display: none;
    }
    
    .face-box {
        /* position: absolute; */
        /* top: 48px; */
        /* left: 0px; */
        /* right: 0px; */
        /* bottom: 0px; */
        padding: 15px 15px 0 15px;
        overflow: hidden;
        width: 76%;
        margin: 0 auto;
        height: 250px;
        li {
            list-style: none;
            width: 60px;
            float: left;
            padding: 6px 10px 0 8px;
        }
    }

    .btn {
        display: inline-block;
        vertical-align: top;
        font-size: 28px;
        line-height: 32px;
        margin-left: 5px;
        padding: 24px 6px;
        background-color: #33DF83;
        color: #fff;
        border-radius: 3px;
    }
    
    .btn-send {
        position: absolute;
        right: 0px;
        top: 8px;
    }
</style>