import { slides } from './slides/slides';
import { Router } from './slides/router';
import { Keyboard } from './slides/keyboard';

window.addEventListener('DOMContentLoaded', () => {
    let deck = slides.initByDom(window.document.body);
    slides.bindToKeys(new Keyboard(), deck);
    slides.bindToRouter(new Router(), deck);
});