"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var checkUser_middleware_1 = require("../../middleware/checkUser.middleware");
var user_controller_1 = __importDefault(require("./user.controller"));
var userReg_validate_1 = require("./userReg.validate");
var user = new user_controller_1.default();
exports.UserRoutes = express_1.Router();
// declaring the routes for users
exports.UserRoutes.route('/register')
    .all()
    .post(celebrate_1.celebrate({ body: userReg_validate_1.ValidateUserSchema }), checkUser_middleware_1.checkUserExist, user.createNewModel)
    .get(user.getAllModellInformation);
// login routes
exports.UserRoutes.route('/login').post(user.loginUser);
