(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{267:function(t,s,a){},327:function(t,s,a){"use strict";var i=a(267);a.n(i).a},343:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"v-activity-list"},[a("a",{staticClass:"v-return-userinfo clearfix",attrs:{href:t.MOBILE_HOST+"user"}},[a("i",{staticClass:"iconfont icon-jiantouzuo fl"}),t._v("我的活动\n  ")]),t._v(" "),a("div",{ref:"bscroll",staticClass:"v-list",on:{scroll:function(s){t.scrollEvent(s)}}},[a("ol",{staticClass:"bscroll-container"},t._l(t.tableList,function(s){return a("li",{key:s.id},[a("a",{staticClass:"clearfix",attrs:{href:t.MOBILE_HOST+"guide/"+s.id}},[a("div",{staticClass:"v-activity-img fl"},[a("div",{staticClass:"img",style:{"background-image":"url("+s.imgUrl+")"}}),t._v(" "),"PREPARE"==s.status?a("span",{staticClass:"live-state"},[t._v("预告")]):t._e(),t._v(" "),"LIVING"==s.status?a("span",{staticClass:"live-state"},[a("i",{staticClass:"live-point"}),t._v("直播中")]):t._e(),t._v(" "),"PLAYBACK"==s.status?a("span",{staticClass:"live-state"},[t._v("回放")]):t._e(),t._v(" "),"FINISH"==s.status?a("span",{staticClass:"live-state"},[t._v("结束")]):t._e()]),t._v(" "),a("div",{staticClass:"v-content-block fr"},[a("p",{staticClass:"v-title"},[t._v("\n              "+t._s(s.title)+"\n            ")]),t._v(" "),a("p",{staticClass:"v-sponsor"},[t._v("\n              "+t._s(s.hostNickname)+"\n            ")]),t._v(" "),a("p",{staticClass:"v-time"},[t._v("\n              "+t._s(s.startTime)+"\n            ")])])])])}))])])};i._withStripped=!0;var e=a(12),n=a.n(e),l=a(214),o=a(50),c=a(3),r=a(213),u={mixins:[l.a],data:function(){return{MOBILE_HOST:"//zhike.vhall.com/m/",searchParams:{page:1,pageSize:15,totalPage:0},tableList:[],total:0,imgHost:"//static.vhallyun.com/"}},mounted:function(){var t=this;this.getLoginInfo()?this.storeLoginInfo(this.getLoginInfo()):this.$router.replace("/user"),this.getDataList(),this.scrollEvent=this.debounce(function(s){t.$refs.bscroll.offsetHeight+t.$refs.bscroll.scrollTop>t.$refs.bscroll.scrollHeight-100&&t.getDataList()},50)},computed:n()({},Object(o.c)("login",{loginInfo:function(t){return t.loginInfo}})),props:{},watch:{},methods:n()({},Object(o.b)("login",{storeLoginInfo:c.i}),{debounce:function(t,s,a){var i;return function(){var e=this,n=arguments,l=a&&!i;clearTimeout(i),i=setTimeout(function(){i=null,a||t.apply(e,n)},s),l&&t.apply(e,n)}},getDataList:function(){var t=this;this.$get(r.a.GET_ACTIVITY_LIST,this.searchParams).then(function(s){s.data.list.map(function(s,a){return s.imgUrl?s.imgUrl=t.$imgHost+"/"+s.imgUrl:s.imgUrl="//cnstatic01.e.vhall.com/static/img/v35-webinar.png",s}),s.data.list.forEach(function(s){t.tableList.push(s)}),t.total=s.data.total,t.searchParams.page=parseInt(s.data.currPage)+1,t.searchParams.totalPage=s.data.totalPage})}})},v=(a(327),a(1)),f=Object(v.a)(u,i,[],!1,null,"d0e67a48",null);f.options.__file="src/pages/user/activity-list.vue";s.default=f.exports}}]);
//# sourceMappingURL=15.c30b6d1c.js.map