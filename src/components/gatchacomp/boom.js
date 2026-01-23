import confetti from "canvas-confetti";

export function boom() {
  confetti({
    particleCount: 50,
    spread: 30,
    startVelocity: 55,
    gravity: 0.9,
    zIndex: 10000,
    ticks: 100,
    origin: { x: 0.72, y: 0.75 },
    colors: ["#44B1F7", "#884DFF", "#6FD6FF", "#B28CFF", "#FFFFFF"],
  });
}
