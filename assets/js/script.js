const carouselTop = document.querySelector("#carousel-top .row.no-wrap");
const showcaseBottom = document.querySelector("#showcase-bottom .wrapper");
const showcaseBottomMove = document.querySelector("#showcase-bottom .post-img").clientWidth;
const highlightPost = document.querySelector("#hightlight-post .row-wrapper");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

function carouselTopAnimate() {
  let i = 1, count = 3;
  setInterval(function() {
    carouselTop.style.marginLeft = -1 * i * carouselTop.clientWidth + "px";
    i++;
    if (i == count) i = 0;
  }, 3000)
}

function showcaseBottomAnimate() {
  let i = 1, count = 5;
  setInterval(function() {
    showcaseBottom.style.marginLeft = -1 * i * showcaseBottomMove + "px"
    i++;
    if (i == count) i = 0;
  }, 3000)
}

function highlightPostAnimate() {
  let i = 1, count = 3;
  setInterval(function() {
    highlightPost.style.marginLeft = -1 * i * highlightPost.clientWidth + "px";
    i++;
    if (i == count) i = 0;
  }, 3000)
  
  btnLeft.onclick = function() {
    clearInterval();
    i == 0 ? i = count - 1 : i--;
    highlightPost.style.marginLeft = -1 * i * highlightPost.clientWidth + "px";
  }
  
  btnRight.onclick = function() {
    clearInterval();
    i == count - 1 ? i = 0 : i++;
    highlightPost.style.marginLeft = -1 * i * highlightPost.clientWidth + "px";
  }
}

function start() {
  carouselTopAnimate();
  showcaseBottomAnimate();
  highlightPostAnimate()
}

start();