(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{244:function(t,a,i){},306:function(t,a,i){"use strict";var n=i(244);i.n(n).a},405:function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.activity.countDown<1800||"LIVING"===t.activity.status?n("div",{staticClass:"v-success"},[n("img",{staticClass:"v-img",attrs:{src:i(233),alt:""}}),t._v(" "),"LIVING"===t.activity.status?n("p",{staticClass:"v-start-title"},[n("span",[t._v("直播正在进行中")])]):n("p",{staticClass:"v-start-title"},[n("span",[t._v("直播将要开始啦")])]),t._v(" "),n("button",{staticClass:"primary-button",on:{click:t.accountSubmit}},[t._v("进入直播")])]):n("div",{staticClass:"v-success"},[n("img",{staticClass:"v-img",attrs:{src:i(233),alt:""}}),t._v(" "),"FINISH"===t.activity.status?n("p",{staticClass:"v-success-title"},[n("span",[t._v("直播已结束")])]):n("p",{staticClass:"v-success-title"},["APPOINT"===t.activity.viewCondition?n("span",[t._v("报名成功")]):"NONE"===t.activity.viewCondition?n("span",[t._v("预约成功")]):t._e()]),t._v(" "),"FINISH"!=t.activity.status?n("p",[t._v("活动将于\n    "),n("span",{staticClass:"v-red"},[t._v(t._s(t.activity.startTime))]),t._v("准时开播")]):t._e()])};n._withStripped=!0;var s=i(51),e=i.n(s),c=i(74),o=i.n(c),r=i(12),u=i.n(r),v=i(229),d=i(50),p=i(3),l=i(232),h=i(228),I=i(73),f=i(230),y={mixins:[v.a],data:function(){return{MOBILE_HOST:"//test-zhike.vhall.com/m/",activity:{viewCondition:"",status:"",startTime:"",countDown:"",extChannel:""},user:{phone:"",isApplay:!1,isOrder:!1},vhallParams:{token:"",appId:"",channelId:"",accountId:""},visitorObj:{}}},mounted:function(){},components:{},created:function(){this.getInfo()},computed:Object(d.c)("tokenMager",{chatParams:function(t){return t.chatParams}}),watch:{},methods:u()({},Object(d.b)("tokenMager",{setChatParams:p.c}),{accountSubmit:function(){this.doAuth(this.MOBILE_HOST+"watch/"+this.$route.params.id)},initSdk:function(){this.initMsgServe()},initMsgServe:function(){var t=this;return o()(e.a.mark(function a(){var i;return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$config({handlers:!0}).$post(I.a.GET_VISITOR_INFO,{wechatAuth:sessionStorage.getItem("wechatAuth")}).then(function(a){t.visitorObj.visitorId=a.data});case 2:if(t.extChannel){a.next=4;break}return a.abrupt("return",!1);case 4:return a.next=6,t.$config({handlers:!0}).$post(h.a.GET_REG_SDK_INFO,{thirdUserId:"visitor_"+t.visitorObj.visitorId,channel:t.extChannel}).then(function(t){return t.data});case 6:i=a.sent,f.a.OBJ.init({accountId:i.accountId,token:i.token,appId:i.appId,channelId:i.channelRoom}),f.a.OBJ.regHandler(l.a.beginLive,function(a){console.log(a),t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id)});case 9:case"end":return a.stop()}},a,t)}))()},handleActivityStart:function(t){this.activity.countDown=1799},getInfo:function(){var t=this;return o()(e.a.mark(function a(){return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$config({handlers:!0}).$get(h.a.GET_LIVEINFO,{activityId:t.$route.params.id}).then(function(a){if(t.initSdk(),t.activity.viewCondition=a.data.activity.viewCondition,t.activity.status=a.data.activity.status,t.activity.startTime=a.data.activity.startTime,t.activity.countDown=a.data.activity.countDown,t.user.isApplay=a.data.joinInfo.isApplay,t.user.isOrder=a.data.joinInfo.isOrder,t.extChannel=a.data.activity.extChannelRoom,("LIVING"===t.activity.status||t.activity.countDown<=1799||"PLAYBACK"===t.activity.status)&&("APPOINT"===t.activity.viewCondition?a.data.joinInfo.isApplay&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):a.data.joinInfo.isOrder&&"NONE"===t.activity.viewCondition&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id)),t.activity.countDown>1800)var i=t.activity.countDown,n=setInterval(function(a){--i<1800&&(t.activity.countDown=1799,clearInterval(n))},1e3)}).catch(function(){t.$router.replace("/empty")});case 2:case"end":return a.stop()}},a,t)}))()}})},m=(i(306),i(1)),w=Object(m.a)(y,n,[],!1,null,"3ffef81c",null);w.options.__file="src/pages/guide/success.vue";a.default=w.exports}}]);
//# sourceMappingURL=6.ecd2b224.js.map