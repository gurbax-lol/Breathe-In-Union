const circle = document.getElementById('circle');
const instruction = document.getElementById('instruction');

const inhaleDuration = 4000;
const holdDuration = 7000;
const exhaleDuration = 8000;
const totalDuration = inhaleDuration + holdDuration + exhaleDuration;

function animate() {
  const now = new Date();
  const cyclePosition = now.getTime() % totalDuration;

  if (cyclePosition < inhaleDuration) {
    const progress = cyclePosition / inhaleDuration;
    updateCircle(progress);
    instruction.textContent = 'Inhale';
  } else if (cyclePosition < inhaleDuration + holdDuration) {
    updateCircle(1);
    instruction.textContent = 'Hold';
  } else {
    const progress = (cyclePosition - inhaleDuration - holdDuration) / exhaleDuration;
    updateCircle(1 - progress);
    instruction.textContent = 'Exhale';
  }

  requestAnimationFrame(animate);
}

function updateCircle(progress) {
  const circleSize = 90;
  const strokeWidth = 5;
  const circleProgress = progress * 2 * Math.PI * circleSize;

  circle.innerHTML = `
    <circle
      cx="100" cy="100" r="${circleSize}"
      stroke="black" stroke-width="${strokeWidth}" fill="none"
      stroke-dasharray="${circleProgress} ${2 * Math.PI * circleSize}"
      stroke-dashoffset="${-circleProgress}"
    />
  `;
}

animate();

