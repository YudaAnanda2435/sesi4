let studentsScore = [
  {
    name: "Andi",
    score: 90,
  },
  {
    name: "Rudi",
    score: 80,
  },
  {
    name: "Dira",
    score: 85,
  },
];

let highestScore = 0;
let highestScorer = "";

for (let i = 0; i < studentsScore.length; i++) {
  if (studentsScore[i].score > highestScore) {
    highestScore = studentsScore[i].score;
    highestScorer = studentsScore[i].name;
  }
}

console.log(
  `Siswa dengan nilai tertinggi adalah ${highestScorer} dengan nilai ${highestScore}.`
);
