import { Schema, model } from 'mongoose';
import { OperationScore } from '../interfaces/operations';

const OperationSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    active: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    return_value: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export default model<OperationScore>('operations', OperationSchema)