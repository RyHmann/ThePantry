import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let RemovequotesPipe = class RemovequotesPipe {
    transform(text) {
        let revisedString = text.replace(/^"|$"/g, "");
        return revisedString;
    }
};
RemovequotesPipe = __decorate([
    Pipe({
        name: 'removeQuotes'
    })
], RemovequotesPipe);
export { RemovequotesPipe };
//# sourceMappingURL=removequotes.pipe.js.map