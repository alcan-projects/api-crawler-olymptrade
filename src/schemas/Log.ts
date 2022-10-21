import { Schema, model } from 'mongoose';
import { LogScore } from '../interfaces/logs';

const LogSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default model<LogScore>('logs', LogSchema)