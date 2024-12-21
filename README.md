# ABlankCanvas
Art gallery

Project Structure
The project is structured as follows:

index.html: The main gallery page of the website displaying artwork.
dogs.html: A separate page showcasing images of dogs.
style.css: The general styles for the website including layout, typography, and design for the gallery.
dogs-style.css: The specific styles for the dogs gallery page.
script.js: JavaScript for dynamically rendering the artwork gallery, including a full-screen modal for viewing detailed artwork.
dogs-script.js: JavaScript for the dynamic grid layout and image display on the dogs page.
Features
Gallery Page (index.html)
Displays a gallery of artworks with each piece consisting of an image, title, medium, dimensions, year, and description.
Allows users to click on any image to view it in full-screen mode with additional details (e.g., medium, dimensions, and description).
The gallery items are dynamically generated from an array of artwork data in script.js.
Full-screen modal allows users to zoom into images and view them in detail.
Dogs Page (dogs.html)
Displays a gallery of dog images in a responsive grid layout.
Uses dogs-style.css for a clean and organized layout with hover effects.
Modal
A full-screen modal is displayed when a user clicks on an artwork image, showing a larger version of the image along with more detailed information.
The modal can be closed by clicking on the close button or anywhere outside the modal.
Setup
Prerequisites
To run this project, you will need a basic understanding of HTML, CSS, and JavaScript.

Installation
Download or clone the repository.
Open index.html in a web browser to view the art gallery.
Open dogs.html in a web browser to view the dog gallery.
No additional setup is required to view the gallery locally.

Customization
Adding New Artworks: To add new artworks, you can modify the galleryData array in script.js. Each object in the array should contain the image file name, title, medium, dimensions, year, and description.

Dog Images: To update the dog images on the dogs.html page, simply add new images to the images/ folder and modify the HTML to include the new images.

Files and Directories
index.html: Main gallery page.
dogs.html: Dog gallery page.
style.css: General website styles.
dogs-style.css: Specific styles for the dogs page.
script.js: JavaScript for dynamic gallery functionality.
dogs-script.js: JavaScript for the dogs page grid layout.
images/: Directory containing all image files.
License
This project is a personal portfolio, please don't use it.
