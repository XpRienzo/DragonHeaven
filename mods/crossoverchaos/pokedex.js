'use strict';

exports.BattlePokedex = {
	/* For pokemon with two abilities use
	   abilities: {0: "Ability1Name", H: "Ability2Name"},
	   For a pokemon with three abilities use
	   abilities: {0: "Ability1Name", 1: "Ability2Name", H: "Ability3Name"}, */
     
   /* mario: {
		num: 6000001,
		species: "Salandit",
		types: [],
		baseStats: {hp: 48, atk: 44, def: 40, spa: 71, spd: 40, spe: 77},
		abilities: {0: "Corrosion", H: "Oblivious"},
	}, First three*/

kirby: {
		num: 6000004,
		species: "Kirby",
		types: ["Fairy"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Run Away"}, /* Copy Ability - This Pokemon copies the ability of the Pokemon that lands a move on it and gains a secondary typing that matches  */
	},
	shadowmewtwo: {
		num: 6000028,
		species: "Shadow Mewtwo", /* Pokken Tournament */
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 86, atk: 130, def: 85, spa: 164, spd: 85, spe: 130},
		abilities: {0: "Burst Mode"},
		otherFormes: ["shadowmewtwoburst"],
	},
	shadowmewtwoburst: {
		num: 6000028,
		species: "Shadow Mewtwo-Burst",
		baseSpecies: "Shadow Mewtwo",
		forme: "Burst",
		formeLetter: "B",
		types: ["Psychic", "Fighting"],
		gender: "N",
		baseStats: {hp: 86, atk: 210, def: 85, spa: 174, spd: 85, spe: 140},
		abilities: {0: "Burst Mode"},
	},
	marisakirisame: {
		num: 6000029,
		species: "Marisa Kirisame", /* Touhou */
		types: ["Electric", "Psychic"],
		gender: "F",
		baseStats: {hp: 70, atk: 120, def: 60, spa: 150, spd: 80, spe: 120},
		abilities: {0: "Magician", 1: "Levitate", H: "Drizzle"},
	},
	deathwing: {
		num: 6000030,
		species: "Deathwing", /* World of Warcraft */
		types: ["Dragon", "Fire"],
		gender: "M",
		baseStats: {hp: 120, atk: 150, def: 100, spa: 140, spd: 100, spe: 90},
		abilities: {0: "Magma Armor"},
	},
	niko: {
		num: 6000031,
		species: "Niko", /* OneShot */
		types: ["Normal", "Ground"],
		gender: "N",
		baseStats: {hp: 82, atk: 95, def: 100, spa: 65, spd: 110, spe: 68},
		abilities: {0: "Sun Carrier", 1: "Technician", H: "Telepathy"},
	},
	waluigi: {
		num: 6000032,
		species: "Waluigi", /* Mario */
		types: ["Dark"],
		gender: "M",
		baseStats: {hp: 89, atk: 105, def: 85, spa: 101, spd: 91, spe: 122},
		abilities: {0: "Prankster", H: "Showoff"},
	},
	sayori: {
		num: 6000033,
		species: "Sayori", /* Doki Doki Literature Club */
		types: ["Normal", "Fairy"],
		gender: "F",
		baseStats: {hp: 115, atk: 85, def: 85, spa: 95, spd: 85, spe: 95},
		abilities: {0: "Natural Cure", H: "Depression"},
		otherFormes: ["sayorihanged"],
	},
	sayorihanged: {
		num: 6000033,
		species: "Sayori-Hanged",
		baseSpecies: "Sayori",
		forme: "Hanged",
		formeLetter: "H",
		types: ["Normal", "Fairy"],
		gender: "F",
		baseStats: {hp: 115, atk: 85, def: 85, spa: 95, spd: 85, spe: 95},
		abilities: {0: "Natural Cure", H: "Depression"},
	},
	samus: {
		num: 6000034,
		species: "Samus", /* Metroid */
		types: ["Electric", "Fighting"],
		gender: "F",
		baseStats: {hp: 105, atk: 80, def: 95, spa: 145, spd: 95, spe: 85},
		abilities: {0: "Mega Launcher", H: "Tinted Lens"},
	},
	demigodofrock: {
		num: 6000035,
		species: "Demigod of Rock", /* Guitar Hero: Warriors of Rock */
		types: ["Rock", "Ghost"],
		gender: "M",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Solid Rock"},
	},
	sora: {
		num: 6000036,
		species: "Sora", /* Sora */
		types: ["Fighting", "Flying"],
		gender: "F",
		baseStats: {hp: 75, atk: 120, def: 85, spa: 100, spd: 85, spe: 120},
		abilities: {0: "Motor Drive"},
	},
	bigrig: {
		num: 6000037,
		species: "Big Rig", /* Big Rigs: Over the Road Racing */
		baseForme: "Reversed",
		types: ["Ghost", "Fire"],
		gender: "N",
		baseStats: {hp: 85, atk: 70, def: 70, spa: 70, spd: 50, spe: 255},
		abilities: {0: "Champion"},
		otherFormes: ["bigrigforwards"],
	},
	bigrigforwards: {
		num: 6000037,
		species: "Big Rig-Forwards",
		baseSpecies: "Big Rig",
		forme: "Forwards",
		formeLetter: "F",
		types: ["Ghost", "Fire"],
		gender: "N",
		baseStats: {hp: 85, atk: 70, def: 70, spa: 70, spd: 50, spe: 55},
		abilities: {0: "Heavy Metal"},
	},
	norn: {
		num: 6000038,
		species: "Norn", /* Katamari Series */
		types: ["Ice", "Fairy"],
		gender: "M",
		baseStats: {hp: 100, atk: 117, def: 56, spa: 87, spd: 125, spe: 115},
		abilities: {0: "Refrigerate", H: "Pixilate"},
	},
	pepsiman: {
		num: 6000039,
		species: "Pepsiman", /* Pepsiman */
		types: ["Water", "Steel"],
		gender: "M",
		baseStats: {hp: 110, atk: 90, def: 115, spa: 80, spd: 50, spe: 155},
		abilities: {0: "Bulletproof", 1: "Speed Boost", H: "Refreshing Pepsi"},
	},
	heavy: {
		num: 6000040,
		species: "Heavy", /* Team Fortress 2 */
		types: ["Normal"],
		gender: "M",
		baseStats: {hp: 150, atk: 80, def: 99, spa: 80, spd: 99, spe: 77},
		abilities: {0: "Thick Fat"},
	},
	reimuhakurei: {
		num: 6000041,
		species: "Reimu Hakurei", /* Touhou */
		types: ["Flying", "Psychic"],
		gender: "F",
		baseStats: {hp: 110, atk: 80, def: 110, spa: 100, spd: 140, spe: 60},
		abilities: {0: "Super Luck", H: "Sacred Barrier"},
	},
	crow: {
		num: 6000042,
		species: "Crow", /* Brawl Stars */
		types: ["Poison", "Flying"],
		gender: "N",
		baseStats: {hp: 60, atk: 87, def: 53, spa: 117, spd: 53, spe: 130},
		abilities: {0: "Merciless", 1: "Early Bird", H: "Extra Toxic"},
	},
};
