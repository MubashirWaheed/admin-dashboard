const sidebar = document.querySelector('.sidebar')
const menu = document.querySelector('.menu');
const closeSvg = document.querySelector('.close');

menu.addEventListener("click",()=>{
    sidebar.classList.add('sidebar-toggle')
})

closeSvg.addEventListener('click',()=>{
    sidebar.classList.remove('sidebar-toggle');
})