'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('alunos', { 
      id_aluno: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      nome_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade_aluno:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      peso_aluno:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      altura_aluno:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      email_aluno: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password_aluno: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at_aluno: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at_aluno: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('alunos');
  }
};
