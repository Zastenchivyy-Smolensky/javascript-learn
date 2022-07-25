addEventListener("load", function () {
  generateList();
  now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
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
    document.getElementById("status").innerHTML = "成功しました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("データがない");
      } else {
        if (confirm("データを本当に消しますか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML = "削除しました";
          generateList();
        }
      }
    });
});

function generateList() {
  var data = localStorage;
  var dialyData = "";
  for (var i = 0; i < data.length; i++) {
    dialyData = data.key(i) + "\n";
  }
  document.getElementById("list").innerHTML = dialyData;
}
