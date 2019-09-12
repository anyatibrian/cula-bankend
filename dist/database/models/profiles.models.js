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
exports.ProfileInit = function (sequelize) {
    var attributes = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        saccoId: {
            allowNull: false,
            type: Sequelize.UUID,
        },
        accountNo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        profileImage: {
            allowNull: true,
            type: Sequelize.STRING,
        },
        district: {
            allowNull: true,
            type: Sequelize.STRING,
        },
        county: {
            allowNull: true,
            type: Sequelize.STRING,
        },
        village: {
            allowNull: true,
            type: Sequelize.STRING,
        },
        country: {
            allowNull: true,
            type: Sequelize.STRING,
        },
        division: {
            allowNull: true,
            type: Sequelize.STRING,
        },
        subcounty: {
            allowNull: true,
            type: Sequelize.STRING,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: true,
            type: Sequelize.DATE,
        },
    };
    var profile = sequelize.define('SaccoProfiles', attributes, {
        tableName: 'saccoprofiles',
    });
    profile.associate = function (model) {
        profile.belongsTo(model.User, {
            as: 'sacco',
            foreignKey: 'saccoId',
            onDelete: 'CASCADE',
        });
    };
    return profile;
};
