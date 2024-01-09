"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menubar_1 = require("menubar");
var path = require("path");
var mb = (0, menubar_1.menubar)({
    index: "file://".concat(__dirname, "/dist/index.html"),
    icon: path.join(process.cwd(), "assets", "icon-dark.png"),
});
mb.on("ready", function () {
    console.log("app is ready");
});
