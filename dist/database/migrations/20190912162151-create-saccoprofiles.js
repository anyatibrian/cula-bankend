'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('saccoprofiles', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            saccoId: {
                allowNull: false,
                type: Sequelize.UUID,
            },
            profileImage: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            accountNo: {
                type: Sequelize.STRING,
                allowNull: false,
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
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('saccoprofiles');
    },
};
