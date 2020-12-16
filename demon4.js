Page({
  data: {
    key1: '',
    value1: '',
    disabled: true
  },

  keyInput: function(e) {
    this.setData({
      key1: e.detail.key
    })
    if(this.data.value1!=''){
      this.setData({
        disabled: false
      })
    }
  },

  valueInput: function (e) {
    this.setData({
      value1: e.detail.value
    })
    if (this.data.key1 != '') {
      this.setData({
        disabled: false
      })
    }
  },

  setStorageSync: function(){
    try {
      wx.setStorageSync(this.data.key1, this.data.value1)
      wx.showToast({
        title: '存储成功！',
        icon: 'success'
      })
    }catch(e) {
      console.log(e)
    }
  }
})