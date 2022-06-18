//Re-made randomness
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = `#${randomNumber}`;
  color.textContent = `#${randomNumber}`;
});

function getRandomNumber() {
  let colors = Math.floor(Math.random() * 15452585).toString(16);
  return colors;
}
