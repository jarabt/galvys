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
      "electro-12",
    ],
  },
  {
    title: "Nátěry fasád",
    images: ["facades-01", "facades-02", "facades-03", "facades-04"],
  },
];

const filter = document.querySelector(".gallery-filter");
const grid = document.querySelector(".gallery-grid");
const modalTitle = document.getElementById("galleryModalTitle");
const modalImg = document.getElementById("galleryModalImg");
const galleryModal = new bootstrap.Modal(document.getElementById("galleryModal"));

// One button per kind of work; only the selected category's thumbnails are loaded
function showCategory(index) {
  const cat = categories[index];
  filter.querySelectorAll("button").forEach(function (btn, i) {
    btn.setAttribute("aria-pressed", i === index ? "true" : "false");
  });
  grid.innerHTML = "";
  cat.images.forEach(function (img, n) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gallery-thumb";
    btn.dataset.full = "./gallery/" + img + ".jpg";
    btn.dataset.title = cat.title;
    btn.setAttribute(
      "aria-label",
      cat.title + ", fotka " + (n + 1) + " z " + cat.images.length,
    );
    const thumb = document.createElement("img");
    thumb.src = "./gallery/" + img + "-thumb.webp";
    thumb.alt = "";
    thumb.loading = "lazy";
    btn.appendChild(thumb);
    grid.appendChild(btn);
  });
}

categories.forEach(function (cat, i) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "gallery-chip";
  btn.textContent = cat.title;
  btn.innerHTML += ' <span class="gallery-count">' + cat.images.length + "</span>";
  btn.addEventListener("click", function () {
    showCategory(i);
  });
  filter.appendChild(btn);
});

grid.addEventListener("click", function (e) {
  const btn = e.target.closest(".gallery-thumb");
  if (!btn) return;
  modalTitle.textContent = btn.dataset.title;
  modalImg.src = btn.dataset.full;
  modalImg.alt = btn.dataset.title;
  galleryModal.show();
});

document.getElementById("galleryModal").addEventListener("hidden.bs.modal", function () {
  modalImg.removeAttribute("src");
});

showCategory(0);
