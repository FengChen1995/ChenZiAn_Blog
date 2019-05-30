// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: app.globalData.height * 2,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: [], // 用户信息
    impower: false, // 授权与否
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this 
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

  },
  // 查看授权
  // checkAuthorization: function (e) {
  //   let that = this
  //   wx.getSetting({
  //     success(res) {
  //       console.log(res)
  //       if (res.authSetting['scope.userInfo']) {
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称
  //         wx.getUserInfo({
  //           success: function (res) {
  //             that.setData({
  //               userInfo: res.userInfo
  //             })
  //           }
  //         })
  //       } else {
  //         console.log("没有授权")
  //         that.setData({
  //           impower: false,
  //         })
  //       }
  //     },
  //   })
  // },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },

  
  // 前往姓名排列工具
  goToName: function (e) {
    wx.navigateTo({
      url: '/pages/name/name',
    })
  },


  // 修改签名弹窗
  alterSignature: function (e) {
    console.log("修改签名")
  }
})