const ViewerSync = {}
ViewerSync.install = function(Vue, options) {
  Vue.component('ViewerSync', {
    data() {
      return {
        viewer: null
      }
    },
    mounted() {
      this.viewer = document.querySelector(options.el)
      let wrap = this.$el
      this.viewer.style.display = 'block'
      const move = () => {
        wrap.appendChild(this.viewer)
      }
      move()
      if (options.mounted) {
        options.mounted()
      }
    },
    beforeDestroy() {
      this.viewer.style.display = 'none'
      if (options.beforeDestroy) {
        options.beforeDestroy()
      }
    },
    render(h) {
      return h('div', {
        class: 'viewer-sync'
      })
    }
  })
}

export default ViewerSync
