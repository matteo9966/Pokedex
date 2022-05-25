import { Component, OnDestroy, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Pokemon } from '../core/models/entries/GetPokemons/GetPokemonResponse';
import { PokemonCardInterface } from '../core/models/entries/PokemonCard/PokemonCardInterface';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit,OnDestroy {

  constructor(private rest:RestApiService) { }

  offset=0;
  limit=20;
  listOfPokemons:Pokemon[]=[]
  pokemonDetailsList:PokemonCardInterface[]=[];
  
  ngOnDestroy(): void {
    console.log("la pagina viene distrutta!")
  }

  ngOnInit(): void {
    this.getPokemonsForList();
  }

  getPokemonsForList(){
    this.rest.getPokemons(this.offset,this.limit).subscribe(pokemons=>{
    this.listOfPokemons=this.listOfPokemons.concat(pokemons);
    pokemons.forEach(pokemon=>{
      const url = pokemon.url;
      this.rest.getPokemonDetail(url).subscribe(pokemondetail=>{
        const pokemonCard:PokemonCardInterface ={...pokemondetail,url:pokemon.url,name:pokemon.name};
        this.pokemonDetailsList.push(pokemonCard);
      })
    })

    })
  }

  loadNextPokemon(){
    this.offset=this.limit;
    this.getPokemonsForList(); //concatena altri pokemon
  }

  searchPokemon(){
    
  }

  // getPokemonsWithDetails(){
  //   this.rest.getPokemons(this.offset,this.limit).pipe(switchMap(data=>{

  //   }))
  // }


  // getPokemonDetails(url:string) {
  //   return this.rest.getPokemonDetail(url)
  //   // .subscribe((pokemonDetail) => {
  //   //   this.imageSrc = pokemonDetail.sprites.front_default;
  //   // });
  // }



}
