(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(e,t,n){"use strict";t.a={POST_SUBSCRIBE:"/frontend/user/order-activity",POST_CHECKAPPLY:"/frontend/user/check-apply",GET_LIVEINFO:"/frontend/live/info",GET_SHAREINFO:"/frontend/share/info",GET_QUESTIONINFO:"/frontend/question/info",POST_QUESTIONINFO:"/frontend/user/apply-activity",GET_CREATEACCESSTOKEN:"/common/paas/create-access-token",GET_ONLINENUM:"/frontend/channel/get-online-num",GET_SHARESIGN:"/common/wechat/get-share-sign",GET_SDKTOKEN:"/frontend/live/sdk-token",GET_SEND:"/index/send",GET_SENDANNOUNCEMENT:"/initiator/channel/send-announcement",POST_GAG:"/initiator/user/gag",POST_GAGALL:"/initiator/user/gag-all",POST_KICK:"/initiator/user/kick",POST_EMAILSUBSCRIBE:"/frontend/user/email-subscribe",GET_MESSAGELIST:"/common/paas/message-list",GET_CAPTCHAID:"/common/message/get-captchaid",GET_CODE:"/common/message/send-code",GET_TEMPLATE:"/frontend/live/template",GET_DEFAULEREPLAY:"/frontend/replay/default-replay",GET_WARMINFO:"/frontend/live/warm-up",GET_REG_SDK_INFO:"/frontend/channel/create-channel-token",GET_ACTIVITY_LIST:"/frontend/user/visit-activity-list",GET_VISITED_CARD:"/frontend/tool/recommend-card-visit",GET_CUSTOM_LOGO:"/manage/brand-manage/get"}},226:function(e,t,n){"use strict";var i=n(10),a=n.n(i),s=n(17),o=n.n(s),r=n(0),c=n.n(r),h=n(69),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("com-dialog",{attrs:{visible:e.visible,center:""},on:{"update:visible":function(t){e.visible=t},close:e.closed}},[n("div",[n("div",{staticClass:"rule"},[e._v("登录参与直播互动")]),e._v(" "),n("com-input",{staticClass:"mobile",attrs:{type:"mobile",placeholder:"请输入手机","error-tips":e.phoneErrorMsg},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),e._v(" "),n("div",{staticClass:"captcha",attrs:{id:e.captchaId}}),e._v(" "),n("com-input",{staticClass:"code",attrs:{type:"mobile",placeholder:"请输入验证码","error-tips":e.codeErrorMsg},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e._v(" "),n("com-button",{staticClass:"codeBtn",attrs:{disabled:!e.codeEnable,type:"primary"},on:{click:e.getCode}},[e._v(e._s(e.codeText))])],1),e._v(" "),n("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[n("com-button",{attrs:{type:"primary",disabled:!e.submitEnable},on:{click:e.doLogin}},[e._v("登录")])],1)])],1)};l._withStripped=!0;var u=n(225),d=n(72),p={name:"ComLogin",data:function(){return{captchaId:"ca"+Math.round(1e3*Math.random()),visible:!1,time:60,captchaIns:null,key:null,verify:!1,mobile:"",code:"",mobileReg:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,captchaKey:"",phoneErrorMsg:"",codeErrorMsg:""}},mounted:function(){var e=this;this.$get(u.a.GET_CAPTCHAID).then(function(t){e.key=t.data,window.initNECaptcha({element:"#"+e.captchaId,mode:"float",width:"100%",captchaId:e.key,onVerify:function(t,n){t?console.log(t):(e.verify=!0,e.captchaKey=n.validate)}},function(t){e.captchaIns=t},function(e){console.log(e)})})},methods:{getCode:function(){var e=this;if(!this.verification(this.mobile,"phone"))return!1;this.$config({handlers:!0}).$get(u.a.GET_CODE,{mobile:this.mobile,type:"CONSUMER_USER_LOGIN",captcha:this.captchaKey,__errHandler:!0}).then(function(t){e.time--,e.timer=setInterval(function(){e.time--,0===e.time&&(clearInterval(e.timer),e.time=60)},1e3),console.log(t)})},doLogin:function(){var e=this;return!!this.verification(this.mobile,"phone")&&(!!this.verification(this.code,"code")&&void this.$config({handlers:!0}).$post(d.a.POST_MOBILELOGIN,{mobile:this.mobile,code:this.code,wechatAuth:sessionStorage.getItem("wechatAuth"),__errHandler:!0}).then(function(t){e.$parent.updateLoginInfo(t.data),e.visible=!1,e.closed(),e.$emit("login",t.data)}).catch(function(t){10020===t.code?e.codeErrorMsg=t.msg:11061===t.code?e.phoneErrorMsg=t.msg:11062===t.code&&(e.phoneErrorMsg=t.msg),e.verify=!1,e.captchaKey="",e.captchaIns.refresh()}))},closed:function(){this.mobile="",this.time=60,this.verify=!1,this.captchaKey="",this.captchaIns.refresh(),clearInterval(this.timer)},verification:function(e,t){return"phone"===t?!!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(e)||(this.phoneErrorMsg="请正确填写手机号",!1):"code"===t?!!/^\d{6}$/.test(e)||(this.codeErrorMsg="请输入正确验证码",!1):void 0}},computed:{codeText:function(){return this.codeEnable||60===this.time?"发送验证码":"倒计时"+this.time+"秒"},codeEnable:function(){return this.mobileReg.test(this.mobile)&&this.verify&&60===this.time},submitEnable:function(){return this.mobileReg.test(this.mobile)&&this.verify&&this.code}}},m=(n(282),n(1)),f=Object(m.a)(p,l,[],!1,null,"9f4e7bf2",null);f.options.__file="src/components/login-box.vue";var g=f.exports;c.a.use(h.a);var v=new c.a;t.a={components:{ComLogin:g},data:function(){return{login:null}},mounted:function(){this.login=this.$children.find(function(e){return"ComLogin"===e.$options.name}),this.$route.meta.pop&&(this.$route.meta.pop=!1,this.login.visible=!0)},methods:{getAuthInfo:function(){return sessionStorage.getItem("wechatAuth")},getLoginInfo:function(){return JSON.parse(sessionStorage.getItem("login"))},doAuth:function(e){var t=location.href;e&&(t=e),!sessionStorage.getItem("wechatAuth")&&this.isWx()?location.replace("/api/frontend/user/wechat-login?backUrl="+encodeURIComponent(t)):location.replace(t)},doLogin:function(e){if(!sessionStorage.getItem("wechatAuth")&&this.isWx()){var t=location.href;"string"==typeof e&&(t=e),-1===t.indexOf("?")?t+="?_pop=true":t+="&_pop=true",location.href="/api/frontend/user/wechat-login?backUrl="+encodeURIComponent(t)}else this.login.visible=!0},updateLoginInfo:function(e){e?sessionStorage.setItem("login",o()(e)):(sessionStorage.removeItem("login"),sessionStorage.removeItem("wechatAuth"))},getMasterInfo:function(e){return new a.a(function(e,t){sessionStorage.getItem("master")?e(JSON.parse(sessionStorage.getItem("master"))):v.$config({loading:!0,handlers:!0}).$get(d.a.GET_JOININFO).then(function(t){sessionStorage.setItem("master",o()(t.data)),e(t.data)}).catch(function(e){t(e)})})},isWx:function(){return!(-1===navigator.userAgent.toLowerCase().indexOf("micromessenger"))}}}},227:function(e,t,n){"use strict";var i=n(17),a=n.n(i),s=n(74),o=n.n(s),r=n(75),c=n.n(r),h=n(106),l=n.n(h),u=l()("msgHandler"),d=l()("dispatchHandler"),p=function(){function e(){if(o()(this,e),this._instance)throw new Error("ChatService is singlton");this._instance=this,this._activityId="",this.handlerMap={}}return c()(e,[{key:"init",value:function(e){var t=this;this.service||window.vhallChat||(window.Vhall.ready(function(){t.service=VhallChat({channelId:e.channelId}),window.vhallChat=t.service,t[u]()}),window.Vhall.config({appId:e.appId,accountId:e.accountId,token:e.token}),console.log(a()(e)))}},{key:"sendChat",value:function(e){this.service.emit(e)}},{key:"sendCustomMsg",value:function(e,t){this.service.emitCustomMsg({type:e,body:t})}},{key:u,value:function(){var e=this;window.vhallChat.join(function(t){e[d]("Join",t)}),window.vhallChat.leave(function(t){e[d]("Leave",t)}),window.vhallChat.onCustomMsg(function(t){var n=JSON.parse(t),i=n.type,a=n.body;e[d](i,a)}),window.vhallChat.on(function(t){e[d]("chat",t)})}},{key:"regHandler",value:function(e,t){this.handlerMap[e]||(this.handlerMap[e]=[]);var n=this.handlerMap[e];n.includes(t)?console.log("重复注册消息"):n.push(t)}},{key:"unregHandler",value:function(e,t){if(this.handlerMap[e]){var n=this.handlerMap[e],i=n.indexOf(t);-1!==i&&n.splice(i,1)}}},{key:d,value:function(e,t){var n=this.handlerMap[e];n&&0!==n.length&&n.forEach(function(e){e(t)})}},{key:"activityId",set:function(e){this._activityId=e},get:function(){return this._activityId}}],[{key:"OBJ",get:function(){return this._instance||(this._instance=new e),this._instance}}]),e}();t.a=p},228:function(e,t,n){"use strict";t.a={onLineNum:"INCREMENT_ONLINE",announcement:"ANNOUNCEMENT",kick:"KICK",gag:"GAG",gagAll:"GAG_ALL",beginLive:"BEGIN_LIVE",endLive:"FINISH_LIVE",joinLive:"Join",leaveLive:"Leave",cardPush:"RECOMMEND_CARD_PUSH"}},229:function(e,t,n){e.exports=n.p+"static/img/success@2x.png"},230:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n(221),a=n.n(i);function s(e){a.a.config({debug:!1,appId:e.wxShareData.appId,timestamp:e.wxShareData.timestamp,nonceStr:e.wxShareData.nonceStr,signature:e.wxShareData.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]}),a.a.ready(function(){a.a.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"],success:function(e){console.log(e.checkResult,789486)}}),a.a.onMenuShareTimeline({title:e.shareData.title,desc:e.shareData.shareDatadesc,link:e.shareData.shareDatalink+(e.shareUser.shareId?"?shareId="+e.shareUser.shareId+"-3":""),imgUrl:e.shareData.shareDataimgUrl,success:function(){_log.track(Vhall_User_Actions.SHARE,{event:3})},cancel:function(){}}),a.a.onMenuShareAppMessage({title:e.shareData.title,desc:e.shareData.shareDatadesc,link:e.shareData.shareDatalink+(e.shareUser.shareId?"?shareId="+e.shareUser.shareId+"-3":""),imgUrl:e.shareData.shareDataimgUrl,success:function(){_log.track(Vhall_User_Actions.SHARE,{event:2})},cancel:function(){}}),a.a.onMenuShareQQ({title:e.shareData.title,desc:e.shareData.shareDatadesc,link:e.shareData.shareDatalink+(e.shareUser.shareId?"?shareId="+e.shareUser.shareId+"-2":""),imgUrl:e.shareData.shareDataimgUrl,success:function(){_log.track(Vhall_User_Actions.SHARE,{event:1})},cancel:function(){}}),a.a.onMenuShareWeibo({title:e.shareData.title,desc:e.shareData.shareDatadesc,link:e.shareData.shareDatalink+(e.shareUser.shareId?"?shareId="+e.shareUser.shareId+"-1":""),imgUrl:e.shareData.shareDataimgUrl,success:function(){_log.track(Vhall_User_Actions.SHARE,{event:4})},cancel:function(){}}),a.a.onMenuShareQZone({title:e.shareData.title,desc:e.shareData.shareDatadesc,link:e.shareData.shareDatalink+(e.shareUser.shareId?"?shareId="+e.shareUser.shareId+"-2":""),imgUrl:e.shareData.shareDataimgUrl,success:function(){},cancel:function(){}})}),a.a.error(function(e){})}},232:function(e,t,n){},233:function(e,t,n){},235:function(e,t,n){},271:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-vercode"},[n("div",{attrs:{id:"captcha"}}),e._v(" "),n("div",{staticClass:"v-input-from"},[n("com-input",{class:{warning:e.errorMsg},attrs:{value:e.val,placeholder:e.placeholder,type:"mobile","max-length":e.maxLength,"error-tips":e.errorMsg,codeType:e.codeType},on:{"update:value":function(t){e.val=t},blur:e.pushCode,focus:e.inputFocus}}),e._v(" "),n("a",{staticClass:"v-getcode",class:{prohibit:e.isProhibit},attrs:{href:"javascript:;"},on:{click:function(t){e.getCode()}}},[e._v("获取验证码\n      "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isSend,expression:"isSend"}],staticClass:"v-getcode-span"},[e._v("(\n        "),n("em",[e._v(e._s(e.second))]),e._v("s)")])])],1)])};i._withStripped=!0;var a=n(225),s={props:{code:String,phone:String,isGetCode:Boolean,placeholder:String,maxLength:Number,errorMsg:String,codeType:String},data:function(){return{key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,val:""}},mounted:function(){console.log(this.phone)},components:{},created:function(){var e=this;this.$get(a.a.GET_CAPTCHAID).then(function(t){var n=e;e.key=t.data,window.initNECaptcha({captchaId:n.key,element:"#captcha",mode:"float",width:"100%",onReady:function(e){},onVerify:function(e,t){t&&(n.phoneKey=t.validate,n.isImg=!0),e&&console.log(e)},onError:function(){}},function(e){n.cap=e})})},destroyed:function(){clearInterval(this.timerr)},watch:{phone:function(e){this.isGetCodePermission(!0)},isImg:function(e){this.isGetCodePermission()},isGetCode:function(){this.isGetCode&&(clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh())},val:{handler:function(e){this.$emit("update:code",e)},immediate:!0}},methods:{getCode:function(){var e=this;if(this.isProhibit)return!1;var t={mobile:this.phone,type:this.codeType,captcha:this.phoneKey,__errHandler:!0};this.$config({handlers:!0}).$get(a.a.GET_CODE,t).then(function(t){e.isSend=!0,e.isProhibit=!0,clearInterval(e.timerr),e.timerr=setInterval(function(){e.second--,e.second<=0&&(clearInterval(e.timerr),e.isSend=!1,e.isProhibit=!0,e.second=60,e.isImg=!1,e.phoneKey="",e.cap.refresh())},1e3)}).catch(function(t){clearInterval(e.timerr),e.isSend=!1,e.isProhibit=!0,e.second=60,e.isImg=!1,e.phoneKey="",e.cap.refresh(),10050===t.code?e.$emit("update:errorMsg","验证码发送过于频繁"):200!==t.code&&e.$emit("update:errorMsg",t.msg)})},isGetCodePermission:function(e){this.isImg&&this.verificationPhone()?(this.isProhibit=!1,this.second>0&&(this.isSend=!1,this.isProhibit=!1,this.second=60,this.mobileOpacity=1,clearInterval(this.timerr),e&&(this.isImg=!1,this.phoneKey="",this.cap.refresh()))):this.isProhibit=!0},pushCode:function(){this.$emit("inputFocus",this.code)},inputFocus:function(){this.$emit("update:errorMsg","")},verificationPhone:function(){return console.log(this.phone),!(""===this.phone||!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phone))},refreshCode:function(){clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh(),this.val=""}}},o=(n(278),n(1)),r=Object(o.a)(s,i,[],!1,null,"15c0d488",null);r.options.__file="src/components/common/signup/com-code.vue";t.a=r.exports},272:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-form"},[n("label",{staticClass:"v-label"},[e._v("\n    "+e._s(e.label)+"\n  ")]),e._v(" "),n("com-input",{class:{warning:e.errorMsg},attrs:{value:e.val,placeholder:e.placeholder,type:e.type,"max-length":e.maxLength,"error-tips":e.errorMsg,disabled:e.isDisabled},on:{"update:value":function(t){e.val=t},focus:e.inputFocus}})],1)};i._withStripped=!0;var a={props:{label:String,inputVal:String,placeholder:String,errorMsg:String,maxLength:Number,isDisabled:String,type:{type:String,default:"input"}},data:function(){return{val:""}},mounted:function(){},components:{},created:function(){},watch:{val:{handler:function(e){this.$emit("update:inputVal",e)},immediate:!0},inputVal:{handler:function(e){this.val=e},immediate:!0}},methods:{inputFocus:function(){this.$emit("update:errorMsg","")}}},s=(n(276),n(1)),o=Object(s.a)(a,i,[],!1,null,"5a5e988b",null);o.options.__file="src/components/common/signup/com-input.vue";t.a=o.exports},276:function(e,t,n){"use strict";var i=n(232);n.n(i).a},278:function(e,t,n){"use strict";var i=n(233);n.n(i).a},282:function(e,t,n){"use strict";var i=n(235);n.n(i).a}}]);
//# sourceMappingURL=common.c55b17b3.js.map