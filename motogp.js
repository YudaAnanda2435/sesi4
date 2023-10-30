var motoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: { firstName: "Andrea", lastName: "Dovizioso", country: "Italy" },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: { firstName: "Cal", lastName: "Crutchlow", country: "UK" },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: { firstName: "Valentino", lastName: "Rossi", country: "Italy" },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: { firstName: "Andrea", lastName: "Dovizioso", country: "Italy" },
  },
];

var result = {};

motoGP.forEach(function (race) {
  var winnerName = race.winner.firstName + " " + race.winner.lastName;
  var winLocation = race.circuit + ", " + race.location;

  if (!result[race.winner.country]) {
    result[race.winner.country] = {
      winningCircuits: [{ name: winnerName, winLocation: winLocation }],
      totalWin: 1,
    };
  } else {
    result[race.winner.country].winningCircuits.push({
      name: winnerName,
      winLocation: winLocation,
    });
    result[race.winner.country].totalWin++;
  }
});

console.log(JSON.stringify(result, null, 4));
