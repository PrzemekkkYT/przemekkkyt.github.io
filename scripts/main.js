window.addEventListener("DOMContentLoaded", () => {
  // language initialization
  initializeLanguage();

  // Handlebars initialization
  document.querySelectorAll("[handlebars]").forEach(function (element) {
    applyHandlebars(element);
  });
});
