/**
 * Print a greeting, for each student.
 * @param {Array<{lang: string, name: string}>} studentList
 * @returns {Array<string>}
 */

function getStudentGreetings(studentList) {
  const greetingList = studentList.map(student => {
    const greeting = getGreeting(student.lang);
    return `${greeting}, ${student.name}!`;
  });

  return greetingList;
}

/**
 * Get a greeting by language
 * @param {string} lang - Language ISO abbreviation (two characters)
 * @returns {string}
 */
function getGreeting(lang) {
  const greetings = {
    "en": "Hello",
    "fa": "سلام",
    "fr": "Bonjour",
    "he": "שלום",
    "hi": "नमस्कार",
    "hu": "Üdvözlöm",
    "ko": "안녕하세요",
    "sw": "Hujambo",
  };

  return greetings[lang];
}

const studentList = [
  {name: "Luis M.", lang: "he"},
  {name: "Konstantin", lang: "ko"},
  {name: "Yushiko", lang: "he"},
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

module.exports = { getStudentGreetings };