const productos = [
  { nombre: "Laptop", precio: 850, descripcion: "Alto rendimiento." },
  { nombre: "Mouse Inalámbrico", precio: 20, descripcion: "Ergonómico." },
  { nombre: "Teclado Mecánico", precio: 60, descripcion: "Retroiluminado." }
];

const lista = document.getElementById("product-list");
const tpl = document.getElementById("prod-tpl");
const btn = document.getElementById("add-btn");

function renderizar() {
  lista.innerHTML = "";
  productos.forEach(p => {
    const clone = tpl.content.cloneNode(true);
    clone.querySelector(".name").textContent = p.nombre;
    clone.querySelector(".price").textContent = p.precio;
    clone.querySelector(".desc").textContent = p.descripcion;
    lista.appendChild(clone);
  });
}

btn.addEventListener("click", () => {
  productos.push({ nombre: "Nuevo Producto", precio: 0, descripcion: "Pendiente." });
  renderizar();
});

window.addEventListener("DOMContentLoaded", renderizar);
