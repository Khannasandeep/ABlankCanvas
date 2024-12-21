document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const images = document.querySelectorAll(".grid img");

  const adjustGrid = () => {
    const screenWidth = window.innerWidth;
    let columnCount;
    let rowGap = 20; // Vertical gap between rows (default)

    // Dynamically set column count based on screen width
    if (screenWidth <= 768) {
      columnCount = 1; // Single column for mobile
    } else {
      columnCount = 3; // Default 3 columns for desktop
    }

    // Reset styles for grid responsiveness
    grid.style.position = "relative"; // Ensure proper positioning of grid container
    images.forEach((img) => {
      img.style.position = ""; // Reset absolute positioning
      img.style.top = "";
      img.style.left = "";
      img.style.width = "";
    });

    const heights = Array(columnCount).fill(0); // Track cumulative height of each column

    images.forEach((img, index) => {
      const column = index % columnCount; // Determine the column of the image
      const topOffset = heights[column]; // Get cumulative height of the column

      // Apply dynamic styles for consistent spacing
      img.style.position = "absolute";
      img.style.top = `${topOffset}px`;
      img.style.left = `${(100 / columnCount) * column}%`;
      img.style.width = `calc(${100 / columnCount}% - ${rowGap}px)`;

      // Update column height by adding the image height + row gap
      const imageHeight = img.offsetHeight;
      heights[column] += imageHeight + rowGap;
    });

    // Adjust grid container height based on the tallest column
    grid.style.height = `${Math.max(...heights)}px`;
  };

  // Adjust grid after images have loaded
  images.forEach((img) => {
    img.onload = adjustGrid;
  });

  // Call adjustGrid on window resize
  window.addEventListener("resize", adjustGrid);

  // Initial call to adjustGrid
  adjustGrid();
});

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const images = document.querySelectorAll(".grid img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("close-btn");

  // Function to open modal with the clicked image
  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex"; // Show the modal
      modalImg.src = img.src; // Set the modal image to the clicked image
      document.body.style.overflow = "hidden"; // Prevent scrolling in the background
    });
  });

  // Close the modal when close button is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Hide the modal
    document.body.style.overflow = ""; // Restore scrolling
  });

  // Close the modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"; // Hide the modal
      document.body.style.overflow = ""; // Restore scrolling
    }
  });

  // Adjust Grid Layout
  const adjustGrid = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      grid.style.gridTemplateColumns = "1fr"; // Single column for mobile
    } else {
      grid.style.gridTemplateColumns = "repeat(3, 1fr)"; // Three columns for desktop
    }
  };

  // Call adjustGrid on window resize
  window.addEventListener("resize", adjustGrid);

  // Initial call to adjustGrid
  adjustGrid();
});

// JavaScript to toggle the menu on hamburger click
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});