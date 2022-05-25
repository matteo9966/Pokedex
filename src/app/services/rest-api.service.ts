import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
  catchError,
  from,
  mergeMap,
  Observable,
  pluck,
  switchMap,
  tap,
  throwError,
  toArray,
} from 'rxjs';
import { GetPokemonsResponse } from '../core/models/entries/GetPokemons/GetPokemonResponse';
import { PokemonCardInterface } from '../core/models/entries/PokemonCard/PokemonCardInterface';
import { GetPokemonResponse } from '../core/models/entries/GetPokemon/GetPokemonResponse';
const baseURL = 'https://pokeapi.co/api/v2/pokemon';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private http: HttpClient) {}

  getPokemons(offset = 0, limit = 20) {
      // return this.http
      //   .get<GetPokemonsResponse>(baseURL)
      //   .pipe(pluck('results'))

      //   .pipe(
      //     switchMap((pokemons) => {
      //       let listOfPokemonsWithImageUrl: PokemonCardInterface[] = [];
      //       pokemons.forEach((pokemon) => {
      //         let card_pokemon: PokemonCardInterface = {
      //           name: pokemon.name,
      //           url: pokemon.url,
      //         };
      //         let pokemon_detail_url = pokemon.url;
      //         this.http
      //           .get<GetPokemonResponse>(pokemon_detail_url)
      //           .subscribe((pokemon) => {
      //             card_pokemon.url = pokemon.sprites.front_default;
      //             listOfPokemonsWithImageUrl.push(card_pokemon)
      //           });

      //       });
      //       return from(listOfPokemonsWithImageUrl)
      //     })
      //   )
      //   .pipe(tap((data) => console.log(data)))
      //   .pipe(catchError(this.handleError));
    // }


    /* 
    const params = new HttpParams()
    .set('orderBy', '"$key"')
    .set('limitToFirst', "1");
    */
      
    const params = new HttpParams()
                      .set('limit',limit)
                      .set('offset',offset)

    return this.http
      .get<GetPokemonsResponse>(baseURL,{params})
      .pipe(pluck('results'))
      
      .pipe(catchError(this.handleError));
  }

  /**
   *
   * @param url url for specific pokemon
   * @param detail the property to pluck
   * @returns
   */
  getPokemonDetail(url: string):Observable<GetPokemonResponse> {
    return this.http
      .get<GetPokemonResponse>(url)
    
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Errore request ';
    }
    window.alert(errorMessage);
    return throwError(() => errorMessage);
  }
}
