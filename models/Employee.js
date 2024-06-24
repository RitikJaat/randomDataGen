const { default: mongoose } = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name : String,
    salary  : Number,
    Language : String,
    City : String,
    isManagar : Boolean
})

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee