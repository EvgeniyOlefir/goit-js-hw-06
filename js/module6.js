// const numbers = [5, 10, 15, 20, 25];

// // numbers.forEach(function (element, index, array) {
// //   console.log(element);
// //   console.log(index);
// //   console.log(array);
// // });

// /**
//  * map
//  */
// const mappedNumbers = numbers.map(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);

//   return element * 2;
// });

// console.log(mappedNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
// console.table(players);
/*
 * Получаем массив имён всех игроков
 */
// const playerNames = players.map(function (player) {
//   return player.name;
// });

// console.log(playerNames);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */
// const updatedPlayers = players.map(function (player) {
//   console.log(player);
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// console.table(updatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = "player-3";

const updatedPlayers = players.map(function (player) {
  console.log(player.id);

  if (player.id === playerIdToUpdate) {
    return {
      ...player,
      timePlayed: player.timePlayed + 50,
    };
  }
});

console.table(updatedPlayers);
