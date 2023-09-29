const music = document.querySelector('.music__audio');
// const musicBanner = document.querySelector('.music__banner');
// const songName = document.querySelector('.music__title');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const seekBar = document.querySelector('.seek-bar');
const musicsItem = document.querySelectorAll('.music');

musicsItem.forEach(item => {
  const musicControl = item.querySelector('.music__controls');
  const musicFile = item.querySelector('audio');

  if(musicControl) {
    musicControl.addEventListener('click', (e) => {
      stopOtherMusic(musicControl);

      musicControl.classList.toggle('pause');

      if(musicControl.classList.contains('pause')) {
        musicFile.play();
      } else {
        musicFile.pause();
      }
    })
  }
})

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

// setup Music
if(seekBar) {
  const setMusic = (i) => {
    seekBar.value = 0; // set range slider value

    currentTime.innerHTML = '00:00';
    setTimeout(() =>{
      seekBar.max = music.duration;
      musicDuration.innerHTML = formatTime(music.duration);
    }, 300)
  }

  setMusic(0);

  // Seek-bar
  setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
  }, 200)

  seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
  })
}

// Multiplay
function stopOtherMusic(except) {
  // [...document.querySelectorAll('audio')].filter(e => !e.parentNode.contains(except)).forEach(item => {
  //   item.pause();
  // });

  [...document.querySelectorAll('audio')].forEach(item => {
    item.pause();
  });

  [...document.querySelectorAll('.music__controls')].filter(e => e !== except).forEach(item => {
    item.classList.remove('pause');
  })
}

