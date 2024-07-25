import { Component, Inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
  providers: [
    PokemonService
  ]
})
export class InformationComponent {
  pokemons: Pokemon[] = [];
  page: number = 1;
  itemsPerPage: number = 40;

  constructor(protected pokemonService: PokemonService) { }

  ngOnInit() {
    this.getInformation();
  }

  getInformation() {
    this.pokemonService.getPokemon().subscribe(r=> {
      this.pokemons = r;
    })
  }
}
