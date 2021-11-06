type TournamentNames =
  | 'OFB Cup'
  | '2. Liga'
  | 'Bundesliga'
  | 'Bundesliga; Europa Playoffs'
  | 'Bundesliga; Relegation/Promotion'
  | 'Bundesliga; Relegation Round'
  | 'Bundesliga; Championship Round';

type TournamentTypes = 'tournament' | 'uniquetournament';

type SeasonTypeName =
  | 'Qualification'
  | 'Playoffs'
  | 'Promotion/Relegation'
  | 'Regular Season'
  | 'Group stage'
  | 'Regular Season';

type Abbreviations = 'BELP' | 'ÖC' | 'BR' | 'EL' | 'BRR' | 'BCR' | 'BUN';

export interface TournamentResponse {
  _doc: TournamentTypes;
  _id: number;
  _utid: number;
  _sid: number;
  _rcid: number;
  name: TournamentNames;
  currentseason: number;
  friendly: boolean;
  _isk?: number;
  _tid?: number;
  abbr?: Abbreviations;
  ground?: null;
  seasonid?: number;
  year?: string;
  seasontype?: number;
  seasontypename?: SeasonTypeName;
  seasontypeunique?: number;
  livetable?: boolean;
  cuprosterid?: number;
  roundbyround?: boolean;
  tournamentlevelorder?: number;
  tournamentlevelname?: string;
  outdated?: boolean;
  _sk?: boolean;
}

export interface Tournament {
  id: string;
  name: string;
}
