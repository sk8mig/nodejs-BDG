module.exports = (app, mongoose) =>{
    const tvShowSchema = new mongoose.Schema({
        titulo: {type: String},
        anio:   {type: Number},
        pais:   {type: String}
    });

    mongoose.model('TVSHOW', tvShowSchema);
}