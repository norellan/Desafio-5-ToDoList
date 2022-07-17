const Tarea = document.getElementById("Tarea");
const listaTareas = document.getElementById("listaTareas");
const total = document.getElementById("total");

const arrayTareas = [
  {
    id: 1657477620271,
    tarea: "Lavar la loza",
    estado: false,
  },
  {
    id: 1657477695823,
    tarea: "Hacer las compras",
    estado: false,
  },
  {
    id: 1657477754096,
    tarea: "Sacar a pasear al perro",
    estado: false,
  },
];

renderTareas();

function Agregar() {
  if (Tarea.value === "") {
    alert("Debe agregar una tarea!");
  } else {
    arrayTareas.push({
      id: Date.now(),
      tarea: Tarea.value,
      estado: false,
    });
    renderTareas();

    Tarea.value = "";
    Tarea.focus();
  }
}

function borrar(id) {
  const index = arrayTareas.findIndex((ele) => ele.id == id);
  arrayTareas.splice(index, 1);
  renderTareas();
}

function renderTareas() {
  let html = "";
  let completadas = arrayTareas.filter((completa) => completa.estado !== false);
  for (const t of arrayTareas) {
    if (t.estado == false)
      html += `<li id="${t.id}">${t.id} - ${t.tarea}<span class="close" onclick=borrar(${t.id})><i class="fa-solid fa-trash-can"></i></span></li>`;
    else
      html += `<li id="${t.id}" class="checked" >${t.id} - ${t.tarea}<span class="close" onclick=borrar(${t.id})><i class="fa-solid fa-trash-can"></i></span></li>`; // cuando el estado de la tarea es completado se asigana  la clase "checked" para mostrarla visualmenete marcada en el HTML
  }

  listaTareas.innerHTML = html;
  total.innerHTML = `Total tareas: ${arrayTareas.length} Realizadas: ${completadas.length}`;
}
