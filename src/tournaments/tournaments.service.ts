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

        const uniqueTournaments: Array<TournamentResponse> = Object.values(
          response.data.doc[0].data.uniquetournaments,
        );

        return [...tournaments, ...uniqueTournaments];
      }),
      map((response) =>
        response.map((game) => {
          return {
            id: game._id,
            name: game.name,
          };
        }),
      ),
    );
  }
}
