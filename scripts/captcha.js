var grecaptcha_widget_id; // Zmienna do przechowywania ID widgetu reCAPTCHA

// Funkcja wywoływana po załadowaniu skryptu reCAPTCHA
var onloadCallback = function () {
  grecaptcha_widget_id = grecaptcha.render("submitButton", {
    // Renderuj na elemencie 'submitButton'
    sitekey: "6Lf5TVMrAAAAALFh7QJ8eStwxumJ1lxc45qqPR_d", // Twój klucz witryny
    size: "invisible", // To jest kluczowe dla niewidocznej reCAPTCHA
    callback: onSubmit, // Funkcja wywoływana po pomyślnej weryfikacji
    badge: "inline", // Domyślnie badge jest w prawym dolnym rogu. 'inline' pozwala na stylizację
  });
};

// Funkcja wywoływana, gdy reCAPTCHA pomyślnie zweryfikuje użytkownika
function onSubmit(token) {
  let form = document.getElementById("contact-form");
  if (form.checkValidity()) {
    // Sprawdź, czy formularz jest poprawny
    grecaptcha.execute(grecaptcha_widget_id);
    form.submit(); // Wyślij formularz
  } else {
    grecaptcha.reset(grecaptcha_widget_id); // Resetuj reCAPTCHA, jeśli formularz jest niepoprawny
    alert("Please fill out all required fields."); // Powiadom użytkownika o błędzie
  }
}
