import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { Match } from '../types';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';

describe('MatceshController', () => {
  let matchesController: MatchesController;
  let matchesService: MatchesService;
  let http: HttpService;

  beforeEach(() => {
    matchesService = new MatchesService(http);
    matchesController = new MatchesController(matchesService);
  });

  describe('getMatches', () => {
    it('should return an observable array of matches per tournament category', () => {
      let result: Observable<Array<Match>>;

      jest.spyOn(matchesService, 'getMatches').mockImplementation(() => result);

      expect(matchesController.getMatches('1')).toBe(result);
    });
  });
});
