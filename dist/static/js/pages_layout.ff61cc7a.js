(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{228:function(t,a,e){},263:function(t,a,e){t.exports=e.p+"static/img/guid.png"},264:function(t,a,e){"use strict";var i=e(228);e.n(i).a},335:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[this.defaultImg?[a("img",{staticClass:"v-guid-img",attrs:{src:this.defaultImg,alt:""}})]:[a("img",{staticClass:"v-guid-img",attrs:{src:e(263),alt:""}})],this._v(" "),a("router-view",{staticClass:"app-view"})],2)};i._withStripped=!0;var r=e(50),n=e.n(r),s=e(71),d=e.n(s),o=e(227),u=e(223),c={data:function(){return{name:"",wxShare:{wxShareData:{appId:"",timestamp:"",nonceStr:"",signature:""},shareData:{title:"",shareDatadesc:"",shareDatalink:"",shareDataimgUrl:""},shareUser:{shareId:""}},imgUrl:""}},created:function(){this.isWx()&&this.share(),this.getInfo()},computed:{defaultImg:function(){return this.imgUrl?this.$imgHost+"/"+this.imgUrl:""}},methods:{getInfo:function(){var t=this;this.$config({handlers:!0}).$get(u.a.GET_LIVEINFO,{activityId:this.$route.params.id}).then(function(a){document.title=a.data.guide?a.data.guide.title:a.data.activity.title;var e=document.createElement("iframe");e.style.display="none",e.setAttribute("src","/");e.addEventListener("load",function t(){setTimeout(function(){e.removeEventListener("load",t),document.body.removeChild(e)},0)}),document.body.appendChild(e),t.imgUrl=a.data.guide?a.data.guide.imgUrl:""})},share:function(){var t=this;return d()(n.a.mark(function a(){var e;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=window.location.href,t.wxShare.shareData.shareDatalink=e,a.next=4,t.$config({handlers:!0}).$get(u.a.GET_SHARESIGN,{url:e}).then(function(a){t.wxShare.wxShareData.appId=a.data.appId,t.wxShare.wxShareData.timestamp=a.data.timestamp,t.wxShare.wxShareData.nonceStr=a.data.nonceStr,t.wxShare.wxShareData.signature=a.data.signature});case 4:return a.next=6,t.$config({handlers:!0}).$get(u.a.GET_SHAREINFO,{route:"guide_route",param:t.$route.params.id}).then(function(a){a.data&&(t.wxShare.shareData.title=a.data.title?a.data.title:"",t.wxShare.shareData.shareDatadesc=a.data.description?a.data.description:"",t.wxShare.shareData.shareDataimgUrl=a.data.imgUrl?"https:"+t.$imgHost+"/"+a.data.imgUrl:"")});case 6:Object(o.a)(t.wxShare);case 7:case"end":return a.stop()}},a,t)}))()},isWx:function(){return!(-1===navigator.userAgent.toLowerCase().indexOf("micromessenger"))}}},h=(e(264),e(1)),l=Object(h.a)(c,i,[],!1,null,"585f3dd2",null);l.options.__file="src/pages/guide/guide-layout.vue";a.default=l.exports}}]);
//# sourceMappingURL=pages_layout.ff61cc7a.js.map