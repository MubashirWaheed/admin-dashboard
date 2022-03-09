const sidebar = document.querySelector('.sidebar')
const menu = document.querySelector('.menu');
const closeSvg = document.querySelector('.close');

menu.addEventListener("click",()=>{
    sidebar.style.width= '60%'
})

closeSvg.addEventListener('click',()=>{
    sidebar.style.removeProperty("width");
})