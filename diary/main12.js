addEventListener("load", function () {
  generateList();
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();

  document.getElementById("dialyDate").value = y + "年" + m + "月" + d + "日";

  document.getElementById("saveButton").addEventListener("click", function () {
    const dialyTitle = document.getElementById("dialyTitle").value;
    const dialyDate = document.getElementById("dialyDate").value;
    const dialyContents = document.getElementById("dialyContents").value;

    saveData = {
      title: dialyTitle,
      contents: dialyContents,
    };
    localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerHTML = "保存しました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      const dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("削除するデータがありません");
      } else {
        if (confirm("削除してもいいですか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML = "削除しました";
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
  var dialyData = JSON.parse(window.localStorage.setItem(dialyDate));
  document.getElementById("dialyTitle").value = dialyData.title;
  document.getElementById("dialyTitle").value = dialyDate;
  document.getElementById("dialyContents").value = dialyData.contents;
}
