import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../shared/models/game';

@Component({
  selector: 'app-games-list-game-detail',
  templateUrl: './games-list-game-detail.component.html',
  styleUrls: ['./games-list-game-detail.component.css']
})
export class GamesListGameDetailComponent implements OnInit {

  @Input()
  game: Game[];

  constructor() { }

  ngOnInit() {
  }

}
