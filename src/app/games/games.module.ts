import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './components/games/games.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesListGameDetailComponent } from './components/games-list-game-detail/games-list-game-detail.component';

@NgModule({
  declarations: [GamesComponent, GamesListComponent, GamesListGameDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GamesComponent
  ]
})
export class GamesModule { }
