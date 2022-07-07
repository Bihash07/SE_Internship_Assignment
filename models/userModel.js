const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please enter your firstname!"],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, "Please enter your lastname!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Please enter your DOB!"],
        trim: true
    },
    mobile: {
        type: Number,
        required: [true, "Please enter your Phone No!"],
        trim: true
    },
    status: {
        type: Boolean,
        required: [true, "Please enter your lastname!"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    accountType: {
        type: String,
        required: [true, "Please enter ACC type!"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)