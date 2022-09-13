import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
//import axios, { AxiosInstance } from 'axios';

import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
    //private readonly axios: AxiosInstance = axios;

    constructor(
        @InjectModel(Pokemon.name)
        private readonly pokemonModel: Model<Pokemon>,

        private readonly http: AxiosAdapter
    ) { }

    async executeSeed() {
        //borrando pokemons antes de insertar a la db
        await this.pokemonModel.deleteMany({});

        const data = await this.http.get<PokeResponse>(
            'https://pokeapi.co/api/v2/pokemon?limit=650'
        );

        const pokemonToInsert: {name: string, no: number}[] = [];

        // const insertPromisesArray = [];

        data.results.forEach(async ({ name, url }) => {
            const segments = url.split('/');
            const no: number = +segments[segments.length - 2];

            //const pokemon = await this.pokemonModel.create({ name, no });
            pokemonToInsert.push(
                {name, no}
            );
        })

        //ejecutando todas las promesas en el array
        // await Promise.all(insertPromisesArray);

        await this.pokemonModel.insertMany(pokemonToInsert);

        return 'Seed executed';
    }
}
