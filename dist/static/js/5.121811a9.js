(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{239:function(t,e,i){},241:function(t,e,i){},296:function(t,e,i){"use strict";var a=i(239);i.n(a).a},300:function(t,e,i){"use strict";var a=i(241);i.n(a).a},400:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-signup"},[i("p",{staticClass:"v-title"},[t._v("\n    为了更好的接收活动直播提醒，请填写如下信息：\n  ")]),t._v(" "),"APPOINT"===t.activity.viewCondition?i("div",{staticClass:"v-operation"},[t._l(t.questionList,function(e){return["phone"===e.ext?[t.user.isDisabled?i("com-input",{attrs:{inputVal:t.user.phone,placeholder:e.placeholder,errorMsg:e.errorMsg,maxLength:11,isDisabled:"disabled"},on:{"update:inputVal":function(e){t.$set(t.user,"phone",e)},"update:errorMsg":function(i){t.$set(e,"errorMsg",i)}}}):i("com-input",{attrs:{inputVal:e.val,placeholder:e.placeholder,type:"mobile",errorMsg:e.errorMsg,maxLength:11},on:{"update:inputVal":function(i){t.$set(e,"val",i)},"update:errorMsg":function(i){t.$set(e,"errorMsg",i)}}}),t._v(" "),t.user.isDisabled?t._e():i("com-verification-code",{attrs:{inputVal:t.code,code:t.code,phone:e.val,isGetCode:t.isGetCode,placeholder:"请输入验证码",maxLength:6,errorMsg:t.codeError,codeType:"APPLY_ACTIVITY"},on:{"update:inputVal":function(e){t.code=e},"update:code":function(e){t.code=e},inputFocus:function(e){t.getCode(e)},"update:errorMsg":function(e){t.codeError=e}}})]:"email"===e.ext?i("com-input",{attrs:{inputVal:e.val,placeholder:e.placeholder,errorMsg:e.errorMsg},on:{"update:inputVal":function(i){t.$set(e,"val",i)},"update:errorMsg":function(i){t.$set(e,"errorMsg",i)}}}):"integer"===e.ext?i("com-input",{attrs:{inputVal:e.val,placeholder:e.placeholder,errorMsg:e.errorMsg},on:{"update:inputVal":function(i){t.$set(e,"val",i)},"update:errorMsg":function(i){t.$set(e,"errorMsg",i)}}}):"select"===e.ext?i("com-select",{attrs:{selectOptions:e.detail.list},on:{selected:function(i){t.selected(i,e.id)}}}):"text"===e.ext?i("com-input",{attrs:{inputVal:e.val,placeholder:e.placeholder,errorMsg:e.errorMsg},on:{"update:inputVal":function(i){t.$set(e,"val",i)},"update:errorMsg":function(i){t.$set(e,"errorMsg",i)}}}):"name"===e.ext?i("com-input",{attrs:{inputVal:e.val,placeholder:e.placeholder,errorMsg:e.errorMsg},on:{"update:inputVal":function(i){t.$set(e,"val",i)},"update:errorMsg":function(i){t.$set(e,"errorMsg",i)}}}):t._e()]}),t._v(" "),i("button",{staticClass:"primary-button",on:{click:t.submitAppoint}},[t._v("提交")])],2):i("div",{staticClass:"v-operation"},[t.user.isDisabled?i("com-input",{attrs:{inputVal:t.user.phone,placeholder:"请输入手机号",maxLength:11,isDisabled:"disabled",errorMsg:t.phoneError},on:{"update:inputVal":function(e){t.$set(t.user,"phone",e)},"update:errorMsg":function(e){t.phoneError=e}}}):i("com-input",{attrs:{inputVal:t.user.phone,placeholder:"请输入手机号",type:"mobile",maxLength:11,errorMsg:t.phoneError},on:{"update:inputVal":function(e){t.$set(t.user,"phone",e)},"update:errorMsg":function(e){t.phoneError=e}}}),t._v(" "),t.user.isDisabled?t._e():i("com-verification-code",{attrs:{phone:t.user.phone,inputVal:t.code,code:t.code,isGetCode:t.isGetCode,placeholder:"输入验证码",maxLength:6,errorMsg:t.codeError,codeType:"CONSUMER_USER_LOGIN"},on:{"update:inputVal":function(e){t.code=e},"update:code":function(e){t.code=e},inputFocus:function(e){t.getCode(e)},"update:errorMsg":function(e){t.codeError=e}}}),t._v(" "),i("button",{staticClass:"primary-button",on:{click:t.submit}},[t._v("提交")])],1),t._v(" "),i("p",{staticClass:"v-explain"},[t._v("\n    我已阅读并遵守\n    "),i("span",{staticClass:"v-blue",on:{click:function(e){t.showAgreement()}}},[t._v("《用户协议》")])]),t._v(" "),i("message-box",{directives:[{name:"show",rawName:"v-show",value:t.agreementShow,expression:"agreementShow"}],staticClass:"v-agreement",on:{handleClick:t.btnClick}},[i("div",{attrs:{slot:"header"},slot:"header"},[t._v("微吼注册协议")]),t._v(" "),i("p",[t._v(" 1、微吼使用协议的接受 通过访问和/或使用本网站，您表示同意接受本协议的所有条件和条款。微吼直播（以下简称“微吼”）作为微吼(vhall.com)的运营者依据本协议为您提供服务。如果您不愿接受本协议的全部条件和条款，请您不要访问或使用本网站。"),i("br"),t._v("2、本协议的变更和修改 微吼直播有权随时对本协议进行修改，并且一旦发生协议条款的变动，微吼直播将在相关页面上提示修改的内容；用户如果不同意本协议的修改，可以放弃使用或访问本网站或取消已经获得的服务；如果用户选择在本协议变更后继续访问或使用本网站，则视为用户已经接受本协议的修改。 "),i("br"),t._v("3、服务说明 （1）微吼直播是一个向广大用户提供网络直播的服务平台，本身不直接生产内容。 （2） 微吼直播运用自己的系统通过互联网向用户提供服务，除非另有明确规定，增强或强化目前服务的任何新功能，包括新产品以及新增加的服务，均无条件地适用本协议。 （3）微吼直播对网站服务不承担任何责任，公司不保证服务一定会满足用户的使用要求，也不保证服务不会被中断，对服务的及时性、安全性、准确性也不作担保。"),i("br"),t._v(' 4、用户行为： 4.1用户帐号、密码安全 用户一旦注册成功，便成为微吼直播的合法用户，将得到一个密码和帐号。用户应采取合理措施维护其密码和帐号的安全。用户对利用该密码和帐号所进行的一切活动负全部责任；由该等活动所导致的任何损失或损害由用户承担，微吼直播不承担任何责任。 用户的密码和帐号遭到未授权的使用或发生其他任何安全问题，用户可以立即通知微吼直播，并且用户在每次连线结束，应结束帐号使用，否则用户可能得不到微吼直播的安全保护。对于用户长时间未使用的帐号，微吼直播有权予以关闭。 4.2用户应遵守以下法律及法规 用户同意遵守《中华人民共和国保守国家秘密法》、《中华人民共和国著作权法》、《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、《互联网电子公告服务管理规定》、《信息网络传播权保护条例》等有关计算机及互联网规定的法律、法规、实施办法。在任何情况下，微吼直播合理地认为用户的行为可能违反上述法律、法规，微吼直播可以在任何时候，不经事先通知终止向该用户提供服务。 微吼直播欢迎用户举报任何违反上述法律或侵犯他人权利的上传内容，一经发现违法或侵权的上传内容，微吼直播将无条件删除。 4.3用户申请提现平台规则制度 （1）平台单笔提现额度为最低2元（贰圆）到最高20000元（贰万圆）之间； （2）提现时，平台收取总提现金额10%的手续费,其中已包含第三方手续费； （3）从申请提现时间起，3-5个工作日提现金额将会转入指定微信账户。 4.4禁止用户从事以下行为 （1）直播、录播、预约直播或传送包含任何反对宪法所确定的基本原则、危害国家安全、泄露国家秘密、颠覆国家政权、破坏国家统一、破坏民族团结、损害国家荣誉和利益、煽动民族仇恨、民族歧视、破坏民族团结、破坏国家宗教政策、宣扬邪教和封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪、侮辱或者诽谤他人，侵害他人合法权益的等法律、行政法规禁止的内容或其他另人反感的包括但不限于资讯、资料、文字、软件、音乐、照片、图形、视频、信息或其他资料（以下简称内容）。 （2）以任何方式危害未成年人。 （3）冒充任何人或机构，或以虚伪不实的方式谎称或使人误认为与任何人或任何机构有关。 （4）伪造标题或以其他方式操控识别资料，使人误认为该内容为微吼直播所传送。 （5）将无权传送的内容（例如内部资料、机密资料）进行直播、录播、预约直播或以其他方式传送。 （6）将侵犯任何人的专利、商标、著作权、商业秘密或其他专属权利之内容加以直播、录播、预约直播或以其他方式传送。 （7）将广告函件、促销资料、"垃圾邮件"等，加以直播、录播、预约直播或以其他方式传送。供前述目的使用的专用区域除外。 （8）将有关干扰、破坏或限制任何计算机软件、硬件或通讯设备功能的软件病毒或其他计算机代码、档案和程序之资料，加以直播、录播、预约直播或以其他方式传送。 （9）干扰或破坏本网站服务或与本网站服务相连的服务器和网络，或不遵守本网站使用之规定。 （10）故意或非故意违反任何相关的中国法律、法规、规章、条例等其他具有法律效力的规范。 4.4用户对经由本网站直播、录播、预约直播或评论传送的内容承担全部责任 对于经由本网站而传送的内容，微吼直播不保证前述其合法性、正当性、准确性、完整性或品质。用户在接受本网站服务时，有可能会接触到令人不快、不适当或令人厌恶的内容。在任何情况下，微吼直播均不对任何内容承担任何责任，包括但不限于任何内容发生任何错误或纰漏以及衍生的任何损失或损害。微吼直播有权（但无义务）自行拒绝或删除经由本网站提供的任何内容。用户使用上述内容，应自行承担风险。微吼直播有权利在下述情况下，对内容进行保存或披露： （1）法律程序所规定； （2）本服使用协议规定； （3）被侵害的第三人提出权利主张； （4）为保护微吼直播、其使用者及社会公众的权利、财产或人身安全； （5）其他微吼直播认为有必要的情况。 4.5对用户信息的存储和限制 微吼直播不对用户所发起直播的删除或储存失败承担责任。对于免费用户，微吼直播仅保存其回放内容15天。微吼直播有权判断用户的行为是否符合本网站使用协议条款之规定，如果微吼直播认为用户违背了协议条款的规定，微吼直播有终止向其提供网站服务的权利。'),i("br"),t._v(" 5、用户隐私权制度 当用户注册微吼直播的服务时，用户须提供个人信息。微吼直播收集个人信息的目的是为用户提供尽可能多的个人化网上服务以及为广告商提供一个方便的途径来接触到适合的用户，并且可以发送具有相关性的内容和广告。在此过程中，广告商绝对不会接触到用户的个人信息。微吼直播不会在未经合法用户授权时，公开、编辑或透露其个人信息及保存在微吼直播中的非公开内容，除非有下列情况： （1）有关法律规定或微吼直播合法服务程序规定； （2）在紧急情况下，为维护用户及公众的权益； （3）为维护微吼直播的商标权、专利权及其他任何合法权益； （4）其他需要公开、编辑或透露个人信息的情况。 在以下（包括但不限于）几种情况下，微吼直播有权使用用户的个人信息： （1）在进行促销或抽奖时，微吼直播可能会与赞助商共享用户的个人信息，在这些情况下微吼直播会在发送用户信息之前进行提示，并且用户可以通过不参与来终止传送过程。 （2）微吼直播可以将用户信息与第三方数据匹配。 （3）微吼直播会通过透露合计用户统计数据，向未来。 （4）用户购买在微吼直播列出的商品或服务时，微吼直播获得的信息及用户提供的信息（例如用户的信用卡号和联系信息）会提供给商家，这些商家会进行数据收集操作，但微吼直播对商家的此种操作不负任何责任。 （5）微吼直播会向用户发送关于微吼直播不同产品和服务的信息或者微吼直播认为用户会感兴趣的其他产品和服务。如果用户不希望收到这样的邮件，只需在提供个人信息时或其他任何时候告知微吼直播即可。另外，微吼直播会竭尽全力保护用户的信息，但微吼直播不能确信或保证任何个人信息的安全性，用户须自己承担风险。"),i("br"),t._v(" 6、关于用户在微吼发起直播的内容： （1）用户发起直播的内容是指用户在网站及移动客户端以自助形式发布的视频或其它任何形式的内容包括文字、图片、音频、信息、资料等。 （2）除非微吼直播收到相反通知，微吼直播将用户视为其在本网站上载或发布的内容的版权拥有人。用户在本网站上载或发布内容即视为其同意授予微吼直播所有上述内容的在全球范围内的免费、不可撤销的无限期的并且可转让的非独家使用权许可，微吼直播有权展示、散布及推广前述内容，有权对前述内容进行任何形式的复制、修改、出版、发行及以其他方式使用或者授权第三方进行复制、修改、出版、发行及以其他方式使用。 （3）因用户进行上述内容在本网站的上载或发布，而导致任何第三方提出索赔要求或衍生的任何损害或损失，由用户承担全部责任。 "),i("br"),t._v("7、关于第三方链接 本网站服务可能会提供与其他国际互联网网站或资源进行链接。对于前述网站或资源是否可以利用，微吼直播承担担保责任。因使用或依赖上述网站或资源所生的损失或损害，微吼直播也不负担任何责任。"),i("br"),t._v(" 8、微吼直播的知识产权及其他权利 （1）微吼直播对网站服务及本网站所使用的软件所包含的受知识产权或其他法律保护的资料享有相应的权利；除用户依法享有之版权之内容之外，本网站的整体内容版权归微吼直播所有。 （2）经由本网站发起的直播及其它内容，受到著作权法、商标法、专利法或其他法律的保护；除该直播及其它内容上载的用户所享有的版权，未经微吼直播明示授权许可，其他用户不得进行修改、出租、散布或衍生其他作品。 （3）用户对本网站所使用的软件有非专属性使用权，但不得自行或许可任何第三方复制、修改、出售或衍生产品。 （4）本网站所有设计图样以及其他图样、产品及服务名称，均为微吼直播及/或其关联公司所享有的商标、标识。任何人不得使用、复制或用作其他用途。 （5）微吼直播对其专有内容、原创内容和其他通过授权取得的独占或则独家内容享有完全知识产权。未经微吼直播许可，任何单位和个人不得私自转载、传播和提供观看服务或者有其他侵犯微吼直播知识产权的行为。否则，将承担法律责任。"),i("br"),t._v(" 9、免责声明 （1）微吼直播对于任何自本网站而获得的他人的信息、内容或者广告宣传等任何资讯（以下统称“信息”），不保证真实、准确和完整性。如果任何单位或者个人通过上述“信息”而进行任何行为，须自行甄别真伪和谨慎预防风险，否则，无论何种原因，本网站不对任何非与本网站直接发生的交易和/或行为承担任何直接、间接、附带或衍生的损失和责任。 （2）微吼直播有权但无义务，改善或更正本网站任何部分之任何疏漏、错误。 （3）微吼直播不保证（包括但不限于）： a.本网站适合用户的使用要求； b.本网站不受干扰，及时、安全、可靠或不出现错误； c.用户经由本网站取得的任何产品、服务或其他材料符合用户的期望。 （4）用户使用经由本网站下载的或取得的任何资料，其风险自行负担；因该等使用导致用户电脑系统损坏或资料流失，用户应负完全责任； （5）基于以下原因而造成的利润、商业信誉、资料损失或其他有形或无形损失，微吼直播不承担任何直接、间接、附带、衍生或惩罚性的赔偿： a.本网站使用或无法使用； b.经由本网站购买或取得的任何产品、资料或服务； c.用户资料遭到未授权的使用或修改； d.其他与本网站相关的事宜。 （6）用户在浏览互联网时自行判断使用本网站的搜索或检索目录。该搜索或检索目录可能会引导用户进入到被认为具有攻击性或不适当的网站，微吼直播没有义务查看检索目录所列网站的内容，因此，对其正确性、合法性、正当性不负任何责任。"),i("br"),t._v(" 10、第三方责任 由于用户经由本网站上载或发布内容、与本网站连线、违反本服务条款或侵害其他人的任何权利导致任何第三人提出权利主张，用户同意赔偿微吼直播及其分公司、关联公司、代理人或其他合作伙伴及员工，并使其免受损害。"),i("br"),t._v(" 11、服务的终止 微吼直播有权在任何时候，暂时或永久地终止本网站服务（或任何一部分），无论是否通知。微吼直播对本网站服务的终止对用户和任何第三人不承担任何责任。微吼直播有权基于任何理由，终止用户的帐号、密码或使用本服务，或删除、转移用户存储、发布在本服务的内容，微吼直播采取上述行为均不需通知，并且对用户和任何第三人不承担任何责任。"),i("br"),t._v(" 12、通知 微吼直播向用户发出的通知，采用电子邮件或页面公告的形式。本协议条款的修改或其他事项变更时，微吼直播将会以上述某一形式进行通知。"),i("br"),t._v(" 13、法律的适用和管辖 本使用协议的生效、履行、解释及争议的解决均适用中华人民共和国法律，与本协议有关的争议提交由微吼直播服务器所在地的法院管辖。本服务条款因与中华人民共和国现行法律相抵触而导致部分无效，不影响其他部分的效力。 ")])])],1)};a._withStripped=!0;var o=i(17),s=i.n(o),r=i(51),n=i.n(r),c=i(74),u=i.n(c),d=i(287),l=i(288),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-select"},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}},t._l(t.selectOptions,function(t){return i("el-option",{key:t.id,attrs:{label:t.value,value:t.key}})}))],1)};p._withStripped=!0;var h={props:{selectOptions:Array},data:function(){return{val:""}},mounted:function(){},components:{},created:function(){},watch:{val:function(){this.$emit("selected",this.val)}},methods:{}},v=(i(296),i(1)),f=Object(v.a)(h,p,[],!1,null,"3eb9eb8b",null);f.options.__file="src/components/common/signup/com-select.vue";var m=f.exports,g=i(229),I=i(228),w=i(73),y={mixins:[g.a],data:function(){return{MOBILE_HOST:"//test-zhike.vhall.com/m/",code:"",isGetCode:!0,activity:{viewCondition:"",countDown:"",status:""},questionList:[],codeError:"",phoneError:"",user:{phone:"",isApplay:!1,isOrder:!1,isDisabled:!1},email:"",selectVal:[],agreementShow:!1,appointIsClick:!0,isClick:!0}},mounted:function(){this.getInfo()},components:{"com-input":d.a,"com-verification-code":l.a,"com-select":m},created:function(){this.getActivity();var t=JSON.parse(sessionStorage.getItem("login"));t&&(this.user.phone=t.mobile,this.user.phone&&(this.user.isDisabled=!0))},watch:{},methods:{getCode:function(t){this.code=t},getInfo:function(){var t=this;return u()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$config({handlers:!0}).$get(I.a.GET_LIVEINFO,{activityId:t.$route.params.id}).then(function(e){t.activity.status=e.data.activity.status,t.activity.countDown=e.data.activity.countDown,t.activity.viewCondition=e.data.activity.viewCondition,t.user.isApplay=e.data.joinInfo.isApplay,t.user.isOrder=e.data.joinInfo.isOrder,"LIVING"===t.activity.status||"PLAYBACK"===t.activity.status||"FINISH"===t.activity.status?t.user.isApplay&&"APPOINT"===t.activity.viewCondition?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):"NONE"===t.activity.viewCondition&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.activity.countDown<1800&&(t.user.isApplay&&"APPOINT"===t.activity.viewCondition?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):"NONE"===t.activity.viewCondition&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id))}).catch(function(){t.$router.replace("/empty")});case 2:case"end":return e.stop()}},e,t)}))()},selected:function(t,e){for(var i=!1,a=0;a<this.selectVal.length;a++)if(this.selectVal[a].questionId===e)return this.selectVal[a].answer=t,i=!0,!1;if(!i){var o=[];o.questionId=e,o.answer=t,this.selectVal.push(o)}},submitAppoint:function(){var t=this,e=!0,i={activityId:this.$route.params.id,answer:[],__errHandler:!0};if(!this.appointIsClick)return!1;if(this.questionList.forEach(function(a){if(e&&!t.verification(a.val,a.required,a.ext)){switch(a.ext){case"phone":a.errorMsg="请正确填写手机号";break;case"email":a.errorMsg="请正确填写邮箱";break;default:a.errorMsg="请正确填写表格"}e=!1}if("phone"===a.ext){i.mobile=""===t.user.phone?a.val:t.user.phone;var o={};o.id=a.id,o.val=i.mobile,i.answer.push(o)}else if("email"===a.ext){i.email=a.val;var s={};s.id=a.id,s.val=a.val,i.answer.push(s)}else if("select"!==a.ext){var r={};r.id=a.id,r.val=a.val,i.answer.push(r)}}),e){if(!this.user.isDisabled){if(!this.verification(this.code,"Y","code"))return this.codeError="请输入正确验证码",!1;i.code=this.code}if(this.selectVal)for(var a=0;a<this.selectVal.length;a++){var o={};o.id=this.selectVal[a].questionId,o.val=this.selectVal[a].answer,i.answer.push(o)}this.appointIsClick=!1,console.log(i.answer),i.answer=this.reArrangeList(i.answer),this.$config({handlers:!0}).$post(I.a.POST_QUESTIONINFO,i).then(function(e){"LIVING"===t.activity.status||"PLAYBACK"===t.activity.status||"FINISH"===t.activity.status?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.activity.countDown<1800?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.$router.replace("/Success/"+t.$route.params.id)}).catch(function(e){10020===e.code?(t.appointIsClick=!0,t.codeError="请输入正确验证码"):12002===e.code?"LIVING"===t.activity.status||"PLAYBACK"===t.activity.status||"FINISH"===t.activity.status?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.activity.countDown<1800?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.$router.replace("/Success/"+t.$route.params.id):(t.appointIsClick=!0,t.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}}))})}},getActivity:function(){var t=this;this.$config({handlers:!0}).$get(I.a.GET_LIVEINFO,{activityId:this.$route.params.id}).then(function(e){t.activity.viewCondition=e.data.activity.viewCondition,t.activity.status=e.data.activity.status,t.user.isApplay=e.data.joinInfo.isApplay,t.user.isOrder=e.data.joinInfo.isOrder,"APPOINT"===t.activity.viewCondition&&t.getQuestionLists()}).catch(function(){t.$router.replace("/empty")})},subScribe:function(){var t=this,e={activityId:this.$route.params.id};this.$config({handlers:!0}).$post(I.a.POST_SUBSCRIBE,e).then(function(e){"LIVING"===t.activity.status||"PLAYBACK"===t.activity.status||"FINISH"===t.activity.status?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.activity.countDown<1800?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.$router.replace("/Success/"+t.$route.params.id)}).catch(function(e){t.isClick=!0,t.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}})})},submit:function(){var t=this;return!!this.isClick&&(this.verification(this.user.phone,"Y","phone")?this.user.isDisabled||this.verification(this.code,"Y","code")?(this.isClick=!1,void(this.user.isOrder||this.user.isDisabled?this.subScribe():this.$config({handlers:!0}).$post(w.a.POST_MOBILELOGIN,{mobile:this.user.phone,code:this.code,wechatAuth:sessionStorage.getItem("wechatAuth")}).then(function(e){200===e.code&&(e.data?(sessionStorage.setItem("login",s()(e.data)),t.$config({handlers:!0}).$get(I.a.GET_LIVEINFO,{activityId:t.$route.params.id}).then(function(e){e.data.joinInfo.isOrder?(t.user.isApplay=e.data.joinInfo.isApplay,t.user.isOrder=e.data.joinInfo.isOrder,"LIVING"===t.activity.status||"PLAYBACK"===t.activity.status||"FINISH"===t.activity.status?t.user.isApplay&&"APPOINT"===t.activity.viewCondition?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):"NONE"===t.activity.viewCondition&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.activity.countDown<1800?t.user.isApplay&&"APPOINT"===t.activity.viewCondition?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):"NONE"===t.activity.viewCondition&&t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.$router.replace("/Success/"+t.$route.params.id)):t.subScribe()}).catch(function(){t.$router.replace("/empty")})):(t.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}}),sessionStorage.removeItem("login"),sessionStorage.removeItem("wechatAuth")))}).catch(function(e){t.isClick=!0,10020===e.code?(t.appointIsClick=!0,t.codeError="请输入正确验证码"):12002===e.code?"LIVING"===t.activity.status||"PLAYBACK"===t.activity.status||"FINISH"===t.activity.status?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.activity.countDown<1800?t.doAuth(t.MOBILE_HOST+"watch/"+t.$route.params.id):t.$router.replace("/Success/"+t.$route.params.id):(t.appointIsClick=!0,t.$messageBox({header:"提示",content:e.msg,confirmText:"确定",handleClick:function(t){"cancel"===t.action||t.action}}))}))):(this.codeError="请输入正确验证码",!1):(this.phoneError="请正确填写手机号",!1))},getQuestionLists:function(){var t=this;this.$get(I.a.GET_QUESTIONINFO,{activityId:this.$route.params.id}).then(function(e){t.questionList=e.data.questionList.map(function(t){return t.val="",t.errorMsg="",t})})},verification:function(t,e,i){if("phone"===i&&(t=""===this.user.phone?t:this.user.phone),"code"===i)return/^\d{6}$/.test(t);if(""===t){if("Y"===e)return!1}else switch(i){case"phone":return t=""===this.user.phone?t:this.user.phone,/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(t);case"integer":return/^[0-9]*$/.test(t);case"email":return/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(t)}return!0},showAgreement:function(){this.agreementShow=!0},btnClick:function(){this.agreementShow=!1},reArrangeList:function(t){var e={};return t.forEach(function(t,i){e[t.id]=t.val}),s()(e)}}},O=(i(300),Object(v.a)(y,a,[],!1,null,"052ec8c4",null));O.options.__file="src/pages/guide/sign-up.vue";e.default=O.exports}}]);
//# sourceMappingURL=5.121811a9.js.map