const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

function addList(user) {
  const list = document.createElement("li");
  list.innerHTML = user.name;
  lists.appendChild(list);
}

async function listUsers() {
  //データのやりとり
  const users = await getUsers();
  //DOM操作
  users.forEach(addList);
}

button.addEventListener("click", listUsers);
window.addEventListener("load", listUsers);
