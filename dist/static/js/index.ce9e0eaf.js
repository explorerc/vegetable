(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(e,t){e.exports=Vue},123:function(e,t,i){"use strict";var a=i(33);i.n(a).a},125:function(e,t,i){"use strict";var a=i(34);i.n(a).a},127:function(e,t,i){"use strict";var a=i(35);i.n(a).a},132:function(e,t,i){"use strict";var a=i(36);i.n(a).a},134:function(e,t,i){"use strict";var a=i(37);i.n(a).a},136:function(e,t,i){"use strict";var a=i(38);i.n(a).a},138:function(e,t,i){"use strict";var a=i(39);i.n(a).a},140:function(e,t,i){"use strict";var a=i(40);i.n(a).a},142:function(e,t,i){"use strict";var a=i(41);i.n(a).a},144:function(e,t,i){"use strict";var a=i(42);i.n(a).a},146:function(e,t,i){"use strict";var a=i(43);i.n(a).a},178:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)};s._withStripped=!0;var o={},r=(i(86),i(1)),l=Object(r.a)(o,s,[],!1,null,null,null);l.options.__file="src/app.vue";var c=l.exports,d=i(45),p=i(2);var u={namespaced:!0,state:{isLoading:!1},getters:{loadingStatus:e=>e.isLoading},mutations:{[p.f](e,t){e.isLoading=t}},actions:{updateLoadingStatusAsync({commit:e},t){setTimeout(()=>{e(p.f,t)},2e3)}}};var m={namespaced:!0,state:{data:"aData"},getters:{aGetter:e=>`i am ${e.data}`},mutations:{updateData(e,t){e.data+=t.str}},actions:{updateDataAsync({commit:e},t){e("updateData",t),e("b/updateData",t,{root:!0})}}};var h={namespaced:!0,state:{data:"bData"},getters:{bGetter:e=>`i am ${e.data}`},mutations:{updateData(e,t){e.data+=t.str}},actions:{updateDataAsync({commit:e},t){setTimeout(()=>{e("updateData",t)},2e3)}}};var v={namespaced:!0,state:{isLogin:!1,loginInfo:{}},getters:{isLoginGetter:e=>e.isLogin,loginInfo:e=>e.loginInfo},mutations:{[p.i](e,t){e.isLogin=t},[p.g](e,t){e.loginInfo=t}}},f=i(25),g=i.n(f);var b={namespaced:!0,state:{emailInfo:{activityId:"",emailInviteId:"",emailTemplateId:1,title:"",content:"",desc:"",senderName:""},liveDevices:{camera:"",mic:""},roomPaas:{accountId:"",appId:"",channelRoom:"",hdRoom:"",liveRoom:"",token:"",channelId:""},activityInfo:{},joinInfo:{}},getters:{liveDevices:e=>e.liveDevices,emailInfo:e=>e.emailInfo,roomPaas:e=>e.roomPaas,activityInfo:e=>e.activityInfo,joinInfo:e=>e.joinInfo},mutations:{[p.j](e,t){e.liveDevices=t},[p.c](e,t){e.emailInfo=t},[p.h](e,t){e.roomPaas=g()({},t,{channelId:t.channelRoom})},[p.a](e,t){e.activityInfo=t},[p.d](e,t){e.joinInfo=t}}},y=i(11),_=i.n(y);var x={namespaced:!0,state:{chatParams:{token:"",appId:"",channelId:"",accountId:""},liveParams:{}},getters:{chatParams:e=>{return e.chatParams?e.chatParams:_()(sessionStorage.getItem("chatParams"))},liveParams:e=>{return e.liveParams?e.liveParams:_()(sessionStorage.getItem("liveParams"))}},mutations:{[p.b](e,t){e.chatParams=t,sessionStorage.setItem("chatParams",_()(t))},[p.e](e,t){e.liveParams=t,sessionStorage.setItem("liveParams",_()(t))}}};n.a.use(d.a);var C=new d.a.Store({strict:!1,state:{num:3},getters:{isEven:e=>e.num%2==0},mutations:{addNum(e,t){e.num+=t.num}},actions:{addNumAsync({commit:e},t){setTimeout(()=>{e("addNum",t)},2e3)}},modules:{app:u,a:m,b:h,login:v,liveMager:b,tokenMager:x}}),w=i(57);var $=[{path:"/",name:"Layout",component:()=>Promise.all([i.e(1),i.e(0),i.e(3)]).then(i.bind(null,295)),children:[{path:"/signUp/:id",name:"signUp",component:()=>Promise.all([i.e(0),i.e(4)]).then(i.bind(null,291))},{path:"/guid/:id",name:"guid",component:()=>Promise.all([i.e(1),i.e(0),i.e(5)]).then(i.bind(null,292))},{path:"/success/:id",name:"success",component:()=>Promise.all([i.e(1),i.e(0),i.e(6)]).then(i.bind(null,297))},{path:"/checkState/:id",name:"checkState",component:()=>Promise.all([i.e(0),i.e(7)]).then(i.bind(null,294))}]},{path:"/site/:id",name:"SiteTemplate",component:()=>Promise.all([i.e(1),i.e(0),i.e(10)]).then(i.bind(null,290))},{path:"/watch/:id",name:"watch",component:()=>Promise.all([i.e(1),i.e(0),i.e(8)]).then(i.bind(null,293))},{path:"/live/:id",name:"live",component:()=>Promise.all([i.e(1),i.e(0)]).then(i.bind(null,289))},{path:"/playback/:id",name:"playback",component:()=>Promise.all([i.e(1),i.e(0)]).then(i.bind(null,288))},{path:"/test",name:"Test",component:()=>Promise.all([i.e(0),i.e(9)]).then(i.bind(null,296))},{path:"/kicked",name:"kicked",component:()=>i.e(11).then(i.bind(null,298))}],k=i(58);n.a.use(w.a);const S=new w.a({base:"/m/",routes:$,mode:"history"}),T=new n.a;function I(e,t){e.query.wechatAuth?(sessionStorage.setItem("wechatAuth",e.query.wechatAuth),delete e.query.wechatAuth,e.query._pop&&(delete e.query._pop,e.meta.pop=!0),t({path:e.path,params:e.params,query:e.query})):t()}S.beforeResolve((e,t,i)=>{sessionStorage.getItem("login")?I(e,i):T.$config({loading:!0,handlers:!0}).$get(k.a.GET_CONSUMERINFO).then(t=>{sessionStorage.setItem("login",_()(t.data)),I(e,i)}).catch(()=>{I(e,i)})});var L=S,V=(i(94),i(95),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"fade"},on:{"after-enter":e.afterEnter,"after-leave":e.afterLeave}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"com-notification",style:e.style,on:{mouseenter:e.clearTask,mouseleave:e.createTask}},[i("div",{staticClass:"header"},[!this.$slots.header&&e.header?i("span",{staticClass:"title"},[e._v(e._s(e.header))]):e._e(),e._v(" "),e._t("header"),e._v(" "),i("i",{staticClass:"iconfont icon-close",on:{click:function(t){return t.preventDefault(),e.handleClose(t)}}})],2),e._v(" "),i("div",{staticClass:"content"},[this.$slots.default?e._e():i("span",[e._v(e._s(e.content))]),e._v(" "),e._t("default")],2)])])});V._withStripped=!0;var P={name:"ComNotification",props:{header:String,content:{type:String,required:!0}},data:()=>({visible:!0}),created(){},methods:{handleClose(e){this.$emit("close")},afterEnter(){},afterLeave(){this.$emit("closed")},createTask(){},clearTask(){}},computed:{style:()=>({})}},O=(i(97),Object(r.a)(P,V,[],!1,null,"639450be",null));O.options.__file="src/components/common/notification/com.vue";var N=O.exports,D=i(8),q=i.n(D),j=i(10),E=i.n(j),M=i(59),A=i.n(M),H=i(7),R=i.n(H),U={extends:N,props:{position:{type:String,default:"top-center"}},data:()=>({verticalOffset:0,height:0,width:0,halfWidth:0,visible:!1,autoClose:3e3,timerId:0}),mounted(){this.createTask(),setTimeout(()=>{this.width=this.$el.offsetWidth,this.halfWidth=this.$el.offsetWidth/2,this.height=this.$el.offsetHeight},50)},beforeDestory(){this.clearTask()},methods:{createTask(){this.autoClose&&(this.timerId=setTimeout(()=>{this.$emit("close")},this.autoClose))},clearTask(){this.timerId&&clearTimeout(this.timerId)},afterEnter(){this.height=this.$el.offsetHeight}},computed:{style(){const e={position:"fixed"};switch(this.position){case"top-center":e.left="50%",e.marginLeft=`-${this.halfWidth}px`,e.top=`${this.verticalOffset}px`;break;case"bottom-center":e.left="50%",e.marginLeft=`-${this.halfWidth}px`,e.bottom=`${this.verticalOffset}px`;break;case"right-bottom":e.right="20px",e.bottom=`${this.verticalOffset}px`;break;case"right-top":e.right="20px",e.top=`${this.verticalOffset}px`;break;case"center":e.left="50%",e.top="50%",e.marginLeft=`-${this.halfWidth}px`,e.marginTop=`-${this.height+this.verticalOffset}px`;break;case"left-bottom":e.left="20px",e.bottom=`${this.verticalOffset}px`;break;case"left-top":e.left="20px",e.top=`${this.verticalOffset}px`}return e}}};const B=n.a.extend(U),W=[],z=[];let F=1,G=!1;const J=(()=>{var e=A()(function*(){const e=z.shift();e?(G=!0,e.vm.visible=!1,yield(e=>new R.a(t=>setTimeout(t,e)))(500),J()):G=!1});return function(){return e.apply(this,arguments)}})();var Y=e=>{const{autoClose:t,close:i,closed:a}=e,n=E()(e,["autoClose","close","closed"]),s=new B({propsData:q()({},n),data:{autoClose:void 0===t?3e3:t}});s.id=`notification_${F++}`,s.vm=s.$mount(),document.body.appendChild(s.vm.$el),s.vm.visible=!0;let o=0;return W.map(e=>{o+=e.$el.offsetHeight+16}),o+=16,s.verticalOffset=o,W.push(s),s.vm.$on("close",()=>{i&&i(),z.push(s),G||J()}),s.vm.$on("closed",()=>{a&&a(),(e=>{const t=W.length,i=W.findIndex(t=>e.id===t.id);if(W.splice(i,1),t>1){const a=e.vm.height;for(let e=i;e<t-1;e++)W[e].verticalOffset=parseInt(W[e].verticalOffset)-a-16}})(s),document.body.removeChild(s.vm.$el),s.vm.$destroy()}),s.vm};var X=function(){var e=this,t=e.$createElement,i=e._self._c||t;return"textarea"!==e.type?i("div",{staticClass:"com-input"},["search"===e.type?i("i",{staticClass:"iconfont icon-search"}):e._e(),e._v(" "),"checkbox"===e.inputType?i("input",{directives:[{name:"model",rawName:"v-model",value:e.innerValue,expression:"innerValue"}],class:{error:e.errorMsg},style:e.style,attrs:{placeholder:e.placeholder,disabled:e.disabled,type:"checkbox"},domProps:{checked:Array.isArray(e.innerValue)?e._i(e.innerValue,null)>-1:e.innerValue},on:{focus:e.focusHandle,blur:e.blurHandle,change:function(t){var i=e.innerValue,a=t.target,n=!!a.checked;if(Array.isArray(i)){var s=e._i(i,null);a.checked?s<0&&(e.innerValue=i.concat([null])):s>-1&&(e.innerValue=i.slice(0,s).concat(i.slice(s+1)))}else e.innerValue=n}}}):"radio"===e.inputType?i("input",{directives:[{name:"model",rawName:"v-model",value:e.innerValue,expression:"innerValue"}],class:{error:e.errorMsg},style:e.style,attrs:{placeholder:e.placeholder,disabled:e.disabled,type:"radio"},domProps:{checked:e._q(e.innerValue,null)},on:{focus:e.focusHandle,blur:e.blurHandle,change:function(t){e.innerValue=null}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:e.innerValue,expression:"innerValue"}],class:{error:e.errorMsg},style:e.style,attrs:{placeholder:e.placeholder,disabled:e.disabled,type:e.inputType},domProps:{value:e.innerValue},on:{focus:e.focusHandle,blur:e.blurHandle,input:function(t){t.target.composing||(e.innerValue=t.target.value)}}}),e._v(" "),"search"===e.type?i("i",{directives:[{name:"show",rawName:"v-show",value:e.showDelete,expression:"showDelete"}],staticClass:"iconfont icon-delete",on:{click:e.empty}}):e._e(),e._v(" "),"password"===e.type||"password"===e.type&&"text"===e.inputType?i("i",{staticClass:"iconfont",class:{"icon-guanbi-yanjing":"password"===e.inputType,"icon-faxian-yanjing":"text"===e.inputType},on:{click:e.toggleShow}}):e._e(),e._v(" "),e.maxLength&&"input"===e.type?i("span",{staticClass:"limit"},[i("i",{staticClass:"length",domProps:{textContent:e._s(e.innerValue.gbLength())}},[e._v("0")]),e._v("/"),i("i",[e._v(e._s(e.maxLength))])]):e._e(),e._v(" "),e.errorMsg?i("span",{staticClass:"error-msg"},[e._v(e._s(e.errorMsg))]):e._e()]):i("div",{staticClass:"com-input area"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.innerValue,expression:"innerValue"}],ref:"tarea",class:{error:e.errorMsg},attrs:{placeholder:e.placeholder,rows:e.rows,placeholder:"请输入内容"},domProps:{value:e.innerValue},on:{input:function(t){t.target.composing||(e.innerValue=t.target.value)}}}),e._v(" "),e.maxLength&&"textarea"===e.type?i("span",{staticClass:"limit area"},[i("i",{staticClass:"length",domProps:{textContent:e._s(e.innerValue.gbLength())}},[e._v("0")]),e._v("/"),i("i",[e._v(e._s(e.maxLength))])]):e._e(),e._v(" "),e.errorMsg?i("span",{staticClass:"error-msg"},[e._v(e._s(e.errorMsg))]):e._e()])};X._withStripped=!0;var K={name:"ComInput",props:{placeholder:String,value:String,type:{type:String,default:"input"},maxLength:Number,rows:{type:Number,default:2},autosize:Boolean,disabled:String,errorTips:String},data:()=>({innerValue:"",showDelete:!1,inputType:"",offsetHeight:0,errorMsg:""}),created(){this.inputType=this.getType()},mounted(){this.$refs.tarea&&(this.offsetHeight=this.$refs.tarea.offsetHeight-this.$refs.tarea.clientHeight),this.innerValue=this.value,this.inputType=this.getType()},methods:{focusHandle(e){this.showDelete=!0,this.$emit("focus",e)},blurHandle(e){this.hideDelete(),this.$emit("blur",e)},empty(){this.innerValue=""},toggleShow(){"password"===this.inputType?this.inputType="text":this.inputType="password"},hideDelete(){setTimeout(()=>{this.showDelete=!1},200)},getType(){let e="";switch(this.type){case"password":e="password";break;default:e="text"}return e}},watch:{innerValue(e){this.maxLength&&e.gbLength()>this.maxLength&&(this.innerValue=e.substring(0,e.gbIndex(this.maxLength)+1)),"textarea"===this.type&&this.autosize&&(this.$refs.tarea.style.height="auto",this.$refs.tarea.style.height=`${this.$refs.tarea.scrollHeight+this.offsetHeight}px`),this.$emit("update:value",this.innerValue),this.$emit("input",this.innerValue)},value:{handler(e){this.innerValue=e,this.$emit("change")},immediate:!0},type:{handler(e){this.inputType=this.getType()},immediate:!0},errorTips:{handler(e){this.errorMsg=e},immediate:!0}},computed:{style(){const e={};return"search"===this.type?(e.paddingLeft="36px",e.paddingRight="30px"):this.maxLength?e.paddingRight="45px":"password"===this.type&&(e.paddingRight="30px"),e}}},Q=(i(123),Object(r.a)(K,X,[],!1,null,"2c8862b0",null));Q.options.__file="src/components/common/input/com.vue";var Z=Q.exports,ee=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.visible?i("transition",{attrs:{name:"fade"}},[i("div",{class:["ve-message-box__wrapper"]},[i("div",{staticClass:"ve-message-box",style:{width:e.width},attrs:{type:e.type}},[i("div",{staticClass:"ve-message-box__header"},["prompt"==e.type?i("span",{staticClass:"prompt-title"},[e._v(e._s(e.header))]):e._e(),e._v(" "),i("button",{attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.handleClick(e.action.cancel)}}},[i("i",{staticClass:"iconfont icon-close"})])]),e._v(" "),i("div",{staticClass:"ve-message-box__container"},[!this.$slots.header&&e.header&&"prompt"!==e.type?i("div",{staticClass:"ve-message-box__title"},[e._v(e._s(e.header))]):e._e(),e._v(" "),e._t("header"),e._v(" "),this.$slots.default&&0!=this.$slots.default.length||!e.content?e._e():i("div",{staticClass:"ve-message-box__content"},[e._v("\n          "+e._s(e.content)+"\n        ")]),e._v(" "),e._t("default"),e._v(" "),i("div",{staticClass:"ve-message-box__btns"},[this.$slots.bottom?e._e():i("div",[i("button",{staticClass:"button--primary",attrs:{type:"button",type:e.type},on:{click:function(t){t.preventDefault(),e.handleClick(e.action.confirm)}}},[i("span",[e._v(e._s(e.confirmText)),e.autoClose?i("span",{staticClass:"auto-close"},[e._v("("+e._s(e.closeTime)+"s)")]):e._e()])]),e._v(" "),e.cancelText?i("button",{staticClass:"button--cancel",attrs:{type:"button",type:e.type},on:{click:function(t){t.preventDefault(),e.handleClick(e.action.cancel)}}},[i("span",[e._v(e._s(e.cancelText))])]):e._e()]),e._v(" "),e._t("bottom")],2)],2)]),e._v(" "),i("div",{staticClass:"ve-modal",on:{click:function(t){t.preventDefault(),e.handleClick(e.action.cancel)}}})])]):e._e()};ee._withStripped=!0;var te={name:"message-box",data:()=>({visible:!0,closeTime:0,intervalTime:0,action:{cancel:"cancel",confirm:"confirm"}}),props:{header:{type:String,default:"提示"},content:{type:String,default:""},confirmText:{type:String,default:"确定"},cancelText:{type:String,default:""},autoClose:{type:Number,default:0},width:{type:String,default:"300px"},type:{type:String,default:""}},watch:{autoClose:{handler(e){e&&(this.closeTime=e,clearInterval(this.intervalTime),this.intervalTime=setInterval(()=>{this.closeTime--,this.closeTime||(clearInterval(this.intervalTime),this.$emit("handleClick",{action:"cancel"}))},1e3))},immediate:!0}},destroyed(){clearInterval(this.intervalTime)},methods:{handleClick(e){this.$emit("handleClick",{action:e})}}},ie=(i(125),Object(r.a)(te,ee,[],!1,null,"429413e3",null));ie.options.__file="src/components/common/message-box/com.vue";var ae=ie.exports;const ne=n.a.extend(ae);var se=e=>{const{handleClick:t}=e,i=E()(e,["handleClick"]),a=new ne({propsData:q()({},i)});return a.vm=a.$mount(),document.body.appendChild(a.vm.$el),a.vm.visible=!0,a.vm.$on("handleClick",e=>{t&&t(e),document.body.removeChild(a.vm.$el),a.vm.$destroy()}),a.vm};const oe=se;var re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.visible?i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"ve-message-box__wrapper"},[i("div",{staticClass:"ve-message-box"},[i("div",{staticClass:"ve-message-box__header"},[i("div",{staticClass:"ve-message-box__title"},[e._v("邀请")]),e._v(" "),e._t("header"),e._v(" "),i("button",{attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.close()}}},[i("i",{staticClass:"iconfont icon-close"})])],2),e._v(" "),i("div",{staticClass:"ve-message-box__content"},[i("p",{staticStyle:{position:"relative"}},[e._v("\n          分享链接给朋友\n          "),i("transition",{attrs:{name:"success"}},[e.isSuccess?i("i",{staticClass:"iconfont icon-successful"}):e._e()])],1),e._v(" "),i("p",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.linkSrc,expression:"linkSrc"}],ref:"linkInput",domProps:{value:e.linkSrc},on:{input:function(t){t.target.composing||(e.linkSrc=t.target.value)}}}),e._v(" "),i("button",{staticClass:"copy-link",attrs:{type:"button"},on:{click:e.copyLink}},[e._v("复制")])]),e._v(" "),i("p",[i("button",{staticClass:"share-btn weibo",attrs:{type:"button"},on:{click:function(t){t.stopPropagation(),e.openLink(e.weiboLink)}}},[i("i",{staticClass:"iconfont icon-weibo"})]),e._v(" "),i("button",{staticClass:"share-btn wxchart",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),e.shareWx(t)}}},[i("i",{staticClass:"iconfont icon-weixin"})]),e._v(" "),i("button",{staticClass:"share-btn qq",attrs:{type:"button"},on:{click:function(t){t.stopPropagation(),e.openLink(e.qqLink)}}},[i("i",{staticClass:"iconfont icon-10"})])]),e._v(" "),i("transition",{attrs:{name:"fade"}},[e.qrCode?i("div",[i("img",{staticStyle:{display:"block",margin:"10px auto"},attrs:{src:e.qrCode,alt:"二维码"}}),e._v(" "),i("p",[e._v("打开微信，点击底部的“发现”，使用 “扫一扫” 即可将网页分享到我的朋友圈")])]):e._e()])],1)]),e._v(" "),i("div",{staticClass:"ve-modal",on:{click:function(t){t.preventDefault(),e.close()}}})])]):e._e()};re._withStripped=!0;var le={name:"Share",data:()=>({visible:!0,isSuccess:!1,linkSrc:"",qrCode:"",qqLink:"",weiboLink:""}),props:{shareLink:{type:Object,default:{link:"",data:{title:"-",summary:"-",desc:"-",pic:"-"}}}},watch:{shareLink:{handler(e){this.linkSrc=e.link,this.qqLink="https://connect.qq.com/widget/shareqq/index.html?url="+e.link+"&title="+e.data.title+"&summary="+e.data.summary+"&desc="+e.data.desc+"&pic="+e.data.pic,this.weiboLink="http://service.weibo.com/share/share.php?url="+e.link+"&title="+e.data.desc+"&pic="+e.data.pic+"&appkey=&searchPic=false"},immediate:!0,deep:!0}},methods:{close(){this.$emit("close")},copyLink(){if(this.$refs.linkInput.select(),document.execCommand("copy")){document.execCommand("copy"),this.$refs.linkInput.blur(),this.isSuccess=!0;let e=setTimeout(()=>{this.isSuccess=!1,clearTimeout(e)},500)}},shareWx(){this.qrCode="//aliqr.e.vhall.com/qr.png?t="+this.shareLink.link},openLink(e){console.log(e),window.open(e)}}},ce=(i(127),Object(r.a)(le,re,[],!1,null,"732a3c86",null));ce.options.__file="src/components/common/share/com.vue";var de=ce.exports;const pe=n.a.extend(de);var ue=e=>{const{close:t}=e,i=E()(e,["close"]),a=new pe({propsData:{shareLink:q()({},i)}});return a.vm=a.$mount(),document.body.appendChild(a.vm.$el),a.vm.visible=!0,a.vm.$on("close",e=>{t&&t(e),document.body.removeChild(a.vm.$el),a.vm.$destroy()}),a.vm},me=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"com-upload",on:{click:e.fileSelect}},[e._t("default"),e._v(" "),this.$slots.default?e._e():i("button",{staticClass:"upload-btn"},[i("i",{staticClass:"iconfont icon-upload"}),i("span",{staticClass:"upload-btn-text"},[e._v(e._s(e.uploadTxt))])]),e._v(" "),i("input",{ref:"upload",staticClass:"com-upload-file",attrs:{type:"file",multiple:e.multiple,accept:e.acceptStr},on:{change:e.startUpload}})],2)};me._withStripped=!0;var he=i(84),ve=i.n(he);const fe={jpeg:"image/jpeg",jpg:"image/jpeg",png:"image/png",bmp:"image/bmp",gif:"image/gif",doc:"application/msword",docx:"application/msword",xls:"application/vnd.ms-excel",xlsx:"application/vnd.ms-excel",pdf:"application/pdf",ppt:"application/mspowerpoint",mp4:"video/mp4",flv:"video/x-flv",m3u8:"application/x-mpegURL",mov:"video/quicktime",avi:"video/x-msvideo",wmv:"video/x-ms-wmv"};var ge={name:"ComUpload",props:{accept:{type:String,default:""},actionUrl:{type:String,required:!0},inputName:{type:String,default:"file"},exParams:{type:Object,default:()=>({})},uploadTxt:{type:String,default:"Upload"},timeout:{type:Number,default:3e4},credentials:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},currentCount:{type:Number,default:0},totalCount:{type:Number,default:1},fileSize:{type:Number,default:0}},data:()=>({current:"",queue:[],list:[],error:[]}),methods:{fileSelect(){this.$refs.upload.value="",this.$refs.upload.click()},startUpload(e){this.current="",this.list=[],this.queue=[],this.error=[];let t=1e3*this.fileSize;Array.prototype.forEach.call(this.$refs.upload.files,(e,i)=>{e.size>t?this.error.push({state:"size-limit",name:e.name,size:e.size}):-1===this.acceptStr.indexOf(e.type)?this.error.push({state:"type-limit",name:e.name,type:e.type}):(this.list.push({name:e.name,size:e.size}),this.queue.push(e))}),this.error.length>0?this.$emit("error",{code:503,data:this.error}):this.currentCount+this.list.length>this.totalCount?this.$emit("error",{code:502}):(this.$emit("selected",{data:this.list}),this.queue.length>0&&this.doWork())},doWork(){const e=this.queue.shift();if(e){this.current=e.name;const t=new FormData;t.append(`${this.inputName}`,e);for(let[e,i]of ve()(this.exParams))t.append(e,i);this.doUpload(t)}else this.current="",this.$emit("over")},doUpload(e){const t=new XMLHttpRequest;t.open("post",this.actionUrl),t.timeout=this.timeout,this.credentials&&(t.withCredentials=!0),t.upload.onprogress=(e=>{e.lengthComputable&&this.$emit("progress",{name:this.current,loaded:e.loaded,total:e.total,percent:`${(e.loaded/e.total*100).toFixed(2)}%`})}),t.onload=(e=>{this.$emit("load",{name:this.current,data:t.responseText}),this.doWork()}),t.ontimeout=(e=>{this.$emit("error",{name:this.current,code:501,error:e})}),t.onerror=(e=>{this.$emit("error",{name:this.current,code:501,error:e})}),t.send(e)}},computed:{acceptStr(){let e="";const t=this.accept.split("|");return t.length>0?t.forEach(t=>{e+=`${fe[t]},`}):e="*",e}}},be=(i(132),Object(r.a)(ge,me,[],!1,null,"27f737b7",null));be.options.__file="src/components/common/upload/com.vue";var ye=be.exports,_e=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"com-notification",style:this.style},[t("div",{staticClass:"inner-wrap"},[t("i",{staticClass:"iconfont icon-Loading"}),this._v(" "),t("span",{staticClass:"loading-txt"},[this._v(this._s(this.loadingText))])])])};_e._withStripped=!0;var xe={name:"ComLoading",props:{loadingText:{type:String,default:"Loading"},relative:Boolean},data:()=>({visible:!0}),computed:{style(){const e={};return this.relative&&(e.position="absolute"),e}}},Ce=(i(134),Object(r.a)(xe,_e,[],!1,null,"4b4d011a",null));Ce.options.__file="src/components/common/loading/com.vue";var we=Ce.exports,$e={bind(e,t,i){},inserted(e,t,i){const a=e.getAttribute("com-loading-text"),s=new(n.a.extend(we))({propsData:{loadingText:void 0===a?"Loading":a,relative:!0},data:{visible:t.value}});s.vm=s.$mount(),e.style.position="relative",e.appendChild(s.vm.$el),e.instance=s},componentUpdated(e,t,i){e.instance.vm.visible=t.value},unbind(e,t,i){e.removeChild(e.instance.vm.$el),e.instance.vm.$destroy()}};const ke=n.a.extend(we);let Se=null;var Te=(e={})=>{let t,i,a=!0;if(!1===e?a=!1:({loadingText:t,target:i}=e),!Se&&a){(Se=new ke({propsData:{loadingText:void 0===t?"Loading":t,relative:!!i}})).vm=Se.$mount();let e=document.body;setTimeout(()=>{i&&document.querySelector(i)&&(e=document.querySelector(i)),e.appendChild(Se.vm.$el)},0)}else Se&&(Se.vm.visible=a);return Se?Se.vm:null};const Ie=Te;var Le=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"com-dialog",on:{click:function(t){return t.preventDefault(),e.wrapClose(t)}}},[i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.innerVisible,expression:"innerVisible"}],staticClass:"dialog-wrap",on:{click:function(e){e.stopPropagation()}}},[i("div",{staticClass:"dialog-header",class:{"align-center":e.center}},[!e.$slots.header&&e.header?i("span",{staticClass:"title"},[e._v(e._s(e.header))]):e._e(),e._v(" "),e._t("header"),e._v(" "),i("i",{staticClass:"iconfont icon-close",on:{click:function(t){return t.preventDefault(),e.handleClose(t)}}})],2),e._v(" "),i("div",{staticClass:"dialog-body"},[e.$slots.default?e._e():i("span",[e._v(e._s(e.content))]),e._v(" "),e._t("default")],2),e._v(" "),i("div",{staticClass:"dialog-footer",class:{"align-center":e.center}},[e._t("footer")],2)])])],1)};Le._withStripped=!0;var Ve={name:"ComDialog",props:{header:String,content:String,center:Boolean,visible:Boolean,beforeClose:Function,dialogClose:Boolean},data:()=>({innerVisible:!1}),methods:{wrapClose(){this.dialogClose&&this.handleClose()},handleClose(){"function"==typeof this.beforeClose?this.beforeClose(this.hide):this.hide()},hide(){this.innerVisible=!1,this.$emit("update:visible",!1),this.$emit("close")}},watch:{visible:{handler(e){e&&setTimeout(()=>{this.innerVisible=e},50)},immediate:!0}}},Pe=(i(136),Object(r.a)(Ve,Le,[],!1,null,"afae2004",null));Pe.options.__file="src/components/common/dialog/com.vue";var Oe=Pe.exports,Ne=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"com-button",class:[{primary:"primary"===e.type},{loading:e.loading||e.disabled}],style:e.styles,attrs:{disabled:e.loading||e.disabled},on:{click:e.handleClick}},[e.loading?i("i",{staticClass:"iconfont icon-Loading"}):e._e(),e._v(" "),e._t("default")],2)};Ne._withStripped=!0;var De={name:"ComButton",props:{type:String,loading:Boolean,disabled:Boolean,styles:Object},methods:{handleClick(e){this.$emit("click",e)}}},qe=(i(138),Object(r.a)(De,Ne,[],!1,null,"59c58fe8",null));qe.options.__file="src/components/common/button/com.vue";var je=qe.exports,Ee={props:{panels:{type:Array,required:!0},currentName:[String,Number]},methods:{handleClick(e){this.$parent.change(e)}},render(){const e=arguments[0],t=this.panels.map((t,i)=>{const a=t.$slots.label||e("span",[t.label]),n={"tab-item":!0,active:this.currentName===t.index};return e("li",{class:n,on:{click:()=>{this.handleClick(t.index)}}},[a])});return e("ul",{class:"tab-header-wrap"},[t])}},Me=(i(140),Object(r.a)(Ee,void 0,void 0,!1,null,"208cb1d6",null));Me.options.__file="src/components/common/tabs/nav.vue";var Ae={name:"ComTabs",components:{ComNav:Me.exports},props:{position:{type:String,default:""},disabled:Boolean,type:{type:String,default:""},value:{type:[String,Number],required:!0}},data:()=>({panes:[]}),methods:{change(e){this.disabled||(this.$emit("update:value",e),this.$emit("change",e))}},updated(){this.$refs.nav.$forceUpdate()},render(){const e=arguments[0],t=e("div",{class:"tab-header"},[e("com-nav",{props:{panels:this.panes,currentName:this.value},ref:"nav"})]),i=e("div",{class:"tab-container"},[this.$slots.default]),a={"com-tabs":!0};return this.position&&(a[this.position]=!0),this.type&&(a[this.type]=!0),e("div",{class:a},[[t,i]])}},He=(i(142),Object(r.a)(Ae,void 0,void 0,!1,null,"41db4adb",null));He.options.__file="src/components/common/tabs/tabs.vue";var Re=He.exports,Ue={name:"ComTab",props:{index:{required:!0,type:[Number,String]},label:{type:String,default:"tab"}},data:()=>({width:0,height:0,offsetLeft:0,offsetTop:0}),mounted(){this.$parent.panes.push(this)},render(){return(0,arguments[0])("div",{class:"tab-content",directives:[{name:"show",value:this.index===this.$parent.value}]},[this.$slots.default])}},Be=(i(144),Object(r.a)(Ue,void 0,void 0,!1,null,"5cd83f48",null));Be.options.__file="src/components/common/tabs/tab.vue";var We=Be.exports,ze=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.visible?i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"video-modal-box"},[i("div",{staticClass:"video-modal",on:{click:e.closePlay}}),e._v(" "),i("div",{staticClass:"video-content"},[this.outLineLink?i("div",{staticClass:"iframe-box"},[i("div",{staticStyle:{width:"100%",height:"100%"},domProps:{innerHTML:e._s(this.outLineLink)}})]):!this.recordId||e.playMsg?i("span",[e._v(e._s(e.playMsg||"暂无视频"))]):i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:e.myVideoId}})])])]):e._e()};ze._withStripped=!0;var Fe={name:"ve-play-back",data:()=>({playMsg:"",visible:!1,myVideoId:`myVideo_${Math.random()}`}),props:{app_id:String,accountId:"",token:String,recordId:String,outLineLink:String},watch:{sdk:{handler(){this.initPage()},immediate:!0}},methods:{closePlay(){this.$emit("close")},initPage(){this.$nextTick(()=>{this.recordId&&(window.Vhall.ready(()=>{window.VhallPlayer.init({recordId:this.recordId,type:"vod",videoNode:this.myVideoId,complete:function(){window.VhallPlayer.play()},fail:e=>{this.playMsg=`${e}...`}})}),window.Vhall.config({appId:this.app_id,accountId:this.accountId,token:this.token}))})}}},Ge=(i(146),Object(r.a)(Fe,ze,[],!1,null,"63707f58",null));Ge.options.__file="src/components/common/play-video/com.vue";var Je=Ge.exports;const Ye=n.a.extend(Je);var Xe=e=>{const{handleClick:t}=e,i=E()(e,["handleClick"]),a=new Ye({propsData:q()({},i)});return a.vm=a.$mount(),document.body.appendChild(a.vm.$el),a.vm.visible=!0,a.vm.$on("close",e=>{t&&t(e),document.body.removeChild(a.vm.$el),a.vm.$destroy()}),a.vm};var Ke=i(44),Qe=i.n(Ke),Ze=i(85),et=i.n(Ze);const tt="/m/api",it={timeout:2e4,responseType:"json",withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}};Qe.a.interceptors.request.use(e=>e,e=>R.a.reject(e)),Qe.a.interceptors.response.use(e=>(Ie(!1),200!==e.data.code?R.a.reject(e.data):e),e=>R.a.reject(e));class at{constructor(e){this.target=e,this.config={},this.options={}}$config(e={}){return this.config=e,this.config.headers&&(this.options.headers=this.config.headers),this}$get(e,t={}){return this.options.method="get",this.options.params=t,this.ajax(e)}$post(e,t={}){return this.options.method="post",this.options.data=et.a.stringify(t),this.ajax(e)}ajax(e){this.options.url=tt+e;let t=g()({},it,this.options);return this.config.loading&&Ie(!0),Qe()(t).then(e=>(Ie(!1),e.data)).catch(e=>{if(Ie(!1),!0===this.config.handlers)return R.a.reject(e);if("[object Array]"===Object.prototype.toString.call(this.config.handlers)&&~this.config.handlers.indexOf(e.code))return R.a.reject(e);if(10030===e.code)this.target.$router.replace("/login");else{let t=e.msg||"网络异常";oe({header:"提示",content:t,autoClose:10,confirmText:"知道了"})}return new R.a(()=>{})})}}n.a.use(e=>{e.component(N.name,N),e.prototype.$toast=Y}),n.a.use(e=>{e.component(Z.name,Z)}),n.a.use(e=>{e.component(ae.name,ae),e.prototype.$messageBox=se}),n.a.use(e=>{e.component(de.name,de),e.prototype.$share=ue}),n.a.use(e=>{e.component(ye.name,ye)}),n.a.use(e=>{e.component(we.name,we),e.prototype.$loading=Te,e.directive(we.name,$e)}),n.a.use(e=>{e.component(Oe.name,Oe)}),n.a.use(e=>{e.component(je.name,je)}),n.a.use(e=>{e.component(Re.name,Re),e.component(We.name,We)}),n.a.use(e=>{e.component(Je.name,Je),e.prototype.$playVideo=Xe}),n.a.use(e=>{e.prototype.$config=function(e){return new at(this).$config(e)},e.prototype.$get=function(e,t){return new at(this).$get(e,t)},e.prototype.$post=function(e,t){return new at(this).$post(e,t)}}),n.a.config.debug=!1,n.a.config.devtools=!1,n.a.config.productionTip=!1,n.a.prototype.$imgHost="//test-zhike.oss-cn-beijing.aliyuncs.com",n.a.filter("isEmpty",function(e,t){return t=t||"-",e||t}),new n.a({el:"#root",router:L,store:C,render:e=>e(c)});let nt=window.Vhall.ready,st=!1,ot=[];window.Vhall.ready=(e=>{st?e():ot.push(e)}),nt(()=>{for(let e,t=0;e=ot[t++];)e();ot=[],st=!0});let rt=window.Vhall.config,lt=!1;window.Vhall.config=(e=>{lt||(lt=!0,rt(e))})},2:function(e,t,i){"use strict";i.d(t,"f",function(){return a}),i.d(t,"i",function(){return n}),i.d(t,"g",function(){return s}),i.d(t,"c",function(){return o}),i.d(t,"b",function(){return r}),i.d(t,"e",function(){return l}),i.d(t,"j",function(){return c}),i.d(t,"h",function(){return d}),i.d(t,"a",function(){return p}),i.d(t,"d",function(){return u});const a="LOADING_STATUS",n="Update_Is_Login",s="LOGIN_INFO",o="EMAIL_INFO",r="CHAT_PARAMS",l="LIVE_PARAMS",c="VIDEO_DEVICE",d="ROOM_PAAS",p="ACTIVITY_INFO",u="JOIN_INFO"},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},58:function(e,t,i){"use strict";t.a={GET_USERREGACTIVITY:"/frontend/user/reg-activity",GET_JOININFO:"/frontend/user/join-info",GET_CONSUMERINFO:"/user/consumer-user/info",POST_MOBILELOGIN:"/user/consumer-user/mobile-login"}},86:function(e,t,i){"use strict";var a=i(31);i.n(a).a},94:function(e,t){Date.prototype.format=function(e){if(this){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var i in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[i]:("00"+t[i]).substr((""+t[i]).length)));return e}},String.prototype.formatDate=function(e){let t=this.replace(/[-\s]/g,":").split(":");return t[1]-=1,new Date(...t).format(e)},String.prototype.gbLength=function(){var e=this.length,t=0;for(let i=0;i<e;i++)0!=(65280&this.charCodeAt(i))?t+=2:t+=1;return t},String.prototype.gbIndex=function(e){let t=this.length,i=0,a=0;for(let n=0;n<t;n++){if(0!=(65280&this.charCodeAt(n))?i+=2:i+=1,i===e){a=n;break}if(i>e){a=n-1;break}}return a},String.prototype.copyClipboard=function(e){var t=document.createElement("textarea");t.innerHTML=this,t.style.position="fixed",t.style.top="1000000000px",document.body.appendChild(t),t.select(),document.execCommand("copy")?(document.execCommand("copy"),t.blur(),e&&e("success")):e&&e("error");var i=setTimeout(function(){clearTimeout(i),document.body.removeChild(t)},500)}},95:function(e,t,i){},97:function(e,t,i){"use strict";var a=i(32);i.n(a).a}},[[178,12,1]]]);
//# sourceMappingURL=index.ce9e0eaf.js.map