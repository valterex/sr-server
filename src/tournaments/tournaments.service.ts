import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Tournament, TournamentResponse } from '../types/Tournament';
import { API_BASE_URL } from '../constants';

@Injectable()
export class TournamentsService {
  constructor(private httpService: HttpService) {}

  getTournaments(): Observable<Array<Tournament>> {
    return this.httpService.get(`${API_BASE_URL}/config_tournaments/1/17`).pipe(
      map((response) => {
        const tournaments: Array<TournamentResponse> =
          response.data.doc[0].data.tournaments;

        return tournaments;
      }),
      map((response) =>
        response.map((game) => {
          return {
            id: String(game._id),
            name: game.name,
          };
        }),
      ),
    );
  }
}
