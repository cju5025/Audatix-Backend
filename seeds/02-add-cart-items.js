
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cartItems').del()
    .then(function () {
      // Inserts seed entries
      return knex('cartItems').insert([
      ]);
    });
};
