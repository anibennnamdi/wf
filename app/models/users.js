var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
     email: {
         type: String,
         unique: true,
         //required: true,
         lowercase: true
     },
     bannerUrl:{
        type: String
     },
     dpUrl:{
        type: String
     },
     rating:{
        type: Number
     },
     location:{
        type: String
     },
     dateCreated:{
        type: Date
     },
     dateModified:{
        type: Date
     },
     skillSet:{type: Schema.Types.ObjectId, ref: 'UserSkillSet'},
     jobHistory:{
        type: String
     },
     jobRequestHistory:{
        type: String
     },
    
    
    
    
    

    

    /*  {
        skillcatRef:{type: Schema.Types.ObjectId, ref: 'SkillCategory'},
        skill:{type: Schema.Types.ObjectId, ref: 'SkillSetup'}
    
    } */

});

module.exports = mongoose.model('Users', UserSchema)//mongoose.model('collectionName',SchemaName)


