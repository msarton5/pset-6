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

  for (let i = 0; i < chores.length; i++) { // added this
    if (chores.priority == "high") {
      // print those out first
    }
  }

  for (let i = 0; i < chores.length; i++) {
    const li = document.createElement("li");
    const exclamation = document.createElement("BUTTON");
    const userInput = document.createElement("span");
    const checkMark = document.createElement("BUTTON");
    const xMark = document.createElement("BUTTON");

    exclamation.innerHTML = "!"; // exclamation point
      exclamation.onclick = prioritizeListItem();
      exclamation.style.fontWeight = "bold";
    userInput.innerHTML = chores[i].content;
      userInput.style.border = "2px solid black";
      userInput.style.background = "#ffc0cb";
    checkMark.innerHTML = "&#10004;"; // check mark
      checkMark.className = chores[i].complete === true ? "done" : "not-done";
      checkMark.style.color = "green";
      //checkMark.onclick = markAsDone();
    xMark.innerHTML = "&#10006;"; // x
      xMark.style.color = "red";
      //xMark.onclick = makeTheThingDisappear();
    exclamation.setAttribute("id" , "prioritize");
    userInput.setAttribute("id" , "list");
    checkMark.setAttribute("id" , "check");
    xMark.setAttribute("id" , "del");

    li.append(exclamation);
    li.append(userInput);
    li.append(checkMark);
    li.append(xMark);
    list.append(li);
    console.log(li);
  }
}

const prioritizeListItem = function() {
  chores.priority = "high";
  renderChores2(); // makes it rerender after changing the priority
}

const markAsDone = function() {
  document.getElementById("userInput").style.background = "green";
}

const makeTheThingDisappear = function() {
  var remove = document.getElementById(exclamation);
    exclamation.parentNode.removeChild(exclamation);
  var remove2 = document.getElementById(list);
    remove2.parentNode.removeChild(remove2);
  var remove3 = document.getElementById(check);
    check.parentNode.removeChild(check);
  var remove4 = document.getElementById(del);
    del.parentNode.removeChild(del);
}
