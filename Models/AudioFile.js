const { Model } = require('objection');

class AudioFile extends Model {
    static tableName = 'audioFiles'
}

module.exports = AudioFile