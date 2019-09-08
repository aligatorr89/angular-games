import { Game, mockedGames, GameQuery } from '../../shared/models/game';

export class GamesSelector {
  static get(games: Game[], query?: GameQuery, limit: number = 100) {
    if(typeof query === 'object') {
      if(query.name) {
        games = games.filter(row => row.name.toLowerCase().indexOf(query.name.toLowerCase()) > -1);
      }
      if(query.type === 'category' && query.id !== '1') {
        games = games.filter(row => row.categories.indexOf(query.id) > -1);
      }
    }
    return games.slice(0, limit);
  }
}
