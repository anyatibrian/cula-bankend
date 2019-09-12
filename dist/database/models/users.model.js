"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = __importStar(require("sequelize"));
exports.userInit = function (sequelize) {
    var attribute = {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        saccoName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        contactNo: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        pin: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        role: {
            type: Sequelize.STRING,
            defaultValue: 'user',
            allowNull: false,
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Date.now,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Date.now,
        },
    };
    var users = sequelize.define('Users', attribute, {
        tableName: 'users',
    });
    users.associate = function (model) {
        users.hasOne(model.SaccoProfile, {
            foreignKey: 'saccoId',
            as: 'saccoProfile',
            onDelete: 'CASCADE',
        });
    };
    return users;
};
