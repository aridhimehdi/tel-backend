const mongoose = require("mongoose");

const SimSchema = mongoose.Schema(
    {
        matricule: {
            type: Number,
            required: [true,"matv"],
        },
        cin: {
            type: Number,
            required: [true,"cinv"],
        },
        fullName: {
            type: String,
            required: [true,'fnV'],
        },
        tel: {
            type: Number,
            required: [true,"telv"],
        },
        address:{
            type:String,
            required:[true,"addv"],
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Sim", SimSchema);
