// Text area will adjust its height to the pasted text rows
function auto_height(elem) {
  elem.style.height = "1px";
  elem.style.height = elem.scrollHeight + "px";
}

// Get pasted text and store it as an array
let text;
function getValue(elem) {
  return (text = document.querySelector("#textarea").value.split("\n"));
}

// Filter array for strings starting from 0 and with length of four characters
let codes;
function filterText(text) {
  return (codes = text.filter(
    (element) => element.length === 4 && element[0] == 0
  ));
}
// For each element remove the first 0
function removeZero(codes) {
  const codes2 = codes.map((element) => element.substr(1)).sort();
  console.table(codes2);
}
