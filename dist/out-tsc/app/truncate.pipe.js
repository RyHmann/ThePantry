import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let TruncatePipe = class TruncatePipe {
    transform(text, charLimit = 50, ellipsis = '...') {
        let truncateIndex = text.substr(0, charLimit).lastIndexOf(" ");
        return text.length > charLimit ? text.substr(0, truncateIndex) + ellipsis : text;
    }
};
TruncatePipe = __decorate([
    Pipe({ name: 'truncate' })
], TruncatePipe);
export { TruncatePipe };
//# sourceMappingURL=truncate.pipe.js.map