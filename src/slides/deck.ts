import { Slide } from './slide';
import { Renderer } from './renderer';
import { routeHelpers } from './router';

class Deck {
    private currentSlideIndex: number;
    private currentFragmentId: number;

    constructor(private element: HTMLElement, private slides: Slide[], private renderer: Renderer) {
        this.currentSlideIndex = 0;
        this.currentFragmentId = 0;
    }

    show(slideId: string) {

    }

    goToNext() {
        console.log('go to next');
        let curInd = this.currentSlideIndex;
        if (curInd < this.slides.length - 1) {
            let nextSlideId = this.slides[curInd + 1].id;
            routeHelpers.goTo(nextSlideId);
            this.currentSlideIndex = curInd + 1;
        }
    }
    goToPrev() {
        console.log('go to prev');
        let curInd = this.currentSlideIndex;
        if (curInd > 0) {
            let nextSlideId = this.slides[curInd - 1].id;
            routeHelpers.goTo(nextSlideId);
            this.currentSlideIndex = curInd - 1;
        }
    }
    preview() {

    }
};


export { Deck };