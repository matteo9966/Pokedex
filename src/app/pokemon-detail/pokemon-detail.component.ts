import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  constructor() { }
  rightImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
  leftImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  ngOnInit(): void {
  }

}
