const menus = document.querySelectorAll('#btn-select');
const btnContainer = document.querySelector('#container-btn');
const as = document.querySelector('.hidden');

menus.forEach(menu =>{
    menu.addEventListener('click', function(){
        menu.classList.toggle('bg-primary');
        menu.classList.toggle('text-primary');
        btnContainer.classList.toggle('mb-40');
        as.classList.toggle('hidden');
    });
});




