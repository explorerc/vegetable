<template>
  <div class="v-signup">
    <div class="v-wrap">
      <p class="v-title">
        为了更好的接收活动直播提醒，请填写如下信息：
      </p>
      <div class="v-operation"
           v-if="activity.viewCondition === 'APPOINT'">
        <template v-for="item in questionList">
          <template v-if="item.ext === 'phone'">
            <com-input :inputVal.sync="user.phone"
                       :placeholder='item.placeholder'
                       :errorMsg.sync="item.errorMsg"
                       :maxLength="11"
                       v-if="user.isDisabled"
                       isDisabled="disabled"></com-input>
            <com-input :inputVal.sync="item.val"
                       :placeholder='item.placeholder'
                       type="mobile"
                       :errorMsg.sync="item.errorMsg"
                       :maxLength="11"
                       v-else></com-input>
            <com-verification-code :inputVal.sync="code"
                                   :code.sync="code"
                                   v-if="!user.isDisabled"
                                   :phone="item.val"
                                   @inputFocus="getCode($event)"
                                   :isGetCode="isGetCode"
                                   placeholder='请输入验证码'
                                   :maxLength="6"
                                   :errorMsg.sync="codeError"
                                   codeType="APPLY_ACTIVITY"></com-verification-code>
          </template>
          <com-input v-else-if="item.ext === 'email'"
                     :inputVal.sync="item.val"
                     :placeholder='item.placeholder'
                     :errorMsg.sync="item.errorMsg"></com-input>
          <com-input v-else-if="item.ext === 'integer'"
                     :inputVal.sync="item.val"
                     :placeholder='item.placeholder'
                     :errorMsg.sync="item.errorMsg"></com-input>
          <com-select v-else-if="item.ext === 'select'"
                      :selectOptions="item.detail.list"
                      @selected="selected($event, item.id)"></com-select>
          <com-input v-else-if="item.ext === 'text'"
                     :inputVal.sync="item.val"
                     :placeholder='item.placeholder'
                     :errorMsg.sync="item.errorMsg"></com-input>
          <com-input v-else-if="item.ext === 'name'"
                     :inputVal.sync="item.val"
                     :placeholder='item.placeholder'
                     :errorMsg.sync="item.errorMsg"></com-input>
        </template>
        <button class="primary-button"
                @click="submitAppoint">提交</button>
      </div>
      <div class="v-operation"
           v-else>
        <com-input :inputVal.sync="user.phone"
                   placeholder='请输入手机号'
                   :maxLength="11"
                   v-if="user.isDisabled"
                   isDisabled="disabled"
                   :errorMsg.sync="phoneError"></com-input>
        <com-input :inputVal.sync="user.phone"
                   placeholder='请输入手机号'
                   type="mobile"
                   :maxLength="11"
                   v-else
                   :errorMsg.sync="phoneError"></com-input>
        <com-verification-code :phone='user.phone'
                               v-if="!user.isDisabled"
                               :inputVal.sync="code"
                               :code.sync="code"
                               @inputFocus="getCode($event)"
                               :isGetCode="isGetCode"
                               placeholder='输入验证码'
                               :maxLength="6"
                               :errorMsg.sync="codeError"
                               codeType="CONSUMER_USER_LOGIN"></com-verification-code>
        <button class="primary-button"
                @click="submit">提交</button>
      </div>
      <p class="v-explain">
        我已阅读并遵守
        <span class="v-blue"
              @click="showAgreement()">《用户协议》</span>
      </p>
      <message-box v-show="agreementShow"
                   class="v-agreement"
                   @handleClick="btnClick">
        <div slot="header">微吼注册协议</div>
        <p> 1、微吼使用协议的接受 通过访问和/或使用本网站，您表示同意接受本协议的所有条件和条款。微吼直播（以下简称“微吼”）作为微吼(vhall.com)的运营者依据本协议为您提供服务。如果您不愿接受本协议的全部条件和条款，请您不要访问或使用本网站。<br />2、本协议的变更和修改 微吼直播有权随时对本协议进行修改，并且一旦发生协议条款的变动，微吼直播将在相关页面上提示修改的内容；用户如果不同意本协议的修改，可以放弃使用或访问本网站或取消已经获得的服务；如果用户选择在本协议变更后继续访问或使用本网站，则视为用户已经接受本协议的修改。 <br />3、服务说明 （1）微吼直播是一个向广大用户提供网络直播的服务平台，本身不直接生产内容。 （2） 微吼直播运用自己的系统通过互联网向用户提供服务，除非另有明确规定，增强或强化目前服务的任何新功能，包括新产品以及新增加的服务，均无条件地适用本协议。 （3）微吼直播对网站服务不承担任何责任，公司不保证服务一定会满足用户的使用要求，也不保证服务不会被中断，对服务的及时性、安全性、准确性也不作担保。<br /> 4、用户行为： 4.1用户帐号、密码安全 用户一旦注册成功，便成为微吼直播的合法用户，将得到一个密码和帐号。用户应采取合理措施维护其密码和帐号的安全。用户对利用该密码和帐号所进行的一切活动负全部责任；由该等活动所导致的任何损失或损害由用户承担，微吼直播不承担任何责任。 用户的密码和帐号遭到未授权的使用或发生其他任何安全问题，用户可以立即通知微吼直播，并且用户在每次连线结束，应结束帐号使用，否则用户可能得不到微吼直播的安全保护。对于用户长时间未使用的帐号，微吼直播有权予以关闭。 4.2用户应遵守以下法律及法规 用户同意遵守《中华人民共和国保守国家秘密法》、《中华人民共和国著作权法》、《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、《互联网电子公告服务管理规定》、《信息网络传播权保护条例》等有关计算机及互联网规定的法律、法规、实施办法。在任何情况下，微吼直播合理地认为用户的行为可能违反上述法律、法规，微吼直播可以在任何时候，不经事先通知终止向该用户提供服务。 微吼直播欢迎用户举报任何违反上述法律或侵犯他人权利的上传内容，一经发现违法或侵权的上传内容，微吼直播将无条件删除。 4.3用户申请提现平台规则制度 （1）平台单笔提现额度为最低2元（贰圆）到最高20000元（贰万圆）之间； （2）提现时，平台收取总提现金额10%的手续费,其中已包含第三方手续费； （3）从申请提现时间起，3-5个工作日提现金额将会转入指定微信账户。 4.4禁止用户从事以下行为 （1）直播、录播、预约直播或传送包含任何反对宪法所确定的基本原则、危害国家安全、泄露国家秘密、颠覆国家政权、破坏国家统一、破坏民族团结、损害国家荣誉和利益、煽动民族仇恨、民族歧视、破坏民族团结、破坏国家宗教政策、宣扬邪教和封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪、侮辱或者诽谤他人，侵害他人合法权益的等法律、行政法规禁止的内容或其他另人反感的包括但不限于资讯、资料、文字、软件、音乐、照片、图形、视频、信息或其他资料（以下简称内容）。 （2）以任何方式危害未成年人。 （3）冒充任何人或机构，或以虚伪不实的方式谎称或使人误认为与任何人或任何机构有关。 （4）伪造标题或以其他方式操控识别资料，使人误认为该内容为微吼直播所传送。 （5）将无权传送的内容（例如内部资料、机密资料）进行直播、录播、预约直播或以其他方式传送。 （6）将侵犯任何人的专利、商标、著作权、商业秘密或其他专属权利之内容加以直播、录播、预约直播或以其他方式传送。 （7）将广告函件、促销资料、"垃圾邮件"等，加以直播、录播、预约直播或以其他方式传送。供前述目的使用的专用区域除外。 （8）将有关干扰、破坏或限制任何计算机软件、硬件或通讯设备功能的软件病毒或其他计算机代码、档案和程序之资料，加以直播、录播、预约直播或以其他方式传送。 （9）干扰或破坏本网站服务或与本网站服务相连的服务器和网络，或不遵守本网站使用之规定。 （10）故意或非故意违反任何相关的中国法律、法规、规章、条例等其他具有法律效力的规范。 4.4用户对经由本网站直播、录播、预约直播或评论传送的内容承担全部责任 对于经由本网站而传送的内容，微吼直播不保证前述其合法性、正当性、准确性、完整性或品质。用户在接受本网站服务时，有可能会接触到令人不快、不适当或令人厌恶的内容。在任何情况下，微吼直播均不对任何内容承担任何责任，包括但不限于任何内容发生任何错误或纰漏以及衍生的任何损失或损害。微吼直播有权（但无义务）自行拒绝或删除经由本网站提供的任何内容。用户使用上述内容，应自行承担风险。微吼直播有权利在下述情况下，对内容进行保存或披露： （1）法律程序所规定； （2）本服使用协议规定； （3）被侵害的第三人提出权利主张； （4）为保护微吼直播、其使用者及社会公众的权利、财产或人身安全； （5）其他微吼直播认为有必要的情况。 4.5对用户信息的存储和限制 微吼直播不对用户所发起直播的删除或储存失败承担责任。对于免费用户，微吼直播仅保存其回放内容15天。微吼直播有权判断用户的行为是否符合本网站使用协议条款之规定，如果微吼直播认为用户违背了协议条款的规定，微吼直播有终止向其提供网站服务的权利。<br /> 5、用户隐私权制度 当用户注册微吼直播的服务时，用户须提供个人信息。微吼直播收集个人信息的目的是为用户提供尽可能多的个人化网上服务以及为广告商提供一个方便的途径来接触到适合的用户，并且可以发送具有相关性的内容和广告。在此过程中，广告商绝对不会接触到用户的个人信息。微吼直播不会在未经合法用户授权时，公开、编辑或透露其个人信息及保存在微吼直播中的非公开内容，除非有下列情况： （1）有关法律规定或微吼直播合法服务程序规定； （2）在紧急情况下，为维护用户及公众的权益； （3）为维护微吼直播的商标权、专利权及其他任何合法权益； （4）其他需要公开、编辑或透露个人信息的情况。 在以下（包括但不限于）几种情况下，微吼直播有权使用用户的个人信息： （1）在进行促销或抽奖时，微吼直播可能会与赞助商共享用户的个人信息，在这些情况下微吼直播会在发送用户信息之前进行提示，并且用户可以通过不参与来终止传送过程。 （2）微吼直播可以将用户信息与第三方数据匹配。 （3）微吼直播会通过透露合计用户统计数据，向未来。 （4）用户购买在微吼直播列出的商品或服务时，微吼直播获得的信息及用户提供的信息（例如用户的信用卡号和联系信息）会提供给商家，这些商家会进行数据收集操作，但微吼直播对商家的此种操作不负任何责任。 （5）微吼直播会向用户发送关于微吼直播不同产品和服务的信息或者微吼直播认为用户会感兴趣的其他产品和服务。如果用户不希望收到这样的邮件，只需在提供个人信息时或其他任何时候告知微吼直播即可。另外，微吼直播会竭尽全力保护用户的信息，但微吼直播不能确信或保证任何个人信息的安全性，用户须自己承担风险。<br /> 6、关于用户在微吼发起直播的内容： （1）用户发起直播的内容是指用户在网站及移动客户端以自助形式发布的视频或其它任何形式的内容包括文字、图片、音频、信息、资料等。 （2）除非微吼直播收到相反通知，微吼直播将用户视为其在本网站上载或发布的内容的版权拥有人。用户在本网站上载或发布内容即视为其同意授予微吼直播所有上述内容的在全球范围内的免费、不可撤销的无限期的并且可转让的非独家使用权许可，微吼直播有权展示、散布及推广前述内容，有权对前述内容进行任何形式的复制、修改、出版、发行及以其他方式使用或者授权第三方进行复制、修改、出版、发行及以其他方式使用。 （3）因用户进行上述内容在本网站的上载或发布，而导致任何第三方提出索赔要求或衍生的任何损害或损失，由用户承担全部责任。 <br />7、关于第三方链接 本网站服务可能会提供与其他国际互联网网站或资源进行链接。对于前述网站或资源是否可以利用，微吼直播承担担保责任。因使用或依赖上述网站或资源所生的损失或损害，微吼直播也不负担任何责任。<br /> 8、微吼直播的知识产权及其他权利 （1）微吼直播对网站服务及本网站所使用的软件所包含的受知识产权或其他法律保护的资料享有相应的权利；除用户依法享有之版权之内容之外，本网站的整体内容版权归微吼直播所有。 （2）经由本网站发起的直播及其它内容，受到著作权法、商标法、专利法或其他法律的保护；除该直播及其它内容上载的用户所享有的版权，未经微吼直播明示授权许可，其他用户不得进行修改、出租、散布或衍生其他作品。 （3）用户对本网站所使用的软件有非专属性使用权，但不得自行或许可任何第三方复制、修改、出售或衍生产品。 （4）本网站所有设计图样以及其他图样、产品及服务名称，均为微吼直播及/或其关联公司所享有的商标、标识。任何人不得使用、复制或用作其他用途。 （5）微吼直播对其专有内容、原创内容和其他通过授权取得的独占或则独家内容享有完全知识产权。未经微吼直播许可，任何单位和个人不得私自转载、传播和提供观看服务或者有其他侵犯微吼直播知识产权的行为。否则，将承担法律责任。<br /> 9、免责声明 （1）微吼直播对于任何自本网站而获得的他人的信息、内容或者广告宣传等任何资讯（以下统称“信息”），不保证真实、准确和完整性。如果任何单位或者个人通过上述“信息”而进行任何行为，须自行甄别真伪和谨慎预防风险，否则，无论何种原因，本网站不对任何非与本网站直接发生的交易和/或行为承担任何直接、间接、附带或衍生的损失和责任。 （2）微吼直播有权但无义务，改善或更正本网站任何部分之任何疏漏、错误。 （3）微吼直播不保证（包括但不限于）： a.本网站适合用户的使用要求； b.本网站不受干扰，及时、安全、可靠或不出现错误； c.用户经由本网站取得的任何产品、服务或其他材料符合用户的期望。 （4）用户使用经由本网站下载的或取得的任何资料，其风险自行负担；因该等使用导致用户电脑系统损坏或资料流失，用户应负完全责任； （5）基于以下原因而造成的利润、商业信誉、资料损失或其他有形或无形损失，微吼直播不承担任何直接、间接、附带、衍生或惩罚性的赔偿： a.本网站使用或无法使用； b.经由本网站购买或取得的任何产品、资料或服务； c.用户资料遭到未授权的使用或修改； d.其他与本网站相关的事宜。 （6）用户在浏览互联网时自行判断使用本网站的搜索或检索目录。该搜索或检索目录可能会引导用户进入到被认为具有攻击性或不适当的网站，微吼直播没有义务查看检索目录所列网站的内容，因此，对其正确性、合法性、正当性不负任何责任。<br /> 10、第三方责任 由于用户经由本网站上载或发布内容、与本网站连线、违反本服务条款或侵害其他人的任何权利导致任何第三人提出权利主张，用户同意赔偿微吼直播及其分公司、关联公司、代理人或其他合作伙伴及员工，并使其免受损害。<br /> 11、服务的终止 微吼直播有权在任何时候，暂时或永久地终止本网站服务（或任何一部分），无论是否通知。微吼直播对本网站服务的终止对用户和任何第三人不承担任何责任。微吼直播有权基于任何理由，终止用户的帐号、密码或使用本服务，或删除、转移用户存储、发布在本服务的内容，微吼直播采取上述行为均不需通知，并且对用户和任何第三人不承担任何责任。<br /> 12、通知 微吼直播向用户发出的通知，采用电子邮件或页面公告的形式。本协议条款的修改或其他事项变更时，微吼直播将会以上述某一形式进行通知。<br /> 13、法律的适用和管辖 本使用协议的生效、履行、解释及争议的解决均适用中华人民共和国法律，与本协议有关的争议提交由微吼直播服务器所在地的法院管辖。本服务条款因与中华人民共和国现行法律相抵触而导致部分无效，不影响其他部分的效力。 </p>
      </message-box>
    </div>
  </div>
