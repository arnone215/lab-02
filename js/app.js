'use strict';

var userName = prompt('What is your name?');
console.log('Hi' + userName);
alert('Hi there ' + userName + '! How is your day today?')

var homeLocation = prompt('Am I from Seattle?').toLowerCase();

if (homeLocation === 'yes' || homeLocation === 'y') {
    // console.log('Yes I am from Seattle');
    alert('Yes I am from Seattle');
}

// console.log('Nice, ' + homeLocation + ' is great!');


var whyCoding = prompt('Have I worked in tech before?').toLowerCase();


if (whyCoding === 'yes' || whyCoding === 'y') {
    // console.log('No I have not worked in tech before');
    alert('No I have not worked in tech before');
}

// console.log('That is great that ' + whyCoding + 'is a goal of yours! ');

var milVeteran = prompt('Am I a military veteran?').toLowerCase();


if (milVeteran === 'yes' || milVeteran === 'y') {
    // console.log('Yes, I am a veteran');
    alert('Yes, I am a veteran');
}


// console.log('Woah! I hear that ' + milVeteran + ' is a amazing!');

var carFan = prompt('Do I like cars?').toLowerCase();


if (carFan === 'yes' || carFan === 'y') {
    // console.log('Yes, I love cars!')
    alert('Yes, I love cars!');
}
// console.log('I like cars too' + carFan + ' my favorite car is a ferrari.');


// alert('It\'s nice to meet you ' + userName + '! ' + homeLocation + ' is a great place to come from, ' + ' I am sure that ' + whyCoding + ' is a goal you will reach if you keep your mind to it. ' + milVeteran + ' is a great company to work for! ' + 'I like cars too' + carFan + ' my favorite car is a ferrari.');