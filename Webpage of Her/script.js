function moveRandomEl(elm) {
  const top = (Math.random() * 90 + 5).toFixed(2) + "%";
  const left = (Math.random() * 90 + 5).toFixed(2) + "%";
  
  requestAnimationFrame(() => {
    elm.style.transform = `translate(${left}, ${top})`;
  });
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
