import {
  BookModel
} from '../../models/book.js'
import {
  random
} from '../../util/common.js'
const bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: false,
    more: ''
  },

  onSearch: function (event) {
    this.setData({
      searching: true
    })
  },

  onCancel: function (event) {
    this.setData({
      searching: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const hotList = bookModel.getHotList()
    hotList.then(
      res => this.setData({
        books: res
      })
    )
    // const promise = new Promise((resolve, reject) => {
    //   /**
    //    * promise 的三种状态
    //    * pending  fulfilled rejected
    //    * 进行中     已成功    已失败
    //    * new时
    //    * 
    //    * 状态修改
    //    * resolve：pending--->fulfilled
    //    * reject:  fulfilled--->rejected
    //    * 再执行了resolve()或reject()后promise的状态就凝固了不会再改变了
    //    * 
    //    * 通过then(successCallback, failCallback)来获取异步操作的结果
    //    */
    //   wx.getSystemInfo({
    //     success: res => resolve(res),
    //     fail: error => reject(error)
    //   });
    // })
    // promise.then(
    //   res => console.log(res),
    //   error => console.log(error)
    // ) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      more: random(16)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})