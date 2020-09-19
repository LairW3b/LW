const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector("#menu"),
      close = document.querySelector("closeMenu");

iconoMenu.addEventListener('click', () => {
    //Alternar estilos
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
})

