const mongoose = require('mongoose');

const FamilyMemberSchema = new mongoose.Schema({
    username :  {
        type : String,
        required : [true, "FamilyMemberSchema : Name not provided"]   ,
    },
    email : {
        type : String,
        required : [true, "FamilyMemberSchema : Email not provided"]   ,
    },
    phone : {
        type : String,
        required : [true, "FamilyMemberSchema  : Phone not provided"]   ,
    },
    senior : {
        type : String,
        required : [true, "FamilyMemberSchema : Hospital not provided"]   ,
    },
    volunter :  {
        type : String,
        required : [true, "FamilyMemberSchema : volunter email not provided"]   ,
    },
})

const FamilyMember = mongoose.model("FamilyMember", FamilyMemberSchema);

module.exports = FamilyMember;
