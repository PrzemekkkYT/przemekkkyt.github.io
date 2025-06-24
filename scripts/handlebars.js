function applyHandlebars(element) {
  element.innerHTML = element.innerHTML.replace(
    "{{year}}",
    new Date().getFullYear()
  );
  element.innerHTML = element.innerHTML.replace(
    "{{last_update}}",
    document.lastModified
  );
  element.innerHTML = element.innerHTML.replace("{{version}}", "v1.3.6");
}

function handlebars(element, handlebar, value) {
  if (element && handlebar && value) {
    element.textContent = element.textContent.replace(
      `{{${handlebar}}}`,
      value
    );
  } else {
    console.error("Invalid parameters provided to handlebars function.");
  }
}
