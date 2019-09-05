import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../shared/models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames() {
    return new Observable<Game[]>(subscriber =>  {
      subscriber.next(require('../../../../data.json'));
      subscriber.complete();
    });
  }
}
