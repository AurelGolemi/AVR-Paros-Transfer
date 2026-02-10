const languageSelect = document.getElementById("languages");

languageSelect.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  const currentPath = window.location.pathname;

  let newPath;
  
  if (selectedLang === "English") {
    // Add /en/ if not already there
    if (currentPath.includes("/en/")) {
      newPath = currentPath; // Already in English
    } else {
      // Insert /en/ after the domain
      newPath = "/en" + currentPath;
    }
  } else if (selectedLang === "Greek") {
    // Remove /en/ if present
    newPath = currentPath.replace("/en/", "/");
  }

  window.location.href = newPath;
  localStorage.setItem("preferredLanguage", selectedLang);
});

// Set the dropdown to match current language on page load
window.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const isEnglish = currentPath.includes("/en/");

  const languageSelect = document.getElementById("languages");
  languageSelect.value = isEnglish ? "English" : "Greek";

  // Handle email link for Gmail on desktop/mobile
  const emailLink = document.querySelector(".email-link");
  if (emailLink) {
    emailLink.addEventListener("click", (e) => {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );

      if (!isMobile) {
        e.preventDefault();
        // Open Gmail compose on desktop
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=avrparostransfer@gmail.com",
          "_blank",
        );
      }
      // On mobile, let the default mailto handler work (opens Gmail app or email client)
    });
  }

  // Handle mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }
});

// Scroll to top button
const upButton = document.getElementById("upButton");

if (upButton) {
  upButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// FAQ Accordion
window.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
      // Close other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });
});

