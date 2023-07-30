//variables

var form_cuerpo={
    correo:"",
    contrasena:"",
    checar:false
}

hola_mundo=()=>{
    console.log("boton oprimidos")
}

la_funcion=()=>{
    console.log("boton la_funcion")
}

ejecuta_form=(evt)=>{
    evt.preventDefault();
    console.log(evt);
    console.log("valor de las propiedades",form_cuerpo)
}

captura_onchanche=(evt)=>{
    console.log("ejecutando evento de captura",evt)
    if (evt.target.name == 'checar') {
        form_cuerpo[`${evt.target.name}`]=evt.target.checked
    }else{
        form_cuerpo[`${evt.target.name}`]=evt.target.value
    }
}