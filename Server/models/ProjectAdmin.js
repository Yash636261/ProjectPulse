const mongoose = require("mongoose");

const projectAdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    idNumber:{
        type: String,
        required: true,
    }
})

const Admin = mongoose.model("Admin",projectAdminSchema);

module.exports = Admin;