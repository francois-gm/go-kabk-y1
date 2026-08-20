

// always declare your variables first

const btnDarkMode = document.querySelector(".btn-dark-mode");

// then declare your event listeners

btnDarkMode.addEventListener("click", function () {
  document.body.classList.toggle('dark-mode');
});


