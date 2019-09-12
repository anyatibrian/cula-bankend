'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            saccoName: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            contactNo: {
                type: Sequelize.STRING,
            },
            pin: {
                type: Sequelize.STRING,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
            },
            role: {
                type: Sequelize.STRING,
                defaultValue: 'user',
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
        return queryInterface.dropTable('users');
    },
};
