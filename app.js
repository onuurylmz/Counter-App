let numberArea = document.querySelector(".numberArea");
let container = document.querySelector(".container");
let count = 0;

function getRed(e) {
  if (e < 0) {
    numberArea.classList.add("red");
    numberArea.classList.remove("green");
  }
  if (e > 0) {
    numberArea.classList.add("green");
    numberArea.classList.remove("red");
  }
}

container.addEventListener("click", function (e) {
  let element = e.target;

  if (element.classList == "arttir") {
    count++;
    numberArea.innerHTML = count;
  } else if (element.classList == "azalt") {
    count--;
    numberArea.innerHTML = count;
  }
  getRed(count);
});
