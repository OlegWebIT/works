'use strict';

let numberOfFilms;

function start () {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();



let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};


function rememberMyFilms() {

	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних фильмов'),
			  b = prompt('На сколько оцените его?');
		personalMovieDB.movies [a] = b;

		 if (a != null && b != null && a !='' && b != '' && a.length < 50){
			 console.log('done');
		 } else {
			 console.log('Eror');
			 i--;
		 }
	}

}

rememberMyFilms();


function detectPersonalLevel() {
	if (numberOfFilms < 10) {
		alert('Просмотрено довольно мало фильмов!');
	} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
		alert('Вы классический зритель!');
	} else if (numberOfFilms > 30) {
		alert('Вы киноман!');
	} else {
		alert('Произошла ошибка :(');
	}
}
detectPersonalLevel();

function showMyDB () {
	if (personalMovieDB.privat != 'true') {
		console.log(personalMovieDB);
	} else if (personalMovieDB.privat == 'true') {

	} else {

	}
}

showMyDB();


function wirteYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres [i - 1] = prompt('Ваш любимый жанр под номером?');	
	}

}

wirteYourGenres ();