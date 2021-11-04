import { Controller, Get } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';

@Controller('tournaments')
export class TournamentsController {
  constructor(private tournamentsService: TournamentsService) {}

  @Get()
  getTournaments() {
    return this.tournamentsService.getTournaments();
  }
}
