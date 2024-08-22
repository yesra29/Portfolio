function toggleMenu() {
    const menuLinks = document.querySelector("#hamburger-nav .menu-links");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    
    menuLinks.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
  }
  