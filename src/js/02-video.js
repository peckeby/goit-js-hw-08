import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on("timeupdate", throttle(function(player)
{localStorage.setItem("videoplayer-current-time", `${player.seconds}`)},
 1000));

const currentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(currentTime).then(function(currentTime) {
  player.seconds = currentTime;
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          break;
      default:
          break;
  }
});


