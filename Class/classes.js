"use strict";
exports.__esModule = true;
exports.Account = exports.User = void 0;
var User = /** @class */ (function () {
    function User(key, amount) {
        this.amount = 10000;
        this.key = key;
        this.amount = amount;
    }
    return User;
}());
exports.User = User;
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());
exports.Account = Account;
