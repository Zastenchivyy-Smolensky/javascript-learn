const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

//関数
function addList(user) {
  const list = document.createElement("li");
  list.innerHTML = user.name;
  lists.appendChild(list);
}

async function listUsers() {
  const users = await getUsers();
  //DOM操作
  users.forEach(addList);
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

button.addEventListener("click", listUsers);
addEventListener("load", listUsers);
