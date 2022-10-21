import { Schema, model } from 'mongoose';
import { ActiveScore } from '../interfaces/actives';

const ActiveSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    lucro_medio: {
        type: Number,
    },
    lucro_proposed: {
        type: Number,
        required: true
    },
    opens: [{
        type: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        return_value: {
            type: Number,
        }
    }],
    closeds: [{
        type: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})

export default model<ActiveScore>('actives', ActiveSchema)