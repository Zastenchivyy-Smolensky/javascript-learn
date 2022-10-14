const btnLoad = document.querySelector("#load");

btnLoad.addEventListener("click", function (event) {
  const xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const products = this.response;
      const result = document.querySelector("#result");
      result.textContent = "";
      for (let i = 0; i < products.length; i++) {
        let text = "商品名" + products[i].name;
        text += "料金" + products[i].price;
        text += "画像パス" + products[i].image;
        text += "送料" + products[i].shipping;
        text += "セール対象" + products[i].isSale;
        const div = document.createElement("div");
        div.textContent = text;
        result.appendChild(div);
      }
      console.log(this.readyStatem, this.response);
    }
  };
  xmlHttpRequest.responseType = "json";
  xmlHttpRequest.open("GET", "products.json");
  xmlHttpRequest.send();
});
