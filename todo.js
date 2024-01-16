function todos() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayTodos(data));
}

function displayTodos(todo) {
  // get the data
  const container = document.getElementById("todosContainer");
  for (let todos of todo) {
    // create an element
    const div = document.createElement("div");
    // add inner text
    div.innerHTML = `
        <h1> Id ${todos.id} </h1>
        <p> email ${todos.email} </p>
        <h3> Title ${todos.body} </h3>
        `;
    // append child

    container.appendChild(div);
  }
}
