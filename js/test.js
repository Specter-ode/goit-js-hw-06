const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line
// const playtimes = players.map(player => player.playtime);

// const gamesPlayed = players.map(player => player.gamesPlayed);

const abc = Object.values(players)
console.log(abc);
const totalTime = players.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed;
}, 0);
console.log(totalTime);
const averagePlayTime = totalTime / players.length;
console.log(averagePlayTime);
const totalGamePlayed = players.reduce((total, player) => {
  return total + player.gamesPlayed;
}, 0);
console.log(totalGamePlayed);

const totalAveragePlaytimePerGame = totalTime / totalGamePlayed;
console.log(totalAveragePlaytimePerGame);





