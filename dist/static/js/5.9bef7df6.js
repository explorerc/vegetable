(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{182:function(t,e,i){"use strict";e.a={POST_SUBSCRIBE:"/frontend/user/order-activity",GET_LIVEINFO:"/frontend/live/info",GET_SHAREINFO:"/frontend/share/info",GET_QUESTIONINFO:"/frontend/question/info",POST_QUESTIONINFO:"/frontend/user/apply-activity",GET_CREATEACCESSTOKEN:"/common/paas/create-access-token",GET_ONLINENUM:"/frontend/channel/get-online-num",GET_SHARESIGN:"/common/wechat/get-share-sign",GET_SDKTOKEN:"/frontend/live/sdk-token",GET_SEND:"/index/send",GET_SENDANNOUNCEMENT:"/initiator/channel/send-announcement",POST_GAG:"/initiator/user/gag",POST_GAGALL:"/initiator/user/gag-all",POST_KICK:"/initiator/user/kick",POST_EMAILSUBSCRIBE:"/frontend/user/email-subscribe",GET_MESSAGELIST:"/common/paas/message-list",GET_CAPTCHAID:"/common/message/get-captchaid",GET_CODE:"/common/message/send-code",GET_TEMPLATE:"/frontend/live/template",GET_DEFAULEREPLAY:"/frontend/replay/default-replay",GET_WARMINFO:"/manage/warm-up-manage/get"}},183:function(t,e,i){},184:function(t,e,i){"use strict";var a=i(7),s=i.n(a),n=i(11),o=i.n(n),c=i(0),r=i.n(c),l=i(46),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-container"},[i("com-dialog",{attrs:{visible:t.visible,center:""},on:{"update:visible":function(e){t.visible=e},close:t.closed}},[i("div",[i("div",{staticClass:"rule"},[t._v("登录参与直播互动")]),t._v(" "),i("com-input",{staticClass:"mobile",attrs:{type:"input",placeholder:"请输入手机"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),i("div",{attrs:{id:"captcha"}}),t._v(" "),i("com-input",{staticClass:"code",attrs:{type:"input",placeholder:"请输入验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t._v(" "),i("com-button",{staticClass:"codeBtn",attrs:{disabled:!t.codeEnable,type:"primary"},on:{click:t.getCode}},[t._v(t._s(t.codeText))])],1),t._v(" "),i("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[i("com-button",{attrs:{type:"primary",disabled:!t.submitEnable},on:{click:t.doLogin}},[t._v("登录")])],1)])],1)};h._withStripped=!0;var d=i(182),u=i(58),m={name:"ComLogin",data:()=>({visible:!1,time:60,captchaIns:null,key:null,verify:!1,mobile:"",code:"",mobileReg:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,captchaKey:""}),mounted(){this.$get(d.a.GET_CAPTCHAID).then(t=>{this.key=t.data,window.initNECaptcha({element:"#captcha",mode:"float",width:"100%",captchaId:this.key,onVerify:(t,e)=>{t?console.log(t):(this.verify=!0,this.captchaKey=e.validate)}},t=>{this.captchaIns=t},t=>{console.log(t)})})},methods:{getCode(){this.$config({handlers:!0}).$get(d.a.GET_CODE,{mobile:this.mobile,type:"CONSUMER_USER_LOGIN",captcha:this.captchaKey,__errHandler:!0}).then(t=>{this.time--,this.timer=setInterval(()=>{this.time--,0===this.time&&(clearInterval(this.timer),this.time=60)},1e3),console.log(t)})},doLogin(){this.$config({handlers:!0}).$post(u.a.POST_MOBILELOGIN,{mobile:this.mobile,code:this.code,wechatAuth:sessionStorage.getItem("wechatAuth"),__errHandler:!0}).then(t=>{this.$parent.updateLoginInfo(t.data),this.visible=!1,this.closed(),this.$emit("login",t.data)}).catch(()=>{this.verify=!1,this.captchaKey="",this.captchaIns.refresh()})},closed(){this.mobile="",this.time=60,this.verify=!1,this.captchaKey="",this.captchaIns.refresh(),clearInterval(this.timer)}},computed:{codeText(){return this.codeEnable||60===this.time?"发送验证码":`倒计时${this.time}秒`},codeEnable(){return this.mobileReg.test(this.mobile)&&this.verify&&60===this.time},submitEnable(){return this.mobileReg.test(this.mobile)&&this.verify&&this.code}}},v=(i(185),i(1)),p=Object(v.a)(m,h,[],!1,null,"9f4e7bf2",null);p.options.__file="src/components/login-box.vue";var g=p.exports;r.a.use(l.a);const I=new r.a;e.a={components:{ComLogin:g},data:()=>({login:null}),mounted(){this.login=this.$children.find(t=>"ComLogin"===t.$options.name),this.$route.meta.pop&&(this.$route.meta.pop=!1,this.login.visible=!0)},methods:{getAuthInfo:()=>sessionStorage.getItem("wechatAuth"),getLoginInfo:()=>JSON.parse(sessionStorage.getItem("login")),doAuth(t){let e=location.href;t&&(e=t),sessionStorage.getItem("wechatAuth")?location.href=e:(console.log(e),location.href=`/api/frontend/user/wechat-login?backUrl=${encodeURIComponent(e)}`)},doLogin(t){if(sessionStorage.getItem("wechatAuth"))this.login.visible=!0;else{let e=location.href;"string"==typeof t&&(e=t),-1===e.indexOf("?")?e+="?_pop=true":e+="&_pop=true",location.href=`/api/frontend/user/wechat-login?backUrl=${encodeURIComponent(e)}`}},updateLoginInfo(t){t?sessionStorage.setItem("login",o()(t)):(sessionStorage.removeItem("login"),sessionStorage.removeItem("wechatAuth"))},getMasterInfo:t=>new s.a((t,e)=>{sessionStorage.getItem("master")?t(JSON.parse(sessionStorage.getItem("master"))):I.$config({loading:!0,handlers:!0}).$get(u.a.GET_JOININFO).then(e=>{sessionStorage.setItem("master",o()(e.data)),t(e.data)}).catch(t=>{e(t)})})}}},185:function(t,e,i){"use strict";var a=i(183);i.n(a).a},189:function(t,e,i){"use strict";e.a={onLineNum:"INCREMENT_ONLINE",announcement:"ANNOUNCEMENT",kick:"KICK",gag:"GAG",gagAll:"GAG_ALL",beginLive:"BEGIN_LIVE",endLive:"FINISH_LIVE"}},191:function(t,e,i){t.exports=i.p+"static/img/success@2x.png"},200:function(t,e,i){"use strict";i.d(e,"a",function(){return m});var a=i(11),s=i.n(a),n=i(180),o=i.n(n),c=i(0),r=i.n(c),l=i(182);const h=new r.a,d=o()("msgHandler"),u=o()("dispatchHandler");class m{constructor(){this._activityId="",this.handlerMap={}}init(t){window.Vhall.ready(()=>{this.service=VhallChat({channelId:t.channelId}),window.vhallChat=this.service,this[d]()}),window.Vhall.config({appId:t.appId,accountId:t.accountId,token:t.token}),console.log(s()(t))}set activityId(t){this._activityId=t}get activityId(){return this._activityId}send(t,e){if(""===this.activityId)return!1;h.$config({handlers:!0}).$get(l.a.GET_SEND,{activityId:this.activityId,type:t,content:e}).then(t=>{})}sendChat(t){this.service.emit(t)}sendCustomMsg(t,e){this.service.emitCustomMsg({type:t,body:e})}[d](){console.log("[chat]listening..."),window.vhallChat.onCustomMsg(t=>{let{type:e,body:i}=JSON.parse(t);this[u](e,i)}),window.vhallChat.on(t=>{this[u]("chat",t)})}regHandler(t,e){this.handlerMap[t]||(this.handlerMap[t]=[]);let i=this.handlerMap[t];i.includes(e)?console.log("重复注册消息"):i.push(e)}unregHandler(t,e){if(!this.handlerMap[t])return;let i=this.handlerMap[t],a=i.indexOf(e);-1!==a&&i.splice(a,1)}[u](t,e){let i=this.handlerMap[t];i&&0!==i.length&&i.forEach(t=>{t(e)})}}},202:function(t,e,i){},238:function(t,e,i){"use strict";var a=i(202);i.n(a).a},292:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.activity.countDown<1800||"LIVING"===t.activity.status?a("div",{staticClass:"v-success"},[a("img",{staticClass:"v-img",attrs:{src:i(191),alt:""}}),t._v(" "),t._m(0),t._v(" "),a("button",{staticClass:"primary-button",on:{click:t.accountSubmit}},[t._v("进入直播")])]):a("div",{staticClass:"v-success"},[a("img",{staticClass:"v-img",attrs:{src:i(191),alt:""}}),t._v(" "),a("p",{staticClass:"v-success-title"},["APPOINT"===t.activity.viewCondition?a("span",[t._v("报名成功")]):"NONE"===t.activity.viewCondition?a("span",[t._v("预约成功")]):t._e()]),t._v(" "),a("p",[t._v("活动将于"),a("span",{staticClass:"v-red"},[t._v(t._s(t.activity.startTime))]),t._v("准时开播")])])};a._withStripped=!0;var s=i(59),n=i.n(s),o=i(8),c=i.n(o),r=i(184),l=i(200),h=i(45),d=i(2),u=i(189),m=i(182),v=i(58),p={mixins:[r.a],data:()=>({activity:{viewCondition:"",status:"",startTime:"",countDown:""},user:{phone:"",isApplay:!1,isOrder:!1},vhallParams:{token:"",appId:"",channelId:"",accountId:""}}),mounted(){},components:{},created(){this.getInfo()},computed:Object(h.c)("tokenMager",{chatParams:t=>t.chatParams}),watch:{},methods:c()({},Object(h.b)("tokenMager",{setChatParams:d.b}),{accountSubmit(){this.doAuth("/watch/"+this.$route.params.id)},initSdk(){this.service=new l.a,this.service.init(this.vhallParams)},handleActivityStart(t){this.activity.countDown=1799},getInfo(){var t=this;return n()(function*(){yield t.$config({handlers:!0}).$get(m.a.GET_LIVEINFO,{activityId:t.$route.params.id}).then(function(e){t.activity.viewCondition=e.data.activity.viewCondition,t.activity.status=e.data.activity.status,t.activity.startTime=e.data.activity.startTime,t.activity.countDown=e.data.activity.countDown,t.user.isApplay=e.data.joinInfo.isApplay,t.user.isOrder=e.data.joinInfo.isOrder,("LIVING"===t.activity.status||t.activity.countDown<=1799)&&("APPOINT"===t.activity.viewCondition?e.data.joinInfo.isApplay&&t.doAuth("/watch/"+t.$route.params.id):e.data.joinInfo.isOrder&&"NONE"===t.activity.viewCondition&&t.doAuth("/watch/"+t.$route.params.id))}),t.getToken()})()},getToken(){("APPOINT"===this.activity.viewCondition&&this.user.isApplay||"APPOINT"!==this.activity.viewCondition)&&(this.chatParams.token?(this.vhallParams=this.chatParams,this.$nextTick(()=>{this.initSdk(),this.service.regHandler(u.a.BEGIN_LIVE,this.handleActivityStart)})):this.$config({handlers:!0}).$get(v.a.GET_USERREGACTIVITY,{activityId:this.$route.params.id}).then(t=>{this.$config({handlers:!0}).$get(m.a.GET_SDKTOKEN,{activityId:this.$route.params.id,activityUserId:t.data.activityUserId}).then(t=>{this.vhallParams.token=t.data.token,this.vhallParams.appId=t.data.appId,this.vhallParams.channelId=t.data.channelRoom,this.vhallParams.accountId=t.data.accountId,this.setChatParams(this.vhallParams),this.$nextTick(()=>{this.initSdk(),this.service.regHandler(u.a.BEGIN_LIVE,this.handleActivityStart)})})}))}})},g=(i(238),i(1)),I=Object(g.a)(p,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"v-start-title"},[e("span",[this._v("直播将要开始啦")])])}],!1,null,"3ffef81c",null);I.options.__file="src/pages/guide/success.vue";e.default=I.exports}}]);
//# sourceMappingURL=5.9bef7df6.js.map