const { Model } = require('objection');

class PurchasedItem extends Model {
    static tableName = 'purchasedItems'
}

module.exports = PurchasedItem