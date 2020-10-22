"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("./middlewares");
var app = express_1.default();
var port = 3000;
app.use(express_1.default.json());
app.get('/', [
    function (req, res) {
        res.send('Hola mundo');
    },
]);
app.use(middlewares_1.errorHandler);
app.listen(port, function () {
    console.log("Avantica TechDay escuchando en  http://localhost:" + port);
});
