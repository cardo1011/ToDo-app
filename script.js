"use strict";

const addBtn = document.getElementById("Add");
const clearBtn = document.getElementById("Clear");
const inputField = document.getElementById("text-field");
const list = document.getElementById("container2");
let ul = document.getElementById("taskList");
let taskId = 1;

//making container2 not visible until later
list.style.visibility = "hidden";

//function to add a task input from the text box
function addTask() {
  let input = document.getElementById("text-field").value;

  if (!input) {
    alert("Type something that can ACTUALLY be added dumbass...");
  } else {
    //making container2 visible once a task is added
    list.style.visibility = "visible";

    //creating a new li element and assigning the HTML id to it
    let newLi = document.createElement("li");
    newLi.id = `li${taskId}`;

    //adding an "ⓧ" button to each li element with a corresponding HTML id
    let xBtn = document.createElement("button");
    xBtn.textContent = "ⓧ";
    xBtn.id = `xBtn${taskId}`;

    //adding an eventListener to each "ⓧ" button so it will remove it's parent element if clicked
    xBtn.addEventListener("click", function (taskId) {
      xBtn.parentElement.remove(`newLi${taskId}`);

      //   checks if task list is empty and will make container2 invisible again if it is
      if (list.getElementsByTagName("li").length === 0) {
        list.style.visibility = "hidden";
      }
    });

    let node = document.createTextNode(input);

    newLi.appendChild(xBtn);
    newLi.appendChild(node);
    ul.appendChild(newLi);

    return;
  }
}

// Clears input field to start over if needed
function clearInputField() {
  inputField.value = "";
}

// clearBtn.addEventListener("click", clearInputField());

//Adds input as a list element into container 2
addBtn.addEventListener("click", function () {
  addTask();
  taskId++;
});
