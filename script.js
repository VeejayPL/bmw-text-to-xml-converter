// Text area will adjust its height to the pasted text rows
// This function is assigned to oninput in HTML doc
function auto_height(elem) {
  elem.style.height = "1px";
  elem.style.height = elem.scrollHeight + "px";
}

// Get pasted text and store it as an array
// This function is assigned to oninput in HTML doc
let text;
function getValue(elem) {
  return (text = document.querySelector("#textarea").value.split("\n"));
}

// Filter array for strings starting from 0 and with length of four characters
// then remove 0 from each element and sort the array
let codes;
function filterText(text) {
  codes = text
    .filter((element) => element.length === 4 && element[0] == 0)
    .map((element) => element.substr(1))
    .sort();
  return codes;
}

// Add XML tags to codes
let xml;
function addXmlTag(codes) {
  xml = codes
    .map((element) => `<ns1:saCode>${element}</ns1:saCode>\n`)
    .join("");
  return xml;
}
// Assign functions to button and append converted text to textarea
const button = document.querySelector("#convert");
button.addEventListener("click", () => {
  filterText(text);
  document.querySelector("#textarea").value = `<ns1:saCodes>\n${addXmlTag(
    codes
  )}</ns1:saCodes>`;
});
