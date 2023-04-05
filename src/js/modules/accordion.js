export default class Accordion {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
    }

    showItem() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                if (trigger.parentElement.nextElementSibling.style.display !== 'block') {
                    trigger.parentElement.nextElementSibling.style.display = 'block';
                } else {
                    trigger.parentElement.nextElementSibling.style.display = 'none';
                }
            });
        }); 
    }

    init() {
        this.showItem();
    }
}