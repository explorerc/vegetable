(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{183:function(e,t,i){"use strict";t.a={POST_SUBSCRIBE:"/frontend/user/order-activity",GET_LIVEINFO:"/frontend/live/info",GET_SHAREINFO:"/frontend/share/info",GET_QUESTIONINFO:"/frontend/question/info",POST_QUESTIONINFO:"/frontend/user/apply-activity",GET_CREATEACCESSTOKEN:"/common/paas/create-access-token",GET_ONLINENUM:"/frontend/channel/get-online-num",GET_SHARESIGN:"/common/wechat/get-share-sign",GET_SDKTOKEN:"/frontend/live/sdk-token",GET_SEND:"/index/send",GET_SENDANNOUNCEMENT:"/initiator/channel/send-announcement",POST_GAG:"/initiator/user/gag",POST_GAGALL:"/initiator/user/gag-all",POST_KICK:"/initiator/user/kick",POST_EMAILSUBSCRIBE:"/frontend/user/email-subscribe",GET_MESSAGELIST:"/common/paas/message-list",GET_CAPTCHAID:"/common/message/get-captchaid",GET_CODE:"/common/message/send-code",GET_TEMPLATE:"/frontend/live/template",GET_DEFAULEREPLAY:"/frontend/replay/default-replay",GET_WARMINFO:"/manage/warm-up-manage/get"}},188:function(e,t,i){},189:function(e,t,i){},194:function(e,t,i){"use strict";var s=i(188);i.n(s).a},196:function(e,t,i){"use strict";var s=i(189);i.n(s).a},204:function(e,t,i){},226:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"input-form"},[i("label",{staticClass:"v-label"},[e._v("\n    "+e._s(e.label)+"\n  ")]),e._v(" "),i("com-input",{class:{warning:e.errorMsg},attrs:{value:e.val,placeholder:e.placeholder,type:"input","max-length":e.maxLength,"error-tips":e.errorMsg,disabled:e.isDisabled},on:{"update:value":function(t){e.val=t},focus:e.inputFocus}})],1)};s._withStripped=!0;var n={props:{label:String,inputVal:String,placeholder:String,errorMsg:String,maxLength:Number,isDisabled:String},data:()=>({val:""}),mounted(){},components:{},created(){},watch:{val:{handler(e){this.$emit("update:inputVal",e)},immediate:!0},inputVal:{handler(e){this.val=e},immediate:!0}},methods:{inputFocus(){this.$emit("update:errorMsg","")}}},o=(i(194),i(1)),r=Object(o.a)(n,s,[],!1,null,"5a5e988b",null);r.options.__file="src/components/common/signup/com-input.vue";t.a=r.exports},227:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-vercode"},[i("div",{attrs:{id:"captcha"}}),e._v(" "),i("div",{staticClass:"v-input-from"},[i("com-input",{class:{warning:e.errorMsg},attrs:{value:e.val,placeholder:e.placeholder,type:"input","max-length":e.maxLength,"error-tips":e.errorMsg,codeType:e.codeType},on:{"update:value":function(t){e.val=t},blur:e.pushCode,focus:e.inputFocus}}),e._v(" "),i("a",{staticClass:"v-getcode",class:{prohibit:e.isProhibit},attrs:{href:"javascript:;"},on:{click:function(t){e.getCode()}}},[e._v("获取验证码"),i("span",{directives:[{name:"show",rawName:"v-show",value:e.isSend,expression:"isSend"}],staticClass:"v-getcode-span"},[e._v("("),i("em",[e._v(e._s(e.second))]),e._v("s)")])])],1)])};s._withStripped=!0;var n=i(183),o={props:{code:String,phone:String,isGetCode:Boolean,placeholder:String,maxLength:Number,errorMsg:String,codeType:String},data:()=>({key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,val:""}),mounted(){console.log(this.phone)},components:{},created(){this.$get(n.a.GET_CAPTCHAID).then(e=>{let t=this;this.key=e.data,window.initNECaptcha({captchaId:t.key,element:"#captcha",mode:"float",width:"100%",onReady:function(e){},onVerify:function(e,i){i&&(t.phoneKey=i.validate,t.isImg=!0),e&&console.log(e)},onError:function(){}},function(e){t.cap=e})})},destroyed(){clearInterval(this.timerr)},watch:{phone:function(e){this.isGetCodePermission(!0)},isImg:function(e){this.isGetCodePermission()},isGetCode:function(){this.isGetCode&&(clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh())},val:{handler(e){this.$emit("update:code",e)},immediate:!0}},methods:{getCode(){if(this.isProhibit)return!1;let e={mobile:this.phone,type:this.codeType,captcha:this.phoneKey,__errHandler:!0};this.$config({handlers:!0}).$get(n.a.GET_CODE,e).then(e=>{this.isSend=!0,this.isProhibit=!0,clearInterval(this.timerr),this.timerr=setInterval(()=>{this.second--,this.second<=0&&(clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="",this.cap.refresh())},1e3)}).catch(e=>{10050===e.code?this.$emit("update:errorMsg","验证码输入过于频繁"):200!==e.code&&this.$emit("update:errorMsg",e.msg)})},isGetCodePermission(e){this.isImg&&this.verificationPhone()?(this.isProhibit=!1,this.second>0&&(this.isSend=!1,this.isProhibit=!1,this.second=60,this.mobileOpacity=1,clearInterval(this.timerr),e&&(this.isImg=!1,this.phoneKey="",this.cap.refresh()))):this.isProhibit=!0},pushCode(){this.$emit("inputFocus",this.code)},inputFocus(){this.$emit("update:errorMsg","")},verificationPhone(){return console.log(this.phone),!(""===this.phone||!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phone))}}},r=(i(196),i(1)),a=Object(r.a)(o,s,[],!1,null,"15c0d488",null);a.options.__file="src/components/common/signup/com-code.vue";t.a=a.exports},241:function(e,t,i){"use strict";var s=i(204);i.n(s).a},292:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-checkState"},[e.user.isDisabled?i("com-input",{attrs:{inputVal:e.user.phone,placeholder:"请输入手机号",maxLength:11,isDisabled:"disabled",errorMsg:e.phoneError},on:{"update:inputVal":function(t){e.$set(e.user,"phone",t)},"update:errorMsg":function(t){e.phoneError=t}}}):i("com-input",{attrs:{inputVal:e.user.phone,placeholder:"请输入手机号",maxLength:11,errorMsg:e.phoneError},on:{"update:inputVal":function(t){e.$set(e.user,"phone",t)},"update:errorMsg":function(t){e.phoneError=t}}}),e._v(" "),e.user.isDisabled?e._e():i("com-verification-code",{attrs:{phone:e.user.phone,inputVal:e.code,code:e.code,isGetCode:e.isGetCode,placeholder:"输入验证码",maxLength:6,errorMsg:e.codeError,codeType:"CONSUMER_USER_LOGIN"},on:{"update:inputVal":function(t){e.code=t},"update:code":function(t){e.code=t},inputFocus:function(t){e.getCode(t)},"update:errorMsg":function(t){e.codeError=t}}}),e._v(" "),i("button",{staticClass:"primary-button",on:{click:e.submit}},[e._v("提交")])],1)};s._withStripped=!0;var n=i(11),o=i.n(n),r=i(226),a=i(227),c=i(183),h=i(58),d={data:()=>({code:"",isGetCode:!0,activity:{viewCondition:"APPOINT",status:""},user:{phone:"",isApplay:!1,isOrder:!1,isDisabled:!1},codeError:"",phoneError:""}),mounted(){},components:{"com-input":r.a,"com-verification-code":a.a},created(){this.getActivity();let e=JSON.parse(sessionStorage.getItem("login"));e&&(this.user.phone=e.mobile,this.user.phone&&(this.user.isDisabled=!0))},watch:{},methods:{getCode(e){this.code=e},subScribe(){let e={activityId:this.$route.params.id};this.$config({handlers:!0}).$post(c.a.POST_SUBSCRIBE,e).then(e=>{this.$router.replace("/guid/"+this.$route.params.id)}).catch(e=>{this.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:e=>{"cancel"===e.action||e.action}})})},submit(){return this.verification(this.user.phone,"Y","mobile")?this.user.isDisabled||this.verification(this.code,"Y","integer")?void(this.user.isOrder||this.user.isDisabled?this.subScribe():this.$config({handlers:!0}).$post(h.a.POST_MOBILELOGIN,{mobile:this.user.phone,code:this.code,wechatAuth:sessionStorage.getItem("wechatAuth")}).then(e=>{e.data?(sessionStorage.setItem("login",o()(e.data)),this.$config({handlers:!0}).$get(c.a.GET_LIVEINFO,{activityId:this.$route.params.id}).then(e=>{e.data.joinInfo.isOrder?this.$router.replace("/guid/"+this.$route.params.id):this.subScribe()}).catch(e=>{this.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:e=>{"cancel"===e.action||e.action}})})):(this.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:e=>{"cancel"===e.action||e.action}}),sessionStorage.removeItem("login"),sessionStorage.removeItem("wechatAuth"))})):(this.codeError="请输入正确验证码",!1):(this.phoneError="请正确填写手机号",!1)},verification(e,t,i){let s=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,n=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,o=/^[0-9]*$/;if("mobile"===i&&(e=""===this.user.phone?e:this.user.phone),""===e){if("Y"===t)return!1}else switch(i){case"mobile":return e=""===this.user.phone?e:this.user.phone,s.test(e);case"integer":return o.test(e);case"email":return n.test(e)}return!0},getActivity(){this.$config({handlers:!0}).$get(c.a.GET_LIVEINFO,{activityId:this.$route.params.id}).then(e=>{this.activity.viewCondition=e.data.activity.viewCondition,this.activity.status=e.data.activity.status,this.user.isApplay=e.data.joinInfo.isApplay,this.user.isOrder=e.data.joinInfo.isOrder})}}},u=(i(241),i(1)),l=Object(u.a)(d,s,[],!1,null,"40b23aa5",null);l.options.__file="src/pages/guide/check-state.vue";t.default=l.exports}}]);
//# sourceMappingURL=6.359f2c19.js.map