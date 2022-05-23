import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-pokemon-list-card',
  templateUrl: './pokemon-list-card.component.html',
  styleUrls: ['./pokemon-list-card.component.scss']
})
export class PokemonListCardComponent implements OnInit {

  constructor(private rest:RestApiService) { }
  @Input() name ="";
  @Input() url="";
  imageSrc="";
  ngOnInit(): void {

   this.rest.getPokemonDetail(this.url).subscribe(pokemonDetail=>{
     this.imageSrc=pokemonDetail.sprites.front_default;
   })
  }

}
