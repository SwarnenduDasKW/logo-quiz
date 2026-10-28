// 100 Kids-friendly opposite words arranged into 5 Progressive Levels (20 words each)
// Inspired by "100 OPPOSITE WORDS for Kids - English Vocabulary" (Learn With Miss Kaye)

export const LEVELS = [
  {
    level: 1,
    title: 'Pre-School Explorer',
    age: 'Ages 3 – 4',
    icon: '🐣',
    badge: 'Beginner',
    color: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-400/40',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-300',
    desc: 'Everyday basic words: Big/Small, Hot/Cold, Happy/Sad'
  },
  {
    level: 2,
    title: 'Kindergarten Star',
    age: 'Ages 5 – 6',
    icon: '🐥',
    badge: 'Early Learner',
    color: 'from-amber-400 to-yellow-500',
    borderColor: 'border-amber-400/40',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-300',
    desc: 'Fun sensory & spatial pairs: Tall/Short, Heavy/Light'
  },
  {
    level: 3,
    title: '1st Grade Adventurer',
    age: 'Ages 6 – 7',
    icon: '🦁',
    badge: 'Intermediate',
    color: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-400/40',
    bgColor: 'bg-cyan-500/10',
    textColor: 'text-cyan-300',
    desc: 'Shapes, feelings & textures: Smooth/Rough, Brave/Scared'
  },
  {
    level: 4,
    title: '2nd Grade Champion',
    age: 'Ages 7 – 8',
    icon: '🚀',
    badge: 'Advanced',
    color: 'from-purple-400 to-pink-500',
    borderColor: 'border-purple-400/40',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-300',
    desc: 'Descriptive antonyms: Fresh/Stale, Strong/Weak'
  },
  {
    level: 5,
    title: 'Word Master Genius',
    age: 'Ages 8+',
    icon: '👑',
    badge: 'Master',
    color: 'from-rose-400 to-amber-400',
    borderColor: 'border-rose-400/40',
    bgColor: 'bg-rose-500/10',
    textColor: 'text-rose-300',
    desc: 'Abstract, directions & reasoning: Shallow/Deep, Busy/Idle'
  }
];

