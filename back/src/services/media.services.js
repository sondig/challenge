import Services from "./all.services.js";
class MediaServices extends Services {
    constructor(model) {
        super(model);
    }

    getMedia = async () => await this.getAll()
    getMediaById = async (id) => await this.getById(id)
    createMedia = async (item) => await this.createDocument(item)
    deleteMediaById = async (id) => await this.deleteById(id)
    updateMediaById = async (id, media) => {
        const { image, texto, likes } = media
        try {
            await this.model.findByIdAndUpdate(id, {
                image, texto, likes
            })
            const updated = await this.model.findById(id);
            return updated
        }
        catch (error) { console.log(error) }
    }
}

export default MediaServices;