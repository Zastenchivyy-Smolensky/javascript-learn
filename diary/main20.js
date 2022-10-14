addEventListener("load", function () {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  document.getElementById("dialyDate").value = y + "年" + m + "月" + d + "日";
});
