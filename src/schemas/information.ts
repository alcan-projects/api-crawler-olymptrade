import { Schema, model } from 'mongoose';
import { ActiveScore } from '../interfaces/actives';

const ActiveSchema = new Schema({
    value: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

export default model<ActiveScore>('actives', ActiveSchema)