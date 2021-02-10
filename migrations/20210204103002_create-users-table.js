
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments()
        users.string('firstName')
        users.string('lastName')
        users.string('username')
        users.string('email')
        users.string('password')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
