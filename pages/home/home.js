// pages/blog/blog.js
const app = getApp()
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: app.globalData.height * 2, // 获取顶栏高度
    year: null,
    month: null,
    date: null,
    messageList:[
      {
        banner: "http://ps07w6ria.bkt.clouddn.com/pexels-photo-927493.jpeg?imageView2/0/w/750",
        formType: "摄影",
        bannerAuthor: "Arnie Chou",
        messageCon: "喂,我养你好不好",
        messageAuthor: "ChenZiAn",
        date: "2019/05/23"
      },
      { 
        banner:"http://ps07w6ria.bkt.clouddn.com/markus-spiske-1581260-unsplash.jpg?imageView2/0/w/750",
        formType: "摄影",
        bannerAuthor: "Markus Spiske",
        messageCon:"生活不能等待别人来安排,要自己去争取和奋斗;而不论其结果是喜是悲,但可以慰藉的是,你总不枉在这世界上活了一场.",
        messageAuthor: "路遥",
        date: "2019/05/23"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取当前日期时间
    var date = util.formatTimeDate(new Date());
    date = date.split('/')
    this.setData({
      year: date[0],
      month: date[1],
      date: date[2]
    })
    console.log(date)
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