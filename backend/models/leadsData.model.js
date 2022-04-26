const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const leadsDataSchema = new Schema({
    leadName: {type: String, required: true},
    mobileNumber:{type: Number, required:true},
    email: {type: String, required:true},
    firstVisit:{type:Date},
    requirenment:{type:String, required:true},
    quickNote:{type: String, required:true}
},{
    timestamps: true,
})

const Leadsdata = mongoose.model('Leadsdata', leadsDataSchema);

module.exports = Leadsdata;