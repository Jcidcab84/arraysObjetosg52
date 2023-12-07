let propiedadesEnAlquiler = document.querySelector("#propiedadesenalquiler");
propiedadesEnAlquiler.style.display = "grid";
propiedadesEnAlquiler.style.gridTemplateColumns = `repeat(3, 1fr)`;
propiedadesEnAlquiler.style.gap = `20px`;
propiedadesEnAlquiler.style.padding = `10px`;
propiedadesEnAlquiler.style.width = `auto`;


const alquileres = [
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      titulo: " Apartamento en el centro de la ciudad",
      descripcion:
        " Este apartamento de 2 habitaciones está ubicado en el corazónde la ciudad, cerca de todo.",
      direccion:
        ' <i class="fas fa-map-marker-alt"></i> 123 Main Street, Anytown, CA 91234',
      caracteristicas:
        '<i class="fas fa-bed"></i> 2 Habitaciones | <i class="fas fa-bath"></i> 2 Baños',
      precio: '<i class="fas fa-dollar-sign"></i> 2.000',
      fumar: false,
      mascotas: true,
    }, {
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        titulo: " Apartamento luminoso con vista al mar",
        descripcion:
          "Este hermoso apartamento ofrece una vista impresionante al mar.",
        direccion:
          '<i class="fas fa-map-marker-alt"></i> 456 Ocean Avenue, Seaside Town, CA 56789',
        caracteristicas:
          '<i class="fas fa-bed"></i> 3 Habitaciones | <i class="fas fa-bath"></i> 3 Baños',
        precio: '<i class="fas fa-dollar-sign"></i> 2,500',
        fumar: true,
        mascotas: true,
      }, {
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        titulo: "Condominio moderno en zona residencial",
        descripcion:
          "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        direccion:
          '<i class="fas fa-map-marker-alt"></i> 123 Main Street, Anytown, CA 91234',
        caracteristicas:
          '<i class="fas fa-bed"></i> 2 Habitaciones | <i class="fas fa-bath"></i> 2 Baños',
        precio: '<i class="fas fa-dollar-sign"></i> 2,000',
        fumar: false,
        mascotas: false,
      },{
        src: "https://elcomercio.pe/resizer/4A-jGqyPwDcj7vrA2OnRG8V4P2c=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MPGQLQXWCFE67EBME7WQIBUXAQ.png",
        titulo: "Acogedora propiedad de madera",
        descripcion:
          "Acogedora y elegante propiedad hecha de roble, ubicada al centro de reconocido condominio",
        direccion:
          '<i class="fas fa-map-marker-alt"></i> 123 Vecindad del chavo, Mexico, CA 98586',
        caracteristicas:
          '<i class="fas fa-bed"></i> 1 Habitaciones | <i class="fas fa-bath"></i> 1 Baños',
        precio: '<i class="fas fa-dollar-sign"></i> 1,500',
        fumar: true,
        mascotas: false,
      },

]



    for (let alquiler of alquileres) {
        const autorizacionFumar = sePuedeFumar(alquiler.fumar);
        const autorizacionTenerMascotas = sePuedeTenerMascotas(alquiler.mascotas);
      
        let alquilerPropiedad = `
        
          <div class='propalquiler'>
          <div class="col-md-12 mb-12">
            <img class="card-img-top" src="${alquiler.src}" alt="${alquiler.titulo}">
            <div class="card-body">
            <h5 class="card-title">${alquiler.titulo}</h5>
            <p>${alquiler.descripcion}</p>
            <p>${alquiler.direccion}</p>
            <p>${alquiler.caracteristicas}</p>
            <p>${alquiler.precio}</p>
            <p class="smoke">${autorizacionFumar}</p>
            <p class="pets">${autorizacionTenerMascotas}</p>
            </div>
          </div>
          </div>`;
      
        propiedadesEnAlquiler.innerHTML += alquilerPropiedad;
      }

      
function sePuedeFumar(fumar) {
    const style = fumar ? 'color: green;' : 'color: red;';
    return fumar
      ? `<span style="${style}"><i class="fas fa-smoking"></i> Permitido fumar</span>`
      : `<span style="${style}"><i class="fas fa-smoking-ban"></i> No se permite fumar</span>`;
  }
  
  
  function sePuedeTenerMascotas(mascotas) {
    const style = mascotas ? 'color: green;' : 'color: red;';
    return mascotas
      ? `<span style="${style}"><i class="fas fa-paw"></i> Se admiten mascotas`
      : `<span style="${style}"><i class="fas fa-paw"></i> No se admiten mascotas`;
  }
  