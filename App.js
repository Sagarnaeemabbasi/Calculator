let screen = document.getElementById("screen");
let td = document.getElementsByClassName("td");
for (let tds of td) {
  tds.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "=") {
      let evaluateValue = eval(screen.value);
      screen.value = evaluateValue;
    } else if (e.target.innerHTML === "AC") {
      screen.value = "";
    } else if (e.target.innerHTML === "X") {
      screen.value += "*";
    } else {
      screen.value += e.target.innerHTML;
    }
  });
}
