import {
  BookModel
} from '../../models/book.js'

const bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: null,
    comments: [],
    likeStatus: false,
    likeCounts: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接收外部传过来的数据
    const id = options.id
    const detail = bookModel.getDeatil(id)
    const likeStatus = bookModel.getLikeStatus(id)
    const comments = bookModel.getComments(id)

    detail.then(res=>{
      this.setData({
        book: res
      })
    })
    comments.then(res=>{
      this.setData({
        comments: res.comments
      })
    })
    likeStatus.then(res=>{
      this.setData({
        likeStatus: res.like_status,
        likeCounts: res.fav_nums
      })
    })
    
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})