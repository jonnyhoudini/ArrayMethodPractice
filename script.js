const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");
const output4 = document.querySelector(".output4");
const output5 = document.querySelector(".output5");
const output6 = document.querySelector(".output6");
const output7 = document.querySelector(".output7");
const output8 = document.querySelector(".output8");
const output9 = document.querySelector(".output9");
const output10 = document.querySelector(".output10");
const output11 = document.querySelector(".output11");
const output12 = document.querySelector(".output12");
const output13 = document.querySelector(".output13");
const output14 = document.querySelector(".output14");
const output15 = document.querySelector(".output15");
const output16 = document.querySelector(".output16");
const output17 = document.querySelector(".output17");
const output18 = document.querySelector(".output18");
const output19 = document.querySelector(".output19");
const output20 = document.querySelector(".output20");
const output21 = document.querySelector(".output21");
const output22 = document.querySelector(".output22");
const output23 = document.querySelector(".output23");
const output24 = document.querySelector(".output24");


const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: 77,
        eye_colour: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: 136,
        eye_colour: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: 49,
        eye_colour: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: 84,
        eye_colour: 'blue',
        gender: 'male',
    },
];

// MAP Exercises

const names = characters.map(character => character.name)

output1.textContent = names;

const heights = characters.map(character => character.height)

output2.textContent = heights;

const nameAndHeights = characters.map(character => ({
    name: character.name,
    height: character.height,
  }))

const str1 = JSON.stringify(nameAndHeights, null, 4);

output3.innerHTML = str1;

const allFirstNames = characters.map(character => character.name.split(" ")[0])

//   {
//   const name = character.name;
//   const arrayName = name.split(" ");
//   const firstName = arrayName[0];
//   return firstName;
// })

output4.innerHTML = allFirstNames;

// REDUCE Exercises

const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);

output5.innerHTML = totalMass;

const totalHeight = characters.reduce((acc, cur) => acc + +cur.height, 0);

output6.innerHTML = totalHeight;

const charsNumber = characters.reduce((acc, cur) => acc + cur.name.split("").length, 0)

output7.innerHTML = charsNumber;

const eyeColour = characters.reduce((acc, cur) => {
  const colour = cur.eye_colour;
  if (acc[colour]) {
    acc[colour]++;
  } else {
    acc[colour] = 1;
  }
  return acc;
}, {});

const str2 = JSON.stringify(eyeColour, null, 4);

output8.innerHTML = str2;

// FILTER Exercises

const bigCharacters = characters.filter(char => char.mass > 100);

const str3 = JSON.stringify(bigCharacters, null, 4);

output9.innerHTML = str3;

const notTall = characters.filter(char => +char.height < 200);

const str4 = JSON.stringify(notTall, null, 4);

output10.innerHTML = str4;

const maleChars = characters.filter(char => char.gender === 'male');

const str5 = JSON.stringify(maleChars, null, 4);

output11.innerHTML = str5;

const femaleChars = characters.filter(char => char.gender === 'female');

const str6 = JSON.stringify(femaleChars, null, 4);

output12.innerHTML = str6;

// SORT Exercises

const byName = characters.sort((a, b) => a.name < b.name ? -1 : 1);

const strName = JSON.stringify(byName, null, 4);

output13.innerHTML = strName;

// console.table(byName);

const byMass = characters.sort((a, b) => a.mass - b.mass);

const str7 = JSON.stringify(byMass, null, 4);

output14.innerHTML = str7;

const byHeight = characters.sort((a, b) => a.height - b.height);

const str8 = JSON.stringify(byHeight, null, 4);

output15.innerHTML = str8;

const byGender = characters.sort((a, b) => a.gender === 'male' ? -1 : 1);

const str9 = JSON.stringify(byGender, null, 4);

output16.innerHTML = str9;

// EVERY Exercises

const blueEyes = characters.every((char) => char.eye_colour === 'blue');

output17.innerHTML = blueEyes;

const mass40 = characters.every(char => char.mass > 40);

output18.innerHTML = mass40;

const shorterThan200 = characters.every(char => char.height < 200);

output19.innerHTML = shorterThan200;

const allMale = characters.every(char => char.gender === 'male');

output20.innerHTML = allMale;

// SOME Exercises

const someMale = characters.some(char => char.gender === 'male');

output21.innerHTML = someMale;

const someBlue = characters.some(char => char.eye_colour === 'blue');

output22.innerHTML = someBlue;

const someTall = characters.some(char => char.height > 200);

output23.innerHTML = someTall;

const someSmall = characters.some(char => char.mass < 50);

output24.innerHTML = someSmall;