export const OPPOSITE_WORDS = [
  // ==========================================
  // LEVEL 1: PRE-SCHOOL EXPLORER (20 Words)
  // Ages 3-4: Absolute essentials & everyday actions
  // ==========================================
  { id: 1, level: 1, word: 'Hot', opposite: 'Cold', wordEmoji: '🔥', oppositeEmoji: '❄️', example: 'Hot cocoa warms you up, cold ice cream cools you down!' },
  { id: 2, level: 1, word: 'Big', opposite: 'Small', wordEmoji: '🐘', oppositeEmoji: '🐭', example: 'An elephant is big, but a mouse is small.' },
  { id: 3, level: 1, word: 'Up', opposite: 'Down', wordEmoji: '🧗', oppositeEmoji: '🪂', example: 'Climbing up the ladder and sliding down the slide!' },
  { id: 4, level: 1, word: 'In', opposite: 'Out', wordEmoji: '📥', oppositeEmoji: '📤', example: 'Put the toys in the box, take them out to play.' },
  { id: 5, level: 1, word: 'Happy', opposite: 'Sad', wordEmoji: '😊', oppositeEmoji: '😢', example: 'A big smile when happy, a gentle hug when sad.' },
  { id: 6, level: 1, word: 'Fast', opposite: 'Slow', wordEmoji: '🚀', oppositeEmoji: '🐢', example: 'Rockets zoom fast, turtles stroll slow.' },
  { id: 7, level: 1, word: 'Stop', opposite: 'Go', wordEmoji: '🛑', oppositeEmoji: '🟢', example: 'Red light means stop, green light means go!' },
  { id: 8, level: 1, word: 'Open', opposite: 'Closed', wordEmoji: '📖', oppositeEmoji: '📕', example: 'Open the book to read stories, close it when done.' },
  { id: 9, level: 1, word: 'Yes', opposite: 'No', wordEmoji: '👍', oppositeEmoji: '👎', example: 'Nod your head for yes, shake it for no.' },
  { id: 10, level: 1, word: 'On', opposite: 'Off', wordEmoji: '💡', oppositeEmoji: '🔌', example: 'Turn the lights on in the evening, turn them off to sleep.' },
  { id: 11, level: 1, word: 'Empty', opposite: 'Full', wordEmoji: '🥣', oppositeEmoji: '🍲', example: 'An empty bowl is waiting for delicious soup!' },
  { id: 12, level: 1, word: 'Day', opposite: 'Night', wordEmoji: '☀️', oppositeEmoji: '🌙', example: 'Play in the bright day, look at glowing stars at night.' },
  { id: 13, level: 1, word: 'Sit', opposite: 'Stand', wordEmoji: '🪑', oppositeEmoji: '🧍', example: 'Sit nicely in circle time, stand tall for the pledge.' },
  { id: 14, level: 1, word: 'Walk', opposite: 'Run', wordEmoji: '🚶', oppositeEmoji: '🏃', example: 'Walk inside the hallway, run fast on the playground!' },
  { id: 15, level: 1, word: 'Push', opposite: 'Pull', wordEmoji: '🛒', oppositeEmoji: '🧲', example: 'Push the shopping cart forward, pull the red wagon.' },
  { id: 16, level: 1, word: 'Laugh', opposite: 'Cry', wordEmoji: '😂', oppositeEmoji: '😭', example: 'Laugh out loud at funny tickles, cry when hurt.' },
  { id: 17, level: 1, word: 'Loud', opposite: 'Quiet', wordEmoji: '🦁', oppositeEmoji: '🤫', example: 'Lions make loud roars, sleeping bunnies are quiet.' },
  { id: 18, level: 1, word: 'Wet', opposite: 'Dry', wordEmoji: '🌧️', oppositeEmoji: '🌵', example: 'Puddles are wet, desert sand is dry.' },
  { id: 19, level: 1, word: 'Hard', opposite: 'Soft', wordEmoji: '🪨', oppositeEmoji: '🧸', example: 'Rocks are hard, a plush teddy bear is soft.' },
  { id: 20, level: 1, word: 'Sun', opposite: 'Moon', wordEmoji: '☀️', oppositeEmoji: '🌕', example: 'The sun warms the daytime, the moon lights the night.' },

  // ==========================================
  // LEVEL 2: KINDERGARTEN STAR (20 Words)
  // Ages 5-6: Sensory, spatial & early school life
  // ==========================================
  { id: 21, level: 2, word: 'Tall', opposite: 'Short', wordEmoji: '🦒', oppositeEmoji: '🐇', example: 'A giraffe is super tall, a bunny is short.' },
  { id: 22, level: 2, word: 'Heavy', opposite: 'Light', wordEmoji: '🦏', oppositeEmoji: '🪶', example: 'A rhinoceros is very heavy, a bird feather is light.' },
  { id: 23, level: 2, word: 'Sweet', opposite: 'Sour', wordEmoji: '🍭', oppositeEmoji: '🍋', example: 'Sweet red lollipops, mouth-puckering sour lemons!' },
  { id: 24, level: 2, word: 'Awake', opposite: 'Asleep', wordEmoji: '👀', oppositeEmoji: '😴', example: 'Wide awake when the sun rises, fast asleep in bed.' },
  { id: 25, level: 2, word: 'Clean', opposite: 'Dirty', wordEmoji: '🧼', oppositeEmoji: '🐾', example: 'Clean hands before dinner, dirty muddy paws!' },
  { id: 26, level: 2, word: 'Shout', opposite: 'Whisper', wordEmoji: '📢', oppositeEmoji: '🤫', example: 'Shout "Hooray!", whisper a quiet secret in class.' },
  { id: 27, level: 2, word: 'Throw', opposite: 'Catch', wordEmoji: '⚾', oppositeEmoji: '🧤', example: 'Throw the baseball and catch it with your mitt!' },
  { id: 28, level: 2, word: 'Near', opposite: 'Far', wordEmoji: '🏡', oppositeEmoji: '🔭', example: 'Your best friend is near, distant planets are far.' },
  { id: 29, level: 2, word: 'Summer', opposite: 'Winter', wordEmoji: '🏖️', oppositeEmoji: '⛄', example: 'Warm sunny beaches in summer, snowy snowmen in winter.' },
  { id: 30, level: 2, word: 'Warm', opposite: 'Cool', wordEmoji: '🧣', oppositeEmoji: '🍧', example: 'A warm woolen sweater and a cool strawberry pop.' },
  { id: 31, level: 2, word: 'Eat', opposite: 'Drink', wordEmoji: '🥪', oppositeEmoji: '🧃', example: 'Eat your crunchy sandwich, drink your juice box.' },
  { id: 32, level: 2, word: 'Front', opposite: 'Back', wordEmoji: '👕', oppositeEmoji: '🎒', example: 'Smile in the front, carry your backpack on your back.' },
  { id: 33, level: 2, word: 'Left', opposite: 'Right', wordEmoji: '👈', oppositeEmoji: '👉', example: 'Raise your left hand, raise your right hand!' },
  { id: 34, level: 2, word: 'Top', opposite: 'Bottom', wordEmoji: '🎩', oppositeEmoji: '👟', example: 'A top hat on your head, shoes at the bottom of your feet.' },
  { id: 35, level: 2, word: 'Over', opposite: 'Under', wordEmoji: '🌈', oppositeEmoji: '🌊', example: 'Jump over the puddle, swim under the sea wave.' },
  { id: 36, level: 2, word: 'High', opposite: 'Low', wordEmoji: '🦅', oppositeEmoji: '🐛', example: 'Eagles fly high in clouds, caterpillars crawl low.' },
  { id: 37, level: 2, word: 'Start', opposite: 'Finish', wordEmoji: '🚦', oppositeEmoji: '🏁', example: 'Get set at the start line, sprint to the finish line!' },
  { id: 38, level: 2, word: 'Win', opposite: 'Lose', wordEmoji: '🥇', oppositeEmoji: '🥈', example: 'High-five your friends whether you win or lose!' },
  { id: 39, level: 2, word: 'Float', opposite: 'Sink', wordEmoji: '⛵', oppositeEmoji: '⚓', example: 'Toy boats float on bubbles, heavy stones sink down.' },
  { id: 40, level: 2, word: 'Many', opposite: 'Few', wordEmoji: '🍬', oppositeEmoji: '🍭', example: 'A jar with many jellybeans vs just a few candies.' },

  // ==========================================
  // LEVEL 3: 1ST GRADE ADVENTURER (20 Words)
  // Ages 6-7: Shapes, feelings, textures & social concepts
  // ==========================================
  { id: 41, level: 3, word: 'Long', opposite: 'Short', wordEmoji: '🐍', oppositeEmoji: '🐛', example: 'A snake can be very long, an inchworm is short.' },
  { id: 42, level: 3, word: 'Wide', opposite: 'Narrow', wordEmoji: '🛣️', oppositeEmoji: '🛤️', example: 'A wide highway has many lanes, a narrow trail fits one.' },
  { id: 43, level: 3, word: 'Thick', opposite: 'Thin', wordEmoji: '📚', oppositeEmoji: '📄', example: 'A thick hardcover dictionary and a thin paper leaf.' },
  { id: 44, level: 3, word: 'Round', opposite: 'Flat', wordEmoji: '⚽', oppositeEmoji: '🥞', example: 'A soccer ball is round, a yummy pancake is flat.' },
  { id: 45, level: 3, word: 'Straight', opposite: 'Curvy', wordEmoji: '📏', oppositeEmoji: '〰️', example: 'A straight ruler line vs a curvy mountain road.' },
  { id: 46, level: 3, word: 'Smooth', opposite: 'Rough', wordEmoji: '🥚', oppositeEmoji: '🍍', example: 'An egg shell is smooth, a prickly pineapple is rough.' },
  { id: 47, level: 3, word: 'Bright', opposite: 'Dark', wordEmoji: '✨', oppositeEmoji: '🌑', example: 'A bright flashlight in the dark cozy tent.' },
  { id: 48, level: 3, word: 'Messy', opposite: 'Neat', wordEmoji: '🎨', oppositeEmoji: '📦', example: 'A messy painting table cleaned up nice and neat.' },
  { id: 49, level: 3, word: 'Excited', opposite: 'Tired', wordEmoji: '🤩', oppositeEmoji: '🥱', example: 'Excited for the zoo trip, tired after a fun day!' },
  { id: 50, level: 3, word: 'Brave', opposite: 'Scared', wordEmoji: '🦁', oppositeEmoji: '🐭', example: 'Brave little superhero facing their fears.' },
  { id: 51, level: 3, word: 'Calm', opposite: 'Angry', wordEmoji: '🧘', oppositeEmoji: '😡', example: 'Take deep breaths to feel calm instead of angry.' },
  { id: 52, level: 3, word: 'Silly', opposite: 'Serious', wordEmoji: '🤪', oppositeEmoji: '🧐', example: 'Making silly faces or listening like a serious judge.' },
  { id: 53, level: 3, word: 'Give', opposite: 'Take', wordEmoji: '🎁', oppositeEmoji: '🤲', example: 'Give gifts with love, take a turn on the swing.' },
  { id: 54, level: 3, word: 'Share', opposite: 'Keep', wordEmoji: '🤝', oppositeEmoji: '🔒', example: 'Share your toys with pals or keep a secret journal.' },
  { id: 55, level: 3, word: 'First', opposite: 'Last', wordEmoji: '🥇', oppositeEmoji: '🏁', example: 'The very first duckling in line and the last one waddling.' },
  { id: 56, level: 3, word: 'Add', opposite: 'Subtract', wordEmoji: '➕', oppositeEmoji: '➖', example: 'Add two cookies plus two, subtract one eaten cookie.' },
  { id: 57, level: 3, word: 'Same', opposite: 'Different', wordEmoji: '👯', oppositeEmoji: '🤹', example: 'Identical twins look the same, silly costumes are different.' },
  { id: 58, level: 3, word: 'Above', opposite: 'Below', wordEmoji: '⭐', oppositeEmoji: '⚓', example: 'Stars shine above us, fish swim below the boat.' },
  { id: 59, level: 3, word: 'Wild', opposite: 'Tame', wordEmoji: '🐺', oppositeEmoji: '🐕', example: 'A wild forest wolf, a gentle tame family pet.' },
  { id: 60, level: 3, word: 'Build', opposite: 'Break', wordEmoji: '🧱', oppositeEmoji: '🔨', example: 'Carefully build tall block towers without breaking them.' },

  // ==========================================
  // LEVEL 4: 2ND GRADE CHAMPION (20 Words)
  // Ages 7-8: Descriptive properties, states & environment
  // ==========================================
  { id: 61, level: 4, word: 'New', opposite: 'Old', wordEmoji: '👟', oppositeEmoji: '👞', example: 'Shiny brand new sneakers and well-loved old shoes.' },
  { id: 62, level: 4, word: 'Fresh', opposite: 'Stale', wordEmoji: '🍎', oppositeEmoji: '🥖', example: 'Fresh crispy red apple vs stale hard bread.' },
  { id: 63, level: 4, word: 'Bitter', opposite: 'Sweet', wordEmoji: '☕', oppositeEmoji: '🍯', example: 'Bitter dark coffee, sweet golden honey!' },
  { id: 64, level: 4, word: 'Tight', opposite: 'Loose', wordEmoji: '🧤', oppositeEmoji: '👕', example: 'Tight winter gloves and a cozy loose oversized hoodie.' },
  { id: 65, level: 4, word: 'Fancy', opposite: 'Plain', wordEmoji: '👑', oppositeEmoji: '👕', example: 'A sparkling fancy gown and a simple plain white tee.' },
  { id: 66, level: 4, word: 'Pointy', opposite: 'Blunt', wordEmoji: '✏️', oppositeEmoji: '🖍️', example: 'A freshly sharpened pencil is pointy, a crayon is blunt.' },
  { id: 67, level: 4, word: 'Fragrant', opposite: 'Stinky', wordEmoji: '🌸', oppositeEmoji: '🧦', example: 'Roses smell fragrant, muddy gym socks smell stinky!' },
  { id: 68, level: 4, word: 'Cooked', opposite: 'Raw', wordEmoji: '🍲', oppositeEmoji: '🥕', example: 'Warm cooked soup and crunchy fresh raw carrots.' },
  { id: 69, level: 4, word: 'Fall', opposite: 'Rise', wordEmoji: '🍂', oppositeEmoji: '🎈', example: 'Autumn leaves fall down, hot air balloons rise high.' },
  { id: 70, level: 4, word: 'Hide', opposite: 'Seek', wordEmoji: '🙈', oppositeEmoji: '🔍', example: 'Ready or not, here I come to seek where you hide!' },
  { id: 71, level: 4, word: 'Alone', opposite: 'Together', wordEmoji: '👤', oppositeEmoji: '👨‍👩‍👧', example: 'Reading quietly alone, singing songs together.' },
  { id: 72, level: 4, word: 'Smile', opposite: 'Frown', wordEmoji: '😄', oppositeEmoji: '☹️', example: 'A cheery bright smile turns away a grumpy frown.' },
  { id: 73, level: 4, word: 'Strong', opposite: 'Weak', wordEmoji: '💪', oppositeEmoji: '🌱', example: 'Strong mighty oak tree, delicate weak green shoot.' },
  { id: 74, level: 4, word: 'Rich', opposite: 'Poor', wordEmoji: '👑', oppositeEmoji: '🪵', example: 'Rich in good friends, sharing with those who have less.' },
  { id: 75, level: 4, word: 'Early', opposite: 'Late', wordEmoji: '⏰', oppositeEmoji: '⌛', example: 'Wake up early for school so you never arrive late!' },
  { id: 76, level: 4, word: 'Morning', opposite: 'Evening', wordEmoji: '🥞', oppositeEmoji: '🌙', example: 'Pancake breakfast in the morning, bedtime story in the evening.' },
  { id: 77, level: 4, word: 'Quick', opposite: 'Slow', wordEmoji: '⚡', oppositeEmoji: '🐌', example: 'Quick as lightning flash, slow as a garden snail.' },
  { id: 78, level: 4, word: 'Today', opposite: 'Tomorrow', wordEmoji: '📅', oppositeEmoji: '🔮', example: 'Learn new words today, play even more tomorrow!' },
  { id: 79, level: 4, word: 'Bright', opposite: 'Dull', wordEmoji: '💎', oppositeEmoji: '🪨', example: 'A sparkling bright jewel and a dull gray pebble.' },
  { id: 80, level: 4, word: 'Alive', opposite: 'Dead', wordEmoji: '🌱', oppositeEmoji: '🍂', example: 'A growing green seedling is full of life.' },

  // ==========================================
  // LEVEL 5: WORD MASTER GENIUS (20 Words)
  // Ages 8+: Abstract reasoning, directions & vocabulary
  // ==========================================
  { id: 81, level: 5, word: 'Enter', opposite: 'Exit', wordEmoji: '🚪', oppositeEmoji: '🏃‍♂️', example: 'Enter through the front door, follow the exit sign.' },
  { id: 82, level: 5, word: 'Construct', opposite: 'Demolish', wordEmoji: '🏗️', oppositeEmoji: '🚜', example: 'Construct a sandcastle, demolish it with waves!' },
  { id: 83, level: 5, word: 'Interesting', opposite: 'Boring', wordEmoji: '🦕', oppositeEmoji: '🥱', example: 'Cool dinosaur facts are interesting, waiting in line is boring.' },
  { id: 84, level: 5, word: 'Parent', opposite: 'Child', wordEmoji: '🧑', oppositeEmoji: '🧒', example: 'A loving parent holding the little child’s hand.' },
  { id: 85, level: 5, word: 'Boy', opposite: 'Girl', wordEmoji: '👦', oppositeEmoji: '👧', example: 'Boys and girls playing tag together at recess.' },
  { id: 86, level: 5, word: 'Inside', opposite: 'Outside', wordEmoji: '🏠', oppositeEmoji: '🌳', example: 'Cozy inside the house, playing tag outside in the yard.' },
  { id: 87, level: 5, word: 'Teacher', opposite: 'Student', wordEmoji: '👩‍🏫', oppositeEmoji: '🎒', example: 'The teacher guides the eager young student.' },
  { id: 88, level: 5, word: 'Sunrise', opposite: 'Sunset', wordEmoji: '🌅', oppositeEmoji: '🌇', example: 'Golden sunrise in the dawn, purple sunset at dusk.' },
  { id: 89, level: 5, word: 'Young', opposite: 'Old', wordEmoji: '👶', oppositeEmoji: '👴', example: 'A sweet young puppy and a gentle old dog.' },
  { id: 90, level: 5, word: 'Sky', opposite: 'Ground', wordEmoji: '☁️', oppositeEmoji: '🌱', example: 'Look up at the blue sky, stand firm on the solid ground.' },
  { id: 91, level: 5, word: 'Land', opposite: 'Water', wordEmoji: '🏝️', oppositeEmoji: '🌊', example: 'Frogs hop on land and swim through the cool water.' },
  { id: 92, level: 5, word: 'Rainy', opposite: 'Sunny', wordEmoji: '🌧️', oppositeEmoji: '☀️', example: 'Rainy days need boots, sunny days need sunglasses!' },
  { id: 93, level: 5, word: 'More', opposite: 'Less', wordEmoji: '🍰', oppositeEmoji: '🧁', example: 'More sprinkles on top, less mess on the floor.' },
  { id: 94, level: 5, word: 'East', opposite: 'West', wordEmoji: '🧭', oppositeEmoji: '🌅', example: 'The sun rises in the east and sets in the west.' },
  { id: 95, level: 5, word: 'North', opposite: 'South', wordEmoji: '❄️', oppositeEmoji: '🌴', example: 'North to the snowy Arctic, south to the sunny tropics.' },
  { id: 96, level: 5, word: 'Busy', opposite: 'Idle', wordEmoji: '🐝', oppositeEmoji: '🦥', example: 'Busy worker bees vs an idle sleepy sloth.' },
  { id: 97, level: 5, word: 'Gain', opposite: 'Lose', wordEmoji: '📈', oppositeEmoji: '📉', example: 'Gain new knowledge, never lose your wonder!' },
  { id: 98, level: 5, word: 'Spend', opposite: 'Save', wordEmoji: '🛍️', oppositeEmoji: '🪙', example: 'Spend coins on a treat, save pennies in the piggy bank.' },
  { id: 99, level: 5, word: 'Light', opposite: 'Dark', wordEmoji: '💡', oppositeEmoji: '🌑', example: 'A bright lamp gives light, night brings cozy dark.' },
  { id: 100, level: 5, word: 'Shallow', opposite: 'Deep', wordEmoji: '🦆', oppositeEmoji: '🐋', example: 'Splash in shallow puddles, whales dive in deep oceans.' }
];

