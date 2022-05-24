import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail-stats',
  templateUrl: './pokemon-detail-stats.component.html',
  styleUrls: ['./pokemon-detail-stats.component.scss']
})


export class PokemonDetailStatsComponent implements OnInit {
  
  @Input() stats:{[key:string]:string}={}

  constructor() { }

  ngOnInit(): void {
    
  }

}
