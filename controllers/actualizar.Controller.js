import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
// Aula 5 Async 
const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    if (id === null) {
        window.location.href = "/screens/error.html";
    }
    
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    //modo con try y await no necesita then se utiliza el try para comprobar errores Aula 5
    try {
        const perfil = await clientServices.detalleCliente(id)
        if (perfil.nombre && perfil.email) {
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        } else {
            throw new Error();
        }        
    } catch (error) {
        window.location.href = "/screens/error.html";
    }
    //modo con solo await
    /*
    const perfil = await clientServices.detalleCliente(id)
    nombre.value = perfil.nombre;
    email.value = perfil.email; */
    /* modo sin await
    clientServices.detalleCliente(id)
    .then((perfil) => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    }); */
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, " ", email);
    clientServices.actualizarCliente(nombre, email, id).then(() => {
        window.location.href = "/screens/edicion_concluida.html";
    });
});