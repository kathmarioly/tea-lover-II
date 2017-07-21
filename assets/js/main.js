var susNewsletter =document.getElementById("suscribirse");

susNewsletter.addEventListener("click" function(){
	var nombre = document.getElementById("name").value;
	var correo = document.getElementById('email').value;
	var direccion = document.getElementById("address").value;

	if (nombre.charAt(0) != nombre.charAt(0).toUpperCase() || nombre.length == 0 || nombre == ""){
		alert("NOMBRE no valido /n Intentalo nuevamente"); 
	}

});