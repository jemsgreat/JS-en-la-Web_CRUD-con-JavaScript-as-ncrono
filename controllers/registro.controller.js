const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, "-", email);
})