(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{237:function(t,i,n){},238:function(t,i,n){},285:function(t,i,n){"use strict";var a=n(237);n.n(a).a},287:function(t,i,n){"use strict";var a=n(238);n.n(a).a},355:function(t,i,n){"use strict";n.r(i);var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"v-guid"},[n("p",{staticClass:"v-title"},[t._v("\n    "+t._s(t.activity.title)+"\n  ")]),t._v(" "),!t.activity.isCountdown||"NONE"===t.activity.viewCondition&&t.activity.countDown<1800||"Y"!==t.viewLimit.canAppoint?n("div",{staticClass:"v-summary"},[n("div",{domProps:{innerHTML:t._s(t.activity.description)}})]):t._e(),t._v(" "),t.activity.countDown>=1800?n("div",{staticClass:"v-operation"},["APPOINT"===t.activity.viewCondition?["Y"===t.viewLimit.canAppoint?["LIVING"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播正在进行中\n          ")]):t._e()]:"PLAYBACK"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播已生成回放，请报名后观看\n          ")]):t._e()]:"FINISH"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播已结束\n          ")]):t._e()]:[t.activity.isCountdown?n("com-countdown",{attrs:{time:t.activity.countDown}}):t._e()],t._v(" "),t.user.isApplay?[n("button",{staticClass:"primary-button v-disabled"},[t._v("已报名")])]:[n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"SignUp/")}}},[t._v("立即报名")]),t._v(" "),this.user.phone?t._e():n("a",{staticClass:"v-registered",attrs:{href:"javascript:;"},on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"CheckState/")}}},[t._v("已报名")])]]:["LIVING"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播正在进行中\n          ")]):t._e()]:"PLAYBACK"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播已生成回放，请报名后观看\n          ")]):t._e()]:"FINISH"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播已结束\n          ")]):t._e()]:[t.activity.isCountdown?n("com-countdown",{attrs:{time:t.activity.countDown}}):t._e()],t._v(" "),t.user.isApplay?[n("button",{staticClass:"primary-button v-disabled"},[t._v("已报名")])]:[this.user.phone?n("button",{staticClass:"primary-button v-disabled"},[t._v("报名已截止")]):n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"CheckState/")}}},[t._v("报名验证")])]]]:["LIVING"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n          直播正在进行中\n        ")]):t._e(),t._v(" "),n("button",{staticClass:"primary-button",on:{click:function(i){t.joinWebinar()}}},[t._v("进入直播")])]:"PLAYBACK"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n          直播已生成回放，请点击观看\n        ")]):t._e(),t._v(" "),n("button",{staticClass:"primary-button",on:{click:function(i){t.joinWebinar()}}},[t._v("进入直播")])]:"FINISH"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n          直播已结束\n        ")]):t._e(),t._v(" "),n("button",{staticClass:"primary-button",on:{click:function(i){t.joinWebinar()}}},[t._v("进入直播")])]:[t.activity.isCountdown?n("com-countdown",{attrs:{time:t.activity.countDown}}):t._e(),t._v(" "),t.user.isOrder?n("button",{staticClass:"primary-button"},[t._v("已预约")]):[n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"SignUp/")}}},[t._v("预约")]),t._v(" "),this.user.phone?t._e():n("a",{staticClass:"v-registered",attrs:{href:"javascript:;"},on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"CheckState/")}}},[t._v("已预约")])]]]],2):n("div",{staticClass:"v-operation"},["APPOINT"===t.activity.viewCondition?["Y"===t.viewLimit.canAppoint?["LIVING"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播正在进行中\n          ")]):t._e()]:"PLAYBACK"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t.user.isApplay?[t._v("\n              直播已生成回放，请点击观看\n            ")]:[t._v("\n              直播已生成回放，请报名后观看\n            ")]],2):t._e()]:"FINISH"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播已结束\n          ")]):t._e()]:[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播即将开始\n          ")]):t._e()],t._v(" "),t.user.isApplay?[n("button",{staticClass:"primary-button",on:{click:function(i){t.joinWebinar()}}},[t._v("进入直播")])]:[n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"SignUp/")}}},[t._v("立即报名")]),t._v(" "),this.user.phone?t._e():n("a",{staticClass:"v-registered",attrs:{href:"javascript:;"},on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"CheckState/")}}},[t._v("已报名")])]]:["LIVING"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播正在进行中\n          ")]):t._e()]:"PLAYBACK"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t.user.isApplay?[t._v("\n              直播已生成回放，请点击观看\n            ")]:[t._v("\n              直播已生成回放\n            ")]],2):t._e()]:"FINISH"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播已结束\n          ")]):t._e()]:[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n            直播即将开始\n          ")]):t._e()],t._v(" "),t.user.isApplay?[n("button",{staticClass:"primary-button",on:{click:function(i){t.joinWebinar()}}},[t._v("进入直播")])]:[this.user.phone?n("button",{staticClass:"primary-button v-disabled"},[t._v("报名已截止")]):n("button",{staticClass:"primary-button",on:{click:function(i){t.jumpPage(t.MOBILE_HOST+"CheckState/")}}},[t._v("报名验证")])]]]:["LIVING"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n          直播正在进行中\n        ")]):t._e()]:"PLAYBACK"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n          直播已生成回放，请点击观看\n        ")]):t._e()]:"FINISH"===t.activity.status?[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n          直播已结束\n        ")]):t._e()]:[t.activity.isCountdown?n("p",{staticClass:"v-living"},[t._v("\n          直播即将开始\n        ")]):t._e()],t._v(" "),n("button",{staticClass:"primary-button",on:{click:function(i){t.joinWebinar()}}},[t._v("进入直播")])]],2)])};a._withStripped=!0;var s=n(51),e=n.n(s),o=n(73),c=n.n(o),r=n(12),v=n.n(r),u=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"v-cundown"},[n("span",[t._v(t._s(t.showTime.day))]),t._v("天"),n("span",[t._v(t._s(t.showTime.hour))]),t._v("小时"),n("span",[t._v(t._s(t.showTime.minute))]),t._v("分"),n("span",[t._v(t._s(t.showTime.second))]),t._v("秒\n")])};u._withStripped=!0;var d={props:{time:Number},data:function(){return{showTime:{day:0,hour:0,minute:0,second:0},timer:0}},mounted:function(){},components:{},created:function(){this.countDown(this.time)},watch:{},methods:{fomatDate:function(t){this.showTime.day=t/3600/24>>0,this.showTime.day<9&&(this.showTime.day="0"+this.showTime.day),this.showTime.hour=((t/3600%24>>0)+"").padStart(2,0),this.showTime.minute=((t/60%60>>0)+"").padStart(2,0),this.showTime.second=((t%60>>0)+"").padStart(2,0),1800===t&&(this.$emit("timeOut"),clearInterval(this.timer))},countDown:function(t){var i=this;if(t>0)var n=setInterval(function(a){i.fomatDate(t--),t<0&&clearInterval(n)},1e3);else this.fomatDate(0)}}},l=(n(285),n(1)),p=Object(l.a)(d,u,[],!1,null,"573d783f",null);p.options.__file="src/components/common/countdown/countdown.vue";var _=p.exports,h=n(226),m=n(227),y=n(50),w=n(3),C=n(228),I=n(225),f=n(72),g={mixins:[h.a],data:function(){return{refer:void 0,MOBILE_HOST:"//test-zhike.vhall.com/m/",goUrl:"",goRegisteredUrl:"",activity:{viewCondition:"",title:"",description:"",isCountdown:!1,countDown:"",status:"",extChannel:""},user:{phone:"",isApplay:!1,isOrder:!1},viewLimit:{finishTime:"",canAppoint:""},vhallParams:{token:"",appId:"",channelId:"",accountId:""},visitorObj:{}}},mounted:function(){this.getInfo()},components:{"com-countdown":_},created:function(){},computed:Object(y.c)("tokenMager",{chatParams:function(t){return t.chatParams}}),watch:{countDown:function(){console.log(this.activity.countDown)}},methods:v()({},Object(y.b)("tokenMager",{setChatParams:w.c}),{jumpPage:function(t){var i=t+this.$route.params.id;this.doAuth(i)},initSdk:function(){this.initMsgServe()},initMsgServe:function(){var t=this;return c()(e.a.mark(function i(){var n,a;return e.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.$config({handlers:!0}).$post(f.a.GET_VISITOR_INFO,{wechatAuth:sessionStorage.getItem("wechatAuth")}).then(function(i){var n=t.getLoginInfo();_log.set("business_uid",t.activity.userId),n&&_log.set("consumer_uid",n.consumerUserId),_log.set("activity_id",t.$route.params.id),_log.set("visitor_id",i.data.visitorId),void 0!==t.refer?_log.track(Vhall_User_Actions.ENTER,{event:parseInt(t.refer)}):_log.track(Vhall_User_Actions.ENTER),t.visitorObj.visitorId=i.data.visitorId;var a=window.localStorage.getItem(t.visitorObj.visitorId+"_"+t.$route.params.id);if("LIVING"===t.activity.status||"PLAYBACK"===t.activity.status)"APPOINT"===t.activity.viewCondition?t.user.isApplay&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):"NONE"===t.activity.viewCondition&&a&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id);else if(t.activity.countDown<1800)"APPOINT"===t.activity.viewCondition?t.user.isApplay&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):"NONE"===t.activity.viewCondition&&a&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id);else var s=t.activity.countDown,e=setInterval(function(i){--s<1800&&(t.activity.countDown=1799,clearInterval(e))},1e3)});case 2:if(t.extChannel){i.next=4;break}return i.abrupt("return",!1);case 4:return n=JSON.parse(sessionStorage.getItem("login")),i.next=7,t.$config({handlers:!0}).$post(I.a.GET_REG_SDK_INFO,{thirdUserId:t.userInfo?n.consumerUserId:"visitor_"+t.sdkVisitorId,channel:t.extChannel}).then(function(t){return t.data});case 7:a=i.sent,m.a.OBJ.init({accountId:a.accountId,token:a.token,appId:a.appId,channelId:a.channelRoom}),m.a.OBJ.regHandler(C.a.beginLive,function(i){console.log(i),t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id)});case 10:case"end":return i.stop()}},i,t)}))()},handleActivityStart:function(t){this.activity.countDown=1799},getInfo:function(){var t=this;return c()(e.a.mark(function i(){var n;return e.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return(n=JSON.parse(sessionStorage.getItem("login")))&&(t.user.phone=n.mobile),i.next=4,t.$config({handlers:!0}).$get(I.a.GET_LIVEINFO,{activityId:t.$route.params.id}).then(function(i){t.activity.viewCondition=i.data.activity.viewCondition,t.activity.userId=i.data.activity.userId,t.activity.status=i.data.activity.status,t.activity.title=i.data.guide?i.data.guide.title:"",t.activity.description=i.data.guide?i.data.guide.description:"",t.activity.countDown=i.data.activity.countDown,t.activity.isCountdown=!!i.data.guide&&"COUNTDOWN"===i.data.guide.showType,t.user.isApplay=i.data.joinInfo.isApplay,t.user.isOrder=i.data.joinInfo.isOrder,t.viewLimit.canAppoint=i.data.viewLimit.canAppoint,t.viewLimit.finishTime=i.data.viewLimit.finishTime,t.extChannel=i.data.activity.extChannelRoom,t.refer=t.$route.query.refer,void 0!==t.refer&&localStorage.setItem("refer_"+t.$route.params.id,t.refer),t.initSdk(),console.log(t.visitorObj)}).catch(function(i){t.$messageBox({header:"提示",content:i.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}})});case 4:case"end":return i.stop()}},i,t)}))()},joinWebinar:function(){window.localStorage.setItem(this.visitorObj.visitorId+"_"+this.$route.params.id,!0),this.jumpPage(this.MOBILE_HOST+"watch/")}})},b=(n(287),Object(l.a)(g,a,[],!1,null,"28ebadab",null));b.options.__file="src/pages/guide/index.vue";i.default=b.exports}}]);
//# sourceMappingURL=2.2a953ff0.js.map