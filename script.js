// Hamburger Menu

const header = document.querySelector('.header');
const headerelement1 = document.querySelector('.headerelement1');
const navMenu = document.querySelector('.headerelement2');
const menuItems = document.querySelector('.menuitems');
const lines = document.querySelector('.lines');
const menuLine1 = document.querySelector('.line-1');
const menuLine2 = document.querySelector('.line-2');
const menuLine3 = document.querySelector('.line-3');
const navMenuBottom = document.querySelector('.navmenubottom');

function clickMenu() {
  header.classList.toggle('header1');
  headerelement1.classList.toggle('headerelement1-1');
  menuItems.classList.toggle('menuitems1');
  lines.classList.toggle('lines1');
  navMenu.classList.toggle('nav-menu');
  menuLine1.classList.toggle('line-1-1');
  menuLine2.classList.toggle('line-1-2');
  menuLine3.classList.toggle('line-1-3');
  navMenuBottom.classList.toggle('navmenubottom1');
}

header.addEventListener('click', clickMenu);

// Dinamic Feature Speakers

// Objects

const speakerCardArray = [{
  frontImg: './imgs/Kazuo-Hirai-CEO-Sony.jpg',
  backImg: './imgs/3d-Black-Grey-White-Pattern-Cube-Design-1350343.png',
  tittle: 'Sony conference',
  p1: 'Sony ran its major reveal of the PlayStation 5 console',
  p2: '____',
  p3: 'Trover Saves the Universe from Rick and Morty s Justin Roiland. And now yet ANOTHER Kingdom Hearts trailer',
},

{
  frontImg: './imgs/presidente-y-ceo-de-nintendo.jpg',
  backImg: './imgs/3d-Black-Grey-White-Pattern-Cube-Design-1350343.png',
  tittle: 'Nintendo conference',
  p1: 'Stream kicked off with Kazumi Mishima from the Tekken universe',
  p2: '____',
  p3: 'Nintendo also announced Life is Strange Remastered Collection and Life is Strange: True Color is coming to the Nintendo Switch',
},

{
  frontImg: './imgs/CeoMicrosoft.jpeg',
  backImg: './imgs/3d-Black-Grey-White-Pattern-Cube-Design-1350343.png',
  tittle: 'Microsoft conference',
  p1: 'Microsoft’s E3 Xbox and Bethesda Showcase surprisingly didn’t start with Phil Spencer but Bethesda’s Todd Howard',
  p2: '____',
  p3: 'We got our first look at Battlefield 2042 multiplayer today and now we have a better look at each specialist’s tools like the grappling hook and wingsuit.',
},

{
  frontImg: './imgs/ceo_ubisoft1.jpg',
  backImg: './imgs/3d-Black-Grey-White-Pattern-Cube-Design-1350343.png',
  tittle: 'Ubisoft conference',
  p1: 'Ubisoft Forward is the first major show of E3 with newly announced AAA games and our first look gameplay of previously announced titles.',
  p2: '____',
  p3: 'Rainbow Six threw down the gauntlet first with a cinematic trailer for the new Extraction expansion releasing on September 16.',
},

{
  frontImg: './imgs/27969_ceo_electronic-arts-e.jpeg',
  backImg: './imgs/3d-Black-Grey-White-Pattern-Cube-Design-1350343.png',
  tittle: 'EA conference',
  p1: 'What should you expect to see from the EA E3 2021 showing? While Electronic Arts online press conference',
  p2: '____',
  p3: 'This is likely to be EA`s tentpole title for its E3 presence this year, as the publisher has already confirmed that DICE`s shooter sequel',
},

{
  frontImg: './imgs/square-enix-yosuke-matsuda.png',
  backImg: './imgs/3d-Black-Grey-White-Pattern-Cube-Design-1350343.png',
  tittle: 'Sqare Enix conference',
  p1: 'Square Enix Presents Summer 2021 was a jampacked show and it dove headfirst into a new Marvel game, Guardians of the Galaxy.',
  p2: '____',
  p3: 'Final Fantasy fans will be glad to hear that the first six games will be coming back as a Pixel Remaster Collection that’ll be available on Steam and mobile.',
}];

// html structure

function createCards() {
  for (let i = 0; i < speakerCardArray.length; i += 1) {
    const speakersSection = document.querySelector('.speakers');
    const speakerDiv = document.createElement('div');
    const speakerImgFront = document.createElement('img');
    const speakerImgBack = document.createElement('img');
    const containerDiv = document.createElement('div');
    const speakerTittle = document.createElement('h2');
    const speakerDescpt1 = document.createElement('p');
    const speakerDescpt2 = document.createElement('p');
    const speakerDescpt3 = document.createElement('p');
    speakerDiv.classList.add('speakercard', `speakercard${[i + 1]}`);
    speakerImgFront.classList.add('speakerimg');
    speakerImgBack.classList.add('speakerimg1');
    speakerTittle.classList.add('speaker-tittle');
    speakerDescpt1.classList.add('speakerdescpt1');
    speakerDescpt2.classList.add('speakerdescpt');
    speakerDescpt3.classList.add('speakerdescpt');
    speakersSection.appendChild(speakerDiv);
    speakerDiv.appendChild(speakerImgFront);
    speakerDiv.appendChild(speakerImgBack);
    speakerDiv.appendChild(containerDiv);
    containerDiv.appendChild(speakerTittle);
    containerDiv.appendChild(speakerDescpt1);
    containerDiv.appendChild(speakerDescpt2);
    containerDiv.appendChild(speakerDescpt3);

    speakerImgFront.src = `${speakerCardArray[i].frontImg}`;
    speakerImgFront.alt = '';
    speakerImgBack.src = `${speakerCardArray[i].backImg}`;
    speakerImgBack.alt = '';
    speakerTittle.innerHTML = speakerCardArray[i].tittle;
    speakerDescpt1.innerHTML = speakerCardArray[i].p1;
    speakerDescpt2.innerHTML = speakerCardArray[i].p2;
    speakerDescpt3.innerHTML = speakerCardArray[i].p3;
  }

  for (let i = 0; i < 1; i += 1) {
    const speakersSection = document.querySelector('.speakers');
    const speakersButton = document.createElement('button');
    speakersButton.classList.add('speakersbutton');
    speakersSection.appendChild(speakersButton);
    speakersButton.innerHTML = ('See All Speakers <span class="eventsline">▾</span>');
  }
}

window.addEventListener('DOMContentLoaded', createCards);