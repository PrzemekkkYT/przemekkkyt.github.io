const menu_buttons = document.querySelectorAll('button.link');
const cards = document.querySelectorAll('div.card');

var currentCard = 0;

cards.forEach(card => {
    card.addEventListener('animationend', (anim) => {
        // console.log(`${anim.target.id} | ${anim.animationName} has ended`);
        if (anim.animationName=='card-hide') {
            card.classList.remove('card-hide');
            card.classList.add('hidden');
        } else if (anim.animationName=='card-hide-reverse') {
            card.classList.remove('card-hide-reverse');
        }

        menu_buttons.forEach(button => {
            button.disabled = false;
        });
        menu_buttons[currentCard].disabled = true;
    });
});

function switch_card(cardName) {
    menu_buttons.forEach(button => {
        button.disabled = true;
    });
    var selectedCard = 0;
    switch (cardName) {
        case "omnie":
            selectedCard = 0;
            break;
        case "projekty":
            selectedCard = 1;
            break;
        case "nwm":
            selectedCard = 2;
            break;
        case "kontakt":
            selectedCard = 3;
            break;
        default:
            console.error(`${cardName} is not a content card!`);
            break;
    }
    cards.forEach((card,index) => {
        if (index != selectedCard && index != currentCard) card.classList.add('hidden');
    });
    
    if (selectedCard < currentCard) {
        cards[currentCard].classList.add('card-hide');
    } else {
        cards[selectedCard].classList.add('card-hide-reverse');
    }
    cards[selectedCard].classList.remove('hidden');
    
    currentCard = selectedCard;
}