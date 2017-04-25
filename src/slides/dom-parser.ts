import { Deck } from './deck';
import { Slide } from './slide';
import { Fragment } from './fragment';
import { Renderer } from './renderer';
import { Router } from './router';

let createSlide = (element: HTMLElement, fragments: Fragment[], index: number) : Slide => {
    let slideElementId = `slide-${index}`;
    if (element.id) {
        slideElementId = element.id;
    } else {
        element.id = slideElementId;
    }
    return {
        element: element,
        fragments: fragments,
        id: slideElementId,
        config: {},
        order: index
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
    let slides = Array.prototype.reduce.call(container.querySelectorAll('article'), (slides, element, index) => {
        return [...slides, parseSlide(element, index)];
    }, []);
    return new Deck(container, slides, new Renderer(container, slides));
}

export { parseDeck };