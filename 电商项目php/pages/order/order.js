// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuRightGoods: [{
      shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
     
      name: "商品介绍",
      
      newPrice: "1",
     
    },
    {
      shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
    
      name: "商品介绍",
      
      newPrice: "2",
      
    },
    {
      shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
    
      name: "商品介绍",
      
      newPrice: "3",
      
    },
    {
      shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
      
      name: "商品介绍",
      
      newPrice: "4",
      
    },
    
    ],
    menuRightTitle: "所有商品",
    index: 1,
    curNav: 0,
    left_menus: [{
        menu_name: "所有商品",
        id: 0
      },
      {
        menu_name: "商品分类1",
        id: 1
      },
      {
        menu_name: "商品分类2",
        id: 2
      },
   
      
    ],
    oneIsShow: true,
 
  },
  //点击出现右边栏  
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index),
      shopname = e.target.dataset.name;
      // 我这里数据写的是静态的，所以声明一个数组然后用switch重新赋值
    var newGoods = [];
    console.log(shopname);
    console.log(index);
    switch (index) {
      case 0:
        newGoods = [{
            shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
           
            name: "商品介绍",
            
            newPrice: "1",
           
          },
          {
            shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
          
            name: "商品介绍",
            
            newPrice: "2",
            
          },
          {
            shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
          
            name: "商品介绍",
            
            newPrice: "3",
            
          },
          {
            shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
            
            name: "商品介绍",
            
            newPrice: "4",
            
          },
          
        ]
        break;
      case 1:
        newGoods = [{
          shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
         
          name: "商品介绍",
          
          newPrice: "1",
        }]
        break;
      case 2:
        newGoods = [
        {
          shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
        
          name: "商品介绍",
          
          newPrice: "2",
          
        },
        {
          shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
        
          name: "商品介绍",
          
          newPrice: "3",
          
        },
        {
          shopImg: "https://www.dubai7794.xyz/pic/pic1.jpg",
          
          name: "商品介绍",
          
          newPrice: "4",
          
        },
      ]
        break;
      
    }
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,//设置当前点击项
      curIndex: index,//更改当前点击项下标为当前数组下标
      menuRightTitle: shopname,//设置右侧显示栏标题
      menuRightGoods: newGoods//设置需要展示的商品
    })
  },

})
























































































































































































































































































































































































































































































































