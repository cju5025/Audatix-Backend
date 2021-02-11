
exports.up = function(knex) {
    return knex.schema.createTable('audioFiles', file => {
        file.increments()
        file.string('name')
        file.string('location')
        file.string('category')
        file.string('subCategory')
        file.integer('user_id')
        file.integer('price')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('audioFiles')
};
