"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("./state");
var StateManager = (function () {
    function StateManager(initialState) {
        this.subscribers = [];
        this.state = initialState || state_1.defaultState;
    }
    StateManager.prototype.dispatch = function (action) {
        var newState = action.run(this.state);
        if (newState !== this.state) {
            newState.updated = new Date();
            this.notifySubscribers(newState);
            this.state = newState;
        }
    };
    StateManager.prototype.subscribe = function (callback) {
        this.subscribers.push(callback);
    };
    StateManager.prototype.notifySubscribers = function (newState) {
        this.subscribers.forEach(function (subscriber) {
            subscriber(newState);
        });
    };
    return StateManager;
}());
exports.StateManager = StateManager;
