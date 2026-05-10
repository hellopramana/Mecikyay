const photos = [
  {
    file: "20231001_175222.jpg",
    caption: "Langit cerah, pohon kelapa, dan Mecik di momen manis yang hangat."
  },
  {
    file: "20231111_150246.jpg",
    caption: "Jalan hijau yang tenang, vibes-nya kayak memori petualangan kecil."
  },
  {
    file: "20240328_173811.jpg",
    caption: "INI AIB"
  },
  {
    file: "IMG-20240114-WA0063.jpg",
    caption: "INI AIB"
  },
  {
    file: "IMG-20240820-WA0002.jpg",
    caption: "INI AIB"
  },
  {
    file: "IMG-20250815-WA0005.jpg",
    caption: "Mecik di pantai, di bawah langit biru yang cerah."
  },
  {
    file: "IMG_0267.jpg",
    caption: "INI ADIT YANG FOTOIN"
  },
  {
    file: "IMG_0291.jpg",
    caption: "INI ADIT YANG FOTOIN"
  },
  {
    file: "IMG_0636.JPG",
    caption: "INI ADIT YANG FOTOIN EHEHEHEHE"
  },
  {
    file: "presets (2).jpg",
    caption: "Mecik kecil, mukanya serius tapi tetap gemes."
  },
  {
    file: "presets (4).jpg",
    caption: "Senyum masa kecil buat timeline ulang tahun."
  }
];

const photoGrid = document.querySelector("#photoGrid");
const assetBasePath = "assets/";

photos.forEach((photo) => {
  const card = document.createElement("figure");
  card.className = "photo-card";

  const image = document.createElement("img");
  image.src = assetBasePath + encodeURIComponent(photo.file);
  image.alt = photo.caption;
  image.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.textContent = photo.caption;

  image.addEventListener("error", () => {
    card.classList.add("photo-card-missing");
    const placeholder = document.createElement("div");
    placeholder.className = "photo-placeholder";
    placeholder.textContent = "Preview not available";
    image.replaceWith(placeholder);
    caption.textContent = `${photo.caption} (${photo.file})`;
  });

  card.append(image, caption);
  photoGrid.append(card);
});

const openingCard = document.querySelector("#openingCard");
const openWebsiteButton = document.querySelector("#openWebsiteButton");
const birthdaySong = document.querySelector("#birthdaySong");

birthdaySong.volume = 0.89;

openWebsiteButton.addEventListener("click", async () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }

  openingCard.classList.add("is-hidden");

  try {
    await birthdaySong.play();
  } catch (error) {
    console.info("Music playback is waiting for browser permission.", error);
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".wish-section, .memories-section, .letter-section, .photo-card").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
