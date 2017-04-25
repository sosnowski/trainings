import { Deck } from './deck';
import { Slide } from './slide';
import { Fragment } from './fragment';

class Renderer {
    private stepsElement: HTMLElement;

    constructor(private deckElement: HTMLElement, slides: Slide[]) {
        this.stepsElement = this.renderSteps(slides);
        setTimeout(() => {this.applyInitStyles(slides);}, 1000);
    }

    setActiveSlide(activeSlide: Slide, prevSlide: Slide) {
        console.log('Set active slide');
        activeSlide.element.classList.add('active');
        activeSlide.element.classList.remove('prev');
        activeSlide.element.classList.remove('next');
        if (prevSlide !== null) {
            let prevClass = activeSlide.order > prevSlide.order ? 'prev' : 'next';
            prevSlide.element.classList.remove('active');
            prevSlide.element.classList.add(prevClass);
        }
        this.setActiveStep(activeSlide, prevSlide);
    }

    setActiveStep(activeSlide: Slide, prevSlide: Slide) {
        this.stepsElement.children[activeSlide.order].classList.add('active');
        if (prevSlide !== null) {
            this.stepsElement.children[prevSlide.order].classList.remove('active');
        }
    }

    setActiveFragment(fragment: Fragment) {

    }

    private renderSteps(slides: Slide[]) {
         let steps = document.createElement('div');
         steps.id = "steps";
         slides.map((slide) => {
             let element = document.createElement('a');
             let icon = document.createElement('i');

             element.setAttribute('href', '#' + slide.id);
             element.appendChild(icon);
             return element;
         }).forEach((stepElement: HTMLElement) => {
             steps.appendChild(stepElement);
         });

         this.deckElement.appendChild(steps);
         return steps;
    }

    private renderNavigation() {

    }

    private applyInitStyles(slides: Slide[]) {
        let loader = <HTMLElement>document.querySelector('#loader');
        loader.style.display = 'none';
    }


}

export { Renderer };