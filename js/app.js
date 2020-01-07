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
    renderChores();
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

    span1.innerHTML = "!"; // exclamation point
      span1.onclick = prioritizeListItem();
    span2.innerHTML = chores[i].content;
    span3.innerHTML = "&#10004;"; // check mark
      span3.className = chores[i].complete === true ? "done" : "not-done";
      span3.onclick = markAsDone();
    span4.innerHTML = "&#10006;"; // x
      span4.onclick = makeTheThingDisappear();
    span1.setAttribute("id" , "prioritize" + i);
    span2.setAttribute("id" , "list" + i);
    span3.setAttribute("id" , "check" + i);
    span4.setAttribute("id" , "del" + i);

    li.append(span1);
    li.append(span2);
    li.append(span3);
    li.append(span4);
    list.append(li);
  }
};

const prioritizeListItem = function() {
  var number = Number(this.id.charAt(10))
  chore.priority = high
}

const markAsDone = function() {
  var number = Number(this.id.charAt(5))
  document.getElementById("priority").style.color = "green";
  document.getElementById("list").style.color = "green";
  document.getElementById("check").style.color = "green";
  document.getElementById("del").style.color = "green";
}

const makeTheThingDisappear = function() {
  var number = Number(this.id.charAt(3))
  var remove = document.getElementById(prioritize);
  var remove2 = document.getElementById(list);
  var remove3 = document.getElementById(check);
  var remove4 = document.getElementById(del);
}
