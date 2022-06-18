//Made the colour change of the counter affect the whole page

// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const background = document.querySelector("body")

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      background.style.background = "green";
      value.style.color = "white";

    }
    if (count < 0) {
      background.style.background = "red";
      value.style.color = "white";
    }
    if (count === 0) {
      background.style.background = "#D3D3D3";
    }
    value.textContent = count;
  });
});
