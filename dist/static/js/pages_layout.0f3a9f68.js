(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(a,t,e){},263:function(a,t,e){a.exports=e.p+"static/img/guid.png"},264:function(a,t,e){"use strict";var r=e(227);e.n(r).a},335:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"container"},[this.defaultImg?[t("img",{staticClass:"v-guid-img",attrs:{src:this.defaultImg,alt:""}})]:[t("img",{staticClass:"v-guid-img",attrs:{src:e(263),alt:""}})],this._v(" "),t("router-view",{staticClass:"app-view"})],2)};r._withStripped=!0;var i=e(50),n=e.n(i),s=e(71),d=e.n(s),h=e(226),u=e(223),c={data:function(){return{name:"",wxShare:{wxShareData:{appId:"",timestamp:"",nonceStr:"",signature:""},shareData:{title:"",shareDatadesc:"",shareDatalink:"",shareDataimgUrl:""},shareUser:{shareId:""}},imgUrl:""}},created:function(){this.share(),this.getInfo()},computed:{defaultImg:function(){return this.imgUrl?this.$imgHost+"/"+this.imgUrl:""}},methods:{getInfo:function(){var a=this;this.$config({handlers:!0}).$get(u.a.GET_LIVEINFO,{activityId:this.$route.params.id}).then(function(t){document.title=t.data.guide?t.data.guide.title:t.data.activity.title,a.imgUrl=t.data.guide?t.data.guide.imgUrl:""})},share:function(){var a=this;return d()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location.href,a.wxShare.shareData.shareDatalink=e,t.next=4,a.$config({handlers:!0}).$get(u.a.GET_SHARESIGN,{url:e}).then(function(t){a.wxShare.wxShareData.appId=t.data.appId,a.wxShare.wxShareData.timestamp=t.data.timestamp,a.wxShare.wxShareData.nonceStr=t.data.nonceStr,a.wxShare.wxShareData.signature=t.data.signature});case 4:return t.next=6,a.$config({handlers:!0}).$get(u.a.GET_SHAREINFO,{route:"guide_route",param:a.$route.params.id}).then(function(t){t.data&&(a.wxShare.shareData.title=t.data.title?t.data.title:"",a.wxShare.shareData.shareDatadesc=t.data.description?t.data.description:"",a.wxShare.shareData.shareDataimgUrl=t.data.imgUrl?t.data.imgUrl:"")});case 6:Object(h.a)(a.wxShare);case 7:case"end":return t.stop()}},t,a)}))()}}},o=(e(264),e(1)),g=Object(o.a)(c,r,[],!1,null,"585f3dd2",null);g.options.__file="src/pages/guide/guide-layout.vue";t.default=g.exports}}]);
//# sourceMappingURL=pages_layout.0f3a9f68.js.map