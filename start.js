 // start.js

 Page({

    /**
     * 页面的初始数据
     */
    data: {
      opacity: 0.4,
      disabled: true,
      threshold: 0,
      rule: 'up',
      items: [
        { name: 'up', value: '怕热', checked: 'ture' },
        { name: 'down', value: '怕冷' },
      ]
    },
  
    
  
   
  
    getDataFromOneNet: function () {
      //从oneNET请求我们数据
      const requestTask = wx.request({
        url: 'http://api.heclouds.com/devices/644298804/datapoints?datastream_id=Temperature,Humidity&limit=1',
        header: {
          'content-type': 'application/json',
          'api-key': 'CFy13fWOq5Lywfi=x5WBXNBMFQQ='
        },
        success: function (res) {
          //console.log(res.data)
          //拿到数据后保存到全局数据
          var app = getApp()
          app.globalData.temperature = res.data.data.datastreams[0]
          console.log(app.globalData)
          wx.navigateTo({
            url: '../wifi_station/tianqi/tianqi',
          })
        },
  
        fail: function (res) {
          console.log("fail!!!")
        },
  
        complete: function (res) {
          console.log("end")
        }
      })
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
  
    }
  })