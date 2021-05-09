const express = require('express');
const cors = require('cors')
const marvel = require('./marvel.js');

const PORT = process.env.PORT || 8080;

const start = async() => {
    console.log("Starting Node Server")
    const app = express();

    app.use(cors())

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.post('/api/search', async(request, response) => {
        let search = request.body.search;
        console.log(`[Search] ${search}`);
        let limit = request.body.limit || 10;
        let offset = request.body.offset || 1;
        let data = await marvel.searchComics(search, limit, offset);
        return response.send(data);
    });

    app.post('/api/series/:id/comics', async(request, response) => {
        let seriesID = request.params.id;
        console.log(`[Comics for Series] ${seriesID}`);
        let data = await marvel.getComicsForSeries({ id: seriesID })
        return response.send(data);
    });

    app.listen(PORT, () => console.log(`Marvel Hero Manager API listening on port ${PORT}`));
}
start();