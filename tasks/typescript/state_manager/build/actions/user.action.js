"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserLoginAction = (function () {
    function UserLoginAction(login) {
        this.login = login;
    }
    UserLoginAction.prototype.run = function (oldState) {
        if (oldState.userLogin !== this.login) {
            return Object.assign({}, oldState, {
                userLogin: this.login
            });
        }
        else {
            return oldState;
        }
    };
    return UserLoginAction;
}());
exports.UserLoginAction = UserLoginAction;
var UserLogoutAction = (function () {
    function UserLogoutAction() {
    }
    UserLogoutAction.prototype.run = function (oldState) {
        if (oldState.userLogin !== undefined) {
            return Object.assign({}, oldState, {
                userLogin: undefined
            });
        }
        else {
            return oldState;
        }
    };
    return UserLogoutAction;
}());
exports.UserLogoutAction = UserLogoutAction;
