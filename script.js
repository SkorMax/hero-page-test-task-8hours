function handleScroll() {
  const headerClasses = document.querySelector("header");
  const scrollY = window.scrollY;

  headerClasses.classList.remove("header-down", "header-up", "header-static");

  if (scrollY > 350) {
    headerClasses.classList.add("header-down");
  } else if (scrollY <= 350 && scrollY > 140) {
    headerClasses.classList.add("header-up");
  } else {
    headerClasses.classList.add("header-static");
  }
}

ScrollReveal().reveal(".main-title", { duration: 500 });
ScrollReveal().reveal(".second-title");
ScrollReveal().reveal(".about-description");
ScrollReveal().reveal(".about-photo");
ScrollReveal().reveal("h2");
ScrollReveal().reveal(".cleints");
ScrollReveal().reveal(".service", {
  interval: 200,
  delay: 100,
  duration: 1200,
});

window.addEventListener("scroll", handleScroll);
