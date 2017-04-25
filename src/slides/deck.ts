import { Slide } from './slide';
import { Renderer } from './renderer';
import { routeHelpers } from './router';

class Deck {
    private currentSlideIndex: number;
    private currentFragmentId: number;

    constructor(private element: HTMLElement, private slides: Slide[], private renderer: Renderer) {
        this.currentSlideIndex = -1;
        this.currentFragmentId = -1;
    }

    show(slideId: string) {
        slideId = slideId || this.slides[0].id;
        console.log(`Show: ${slideId}`)
        let slideIndex = this.slides.findIndex((slide) => { return slide.id === slideId; });
        if (slideIndex === -1) {
            throw new Error(`Slide ${slideId} not found!`);
        }
        this.renderer.setActiveSlide(this.slides[slideIndex], this.currentSlideIndex > -1 ? this.slides[this.currentSlideIndex] : null);
        this.currentSlideIndex = slideIndex;
    }

    goToNext() {
        console.log('go to next');
        let curInd = this.currentSlideIndex;
        if (curInd < this.slides.length - 1) {
            let nextSlideId = this.slides[curInd + 1].id;
            routeHelpers.goTo(nextSlideId);
        }
    }
    goToPrev() {
        console.log('go to prev');
        let curInd = this.currentSlideIndex;
        if (curInd > 0) {
            let nextSlideId = this.slides[curInd - 1].id;
            routeHelpers.goTo(nextSlideId);
        }
    }
    preview() {

    }
};


export { Deck };