</template>

<script>
import ComInput from '../../components/common/signup/com-input.vue'
import ComVerificationCode from '../../components/common/signup/com-code.vue'
import ComSelect from '../../components/common/signup/com-select.vue'
import loginMixin from 'components/login-mixin'
import activityService from 'src/api/activity-service'
import userService from 'src/api/user-service'
export default {
  mixins: [loginMixin],
  data () {
    return {
      MOBILE_HOST: process.env.MOBILE_HOST,
      code: '',
      isGetCode: true, // 控制验证码
      activity: {
        viewCondition: '', // APPOINT是报名活动 ''是无限制活动
        countDown: '', // 距离活动开始时间（秒）
        status: '' // 当前活动状态
      },
      questionList: [], // 报名表单
      codeError: '', // 验证码错误提示
      phoneError: '', // 预约活动手机错误提示
      user: {
        phone: '', // 无条件观看用户手机
        isApplay: false, // 是否已经报名
        isOrder: false, // 是否已经预约
        isDisabled: false // 手机框是否可输入
      },
      email: '',
      selectVal: [], // 下拉
      agreementShow: false, // 用户协议是否显示
      appointIsClick: true, // 报名是否可点击
      isClick: true // 无条件是否可点击
    }
  },
  mounted () {
    this.getInfo()
  },
  components: {
    'com-input': ComInput,
    'com-verification-code': ComVerificationCode,
    'com-select': ComSelect
  },
  created () {
    this.getActivity()
    let userInfo = JSON.parse(sessionStorage.getItem('login'))
    if (userInfo) {
      this.user.phone = userInfo.mobile
      if (this.user.phone) {
        this.user.isDisabled = true
      }
    }
  },
  watch: {
  },
  methods: {
    getCode (val) {
      this.code = val
    },
    async getInfo () {
      await this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        this.activity.status = res.data.activity.status
        this.activity.countDown = res.data.activity.countDown
        this.activity.viewCondition = res.data.activity.viewCondition
        this.user.isApplay = res.data.joinInfo.isApplay
        this.user.isOrder = res.data.joinInfo.isOrder
        if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
          if (this.user.isApplay && this.activity.viewCondition === 'APPOINT') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          } else if (this.activity.viewCondition === 'NONE') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          }
        } else if (this.activity.countDown < 1800) {
          if (this.user.isApplay && this.activity.viewCondition === 'APPOINT') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          } else if (this.activity.viewCondition === 'NONE') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          }
        }
      }).catch(() => {
        this.$router.replace('/empty')
      })
    },
    selected (val, id) {
      let isCz = false
      for (let i = 0; i < this.selectVal.length; i++) {
        if (this.selectVal[i]['questionId'] === id) {
          this.selectVal[i]['answer'] = val
          isCz = true
          return false
        }
      }
      if (!isCz) {
        let obj = []
        obj['questionId'] = id
        obj['answer'] = val
        this.selectVal.push(obj)
      }
    },
    submitAppoint () {
      let isVerification = true
      let data = {
        activityId: this.$route.params.id,
        answer: [],
        __errHandler: true
      }
      if (!this.appointIsClick) {
        return false
      }
      this.questionList.forEach(element => {
        if (isVerification && !this.verification(element.val, element.required, element.ext)) {
          switch (element.ext) {
            case 'phone': element.errorMsg = '请正确填写手机号'
              break
            case 'email': element.errorMsg = '请正确填写邮箱'
              break
            default: element.errorMsg = '请正确填写表格'
              break
          }
          isVerification = false
        }
        if (element.ext === 'phone') {
          data.mobile = this.user.phone === '' ? element.val : this.user.phone
          let obj = {}
          obj['id'] = element.id
          obj['val'] = data.mobile
          // obj.answer = data.mobile
          data.answer.push(obj)
        } else if (element.ext === 'email') {
          data.email = element.val
          let obj = {}
          obj['id'] = element.id
          obj['val'] = element.val
          // obj.questionId = element.id
          // obj.answer = element.val
          data.answer.push(obj)
        } else if (element.ext !== 'select') {
          let obj = {}
          obj['id'] = element.id
          obj['val'] = element.val
          // obj.questionId = element.id
          // obj.answer = element.val
          data.answer.push(obj)
        }
      })
      if (isVerification) {
        if (!this.user.isDisabled) {
          if (!this.verification(this.code, 'Y', 'code')) {
            this.codeError = '请输入正确验证码'
            return false
          }
          data.code = this.code
        }
        if (this.selectVal) {
          for (let i = 0; i < this.selectVal.length; i++) {
            let obj = {}
            obj['id'] = this.selectVal[i].questionId
            obj['val'] = this.selectVal[i].answer
            // obj[this.selectVal[i].questionId] = this.selectVal[i].answer
            // obj.questionId = this.selectVal[i].questionId
            // obj.answer = this.selectVal[i].answer
            data.answer.push(obj)
          }
        }
        this.appointIsClick = false
        console.log(data.answer)
        data.answer = this.reArrangeList(data.answer)
        this.$config({ handlers: true }).$post(activityService.POST_QUESTIONINFO, data).then((res) => {
          if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          } else if (this.activity.countDown < 1800) {
            this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
          } else {
            this.$router.replace('/Success/' + this.$route.params.id)
          }
        }).catch((err) => {
          if (err.code === 10020) {
            this.appointIsClick = true
            this.codeError = '请输入正确验证码'
          } else if (err.code === 12002) {
            if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            } else if (this.activity.countDown < 1800) {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            } else {
              this.$router.replace('/Success/' + this.$route.params.id)
            }
          } else {
            this.appointIsClick = true
            this.$messageBox({
              header: '提示',
              content: err.msg,
              confirmText: '确定',
              handleClick: (e) => {
                if (e.action === 'cancel') {
                } else if (e.action === 'confirm') {
                }
              }
            })
          }
        })
      }
    },
    getActivity () { // 获取活动信息
      this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        this.activity.viewCondition = res.data.activity.viewCondition
        this.activity.status = res.data.activity.status
        this.user.isApplay = res.data.joinInfo.isApplay
        this.user.isOrder = res.data.joinInfo.isOrder
        if (this.activity.viewCondition === 'APPOINT') {
          this.getQuestionLists()
        }
      }).catch(() => {
        this.$router.replace('/empty')
      })
    },
    subScribe () { // 预约活动
      let data = {
        activityId: this.$route.params.id
      }
      this.$config({ handlers: true }).$post(activityService.POST_SUBSCRIBE, data).then((res) => {
        if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
          this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
        } else if (this.activity.countDown < 1800) {
          this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
        } else {
          this.$router.replace('/Success/' + this.$route.params.id)
        }
      }).catch((err) => {
        this.isClick = true
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
    },
    submit () {
      if (!this.isClick) {
        return false
      }
      if (!this.verification(this.user.phone, 'Y', 'phone')) {
        this.phoneError = '请正确填写手机号'
        return false
      }
      if (!this.user.isDisabled) {
        if (!this.verification(this.code, 'Y', 'code')) {
          this.codeError = '请输入正确验证码'
          return false
        }
      }
      this.isClick = false
      if (this.user.isOrder || this.user.isDisabled) {
        this.subScribe()
      } else {
        this.$config({ handlers: true }).$post(userService.POST_MOBILELOGIN, {
          mobile: this.user.phone,
          code: this.code,
          wechatAuth: sessionStorage.getItem('wechatAuth')
        }).then((res) => {
          if (res.code === 200) {
            if (res.data) {
              sessionStorage.setItem('login', JSON.stringify(res.data))
              this.$config({ handlers: true }).$get(activityService.GET_LIVEINFO, {
                activityId: this.$route.params.id
              }).then((res) => {
                if (res.data.joinInfo.isOrder) {
                  this.user.isApplay = res.data.joinInfo.isApplay
                  this.user.isOrder = res.data.joinInfo.isOrder
                  if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
                    if (this.user.isApplay && this.activity.viewCondition === 'APPOINT') {
                      this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
                    } else if (this.activity.viewCondition === 'NONE') {
                      this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
                    }
                  } else if (this.activity.countDown < 1800) {
                    if (this.user.isApplay && this.activity.viewCondition === 'APPOINT') {
                      this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
                    } else if (this.activity.viewCondition === 'NONE') {
                      this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
                    }
                  } else {
                    this.$router.replace('/Success/' + this.$route.params.id)
                  }
                } else {
                  this.subScribe()
                }
              }).catch(() => {
                this.$router.replace('/empty')
              })
            } else {
              this.$messageBox({
                header: '提示',
                content: res.msg,
                confirmText: '确定',
                handleClick: (e) => {
                  if (e.action === 'cancel') {
                  } else if (e.action === 'confirm') {
                  }
                }
              })
              sessionStorage.removeItem('login')
              sessionStorage.removeItem('wechatAuth')
            }
          }
        }).catch((err) => {
          this.isClick = true
          if (err.code === 10020) {
            this.appointIsClick = true
            this.codeError = '请输入正确验证码'
          } else if (err.code === 12002) {
            if (this.activity.status === 'LIVING' || this.activity.status === 'PLAYBACK' || this.activity.status === 'FINISH') {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            } else if (this.activity.countDown < 1800) {
              this.doAuth(this.MOBILE_HOST + 'watch/' + this.$route.params.id)
            } else {
              this.$router.replace('/Success/' + this.$route.params.id)
            }
          } else {
            this.appointIsClick = true
            this.$messageBox({
              header: '提示',
              content: err.msg,
              confirmText: '确定',
              handleClick: (e) => {
                if (e.action === 'cancel') {
                } else if (e.action === 'confirm') {
                }
              }
            })
          }
        })
      }
    },
    getQuestionLists () {
      this.$get(activityService.GET_QUESTIONINFO, {
        activityId: this.$route.params.id
      }).then((res) => {
        this.questionList = res.data.questionList.map((item) => {
          item.val = ''
          item.errorMsg = ''
          return item
        })
      })
    },
    verification (val, isRequired, type) {
      let phoneReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      let integerReg = /^[0-9]*$/
      let codeReg = /^\d{6}$/

      if (type === 'phone') {
        val = this.user.phone === '' ? val : this.user.phone
      }
      if (type === 'code') {
        return codeReg.test(val)
      }
      if (val === '') {
        if (isRequired === 'Y') {
          return false
        }
      } else {
        switch (type) {
          case 'phone': val = this.user.phone === '' ? val : this.user.phone
            return phoneReg.test(val)
          case 'integer': return integerReg.test(val)
          case 'email': return emailReg.test(val)
        }
      }
      return true
    },
    showAgreement () {
      this.agreementShow = true
    },
    btnClick () {
      this.agreementShow = false
    },
    reArrangeList (arr) {
      const obj = {}
      arr.forEach((item, idx) => {
        obj[item.id] = item.val
      })
      return JSON.stringify(obj)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-signup /deep/ {
  position: absolute;
  top: 790px;
  width: 100%;
  bottom: 0;
  .v-wrap {
    position: absolute;
    -webkit-overflow-scrolling: touch;
    top: 50%;
    overflow: auto;
    max-height: 100%;
    padding: 30px;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    .com-input {
      input {
        font-size: 28px;
      }
      .error-msg {
        font-size: 28px;
      }
    }
    .v-title {
      font-size: 28px;
      margin-bottom: 30px;
    }
    .v-explain {
      text-align: center;
      font-size: 28px;
      color: #555;
      margin-top: 15px;
      .v-blue {
        color: #4b5afe;
      }
    }
    .v-agreement {
      .ve-message-box {
        height: 560px;
        .ve-message-box__header {
          padding-top: 50px;
        }
        .ve-message-box__container {
          height: 480px;
          overflow-y: auto;
        }
      }
    }
  }
}
</style>

