// Array of image URLs that you want to use as backgrounds
const imageUrls = [
    'url(https://images3.alphacoders.com/132/1322308.jpeg)',
    'url(https://images5.alphacoders.com/532/532559.jpg)',
    'url(https://images3.alphacoders.com/131/1317592.jpeg)',
    'url(https://images5.alphacoders.com/131/1317019.png)',
    'url(https://images5.alphacoders.com/605/605588.jpg)',
    
    // Add more image URLs as needed
];

function getRandomImage() {
    // Get a random index between 0 and the number of images in the array
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

function changeBackgroundImage() {
    const randomImage = getRandomImage();
    const element = document.querySelector('.random-background');
    element.style.backgroundImage = randomImage;
}

// Change the background image every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 10000);

// Change the background image immediately when the page loads
changeBackgroundImage();
