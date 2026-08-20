



// (step 5, JS), example 1, insertAdjacentHTML

/*
const target = document.querySelector("h1");

if(target){

  target.insertAdjacentHTML("afterend", "<p id='special-extension-subtitle'><a href='https://www.google.com/search?q=can+too+much+internet+cause+fun'>Read why</a> too much internet can alter your mood.</p>");

}
*/






// (step 6, JS), create a click function that hides elements when you click on it

/*
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
  
  img.addEventListener("click", function() {

    // Ensure opacity is set to 1 initially (if not already set)
    if (img.style.opacity === "") {
      img.style.opacity = 1;
    }

    let currentOpacity = parseFloat(img.style.opacity);

    // Decrease opacity by 0.1, ensuring it doesn't go below 0
    currentOpacity -= 0.1;

    // Set the new opacity, ensuring it doesn't go below 0
    img.style.opacity = Math.max(0, currentOpacity);

  });

});

// also switch click events for mousemove and mouseover and (document.addEventListener) scroll?
*/


