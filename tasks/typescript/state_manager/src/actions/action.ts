import { State } from '../state';

interface Action {
    run(oldState: State): State
}

export { Action };