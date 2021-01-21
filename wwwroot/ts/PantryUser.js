"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PantryUser = void 0;
var PantryUser = /** @class */ (function () {
    function PantryUser(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visits = 0;
    }
    PantryUser.prototype.showWName = function (name) {
        alert(this.name);
    };
    Object.defineProperty(PantryUser.prototype, "name", {
        get: function () {
            return this.ourName;
        },
        set: function (val) {
            this.ourName = val;
        },
        enumerable: false,
        configurable: true
    });
    return PantryUser;
}());
exports.PantryUser = PantryUser;
//# sourceMappingURL=PantryUser.js.map