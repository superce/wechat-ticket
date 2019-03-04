// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameId:'',
    pages:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let keyWord = options.id
    console.log(keyWord + '.json')
    // this.setData({
    //   nameId: options.id
    // })
    wx.request({
      url: 'http://f.apiplus.net/' + keyWord + '.json',
      data:{
        'rows': '10'
      },  
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=> {
        console.log(res.data.data)
        let a = res.data.data
        for(let i = 0;i < a.length;i++){
          a[i].opencode = a[i].opencode.split(',')
        }
        this.setData({
          nameId:a
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    console.log('onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    console.log('onshow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHIde')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onunload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉')
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