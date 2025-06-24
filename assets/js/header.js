window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
  
    if (window.scrollY > 0) {
      header.classList.add("bg-white", "shadow-md", "text-black");
      header.classList.remove("bg-transparent", "text-white");
    } else {
      header.classList.remove("bg-white", "shadow-md", "text-black");
      header.classList.add("bg-transparent", "text-white");
    }
  });
  
   const navbar = document.getElementById("navbar");
    const brand = document.getElementById("brand");
    const navLinks = document.querySelectorAll(".nav-link");
    const projectLink = document.querySelector(".projects-link");
    const arrow = document.querySelector(".down-arrow");
    const icons = document.getElementById("icon-set");
    const heartIcon = document.getElementById("heart-icon");

    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY > 0;

      navbar.classList.toggle("bg-white", scrolled);
      navbar.classList.toggle("text-black", scrolled);
      navbar.classList.toggle("text-white", !scrolled);
      navbar.classList.toggle("shadow-md", scrolled);

      brand.classList.toggle("text-black", scrolled);
      brand.classList.toggle("text-white", !scrolled);

      icons.classList.toggle("text-black", scrolled);
      icons.classList.toggle("text-white", !scrolled);

      navLinks.forEach((link) => {
        link.classList.toggle("text-black", scrolled);
        link.classList.toggle("text-white", !scrolled);
        link.classList.toggle("hover:bg-gray-200/60", scrolled);
        link.classList.toggle("hover:bg-white/20", !scrolled);
      });

      projectLink.classList.toggle("text-black", scrolled);
      projectLink.classList.toggle("text-white", !scrolled);
      projectLink.classList.toggle("border-gray-300", scrolled);
      projectLink.classList.toggle("border-white", !scrolled);
      projectLink.classList.toggle("bg-gray-100", scrolled);
      projectLink.classList.toggle("hover:bg-gray-200", scrolled);

      arrow.classList.toggle("text-gray-400", scrolled);
      arrow.classList.toggle("text-white", !scrolled);

      if (heartIcon) {
        heartIcon.setAttribute("fill", scrolled ? "black" : "none");
      }
    });

    function toggleDropdown() {
      const dropdown = document.getElementById("projects-dropdown");
      dropdown.classList.toggle("hidden");
    }

    function togglePopup(event) {
      event.stopPropagation();
      const popup = document.getElementById("popup");
      popup.classList.toggle("hidden");
    }

    document.addEventListener("click", function (e) {
      const popup = document.getElementById("popup");
      const button = document.querySelector(
        'button[onclick="togglePopup(event)"]'
      );
      if (!popup.contains(e.target) && e.target !== button) {
        popup.classList.add("hidden");
      }
    });


    