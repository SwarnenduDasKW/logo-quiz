# Guess The Car Logo Quiz 🏎️

An interactive, high-energy React application inspired by the YouTube video [50 Famous Car Logos You Should Know | Guess the Logo Quiz by Knowlio](https://www.youtube.com/watch?v=q_6rDULZFT8).

---

## Features

- **Iconic Knowlio Visual Style**:
  - Bold red top header banner with `"GUESS THE CAR LOGO"`.
  - Blue radial game backdrop matching the video thumbnail.
  - Central white showcase card featuring authentic vector SVG emblems (with brand typography masked during questions).
  - 3D glossy letter pill buttons `(A)`, `(B)`, `(C)`, `(D)` with instant green/red status animations.
- **Dynamic 8-Second Countdown Timer**:
  - Color-shifting progress bar (Cyan ➔ Amber ➔ Crimson).
  - Web Audio API procedural clock ticking and warning ticks.
- **Audio Feedback Engine (Zero External Audio Files)**:
  - Procedural sound synthesis using Web Audio API: mechanical clock ticks, correct chord chime, wrong answer buzzer, combo streak powerups, and victory fanfare.
  - Quick mute/unmute audio toggle saved in `localStorage`.
- **Complete Catalog of 50 Famous Car Brands**:
  - **Level 1 (Everyday & Mainstream)**: Toyota, Ford, Honda, Chevrolet, Volkswagen, BMW, Mercedes-Benz, Audi, Tesla, Nissan, Hyundai, Jeep, Subaru, Mazda, Kia.
  - **Level 2 (Popular & Premium)**: Ferrari, Porsche, Lamborghini, Volvo, Lexus, Dodge, Land Rover, Jaguar, Mini, Mitsubishi, Peugeot, Renault, Fiat, Cadillac, Suzuki.
  - **Level 3 (Luxury, Exotic & Performance)**: Aston Martin, Bentley, Rolls-Royce, Maserati, Alfa Romeo, Bugatti, McLaren, Chrysler, Buick, Acura.
  - **Level 4 (Enthusiast, Classic & Supercars)**: Genesis, Infiniti, Lincoln, Citroën, Škoda, SEAT, Lotus, Koenigsegg, Pagani, Pontiac.
- **4 Interactive Game Modes**:
  1. **Classic Quiz**: Multiple choice with timer, combo streaks, and lifelines.
  2. **Video Auto-Play Mode**: Mirroring the YouTube quiz experience with auto-advancing countdown, auto-reveals, and self-scoring ("I Knew It!" / "Missed It").
  3. **Letter Scramble Mode**: Guess the brand by typing or picking letter tiles for a hardcore spelling challenge.
  4. **All 50 Logos Study Mode**: Comprehensive automobile encyclopedia with instant search, country filters, and flip cards.
- **Lifelines & Powerups**:
  - **50:50**: Eliminates two incorrect answers.
  - **Country Hint**: Reveals the country of origin and flag (e.g. 🇩🇪 Germany).
  - **+5s Time**: Adds 5 extra seconds to the countdown timer.
- **Results & Rankings**:
  - Score breakdown, accuracy %, highest streak counter.
  - Automotive Rank Titles: *Grand Prix Legend 🏆*, *Supercar Virtuoso ⚡*, *Trackday Enthusiast 🏁*, *Weekend Cruiser 🚗*, *Learner Driver 🚦*.
  - Confetti celebration on completion.
  - "Retry Missed Brands" feature to master difficult logos.

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation & Execution
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

Open your browser at `http://localhost:3000/` to play the game!