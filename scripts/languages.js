function setLanguage(lang) {
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
  location.reload();
}

function fetchLanguageData(lang) {
  return fetch(`../languages/${lang}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching language data:", error);
    });
}

function updateContent(langData) {
  document.querySelectorAll("[lang-key]").forEach((element) => {
    const key = element.getAttribute("lang-key");
    if (key in langData) {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement
      ) {
        element.placeholder = langData[key];
      } else {
        element.innerHTML = langData[key];
      }
      let useHandlebars = element.getAttribute("handlebars");
      if (useHandlebars !== null) {
        applyHandlebars(element);
      }
    }
  });
}

function initializeLanguage() {
  const lang = localStorage.getItem("language") || "pl";
  document.documentElement.lang = lang;
  const langData = fetchLanguageData(lang)
    .then((langData) => {
      if (langData) {
        updateContent(langData);
      }
    })
    .catch((error) => {
      console.error("Error loading language data:", error);
    });
}
