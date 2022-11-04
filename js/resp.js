burger= document.querySelector('.burger');
navbar= document.querySelector('.navbar');
navlist= document.querySelector('.navlist');


burger.addEventListener('click', ()=>{
       navlist.classList.toggle('v-class-res');
       navbar.classList.toggle('h-nav-res');
})