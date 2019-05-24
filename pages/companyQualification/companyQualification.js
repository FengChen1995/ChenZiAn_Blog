// pages/companyQualification/companyQualification.js
var app = getApp()  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeOfEnterprise: [
      {name:'茶叶企业',value:1,checked:true},
      { name: '茶器具企业', value: 2, checked: false},
      { name: '代理商', value: 3, checked: false},
      { name: '个体户', value: 4, checked: false},
      {name:'包装企业',value:5,checked:false},
      {name:'生产加工企业',value:6,checked:false},
      {name:'政府',value:7,checked:false},
      {name:'行业协会',value:8,checked:false},
      {name:'其他',value:9,checked:false},
    ],
    companyQualification: [
      {name: '工商营业执照', value: 1},
      {name: '护照', value: 2},
      {name: '个人身份证', value: 3},
      {name: '台胞证', value: 4},
    ],
    companyLogo: [], // 公司logo
    qualificationFiles: [], // 资质文件
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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


  // 多选框选择
  checkbox: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var typeOfEnterprise = this.data.typeOfEnterprise;//选项集合
    typeOfEnterprise[index].checked = !typeOfEnterprise[index].checked;//改变当前选中的checked值
    this.setData({
      typeOfEnterprise
    });
  },

  
  // 提交表单 
  submitForm: function (e) {
    console.log(e)
  },

  // 上传图片
  uploadImg: function (e) {
    // wx.showActionSheet({
    //   itemList: ['拍摄', '从手机相册选择'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })
  // }
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },
  fail: function (res) {
    console.log(res.errMsg)
  }
  

})