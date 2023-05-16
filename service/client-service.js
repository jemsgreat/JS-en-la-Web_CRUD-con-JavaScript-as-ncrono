const listaClientes = () => 
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email}),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  });
};    

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => 
    respuesta.json()
  ); 
};

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};





























































//backticks
/*
const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr");
    const contenido = `
      <td class="td" data-td>
        ${nombre}
      </td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html"
              class="simple-button simple-button--edit"
            >
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
  
  const table = document.querySelector("[data-table]");
  
  //Abrir http (método,url)
  
  // CRUD   - Métodos HTTP
  // Create - POST
  // Read   - GET
  // Update - PUT/PATCH
  // Delete - DELETE

  //modo fetch API
  const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());



  //modo promises
  /*
  const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/perfil");
  
      http.send();
  
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };
  
  listaClientes()
    .then((data) => {
      data.forEach((perfil) => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
      });
    })
    .catch((error) => alert("Ocurrió un error"));
  
  // console.log(data);
  //
  */