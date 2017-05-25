"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var state_manager_1 = require("../state_manager");
var state_1 = require("../state");
var FormIsValidTestAction = (function () {
    function FormIsValidTestAction(isValid) {
        this.isValid = isValid;
    }
    FormIsValidTestAction.prototype.run = function (oldState) {
        if (this.isValid !== oldState.formIsValid) {
            return Object.assign({}, oldState, {
                formIsValid: this.isValid
            });
        }
        else {
            return oldState;
        }
    };
    return FormIsValidTestAction;
}());
describe('State Manager', function () {
    describe('Initialization', function () {
        it('Should create an instance of a state manager', function () {
            var sm = new state_manager_1.StateManager();
            expect(sm instanceof state_manager_1.StateManager).toBe(true);
        });
    });
    describe('Working with actions', function () {
        var sm, spy;
        beforeEach(function () {
            spy = jasmine.createSpy('Subscriber', function (newState) {
            });
            sm = new state_manager_1.StateManager();
            sm.subscribe(spy);
        });
        it('Should not execute subscriber until the action is dispatched', function () {
            expect(spy).not.toHaveBeenCalled();
        });
        it('Should not execute subscriber when the action is dispatched but the state is not changed', function () {
            sm.dispatch(new FormIsValidTestAction(state_1.defaultState.formIsValid));
            expect(spy).not.toHaveBeenCalled();
        });
        it('Should execute subscriver when the action is dispatched and the state is changed', function () {
            sm.dispatch(new FormIsValidTestAction(!state_1.defaultState.formIsValid));
            expect(spy).toHaveBeenCalled();
        });
        it('Subscriber should be executed with a new state', function () {
            sm.dispatch(new FormIsValidTestAction(!state_1.defaultState.formIsValid));
            var callArgs = spy.calls.mostRecent().args;
            expect(callArgs[0]).not.toBe(state_1.defaultState);
            expect(callArgs[0].formIsValid).toBe(!state_1.defaultState.formIsValid);
        });
        it('Should execute both subscribers', function () {
            var spy2 = jasmine.createSpy('Subscriber2');
            sm.subscribe(spy2);
            sm.dispatch(new FormIsValidTestAction(!state_1.defaultState.formIsValid));
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy2).toHaveBeenCalledTimes(1);
        });
    });
});
