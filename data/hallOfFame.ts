
export interface Tournament {
  name: string;
  winner: string;
  runnerUp?: string;
  bestPlayer?: string;
}

export interface Award {
  title: string;
  winner: string;
}

export interface Record {
  title: string;
  value: string;
}

export interface HallOfFameSeason {
  season: number;
  status: "completed" | "current";
  tournaments: Tournament[];
  awards: Award[];
  records: Record[];
}

export const hallOfFame: HallOfFameSeason[] = [
  // Paste Seasons 1–7 here.

  {
  season: 1,
  status: "completed",

  tournaments: [
    {
      name: "FTW League",
      winner: "Blizzard Titans",
      runnerUp: "Supa Strikas",
    },
    {
      name: "League Cup",
      winner: "Blizzard Titans",
      runnerUp: "Supa Strikas",
      bestPlayer: "Dharamveer",
    },
    {
      name: "FTW Champions League",
      winner: "El Bicho",
      runnerUp: "Supa Strikas",
    },
    {
      name: "FTW Europa League",
      winner: "Nebula Knights",
      runnerUp: "Der Bombers",
    },
    {
      name: "Super Cup",
      winner: "Nebula Knights",
    },
  ],

  awards: [
    {
      title: "Ballon de Glory",
      winner: "Fede",
    },
    {
      title: "MVP",
      winner: "Ishaan",
    },
    {
      title: "Fan Favourite",
      winner: "Ayan",
    },
    {
      title: "Golden Boot",
      winner: "Akshat",
    },
    {
      title: "Golden Glove",
      winner: "Fede",
    },
  ],

  records: [
    {
      title: "Highest Scoring Team",
      value: "Blizzard Titans (146)",
    },
    {
      title: "Best Defensive Team",
      value: "El Bicho (95)",
    },
  ],
},

{
  season: 2,
  status: "completed",

  tournaments: [
    {
      name: "FTW League",
      winner: "Lethal Hunters",
      runnerUp: "Blizzard Titans",
    },
    {
      name: "League Cup",
      winner: "La Masia",
      runnerUp: "Los Blancos",
    },
    {
      name: "FTW Champions League",
      winner: "Los Blancos",
      runnerUp: "Ace Strikers",
    },
    {
      name: "FTW Europa League",
      winner: "El Bicho",
      runnerUp: "La Masia",
    },
    {
      name: "Super Cup",
      winner: "El Bicho",
    },
  ],

  awards: [
    {
      title: "Ballon de Glory",
      winner: "Fede",
    },
    {
      title: "MVP",
      winner: "Sayan",
    },
    {
      title: "Fan Favourite",
      winner: "Abhirup",
    },
    {
      title: "Golden Boot",
      winner: "Fede (63 Goals)",
    },
    {
      title: "Golden Glove",
      winner: "Abhirup & Soumyadeep",
    },
    {
      title: "Puskas Award",
      winner: "Jishu",
    },
  ],

  records: [
    {
      title: "Highest Scoring Team",
      value: "Blizzard Titans (203)",
    },
    {
      title: "Best Defensive Team",
      value: "Ace Strikers (138)",
    },
  ],
},

{
  season: 3,
  status: "completed",

  tournaments: [
    {
      name: "FTW League",
      winner: "Team Phoenix",
      runnerUp: "La Masia",
    },
    {
      name: "League Cup",
      winner: "Bengal Kings",
      runnerUp: "Supa Strikas",
    },
    {
      name: "FTW Champions League",
      winner: "Dungeon of Demons",
      runnerUp: "Aura FC",
    },
    {
      name: "FTW Europa League",
      winner: "La Pulga",
      runnerUp: "Garuda Squad",
    },
    {
      name: "Super Cup",
      winner: "La Pulga",
    },
  ],

  awards: [
    {
      title: "Ballon de Glory",
      winner: "Sabuj",
    },
    {
      title: "MVP",
      winner: "Ansh",
    },
    {
      title: "Emerging Player",
      winner: "Shubham Wagh",
    },
    {
      title: "Fan Favourite",
      winner: "Hironjit",
    },
    {
      title: "Golden Boot",
      winner: "Vedant (34 Goals)",
    },
    {
      title: "Golden Glove",
      winner: "Susmit",
    },
    {
      title: "Puskas Award",
      winner: "Abhishek C",
    },
  ],

  records: [
    {
      title: "Highest Scoring Team",
      value: "Supa Strikas (118)",
    },
    {
      title: "Best Defensive Team",
      value: "Ace Strikers (80)",
    },
  ],
},

{
  season: 4,
  status: "completed",

  tournaments: [
    {
      name: "FTW League",
      winner: "Allianz Strikers",
      runnerUp: "Wukong FC",
    },
    {
      name: "League Cup",
      winner: "Allianz Strikers",
      runnerUp: "Chicken Dinner Dealers",
    },
    {
      name: "FTW Champions League",
      winner: "Wukong FC",
      runnerUp: "Pioneers",
    },
    {
      name: "FTW Europa League",
      winner: "Garuda Squad",
      runnerUp: "Supa Strikas",
    },
    {
      name: "Super Cup",
      winner: "Wukong FC",
    },
    {
  name: "The Last Executioner (Solo)",
  winner: "Gary",
  runnerUp: "Sayan",
},
{
      name: "Shield Winner",
      winner: "Allianz Strikers",
    },
  ],

  awards: [
    
    {
      title: "Ballon de Glory",
      winner: "Fede",
    },
    {
      title: "MVP",
      winner: "Divyam & Soumyadeep",
    },
    {
      title: "Emerging Player",
      winner: "Arkojiit & Ayan Chakravarti",
    },
    {
      title: "Golden Boot",
      winner: "Fede (44 Goals)",
    },
    {
      title: "Golden Glove",
      winner: "Soumyadeep, Divyam & Deeptanshu",
    },
    {
      title: "Puskas Award",
      winner: "Dharamveer",
    },
    {
      title: "Fair Play",
      winner: "Garuda Squad",
    },
  ],

  records: [
    {
      title: "Highest Scoring Team",
      value: "Big Ben (175)",
    },
    {
      title: "Best Defensive Team",
      value: "Wukong FC (120)",
    },
  ],
},

{
  season: 5,
  status: "completed",

  tournaments: [
    {
      name: "FTW League",
      winner: "Glitch VII",
      runnerUp: "Alpha Kings",
    },
    {
      name: "League Cup",
      winner: "Allianz Strikers",
      runnerUp: "The Mysterians",
    },
    {
      name: "FTW Champions League",
      winner: "Prime Strikers FC",
      runnerUp: "The Emperors",
    },
    {
      name: "FTW Europa League",
      winner: "Allianz Strikers",
      runnerUp: "The Mysterians",
    },
    {
      name: "Super Cup",
      winner: "Prime Strikers FC",
    },
    {
      name: "Quadra Kings Cup",
      winner: "Prime Strikers FC",
      runnerUp: "Garuda Squad",
    },
    
{
  name: "FTW Dual Dynasty",
  winner: "Africa",
  runnerUp: "Qatar",
},
{
  name: "Faction Wars: The Last Stand",
  winner: "Spartans 1 (Mohit C)",
  runnerUp: "Noks 1 (Fahad Zaman C)",
  bestPlayer: "MVP: Yash (Spartans 1)",
},
{
      name: "Shield Winner",
      winner: "Glitch VII",
    },
  ],

  awards: [
    
    {
      title: "Ballon de Glory",
      winner: "Rochan",
    },
    {
      title: "MVP",
      winner: "Chirantan R Pratihar",
    },
    {
      title: "Emerging Player",
      winner: "Rupam Das",
    },
    {
      title: "Golden Boot",
      winner: "Rochan (60 Goals)",
    },
    {
      title: "Golden Glove",
      winner: "Dharamveer",
    },
    {
      title: "Puskas Award",
      winner: "Sukalyan",
    },
    {
      title: "Fair Play",
      winner: "Team Ghost",
    },
  ],

  records: [
    {
      title: "Highest Scoring Team",
      value: "Allianz Strikers",
    },
    {
      title: "Best Defensive Team",
      value: "Allianz Strikers",
    },
  ],
},

{
  season: 6,
  status: "completed",

  tournaments: [
    {
      name: "FTW League",
      winner: "The Mysterians",
      runnerUp: "Supa Strikas",
    },
    {
      name: "League Cup",
      winner: "El Falcons",
      runnerUp: "Aoba Johsai",
    },
    {
      name: "FTW Champions League",
      winner: "Allianz Strikerz",
      runnerUp: "Phoenix Warriors",
    },
    {
      name: "FTW Europa League",
      winner: "The Rudras",
      runnerUp: "Myth Assassins",
    },
    {
      name: "Super Cup",
      winner: "The Rudras",
    },
    {
      name: "Friendly Cup",
      winner: "The Mysterians",
      runnerUp: "El Falcons",
    },
    {
  name: "FTW Solo Showdown",
  winner: "Sagnik",
  runnerUp: "Alamin",
},
{
  name: "Shield Winner",
  winner: "Bengal Kings",
},
  ],

  awards: [
   
    {
      title: "Ballon de Glory",
      winner: "Harsh Mali",
    },
    {
      title: "MVP",
      winner: "Harsh Mali",
    },
    {
      title: "Emerging Player",
      winner: "Swapnil",
    },
    {
      title: "Golden Boot",
      winner: "Harsh Mali (55 Goals)",
    },
    {
      title: "Golden Glove",
      winner: "Debojit",
    },
    {
      title: "Best Debutant",
      winner: "Harsh Mali",
    },
    {
      title: "Best Captain",
      winner: "Souvik",
    },
    {
      title: "Puskas Award",
      winner: "Aryan Verma",
    },
    {
      title: "Fair Play",
      winner: "Aoba Johsai",
    },
  ],

  records: [
    {
      title: "Highest Scoring Team",
      value: "The Mysterians",
    },
    {
      title: "Best Defensive Team",
      value: "Phoenix Warriors",
    },
  ],
},

{
  season: 7,
  status: "completed",

  tournaments: [
    {
      name: "FTW League",
      winner: "Bengal Kings",
      runnerUp: "El Falcons",
    },
    {
      name: "League Cup",
      winner: "Rush Hour Resurgence",
      runnerUp: "Buri Buri Zaimon",
    },
    {
      name: "FTW Champions League",
      winner: "FC Tricolour",
      runnerUp: "Blizzard Titans",
    },
    {
      name: "FTW Europa League",
      winner: "Ace Strikers",
      runnerUp: "El Falcons",
    },
    {
      name: "Super Cup",
      winner: "FC Tricolour",
    },
    {
      name: "Triple Trouble",
      winner: "IND-ARAB Power",
      runnerUp: "Spartans",
    },
  ],

  awards: [
    {
      title: "Shield Winner",
      winner: "Bengal Kings",
    },
    {
      title: "Ballon de Glory",
      winner: "Susmit",
    },
    {
      title: "MVP",
      winner: "Divyam",
    },
    {
      title: "Emerging Player",
      winner: "Sourajit Nandy",
    },
    {
      title: "Golden Boot",
      winner: "Fede (63 Goals)",
    },
    {
      title: "Golden Glove",
      winner: "Salman",
    },
    {
      title: "Best Debutant",
      winner: "Bibaswan Pal",
    },
    {
      title: "Best Captain",
      winner: "Reetesh",
    },
    {
      title: "Puskas Award",
      winner: "Raunak",
    },
    {
      title: "Fair Play",
      winner: "Blizzard Titans",
    },
  ],

  records: [
    {
      title: "Highest Scoring Team",
      value: "El Falcons(282 goals scored)",
    },
    {
      title: "Best Defensive Team",
      value: "Team Arctic(181 goals conceded)",
    },
  ],
},






];
