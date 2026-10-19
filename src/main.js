const sections = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => section.classList.add("in"));
}

const card = document.querySelector(".peek-card");
const button = card.querySelector("button");
const opened = card.querySelector(".peek-open");

button.addEventListener("click", () => {
  const isOpen = card.dataset.state === "open";
  card.dataset.state = isOpen ? "closed" : "open";
  button.setAttribute("aria-expanded", String(!isOpen));
  button.textContent = isOpen ? "Take a peek" : "Close the box";
  if (!isOpen) {
    setTimeout(() => opened.focus({ preventScroll: true }), 800);
  }
});
