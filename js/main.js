
/*Primero se establecen las variables y su representacion del html*/

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');


/*Luego se establece la funcion, 'onclick' sera una funcion que se ejecute al hacer click sobre lo que representa la variable*/
menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}