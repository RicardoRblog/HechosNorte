const mainmenu=document.querySelector('.mainmenu');
const mainMenu=document.querySelector('.mainMenu');
const closeMenu=document.querySelector('.closemenu');
const openmMenu=document.querySelector('.openmenu');


openmenu.addEventListener('click', show);

closemenu.addEventListener('click', close);


function show(){

    mainMenu.style.display= 'flex';
    closeMenu.style.top= '0';

}

function close(){

    mainMenu.style.top='-100%';
}