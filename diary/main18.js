addEventListener("load", function () {
  generateList();
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  document.getElementById("dialyDate").value = y + "年" + m + "月" + d + "日";
  document.getElementById("saveButton").addEventListener("click", function () {
    const dialyTitle = document.getElementById("dialyTitle").value;
    const dialyContents = document.getElementById("dialyContents").value;
    const dialyDate = document.getElementById("dialyDate").value;

    saveData = {
      title: dialyTitle,
      contents: dialyContents,
    };
    localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerHTML = "保存に成功しました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("削除するデータがありません");
      } else {
        if (confirm("データを削除しますか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML = "削除に成功しました";
          generateList();
        }
      }
    });
});
function generateList() {
  var data = localStorage;
  var dialyDate = "";
  for (var i = 0; i < data.length; i++) {
    dialyDate = data.key(i) + "\n";
  }
  document.getElementById("list").innerHTML = dialyDate;
}
