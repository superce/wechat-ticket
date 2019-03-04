//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img5.mtime.cn/mg/2019/02/27/090507.11180888.jpg',
      'http://img5.mtime.cn/mg/2019/03/01/091120.24134285.jpg',
      'http://img5.mtime.cn/mg/2019/02/25/154729.55501959.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    ticket: [
      { id: 'fc3d', name: '福彩3D' },
      { id: 'pl3', name: '排列3' },
      { id: 'pl5', name: '排列5' },
      { id: 'qlc', name: '七乐彩' },
      { id: 'qxc', name: '七星彩' },
      { id: 'zcjqc', name: '四场进球彩' },
      { id: 'zcsfc', name: '十四场胜负彩(任9)' },
      { id: 'ah11x5', name: '安徽11选5 - 高频' },
      { id: 'zcbqc', name: '六场半全场' }
    ]
  },
  goPage(e){
    let nameId = e.target.dataset.id
    console.log(nameId)
    wx.navigateTo({
      url: `../detail/detail?id=${nameId}`,
    })
  },
  h(){
    wx.createCameraContext()
  }
})
