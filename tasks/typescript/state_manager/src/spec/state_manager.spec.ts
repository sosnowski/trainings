import 'jasmine';
import { StateManager } from '../state_manager';
import { State, defaultState } from '../state';
import { Action } from '../actions/action';

class FormIsValidTestAction implements Action {

    constructor(private isValid: boolean) {}

    public run(oldState: State): State {
        if (this.isValid !== oldState.formIsValid) {
            return Object.assign({}, oldState, {
                formIsValid: this.isValid
            });
        } else {
            return oldState;
        }
    }
}

describe('State Manager', () => {
    describe('Initialization', () => {
        it('Should create an instance of a state manager', () => {
            let sm = new StateManager();
            expect(sm instanceof StateManager).toBe(true);
        });
    });

    describe('Working with actions', () => {
        let sm: StateManager, spy: jasmine.Spy;
        beforeEach(() => {
            spy = jasmine.createSpy('Subscriber', (newState: State) => {

            });
            sm = new StateManager();
            sm.subscribe(spy);
        });

        it('Should not execute subscriber until the action is dispatched', () => {
            expect(spy).not.toHaveBeenCalled();
        });

        it('Should not execute subscriber when the action is dispatched but the state is not changed', () => {
            sm.dispatch(new FormIsValidTestAction(defaultState.formIsValid));
            expect(spy).not.toHaveBeenCalled();
        });

        it('Should execute subscriver when the action is dispatched and the state is changed', () => {
            sm.dispatch(new FormIsValidTestAction(!defaultState.formIsValid));
            expect(spy).toHaveBeenCalled();
        });

        it('Subscriber should be executed with a new state', () => {
            sm.dispatch(new FormIsValidTestAction(!defaultState.formIsValid));
            let callArgs = spy.calls.mostRecent().args;
            expect(callArgs[0]).not.toBe(defaultState);
            expect(callArgs[0].formIsValid).toBe(!defaultState.formIsValid);
        });

        it('Should execute both subscribers', () => {
            let spy2 = jasmine.createSpy('Subscriber2');
            sm.subscribe(spy2);

            sm.dispatch(new FormIsValidTestAction(!defaultState.formIsValid));

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy2).toHaveBeenCalledTimes(1);
        });
    });

});