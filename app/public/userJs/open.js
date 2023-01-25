
    const openMenu = document.querySelector('#open-menu');
    const closeMenu = document.querySelector('#close-menu');
    const burger = document.querySelector('#burger');
    
    openMenu.addEventListener('click', ()=>{
        burger.classList.add('show-menu');
    });
    closeMenu.addEventListener('click', ()=>{
        burger.classList.remove('show-menu');
    });


