"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var profiles_models_1 = require("./profiles.models");
var users_model_1 = require("./users.model");
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config.json')[env];
var sequelize = new sequelize_1.Sequelize(process.env.DATABASE_CONNECTION_URI || config);
var db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize: sequelize,
    User: users_model_1.userInit(sequelize),
    SaccoProfile: profiles_models_1.ProfileInit(sequelize),
};
Object.values(db).forEach(function (model) {
    if (model.associate) {
        model.associate(db);
    }
});
exports.default = db;
