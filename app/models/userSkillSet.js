var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSkillSetSchema = new Schema({

    /*User ID - nullable
DateAdded
Phone number
Skill
Status - Accepter skill or Rejected or pending
 */
    phone: {
        type: String,
        unique: true,
        required: true
    },
     
     dateAdded:{
        type: Date
     },
     dateModified:{
        type: Date
     },
     skill:{
        type: String,
        required: true
     },
     status:{
        type: Boolean
     },
     userID:{
        type: String
     }
    
    
    
    

    

    /*  {
        skillcatRef:{type: Schema.Types.ObjectId, ref: 'SkillCategory'},
        skill:{type: Schema.Types.ObjectId, ref: 'SkillSetup'}
    
    } */

});

module.exports = mongoose.model('UserSkillSet', UserSkillSetSchema)//mongoose.model('collectionName',SchemaName)


