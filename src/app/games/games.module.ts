import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './components/games/games.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesListElementComponent } from './components/games-list-element/games-list-element.component';

@NgModule({
  declarations: [GamesComponent, GamesListComponent, GamesListElementComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GamesComponent
  ]
})
export class GamesModule { }
