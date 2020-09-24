const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector("#menu"),
      close = document.querySelector("closeMenu");

iconoMenu.addEventListener('click', () => {
    //Alternar estilos
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
})


/* BARRA PROGRESO ANIMADA  */
function animateprogress (id, val) {

    var getRequestAnimationFrame =function () {

        return window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function ( callback ) {
            window.setTimeout(enroute, 1 / 60 * 1000);
        };
    };

    var fpAnimationFrame = getRequestAnimationFrame();

    var i = 0;
    var animacion = function () {
        if (i<=val){
            document.querySelector(id).setAttribute("value",i);

            document.querySelector(id+"+ span").innerHTML = i + "%";
            i++;
            fpAnimationFrame(animacion);
        }
    }

    fpAnimationFrame(animacion);

}

window.onload = function() {
    animateprogress("#html5", 80);
    animateprogress("#css", 70 );
    animateprogress("#js", 20);
    animateprogress("#bootstrap", 50);
    animateprogress("#materia", 50);
    animateprogress("#sass", 70);
    animateprogress("#photoshop", 50);
    animateprogress("#ai", 60);
    animateprogress("#ae", 50);
    animateprogress("#gimp", 65);
    animateprogress("#figma", 65);
    animateprogress("#scape", 40)
}
