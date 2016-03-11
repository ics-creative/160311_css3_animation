
// CSSアニメーションを間隔を空けてループ再生させる処理
function looopAnimation(id, className, delay) {
  var element = document.getElementById(id);
  element.addEventListener("animationend", listener);
  
  function listener(event) {
    event.target.classList.remove(className);
    setTimeout(playAnimation, delay);
  }

  function playAnimation() {
    element.classList.add(className);
  }
}