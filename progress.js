// document.addEventListener("DOMContentLoaded", () => {
//   let topReveal = ScrollReveal({
//     origin: "top",
//     distance: "50px",
//     duration: 200,
//   });
//   let rightReveal = ScrollReveal({
//     origin: "right",
//     distance: "100px",
//     duration: 400,
//     delay: 100,
//   });
//   let bottomReveal = ScrollReveal({
//     origin: "bottom",
//     distance: "20px",
//     duration: 400,
//   });
//   let leftReveal = ScrollReveal({
//     origin: "left",
//     distance: "100px",
//     duration: 400,
//   });

//   topReveal.reveal(".progress-track");
//   topReveal.reveal(".1", {delay: 100});
//   topReveal.reveal(".2", {delay: 100});
//   topReveal.reveal(".3", {delay: 100});
//   leftReveal.reveal(".4", {delay: 200});
//   bottomReveal.reveal(".5", {delay: 300});
//   bottomReveal.reveal(".6", {delay: 300});
//   bottomReveal.reveal(".7", {delay: 300});
// });


document.addEventListener("DOMContentLoaded", () => {
  let topReveal = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 200,
  });
  let rightReveal = ScrollReveal({
    origin: "right",
    distance: "100px",
    duration: 400,
    delay: 100,
  });
  let bottomReveal = ScrollReveal({
    origin: "bottom",
    distance: "20px",
    duration: 400,
  });
  let leftReveal = ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 400,
  });

  leftReveal.reveal(".progress-track", { delay: 100 });
  topReveal.reveal(".progress-section:nth-child(2)", { delay: 100 });
  topReveal.reveal(".progress-section:nth-child(3)", { delay: 100 });
  leftReveal.reveal(".progress-section:nth-child(4)", { delay: 200 });
  bottomReveal.reveal(".progress-section:nth-child(5)", { delay: 300 });
  bottomReveal.reveal(".progress-section:nth-child(6)", { delay: 300 });
  bottomReveal.reveal(".progress-section:nth-child(7)", { delay: 300 });
  bottomReveal.reveal(".progress-section:nth-child(8)", { delay: 300 });
});