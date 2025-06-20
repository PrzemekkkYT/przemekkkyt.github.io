window.addEventListener("DOMContentLoaded", () => {
  // language initialization
  initializeLanguage();

  // createLanguageSelector();

  // Handlebars initialization
  document.querySelectorAll("[handlebars]").forEach(function (element) {
    applyHandlebars(element);
  });

  // Hide language selector on click outside
  document.addEventListener("mouseup", function (e) {
    const languageSelector = document.querySelector("#language-selector");
    const languageMenu = document.querySelector("#language-menu");
    if (languageSelector && !languageSelector.contains(e.target)) {
      languageMenu.classList.add("hidden");
    }
    const mainMenu = document.querySelector("#main-menu");
    const menuToggleButton = document.querySelector("#burger-menu");
    if (
      mainMenu &&
      !mainMenu.contains(e.target) &&
      !menuToggleButton.contains(e.target)
    ) {
      mainMenu.classList.add("mobile-nav-hidden");
      mainMenu.classList.remove("mobile-nav-visible");
    }
  });
});
