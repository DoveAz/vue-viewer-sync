const ViewerSync = {}
let viewer = null
ViewerSync.install = function(Vue, options) {
  Vue.component('ViewerSync', {
    mounted() {
      viewer = viewer || document.querySelector(options.el)
      let wrap = this.$el
      viewer.style.display = 'block'
      const move = () => {
        wrap.appendChild(viewer)
      }
      move()
      if (options.mounted) {
        options.mounted()
      }
    },
    beforeDestroy() {
      viewer.style.display = 'none'
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
