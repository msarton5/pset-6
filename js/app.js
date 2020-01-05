window.onload = function() {
    document.getElementById("addButton").onclick = addItemToList;
}

const addItemToList = function() {
  var input = document.getElementById("addButton");
  alert(input);

}

function getUserName() {
  var nameField = document.getElementById('nameField').value;
  var result = document.getElementById('result');

  if (nameField.length < 3) {
    result.textContent = 'Username must contain at least 3 characters';
    //alert('Username must contain at least 3 characters');
  } else {
    result.textContent = 'Your username is: ' + nameField;
    //alert(nameField);
  }
  var subButton = document.getElementById('subButton');
    subButton.addEventListener('click', getUserName, false);
}
