
var name, email, phone, message;

function enviar(){

    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    message = document.getElementById('message').value;

    if(name === '' || email === '' || phone == '' || message === ''){
        alert("Formulario vacio")
    } else {
        alert("Se ha enviado su formulario");
        console.log("Su nombre es ", this.nombre);
        console.log("Su correo es ", this.correo);
        console.log("Su asuto fue ", this.asunto);
        console.log("Su texto fue ", this.value);
    }
}