(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9,10],{192:function(t,i,a){},193:function(t,i,a){},194:function(t,i,a){"use strict";a.d(i,"a",function(){return n});var s=a(181),e=a.n(s);function n(t){e.a.config({debug:!0,appId:t.wxShareData.appId,timestamp:t.wxShareData.timestamp,nonceStr:t.wxShareData.nonceStr,signature:t.wxShareData.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]})}},196:function(t,i,a){t.exports=a.p+"static/img/success@2x.png"},214:function(t,i,a){"use strict";var s=a(192);a.n(s).a},216:function(t,i,a){"use strict";var s=a(193);a.n(s).a},218:function(t,i,a){},251:function(t,i,a){t.exports=a.p+"static/img/qq.png"},258:function(t,i,a){"use strict";var s=a(218);a.n(s).a},293:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"v-watch"},[t.domShow?s("div",{staticClass:"v-hearder clearfix",on:{orientationchange:function(i){t.orientationchange(i)}}},[s("span",{staticClass:"v-status"},["直播中"===t.activityInfo.statusName?s("i"):t._e(),t._v(t._s(t.activityInfo.statusName)+"\n    ")]),t._v(" "),"直播中"===t.activityInfo.statusName?s("span",{staticClass:"v-onlineNum"},[t._v(t._s(t.activityInfo.onlineNum)+"人在线")]):t._e(),t._v(" "),t._m(0),t._v(" "),s("a",{staticClass:"fr",attrs:{href:"javascript:;"},on:{click:function(i){t.subscribe()}}},[s("i",{staticClass:"v-showpsd iconfont icon-dingyue_icon"}),t._v("订阅")])]):t._e(),t._v(" "),s(t.currentView,{tag:"component",attrs:{paasParams:t.vhallParams,domShow:t.domShow}}),t._v(" "),s("message-box",{directives:[{name:"show",rawName:"v-show",value:t.subscribeShow,expression:"subscribeShow"}],on:{handleClick:function(i){t.subscribeClick(i)}}},[s("div",{attrs:{slot:"header"},slot:"header"}),t._v(" "),s("img",{staticClass:"v-logo",attrs:{src:a(251),alt:""}}),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n      北京微吼时代科技有限公司\n    ")]),t._v(" "),s("div",{staticClass:"v-from"},[s("p",{staticClass:"v-explain"},[t._v("\n        请留下您的邮箱，我们会将更多的活动推送给您\n      ")]),t._v(" "),s("com-input",{attrs:{value:t.email,placeholder:"请输入邮箱","max-length":11,errorTips:t.errorTips},on:{"update:value":function(i){t.email=i},focus:function(i){t.emailFocus()}}})],1)]),t._v(" "),s("message-box",{directives:[{name:"show",rawName:"v-show",value:t.successShow,expression:"successShow"}],attrs:{autoClose:t.autoClose},on:{handleClick:t.successClick}},[s("div",{attrs:{slot:"header"},slot:"header"}),t._v(" "),s("img",{staticClass:"v-success",attrs:{src:a(196),alt:""}}),t._v(" "),s("p",{staticClass:"v-title v-success-title"},[t._v("\n      恭喜您，订阅成功！\n    ")])]),t._v(" "),s("com-login")],1)};s._withStripped=!0;var e=a(7),n=a.n(e),o=a(59),c=a.n(o),r=a(11),l=a.n(r),h=a(8),d=a.n(h),u=a(45),v=a(84),p=a(85),f=function(){var t=this.$createElement;return(this._self._c||t)("div")};f._withStripped=!0;var m={name:"empty"},g=a(1),I=Object(g.a)(m,f,[],!1,null,null,null);I.options.__file="src/pages/watch/empty.vue";var y=I.exports,S=a(2),w=a(186),b=a(194),_=a(184),x=a(58);const C={PREPARE:"pre",LIVING:"live",FINISH:"end",PLAYBACK:"vod"},L={PREPARE:"预告",LIVING:"直播中",FINISH:"结束",PLAYBACK:"回放"};var T={mixins:[w.a],data:()=>({activityData:{},playType:"live",playStatus:"",currentView:y,vhallParams:{token:"",appId:"",channelId:"",accountId:""},subscribeShow:!1,businessUserId:"",domShow:!0,autoClose:0,email:"",errorTips:"",successShow:!1,wxShare:{wxShareData:{appId:"",timestamp:"",nonceStr:"",signature:""},shareData:{title:"",desc:"",link:"",imgUrl:""},shareUser:{shareId:""}}}),mounted(){this.storeLoginInfo(this.getLoginInfo())},computed:d()({},Object(u.c)("liveMager",{activityInfo:t=>t.activityInfo,joinInfo:t=>t.joinInfo,roomPaas:t=>t.roomPaas}),Object(u.c)("tokenMager",{chatParams:t=>t.chatParams}),Object(u.c)("login",{loginInfo:t=>t.loginInfo})),created(){const t=this.$route.params.id;t||this.$router.go(-1),this.activityId=t,this.initPage();let i=this;window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){90===window.orientation||-90===window.orientation?i.domShow=!1:i.domShow=!0},!1)},methods:d()({},Object(u.b)("tokenMager",{setChatParams:S.b}),Object(u.b)("liveMager",{storeActivityInfo:S.a,storeRoomPaas:S.h,storeJoinInfo:S.d}),Object(u.b)("login",{storeLoginInfo:S.g}),{subscribe(){this.loginInfo?this.loginInfo.email?this.sendSubScribe():this.subScribeShow=!0:this.doLogin()},emailFocus(){this.errorTips=""},sendSubScribe(){this.$config({handlers:!0}).$post(_.a.POST_EMAILSUBSCRIBE,{businessUserId:this.activityInfo.userId,email:this.loginInfo.email}).then(t=>{this.autoClose=3,this.subscribeShow=!1,this.successShow=!0;let i=JSON.parse(l()(this.loginInfo));i.email=this.emailInput,this.updateLoginInfo(i),this.storeLoginInfo(i)}).catch(t=>{this.errorTips=t.msg})},subscribeClick(t){if("cancel"===t.action)this.subscribeShow=!1;else if("confirm"===t.action){if(!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.email))return this.errorTips="邮箱格式不正确",!1;this.errorTips="",this.sendSubScribe()}},successClick(t){"cancel"===t.action?this.successShow=!1:"confirm"===t.action&&(this.successShow=!1)},initPage(){var t=this;return c()(function*(){yield t.initRoomPaas(),t.share();let i=null;yield t.$config({handlers:!0}).$get(_.a.GET_LIVEINFO,{activityId:t.$route.params.id}).then(function(a){(i=a.data.activity).setting=a.data.setting,i.statusName=L[i.status],i.description=a.data.activity.description,t.playType=C[i.status],t.playStatus=L[i.status],t.businessUserId=a.data.activity.userId,t.currentView=v.default,"vod"===t.playType?t.currentView=v.default:t.currentView=p.default,t.$config({handlers:!0}).$get(_.a.GET_ONLINENUM,{activityId:t.$route.params.id}).then(function(a){i.onlineNum=a.data.onlineNum,t.storeActivityInfo(i)})})})()},handleUpdateOnlineNum(t){this.activityInfo.onlineNum=t,this.storeActivityInfo(this.activityInfo)},initSdk(){},initRoomPaas(){const t=this.$route.query.shareid;let i={activityId:this.activityId,__errHandler:!0};return t&&(i.shareId=t),new n.a((t,a)=>{this.roomPaas.token&&t(this.roomPaas),this.$config({handlers:!0}).$get(x.a.GET_USERREGACTIVITY,i).then(i=>{this.storeJoinInfo(i.data),this.$config({handlers:!0}).$get(_.a.GET_SDKTOKEN,{activityId:this.activityId,activityUserId:i.data.activityUserId}).then(i=>{i.data&&(t(i.data),this.storeRoomPaas(i.data))}).catch(()=>{this.$router.replace("/kicked")})})})},share(){var t=this;return c()(function*(){let i=window.location.href;t.joinInfo.activityUserId&&(i=t.joinInfo.activityUserId?`${i}?shareId=${t.joinInfo.activityUserId}`:i),t.wxShare.shareData.link=i,yield t.$config({handlers:!0}).$get(_.a.GET_SHARESIGN,{url:i}).then(function(i){t.wxShare.wxShareData.appId=i.data.appId,t.wxShare.wxShareData.timestamp=i.data.timestamp,t.wxShare.wxShareData.nonceStr=i.data.nonceStr,t.wxShare.wxShareData.signature=i.data.signature}),yield t.$config({handlers:!0}).$get(_.a.GET_SHAREINFO,{route:"live_route"}).then(function(i){i.data&&(t.wxShare.shareData.title=i.data.title?i.data.title:"",t.wxShare.shareData.desc=i.data.description?i.data.description:"",t.wxShare.shareData.imgUrl=i.data.imgUrl?i.data.imgUrl:"")}),Object(b.a)(t.wxShare)})()}})},B=(a(258),Object(g.a)(T,s,[function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"fr v-my",attrs:{href:"javascript:;"}},[i("i",{staticClass:"v-showpsd iconfont icon-wode_icon"}),this._v("我的")])}],!1,null,"a2747dca",null));B.options.__file="src/pages/watch/Watch.vue";i.default=B.exports},84:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"v-video"},[a("play-video",{attrs:{role:"watcher","play-type":t.playType,startInit:t.startInit}})],1),t._v(" "),t.domShow?a("div",{staticClass:"v-function-box"},[a("div",{staticClass:"v-nav"},[a("com-tabs",{attrs:{value:t.tabValue},on:{"update:value":function(i){t.tabValue=i},change:t.tabChange}},[a("com-tab",{attrs:{label:"活动简介",index:1}},[a("div",{staticClass:"v-introduction",domProps:{innerHTML:t._s(t.activityInfo.description)}})]),t._v(" "),a("com-tab",{attrs:{label:"互动聊天",index:2}},[a("div",{staticClass:"chat-content"},[a("chating",{ref:"chatbox",attrs:{type:t.playType,isWatch:t.isWatch,sendBoxShow:t.sendBoxShow},on:{closeChatBox:t.closeChatBox,isMute:function(i){t.isMute(i)}}})],1),t._v(" "),"live"===t.playType&&t.isLogin?[t.isMuteShow?[a("div",{staticClass:"v-chat-control v-noLogin",attrs:{id:"sendBoxBtn"}},[t._v("\n                "+t._s(t.allMuted?"已开启全体禁言":"您已被禁言")+"\n              ")])]:[a("div",{staticClass:"v-chat-control",attrs:{id:"sendBoxBtn"},on:{click:function(i){t.chatClick()}}},[a("i",{staticClass:"iconfont icon-biaoqing"}),t._v(" "),a("span",{staticClass:"v-chat-clickbox"},[t._v("\n                  输入文字聊天\n                ")])])]]:"live"!==t.playType||t.isLogin?t._e():[a("div",{staticClass:"v-chat-control v-noLogin",attrs:{id:"sendBoxBtn"}},[t._v("\n              需要登录才能参与聊天 "),a("span",{on:{click:t.doLogin}},[t._v("登录")])])]],2)],1),t._v(" "),t._m(0)],1)]):t._e(),t._v(" "),a("com-login",{on:{login:t.loginSuccess}})],1)};s._withStripped=!0;var e=a(11),n=a.n(e),o=a(8),c=a.n(o),r=a(197),l=a(198),h=a(45),d=a(2),u=a(186),v=a(189),p=a(195),f={props:{domShow:Boolean},mixins:[u.a],components:{PlayVideo:r.a,Chating:l.a},data:()=>({playType:"live",startInit:!1,tabValue:1,isWatch:!0,chatListInit:!1,sendBoxShow:!1,isLogin:!1,isMuteShow:!1,allMuted:!1}),computed:c()({},Object(h.c)("liveMager",{activityInfo:t=>t.activityInfo,roomPaas:t=>t.roomPaas}),Object(h.c)("login",{loginInfo:t=>t.loginInfo})),mounted(){this.storeLoginInfo(this.getLoginInfo()),"PREPARE"===this.activityInfo.status?this.playType="warm":"FINISH"===this.activityInfo.status?this.playType="end":this.playType="live",this.startInit=!0,this.initMsgServe()},created(){this.initToken()},watch:{"loginInfo.consumerUserId":{handler(t){t&&this.isWatch&&(this.isLogin=!0)},deep:!0}},methods:c()({},Object(h.b)("login",{storeLoginInfo:d.g}),{tabChange(){if(2===this.tabValue&&(this.$refs.chatbox.aBScroll||(this.$refs.chatbox.initScroll(),this.$refs.chatbox.getHistroy()),!this.$refs.chatbox.tipsShow)){const t=this;setTimeout(function(){t.$refs.chatbox.scrollBtm()},200)}},initToken(){this.$nextTick(()=>{this.startInit=!0})},initMsgServe(){p.a.OBJ.init({accountId:this.roomPaas.accountId,token:this.roomPaas.token,appId:this.roomPaas.appId,channelId:this.roomPaas.channelRoom}),p.a.OBJ.regHandler(v.a.onLineNum,t=>{const i=JSON.parse(n()(this.liveInfo));i.showOnlineNum=parseInt(i.setting.initOnlineNum)+parseInt(t.num),this.storeLiveInfo(i)}),p.a.OBJ.regHandler(v.a.beginLive,t=>{this.playType="live";const i=JSON.parse(n()(this.activityInfo));i.status="LIVING",i.statusName="直播中",this.storeActivityInfo(i)}),p.a.OBJ.regHandler(v.a.endLive,t=>{this.playType="end";const i=JSON.parse(n()(this.activityInfo));i.status="FINISH",i.statusName="结束",this.storeActivityInfo(i)})},isMute(t){this.isMuteShow=t.isMute,this.allMuted="allMuted"===t.type},chatClick(){this.sendBoxShow=!0},closeChatBox(){this.sendBoxShow=!1},loginSuccess(t){this.storeLoginInfo(t)},loginHandler(){this.$emit("showLogin")}})},m=(a(214),a(1)),g=Object(m.a)(f,s,[function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"v-subscribe",attrs:{href:"javascript:;"}},[i("i",{staticClass:"iconfont icon-dingyue"}),this._v(" 关注")])}],!1,null,"3304695f",null);g.options.__file="src/pages/watch/playback.vue";i.default=g.exports},85:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"v-video"},[a("play-video",{attrs:{role:"watcher","play-type":t.playType,startInit:t.startInit}})],1),t._v(" "),t.domShow?a("div",{staticClass:"v-function-box"},[a("div",{staticClass:"v-nav"},[a("com-tabs",{attrs:{value:t.tabValue},on:{"update:value":function(i){t.tabValue=i},change:t.tabChange}},[a("com-tab",{attrs:{label:"活动简介",index:1}},[a("div",{staticClass:"v-introduction",domProps:{innerHTML:t._s(t.activityInfo.description)}})]),t._v(" "),a("com-tab",{attrs:{label:"互动聊天",index:2}},[a("div",{staticClass:"chat-content"},[a("chating",{ref:"chatbox",attrs:{type:t.playType,isWatch:t.isWatch,sendBoxShow:t.sendBoxShow},on:{closeChatBox:t.closeChatBox,isMute:function(i){t.isMute(i)}}})],1),t._v(" "),"live"===t.playType&&t.isLogin?[t.isMuteShow?[a("div",{staticClass:"v-chat-control v-noLogin",attrs:{id:"sendBoxBtn"}},[t._v("\n                "+t._s(t.allMuted?"已开启全体禁言":"您已被禁言")+"\n              ")])]:[a("div",{staticClass:"v-chat-control",attrs:{id:"sendBoxBtn"},on:{click:function(i){t.chatClick()}}},[a("i",{staticClass:"iconfont icon-biaoqing"}),t._v(" "),a("span",{staticClass:"v-chat-clickbox"},[t._v("\n                  输入文字聊天\n                ")])])]]:"live"!==t.playType||t.isLogin?t._e():[a("div",{staticClass:"v-chat-control v-noLogin",attrs:{id:"sendBoxBtn"}},[t._v("\n              需要登录才能参与聊天 "),a("span",{on:{click:t.doLogin}},[t._v("登录")])])]],2)],1),t._v(" "),t._m(0)],1)]):t._e(),t._v(" "),a("com-login",{on:{login:t.loginSuccess}})],1)};s._withStripped=!0;var e=a(11),n=a.n(e),o=a(8),c=a.n(o),r=a(197),l=a(198),h=a(45),d=a(2),u=a(186),v=a(189),p=a(195),f={props:{domShow:Boolean},mixins:[u.a],components:{PlayVideo:r.a,Chating:l.a},data:()=>({playType:"live",startInit:!1,tabValue:1,isWatch:!0,chatListInit:!1,sendBoxShow:!1,isLogin:!1,isMuteShow:!1,allMuted:!1}),computed:c()({},Object(h.c)("liveMager",{activityInfo:t=>t.activityInfo,roomPaas:t=>t.roomPaas}),Object(h.c)("login",{loginInfo:t=>t.loginInfo})),mounted(){this.storeLoginInfo(this.getLoginInfo()),"PREPARE"===this.activityInfo.status?this.playType="warm":"FINISH"===this.activityInfo.status?this.playType="end":this.playType="live",this.startInit=!0,this.initMsgServe()},created(){this.initToken()},watch:{"loginInfo.consumerUserId":{handler(t){t&&this.isWatch&&(this.isLogin=!0)},deep:!0}},methods:c()({},Object(h.b)("login",{storeLoginInfo:d.g}),{tabChange(){if(2===this.tabValue&&(this.$refs.chatbox.aBScroll||(this.$refs.chatbox.initScroll(),this.$refs.chatbox.getHistroy()),!this.$refs.chatbox.tipsShow)){const t=this;setTimeout(function(){t.$refs.chatbox.scrollBtm()},200)}},initToken(){this.$nextTick(()=>{this.startInit=!0})},initMsgServe(){p.a.OBJ.init({accountId:this.roomPaas.accountId,token:this.roomPaas.token,appId:this.roomPaas.appId,channelId:this.roomPaas.channelRoom}),p.a.OBJ.regHandler(v.a.onLineNum,t=>{const i=JSON.parse(n()(this.liveInfo));i.showOnlineNum=parseInt(i.setting.initOnlineNum)+parseInt(t.num),this.storeLiveInfo(i)}),p.a.OBJ.regHandler(v.a.beginLive,t=>{this.playType="live";const i=JSON.parse(n()(this.activityInfo));i.status="LIVING",i.statusName="直播中",this.storeActivityInfo(i)}),p.a.OBJ.regHandler(v.a.endLive,t=>{this.playType="end";const i=JSON.parse(n()(this.activityInfo));i.status="FINISH",i.statusName="结束",this.storeActivityInfo(i)})},isMute(t){this.isMuteShow=t.isMute,this.allMuted="allMuted"===t.type},chatClick(){this.sendBoxShow=!0},closeChatBox(){this.sendBoxShow=!1},loginSuccess(t){this.storeLoginInfo(t)},loginHandler(){this.$emit("showLogin")}})},m=(a(216),a(1)),g=Object(m.a)(f,s,[function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"v-subscribe",attrs:{href:"javascript:;"}},[i("i",{staticClass:"iconfont icon-dingyue"}),this._v(" 关注")])}],!1,null,"8c492ca0",null);g.options.__file="src/pages/watch/live.vue";i.default=g.exports}}]);
//# sourceMappingURL=8.fe51c805.js.map