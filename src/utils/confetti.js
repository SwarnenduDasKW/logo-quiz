import confetti from 'canvas-confetti';

export function fireConfetti() {
  try {
    // Left burst
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x: 0.2, y: 0.6 }
    });

    // Right burst
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x: 0.8, y: 0.6 }
    });

    // Star shower
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.4 },
        colors: ['#ef4444', '#3b82f6', '#eab308', '#10b981', '#a855f7']
      });
    }, 250);
  } catch (e) {
    // graceful fallback
  }
}
