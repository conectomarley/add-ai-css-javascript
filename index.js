function handleclick() {
  alert("hey!");
}
let disablebuttonElement = document.querySelector("#disable-button");
disablebuttonElement.addEventListener("click", handleclick);

function handleclick() {
  alert("hey!");
}
let greenbuttonElement = document.querySelector("#green-button");
greenbuttonElement.addEventListener("click", handleclick);
greenbuttonElement.style.color = "green";
