window.addEventListener("load", function () {
  generateList();

  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  document.getElementById("dialyDate").value = y + "年" + m + "月" + d + "日";

  document.getElementById("saveButton").addEventListener("click", function () {
    var dialyTitle = document.getElementById("dialyTitle").value;
    var dialyDate = document.getElementById("dialyDate").value;
    var dialyContents = document.getElementById("dialyContents").value;
    var saveData = {
      title: dialyTitle,
      contents: dialyContents,
    };
    window.localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerHTML = "保存できました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) === null) {
        alert("削除するデータがないです");
      } else {
        if (confirm("削除してもいいですか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML = "削除できました";
          generateList();
        }
      }
    });
});

function generateList() {
  const data = window.localStorage;
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
