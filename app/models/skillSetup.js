var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SkillSetupSchema = new Schema({
    skillcat_id: { type: Schema.Types.ObjectId, ref: 'SkillCategory', required: true },
    skillName: {
        type: String, required: true,
        set: function (value) {
            return value.toUpperCase()
        }
    },
    skillDesc: { type: String, required: false },
    skillDateCreated: { type: Date, default: Date.now() + 3600000 },
    edited: { type: Date, default: Date.now() + 3600000 }

});
module.exports = mongoose.model('SkillSetup', SkillSetupSchema)//mongoose.model('collectionName',SchemaName)


