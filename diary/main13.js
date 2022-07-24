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
});
function generateList() {
  var data = window.localStorage;
  var dialyDate = "";
  for (var i = 0; i < data.length; i++) {
    dialyDate += data.key(i) + `\n`;
  }
  document.getElementById("list").innerHTML = dialyDate;
}
