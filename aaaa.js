const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themeToggler = document.querySelector('.theme-toggler'); // Light Dark Themew
const square = document.querySelector('.square');
const btnAct = document.querySelector('#btn-activate');


menuBtn.addEventListener('click',()=>{
       sideMenu.style.display = "block"
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none"
})

themeToggler.addEventListener('click',()=>{
     document.body.classList.toggle('dark-theme-variables')
     themeToggler.querySelector('span:nth-child(1').classList.toggle('active')
     themeToggler.querySelector('span:nth-child(2').classList.toggle('active')
})


const btnSideList = document.querySelectorAll('.sideoptions');
//thıs dorsnt work again
btnSideList.forEach(btnSide => {
    btnSide.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        btnSide.classList.add('special');
    })
})





btnAct.addEventListener('click', () => {
    square.classList.toggle('hidden1')
})



function changeClass(){
    var element = document.querySelector('#myDiv');
    element.classList.replace('oldClass','newClass');
}





/*  Products   */


function popupFn() {
    document.getElementById(
        "overlay"
    ).style.display = "block";
    document.getElementById(
        "popupDialog"
    ).style.display = "block";
}
function closeFn() {
    document.getElementById(
        "overlay"
    ).style.display = "none";
    document.getElementById(
        "popupDialog"
    ).style.display = "none";
}




function popupFn2() {
    document.getElementById(
        "overlay2"
    ).style.display = "block";
    document.getElementById(
        "popupDialog2"
    ).style.display = "block";
}
function closeFn2() {
    document.getElementById(
        "overlay2"
    ).style.display = "none";
    document.getElementById(
        "popupDialog2"
    ).style.display = "none";
}
