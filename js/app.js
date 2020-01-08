window.onload = function() {
    document.getElementById("addButton").onclick = addChoreToList;
}

const chores = [];

const addChoreToList = function() {
  const text = document.getElementById("addText").value;
  const chore = {
    id: chores.length,
    priority: "low",
    content: text,
    complete: false
  };
  chores.push(chore);

  document.getElementById("addText").value = "";

    const renderChores = function(template , node) {
      node.innerHTML = template;

      var template = 'list';
        render(template, document.querySelector('#list'));
    }
    renderChores2();
}

function renderChores2() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < chores.length; i++) {
    const div = document.createElement("div");
    const exclamation = document.createElement("BUTTON");
    const userInput = document.createElement("span");
    const checkMark = document.createElement("BUTTON");
    const xMark = document.createElement("BUTTON");

    exclamation.innerHTML = "!"; // exclamation point
    //  exclamation.onclick = prioritizeListItem();
      exclamation.style.fontWeight = "bold";
      exclamation.onclick = prioritizeListItem;
    userInput.innerHTML = chores[i].content;
      userInput.style.border = "2px solid black";
      userInput.style.background = chores[i].complete === true ? "green" : "#ffc0cb";
    checkMark.innerHTML = "&#10004;"; // check mark
      checkMark.className = chores[i].complete === true ? "done" : "not-done";
      checkMark.style.color = "green";
      checkMark.onclick = markAsDone;
    xMark.innerHTML = "&#10006;"; // x
      xMark.style.color = "red";
      xMark.onclick = makeTheThingDisappear;
    exclamation.setAttribute("id" , "prioritize-" + i);
    userInput.setAttribute("id" , "list");
    checkMark.setAttribute("id" , "check-" + i);
    xMark.setAttribute("id" , "del-" + i);

    div.append(exclamation);
    div.append(userInput);
    div.append(checkMark);
    div.append(xMark);
    list.append(div);
  }
}

const prioritizeListItem = function() {
  const index = this.id.substring(11);

  if (chores[index].priority === "low") {
    chores[index].priority = "high";

    const chore = chores.splice(index, 1)[0];
    chores.unshift(chore);
  } else {
    chores[index].priority = "low";

    const chore = chores.splice(index, 1)[0];
    chores.push(chore);
  }

  renderChores2();
}

const markAsDone = function() {
  const index = this.id.substring(6);

  chores[index].complete = !chores[index].complete;

  renderChores2();
}

const makeTheThingDisappear = function() {
  const index = this.id.substring(4);
  chores.splice(index, 1);
  renderChores2();
}
