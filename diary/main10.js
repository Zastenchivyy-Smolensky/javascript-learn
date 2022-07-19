addEventListener("load", function () {
  generateList();
  now = new Date();
  y = now.getFullYear();
  m = now.getMonth();
  d = now.getDate();
  document.getElementById("dialyDate").value = y + "年" + m + "月" + d + "日";

  document.getElementById("saveButton").addEventListener("click", function () {
    const dialyTitle = document.getElementById("dialyTitle").value;
    const dialyContent = document.getElementById("dialyContents").value;
    const dialyDate = document.getElementById("dialyDate").value;
    saveData = {
      title: dialyTitle,
      contents: dialyContent,
    };

    window.localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerHTML = "保存することができました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("データがありません");
      } else {
        if (confirm("データを消しますか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML =
            "削除することができました";
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
  document.getElementById("dialyContents").value = dialyData.content;
}
