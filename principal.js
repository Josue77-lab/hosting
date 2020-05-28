document.getElementById("btn_confirm").addEventListener('click', Contactar);


function Contactar()
{
    if(document.getElementById("nombre_").value == "" || document.getElementById("correo_").value == "")
    {
        alert("Debe Ingresar su nombre y correo");
        document.getElementById("nombre_").focus();
    }
    else
    {
        var nombre = document.getElementById("nombre_").value
        alert(nombre + " te has contactado correctamente");   
        document.getElementById("nombre_").value = "";
        document.getElementById("correo_").value = "";
    }
}
