document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal("#logo", {
    origin: "left",
    delay: 200,
    distance: "50px",
  });
  ScrollReveal().reveal("#arrow_drawn", {
    origin: "bottom",
    delay: 900,
    distance: "200px",
  });
  ScrollReveal().reveal(".content h1", {
    origin: "right",
    delay: 200,
    distance: "100px",
  });
  ScrollReveal().reveal(".content h2", {
    origin: "left",
    delay: 500,
    distance: "100px",
  });
  ScrollReveal().reveal(".content p", {
    origin: "bottom",
    delay: 700,
    distance: "200px",
  });

  ScrollReveal().reveal(".services-container img", {
    origin: "left",
    distance: "50px",
    delay: 200,
  });
  ScrollReveal().reveal(".services-container img", {
    origin: "left",
    distance: "100px",
    delay: 200,
  });
  ScrollReveal().reveal("#3", {
    origin: "bottom",
    distance: "100px",
    delay: 300,
  });
  ScrollReveal().reveal(".services-container img", {
    origin: "right",
    distance: "100px",
    delay: 400,
  });
  ScrollReveal().reveal(".services-container img", {
    origin: "right",
    distance: "100px",
    delay: 400,
  });
});

const ourExercises = document.querySelector("#services");
const btn = document.querySelector("#servicesBTN");

btn.addEventListener("click", () => {
  ourExercises.scrollIntoView({ behavior: "smooth" });
});
