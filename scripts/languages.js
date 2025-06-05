const LANGUAGES = ["pl", "en"];

function setLanguage(lang) {
  if (!LANGUAGES.includes(lang)) {
    alert("Unsupported language: " + lang);
    console.error("Unsupported language:" + lang);
    return;
  }
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
  document.querySelector("#language-button").innerHTML =
    "<img src='../images/flags/" +
    lang +
    ".png' alt='" +
    lang +
    "'><span>▼</span>";
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

function createLanguageSelector() {
  const selector = document.querySelector("#language-menu");
  if (!selector) return;
  LANGUAGES.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang;
    option.innerHTML =
      "<img src='../images/flags/" + lang + ".svg' alt='" + lang + "'>";
    if (lang === localStorage.getItem("language")) {
      option.selected = true;
    }
    selector.appendChild(option);
  });
}

function toggleLanguageMenu() {
  const selector = document.querySelector("#language-menu");
  if (selector) {
    selector.classList.toggle("hidden");
  } else {
    console.error("Language selector not found.");
  }
}
