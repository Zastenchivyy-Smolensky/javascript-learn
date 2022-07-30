addEventListener("load", function () {
  generateList();
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  document.getElementById("dialyDate").value = y + "時" + m + "月" + d + "日";
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
        alert("削除するデータがありません");
      } else {
        if (confirm("データを削除しますか？")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML = "削除に成功しました";
          generateList();
        }
      }
    });
});
function generateList() {
  var data = window.localStorage;
  var dateList = "";
  for (var i = 0; i < data.length; i++) {
    var date = data.key(i);
    dateList +=
      `<a href="#" onclick=loadDialy("` + date + `")>` + date + `</a>` + `<br>`;
  }
  document.getElementById("list").innerHTML = dateList;
}

function loadDialy(dialyDate) {
  var dialyData = JSON.parse(window.localStorage.getItem(dialyDate));
  document.getElementById("dialyTitle").value = dialyData.title;
  document.getElementById("dialyDate").value = dialyDate;
  document.getElementById("dialyContents").value = dialyData.contents;
}
