(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(t,a,e){},250:function(t,a,e){},251:function(t,a,e){},252:function(t,a,e){},253:function(t,a,e){},254:function(t,a,e){},255:function(t,a,e){},256:function(t,a,e){},257:function(t,a,e){},258:function(t,a,e){},259:function(t,a,e){},260:function(t,a,e){},261:function(t,a,e){},301:function(t,a,e){"use strict";var n=e(249);e.n(n).a},303:function(t,a,e){"use strict";var n=e(250);e.n(n).a},305:function(t,a,e){"use strict";var n=e(251);e.n(n).a},307:function(t,a,e){"use strict";var n=e(252);e.n(n).a},309:function(t,a,e){"use strict";var n=e(253);e.n(n).a},311:function(t,a,e){"use strict";var n=e(254);e.n(n).a},313:function(t,a,e){"use strict";var n=e(255);e.n(n).a},315:function(t,a,e){"use strict";var n=e(256);e.n(n).a},317:function(t,a,e){"use strict";var n=e(257);e.n(n).a},319:function(t,a,e){"use strict";var n=e(258);e.n(n).a},321:function(t,a,e){"use strict";var n=e(259);e.n(n).a},323:function(t,a,e){"use strict";var n=e(260);e.n(n).a},325:function(t,a,e){"use strict";var n=e(261);e.n(n).a},332:function(t,a,e){"use strict";e.r(a);var n=e(51),i=e.n(n),s=e(17),o=e.n(s),c=e(72),l=e.n(c),d=e(12),r=e.n(d),u=e(50),v={props:{edit:{type:Boolean,default:!1},value:{type:Object,default:function(){return{}}}},data:function(){return{enable:!0}},mounted:function(){},filters:{voidLink:function(t){return t||"javascript:void(0)"}},methods:{handleEnter:function(t){t.stopPropagation(),this.edit&&(this.$refs.target.style.border="2px dashed #ff0000",this.$refs.edit.style.display="block")},handleLeave:function(){this.edit&&(this.$refs.target.style.border="2px dashed transparent",this.$refs.edit.style.display="none")},showEdit:function(){this.$refs.editTarget.show()},disable:function(){this.value.enable=!1}}},p={mixins:[v],data:function(){return{host:"//zhike.oss-cn-beijing.aliyuncs.com/"}},methods:{uploadLoad:function(t){var a=JSON.parse(t.data);200===a.code&&(this.value.url=""+a.data.name)}},computed:{url:function(){return 0===this.value.url.indexOf("mp")?this.host+this.value.url:this.value.url}}},f=(e(301),e(1)),m=Object(f.a)(p,function(){var t=this.$createElement,a=this._self._c||t;return this.value.enable?a("div",{staticClass:"logo-container"},[a("div",{ref:"target",staticClass:"logo-content"},[a("a",{attrs:{target:"_blank",href:this._f("voidLink")(this.value.link)}},[a("img",{staticClass:"left",attrs:{src:this.url}})])])]):this._e()},[],!1,null,"4f68841c",null);m.options.__file="logo.vue";var h=m.exports,b={mixins:[v],data:function(){return{active:-1}},methods:{addNav:function(){var t=this.value.data.list.length;t<8&&(this.value.data.list.push({text:"导航"+(t+1),type:"_blank",link:""}),this.active=t)},titleClick:function(t){this.active!==t?this.active=t:this.active=-1},removeClick:function(t){this.value.data.list.length>1&&this.value.data.list.splice(t,1)}}},D=(e(303),Object(f.a)(b,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"navigation-container"},[e("div",{ref:"target",staticClass:"navigation-content"},[e("div",{staticClass:"more-link"},[t._v("更多链接")]),t._v(" "),e("ul",{staticClass:"nav-group"},t._l(t.value.data.list,function(a,n){return e("li",{key:n,staticClass:"nav-item"},[e("a",{style:{color:t.value.data.fontColor},attrs:{target:a.type,href:t._f("voidLink")(a.link)}},[t._v(t._s(a.text))])])}))])]):t._e()},[],!1,null,"316a13d9",null));D.options.__file="navigation.vue";var k=D.exports,_={mixins:[v],data:function(){return{pro:"0%",host:"//zhike.oss-cn-beijing.aliyuncs.com/"}},mounted:function(){this.analysisData(this.value)},watch:{value:{handler:function(t){var a=this;t.bgType&&(this.value.color||(this.value.color="rgba(0, 0, 0, 1)"),this.$nextTick(function(){a.analysisData(a.value)}))},deep:!0},color:function(t){this.$refs.target.style.cssText="background-color:"+t},img:function(t){this.$refs.target.style.cssText="background-image:url("+t+")"}},methods:{analysisData:function(t){this.$refs.target&&("color"===t.bgType?this.$refs.target.style.cssText="background-color:"+t.color:"img"===t.bgType?this.$refs.target.style.cssText="background-image:url("+(0===t.img.indexOf("mp")?this.host+t.img:t.img)+")":"video"===t.bgType&&t.video&&("upload"===t.videoType?/^(http|https|<iframe):\/\//.test(t.video)||this.$refs.target.querySelector(".media-container video").setAttribute("src",""+(0===t.video.indexOf("mp")?this.host+t.video:t.video)):/^(http|https):\/\//.test(t.video)&&this.$refs.target.querySelector(".media-container video").setAttribute("src",""+t.video)))},progress:function(t){this.pro=t.percent},uploadLoad:function(t){var a=JSON.parse(t.data);200===a.code&&("img"===this.value.bgType?this.value.img=""+a.data.name:this.value.video=""+a.data.name,this.analysisData(this.value))}}},g=(e(305),Object(f.a)(_,function(){var t=this.$createElement,a=this._self._c||t;return this.value.enable?a("div",{staticClass:"panel-container"},[a("div",{ref:"target",staticClass:"panel"},["video"===this.value.bgType?a("div",{staticClass:"media-container"},[a("video",{attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}})]):this._e(),this._v(" "),this._t("default")],2)]):this._e()},[],!1,null,"21da562e",null));g.options.__file="panel.vue";var C=g.exports,x={mixins:[v],props:{offTop:{type:Number,default:-38}},data:function(){return{sizeEditor:!1,height:0}},methods:{showHandle:function(t){},hideHandle:function(){}}},$=(e(307),Object(f.a)(x,function(){var t=this.$createElement,a=this._self._c||t;return this.value.enable?a("div",{staticClass:"font-container"},[a("div",{ref:"target"},[a("div",{staticClass:"font-content",domProps:{innerHTML:this._s(this.value.content)}})])]):this._e()},[],!1,null,"c01105d8",null));$.options.__file="font.vue";var y=$.exports,A={mixins:[v],computed:{styles:function(){return{"background-color":this.value.bgColor,color:this.value.fontColor}}}},w=(e(309),Object(f.a)(A,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"btn-container"},[e("div",{ref:"target",staticClass:"btn-content"},[e("a",{attrs:{target:"_black",href:t._f("voidLink")(t.value.link)}},[e("com-button",{attrs:{styles:t.styles}},[t._v(t._s(t.value.text))])],1)])]):t._e()},[],!1,null,"73819640",null));w.options.__file="button.vue";var O=w.exports,S={mixins:[v],components:{ComBtn:O,ComFont:y},props:{min:{type:Number,default:2},max:{type:Number,default:4}},data:function(){return{active:-1,host:"//zhike.oss-cn-beijing.aliyuncs.com/"}},methods:{addBlock:function(){var t=this.value.list.length;t<this.max&&(this.value.list.push({content:"",img:"",btn:{enable:!0,text:"",bgColor:"",fontColor:""}}),this.active=t)},titleClick:function(t){this.active!==t?this.active=t:this.active=-1},removeClick:function(t){this.value.list.length>this.min&&this.value.list.splice(t,1)},uploadLoad:function(t,a){var e=JSON.parse(t.data);200===e.code&&(this.value.list[a].img=""+e.data.name)}},computed:{widthClass:function(){return"width"+this.value.list.length}}},I=(e(311),Object(f.a)(S,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"block1-container"},[e("div",{ref:"target",staticClass:"block1-content"},[e("ul",{staticClass:"block1-group",class:t.widthClass},t._l(t.value.list,function(a,n){return e("li",{key:"block1_item"+n,staticClass:"block1-item",class:a.type},[e("a",{attrs:{target:"_black",href:t._f("voidLink")(a.link)}},[a.img?e("img",{staticClass:"img",attrs:{src:0===a.img.indexOf("mp")?t.host+a.img:a.img}}):t._e(),t._v(" "),e("div",{staticClass:"block1-bg"}),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(a.content)}}),t._v(" "),t.value.showBtn?e("com-btn",{attrs:{edit:t.value.enable},model:{value:a.btn,callback:function(e){t.$set(a,"btn",e)},expression:"item.btn"}}):t._e()],1)])}))])]):t._e()},[],!1,null,"4c6254fe",null));I.options.__file="block1.vue";var E=I.exports,j={mixins:[v],components:{ComFont:y,ComBtn:O},props:{min:{type:Number,default:2},max:{type:Number,default:4},height:{type:String,default:"150px"}},data:function(){return{active:-1,host:"//zhike.oss-cn-beijing.aliyuncs.com/",autoplay:!0}},methods:{addBlock:function(){var t=this.value.data.length;t<8&&(this.value.data.push({content:"",img:""}),this.active=t)},titleClick:function(t){this.active!==t?this.active=t:this.active=-1},removeClick:function(t){this.value.data.length>2&&this.value.data.splice(t,1)},uploadLoad:function(t,a){var e=JSON.parse(t.data);200===e.code&&(this.value.data[a].img=""+e.data.name)},hideHandle:function(){this.autoplay=!0},showHandle:function(t){this.autoplay=!1}},computed:{widthClass:function(){return"width"+this.value.list.length}}},T=(e(313),Object(f.a)(j,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"block2-container"},[e("div",{ref:"target",staticClass:"block2-content"},[e("el-carousel",{class:t.widthClass,attrs:{trigger:"click",autoplay:t.autoplay,height:t.height,interval:t.value.loop}},t._l(t.value.list,function(a,n){return e("el-carousel-item",{key:"block2_item_"+n,class:a.type},[e("a",{attrs:{target:"_black",href:t._f("voidLink")(a.link)}},[a.bgColor?e("div",{staticClass:"left-area",style:{backgroundColor:a.bgColor}}):t._e(),t._v(" "),a.img?e("img",{staticClass:"img",attrs:{src:0===a.img.indexOf("mp")?t.host+a.img:a.img}}):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("div",{domProps:{innerHTML:t._s(a.content)}}),t._v(" "),t.value.showBtn?e("com-btn",{attrs:{edit:t.value.enable},model:{value:a.btn,callback:function(e){t.$set(a,"btn",e)},expression:"item.btn"}}):t._e()],1)])])}))],1)]):t._e()},[],!1,null,"a2c651c8",null));T.options.__file="block2.vue";var U=T.exports,N={mixins:[v],props:{share:{type:Object,default:function(){return{}}}},data:function(){return{showDialog:!1,url:"http://localhost:2333/template",sina:!0}},methods:{doSina:function(){window.open("\n      http://v.t.sina.com.cn/share/share.php?\n      url="+encodeURIComponent(this.share.link)+"\n      &title="+encodeURIComponent(this.share.des)+"\n      &pic="+encodeURIComponent(this.share.imgUrl)+"\n      &appkey=&searchPic=false\n      ")},doQQSpace:function(){window.open("\n      http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?desc="+encodeURIComponent(this.share.des)+"&url="+encodeURIComponent(this.share.link)+"&src%3Dsharemodclk131212&pics="+encodeURIComponent(this.share.imgUrl)+"\n      ")},doQQ:function(){window.open("\n      http://connect.qq.com/widget/shareqq/index.html?url="+encodeURIComponent(this.share.link)+"&title="+encodeURIComponent(this.share.title)+"&desc="+encodeURIComponent(this.share.des)+"&pics="+encodeURIComponent(this.share.imgUrl)+"\n      ")},doWXSpace:function(){this.showDialog=!0},doWX:function(){this.showDialog=!0},doCopy:function(){this.url.copyClipboard()},closeDialog:function(){this.showDialog=!1}}},q=(e(315),Object(f.a)(N,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"share-container"},[t.showDialog?e("div",{staticClass:"_dialog-container",on:{click:t.closeDialog}},[e("div",{staticClass:"_dialog",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"_dialog-header"},[t._v("分享到微信"),e("i",{staticClass:"iconfont icon-close",on:{click:t.closeDialog}})]),t._v(" "),e("div",{staticClass:"_dialog-content"},[e("div",{staticClass:"title"},[t._v("《易烊千玺缺席中戏开学原因曝光 参加亚运闭幕表演》")]),t._v(" "),e("div",{staticClass:"des"},[t._v("将视频分享给微信好友或微信好友圈")]),t._v(" "),e("div",{staticClass:"qr"},[e("img",{attrs:{src:"http://aliqr.e.vhall.com/qr.png?t="+this.share.link}})]),t._v(" "),e("div",{staticClass:"ps"},[t._v("使用微信扫一扫")])])])]):t._e(),t._v(" "),e("div",{ref:"target",staticClass:"share"},[e("ul",{staticClass:"share-group"},[t.value.wx?e("li",[e("a",{staticClass:"share-item",on:{click:t.doWX}},[e("div",{staticClass:"icon wx"}),t._v(" "),e("span",[t._v("微信好友")])])]):t._e(),t._v(" "),t.value.wxSpace?e("li",[e("a",{staticClass:"share-item",on:{click:t.doWXSpace}},[e("div",{staticClass:"icon wx-space"}),t._v(" "),e("span",[t._v("微信朋友圈")])])]):t._e(),t._v(" "),t.value.qq?e("li",[e("a",{staticClass:"share-item",on:{click:t.doQQ}},[e("div",{staticClass:"icon qq"}),t._v(" "),e("span",[t._v("QQ好友")])])]):t._e(),t._v(" "),t.value.qqSpace?e("li",[e("a",{staticClass:"share-item",on:{click:t.doQQSpace}},[e("div",{staticClass:"icon qq-space"}),t._v(" "),e("span",[t._v("QQ空间")])])]):t._e(),t._v(" "),t.value.sina?e("li",[e("a",{staticClass:"share-item",on:{click:t.doSina}},[e("div",{staticClass:"icon sina"}),t._v(" "),e("span",[t._v("新浪微博")])])]):t._e(),t._v(" "),t.value.copy?e("li",[e("a",{staticClass:"share-item",on:{click:t.doCopy}},[e("div",{staticClass:"icon copy"}),t._v(" "),e("span",[t._v("复制链接")])])]):t._e()])])]):t._e()},[],!1,null,"4c7ccc5a",null));q.options.__file="share.vue";var P=q.exports,B=e(226),L={mixins:[v],data:function(){return{vhallParams:{},percentVideo:0,uploadErrorMsg:""}},methods:{doUpload:function(){this.$refs.upload.click()},initVhallUpload:function(){var t=this;window.vhallCloudDemandSDK("#upload",{params:{confirmBtn:"#confirmUpload",name:"#rename",sign:this.vhallParams.sign,signed_at:this.vhallParams.signedAt,app_id:this.vhallParams.appId},beforeUpload:function(a){return"video/mp4"!==a.type?(t.uploadErrorMsg="不支持该视频格式，请上传mp4格式视频",!1):a.size/1024/1024>t.videoSize?(t.uploadErrorMsg="视频太大，请不要大于200M",!1):(t.uploadErrorMsg="",t.percentVideo=0,!0)},progress:function(a){t.percentVideo=parseFloat(a.replace("%",""))},uploadSuccess:function(){t.$refs.confirmUpload.click()},saveSuccess:function(a){t.value.recordId=a.record_id,setTimeout(function(){t.initVideo()},2e4)},error:function(a,e,n){t.uploadErrorMsg=a}})},checkInit:function(t){"upload"===t&&this.value.recordId&&this.initVideo()},initVideo:function(){var t=this;window.Vhall.ready(function(){window.VhallPlayer.init({recordId:t.value.recordId,type:"vod",videoNode:"myVideo",complete:function(){},fail:function(a){t.uploadErrorMsg=a+"...,稍后刷新页面即可看到预览视频"}})}),window.Vhall.config({appId:this.vhallParams.appId,accountId:this.vhallParams.accountId,token:this.vhallParams.token})}},mounted:function(){var t=this;this.$get(B.a.GET_CREATEACCESSTOKEN,{}).then(function(a){t.vhallParams=a.data,"upload"===t.value.videoType&&t.value.recordId&&t.initVideo()})}},V=(e(317),Object(f.a)(L,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"video-container"},[e("div",{ref:"target",staticClass:"video-content"},["upload"===t.value.videoType?e("div",{staticClass:"video-wrap",attrs:{id:"myVideo"}}):t._e(),t._v(" "),"url"===t.value.videoType?e("div",{staticClass:"iframe-wrap",domProps:{innerHTML:t._s(t.value.url)}}):t._e()])]):t._e()},[],!1,null,"228a7eb8",null));V.options.__file="video.vue";var R=V.exports,M={components:{ComLogo:h,ComNav:k,ComPanel:C,ComFont:y,ComBtn:O,ComBlock1:E,ComShare:P,ComBlock2:U,ComVideo:R},data:function(){return{menuOpen:!1,data:{}}},props:{value:{type:Object,default:function(){return{}}},editAble:{type:Boolean,default:!1},shareData:{type:Object,default:function(){return{}}}},created:function(){this.value.tid&&(this.data=this.value)}},H=(e(319),Object(f.a)(M,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template1-container",class:{isEdit:t.editAble}},[e("com-panel",{staticClass:"section1",attrs:{edit:t.editAble},model:{value:t.data.section1Data.panel,callback:function(a){t.$set(t.data.section1Data,"panel",a)},expression:"data.section1Data.panel"}},[e("com-logo",{staticClass:"logo",attrs:{edit:t.editAble},model:{value:t.data.section1Data.logo,callback:function(a){t.$set(t.data.section1Data,"logo",a)},expression:"data.section1Data.logo"}}),t._v(" "),e("span",{staticClass:"iconfont",class:[{"icon-nav-open":!t.menuOpen},{"icon-close":t.menuOpen}],on:{click:function(){t.menuOpen=!t.menuOpen}}}),t._v(" "),e("com-nav",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],staticClass:"nav",attrs:{edit:t.editAble},model:{value:t.data.section1Data.nav,callback:function(a){t.$set(t.data.section1Data,"nav",a)},expression:"data.section1Data.nav"}})],1),t._v(" "),e("com-panel",{staticClass:"section2",attrs:{edit:t.editAble},model:{value:t.data.section2Data.panel,callback:function(a){t.$set(t.data.section2Data,"panel",a)},expression:"data.section2Data.panel"}},[e("div",{staticClass:"mask"},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section2Data.font,callback:function(a){t.$set(t.data.section2Data,"font",a)},expression:"data.section2Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section2Data.btn,callback:function(a){t.$set(t.data.section2Data,"btn",a)},expression:"data.section2Data.btn"}})],1)]),t._v(" "),e("com-panel",{staticClass:"section3",attrs:{edit:t.editAble},model:{value:t.data.section3Data.panel,callback:function(a){t.$set(t.data.section3Data,"panel",a)},expression:"data.section3Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section3Data.font,callback:function(a){t.$set(t.data.section3Data,"font",a)},expression:"data.section3Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section3Data.block1,callback:function(a){t.$set(t.data.section3Data,"block1",a)},expression:"data.section3Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section4",attrs:{edit:t.editAble},model:{value:t.data.section4Data.panel,callback:function(a){t.$set(t.data.section4Data,"panel",a)},expression:"data.section4Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.font,callback:function(a){t.$set(t.data.section4Data,"font",a)},expression:"data.section4Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.block1,callback:function(a){t.$set(t.data.section4Data,"block1",a)},expression:"data.section4Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section5",attrs:{edit:t.editAble},model:{value:t.data.section5Data.panel,callback:function(a){t.$set(t.data.section5Data,"panel",a)},expression:"data.section5Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section5Data.font,callback:function(a){t.$set(t.data.section5Data,"font",a)},expression:"data.section5Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section5Data.block1,callback:function(a){t.$set(t.data.section5Data,"block1",a)},expression:"data.section5Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section6",attrs:{edit:t.editAble},model:{value:t.data.section6Data.panel,callback:function(a){t.$set(t.data.section6Data,"panel",a)},expression:"data.section6Data.panel"}},[e("com-share",{attrs:{edit:t.editAble,share:t.shareData},model:{value:t.data.section6Data.share,callback:function(a){t.$set(t.data.section6Data,"share",a)},expression:"data.section6Data.share"}})],1),t._v(" "),e("com-panel",{staticClass:"section7",attrs:{edit:t.editAble},model:{value:t.data.section7Data.panel,callback:function(a){t.$set(t.data.section7Data,"panel",a)},expression:"data.section7Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section7Data.font,callback:function(a){t.$set(t.data.section7Data,"font",a)},expression:"data.section7Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section7Data.btn,callback:function(a){t.$set(t.data.section7Data,"btn",a)},expression:"data.section7Data.btn"}})],1),t._v(" "),e("div",{staticClass:"support"},[t._v("微吼直播提供技术支持")])],1)},[],!1,null,"7a2e43c4",null));H.options.__file="template1.vue";var Q=H.exports,z={components:{ComLogo:h,ComNav:k,ComPanel:C,ComFont:y,ComBtn:O,ComBlock1:E,ComShare:P,ComBlock2:U,ComVideo:R},data:function(){return{menuOpen:!1,data:{}}},props:{value:{type:Object,default:function(){return{}}},editAble:{type:Boolean,default:!1},shareData:{type:Object,default:function(){return{}}}},created:function(){this.value.tid&&(this.data=this.value)}},F=(e(321),Object(f.a)(z,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template1-container"},[e("com-panel",{staticClass:"section1",attrs:{edit:t.editAble},model:{value:t.data.section1Data.panel,callback:function(a){t.$set(t.data.section1Data,"panel",a)},expression:"data.section1Data.panel"}},[e("com-logo",{staticClass:"logo",attrs:{edit:t.editAble},model:{value:t.data.section1Data.logo,callback:function(a){t.$set(t.data.section1Data,"logo",a)},expression:"data.section1Data.logo"}}),t._v(" "),e("span",{staticClass:"iconfont",class:[{"icon-nav-open":!t.menuOpen},{"icon-close":t.menuOpen}],on:{click:function(){t.menuOpen=!t.menuOpen}}}),t._v(" "),e("com-nav",{staticClass:"nav",class:{active:t.menuOpen},attrs:{edit:t.editAble},model:{value:t.data.section1Data.nav,callback:function(a){t.$set(t.data.section1Data,"nav",a)},expression:"data.section1Data.nav"}})],1),t._v(" "),e("div",{staticClass:"section2",attrs:{edit:t.editAble},model:{value:t.data.section2Data.panel,callback:function(a){t.$set(t.data.section2Data,"panel",a)},expression:"data.section2Data.panel"}},[e("com-panel",{staticClass:"panel_left",attrs:{edit:t.editAble},model:{value:t.data.section2Data.panel1,callback:function(a){t.$set(t.data.section2Data,"panel1",a)},expression:"data.section2Data.panel1"}}),t._v(" "),e("com-panel",{staticClass:"panel_center",attrs:{edit:t.editAble},model:{value:t.data.section2Data.panel3,callback:function(a){t.$set(t.data.section2Data,"panel3",a)},expression:"data.section2Data.panel3"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section2Data.font,callback:function(a){t.$set(t.data.section2Data,"font",a)},expression:"data.section2Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section2Data.btn,callback:function(a){t.$set(t.data.section2Data,"btn",a)},expression:"data.section2Data.btn"}})],1)],1),t._v(" "),e("com-panel",{staticClass:"section3",attrs:{edit:t.editAble},model:{value:t.data.section3Data.panel,callback:function(a){t.$set(t.data.section3Data,"panel",a)},expression:"data.section3Data.panel"}},[e("com-font",{staticClass:"font-title",attrs:{edit:t.editAble},model:{value:t.data.section3Data.font1,callback:function(a){t.$set(t.data.section3Data,"font1",a)},expression:"data.section3Data.font1"}}),t._v(" "),e("com-font",{staticClass:"font-des",attrs:{edit:t.editAble},model:{value:t.data.section3Data.font2,callback:function(a){t.$set(t.data.section3Data,"font2",a)},expression:"data.section3Data.font2"}}),t._v(" "),e("com-share",{attrs:{edit:t.editAble,share:t.shareData},model:{value:t.data.section3Data.share,callback:function(a){t.$set(t.data.section3Data,"share",a)},expression:"data.section3Data.share"}})],1),t._v(" "),e("com-panel",{staticClass:"section4",attrs:{edit:t.editAble},model:{value:t.data.section4Data.panel,callback:function(a){t.$set(t.data.section4Data,"panel",a)},expression:"data.section4Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.font,callback:function(a){t.$set(t.data.section4Data,"font",a)},expression:"data.section4Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.block1,callback:function(a){t.$set(t.data.section4Data,"block1",a)},expression:"data.section4Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section5",attrs:{edit:t.editAble},model:{value:t.data.section5Data.panel,callback:function(a){t.$set(t.data.section5Data,"panel",a)},expression:"data.section5Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section5Data.font,callback:function(a){t.$set(t.data.section5Data,"font",a)},expression:"data.section5Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:5},model:{value:t.data.section5Data.block1,callback:function(a){t.$set(t.data.section5Data,"block1",a)},expression:"data.section5Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section6",attrs:{edit:t.editAble},model:{value:t.data.section6Data.panel,callback:function(a){t.$set(t.data.section6Data,"panel",a)},expression:"data.section6Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section6Data.font,callback:function(a){t.$set(t.data.section6Data,"font",a)},expression:"data.section6Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:5},model:{value:t.data.section6Data.block1,callback:function(a){t.$set(t.data.section6Data,"block1",a)},expression:"data.section6Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section7",attrs:{edit:t.editAble},model:{value:t.data.section7Data.panel,callback:function(a){t.$set(t.data.section7Data,"panel",a)},expression:"data.section7Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section7Data.font,callback:function(a){t.$set(t.data.section7Data,"font",a)},expression:"data.section7Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section7Data.block1,callback:function(a){t.$set(t.data.section7Data,"block1",a)},expression:"data.section7Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section8",attrs:{edit:t.editAble},model:{value:t.data.section8Data.panel,callback:function(a){t.$set(t.data.section8Data,"panel",a)},expression:"data.section8Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section8Data.font,callback:function(a){t.$set(t.data.section8Data,"font",a)},expression:"data.section8Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section8Data.block1,callback:function(a){t.$set(t.data.section8Data,"block1",a)},expression:"data.section8Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section9",attrs:{max:10,edit:t.editAble},model:{value:t.data.section9Data.panel,callback:function(a){t.$set(t.data.section9Data,"panel",a)},expression:"data.section9Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section9Data.font,callback:function(a){t.$set(t.data.section9Data,"font",a)},expression:"data.section9Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section9Data.btn,callback:function(a){t.$set(t.data.section9Data,"btn",a)},expression:"data.section9Data.btn"}})],1),t._v(" "),e("div",{staticClass:"support"},[t._v("微吼直播提供技术支持")])],1)},[],!1,null,"62d759b4",null));F.options.__file="template2.vue";var J=F.exports,G={components:{ComLogo:h,ComNav:k,ComPanel:C,ComFont:y,ComBtn:O,ComBlock1:E,ComShare:P,ComBlock2:U,ComVideo:R},data:function(){return{menuOpen:!1,data:{}}},props:{value:{type:Object,default:function(){return{}}},editAble:{type:Boolean,default:!1},shareData:{type:Object,default:function(){return{}}}},created:function(){this.value.tid&&(this.data=this.value,console.log(this.data))}},W=(e(323),Object(f.a)(G,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template1-container",class:{isEdit:t.editAble}},[e("com-panel",{staticClass:"section1",attrs:{edit:t.editAble},model:{value:t.data.section1Data.panel,callback:function(a){t.$set(t.data.section1Data,"panel",a)},expression:"data.section1Data.panel"}},[e("com-logo",{staticClass:"logo",attrs:{edit:t.editAble},model:{value:t.data.section1Data.logo,callback:function(a){t.$set(t.data.section1Data,"logo",a)},expression:"data.section1Data.logo"}}),t._v(" "),e("span",{staticClass:"iconfont",class:[{"icon-nav-open":!t.menuOpen},{"icon-close":t.menuOpen}],on:{click:function(){t.menuOpen=!t.menuOpen}}}),t._v(" "),e("com-nav",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],staticClass:"nav",attrs:{edit:t.editAble},model:{value:t.data.section1Data.nav,callback:function(a){t.$set(t.data.section1Data,"nav",a)},expression:"data.section1Data.nav"}})],1),t._v(" "),e("div",{staticClass:"section2",attrs:{edit:t.editAble}},[e("com-block2",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section2Data.block2,callback:function(a){t.$set(t.data.section2Data,"block2",a)},expression:"data.section2Data.block2"}})],1),t._v(" "),e("div",{staticClass:"section3",attrs:{edit:t.editAble},model:{value:t.data.section3Data.panel,callback:function(a){t.$set(t.data.section3Data,"panel",a)},expression:"data.section3Data.panel"}},[e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section3Data.block1,callback:function(a){t.$set(t.data.section3Data,"block1",a)},expression:"data.section3Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section4",attrs:{edit:t.editAble},model:{value:t.data.section4Data.panel,callback:function(a){t.$set(t.data.section4Data,"panel",a)},expression:"data.section4Data.panel"}},[e("div",{staticClass:"bg"}),t._v(" "),e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.font,callback:function(a){t.$set(t.data.section4Data,"font",a)},expression:"data.section4Data.font"}}),t._v(" "),e("com-video",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.video,callback:function(a){t.$set(t.data.section4Data,"video",a)},expression:"data.section4Data.video"}})],1),t._v(" "),e("com-panel",{staticClass:"section5",attrs:{edit:t.editAble},model:{value:t.data.section5Data.panel,callback:function(a){t.$set(t.data.section5Data,"panel",a)},expression:"data.section5Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section5Data.font,callback:function(a){t.$set(t.data.section5Data,"font",a)},expression:"data.section5Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section5Data.block1,callback:function(a){t.$set(t.data.section5Data,"block1",a)},expression:"data.section5Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section6",attrs:{edit:t.editAble},model:{value:t.data.section6Data.panel,callback:function(a){t.$set(t.data.section6Data,"panel",a)},expression:"data.section6Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section6Data.font,callback:function(a){t.$set(t.data.section6Data,"font",a)},expression:"data.section6Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section6Data.block1,callback:function(a){t.$set(t.data.section6Data,"block1",a)},expression:"data.section6Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section7",attrs:{edit:t.editAble},model:{value:t.data.section7Data.panel,callback:function(a){t.$set(t.data.section7Data,"panel",a)},expression:"data.section7Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section7Data.font,callback:function(a){t.$set(t.data.section7Data,"font",a)},expression:"data.section7Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section7Data.btn,callback:function(a){t.$set(t.data.section7Data,"btn",a)},expression:"data.section7Data.btn"}})],1),t._v(" "),e("div",{staticClass:"support"},[t._v("微吼直播提供技术支持")])],1)},[],!1,null,"ce85682a",null));W.options.__file="template4.vue";var X=W.exports,K=e(230),Y={components:{t0478320:Q,t0478321:J,t0478323:X},data:function(){return{com:"",isPreview:!0,share:{des:"",title:"",imgUrl:"",link:location.href},data:{},tid:this.$route.params.id,wxShare:{wxShareData:{appId:"",timestamp:"",nonceStr:"",signature:""},shareData:{title:"",shareDatadesc:"",shareDatalink:"",shareDataimgUrl:""},shareUser:{shareId:""}}}},mounted:function(){this.init(),this.isWx()&&this.shareFunction()},computed:r()({},Object(u.c)("liveMager",{joinInfo:function(t){return t.joinInfo}})),methods:{init:function(){var t=this;return l()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$config({handlers:!0}).$get(B.a.GET_LIVEINFO,{activityId:t.tid}).then(function(a){t.share.title=a.data.activity.title,t.share.des=a.data.activity.description,t.share.imgUrl=a.data.activity.imgUrl,t.$config({handlers:!0}).$get(B.a.GET_SHAREINFO,{route:"officia_route",param:t.$route.params.id}).then(function(a){a.data&&(t.share.title=a.data.title,t.share.des=a.data.description,t.share.imgUrl=a.data.imgUrl)}),t.$config({loading:!0}).$get(B.a.GET_TEMPLATE,{activityId:t.tid}).then(function(a){if(!a.data.value||"N"===a.data.enabled)return t.$messageBox({header:"提示",content:"官网暂未设定",confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}}),!1;var e=JSON.parse(a.data.value);t.com="t"+e.tid,e.editAble=!0;var n=o()(e).replace(/font-size:\s(\d+)px;/g,function(t,a){return t.replace(a,a/2)});e=JSON.parse(n),t.data=e})});case 2:case"end":return a.stop()}},a,t)}))()},shareFunction:function(){var t=this;return l()(i.a.mark(function a(){var e;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=window.location.href,t.joinInfo.activityUserId&&(e=t.joinInfo.activityUserId?e+"?shareId="+t.joinInfo.activityUserId:e),t.wxShare.shareData.shareDatalink=e,a.next=5,t.$config({handlers:!0}).$get(B.a.GET_SHARESIGN,{url:e}).then(function(a){t.wxShare.wxShareData.appId=a.data.appId,t.wxShare.wxShareData.timestamp=a.data.timestamp,t.wxShare.wxShareData.nonceStr=a.data.nonceStr,t.wxShare.wxShareData.signature=a.data.signature});case 5:return a.next=7,t.$config({handlers:!0}).$get(B.a.GET_SHAREINFO,{route:"officia_route",param:t.$route.params.id}).then(function(a){a.data&&(t.wxShare.shareData.title=a.data.title?a.data.title:"",t.wxShare.shareData.shareDatadesc=a.data.description?a.data.description:"",t.wxShare.shareData.shareDataimgUrl=a.data.imgUrl?"https:"+t.$imgHost+"/"+a.data.imgUrl:"")});case 7:Object(K.a)(t.wxShare);case 8:case"end":return a.stop()}},a,t)}))()},isWx:function(){return!(-1===navigator.userAgent.toLowerCase().indexOf("micromessenger"))}}},Z=(e(325),Object(f.a)(Y,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template-container"},[e(t.com,{tag:"component",staticClass:"template-content",attrs:{editAble:!1},model:{value:t.data,callback:function(a){t.data=a},expression:"data"}})],1)},[],!1,null,"186406fa",null));Z.options.__file="template.vue";a.default=Z.exports}}]);