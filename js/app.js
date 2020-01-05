window.onload = function() {
    document.getElementById("addButton").onclick = addItemToList;
}

const addItemToList = function() {
  // var input = document.getElementById("addText");
  let canvas = document.getElementById("toDoCanvas");
  let ctx = canvas.getContext("2d");

let text = prompt("Message:");

  ctx.font = "48px Sans-serif";
  ctx.strokeText(text, 30 , 70, canvas.width - 30);
}
