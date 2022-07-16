window.addEventListener("load", function () {
  generateList();
  now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  document.getElementById("dialyDate").value =
    year + "年" + month + "月" + date + "日";

  document.getElementById("saveButton").addEventListener("click", function () {
    var dialyTitle = document.getElementById("dialyTitle").value;
    var dialyDate = document.getElementById("dialyDate").value;
    var dialyContents = document.getElementById("dialyContents").value;
    var saveData = {
      title: dialyTitle,
      content: dialyContents,
    };
    window.localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerHTML = "保存しました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) === null) {
        alert("データがありません");
      } else {
        if (confirm("削除しでもいいですか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML = "削除しました";
          generateList();
        }
      }
    });
});

function generateList() {
  var data = window.localStorage;
  var dataList = "";
  for (i = 0; i < data.length; i++) {
    date = data.key(i);
    dataList +=
      `<a href="#" onclick=loadDialy("` + date + `")>` + date + `</a>` + `<br>`;
  }
  document.getElementById("list").innerHTML = dataList;
}

function loadDialy(dialyDate) {
  var dialyData = JSON.stringify(window.localStorage.getItem(dialyDate));
  document.getElementById("dialyTitle").value = dialyData.title;
  document.getElementById("dialyDate").value = dialyDate;
  document.getElementById("dialyContents").value = dialyData.title;
}
