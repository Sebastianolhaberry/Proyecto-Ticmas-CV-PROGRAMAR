alert("Bienvenido a Proyecto CV TICMAS (Programar)");

//Funcion para el modo dark/oscuro para que la pagina cambie de color.
function enableDarkMode( ) {
    let main_body = document.body ;
    main_body.classList.toggle("dark-mode");

    // comprobamos si esta marcado
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }


}

