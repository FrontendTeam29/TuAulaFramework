const menus = document.querySelectorAll('#btn-select');
const btnContainer = document.querySelector('#container-btn');
const as = document.querySelector('.hidden');
const links = document.querySelectorAll('#link');

menus.forEach(menu =>{
    menu.addEventListener('click', function(){
        menu.classList.toggle('bg-primary');
        menu.classList.toggle('text-primary');
        btnContainer.classList.toggle('mb-40');
        as.classList.toggle('hidden');
    });
});

links.forEach(link =>{
    link.addEventListener('click', function(){
        link.classList.toggle('bg-primary');
        link.classList.toggle('text-primary');
        link.classList.add('text-white');
    });
});





