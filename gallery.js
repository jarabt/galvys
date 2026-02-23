const categories = [
  {
    title: "Montáž reklamních bannerů",
    images: [
      "banners-01",
      "banners-02",
      "banners-03",
      "banners-04",
      "banners-05",
      "banners-06",
      "banners-07",
      "banners-08",
      "banners-09",
      "banners-10",
      "banners-11",
      "banners-12",
      "banners-13",
      "banners-14",
    ],
  },
  {
    title: "Montáž konstrukcí",
    images: [
      "structures-01",
      "structures-02",
      "structures-03",
      "structures-04",
      "structures-05",
      "structures-06",
      "structures-07",
      "structures-08",
      "structures-09",
      "structures-10",
      "structures-11",
      "structures-12",
      "structures-13",
    ],
  },
  {
    title: "Ořezy a kácení stromů",
    images: ["trees-01", "trees-02"],
  },
  {
    title: "Čištění a montáž rýn a okapů",
    images: [
      "gutters-01",
      "gutters-02",
      "gutters-03",
      "gutters-04",
      "gutters-05",
      "gutters-06",
      "gutters-07",
      "gutters-08",
      "gutters-09",
      "gutters-10",
      "gutters-11",
      "gutters-12",
      "gutters-13",
      "gutters-14",
      "gutters-15",
      "gutters-16",
      "gutters-17",
      "gutters-18",
      "gutters-19",
      "gutters-20",
      "gutters-21",
      "gutters-22",
      "gutters-23",
      "gutters-24",
      "gutters-25",
      "gutters-26",
      "gutters-27",
      "gutters-28",
      "gutters-29",
      "gutters-30",
      "gutters-31",
    ],
  },
  {
    title: "Montáž vánočních výzdob",
    images: ["christmas-01", "christmas-02", "christmas-03", "christmas-04", "christmas-05", "christmas-06"],
  },
  {
    title: "Montáž veřejného osvětlení",
    images: ["lighting-01", "lighting-02", "lighting-03", "lighting-04"],
  },
  {
    title: "Oprava komínů",
    images: ["chimneys-01", "chimneys-02", "chimneys-03"],
  },
  {
    title: "Elektro práce",
    images: [
      "electro-01",
      "electro-02",
      "electro-03",
      "electro-04",
      "electro-05",
      "electro-06",
      "electro-07",
      "electro-08",
      "electro-09",
      "electro-10",
      "electro-11",
    ],
  },
  {
    title: "Nátěry fasád",
    images: ["facades-01", "facades-02", "facades-03", "facades-04"],
  },
];

const accordion = document.getElementById("galleryAccordion");
categories.forEach(function (cat, i) {
  var cards = cat.images
    .map(function (img) {
      return (
        '<div class="col">' +
        '<div class="card shadow-sm">' +
        '<img type="button" data-bs-toggle="modal" data-bs-target="#' +
        img +
        '"' +
        ' src="./gallery/' +
        img +
        '-thumb.webp" class="card-img"' +
        ' alt="' +
        cat.title +
        '" />' +
        '<div class="modal fade" id="' +
        img +
        '" tabindex="-1" aria-hidden="true">' +
        '<div class="modal-dialog modal-dialog-centered modal-lg">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
        "</div>" +
        '<div class="modal-body p-0">' +
        '<img data-src="./gallery/' +
        img +
        '.jpg" class="img-fluid rounded-top-2 w-100"' +
        ' alt="' +
        cat.title +
        '" />' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
      );
    })
    .join("");

  accordion.innerHTML +=
    '<div class="accordion-item">' +
    '<h2 class="accordion-header">' +
    '<button class="accordion-button collapsed" type="button"' +
    ' data-bs-toggle="collapse" data-bs-target="#collapse' +
    i +
    '"' +
    ' aria-expanded="false" aria-controls="collapse' +
    i +
    '">' +
    cat.title +
    "</button>" +
    "</h2>" +
    '<div id="collapse' +
    i +
    '" class="accordion-collapse collapse"' +
    ' data-bs-parent="#galleryAccordion">' +
    '<div class="accordion-body">' +
    '<div class="row g-3">' +
    cards +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";
});

accordion.addEventListener("shown.bs.collapse", function (e) {
  e.target.querySelectorAll("img[data-src]").forEach(function (img) {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  });
});
