addEventListener("load", function () {
  generateList();
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
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
    document.getElementById("status").innerHTML = "保存することができました";
    generateList();
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("保存するデータがありません");
      } else {
        if (confirm("データを削除しますか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML =
            "データを削除することができました";
          generateList();
        }
      }
    });
});

function generateList() {
  var data = localStorage;
  var dialyDate = "";
  for (var i = 0; i < data.length; i++) {
    var date = data.key(i);
    dialyDate +=
      `<a href="#" onclick=loadDialy("` + date + `")>` + date + `</a>` + `<br>`;
  }
  document.getElementById("list").innerHTML = dialyDate;
}
function loadDialy(dialyDate) {
  var dialyData = JSON.parse(localStorage.getItem(dialyDate));
  document.getElementById("dialyTitle").value = dialyData.title;
  document.getElementById("dialyDate").value = dialyDate;
  document.getElementById("dialyContents").value = dialyData.contents;
}
