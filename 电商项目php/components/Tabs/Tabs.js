// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    //点击事件
    // 子向父传递
    handleitemtap(e) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent("tabsItemChange", { index });
    },
  },
});
