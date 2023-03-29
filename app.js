function formatDuration (seconds) {
  let sec;
  let min;
  let arrMin;
  let resMin;
  let hrs;
  let arrHrs;
  let resHrs;
  let days;
  let arrDays;
  let resDays;
  let yrs;
  let arrYrs;
  let resYrs;
  let res;
  if (seconds===0) {
    res = `now`
  }else if (seconds<60) {
    if (seconds===1) {
      res = `${seconds} second`
    } else res = `${seconds} seconds` 
  } else if (seconds>=60 && seconds<3600) {
    min = seconds/60;
    sec = seconds%60;
    if (sec===1) {
      sec = `${sec} second`
    } else if (sec>1) {
      sec = `${sec} seconds`
    }
    arrMin = min.toString().split('.');
    min = arrMin[0];
    if (min==1) {
      resMin = `${min} minute`
    } else if (min>1) {
      resMin = `${min} minutes`
    }
    if (sec!=0) {
      res = `${resMin} and ${sec}`
    } else res = `${resMin}`
  } else if (seconds >= 3600 && seconds < 86400) {
    min = seconds/60;
    sec = seconds%60;
    if (sec===1) {
      sec = `${sec} second`
    } else if (sec>1) {
      sec = `${sec} seconds`
    }
    arrMin = min.toString().split('.');
    min = arrMin[0];
    hrs = min/60;
    min = min%60
    resMin = min;
    if (min==1) {
      resMin = `${min} minute`
    } else if (min>1) {
      resMin = `${min} minutes`
    }
    arrHrs = hrs.toString().split('.');
    hrs = arrHrs[0];
    resHrs = hrs;
    if (hrs==1) {
      resHrs = `${hrs} hour`
    } else if (hrs>1) {
      resHrs = `${hrs} hours`
    }
    if (sec!=0 && min!=0) {
      res = `${resHrs}, ${resMin} and ${sec}`
    } else if (min==0 && sec!=0){
      res = `${resHrs} and ${sec}`
    } else if (min!=0 && sec===0) {
      res = `${resHrs} and ${resMin}`
    } else res = `${resHrs}`
  } else if (seconds >= 86400 && seconds < 31536000) {
    min = seconds/60;
    sec = seconds%60;
    if (sec===1) {
      sec = `${sec} second`
    } else if (sec>1) {
      sec = `${sec} seconds`
    }
    arrMin = min.toString().split('.');
    min = arrMin[0];
    hrs = min/60;
    min = min%60;
    resMin = min;
    if (min==1) {
      resMin = `${min} minute`
    } else if (min>1) {
      resMin = `${min} minutes`
    }
    arrHrs = hrs.toString().split('.');
    hrs = arrHrs[0];
    days = hrs/24;
    hrs = hrs%24;
    resHrs = hrs;
    if (hrs==1) {
      resHrs = `${hrs} hour`
    } else if (hrs>1) {
      resHrs = `${hrs} hours`
    }
    arrDays = days.toString().split('.');
    days = arrDays[0]
    resDays = days;
    if (days==1) {
      resDays = `${days} day`
    } else if (days>1) {
      resDays = `${days} days`
    }
    if (hrs!=0 && min!=0 && sec!=0) {
      res = `${resDays}, ${resHrs}, ${resMin} and ${sec}`
    } else if (hrs!=0 && min===0 && sec!=0){
      res = `${resDays}, ${resHrs} and ${sec}`
    } else if (hrs!=0 && min!=0 && sec===0) {
      res = `${resDays}, ${resHrs} and ${resMin}`
    } else if (hrs===0 && min!=0 && sec!=0) {
      res = `${resDays}, ${resMin} and ${sec}`
    } else if (hrs===0 && min===0 && sec!=0) {
      res = `${resDays} and ${sec}`
    } else if (hrs!=0 && min===0 && sec===0) {
      res = `${resDays} and ${resHrs}`
    } else res = `${resDays}`
  } else if (seconds >= 31536000) {
    min = seconds/60;
    sec = seconds%60;
    if (sec===1) {
      sec = `${sec} second`
    } else if (sec>1) {
      sec = `${sec} seconds`
    }
    arrMin = min.toString().split('.');
    min = arrMin[0];
    hrs = min/60;
    min = min%60;
    resMin = min;
    if (min==1) {
      resMin = `${min} minute`
    } else if (min>1) {
      resMin = `${min} minutes`
    }
    arrHrs = hrs.toString().split('.');
    hrs = arrHrs[0];
    days = hrs/24;
    hrs = hrs%24;
    resHrs = hrs;
    if (hrs==1) {
      resHrs = `${hrs} hour`
    } else if (hrs>1) {
      resHrs = `${hrs} hours`
    }
    arrDays = days.toString().split('.');
    days = arrDays[0]
    yrs = days/365;
    days = days%365;
    resDays = days;
    if (days==1) {
      resDays = `${days} day`
    } else if (days>1) {
      resDays = `${days} days`
    }
    arrYrs = yrs.toString().split('.');
    yrs = arrYrs[0];
    resYrs = yrs;
    if (yrs==1) {
      resYrs = `${yrs} year`
    } else if (yrs>1) {
      resYrs = `${yrs} years`
    }
    if (days!=0 && hrs!=0 && min!=0 && sec!=0) {
      res = `${resYrs}, ${resDays}, ${resHrs}, ${resMin} and ${sec}`
    } else if (days===0 && hrs!=0 && min===0 && sec!=0){
      res = `${resYrs}, ${resHrs} and ${sec}`
    } else if (days===0 && hrs!=0 && min!=0 && sec===0) {
      res = `${resYrs}, ${resHrs} and ${resMin}`
    } else if (days===0 && hrs===0 && min!=0 && sec!=0) {
      res = `${resYrs}, ${resMin} and ${sec}`
    } else if (days!=0 && hrs===0 && min===0 && sec!=0) {
      res = `${resYrs}, ${resDays} and ${sec}`
    } else if (days===0 && hrs!=0 && min===0 && sec===0) {
      res = `${resYrs} and ${resHrs}`
    } else if (days===0 && hrs===0 && min!=0 && sec===0) {
      res = `${resYrs} and ${resMin}`
    } else if (days!=0 && hrs===0 && min===0 && sec===0) {
      res = `${resYrs} and ${resDays}`
    } else if (days===0 && hrs===0 && min===0 && sec!=0) {
      res = `${resYrs} and ${sec}`
    } else if (days!=0 && hrs!=0 && min===0 && sec===0) {
      res = `${resYrs}, ${resDays} and ${resHrs}`
    } else if (days!=0 && hrs===0 && min!=0 && sec===0) {
      res = `${resYrs}, ${resDays} and ${resMin}`
    } else if (days!=0 && hrs!=0 && min!=0 && sec===0) {
      res = `${resYrs}, ${resDays}, ${resHrs} and ${resMin}`
    } else if (days!=0 && hrs===0 && min!=0 && sec===0) {
      res = `${resYrs}, ${resDays} and ${resMin}`
    } else if (days===0 && hrs!=0 && min!=0 && sec!=0) {
      res = `${resYrs}, ${resHrs}, ${resMin} and ${sec}`
    } else if (days!=0 && hrs===0 && min!=0 && sec!=0) {
      res = `${resYrs}, ${resDays}, ${resMin} and ${sec}`
    } else if (days!=0 && hrs!=0 && min===0 && sec!==0) {
      res = `${resYrs}, ${resDays}, ${resHrs} and ${sec}`
    } else res = `${resYrs}`
  } else {
    res = 'error'
  }
  return res;
}