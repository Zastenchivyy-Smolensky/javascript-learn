const getUser = async () => {
  const message = "Git: id";
  const url = "https://api.github.com/users/deatiger";

  const json = await fetch(url)
    .then((res) => {
      console.log("成功");
      return res.json();
    })
    .catch((error) => {
      console.error("failed");
      return null;
    });
  const username = json.login;
  console.log(message + username);
};

getUser();
