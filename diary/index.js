window.addEventListener("load", function () {
  generateList();
  var dateObj = new Date();
  var Year = dateObj.getFullYear();
  var Month = dateObj.getMonth() + 1;
  var date = dateObj.getDate();
  document.getElementById("dialyDate").value =
    Year + "年" + Month + "月" + date + "日";
  document.getElementById("saveButton").addEventListener("click", function () {
    var dialyTitle = document.getElementById("dialyTitle").value;
    var dialyDate = document.getElementById("dialyDate").value;
    var dialyContents = document.getElementById("dialyContents").value;
    var errMsg = "";
    if (dialyTitle == "") {
      errMsg = errMsg + "タイトルが必須です";
    }
    if (dialyTitle.length > 30) {
      errMsg = "エラーメッセージ";
    }
    if (dialyDate == "") {
      errMsg = errMsg + "日付が必須です";
    }
    var dateResult = dialyDate.match(/^\d{1,4}年\d{1,2}月\d{1,2}日/);
    if (dateResult == null) {
      errMsg = "エラー";
    }
    if (errMsg != "") {
      alert("保存に失敗しました=>" + errMsg);
      return false;
    }
    var saveData = {
      title: dialyTitle,
      contents: dialyContents,
    };
    window.localStorage.setItem(dialyDate, JSON.stringify(saveData));
    document.getElementById("status").innerHTML = "内容を保存しました";
    generateList();
  });
  document.getElementById("deleteButton").addEventListener(
    "click",
    function () {
      var dialyDate = document.getElementById("dialyDate").value;
      if (localStorage.getItem(dialyDate) == null) {
        alert("ありません");
      } else {
        if (confirm("削除してもよろしいですか")) {
          localStorage.removeItem("dialyDate");
          document.getElementById("status").innerHTML =
            dialyDate + "の日記を削除しました";
          generateList();
        }
      }
    },
    true
  );
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
