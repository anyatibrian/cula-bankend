"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
exports.ValidateUserSchema = celebrate_1.Joi.object().keys({
    saccoName: celebrate_1.Joi.string()
        .min(5)
        .required(),
    email: celebrate_1.Joi.string().required(),
    pin: celebrate_1.Joi.string()
        .min(4)
        .max(4)
        .required(),
    contactNo: celebrate_1.Joi.string()
        .min(10)
        .max(13)
        .required(),
});
