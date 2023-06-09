const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-out");
      } else {
        entry.target.classList.remove("slide-out");
      }
    });
  },
  { threshold: 0.5 }
);
const hiddenElements = document.querySelectorAll(".slide-in");
hiddenElements.forEach((element) => observer.observe(element));
