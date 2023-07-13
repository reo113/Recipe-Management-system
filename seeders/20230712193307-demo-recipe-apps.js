'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recipe_apps",
      [
        {
          title: "Baked Beans",
          description: "they are baked beans",
          ingredients: "beans, baked",
          instructions: "bake the beans",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Banana Pie",
          description: "they are banana pies",
          ingredients: "bananas, pie",
          instructions: "bake the bananas into a pie",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Grapes",
          description: "they are grapes",
          ingredients: "grapes",
          instructions: "eat the grapes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Fried Chicken",
          description: "they are fried chickens",
          ingredients: "chickens, fried",
          instructions: "fry the chickens",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("recipe_apps", null, {});
  }
};
