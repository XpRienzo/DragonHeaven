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
    aromatisse: {
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
		abilities: {0: "Levitate", H: "Magic Healing"},
	},
	mismagius: {
		inherit: true,
		types: ["Ghost", "Fairy"],
		abilities: {0: "Levitate", H: "Magic Healing"},
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
		abilities: {0: "Unnerve", 1: "Poison Point", H: "Intimidate"},
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
	solgaleo: {
		inherit: true,
		types: ["Steel", "Fire"],
		abilities: {0: "Full Metal Body", H: "Drought"},
	},
	lunala: {
		inherit: true,
		types: ["Ghost", "Fairy"],
		abilities: {0: "Shadow Shield", H: "Shadow Surge"},
	},
	necrozma: {
		inherit: true,
		types: ["Psychic", "Dark"],
		abilities: {0: "Prism Armor", H: "Magic Bounce"},
	},
	necrozmaduskmane: {
		inherit: true,
		types: ["Psychic", "Steel"],
		abilities: {0: "Prism Armor", H: "Full Metal Body"},
	},
	necrozmadawnwings: {
		inherit: true,
		types: ["Dark", "Ghost"],
		abilities: {0: "Prism Armor", H: "Shadow Shield"},
	},
	milotic: {
		inherit: true,
		types: ["Water", "Fairy"],
		abilities: {0: "Multiscale", 1: "Competitive", H: "Soul-Heart"},
	},
	growlithe: {
		inherit: true,
		types: ["Fire", "Normal"],
	},
	arcanine: {
		inherit: true,
		types: ["Fire", "Normal"],
	},
	slaking: {
		inherit: true,
		abilities: {0: "Truant", H: "Klutz"},
	},
	trapinch: {
		inherit: true,
		types: ["Ground", "Bug"],
		abilities: {0: "Hyper Cutter", 1: "Sand Stream", H: "Arena Trap"},
	},
	vibrava: {
		inherit: true,
		types: ["Ground", "Bug"],
		abilities: {0: "Levitate", 1: "Sand Stream", H: "Tinted Lens"},
	},
	flygon: {
		inherit: true,
		types: ["Ground", "Bug"],
		abilities: {0: "Levitate", 1: "Sand Stream", H: "Tinted Lens"},
	},
	octillery: {
		inherit: true,
		types: ["Water", "Fire"],
		abilities: {0: "Protean", 1: "Regenerator", H: "Mega Launcher"},
	},
    deerlingwinter: {
        inherit: true,
        types: ["Grass", "Ice"],
        abilities: {0: "Slush Rush", 1: "Sap Sipper", H: "Snow Warning"},
    },
    deerlingsummer: {
        inherit: true,
        types: ["Grass", "Fire"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Drought"},
    },
    deerling: {
        inherit: true,
        types: ["Grass", "Fairy"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Misty Surge"},
    },
    deerlingautumn: {
        inherit: true,
        types: ["Grass", "Ghost"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Shadow Surge"},
    },
    sawsbuckwinter: {
        inherit: true,
        types: ["Grass", "Ice"],
        abilities: {0: "Slush Rush", 1: "Sap Sipper", H: "Snow Warning"},
    },
    sawsbucksummer: {
        inherit: true,
        types: ["Grass", "Fire"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Drought"},
    },
    sawsbuck: {
        inherit: true,
        types: ["Grass", "Fairy"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Misty Surge"},
    },
    sawsbuckautumn: {
        inherit: true,
        types: ["Grass", "Ghost"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Shadow Surge"},
    },
	oricorio: {
      inherit: true,
		types: ["Fire", "Flying"],
		abilities: {0: "Dancer", H: "Serene Grace"},
	},
	oricoriopompom: {
      inherit: true,
		types: ["Electric", "Flying"],
		abilities: {0: "Dancer", H: "Serene Grace"},
	},
	oricoriopau: {
      inherit: true,
		types: ["Psychic", "Flying"],
		abilities: {0: "Dancer", H: "Serene Grace"},
	},
	oricoriosensu: {
      inherit: true,
		types: ["Ghost", "Flying"],
		abilities: {0: "Dancer", H: "Serene Grace"},
	},
	audinomega: {
      inherit: true,
		types: ["Normal", "Fairy"],
		abilities: {0: "Magic Healing"},
	},
	fennekin: {
      inherit: true,
		types: ["Fire"],
      abilities: {0: "Blaze", H: "Magic Healing"},
	},
	braixen: {
      inherit: true,
		types: ["Fire"],
      abilities: {0: "Blaze", H: "Magic Healing"},
	},
	delphox: {
      inherit: true,
		types: ["Fire", "Psychic"],
      abilities: {0: "Blaze", H: "Magic Healing"},
	},
	hoopa: {
      inherit: true,
		types: ["Psychic", "Ghost"],
      abilities: {0: "Magician", H: "Magic Healing"},
	},
	cresselia: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Levitate", H: "Magic Healing"},
	},
	chingling: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Levitate", H: "Magic Healing"},
	},
	chimecho: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Levitate", H: "Magic Healing"},
	},
	sigilyph: {
		inherit: true,
		types: ["Psychic", "Flying"],
      abilities: {0: "Magic Healing", 1: "Magic Guard", H: "Tinted Lens"},
	},
	haunter: {
		inherit: true,
		types: ["Ghost", "Poison"],
		abilities: {0: "Levitate", H: "Ethereal Fist"},
	},
	gengar: {
		inherit: true,
		types: ["Ghost", "Poison"],
		abilities: {0: "Cursed Body", H: "Ethereal Fist"},
	},
	solosis: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Ethereal Fist", 1: "Magic Guard", H: "Regenerator"},
	},
	duosion: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Ethereal Fist", 1: "Magic Guard", H: "Regenerator"},
	},
	reuniclus: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Ethereal Fist", 1: "Magic Guard", H: "Regenerator"},
	},
	alakazam: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Synchronize", 1: "Ethereal Fist", H: "Magic Guard"},
	},
	alakazammega: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Ethereal Fist"},
	},
	dusknoir: {
		inherit: true,
		types: ["Ghost"],
      abilities: {0: "Pressure", 1: "Ethereal Fist", H: "Frisk"},
	},
	shaymin: {
		inherit: true,
		types: ["Grass"],
      abilities: {0: "Natural Cure", H: "Dispersal"},
	},
	sunkern: {
		inherit: true,
		types: ["Grass"],
      abilities: {0: "Chlorophyll", 1: "Solar Power", H: "Dispersal"},
	},
	sunflora: {
		inherit: true,
		types: ["Grass"],
      abilities: {0: "Chlorophyll", 1: "Solar Power", H: "Dispersal"},
	},
	bulbasaur: {
		inherit: true,
		types: ["Grass", "Poison"],
      abilities: {0: "Overgrow", H: "Dispersal"},
	},
	ivysaur: {
		inherit: true,
		types: ["Grass", "Poison"],
      abilities: {0: "Overgrow", H: "Dispersal"},
	},
	venusaur: {
		inherit: true,
		types: ["Grass", "Poison"],
      abilities: {0: "Overgrow", H: "Dispersal"},
	},
	trevenant: {
		inherit: true,
		types: ["Ghost", "Grass"],
      abilities: {0: "Natural Cure", 1: "Dispersal", H: "Harvest"},
	},
	cinccino: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Cute Charm", 1: "Housekeeping", H: "Skill Link"},
	},
	jirachi: {
		inherit: true,
		types: ["Steel", "Psychic"],
      abilities: {0: "Serene Grace", H: "Housekeeping"},
	},
	chansey: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Natural Cure", 1: "Housekeeping", H: "Healer"},
	},
	blissey: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Natural Cure", 1: "Housekeeping", H: "Healer"},
	},
	delcatty: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Cute Charm", 1: "Normalize", H: "Housekeeping"},
	},
	wigglytuff: {
		inherit: true,
		types: ["Normal", "Fairy"],
      abilities: {0: "Cute Charm", 1: "Competitive", H: "Housekeeping"},
	},
	malamar: {
		inherit: true,
		types: ["Dark", "Psychic"],
      abilities: {0: "Suction Cups", 1: "Contrary", H: "Mind Trick"},
	},
	litwick: {
		inherit: true,
		types: ["Ghost", "Fire"],
      abilities: {0: "Flash Fire", 1: "Mind Trick", H: "Infiltrator"},
	},
	lampent: {
		inherit: true,
		types: ["Ghost", "Fire"],
      abilities: {0: "Flash Fire", 1: "Mind Trick", H: "Infiltrator"},
	},
	chandelure: {
		inherit: true,
		types: ["Ghost", "Fire"],
      abilities: {0: "Flash Fire", 1: "Mind Trick", H: "Infiltrator"},
	},
	hypno: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Insomnia", 1: "Forewarn", H: "Mind Trick"},
	},
};
