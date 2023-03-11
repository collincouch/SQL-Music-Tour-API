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
      "bands",
      [
        {
          name: "Guns & Roses",
          genre: "Rock",
          available_start_time: new Date(2023, 3, 12, 8, 0, 0, 0),
          end_time: new Date(2023, 3, 12, 9, 0, 0, 0),
        },
        {
          name: "Rolling Stones",
          genre: "Rock",
          available_start_time: new Date(2023, 3, 12, 7, 0, 0, 0),
          end_time: new Date(2023, 3, 12, 8, 0, 0, 0),
        },
        {
          name: "Avicii",
          genre: "EDM",
          available_start_time: new Date(2023, 3, 12, 9, 0, 0, 0),
          end_time: new Date(2023, 3, 12, 10, 0, 0, 0),
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

    await queryInterface.bulkDelete("bands", null, {});
  },
};
