import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamesComponent } from './components/games/games.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesListElementComponent } from './components/games-list-element/games-list-element.component';
import { GamesHeaderComponent } from './components/games-header/games-header.component';

@NgModule({
  declarations: [GamesComponent, GamesListComponent, GamesListElementComponent, GamesHeaderComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    GamesComponent
  ]
})
export class GamesModule { }
