const { Model } = require('objection');

class CartItem extends Model {
    static tableName = 'cartItems'
}

module.exports = CartItem