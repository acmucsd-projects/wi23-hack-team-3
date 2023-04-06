const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
    {
        startTime: {
            type: String,
            required: true,
        },
        endTime: {
            type: String,
            required: true,
        },
    }
);

module.exports = EventSchema