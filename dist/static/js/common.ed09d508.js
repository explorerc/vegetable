(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,e,i){"use strict";var s=i(0),n=i.n(s),o={},a=[];o.instance||(o.instance=new n.a),o.$on=function(t,e){-1===a.indexOf(t)&&a.push(t),o.instance.$on(t,e)},o.$emit=function(t,e){o.instance.$emit(t,e)},o.offAll=function(t,e){a.forEach(function(t){o.instance.$off(t)})},e.a=o},141:function(t,e,i){"use strict";e.a={GET_GOODS_INFO:"/goods",GET_GOOD_BYID:"/goods/id",GET_GOOD_KEY:"/goods/key"}},142:function(t,e,i){"use strict";e.a={GET_CART_INFO:"/cart/info",GET_CART_MINNUM:"/cart/minNum",GET_CART_ADDNUM:"/cart/addNum",GET_CART_ADD:"/cart/add",GET_CART_DEL:"/cart/delete"}},143:function(t,e,i){},144:function(t,e,i){},145:function(t,e,i){},156:function(t,e,i){},157:function(t,e,i){},163:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search-input"},[i("div",{staticClass:"input-bg"},[i("i",{staticClass:"iconfont icon-search",on:{click:function(e){t.search()}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],staticClass:"searchInput",attrs:{type:"search",placeholder:"请输入关键字进行搜索",result:t.searchResult},domProps:{value:t.searchKey},on:{keypress:t.keySearch,focus:t.inputFocus,"update:result":function(e){t.searchResult=e},input:function(e){e.target.composing||(t.searchKey=e.target.value)}}})]),t._v(" "),i("button",{staticClass:"search-btn",on:{click:function(e){t.search()}}},[t._v("搜索")])]),t._v(" "),t.searchResult?i("div",{staticClass:"search-result"},[t._t("default")],2):t._e()])};s._withStripped=!0;var n=i(140),o={name:"search",props:{isSearchPage:{default:!1,type:Boolean}},data:function(){return{searchKey:"",searchResult:"",searchPage:!0}},methods:{search:function(){this.$emit("search",this.searchKey)},keySearch:function(t){13===t.keyCode&&this.search()},inputFocus:function(){this.searchPage=this.isSearchPage,this.searchPage||n.a.$emit("currentTabComponent","SearchPage")}},watch:{}},a=(i(165),i(37)),c=Object(a.a)(o,s,[],!1,null,"4ad41bb8",null);c.options.__file="src/components/search.vue";e.a=c.exports},164:function(t,e,i){"use strict";e.a={GET_KIND_INFO:"/kind"}},165:function(t,e,i){"use strict";var s=i(143);i.n(s).a},167:function(t,e,i){"use strict";var s=i(144);i.n(s).a},169:function(t,e,i){t.exports=i.p+"static/img/carousel1.jpg"},170:function(t,e,i){t.exports=i.p+"static/img/carousel2.jpg"},171:function(t,e,i){t.exports=i.p+"static/img/carousel3.jpg"},172:function(t,e,i){"use strict";var s=i(145);i.n(s).a},194:function(t,e,i){"use strict";var s=i(156);i.n(s).a},196:function(t,e,i){"use strict";var s=i(157);i.n(s).a},210:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"home",attrs:{"data-title":"首页"}},[i("div",{staticClass:"block"},[i("span",{staticClass:"demonstration"}),t._v(" "),i("mt-swipe",{attrs:{auto:4e3}},t._l(t.imgList,function(e){return i("mt-swipe-item",{key:e.id},[i("img",{attrs:{src:e.idView,alt:""},on:{click:function(i){t.swipeClick(e.id)}}})])}))],1),t._v(" "),i("Search",{attrs:{isSearchPage:t.isSearchPage},on:{inputFocus:function(e){t.isSearchPage=!1}}}),t._v(" "),i("div",{staticClass:"vg-category-bg"},[i("div",{staticClass:"vg-category"},[i("ul",{staticClass:"cat-list"},t._l(t.kindList,function(e){return i("li",{on:{click:function(i){t.kindClick(e.id)}}},[t._m(0,!0),t._v(" "),i("span",[t._v(t._s(e.name))])])}))])]),t._v(" "),i("div",{staticClass:"content"},[i("GoodCard",{attrs:{cardTitle:"今日特卖",goods:t.discountGoods}}),t._v(" "),i("GoodCard",{attrs:{cardTitle:"礼包嘉年华",goods:t.presentGoods}}),t._v(" "),i("GoodCard",{attrs:{cardTitle:"绿色蔬菜",goods:t.greenGoods}})],1)],1)};s._withStripped=!0;var n=i(163),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"good-card"},[i("h3",[t._v("--"+t._s(t.cardTitle)+"--")]),t._v(" "),i("div",{staticClass:"con-bg"},[i("div",{staticClass:"card-content"},t._l(t.goods,function(e){return i("div",{staticClass:"card-item",on:{click:function(i){t.goodDetail(e.id)}}},[i("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("p",{staticClass:"good-name"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"price-box"},[e.disprice?i("span",{staticClass:"price"},[t._v("¥"+t._s(e.disprice))]):i("span",{staticClass:"price"},[t._v("¥"+t._s(e.price))]),t._v(" "),e.disprice?i("span",{staticClass:"del-price"},[t._v("¥"),i("span",{staticClass:"del-line"},[t._v(t._s(e.price))])]):t._e()])])}))])])};o._withStripped=!0;var a=i(140),c={name:"good-card",props:{cardTitle:{type:String},goods:{type:Array},tableType:{type:String}},methods:{goodDetail:function(t){a.a.$emit("currentTabComponent","GoodDetail"),setTimeout(function(){a.a.$emit("goodsId",t)},0)}}},r=(i(167),i(37)),d=Object(r.a)(c,o,[],!1,null,"06847b80",null);d.options.__file="src/components/good-card.vue";var u=d.exports,l=i(164),f=i(141),m={components:{Search:n.a,GoodCard:u},data:function(){return{cardTitle:"",kindList:[],kindId:8,discountGoods:[],presentGoods:[],greenGoods:[],keyType:0,goodInfo:[],isSearchPage:!1,imgList:[{id:0,idView:i(169)},{id:1,name:"详情",idView:i(170)},{id:2,name:"推荐",idView:i(171)}]}},methods:{queryKind:function(){var t=this;this.$get(this.base_url+l.a.GET_KIND_INFO,{}).then(function(e){200===e.code&&(t.kindList=e.data)})},kindClick:function(t){var e=this;this.kindId=t,console.log(this.kindId),setTimeout(function(){a.a.$emit("kindId",e.kindId)},0),a.a.$emit("currentTabComponent","Kind"),this.$emit("kindClick")},queryGoodInfo:function(){var t=this;this.$get(f.a.GET_GOODS_INFO).then(function(e){if(200===e.code){t.goodInfo=e.data;var i=t.goodInfo.length;console.log(t.goodInfo[1].disprice);for(var s=0;s<i;s++)t.goodInfo[s].disPrice&&t.discountGoods.length<10&&t.discountGoods.push(t.goodInfo[s]),1===t.goodInfo[s].kindId&&t.greenGoods.length<10&&t.greenGoods.push(t.goodInfo[s]),8===t.goodInfo[s].kindId&&t.presentGoods.length<10&&t.presentGoods.push(t.goodInfo[s])}})},swipeClick:function(t){switch(t){case 0:a.a.$emit("currentTabComponent","Coupon");break;case 1:case 2:a.a.$emit("currentTabComponent","Kind")}}},created:function(){this.queryKind(),this.queryGoodInfo()}},p=(i(172),Object(r.a)(m,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i")])}],!1,null,"5b685826",null));p.options.__file="src/pages/home/index.vue";e.default=p.exports},211:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"good-detail",attrs:{"data-title":"商品详情"}},[i("div",{staticClass:"cover"},[i("img",{attrs:{src:t.goodInfo[0].imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(t.goodInfo[0].name))]),t._v(" "),i("div",{staticClass:"price-box"},[t.goodInfo[0].disPrice?i("span",{staticClass:"price"},[t._v("¥"+t._s(t.goodInfo[0].disPrice))]):i("span",{staticClass:"price"},[t._v("¥"+t._s(t.goodInfo[0].price))]),t._v(" "),t.goodInfo[0].disPrice?i("span",{staticClass:"del-price"},[t._v("原价¥"),i("span",{staticClass:"del-line"},[t._v(t._s(t.goodInfo[0].price))]),t._v("份")]):t._e()]),t._v(" "),i("div",{staticClass:"inventory"},[t._v("\n    库存："+t._s(t.goodInfo[0].inventory)+"\n  ")]),t._v(" "),i("div",{staticClass:"number clearfix"},[i("span",{staticClass:"fl"},[t._v("规格：")]),t._v(" "),i("NumberBtn",{staticClass:"fr",attrs:{goodsAmount:t.number,maxNumber:t.goodInfo[0].inventory},on:{minusNumberClick:t.minusNumberClick,addNumberClick:t.addNumberClick}})],1),t._v(" "),i("div",{staticClass:"buy"},[i("button",{staticClass:"iconfont icon-goumai"},[t._v("立即购买")]),t._v(" "),i("button",{staticClass:"iconfont icon-cart",on:{click:function(e){t.addCart(t.goodInfo[0].id)}}},[t._v("加入购物车")])])])};s._withStripped=!0;var n=i(140),o=i(141),a=i(142),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"number-btn"},[i("div",{staticClass:"choose-amount"},[i("button",{staticClass:"minus",attrs:{disabled:t.goodsAmount<=1},on:{click:t.minusNumberClick}},[t._v("-")]),i("input",{attrs:{type:"number"},domProps:{value:t.goodsAmount}}),i("button",{staticClass:"add",attrs:{disabled:t.goodsAmount>=t.maxNumber},on:{click:t.addNumberClick}},[t._v("+")])])])};c._withStripped=!0;var r={name:"choose-btn",data:function(){return{}},props:{goodsAmount:{type:Number,default:0},maxNumber:{type:Number,default:1e4}},methods:{minusNumberClick:function(){this.$emit("minusNumberClick")},addNumberClick:function(){this.$emit("addNumberClick")}}},d=(i(194),i(37)),u=Object(d.a)(r,c,[],!1,null,"06d4b830",null);u.options.__file="src/components/number-btn.vue";var l={name:"goodDetail",components:{NumberBtn:u.exports},data:function(){return{goodId:0,goodInfo:[],number:1}},methods:{queryGood:function(t){var e=this;this.$get(this.base_url+o.a.GET_GOOD_BYID,{id:t}).then(function(t){200===t.code&&(e.goodInfo=t.data,console.log(t.data))})},addNumberClick:function(){this.number++},minusNumberClick:function(){this.number--},addCart:function(t){this.$get(a.a.GET_CART_ADD,{goodId:t,number:1}).then(function(t){200===t.code&&alert(t.data)})}},created:function(){var t=this;n.a.$on("goodsId",function(e){t.goodId=e,t.queryGood(t.goodId)})},watch:{goodInfo:{handler:function(t,e){console.log(t)},deep:!0}}},f=(i(196),Object(d.a)(l,s,[],!1,null,"24690b2c",null));f.options.__file="src/pages/good/goodDetail.vue";e.default=f.exports}}]);
//# sourceMappingURL=common.ed09d508.js.map