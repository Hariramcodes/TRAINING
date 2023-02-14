var img1 = document.getElementById('img1'),
  img2 = document.getElementById('img2'),
  img3 = document.getElementById("img3"),
  song1 = document.getElementById('song1')
	audios = document.querySelectorAll('audio');
console.log(audios);


img1.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

img1.addEventListener('mouseleave', function() {
  song1.pause();
  song1.currentTime = 0;
}, false);

img2.addEventListener('mouseover', function() {
    song1.play();
}, false);

img2.addEventListener('mouseleave', function() {
  song1.pause();
  song1.currentTime = 0;
}, false);