import mongoose from "mongoose";
const Schema = mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: false
        }
        ,
        likes: {
            type: Number,
            default: 0
        },
        mediaId: {
            type: String,
            required: false
        },
        author: {
            type: String,
            required: false,
            default: "Anonimo"
        }

    }

);

export const mediaModel = mongoose.model("media", Schema);
