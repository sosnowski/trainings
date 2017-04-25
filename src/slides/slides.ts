import 'prismjs';
import 'prismjs/components/prism-typescript';

import { Observable } from 'rxjs';
import { Router, Route } from './router';
import { Keyboard } from './keyboard';
import { Deck } from './deck';
import { parseDeck } from './dom-parser';

interface Slides {
    initByDom: (container: HTMLElement) => Deck;
    // initByConfig: () => Deck;
    bindToRouter: (routes: Router, deck: Deck) => void;
    bindToKeys: (keys: Keyboard, deck: Deck) => void;
}

let slides: Slides = {
    initByDom(container: HTMLElement): Deck {
        return parseDeck(container);
    },
    bindToRouter(router: Router, deck: Deck) {
        router.getRoutes().subscribe((route: Route) => {
            deck.show(route.slideId);
        });
    },
    bindToKeys(keys: Keyboard, deck: Deck) {
        keys.getNextKeys().subscribe(deck.goToNext.bind(deck));
        keys.getPrevKeys().subscribe(deck.goToPrev.bind(deck));
        keys.getPreviewKeys().subscribe(deck.preview.bind(deck));
    }
};

export { slides };