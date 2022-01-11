const $addtodo = document.getElementById("addtodo");
const $todolist = document.getElementById("todolist");

$addtodo.addEventListener("keypress", (e) => {
  if (e.code === "Enter" && e.target.value !== "") {
    const todo = e.target.value;
    const $todoItem = document.createElement("li");

    const $todoid = new Date().getTime();

    $todoItem.innerHTML = `
        <input id="${$todoid}" type="checkbox">
        <label for="${$todoid}">${todo}</label>
        `;
    $todolist.appendChild($todoItem);

    $addtodo.value = "";
  }
});

$todolist.addEventListener("click", (e) => {
  if (e.target.checked) {
    e.target.parentElement.classList.add("completed");
  } else {
    e.target.parentElement.classList.remove("completed");
  }
});
