const innerAudioContext = wx.createInnerAudioContext();
Page({
  onLoad: function (e) {
    this.data.index = 0;
  },
  data: {
    //index等于索引值
    index: 0,
    id: 0,
    src: "https://www.dubai7794.xyz/pic/zan.png",
  },
  handlemusicButtom: function (e) {
    if (0 == this.data.index) {
      var id = getId(e);
      console.log(id);
      if(id == 1){
        innerAudioContext.src = 
        "http://www.dubai7794.xyz/music/%E5%A3%B9%E8%B5%B7%E7%A7%91%E6%8A%80.mp3";
        this.setData({
          src1:"https://www.dubai7794.xyz/pic/bof.png",
          src2:"https://www.dubai7794.xyz/pic/zan.png",
          src3:"https://www.dubai7794.xyz/pic/zan.png",
          src4:"https://www.dubai7794.xyz/pic/zan.png"
        })
      }
      if(id == 2){
        innerAudioContext.src ="http://www.dubai7794.xyz/music/%E5%B8%88%E5%85%84%E6%9A%96%E6%9A%96.mp3";
        this.setData({
          src1:"https://www.dubai7794.xyz/pic/zan.png",
          src2:"https://www.dubai7794.xyz/pic/bof.png",
          src3:"https://www.dubai7794.xyz/pic/zan.png",
          src4:"https://www.dubai7794.xyz/pic/zan.png"
        })
      }

      if(id == 3){
        innerAudioContext.src ="http://www.dubai7794.xyz/music/%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%98%AF%E5%B0%8F%E5%88%9D.mp3";
        this.setData({
          src1:"https://www.dubai7794.xyz/pic/zan.png",
          src2:"https://www.dubai7794.xyz/pic/zan.png",
          src3:"https://www.dubai7794.xyz/pic/bof.png",
          src4:"https://www.dubai7794.xyz/pic/zan.png"
        })
      }

      if(id == 4){
        innerAudioContext.src ="http://www.dubai7794.xyz/music/%E7%99%BE%E7%AB%8B%E5%BA%B7.mp3";
        this.setData({
          src1:"https://www.dubai7794.xyz/pic/zan.png",
          src2:"https://www.dubai7794.xyz/pic/zan.png",
          src3:"https://www.dubai7794.xyz/pic/zan.png",
          src4:"https://www.dubai7794.xyz/pic/bof.png",
        })
      }
      innerAudioContext.play();
      this.setData({
        index: id,
      });
    } 
    else {
      innerAudioContext.pause();
      this.setData({
        index: 0,
        src:"https://www.dubai7794.xyz/pic/zan.png"
      });
    }
  },
  handlenav: function (e) {
    wx.navigateTo({
      url: "../fresh-info1/index",
    });
  },
});
function getId(obj) {
  var id = obj.target.id;
  return id;
}

