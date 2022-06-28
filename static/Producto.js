document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Chile',
            precio: 443,
            imagen: 'galeria/Chile1.jpg'
        },
        {
            id: 2,
            nombre: 'Santorini',
            precio: 294,
            imagen: 'galeria/Grecia.jpg'
        },
        {
            id: 3,
            nombre: 'Paris',
            precio: 999,
            imagen: 'galeria/Paris2.jpg'
        },
        {
            id: 4,
            nombre: 'Canada',
            precio: 945,
            imagen: 'galeria/Canada3.jpg'
        },
  
        {
          id: 5,
          nombre: 'Canada',
          precio:  999,
          imagen: 'galeria/Canada2.jpg'
        },
  
        {
          id: 6,
          nombre: 'Alemania',
          precio: 999,
          imagen: 'galeria/Alemania.jpg'
        }
        ,
        {
          id: 7,
          nombre: 'Chile',
          precio: 999,
          imagen: 'galeria/Chile2.jpg'
        }
        ,
        {
          id: 8,
          nombre: 'Brasil',
          precio: 439,
          imagen: 'galeria/brasil.jpg'
        }
        ,
        {
          id: 9,
          nombre: 'Alemania',
          precio: 999,
          imagen: 'galeria/Alemania1.jpg'
        }
  
    ];
  
    let carrito = [];
    const divisa = ' USD $';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const DOMbotonComprar = document.querySelector('#boton-comprar');
    const miLocalStorage = window.localStorage;
  
  
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
  
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
           
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${divisa} ${info.precio}`;
            
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar al carro';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
           
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }
  
    function anyadirProductoAlCarrito(evento) {
  
        carrito.push(evento.target.getAttribute('marcador'))
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }
    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        DOMtotal.textContent = calcularTotal();
    }
    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
  
    }
    function calcularTotal() {
        return carrito.reduce((total, item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(4);
    }
    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();
  
    }
  
    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }
  
    function cargarCarritoDeLocalStorage () {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }
  
    function comprarCarrito(){
      let total = calcularTotal();
      let mensaje = ""
      if(carrito.length === 0){
        mensaje = `Tu carro está vacío, agrega un producto`
        alert(mensaje)
        return
      }
      mensaje = `Hemos procesado tu compra...
                Datos Compra: 
                total pagado: ${total} ${divisa}
                estado: En preparacion `
      alert(mensaje)
  
      setTimeout(function(){
        mensaje = `Seguimiento compra
                Datos Compra:
                total pagado: ${total} ${divisa}
                estado: En camino `;
        alert(mensaje)
      }, 2000);
      setTimeout(function(){
        mensaje = `Seguimiento compra
                Datos Compra:
                total pagado: ${total} ${divisa}
                estado: Entregado`;
        alert(mensaje)
      }, 4000);
  
        return        
    }
  
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    DOMbotonComprar.addEventListener('click', comprarCarrito);
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
  });