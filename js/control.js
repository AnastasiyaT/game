(function(){
'use strict';

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log('Random= ' + getRandom(0, 5)); 

getRandom(0, 5);

let numb = getRandom(0, 5);
console.log(numb);

let startGame = document.getElementById('img');
let divText = document.getElementsByClassName('contentIn1')[0];


startGame.addEvantListener('click', getTextChange);
function getTextChange(){
	divText = document.write('ТЕСТ');
	//document.write('Первый выпавший <b>символ</b>(кубик слева) <b>«Link тут будет симв из массива''»</b>, чтобы получить итоговый символ, наведите курсор мыши на кубик справа и кликните по нему.');
}

// let link=new Array();  
// let links=new Array();
// link[0]= '1';
// link[1]= '2';
// link[2]= '3';
// link[3]= '4';
// link[4]= '5';
// link[5]= '6';
// links[0]= '`a';
// links[1]= 'A';
// links[2]= 'XA';
// links[3]= 'ША';
// links[4]= 'СА';
// links[5]= 'МА';

// let ry=Math.floor(Math.random()*link.length);  
// let ry=Math.floor(Math.random()*links.length);









}());