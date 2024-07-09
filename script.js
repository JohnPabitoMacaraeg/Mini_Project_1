document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      // Prevent default action of anchor tag
      event.preventDefault();

      // Remove 'active' class from all nav links
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      // Add 'active' class to the clicked nav link
      navLink.classList.add("active");
    });
  });
});
