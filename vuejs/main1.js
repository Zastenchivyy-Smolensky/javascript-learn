const app = Vue.createApp({
  data() {
    return {
      count: 0,
      check1: false,
      check2: false,
      order: 0,
      list: [],
      isError: false,
      message: "",
    };
  },
  created() {
    const url = "products.js";
    $.ajax({
      url: url,
      type: "GET",
      dataType: "jsonp",
      jsonp: "callback",
      jsonpCallback: "products",
    })
      .done(
        function (data, textStatus, jqXHR) {
          this.list = data;
        }.bind(this)
      )
      .fail(
        function (jqXHR, textStatus, errorThrown) {
          this.isError = true;
          this.message = "商品リストの読み込みに失敗しました.";
          console.log("通信失敗");
        }.bind(this)
      );
  },
  computed: {
    filtereadList() {
      const app = this;
      const filtereadList = this.list.filter(function (item) {
        let show = true;
        if (app.check1) {
          if (!item.isSale) {
            show = false;
          }
        }
        if (app.check2) {
          if (item.shipping !== 0) {
            show = false;
          }
        }
        return show;
      });
      filtereadList.sort(function (a, b) {
        if (app.order === 1) {
          return 0;
        } else if (app.order === 2) {
          return a.price - b.price;
        }
      });
      return filtereadList;
    },
  },
});
app.config.globalProperties.$filters = {
  number_format(val) {
    return val.toLocaleString();
  },
};

const vm = app.mount("#app");
