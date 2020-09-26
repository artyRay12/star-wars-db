export default class SwapiService {
    _apiBase = "https://swapi.dev/api/";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) throw new Error(`Error here!`);
        return await res.json();
    }

    getAllChars = async () =>
        await this.getResource(`people/`).then((data) =>
            this._transformChars(data.results)
        );

    getChar(id) {
        return this.getResource(`people/${id}/`).then((data) =>
            this._transformChar(data)
        );
    }

    getAllPlanets = async () =>
        await this.getResource(`planets/`).then((data) => data.results);

    async getPlanet(id) {
        return await this.getResource(`planets/${id}/`).then((data) =>
            this._transformPlanet(data)
        );
    }

    getAllStarships = async () =>
        await this.getResource(`starships/`).then((data) => data.results);

    getStarship(id) {
        return this.getResource(`starships/${id}/`);
    }

    _getId(str) {
        const reg = /\/([0-9]*)\/$/;
        return str.match(reg)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._getId(planet.url),
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        };
    }

    _transformChar(char) {
        return {
            id: this._getId(char.url),
            name: char.name,
            gender: char.gender,
            weight: char.mass,
        };
    }

    _transformChars = (chars) => chars.map((elem) => this._transformChar(elem));
}
