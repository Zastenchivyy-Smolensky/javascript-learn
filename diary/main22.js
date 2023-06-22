addEventListener("load", function () {
  generateList();
  var dateObj = new Date();
  var Y = dateObj.getFullYear();
  var M = dateObj.getMonth();
  var D = dateObj.getDate() + 1;
  document.getElementById("dialyDate").value = Y + "年" + M + "月" + D + "日";
  document.getElementById("saveButton").addEventListener("click", function () {
    var dialyTitle = document.getElementById("dialyTitle").value;
    var dialyDate = document.getElementById("dialyDate").value;
    var dialyText = document.getElementById("dialyContents").value;
    alert("成功");
    var saveData = {
      title: dialyTitle,
      contents: dialyText,
    };
    localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerText = "保存に成功しました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("削除する日記が存在しません");
      } else {
        if (confirm("削除してもよろしいですか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerText = "削除しました";
          generateList();
        }
      }
    });
});
function generateList() {
  var data = localStorage;
  var dateList = "";
  for (var i = 0; i < data.length; i++) {
    var date = data.key(i);
    dateList +=
      `<a href="#" onclick=loadDialy("` + date + `")>` + date + `</a>` + `<br>`;
  }
  document.getElementById("list").innerHTML = dateList;
}

function loadDialy(dialyDate) {
  var dialyData = JSON.parse(localStorage.getItem(dialyDate));
  document.getElementById("dialyTitle").value = dialyData.title;
  document.getElementById("dialyContents").value = dialyData.contents;
  document.getElementById("dialyDate").value = dialyDate;
}
