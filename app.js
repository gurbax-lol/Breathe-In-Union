const circle = document.getElementById('circle');
const instruction = document.getElementById('instruction');
const inhaleTime = 4000;
const holdTime = 7000;
const exhaleTime = 8000;
const cycleTime = inhaleTime + holdTime + exhaleTime;

function updateCircle() {
  const now = new Date().getTime();
  const phaseTime = now % cycleTime;

  if (phaseTime < inhaleTime) {
    instruction.textContent = 'Inhale';
    setCircleStroke(phaseTime / inhaleTime);
  } else if (phaseTime < inhaleTime + holdTime) {
    instruction.textContent = 'Hold';
    setCircleStroke(1);
  } else {
    instruction.textContent = 'Exhale';
    setCircleStroke(1 - (phaseTime - inhaleTime - holdTime) / exhaleTime);
  }
}

function setCircleStroke(percent) {
  const circumference = 2 * Math.PI * 90;
  const offset = circumference * (1 - percent);
  circle.querySelector('circle').style.strokeDasharray = `${circumference} ${circumference}`;
  circle.querySelector('circle').style.strokeDashoffset = offset;
}

setInterval(updateCircle, 50);
