document.addEventListener("DOMContentLoaded", () => {
  let topReveal = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 200,
  });
  topReveal.reveal(".workout", { delay: 100 });
  topReveal.reveal(".workout:nth-child(2)", { delay: 100 });
  topReveal.reveal(".workout:nth-child(3)", { delay: 100 });
  topReveal.reveal(".workout:nth-child(4)", { delay: 200 });
  topReveal.reveal(".workout:nth-child(5)", { delay: 300 });
//   topReveal.reveal(".workout:nth-child(6)", { delay: 300 });
//   topReveal.reveal(".workout:nth-child(7)", { delay: 300 });
//   topReveal.reveal(".workout:nth-child(8)", { delay: 300 });
});
