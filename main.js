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
      this.viewer.style.position = 'absolute'
      let wrap = this.$el
      this.viewer.style.display = 'block'
      console.log(wrap.getBoundingClientRect())
      const handleStyle = throttle(() => {
        const {top,left,width,height} = wrap.getBoundingClientRect()
        this.viewer.style.top = top + document.documentElement.scrollTop + 'px'
        this.viewer.style.left = left + document.documentElement.scrollLeft + 'px'
        this.viewer.style.width = width + 'px'
        this.viewer.style.height = height + 'px'
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
