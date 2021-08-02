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