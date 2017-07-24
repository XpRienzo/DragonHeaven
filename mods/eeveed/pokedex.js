'use strict';

 exports.BattlePokedex = {
  fletchinder: {
		num: 662,
		species: "Fletchinder",
		types: ["Fire","Flying"],
		baseStats: {hp: 62, atk: 73, def: 55, spa: 56, spd: 52, spe: 84},
		abilities: {0: "Flame Body", H: "Gale Wings"},
		heightm: 0.7,
		weightkg: 16,
		color: "Red",
		prevo: "fletchling",
		evos: ["talonflame","talonfey","talonwave","talonacid","talondrake","talonvolt"],
		evoLevel: 17,
		eggGroups: ["Flying"],
  },
  talonfey: {
      		num: 9001,
      		species: "Talonfey",
      		types: ["Fairy","Flying"],
      		baseStats: {hp: 81, atk: 126, def: 71, spa: 69, spd: 74, spe: 78},
      		abilities: {0: "Dazzling", H: "Gale Wings"},
      		prevo: "fletchinder",
  },
  talonwave: {
      		num: 9002,
      		species: "Talonwave",
      		types: ["Water","Flying"],
      		baseStats: {hp: 126, atk: 71, def: 78, spa: 81, spd: 74, spe: 69},
      		abilities: {0: "Water Absorb", H: "Gale Wings"},
      		prevo: "fletchinder",
  },
  talonacid: {
      		num: 9003,
      		species: "Talonacid",
     		types: ["Poison","Flying"],
      		baseStats: {hp: 74, atk: 69, def: 126, spa: 78, spd: 81, spe: 71},
      		abilities: {0: "Poison Point", H: "Corrosion"},
      		prevo: "fletchinder",
  },
  talondrake: {
      		num: 9004,
      		species: "Talondrake",
     		types: ["Dragon","Flying"],
      		baseStats: {hp: 78, atk: 81, def: 74, spa: 126, spd: 69, spe: 71},
      		abilities: {0: "Tough Claws", H: "Gale Wings"},
      		prevo: "fletchinder",
  },
  talonvolt: {
      		num: 9005,
      		species: "Talonvolt",
      		types: ["Electric","Flying"],
      		baseStats: {hp: 69, atk: 74, def: 71, spa: 126, spd: 78, spe: 81},
      		abilities: {0: "Static", H: "Gale Wings"},
      		prevo: "fletchinder",
  },
  raichu: {
		num: 26,
		species: "Raichu",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110},
		abilities: {0: "Static", H: "Lightning Rod"},
		heightm: 0.8,
		weightkg: 30,
		color: "Yellow",
		prevo: "pikachu",
		evoLevel: 1,
	        evos: ["umichu","armochu","miraclechu","noxiochu","keruchu","conflachu"],
		eggGroups: ["Field", "Fairy"],
		otherFormes: ["raichualola"],
  },
  umichu: {
	        num: 9006,
	        species: "Umichu",
	        types: ["Electric","Water"],
	        baseStats: {hp: 80, atk: 75, def: 110, spa: 90, spd: 115, spe: 80},
	        abilities: {0: "Hydration", H: "Lightning Rod"},
	        prevo: "Raichu"
  },
  armochu: {
	        num: 9007,
	        species: "Armochu",
	        types: ["Electric","Steel"],
	        baseStats: {hp: 89, atk: 55, def: 101, spa: 140, spd: 103, spe: 62},
	        abilities: {0: "Filter", H: "Battle Armor"},
	        prevo: "Raichu"
  },
  miraclechu: {
	        num: 9008,
	        species: "Miraclechu",
	        types: ["Electric","Psychic"],
	        baseStats: {hp: 60, atk: 90, def: 75, spa: 135, spd: 75, spe: 110},
	        abilities: {0: "Static", H: "Miracle Dash"},
	        prevo: "Raichu"
  },
  noxiochu: {
	        num: 9009,
	        species: "Noxiochu",
	        types: ["Electric","Poison"],
	        baseStats: {hp: 75, atk: 112, def: 50, spa: 91, spd: 86, spe: 136},
	        abilities: {0: "Volt Absorb", 1: "Poison Touch", H: "Electrojection"},
	        prevo: "Raichu"
  },
  keruchu: {
	        num: 9010,
	        species: "Keruchu",
	        types: ["Electric","Fighting"],
	        baseStats: {hp: 70, atk: 110, def: 85, spa: 95, spd: 60, spe: 130},
	        abilities: {0: "Scrappy", H: "Sheer Force"},
	        prevo: "Raichu"
  },
  conflachu: {
	        num: 9011,
	        species: "Conflachu",
	        types: ["Electric","Fire"],
	        baseStats: {hp: 110, atk: 130, def: 65, spa: 70, spd: 65, spe: 110},
	        abilities: {0: "Static", H: "Reckless"},
	        prevo: "Raichu"
  },
  sliggoo: {
		num: 705,
		species: "Sliggoo",
		types: ["Dragon"],
		baseStats: {hp: 68, atk: 75, def: 53, spa: 83, spd: 113, spe: 60},
		abilities: {0: "Sap Sipper", 1: "Hydration", H: "Gooey"},
		heightm: 0.8,
		weightkg: 17.5,
		color: "Purple",
		prevo: "goomy",
		evos: ["goodra","goollium","goopsyche","sumogoo","goobolt","dragooxie"],
		evoLevel: 40,
		eggGroups: ["Dragon"],
  },
  goollium: {
	        num: 9012,
	        species: "Goollium",
	        types: ["Dragon","Steel"],
	        baseStats: {hp: 100, atk: 90, def: 150, spa: 80, spd: 70, spe: 110},
	        abilities: {0: "Filter", H: "Regenerator"},
	        prevo: "Sliggoo"
  },
  goopsyche: {
	        num: 9013,
	        species: "Goopsyche",
	        types: ["Dragon","Psychic"],
	        baseStats: {hp: 90, atk: 110, def: 150, spa: 70, spd: 100, spe: 80},
	        abilities: {0: "Bravery", 1: "Guts", H: "Gooey"},
	        prevo: "Sliggoo"
  },
  sumogoo: {
	        num: 9014,
	        species: "Sumogoo",
	        types: ["Dragon","Fighting"],
	        baseStats: {hp: 90, atk: 110, def: 150, spa: 100, spd: 80, spe: 70},
	        abilities: {0: "Hustle", 1: "Hydration", H: "Iron Fist"},
	        prevo: "Sliggoo"
  },
  goobolt: {
	        num: 9015,
	        species: "Goobolt",
	        types: ["Dragon","Electric"],
	        baseStats: {hp: 70, atk: 110, def: 90, spa: 100, spd: 80, spe: 150},
	        abilities: {0: "Motor Drive", 1: "Static", H: "Regenerator"},
	        prevo: "Sliggoo"
  },
  dragooxie: {
	        num: 9016,
	        species: "Dragooxie",
	        types: ["Dragon","Fairy"],
	        baseStats: {hp: 150, atk: 70, def: 90, spa: 110, spd: 100, spe: 80},
	        abilities: {0: "Sap Sipper", 1: "Pixilate", H: "Gooey"},
	        prevo: "Sliggoo"
  },
  sunkern: {
		num: 191,
		species: "Sunkern",
		types: ["Grass"],
		baseStats: {hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30},
		abilities: {0: "Chlorophyll", 1: "Solar Power", H: "Early Bird"},
		heightm: 0.3,
		weightkg: 1.8,
		color: "Yellow",
		evos: ["sunflora","sunpad","snowflora","moonflora","sunshock","sunspook"],
		eggGroups: ["Grass"],
  },
  sunpad: {
	        num: 9017,
	        species: "Sunpad",
	        types: ["Grass","Water"],
	        baseStats: {hp: 75, atk: 30, def: 75, spa: 85, spd: 105, spe: 55},
	        abilities: {0: "Drizzle", 1: "Triage", H: "Natural Cure"},
	        prevo: "Sunkern"
  },
  snowflora: {
	        num: 9018,
	        species: "Snowflora",
	        types: ["Grass","Ice"],
	        baseStats: {hp: 75, atk: 30, def: 75, spa: 85, spd: 55, spe: 105},
	        abilities: {0: "Snow Warning", 1: "Slush Rush", H: "Refrigerate"},
	        prevo: "Sunkern"
  },
  moonflora: {
	        num: 9019,
	        species: "Moonflora",
	        types: ["Grass","Dark"],
	        baseStats: {hp: 85, atk: 55, def: 75, spa: 30, spd: 75, spe: 105},
	        abilities: {0: "Huge Power", 1: "Grass Pelt", H: "Prankster"},
	        prevo: "Sunkern"
  },
  sunshock: {
	        num: 9020,
	        species: "Sunshock",
	        types: ["Grass","Electric"],
	        baseStats: {hp: 105, atk: 55, def: 75, spa: 85, spd: 75, spe: 30},
	        abilities: {0: "Analytic", 1: "Lightning Rod", H: "Lucky"},
	        prevo: "Sunkern"
  },
  sunspook: {
	        num: 9021,
	        species: "Sunspook",
	        types: ["Grass","Ghost"],
	        baseStats: {hp: 85, atk: 55, def: 75, spa: 105, spd: 75, spe: 30},
	        abilities: {0: "Inverse Ivy", H: "Insomnia"},
	        prevo: "Sunkern"
  },
  dunsparce: {
		num: 206,
		species: "Dunsparce",
		types: ["Normal"],
		baseStats: {hp: 100, atk: 70, def: 70, spa: 65, spd: 65, spe: 45},
		abilities: {0: "Serene Grace", 1: "Run Away", H: "Rattled"},
		heightm: 1.5,
		weightkg: 14,
		color: "Yellow",
	        evos: ["allsparce","dunsoul","landisparce","frosparce","dunsparkle","dunvelop","dunstatic"],
		eggGroups: ["Field"],
  },
  allsparce: {
	        num: 9022,
	        species: "Allsparce",
	        types: ["Normal"],
	        baseStats: {hp: 110, atk: 95, def: 100, spa: 75, spd: 100, spe: 85},
	        abilities: {0: "Protean", H: "Adaptability"},
	        prevo: "Dunsparce"
  },
  dunsoul: {
	        num: 9023,
	        species: "Dunsoul",
	        types: ["Normal","Ghost"],
	        baseStats: {hp: 150, atk: 95, def: 85, spa: 80, spd: 95, spe: 60},
	        abilities: {0: "Serene Grace", 1: "Cursed Body", H: "Rattled"},
	        prevo: "Dunsparce"
  },
  landisparce: {
	        num: 9024,
	        species: "Landisparce",
	        types: ["Normal","Ground"],
	        baseStats: {hp: 105, atk: 126, def: 75, spa: 69, spd: 100, spe: 90},
	        abilities: {0: "Sand Rush", 1: "Sand Force", H: "Hidden Soul"},
	        prevo: "Dunsparce"
  },
  frosparce: {
	        num: 9025,
	        species: "Frosparce",
	        types: ["Normal","Ice"],
	        baseStats: {hp: 100, atk: 130, def: 75, spa: 85, spd: 65, spe: 110},
	        abilities: {0: "Serene Grace", 1: "Frostborn", H: "Levitate"},
	        prevo: "Dunsparce"
  },
  dunsparkle: {
	        num: 9026,
	        species: "Dunsparkle",
	        types: ["Normal","Fairy"],
	        baseStats: {hp: 160, atk: 100, def: 90, spa: 65, spd: 90, spe: 60},
	        abilities: {0: "Dazzling", 1: "Regenerator", H: "Wonder Skin"},
	        prevo: "Dunsparce"
  },
  dunvelop: {
	        num: 9027,
	        species: "Dunvelop",
	        types: ["Normal"],
	        baseStats: {hp: 120, atk: 125, def: 95, spa: 85, spd: 85, spe: 55},
	        abilities: {0: "Thriver"},
	        prevo: "Dunsparce"
  },
  dunstatic: {
	        num: 9028,
	        species: "Dunstatic",
	        types: ["Electric","Flying"],
	        baseStats: {hp: 130, atk: 95, def: 80, spa: 80, spd: 100, spe: 80},
	        abilities: {0: "Serene Grace", 1: "Sheer Force", H: "Static"},
	        prevo: "Dunsparce"
  },  
  scyther: {
		num: 123,
		species: "Scyther",
		types: ["Bug", "Flying"],
		baseStats: {hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105},
		abilities: {0: "Swarm", 1: "Technician", H: "Steadfast"},
		heightm: 1.5,
		weightkg: 56,
		color: "Green",
		evos: ["scizor","reapther","scypsy","buzzsoar","scyanide","magzor"],
		eggGroups: ["Bug"],
   },
   reapther: {
	        num: 9029,
	        species: "Reapther",
	        types: ["Bug","Ghost"],
	        baseStats: {hp: 40, atk: 120, def: 80, spa: 65, spd: 75, spe: 125},
	        abilities: {0: "Aftermath", 1: "Technicican", H: "Levitate"},
	        prevo: "Scyther"
   },
   scypsy: {
	        num: 9030,
	        species: "Scypsy",
	        types: ["Bug","Psychic"],
	        baseStats: {hp: 65, atk: 100, def: 70, spa: 55, spd: 80, spe: 130},
	        abilities: {0: "Technician", 1: "Telepathy", H: "Magic Guard"},
	        prevo: "Scyther"
   },
   buzzsoar: {
	        num: 9031,
	        species: "Buzzsoar",
	        types: ["Bug","Flying"],
	        baseStats: {hp: 80, atk: 50, def: 70, spa: 130, spd: 70, spe: 100},
	        abilities: {0: "Speed Boost", 1: "Quick Claws", H: "Technician"},
	        prevo: "Scyther"
   },
   scyanide: {
	        num: 9032,
	        species: "Scyanide",
	        types: ["Bug","Poison"],
	        baseStats: {hp: 51, atk: 100, def: 50, spa: 120, spd: 50, spe: 109},
	        abilities: {0: "Tinted Lens", 1: "Poison Touch", H: "Acidic Touch"},
	        prevo: "Scyther"
   },
   magzor: {
	        num: 9033,
	        species: "Magzor",
	        types: ["Bug","Fire"],
	        baseStats: {hp: 70, atk: 130, def: 55, spa: 80, spd: 65, spe: 100},
	        abilities: {0: "Blaze", 1: "Technician", H: "Guts"},
	        prevo: "Scyther"
   },
};
