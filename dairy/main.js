window.addEventListener("load", function () {
  generateList();
  var now = new Date();
  var Year = now.getFullYear();
  var Month = now.getMonth() + 1;
  var date = now.getDate();
  document.getElementById("dialyDate").value =
    Year + "年" + Month + "月" + date + "日";
  document.getElementById("saveButton").addEventListener("click", function () {
    var dialyTitle = document.getElementById("dialyTitle").value;
    var dialyDate = document.getElementById("dialyDate").value;
    var dialyContents = document.getElementById("dialyContents").value;
    var saveData = {
      title: dialyTitle,
      contents: dialyContents,
    };
    window.localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerHTML = "保存しました";
    generateList();
  });
  document.getElementById("deleteButton").addEventListener(
    "click",
    function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("データがありません");
      } else {
        if (confirm("削除してもよろしいですか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML = "削除しました";
          generateList();
        }
      }
    },
    true
  );
});

function generateList() {
  var data = window.localStorage;
  var dataList = "";
  for (var i = 0; i < data.length; i++) {
    var date = data.key(i);
    dataList +=
      `<a href="#" onclick=loadDialy("` + date + `")>` + date + `</a>` + `<br>`;
  }
  document.getElementById("list").innerHTML = dataList;
}
function loadDialy(dialyDate) {
  var dialyData = JSON.parse(window.localStorage.getItem(dialyDate));
  document.getElementById("dialyTitle").value = dialyData.title;
  document.getElementById("dialyTitle").value = dialyDate;
  document.getElementById("dialyTitle").value = dialyData.contents;
}
