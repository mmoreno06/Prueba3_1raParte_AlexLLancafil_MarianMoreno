document.getElementById("btn_inicio-sesion").addEventListener("click",iniciarSesion);
document.getElementById("btn_registrarse").addEventListener("click",register);
window.addEventListener("resize",anchoPagina);

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");





form.addEventListener("submit",e =>{
    e.preventDefault()
    let warnings =""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/
    parrafo.innerHTML =""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    console.log
    if(!regexEmail.test(email.value)){
        warnings += `ingrese un Email Valido <br>`
        entrar = true

    }
    if(pass.value.length < 8){
        warnings += `Contraseña debe ser mayor a 8 caracteres <br>`
        entrar = true

    }
    if(entrar){  
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML ="Usuario Registrado Corectamente "
    }
   
    function multiply() {
        document.getElementById("answer").innerHTML = false;
    }
})


// declaracion de variables

var container_login_register  = document.querySelector(".container_login-register");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var caja_trasera_login = document.querySelector(".caja_trasera-login");
var caja_trasera_register = document.querySelector(".caja_trasera-register");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display ="none";
        container_login_register.style.left = "opx";
    }
}




function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        container_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    
    }else{
        formulario_register.style.display = "none";
        container_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
   
}

function register(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        container_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";

    }else{
        formulario_register.style.display = "block";
        container_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity ="1";


    }
     
    

}