import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { normalizeTournaments } from '../utils';
import { API_BASE_URL } from '../constants';

@Injectable()
export class TournamentsService {
  constructor(private httpService: HttpService) {}

  // TO-DO: provide types
  getTournaments(): Observable<
    Array<{
      id: any;
      name: any;
    }>
  > {
    return this.httpService.get(`${API_BASE_URL}/config_tournaments/1/17`).pipe(
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
