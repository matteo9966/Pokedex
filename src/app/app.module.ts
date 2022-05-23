import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonDetailStatsComponent } from './pokemon-detail-stats/pokemon-detail-stats.component';
import { ButtonComponent } from './shared/button/button.component';
import { PokemonDetailTypeComponent } from './pokemon-detail-type/pokemon-detail-type.component';
import { OneRowTableComponent } from './shared/one-row-table/one-row-table.component';
import { PokemonListCardComponent } from './pokemon-list-card/pokemon-list-card.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonsListComponent,
    PokemonDetailStatsComponent,
    ButtonComponent,
    PokemonDetailTypeComponent,
    OneRowTableComponent,
    PokemonListCardComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
