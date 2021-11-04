import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { BASE_URL } from '../constants';

@Injectable()
export class MatchesService {
  constructor(private httpService: HttpService) {}

  getMatches(id: string) {
    return this.httpService
      .get(`${BASE_URL}/fixtures_tournament/${id}/2021`)
      .pipe(
        map((response) => Object.values(response.data.doc[0].data.matches)),
      );
  }
}
