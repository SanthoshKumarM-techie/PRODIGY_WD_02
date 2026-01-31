let startTime = 0;
let elapsed = 0;
let interval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function format(time) {
  const ms = Math.floor((time % 1000) / 10);
  const sec = Math.floor((time / 1000) % 60);
  const min = Math.floor((time / 60000) % 60);

  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(ms).padStart(2, "0")}`;
}

function start() {
  startTime = Date.now() - elapsed;
  clearInterval(interval);
  interval = setInterval(() => {
    elapsed = Date.now() - startTime;
    display.textContent = format(elapsed);
  }, 10);
}

function pause() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  elapsed = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
}

function lap() {
  if (elapsed === 0) return;
  const li = document.createElement("li");
  li.textContent = format(elapsed);
  laps.prepend(li);
}

document.getElementById("start").onclick = start;
document.getElementById("pause").onclick = pause;
document.getElementById("reset").onclick = reset;
document.getElementById("lap").onclick = lap;
