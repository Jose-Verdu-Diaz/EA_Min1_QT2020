"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const event_controller_1 = __importDefault(require("../controllers/event.controller"));
const router = express_1.Router();
router.get('/', event_controller_1.default.getEvents);
router.post('/new', event_controller_1.default.newEvent);
module.exports = router;
