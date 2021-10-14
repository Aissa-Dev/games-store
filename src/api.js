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
const popular_games = `games?key=${mykey}&dates=${lastYear},${currentDate}&ordering=-rating&page-size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
