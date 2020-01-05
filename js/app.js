window.onload = function() {
    document.getElementById("addButton").onclick = addchoreToList;
}

const chores = [];

const addchoreToList = function() {
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

const renderChores = function() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < chores.length; i++) {
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    const span4 = document.createElement("span");

    span1.innerHTML = "!";
    span2.innerHTML = chores[i].content;
    span3.innerHTML = "&#10004;";
    span3.className = chores[i].complete === true ? "done" : "not-done";
    span4.innerHTML = "&#10006;";
    span4.id = "delete-" + chores[i].id;

    li.append(span1);
    li.append(span2);
    li.append(span3);
    li.append(span4);
    list.append(li);
  }
};
