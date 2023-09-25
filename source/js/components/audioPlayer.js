let currentMusic = 0;

const music = document.querySelector('.music__audio');
const musicBanner = document.querySelector('.music__banner');
const songName = document.querySelector('.music__title');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.music__controls');
const seekBar = document.querySelector('.seek-bar');

playBtn.addEventListener('click', () => {
  playBtn.classList.toggle('pause');

  if(playBtn.className.includes('pause')) {
    music.play();
  } else {
    music.pause();
  }
})

// setup Music

const setMusic = (i) => {
  seekBar.value = 0; // set range slider value
  let song = songs[i];
  currentMusic = i;
  music.src = song.path;

  songName.innerHTML = `${song.name}.mp3`;
  musicBanner.style.backgroundImage = `url('${song.cover}')`;

  currentTime.innerHTML = '00:00';
  setTimeout(() =>{
    seekBar.max = music.duration;
    musicDuration.innerHTML = formatTime(music.duration);

  }, 300)
}

setMusic(0);

// formation time in min and second format
const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min  < 10) {
    min = `0${min}`;
  }

  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }

  return `${min} : ${sec}`;
}

// Seek-bar
setInterval(() => {
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime);
}, 500)

seekBar.addEventListener('change', () => {
  music.currentTime = seekBar.value;
})
