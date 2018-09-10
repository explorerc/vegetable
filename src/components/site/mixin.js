function parseDom (str) {
  var div = document.createElement('div')
  div.innerHTML = str
  return div.children
};

export default {
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default () {
        return {

        }
      }
    }
  },
  data () {
    return {
      enable: true
    }
  },
  mounted () {
    if (this.edit && this.value.enable) {
      this.$refs.target.addEventListener('mouseover', this.handleEnter)
      this.$refs.target.addEventListener('mouseout', this.handleLeave)
      this.$refs.edit = parseDom('<div ref="edit" class="edit"><i class="iconfont icon-delete"></i><i class="iconfont icon-pen"></i></div>')[0]
      this.$refs.target.insertBefore(this.$refs.edit, this.$refs.target.firstChild)
      this.$refs.edit.querySelector('.icon-delete').addEventListener('click', this.disable)
      this.$refs.edit.querySelector('.icon-pen').addEventListener('click', this.showEdit)
      this.$refs.target.style.border = '2px dashed transparent'
    }
  },
  filters: {
    voidLink (value) {
      return value || 'javascript:void(0)'
    }
  },
  methods: {
    handleEnter (e) {
      e.stopPropagation()
      if (this.edit) {
        this.$refs.target.style.border = '2px dashed #ff0000'
        this.$refs.edit.style.display = 'block'
      }
    },
    handleLeave () {
      if (this.edit) {
        this.$refs.target.style.border = '2px dashed transparent'
        this.$refs.edit.style.display = 'none'
      }
    },
    showEdit () {
      let rect = this.$refs.target.getBoundingClientRect()
      this.$refs.editTarget.show(rect)
    },
    disable () {
      this.value.enable = false
    }
  }
}
