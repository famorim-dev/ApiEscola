'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', { 
      id_usuario: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      nome_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_usuario: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password_usuario: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at_usuario: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at_usuario: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('usuarios');
  }
};
