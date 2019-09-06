import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameQuery } from '../../../shared/models/game';

@Component({
  selector: 'app-games-header',
  templateUrl: './games-header.component.html',
  styleUrls: ['./games-header.component.scss']
})
export class GamesHeaderComponent implements OnInit {

  @Output('changeName')
  changeNameEmmiter = new EventEmitter<GameQuery>();

  constructor() { }

  ngOnInit() {
  }

  searchByGameName(target: HTMLInputElement) {
    this.changeNameEmmiter.emit({name: target.value});
  }
}
