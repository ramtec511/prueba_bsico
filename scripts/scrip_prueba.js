//variables

var form_cuerpo={
    correo:"",
    contrasena:"",
    checar:false,
    datos_tabla:[]
}

hola_mundo=()=>{
    console.log("boton oprimidos")
}

la_funcion=()=>{
    console.log("boton la_funcion")
}

ejecuta_form=async(evt)=>{
    evt.preventDefault();
    console.log(evt);
    console.log("valor de las propiedades",form_cuerpo);
    validacion_login(form_cuerpo)
}

captura_onchanche=(evt)=>{
    console.log("ejecutando evento de captura",evt)
    if (evt.target.name == 'checar') {
        form_cuerpo[`${evt.target.name}`]=evt.target.checked
    }else{
        form_cuerpo[`${evt.target.name}`]=evt.target.value
    }
}

validacion_login=async(dat_entrada)=>{
    try {
        if (dat_entrada.correo =="ejemplo12@gmail.com" && dat_entrada.contrasena=="12345*") {
            window.alert("se logueo con exito");
            obt_all_personajes()
        }else{
            window.alert("credenciales incorrectas")
        }
        
    } catch (err) {
        window.alert('Hubo un error al intentar loguearse')
    }
}

mostrar_tabla=()=>{
    var el_div=document.getElementById("collapseExample");
    el_div.className="visible"
}

obt_all_personajes=async()=>{
    try {

        var respuesta=await axios.get('https://rickandmortyapi.com/api/character').catch(err=>{
            throw err
        })
        var data_new=respuesta.data;
        if (data_new.results) {
            form_cuerpo.datos_tabla=data_new.results;
        }else{
            throw "no existen datos"
        }

        var tabla_inner=document.getElementById("cuerpo_tabla");

        form_cuerpo.datos_tabla.forEach(item=>{
            tabla_inner.innerHTML += ` <tr>
            <th scope="row"></th>
            <td>${item.id}</td>        
            <td>${item.gender}</td>        
            <td>${item.name}</td> 
            </tr> `
        })
        
        console.log("respuesta de API",respuesta.data)
        mostrar_tabla()

    } catch (err) {
        console.log(err);
        window.alert("no se pudo conectar a la API")
    }
}