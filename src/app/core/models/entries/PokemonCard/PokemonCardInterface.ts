import { GetPokemonResponse } from "../GetPokemon/GetPokemonResponse";


export interface PokemonCardInterface extends GetPokemonResponse{
   name:string;
   url:string;
}