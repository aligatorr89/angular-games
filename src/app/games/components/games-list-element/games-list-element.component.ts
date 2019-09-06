import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../shared/models/game';

@Component({
  selector: 'app-games-list-element',
  templateUrl: './games-list-element.component.html',
  styleUrls: ['./games-list-element.component.scss']
})
export class GamesListElementComponent implements OnInit {

  @Input()
  game: Game[];

  constructor() { }

  ngOnInit() {
  }

}
