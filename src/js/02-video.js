import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframeEl = document.querySelector("#vimeo-player");
const player = new Player(iframeEl);

function setWatchingTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

const getContentOfLocalStorage = (
  localStorage.getItem('videoplayer-current-time') || 0
);

player.setCurrentTime(getContentOfLocalStorage);
player.on('timeupdate', throttle(setWatchingTime, 1000));