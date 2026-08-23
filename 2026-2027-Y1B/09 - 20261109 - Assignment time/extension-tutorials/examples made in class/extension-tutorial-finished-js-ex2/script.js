


// example 2, create a click function that hides elements when you click on it


const textCollection = document.querySelectorAll("h1, h2, h3, h4, h5, h6, li, p, span, figcaption");
const imgCollection = document.querySelectorAll("img, figure, a, a *");

// Loop through all text elements
textCollection.forEach(text => {
  text.addEventListener("click", () => {
      text.style.opacity = 0; // Hide paragraph on click
  });
});

// Loop through all image elements
imgCollection.forEach(img => {
  
  // for each element, on click, do stuff
  img.addEventListener("click", function(event) {

    // cancels the default click behaviour (if click on a link)
    event.preventDefault();

    // DO STUFF
    // In this example, the opacity goes down 10% every time you click on an image

    // First, ensure opacity is set to 1 initially (if not already set)
    if (img.style.opacity === "") {
      img.style.opacity = 1;
    }

    // Then, declare a variable of the current opacity of the image
    let currentOpacity = parseFloat(img.style.opacity);

    // Then, decrease the variable value of opacity by 0.1, while ensuring it doesn't go below 0
    currentOpacity -= 0.1;

    // Finally, set the new opacity with our variable, ensuring it doesn't go below 0
    img.style.opacity = Math.max(0, currentOpacity);

  });

});


