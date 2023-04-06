const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        _id:{
            type: ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        event:{
            type: EventSchema,
            required: false
        },
        friends: {
            type: Array,
            required: false
        },
    }
);

const User = mongoose.model('User', UserSchema);