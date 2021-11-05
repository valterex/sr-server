interface MatchTime {
  _doc: 'time';
  time: string;
  date: string;
  tz: 'UTC';
  tzoffset: number;
  uts: number;
}

interface MatchRoundName {
  _doc: 'tableround';
  _id: number;
  name: number;
}

interface MatchResult {
  home: number;
  away: number;
  period: 'nt';
  winner: 'home' | 'away';
}

interface MatchPeriods {
  p1: {
    home: number;
    away: number;
  };
  ft: {
    home: number;
    away: number;
  };
}

interface MatchTeam {
  _doc: 'team';
  _id: number;
  _sid: number;
  uid: number;
  virtual: boolean;
  name: string;
  mediumname: string;
  abbr: string;
  nickname: null;
  iscountry: boolean;
  haslogo: boolean;
}

interface MatchTeams {
  home: MatchTeam;
  away: MatchTeam;
}

export interface MatchResponse {
  _doc: 'match';
  _id: number;
  _sid: number;
  _rcid: number;
  _tid: number;
  _utid: number;
  time: MatchTime;
  round: number;
  roundname: MatchRoundName;
  week: number;
  result: MatchResult;
  periods: MatchPeriods;
  _seasonid: number;
  teams: MatchTeams;
  neutralground: boolean;
  comment: string;
  status: null;
  tobeannounced: boolean;
  postponed: boolean;
  canceled: boolean;
  inlivescore: boolean;
  stadiumid: number;
  bestof: null;
  walkover: boolean;
  retired: boolean;
  disqualified: boolean;
}

export interface Match {
  id: number;
  time: any;
  result: MatchResult;
  homeTeam: string;
  awayTeam: string;
  comment: string;
}
