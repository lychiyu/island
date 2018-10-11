// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,  // 类型 必填
      value: false, // 初始值
      observer: function(){ // observer

      }
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: "images/like.png",
    unLikeSrc: "images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event) {
      let like = this.properties.like
      let count = this.properties.count
      count = like?count-1:count+1
      this.setData({
        like: !like,
        count: count
      })
    }
  }
})
