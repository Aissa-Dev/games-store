require("dotenv").config();
//Base url
const base_url = "https://api.rawg.io/api/";

//https://api.rawg.io/api/games?key=

const mykey = process.env.REACT_APP_GAME_KEY;
//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/mont/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${mykey}`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${mykey}`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${mykey}`;

export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//  GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${mykey}`;

//Game screenShots
export const gameScreenshotsURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${mykey}`;
//https://api.rawg.io/api/games?key=**&dates=2021-10-15,2022-10-15&ordering=-added&page_size=10
//game details https://api.rawg.io/api/games/638650?key=**
// screenshots https://api.rawg.io/api/games/602357/screenshots?key=**

//Searched Game
export const searchedGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=10&key=${mykey}`;
