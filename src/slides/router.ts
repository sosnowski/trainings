import { Observable } from 'rxjs';

interface Route {
    slideId: string;
    fragmentId: string;
};

interface RouteHelpers {
    goTo: (slideId: string) => void
}

class Router {
    private routes: Observable<Route>;

    constructor() {
        this.routes = Observable.fromEvent(window, 'hashchange').map((ev) => {
            console.log(`Route info:`);
            console.log(ev);
            return {
                slideId: 'sss',
                fragmentId: 'sss'
            };
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