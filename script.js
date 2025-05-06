const videos = ["assets/eyes1.mp4", "assets/eyes2.mp4", "assets/eyes3.mp4"];

const date = new Date();
const index = date.getDate() % videos.length;
document.getElementById("videoSource").src = videos[index];
document.getElementById("bgVideo").load();

// Update time and greeting
function updateClockAndGreeting() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timeStr = `${hours}:${minutes}`;
  document.getElementById("time").textContent = timeStr;

  let greeting;
  if (hours >= 6 && hours < 12) {
    greeting = "Good Morning, Nicho";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon, Nicho";
  } else {
    greeting = "Good Night, Nicho";
  }
  document.getElementById("greeting").textContent = greeting;
}

updateClockAndGreeting();
setInterval(updateClockAndGreeting, 10000);
