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
    document.getElementById("status").innerHTML = "保存することができました";
  });
  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      const dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("データがありません");
      } else {
        if (confirm("データを削除しますか?")) {
          localStorage.removeItem(dialyDate);
          document.getElementById("status").innerHTML = "削除できました";
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
