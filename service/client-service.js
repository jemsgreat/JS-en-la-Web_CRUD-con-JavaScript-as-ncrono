//backticks
const crearNuevaLinea = (nombre, email) => {     //back thicks
    const linea = document.createElement("tr");
    const contenido = `
        <td class="td" data-td>
            ${nombre}
        </td>
        <td>${email}</td>                       
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit">
                    Editar
                    </a>
                </li>
                <li>
                <button class="simple-button simple-button--delete" type="button">
                    Eliminar
                </button>
                </li>
            </ul>
        </td>
    
    `;
    linea.innerHTML = contenido;
    return linea;
};

// abrir http (metodo, url)

//CRUD    - Metodos HTTP 
//Create  - POST
//Read    - GET
//Update  - PUT/PATCH
//Delete  - DELETE  

const table = document.querySelector("[data-table]");

const listaCliente = () => {
    const promise = new promise((resolve, reject) =>{
        const http = new XMLHttpRequest();
        http.open("GET", "http://localhost:3000/perfil");
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.response);
            if (http.status>= 400){
                reject(response)
            }else{
                resolve(response)
            }
        }; 
    });

    return promise;
};

listaClientes()
    .then((data) => {
        data.forEach((perfil) => {
            const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);
            table.appendChild(nuevaLinea);
        });
    })
    .catch((error) => alert('ocurrio un error'));

/*
    
*/




