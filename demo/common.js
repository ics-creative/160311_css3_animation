
/* Animation loop */
function looopAnimation(className, delay) {
  function playAnimation() {
    var element = document.getElementById("mitarashi");
    element.addEventListener("animationend", listener);
    element.classList.add(className);
  }
  function listener(event) {
    event.target.classList.remove(className);
    setTimeout(playAnimation, delay);
  }
  playAnimation();
}