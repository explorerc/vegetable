(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(t,e,s){},138:function(t,e,s){},151:function(t,e,s){"use strict";var i=s(137);s.n(i).a},153:function(t,e,s){"use strict";var i=s(138);s.n(i).a},162:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-guid"},[s("p",{staticClass:"v-title"},[t._v("\n    这里显示引导标题\n  ")]),t._v(" "),s("div",{staticClass:"v-summary"},[t._v("\n    是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介\n    是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介\n    是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介\n    是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介\n  ")]),t._v(" "),t.toStartTime>=1800?s("div",{staticClass:"v-operation"},["guide"===t.event.type?[s("com-countdown",{attrs:{time:t.toStartTime},on:{timeOut:t.timeOut}}),t._v(" "),t.event.isSignup?[t.event.isSignup?s("a",{staticClass:"v-submit",attrs:{href:t.goUrl}},[t._v("立即报名")]):t._e(),t._v(" "),t.event.isSignup?s("a",{staticClass:"v-registered",attrs:{href:"/CheckState"}},[t._v("已报名")]):t._e()]:[t.event.isSignup?t._e():s("a",{staticClass:"v-submit",attrs:{href:t.goUrl}},[t._v("立即报名")])]]:t._e(),t._v(" "),"normal"===t.event.type?[s("com-countdown",{attrs:{time:t.toStartTime},on:{timeOut:t.timeOut}}),t._v(" "),t.event.isSignup?s("a",{staticClass:"v-submit",attrs:{href:t.goUrl}},[t._v("预约")]):t._e(),t._v(" "),t.event.isSignup?t._e():s("a",{staticClass:"v-submit",attrs:{href:t.goUrl}},[t._v("预约")]),t._v(" "),t.event.isSignup?s("a",{staticClass:"v-registered",attrs:{href:"/CheckState"}},[t._v("已报名")]):t._e()]:t._e()],2):s("div",{staticClass:"v-operation"},["guide"===t.event.type?[s("com-countdown",{attrs:{time:t.toStartTime},on:{timeOut:t.timeOut}}),t._v(" "),t.event.isSignup?[s("a",{staticClass:"v-submit",attrs:{href:t.goUrl}},[t._v("立即报名")]),t._v(" "),s("a",{staticClass:"v-registered",attrs:{href:"/CheckState"}},[t._v("已报名")])]:[t.event.isSignup?t._e():s("a",{staticClass:"v-submit",attrs:{href:t.goUrl}},[t._v("立即报名")])]]:t._e(),t._v(" "),"normal"===t.event.type?[s("a",{staticClass:"v-enter",attrs:{href:t.goUrl}},[t._v("进入直播")])]:t._e()],2)])};i._withStripped=!0;var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-cundown"},[s("span",[t._v(t._s(t.showTime.day))]),t._v("天"),s("span",[t._v(t._s(t.showTime.hour))]),t._v("小时"),s("span",[t._v(t._s(t.showTime.minute))]),t._v("分"),s("span",[t._v(t._s(t.showTime.second))]),t._v("秒\n")])};a._withStripped=!0;var n={props:{time:Number},data:()=>({showTime:{day:0,hour:0,minute:0,second:0},timer:0}),mounted(){},components:{},created(){this.countDown(this.time)},watch:{},methods:{fomatDate(t){this.showTime.day=t/3600/24>>0,this.showTime.hour=((t/3600%24>>0)+"").padStart(2,0),this.showTime.minute=((t/60%60>>0)+"").padStart(2,0),this.showTime.second=((t%60>>0)+"").padStart(2,0),0===t&&(this.$emit("timeOut"),clearInterval(this.timer))},countDown(t){let e=setInterval(s=>{this.fomatDate(t--),t<0&&clearInterval(e)},1e3)}}},o=(s(151),s(4)),r=Object(o.a)(n,a,[],!1,null,"573d783f",null);r.options.__file="src/components/common/countdown/countdown.vue";var v=r.exports,c={data:()=>({goUrl:"",goRegisteredUrl:"",toStartTime:1805,event:{type:"guide",isSignup:!0}}),mounted(){},components:{"com-countdown":v},created(){switch(this.event.type){case"guide":this.goUrl="/SignUp";break;case"normal":this.goUrl="javacript:;"}},watch:{toStartTime:function(){console.log(this.toStartTime)}},methods:{timeOut(){console.log("活动开始啦")}}},u=(s(153),Object(o.a)(c,i,[],!1,null,"28ebadab",null));u.options.__file="src/pages/guide/index.vue";e.default=u.exports}}]);
//# sourceMappingURL=3.58f8a991.js.map