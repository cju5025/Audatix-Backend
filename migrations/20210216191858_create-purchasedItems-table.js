
exports.up = function(knex) {
    return knex.schema.createTable('purchasedItems', purchasedItems =>{
        purchasedItems.increments()
        purchasedItems.integer('userID')
        purchasedItems.integer('itemID')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('purchasedItems')
};
