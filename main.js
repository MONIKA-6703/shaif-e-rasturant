const navIconEl=document.querySelector('.nav--icon');
const navCloseEl=document.querySelector('.nav--close');
const navList=document.querySelector('.nav--list');
const navBgoverlay=document.querySelector('.nav--bgoverlay');


const navOpen = () => {
    navList.classList.add('show');
    navBgoverlayEl.classList.add('active');
    document.body.style='visibility: visible; height:100vh; width:100vw; overflow:hidden;';
}
const navClose = () =>{
    navList.classList.remove('show');
    navBgoverlayEl.classList.remove('active');
    document.body.style='visibility:visible; height:initial; width:100% overflow-x:hidden;';
}
navIconEl.addEventListener('click',navOpen);
navCloseEl.addEventListener('click',navClose);
navBgoverlayEl.addEventListener('click',navClose);


//aos
AudioScheduledSourceNode.init({
    offset:200,
    delay:100,
    duration:400,
    easing:'ease',
    once:false,
    mirror:false,
    anchorPlacement:'top-bottom'


})


