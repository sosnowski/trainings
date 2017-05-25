"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var user_action_1 = require("../actions/user.action");
var state_1 = require("../state");
describe('User Actions', function () {
    describe('UserLoginAction', function () {
        var stateWithLogin;
        beforeEach(function () {
            stateWithLogin = Object.assign({}, state_1.defaultState, {
                userLogin: 'test'
            });
        });
        it('Should not modify the state if the login is not changed', function () {
            var action = new user_action_1.UserLoginAction('test');
            var newState = action.run(stateWithLogin);
            expect(newState).toBe(stateWithLogin);
        });
        it('Should return a new state with a new login', function () {
            var action = new user_action_1.UserLoginAction('new_login');
            var newState = action.run(state_1.defaultState);
            expect(newState).not.toBe(state_1.defaultState);
            expect(newState.userLogin).toBe('new_login');
        });
    });
    describe('UserLogoutAction', function () {
        var stateWithLogin;
        beforeEach(function () {
            stateWithLogin = Object.assign({}, state_1.defaultState, {
                userLogin: 'test'
            });
        });
        it('Should not modify the state if there is no login', function () {
            var action = new user_action_1.UserLogoutAction();
            var newState = action.run(state_1.defaultState);
            expect(newState).toBe(state_1.defaultState);
        });
        it('Should return a new state without a login', function () {
            var action = new user_action_1.UserLogoutAction();
            var newState = action.run(stateWithLogin);
            expect(newState).not.toBe(stateWithLogin);
            expect(newState.userLogin).toBe(undefined);
        });
    });
});
