'use strict';

exports.BattlePokedex = {
  	yddraig: {
	      	num: 10001,
	      	species: "Yddraig",
	      	types: ["Dragon"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 60, atk: 60, def: 55, spa: 75, spd: 55, spe: 85},
	      	abilities: {0: "Infernal Scales", H: "Shed Skin"},
	      	heightm: 1.1,
	      	weightkg: 23,
	      	color: "Red",
	      	eggGroups: ["Dragon"],
    	},
	detuoy: {
	      	num: 10002,
	      	species: "Detuoy",
		gender: "N",
	      	types: ["Steel", "Flying"],
		baseStats: {hp: 60, atk: 120, def: 150, spa: 30, spd: 120, spe: 30},
	      	abilities: {0: "Aerilate"},
	      	heightm: 1.8,
	      	weightkg: 666,
	      	color: "Gray",
	      	eggGroups: ["Mineral"],
    	},
	mycelore: {
		num: 10003,
		species: "Mycelore",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Poison", "Fairy"],
		baseStats: {hp: 45, atk: 31, def: 21, spa: 86, spd: 106, spe: 31},
		abilities: {0: "Serene Grace", 1: "Effect Spore", H: "Wonder Skin"},
		heightm: 0.2,
		weightkg: 3.2,
		color: "Purple",
		evos: ["Muceptio"],
		eggGroups: ["Grass", "Amorphous"],
	},
	muceptio: {
		num: 10004,
		species: "Muceptio",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Poison", "Fairy"],
		baseStats: {hp: 60, atk: 46, def: 36, spa: 101, spd: 121, spe: 61},
		abilities: {0: "Serene Grace", 1: "Effect Spore", H: "Wonder Skin"},
		heightm: 0.6,
		weightkg: 9.8,
		color: "Purple",
		prevo: "mycelore",
		evos: ["Malifery"],
		evoLevel: 18,
		eggGroups: ["Grass", "Amorphous"],
	},
	malifery: {
		num: 10005,
		species: "Malifery",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Poison", "Fairy"],
		baseStats: {hp: 75, atk: 61, def: 51, spa: 116, spd: 136, spe: 91},
		abilities: {0: "Serene Grace", 1: "Effect Spore", H: "Wonder Skin"},
		heightm: 1.6,
		weightkg: 23.8,
		color: "Purple",
		prevo: "muceptio",
		evoLevel: 19, /* Shiny Stone */
		eggGroups: ["Grass", "Amorphous"],
	},
	canos: {
		num: 10006,
		species: "Canos",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Normal"],
		baseStats: {hp: 35, atk: 50, def: 30, spa: 35, spd: 40, spe: 40},
		abilities: {0: "Run Away", 1: "Quick Feet", H: "Pick Up"},
		heightm: 0.5,
		weightkg: 6.8,
		color: "Brown",
		evos: ["Mortos"],
		eggGroups: ["Field"],
	},
	mortos: {
		num: 10007,
		species: "Mortos",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Normal", "Ghost"],
		baseStats: {hp: 70, atk: 100, def: 60, spa: 70, spd: 80, spe: 80},
		abilities: {0: "Run Away", 1: "Quick Feet", H: "Pick Up"},
		heightm: 1.0,
		weightkg: 20.2,
		color: "Gray",
		prevo: "canos",
		evoLevel: 18,
		eggGroups: ["Field"],
	},
	narwander: {
		num: 10008,
		species: "Narwander",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Water", "Steel"],
		baseStats: {hp: 64, atk: 86, def: 40, spa: 40, spd: 40, spe: 65},
		abilities: {0: "Thick Fat", 1: "Snow Cloak", H: "Mold Breaker"},
		heightm: 0.5,
		weightkg: 10.8,
		color: "Gray",
		evos: ["Ortuska"],
		eggGroups: ["Field", "Water 2"],
	},
	ortuska: {
		num: 10009,
		species: "Ortuska",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Water", "Steel"],
		baseStats: {hp: 164, atk: 136, def: 60, spa: 50, spd: 60, spe: 85},
		abilities: {0: "Thick Fat", 1: "Snow Cloak", H: "Mold Breaker"},
		heightm: 7.4,
		weightkg: 783.4,
		color: "Gray",
		prevo: "narwander",
		evoLevel: 2, /* Ice Rock Level-Up */
		eggGroups: ["Field", "Water 2"],
	},
	larvary: {
		num: 10010,
		species: "Larvary",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Bug"],
		baseStats: {hp: 60, atk: 15, def: 65, spa: 15, spd: 65, spe: 10},
		abilities: {0: "Adaptability"},
		heightm: 5.6,
		weightkg: 0.2,
		color: "Yellow",
		evos: ["burnabee", "freezabee", "parabee", "drowzabee", "toxabee"],
		eggGroups: ["Bug"],
	},
	burnabee: {
		num: 10011,
		species: "Burnabee",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Bug", "Fire"],
		baseStats: {hp: 60, atk: 70, def: 75, spa: 95, spd: 75, spe: 80},
		abilities: {0: "Honey Gather"},
		heightm: 5.6,
		weightkg: 0.8,
		color: "Red",
		prevo: "larvary",
		evoLevel: 2, /* Burned Level-Up */
		eggGroups: ["Bug"],
	},
	freezabee: {
		num: 10012,
		species: "Freezabee",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Bug", "Ice"],
		baseStats: {hp: 60, atk: 70, def: 75, spa: 95, spd: 75, spe: 80},
		abilities: {0: "Honey Gather"},
		heightm: 5.6,
		weightkg: 0.8,
		color: "Blue",
		prevo: "larvary",
		evoLevel: 2, /* Frozen Level-Up */
		eggGroups: ["Bug"],
	},
	parabee: {
		num: 10013,
		species: "Parabee",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Bug", "Electric"],
		baseStats: {hp: 60, atk: 70, def: 75, spa: 95, spd: 75, spe: 80},
		abilities: {0: "Honey Gather"},
		heightm: 5.6,
		weightkg: 0.8,
		color: "Yellow",
		prevo: "larvary",
		evoLevel: 2, /* Paralyzed Level-Up */
		eggGroups: ["Bug"],
	},
	drowzabee: {
		num: 10014,
		species: "Drowzabee",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 70, def: 75, spa: 95, spd: 75, spe: 80},
		abilities: {0: "Honey Gather"},
		heightm: 5.6,
		weightkg: 0.8,
		color: "White",
		prevo: "larvary",
		evoLevel: 2, /* Asleep Level-Up */
		eggGroups: ["Bug"],
	},
	toxabee: {
		num: 10015,
		species: "Toxabee",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Bug", "Poison"],
		baseStats: {hp: 60, atk: 70, def: 75, spa: 95, spd: 75, spe: 80},
		abilities: {0: "Honey Gather"},
		heightm: 5.6,
		weightkg: 0.8,
		color: "Purple",
		prevo: "larvary",
		evoLevel: 2, /* Poisoned Level-Up */
		eggGroups: ["Bug"],
	},
	molaxy: {
		num: 10016,
		species: "Molaxy",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Ground", "Psychic"],
		baseStats: {hp: 96, atk: 40, def: 86, spa: 95, spd: 116, spe: 24},
		abilities: {0: "Forewarn", 1: "Telepathy", H: "Arena Trap"},
		heightm: 1.3,
		weightkg: 40.8,
		color: "Brown",
		eggGroups: ["Field"],
	},
	magnalith: {
		num: 10017,
		species: "Magnalith",
		gender: "M",
		types: ["Rock"],
		baseStats: {hp: 58, atk: 87, def: 82, spa: 97, spd: 62, spe: 114},
		abilities: {0: "Levitate", H: "Surge Surfer"},
		heightm: 1.5,
		weightkg: 52.7,
		color: "Brown",
		eggGroups: ["Mineral"],
	},
	uisge: {
		num: 11001,
		species: "Uisge",
		gender: "N",
		types: ["Water", "Psychic"],
		baseStats: {hp: 90, atk: 70, def: 110, spa: 135, spd: 70, spe: 105},
		abilities: {0: "Magical Emanation"},
		heightm: 4.3,
		weightkg: 77.7,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	talamh: {
		num: 11002,
		species: "Talamh",
		gender: "N",
		types: ["Ground", "Psychic"],
		baseStats: {hp: 90, atk: 105, def: 135, spa: 70, spd: 110, spe: 70},
		abilities: {0: "Tricky Emanation"},
		heightm: 4.3,
		weightkg: 77.7,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	adhair: {
		num: 11003,
		species: "Adhair",
		gender: "N",
		types: ["Flying", "Psychic"],
		baseStats: {hp: 90, atk: 110, def: 70, spa: 105, spd: 70, spe: 135},
		abilities: {0: "Wondrous Emanation"},
		heightm: 4.3,
		weightkg: 77.7,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	infineer: {
		num: 11004,
		species: "Infineer",
		baseForme: "Physical",
		gender: "N",
		types: ["Electric", "Psychic"],
		baseStats: {hp: 96, atk: 142, def: 91, spa: 142, spd: 91, spe: 118},
		abilities: {0: "Innovate"},
		heightm: 6.3,
		weightkg: 101.0,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	infineerspc: {
		num: 11004,
		species: "Infineer-Special",
		baseSpecies: "Infineer",
		forme: "Special",
		formeLetter: "S",
		gender: "N",
		types: ["Electric", "Psychic"],
		baseStats: {hp: 96, atk: 142, def: 91, spa: 142, spd: 91, spe: 118},
		abilities: {0: "Innovate"},
		heightm: 6.3,
		weightkg: 101.0,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	remordial: {
		num: 11005,
		species: "Remordial",
		baseForme: "Physical",
		gender: "N",
		types: ["Rock", "Grass"],
		baseStats: {hp: 96, atk: 91, def: 142, spa: 91, spd: 142, spe: 118},
		abilities: {0: "Conservate"},
		heightm: 6.3,
		weightkg: 101.0,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	remordialspc: {
		num: 11005,
		species: "Remordial-Special",
		baseSpecies: "Remordial",
		forme: "Special",
		formeLetter: "S",
		gender: "N",
		types: ["Rock", "Grass"],
		baseStats: {hp: 96, atk: 91, def: 142, spa: 91, spd: 142, spe: 118},
		abilities: {0: "Conservate"},
		heightm: 6.3,
		weightkg: 101.0,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	
	/* Istori Forms */
	
	doduo: {
		num: 84,
		species: "Doduo",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Normal", "Flying"],
		baseStats: {hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75},
		abilities: {0: "Run Away", 1: "Early Bird", H: "Tangled Feet"},
		heightm: 1.4,
		weightkg: 39.2,
		color: "Brown",
		evos: ["dodrio"],
		eggGroups: ["Flying"],
		otherFormes: ["doduoistor"],
	},
	dodrio: {
		num: 85,
		species: "Dodrio",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Normal", "Flying"],
		baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110},
		abilities: {0: "Run Away", 1: "Early Bird", H: "Tangled Feet"},
		heightm: 1.8,
		weightkg: 85.2,
		color: "Brown",
		prevo: "doduo",
		evoLevel: 31,
		eggGroups: ["Flying"],
		otherFormes: ["dodrioistor"],
	},
	doduoistor: {
		num: 84,
		species: "Doduo-Istor",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Steel", "Flying"],
		baseStats: {hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75},
		abilities: {0: "Pressure", 1: "Early Bird", H: "Tangled Feet"},
		heightm: 1.4,
		weightkg: 39.2,
		color: "Brown",
		evos: ["dodrioistor"],
		eggGroups: ["Flying"],
	},
	dodrioistor: {
		num: 85,
		species: "Dodrio-Istor",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Steel", "Flying"],
		baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110},
		abilities: {0: "Pressure", 1: "Early Bird", H: "Tangled Feet"},
		heightm: 1.8,
		weightkg: 85.2,
		color: "Brown",
		prevo: "doduoistor",
		evoLevel: 31,
		eggGroups: ["Flying"],
	},
	lapras: {
		num: 131,
		species: "Lapras",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Water", "Ice"],
		baseStats: {hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60},
		abilities: {0: "Water Absorb", 1: "Shell Armor", H: "Hydration"},
		heightm: 2.5,
		weightkg: 220,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
		otherFormes: ["laprasistor"],
	},
	laprasistor: {
		num: 131,
		species: "Lapras-Istor",
		genderRatio: {M: 0.5, F: 0.5},
		types: ["Ghost", "Ice"],
		baseStats: {hp: 130, atk: 65, def: 90, spa: 105, spd: 95, spe: 50},
		abilities: {0: "Snow Warning", H: "Water Absorb"},
		heightm: 4.5,
		weightkg: 420,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
	},
	riolu: {
		num: 447,
		species: "Riolu",
		types: ["Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 70, def: 40, spa: 35, spd: 40, spe: 60},
		abilities: {0: "Steadfast", 1: "Inner Focus", H: "Prankster"},
		heightm: 0.7,
		weightkg: 20.2,
		color: "Blue",
		evos: ["lucario"],
		eggGroups: ["Undiscovered"],
		otherFormes: ["rioluistor"],
	},
	lucario: {
		num: 448,
		species: "Lucario",
		types: ["Fighting", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 110, def: 70, spa: 115, spd: 70, spe: 90},
		abilities: {0: "Steadfast", 1: "Inner Focus", H: "Justified"},
		heightm: 1.2,
		weightkg: 54,
		color: "Blue",
		prevo: "riolu",
		evoLevel: 2,
		eggGroups: ["Field", "Human-Like"],
		otherFormes: ["lucarioistor", "lucariomega"],
	},
	rioluistor: {
		num: 447,
		species: "Riolu-Istor",
		types: ["Fighting", "Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 70, def: 40, spa: 35, spd: 40, spe: 60},
		abilities: {0: "Pixilate", 1: "Technician", H: "Prankster"},
		heightm: 0.7,
		weightkg: 20.2,
		color: "Blue",
		evos: ["lucarioistor"],
		eggGroups: ["Undiscovered"],
		otherFormes: ["riolu"],
	},
	lucarioistor: {
		num: 448,
		species: "Lucario-Istor",
		types: ["Fighting", "Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 80, def: 70, spa: 125, spd: 80, spe: 90},
		abilities: {0: "Pixilate", 1: "Technician", H: "Dazzling"},
		heightm: 1.2,
		weightkg: 54,
		color: "Blue",
		prevo: "rioluistor",
		evoLevel: 2,
		eggGroups: ["Field", "Human-Like"],
		otherFormes: ["lucario"],
	},
  };
