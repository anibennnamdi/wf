var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillCategorySchema = new Schema({
    //skill_id: { type: Schema.Types.ObjectId, ref: 'SkillSetup' },
    skillCat: {
        type: String,
        required: true,
        unique: true,
        set: function (value) {
            return value.toUpperCase()
        }
    },
    dateCreated: { type: Date, default: Date.now() + 3600000 },
    edited: { type: Date, default: Date.now() + 3600000 }
});

skillCategorySchema.pre('save', function (next) {
    var user = this;
    user.skillCat.toUpperCase();
    return next();

});

module.exports = mongoose.model('SkillCategory', skillCategorySchema)//mongoose.model('collectionName',SchemaName)


