import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Match, MatchResponse } from '../types';
import { API_BASE_URL } from '../constants';

@Injectable()
export class MatchesService {
  constructor(private httpService: HttpService) {}

  getMatches(id: string): Observable<Array<Match>> {
    return this.httpService
      .get(`${API_BASE_URL}/fixtures_tournament/${id}/2021`)
      .pipe(
        map((response) => Object.values(response.data.doc[0].data.matches)),
        map((response: Array<MatchResponse>) =>
          response.map((game) => {
            return {
              id: String(game._id),
              time: game.time,
              result: game.result.home && game.result.away ? game.result : null,
              homeTeam: game.teams.home.mediumname,
              awayTeam: game.teams.away.mediumname,
              events: game.comment ? game.comment.replace(/\n/g, ',') : null,
            };
          }),
        ),
        map((response: Array<Match>) =>
          response
            .sort((a, b) =>
              a.time.uts < b.time.uts ? 1 : a.time.uts > b.time.uts ? -1 : 0,
            )
            .slice(0, 5),
        ),
      );
  }
}
