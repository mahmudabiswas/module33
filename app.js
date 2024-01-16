function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
  const ul = document.getElementById("container");

  for (let user of data) {
    const li = document.createElement("li");
    li.innerText = user.title;
    ul.appendChild(li);
  }
}
