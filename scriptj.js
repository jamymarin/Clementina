const navChange = () => {
    if (window.scrollY > 100) {
        document.querySelector("nav").classList.add("fondoNav");
    } else {
        document.querySelector("nav").classList.remove("fondoNav");
    }
};

window.addEventListener("scroll", navChange);

let contador = 0;

function iniciar() {
    const imagenes = document.querySelectorAll('#cajaimagenes img');
    const soltar = document.getElementById('cajasoltar');  
    const soltar2 = document.getElementById('cajasoltar2'); 
    const soltar3 = document.getElementById('cajasoltar3'); 

    // Asignamos el evento de arrastrar a las imágenes
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }

    // Asignamos los eventos de dragenter, dragover y drop a las cajas
    soltar.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado, false);

    soltar2.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);

    soltar3.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);
}

function arrastrado(e) {
    const elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('Text');
    const imagen = document.getElementById(id);

    // Hacemos que la imagen desaparezca al soltarla
    imagen.style.display = 'none';

    // Insertamos la imagen en la caja sin cambiar su tamaño
    e.target.innerHTML = `<img src="${imagen.src}" height="400px" width="275px">`;

    // Aumentamos el contador cada vez que se suelta una imagen
    contador++;

    // Verificamos si se completaron las tres imágenes
    if (contador === 3) {
        alert("¡Felicidades, completaste el rompecabezas!");
    }
}

function reinicio() {
    window.location.reload();
}

iniciar();
