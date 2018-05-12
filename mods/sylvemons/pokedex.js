'use strict';

exports.BattlePokedex = {

    torterra: {
        inherit: true,
        types: ["Grass", "Rock"],
    },
    absol: {
        inherit: true,
        types: ["Dark", "Fairy"],
    },
    absolmega: {
        inherit: true,
        types: ["Dark", "Fairy"],
    },
    blissey: {
        inherit: true,
        types: ["Normal", "Fairy"],
    },
    cresselia: {
        inherit: true,
        types: ["Psychic", "Fairy"],
    },
    samurott: {
        inherit: true,
        types: ["Water", "Fighting"],
    },
    musharna: {
        inherit: true,
        types: ["Psychic", "Fairy"],
    },
    spritzee: {
        inherit: true,
        types: ["Fairy", "Poison"],
    },
    stakataka: {
        inherit: true,
        types: ["Ghost", "Steel"],
    },
    staraptor: {
        inherit: true,
        types: ["Fighting", "Flying"],
    },
	misdreavus: {
		inherit: true,
		types: ["Ghost", "Fairy"],
	},
	mismagius: {
		inherit: true,
		types: ["Ghost", "Fairy"],
	},
	yanmega: {
		inherit: true,
		types: ["Bug", "Dragon"],
	},
	goodra: {
		inherit: true,
		types: ["Dragon", "Poison"],
	},
	xurkitree: {
		inherit: true,
		types: ["Electric", "Grass"],
	},
	servine: {
		inherit: true,
		types: ["Grass", "Dragon"],
	},
	serperior: {
		inherit: true,
		types: ["Grass", "Dragon"],
	},
	parasect: {
		inherit: true,
		types: ["Bug", "Ghost"],
		abilities: {0: "Effect Spore", 1: "Cursed Body", H: "Prankster"},
	},
	mawile: {
		inherit: true,
		types: ["Dark", "Fairy"],
	},
	mawilemega: {
		inherit: true,
		types: ["Dark", "Fairy"],
	},
	vespiquen: {
		inherit: true,
		types: ["Bug", "Poison"],
		abilities: {0: "Poison Point", 1: "Intimidate", H: "Prankster"},
	},
	lugia: {
		inherit: true,
		types: ["Water", "Dragon"],
	},
	rotomfan: {
		inherit: true,
		types: ["Electric", "Steel"],
	},
	granbull: {
		inherit: true,
		types: ["Fairy", "Dark"],
		abilities: {0: "Intimidate", 1: "Strong Jaw", H: "Rattled"},
	},
	celebi: {
		inherit: true,
		types: ["Grass", "Fairy"],
	},
	jirachi: {
		inherit: true,
		types: ["Steel", "Fairy"],
	},
	manaphy: {
		inherit: true,
		types: ["Water", "Fairy"],
	},
	phione: {
		inherit: true,
		types: ["Water", "Fairy"],
	},
	victini: {
		inherit: true,
		types: ["Fire", "Fairy"],
	},
	lycanroc: {
		inherit: true,
		types: ["Rock", "Normal"],
		abilities: {0: "Rock Head", 1: "Sand Rush", H: "Adaptability"},
	},
	lycanrocmidnight: {
		inherit: true,
		types: ["Rock", "Dark"],
		abilities: {0: "Keen Eye", 1: "Vital Spirit", H: "Adaptability"},
	},
	lycanrocdusk: {
		inherit: true,
		types: ["Rock", "Fire"],
		abilities: {0: "Tough Claws", 1: "Technician", H: "Adaptability"},
	},
	deerling: {
		num: 585,
		species: "Deerling",
		baseForme: "Spring",
		types: ["Normal", "Grass"],
		baseStats: {hp: 60, atk: 60, def: 50, spa: 40, spd: 50, spe: 75},
		abilities: {0: "Chlorophyll", 1: "Sap Sipper", H: "Serene Grace"},
		heightm: 0.6,
		weightkg: 19.5,
		color: "Pink",
		evos: ["sawsbuck"],
		eggGroups: ["Field"],
	},
	deerlingspring: {
		num: 585,
		species: "Deerling-Spring",
		baseSpecies: "Deerling",
		forme: "Spring",
		formeLetter: "S",
		types: ["Fairy", "Grass"],
		baseStats: {hp: 60, atk: 60, def: 50, spa: 40, spd: 50, spe: 75},
		abilities: {0: "Chlorophyll", 1: "Sap Sipper", H: "Misty Surge"},
		heightm: 0.6,
		weightkg: 19.5,
		color: "Pink",
		evos: ["sawsbuck"],
		eggGroups: ["Field"],
	},
	sawsbuckwinter: {
    num: 586,
    species: "Sawsbuck",
    baseSpecies: "Sawsbuck",
    forme: "Winter",
    formeLetter: "W",
    types: ["Grass", "Ice"],
    baseStats: {hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 95},
    abilities: {0: "Slush Rush", 1: "Sap Sipper", HA: "Snow Warning"},
    heightm: 1.9,
    weightkg: 92.5,
    color: "Brown",
    eggGroups: ["Field"],
},
};
