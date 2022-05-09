// Text area will adjust its height to the pasted text rows
function auto_height(elem) {
  elem.style.height = "1px";
  elem.style.height = elem.scrollHeight + "px";
}

// Get pasted text and store it in variable as string
let text;
function getValue(elem) {
  return (text = document.querySelector("#textarea").value);
}

// Convert text to array

// Filter array for strings starting from 0 and with length of four characters
