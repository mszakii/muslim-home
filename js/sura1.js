function play() {
  audio.play();
}

play();

card.onclick = function () {
  if (audio.paused) {
    play();
  } else {
    audio.pause();
  }
}