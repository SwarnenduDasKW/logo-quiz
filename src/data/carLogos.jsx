import React from 'react';

// Database of 50 Famous Car Logos categorized by difficulty
// All 50 logos feature authentic vector SVG emblems.
// In quiz/guess mode, brand name typography is hidden so the emblem is guessed pure!

export const CAR_LOGOS = [
  // --- LEVEL 1: EVERYDAY & MAINSTREAM BRANDS (1-15) ---
  {
    id: 1,
    slug: 'bmw',
    imageUrl: '/logos/bmw.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-500x281.png',
    source: '1000logos.net',
    name: 'BMW',
    options: ['BMW', 'Ferrari', 'Tesla', 'Audi'],
    country: 'Germany',
    countryFlag: '🇩🇪',
    founded: 1916,
    difficulty: 1,
    trivia: 'The blue and white quarters represent the Bavarian free state colors, though popular myth often links it to a spinning propeller.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-md">
        <defs>
          <radialGradient id="bmwOuter" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#1e293b" />
            <stop offset="90%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
          <linearGradient id="silverRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="bmwBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
        {/* Outer Silver Rim */}
        <circle cx="100" cy="100" r="96" fill="url(#silverRing)" />
        {/* Black Ring */}
        <circle cx="100" cy="100" r="90" fill="url(#bmwOuter)" />
        {/* Text when revealed */}
        {revealed && (
          <text x="100" y="38" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="22" letterSpacing="4" fontFamily="Montserrat, sans-serif">
            BMW
          </text>
        )}
        {/* Inner Silver Rim */}
        <circle cx="100" cy="100" r="60" fill="url(#silverRing)" />
        {/* Blue and White Quarters */}
        <g transform="translate(100,100)">
          {/* Top-Left: White */}
          <path d="M 0 0 L 0 -56 A 56 56 0 0 0 -56 0 Z" fill="#ffffff" />
          {/* Top-Right: Blue */}
          <path d="M 0 0 L 56 0 A 56 56 0 0 0 0 -56 Z" fill="url(#bmwBlue)" />
          {/* Bottom-Right: White */}
          <path d="M 0 0 L 0 56 A 56 56 0 0 0 56 0 Z" fill="#ffffff" />
          {/* Bottom-Left: Blue */}
          <path d="M 0 0 L -56 0 A 56 56 0 0 0 0 56 Z" fill="url(#bmwBlue)" />
          {/* Center Cross Divider */}
          <line x1="-56" y1="0" x2="56" y2="0" stroke="#475569" strokeWidth="2.5" />
          <line x1="0" y1="-56" x2="0" y2="56" stroke="#475569" strokeWidth="2.5" />
        </g>
      </svg>
    )
  },
  {
    id: 2,
    slug: 'toyota',
    imageUrl: '/logos/toyota.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo-500x281.png',
    source: '1000logos.net',
    name: 'Toyota',
    options: ['Toyota', 'Honda', 'Hyundai', 'Nissan'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1937,
    difficulty: 1,
    trivia: 'The overlapping ovals symbolize the unification of the hearts of customers and the heart of Toyota products, forming a stylized "T".',
    renderLogo: () => (
      <svg viewBox="0 0 240 160" className="w-full h-full max-w-[200px] max-h-[140px] drop-shadow-md">
        <defs>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        {/* Outer Oval */}
        <ellipse cx="120" cy="80" rx="105" ry="65" fill="none" stroke="url(#redGrad)" strokeWidth="15" />
        {/* Horizontal Inner Oval */}
        <ellipse cx="120" cy="55" rx="55" ry="24" fill="none" stroke="url(#redGrad)" strokeWidth="14" />
        {/* Vertical Inner Oval */}
        <ellipse cx="120" cy="80" rx="26" ry="62" fill="none" stroke="url(#redGrad)" strokeWidth="14" />
      </svg>
    )
  },
  {
    id: 3,
    slug: 'mercedes-benz',
    imageUrl: '/logos/mercedes-benz.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo-500x311.png',
    source: '1000logos.net',
    name: 'Mercedes-Benz',
    options: ['Mercedes-Benz', 'Audi', 'Volkswagen', 'Volvo'],
    country: 'Germany',
    countryFlag: '🇩🇪',
    founded: 1926,
    difficulty: 1,
    trivia: 'The three-pointed star represents Gottlieb Daimler’s ambition for universal motorization: on land, on water, and in the air.',
    renderLogo: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-lg">
        <defs>
          <linearGradient id="chrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#cbd5e1" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        {/* Outer Ring */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="url(#chrome)" strokeWidth="11" />
        {/* 3-pointed Star with 3D Bevel Facets */}
        <g transform="translate(100,100)">
          {/* Top point left facet */}
          <polygon points="0,0 0,-86 -14,-16" fill="#e2e8f0" />
          {/* Top point right facet */}
          <polygon points="0,0 0,-86 14,-16" fill="#64748b" />
          {/* Bottom-right point top facet */}
          <polygon points="0,0 74,43 14,16" fill="#cbd5e1" />
          {/* Bottom-right point bottom facet */}
          <polygon points="0,0 74,43 0,22" fill="#475569" />
          {/* Bottom-left point bottom facet */}
          <polygon points="0,0 -74,43 0,22" fill="#94a3b8" />
          {/* Bottom-left point top facet */}
          <polygon points="0,0 -74,43 -14,16" fill="#ffffff" />
          {/* Center Cap */}
          <circle cx="0" cy="0" r="6" fill="#cbd5e1" />
        </g>
      </svg>
    )
  },
  {
    id: 4,
    slug: 'audi',
    imageUrl: '/logos/audi.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/05/logo-Audi-500x173.png',
    source: '1000logos.net',
    name: 'Audi',
    options: ['Audi', 'Subaru', 'Olympic', 'Toyota'],
    country: 'Germany',
    countryFlag: '🇩🇪',
    founded: 1909,
    difficulty: 1,
    trivia: 'The four rings symbolize the 1932 merger of four independent motor-vehicle manufacturers: Audi, DKW, Horch, and Wanderer.',
    renderLogo: () => (
      <svg viewBox="0 0 280 120" className="w-full h-full max-w-[220px] max-h-[110px] drop-shadow-md">
        <defs>
          <linearGradient id="audiChrome" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* 4 Interlinked Rings */}
        <circle cx="55" cy="60" r="38" fill="none" stroke="url(#audiChrome)" strokeWidth="9" />
        <circle cx="110" cy="60" r="38" fill="none" stroke="url(#audiChrome)" strokeWidth="9" />
        <circle cx="165" cy="60" r="38" fill="none" stroke="url(#audiChrome)" strokeWidth="9" />
        <circle cx="220" cy="60" r="38" fill="none" stroke="url(#audiChrome)" strokeWidth="9" />
      </svg>
    )
  },
  {
    id: 5,
    slug: 'ford',
    imageUrl: '/logos/ford.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Ford',
    options: ['Ford', 'Chevrolet', 'Cadillac', 'Dodge'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 1903,
    difficulty: 1,
    trivia: 'The iconic blue oval was introduced in 1927, featuring the stylized signature script developed by Henry Ford’s chief engineer Childe Harold Wills.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 240 140" className="w-full h-full max-w-[200px] max-h-[120px] drop-shadow-md">
        <defs>
          <linearGradient id="fordBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="40%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="fordBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        <ellipse cx="120" cy="70" rx="112" ry="62" fill="url(#fordBorder)" />
        <ellipse cx="120" cy="70" rx="104" ry="54" fill="#0f172a" />
        <ellipse cx="120" cy="70" rx="100" ry="50" fill="url(#fordBlue)" />
        <ellipse cx="120" cy="70" rx="95" ry="46" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.8" />
        {revealed ? (
          <text x="120" y="86" textAnchor="middle" fill="#ffffff" fontStyle="italic" fontWeight="900" fontSize="46" fontFamily="Georgia, serif">
            Ford
          </text>
        ) : (
          /* Blanked oval emblem with subtle flourish */
          <path d="M 60 70 Q 120 45 180 70 Q 120 95 60 70" fill="none" stroke="#ffffff" strokeWidth="4" strokeDasharray="10 8" opacity="0.6" />
        )}
      </svg>
    )
  },
  {
    id: 6,
    slug: 'volkswagen',
    imageUrl: '/logos/volkswagen.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Volkswagen-logo-500x281.png',
    source: '1000logos.net',
    name: 'Volkswagen',
    options: ['Volkswagen', 'Volvo', 'Opel', 'BMW'],
    country: 'Germany',
    countryFlag: '🇩🇪',
    founded: 1937,
    difficulty: 1,
    trivia: 'Volkswagen literally translates to "People’s Car" in German. The emblem seamlessly stacks a "V" above a "W".',
    renderLogo: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-md">
        <defs>
          <linearGradient id="vwBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="92" fill="#0f172a" stroke="url(#vwBlue)" strokeWidth="12" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="#ffffff" strokeWidth="3" />
        {/* Inner V and W Monogram */}
        <g stroke="#ffffff" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Upper V */}
          <polyline points="72,48 100,98 128,48" />
          {/* Lower W */}
          <polyline points="46,90 74,152 100,105 126,152 154,90" />
        </g>
      </svg>
    )
  },
  {
    id: 7,
    slug: 'tesla',
    imageUrl: '/logos/tesla.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Tesla-logo-500x281.png',
    source: '1000logos.net',
    name: 'Tesla',
    options: ['Tesla', 'Triumph', 'Toyota', 'Tata'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 2003,
    difficulty: 1,
    trivia: 'CEO Elon Musk explained that the "T" represents a cross-section of an electric induction motor rotor and stator.',
    renderLogo: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[170px] max-h-[170px] drop-shadow-md">
        <defs>
          <linearGradient id="teslaRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        <g fill="url(#teslaRed)">
          {/* Top Curved Armor Bar */}
          <path d="M 35 48 C 65 38 135 38 165 48 C 145 57 115 54 100 54 C 85 54 55 57 35 48 Z" />
          {/* Central T Blade */}
          <path d="M 52 64 C 75 58 125 58 148 64 C 136 78 116 80 110 98 L 110 168 C 105 174 95 174 90 168 L 90 98 C 84 80 64 78 52 64 Z" />
        </g>
      </svg>
    )
  },
  {
    id: 8,
    slug: 'honda',
    imageUrl: '/logos/honda.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/03/Honda-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Honda',
    options: ['Honda', 'Hyundai', 'Holden', 'Haval'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1948,
    difficulty: 1,
    trivia: 'Founded by Soichiro Honda, the logo features a stylized bold "H" inside a soft curved trapezoid, evoking open arms and durability.',
    renderLogo: () => (
      <svg viewBox="0 0 200 180" className="w-full h-full max-w-[180px] max-h-[160px] drop-shadow-md">
        <defs>
          <linearGradient id="hondaChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Trapezoid border */}
        <path
          d="M 32 30 C 32 20 42 16 52 16 L 148 16 C 158 16 168 20 168 30 L 184 140 C 186 154 172 166 156 166 L 44 166 C 28 166 14 154 16 140 Z"
          fill="none"
          stroke="url(#hondaChrome)"
          strokeWidth="11"
        />
        {/* Stylized 'H' */}
        <path
          d="M 54 44 L 68 138 C 69 144 74 148 80 148 L 86 148 L 86 102 L 114 102 L 114 148 L 120 148 C 126 148 131 144 132 138 L 146 44 L 130 44 L 114 86 L 86 86 L 70 44 Z"
          fill="url(#hondaChrome)"
        />
      </svg>
    )
  },
  {
    id: 9,
    slug: 'chevrolet',
    imageUrl: '/logos/chevrolet.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-logo-500x281.png',
    source: '1000logos.net',
    name: 'Chevrolet',
    options: ['Chevrolet', 'Cadillac', 'Chrysler', 'Citroën'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 1911,
    difficulty: 1,
    trivia: 'Co-founder William C. Durant reportedly spotted the iconic "bowtie" pattern on wallpaper in a French hotel in 1908.',
    renderLogo: () => (
      <svg viewBox="0 0 240 140" className="w-full h-full max-w-[210px] max-h-[120px] drop-shadow-md">
        <defs>
          <linearGradient id="chevyGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#eab308" />
            <stop offset="70%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
          <linearGradient id="chevyBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        {/* Outer Silver Bowtie */}
        <polygon points="18,52 90,52 82,20 158,20 150,52 222,52 214,88 142,88 150,120 74,120 82,88 10,88" fill="url(#chevyBorder)" />
        {/* Inner Gold Bowtie */}
        <polygon points="26,58 94,58 88,28 152,28 146,58 214,58 208,82 140,82 146,112 82,112 88,82 20,82" fill="url(#chevyGold)" />
        {/* Textured center bevel */}
        <line x1="88" y1="28" x2="146" y2="112" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
      </svg>
    )
  },
  {
    id: 10,
    slug: 'hyundai',
    imageUrl: '/logos/hyundai.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/04/Hyundai-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Hyundai',
    options: ['Hyundai', 'Honda', 'Nissan', 'Mazda'],
    country: 'South Korea',
    countryFlag: '🇰🇷',
    founded: 1967,
    difficulty: 1,
    trivia: 'The slanted "H" is also designed to portray two people (the company and the customer) shaking hands in mutual trust.',
    renderLogo: () => (
      <svg viewBox="0 0 240 160" className="w-full h-full max-w-[200px] max-h-[140px] drop-shadow-md">
        <defs>
          <linearGradient id="hyundaiSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Slanted oval */}
        <ellipse cx="120" cy="80" rx="100" ry="58" fill="none" stroke="url(#hyundaiSilver)" strokeWidth="13" transform="rotate(-7 120 80)" />
        {/* Slanted H */}
        <g fill="url(#hyundaiSilver)">
          <path d="M 68 116 C 70 85 78 50 88 44 C 95 44 94 65 92 84 C 90 95 86 112 82 116 Z" />
          <path d="M 88 78 C 110 74 135 78 152 82 C 145 88 120 86 98 88 Z" />
          <path d="M 144 116 C 148 95 152 70 156 46 C 164 46 166 65 162 90 C 158 110 152 116 144 116 Z" />
        </g>
      </svg>
    )
  },
  {
    id: 11,
    slug: 'nissan',
    imageUrl: '/logos/nissan.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/03/nissan-logo-500x334.png',
    source: '1000logos.net',
    name: 'Nissan',
    options: ['Nissan', 'Mazda', 'Toyota', 'Subaru'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1933,
    difficulty: 1,
    trivia: 'Originally derived from the Japanese phrase "Shisei wa tenjitsu o tsuranuku" meaning "If you have a strong belief, it can penetrate even the sun."',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 220 160" className="w-full h-full max-w-[190px] max-h-[140px] drop-shadow-md">
        <defs>
          <linearGradient id="nissanChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Outer Ring */}
        <circle cx="110" cy="80" r="70" fill="none" stroke="url(#nissanChrome)" strokeWidth="12" />
        {/* Horizontal Bar */}
        <rect x="25" y="62" width="170" height="36" rx="6" fill="#0f172a" stroke="url(#nissanChrome)" strokeWidth="8" />
        {revealed && (
          <text x="110" y="86" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="19" letterSpacing="3" fontFamily="Montserrat, sans-serif">
            NISSAN
          </text>
        )}
      </svg>
    )
  },
  {
    id: 12,
    slug: 'jeep',
    imageUrl: '/logos/jeep.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/04/Jeep-logo-500x281.png',
    source: '1000logos.net',
    name: 'Jeep',
    options: ['Jeep', 'Land Rover', 'RAM', 'GMC'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 1941,
    difficulty: 1,
    trivia: 'Born in World War II, the iconic Jeep face features seven vertical grille slots flanked by twin round headlights.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 240 140" className="w-full h-full max-w-[210px] max-h-[120px] drop-shadow-md">
        <defs>
          <linearGradient id="jeepGreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
        </defs>
        {/* 7-Slot Grille & Headlights Emblem */}
        <rect x="20" y="30" width="200" height="80" rx="14" fill="#1e293b" stroke="#94a3b8" strokeWidth="5" />
        {/* Left Headlight */}
        <circle cx="45" cy="70" r="16" fill="#f8fafc" stroke="#64748b" strokeWidth="3" />
        {/* Right Headlight */}
        <circle cx="195" cy="70" r="16" fill="#f8fafc" stroke="#64748b" strokeWidth="3" />
        {/* 7 Vertical Grille Slots */}
        {[72, 86, 100, 114, 128, 142, 156].map((x, i) => (
          <rect key={i} x={x} y="46" width="7" height="48" rx="3.5" fill="#f8fafc" />
        ))}
        {revealed && (
          <text x="120" y="128" textAnchor="middle" fill="#4ade80" fontWeight="900" fontSize="18" letterSpacing="4" fontFamily="Montserrat, sans-serif">
            JEEP
          </text>
        )}
      </svg>
    )
  },
  {
    id: 13,
    slug: 'subaru',
    imageUrl: '/logos/subaru.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/09/Subaru-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Subaru',
    options: ['Subaru', 'Mazda', 'Mitsubishi', 'Suzuki'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1953,
    difficulty: 1,
    trivia: 'Subaru is the Japanese name for the Pleiades star cluster (Seven Sisters), representing the six companies merged into Fuji Heavy Industries.',
    renderLogo: () => (
      <svg viewBox="0 0 220 150" className="w-full h-full max-w-[190px] max-h-[130px] drop-shadow-md">
        <defs>
          <linearGradient id="subaruBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="subaruSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        {/* Oval */}
        <ellipse cx="110" cy="75" rx="100" ry="60" fill="url(#subaruBlue)" stroke="url(#subaruSilver)" strokeWidth="8" />
        {/* 6 Pleiades Stars */}
        <g fill="#f8fafc">
          {/* Big Star */}
          <polygon points="75,50 80,68 98,68 83,78 89,95 75,84 61,95 67,78 52,68 70,68" transform="scale(0.9) translate(12,-4)" />
          {/* 5 Smaller Stars */}
          <polygon points="120,45 122,53 130,53 123,58 126,65 120,60 114,65 117,58 110,53 118,53" />
          <polygon points="152,58 154,66 162,66 155,71 158,78 152,73 146,78 149,71 142,66 150,66" />
          <polygon points="128,78 130,86 138,86 131,91 134,98 128,93 122,98 125,91 118,86 126,86" />
          <polygon points="156,92 158,100 166,100 159,105 162,112 156,107 150,112 153,105 146,100 154,100" />
          <polygon points="124,108 126,114 132,114 127,118 129,124 124,120 119,124 121,118 116,114 122,114" />
        </g>
      </svg>
    )
  },
  {
    id: 14,
    slug: 'mazda',
    imageUrl: '/logos/mazda.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2019/12/Mazda-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Mazda',
    options: ['Mazda', 'Mitsubishi', 'Maserati', 'Mini'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1920,
    difficulty: 1,
    trivia: 'The emblem features a stylized winged "M" inside an oval, symbolizing Mazda spreading its wings towards the future.',
    renderLogo: () => (
      <svg viewBox="0 0 220 160" className="w-full h-full max-w-[190px] max-h-[140px] drop-shadow-md">
        <defs>
          <linearGradient id="mazdaChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        <ellipse cx="110" cy="80" rx="98" ry="68" fill="none" stroke="url(#mazdaChrome)" strokeWidth="12" />
        {/* Winged 'M' */}
        <path
          d="M 45 68 C 65 92 88 102 110 102 C 132 102 155 92 175 68 C 155 96 130 114 110 72 C 90 114 65 96 45 68 Z"
          fill="url(#mazdaChrome)"
        />
      </svg>
    )
  },
  {
    id: 15,
    slug: 'kia',
    imageUrl: '/logos/kia.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/02/Kia-Logo-history-500x264.png',
    source: '1000logos.net',
    name: 'Kia',
    options: ['Kia', 'Hyundai', 'Daewoo', 'SsangYong'],
    country: 'South Korea',
    countryFlag: '🇰🇷',
    founded: 1944,
    difficulty: 1,
    trivia: 'Kia introduced its sleek connected rhythm logo in 2021, representing symmetry, rhythm, and rising ambition.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 240 120" className="w-full h-full max-w-[210px] max-h-[110px] drop-shadow-md">
        <defs>
          <linearGradient id="kiaRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        {/* Connected KIA wordmark glyphs */}
        <path
          d="M 32 88 L 54 88 L 68 54 L 82 88 L 104 88 L 78 28 L 58 28 Z
             M 112 28 L 132 28 L 132 88 L 112 88 Z
             M 148 28 L 168 28 L 188 64 L 208 28 L 228 28 L 198 88 L 178 88 Z"
          fill={revealed ? "url(#kiaRed)" : "#ffffff"}
        />
      </svg>
    )
  },

  // --- LEVEL 2: POPULAR & PREMIUM BRANDS (16-30) ---
  {
    id: 16,
    slug: 'ferrari',
    imageUrl: '/logos/ferrari.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Ferrari-logo-500x333.png',
    source: '1000logos.net',
    name: 'Ferrari',
    options: ['Ferrari', 'Porsche', 'Lamborghini', 'Maserati'],
    country: 'Italy',
    countryFlag: '🇮🇹',
    founded: 1939,
    difficulty: 2,
    trivia: 'Enzo Ferrari adopted the Prancing Horse (Cavallino Rampante) from the fighter plane of WWI Italian ace Francesco Baracca.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 160 210" className="w-full h-full max-w-[150px] max-h-[190px] drop-shadow-lg">
        <defs>
          <linearGradient id="ferrariYellow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
        {/* Shield */}
        <path
          d="M 20 20 L 140 20 C 140 100 130 160 80 196 C 30 160 20 100 20 20 Z"
          fill="url(#ferrariYellow)"
          stroke="#000000"
          strokeWidth="4"
        />
        {/* Italian Tricolor Flag Strip across top */}
        <rect x="23" y="22" width="38" height="12" fill="#16a34a" />
        <rect x="61" y="22" width="38" height="12" fill="#ffffff" />
        <rect x="99" y="22" width="38" height="12" fill="#dc2626" />
        {/* Prancing Horse Silhouette */}
        <path
          d="M 82 56 C 80 50 86 46 88 50 C 90 54 86 60 92 62 C 96 64 104 56 100 50 C 108 52 108 62 102 70 C 98 74 92 76 90 84 C 94 92 106 90 114 96 C 118 100 112 106 108 104 C 98 100 94 104 90 116 C 88 122 92 134 94 148 L 86 148 C 84 136 82 124 78 120 C 72 126 70 138 68 152 L 62 152 C 64 134 68 120 74 110 C 78 104 74 96 70 88 C 66 80 60 76 56 68 C 62 66 70 70 76 78 C 78 72 76 64 82 56 Z"
          fill="#000000"
        />
        {revealed && (
          <text x="80" y="180" textAnchor="middle" fill="#000000" fontWeight="900" fontSize="16" fontFamily="serif">
            Ferrari
          </text>
        )}
      </svg>
    )
  },
  {
    id: 17,
    slug: 'porsche',
    imageUrl: '/logos/porsche.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Porsche',
    options: ['Porsche', 'Ferrari', 'Peugeot', 'Alfa Romeo'],
    country: 'Germany',
    countryFlag: '🇩🇪',
    founded: 1931,
    difficulty: 2,
    trivia: 'The crest is based on the coat of arms of the Free People’s State of Württemberg, featuring antlers and the rearing black horse of Stuttgart.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 160 210" className="w-full h-full max-w-[150px] max-h-[190px] drop-shadow-lg">
        <defs>
          <linearGradient id="porscheGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="60%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
        {/* Main Shield */}
        <path
          d="M 24 24 L 136 24 C 136 96 128 156 80 194 C 32 156 24 96 24 24 Z"
          fill="url(#porscheGold)"
          stroke="#000000"
          strokeWidth="3.5"
        />
        {/* Red & Black Quarter Stripes */}
        <g stroke="#000000" strokeWidth="2">
          {/* Top-Right Red & Black Stripes */}
          <rect x="80" y="52" width="54" height="15" fill="#dc2626" />
          <rect x="80" y="67" width="54" height="15" fill="#000000" />
          <rect x="80" y="82" width="54" height="15" fill="#dc2626" />
          {/* Bottom-Left Red & Black Stripes */}
          <rect x="26" y="97" width="54" height="15" fill="#000000" />
          <rect x="26" y="112" width="54" height="15" fill="#dc2626" />
          <rect x="26" y="127" width="54" height="15" fill="#000000" />
        </g>
        {/* Antlers in Top-Left & Bottom-Right */}
        <path d="M 36 60 Q 56 68 70 60 M 38 74 Q 56 82 70 74 M 40 88 Q 56 96 70 88" stroke="#000000" strokeWidth="3" fill="none" />
        {/* Center Stuttgart Inset Shield with Horse */}
        <path d="M 64 80 L 96 80 C 96 112 92 126 80 136 C 68 126 64 112 64 80 Z" fill="#facc15" stroke="#000000" strokeWidth="2" />
        <path d="M 76 96 Q 84 94 82 108 Q 86 118 80 126" stroke="#000000" strokeWidth="3" fill="none" />
        {revealed && (
          <text x="80" y="44" textAnchor="middle" fill="#000000" fontWeight="900" fontSize="13" letterSpacing="2" fontFamily="Montserrat, sans-serif">
            PORSCHE
          </text>
        )}
      </svg>
    )
  },
  {
    id: 18,
    slug: 'lamborghini',
    imageUrl: '/logos/lamborghini.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/03/Lamborghini-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Lamborghini',
    options: ['Lamborghini', 'Ferrari', 'Lotus', 'Maserati'],
    country: 'Italy',
    countryFlag: '🇮🇹',
    founded: 1963,
    difficulty: 2,
    trivia: 'Ferruccio Lamborghini chose the charging bull because his zodiac sign was Taurus, and he was passionate about Spanish fighting bulls.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 160 210" className="w-full h-full max-w-[150px] max-h-[190px] drop-shadow-lg">
        <defs>
          <linearGradient id="lamboGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
        </defs>
        {/* Black Shield with Gold Trim */}
        <path
          d="M 22 24 L 138 24 C 138 104 126 160 80 196 C 34 160 22 104 22 24 Z"
          fill="#0f172a"
          stroke="url(#lamboGold)"
          strokeWidth="6"
        />
        {revealed && (
          <text x="80" y="46" textAnchor="middle" fill="url(#lamboGold)" fontWeight="800" fontSize="11" letterSpacing="1" fontFamily="Montserrat, sans-serif">
            LAMBORGHINI
          </text>
        )}
        {/* Charging Raging Bull Silhouette */}
        <path
          d="M 52 110 C 60 90 74 85 92 84 C 98 80 106 75 118 78 C 122 80 126 88 120 90 C 114 92 106 90 102 96 C 104 104 114 116 110 128 L 102 128 C 100 118 96 112 88 112 C 84 120 80 132 76 142 L 68 142 C 70 128 72 118 64 114 C 58 116 54 118 52 110 Z"
          fill="url(#lamboGold)"
        />
        {/* Bull Horns */}
        <path d="M 112 76 Q 124 64 126 56 M 110 80 Q 120 70 128 66" stroke="url(#lamboGold)" strokeWidth="3" fill="none" />
      </svg>
    )
  },
  {
    id: 19,
    slug: 'volvo',
    imageUrl: '/logos/volvo.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/03/Volvo-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Volvo',
    options: ['Volvo', 'Volkswagen', 'Vauxhall', 'Subaru'],
    country: 'Sweden',
    countryFlag: '🇸🇪',
    founded: 1927,
    difficulty: 2,
    trivia: 'The circle with an arrow pointing up-right is the ancient chemical symbol for Iron and Mars, representing Swedish steel strength and safety.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-md">
        <defs>
          <linearGradient id="volvoSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Iron Circle */}
        <circle cx="95" cy="105" r="68" fill="none" stroke="url(#volvoSilver)" strokeWidth="12" />
        {/* Diagonal Arrow pointing top-right */}
        <line x1="140" y1="60" x2="175" y2="25" stroke="url(#volvoSilver)" strokeWidth="12" strokeLinecap="square" />
        <polygon points="152,18 184,18 184,50" fill="url(#volvoSilver)" />
        {/* Center Horizontal Ribbon */}
        <rect x="25" y="90" width="140" height="30" rx="4" fill="#1e3a8a" stroke="url(#volvoSilver)" strokeWidth="3" />
        {revealed && (
          <text x="95" y="111" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="16" letterSpacing="3" fontFamily="Montserrat, sans-serif">
            VOLVO
          </text>
        )}
      </svg>
    )
  },
  {
    id: 20,
    slug: 'lexus',
    imageUrl: '/logos/lexus.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/02/Lexus-Logo-history-500x250.png',
    source: '1000logos.net',
    name: 'Lexus',
    options: ['Lexus', 'Lincoln', 'Lotus', 'Land Rover'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1989,
    difficulty: 2,
    trivia: 'Created as Toyota’s luxury division, the logo features an aerodynamic italicized "L" precisely enclosed inside an oval.',
    renderLogo: () => (
      <svg viewBox="0 0 240 160" className="w-full h-full max-w-[200px] max-h-[140px] drop-shadow-md">
        <defs>
          <linearGradient id="lexusChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        <ellipse cx="120" cy="80" rx="100" ry="60" fill="none" stroke="url(#lexusChrome)" strokeWidth="12" />
        {/* Stylized L with arrowhead flow */}
        <path
          d="M 152 45 C 130 52 100 68 85 92 L 85 112 C 105 112 135 112 165 112 L 165 124 L 72 124 L 72 86 C 88 56 122 38 152 45 Z"
          fill="url(#lexusChrome)"
        />
      </svg>
    )
  },
  {
    id: 21,
    slug: 'dodge',
    imageUrl: '/logos/dodge.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/04/Dodge-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Dodge',
    options: ['Dodge', 'Chevrolet', 'Ford', 'RAM'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 1900,
    difficulty: 2,
    trivia: 'Famous for the Charger and Challenger muscle cars, Dodge’s modern emblem features twin red diagonal racing slashes.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 240 120" className="w-full h-full max-w-[210px] max-h-[110px] drop-shadow-md">
        <defs>
          <linearGradient id="dodgeRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        {revealed ? (
          <text x="80" y="74" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="32" letterSpacing="4" fontFamily="Montserrat, sans-serif">
            DODGE
          </text>
        ) : (
          <rect x="25" y="48" width="110" height="24" rx="4" fill="#334155" opacity="0.6" />
        )}
        {/* Twin Red Diagonal Racing Stripes */}
        <polygon points="160,82 178,34 194,34 176,82" fill="url(#dodgeRed)" />
        <polygon points="186,82 204,34 220,34 202,82" fill="url(#dodgeRed)" />
      </svg>
    )
  },
  {
    id: 22,
    slug: 'land-rover',
    imageUrl: '/logos/land-rover.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/02/Land-Rover-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Land Rover',
    options: ['Land Rover', 'Jeep', 'Jaguar', 'Lexus'],
    country: 'UK',
    countryFlag: '🇬🇧',
    founded: 1948,
    difficulty: 2,
    trivia: 'The green color was chosen because the post-war manufacturer used surplus aircraft cockpit paint to protect against rust.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 240 140" className="w-full h-full max-w-[200px] max-h-[120px] drop-shadow-md">
        <defs>
          <linearGradient id="roverGreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
        </defs>
        <ellipse cx="120" cy="70" rx="108" ry="58" fill="#e2e8f0" stroke="#475569" strokeWidth="3" />
        <ellipse cx="120" cy="70" rx="100" ry="50" fill="url(#roverGreen)" />
        {/* Twin diagonal chevron accents */}
        <polyline points="35,66 48,70 35,74" fill="none" stroke="#ffffff" strokeWidth="3.5" />
        <polyline points="205,66 192,70 205,74" fill="none" stroke="#ffffff" strokeWidth="3.5" />
        {revealed ? (
          <g fill="#ffffff" fontFamily="Montserrat, sans-serif" fontWeight="900" textAnchor="middle">
            <text x="120" y="62" fontSize="18" letterSpacing="3">LAND</text>
            <text x="120" y="86" fontSize="18" letterSpacing="3">- ROVER -</text>
          </g>
        ) : (
          <circle cx="120" cy="70" r="14" fill="none" stroke="#ffffff" strokeWidth="3" strokeDasharray="6 4" opacity="0.7" />
        )}
      </svg>
    )
  },
  {
    id: 23,
    slug: 'jaguar',
    imageUrl: '/logos/jaguar.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2019/12/Jaguar-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Jaguar',
    options: ['Jaguar', 'Puma', 'Peugeot', 'Maserati'],
    country: 'UK',
    countryFlag: '🇬🇧',
    founded: 1922,
    difficulty: 2,
    trivia: 'The leaping feline "The Leaper" symbolizes agility, speed, and boundless power. It was originally a physical hood ornament.',
    renderLogo: () => (
      <svg viewBox="0 0 260 120" className="w-full h-full max-w-[220px] max-h-[110px] drop-shadow-md">
        <defs>
          <linearGradient id="jaguarSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Leaping Jaguar Silhouette */}
        <path
          d="M 28 62 C 34 52 48 48 64 54 C 74 44 94 38 120 44 C 145 50 170 42 195 34 C 215 28 234 32 242 42 C 238 46 226 48 214 52 C 188 60 162 68 138 68 C 120 68 108 78 95 86 C 82 94 65 96 48 90 C 36 85 24 74 28 62 Z"
          fill="url(#jaguarSilver)"
        />
        {/* Extended Forepaws & Hindlegs */}
        <path d="M 214 52 L 236 68 L 222 72 L 202 56 Z" fill="url(#jaguarSilver)" />
        <path d="M 64 88 L 48 106 L 36 102 L 52 86 Z" fill="url(#jaguarSilver)" />
        <path d="M 28 62 C 20 62 14 70 12 78 C 10 84 15 90 22 92" stroke="url(#jaguarSilver)" strokeWidth="4" fill="none" />
      </svg>
    )
  },
  {
    id: 24,
    slug: 'mini',
    imageUrl: '/logos/mini.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/MINI-logo-500x281.png',
    source: '1000logos.net',
    name: 'Mini',
    options: ['Mini', 'Aston Martin', 'Chrysler', 'Bentley'],
    country: 'UK',
    countryFlag: '🇬🇧',
    founded: 1959,
    difficulty: 2,
    trivia: 'Designed by Sir Alec Issigonis during the 1956 Suez Fuel Crisis, the winged emblem signifies freedom and compact speed.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 240 120" className="w-full h-full max-w-[200px] max-h-[110px] drop-shadow-md">
        <defs>
          <linearGradient id="miniSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        {/* Left Wings */}
        <path d="M 20 54 L 75 54 L 75 66 L 20 66 Z M 30 70 L 75 70 L 75 80 L 30 80 Z" fill="url(#miniSilver)" />
        {/* Right Wings */}
        <path d="M 165 54 L 220 54 L 220 66 L 165 66 Z M 165 70 L 210 70 L 210 80 L 165 80 Z" fill="url(#miniSilver)" />
        {/* Center Roundel */}
        <circle cx="120" cy="65" r="38" fill="#0f172a" stroke="url(#miniSilver)" strokeWidth="8" />
        {revealed && (
          <text x="120" y="73" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="18" letterSpacing="2" fontFamily="Montserrat, sans-serif">
            MINI
          </text>
        )}
      </svg>
    )
  },
  {
    id: 25,
    slug: 'mitsubishi',
    imageUrl: '/logos/mitsubishi.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/03/Mitsubishi-logo-500x342.png',
    source: '1000logos.net',
    name: 'Mitsubishi',
    options: ['Mitsubishi', 'Mazda', 'Subaru', 'Suzuki'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1870,
    difficulty: 2,
    trivia: 'The name combines "Mitsu" (three) and "Hishi" (water chestnut, used in Japan to denote a diamond shape).',
    renderLogo: () => (
      <svg viewBox="0 0 200 180" className="w-full h-full max-w-[180px] max-h-[160px] drop-shadow-md">
        <defs>
          <linearGradient id="mitsuRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        <g fill="url(#mitsuRed)">
          {/* Top Diamond */}
          <polygon points="100,20 125,62 100,105 75,62" />
          {/* Bottom-Left Diamond */}
          <polygon points="100,105 50,105 25,148 75,148" />
          {/* Bottom-Right Diamond */}
          <polygon points="100,105 150,105 175,148 125,148" />
        </g>
      </svg>
    )
  },
  {
    id: 26,
    slug: 'peugeot',
    imageUrl: '/logos/peugeot.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/02/Peugeot-logo-500x333.png',
    source: '1000logos.net',
    name: 'Peugeot',
    options: ['Peugeot', 'Renault', 'Citroën', 'Porsche'],
    country: 'France',
    countryFlag: '🇫🇷',
    founded: 1810,
    difficulty: 2,
    trivia: 'Dating back to saw-blade manufacturing in Franche-Comté, the roaring lion symbol represents the razor sharpness and strength of their teeth.',
    renderLogo: () => (
      <svg viewBox="0 0 180 200" className="w-full h-full max-w-[160px] max-h-[180px] drop-shadow-lg">
        <defs>
          <linearGradient id="peugeotShield" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
        </defs>
        {/* Shield */}
        <path
          d="M 25 25 L 155 25 C 155 105 142 165 90 190 C 38 165 25 105 25 25 Z"
          fill="url(#peugeotShield)"
          stroke="#94a3b8"
          strokeWidth="4"
        />
        {/* Majestic Lion Head Profile with Mane */}
        <path
          d="M 65 65 C 75 52 95 48 115 54 C 122 58 126 68 122 75 C 132 82 128 98 124 105 C 134 115 125 130 115 135 C 105 145 90 152 75 145 C 80 135 78 125 72 118 C 65 110 60 95 62 82 Z"
          fill="#f8fafc"
        />
        {/* Lion Fangs & Eye */}
        <polygon points="112,88 122,96 112,98" fill="#020617" />
        <circle cx="102" cy="74" r="3" fill="#020617" />
      </svg>
    )
  },
  {
    id: 27,
    slug: 'renault',
    imageUrl: '/logos/renault.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/03/Renault-logo-500x281.png',
    source: '1000logos.net',
    name: 'Renault',
    options: ['Renault', 'Peugeot', 'Citroën', 'SEAT'],
    country: 'France',
    countryFlag: '🇫🇷',
    founded: 1899,
    difficulty: 2,
    trivia: 'The diamond (lozenge) logo first appeared in 1925 to fit cleanly over the horn on the vehicle’s front grille.',
    renderLogo: () => (
      <svg viewBox="0 0 180 200" className="w-full h-full max-w-[160px] max-h-[180px] drop-shadow-md">
        <defs>
          <linearGradient id="renaultChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        {/* Clean Geometric Diamond */}
        <polygon points="90,20 155,100 90,180 25,100" fill="none" stroke="url(#renaultChrome)" strokeWidth="18" strokeLinejoin="miter" />
        {/* Center Hollow Cutout */}
        <polygon points="90,56 122,100 90,144 58,100" fill="#0f172a" />
      </svg>
    )
  },
  {
    id: 28,
    slug: 'fiat',
    imageUrl: '/logos/fiat.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/02/Fiat-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Fiat',
    options: ['Fiat', 'Ferrari', 'Ford', 'Alfa Romeo'],
    country: 'Italy',
    countryFlag: '🇮🇹',
    founded: 1899,
    difficulty: 2,
    trivia: 'FIAT is an acronym for "Fabbrica Italiana Automobili Torino" (Italian Automobile Factory of Turin).',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[170px] max-h-[170px] drop-shadow-md">
        <defs>
          <linearGradient id="fiatRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>
          <linearGradient id="fiatSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        {/* Chrome Roundel */}
        <circle cx="100" cy="100" r="88" fill="url(#fiatSilver)" />
        <circle cx="100" cy="100" r="76" fill="url(#fiatRed)" stroke="#ffffff" strokeWidth="2" />
        {revealed ? (
          <text x="100" y="112" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="36" letterSpacing="4" fontFamily="Impact, Arial Black">
            FIAT
          </text>
        ) : (
          <rect x="55" y="94" width="90" height="12" rx="6" fill="#ffffff" opacity="0.6" />
        )}
      </svg>
    )
  },
  {
    id: 29,
    slug: 'cadillac',
    imageUrl: '/logos/cadillac.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/04/Cadillac-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Cadillac',
    options: ['Cadillac', 'Chevrolet', 'Chrysler', 'Lincoln'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 1902,
    difficulty: 2,
    trivia: 'Named after French explorer Antoine de la Mothe Cadillac, founder of Detroit. The crest features geometric color fields honoring the founder coat of arms.',
    renderLogo: () => (
      <svg viewBox="0 0 220 160" className="w-full h-full max-w-[190px] max-h-[140px] drop-shadow-md">
        <defs>
          <linearGradient id="cadiSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        {/* Wide Geometric Crest */}
        <polygon points="40,45 180,45 160,115 110,135 60,115" fill="#1e293b" stroke="url(#cadiSilver)" strokeWidth="6" />
        {/* Colored Segment Blocks */}
        <g stroke="#0f172a" strokeWidth="2">
          <rect x="62" y="55" width="28" height="24" fill="#dc2626" />
          <rect x="90" y="55" width="40" height="24" fill="#eab308" />
          <rect x="130" y="55" width="28" height="24" fill="#2563eb" />
          <polygon points="70,85 110,85 110,120 90,110" fill="#eab308" />
          <polygon points="110,85 150,85 130,110 110,120" fill="#dc2626" />
        </g>
      </svg>
    )
  },
  {
    id: 30,
    slug: 'suzuki',
    imageUrl: '/logos/suzuki.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/03/Suzuki-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Suzuki',
    options: ['Suzuki', 'Subaru', 'SEAT', 'Skoda'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1909,
    difficulty: 2,
    trivia: 'Originally a loom manufacturer, the red "S" features razor-sharp pointed strokes reminiscent of traditional Japanese kanji calligraphy.',
    renderLogo: () => (
      <svg viewBox="0 0 200 180" className="w-full h-full max-w-[170px] max-h-[150px] drop-shadow-md">
        <defs>
          <linearGradient id="suzukiRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        {/* Sharp Stylized S */}
        <path
          d="M 52 32 L 155 32 L 138 68 L 78 68 L 148 112 L 148 148 L 45 148 L 62 112 L 122 112 L 52 68 Z"
          fill="url(#suzukiRed)"
        />
      </svg>
    )
  },

  // --- LEVEL 3: LUXURY, EXOTIC & PERFORMANCE (31-40) ---
  {
    id: 31,
    slug: 'aston-martin',
    imageUrl: '/logos/aston-martin.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/02/Aston-Martin-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Aston Martin',
    options: ['Aston Martin', 'Bentley', 'Mini', 'Chrysler'],
    country: 'UK',
    countryFlag: '🇬🇧',
    founded: 1913,
    difficulty: 3,
    trivia: 'The winged emblem was inspired by Egyptian scarab beetle wings, famously driven by James Bond (007) since Goldfinger (1964).',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 260 100" className="w-full h-full max-w-[230px] max-h-[90px] drop-shadow-md">
        <defs>
          <linearGradient id="astonSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
        {/* Spread Feathered Wings */}
        <path
          d="M 15 45 C 65 30 110 38 130 55 C 150 38 195 30 245 45 C 225 68 185 82 130 82 C 75 82 35 68 15 45 Z"
          fill="#1e293b"
          stroke="url(#astonSilver)"
          strokeWidth="3.5"
        />
        {/* Feather lines */}
        {[35, 55, 75, 95, 115, 145, 165, 185, 205, 225].map((x, i) => (
          <line key={i} x1={x} y1="42" x2={x < 130 ? x + 10 : x - 10} y2="72" stroke="url(#astonSilver)" strokeWidth="2" />
        ))}
        {/* Center Plaque */}
        <rect x="75" y="44" width="110" height="22" rx="4" fill="#0f172a" stroke="url(#astonSilver)" strokeWidth="2" />
        {revealed && (
          <text x="130" y="59" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="9.5" letterSpacing="1" fontFamily="Montserrat, sans-serif">
            ASTON MARTIN
          </text>
        )}
      </svg>
    )
  },
  {
    id: 32,
    slug: 'bentley',
    imageUrl: '/logos/bentley.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2025/09/Bentley-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Bentley',
    options: ['Bentley', 'Bugatti', 'Rolls-Royce', 'Aston Martin'],
    country: 'UK',
    countryFlag: '🇬🇧',
    founded: 1919,
    difficulty: 3,
    trivia: 'Known as the "Winged B", the number of feathers on each wing originally differed (10 vs 11) to deter counterfeiters.',
    renderLogo: () => (
      <svg viewBox="0 0 240 120" className="w-full h-full max-w-[210px] max-h-[110px] drop-shadow-md">
        <defs>
          <linearGradient id="bentleyChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        {/* Sweeping Wings */}
        <path d="M 20 60 C 65 35 100 45 120 70 C 140 45 175 35 220 60 C 190 85 155 90 120 90 C 85 90 50 85 20 60 Z" fill="url(#bentleyChrome)" />
        {/* Center Oval with Letter B */}
        <ellipse cx="120" cy="68" rx="26" ry="24" fill="#020617" stroke="#ffffff" strokeWidth="3" />
        <text x="120" y="77" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="26" fontFamily="Georgia, serif">
          B
        </text>
      </svg>
    )
  },
  {
    id: 33,
    slug: 'rolls-royce',
    imageUrl: '/logos/rolls-royce.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/03/Rolls-Royce-Logo-500x315.png',
    source: '1000logos.net',
    name: 'Rolls-Royce',
    options: ['Rolls-Royce', 'Rover', 'Renault', 'Rimac'],
    country: 'UK',
    countryFlag: '🇬🇧',
    founded: 1906,
    difficulty: 3,
    trivia: 'Features overlapping "R"s for founders Charles Rolls and Henry Royce. Their wheel hub centers stay perfectly upright while the wheels spin.',
    renderLogo: () => (
      <svg viewBox="0 0 160 200" className="w-full h-full max-w-[150px] max-h-[180px] drop-shadow-md">
        <defs>
          <linearGradient id="rrSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        <rect x="25" y="25" width="110" height="150" rx="8" fill="#1e293b" stroke="url(#rrSilver)" strokeWidth="6" />
        {/* Monogram Overlapping R's */}
        <g fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="square">
          {/* First R */}
          <path d="M 62 135 L 62 65 Q 92 65 92 88 Q 92 105 62 105 L 94 135" />
          {/* Second R shifted */}
          <path d="M 80 145 L 80 75 Q 110 75 110 98 Q 110 115 80 115 L 112 145" stroke="url(#rrSilver)" />
        </g>
      </svg>
    )
  },
  {
    id: 34,
    slug: 'maserati',
    imageUrl: '/logos/maserati.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/04/Maserati-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Maserati',
    options: ['Maserati', 'Mazda', 'McLaren', 'Mitsubishi'],
    country: 'Italy',
    countryFlag: '🇮🇹',
    founded: 1914,
    difficulty: 3,
    trivia: 'The Trident emblem was inspired by the statue of Neptune in Piazza Maggiore in Bologna, Italy, where the company was born.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 160 210" className="w-full h-full max-w-[150px] max-h-[190px] drop-shadow-md">
        <defs>
          <linearGradient id="tridentRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>
        {/* Oval Shield */}
        <ellipse cx="80" cy="105" rx="65" ry="92" fill="#0f172a" stroke="#cbd5e1" strokeWidth="6" />
        {/* Neptune's Trident */}
        <path
          d="M 77 150 L 83 150 L 83 95 L 98 105 L 102 98 L 83 80 L 83 50 L 77 50 L 77 80 L 58 98 L 62 105 L 77 95 Z"
          fill="url(#tridentRed)"
        />
        {/* Outer Prongs */}
        <path d="M 52 70 L 62 105 L 56 108 L 46 72 Z" fill="url(#tridentRed)" />
        <path d="M 108 70 L 98 105 L 104 108 L 114 72 Z" fill="url(#tridentRed)" />
        {revealed && (
          <text x="80" y="180" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="13" letterSpacing="2" fontFamily="Montserrat, sans-serif">
            MASERATI
          </text>
        )}
      </svg>
    )
  },
  {
    id: 35,
    slug: 'alfa-romeo',
    imageUrl: '/logos/alfa-romeo-logo.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/09/Alfa-Romeo-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Alfa Romeo',
    options: ['Alfa Romeo', 'Ferrari', 'Abarth', 'Aston Martin'],
    country: 'Italy',
    countryFlag: '🇮🇹',
    founded: 1910,
    difficulty: 3,
    trivia: 'Combines the red cross of Milan on the left and the crowned green serpent (Biscione) swallowing a Saracen on the right.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-lg">
        <defs>
          <linearGradient id="alfaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
        {/* Outer Navy Ring */}
        <circle cx="100" cy="100" r="92" fill="#1e3a8a" stroke="url(#alfaGold)" strokeWidth="6" />
        {revealed && (
          <text x="100" y="32" textAnchor="middle" fill="url(#alfaGold)" fontWeight="900" fontSize="13" letterSpacing="2" fontFamily="Montserrat, sans-serif">
            ALFA ROMEO
          </text>
        )}
        {/* Inner Circle split */}
        <circle cx="100" cy="100" r="62" fill="#ffffff" stroke="url(#alfaGold)" strokeWidth="4" />
        {/* Left Half: Red Cross of Milan */}
        <path d="M 100 38 A 62 62 0 0 0 100 162 Z" fill="#ffffff" />
        <rect x="62" y="44" width="14" height="112" fill="#dc2626" />
        <rect x="42" y="93" width="54" height="14" fill="#dc2626" />
        {/* Right Half: Green Crowned Serpent (Biscione) */}
        <path d="M 100 38 A 62 62 0 0 1 100 162 Z" fill="#0284c7" />
        <path
          d="M 112 65 Q 138 65 132 85 Q 112 95 132 110 Q 138 130 114 135"
          stroke="#16a34a"
          strokeWidth="11"
          fill="none"
          strokeLinecap="round"
        />
        {/* Little Red Man in jaws */}
        <circle cx="140" cy="68" r="4" fill="#ef4444" />
      </svg>
    )
  },
  {
    id: 36,
    slug: 'bugatti',
    imageUrl: '/logos/bugatti.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/02/Bugatti-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Bugatti',
    options: ['Bugatti', 'Bentley', 'Buick', 'BMW'],
    country: 'France',
    countryFlag: '🇫🇷',
    founded: 1909,
    difficulty: 3,
    trivia: 'The red oval is studded with 60 pearls around the border, representing Ettore Bugatti’s jewelry heritage.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 240 140" className="w-full h-full max-w-[210px] max-h-[120px] drop-shadow-md">
        <defs>
          <linearGradient id="bugattiRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>
        {/* Red Oval */}
        <ellipse cx="120" cy="70" rx="108" ry="58" fill="url(#bugattiRed)" stroke="#ffffff" strokeWidth="5" />
        {/* Border Pearls (Dots) */}
        {Array.from({ length: 32 }).map((_, i) => {
          const angle = (i * 2 * Math.PI) / 32;
          const x = 120 + 103 * Math.cos(angle);
          const y = 70 + 53 * Math.sin(angle);
          return <circle key={i} cx={x} cy={y} r="2.2" fill="#ffffff" />;
        })}
        {/* EB Monogram in center */}
        <g fill="#000000">
          <path d="M 110 52 L 122 52 L 122 88 L 110 88 Z" />
          <path d="M 122 52 Q 138 52 138 68 Q 138 88 122 88 Z" fill="none" stroke="#000000" strokeWidth="6" />
          <path d="M 120 52 L 102 52 L 102 88 L 120 88" fill="none" stroke="#000000" strokeWidth="6" />
        </g>
        {revealed && (
          <text x="120" y="106" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="16" letterSpacing="4" fontFamily="Montserrat, sans-serif">
            BUGATTI
          </text>
        )}
      </svg>
    )
  },
  {
    id: 37,
    slug: 'mclaren',
    imageUrl: '/logos/mclaren.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/03/McLaren-Logo-500x281.png',
    source: '1000logos.net',
    name: 'McLaren',
    options: ['McLaren', 'Maserati', 'Mazda', 'Mercedes-Benz'],
    country: 'UK',
    countryFlag: '🇬🇧',
    founded: 1963,
    difficulty: 3,
    trivia: 'The aerodynamic "Speedmark" swoosh evokes the vortex vortices formed over the rear bodywork of McLaren F1 supercars.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 240 120" className="w-full h-full max-w-[210px] max-h-[110px] drop-shadow-md">
        <defs>
          <linearGradient id="mclarenRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        {revealed ? (
          <text x="90" y="72" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="26" letterSpacing="2" fontFamily="Montserrat, sans-serif">
            McLaren
          </text>
        ) : (
          <rect x="25" y="55" width="110" height="20" rx="4" fill="#334155" opacity="0.6" />
        )}
        {/* Aerodynamic Speedmark Swoosh */}
        <path
          d="M 160 38 C 190 34 220 50 220 70 C 220 60 195 48 160 52 C 185 58 190 70 178 78 C 172 70 162 60 160 38 Z"
          fill="url(#mclarenRed)"
        />
      </svg>
    )
  },
  {
    id: 38,
    slug: 'chrysler',
    imageUrl: '/logos/chrysler.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/04/Chrysler-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Chrysler',
    options: ['Chrysler', 'Aston Martin', 'Chevrolet', 'Cadillac'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 1925,
    difficulty: 3,
    trivia: 'Originally depicted a wax seal with ribbons, later updated to modern polished silver wings grasping a blue and gold seal.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 260 100" className="w-full h-full max-w-[230px] max-h-[90px] drop-shadow-md">
        <defs>
          <linearGradient id="chryslerSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Sleek Horizontal Wing Blades */}
        <polygon points="15,48 105,48 95,62 25,62" fill="url(#chryslerSilver)" />
        <polygon points="155,48 245,48 235,62 165,62" fill="url(#chryslerSilver)" />
        {/* Center Blue Ribbon Plaque */}
        <rect x="92" y="38" width="76" height="34" rx="6" fill="#1e3a8a" stroke="url(#chryslerSilver)" strokeWidth="4" />
        {revealed && (
          <text x="130" y="60" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="10" letterSpacing="1" fontFamily="Montserrat, sans-serif">
            CHRYSLER
          </text>
        )}
      </svg>
    )
  },
  {
    id: 39,
    slug: 'buick',
    imageUrl: '/logos/buick.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/04/Buick-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Buick',
    options: ['Buick', 'Bentley', 'Bugatti', 'BMW'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 1899,
    difficulty: 3,
    trivia: 'The "Tri-Shield" logo honors David Dunbar Buick’s ancestral Scottish coat of arms, arranged diagonally in red, white, and blue.',
    renderLogo: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-md">
        <defs>
          <linearGradient id="buickSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
        {/* Ring */}
        <circle cx="100" cy="100" r="88" fill="none" stroke="url(#buickSilver)" strokeWidth="12" />
        {/* 3 Diagonal Stepped Shields */}
        {/* Shield 1: Red */}
        <path d="M 48 75 L 76 75 C 76 110 70 125 62 135 C 54 125 48 110 48 75 Z" fill="#dc2626" stroke="#ffffff" strokeWidth="2.5" />
        {/* Shield 2: White/Silver */}
        <path d="M 86 60 L 114 60 C 114 95 108 110 100 120 C 92 110 86 95 86 60 Z" fill="#cbd5e1" stroke="#ffffff" strokeWidth="2.5" />
        {/* Shield 3: Blue */}
        <path d="M 124 45 L 152 45 C 152 80 146 95 138 105 C 130 95 124 80 124 45 Z" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
      </svg>
    )
  },
  {
    id: 40,
    slug: 'acura',
    imageUrl: '/logos/acura.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2018/09/Acura-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Acura',
    options: ['Acura', 'Aston Martin', 'Audi', 'Alfa Romeo'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1986,
    difficulty: 3,
    trivia: 'Represents a mechanical caliper tool for precise engineering, modified to form a stylized letter "A" (and inverted "H" for parent company Honda).',
    renderLogo: () => (
      <svg viewBox="0 0 220 160" className="w-full h-full max-w-[190px] max-h-[140px] drop-shadow-md">
        <defs>
          <linearGradient id="acuraSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Oval */}
        <ellipse cx="110" cy="80" rx="96" ry="64" fill="none" stroke="url(#acuraSilver)" strokeWidth="12" />
        {/* Caliper / Stylized A */}
        <path
          d="M 68 116 L 98 48 L 122 48 L 152 116 L 134 116 L 122 88 L 98 88 L 86 116 Z
             M 103 74 L 117 74 L 110 58 Z"
          fill="url(#acuraSilver)"
        />
      </svg>
    )
  },

  // --- LEVEL 4: ENTHUSIAST, CLASSIC & SUPERCARS (41-50) ---
  {
    id: 41,
    slug: 'genesis',
    imageUrl: '/logos/genesis.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2019/10/Genesis-Logo-500x314.png',
    source: '1000logos.net',
    name: 'Genesis',
    options: ['Genesis', 'Aston Martin', 'Bentley', 'Chrysler'],
    country: 'South Korea',
    countryFlag: '🇰🇷',
    founded: 2015,
    difficulty: 4,
    trivia: 'Hyundai’s standalone luxury division sports a 3D winged crest surrounding a dark shield that stands for boundless flight.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 260 110" className="w-full h-full max-w-[230px] max-h-[100px] drop-shadow-md">
        <defs>
          <linearGradient id="genSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        {/* Left Wings */}
        <path d="M 20 48 C 65 40 90 52 105 70 C 85 70 50 62 20 48 Z" fill="url(#genSilver)" />
        {/* Right Wings */}
        <path d="M 240 48 C 195 40 170 52 155 70 C 175 70 210 62 240 48 Z" fill="url(#genSilver)" />
        {/* Center Crest Shield */}
        <path d="M 105 45 L 155 45 C 155 78 145 92 130 98 C 115 92 105 78 105 45 Z" fill="#0f172a" stroke="url(#genSilver)" strokeWidth="4" />
        {revealed && (
          <text x="130" y="68" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="8.5" letterSpacing="1" fontFamily="Montserrat, sans-serif">
            GENESIS
          </text>
        )}
      </svg>
    )
  },
  {
    id: 42,
    slug: 'infiniti',
    imageUrl: '/logos/infiniti.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/04/Infiniti-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Infiniti',
    options: ['Infiniti', 'Lexus', 'Genesis', 'Acura'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1989,
    difficulty: 4,
    trivia: 'Nissan’s luxury brand emblem represents two lines converging to the horizon at Mount Fuji, pointing to infinite possibilities.',
    renderLogo: () => (
      <svg viewBox="0 0 220 160" className="w-full h-full max-w-[190px] max-h-[140px] drop-shadow-md">
        <defs>
          <linearGradient id="infinitiChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        {/* Oval with lower gap */}
        <ellipse cx="110" cy="80" rx="95" ry="60" fill="none" stroke="url(#infinitiChrome)" strokeWidth="12" />
        {/* Converging Highway Road */}
        <polygon points="110,48 85,116 102,116 110,75 118,116 135,116" fill="url(#infinitiChrome)" />
      </svg>
    )
  },
  {
    id: 43,
    slug: 'lincoln',
    imageUrl: '/logos/lincoln.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Lincoln-logo-500x281.png',
    source: '1000logos.net',
    name: 'Lincoln',
    options: ['Lincoln', 'Cadillac', 'Chrysler', 'Lexus'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 1917,
    difficulty: 4,
    trivia: 'Named after President Abraham Lincoln by founder Henry Leland, the four-pointed compass star symbolizes radiant prestige in all four corners of the globe.',
    renderLogo: () => (
      <svg viewBox="0 0 160 210" className="w-full h-full max-w-[150px] max-h-[190px] drop-shadow-md">
        <defs>
          <linearGradient id="lincolnSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Elongated Rounded Frame */}
        <rect x="25" y="25" width="110" height="160" rx="30" fill="none" stroke="url(#lincolnSilver)" strokeWidth="10" />
        {/* 4-Pointed Lincoln Star */}
        <polygon points="80,35 84,95 125,105 84,115 80,175 76,115 35,105 76,95" fill="url(#lincolnSilver)" />
      </svg>
    )
  },
  {
    id: 44,
    slug: 'citroen',
    imageUrl: '/logos/citroen.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2019/12/Citroen-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Citroën',
    options: ['Citroën', 'Peugeot', 'Renault', 'SEAT'],
    country: 'France',
    countryFlag: '🇫🇷',
    founded: 1919,
    difficulty: 4,
    trivia: 'André Citroën made his fortune mass-producing helical double-chevron gears, celebrated by the twin ascending chevrons.',
    renderLogo: () => (
      <svg viewBox="0 0 200 180" className="w-full h-full max-w-[170px] max-h-[150px] drop-shadow-md">
        <defs>
          <linearGradient id="citroenRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        {/* Top Chevron */}
        <polyline points="45,70 100,25 155,70" fill="none" stroke="url(#citroenRed)" strokeWidth="22" strokeLinecap="round" strokeLinejoin="miter" />
        {/* Bottom Chevron */}
        <polyline points="45,130 100,85 155,130" fill="none" stroke="url(#citroenRed)" strokeWidth="22" strokeLinecap="round" strokeLinejoin="miter" />
      </svg>
    )
  },
  {
    id: 45,
    slug: 'skoda',
    imageUrl: '/logos/skoda.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/03/Skoda-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Škoda',
    options: ['Škoda', 'SEAT', 'Saab', 'Suzuki'],
    country: 'Czech Republic',
    countryFlag: '🇨🇿',
    founded: 1895,
    difficulty: 4,
    trivia: 'The "Winged Arrow" emblem represents flight/progress (wings) and precision speed (arrow) within an eye gazing forward.',
    renderLogo: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-md">
        <defs>
          <linearGradient id="skodaGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
        </defs>
        {/* Ring */}
        <circle cx="100" cy="100" r="88" fill="none" stroke="url(#skodaGreen)" strokeWidth="12" />
        {/* Winged Arrow */}
        <g fill="url(#skodaGreen)">
          <path d="M 68 135 L 140 65 L 126 65 L 118 78 L 102 78 L 94 92 L 78 92 Z" />
          <circle cx="116" cy="96" r="8" fill="#0f172a" />
        </g>
      </svg>
    )
  },
  {
    id: 46,
    slug: 'seat',
    imageUrl: '/logos/seat.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/06/Seat-Logo-500x281.png',
    source: '1000logos.net',
    name: 'SEAT',
    options: ['SEAT', 'Škoda', 'Suzuki', 'Saab'],
    country: 'Spain',
    countryFlag: '🇪🇸',
    founded: 1950,
    difficulty: 4,
    trivia: 'Spain’s leading auto manufacturer. The segmented metallic "S" with diagonal lines represents precision geometry and Barcelona design.',
    renderLogo: () => (
      <svg viewBox="0 0 200 180" className="w-full h-full max-w-[170px] max-h-[150px] drop-shadow-md">
        <defs>
          <linearGradient id="seatSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Segmented S Emblem */}
        <path
          d="M 60 40 L 150 40 L 135 68 L 92 68 L 145 105 L 140 140 L 50 140 L 65 112 L 108 112 L 55 75 Z"
          fill="url(#seatSilver)"
        />
        {/* Diagonal slash lines */}
        <line x1="85" y1="40" x2="68" y2="70" stroke="#0f172a" strokeWidth="5" />
        <line x1="130" y1="110" x2="114" y2="140" stroke="#0f172a" strokeWidth="5" />
      </svg>
    )
  },
  {
    id: 47,
    slug: 'lotus',
    imageUrl: '/logos/lotus.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/06/Lotus-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Lotus',
    options: ['Lotus', 'Lamborghini', 'Lancia', 'Lexus'],
    country: 'UK',
    countryFlag: '🇬🇧',
    founded: 1948,
    difficulty: 4,
    trivia: 'Founded by Colin Chapman ("Simplify, then add lightness"). Features British Racing Green and Chapman’s initials ACBC.',
    renderLogo: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-md">
        {/* Yellow Outer Disc */}
        <circle cx="100" cy="100" r="90" fill="#facc15" stroke="#ca8a04" strokeWidth="4" />
        {/* British Racing Green Rounded Triangle */}
        <path d="M 100 28 C 155 28 172 75 162 135 C 135 175 65 175 38 135 C 28 75 45 28 100 28 Z" fill="#14532d" />
        {/* Monogram ACBC */}
        <text x="100" y="85" textAnchor="middle" fill="#facc15" fontWeight="900" fontSize="24" fontFamily="Montserrat, sans-serif">
          C
        </text>
        <text x="100" y="112" textAnchor="middle" fill="#facc15" fontWeight="900" fontSize="18" fontFamily="Montserrat, sans-serif">
          AB
        </text>
      </svg>
    )
  },
  {
    id: 48,
    slug: 'koenigsegg',
    imageUrl: '/logos/koenigsegg.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/04/Koenigsegg-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Koenigsegg',
    options: ['Koenigsegg', 'Pagani', 'Rimac', 'Bugatti'],
    country: 'Sweden',
    countryFlag: '🇸🇪',
    founded: 1994,
    difficulty: 4,
    trivia: 'The shield is based on the ancient Koenigsegg family coat of arms in Swabia, adorned with yellow and red rhombuses.',
    renderLogo: () => (
      <svg viewBox="0 0 160 210" className="w-full h-full max-w-[150px] max-h-[190px] drop-shadow-lg">
        {/* Shield */}
        <path
          d="M 22 25 L 138 25 C 138 100 126 158 80 195 C 34 158 22 100 22 25 Z"
          fill="#1e293b"
          stroke="#eab308"
          strokeWidth="4"
        />
        {/* Rhombus Diamond Pattern */}
        <g stroke="#000000" strokeWidth="1.5">
          <polygon points="80,35 105,55 80,75 55,55" fill="#eab308" />
          <polygon points="105,55 130,75 105,95 80,75" fill="#ef4444" />
          <polygon points="55,55 80,75 55,95 30,75" fill="#ef4444" />
          <polygon points="80,75 105,95 80,115 55,95" fill="#eab308" />
          <polygon points="105,95 125,115 105,135 85,115" fill="#eab308" />
          <polygon points="55,95 75,115 55,135 35,115" fill="#eab308" />
          <polygon points="80,115 100,135 80,155 60,135" fill="#ef4444" />
        </g>
      </svg>
    )
  },
  {
    id: 49,
    slug: 'pagani',
    imageUrl: '/logos/pagani.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/04/Pagani-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Pagani',
    options: ['Pagani', 'Koenigsegg', 'Ferrari', 'Lamborghini'],
    country: 'Italy',
    countryFlag: '🇮🇹',
    founded: 1992,
    difficulty: 4,
    trivia: 'Founded by Horacio Pagani (former Lamborghini carbon fiber chief). Known for artisanal hypercars like the Zonda and Huayra.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 240 130" className="w-full h-full max-w-[210px] max-h-[120px] drop-shadow-md">
        <defs>
          <linearGradient id="paganiChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        {/* Carbon Oval Plate */}
        <ellipse cx="120" cy="65" rx="105" ry="52" fill="#0f172a" stroke="url(#paganiChrome)" strokeWidth="6" />
        {/* Stylized P Badge */}
        <path d="M 52 42 L 82 42 Q 102 42 102 62 Q 102 82 82 82 L 68 82 L 68 95 L 52 95 Z M 68 55 L 68 70 L 80 70 Q 88 70 88 62 Q 88 55 80 55 Z" fill="url(#paganiChrome)" />
        {revealed ? (
          <text x="155" y="74" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="18" letterSpacing="3" fontFamily="Montserrat, sans-serif">
            PAGANI
          </text>
        ) : (
          <ellipse cx="155" cy="65" rx="35" ry="12" fill="#334155" opacity="0.6" />
        )}
      </svg>
    )
  },
  {
    id: 50,
    slug: 'pontiac',
    imageUrl: '/logos/pontiac.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/04/Pontiac-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Pontiac',
    options: ['Pontiac', 'Plymouth', 'Peugeot', 'Porsche'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 1926,
    difficulty: 4,
    trivia: 'Named after Chief Pontiac of the Ottawa tribe. The red Dart emblem represents a Native American arrowhead, famed for the GTO and Firebird.',
    renderLogo: () => (
      <svg viewBox="0 0 160 210" className="w-full h-full max-w-[150px] max-h-[190px] drop-shadow-lg">
        <defs>
          <linearGradient id="pontiacRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>
        {/* Downward Arrowhead / Dart */}
        <polygon points="80,195 24,40 80,62 136,40" fill="url(#pontiacRed)" stroke="#cbd5e1" strokeWidth="5" strokeLinejoin="round" />
        {/* Silver Cross Star Accent */}
        <polygon points="80,72 82,90 94,92 82,94 80,112 78,94 66,92 78,90" fill="#ffffff" />
      </svg>
    )
  }
,
  {
    id: 51,
    slug: 'alpine',
    imageUrl: '/logos/alpine.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Alpine-logo-500x281.png',
    source: '1000logos.net',
    name: 'Alpine',
    options: ['Alpine', 'Bugatti', 'Peugeot', 'Renault'],
    country: 'France',
    countryFlag: '🇫🇷',
    founded: 1955,
    difficulty: 3,
    trivia: 'Founded by Jean Rédélé in Dieppe, France. Renowned for nimble lightweight sports cars like the rally-dominating A110 and competing in Formula 1.',
    renderLogo: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-md">
        <defs>
          <linearGradient id="alpineBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066cc" />
            <stop offset="100%" stopColor="#003380" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="92" fill="url(#alpineBlue)" stroke="#e2e8f0" strokeWidth="6" />
        <path d="M 50 148 L 94 48 L 106 48 L 150 148 L 128 148 L 115 118 L 78 118 L 88 98 L 138 98 L 100 68 L 68 148 Z" fill="#ffffff" />
      </svg>
    )
  },
  {
    id: 52,
    slug: 'daewoo',
    imageUrl: '/logos/daewoo.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/04/Daewoo-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Daewoo',
    options: ['Daewoo', 'Hyundai', 'Kia', 'SsangYong'],
    country: 'South Korea',
    countryFlag: '🇰🇷',
    founded: 1967,
    difficulty: 3,
    trivia: 'Founded by Kim Woo-choong in Seoul. The emblem represents an open seashell or lotus blossom radiating outward with spreading wings.',
    renderLogo: () => (
      <svg viewBox="0 0 220 180" className="w-full h-full max-w-[190px] max-h-[150px] drop-shadow-md">
        <defs>
          <linearGradient id="daewooSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
        <path d="M 110 30 C 130 55 145 90 145 130 C 125 125 115 125 110 125 C 105 125 95 125 75 130 C 75 90 90 55 110 30 Z" fill="url(#daewooSilver)" />
        <path d="M 60 75 C 45 95 38 120 40 145 C 58 138 72 136 85 137 C 82 115 88 95 100 80 C 82 76 70 75 60 75 Z" fill="url(#daewooSilver)" />
        <path d="M 160 75 C 175 95 182 120 180 145 C 162 138 148 136 135 137 C 138 115 132 95 120 80 C 138 76 150 75 160 75 Z" fill="url(#daewooSilver)" />
      </svg>
    )
  },
  {
    id: 53,
    slug: 'datsun',
    imageUrl: '/logos/datsun.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Datsun-logo-500x281.png',
    source: '1000logos.net',
    name: 'Datsun',
    options: ['Datsun', 'Nissan', 'Mazda', 'Toyota'],
    country: 'Japan',
    countryFlag: '🇯🇵',
    founded: 1931,
    difficulty: 3,
    trivia: 'Originally "DAT Motorcar Co." from the initials of its founders. Gained worldwide acclaim for affordable sports coupes like the legendary 240Z.',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 220 160" className="w-full h-full max-w-[200px] max-h-[140px] drop-shadow-md">
        <defs>
          <linearGradient id="datsunRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id="datsunBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <circle cx="110" cy="80" r="60" fill="url(#datsunRed)" stroke="#f8fafc" strokeWidth="4" />
        <rect x="15" y="60" width="190" height="40" rx="8" fill="url(#datsunBlue)" stroke="#f8fafc" strokeWidth="4" />
        {revealed && (
          <text x="110" y="87" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="22" letterSpacing="3" fontFamily="Montserrat, sans-serif">
            DATSUN
          </text>
        )}
      </svg>
    )
  },
  {
    id: 54,
    slug: 'ford-mustang',
    imageUrl: '/logos/ford-mustang.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Mustang-logo-500x281.png',
    source: '1000logos.net',
    name: 'Ford Mustang',
    options: ['Ford Mustang', 'Ferrari', 'Porsche', 'Corvette'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 1964,
    difficulty: 2,
    trivia: 'Created by designer Phil Clark, the iconic galloping wild horse runs toward the left (westward), symbolizing the untamed spirit of American freedom and open highways.',
    renderLogo: () => (
      <svg viewBox="0 0 220 140" className="w-full h-full max-w-[200px] max-h-[120px] drop-shadow-lg">
        <defs>
          <linearGradient id="mustangSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
        <path d="M 175 48 C 160 40 142 42 135 46 C 122 36 102 38 92 48 C 85 45 72 48 68 55 C 60 52 48 55 42 62 C 35 68 32 78 38 82 C 45 86 52 82 58 85 C 62 92 68 102 78 108 C 82 98 88 92 95 90 C 105 92 118 88 126 80 C 135 88 145 95 158 98 C 165 92 168 85 162 78 C 172 75 180 65 178 55 C 178 50 176 48 175 48 Z" fill="url(#mustangSilver)" stroke="#e2e8f0" strokeWidth="2" />
        <path d="M 65 85 L 48 112 L 56 115 L 75 92 Z" fill="url(#mustangSilver)" />
        <path d="M 130 85 L 145 118 L 155 116 L 140 82 Z" fill="url(#mustangSilver)" />
      </svg>
    )
  },
  {
    id: 55,
    slug: 'polestar',
    imageUrl: '/logos/polestar.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Polestar-logo-500x281.png',
    source: '1000logos.net',
    name: 'Polestar',
    options: ['Polestar', 'Volvo', 'Tesla', 'Rivian'],
    country: 'Sweden',
    countryFlag: '🇸🇪',
    founded: 1996,
    difficulty: 3,
    trivia: 'Originally Volvo’s racing and high-performance skunkworks, Polestar became an independent Swedish electric car maker. Its logo forms the guiding North Star with two diagonal arrow chevrons.',
    renderLogo: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[170px] max-h-[170px] drop-shadow-md">
        <defs>
          <linearGradient id="poleSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        <polygon points="100,28 100,92 145,92 164,73 125,73 125,47" fill="url(#poleSilver)" />
        <polygon points="100,172 100,108 55,108 36,127 75,127 75,153" fill="url(#poleSilver)" />
      </svg>
    )
  },
  {
    id: 56,
    slug: 'rivian',
    imageUrl: '/logos/rivian.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/11/Rivian-Logo-500x281.png',
    source: '1000logos.net',
    name: 'Rivian',
    options: ['Rivian', 'Lucid', 'Tesla', 'Karma'],
    country: 'USA',
    countryFlag: '🇺🇸',
    founded: 2009,
    difficulty: 3,
    trivia: 'Founded by RJ Scaringe to build all-electric adventure trucks and SUVs. The emblem is a stylized geometric compass with four arrows symbolizing exploration and sustainable journeys.',
    renderLogo: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[170px] max-h-[170px] drop-shadow-md">
        <defs>
          <linearGradient id="rivianGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <path d="M 100 25 L 175 100 L 100 175 L 25 100 Z" fill="none" stroke="url(#rivianGold)" strokeWidth="12" strokeLinejoin="miter" />
        <path d="M 100 55 L 145 100 L 100 145 L 55 100 Z" fill="none" stroke="#f8fafc" strokeWidth="8" strokeLinejoin="miter" />
        <polygon points="100,75 125,100 100,125 75,100" fill="url(#rivianGold)" />
      </svg>
    )
  },
  {
    id: 57,
    slug: 'ssangyong',
    imageUrl: '/logos/ssangyong.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2020/04/SsangYong-Logo-500x281.png',
    source: '1000logos.net',
    name: 'SsangYong',
    options: ['SsangYong', 'Daewoo', 'Hyundai', 'Genesis'],
    country: 'South Korea',
    countryFlag: '🇰🇷',
    founded: 1954,
    difficulty: 4,
    trivia: 'The Korean name translates to "Double Dragons". The twin loops represent two mythical dragons ascending into the heavens, famed for rugged SUVs like the Rexton and Korando.',
    renderLogo: () => (
      <svg viewBox="0 0 220 180" className="w-full h-full max-w-[190px] max-h-[150px] drop-shadow-md">
        <defs>
          <linearGradient id="ssangSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        <ellipse cx="110" cy="90" rx="95" ry="65" fill="none" stroke="url(#ssangSilver)" strokeWidth="10" />
        <path d="M 75 75 C 65 60 80 50 95 65 C 105 75 105 95 90 105 C 75 115 60 105 65 85" fill="none" stroke="url(#ssangSilver)" strokeWidth="8" strokeLinecap="round" />
        <path d="M 145 75 C 155 60 140 50 125 65 C 115 75 115 95 130 105 C 145 115 160 105 155 85" fill="none" stroke="url(#ssangSilver)" strokeWidth="8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 58,
    slug: 'vauxhall',
    imageUrl: '/logos/vauxhall.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Vauxhall-logo-500x281.png',
    source: '1000logos.net',
    name: 'Vauxhall',
    options: ['Vauxhall', 'Holden', 'Opel', 'Bentley'],
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    founded: 1857,
    difficulty: 3,
    trivia: 'One of the United Kingdom’s oldest car brands. The griffin emblem originates from the 13th-century heraldic arms of Sir Falkes de Breauté, clutching a pennant stamped with the letter "V".',
    renderLogo: (revealed) => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-md">
        <defs>
          <linearGradient id="vauxhallRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="92" fill="url(#vauxhallRed)" stroke="#f8fafc" strokeWidth="6" />
        <path d="M 105 45 C 98 42 90 48 92 58 C 85 58 75 65 72 75 C 68 85 75 95 82 95 C 75 105 70 120 75 135 C 80 148 95 152 110 150 C 125 148 135 135 132 120 C 130 110 122 102 115 98 C 125 90 130 75 125 60 C 120 50 112 46 105 45 Z" fill="#ffffff" />
        <line x1="120" y1="55" x2="155" y2="90" stroke="#f8fafc" strokeWidth="5" />
        <polygon points="155,90 135,80 145,98" fill="#ffffff" />
        {revealed && (
          <text x="142" y="93" fill="#dc2626" fontWeight="900" fontSize="11" fontFamily="Montserrat, sans-serif">
            V
          </text>
        )}
      </svg>
    )
  }
,
  {
    id: 59,
    slug: 'tata',
    imageUrl: '/logos/tata.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Tata-Logo.png',
    source: 'local',
    name: 'Tata',
    options: ['Tata', 'Mahindra', 'Maruti', 'Hindustan Motors'],
    country: 'India',
    countryFlag: '🇮🇳',
    founded: 1945,
    difficulty: 3,
    trivia: `Tata Motors is one of India's largest automotive conglomerates, now owning Jaguar Land Rover. Founded in 1945 by JRD Tata, it produced the iconic Nano — once the world's cheapest car.`,
    renderLogo: (revealed) => (
      <svg viewBox="0 0 220 160" className="w-full h-full max-w-[200px] max-h-[140px] drop-shadow-md">
        <defs>
          <linearGradient id="tataBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003399" />
            <stop offset="100%" stopColor="#001a66" />
          </linearGradient>
        </defs>
        <ellipse cx="110" cy="80" rx="100" ry="60" fill="url(#tataBlue)" stroke="#e2e8f0" strokeWidth="5" />
        {revealed && (
          <text x="110" y="90" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="30" letterSpacing="4" fontFamily="Montserrat, sans-serif">
            TATA
          </text>
        )}
      </svg>
    ),
  },
  {
    id: 60,
    slug: 'opel',
    imageUrl: '/logos/opel.png',
    remoteUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Opel-Logo.png',
    source: 'local',
    name: 'Opel',
    options: ['Opel', 'Vauxhall', 'Peugeot', 'Renault'],
    country: 'Germany',
    countryFlag: '🇩🇪',
    founded: 1899,
    difficulty: 2,
    trivia: `Opel's lightning bolt emblem represents speed and dynamism. Sister brand to Vauxhall in the UK, Opel is now part of Stellantis and has been manufacturing cars for over 125 years.`,
    renderLogo: () => (
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[180px] max-h-[180px] drop-shadow-md">
        <defs>
          <linearGradient id="opelSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="92" fill="#1e293b" stroke="url(#opelSilver)" strokeWidth="6" />
        <polygon points="115,28 80,105 105,105 85,172 140,88 112,88 140,28" fill="url(#opelSilver)" />
      </svg>
    ),
  }

];


// Helper to get questions shuffled with randomized options
export function getQuizQuestions() {
  const shuffledLogos = [...CAR_LOGOS];
  for (let i = shuffledLogos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledLogos[i], shuffledLogos[j]] = [shuffledLogos[j], shuffledLogos[i]];
  }

  return shuffledLogos.map((item) => {
    // Ensure all 4 options exist and include the correct name
    let opts = [...item.options];
    if (!opts.includes(item.name)) {
      opts[0] = item.name;
    }
    // Shuffle options so correct answer isn't in fixed slot
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    return {
      ...item,
      shuffledOptions: opts
    };
  });
}
