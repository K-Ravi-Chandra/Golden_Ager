const mongoose = require('mongoose');
const crypto = require('crypto');

const ProfileSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "Senior Citizen Profile Schema : Name not provided"]   ,
    },
    age : {
        type : String,
        required : [true, "Senior Citizen Profile Schema : Age not provided"]   ,
    },
    phone : {
        type : String,
        required : [true, "Senior Citizen Profile Schema : Phone number  not provided"]   ,
    },
    address : {
        type : String,
        required : [true, "Senior Citizen Profile Schema : Address  not provided"]   ,
    }

})

const SeniorCitizenSchema = new mongoose.Schema({

    email: {
        type : String,
        required : [true, "Senior Citizen  Schema : Please provide a valid SeniorCitizen email address"]   ,
        unique : true
    },

    profile : {
        type : ProfileSchema,
        required : [true, "Senior Citizen Schema :   Profile details are incomplete "]
    },

    volunter : {
        type : String,
        required : [true, "Senior Citizen Schema :  Volunter name not given"]
    },
    doctor : {
        type : String,
    },
    familyMemberToken : String
});

SeniorCitizenSchema.methods.getFamilyMemberToken =  function(){
    const Token = crypto.randomBytes(20).toString("hex");
    
    this.familyMemberToken  = crypto.createHash("sha256").update(Token).digest("hex");
    
    return Token ;
}

const SeniorCitizen = mongoose.model("SeniorCitizen", SeniorCitizenSchema);

module.exports = SeniorCitizen;