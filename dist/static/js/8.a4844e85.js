(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9,10],{192:function(t,a,i){},193:function(t,a,i){},194:function(t,a,i){"use strict";i.d(a,"a",function(){return n});var s=i(181),e=i.n(s);function n(t){e.a.config({debug:!1,appId:t.wxShareData.appId,timestamp:t.wxShareData.timestamp,nonceStr:t.wxShareData.nonceStr,signature:t.wxShareData.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]}),e.a.ready(function(){e.a.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"],success:function(t){console.log(t.checkResult,789486)}}),e.a.onMenuShareTimeline({title:t.shareData.title,desc:t.shareDatadesc,link:t.shareDatalink+(t.shareUser.share_id?"?shareId="+t.shareUser.share_id+"-3":""),imgUrl:t.shareDataimgUrl,success:function(){},cancel:function(){}}),e.a.onMenuShareAppMessage({title:t.shareData.title,desc:t.shareData.desc,link:t.shareData.link+(t.shareUser.share_id?"?shareId="+t.shareUser.share_id+"-3":""),imgUrl:t.shareData.imgUrl,success:function(){},cancel:function(){}}),e.a.onMenuShareQQ({title:t.shareData.title,desc:t.shareData.desc,link:t.shareData.link+(t.shareUser.share_id?"?shareId="+t.shareUser.share_id+"-2":""),imgUrl:t.shareData.imgUrl,success:function(){},cancel:function(){}}),e.a.onMenuShareWeibo({title:t.shareData.title,desc:t.shareData.desc,link:t.shareData.link+(t.shareUser.share_id?"?shareId="+t.shareUser.share_id+"-1":""),imgUrl:t.shareData.imgUrl,success:function(){},cancel:function(){}}),e.a.onMenuShareQZone({title:t.shareData.title,desc:t.shareData.desc,link:t.shareData.link+(t.shareUser.share_id?"?shareId="+t.shareUser.share_id+"-2":""),imgUrl:t.shareData.imgUrl,success:function(){},cancel:function(){}})}),e.a.error(function(t){console.log(t,6666)})}},196:function(t,a,i){t.exports=i.p+"static/img/success@2x.png"},214:function(t,a,i){"use strict";var s=i(192);i.n(s).a},216:function(t,a,i){"use strict";var s=i(193);i.n(s).a},218:function(t,a,i){},251:function(t,a,i){t.exports=i.p+"static/img/qq.png"},258:function(t,a,i){"use strict";var s=i(218);i.n(s).a},294:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"v-watch"},[t.domShow?s("div",{staticClass:"v-hearder clearfix",on:{orientationchange:function(a){t.orientationchange(a)}}},[s("span",{staticClass:"v-status"},["直播中"===t.activityInfo.statusName?s("i"):t._e(),t._v(t._s(t.activityInfo.statusName)+"\n    ")]),t._v(" "),"直播中"===t.activityInfo.statusName?s("span",{staticClass:"v-onlineNum"},[t._v(t._s(t.activityInfo.onlineNum)+"人在线")]):t._e(),t._v(" "),s("a",{staticClass:"fr v-my",attrs:{href:"/site/"+t.activityId}},[s("i",{staticClass:"v-showpsd iconfont icon-wode_icon"}),t._v("我的")]),t._v(" "),s("a",{staticClass:"fr",attrs:{href:"javascript:;"},on:{click:function(a){t.subscribe()}}},[s("i",{staticClass:"v-showpsd iconfont icon-dingyue_icon"}),t._v("订阅")])]):t._e(),t._v(" "),s(t.currentView,{tag:"component",attrs:{paasParams:t.vhallParams,domShow:t.domShow}}),t._v(" "),s("message-box",{directives:[{name:"show",rawName:"v-show",value:t.subscribeShow,expression:"subscribeShow"}],on:{handleClick:function(a){t.subscribeClick(a)}}},[s("div",{attrs:{slot:"header"},slot:"header"}),t._v(" "),s("img",{staticClass:"v-logo",attrs:{src:i(251),alt:""}}),t._v(" "),s("p",{staticClass:"v-title"},[t._v("\n      北京微吼时代科技有限公司\n    ")]),t._v(" "),s("div",{staticClass:"v-from"},[s("p",{staticClass:"v-explain"},[t._v("\n        请留下您的邮箱，我们会将更多的活动推送给您\n      ")]),t._v(" "),s("com-input",{attrs:{value:t.email,placeholder:"请输入邮箱","max-length":11,errorTips:t.errorTips},on:{"update:value":function(a){t.email=a},focus:function(a){t.emailFocus()}}})],1)]),t._v(" "),s("message-box",{directives:[{name:"show",rawName:"v-show",value:t.successShow,expression:"successShow"}],attrs:{autoClose:t.autoClose},on:{handleClick:t.successClick}},[s("div",{attrs:{slot:"header"},slot:"header"}),t._v(" "),s("img",{staticClass:"v-success",attrs:{src:i(196),alt:""}}),t._v(" "),s("p",{staticClass:"v-title v-success-title"},[t._v("\n      恭喜您，订阅成功！\n    ")])]),t._v(" "),s("com-login")],1)};s._withStripped=!0;var e=i(7),n=i.n(e),o=i(59),c=i.n(o),r=i(11),h=i.n(r),l=i(8),d=i.n(l),u=i(45),v=i(84),p=i(85),f=function(){var t=this.$createElement;return(this._self._c||t)("div")};f._withStripped=!0;var g={name:"empty"},m=i(1),I=Object(m.a)(g,f,[],!1,null,null,null);I.options.__file="src/pages/watch/empty.vue";var S=I.exports,y=i(2),w=i(186),b=i(194),_=i(184),x=i(58);const C={PREPARE:"pre",LIVING:"live",FINISH:"end",PLAYBACK:"vod"},L={PREPARE:"预告",LIVING:"直播中",FINISH:"结束",PLAYBACK:"回放"};var M={mixins:[w.a],data:()=>({activityId:"",playType:"live",playStatus:"",currentView:S,vhallParams:{token:"",appId:"",channelId:"",accountId:""},subscribeShow:!1,businessUserId:"",domShow:!0,autoClose:0,email:"",errorTips:"",successShow:!1,wxShare:{wxShareData:{appId:"",timestamp:"",nonceStr:"",signature:""},shareData:{title:"",desc:"",link:"",imgUrl:""},shareUser:{shareId:""}}}),mounted(){this.storeLoginInfo(this.getLoginInfo())},computed:d()({},Object(u.c)("liveMager",{activityInfo:t=>t.activityInfo,joinInfo:t=>t.joinInfo,roomPaas:t=>t.roomPaas}),Object(u.c)("tokenMager",{chatParams:t=>t.chatParams}),Object(u.c)("login",{loginInfo:t=>t.loginInfo})),created(){const t=this.$route.params.id;t||this.$router.go(-1),this.activityId=t,this.initPage();let a=this;window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){90===window.orientation||-90===window.orientation?a.domShow=!1:a.domShow=!0},!1)},methods:d()({},Object(u.b)("tokenMager",{setChatParams:y.b}),Object(u.b)("liveMager",{storeActivityInfo:y.a,storeRoomPaas:y.h,storeJoinInfo:y.d}),Object(u.b)("login",{storeLoginInfo:y.g}),{subscribe(){this.loginInfo?this.loginInfo.email?this.sendSubScribe():this.subScribeShow=!0:this.doLogin()},emailFocus(){this.errorTips=""},sendSubScribe(){this.$post(_.a.POST_EMAILSUBSCRIBE,{businessUserId:this.activityInfo.userId,email:this.loginInfo.email}).then(t=>{this.autoClose=3,this.subscribeShow=!1,this.successShow=!0;let a=JSON.parse(h()(this.loginInfo));a.email=this.emailInput,this.updateLoginInfo(a),this.storeLoginInfo(a)}).catch(t=>{this.errorTips=t.msg})},subscribeClick(t){if("cancel"===t.action)this.subscribeShow=!1;else if("confirm"===t.action){if(!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.email))return this.errorTips="邮箱格式不正确",!1;this.errorTips="",this.sendSubScribe()}},successClick(t){"cancel"===t.action?this.successShow=!1:"confirm"===t.action&&(this.successShow=!1)},initPage(){var t=this;return c()(function*(){yield t.initRoomPaas(),t.share();let a=null;yield t.$config({handlers:!0}).$get(_.a.GET_LIVEINFO,{activityId:t.$route.params.id}).then(function(i){(a=i.data.activity).setting=i.data.setting,a.statusName=L[a.status],a.description=i.data.activity.description,t.playType=C[a.status],t.playStatus=L[a.status],t.businessUserId=i.data.activity.userId,t.currentView=v.default,"vod"===t.playType?t.currentView=v.default:t.currentView=p.default,t.$config({handlers:!0}).$get(_.a.GET_ONLINENUM,{activityId:t.$route.params.id}).then(function(i){a.onlineNum=i.data.onlineNum,t.storeActivityInfo(a)})})})()},handleUpdateOnlineNum(t){this.activityInfo.onlineNum=t,this.storeActivityInfo(this.activityInfo)},initSdk(){},initRoomPaas(){const t=this.$route.query.shareid;let a={activityId:this.activityId,__errHandler:!0};return t&&(a.shareId=t),new n.a((t,i)=>{this.roomPaas.token&&t(this.roomPaas),this.$config({handlers:!0}).$get(x.a.GET_USERREGACTIVITY,a).then(a=>{this.storeJoinInfo(a.data),this.$config({handlers:!0}).$get(_.a.GET_SDKTOKEN,{activityId:this.activityId,activityUserId:a.data.activityUserId}).then(a=>{a.data&&(t(a.data),this.storeRoomPaas(a.data))}).catch(()=>{this.$router.replace("/kicked")})})})},share(){var t=this;return c()(function*(){let a=window.location.href;t.joinInfo.activityUserId&&(a=t.joinInfo.activityUserId?`${a}?shareId=${t.joinInfo.activityUserId}`:a),t.wxShare.shareData.link=a,yield t.$config({handlers:!0}).$get(_.a.GET_SHARESIGN,{url:a}).then(function(a){t.wxShare.wxShareData.appId=a.data.appId,t.wxShare.wxShareData.timestamp=a.data.timestamp,t.wxShare.wxShareData.nonceStr=a.data.nonceStr,t.wxShare.wxShareData.signature=a.data.signature}),yield t.$config({handlers:!0}).$get(_.a.GET_SHAREINFO,{route:"live_route"}).then(function(a){a.data&&(t.wxShare.shareData.title=a.data.title?a.data.title:"",t.wxShare.shareData.desc=a.data.description?a.data.description:"",t.wxShare.shareData.imgUrl=a.data.imgUrl?a.data.imgUrl:"")}),Object(b.a)(t.wxShare)})()}})},T=(i(258),Object(m.a)(M,s,[],!1,null,"a2747dca",null));T.options.__file="src/pages/watch/Watch.vue";a.default=T.exports},84:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"v-video"},[i("play-video",{attrs:{role:"watcher","play-type":t.playType,startInit:t.startInit}})],1),t._v(" "),t.domShow?i("div",{staticClass:"v-function-box"},[i("div",{staticClass:"v-nav"},[i("com-tabs",{attrs:{value:t.tabValue},on:{"update:value":function(a){t.tabValue=a},change:t.tabChange}},[i("com-tab",{attrs:{label:"活动简介",index:1}},[i("div",{staticClass:"v-introduction",domProps:{innerHTML:t._s(t.activityInfo.description)}})]),t._v(" "),i("com-tab",{attrs:{label:"互动聊天",index:2}},[i("div",{staticClass:"chat-content"},[i("chating",{ref:"chatbox",attrs:{type:t.playType,isWatch:t.isWatch,sendBoxShow:t.sendBoxShow},on:{closeChatBox:t.closeChatBox,isMute:function(a){t.isMute(a)}}})],1),t._v(" "),"live"===t.playType&&t.isLogin?[t.isMuteShow?[i("div",{staticClass:"v-chat-control v-noLogin",attrs:{id:"sendBoxBtn"}},[t._v("\n                "+t._s(t.allMuted?"已开启全体禁言":"您已被禁言")+"\n              ")])]:[i("div",{staticClass:"v-chat-control",attrs:{id:"sendBoxBtn"},on:{click:function(a){t.chatClick()}}},[i("i",{staticClass:"iconfont icon-biaoqing"}),t._v(" "),i("span",{staticClass:"v-chat-clickbox"},[t._v("\n                  输入文字聊天\n                ")])])]]:"live"!==t.playType||t.isLogin?t._e():[i("div",{staticClass:"v-chat-control v-noLogin",attrs:{id:"sendBoxBtn"}},[t._v("\n              需要登录才能参与聊天 "),i("span",{on:{click:t.doLogin}},[t._v("登录")])])]],2)],1),t._v(" "),t._m(0)],1)]):t._e(),t._v(" "),i("com-login",{on:{login:t.loginSuccess}})],1)};s._withStripped=!0;var e=i(11),n=i.n(e),o=i(8),c=i.n(o),r=i(197),h=i(198),l=i(45),d=i(2),u=i(186),v=i(189),p=i(195),f={props:{domShow:Boolean},mixins:[u.a],components:{PlayVideo:r.a,Chating:h.a},data:()=>({playType:"live",startInit:!1,tabValue:1,isWatch:!0,chatListInit:!1,sendBoxShow:!1,isLogin:!1,isMuteShow:!1,allMuted:!1}),computed:c()({},Object(l.c)("liveMager",{activityInfo:t=>t.activityInfo,roomPaas:t=>t.roomPaas}),Object(l.c)("login",{loginInfo:t=>t.loginInfo})),mounted(){this.storeLoginInfo(this.getLoginInfo()),"PREPARE"===this.activityInfo.status?this.playType="warm":"FINISH"===this.activityInfo.status?this.playType="end":this.playType="live",this.startInit=!0,this.initMsgServe()},created(){this.initToken()},watch:{"loginInfo.consumerUserId":{handler(t){t&&this.isWatch&&(this.isLogin=!0)},deep:!0}},methods:c()({},Object(l.b)("login",{storeLoginInfo:d.g}),{tabChange(){if(2===this.tabValue&&(this.$refs.chatbox.aBScroll||(this.$refs.chatbox.initScroll(),this.$refs.chatbox.getHistroy()),!this.$refs.chatbox.tipsShow)){const t=this;setTimeout(function(){t.$refs.chatbox.scrollBtm()},200)}},initToken(){this.$nextTick(()=>{this.startInit=!0})},initMsgServe(){p.a.OBJ.init({accountId:this.roomPaas.accountId,token:this.roomPaas.token,appId:this.roomPaas.appId,channelId:this.roomPaas.channelRoom}),p.a.OBJ.regHandler(v.a.onLineNum,t=>{const a=JSON.parse(n()(this.liveInfo));a.showOnlineNum=parseInt(a.setting.initOnlineNum)+parseInt(t.num),this.storeLiveInfo(a)}),p.a.OBJ.regHandler(v.a.beginLive,t=>{this.playType="live";const a=JSON.parse(n()(this.activityInfo));a.status="LIVING",a.statusName="直播中",this.storeActivityInfo(a)}),p.a.OBJ.regHandler(v.a.endLive,t=>{this.playType="end";const a=JSON.parse(n()(this.activityInfo));a.status="FINISH",a.statusName="结束",this.storeActivityInfo(a)})},isMute(t){this.isMuteShow=t.isMute,this.allMuted="allMuted"===t.type},chatClick(){this.sendBoxShow=!0},closeChatBox(){this.sendBoxShow=!1},loginSuccess(t){this.storeLoginInfo(t)},loginHandler(){this.$emit("showLogin")}})},g=(i(214),i(1)),m=Object(g.a)(f,s,[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"v-subscribe",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-dingyue"}),this._v(" 关注")])}],!1,null,"3304695f",null);m.options.__file="src/pages/watch/playback.vue";a.default=m.exports},85:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"v-video"},[i("play-video",{attrs:{role:"watcher","play-type":t.playType,startInit:t.startInit}})],1),t._v(" "),t.domShow?i("div",{staticClass:"v-function-box"},[i("div",{staticClass:"v-nav"},[i("com-tabs",{attrs:{value:t.tabValue},on:{"update:value":function(a){t.tabValue=a},change:t.tabChange}},[i("com-tab",{attrs:{label:"活动简介",index:1}},[i("div",{staticClass:"v-introduction",domProps:{innerHTML:t._s(t.activityInfo.description)}})]),t._v(" "),i("com-tab",{attrs:{label:"互动聊天",index:2}},[i("div",{staticClass:"chat-content"},[i("chating",{ref:"chatbox",attrs:{type:t.playType,isWatch:t.isWatch,sendBoxShow:t.sendBoxShow},on:{closeChatBox:t.closeChatBox,isMute:function(a){t.isMute(a)}}})],1),t._v(" "),"live"===t.playType&&t.isLogin?[t.isMuteShow?[i("div",{staticClass:"v-chat-control v-noLogin",attrs:{id:"sendBoxBtn"}},[t._v("\n                "+t._s(t.allMuted?"已开启全体禁言":"您已被禁言")+"\n              ")])]:[i("div",{staticClass:"v-chat-control",attrs:{id:"sendBoxBtn"},on:{click:function(a){t.chatClick()}}},[i("i",{staticClass:"iconfont icon-biaoqing"}),t._v(" "),i("span",{staticClass:"v-chat-clickbox"},[t._v("\n                  输入文字聊天\n                ")])])]]:"live"!==t.playType||t.isLogin?t._e():[i("div",{staticClass:"v-chat-control v-noLogin",attrs:{id:"sendBoxBtn"}},[t._v("\n              需要登录才能参与聊天 "),i("span",{on:{click:t.doLogin}},[t._v("登录")])])]],2)],1),t._v(" "),t._m(0)],1)]):t._e(),t._v(" "),i("com-login",{on:{login:t.loginSuccess}})],1)};s._withStripped=!0;var e=i(11),n=i.n(e),o=i(8),c=i.n(o),r=i(197),h=i(198),l=i(45),d=i(2),u=i(186),v=i(189),p=i(195),f={props:{domShow:Boolean},mixins:[u.a],components:{PlayVideo:r.a,Chating:h.a},data:()=>({playType:"live",startInit:!1,tabValue:1,isWatch:!0,chatListInit:!1,sendBoxShow:!1,isLogin:!1,isMuteShow:!1,allMuted:!1}),computed:c()({},Object(l.c)("liveMager",{activityInfo:t=>t.activityInfo,roomPaas:t=>t.roomPaas}),Object(l.c)("login",{loginInfo:t=>t.loginInfo})),mounted(){this.storeLoginInfo(this.getLoginInfo()),"PREPARE"===this.activityInfo.status?this.playType="warm":"FINISH"===this.activityInfo.status?this.playType="end":this.playType="live",this.startInit=!0,this.initMsgServe()},created(){this.initToken()},watch:{"loginInfo.consumerUserId":{handler(t){t&&this.isWatch&&(this.isLogin=!0)},deep:!0}},methods:c()({},Object(l.b)("login",{storeLoginInfo:d.g}),{tabChange(){if(2===this.tabValue&&(this.$refs.chatbox.aBScroll||(this.$refs.chatbox.initScroll(),this.$refs.chatbox.getHistroy()),!this.$refs.chatbox.tipsShow)){const t=this;setTimeout(function(){t.$refs.chatbox.scrollBtm()},200)}},initToken(){this.$nextTick(()=>{this.startInit=!0})},initMsgServe(){p.a.OBJ.init({accountId:this.roomPaas.accountId,token:this.roomPaas.token,appId:this.roomPaas.appId,channelId:this.roomPaas.channelRoom}),p.a.OBJ.regHandler(v.a.onLineNum,t=>{const a=JSON.parse(n()(this.liveInfo));a.showOnlineNum=parseInt(a.setting.initOnlineNum)+parseInt(t.num),this.storeLiveInfo(a)}),p.a.OBJ.regHandler(v.a.beginLive,t=>{this.playType="live";const a=JSON.parse(n()(this.activityInfo));a.status="LIVING",a.statusName="直播中",this.storeActivityInfo(a)}),p.a.OBJ.regHandler(v.a.endLive,t=>{this.playType="end";const a=JSON.parse(n()(this.activityInfo));a.status="FINISH",a.statusName="结束",this.storeActivityInfo(a)})},isMute(t){this.isMuteShow=t.isMute,this.allMuted="allMuted"===t.type},chatClick(){this.sendBoxShow=!0},closeChatBox(){this.sendBoxShow=!1},loginSuccess(t){this.storeLoginInfo(t)},loginHandler(){this.$emit("showLogin")}})},g=(i(216),i(1)),m=Object(g.a)(f,s,[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"v-subscribe",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-dingyue"}),this._v(" 关注")])}],!1,null,"8c492ca0",null);m.options.__file="src/pages/watch/live.vue";a.default=m.exports}}]);
//# sourceMappingURL=8.a4844e85.js.map