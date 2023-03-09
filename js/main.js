//Pętla for-----------------------------------------------------------------

// const cities = ['Warszawa', 'Wrocław', 'Wilno', 'Kraków', 'Koziadupa'];

// for (let i = 0; i < cities.length; i++) {
// 	console.log(`To miasto nazywa się ${cities[i]}`);
// }

//Pętla while--------------------------------------------------------------

// let x = 0;
// while (x <= 10) {
// 	console.log(x);
// 	x+=2;
// }

//Pętla do while ----------------------------------------------------------------

// let x = 20;

// do {
// 	x -= 3;
// 	console.log(x);
// } while (x > 0);

// Pętla for of -----------------------------------------------------------------

// let numbers = [5, 8, 10, 23, 48, 60];

// for (let number of numbers) {
// 	console.log(number / 5);
// }

// for (let numb of numbers) {
// 	if (numb % 2 == 0) {
// 		console.log(
// 			`%cLiczba ${numb} jest pażysta`,
// 			'font-size:50px; background-color: blue'
// 		);
// 	}
// }

//TABLICE-----------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 33];
// console.log(numbers);
// numbers.unshift(202, 303);
// console.log(numbers);

// numbers.push(2022);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

//METODY TABLIC ------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
// const newAbc = numbers.concat(abc);
// console.log(newAbc);

//MEtoda spreat tablice----------------------

// const drinks = ['piwo', 'wódka', 'pepsi', 'woda'];
// const meals = ['schabowy', 'pomidorowa', 'Pulpety'];

// const menu = drinks.concat(meals);
// console.log(...menu);

//Splice i slice metdy tablic ========================

// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ['red', 'green', 'blue', true, 123];
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀'];

// const numbers2 = numbers.slice(0, 2);
// console.log('%cnumbers2', 'font-size:14px; color:red');
// console.log(numbers2);

// const numbers3 = numbers.slice(4, 7);
// console.log('%cnumbers3', 'font-size:14px; color:red');
// console.log(numbers3);

// const randomStuff = colors.splice(3, 2);
// console.log('%crandomStuff', 'font-size:14px; color:red');
// console.log(randomStuff);

// const newCars = cars.splice(2, 4, 'test');
// console.log('%ccars', 'font-size:14px; color:red');
// console.log(cars);
// console.log('%cnewCars', 'font-size:14px; color:red');
// console.log(newCars);

//ZADANIE 1---------------------------------------------------------

// const letters = ['c', 'd'];
// letters.unshift('a', 'b');
// letters.push('e', 'f');
// console.log(letters);
// console.log(letters.includes("c"));

//Zadanie 2------------------------------------------------------------

// const numbers = [1, 2, 3];
// const meals = ['Schabowy', 'zupa pomidorowa', 'pizza'];
// const newTab = numbers.concat(meals);
// console.log(newTab);

// const secondTab = [...numbers, ...meals];
// console.log(secondTab);

//Zadanie 3-------------------------------------------------------------------

// const numbers = [1, 5, 13, 26, 48];

// function multi(x) {
// 	return x * 5;
// }
// const newNumbers = numbers.map(multi);

// console.log(newNumbers);

// for (const number of newNumbers) {
// 	if (number % 2 == 0) {
// 		console.log(`Liczba ${number} jest pażysta`);
// 	} else {
// 		console.log(`Liczba ${number} nie jest pażysta`);
// 	}
// }

// Zadanie 4----------------------------------------------------------------------

// const colors = ['pink'];
// colors.unshift('green');
// colors.push('red');

// for (let i = 0; i < colors.length; i++) {
// 	console.log(`Mój ulubiony kolor to ${colors[i].toUpperCase()}`);
// 	console.log(`Mój ulubiony kolor to ${colors[i].charAt(0).toUpperCase() + colors[i].slice(1)}`);
// }

// ZADANIE 5-------------------------------------------

// const cars = 'Audi, Mercedes, BMW, Nissan, Dodge';
// const newCars = cars.split(', ');
// console.log(newCars);

// newCars.length > 3 ? console.log(`Jest ok`) : console.log(`Nie jest ok`);

// if (newCars.includes('Audi')) {
// 	console.log('Jest marka Audi, dlatego dodaję nową markę do tablicy');
// 	newCars.push('Opel');
// 	console.log(newCars);
// } else {
// 	newCars.pop();
// 	console.log(newCars);
// }

//Funkcję zadanie--------------------------------------------

// function person(name, x) {
// 	console.log(`Nazywam się ${name} i mam ${x} lat`);
// }
// person('Kamil', 25);

//Funkcję strzałkowe-------------------------------------------

// const numbers = (x,y) => {
// 	console.log(x*y);
// };
// numbers(24,22);

//Zadanie Z funkcji 1-----------------------------------------
// const one = () => {
// 	console.log(`Liczba ${score} jest pażysta`);
// };

// const two = () => {
// 	console.log(`Liczba ${score} jest niepażysta`);
// };

// let score;
// const add = (x, y) => {
// 	score = x + y;
// 	if (score % 2 == 0) {
// 		one();
// 	} else {
// 		two();
// 	}
// };
// add();

//Zadanie 2 z funkcjiii---------------------------------------

// let celsius;
// let temp;

// const fahren = (x) => {
// 	celsius = x;
// 	temp = celsius * 1.8 + 32;
// 	console.log(`${celsius} stopnie Celsjusza to ${temp} stopnie Fahrenheita`);
// };
// fahren(6);

//Zadanie 3 z funkcji ------------------------------------------------------

// const numb = 10;
// const numbers = [];

// for (let i = 0; i < numb; i++) {
// 	numbers.push(i);
// }

