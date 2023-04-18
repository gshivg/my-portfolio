const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-out-reverse");
      } else {
        entry.target.classList.remove("slide-out-reverse");
      }
    });
  },
  { threshold: 0.5 }
);
const hiddenElements = document.querySelectorAll(".slide-in-reverse");
hiddenElements.forEach((element) => observer.observe(element));
