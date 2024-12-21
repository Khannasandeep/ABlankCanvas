// Gallery data
const galleryData = [
    {
        image: "images/1.png",
        title: "Artwork 1",
        medium: "Oil on Canvas",
        dimensions: "24 x 36 inches",
        year: "2022",
        description: "A representation of emotions through bold strokes."
    },
    {
        image: "images/2.png",
        title: "Artwork 2",
        medium: "Acrylic on Canvas",
        dimensions: "30 x 40 inches",
        year: "2023",
        description: "Explores urban life and abstract themes."
    },
    {
        image: "images/3.png",
        title: "Artwork 3",
        medium: "Watercolor on Paper",
        dimensions: "18 x 24 inches",
        year: "2021",
        description: "A delicate mix of nature and surrealism."
    },
    {
        image: "images/4.png",
        title: "Artwork 4",
        medium: "Charcoal on Paper",
        dimensions: "20 x 30 inches",
        year: "2020",
        description: "A monochrome exploration of textures and contrasts."
    }
];

// Dynamically generate gallery
const gallery = document.getElementById("gallery");

galleryData.forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    if (index % 2 !== 0) {
        galleryItem.classList.add("reverse");
    }

    galleryItem.innerHTML = `
        <div class="gallery-image">
            <img src="${item.image}" alt="Artwork" class="gallery-image" data-index="${index}">
        </div>
        <div class="gallery-description">
            <h2>${item.title}</h2>
            <p><strong>Medium:</strong> ${item.medium}</p>
            <p><strong>Dimensions:</strong> ${item.dimensions}</p>
            <p><strong>Year:</strong> ${item.year}</p>
            <p>${item.description}</p>
        </div>
    `;
    gallery.appendChild(galleryItem);
});

// Full-Screen Modal
const modal = document.getElementById("full-view-modal");
const fullViewImage = document.getElementById("full-view-image");
const paintingTitle = document.getElementById("painting-title");
const paintingInfo = document.getElementById("painting-info");
const paintingDescription = document.getElementById("painting-description");
const closeModal = document.querySelector(".close-btn");

document.querySelectorAll(".gallery-image img").forEach((image) => {
    image.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        const artwork = galleryData[index];

        fullViewImage.src = artwork.image;
        paintingTitle.textContent = artwork.title;
        paintingInfo.textContent = `Medium: ${artwork.medium} | Dimensions: ${artwork.dimensions} | Year: ${artwork.year}`;
        paintingDescription.textContent = artwork.description;

        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// JavaScript to toggle the menu on hamburger click
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});




