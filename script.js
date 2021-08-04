//Hamburger Menu

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

  //Dinamic Feature Speakers

  //Objects
  const speakerCardArray = [Speaker1 = {
    frontImg: './imgs/Text-Background.jpg',
    backImg: './imgs/cards-background.jpg',
    tittle: 'Sony conference',
    p1: 'Sony ran its major reveal of the PlayStation 5 console',
    p2: '____',
    p3: 'Sony ran its major reveal of the PlayStation 5 console'
  },

  Speaker2 = {
    frontImg: './imgs/Text-Background.jpg',
    backImg: './imgs/cards-background.jpg',
    tittle: 'Sony conference',
    p1: 'Sony ran its major reveal of the PlayStation 5 console',
    p2: '____',
    p3: 'Sony ran its major reveal of the PlayStation 5 console'
  },

  speaker3 = {
    frontImg: './imgs/Text-Background.jpg',
    backImg: './imgs/cards-background.jpg',
    tittle: 'Sony conference',
    p1: 'Sony ran its major reveal of the PlayStation 5 console',
    p2: '____',
    p3: 'Sony ran its major reveal of the PlayStation 5 console'
  },

  speaker4 = {
    frontImg: './imgs/Text-Background.jpg',
    backImg: './imgs/cards-background.jpg',
    tittle: 'Sony conference',
    p1: 'Sony ran its major reveal of the PlayStation 5 console',
    p2: '____',
    p3: 'Sony ran its major reveal of the PlayStation 5 console'
  },

  speaker5 = {
    frontImg: './imgs/Text-Background.jpg',
    backImg: './imgs/cards-background.jpg',
    tittle: 'Sony conference',
    p1: 'Sony ran its major reveal of the PlayStation 5 console',
    p2: '____',
    p3: 'Sony ran its major reveal of the PlayStation 5 console'
  },

  speaker6 = {
    frontImg: './imgs/Text-Background.jpg',
    backImg: './imgs/cards-background.jpg',
    tittle: 'Sony conference',
    p1: 'Sony ran its major reveal of the PlayStation 5 console',
    p2: '____',
    p3: 'Sony ran its major reveal of the PlayStation 5 console'
  }
]

// html structure

function createCards() {
  for (let i=0; i < speakerCardArray.length; i += 1) {
    const speakersSection = document.querySelector('.speakers');
    const speakerDiv = document.createElement('div');
    const speakerImgFront = document.createElement('img');
    const speakerImgBack = document.createElement('img');
    const containerDiv = document.createElement('div');
    const speakerTittle = document.createElement('h2');
    const speakerDescpt1 = document.createElement('p');
    const speakerDescpt2 = document.createElement('p');
    const speakerDescpt3 = document.createElement('p');
    
    speakerDiv.classList.add('speakercard', `speakercard${[i+1]}`);
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