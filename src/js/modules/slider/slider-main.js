import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns, nextSize, prevSize) {
        super(btns, nextSize, prevSize);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        } 

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch(e) {}


        Array.from(this.slides).forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('fadeIn');
            slide.classList.add('animated', 'fadeOut');
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.remove('fadeOut');
        this.slides[this.slideIndex - 1].classList.add('animated', 'fadeIn');
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            if (!btn.closest('.module__info-controls')) {
                btn.addEventListener('click', () => {
                    this.plusSlides(1);
                });
            }
            
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.nextSize.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlides(1);
            });
            
        });

        this.prevSize.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlides(-1);                
            });
        });
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(e) {}
    
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        } 
    }

}