// const check = (x) => {
// 	if (x % 3 == 0 && x != 0) {
// 		console.log(`${x} jest podzielna przez 3`);
// 	} else {
// 		console.log(`${x} nie jest podzielna przez 3`);
// 	}
// };

// numbers.forEach(check);

// Zadanie 1 funkcje jeszcze raz --------------------------------------

// let score;
// const add = (x, y) => {
// 	score = x + y;
// 	score % 2 == 0 ? one() : two();
// };

// const one = () => {
// 	console.log(`Liczba ${score} jest pażysta`);
// };
// const two = () => {
// 	console.log(`Liczba ${score} jest niepażysta`);
// };
// add(2, 2);

// Zadanie z queryyselector --------------------------

// const heading = document.querySelector('h1');
// console.log(heading);

// const tab = document.querySelectorAll('p');
// console.log(tab);

// const one = document.querySelector('.test');
// console.log(one);

// const two = document.querySelector('.test #test');
// console.log(two);

// const list = document.createElement('ul');
// const one = document.createElement('li');

//ZADANIE DODAJ ELEMENT-------------------

// const one = document.querySelector('div');
// const text = document.createElement('p');
// one.appendChild(text);

//ZADANIE Z DODAWANIA KLAS--------------------

// const add = document.querySelector('.add');
// const remove = document.querySelector('.remove');
// const toggle = document.querySelector('.toggle');
// const text = document.querySelector('p');

// let ullist;

// const addClass = () => {
// 	text.classList.add('test');
// };

// const removeClass = () => {
// 	text.classList.remove('test');
// };

// const toggleClass = () => {
// 	text.classList.toggle('test');
// };

// add.addEventListener('click', addClass);
// remove.addEventListener('click', removeClass);
// toggle.addEventListener('click', toggleClass);

// const ulList = document.createElement('ul');
// document.body.append(ulList);

// const number = 10;

// for (let i = 1; i <= number; i++) {
// 	const liItem = document.createElement('li');
// 	liItem.textContent = i;
// 	ulList.append(liItem);
// }
// const last = ulList.querySelector('li:last-child');
// last.textContent = 'Jestem ostatni na liście';

// const ulList = document.createElement('ul');
// document.body.append(ulList);
// const number = 10;

// for (let i = 1; i <= number; i++) {
// 	const liList = document.createElement('li');
// 	liList.textContent = i;
// 	ulList.append(liList);
// }

// const lastName = ulList.querySelector('li:last-child');
// console.log(lastName);
// lastName.textContent = 'Jestem oststni paragraf';
// lastName.style.color = "red"
// lastName.style.background = "blue"

// const ulList = document.createElement('ul');
// document.body.append(ulList);

// const number = 10;

// for (let i = 1; i <= number; i++) {
// 	const liList = document.createElement('li');
// 	ulList.append(liList);
// 	liList.textContent = i;
// }

// const lastName = document.querySelector('li:last-child');
// lastName.textContent = 'Jetem ostatnim paragrafem';
// lastName.style.background = 'blue';

//ZADANIE Z KWADRATEM---------------------------------

// const textOne = document.querySelector('.p1');
// const textTwo = document.querySelector('.p2');
// const square = document.querySelector('.square');
// const oneBtn = document.querySelector('.btn1');
// const twoBtn = document.querySelector('.btn2');

// const hello = () => {
// 	console.log('Cześć!');
// };

// const red = () => {
// 	square.style.background = 'red';
// };

// const blue = () => {
// 	square.style.background = 'blue';
// };

// const toggleBtn = () => {
// 	textOne.classList.toggle('show');
// 	textTwo.classList.toggle('show');
// };

// oneBtn.addEventListener('dblclick', hello);
// twoBtn.addEventListener('click', toggleBtn);
// square.addEventListener('mouseover', red);
// square.addEventListener('mouseleave', blue);

// const imgOne = document.querySelector('img');
// imgOne.setAttribute(
// 	'src',
// 	'https://cdn.pixabay.com/photo/2022/11/27/12/41/krems-7619682_1280.jpg'
// );
// imgOne.setAttribute('alt', 'Stary budynek kościoła');

// two = () => {
// 	console.log('Jest super duper');
// };

// setTimeout(two, 10000);

//Klejna zadanie----------------------

// const numbers = document.querySelectorAll('li');
// let i = 1;
// for (let number of numbers) {
// 	number.textContent = i;
// 	number.dataset.id = i;
// 	i++;
// }

// const lastItem = document.querySelector('[data-id="3"]');
// console.log(lastItem);

// const grand = lastItem.closest('.wrapper');
// console.log(grand);

//Projekt 1 ----------------------
// 'use strict';
// const arrow = document.querySelector('.arrow');
// const icon = document.querySelector('.fas');
// const itemOne = document.querySelector('.item1');

// const showImg = () => {
// 	itemOne.classList.toggle('hide');
// 	if (itemOne.classList.contains('hide')) {
// 		icon.style.transform = 'rotate(-180deg';
// 	} else {
// 		icon.style.transform = 'rotate(0deg)';
// 	}
// };

// arrow.addEventListener('click', showImg);

//obiekty-----------------------

// const newOb = {
// 	name: 'Kamil',
// 	age: 20,
// 	car: {
// 		brand: 'opel',
// 		model: 'Astra',
// 		sound: function () {
// 			console.log('brum brum');
// 		},
// 	},
// };
// console.log(newOb);
// console.log(`NAzywam się ${newOb.name} i mam ${newOb.age}`);
// newOb.car.sound()

// const newOb = {
// 	name: 'Kamilos',
// 	age: 20,
// };
// newOb.country = 'Uganda';

// newOb['fav-color'] = 'red';

// console.log(newOb);

const nameDog = 'Drops';
const ageDog = 20;

const newOb = {
	nameDog,
	ageDog
};

console.log(newOb);