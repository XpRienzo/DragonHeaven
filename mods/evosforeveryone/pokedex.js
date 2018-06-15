'use strict';
/**@type {{[k: string]: TemplateData}} */
let BattlePokedex = {
	
  dunsparce: {
		inherit: true,
		evos: "",
	},
	dun: {
		num: 700001,
		species: "Dunsparce",
		types: ["Normal"],
		baseStats: {
			hp: 100,
			atk: 70,
			def: 70,
			spa: 65,
			spd: 65,
			spe: 45
		},
		abilities: {
			0: "Serene Grace",
			1: "Run Away",
			H: "Rattled"
		},
		heightm: 1.5,
		weightkg: 14,
		color: "Yellow",
		prevo: "Dunsparce
		eggGroups: ["Field"],
	},
	girafarig: {
		inherit: true,
		evos: ["a", "b"],
	},
	a: {
		num: 700002,
		species: "Girafarig",
		types: ["Normal", "Psychic"],
		baseStats: {
			hp: 70,
			atk: 80,
			def: 65,
			spa: 90,
			spd: 65,
			spe: 85
		},
		abilities: {
			0: "Inner Focus",
			1: "Early Bird",
			H: "Sap Sipper"
		},
		heightm: 1.5,
		weightkg: 41.5,
		color: "Yellow",
		prevo: "Girafarig
		eggGroups: ["Field"],
	},
	b: {
		num: 700003,
		species: "Girafarig",
		types: ["Normal", "Psychic"],
		baseStats: {
			hp: 70,
			atk: 80,
			def: 65,
			spa: 90,
			spd: 65,
			spe: 85
		},
		abilities: {
			0: "Inner Focus",
			1: "Early Bird",
			H: "Sap Sipper"
		},
		heightm: 1.5,
		weightkg: 41.5,
		color: "Yellow",
		prevo: "Girafarig
		eggGroups: ["Field"],
	},
	mew: {
		inherit: true,
		prevo: "",
	},
	m: {
		num: 700004,
		species: "Mew",
		types: ["Psychic"],
		gender: "N",
		baseStats: {
			hp: 100,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Synchronize"
		},
		heightm: 0.4,
		weightkg: 4,
		color: "Pink",
		evos: "",
		eggGroups: ["Undiscovered"],
	},

};

exports.BattlePokedex = BattlePokedex;
