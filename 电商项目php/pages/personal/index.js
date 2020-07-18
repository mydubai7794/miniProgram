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
        "http://www.dubai7794.xyz/music/%E8%89%BE%E5%93%B2%E7%BD%97.mp3";
        this.setData({
          src1:"https://www.dubai7794.xyz/pic/bof.png",
          src2:"https://www.dubai7794.xyz/pic/zan.png",
          src3:"https://www.dubai7794.xyz/pic/zan.png",
          src4:"https://www.dubai7794.xyz/pic/zan.png",
          src5:"https://www.dubai7794.xyz/pic/zan.png"
        })
      }
      if(id == 2){
        innerAudioContext.src ="http://www.dubai7794.xyz/music/方骆音频.mp3";
        this.setData({
          src1:"https://www.dubai7794.xyz/pic/zan.png",
          src2:"https://www.dubai7794.xyz/pic/bof.png",
          src3:"https://www.dubai7794.xyz/pic/zan.png",
          src4:"https://www.dubai7794.xyz/pic/zan.png",
          src5:"https://www.dubai7794.xyz/pic/zan.png"
        })
      }

      if(id == 3){
        innerAudioContext.src ="http://www.dubai7794.xyz/music/辛童.mp3";
        this.setData({
          src1:"https://www.dubai7794.xyz/pic/zan.png",
          src2:"https://www.dubai7794.xyz/pic/zan.png",
          src3:"https://www.dubai7794.xyz/pic/bof.png",
          src4:"https://www.dubai7794.xyz/pic/zan.png",
          src5:"https://www.dubai7794.xyz/pic/zan.png"
        })
      }

      if(id == 4){
        innerAudioContext.src ="http://www.dubai7794.xyz/music/叶晔.mp3";
        this.setData({
          src1:"https://www.dubai7794.xyz/pic/zan.png",
          src2:"https://www.dubai7794.xyz/pic/zan.png",
          src3:"https://www.dubai7794.xyz/pic/zan.png",
          src4:"https://www.dubai7794.xyz/pic/bof.png",
          src5:"https://www.dubai7794.xyz/pic/zan.png"
        })
      }

      if(id == 5){
        innerAudioContext.src ="http://www.dubai7794.xyz/music/虞斌.mp3";
        this.setData({
          src1:"https://www.dubai7794.xyz/pic/zan.png",
          src2:"https://www.dubai7794.xyz/pic/zan.png",
          src3:"https://www.dubai7794.xyz/pic/zan.png",
          src4:"https://www.dubai7794.xyz/pic/zan.png",
          src5:"https://www.dubai7794.xyz/pic/bof.png"
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

