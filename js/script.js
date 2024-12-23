// Gallery data
const galleryData = [
    {
        image: "images/1.png",
        title: "Hachi",
        medium: "Acrylic on Canvas",
        dimensions: "24 x 36 inches",
        year: "2022",
        description: "I keep myself busy with things to do, but everytime I pause I still think of you"
    },
    {
        image: "images/2.jpeg",
        title: "Bridge to Serenity",
        medium: "Acrylic on Canvas",
        dimensions: "30 x 40 inches",
        year: "2023",
        description: "This painting features a stunning landscape split across two canvases, depicting a scenic view of the Golden Gate Bridge at sunset.The iconic red bridge stands prominently, connecting the composition and evoking a sense of calm and grandeur."
    },
    {
        image: "images/3.jpeg",
        title: "Nature's Harmony",
        medium: "Acrylic on Canvas",
        dimensions: "18 x 24 inches",
        year: "2024",
        description: "The painting represents harmony and balance in nature, with the overlapping leaves symbolizing growth, connection, and simplicity. The golden accents add a touch of elegance, reflecting the beauty and value found in natural elements"
    },
    {
        image: "images/4.jpeg",
        title: "The Garden Go Shop",
        medium: "Watercolor On Textured Paper",
        dimensions: "20 x 30 inches",
        year: "2024",
        description: "It conveys a charming, small-town vibe, focusing on lush greenery, warm tones, and a cheerful, inviting atmosphere."
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




