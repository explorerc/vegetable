(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{182:function(t,i,e){"use strict";i.a={POST_SUBSCRIBE:"/frontend/user/order-activity",GET_LIVEINFO:"/frontend/live/info",GET_SHAREINFO:"/frontend/share/info",GET_QUESTIONINFO:"/frontend/question/info",POST_QUESTIONINFO:"/frontend/user/apply-activity",GET_CREATEACCESSTOKEN:"/common/paas/create-access-token",GET_ONLINENUM:"/frontend/channel/get-online-num",GET_SHARESIGN:"/common/wechat/get-share-sign",GET_SDKTOKEN:"/frontend/live/sdk-token",GET_SEND:"/index/send",GET_SENDANNOUNCEMENT:"/initiator/channel/send-announcement",POST_GAG:"/initiator/user/gag",POST_GAGALL:"/initiator/user/gag-all",POST_KICK:"/initiator/user/kick",POST_EMAILSUBSCRIBE:"/frontend/user/email-subscribe",GET_MESSAGELIST:"/common/paas/message-list",GET_CAPTCHAID:"/common/message/get-captchaid",GET_CODE:"/common/message/send-code",GET_TEMPLATE:"/frontend/live/template",GET_DEFAULEREPLAY:"/frontend/replay/default-replay",GET_WARMINFO:"/frontend/live/warm-up"}},183:function(t,i,e){},184:function(t,i,e){"use strict";var a=e(7),s=e.n(a),n=e(11),o=e.n(n),c=e(0),r=e.n(c),h=e(46),l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"login-container"},[e("com-dialog",{attrs:{visible:t.visible,center:""},on:{"update:visible":function(i){t.visible=i},close:t.closed}},[e("div",[e("div",{staticClass:"rule"},[t._v("登录参与直播互动")]),t._v(" "),e("com-input",{staticClass:"mobile",attrs:{type:"input",placeholder:"请输入手机"},model:{value:t.mobile,callback:function(i){t.mobile=i},expression:"mobile"}}),t._v(" "),e("div",{attrs:{id:"captcha"}}),t._v(" "),e("com-input",{staticClass:"code",attrs:{type:"input",placeholder:"请输入验证码"},model:{value:t.code,callback:function(i){t.code=i},expression:"code"}}),t._v(" "),e("com-button",{staticClass:"codeBtn",attrs:{disabled:!t.codeEnable,type:"primary"},on:{click:t.getCode}},[t._v(t._s(t.codeText))])],1),t._v(" "),e("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[e("com-button",{attrs:{type:"primary",disabled:!t.submitEnable},on:{click:t.doLogin}},[t._v("登录")])],1)])],1)};l._withStripped=!0;var d=e(182),m=e(58),v={name:"ComLogin",data:()=>({visible:!1,time:60,captchaIns:null,key:null,verify:!1,mobile:"",code:"",mobileReg:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,captchaKey:""}),mounted(){this.$get(d.a.GET_CAPTCHAID).then(t=>{this.key=t.data,window.initNECaptcha({element:"#captcha",mode:"float",width:"100%",captchaId:this.key,onVerify:(t,i)=>{t?console.log(t):(this.verify=!0,this.captchaKey=i.validate)}},t=>{this.captchaIns=t},t=>{console.log(t)})})},methods:{getCode(){this.$config({handlers:!0}).$get(d.a.GET_CODE,{mobile:this.mobile,type:"CONSUMER_USER_LOGIN",captcha:this.captchaKey,__errHandler:!0}).then(t=>{this.time--,this.timer=setInterval(()=>{this.time--,0===this.time&&(clearInterval(this.timer),this.time=60)},1e3),console.log(t)})},doLogin(){this.$config({handlers:!0}).$post(m.a.POST_MOBILELOGIN,{mobile:this.mobile,code:this.code,wechatAuth:sessionStorage.getItem("wechatAuth"),__errHandler:!0}).then(t=>{this.$parent.updateLoginInfo(t.data),this.visible=!1,this.closed(),this.$emit("login",t.data)}).catch(()=>{this.verify=!1,this.captchaKey="",this.captchaIns.refresh()})},closed(){this.mobile="",this.time=60,this.verify=!1,this.captchaKey="",this.captchaIns.refresh(),clearInterval(this.timer)}},computed:{codeText(){return this.codeEnable||60===this.time?"发送验证码":`倒计时${this.time}秒`},codeEnable(){return this.mobileReg.test(this.mobile)&&this.verify&&60===this.time},submitEnable(){return this.mobileReg.test(this.mobile)&&this.verify&&this.code}}},u=(e(185),e(1)),p=Object(u.a)(v,l,[],!1,null,"9f4e7bf2",null);p.options.__file="src/components/login-box.vue";var I=p.exports;r.a.use(h.a);const g=new r.a;i.a={components:{ComLogin:I},data:()=>({login:null}),mounted(){this.login=this.$children.find(t=>"ComLogin"===t.$options.name),this.$route.meta.pop&&(this.$route.meta.pop=!1,this.login.visible=!0)},methods:{getAuthInfo:()=>sessionStorage.getItem("wechatAuth"),getLoginInfo:()=>JSON.parse(sessionStorage.getItem("login")),doAuth(t){let i=location.href;t&&(i=t),sessionStorage.getItem("wechatAuth")?location.href=i:(console.log(i),location.href=`${i}?wechatAuth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbmlkIjoib1Y4WXkwbUpWVW90NTNkMmQxMGp4X1c5alVPZyJ9 .0e3 IszThWQZDZAn-Ycj_WeaLJ4MSvcg02f7NUqYmPcE`)},doLogin(t){if(sessionStorage.getItem("wechatAuth"))this.login.visible=!0;else{let i=location.href;"string"==typeof t&&(i=t),i=`${location.href}?wechatAuth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbmlkIjoib1Y4WXkwbUpWVW90NTNkMmQxMGp4X1c5alVPZyJ9 .0e3 IszThWQZDZAn-Ycj_WeaLJ4MSvcg02f7NUqYmPcE`,location.href=i}},updateLoginInfo(t){t?sessionStorage.setItem("login",o()(t)):(sessionStorage.removeItem("login"),sessionStorage.removeItem("wechatAuth"))},getMasterInfo:t=>new s.a((t,i)=>{sessionStorage.getItem("master")?t(JSON.parse(sessionStorage.getItem("master"))):g.$config({loading:!0,handlers:!0}).$get(m.a.GET_JOININFO).then(i=>{sessionStorage.setItem("master",o()(i.data)),t(i.data)}).catch(t=>{i(t)})})}}},185:function(t,i,e){"use strict";var a=e(183);e.n(a).a},189:function(t,i,e){"use strict";i.a={onLineNum:"INCREMENT_ONLINE",announcement:"ANNOUNCEMENT",kick:"KICK",gag:"GAG",gagAll:"GAG_ALL",beginLive:"BEGIN_LIVE",endLive:"FINISH_LIVE"}},191:function(t,i,e){t.exports=e.p+"static/img/success@2x.png"},200:function(t,i,e){"use strict";e.d(i,"a",function(){return v});var a=e(11),s=e.n(a),n=e(180),o=e.n(n),c=e(0),r=e.n(c),h=e(182);const l=new r.a,d=o()("msgHandler"),m=o()("dispatchHandler");class v{constructor(){this._activityId="",this.handlerMap={}}init(t){window.Vhall.ready(()=>{this.service=VhallChat({channelId:t.channelId}),window.vhallChat=this.service,this[d]()}),window.Vhall.config({appId:t.appId,accountId:t.accountId,token:t.token}),console.log(s()(t))}set activityId(t){this._activityId=t}get activityId(){return this._activityId}send(t,i){if(""===this.activityId)return!1;l.$config({handlers:!0}).$get(h.a.GET_SEND,{activityId:this.activityId,type:t,content:i}).then(t=>{})}sendChat(t){this.service.emit(t)}sendCustomMsg(t,i){this.service.emitCustomMsg({type:t,body:i})}[d](){console.log("[chat]listening..."),window.vhallChat.onCustomMsg(t=>{let{type:i,body:e}=JSON.parse(t);this[m](i,e)}),window.vhallChat.on(t=>{this[m]("chat",t)})}regHandler(t,i){this.handlerMap[t]||(this.handlerMap[t]=[]);let e=this.handlerMap[t];e.includes(i)?console.log("重复注册消息"):e.push(i)}unregHandler(t,i){if(!this.handlerMap[t])return;let e=this.handlerMap[t],a=e.indexOf(i);-1!==a&&e.splice(a,1)}[m](t,i){let e=this.handlerMap[t];e&&0!==e.length&&e.forEach(t=>{t(i)})}}},202:function(t,i,e){},238:function(t,i,e){"use strict";var a=e(202);e.n(a).a},292:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.activity.countDown<1800||"LIVING"===t.activity.status?a("div",{staticClass:"v-success"},[a("img",{staticClass:"v-img",attrs:{src:e(191),alt:""}}),t._v(" "),t._m(0),t._v(" "),a("button",{staticClass:"primary-button",on:{click:t.accountSubmit}},[t._v("进入直播")])]):a("div",{staticClass:"v-success"},[a("img",{staticClass:"v-img",attrs:{src:e(191),alt:""}}),t._v(" "),a("p",{staticClass:"v-success-title"},["APPOINT"===t.activity.viewCondition?a("span",[t._v("报名成功")]):"NONE"===t.activity.viewCondition?a("span",[t._v("预约成功")]):t._e()]),t._v(" "),a("p",[t._v("活动将于"),a("span",{staticClass:"v-red"},[t._v(t._s(t.activity.startTime))]),t._v("准时开播")])])};a._withStripped=!0;var s=e(59),n=e.n(s),o=e(8),c=e.n(o),r=e(184),h=e(200),l=e(45),d=e(2),m=e(189),v=e(182),u=e(58),p={mixins:[r.a],data:()=>({activity:{viewCondition:"",status:"",startTime:"",countDown:""},user:{phone:"",isApplay:!1,isOrder:!1},vhallParams:{token:"",appId:"",channelId:"",accountId:""}}),mounted(){},components:{},created(){this.getInfo()},computed:Object(l.c)("tokenMager",{chatParams:t=>t.chatParams}),watch:{},methods:c()({},Object(l.b)("tokenMager",{setChatParams:d.b}),{accountSubmit(){this.doAuth(this.MOBILE_HOST+"watch/"+this.$route.params.id)},initSdk(){this.service=new h.a,this.service.init(this.vhallParams)},handleActivityStart(t){this.activity.countDown=1799},getInfo(){var t=this;return n()(function*(){yield t.$config({handlers:!0}).$get(v.a.GET_LIVEINFO,{activityId:t.$route.params.id}).then(function(i){t.activity.viewCondition=i.data.activity.viewCondition,t.activity.status=i.data.activity.status,t.activity.startTime=i.data.activity.startTime,t.activity.countDown=i.data.activity.countDown,t.user.isApplay=i.data.joinInfo.isApplay,t.user.isOrder=i.data.joinInfo.isOrder,("LIVING"===t.activity.status||t.activity.countDown<=1799)&&!i.data.viewLimit.canAppoint&&("APPOINT"===t.activity.viewCondition?i.data.joinInfo.isApplay&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):i.data.joinInfo.isOrder&&"NONE"===t.activity.viewCondition&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id))}),t.getToken()})()},getToken(){("APPOINT"===this.activity.viewCondition&&this.user.isApplay||"APPOINT"!==this.activity.viewCondition)&&(this.chatParams.token?(this.vhallParams=this.chatParams,this.$nextTick(()=>{this.initSdk(),this.service.regHandler(m.a.BEGIN_LIVE,this.handleActivityStart)})):this.$config({handlers:!0}).$get(u.a.GET_USERREGACTIVITY,{activityId:this.$route.params.id}).then(t=>{this.$config({handlers:!0}).$get(v.a.GET_SDKTOKEN,{activityId:this.$route.params.id,activityUserId:t.data.activityUserId}).then(t=>{this.vhallParams.token=t.data.token,this.vhallParams.appId=t.data.appId,this.vhallParams.channelId=t.data.channelRoom,this.vhallParams.accountId=t.data.accountId,this.setChatParams(this.vhallParams),this.$nextTick(()=>{this.initSdk(),this.service.regHandler(m.a.BEGIN_LIVE,this.handleActivityStart)})})}))}})},I=(e(238),e(1)),g=Object(I.a)(p,a,[function(){var t=this.$createElement,i=this._self._c||t;return i("p",{staticClass:"v-start-title"},[i("span",[this._v("直播将要开始啦")])])}],!1,null,"3ffef81c",null);g.options.__file="src/pages/guide/success.vue";i.default=g.exports}}]);
//# sourceMappingURL=5.642dad1e.js.map