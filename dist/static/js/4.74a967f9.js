(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{182:function(t,i,e){"use strict";i.a={POST_SUBSCRIBE:"/frontend/user/order-activity",GET_LIVEINFO:"/frontend/live/info",GET_SHAREINFO:"/frontend/share/info",GET_QUESTIONINFO:"/frontend/question/info",POST_QUESTIONINFO:"/frontend/user/apply-activity",GET_CREATEACCESSTOKEN:"/common/paas/create-access-token",GET_ONLINENUM:"/frontend/channel/get-online-num",GET_SHARESIGN:"/common/wechat/get-share-sign",GET_SDKTOKEN:"/frontend/live/sdk-token",GET_SEND:"/index/send",GET_SENDANNOUNCEMENT:"/initiator/channel/send-announcement",POST_GAG:"/initiator/user/gag",POST_GAGALL:"/initiator/user/gag-all",POST_KICK:"/initiator/user/kick",POST_EMAILSUBSCRIBE:"/frontend/user/email-subscribe",GET_MESSAGELIST:"/common/paas/message-list",GET_CAPTCHAID:"/common/message/get-captchaid",GET_CODE:"/common/message/send-code",GET_TEMPLATE:"/frontend/live/template",GET_DEFAULEREPLAY:"/frontend/replay/default-replay",GET_WARMINFO:"/manage/warm-up-manage/get"}},183:function(t,i,e){},184:function(t,i,e){"use strict";var a=e(7),n=e.n(a),s=e(11),o=e.n(s),c=e(0),r=e.n(c),h=e(46),l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"login-container"},[e("com-dialog",{attrs:{visible:t.visible,center:""},on:{"update:visible":function(i){t.visible=i},close:t.closed}},[e("div",[e("div",{staticClass:"rule"},[t._v("登录参与直播互动")]),t._v(" "),e("com-input",{staticClass:"mobile",attrs:{type:"input",placeholder:"请输入手机"},model:{value:t.mobile,callback:function(i){t.mobile=i},expression:"mobile"}}),t._v(" "),e("div",{attrs:{id:"captcha"}}),t._v(" "),e("com-input",{staticClass:"code",attrs:{type:"input",placeholder:"请输入验证码"},model:{value:t.code,callback:function(i){t.code=i},expression:"code"}}),t._v(" "),e("com-button",{staticClass:"codeBtn",attrs:{disabled:!t.codeEnable,type:"primary"},on:{click:t.getCode}},[t._v(t._s(t.codeText))])],1),t._v(" "),e("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[e("com-button",{attrs:{type:"primary",disabled:!t.submitEnable},on:{click:t.doLogin}},[t._v("登录")])],1)])],1)};l._withStripped=!0;var d=e(182),u=e(58),m={name:"ComLogin",data:()=>({visible:!1,time:60,captchaIns:null,key:null,verify:!1,mobile:"",code:"",mobileReg:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,captchaKey:""}),mounted(){this.$get(d.a.GET_CAPTCHAID).then(t=>{this.key=t.data,window.initNECaptcha({element:"#captcha",mode:"float",width:"100%",captchaId:this.key,onVerify:(t,i)=>{t?console.log(t):(this.verify=!0,this.captchaKey=i.validate)}},t=>{this.captchaIns=t},t=>{console.log(t)})})},methods:{getCode(){this.$config({handlers:!0}).$get(d.a.GET_CODE,{mobile:this.mobile,type:"CONSUMER_USER_LOGIN",captcha:this.captchaKey,__errHandler:!0}).then(t=>{this.time--,this.timer=setInterval(()=>{this.time--,0===this.time&&(clearInterval(this.timer),this.time=60)},1e3),console.log(t)})},doLogin(){this.$config({handlers:!0}).$post(u.a.POST_MOBILELOGIN,{mobile:this.mobile,code:this.code,wechatAuth:sessionStorage.getItem("wechatAuth"),__errHandler:!0}).then(t=>{this.$parent.updateLoginInfo(t.data),this.visible=!1,this.closed(),this.$emit("login",t.data)}).catch(()=>{this.verify=!1,this.captchaKey="",this.captchaIns.refresh()})},closed(){this.mobile="",this.time=60,this.verify=!1,this.captchaKey="",this.captchaIns.refresh(),clearInterval(this.timer)}},computed:{codeText(){return this.codeEnable||60===this.time?"发送验证码":`倒计时${this.time}秒`},codeEnable(){return this.mobileReg.test(this.mobile)&&this.verify&&60===this.time},submitEnable(){return this.mobileReg.test(this.mobile)&&this.verify&&this.code}}},v=(e(185),e(1)),p=Object(v.a)(m,l,[],!1,null,"9f4e7bf2",null);p.options.__file="src/components/login-box.vue";var g=p.exports;r.a.use(h.a);const y=new r.a;i.a={components:{ComLogin:g},data:()=>({login:null}),mounted(){this.login=this.$children.find(t=>"ComLogin"===t.$options.name),this.$route.meta.pop&&(this.$route.meta.pop=!1,this.login.visible=!0)},methods:{getAuthInfo:()=>sessionStorage.getItem("wechatAuth"),getLoginInfo:()=>JSON.parse(sessionStorage.getItem("login")),doAuth(t){let i=location.href;t&&(i=t),sessionStorage.getItem("wechatAuth")?location.href=i:(console.log(i),location.href=`/api/frontend/user/wechat-login?backUrl=${encodeURIComponent(i)}`)},doLogin(t){if(sessionStorage.getItem("wechatAuth"))this.login.visible=!0;else{let i=location.href;"string"==typeof t&&(i=t),-1===i.indexOf("?")?i+="?_pop=true":i+="&_pop=true",location.href=`/api/frontend/user/wechat-login?backUrl=${encodeURIComponent(i)}`}},updateLoginInfo(t){t?sessionStorage.setItem("login",o()(t)):(sessionStorage.removeItem("login"),sessionStorage.removeItem("wechatAuth"))},getMasterInfo:t=>new n.a((t,i)=>{sessionStorage.getItem("master")?t(JSON.parse(sessionStorage.getItem("master"))):y.$config({loading:!0,handlers:!0}).$get(u.a.GET_JOININFO).then(i=>{sessionStorage.setItem("master",o()(i.data)),t(i.data)}).catch(t=>{i(t)})})}}},185:function(t,i,e){"use strict";var a=e(183);e.n(a).a},189:function(t,i,e){"use strict";i.a={onLineNum:"INCREMENT_ONLINE",announcement:"ANNOUNCEMENT",kick:"KICK",gag:"GAG",gagAll:"GAG_ALL",beginLive:"BEGIN_LIVE",endLive:"FINISH_LIVE"}},199:function(t,i,e){},200:function(t,i,e){"use strict";e.d(i,"a",function(){return m});var a=e(11),n=e.n(a),s=e(180),o=e.n(s),c=e(0),r=e.n(c),h=e(182);const l=new r.a,d=o()("msgHandler"),u=o()("dispatchHandler");class m{constructor(){this._activityId="",this.handlerMap={}}init(t){window.Vhall.ready(()=>{this.service=VhallChat({channelId:t.channelId}),window.vhallChat=this.service,this[d]()}),window.Vhall.config({appId:t.appId,accountId:t.accountId,token:t.token}),console.log(n()(t))}set activityId(t){this._activityId=t}get activityId(){return this._activityId}send(t,i){if(""===this.activityId)return!1;l.$config({handlers:!0}).$get(h.a.GET_SEND,{activityId:this.activityId,type:t,content:i}).then(t=>{})}sendChat(t){this.service.emit(t)}sendCustomMsg(t,i){this.service.emitCustomMsg({type:t,body:i})}[d](){console.log("[chat]listening..."),window.vhallChat.onCustomMsg(t=>{let{type:i,body:e}=JSON.parse(t);this[u](i,e)}),window.vhallChat.on(t=>{this[u]("chat",t)})}regHandler(t,i){this.handlerMap[t]||(this.handlerMap[t]=[]);let e=this.handlerMap[t];e.includes(i)?console.log("重复注册消息"):e.push(i)}unregHandler(t,i){if(!this.handlerMap[t])return;let e=this.handlerMap[t],a=e.indexOf(i);-1!==a&&e.splice(a,1)}[u](t,i){let e=this.handlerMap[t];e&&0!==e.length&&e.forEach(t=>{t(i)})}}},201:function(t,i,e){},234:function(t,i,e){"use strict";var a=e(199);e.n(a).a},236:function(t,i,e){"use strict";var a=e(201);e.n(a).a},288:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"v-guid"},[e("p",{staticClass:"v-title"},[t._v("\n    "+t._s(t.activity.title)+"\n  ")]),t._v(" "),!t.activity.isCountdown||"NONE"===t.activity.viewCondition&&t.activity.countDown<1800||"Y"!==t.viewLimit.canAppoint?e("div",{staticClass:"v-summary"},[e("div",{domProps:{innerHTML:t._s(t.activity.description)}})]):t._e(),t._v(" "),t.activity.countDown>=1800?e("div",{staticClass:"v-operation"},["APPOINT"===t.activity.viewCondition?["Y"===t.viewLimit.canAppoint?[t.activity.isCountdown?e("com-countdown",{attrs:{time:t.activity.countDown}}):t._e(),t._v(" "),t.user.isApplay?[e("button",{staticClass:"primary-button"},[t._v("已报名")])]:[e("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage("/SignUp/")}}},[t._v("立即报名")]),t._v(" "),this.user.phone?t._e():e("a",{staticClass:"v-registered",attrs:{href:"javascript:;"},on:{click:function(i){t.jumpPage("/CheckState/")}}},[t._v("已报名")])]]:[t.user.isApplay?[e("button",{staticClass:"primary-button"},[t._v("已报名")])]:[this.user.phone?t._e():e("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage("/CheckState/")}}},[t._v("报名验证")])]]]:[t.activity.isCountdown?e("com-countdown",{attrs:{time:t.activity.countDown}}):t._e(),t._v(" "),t.user.isOrder?e("button",{staticClass:"primary-button"},[t._v("已预约")]):[e("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage("/SignUp/")}}},[t._v("预约")]),t._v(" "),this.user.phone?t._e():e("a",{staticClass:"v-registered",attrs:{href:"javascript:;"},on:{click:function(i){t.jumpPage("/CheckState/")}}},[t._v("已预约")])]]],2):e("div",{staticClass:"v-operation"},["APPOINT"===t.activity.viewCondition?["Y"===t.viewLimit.canAppoint?[t.activity.isCountdown?e("com-countdown",{attrs:{time:t.activity.countDown}}):t._e(),t._v(" "),t.user.isApplay?void 0:[e("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage("/SignUp/")}}},[t._v("立即报名")]),t._v(" "),this.user.phone?t._e():e("a",{staticClass:"v-registered",attrs:{href:"javascript:;"},on:{click:function(i){t.jumpPage("/CheckState/")}}},[t._v("已报名")])]]:[t.user.isApplay?void 0:[this.user.phone?t._e():e("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage("/CheckState/")}}},[t._v("报名验证")])]]]:[e("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage("/watch/")}}},[t._v("进入直播")])]],2)])};a._withStripped=!0;var n=e(59),s=e.n(n),o=e(8),c=e.n(o),r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"v-cundown"},[e("span",[t._v(t._s(t.showTime.day))]),t._v("天"),e("span",[t._v(t._s(t.showTime.hour))]),t._v("小时"),e("span",[t._v(t._s(t.showTime.minute))]),t._v("分"),e("span",[t._v(t._s(t.showTime.second))]),t._v("秒\n")])};r._withStripped=!0;var h={props:{time:Number},data:()=>({showTime:{day:0,hour:0,minute:0,second:0},timer:0}),mounted(){},components:{},created(){this.countDown(this.time)},watch:{},methods:{fomatDate(t){this.showTime.day=t/3600/24>>0,this.showTime.day<9&&(this.showTime.day="0"+this.showTime.day),this.showTime.hour=((t/3600%24>>0)+"").padStart(2,0),this.showTime.minute=((t/60%60>>0)+"").padStart(2,0),this.showTime.second=((t%60>>0)+"").padStart(2,0),1800===t&&(this.$emit("timeOut"),clearInterval(this.timer))},countDown(t){if(t>0){let i=setInterval(e=>{this.fomatDate(t--),t<0&&clearInterval(i)},1e3)}else this.fomatDate(0)}}},l=(e(234),e(1)),d=Object(l.a)(h,r,[],!1,null,"573d783f",null);d.options.__file="src/components/common/countdown/countdown.vue";var u=d.exports,m=e(184),v=e(200),p=e(45),g=e(2),y=e(189),f=e(182),_=e(58),I={mixins:[m.a],data:()=>({goUrl:"",goRegisteredUrl:"",activity:{viewCondition:"",title:"",description:"",isCountdown:!1,countDown:"",status:""},user:{phone:"",isApplay:!1,isOrder:!1},viewLimit:{finishTime:"",canAppoint:"Y"},vhallParams:{token:"",appId:"",channelId:"",accountId:""}}),mounted(){this.getInfo()},components:{"com-countdown":u},created(){},computed:Object(p.c)("tokenMager",{chatParams:t=>t.chatParams}),watch:{countDown:function(){console.log(this.activity.countDown)}},methods:c()({},Object(p.b)("tokenMager",{setChatParams:g.b}),{jumpPage(t){let i=t+this.$route.params.id;this.doAuth(i)},initSdk(){this.service=new v.a,this.service.init(this.vhallParams)},handleActivityStart(t){this.activity.countDown=1799},getInfo(){var t=this;return s()(function*(){let i=JSON.parse(sessionStorage.getItem("login"));i&&(t.user.phone=i.mobile),yield t.$config({handlers:!0}).$get(f.a.GET_LIVEINFO,{activityId:t.$route.params.id}).then(function(i){if(t.activity.viewCondition=i.data.activity.viewCondition,t.activity.status=i.data.activity.status,t.activity.title=i.data.activity.title,t.activity.countDown=i.data.activity.countDown,t.activity.description=i.data.activity.description,t.activity.isCountdown="COUNTDOWN"===i.data.guide.showType,t.user.isApplay=i.data.joinInfo.isApplay,t.user.isOrder=i.data.joinInfo.isOrder,i.data.viewLimit.canAppoint&&(t.viewLimit.canAppoint=i.data.viewLimit.canAppoint,t.viewLimit.finishTime=i.data.viewLimit.finishTime),t.activity.countDown<1800)"APPOINT"===t.activity.viewCondition?t.user.isApplay&&t.doAuth("/watch/"+t.$route.params.id):t.user.isOrder&&"NONE"===t.activity.viewCondition&&t.doAuth("/watch/"+t.$route.params.id);else{let i=t.activity.countDown,e=setInterval(function(a){--i<1800&&(t.activity.countDown=1799,clearInterval(e))},1e3)}"LIVING"===t.activity.status&&("APPOINT"===t.activity.viewCondition?t.user.isApplay&&t.doAuth("/watch/"+t.$route.params.id):t.user.isOrder&&"NONE"===t.activity.viewCondition&&t.doAuth("/watch/"+t.$route.params.id))}).catch(function(i){t.$messageBox({header:"提示",content:i.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}})}),t.getToken()})()},getToken(){("APPOINT"===this.activity.viewCondition&&this.user.isApplay||"APPOINT"!==this.activity.viewCondition)&&(this.chatParams.token?(this.vhallParams=this.chatParams,this.$nextTick(()=>{this.initSdk(),this.service.regHandler(y.a.BEGIN_LIVE,this.handleActivityStart)})):this.$config({handlers:!0}).$get(_.a.GET_USERREGACTIVITY,{activityId:this.$route.params.id}).then(t=>{this.$config({handlers:!0}).$get(f.a.GET_SDKTOKEN,{activityId:this.$route.params.id,activityUserId:t.data.activityUserId}).then(t=>{this.vhallParams.token=t.data.token,this.vhallParams.appId=t.data.appId,this.vhallParams.channelId=t.data.channelRoom,this.vhallParams.accountId=t.data.accountId,this.setChatParams(this.vhallParams),this.$nextTick(()=>{this.initSdk(),this.service.regHandler(y.a.BEGIN_LIVE,this.handleActivityStart)})})}))}})},w=(e(236),Object(l.a)(I,a,[],!1,null,"28ebadab",null));w.options.__file="src/pages/guide/index.vue";i.default=w.exports}}]);
//# sourceMappingURL=4.74a967f9.js.map