function addTimes (startTime, endTime) {
  try {
    var times = [ 0, 0, 0 ]
    var max = times.length
  
    var a = (startTime || '').split(':')
    var b = (endTime || '').split(':')
  
    // normalize time values
    for (var i = 0; i < max; i++) {
      a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
      b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
    }
  
    // store time values
    for (var i = 0; i < max; i++) {
      times[i] = a[i] + b[i]
    }
  
    var hours = times[0]
    var minutes = times[1]
    var seconds = times[2]
  
    if (seconds >= 60) {
      var m = (seconds / 60) << 0
      minutes += m
      seconds -= 60 * m
    }
  
    if (minutes >= 60) {
      var h = (minutes / 60) << 0
      hours += h
      minutes -= 60 * h
    }

    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
  } catch (error) {
    console.log("error: " + error)
  }
}
window.addEventListener('load', function () {
    var timer = "";
    var stats = document.querySelectorAll('.style-scope .ytd-playlist-sidebar-primary-info-renderer');
    var writtenInfo = stats[7];
    var vidTimers = document.querySelectorAll('.style-scope .ytd-thumbnail-overlay-time-status-renderer');
    console.log("got " + vidTimers.length/2 + " number of vid");
    for (let i = 0; i < vidTimers.length; i++) {
        const times = vidTimers[i].innerHTML.split(':');
        if(times.length == 3){
            timer = addTimes(timer,vidTimers[i].innerHTML)
        }
        else{
            timer = addTimes(timer,"0:"+vidTimers[i].innerHTML)
        }
    }
    setTimeout('', 1000);
    console.log("calcul has been fine and the result is: " + timer)
    writtenInfo.innerHTML += " ● Total time: " + timer;
})

