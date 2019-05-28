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
        date: "2019/05/28"
      },
      {
        banner: "http://ps07w6ria.bkt.clouddn.com/medium_zUWRPWQkKYIbkQM_BLBMH1miIdjHHB5v8m-nGGYMdbI.jpg?imageView2/0/w/750",
        formType: "摄影",
        bannerAuthor: "Echo Luoli",
        messageCon: "任何瞬间的心动都不容易，不要怠慢了它。",
        messageAuthor: "ChenZiAn",
        date: "2019/05/27"
      },
      {
        banner: "http://ps07w6ria.bkt.clouddn.com/pexels-photo-2307566.jpeg?imageView2/0/w/750",
        formType: "摄影",
        bannerAuthor: "Wendy Wei",
        messageCon: "曾经拥有的东西被夺走，并不代表就会回到原来没有那种东西的时候。",
        messageAuthor: "ChenZiAn",
        date: "2019/05/26"
      },
      {
        banner: "http://ps07w6ria.bkt.clouddn.com/pexels-photo-2299662.jpeg?imageView2/0/w/750",
        formType: "摄影",
        bannerAuthor: "Henry & Co.",
        messageCon: "命运早晚会让我们和某些人相遇，一个接一个，而那些人可以让我们知道我们可以让自己，以及不该让自己成为什么样的人。",
        messageAuthor: "ChenZiAn",
        date: "2019/05/25"
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
    this.animation = wx.createAnimation()
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
  ,

  // 处理月份
  

  // 滑动容器变更
  swiperChange: function (e) {
    let currentTab = e.detail.current
    let data = this.data.messageList[currentTab].date
    data = data.split('/')
    let year = data[0]
    let month = data[1] * 1
    let date = data[2]
    month = util.getEnMonth(month);
    console.log(year, month, date)
    this.setData({
      year,
      month,
      date
    })
  },  

  // 动画效果
  // animationUp: function (e) {
  //   this.animation.top('-500rpx').step()
  //   this.setData({ animation: this.animation.export() })
  // }
})