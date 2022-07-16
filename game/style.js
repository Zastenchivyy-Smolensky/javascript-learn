"use strict";

const textInput = document.getElementById("text-input");
const todoList = document.getElementById("todo-list");
const editBtn = document.getElementById("edit");
const addBtn = document.getElementById("add");

document.addEventListener("click", (e) => {
  if (e.target.className == "active-item" || e.target.tagName == "INPUT") {
  } else {
    editBtn.classList.add("hide");
    addBtn.classList.remove("hide");
  }
});
// リスト追加
function newElement() {
  const text = textInput.value.trim();
  const errorMessage = document.getElementById("getError");
  const deleteMessage = document.getElementById("doneDelete");
  if (text === "") {
    errorMessage.classList.remove("hide");
    hideMessage(errorMessage);
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const addMessage = document.getElementById("doneTask");

  li.classList.add("todo-list-item");
  span.textContent = text;
  button.textContent = "削除";
  button.classList.add("todoDelete");
  button.classList.add("hide");

  //削除イベントを追加
  button.addEventListener("click", (e) => {
    todoList.removeChild(e.target.closest("li"));
    textInput.value = "";
    deleteMessage.classList.remove("hide");
    hideMessage(deleteMessage);
  });
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  textInput.value = "";
  addMessage.classList.remove("hide");
  hideMessage(addMessage);
}
//編集ボタン
function editElement() {
  try {
    const text = textInput.value.trim();
    const activeItem = document.getElementsByClassName("active-item");
    const editMessage = document.getElementById("doneEdit");
    const errorMessage = document.getElementById("getError");
    activeItem[0].textContent = text;
    editMessage.classList.remove("hide");
    hideMessage(editMessage);
  } catch (e) {
    errorMessage.classList.remove("hide");
    hideMessage(errorMessage);
    console.log("エラー", e.message);
  }
}

//削除ボタン
const todoDelete = document.getElementsByClassName("todoDelete");
const deleteMessage = document.getElementById("doneDelete");
for (let i = 0; i < todoDelete.length; i++) {
  todoDelete[i].onclick = function () {
    todoList.removeChild(this.parentElement);
    textInput.value = "";
    deleteMessage.classList.remove("hide");
    hideMessage(deleteMessage);
  };
}
//リストをクッリクした時
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    const allList = document.getElementsByClassName("todo-list-item");
    for (let i = 0; i < allList.length; i++) {
      const listItem = allList[i];
      if (listItem) {
        listItem.firstElementChild.classList.remove("active-item");
        listItem.lastElementChild.classList.add("hide");
      }
    }
    if (ev.target.tagName === "SPAN") {
      ev.target.classList.toggle("active-item");
    }
    ev.target.nextElementSibling.classList.remove("hide");
    editBtn.classList.remove("hide");
    editBtn.classList.add("hide");
    textInput.value = event.target.innerHTML;
  },
  false
);

//メッセージを消す
function hideMessage(Element) {
  setTimeout(() => {
    Element.classList.add("hide");
  }, 2500);
}
