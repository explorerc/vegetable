(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(a,t,e){},230:function(a,t,e){a.exports=e.p+"static/img/1.png"},231:function(a,t,e){"use strict";var r=e(191);e.n(r).a},300:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"container"},[t("img",{staticClass:"v-guid-img",attrs:{src:e(230),alt:""}}),this._v(" "),t("router-view",{staticClass:"app-view"})],1)};r._withStripped=!0;var i=e(30),n=e.n(i),s=e(190),h=e(63),c={data:()=>({name:"",wxShare:{wxShareData:{appId:"",timestamp:"",nonceStr:"",signature:""},shareData:{title:"",desc:"",link:"",imgUrl:""},shareUser:{shareId:""}}}),created:function(){this.share()},components:{},methods:{share(){var a=this;return n()(function*(){let t=window.location.href;a.wxShare.shareData.link=t,yield h.a.getShareSign(t).then(function(t){200===t.code&&(a.wxShare.wxShareData.appId=t.data.appId,a.wxShare.wxShareData.timestamp=t.data.timestamp,a.wxShare.wxShareData.nonceStr=t.data.nonceStr,a.wxShare.wxShareData.signature=t.data.signature)}),yield h.a.getShareInfo({route:"guide_route"}).then(function(t){200===t.code&&t.data&&(a.wxShare.shareData.title=t.data.title?t.data.title:"",a.wxShare.shareData.desc=t.data.description?t.data.description:"",a.wxShare.shareData.imgUrl=t.data.imgUrl?t.data.imgUrl:"")}),Object(s.a)(a.wxShare)})()}}},d=(e(231),e(1)),o=Object(d.a)(c,r,[],!1,null,"7285f507",null);o.options.__file="src/pages/guide/guid-layout.vue";t.default=o.exports}}]);
//# sourceMappingURL=pages_layout.cf42f840.js.map