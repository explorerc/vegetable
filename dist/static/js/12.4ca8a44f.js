(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{184:function(t,a,e){"use strict";a.a={POST_SUBSCRIBE:"/frontend/user/order-activity",GET_LIVEINFO:"/frontend/live/info",GET_SHAREINFO:"/frontend/share/info",GET_QUESTIONINFO:"/frontend/question/info",POST_QUESTIONINFO:"/frontend/user/apply-activity",GET_CREATEACCESSTOKEN:"/common/paas/create-access-token",GET_ONLINENUM:"/frontend/channel/get-online-num",GET_SHARESIGN:"/common/wechat/get-share-sign",GET_SDKTOKEN:"/frontend/live/sdk-token",GET_SEND:"/index/send",GET_SENDANNOUNCEMENT:"/initiator/channel/send-announcement",POST_GAG:"/initiator/user/gag",POST_GAGALL:"/initiator/user/gag-all",POST_KICK:"/initiator/user/kick",POST_EMAILSUBSCRIBE:"/frontend/user/email-subscribe",GET_MESSAGELIST:"/common/paas/message-list",GET_CAPTCHAID:"/common/message/get-captchaid",GET_CODE:"/common/message/send-code",GET_TEMPLATE:"/frontend/live/template",GET_DEFAULEREPLAY:"/frontend/replay/default-replay",GET_WARMINFO:"/manage/warm-up-manage/get"}},194:function(t,a,e){"use strict";e.d(a,"a",function(){return n});var s=e(181),i=e.n(s);function n(t){i.a.config({debug:!0,appId:t.wxShareData.appId,timestamp:t.wxShareData.timestamp,nonceStr:t.wxShareData.nonceStr,signature:t.wxShareData.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]})}},220:function(t,a,e){},221:function(t,a,e){},222:function(t,a,e){},223:function(t,a,e){},224:function(t,a,e){},225:function(t,a,e){},226:function(t,a,e){},227:function(t,a,e){},228:function(t,a,e){},229:function(t,a,e){},230:function(t,a,e){},231:function(t,a,e){},232:function(t,a,e){},262:function(t,a,e){"use strict";var s=e(220);e.n(s).a},264:function(t,a,e){"use strict";var s=e(221);e.n(s).a},266:function(t,a,e){"use strict";var s=e(222);e.n(s).a},268:function(t,a,e){"use strict";var s=e(223);e.n(s).a},270:function(t,a,e){"use strict";var s=e(224);e.n(s).a},272:function(t,a,e){"use strict";var s=e(225);e.n(s).a},274:function(t,a,e){"use strict";var s=e(226);e.n(s).a},276:function(t,a,e){"use strict";var s=e(227);e.n(s).a},278:function(t,a,e){"use strict";var s=e(228);e.n(s).a},280:function(t,a,e){"use strict";var s=e(229);e.n(s).a},282:function(t,a,e){"use strict";var s=e(230);e.n(s).a},284:function(t,a,e){"use strict";var s=e(231);e.n(s).a},286:function(t,a,e){"use strict";var s=e(232);e.n(s).a},290:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template-container"},[e(t.com,{tag:"component",staticClass:"template-content",attrs:{editAble:!1},model:{value:t.data,callback:function(a){t.data=a},expression:"data"}})],1)};s._withStripped=!0;var i=e(11),n=e.n(i),o=e(59),l=e.n(o),c=e(8),d=e.n(c),r=e(45),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template1-container",class:{isEdit:t.editAble}},[e("com-panel",{staticClass:"section1",attrs:{edit:t.editAble},model:{value:t.data.section1Data.panel,callback:function(a){t.$set(t.data.section1Data,"panel",a)},expression:"data.section1Data.panel"}},[e("com-logo",{staticClass:"logo",attrs:{edit:t.editAble},model:{value:t.data.section1Data.logo,callback:function(a){t.$set(t.data.section1Data,"logo",a)},expression:"data.section1Data.logo"}}),t._v(" "),e("span",{staticClass:"iconfont",class:[{"icon-nav-open":!t.menuOpen},{"icon-close":t.menuOpen}],on:{click:function(){t.menuOpen=!t.menuOpen}}}),t._v(" "),e("com-nav",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],staticClass:"nav",attrs:{edit:t.editAble},model:{value:t.data.section1Data.nav,callback:function(a){t.$set(t.data.section1Data,"nav",a)},expression:"data.section1Data.nav"}})],1),t._v(" "),e("com-panel",{staticClass:"section2",attrs:{edit:t.editAble},model:{value:t.data.section2Data.panel,callback:function(a){t.$set(t.data.section2Data,"panel",a)},expression:"data.section2Data.panel"}},[e("div",{staticClass:"mask"},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section2Data.font,callback:function(a){t.$set(t.data.section2Data,"font",a)},expression:"data.section2Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section2Data.btn,callback:function(a){t.$set(t.data.section2Data,"btn",a)},expression:"data.section2Data.btn"}})],1)]),t._v(" "),e("com-panel",{staticClass:"section3",attrs:{edit:t.editAble},model:{value:t.data.section3Data.panel,callback:function(a){t.$set(t.data.section3Data,"panel",a)},expression:"data.section3Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section3Data.font,callback:function(a){t.$set(t.data.section3Data,"font",a)},expression:"data.section3Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section3Data.block1,callback:function(a){t.$set(t.data.section3Data,"block1",a)},expression:"data.section3Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section4",attrs:{edit:t.editAble},model:{value:t.data.section4Data.panel,callback:function(a){t.$set(t.data.section4Data,"panel",a)},expression:"data.section4Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.font,callback:function(a){t.$set(t.data.section4Data,"font",a)},expression:"data.section4Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.block1,callback:function(a){t.$set(t.data.section4Data,"block1",a)},expression:"data.section4Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section5",attrs:{edit:t.editAble},model:{value:t.data.section5Data.panel,callback:function(a){t.$set(t.data.section5Data,"panel",a)},expression:"data.section5Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section5Data.font,callback:function(a){t.$set(t.data.section5Data,"font",a)},expression:"data.section5Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section5Data.block1,callback:function(a){t.$set(t.data.section5Data,"block1",a)},expression:"data.section5Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section6",attrs:{edit:t.editAble},model:{value:t.data.section6Data.panel,callback:function(a){t.$set(t.data.section6Data,"panel",a)},expression:"data.section6Data.panel"}},[e("com-share",{attrs:{edit:t.editAble,share:t.shareData},model:{value:t.data.section6Data.share,callback:function(a){t.$set(t.data.section6Data,"share",a)},expression:"data.section6Data.share"}})],1),t._v(" "),e("com-panel",{staticClass:"section7",attrs:{edit:t.editAble},model:{value:t.data.section7Data.panel,callback:function(a){t.$set(t.data.section7Data,"panel",a)},expression:"data.section7Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section7Data.font,callback:function(a){t.$set(t.data.section7Data,"font",a)},expression:"data.section7Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section7Data.btn,callback:function(a){t.$set(t.data.section7Data,"btn",a)},expression:"data.section7Data.btn"}})],1),t._v(" "),e("div",{staticClass:"support"},[t._v("微吼直播提供技术支持")])],1)};u._withStripped=!0;var p=function(){var t=this.$createElement,a=this._self._c||t;return this.value.enable?a("div",{staticClass:"logo-container"},[a("div",{ref:"target",staticClass:"logo-content"},[a("a",{attrs:{target:"_blank",href:this._f("voidLink")(this.value.link)}},[a("img",{staticClass:"left",attrs:{src:this.url}})])])]):this._e()};p._withStripped=!0;var v={props:{edit:{type:Boolean,default:!1},value:{type:Object,default:()=>({})}},data:()=>({enable:!0}),mounted(){},filters:{voidLink:t=>t||"javascript:void(0)"},methods:{handleEnter(t){t.stopPropagation(),this.edit&&(this.$refs.target.style.border="2px dashed #ff0000",this.$refs.edit.style.display="block")},handleLeave(){this.edit&&(this.$refs.target.style.border="2px dashed transparent",this.$refs.edit.style.display="none")},showEdit(){this.$refs.editTarget.show()},disable(){this.value.enable=!1}}},m={mixins:[v],data:()=>({host:"//test-zhike.oss-cn-beijing.aliyuncs.com/"}),methods:{uploadLoad(t){let a=JSON.parse(t.data);200===a.code&&(this.value.url=`${a.data.name}`)}},computed:{url(){return 0===this.value.url.indexOf("mp")?this.host+this.value.url:this.value.url}}},h=(e(262),e(1)),f=Object(h.a)(m,p,[],!1,null,"7b598213",null);f.options.__file="src/components/site/logo.vue";var b=f.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"navigation-container"},[e("div",{ref:"target",staticClass:"navigation-content"},[e("div",{staticClass:"more-link"},[t._v("更多链接")]),t._v(" "),e("ul",{staticClass:"nav-group"},t._l(t.value.data.list,function(a,s){return e("li",{key:s,staticClass:"nav-item"},[e("a",{style:{color:t.value.data.fontColor},attrs:{target:a.type,href:t._f("voidLink")(a.link)}},[t._v(t._s(a.text))])])}))])]):t._e()};D._withStripped=!0;var _={mixins:[v],data:()=>({active:-1}),methods:{addNav(){let t=this.value.data.list.length;t<8&&(this.value.data.list.push({text:`导航${t+1}`,type:"_blank",link:""}),this.active=t)},titleClick(t){this.active!==t?this.active=t:this.active=-1},removeClick(t){this.value.data.list.length>1&&this.value.data.list.splice(t,1)}}},k=(e(264),Object(h.a)(_,D,[],!1,null,"7730a408",null));k.options.__file="src/components/site/navigation.vue";var g=k.exports,C=function(){var t=this.$createElement,a=this._self._c||t;return this.value.enable?a("div",{staticClass:"panel-container"},[a("div",{ref:"target",staticClass:"panel"},["video"===this.value.bgType?a("div",{staticClass:"media-container"},[a("video",{attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}})]):this._e(),this._v(" "),this._t("default")],2)]):this._e()};C._withStripped=!0;var x={mixins:[v],data:()=>({pro:"0%",host:"//test-zhike.oss-cn-beijing.aliyuncs.com/"}),mounted(){this.analysisData(this.value)},watch:{value:{handler(t){t.bgType&&(this.value.color||(this.value.color="rgba(0, 0, 0, 1)"),this.$nextTick(()=>{this.analysisData(this.value)}))},deep:!0},color(t){this.$refs.target.style.cssText=`background-color:${t}`},img(t){this.$refs.target.style.cssText=`background-image:url(${t})`}},methods:{analysisData(t){this.$refs.target&&("color"===t.bgType?this.$refs.target.style.cssText=`background-color:${t.color}`:"img"===t.bgType?this.$refs.target.style.cssText=`background-image:url(${0===t.img.indexOf("mp")?this.host+t.img:t.img})`:"video"===t.bgType&&t.video&&("upload"===t.videoType?/^(http|https|<iframe):\/\//.test(t.video)||this.$refs.target.querySelector(".media-container video").setAttribute("src",`${0===t.video.indexOf("mp")?this.host+t.video:t.video}`):/^(http|https):\/\//.test(t.video)&&this.$refs.target.querySelector(".media-container video").setAttribute("src",`${t.video}`)))},progress(t){this.pro=t.percent},uploadLoad(t){let a=JSON.parse(t.data);200===a.code&&("img"===this.value.bgType?this.value.img=`${a.data.name}`:this.value.video=`${a.data.name}`,this.analysisData(this.value))}}},$=(e(266),Object(h.a)(x,C,[],!1,null,"11c7a568",null));$.options.__file="src/components/site/panel.vue";var A=$.exports,y=function(){var t=this.$createElement,a=this._self._c||t;return this.value.enable?a("div",{staticClass:"font-container"},[a("div",{ref:"target"},[a("div",{staticClass:"font-content",domProps:{innerHTML:this._s(this.value.content)}})])]):this._e()};y._withStripped=!0;var S={mixins:[v],props:{offTop:{type:Number,default:-38}},data:()=>({sizeEditor:!1,height:0}),methods:{showHandle(t){},hideHandle(){}}},w=(e(268),Object(h.a)(S,y,[],!1,null,"184ad6b7",null));w.options.__file="src/components/site/font.vue";var E=w.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"btn-container"},[e("div",{ref:"target",staticClass:"btn-content"},[e("a",{attrs:{target:"_black",href:t._f("voidLink")(t.value.link)}},[e("com-button",{attrs:{styles:t.styles}},[t._v(t._s(t.value.text))])],1)])]):t._e()};O._withStripped=!0;var T={mixins:[v],computed:{styles(){return{"background-color":this.value.bgColor,color:this.value.fontColor}}}},I=(e(270),Object(h.a)(T,O,[],!1,null,"91f397cc",null));I.options.__file="src/components/site/button.vue";var N=I.exports,U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"block1-container"},[e("div",{ref:"target",staticClass:"block1-content"},[e("ul",{staticClass:"block1-group",class:t.widthClass},t._l(t.value.list,function(a,s){return e("li",{key:"block1_item"+s,staticClass:"block1-item",class:a.type},[e("a",{attrs:{target:"_black",href:t._f("voidLink")(a.link)}},[a.img?e("img",{staticClass:"img",attrs:{src:0===a.img.indexOf("mp")?t.host+a.img:a.img}}):t._e(),t._v(" "),e("div",{staticClass:"block1-bg"}),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(a.content)}}),t._v(" "),t.value.showBtn?e("com-btn",{attrs:{edit:t.value.enable},model:{value:a.btn,callback:function(e){t.$set(a,"btn",e)},expression:"item.btn"}}):t._e()],1)])}))])]):t._e()};U._withStripped=!0;var j={mixins:[v],components:{ComBtn:N,ComFont:E},props:{min:{type:Number,default:2},max:{type:Number,default:4}},data:()=>({active:-1,host:"//test-zhike.oss-cn-beijing.aliyuncs.com/"}),methods:{addBlock(){let t=this.value.list.length;t<this.max&&(this.value.list.push({content:"",img:"",btn:{enable:!0,text:"",bgColor:"",fontColor:""}}),this.active=t)},titleClick(t){this.active!==t?this.active=t:this.active=-1},removeClick(t){this.value.list.length>this.min&&this.value.list.splice(t,1)},uploadLoad(t,a){let e=JSON.parse(t.data);200===e.code&&(this.value.list[a].img=`${e.data.name}`)}},computed:{widthClass(){return`width${this.value.list.length}`}}},P=(e(272),Object(h.a)(j,U,[],!1,null,"2880fda8",null));P.options.__file="src/components/site/block1.vue";var L=P.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"block2-container"},[e("div",{ref:"target",staticClass:"block2-content"},[e("el-carousel",{class:t.widthClass,attrs:{trigger:"click",autoplay:t.autoplay,height:t.height,interval:t.value.loop}},t._l(t.value.list,function(a,s){return e("el-carousel-item",{key:"block2_item_"+s,class:a.type},[e("a",{attrs:{target:"_black",href:t._f("voidLink")(a.link)}},[a.bgColor?e("div",{staticClass:"left-area",style:{backgroundColor:a.bgColor}}):t._e(),t._v(" "),a.img?e("img",{staticClass:"img",attrs:{src:0===a.img.indexOf("mp")?t.host+a.img:a.img}}):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("div",{domProps:{innerHTML:t._s(a.content)}}),t._v(" "),t.value.showBtn?e("com-btn",{attrs:{edit:t.value.enable},model:{value:a.btn,callback:function(e){t.$set(a,"btn",e)},expression:"item.btn"}}):t._e()],1)])])}))],1)]):t._e()};G._withStripped=!0;var M={mixins:[v],components:{ComFont:E,ComBtn:N},props:{min:{type:Number,default:2},max:{type:Number,default:4},height:{type:String,default:"150px"}},data:()=>({active:-1,host:"//test-zhike.oss-cn-beijing.aliyuncs.com/",autoplay:!0}),methods:{addBlock(){let t=this.value.data.length;t<8&&(this.value.data.push({content:"",img:""}),this.active=t)},titleClick(t){this.active!==t?this.active=t:this.active=-1},removeClick(t){this.value.data.length>2&&this.value.data.splice(t,1)},uploadLoad(t,a){let e=JSON.parse(t.data);200===e.code&&(this.value.data[a].img=`${e.data.name}`)},hideHandle(){this.autoplay=!0},showHandle(t){this.autoplay=!1}},computed:{widthClass(){return`width${this.value.list.length}`}}},B=(e(274),Object(h.a)(M,G,[],!1,null,"2864cea6",null));B.options.__file="src/components/site/block2.vue";var q=B.exports,R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"share-container"},[t.showDialog?e("div",{staticClass:"_dialog-container",on:{click:t.closeDialog}},[e("div",{staticClass:"_dialog",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"_dialog-header"},[t._v("分享到微信"),e("i",{staticClass:"iconfont icon-close",on:{click:t.closeDialog}})]),t._v(" "),e("div",{staticClass:"_dialog-content"},[e("div",{staticClass:"title"},[t._v("《易烊千玺缺席中戏开学原因曝光 参加亚运闭幕表演》")]),t._v(" "),e("div",{staticClass:"des"},[t._v("将视频分享给微信好友或微信好友圈")]),t._v(" "),e("div",{staticClass:"qr"},[e("img",{attrs:{src:"http://aliqr.e.vhall.com/qr.png?t="+this.share.link}})]),t._v(" "),e("div",{staticClass:"ps"},[t._v("使用微信扫一扫")])])])]):t._e(),t._v(" "),e("div",{ref:"target",staticClass:"share"},[e("ul",{staticClass:"share-group"},[t.value.wx?e("li",[e("a",{staticClass:"share-item",on:{click:t.doWX}},[e("div",{staticClass:"icon wx"}),t._v(" "),e("span",[t._v("微信好友")])])]):t._e(),t._v(" "),t.value.wxSpace?e("li",[e("a",{staticClass:"share-item",on:{click:t.doWXSpace}},[e("div",{staticClass:"icon wx-space"}),t._v(" "),e("span",[t._v("微信朋友圈")])])]):t._e(),t._v(" "),t.value.qq?e("li",[e("a",{staticClass:"share-item",on:{click:t.doQQ}},[e("div",{staticClass:"icon qq"}),t._v(" "),e("span",[t._v("QQ好友")])])]):t._e(),t._v(" "),t.value.qqSpace?e("li",[e("a",{staticClass:"share-item",on:{click:t.doQQSpace}},[e("div",{staticClass:"icon qq-space"}),t._v(" "),e("span",[t._v("QQ空间")])])]):t._e(),t._v(" "),t.value.sina?e("li",[e("a",{staticClass:"share-item",on:{click:t.doSina}},[e("div",{staticClass:"icon sina"}),t._v(" "),e("span",[t._v("新浪微博")])])]):t._e(),t._v(" "),t.value.copy?e("li",[e("a",{staticClass:"share-item",on:{click:t.doCopy}},[e("div",{staticClass:"icon copy"}),t._v(" "),e("span",[t._v("复制链接")])])]):t._e()])])]):t._e()};R._withStripped=!0;var V={mixins:[v],props:{share:{type:Object,default:()=>({})}},data:()=>({showDialog:!1,url:"http://localhost:2333/template",sina:!0}),methods:{doSina(){window.open(`\n      http://v.t.sina.com.cn/share/share.php?\n      url=${encodeURIComponent(this.share.link)}\n      &title=${encodeURIComponent(this.share.des)}\n      &pic=${encodeURIComponent(this.share.imgUrl)}\n      &appkey=&searchPic=false\n      `)},doQQSpace(){window.open(`\n      http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?desc=${encodeURIComponent(this.share.des)}&url=${encodeURIComponent(this.share.link)}&src%3Dsharemodclk131212&pics=${encodeURIComponent(this.share.imgUrl)}\n      `)},doQQ(){window.open(`\n      http://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(this.share.link)}&title=${encodeURIComponent(this.share.title)}&desc=${encodeURIComponent(this.share.des)}&pics=${encodeURIComponent(this.share.imgUrl)}\n      `)},doWXSpace(){this.showDialog=!0},doWX(){this.showDialog=!0},doCopy(){this.url.copyClipboard()},closeDialog(){this.showDialog=!1}}},F=(e(276),Object(h.a)(V,R,[],!1,null,"1da5e4b2",null));F.options.__file="src/components/site/share.vue";var Q=F.exports,H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value.enable?e("div",{staticClass:"video-container"},[e("div",{ref:"target",staticClass:"video-content"},["upload"===t.value.videoType?e("div",{staticClass:"video-wrap",attrs:{id:"myVideo"}}):t._e(),t._v(" "),"url"===t.value.videoType?e("div",{staticClass:"iframe-wrap",domProps:{innerHTML:t._s(t.value.url)}}):t._e()])]):t._e()};H._withStripped=!0;var z=e(184),J={mixins:[v],data:()=>({vhallParams:{},percentVideo:0,uploadErrorMsg:""}),methods:{doUpload(){this.$refs.upload.click()},initVhallUpload(){window.vhallCloudDemandSDK("#upload",{params:{confirmBtn:"#confirmUpload",name:"#rename",sign:this.vhallParams.sign,signed_at:this.vhallParams.signedAt,app_id:this.vhallParams.appId},beforeUpload:t=>"video/mp4"!==t.type?(this.uploadErrorMsg="不支持该视频格式，请上传mp4格式视频",!1):t.size/1024/1024>this.videoSize?(this.uploadErrorMsg="视频太大，请不要大于200M",!1):(this.uploadErrorMsg="",this.percentVideo=0,!0),progress:t=>{this.percentVideo=parseFloat(t.replace("%",""))},uploadSuccess:()=>{this.$refs.confirmUpload.click()},saveSuccess:t=>{this.value.recordId=t.record_id,setTimeout(()=>{this.initVideo()},2e4)},error:(t,a,e)=>{this.uploadErrorMsg=t}})},checkInit(t){"upload"===t&&this.value.recordId&&this.initVideo()},initVideo(){window.Vhall.ready(()=>{window.VhallPlayer.init({recordId:this.value.recordId,type:"vod",videoNode:"myVideo",complete:function(){},fail:t=>{this.uploadErrorMsg=`${t}...,稍后刷新页面即可看到预览视频`}})}),window.Vhall.config({appId:this.vhallParams.appId,accountId:this.vhallParams.accountId,token:this.vhallParams.token})}},mounted(){this.$get(z.a.GET_CREATEACCESSTOKEN,{}).then(t=>{this.vhallParams=t.data,"upload"===this.value.videoType&&this.value.recordId&&this.initVideo()})}},K=(e(278),Object(h.a)(J,H,[],!1,null,"c227b77a",null));K.options.__file="src/components/site/video.vue";var W=K.exports,X={components:{ComLogo:b,ComNav:g,ComPanel:A,ComFont:E,ComBtn:N,ComBlock1:L,ComShare:Q,ComBlock2:q,ComVideo:W},data:()=>({menuOpen:!1,data:{}}),props:{value:{type:Object,default:()=>({})},editAble:{type:Boolean,default:!1},shareData:{type:Object,default:()=>({})}},created(){this.value.tid&&(this.data=this.value)}},Y=(e(280),Object(h.a)(X,u,[],!1,null,"3194a39a",null));Y.options.__file="src/pages/site/template1.vue";var Z=Y.exports,tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template1-container"},[e("com-panel",{staticClass:"section1",attrs:{edit:t.editAble},model:{value:t.data.section1Data.panel,callback:function(a){t.$set(t.data.section1Data,"panel",a)},expression:"data.section1Data.panel"}},[e("com-logo",{staticClass:"logo",attrs:{edit:t.editAble},model:{value:t.data.section1Data.logo,callback:function(a){t.$set(t.data.section1Data,"logo",a)},expression:"data.section1Data.logo"}}),t._v(" "),e("span",{staticClass:"iconfont",class:[{"icon-nav-open":!t.menuOpen},{"icon-close":t.menuOpen}],on:{click:function(){t.menuOpen=!t.menuOpen}}}),t._v(" "),e("com-nav",{staticClass:"nav",class:{active:t.menuOpen},attrs:{edit:t.editAble},model:{value:t.data.section1Data.nav,callback:function(a){t.$set(t.data.section1Data,"nav",a)},expression:"data.section1Data.nav"}})],1),t._v(" "),e("div",{staticClass:"section2",attrs:{edit:t.editAble},model:{value:t.data.section2Data.panel,callback:function(a){t.$set(t.data.section2Data,"panel",a)},expression:"data.section2Data.panel"}},[e("com-panel",{staticClass:"panel_left",attrs:{edit:t.editAble},model:{value:t.data.section2Data.panel1,callback:function(a){t.$set(t.data.section2Data,"panel1",a)},expression:"data.section2Data.panel1"}}),t._v(" "),e("com-panel",{staticClass:"panel_center",attrs:{edit:t.editAble},model:{value:t.data.section2Data.panel3,callback:function(a){t.$set(t.data.section2Data,"panel3",a)},expression:"data.section2Data.panel3"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section2Data.font,callback:function(a){t.$set(t.data.section2Data,"font",a)},expression:"data.section2Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section2Data.btn,callback:function(a){t.$set(t.data.section2Data,"btn",a)},expression:"data.section2Data.btn"}})],1)],1),t._v(" "),e("com-panel",{staticClass:"section3",attrs:{edit:t.editAble},model:{value:t.data.section3Data.panel,callback:function(a){t.$set(t.data.section3Data,"panel",a)},expression:"data.section3Data.panel"}},[e("com-font",{staticClass:"font-title",attrs:{edit:t.editAble},model:{value:t.data.section3Data.font1,callback:function(a){t.$set(t.data.section3Data,"font1",a)},expression:"data.section3Data.font1"}}),t._v(" "),e("com-font",{staticClass:"font-des",attrs:{edit:t.editAble},model:{value:t.data.section3Data.font2,callback:function(a){t.$set(t.data.section3Data,"font2",a)},expression:"data.section3Data.font2"}}),t._v(" "),e("com-share",{attrs:{edit:t.editAble,share:t.shareData},model:{value:t.data.section3Data.share,callback:function(a){t.$set(t.data.section3Data,"share",a)},expression:"data.section3Data.share"}})],1),t._v(" "),e("com-panel",{staticClass:"section4",attrs:{edit:t.editAble},model:{value:t.data.section4Data.panel,callback:function(a){t.$set(t.data.section4Data,"panel",a)},expression:"data.section4Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.font,callback:function(a){t.$set(t.data.section4Data,"font",a)},expression:"data.section4Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.block1,callback:function(a){t.$set(t.data.section4Data,"block1",a)},expression:"data.section4Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section5",attrs:{edit:t.editAble},model:{value:t.data.section5Data.panel,callback:function(a){t.$set(t.data.section5Data,"panel",a)},expression:"data.section5Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section5Data.font,callback:function(a){t.$set(t.data.section5Data,"font",a)},expression:"data.section5Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:5},model:{value:t.data.section5Data.block1,callback:function(a){t.$set(t.data.section5Data,"block1",a)},expression:"data.section5Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section6",attrs:{edit:t.editAble},model:{value:t.data.section6Data.panel,callback:function(a){t.$set(t.data.section6Data,"panel",a)},expression:"data.section6Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section6Data.font,callback:function(a){t.$set(t.data.section6Data,"font",a)},expression:"data.section6Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:5},model:{value:t.data.section6Data.block1,callback:function(a){t.$set(t.data.section6Data,"block1",a)},expression:"data.section6Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section7",attrs:{edit:t.editAble},model:{value:t.data.section7Data.panel,callback:function(a){t.$set(t.data.section7Data,"panel",a)},expression:"data.section7Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section7Data.font,callback:function(a){t.$set(t.data.section7Data,"font",a)},expression:"data.section7Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section7Data.block1,callback:function(a){t.$set(t.data.section7Data,"block1",a)},expression:"data.section7Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section8",attrs:{edit:t.editAble},model:{value:t.data.section8Data.panel,callback:function(a){t.$set(t.data.section8Data,"panel",a)},expression:"data.section8Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section8Data.font,callback:function(a){t.$set(t.data.section8Data,"font",a)},expression:"data.section8Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section8Data.block1,callback:function(a){t.$set(t.data.section8Data,"block1",a)},expression:"data.section8Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section9",attrs:{max:10,edit:t.editAble},model:{value:t.data.section9Data.panel,callback:function(a){t.$set(t.data.section9Data,"panel",a)},expression:"data.section9Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section9Data.font,callback:function(a){t.$set(t.data.section9Data,"font",a)},expression:"data.section9Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section9Data.btn,callback:function(a){t.$set(t.data.section9Data,"btn",a)},expression:"data.section9Data.btn"}})],1),t._v(" "),e("div",{staticClass:"support"},[t._v("微吼直播提供技术支持")])],1)};tt._withStripped=!0;var at={components:{ComLogo:b,ComNav:g,ComPanel:A,ComFont:E,ComBtn:N,ComBlock1:L,ComShare:Q,ComBlock2:q,ComVideo:W},data:()=>({menuOpen:!1,data:{}}),props:{value:{type:Object,default:()=>({})},editAble:{type:Boolean,default:!1},shareData:{type:Object,default:()=>({})}},created(){this.value.tid&&(this.data=this.value)}},et=(e(282),Object(h.a)(at,tt,[],!1,null,"31787498",null));et.options.__file="src/pages/site/template2.vue";var st=et.exports,it=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template1-container",class:{isEdit:t.editAble}},[e("com-panel",{staticClass:"section1",attrs:{edit:t.editAble},model:{value:t.data.section1Data.panel,callback:function(a){t.$set(t.data.section1Data,"panel",a)},expression:"data.section1Data.panel"}},[e("com-logo",{staticClass:"logo",attrs:{edit:t.editAble},model:{value:t.data.section1Data.logo,callback:function(a){t.$set(t.data.section1Data,"logo",a)},expression:"data.section1Data.logo"}}),t._v(" "),e("span",{staticClass:"iconfont",class:[{"icon-nav-open":!t.menuOpen},{"icon-close":t.menuOpen}],on:{click:function(){t.menuOpen=!t.menuOpen}}}),t._v(" "),e("com-nav",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],staticClass:"nav",attrs:{edit:t.editAble},model:{value:t.data.section1Data.nav,callback:function(a){t.$set(t.data.section1Data,"nav",a)},expression:"data.section1Data.nav"}})],1),t._v(" "),e("div",{staticClass:"section2",attrs:{edit:t.editAble}},[e("com-block2",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section2Data.block2,callback:function(a){t.$set(t.data.section2Data,"block2",a)},expression:"data.section2Data.block2"}})],1),t._v(" "),e("div",{staticClass:"section3",attrs:{edit:t.editAble},model:{value:t.data.section3Data.panel,callback:function(a){t.$set(t.data.section3Data,"panel",a)},expression:"data.section3Data.panel"}},[e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section3Data.block1,callback:function(a){t.$set(t.data.section3Data,"block1",a)},expression:"data.section3Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section4",attrs:{edit:t.editAble},model:{value:t.data.section4Data.panel,callback:function(a){t.$set(t.data.section4Data,"panel",a)},expression:"data.section4Data.panel"}},[e("div",{staticClass:"bg"}),t._v(" "),e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.font,callback:function(a){t.$set(t.data.section4Data,"font",a)},expression:"data.section4Data.font"}}),t._v(" "),e("com-video",{attrs:{edit:t.editAble},model:{value:t.data.section4Data.video,callback:function(a){t.$set(t.data.section4Data,"video",a)},expression:"data.section4Data.video"}})],1),t._v(" "),e("com-panel",{staticClass:"section5",attrs:{edit:t.editAble},model:{value:t.data.section5Data.panel,callback:function(a){t.$set(t.data.section5Data,"panel",a)},expression:"data.section5Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section5Data.font,callback:function(a){t.$set(t.data.section5Data,"font",a)},expression:"data.section5Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section5Data.block1,callback:function(a){t.$set(t.data.section5Data,"block1",a)},expression:"data.section5Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section6",attrs:{edit:t.editAble},model:{value:t.data.section6Data.panel,callback:function(a){t.$set(t.data.section6Data,"panel",a)},expression:"data.section6Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section6Data.font,callback:function(a){t.$set(t.data.section6Data,"font",a)},expression:"data.section6Data.font"}}),t._v(" "),e("com-block1",{attrs:{edit:t.editAble,max:3},model:{value:t.data.section6Data.block1,callback:function(a){t.$set(t.data.section6Data,"block1",a)},expression:"data.section6Data.block1"}})],1),t._v(" "),e("com-panel",{staticClass:"section7",attrs:{edit:t.editAble},model:{value:t.data.section7Data.panel,callback:function(a){t.$set(t.data.section7Data,"panel",a)},expression:"data.section7Data.panel"}},[e("com-font",{attrs:{edit:t.editAble},model:{value:t.data.section7Data.font,callback:function(a){t.$set(t.data.section7Data,"font",a)},expression:"data.section7Data.font"}}),t._v(" "),e("com-btn",{staticClass:"btn",attrs:{edit:t.editAble},model:{value:t.data.section7Data.btn,callback:function(a){t.$set(t.data.section7Data,"btn",a)},expression:"data.section7Data.btn"}})],1),t._v(" "),e("div",{staticClass:"support"},[t._v("微吼直播提供技术支持")])],1)};it._withStripped=!0;var nt={components:{ComLogo:b,ComNav:g,ComPanel:A,ComFont:E,ComBtn:N,ComBlock1:L,ComShare:Q,ComBlock2:q,ComVideo:W},data:()=>({menuOpen:!1,data:{}}),props:{value:{type:Object,default:()=>({})},editAble:{type:Boolean,default:!1},shareData:{type:Object,default:()=>({})}},created(){this.value.tid&&(this.data=this.value,console.log(this.data))}},ot=(e(284),Object(h.a)(nt,it,[],!1,null,"31401694",null));ot.options.__file="src/pages/site/template4.vue";var lt=ot.exports,ct=e(194),dt={components:{t0478320:Z,t0478321:st,t0478323:lt},data(){return{com:"",isPreview:!0,share:{des:"",title:"",imgUrl:"",link:location.href},data:{},tid:this.$route.params.id,wxShare:{wxShareData:{appId:"",timestamp:"",nonceStr:"",signature:""},shareData:{title:"",desc:"",link:"",imgUrl:""},shareUser:{shareId:""}}}},mounted(){this.init(),this.shareFunction()},computed:d()({},Object(r.c)("liveMager",{joinInfo:t=>t.joinInfo})),methods:{init(){var t=this;return l()(function*(){yield t.$config({handlers:!0}).$get(z.a.GET_LIVEINFO,{activityId:t.tid}).then(function(a){t.share.title=a.data.activity.title,t.share.des=a.data.activity.description,t.share.imgUrl=a.data.activity.imgUrl,t.$config({handlers:!0}).$get(z.a.GET_SHAREINFO,{route:"officia_route"}).then(function(a){a.data&&(t.share.title=a.data.title,t.share.des=a.data.description,t.share.imgUrl=a.data.imgUrl)}),t.$config({loading:!0}).$get(z.a.GET_TEMPLATE,{activityId:t.tid}).then(function(a){let e=JSON.parse(a.data.value);t.com=`t${e.tid}`,e.editAble=!0;let s=n()(e).replace(/font-size:\s(\d+)px;/g,function(t,a){return t.replace(a,a/2)});e=JSON.parse(s),t.data=e})})})()},shareFunction(){var t=this;return l()(function*(){let a=window.location.href;t.joinInfo.activityUserId&&(a=t.joinInfo.activityUserId?`${a}?shareId=${t.joinInfo.activityUserId}`:a),t.wxShare.shareData.link=a,yield t.$config({handlers:!0}).$get(z.a.GET_SHARESIGN,{url:a}).then(function(a){t.wxShare.wxShareData.appId=a.data.appId,t.wxShare.wxShareData.timestamp=a.data.timestamp,t.wxShare.wxShareData.nonceStr=a.data.nonceStr,t.wxShare.wxShareData.signature=a.data.signature}),yield t.$config({handlers:!0}).$get(z.a.GET_SHAREINFO,{route:"officia_route"}).then(function(a){a.data&&(t.wxShare.shareData.title=a.data.title?a.data.title:"",t.wxShare.shareData.desc=a.data.description?a.data.description:"",t.wxShare.shareData.imgUrl=a.data.imgUrl?a.data.imgUrl:"")}),Object(ct.a)(t.wxShare)})()}}},rt=(e(286),Object(h.a)(dt,s,[],!1,null,"e8d3dd24",null));rt.options.__file="src/pages/site/template.vue";a.default=rt.exports}}]);
//# sourceMappingURL=12.4ca8a44f.js.map