export default class Slider {
    constructor({container = null,
        btns = null,
        next = null,
        prev = null,
        nextSize = null,
        prevSize = null,
        activeClass = 'fadeIn',
        animate = false,
        autoplay = false } = {}) {
        try {this.container = document.querySelector(container);} catch(e){}
        try {this.slides = this.container.children;} catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.prevSize = document.querySelectorAll(prevSize);
        this.nextSize = document.querySelectorAll(nextSize);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}