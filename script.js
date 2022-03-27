/**
 * Print a greeting, in a random language, to each student.
 * @param {Array<string>} studentList - List of names
 */

function greetStudents(studentList) {
  for (let student of studentList) {
    // FIX
    const greeting = getGreeting();

    // FIX
    console.log(`${greeting}, ${student}!`)
  }
}

/**
 * Get a greeting by language
 * @returns {Function<string>}
 */
function getGreeting(lang) {
  const greetings = {
    "hi": "नमस्कार",
    "ko": "안녕하세요",
    "hu": "Üdvözlöm",
    "fa": "سلام",
    "he": "שלום",
    "sw": "Hujambo"
  };

  // FIX: add default fallback
  return greetings[lang];
}

const studentList = [
  {name: "Luis M.", lang: "he"},
  {name: "Konstantin", lang: "ko"},
  {name: "Yushiko", lang: "ar"},
  {name: "Thomas", lang: "es"},
  {name: "Mikako", lang: "sw"},
  {name: "Jon", lang: "fa"},
  {name: "Luis Z.", lang: "fr"},
  {name: "Sakiko", lang: "ja"},
  {name: "Juli", lang: "hu"},
  {name: "Satoko", lang: "ko"},
  {name: "Steve", lang: "hi"},
  {name: "Dominic", lang: "hi"},
];

greetStudents(studentList);