import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { catchError, noop, switchMap } from 'rxjs';
import { Type } from '../core/models/entries/GetPokemon/GetPokemonResponse';
import { RestApiService } from '../services/rest-api.service';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  // @Input() type: string[] = [];
  // @Input() abilities: string[] = [];
  // @Input() leftImage = '';
  // @Input() rightImage = '';
  // @Input() details = { name: '', id: '', height: '', weight: '' };

  id = '';
  rightImage =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png';
  leftImage =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  types: string[] = [];
  abilities: string[] = [];
  stats = { name: '', id: '', height: '', weight: '' };
  //passa l'id e con ngOnInit fai la chiamata!, salvo i dettagli del pokemon
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: RestApiService
  ) {}
  ngOnInit(): void {
    /* 
       this.hero$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.service.getHero(params.get('id')!))
      );
      */
    //  this.route.paramMap.subscribe(param=>{this.id=param.get('id')!})

    const details$ = this.route.paramMap.pipe(
      switchMap((param: ParamMap) => {
        const id = param.get('id')!;

     //COSA FACCIO SE AVVIENE UN ERROERE?

     
        return this.rest.getPokemonDetail(
          ' https://pokeapi.co/api/v2/pokemon/' + id
        );
      })
    );

    details$.subscribe((details) => {
      this.abilities = details.abilities
        .filter(
          (ability) =>
            typeof ability === 'object' && ability.hasOwnProperty('ability')
        )
        .map((ability) => {
          return ability.ability.name;
        });
      this.leftImage = details.sprites.front_default;
      this.rightImage = details.sprites.back_default;
      this.types = details.types.map((type) => type.type.name);
      this.stats = {
        height: String(details.height),
        id: String(details.id),
        name: details.name,
        weight: String(details.weight),
      };
    });
  }

  goToNextPoke(id:number){
    console.log({"ID:":id})
    if(id<=0||id>151) return 
    this.router.navigate([""+id]);
  }

}
