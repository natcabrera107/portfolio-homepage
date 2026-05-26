const externalLinks = document.querySelectorAll('a[href^="http"]');
const navToggle = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector("#site-navigation");

externalLinks.forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

navToggle?.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

  navToggle.setAttribute("aria-expanded", String(!isExpanded));
  navMenu?.classList.toggle("show");
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href")?.replace("./", "");

  if (linkPage === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});
