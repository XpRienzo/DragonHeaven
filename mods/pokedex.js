'use strict';

exports.BattlePokedex = {
  charish: {
        num: 1000001,
        species: "Charish",
        types: ["Fire","Dark"],
        baseStats: {hp: 55, atk: 70, def: 65, spa: 82, spd: 70, spe: 31},
        abilities: {0: "Flame Body", H: "Flare Boost"},
        evos: ["charkol"],
	},
  charkol: {
        num: 1000002,
        species: "Charkol",
        types: ["Fire","Dark"],
        baseStats: {hp: 90, atk: 112, def: 81, spa: 109, spd: 75, spe: 53},
        abilities: {0: "Flare Boost"},
        evos: [""],
        prevo: "charish",
  },
  calibri: {
        num: 1000003,
        species: "Calibri",
        types: ["Fighting"],
        baseStats: {hp: 80, atk: 140, def: 85, spa: 40, spd: 100, spe: 40},
        abilities: {0: "Speed Boost"},
        evos: [""],
        prevo: "",
  },
  sudowoodo-mega: {
        num: 1000004,
        species: "Sudowoodo-Mega",
        types: ["Rock"],
        baseStats: {hp: 70, atk: 115, def: 135, spa: 15, spd: 85, spe: 40},
        abilities: {0: "Skill Link"},
        evos: [""],
        prevo: "Sudowoodo",
  },
};
	
