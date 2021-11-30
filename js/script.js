"use strict";
// answers[0] = prompt("What's your name?", "");
// answers[1] = prompt("What's your last name?", "");
// answers[2] = prompt("How old are you?", "");


// alert(`Hello, ${user}`);

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let answerOne = prompt('Один из последних просмотренных фильмов?', ''),
    answerTwo = prompt('На сколько оцените его?', ''),
    answerThree = prompt('Один из последних просмотренных фильмов?', ''),
    answerFour = prompt('На сколько оцените его?', '');

personMovieDB.movies[answerOne] = answerTwo;
personMovieDB.movies[answerThree] = answerFour;
console.log(personMovieDB);