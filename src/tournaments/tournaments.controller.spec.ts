import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';

describe('TournamentsController', () => {
  let tournamentsController: TournamentsController;
  let tournamentsService: TournamentsService;
  let http: HttpService;

  beforeEach(() => {
    tournamentsService = new TournamentsService(http);
    tournamentsController = new TournamentsController(tournamentsService);
  });

  describe('getTournaments', () => {
    it('should return an observable of tournaments', () => {
      let result: Observable<Array<{ id: number; name: string }>>;

      jest
        .spyOn(tournamentsService, 'getTournaments')
        .mockImplementation(() => result);

      expect(tournamentsController.getTournaments()).toBe(result);
    });
  });
});
