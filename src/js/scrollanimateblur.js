const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation-unblur");
      } else {
        entry.target.classList.remove("scroll-animation-unblur");
      }
    });
  },
  { threshold: 0.5 }
);
const hiddenElements = document.querySelectorAll(".scroll-animation-blur");
hiddenElements.forEach((element) => observer.observe(element));
