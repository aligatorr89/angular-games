import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Observable } from 'rxjs';
import { Game } from '../../../shared/models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games$: Observable<Game[]>;

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.games$ = this.gamesService.getGames();
  }

}
