import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../core/models/entries/GetPokemons/GetPokemonResponse';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {

  constructor(private rest:RestApiService) { }
  offset=0;
  limit=50;
  listOfPokemons:Pokemon[]=[]

  ngOnInit(): void {
    this.getPokemonsForList();
  }

  getPokemonsForList(){
    this.rest.getPokemons(this.offset,this.limit).subscribe(pokemons=>{
    this.listOfPokemons=this.listOfPokemons.concat(pokemons);
    })
  }

}
