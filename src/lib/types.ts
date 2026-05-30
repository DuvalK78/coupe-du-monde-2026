export type Team = {
  id: string;
  name: string;
  nickname: string;
  flag: string;
  crest: string;
  capital: string;
  coordinates: [number, number];
  group: string;
  worldCups: { year: number; host: string }[];
  kit: { home: string; away: string };
  squad: { name: string; position: string; club: string; age: number; number: number }[];
  fixtures: { date: string; opponent: string; time: string; stadium: string; phase: string }[];
};

export type Group = {
  name: string;
  teams: string[];
};

export type Match = {
  date: string;
  time: string;
  team1: string;
  team2: string;
  stadium: string;
  group: string;
  phase: string;
};

export type Palmares = {
  winners: { country: string; titles: number; years: number[] }[];
};
