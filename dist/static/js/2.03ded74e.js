(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{234:function(t,i,n){},235:function(t,i,n){},276:function(t,i,n){"use strict";var a=n(234);n.n(a).a},278:function(t,i,n){"use strict";var a=n(235);n.n(a).a},331:function(t,i,n){"use strict";n.r(i);var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"v-guid"},[n("p",{staticClass:"v-title"},[t._v("\n    "+t._s(t.activity.title)+"\n  ")]),t._v(" "),!t.activity.isCountdown||"NONE"===t.activity.viewCondition&&t.activity.countDown<1800||"Y"!==t.viewLimit.canAppoint?n("div",{staticClass:"v-summary"},[n("div",{domProps:{innerHTML:t._s(t.activity.description)}})]):t._e(),t._v(" "),t.activity.countDown>=1800&&"LIVING"!==t.activity.status?n("div",{staticClass:"v-operation"},["APPOINT"===t.activity.viewCondition?["Y"===t.viewLimit.canAppoint?["LIVING"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播正在进行中\n          ")]):t._e()]:[t.activity.isCountdown?n("com-countdown",{attrs:{time:t.activity.countDown}}):t._e()],t._v(" "),t.user.isApplay?[n("button",{staticClass:"primary-button"},[t._v("已报名")])]:[n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"SignUp/")}}},[t._v("立即报名")]),t._v(" "),this.user.phone?t._e():n("a",{staticClass:"v-registered",attrs:{href:"javascript:;"},on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"CheckState/")}}},[t._v("已报名")])]]:[t.user.isApplay?[n("button",{staticClass:"primary-button"},[t._v("已报名")])]:[n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"CheckState/")}}},[t._v("报名验证")])]]]:["LIVING"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n          直播正在进行中\n        ")]):t._e()]:[t.activity.isCountdown?n("com-countdown",{attrs:{time:t.activity.countDown}}):t._e()],t._v(" "),t.user.isOrder?n("button",{staticClass:"primary-button"},[t._v("已预约")]):[n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"SignUp/")}}},[t._v("预约")]),t._v(" "),this.user.phone?t._e():n("a",{staticClass:"v-registered",attrs:{href:"javascript:;"},on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"CheckState/")}}},[t._v("已预约")])]]],2):n("div",{staticClass:"v-operation"},["APPOINT"===t.activity.viewCondition?["Y"===t.viewLimit.canAppoint?["LIVING"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播正在进行中\n          ")]):t._e()]:[t.activity.isCountdown?n("com-countdown",{attrs:{time:t.activity.countDown}}):t._e()],t._v(" "),t.user.isApplay?void 0:[n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"SignUp/")}}},[t._v("立即报名")]),t._v(" "),this.user.phone?t._e():n("a",{staticClass:"v-registered",attrs:{href:"javascript:;"},on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"CheckState/")}}},[t._v("已报名")])]]:[t.user.isApplay?void 0:[n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"CheckState/")}}},[t._v("报名验证")])]]]:[n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"watch/")}}},[t._v("进入直播")])]],2)])};a._withStripped=!0;var e=n(50),o=n.n(e),s=n(71),c=n.n(s),r=n(12),u=n.n(r),v=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"v-cundown"},[n("span",[t._v(t._s(t.showTime.day))]),t._v("天"),n("span",[t._v(t._s(t.showTime.hour))]),t._v("小时"),n("span",[t._v(t._s(t.showTime.minute))]),t._v("分"),n("span",[t._v(t._s(t.showTime.second))]),t._v("秒\n")])};v._withStripped=!0;var d={props:{time:Number},data:function(){return{showTime:{day:0,hour:0,minute:0,second:0},timer:0}},mounted:function(){},components:{},created:function(){this.countDown(this.time)},watch:{},methods:{fomatDate:function(t){this.showTime.day=t/3600/24>>0,this.showTime.day<9&&(this.showTime.day="0"+this.showTime.day),this.showTime.hour=((t/3600%24>>0)+"").padStart(2,0),this.showTime.minute=((t/60%60>>0)+"").padStart(2,0),this.showTime.second=((t%60>>0)+"").padStart(2,0),1800===t&&(this.$emit("timeOut"),clearInterval(this.timer))},countDown:function(t){var i=this;if(t>0)var n=setInterval(function(a){i.fomatDate(t--),t<0&&clearInterval(n)},1e3);else this.fomatDate(0)}}},h=(n(276),n(1)),p=Object(h.a)(d,v,[],!1,null,"573d783f",null);p.options.__file="src/components/common/countdown/countdown.vue";var l=p.exports,m=n(224),w=n(225),_=n(49),f=n(3),y=n(226),I=n(223),O=n(70),C={mixins:[m.a],data:function(){return{MOBILE_HOST:"//test-zhike.vhall.com/m/",goUrl:"",goRegisteredUrl:"",activity:{viewCondition:"",title:"",description:"",isCountdown:!1,countDown:"",status:"",extChannel:""},user:{phone:"",isApplay:!1,isOrder:!1},viewLimit:{finishTime:"",canAppoint:""},vhallParams:{token:"",appId:"",channelId:"",accountId:""},visitorObj:{}}},mounted:function(){this.getInfo()},components:{"com-countdown":l},created:function(){},computed:Object(_.c)("tokenMager",{chatParams:function(t){return t.chatParams}}),watch:{countDown:function(){console.log(this.activity.countDown)}},methods:u()({},Object(_.b)("tokenMager",{setChatParams:f.b}),{jumpPage:function(t){var i=t+this.$route.params.id;this.doAuth(i)},initSdk:function(){this.initMsgServe()},initMsgServe:function(){var t=this;return c()(o.a.mark(function i(){var n;return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.$config({handlers:!0}).$post(O.a.GET_VISITOR_INFO,{}).then(function(i){t.visitorObj.visitorId=i.data});case 2:if(t.extChannel){i.next=4;break}return i.abrupt("return",!1);case 4:return i.next=6,t.$config({handlers:!0}).$post(I.a.GET_REG_SDK_INFO,{thirdUserId:"visitor_"+t.visitorObj.visitorId,channel:t.extChannel}).then(function(t){return t.data});case 6:n=i.sent,w.a.OBJ.init({accountId:n.accountId,token:n.token,appId:n.appId,channelId:n.channelRoom}),w.a.OBJ.regHandler(y.a.beginLive,function(i){console.log(i),t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id)});case 9:case"end":return i.stop()}},i,t)}))()},handleActivityStart:function(t){this.activity.countDown=1799},getInfo:function(){var t=this;return c()(o.a.mark(function i(){var n;return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return(n=JSON.parse(sessionStorage.getItem("login")))&&(t.user.phone=n.mobile),i.next=4,t.$config({handlers:!0}).$get(I.a.GET_LIVEINFO,{activityId:t.$route.params.id}).then(function(i){if(t.activity.viewCondition=i.data.activity.viewCondition,t.activity.status=i.data.activity.status,t.activity.title=i.data.guide?i.data.guide.title:"",t.activity.description=i.data.guide?i.data.guide.description:"",t.activity.countDown=i.data.activity.countDown,t.activity.isCountdown=!!i.data.guide&&"COUNTDOWN"===i.data.guide.showType,t.user.isApplay=i.data.joinInfo.isApplay,t.user.isOrder=i.data.joinInfo.isOrder,t.viewLimit.canAppoint=i.data.viewLimit.canAppoint,t.viewLimit.finishTime=i.data.viewLimit.finishTime,t.extChannel=i.data.activity.extChannelRoom,"LIVING"===t.activity.status)"APPOINT"===t.activity.viewCondition?t.user.isApplay&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.user.isOrder&&"NONE"===t.activity.viewCondition&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id);else if(t.activity.countDown<1800)"APPOINT"===t.activity.viewCondition?t.user.isApplay&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):"NONE"===t.activity.viewCondition&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id);else var n=t.activity.countDown,a=setInterval(function(i){--n<1800&&(t.activity.countDown=1799,clearInterval(a))},1e3)}).catch(function(i){t.$messageBox({header:"提示",content:i.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}})});case 4:t.getToken();case 5:case"end":return i.stop()}},i,t)}))()},getToken:function(){var t=this;("APPOINT"===this.activity.viewCondition&&this.user.isApplay||"APPOINT"!==this.activity.viewCondition)&&(this.chatParams.token?(this.vhallParams=this.chatParams,this.$nextTick(function(){t.initSdk()})):this.$config({handlers:!0}).$get(O.a.GET_USERREGACTIVITY,{activityId:this.$route.params.id}).then(function(i){t.$config({handlers:!0}).$get(I.a.GET_SDKTOKEN,{activityId:t.$route.params.id,activityUserId:i.data.activityUserId}).then(function(i){t.vhallParams.token=i.data.token,t.vhallParams.appId=i.data.appId,t.vhallParams.channelId=i.data.channelRoom,t.vhallParams.accountId=i.data.accountId,t.setChatParams(t.vhallParams),t.$nextTick(function(){t.initSdk()})})}))}})},g=(n(278),Object(h.a)(C,a,[],!1,null,"28ebadab",null));g.options.__file="src/pages/guide/index.vue";i.default=g.exports}}]);
//# sourceMappingURL=2.03ded74e.js.map