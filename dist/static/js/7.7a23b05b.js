(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{226:function(t,e,i){},264:function(t,e,i){"use strict";var o=i(226);i.n(o).a},299:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-checkState"},[t.user.isDisabled?i("com-input",{attrs:{inputVal:t.user.phone,placeholder:"请输入手机号",maxLength:11,isDisabled:"disabled",type:"mobile",errorMsg:t.phoneError},on:{"update:inputVal":function(e){t.$set(t.user,"phone",e)},"update:errorMsg":function(e){t.phoneError=e}}}):i("com-input",{attrs:{inputVal:t.user.phone,placeholder:"请输入手机号",maxLength:11,type:"mobile",errorMsg:t.phoneError},on:{"update:inputVal":function(e){t.$set(t.user,"phone",e)},"update:errorMsg":function(e){t.phoneError=e}}}),t._v(" "),t.user.isDisabled?t._e():i("com-verification-code",{ref:"codeCom",attrs:{phone:t.user.phone,inputVal:t.code,code:t.code,isGetCode:t.isGetCode,placeholder:"输入验证码",maxLength:6,errorMsg:t.codeError,codeType:t.codeType},on:{"update:inputVal":function(e){t.code=e},"update:code":function(e){t.code=e},inputFocus:function(e){t.getCode(e)},"update:errorMsg":function(e){t.codeError=e}}}),t._v(" "),i("button",{staticClass:"primary-button",on:{click:t.submit}},[t._v("提交")])],1)};o._withStripped=!0;var s=i(17),a=i.n(s),n=i(253),r=i(252),c=i(211),u=i(71),d={mixins:[i(212).a],data:function(){return{MOBILE_HOST:"//zhike1.vhall.com/m/",code:"",isGetCode:!0,activity:{viewCondition:"",countDown:"",status:""},user:{phone:"",isApplay:!1,isOrder:!1,isDisabled:!1},codeError:"",phoneError:"",codeType:"",isClick:!0}},mounted:function(){},components:{"com-input":n.a,"com-verification-code":r.a},created:function(){this.getActivity();var t=JSON.parse(sessionStorage.getItem("login"));t&&(this.user.phone=t.mobile,this.user.phone&&(this.user.isDisabled=!0))},watch:{},methods:{getCode:function(t){this.code=t},subScribe:function(){var t=this,e={activityId:this.$route.params.id,wechatAuth:sessionStorage.getItem("wechatAuth"),mobile:this.user.phone,code:this.code};this.$config({handlers:!0}).$post(c.a.POST_CHECKAPPLY,e).then(function(e){"LIVING"===t.activity.status||"PLAYBACK"===t.activity.status?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.activity.countDown<1800?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.$router.replace("/Success/"+t.$route.params.id)}).catch(function(e){t.isClick=!0,12004===e.code?(t.$refs.codeCom.refreshCode(),t.code="",t.phoneError=e.msg):10020===e.code?(t.code="",t.codeError=e.msg):(t.$refs.codeCom.refreshCode(),t.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}}))})},submit:function(){var t=this;return!!this.isClick&&(this.verification(this.user.phone,"Y","mobile")?this.user.isDisabled||this.verification(this.code,"Y","code")?(this.isClick=!1,void("APPOINT"===this.activity.viewCondition?this.subScribe():"NONE"===this.activity.viewCondition&&this.$config({handlers:!0}).$post(u.a.POST_MOBILELOGIN,{mobile:this.user.phone,code:this.code,wechatAuth:sessionStorage.getItem("wechatAuth")}).then(function(e){e.data?(sessionStorage.setItem("login",a()(e.data)),"LIVING"===e.data.activity.status?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):e.data.activity.countDown<1800?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.$router.replace("/Success/"+t.$route.params.id)):(t.isClick=!0,t.$refs.codeCom.refreshCode(),t.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}}),sessionStorage.removeItem("login"),sessionStorage.removeItem("wechatAuth"))}).catch(function(e){t.isClick=!0,10020===e.code?t.codeError="请输入正确验证码":12002===e.code?"LIVING"===t.activity.status||"PLAYBACK"===t.activity.status?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.activity.countDown<1800?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.$router.replace("/Success/"+t.$route.params.id):(t.$refs.codeCom.refreshCode(),t.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}}))}))):(this.codeError="请输入正确验证码",!1):(this.phoneError="请正确填写手机号",!1))},verification:function(t,e,i){if("mobile"===i&&(t=""===this.user.phone?t:this.user.phone),"code"===i)return/^\d{6}$/.test(t);if(""===t){if("Y"===e)return!1}else switch(i){case"mobile":return t=""===this.user.phone?t:this.user.phone,/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(t);case"integer":return/^[0-9]*$/.test(t);case"email":return/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(t)}return!0},getActivity:function(){var t=this;this.$config({handlers:!0}).$get(c.a.GET_LIVEINFO,{activityId:this.$route.params.id}).then(function(e){t.activity.status=e.data.activity.status,t.activity.countDown=e.data.activity.countDown,t.activity.viewCondition=e.data.activity.viewCondition,t.user.isApplay=e.data.joinInfo.isApplay,t.user.isOrder=e.data.joinInfo.isOrder,"APPOINT"===t.activity.viewCondition?t.codeType="APPLY_ACTIVITY":"NONE"===t.activity.viewCondition&&(t.codeType="CONSUMER_USER_LOGIN"),"LIVING"!==t.activity.status&&"PLAYBACK"!==t.activity.status||(t.user.isApplay&&"APPOINT"===t.activity.viewCondition?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):"NONE"===t.activity.viewCondition&&t.doAuth(t.MOBILE_HOST+"guide/"+t.$route.params.id)),t.activity.countDown<1800&&(t.user.isApplay&&"APPOINT"===t.activity.viewCondition?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):"NONE"===t.activity.viewCondition&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id))})}}},h=(i(264),i(1)),p=Object(h.a)(d,o,[],!1,null,"40b23aa5",null);p.options.__file="src/pages/guide/check-state.vue";e.default=p.exports}}]);
//# sourceMappingURL=7.7a23b05b.js.map