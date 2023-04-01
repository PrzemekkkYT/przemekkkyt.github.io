const menu_buttons = document.querySelectorAll('div.menu_selector');
const templates = document.querySelector('#template_holder');
const mainSection = document.querySelector('section');

const switch_selected = (obj) => {
    if (!obj.classList.contains("selected")) {
        menu_buttons.forEach(element => {
            templates.appendChild(document.querySelector(`#${element.id}_content`))
            element.classList.remove("selected");
        });
        obj.classList.add("selected");
        mainSection.appendChild(document.querySelector(`#${obj.id}_content`));
    }
}