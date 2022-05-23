import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailStatsComponent } from './pokemon-detail-stats.component';

describe('PokemonDetailStatsComponent', () => {
  let component: PokemonDetailStatsComponent;
  let fixture: ComponentFixture<PokemonDetailStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
