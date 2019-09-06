import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, mockedGames, GameQuery } from '../../shared/models/game';
import { GamesSelector } from './games-selector';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames(query?: GameQuery) {
    return new Observable<Game[]>(subscriber =>  {
      console.log(query)
      subscriber.next(GamesSelector.get(mockedGames, query));
      subscriber.complete();
    });
  }
}
