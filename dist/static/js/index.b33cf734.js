(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{0:function(t,e){t.exports=Vue},107:function(t,e,n){"use strict";var i=n(35);n.n(i).a},123:function(t,e,n){},124:function(t,e,n){"use strict";var i=n(36);n.n(i).a},141:function(t,e,n){"use strict";var i=n(37);n.n(i).a},142:function(t,e,n){"use strict";var i=n(38);n.n(i).a},143:function(t,e,n){"use strict";var i=n(39);n.n(i).a},144:function(t,e,n){"use strict";var i=n(40);n.n(i).a},153:function(t,e,n){"use strict";var i=n(41);n.n(i).a},154:function(t,e,n){"use strict";var i=n(42);n.n(i).a},155:function(t,e,n){"use strict";var i=n(43);n.n(i).a},156:function(t,e,n){"use strict";var i=n(44);n.n(i).a},157:function(t,e,n){"use strict";var i=n(45);n.n(i).a},158:function(t,e,n){"use strict";var i=n(46);n.n(i).a},159:function(t,e,n){"use strict";var i=n(47);n.n(i).a},160:function(t,e,n){"use strict";var i=n(48);n.n(i).a},204:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)};o._withStripped=!0;var s={},r=(n(107),n(1)),c=Object(r.a)(s,o,[],!1,null,null,null);c.options.__file="src/app.vue";var l,u,d,p=c.exports,m=n(50),f=n(6),h=n.n(f),v=n(3),g={namespaced:!0,state:{isLoading:!1},getters:{loadingStatus:function(t){return t.isLoading}},mutations:h()({},v.f,function(t,e){t.isLoading=e}),actions:{updateLoadingStatusAsync:function(t,e){var n=t.commit;setTimeout(function(){n(v.f,e)},2e3)}}},b={namespaced:!0,state:{data:"aData"},getters:{aGetter:function(t){return"i am "+t.data}},mutations:{updateData:function(t,e){t.data+=e.str}},actions:{updateDataAsync:function(t,e){var n=t.commit;n("updateData",e),n("b/updateData",e,{root:!0})}}},y={namespaced:!0,state:{data:"bData"},getters:{bGetter:function(t){return"i am "+t.data}},mutations:{updateData:function(t,e){t.data+=e.str}},actions:{updateDataAsync:function(t,e){var n=t.commit;setTimeout(function(){n("updateData",e)},2e3)}}},_={namespaced:!0,state:{isLogin:!1,loginInfo:{}},getters:{isLoginGetter:function(t){return t.isLogin},loginInfo:function(t){return t.loginInfo}},mutations:(l={},h()(l,v.i,function(t,e){t.isLogin=e}),h()(l,v.g,function(t,e){t.loginInfo=e}),l)},x=n(29),C=n.n(x),w={namespaced:!0,state:{emailInfo:{activityId:"",emailInviteId:"",emailTemplateId:1,title:"",content:"",desc:"",senderName:""},liveDevices:{camera:"",mic:""},roomPaas:{accountId:"",appId:"",channelRoom:"",hdRoom:"",liveRoom:"",token:"",channelId:""},activityInfo:{},joinInfo:{}},getters:{liveDevices:function(t){return t.liveDevices},emailInfo:function(t){return t.emailInfo},roomPaas:function(t){return t.roomPaas},activityInfo:function(t){return t.activityInfo},joinInfo:function(t){return t.joinInfo}},mutations:(u={},h()(u,v.j,function(t,e){t.liveDevices=e}),h()(u,v.c,function(t,e){t.emailInfo=e}),h()(u,v.h,function(t,e){t.roomPaas=C()({},e,{channelId:e.channelRoom})}),h()(u,v.a,function(t,e){t.activityInfo=e}),h()(u,v.d,function(t,e){t.joinInfo=e}),u)},k=n(17),$=n.n(k),S={namespaced:!0,state:{chatParams:{token:"",appId:"",channelId:"",accountId:""},liveParams:{}},getters:{chatParams:function(t){return t.chatParams?t.chatParams:$()(sessionStorage.getItem("chatParams"))},liveParams:function(t){return t.liveParams?t.liveParams:$()(sessionStorage.getItem("liveParams"))}},mutations:(d={},h()(d,v.b,function(t,e){t.chatParams=e,sessionStorage.setItem("chatParams",$()(e))}),h()(d,v.e,function(t,e){t.liveParams=e,sessionStorage.setItem("liveParams",$()(e))}),d)};a.a.use(m.a);var T=new m.a.Store({strict:!0,state:{num:3},getters:{isEven:function(t){return t.num%2==0}},mutations:{addNum:function(t,e){t.num+=e.num}},actions:{addNumAsync:function(t,e){var n=t.commit;setTimeout(function(){n("addNum",e)},2e3)}},modules:{app:g,a:b,b:y,login:_,liveMager:w,tokenMager:S}}),I=n(69),L=function(){return Promise.all([n.e(1),n.e(0),n.e(10)]).then(n.bind(null,289))},V=[{path:"/",name:"Layout",component:function(){return Promise.all([n.e(1),n.e(0),n.e(4)]).then(n.bind(null,295))},children:[{path:"/signUp/:id",name:"signUp",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,291))}},{path:"/subscribe/:id",name:"subscribe",component:function(){return Promise.all([n.e(1),n.e(0),n.e(2)]).then(n.bind(null,292))}},{path:"/guide/:id",name:"guide",component:function(){return Promise.all([n.e(1),n.e(0),n.e(2)]).then(n.bind(null,292))}},{path:"/success/:id",name:"success",component:function(){return Promise.all([n.e(1),n.e(0),n.e(6)]).then(n.bind(null,300))}},{path:"/checkState/:id",name:"checkState",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,298))}}]},{path:"/site/:id",name:"SiteTemplate",component:L},{path:"/sitePreview/:id",name:"SiteTemplate",component:L},{path:"/watch/:id",name:"watch",component:function(){return Promise.all([n.e(1),n.e(0),n.e(8)]).then(n.bind(null,290))}},{path:"/test",name:"Test",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,296))}},{path:"/kicked",name:"kicked",component:function(){return n.e(11).then(n.bind(null,297))}},{path:"/userInfo",name:"userInfo",component:function(){return Promise.all([n.e(1),n.e(12)]).then(n.bind(null,293))}},{path:"/testSuccess",name:"testSuccess",component:function(){return n.e(13).then(n.bind(null,294))}},{path:"/testFail",name:"testFail",component:function(){return n.e(14).then(n.bind(null,299))}}],P=n(71);a.a.use(I.a);var O=new I.a({base:"/m/",routes:V,mode:"history"}),N=new a.a;function D(t,e){t.query.wechatAuth?(sessionStorage.setItem("wechatAuth",t.query.wechatAuth),delete t.query.wechatAuth,t.query._pop&&(delete t.query._pop,t.meta.pop=!0),location.replace("/m"+t.fullPath.replace(/\?*wechatAuth=.+(&|$)/g,""))):e()}O.beforeResolve(function(t,e,n){sessionStorage.getItem("login")?D(t,n):N.$config({loading:!0,handlers:!0}).$get(P.a.GET_CONSUMERINFO).then(function(e){sessionStorage.setItem("login",$()(e.data)),D(t,n)}).catch(function(){D(t,n)})});var q=O,j=n(101),E=n.n(j);Date.prototype.format=function(t){if(this){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t}},String.prototype.formatDate=function(t){var e=this.replace(/[-\s]/g,":").split(":");return e[1]-=1,(new(Function.prototype.bind.apply(Date,[null].concat(E()(e))))).format(t)},String.prototype.gbLength=function(){for(var t=this.length,e=0,n=0;n<t;n++)0!=(65280&this.charCodeAt(n))?e+=1:e+=.5;return Math.ceil(e)},String.prototype.gbIndex=function(t){for(var e=this.length,n=0,i=0,a=0;a<e;a++){if(0!=(65280&this.charCodeAt(a))?n+=1:n+=.5,n===t){i=a;break}if(n>t){i=a-1;break}}return i},String.prototype.copyClipboard=function(t){var e=document.createElement("textarea");e.innerHTML=this,e.style.position="fixed",e.style.top="1000000000px",document.body.appendChild(e),e.select(),document.execCommand("copy")?(document.execCommand("copy"),e.blur(),t&&t("success")):t&&t("error");var n=setTimeout(function(){clearTimeout(n),document.body.removeChild(e)},500)};n(123);var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"},on:{"after-enter":t.afterEnter,"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"com-notification",style:t.style,on:{mouseenter:t.clearTask,mouseleave:t.createTask}},[n("div",{staticClass:"header"},[!this.$slots.header&&t.header?n("span",{staticClass:"title"},[t._v(t._s(t.header))]):t._e(),t._v(" "),t._t("header"),t._v(" "),n("i",{staticClass:"iconfont icon-close",on:{click:function(e){return e.preventDefault(),t.handleClose(e)}}})],2),t._v(" "),n("div",{staticClass:"content"},[this.$slots.default?t._e():n("span",[t._v(t._s(t.content))]),t._v(" "),t._t("default")],2)])])};M._withStripped=!0;var A={name:"ComNotification",props:{header:String,content:{type:String,required:!0}},data:function(){return{visible:!0}},created:function(){},methods:{handleClose:function(t){this.$emit("close")},afterEnter:function(){},afterLeave:function(){this.$emit("closed")},createTask:function(){},clearTask:function(){}},computed:{style:function(){return{}}}},H=(n(124),Object(r.a)(A,M,[],!1,null,"639450be",null));H.options.__file="src/components/common/notification/com.vue";var R=H.exports,U=n(12),F=n.n(U),W=n(16),B=n.n(W),G=n(51),z=n.n(G),X=n(72),J=n.n(X),Y=n(10),K=n.n(Y),Q={extends:R,props:{position:{type:String,default:"top-center"}},data:function(){return{verticalOffset:0,height:0,width:0,halfWidth:0,visible:!1,autoClose:3e3,timerId:0}},mounted:function(){var t=this;this.createTask(),setTimeout(function(){t.width=t.$el.offsetWidth,t.halfWidth=t.$el.offsetWidth/2,t.height=t.$el.offsetHeight},50)},beforeDestory:function(){this.clearTask()},methods:{createTask:function(){var t=this;this.autoClose&&(this.timerId=setTimeout(function(){t.$emit("close")},this.autoClose))},clearTask:function(){this.timerId&&clearTimeout(this.timerId)},afterEnter:function(){this.height=this.$el.offsetHeight}},computed:{style:function(){var t={position:"fixed"};switch(this.position){case"top-center":t.left="50%",t.marginLeft="-"+this.halfWidth+"px",t.top=this.verticalOffset+"px";break;case"bottom-center":t.left="50%",t.marginLeft="-"+this.halfWidth+"px",t.bottom=this.verticalOffset+"px";break;case"right-bottom":t.right="20px",t.bottom=this.verticalOffset+"px";break;case"right-top":t.right="20px",t.top=this.verticalOffset+"px";break;case"center":t.left="50%",t.top="50%",t.marginLeft="-"+this.halfWidth+"px",t.marginTop="-"+(this.height+this.verticalOffset)+"px";break;case"left-bottom":t.left="20px",t.bottom=this.verticalOffset+"px";break;case"left-top":t.left="20px",t.top=this.verticalOffset+"px"}return t}}},Z=a.a.extend(Q),tt=[],et=[],nt=1,it=!1,at=function(t){return new K.a(function(e){return setTimeout(e,t)})},ot=function(){var t=J()(z.a.mark(function t(){var e;return z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=et.shift())){t.next=9;break}return it=!0,e.vm.visible=!1,t.next=6,at(500);case 6:ot(),t.next=10;break;case 9:it=!1;case 10:case"end":return t.stop()}},t,void 0)}));return function(){return t.apply(this,arguments)}}(),st=function(t){var e=t.autoClose,n=t.close,i=t.closed,a=B()(t,["autoClose","close","closed"]),o=new Z({propsData:F()({},a),data:{autoClose:void 0===e?3e3:e}});o.id="notification_"+nt++,o.vm=o.$mount(),document.body.appendChild(o.vm.$el),o.vm.visible=!0;var s=0;return tt.map(function(t){s+=t.$el.offsetHeight+16}),s+=16,o.verticalOffset=s,tt.push(o),o.vm.$on("close",function(){n&&n(),et.push(o),it||ot()}),o.vm.$on("closed",function(){i&&i(),function(t){var e=tt.length,n=tt.findIndex(function(e){return t.id===e.id});if(tt.splice(n,1),e>1)for(var i=t.vm.height,a=n;a<e-1;a++)tt[a].verticalOffset=parseInt(tt[a].verticalOffset)-i-16}(o),document.body.removeChild(o.vm.$el),o.vm.$destroy()}),o.vm},rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"textarea"!==t.type?n("div",{staticClass:"com-input"},["search"===t.type?n("i",{staticClass:"iconfont icon-search"}):t._e(),t._v(" "),"checkbox"===t.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.innerValue,expression:"innerValue"}],class:{error:t.errorMsg},style:t.style,attrs:{placeholder:t.placeholder,disabled:t.disabled,type:"checkbox"},domProps:{checked:Array.isArray(t.innerValue)?t._i(t.innerValue,null)>-1:t.innerValue},on:{focus:t.focusHandle,blur:t.blurHandle,change:function(e){var n=t.innerValue,i=e.target,a=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.innerValue=n.concat([null])):o>-1&&(t.innerValue=n.slice(0,o).concat(n.slice(o+1)))}else t.innerValue=a}}}):"radio"===t.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.innerValue,expression:"innerValue"}],class:{error:t.errorMsg},style:t.style,attrs:{placeholder:t.placeholder,disabled:t.disabled,type:"radio"},domProps:{checked:t._q(t.innerValue,null)},on:{focus:t.focusHandle,blur:t.blurHandle,change:function(e){t.innerValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.innerValue,expression:"innerValue"}],class:{error:t.errorMsg},style:t.style,attrs:{placeholder:t.placeholder,disabled:t.disabled,type:t.inputType},domProps:{value:t.innerValue},on:{focus:t.focusHandle,blur:t.blurHandle,input:function(e){e.target.composing||(t.innerValue=e.target.value)}}}),t._v(" "),"search"===t.type?n("i",{directives:[{name:"show",rawName:"v-show",value:t.showDelete,expression:"showDelete"}],staticClass:"iconfont icon-delete",on:{click:t.empty}}):t._e(),t._v(" "),"password"===t.type||"password"===t.type&&"text"===t.inputType?n("i",{staticClass:"iconfont",class:{"icon-guanbi-yanjing":"password"===t.inputType,"icon-faxian-yanjing":"text"===t.inputType},on:{click:t.toggleShow}}):t._e(),t._v(" "),t.maxLength&&"input"===t.type?n("span",{staticClass:"limit"},[n("i",{staticClass:"length",style:{color:t.limitColor},domProps:{textContent:t._s(t.innerValue.gbLength())}},[t._v("0")]),t._v("/\n    "),n("i",[t._v(t._s(t.maxLength))])]):t._e(),t._v(" "),t.errorMsg?n("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg))]):t._e()]):n("div",{staticClass:"com-input area"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.innerValue,expression:"innerValue"}],ref:"tarea",class:{error:t.errorMsg},attrs:{placeholder:t.placeholder,rows:t.rows},domProps:{value:t.innerValue},on:{input:function(e){e.target.composing||(t.innerValue=e.target.value)}}}),t._v(" "),t.maxLength&&"textarea"===t.type?n("span",{staticClass:"limit area"},[n("i",{staticClass:"length",style:{color:t.limitColor},domProps:{textContent:t._s(t.innerValue.gbLength())}},[t._v("0")]),t._v("/\n    "),n("i",[t._v(t._s(t.maxLength))])]):t._e(),t._v(" "),t.errorMsg?n("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg))]):t._e()])};rt._withStripped=!0;var ct={name:"ComInput",props:{placeholder:String,value:String,type:{type:String,default:"input"},maxLength:Number,rows:{type:Number,default:2},autosize:Boolean,disabled:String,errorTips:String},data:function(){return{isMobile:!1,innerValue:"",showDelete:!1,inputType:"",offsetHeight:0,errorMsg:"",limitColor:"#555"}},created:function(){this.inputType=this.getType()},mounted:function(){this.$refs.tarea&&(this.offsetHeight=this.$refs.tarea.offsetHeight-this.$refs.tarea.clientHeight),this.innerValue=this.value,this.inputType=this.getType()},methods:{focusHandle:function(t){this.showDelete=!0,this.$emit("focus",t)},blurHandle:function(t){this.hideDelete(),this.$emit("blur",t)},empty:function(){this.innerValue=""},toggleShow:function(){"password"===this.inputType?this.inputType="text":this.inputType="password"},hideDelete:function(){var t=this;setTimeout(function(){t.showDelete=!1},200)},getType:function(){var t="";switch(this.type){case"password":t="password";break;case"mobile":this.isMobile=!0,t="text";break;default:t="text"}return t}},watch:{innerValue:function(t){this.isMobile?(this.innerValue=t.replace(/\D/g,""),this.maxLength&&t.length>this.maxLength&&(this.innerValue=t.substring(0,this.maxLength))):this.maxLength&&t.gbLength()>this.maxLength&&(this.innerValue=t.substring(0,t.gbIndex(this.maxLength)+1)),"textarea"===this.type&&this.autosize&&(this.$refs.tarea.style.height="auto",this.$refs.tarea.style.height=this.$refs.tarea.scrollHeight+this.offsetHeight+"px"),0===t.gbLength()?this.limitColor="#555":this.limitColor="#4b5afe",this.$emit("update:value",this.innerValue),this.$emit("input",this.innerValue)},value:{handler:function(t){this.innerValue=t,this.$emit("change")},immediate:!0},type:{handler:function(t){this.inputType=this.getType()},immediate:!0},errorTips:{handler:function(t){this.errorMsg=t},immediate:!0}},computed:{style:function(){var t={};return"search"===this.type?(t.paddingLeft="36px",t.paddingRight="30px"):this.maxLength?t.paddingRight="45px":"password"===this.type&&(t.paddingRight="30px"),t}}},lt=(n(141),Object(r.a)(ct,rt,[],!1,null,"2c8862b0",null));lt.options.__file="src/components/common/input/com.vue";var ut=lt.exports,dt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"marquee-container"},[e("div",{ref:"target",staticClass:"content",domProps:{innerHTML:this._s(this.content)}})])};dt._withStripped=!0;var pt={name:"ComMarquee",props:{times:{type:Number,default:3},content:{type:String,default:""}},data:function(){return{offsetX:0,offsetWidth:0,currentTimes:0,animationId:0}},mounted:function(){},methods:{doLoop:function(){this.currentTimes<this.times?(this.offsetX-=1,this.$refs.target.style.cssText="transform: translateX("+this.offsetX+"px);",this.offsetX<this.offsetWidth&&(this.offsetX=0,this.currentTimes++),this.animationId=window.requestAnimationFrame(this.doLoop)):(this.$emit("over"),this.offsetX=0,this.currentTimes=0)}},watch:{content:{handler:function(t){var e=this;t&&this.$nextTick(function(){window.cancelAnimationFrame(e.animationId),e.offsetWidth=-(e.$refs.target.offsetLeft+e.$refs.target.offsetWidth),e.currentTimes=0,e.offsetX=0,e.doLoop()})},immediate:!0}}},mt=(n(142),Object(r.a)(pt,dt,[],!1,null,"7d4a7c00",null));mt.options.__file="src/components/common/marquee/com.vue";var ft=mt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("transition",{attrs:{name:"fade"}},[n("div",{class:["ve-message-box__wrapper"]},[n("div",{staticClass:"ve-message-box",style:{width:t.width},attrs:{type:t.type}},[n("div",{staticClass:"ve-message-box__header"},["prompt"==t.type?n("span",{staticClass:"prompt-title"},[t._v(t._s(t.header))]):t._e(),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.handleClick(t.action.cancel)}}},[n("i",{staticClass:"iconfont icon-close"})])]),t._v(" "),n("div",{staticClass:"ve-message-box__container"},[!this.$slots.header&&t.header&&"prompt"!==t.type?n("div",{staticClass:"ve-message-box__title"},[t._v(t._s(t.header))]):t._e(),t._v(" "),t._t("header"),t._v(" "),this.$slots.default&&0!=this.$slots.default.length||!t.content?t._e():n("div",{staticClass:"ve-message-box__content"},[t._v("\n          "+t._s(t.content)+"\n        ")]),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"ve-message-box__btns"},[this.$slots.bottom?t._e():n("div",[n("button",{staticClass:"button--primary",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.handleClick(t.action.confirm)}}},[n("span",[t._v(t._s(t.confirmText)+"\n                "),t.autoClose?n("span",{staticClass:"auto-close"},[t._v("("+t._s(t.closeTime)+"s)")]):t._e()])]),t._v(" "),t.cancelText?n("button",{staticClass:"button--cancel",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.handleClick(t.action.cancel)}}},[n("span",[t._v(t._s(t.cancelText))])]):t._e()]),t._v(" "),t._t("bottom")],2)],2)]),t._v(" "),n("div",{staticClass:"ve-modal",on:{click:function(e){e.preventDefault(),t.handleClick(t.action.cancel)}}})])]):t._e()};ht._withStripped=!0;var vt={name:"message-box",data:function(){return{visible:!0,closeTime:0,intervalTime:0,action:{cancel:"cancel",confirm:"confirm"}}},props:{header:{type:String,default:"提示"},content:{type:String,default:""},confirmText:{type:String,default:"确定"},cancelText:{type:String,default:""},autoClose:{type:Number,default:0},width:{type:String,default:"80%"},type:{type:String,default:""}},watch:{autoClose:{handler:function(t){var e=this;t&&(this.closeTime=t,clearInterval(this.intervalTime),this.intervalTime=setInterval(function(){e.closeTime--,e.closeTime||(clearInterval(e.intervalTime),e.$emit("handleClick",{action:"cancel"}))},1e3))},immediate:!0}},destroyed:function(){clearInterval(this.intervalTime)},methods:{handleClick:function(t){this.$emit("handleClick",{action:t})}}},gt=(n(143),Object(r.a)(vt,ht,[],!1,null,"429413e3",null));gt.options.__file="src/components/common/message-box/com.vue";var bt=gt.exports,yt=a.a.extend(bt),_t=function(t){var e=t.handleClick,n=B()(t,["handleClick"]),i=new yt({propsData:F()({},n)});return i.vm=i.$mount(),document.body.appendChild(i.vm.$el),i.vm.visible=!0,i.vm.$on("handleClick",function(t){e&&e(t),document.body.removeChild(i.vm.$el),i.vm.$destroy()}),i.vm},xt=_t,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"ve-message-box__wrapper"},[n("div",{staticClass:"ve-message-box"},[n("div",{staticClass:"ve-message-box__header"},[n("div",{staticClass:"ve-message-box__title"},[t._v("邀请")]),t._v(" "),t._t("header"),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.close()}}},[n("i",{staticClass:"iconfont icon-close"})])],2),t._v(" "),n("div",{staticClass:"ve-message-box__content"},[n("p",{staticStyle:{position:"relative"}},[t._v("\n          分享链接给朋友\n          "),n("transition",{attrs:{name:"success"}},[t.isSuccess?n("i",{staticClass:"iconfont icon-successful"}):t._e()])],1),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.linkSrc,expression:"linkSrc"}],ref:"linkInput",domProps:{value:t.linkSrc},on:{input:function(e){e.target.composing||(t.linkSrc=e.target.value)}}}),t._v(" "),n("button",{staticClass:"copy-link",attrs:{type:"button"},on:{click:t.copyLink}},[t._v("复制")])]),t._v(" "),n("p",[n("button",{staticClass:"share-btn weibo",attrs:{type:"button"},on:{click:function(e){e.stopPropagation(),t.openLink(t.weiboLink)}}},[n("i",{staticClass:"iconfont icon-weibo"})]),t._v(" "),n("button",{staticClass:"share-btn wxchart",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.shareWx(e)}}},[n("i",{staticClass:"iconfont icon-weixin"})]),t._v(" "),n("button",{staticClass:"share-btn qq",attrs:{type:"button"},on:{click:function(e){e.stopPropagation(),t.openLink(t.qqLink)}}},[n("i",{staticClass:"iconfont icon-10"})])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.qrCode?n("div",[n("img",{staticStyle:{display:"block",margin:"10px auto"},attrs:{src:t.qrCode,alt:"二维码"}}),t._v(" "),n("p",[t._v("打开微信，点击底部的“发现”，使用 “扫一扫” 即可将网页分享到我的朋友圈")])]):t._e()])],1)]),t._v(" "),n("div",{staticClass:"ve-modal",on:{click:function(e){e.preventDefault(),t.close()}}})])]):t._e()};Ct._withStripped=!0;var wt={name:"Share",data:function(){return{visible:!0,isSuccess:!1,linkSrc:"",qrCode:"",qqLink:"",weiboLink:""}},props:{shareLink:{type:Object,default:{link:"",data:{title:"-",summary:"-",desc:"-",pic:"-"}}}},watch:{shareLink:{handler:function(t){this.linkSrc=t.link,this.qqLink="https://connect.qq.com/widget/shareqq/index.html?url="+t.link+"&title="+t.data.title+"&summary="+t.data.summary+"&desc="+t.data.desc+"&pic="+t.data.pic,this.weiboLink="http://service.weibo.com/share/share.php?url="+t.link+"&title="+t.data.desc+"&pic="+t.data.pic+"&appkey=&searchPic=false"},immediate:!0,deep:!0}},methods:{close:function(){this.$emit("close")},copyLink:function(){var t=this;if(this.$refs.linkInput.select(),document.execCommand("copy")){document.execCommand("copy"),this.$refs.linkInput.blur(),this.isSuccess=!0;var e=setTimeout(function(){t.isSuccess=!1,clearTimeout(e)},500)}},shareWx:function(){this.qrCode="//aliqr.e.vhall.com/qr.png?t="+this.shareLink.link},openLink:function(t){console.log(t),window.open(t)}}},kt=(n(144),Object(r.a)(wt,Ct,[],!1,null,"732a3c86",null));kt.options.__file="src/components/common/share/com.vue";var $t=kt.exports,St=a.a.extend($t),Tt=function(t){var e=t.close,n=B()(t,["close"]),i=new St({propsData:{shareLink:F()({},n)}});return i.vm=i.$mount(),document.body.appendChild(i.vm.$el),i.vm.visible=!0,i.vm.$on("close",function(t){e&&e(t),document.body.removeChild(i.vm.$el),i.vm.$destroy()}),i.vm},It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-upload",on:{click:t.fileSelect}},[t._t("default"),t._v(" "),this.$slots.default?t._e():n("button",{staticClass:"upload-btn"},[n("i",{staticClass:"iconfont icon-upload"}),n("span",{staticClass:"upload-btn-text"},[t._v(t._s(t.uploadTxt))])]),t._v(" "),n("input",{ref:"upload",staticClass:"com-upload-file",attrs:{type:"file",multiple:t.multiple,accept:t.acceptStr},on:{change:t.startUpload}})],2)};It._withStripped=!0;var Lt=n(102),Vt=n.n(Lt),Pt=n(70),Ot=n.n(Pt),Nt=n(103),Dt=n.n(Nt),qt={jpeg:"image/jpeg",jpg:"image/jpeg",png:"image/png",bmp:"image/bmp",gif:"image/gif",doc:"application/msword",docx:"application/msword",xls:"application/vnd.ms-excel",xlsx:"application/vnd.ms-excel",pdf:"application/pdf",ppt:"application/mspowerpoint",mp4:"video/mp4",flv:"video/x-flv",m3u8:"application/x-mpegURL",mov:"video/quicktime",avi:"video/x-msvideo",wmv:"video/x-ms-wmv"},jt={name:"ComUpload",props:{accept:{type:String,default:""},actionUrl:{type:String,required:!0},inputName:{type:String,default:"file"},exParams:{type:Object,default:function(){return{}}},uploadTxt:{type:String,default:"Upload"},timeout:{type:Number,default:3e4},credentials:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},currentCount:{type:Number,default:0},totalCount:{type:Number,default:1},fileSize:{type:Number,default:0}},data:function(){return{current:"",queue:[],list:[],error:[]}},methods:{fileSelect:function(){this.$refs.upload.value="",this.$refs.upload.click()},startUpload:function(t){var e=this;this.current="",this.list=[],this.queue=[],this.error=[];var n=1e3*this.fileSize;Array.prototype.forEach.call(this.$refs.upload.files,function(t,i){t.size>n?e.error.push({state:"size-limit",name:t.name,size:t.size}):-1===e.acceptStr.indexOf(t.type)?e.error.push({state:"type-limit",name:t.name,type:t.type}):(e.list.push({name:t.name,size:t.size}),e.queue.push(t))}),this.error.length>0?this.$emit("error",{code:503,data:this.error}):this.currentCount+this.list.length>this.totalCount?this.$emit("error",{code:502}):(this.$emit("selected",{data:this.list}),this.queue.length>0&&this.doWork())},doWork:function(){var t=this.queue.shift();if(t){this.current=t.name;var e=new FormData;e.append(""+this.inputName,t);var n=!0,i=!1,a=void 0;try{for(var o,s=Ot()(Vt()(this.exParams));!(n=(o=s.next()).done);n=!0){var r=o.value,c=Dt()(r,2),l=c[0],u=c[1];e.append(l,u)}}catch(t){i=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}this.doUpload(e)}else this.current="",this.$emit("over")},doUpload:function(t){var e=this,n=new XMLHttpRequest;n.open("post",this.actionUrl),n.timeout=this.timeout,this.credentials&&(n.withCredentials=!0),n.upload.onprogress=function(t){t.lengthComputable&&e.$emit("progress",{name:e.current,loaded:t.loaded,total:t.total,percent:(t.loaded/t.total*100).toFixed(2)+"%"})},n.onload=function(t){e.$emit("load",{name:e.current,data:n.responseText}),e.doWork()},n.ontimeout=function(t){e.$emit("error",{name:e.current,code:501,error:t})},n.onerror=function(t){e.$emit("error",{name:e.current,code:501,error:t})},n.send(t)}},computed:{acceptStr:function(){var t="",e=this.accept.split("|");return e.length>0?e.forEach(function(e){t+=qt[e]+","}):t="*",t}}},Et=(n(153),Object(r.a)(jt,It,[],!1,null,"27f737b7",null));Et.options.__file="src/components/common/upload/com.vue";var Mt=Et.exports,At=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"com-notification",style:this.style},[e("div",{staticClass:"inner-wrap"},[e("i",{staticClass:"iconfont icon-Loading"}),this._v(" "),e("span",{staticClass:"loading-txt"},[this._v(this._s(this.loadingText))])])])};At._withStripped=!0;var Ht={name:"ComLoading",props:{loadingText:{type:String,default:"Loading"},relative:Boolean},data:function(){return{visible:!0}},computed:{style:function(){var t={};return this.relative&&(t.position="absolute"),t}}},Rt=(n(154),Object(r.a)(Ht,At,[],!1,null,"4b4d011a",null));Rt.options.__file="src/components/common/loading/com.vue";var Ut=Rt.exports,Ft={bind:function(t,e,n){},inserted:function(t,e,n){var i=t.getAttribute("com-loading-text"),o=new(a.a.extend(Ut))({propsData:{loadingText:void 0===i?"Loading":i,relative:!0},data:{visible:e.value}});o.vm=o.$mount(),t.style.position="relative",t.appendChild(o.vm.$el),t.instance=o},componentUpdated:function(t,e,n){t.instance.vm.visible=e.value},unbind:function(t,e,n){t.removeChild(t.instance.vm.$el),t.instance.vm.$destroy()}},Wt=a.a.extend(Ut),Bt=null,Gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=!0,n=void 0,i=void 0;if(!1===t?e=!1:(n=t.loadingText,i=t.target),!Bt&&e){(Bt=new Wt({propsData:{loadingText:void 0===n?"Loading":n,relative:!!i}})).vm=Bt.$mount();var a=document.body;setTimeout(function(){i&&document.querySelector(i)&&(a=document.querySelector(i)),a.appendChild(Bt.vm.$el)},0)}else Bt&&(Bt.vm.visible=e);return Bt?Bt.vm:null},zt=Gt,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"com-dialog",on:{click:function(e){return e.preventDefault(),t.wrapClose(e)}}},[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.innerVisible,expression:"innerVisible"}],staticClass:"dialog-wrap",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"dialog-header",class:{"align-center":t.center}},[!t.$slots.header&&t.header?n("span",{staticClass:"title"},[t._v(t._s(t.header))]):t._e(),t._v(" "),t._t("header"),t._v(" "),n("i",{staticClass:"iconfont icon-close",on:{click:function(e){return e.preventDefault(),t.handleClose(e)}}})],2),t._v(" "),n("div",{staticClass:"dialog-body"},[t.$slots.default?t._e():n("span",[t._v(t._s(t.content))]),t._v(" "),t._t("default")],2),t._v(" "),n("div",{staticClass:"dialog-footer",class:{"align-center":t.center}},[t._t("footer")],2)])])],1)};Xt._withStripped=!0;var Jt={name:"ComDialog",props:{header:String,content:String,center:Boolean,visible:Boolean,beforeClose:Function,dialogClose:Boolean},data:function(){return{innerVisible:!1}},methods:{wrapClose:function(){this.dialogClose&&this.handleClose()},handleClose:function(){"function"==typeof this.beforeClose?this.beforeClose(this.hide):this.hide()},hide:function(){this.innerVisible=!1,this.$emit("update:visible",!1),this.$emit("close")}},watch:{visible:{handler:function(t){var e=this;t&&setTimeout(function(){e.innerVisible=t},50)},immediate:!0}}},Yt=(n(155),Object(r.a)(Jt,Xt,[],!1,null,"afae2004",null));Yt.options.__file="src/components/common/dialog/com.vue";var Kt=Yt.exports,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"com-button",class:[{primary:"primary"===t.type},{loading:t.loading||t.disabled}],style:t.styles,attrs:{disabled:t.loading||t.disabled},on:{click:t.handleClick}},[t.loading?n("i",{staticClass:"iconfont icon-Loading"}):t._e(),t._v(" "),t._t("default")],2)};Qt._withStripped=!0;var Zt={name:"ComButton",props:{type:String,loading:Boolean,disabled:Boolean,styles:Object},methods:{handleClick:function(t){this.$emit("click",t)}}},te=(n(156),Object(r.a)(Zt,Qt,[],!1,null,"59c58fe8",null));te.options.__file="src/components/common/button/com.vue";var ee=te.exports,ne={props:{panels:{type:Array,required:!0},currentName:[String,Number]},methods:{handleClick:function(t){this.$parent.change(t)}},render:function(){var t=this,e=arguments[0],n=this.panels.map(function(n,i){var a=n.$slots.label||e("span",[n.label]),o={"tab-item":!0,active:t.currentName===n.index};return e("li",{class:o,on:{click:function(){t.handleClick(n.index)}}},[a])});return e("ul",{class:"tab-header-wrap"},[n])}},ie=(n(157),Object(r.a)(ne,void 0,void 0,!1,null,"208cb1d6",null));ie.options.__file="src/components/common/tabs/nav.vue";var ae={name:"ComTabs",components:{ComNav:ie.exports},props:{position:{type:String,default:""},disabled:Boolean,type:{type:String,default:""},value:{type:[String,Number],required:!0}},data:function(){return{panes:[]}},methods:{change:function(t){this.disabled||(this.$emit("update:value",t),this.$emit("change",t))}},updated:function(){this.$refs.nav.$forceUpdate()},render:function(){var t=arguments[0],e=t("div",{class:"tab-header"},[t("com-nav",{props:{panels:this.panes,currentName:this.value},ref:"nav"})]),n=t("div",{class:"tab-container"},[this.$slots.default]),i={"com-tabs":!0};return this.position&&(i[this.position]=!0),this.type&&(i[this.type]=!0),t("div",{class:i},[[e,n]])}},oe=(n(158),Object(r.a)(ae,void 0,void 0,!1,null,"41db4adb",null));oe.options.__file="src/components/common/tabs/tabs.vue";var se=oe.exports,re={name:"ComTab",props:{index:{required:!0,type:[Number,String]},label:{type:String,default:"tab"}},data:function(){return{width:0,height:0,offsetLeft:0,offsetTop:0}},mounted:function(){this.$parent.panes.push(this)},render:function(){return(0,arguments[0])("div",{class:"tab-content",directives:[{name:"show",value:this.index===this.$parent.value}]},[this.$slots.default])}},ce=(n(159),Object(r.a)(re,void 0,void 0,!1,null,"5cd83f48",null));ce.options.__file="src/components/common/tabs/tab.vue";var le=ce.exports,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"video-modal-box"},[n("div",{staticClass:"video-modal",on:{click:t.closePlay}}),t._v(" "),n("div",{staticClass:"video-content"},[this.outLineLink?n("div",{staticClass:"iframe-box"},[n("div",{staticStyle:{width:"100%",height:"100%"},domProps:{innerHTML:t._s(this.outLineLink)}})]):!this.recordId||t.playMsg?n("span",[t._v(t._s(t.playMsg||"暂无视频"))]):n("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.myVideoId}})])])]):t._e()};ue._withStripped=!0;var de={name:"ve-play-back",data:function(){return{playMsg:"",visible:!1,myVideoId:"myVideo_"+Math.random()}},props:{app_id:String,accountId:"",token:String,recordId:String,outLineLink:String},watch:{sdk:{handler:function(){this.initPage()},immediate:!0}},methods:{closePlay:function(){this.$emit("close")},initPage:function(){var t=this;this.$nextTick(function(){t.recordId&&(window.Vhall.ready(function(){window.VhallPlayer.init({recordId:t.recordId,type:"vod",videoNode:t.myVideoId,complete:function(){window.VhallPlayer.play()},fail:function(e){t.playMsg=e+"..."}})}),window.Vhall.config({appId:t.app_id,accountId:t.accountId,token:t.token}))})}}},pe=(n(160),Object(r.a)(de,ue,[],!1,null,"63707f58",null));pe.options.__file="src/components/common/play-video/com.vue";var me=pe.exports,fe=a.a.extend(me),he=function(t){var e=t.handleClick,n=B()(t,["handleClick"]),i=new fe({propsData:F()({},n)});return i.vm=i.$mount(),document.body.appendChild(i.vm.$el),i.vm.visible=!0,i.vm.$on("close",function(t){e&&e(t),document.body.removeChild(i.vm.$el),i.vm.$destroy()}),i.vm},ve=n(73),ge=n.n(ve),be=n(74),ye=n.n(be),_e=n(49),xe=n.n(_e),Ce=n(104),we=n.n(Ce),ke={timeout:2e4,responseType:"json",withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}};xe.a.interceptors.request.use(function(t){return t},function(t){return K.a.reject(t)}),xe.a.interceptors.response.use(function(t){return zt(!1),200!==t.data.code?K.a.reject(t.data):t},function(t){return K.a.reject(t)});var $e=function(){function t(e){ge()(this,t),this.target=e,this.config={},this.options={}}return ye()(t,[{key:"$config",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.config=t,this.config.headers&&(this.options.headers=this.config.headers),this}},{key:"$get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.options.method="get",this.options.params=e,this.ajax(t)}},{key:"$post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.options.method="post",this.options.data=we.a.stringify(e),this.ajax(t)}},{key:"ajax",value:function(t){var e=this;this.options.url="/m/api"+t;var n=C()({},ke,this.options);return this.config.loading&&zt(!0),xe()(n).then(function(t){return zt(!1),t.data}).catch(function(t){if(zt(!1),!0===e.config.handlers)return K.a.reject(t);if("[object Array]"===Object.prototype.toString.call(e.config.handlers)&&~e.config.handlers.indexOf(t.code))return K.a.reject(t);if(10030===t.code)e.target.$router.replace("/login");else{var n=t.msg||"网络异常";xt({header:"提示",content:n,autoClose:10,confirmText:"知道了"})}return new K.a(function(){})})}}]),t}();a.a.use(function(t){t.component(R.name,R),t.prototype.$toast=st}),a.a.use(function(t){t.component(ut.name,ut)}),a.a.use(function(t){t.component(ft.name,ft)}),a.a.use(function(t){t.component(bt.name,bt),t.prototype.$messageBox=_t}),a.a.use(function(t){t.component($t.name,$t),t.prototype.$share=Tt}),a.a.use(function(t){t.component(Mt.name,Mt)}),a.a.use(function(t){t.component(Ut.name,Ut),t.prototype.$loading=Gt,t.directive(Ut.name,Ft)}),a.a.use(function(t){t.component(Kt.name,Kt)}),a.a.use(function(t){t.component(ee.name,ee)}),a.a.use(function(t){t.component(se.name,se),t.component(le.name,le)}),a.a.use(function(t){t.component(me.name,me),t.prototype.$playVideo=he}),a.a.use(function(t){t.prototype.$config=function(t){return new $e(this).$config(t)},t.prototype.$get=function(t,e){return new $e(this).$get(t,e)},t.prototype.$post=function(t,e){return new $e(this).$post(t,e)}}),a.a.config.debug=!0,a.a.config.devtools=!0,a.a.config.productionTip=!0,a.a.prototype.$imgHost="//static.vhallyun.com",a.a.filter("isEmpty",function(t,e){return e=e||"-",t||e}),new a.a({el:"#root",router:q,store:T,render:function(t){return t(p)}});var Se=window.Vhall.ready,Te=!1,Ie=[];window.Vhall.ready=function(t){Te?t():Ie.push(t)},Se(function(){for(var t,e=0;t=Ie[e++];)t();Ie=[],Te=!0});var Le=window.Vhall.config,Ve=!1;window.Vhall.config=function(t){Ve||(Ve=!0,Le(t))}},3:function(t,e,n){"use strict";n.d(e,"f",function(){return i}),n.d(e,"i",function(){return a}),n.d(e,"g",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return r}),n.d(e,"e",function(){return c}),n.d(e,"j",function(){return l}),n.d(e,"h",function(){return u}),n.d(e,"a",function(){return d}),n.d(e,"d",function(){return p});var i="LOADING_STATUS",a="Update_Is_Login",o="LOGIN_INFO",s="EMAIL_INFO",r="CHAT_PARAMS",c="LIVE_PARAMS",l="VIDEO_DEVICE",u="ROOM_PAAS",d="ACTIVITY_INFO",p="JOIN_INFO"},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},71:function(t,e,n){"use strict";e.a={GET_USERREGACTIVITY:"/frontend/user/reg-activity",GET_JOININFO:"/frontend/user/join-info",GET_CONSUMERINFO:"/user/consumer-user/info",POST_MOBILELOGIN:"/user/consumer-user/mobile-login",GET_VISITOR_INFO:"/frontend/user/visitor-info"}}},[[204,15,1]]]);
//# sourceMappingURL=index.b33cf734.js.map