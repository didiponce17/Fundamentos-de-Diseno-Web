"use strict";

function searchTours() {
  let searchInput = document.getElementById("searchInput").value.toLowerCase();

  let sanjoseTours = ["Escazu", "Santa Ana", "Valle Central"];
  let guanacasteTours = ["Liberia", "Santa Cruz", "Nicoya"];
  let herediaTours = ["Sarapiquí", "Santa Barbara", "Barva"];
  let alajuelaTours = ["San Carlos", "Grecia", "Naranjo"];
  let cartagoTours = ["Turrialba", "Oreamuno", "Alvarado"];
  let limonTours = ["Pococi", "Talamanca", "Tortuguero"];
  let puntarenasTours = ["Osa", "Quepos", "Coto Brus"];

  let toursImages = {
    escazu: "img/img117.jpg",
    "santa ana": "img/img118.jpg",
    "valle central": "img/img119.jpg",
    liberia: "img/img115.jpg",
    "santa cruz": "img/img109.jpg",
    nicoya: "img/img110.jpg",
    sarapiqui: "img/img108.jpg",
    "santa barbara": "img/img107.jpg",
    barva: "img/img116.jpg",
    "san carlos": "img/img113.jpg",
    grecia: "img/img121.jpg",
    naranjo: "img/img112.jpg",
    turrialba: "img/img106.jpg",
    oreamuno: "img/img114.jpg",
    alvarado: "img/img120.jpg",
    pococi: "img/img123.jpg",
    talamanca: "img/img122.jpg",
    tortuguero: "img/img111.jpg",
    osa: "img/img124.jpg",
    quepos: "img/img125.jpg",
    "coto brus": "img/img126.jpg",
  };

  let filteredTours = [];

  let allTours = [
    ...sanjoseTours,
    ...guanacasteTours,
    ...herediaTours,
    ...alajuelaTours,
    ...cartagoTours,
    ...limonTours,
    ...puntarenasTours,
  ];

  if (searchInput === "") {
    Swal.fire({
      title: "Verificar los datos",
      width: "400px",
      html: '<iframe src="https://lottie.host/embed/d941a627-4a06-4daa-ad59-6d81a05d8366/ul86C6F4PY.json"></iframe>',
      confirmButtonText: "Intentar de nuevo",
      confirmButtonColor: "#3a6531",
    });
    return;
  }

  for (let i = 0; i < allTours.length; i++) {
    if (allTours[i].toLowerCase().includes(searchInput)) {
      filteredTours = [allTours[i]];
      break;
    }
  }

  if (filteredTours.length === 0) {
    if (searchInput === "san jose") {
      filteredTours = sanjoseTours;
    } else if (searchInput === "guanacaste") {
      filteredTours = guanacasteTours;
    } else if (searchInput === "heredia") {
      filteredTours = herediaTours;
    } else if (searchInput === "alajuela") {
      filteredTours = alajuelaTours;
    } else if (searchInput === "cartago") {
      filteredTours = cartagoTours;
    } else if (searchInput === "limon") {
      filteredTours = limonTours;
    } else if (searchInput === "puntarenas") {
      filteredTours = puntarenasTours;
    }
  }

  displayResults(filteredTours, toursImages);
}

function displayResults(tours, toursImages) {
  let resultsContainer = document.getElementById("pResult");
  resultsContainer.innerHTML = "";

  if (tours.length === 0) {
    resultsContainer.innerHTML =
      "<p>NO se encontraron tours para la ubicación escrita.</p>";
  } else {
    for (let i = 0; i < tours.length; i++) {
      let imageSrc =
        toursImages[tours[i].toLowerCase()] || "img/ruta_por_defecto.jpg";
      let card = document.createElement("div");
      card.className = "card mb-3";
      card.style.maxWidth = "100%";
      card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imageSrc}" class="img-fluid rounded-start" alt="Tours ${tours[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="texto card-title">Tours en ${tours[i]}</h5>
                            <p class="card-text">Desde exuberantes selvas tropicales hasta playas de arenas blancas, volcanes activos, hasta vibrantes tours urbanos, museos fascinantes, arte cautivador y eventos culturales vibrantes, nuestros tours te llevan a descubrir lo mejor del país de manera sostenible y responsable.
                            </p>
                            <p class="card-text pt-5"><small>¡Contáctenos para más información!</small></p>
                        </div>
                    </div>
                </div>
            `;
      resultsContainer.appendChild(card);
    }
  }
}
