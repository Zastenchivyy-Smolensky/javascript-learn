$("#load").on("click", clickHandler);
function clickHandler(event) {
  $.ajax({
    url: "products.json",
    type: "GET",
    dataType: "json",
  })
    .done(function (data, testStatus, jqXHR) {
      updateScreen(data);
    })
    .fail(function (jqXHR, testStatus, errorThrown) {
      console.log("失敗");
    });
}
function updateScreen(products) {
  $("#result").empty();
  let list = "";
  for (let i = 0; i < products.length; i++) {
    list += "<div>";
    list += "商品名" + products[i].name;
    list += "料金" + products[i].price;
    list += "画像パス" + products[i].image;
    list += "送料" + products[i].shipping;
    list += "セール対象" + products[i].isSale;
    list += "</div>";
  }
  $("#result").append(list);
}
