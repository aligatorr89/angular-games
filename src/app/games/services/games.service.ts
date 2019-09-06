import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, mockedGames, GameQuery } from '../../shared/models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames(query?: GameQuery) {
    return new Observable<Game[]>(subscriber =>  {
      subscriber.next(selector(mockedGames, query, 100));
      subscriber.complete();
    });
  }
}

function selector(data: Game[], query?: GameQuery, limit?: number): Game[] {
  if(typeof query === 'object') {
    if(query.name) {
      data = data.filter(row => row.name.toLowerCase().indexOf(query.name.toLowerCase()) > -1);
    }
  }
  return data.slice(0, limit);
}
