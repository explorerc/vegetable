(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(e,t,s){},191:function(e,t,s){},231:function(e,t,s){"use strict";var i=s(189);s.n(i).a},235:function(e,t,s){"use strict";var i=s(191);s.n(i).a},291:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-signup"},[s("p",{staticClass:"v-title"},[e._v("\n    为了更好的接收活动直播提醒，请填写如下信息：\n  ")]),e._v(" "),"APPOINT"===e.activity.viewCondition?s("div",{staticClass:"v-operation"},[e._l(e.questionList,function(t){return["mobile"===t.type?[e.user.isDisabled?s("com-input",{attrs:{inputVal:e.user.phone,placeholder:t.placeholder,errorMsg:t.errorMsg,maxLength:11,isDisabled:"disabled"},on:{"update:inputVal":function(t){e.$set(e.user,"phone",t)},"update:errorMsg":function(s){e.$set(t,"errorMsg",s)}}}):s("com-input",{attrs:{inputVal:t.val,placeholder:t.placeholder,errorMsg:t.errorMsg,maxLength:11},on:{"update:inputVal":function(s){e.$set(t,"val",s)},"update:errorMsg":function(s){e.$set(t,"errorMsg",s)}}}),e._v(" "),e.user.isDisabled?e._e():s("com-verification-code",{attrs:{inputVal:e.code,code:e.code,phone:t.val,isGetCode:e.isGetCode,placeholder:"请输入验证码",maxLength:6,errorMsg:e.codeError,codeType:"APPLY_ACTIVITY"},on:{"update:inputVal":function(t){e.code=t},"update:code":function(t){e.code=t},inputFocus:function(t){e.getCode(t)},"update:errorMsg":function(t){e.codeError=t}}})]:"email"===t.type?s("com-input",{attrs:{inputVal:t.val,placeholder:t.placeholder,errorMsg:t.errorMsg},on:{"update:inputVal":function(s){e.$set(t,"val",s)},"update:errorMsg":function(s){e.$set(t,"errorMsg",s)}}}):"integer"===t.type?s("com-input",{attrs:{inputVal:t.val,placeholder:t.placeholder,errorMsg:t.errorMsg},on:{"update:inputVal":function(s){e.$set(t,"val",s)},"update:errorMsg":function(s){e.$set(t,"errorMsg",s)}}}):"select"===t.type?s("com-select",{attrs:{selectOptions:t.detail},on:{selected:function(s){e.selected(s,t.id)}}}):"text"===t.type?s("com-input",{attrs:{inputVal:t.val,placeholder:t.placeholder,errorMsg:t.errorMsg},on:{"update:inputVal":function(s){e.$set(t,"val",s)},"update:errorMsg":function(s){e.$set(t,"errorMsg",s)}}}):e._e()]}),e._v(" "),s("button",{staticClass:"primary-button",on:{click:e.submitAppoint}},[e._v("提交")])],2):s("div",{staticClass:"v-operation"},[e.user.isDisabled?s("com-input",{attrs:{inputVal:e.user.phone,placeholder:"请输入手机号",maxLength:11,isDisabled:"disabled",errorMsg:e.phoneError},on:{"update:inputVal":function(t){e.$set(e.user,"phone",t)},"update:errorMsg":function(t){e.phoneError=t}}}):s("com-input",{attrs:{inputVal:e.user.phone,placeholder:"请输入手机号",maxLength:11,errorMsg:e.phoneError},on:{"update:inputVal":function(t){e.$set(e.user,"phone",t)},"update:errorMsg":function(t){e.phoneError=t}}}),e._v(" "),e.user.isDisabled?e._e():s("com-verification-code",{attrs:{phone:e.user.phone,inputVal:e.code,code:e.code,isGetCode:e.isGetCode,placeholder:"输入验证码",maxLength:6,errorMsg:e.codeError,codeType:"CONSUMER_USER_LOGIN"},on:{"update:inputVal":function(t){e.code=t},"update:code":function(t){e.code=t},inputFocus:function(t){e.getCode(t)},"update:errorMsg":function(t){e.codeError=t}}}),e._v(" "),s("button",{staticClass:"primary-button",on:{click:e.submit}},[e._v("提交")])],1),e._v(" "),e._m(0)])};i._withStripped=!0;var r=s(11),o=s.n(r),a=s(221),n=s(223),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-select"},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},e._l(e.selectOptions,function(e){return s("el-option",{key:e.id,attrs:{label:e.value,value:e.key}})}))],1)};c._withStripped=!0;var l={props:{selectOptions:Array},data:()=>({val:""}),mounted(){},components:{},created(){},watch:{val:function(){this.$emit("selected",this.val)}},methods:{}},u=(s(231),s(1)),d=Object(u.a)(l,c,[],!1,null,"3eb9eb8b",null);d.options.__file="src/components/common/signup/com-select.vue";var p=d.exports,h=s(183),v=s(182),m=s(58),g={mixins:[h.a],data:()=>({code:"",isGetCode:!0,activity:{viewCondition:"APPOINT",status:""},questionList:[],codeError:"",phoneError:"",user:{phone:"",isApplay:!1,isOrder:!1,isDisabled:!1},selectVal:[]}),mounted(){},components:{"com-input":a.a,"com-verification-code":n.a,"com-select":p},created(){this.getActivity();let e=JSON.parse(sessionStorage.getItem("login"));e&&(this.user.phone=e.mobile,this.user.phone&&(this.user.isDisabled=!0))},watch:{},methods:{getCode(e){this.code=e},selected(e,t){let s=!1;for(let i=0;i<this.selectVal.length;i++)if(this.selectVal[i].questionId===t)return this.selectVal[i].answer=e,s=!0,!1;if(!s){let s=[];s.questionId=t,s.answer=e,this.selectVal.push(s)}},submitAppoint(){let e=!0,t={activityId:this.$route.params.id,answer:[],__errHandler:!0};if(this.questionList.forEach(s=>{if(e&&!this.verification(s.val,s.required,s.type)){switch(s.type){case"mobile":s.errorMsg="请正确填写手机号";break;case"email":s.errorMsg="请正确填写邮箱";break;default:s.errorMsg="请正确填写表格"}e=!1}if("mobile"===s.type){t.mobile=""===this.user.phone?s.val:this.user.phone;let e={};e.questionId=s.id,e.answer=t.mobile,t.answer.push(e)}else if("select"!==s.type){let e={};e.questionId=s.id,e.answer=s.val,t.answer.push(e)}}),e){if(this.user.isDisabled||(this.verification(this.code,"Y","integer")||(this.codeError="请输入正确验证码"),t.code=this.code),this.selectVal)for(let e=0;e<this.selectVal.length;e++){let s={};s.questionId=this.selectVal[e].questionId,s.answer=this.selectVal[e].answer,t.answer.push(s)}this.$post(v.a.POST_QUESTIONINFO,t).then(e=>{this.$router.replace("/Success/"+this.$route.params.id)})}},getActivity(){this.$config({handlers:!0}).$get(v.a.GET_LIVEINFO,{activityId:this.$route.params.id}).then(e=>{this.activity.viewCondition=e.data.activity.viewCondition,this.activity.status=e.data.activity.status,this.user.isApplay=e.data.joinInfo.isApplay,this.user.isOrder=e.data.joinInfo.isOrder,"APPOINT"===this.activity.viewCondition&&this.getQuestionLists()})},subScribe(){let e={activityId:this.$route.params.id};this.$config({handlers:!0}).$post(v.a.POST_SUBSCRIBE,e).then(e=>{this.$router.replace("/Success/"+this.$route.params.id)}).catch(e=>{this.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:e=>{"cancel"===e.action||e.action}})})},submit(){return this.verification(this.user.phone,"Y","mobile")?this.user.isDisabled||this.verification(this.code,"Y","integer")?void(this.user.isOrder||this.user.isDisabled?this.subScribe():this.$config({handlers:!0}).$post(m.a.POST_MOBILELOGIN,{mobile:this.user.phone,code:this.code,wechatAuth:sessionStorage.getItem("wechatAuth")}).then(e=>{200===e.code&&(e.data?(sessionStorage.setItem("login",o()(e.data)),this.$config({handlers:!0}).$get(v.a.GET_LIVEINFO,{activityId:this.$route.params.id}).then(e=>{e.data.joinInfo.isOrder?this.$router.replace("/Success/"+this.$route.params.id):this.subScribe()}).catch(e=>{this.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:e=>{"cancel"===e.action||e.action}})})):(this.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:e=>{"cancel"===e.action||e.action}}),sessionStorage.removeItem("login"),sessionStorage.removeItem("wechatAuth")))})):(this.codeError="请输入正确验证码",!1):(this.phoneError="请正确填写手机号",!1)},getQuestionLists(){this.$get(v.a.GET_QUESTIONINFO,{activityId:this.$route.params.id}).then(e=>{this.questionList=e.data.questionList.map(e=>(e.val="",e.errorMsg="",e))})},verification(e,t,s){let i=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,r=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,o=/^[0-9]*$/;if("mobile"===s&&(e=""===this.user.phone?e:this.user.phone),""===e){if("Y"===t)return!1}else switch(s){case"mobile":return e=""===this.user.phone?e:this.user.phone,i.test(e);case"integer":return o.test(e);case"email":return r.test(e)}return!0}}},f=(s(235),Object(u.a)(g,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"v-explain"},[this._v("\n    我已阅读并遵守"),t("span",{staticClass:"v-blue"},[this._v("《服务条款》")])])}],!1,null,"052ec8c4",null));f.options.__file="src/pages/guide/sign-up.vue";t.default=f.exports}}]);
//# sourceMappingURL=4.ba714dc9.js.map