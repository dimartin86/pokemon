import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { InformationComponent } from './pages/information/information.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [InformationComponent, CardComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule,
    NgxPaginationModule 
  ],
  providers: [
    provideHttpClient(withFetch())
  ]
})
export class PokemonModule { }
