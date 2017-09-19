import bell from './bell.wav';
const bellAudio = new Audio(bell);

const format = ({ hours, minutes, seconds }) => {
  const hoursFormatted = hours === 1 
    ? `${hours} hour.` : `${hours} hours.`;
  const minutesFormatted = minutes === 1 
    ? `${minutes} minute.` : `${minutes} minutes.`;
  const secondsFormatted = seconds === 1 
    ? `${seconds} second.` : `${seconds} seconds.`;

  if (!hours && !minutes && seconds) {
    return secondsFormatted;
  } else if (!hours && minutes) {
    return minutesFormatted;
  } else if (hours) {
    return hoursFormatted;
  } else {
    return `${hours}:${minutes}:${seconds};`;
  }
};

const notify = (duration, settings) => {
  // Bell
  if (settings.bell) {
    bellAudio.currentTime = 0;
    bellAudio.play();    
  }

  // Desktop
  if (settings.desktop) {
    const title = 'React Dash Timer';
    const body = duration 
      ? `You have been working for ${format(duration)}`
      : `Desktop notifcation test.`
    const options = {
      body, 
    };

    if (!window.Notification) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
      new Notification(title, options);
    }
    else if (Notification.permission !== "denied") {
      Notification.requestPermission(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        }
      });
    }
  }
};

export default notify;