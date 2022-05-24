import { Component, Input, OnInit } from '@angular/core';
import { GetPokemonResponse } from '../core/models/entries/GetPokemon/GetPokemonResponse';
import { RestApiService } from '../services/rest-api.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pokemon-list-card',
  templateUrl: './pokemon-list-card.component.html',
  styleUrls: ['./pokemon-list-card.component.scss']
})
export class PokemonListCardComponent implements OnInit {

  constructor(private rest:RestApiService, private router: Router) { }
  @Input() name ="";
  @Input() url="";
  @Input() imageSrc="";
  @Input() id="";

  ngOnInit(): void {

   this.rest.getPokemonDetail(this.url).subscribe(pokemonDetail=>{
     this.imageSrc=pokemonDetail!.sprites!.front_default;
   })
  }

  getPokemonDetails(){
    this.rest.getPokemonDetail(this.url).subscribe(pokemonDetail=>{
      this.router.navigate([this.id]);
     
    });
  }


  // getPokemonDetails(url:string) {
  //   return this.rest.getPokemonDetail(url)
  //   // .subscribe((pokemonDetail) => {
  //   //   this.imageSrc = pokemonDetail.sprites.front_default;
  //   // });
  // }



}
