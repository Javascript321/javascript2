document.addEventListener("DOMContentLoaded", function() {
  // Get references to the featured image, thumbnails, and figcaption
  var featuredImage = document.querySelector("#gallery figure img");
  var thumbnails = document.querySelectorAll("#gallery ul li img");
  var figcaption = document.querySelector("#gallery figure figcaption");

  // Array of gallery items
  var galleryItems = [
    {
      thumbnail: "images/flowers-pink-small.jpg",
      fullSize: "images/flowers-pink-large.jpg",
      title: "Pink Flowers"
    },
    {
      thumbnail: "images/flowers-purple-small.jpg",
      fullSize: "images/flowers-purple-large.jpg",
      title: "Purple Flowers"
    },
    {
      thumbnail: "images/flowers-red-small.jpg",
      fullSize: "images/flowers-red-large.jpg",
      title: "Red Flowers"
    },
    {
      thumbnail: "images/flowers-white-small.jpg",
      fullSize: "images/flowers-white-large.jpg",
      title: "White Flowers"
    },
    {
      thumbnail: "images/flowers-yellow-small.jpg",
      fullSize: "images/flowers-yellow-large.jpg",
      title: "Yellow Flowers"
    }
  ];

  // Function to update the featured image and title
  function updateFeaturedImage(thumbnail) {
    featuredImage.src = thumbnail.dataset.fullSize;
    featuredImage.alt = thumbnail.alt;
    figcaption.textContent = thumbnail.alt;
  }

  // Function to handle thumbnail click event
  function handleThumbnailClick(e) {
    var thumbnail = e.target;
    updateFeaturedImage(thumbnail);
  }

  // Add click event listener to each thumbnail
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", handleThumbnailClick);
  });
});



