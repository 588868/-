// pages/demon1/demon.js
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
  etDataFromOneNet: function () {
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
          url: '../demon5/demon5',
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

 

  shidu:function(){
    wx.navigateTo({
      url: '../demon6/demon6',
    })
  },
  pm2:function(){
    wx.navigateTo({
      url: '../pm2/pm2',
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const that = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("cloud://wxbdb4324c57b8da55-6d8hha2d06550.7778-wxbdb4324c57b8da55-6d8hha2d06550-1303254539/字体/濑户字体(SetoFont).ttf")',
      success(res) {
        console.log(res.status)
        that.setData({ loaded: true })
      },
      fail: function(res) {
        console.log(res.status)
      },
      complete: function(res) {
        console.log(res.status)
      }
    })
  },
  
 



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
})