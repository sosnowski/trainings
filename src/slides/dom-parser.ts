import { Deck } from './deck';
import { Slide } from './slide';
import { Fragment } from './fragment';
import { Renderer } from './renderer';
import { Router } from './router';

let createSlide = (element: HTMLElement, fragments: Fragment[], index: number) : Slide => {
    return {
        element: element,
        fragments: fragments,
        id: `slide-${index}`,
        config: {}
    };
}

let createFragment = (element: HTMLElement) => {
    return {
        element: element,
        id: 0,
        config: {}
    };
}

let parseSlide = (element: HTMLElement, index: number): Slide => {
    let fragments = Array.prototype.map.call(element.querySelectorAll('.fragment'), (element) => {
        return createFragment(element);
    });
    return createSlide(element, fragments, index);
}


let parseDeck = (container: HTMLElement): Deck => {
    let slides = Array.prototype.reduce.call(container.querySelectorAll('section'), (slides, element, index) => {
        return [...slides, parseSlide(element, index)];
    }, []);
    console.log(slides);
    return new Deck(container, slides, new Renderer(container));
}

export { parseDeck };