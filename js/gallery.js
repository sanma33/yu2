const photos = [
  {
    src: "images/photo01.jpg",
    title: "いぬ",
    description: "かわいすぎるイヌ。",
    category: "play"
  },
  {
    src: "images/photo02.jpg",
    title: "犬2号",
    description: "なまえはおそらくポチ",
    category: "event"
  },
  {
    src: "images/photo03.jpg",
    title: "スパワールドの",
    description: "有名なお風呂です。",
    category: "art"
  }
];

const gallery = document.getElementById("gallery");

function displayPhotos(category = "all") {
  gallery.innerHTML = "";

  const filteredPhotos =
    category === "all"
      ? photos
      : photos.filter(photo => photo.category === category);

  filteredPhotos.forEach(photo => {
    const card = document.createElement("article");
    card.className = "photo-card";

    card.innerHTML = `
      <img src="${photo.src}" alt="${photo.title}">
      <div class="photo-info">
        <h3>${photo.title}</h3>
        <p>${photo.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      openModal(photo);
    });

    gallery.appendChild(card);
  });
}

const buttons = document.querySelectorAll(".category-buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    displayPhotos(category);
  });
});

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.getElementById("modal-close");

function openModal(photo) {
  modalImage.src = photo.src;
  modalTitle.textContent = photo.title;
  modalDescription.textContent = photo.description;

  modal.classList.add("show");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

displayPhotos();
