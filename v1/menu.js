const menu_buttons = document.querySelectorAll('div.menu_selector');
const templates = document.querySelector('#template_holder');
const mainSection = document.querySelector('section');
const menu = document.querySelector('menu');

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const switchSelected = (obj) => {
    if (!obj.classList.contains("selected")) {
        for (var i = 0; i < menu.children.length; i++) {
            child = menu.children[i];
            if (child != obj) {
                templates.appendChild(document.querySelector(`#${child.id}_content`))
                child.classList.remove("selected");
            } else {
                obj.classList.add("selected");
                mainSection.appendChild(document.querySelector(`#${obj.id}_content`));
                current_panel = i;
                console.log(child.id, i);
            }
        }
    }
}

// swipe on mobile
let touch_startX = 0;
let touch_endX = 0;
let touch_startY = 0;
let touch_endY = 0;
let min_swipe_distance = window.screen.width/5;

let current_panel = 0;
    
function checkSwipeDirection() {
//   if (touchendX < touchstartX) alert('swiped left!');
//   if (touchendX > touchstartX) alert('swiped right!');
    if (Math.abs(touch_endY-touch_startY) < window.screen.height/5) {
        if (touch_endX-touch_startX < -min_swipe_distance) current_panel+=1;
        if (touch_endX-touch_startX > min_swipe_distance) current_panel-=1;
        switchSelected(menu.children[clamp(current_panel, 0, 3)]);
    }
    
}

document.addEventListener('touchstart', e => {
  touch_startX = e.changedTouches[0].screenX;
  touch_startY = e.changedTouches[0].screenY;
})

document.addEventListener('touchend', e => {
  touch_endX = e.changedTouches[0].screenX;
  touch_endY = e.changedTouches[0].screenY;
  checkSwipeDirection();
})