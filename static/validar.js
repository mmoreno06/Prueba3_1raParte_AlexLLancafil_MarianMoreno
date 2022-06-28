function validar(){
    var Nombre, Apellido, Correo, Telefono, Motivo ;
    Nombre = document.getElementById("Nombre").value;
    Apellido= document.getElementById("Apellido").value;
    Correo = document.getElementById("Correo").value;
    Telefono = document.getElementById("Telefono").value;
    Motivo = document.getElementById("Motivo").value;
  


    if(Nombre ==="" || Apellido === "" || Correo === "" || Telefono ===" " || Ciudad === "" || Motivo === "" ){
        alert(" Todos los campos son obligatorios ");
        return false;
    }
    else if (Nombre.length>10){
        alert("El nombre es muy largo");
        return false;
    }
    else if (Apellido.length>10){
        alert("El nombre Completo es muy corto, usa tus nombres y  apellidos");
        return false;
    }
    else if (Correo.length>60){
        alert("El correo es muy largo");
        return false;
    }
    else if (Telefono.length>10){
        alert("El Telefono es muy largo");
        return false;
    }
    else if (Motivo.length<10){
        alert("El Telefono es muy corto, Explique detalladamente el motivo");
        return false;
    }


   
 }