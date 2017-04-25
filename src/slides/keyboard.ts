import { Observable } from 'rxjs';

enum KeyCodes {
    Space = 32,
    ArrowDown = 40,
    ArrowRight = 39,
    ArrowUp = 38,
    ArrowLeft = 37,
    Esc = 27
};

class Keyboard {
    private keys: Observable<number>;

    constructor() {
        this.keys = Observable.fromEvent(window, 'keydown').map((ev: KeyboardEvent): number => {
            return ev.keyCode;
        });
    }

    getKeys() {
        return this.keys;
    }
    getNextKeys() {
        return this.getKeys().filter((key: number) => {
            return [KeyCodes.ArrowDown, KeyCodes.ArrowRight, KeyCodes.Space].indexOf(key) > -1;
        });
    }
    getPrevKeys() {
        return this.getKeys().filter((key: number) => {
            return [KeyCodes.ArrowUp, KeyCodes.ArrowLeft].indexOf(key) > -1;
        });
    }
    getPreviewKeys() {
        return this.getKeys().filter((key: number) => {
            return key === KeyCodes.Esc;
        });
    }
}

export { Keyboard };