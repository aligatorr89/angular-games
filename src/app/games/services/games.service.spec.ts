import { TestBed } from '@angular/core/testing';

import { GamesService } from './games.service';
import { mockedGames } from '../../shared/models/game';

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GamesService
      ]
    });
    service = TestBed.get(GamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getGames()', () => {
    beforeEach(() => {
      service = TestBed.get(GamesService);
    });

    it('should return games', () => {
      service.getGames().subscribe(
        games => expect(games).toEqual(mockedGames[0])
      );
    });
  });
});
