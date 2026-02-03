const languageSelect = document.getElementById("languages");

languageSelect.addEventListener("change", (e) => {
  const selectedLang = e.target.value;

  if (selectedLang === "English") {
    // Navigate to English version
    window.location.href = "./en/index.html";
  } else if (selectedLang === "Greek") {
    // Navigate back to Greek version (root)
    window.location.href = "../index.html";
  }

  // Save preference
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
});
