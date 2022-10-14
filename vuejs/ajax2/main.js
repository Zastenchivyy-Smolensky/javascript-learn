const url = "products.js";
$.ajax({
  url: url,
  type: "GET",
  dataType: "jsonp",
  jsonp: "callback",
  jsonpCallback: "products",
})
  .done(function (data, textStatus, jqXHR) {
    console.log(data);
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.log("失敗");
  });
