var susNewsletter = document.getElementById("suscribete");

susNewsletter.addEventListener("click", function(){

	var nombre = document.getElementById("name").value;
	var correo = document.getElementById('email').value;
	var direccion = document.getElementById("address").value;
	var tipos = document.getElementById("lista-te").value;

	if (nombre.charAt(0) != nombre.charAt(0).toUpperCase() || nombre.length == 0 || nombre == ""){
		alert("¡NOMBRE no valido! \n(La primera letra debe ir en Mayuscula)"); 
	}

});