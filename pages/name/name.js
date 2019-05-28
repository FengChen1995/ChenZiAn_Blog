// pages/name/name.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '姓名排列工具', //导航栏 中间的标题
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    peopleName: [], // 用户名称
    peopleNameArr: null, // 用户名称组合
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data.height)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // var temparr = [
    //   ["Fu", "Hai", "Huan"],
    //   ["Wei", "You"],
    //   ["Chong", "Tong", "Zhong"]
    // ];
    // var ret = this.doExchange(temparr);
    // console.log("共有：" + ret.length + "种组合！");
    // for (var i = 0; i < ret.length; i++) {
    //   console.log(ret[i]);
    // }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 输入框绑定
  inputValue: function(e) {
    console.log(e)
    let that = this
    let name = `peopleName[${e.currentTarget.dataset.name}]`
    let value = e.detail.value
    // var valueArr = []
    // var str
    // for (var index in value) {
    //   if (index < value.length - 1) {
    //     str = value.substr(index, 1)

    //   } else {
    //     str = value[value.length - 1]
    //   }
    //   valueArr.push(str)
    // }
    this.setData({
      [name]: value
    })
  },


  // 表单提交
  submitForm: function(e) {
    let peopleName = this.data.peopleName
    var peopleArr = []

    function show(arr) {
      peopleArr.push(arr)
    }

    function perm(arr) {
      (function fn(source, result) {
        if (source.length == 0)
          show(result);
        else
          for (var i = 0; i < source.length; i++)
            fn(source.slice(0, i).concat(source.slice(i + 1)), result.concat(source[i]));
      })(arr, []);
    }
    perm(peopleName);
    console.log(peopleArr)


    if (peopleName.length != 0 && peopleName[0] && peopleName[1]) {
      var result = []
      for (var index in peopleArr) {
        var peopleNameArr = peopleArr[index]
        for (var subIndex in peopleNameArr) {

          var valueArr = []
          var str
          var value = peopleNameArr[subIndex]

          for (var strIndex in value) {
            if (strIndex < value.length - 1) {
              str = value.substr(strIndex, 1)

            } else {
              str = value[value.length - 1]
            }
            valueArr.push(str)
          }
          peopleNameArr[subIndex] = valueArr
        }
        let temparr = peopleNameArr
        var ret = this.doExchange(temparr);
        result = result.concat(ret)
      }



      this.setData({
        peopleName: [],
        result
      })

      this.copy()


    } else {
      wx.showToast({
        title: '请填写必填项',
        icon: "none"
      })
    }
  },


  // 处理姓排序
  choose: function(arr, size) {
    var result = []

    function swap(arr, i, j) {
      if (i != j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    function perm(arr) {
      (function fn(n) { //为第n个位置选择元素  
        for (var i = n; i < arr.length; i++) {
          swap(arr, i, n);
          if (n + 1 < arr.length - 1) //判断数组中剩余的待全排列的元素是否大于1个  
            fn(n + 1); //从第n+1个下标进行全排列  
          else
            result.push(arr)
          // console.log(result); //显示一组结果  
          swap(arr, i, n);
        }
      })(0);
    }
    perm(arr);
  },


  // 处理名排序
  doExchange: function(doubleArrays) {
    var len = doubleArrays.length;
    if (len >= 2) {
      var len1 = doubleArrays[0].length;
      var len2 = doubleArrays[1].length;
      var newlen = len1 * len2;
      var temp = new Array(newlen);
      var index = 0;
      for (var i = 0; i < len1; i++) {
        for (var j = 0; j < len2; j++) {
          temp[index] = doubleArrays[0][i] +
            doubleArrays[1][j];
          index++;
        }
      }
      var newArray = new Array(len - 1);
      for (var i = 2; i < len; i++) {
        newArray[i - 1] = doubleArrays[i];
      }
      newArray[0] = temp;
      return this.doExchange(newArray);
    } else {
      return doubleArrays[0];
    }
  },


  // 复制

  // 一键复制事件
  copy: function (e) {
    var that = this;
    let data = that.data.result.toString()
    console.log(data)
    wx.setClipboardData({
      //准备复制的数据
      data ,
      success: function (res) {
        wx.showToast({
          title: `一件复制成功,共有${that.data.result.length}种组合`,
          icon: "none"
        });
      }
    })
  }

})