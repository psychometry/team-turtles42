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
  } else if (hours && !minutes) {
    return hoursFormatted;
  } else {
    return `${hours}:${minutes}:${seconds};`;
  }
};

const notify = (duration) => {
  const title = 'React Dash Timer';
  const body = `You have been working for ${format(duration)}`;
  
  console.log(body);

  if (!window.Notification) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    bellAudio.play();
    const notification = new Notification(title, { body });
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(permission => {
      if (permission === "granted") {
        bellAudio.play();
        const notification = new Notification(title, { body });
      }
    });
  }
};

export default notify;