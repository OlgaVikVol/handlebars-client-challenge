"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "TODOLISTs",
      [
        {
          name: "Купить хлеб",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Погулять с собакой",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Позвонить подруге",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Бассейн",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Купить цветы",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Купить торт",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Навестить маму",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("TODOLISTs", null, {});
  },
};
