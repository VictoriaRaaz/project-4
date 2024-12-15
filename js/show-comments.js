var table = [
  { nombre: "Victoria", comentario: "Hola" }
];

window.onload = cargarEventos;

function cargarEventos() {
  document.getElementById("show-comments").addEventListener("click", showTable, false);
  document.getElementById("new-comments").addEventListener("submit", newComment, false);
}

function showTable() {
  var bodyTable = document.getElementById("user-comments");
  var fullTable = "";

  for (var i = 0; i < table.length; i++) {
    fullTable += `<tr>
                    <td>${table[i].nombre}</td>
                    <td>${table[i].comentario}</td>
                    <td>
                      <button onclick="editComment(${i})">Editar</button>
                      <button onclick="deleteComment(${i})">Eliminar</button>
                    </td>
                  </tr>`;
  }

  bodyTable.innerHTML = fullTable;
}

function newComment(event) {
  event.preventDefault();

  var newUserName = document.getElementById("name").value;
  var newCommentUser = document.getElementById("comment").value;

  if (newUserName.trim() !== "" && newCommentUser.trim() !== "") {
    var newComment = { nombre: newUserName, comentario: newCommentUser };
    table.push(newComment);
    showTable(); // Refresh the table after adding
  } else {
    alert("Por favor, completa todos los campos.");
  }
}

function editComment(index) {
  var nombre = prompt("Editar nombre:", table[index].nombre);
  var comentario = prompt("Editar comentario:", table[index].comentario);

  if (nombre !== null && comentario !== null) { // Verify that the user has not canceled
    table[index].nombre = nombre.trim() === "" ? table[index].nombre : nombre;
    table[index].comentario = comentario.trim() === "" ? table[index].comentario : comentario;
    showTable(); // Refresh table after editing
  }
}

function deleteComment(index) {
  if (confirm("¿Estás seguro de que deseas eliminar este comentario?")) {
    table.splice(index, 1); // Remove the element from the array
    showTable(); // Refresh table after deleting
  }
}
