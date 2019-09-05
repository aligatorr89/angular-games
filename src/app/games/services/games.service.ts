import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, mockedGames } from '../../shared/models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames() {
    return new Observable<Game[]>(subscriber =>  {
      subscriber.next(mockedGames);
      subscriber.complete();
    });
  }
}
