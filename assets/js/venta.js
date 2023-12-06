let propiedadesEnVenta = document.querySelector("#propiedadesenventa");
propiedadesEnVenta.style.display = "grid";
propiedadesEnVenta.style.gridTemplateColumns = `repeat(3, 1fr)`;
propiedadesEnVenta.style.gap = `20px`;
propiedadesEnVenta.style.padding = `10px`;
propiedadesEnVenta.style.width = `auto`;

// const imagen = ventas.src;
// imagen.style.width  ='80px'

const ventas = [
  {
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    titulo: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion:
      '<i class="fas fa-map-marker-alt"></i> 123 Luxury Lane Prestige Suburb, CA 45678',
    caracteristicas:
      '<i class="fas fa-bed"></i> 4 Habitaciones |<i class="fas fa-bath"></i> 4 Baños',
    precio: '<i class="fas fa-dollar-sign"></i> 5.000',
    fumar: '<i class="fas fa-smoking-ban"></i> No se permite fumar',
    mascotas: '<i class="fa-solid fa-ban"></i> No se permiten mascotas',
  },
  {
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    titulo: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion:
      '<i class="fas fa-map-marker-alt"></i> 789 Mountain Road, Summit Peaks, CA 23456',
    caracteristicas:
      '<i class="fas fa-bed"></i> 2 Habitaciones | <i class="fas fa-bath"></i> 1 Baños',
    precio: '<i class="fas fa-dollar-sign"></i>1.200',
    fumar: '<i class="fas fa-smoking"></i> Permitido fumar',
    mascotas: '<i class="fas fa-paw"></i> Mascotas permitidas',
  },
  {
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion:
      '<i class="fas fa-map-marker-alt"></i> 567 Skyline Avenue, Skyview City, CA 56789',
    caracteristicas:
      '<i class="fas fa-bed"></i> 3 Habitaciones | <i class="fas fa-bath"></i> 3 Baños',
    precio: '<i class="fas fa-dollar-sign"></i> 4.500</p>',
    fumar: '<i class="fas fa-smoking-ban"></i> No se permite fumar',
    mascotas: '<i class="fas fa-paw"></i> Mascotas permitidas',
  },
  {
    src: "https://c8.alamy.com/compes/ekydw9/antigua-casa-embrujada-con-dark-vineteado-ekydw9.jpg",
    titulo: "Casa embrujada",
    descripcion: "linda por fuera, linda por dentro",
    direccion:
      '<i class="fas fa-map-marker-alt"></i> 666 Tiriri Avenue, Nadie Sabe City, CA 99999',
    caracteristicas:
      '<i class="fas fa-bed"></i> 10 Habitaciones | <i class="fas fa-bath"></i> 5 Baños',
    precio: '<i class="fas fa-dollar-sign"></i> 9.800</p>',
    fumar: '<i class="fas fa-smoking"></i> Permitido fumar',
    mascotas: '<i class="fa-solid fa-ban"></i> No se permiten mascotas',
  },
];

for (let venta of ventas) {
  const ventaPropiedad = `
    <div class = ‘propVta’>
    <img src = "${venta.src}">
    <h5>${venta.titulo}</h5>
    <p>${venta.descripcion}</p>
    <p>${venta.direccion}</p>
    <p>${venta.caracteristicas}</p>
    <p>${venta.precio}</p>
    <p>${venta.fumar}</p>
    <p>${venta.mascotas}</p>
    </div>
    `;

  propiedadesEnVenta.innerHTML += ventaPropiedad;
}
