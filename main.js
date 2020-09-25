import { throttle, isFunction } from 'lodash'

const ViewerSync = {}
ViewerSync.install = function (Vue, options) {
  Vue.component('ViewerSync', {
    data() {
      return {
        viewer: null,
        observer: null
      }
    },
    mounted() {
      this.viewer = document.querySelector(options.el)
      let wrap = this.$el
      this.viewer.style.display = 'block'
      const handleStyle = throttle(() => {
        this.viewer.style.top = wrap.offsetTop + 'px'
        this.viewer.style.left = wrap.offsetLeft + 'px'
        this.viewer.style.width = wrap.offsetWidth + 'px'
        this.viewer.style.height = wrap.offsetHeight + 'px'
        this.$emit('resize')
        if (isFunction(options.onResize)) {
          options.onResize()
        }
      }, 100)
      handleStyle()
      this.observer = new MutationObserver(handleStyle)
      window.addEventListener('resize', handleStyle)
      this.observer.observe(wrap, {
        attributes: true,
        childList: true,
        subtree: true
      })
      if (isFunction(options.mounted)) {
        options.mounted()
      }
    },
    beforeDestroy() {
      this.viewer.style.display = 'none'
      this.observer.disconnect()
      if (isFunction(options.beforeDestroy)) {
        options.beforeDestroy()
      }
    },
    render(h) {
      return h(
        'div',
        {
          class: 'viewer-sync'
        },
        this.$slots.default
      )
    }
  })
}

export default ViewerSync
