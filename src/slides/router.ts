import { Observable, Observer } from 'rxjs';

interface Route {
    slideId: string;
    fragmentId: string;
};

interface RouteHelpers {
    goTo: (slideId: string) => void
}

let getHash = (url: string) => {
    let hashIndex = url.indexOf('#');
    return hashIndex > -1 ? url.slice(hashIndex + 1) : '';
}

class Router {
    private routes: Observable<Route>;

    constructor() {
        this.routes = Observable.fromEvent(window, 'hashchange').map((ev: HashChangeEvent) => {
            return {
                slideId: getHash(ev.newURL)
            };
        }).startWith({
            slideId: getHash(window.location.href)
        });
    }

    getRoutes() {
        return this.routes;
    }
}

let routeHelpers: RouteHelpers = {
    goTo(slideId: string) {
        console.log(`Go to slide ${slideId}`);
        window.location.hash = slideId;
     }
}

export { Router, Route, routeHelpers, RouteHelpers };