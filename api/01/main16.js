const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function listUser() {
  const users = await getUser();
  users.forEach(addUser);
}

function addUser(user) {
  const list = document.createElement("li");
  list.innerHTML = user.name;
  lists.appendChild(list);
}

button.addEventListener("click", listUser);
addEventListener("load", listUser);
