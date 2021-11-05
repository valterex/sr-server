import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { normalizeMatches } from '../utils';
import { API_BASE_URL } from '../constants';

@Injectable()
export class MatchesService {
  constructor(private httpService: HttpService) {}

  // TO-DO: provide types
  getMatches(id: string): Observable<
    Array<{
      id: any;
      time: any;
      result: any;
      teams: any;
      comment: any;
    }>
  > {
    return this.httpService
      .get(`${API_BASE_URL}/fixtures_tournament/${id}/2021`)
      .pipe(
        map((response) => Object.values(response.data.doc[0].data.matches)),
        map((response) => normalizeMatches(response)),
      );
  }
}
