const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}
function addUser(user) {
  var list = document.createElement("li");
  list.innerHTML = user.name;
  lists.appendChild(list);
}

async function listUser() {
  const users = await getUsers();
  users.forEach(addUser);
}
button.addEventListener("click", listUser);
addEventListener("load", listUser);
