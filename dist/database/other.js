"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __importDefault(require("./models"));
exports.dropSequelizeMeta = models_1.default.sequelize.query('DROP TABLE IF EXISTS "SequelizeMeta"', { raw: true });
exports.dropSequelizeMeta
    .then(function () {
    process.exit(0);
})
    .catch(function () {
    process.exit(0);
});
