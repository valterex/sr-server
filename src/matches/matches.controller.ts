import { Controller, Get, Param } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  @Get(':id')
  getMatches(@Param('id') id: string) {
    return this.matchesService.getMatches(id);
  }
}
