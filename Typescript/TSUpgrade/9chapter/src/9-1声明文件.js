"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mounted = void 0;
function mounted(isStartup) {
    if (isStartup) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}
exports.mounted = mounted;
mounted(1);
