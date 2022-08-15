import MediaServices from "../services/media.services.js";
import { mediaModel } from "../models/media.model.js";
const mediaServices = new MediaServices(mediaModel);

export const getMedia = async (req, res) => {
    const { id } = req.params;
    if (id) {
        const media = await mediaServices.getMediaById(id);
        if (media) {
            res.status(200).send({ media });
        } else {
            res.send("el archivo que busco no existe");
        }
    } else {
        try {
            const media = await mediaServices.getMedia();
            res.status(200).send(media);
        } catch (error) {
            console.log(error);
        }
    }
};

export const saveMedia = async (req, res) => {
    try {

        const newMedia = req.body;
        newMedia.mediaId = (Object.keys(await mediaServices.getMedia()).length)
        const media = await mediaServices.createMedia(newMedia);
        res.send('archivo creado con exito :' + media);
    } catch (error) {
        console.log(error);
    }
};

export const deleteMedia = async (req, res) => {
    const mediaId = req.params.id;
    try {
        const borrado = await mediaServices.deleteMediaById({ _id: mediaId });
        if (borrado) {
            res.status(200).send({ borrado });
        } else {
            res.send("el archivo no existe");
        }
    } catch (error) {
        console.log(error);
    }
};

export const updateMedia = async (req, res) => {
    const idOldMedia = req.params.id;
    const mediaNew = req.body;

    try {

        const modificado = await mediaServices.updateMediaById(
            idOldMedia,
            mediaNew
        );

        res.status(200).send(modificado);
    } catch (error) {
        console.log(error);
    }
};

