import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() data!: Pokemon;
  attack: boolean = false;

  ngOnInit(): void {
    this.attack = this.data.base.HP > 50;
  }
}
