(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e,t,i){"use strict";t.a={POST_SUBSCRIBE:"/frontend/user/order-activity",GET_LIVEINFO:"/frontend/live/info",GET_SHAREINFO:"/frontend/share/info",GET_QUESTIONINFO:"/frontend/question/info",POST_QUESTIONINFO:"/frontend/user/apply-activity",GET_CREATEACCESSTOKEN:"/common/paas/create-access-token",GET_ONLINENUM:"/frontend/channel/get-online-num",GET_SHARESIGN:"/common/wechat/get-share-sign",GET_SDKTOKEN:"/frontend/live/sdk-token",GET_SEND:"/index/send",GET_SENDANNOUNCEMENT:"/initiator/channel/send-announcement",POST_GAG:"/initiator/user/gag",POST_GAGALL:"/initiator/user/gag-all",POST_KICK:"/initiator/user/kick",POST_EMAILSUBSCRIBE:"/frontend/user/email-subscribe",GET_MESSAGELIST:"/common/paas/message-list",GET_CAPTCHAID:"/common/message/get-captchaid",GET_CODE:"/common/message/send-code",GET_TEMPLATE:"/frontend/live/template",GET_DEFAULEREPLAY:"/frontend/replay/default-replay",GET_WARMINFO:"/frontend/live/warm-up"}},224:function(e,t,i){"use strict";var n=i(10),o=i.n(n),s=i(17),a=i.n(s),r=i(0),c=i.n(r),h=i(68),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-container"},[i("com-dialog",{attrs:{visible:e.visible,center:""},on:{"update:visible":function(t){e.visible=t},close:e.closed}},[i("div",[i("div",{staticClass:"rule"},[e._v("登录参与直播互动")]),e._v(" "),i("com-input",{staticClass:"mobile",attrs:{type:"input",placeholder:"请输入手机","error-tips":e.phoneErrorMsg},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),e._v(" "),i("div",{attrs:{id:"captcha"}}),e._v(" "),i("com-input",{staticClass:"code",attrs:{type:"input",placeholder:"请输入验证码","error-tips":e.codeErrorMsg},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e._v(" "),i("com-button",{staticClass:"codeBtn",attrs:{disabled:!e.codeEnable,type:"primary"},on:{click:e.getCode}},[e._v(e._s(e.codeText))])],1),e._v(" "),i("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[i("com-button",{attrs:{type:"primary",disabled:!e.submitEnable},on:{click:e.doLogin}},[e._v("登录")])],1)])],1)};l._withStripped=!0;var u=i(223),d=i(70),p={name:"ComLogin",data:function(){return{visible:!1,time:60,captchaIns:null,key:null,verify:!1,mobile:"",code:"",mobileReg:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,captchaKey:"",phoneErrorMsg:"",codeErrorMsg:""}},mounted:function(){var e=this;this.$get(u.a.GET_CAPTCHAID).then(function(t){e.key=t.data,window.initNECaptcha({element:"#captcha",mode:"float",width:"100%",captchaId:e.key,onVerify:function(t,i){t?console.log(t):(e.verify=!0,e.captchaKey=i.validate)}},function(t){e.captchaIns=t},function(e){console.log(e)})})},methods:{getCode:function(){var e=this;if(!this.verification(this.mobile,"phone"))return!1;this.$config({handlers:!0}).$get(u.a.GET_CODE,{mobile:this.mobile,type:"CONSUMER_USER_LOGIN",captcha:this.captchaKey,__errHandler:!0}).then(function(t){e.time--,e.timer=setInterval(function(){e.time--,0===e.time&&(clearInterval(e.timer),e.time=60)},1e3),console.log(t)})},doLogin:function(){var e=this;return!!this.verification(this.mobile,"phone")&&(!!this.verification(this.code,"code")&&void this.$config({handlers:!0}).$post(d.a.POST_MOBILELOGIN,{mobile:this.mobile,code:this.code,wechatAuth:sessionStorage.getItem("wechatAuth"),__errHandler:!0}).then(function(t){e.$parent.updateLoginInfo(t.data),e.visible=!1,e.closed(),e.$emit("login",t.data)}).catch(function(t){10020===t.code?e.codeErrorMsg=t.msg:11061===t.code?e.phoneErrorMsg=t.msg:11062===t.code&&(e.phoneErrorMsg=t.msg),e.verify=!1,e.captchaKey="",e.captchaIns.refresh()}))},closed:function(){this.mobile="",this.time=60,this.verify=!1,this.captchaKey="",this.captchaIns.refresh(),clearInterval(this.timer)},verification:function(e,t){return"phone"===t?!!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(e)||(this.phoneErrorMsg="请正确填写手机号",!1):"code"===t?!!/^\d{6}$/.test(e)||(this.codeErrorMsg="请输入正确验证码",!1):void 0}},computed:{codeText:function(){return this.codeEnable||60===this.time?"发送验证码":"倒计时"+this.time+"秒"},codeEnable:function(){return this.mobileReg.test(this.mobile)&&this.verify&&60===this.time},submitEnable:function(){return this.mobileReg.test(this.mobile)&&this.verify&&this.code}}},m=(i(272),i(1)),f=Object(m.a)(p,l,[],!1,null,"9f4e7bf2",null);f.options.__file="src/components/login-box.vue";var g=f.exports;c.a.use(h.a);var v=new c.a;t.a={components:{ComLogin:g},data:function(){return{login:null}},mounted:function(){this.login=this.$children.find(function(e){return"ComLogin"===e.$options.name}),this.$route.meta.pop&&(this.$route.meta.pop=!1,this.login.visible=!0)},methods:{getAuthInfo:function(){return sessionStorage.getItem("wechatAuth")},getLoginInfo:function(){return JSON.parse(sessionStorage.getItem("login"))},doAuth:function(e){var t=location.href;e&&(t=e),!sessionStorage.getItem("wechatAuth")&&this.isWx()?(console.log(t),location.href=t+"?wechatAuth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbmlkIjoib1Y4WXkwbUpWVW90NTNkMmQxMGp4X1c5alVPZyJ9 .0e3 IszThWQZDZAn-Ycj_WeaLJ4MSvcg02f7NUqYmPcE"):location.href=t},doLogin:function(e){if(!sessionStorage.getItem("wechatAuth")&&this.isWx()){var t=location.href;"string"==typeof e&&(t=e),t=location.href+"?wechatAuth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbmlkIjoib1Y4WXkwbUpWVW90NTNkMmQxMGp4X1c5alVPZyJ9 .0e3 IszThWQZDZAn-Ycj_WeaLJ4MSvcg02f7NUqYmPcE",location.href=t}else this.login.visible=!0},updateLoginInfo:function(e){e?sessionStorage.setItem("login",a()(e)):(sessionStorage.removeItem("login"),sessionStorage.removeItem("wechatAuth"))},getMasterInfo:function(e){return new o.a(function(e,t){sessionStorage.getItem("master")?e(JSON.parse(sessionStorage.getItem("master"))):v.$config({loading:!0,handlers:!0}).$get(d.a.GET_JOININFO).then(function(t){sessionStorage.setItem("master",a()(t.data)),e(t.data)}).catch(function(e){t(e)})})},isWx:function(){return!(-1===navigator.userAgent.toLowerCase().indexOf("micromessenger"))}}}},225:function(e,t,i){"use strict";t.a={onLineNum:"INCREMENT_ONLINE",announcement:"ANNOUNCEMENT",kick:"KICK",gag:"GAG",gagAll:"GAG_ALL",beginLive:"BEGIN_LIVE",endLive:"FINISH_LIVE"}},226:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var n=i(217),o=i.n(n);function s(e){o.a.config({debug:!0,appId:e.wxShareData.appId,timestamp:e.wxShareData.timestamp,nonceStr:e.wxShareData.nonceStr,signature:e.wxShareData.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]}),o.a.ready(function(){o.a.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"],success:function(e){console.log(e.checkResult,789486)}}),o.a.onMenuShareTimeline({title:e.shareData.title,desc:e.shareDatadesc,link:e.shareDatalink+(e.shareUser.share_id?"?shareId="+e.shareUser.share_id+"-3":""),imgUrl:e.shareDataimgUrl,success:function(){},cancel:function(){}}),o.a.onMenuShareAppMessage({title:e.shareData.title,desc:e.shareData.desc,link:e.shareData.link+(e.shareUser.share_id?"?shareId="+e.shareUser.share_id+"-3":""),imgUrl:e.shareData.imgUrl,success:function(){},cancel:function(){}}),o.a.onMenuShareQQ({title:e.shareData.title,desc:e.shareData.desc,link:e.shareData.link+(e.shareUser.share_id?"?shareId="+e.shareUser.share_id+"-2":""),imgUrl:e.shareData.imgUrl,success:function(){},cancel:function(){}}),o.a.onMenuShareWeibo({title:e.shareData.title,desc:e.shareData.desc,link:e.shareData.link+(e.shareUser.share_id?"?shareId="+e.shareUser.share_id+"-1":""),imgUrl:e.shareData.imgUrl,success:function(){},cancel:function(){}}),o.a.onMenuShareQZone({title:e.shareData.title,desc:e.shareData.desc,link:e.shareData.link+(e.shareUser.share_id?"?shareId="+e.shareUser.share_id+"-2":""),imgUrl:e.shareData.imgUrl,success:function(){},cancel:function(){}})}),o.a.error(function(e){console.log(e,6666)})}},228:function(e,t,i){},229:function(e,t,i){},231:function(e,t,i){},235:function(e,t,i){e.exports=i.p+"static/img/success@2x.png"},260:function(e,t,i){"use strict";var n=i(17),o=i.n(n),s=i(72),a=i.n(s),r=i(73),c=i.n(r),h=i(104),l=i.n(h),u=i(0),d=i.n(u),p=i(223),m=new d.a,f=l()("msgHandler"),g=l()("dispatchHandler"),v=function(){function e(){a()(this,e),this._activityId="",this.handlerMap={}}return c()(e,[{key:"init",value:function(e){var t=this;window.Vhall.ready(function(){t.service=VhallChat({channelId:e.channelId}),window.vhallChat=t.service,t[f]()}),window.Vhall.config({appId:e.appId,accountId:e.accountId,token:e.token}),console.log(o()(e))}},{key:"send",value:function(e,t){if(""===this.activityId)return!1;m.$config({handlers:!0}).$get(p.a.GET_SEND,{activityId:this.activityId,type:e,content:t}).then(function(e){})}},{key:"sendChat",value:function(e){this.service.emit(e)}},{key:"sendCustomMsg",value:function(e,t){this.service.emitCustomMsg({type:e,body:t})}},{key:f,value:function(){var e=this;console.log("[chat]listening..."),window.vhallChat.onCustomMsg(function(t){var i=JSON.parse(t),n=i.type,o=i.body;e[g](n,o)}),window.vhallChat.on(function(t){e[g]("chat",t)})}},{key:"regHandler",value:function(e,t){this.handlerMap[e]||(this.handlerMap[e]=[]);var i=this.handlerMap[e];i.includes(t)?console.log("重复注册消息"):i.push(t)}},{key:"unregHandler",value:function(e,t){if(this.handlerMap[e]){var i=this.handlerMap[e],n=i.indexOf(t);-1!==n&&i.splice(n,1)}}},{key:g,value:function(e,t){var i=this.handlerMap[e];i&&0!==i.length&&i.forEach(function(e){e(t)})}},{key:"activityId",set:function(e){this._activityId=e},get:function(){return this._activityId}}]),e}();t.a=v},261:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"input-form"},[i("label",{staticClass:"v-label"},[e._v("\n    "+e._s(e.label)+"\n  ")]),e._v(" "),i("com-input",{class:{warning:e.errorMsg},attrs:{value:e.val,placeholder:e.placeholder,type:e.type,"max-length":e.maxLength,"error-tips":e.errorMsg,disabled:e.isDisabled},on:{"update:value":function(t){e.val=t},focus:e.inputFocus}})],1)};n._withStripped=!0;var o={props:{label:String,inputVal:String,placeholder:String,errorMsg:String,maxLength:Number,isDisabled:String,type:{type:String,default:"input"}},data:function(){return{val:""}},mounted:function(){},components:{},created:function(){},watch:{val:{handler:function(e){this.$emit("update:inputVal",e)},immediate:!0},inputVal:{handler:function(e){this.val=e},immediate:!0}},methods:{inputFocus:function(){this.$emit("update:errorMsg","")}}},s=(i(266),i(1)),a=Object(s.a)(o,n,[],!1,null,"5a5e988b",null);a.options.__file="src/components/common/signup/com-input.vue";t.a=a.exports},262:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-vercode"},[i("div",{attrs:{id:"captcha"}}),e._v(" "),i("div",{staticClass:"v-input-from"},[i("com-input",{class:{warning:e.errorMsg},attrs:{value:e.val,placeholder:e.placeholder,type:"mobile","max-length":e.maxLength,"error-tips":e.errorMsg,codeType:e.codeType},on:{"update:value":function(t){e.val=t},blur:e.pushCode,focus:e.inputFocus}}),e._v(" "),i("a",{staticClass:"v-getcode",class:{prohibit:e.isProhibit},attrs:{href:"javascript:;"},on:{click:function(t){e.getCode()}}},[e._v("获取验证码\n      "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.isSend,expression:"isSend"}],staticClass:"v-getcode-span"},[e._v("(\n        "),i("em",[e._v(e._s(e.second))]),e._v("s)")])])],1)])};n._withStripped=!0;var o=i(223),s={props:{code:String,phone:String,isGetCode:Boolean,placeholder:String,maxLength:Number,errorMsg:String,codeType:String},data:function(){return{key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,val:""}},mounted:function(){console.log(this.phone)},components:{},created:function(){var e=this;this.$get(o.a.GET_CAPTCHAID).then(function(t){var i=e;e.key=t.data,window.initNECaptcha({captchaId:i.key,element:"#captcha",mode:"float",width:"100%",onReady:function(e){},onVerify:function(e,t){t&&(i.phoneKey=t.validate,i.isImg=!0),e&&console.log(e)},onError:function(){}},function(e){i.cap=e})})},destroyed:function(){clearInterval(this.timerr)},watch:{phone:function(e){this.isGetCodePermission(!0)},isImg:function(e){this.isGetCodePermission()},isGetCode:function(){this.isGetCode&&(clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh())},val:{handler:function(e){this.$emit("update:code",e)},immediate:!0}},methods:{getCode:function(){var e=this;if(this.isProhibit)return!1;var t={mobile:this.phone,type:this.codeType,captcha:this.phoneKey,__errHandler:!0};this.$config({handlers:!0}).$get(o.a.GET_CODE,t).then(function(t){e.isSend=!0,e.isProhibit=!0,clearInterval(e.timerr),e.timerr=setInterval(function(){e.second--,e.second<=0&&(clearInterval(e.timerr),e.isSend=!1,e.isProhibit=!0,e.second=60,e.isImg=!1,e.phoneKey="",e.cap.refresh())},1e3)}).catch(function(t){10050===t.code?e.$emit("update:errorMsg","验证码输入过于频繁"):200!==t.code&&e.$emit("update:errorMsg",t.msg)})},isGetCodePermission:function(e){this.isImg&&this.verificationPhone()?(this.isProhibit=!1,this.second>0&&(this.isSend=!1,this.isProhibit=!1,this.second=60,this.mobileOpacity=1,clearInterval(this.timerr),e&&(this.isImg=!1,this.phoneKey="",this.cap.refresh()))):this.isProhibit=!0},pushCode:function(){this.$emit("inputFocus",this.code)},inputFocus:function(){this.$emit("update:errorMsg","")},verificationPhone:function(){return console.log(this.phone),!(""===this.phone||!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phone))}}},a=(i(268),i(1)),r=Object(a.a)(s,n,[],!1,null,"15c0d488",null);r.options.__file="src/components/common/signup/com-code.vue";t.a=r.exports},266:function(e,t,i){"use strict";var n=i(228);i.n(n).a},268:function(e,t,i){"use strict";var n=i(229);i.n(n).a},272:function(e,t,i){"use strict";var n=i(231);i.n(n).a}}]);
//# sourceMappingURL=common.ee07d08b.js.map