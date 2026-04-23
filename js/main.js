(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealItems.length > 0) {
    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("in");
    });
  }

  const yearEls = document.querySelectorAll("[data-year]");
  const year = new Date().getFullYear();
  yearEls.forEach(function (el) {
    el.textContent = year;
  });
})();
