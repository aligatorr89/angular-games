import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './components/games/games.component';
import { GamesListComponent } from './components/games-list/games-list.component';

@NgModule({
  declarations: [GamesComponent, GamesListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GamesComponent
  ]
})
export class GamesModule { }
