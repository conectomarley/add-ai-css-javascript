function handleclick() {
  alert("hey!");
}
let disablebuttonElement = document.querySelector("#disable-button");
disablebuttonElement.addEventListener("click", handleclick);

function handleGreenclick() {
  alert("hey, its green now!");
  greenbuttonElement.style.backgroundColor = "green";
}
let greenbuttonElement = document.querySelector("#green-button");
greenbuttonElement.addEventListener("click", handleGreenclick);

function handleRedclick() {
  alert("hey, its red now!");
  redbuttonElement.classList.add("danger");
}
let redbuttonElement = document.querySelector("#red-button");
redbuttonElement.addEventListener("click", handleRedclick);
