"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logging_1 = __importDefault(require("../config/Logging"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var NAMESPACE = 'App';
app.use(express_1.default.json());
app.use('/', function (req, res, next) {
    try {
        Logging_1.default.infoMessage(NAMESPACE, req.url + " : " + req.method, req.ip);
        res.status(200).send({
            success: true,
            message: 'Welcome to Node and Typescript structure!',
            about: 'Made in Node with ❤️ TypeScript.'
        });
    }
    catch (error) {
        Logging_1.default.errorMessage(NAMESPACE, req.url + " : " + req.method);
        res.status(500).send({
            success: false
        });
    }
});
exports.default = app;
//# sourceMappingURL=App.js.map