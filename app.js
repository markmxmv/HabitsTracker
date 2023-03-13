function humanReadable (seconds) {
  let sec;
  let min;
  let hrs;
  let arrMin;
  let arrHrs;
  let res;
  if (seconds<60) {
    if (seconds<10) {
      res = `00:00:0${seconds}`
    } else {
      res = `00:00:${seconds}`
    } 
  } else if (seconds>=60 && seconds<3600) {
    min = seconds/60;
    sec = seconds%60;
    arrMin = min.toString().split('.');
    min = arrMin[0];
    if (min<10) {
      res = `00:0${min}:${sec}`
    }
    if (sec<10) {
    res = `00:${min}:0${sec}`
    }
    if (min<10 && sec<10) {
      res = `00:0${min}:0${sec}`
    }
    if (min>10 && sec>10) {
      res = `00:${min}:${sec}`
    }
  } else if (seconds >= 3600 && seconds < 360000) {
    min = seconds/60;
    sec = seconds%60;
    arrMin = min.toString().split('.');
    min = arrMin[0];
    hrs = min/60;
    min = min%60
    arrHrs = hrs.toString().split('.');
    hrs = arrHrs[0];
    if (hrs < 10) {
      res = `0${hrs}:${min}:${sec}`
    }
    if (min<10) {
      res = `${hrs}:0${min}:${sec}`
    }
    if (sec<10) {
      res = `${hrs}:${min}:0${sec}`
    }
    if (min<10 && sec<10) {
      res = `${hrs}:0${min}:0${sec}`
    }
    if (hrs<10 && min<10) {
      res = `0${hrs}:0${min}:${sec}`
    }
    if (hrs<10 && sec<10) {
      res = `0${hrs}:${min}:0${sec}`
    }
    if (hrs<10 && min<10 && sec<10) {
      res = `0${hrs}:0${min}:0${sec}`
    }
    if (hrs>=10 && min>=10 && sec>=10) {
      res = `${hrs}:${min}:${sec}`
    }
  } else {
    res = 'error'
  }
  return res;
}