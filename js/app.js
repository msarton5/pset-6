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
+
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
      span1.setAttribute("id", "spanOne");
    span2.innerHTML = chores[i].content;
      span2.setAttribute("id", "spanTwo");
    span3.innerHTML = "&#10004;"; // check mark
      span3.className = chores[i].complete === true ? "done" : "not-done";
      span3.onclick = markAsDone();
      span3.setAttribute("id" , "spanThree");
    span4.innerHTML = "&#10006;"; // x
      span4.onclick = makeTheThingDisappear();
      span4.setAttribute("id" , "spanFour");
      span4.id = "delete-" + chores[i].id;

const prioritizeListItem = function() {
  span1.setAttribute("id" , "spanOne");

}

const markAsDone = function() {
  span3.setAttribute("id" , "spanThree");
}

const makeTheThingDisappear = function() {
  span4.setAttribute("id" , "spanFour");
  var element = document.getElementById(spanThree);
    element.parentNode.removeChild(spanOne);
    element.parentNode.removeChild(spanFour);
}

    li.append(span1);
    li.append(span2);
    li.append(span3);
    li.append(span4);
    list.append(li);
  }
};
