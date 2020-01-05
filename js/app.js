window.onload = function() {
    document.getElementById("addButton").onclick = addItemToList;
}

const chores = [];

const addItemToList = function() {
  const text = document.getElementById("addText").value;
  // let canvas = document.getElementById("toDoCanvas");

  // let text = prompt("Message:");

  const chore = {
    id: chores.length + 1,
    priority: "low",
    content: text,
    complete: false
  };

  chores.push(chore);

  document.getElementById("addText").value = "";
}
