'use strict';

exports.BattlePokedex = {
	// Eevee General
	eevee: {
		inherit: true,
		baseStats: {hp:80, atk:80, def:75, spa:70, spd:90, spe:80},
	},
	// xJoelituh
	marowak: {
		inherit: true,
		baseStats: {hp:60, atk:100, def:110, spa:50, spd:95, spe:75},
	},
	// qtrx
	missingno: {
		inherit: true,
		abilities: {0: "Oblivious"},
		basespecies: "Unown",
		forme: "Mega",
		formeLetter: "M",
		baseStats: {hp:48, atk:136, def:0, spa:6, spd:255, spe:29}, // HP must be same as base forme (Unown). Took liberties with SpD since Spc only has to correspond with one stat anyway.
	},
	unown: {
		inherit: true,
		otherForms: ["missingno"],
	},
	
	// UOP is bot
	klang: {
		inherit: true,
		baseStats: {hp: 90, atk:80, def: 110, spa:80, spd:110, spe: 75},
		gen: "SSB",
	},
	unleashourpassion: {
		num: 8000,
		species: "Durant",
		types: ["Bug", "Steel"],
		genderRatio: {M: 1, F: 0},
		baseStats: {hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45},
		abilities: {0: "Hustle"},
		heightm: 0.3,
		weightkg: 33,
		color: "Gray",
		eggGroups: ["Bug"],
		gen: "SSB",
	},
};
