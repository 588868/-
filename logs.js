//logs.js
//var util = require('../../utils/util.js')

 Page({
   data: {
     li:"",
     lunar:true,
     logs: [],
     dayStyle: [
      {month: 'current', day: new Date().getDate(), color: 'red', background: '#c8f49c'},
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' }
    ],

   },
   day:function(){
     try{
       wx.setStorageSync('shijian', this.data.dayStyle[1].day)
       wx.setStorageSync('li', this.data.li)
      if(this.data.li!=this.data.dayStyle[1].day) wx.showToast({
         title: '打卡成功',
         icon:'success'
       })
       else
       wx.showToast({
         title: '亲爱的，你今天已打卡了呦',
         icon:"none"
       })
   }
  catch(e){
    console.log(e)
  }},
   dayClick: function (event) {
    let clickDay = event.detail.day;
    let changeBgColor = `dayStyle[0].color`;
    let changeBg = `dayStyle[0].background`;
    let changeDay = `dayStyle[1].day`;
    let changeEndBg = `dayStyle[1].background`;

    this.setData({
      [changeDay]: clickDay,
      [changeBg]:"rgba(255,255,255,0)",
      [changeBgColor]:"black",
      [changeEndBg]: "#c8f49c"
    })
 
  },
   onLoad: function () {
     this.setData({
       logs: (wx.getStorageSync('logs') || []).map(log => {
         return util.formatTime(new Date(log))
       })
     })  } })