/**
 * Returns a randomized set of questions with 4 multiple-choice options.
 * @param {number|'all'} level Target level (1-5) or 'all'
 * @param {number} count Number of questions (default 20 for a level, or custom)
 */
export function getOppositeQuestions(level = 1, count = 20) {
  let pool = OPPOSITE_WORDS;
  if (level !== 'all' && typeof level === 'number') {
    pool = OPPOSITE_WORDS.filter((w) => w.level === level);
    if (pool.length === 0) pool = OPPOSITE_WORDS;
  }

  // Shuffle the pool
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  return selected.map((item) => {
    // Pick 3 distractors from the entire 100-word dataset for variety
    const otherOpposites = OPPOSITE_WORDS
      .filter((w) => w.opposite.toLowerCase() !== item.opposite.toLowerCase() && w.word.toLowerCase() !== item.word.toLowerCase())
      .map((w) => ({ text: w.opposite, emoji: w.oppositeEmoji }));

    const shuffledDistractors = otherOpposites.sort(() => 0.5 - Math.random()).slice(0, 3);
    const correctOption = { text: item.opposite, emoji: item.oppositeEmoji, isCorrect: true };
    const distractors = shuffledDistractors.map((d) => ({ text: d.text, emoji: d.emoji, isCorrect: false }));

    const options = [correctOption, ...distractors].sort(() => 0.5 - Math.random());

    return {
      ...item,
      options
    };
  });
}
