import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { BASE_URL, normalizeTournaments } from '../constants';

@Injectable()
export class TournamentsService {
  constructor(private httpService: HttpService) {}

  getTournaments() {
    return this.httpService.get(`${BASE_URL}/config_tournaments/1/17`).pipe(
      map((response) => {
        const tournaments: Array<any> = response.data.doc[0].data.tournaments;

        const uniqueTournaments: Array<any> = Object.values(
          response.data.doc[0].data.uniquetournaments,
        );

        return [...tournaments, ...uniqueTournaments];
      }),
      map((response) => normalizeTournaments(response)),
    );
  }
}
