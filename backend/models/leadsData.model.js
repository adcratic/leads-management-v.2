const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const leadsDataSchema = new Schema({
    leadName: {type: String, required: [true, "Please enter the leads's name!"]},
    mobileNumber:{type: Number, required:[true, "enter the number"], minlength:[10, "Enter 10-digit number"]},
    email: {type: String},
    firstVisit:{type:Date},
    followUpDate: {type: Date},
    requirenment:{type:String, required:true},
    quickNote:{type: String, required:true}
},{
    timestamps: true,
})

const Leadsdata = mongoose.model('Leadsdata', leadsDataSchema);

module.exports = Leadsdata;