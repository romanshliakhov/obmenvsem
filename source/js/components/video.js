import videojs from '../vendor/video.js';

const videoFile = document.querySelector('.video-js');

if(videoFile) {
  videojs(videoFile, {
    language: 'ru'
  });
}


