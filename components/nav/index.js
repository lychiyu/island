// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 需要从外部获取
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 内部数据
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft(event) {
      if (!this.properties.latest) {
        this.triggerEvent('left', {}, {})

      }
    },

    onRight(event) {
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {})
      }
    }
  }
})