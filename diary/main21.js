addEventListener("load", function () {
  generateList();
  var dateObj = new Date();
  var Y = dateObj.getFullYear();
  var M = dateObj.getMonth();
  var D = dateObj.getDate() + 1;
  document.getElementById("dialyDate").value = Y + "年" + M + "月" + D + "日";
  document.getElementById("saveButton").addEventListener("click", function () {
    const dialyTitle = document.getElementById("dialyTitle").value;
    const dialyDate = document.getElementById("dialyDate").value;
    const dialyText = document.getElementById("dialyContents").value;

    var saveData = {
      title: dialyTitle,
      contents: dialyText,
    };
    localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerText = "内容を保存しました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("削除する項目がありません");
      } else {
        if (confirm("削除してもよろしいでしょうか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerText =
            dialyDate + "の日記を削除しました";
          generateList();
        }
        alert("削除する日記を消しました");
      }
    });
});

function generateList() {
  var data = localStorage;
  var dataList = "";
  for (var i = 0; i < data.length; i++) {
    dataList += data.key(i) + `\n`;
  }
  document.getElementById("list").innerText = dataList;
}
