import { Observable } from 'rxjs';

class Keyboard {
    private keys: Observable<string>;

    constructor() {
        this.keys = Observable.fromEvent(window, 'keydown').map((ev: KeyboardEvent) => {
            return ev.code;
        });
    }

    getKeys() {
        return this.keys;
    }
    getNextKeys() {
        return this.getKeys().filter((key: string) => {
            return key === 'ArrowDown' || key === 'Space';
        });
    }
    getPrevKeys() {
        return this.getKeys().filter((key: string) => {
            return key === 'ArrowUp';
        });
    }
    getPreviewKeys() {
        return this.getKeys().filter((key: string) => {
            return key === 'Escape';
        });
    }
}

export { Keyboard };