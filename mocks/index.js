"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var feedback_1 = require("../domain/feedback");
var app = (0, express_1["default"])();
var feedback = [];
app.get('/api/users', function (req, res) {
    res.send([{ email: 'eins@arbi.de' }, { email: 'zwei@arbi.de' }]);
});
app.get('/api/feedback', function (req, res) {
    res.send(feedback);
});
app.post('/api/feedback', function (req, res) {
    var _a = req.body, author = _a.author, recipient = _a.recipient, text = _a.text;
    var randomId = (Math.random() + 1).toString(36).substring(7);
    feedback.push(new feedback_1.Feedback(randomId, author, recipient, text));
    res.status(200).send();
});
app.listen(3001);
