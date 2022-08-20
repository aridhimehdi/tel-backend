const mongoose = require("mongoose");

const SimSchema = mongoose.Schema(
    {
        matricule: {
            type: String,
            required: true,
        },
        cin: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        tel: {
            type: String,
            required: true,
        },
        address:String
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Sim", SimSchema);
