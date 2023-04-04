import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        Array.from(this.slides).forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });
        
        // Array.from(this.slides).forEach((slide) => {
        //     if (this.slides[0].tagName !== 'BUTTON') {
        //         this.slides[0].classList.add(this.activeClass);
        //     } else this.slides[0].classList.remove(this.activeClass); 
        // });
         this.slides[0].classList.add(this.activeClass);
        
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    moveButtonsToEnd() {
        Array.from(this.slides).forEach((slide) => {
            if (slide.tagName === 'BUTTON') {
                slide.classList.remove(this.activeClass);
                this.container.append(slide);
            } 
        });
    }

    nextSlide() {
        this.container.append(this.slides[0]);
        this.decorizeSlides();
        this.moveButtonsToEnd(); 
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide());

        this.prev.addEventListener('click', () => {
            let active = this.slides[0];
            this.container.insertBefore(active, this.slides[this.slides.length - 1]);
            this.decorizeSlides();
            this.moveButtonsToEnd();
        });
    }

    activateAnimation() {
        const play = setInterval( () => {
            this.nextSlide();
        }, 3000);  

        Array.from(this.slides).forEach(slide => {
            slide.addEventListener('mouseenter', () => {
                clearInterval(play);
            });

            slide.addEventListener('mouseleave', () => {
                this.activateAnimation();
            });
        });
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides();

        if (this.autoplay) {
            this.activateAnimation();
        }
    }
} 