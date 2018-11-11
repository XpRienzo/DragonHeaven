'use strict';

 exports.BattlePokedex = {
	 primarina: {
		 inherit: true,
		 baseStats: {hp: 90, atk: 74, def: 94, spa: 126, spd: 126, spe: 70},
		 abilities: {0: "Torrent", H: "Liquid Voice"},
	 },
	 decidueye: {
		 inherit: true,
		 baseStats: {hp: 88, atk: 112, def: 75, spa: 100, spd: 125, spe: 80},
		 abilities: {0: "Overgrow", H: "Mold Breaker"},
	 },
	 incineroar: {
		 inherit: true,
		 baseStats: {hp: 115, atk: 125, def: 95, spa: 80, spd: 90, spe: 95},
	 },
	 ninjask: {
		 inherit: true,
		 types: ["Bug", "Ground"],
		 baseStats: {hp: 70, atk: 110, def: 90, spa: 50, spd: 50, spe: 160},
		 abilities: {0: "Speed Boost", H: "Adaptability"},
	 },
	 shedinja: {
		 inherit: true,
		 baseStats: {hp: 1, atk: 110, def: 45, spa: 30, spd: 30, spe: 80},
	 },
	 moltres: {
		 inherit: true,
		 baseStats: {hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90},
		 abilities: {0: "Pressure", H: "Regenerator"},
	 },	
	 articuno: {
		 inherit: true,
		 baseStats: {hp: 90, atk: 85, def: 85, spa: 100, spd: 95, spe: 125},
		 abilities: {0: "Pressure", H: "Snow Warning"},
	 },
	 wormadam: {
		 inherit: true,
		 baseStats: {hp: 120, atk: 49, def: 95, spa: 109, spd: 115, spe: 56},
		 abilities: {0: "Filter", 1: "Regenerator", H: "Harvest"},
	 },	 
	 wormadamsandy: {
		 inherit: true,
		 baseStats: {hp: 90, atk: 100, def: 135, spa: 70, spd: 105, spe: 40},
		 abilities: {0: "Overcoat", H: "Prankster"},
	 },	
	 wormadamtrash: {
		 inherit: true,
		 baseStats: {hp: 80, atk: 109, def: 105, spa: 109, spd: 105, spe: 36},
		 abilities: {0: "Filter", 1: "Regenerator", H: "Harvest"},
	 },	
	 mothim: {
		 inherit: true,
		 types: ["Bug"],
		 baseStats: {hp: 70, atk: 114, def: 60, spa: 114, spd: 70, spe: 112},
		 abilities: {0: "Prankster", H: "Protean"},
	 },
	 hitmonchan: {
		 inherit: true,
		 types: ["Fighting", "Fire"],
		 baseStats: {hp: 50, atk: 120, def: 105, spa: 35, spd: 105, spe: 85},
		 abilities: {0: "Blaze", 1: "Iron Fist", H: "Inner Focus"},
	 },
	 hitmonlee: {
		 inherit: true,
		 types: ["Fighting", "Water"],
		 baseStats: {hp: 50, atk: 140, def: 63, spa: 35, spd: 112, spe: 100},
		 abilities: {0: "Fluid", 1: "Limber", H: "Unburden"},
	 },
	 dragalge: {
		 inherit: true,
		 baseStats: {hp: 100, atk: 65, def: 100, spa: 110, spd: 125, spe: 70},
		 abilities: {0: "Poison Point", 1: "Corrosion", H: "Adaptability"},
	 },
	 clawtizer: {
		 inherit: true,
		 types: ["Water", "Dragon"],
		 baseStats: {hp: 72, atk: 60, def: 96, spa: 120, spd: 96, spe: 96},
		 abilities: {0: "Mega Launcher"},
	 },
	 ambipom: {
		 inherit: true,
		 types: ["Normal", "Fighting"],
		 baseStats: {hp: 75, atk: 125, def: 76, spa: 60, spd: 76, spe: 115},
		 abilities: {0: "Scrappy", 1: "Technician", H: "Skill Link"},
	 },
	 cinccino: {
		 inherit: true,
		 baseStats: {hp: 85, atk: 115, def: 100, spa: 65, spd: 70, spe: 135},
		 abilities: {0: "Skill Link", 1: "Technician", H: "Serene Grace"},
	 },
	 azelf: {
		 inherit: true,
		 types: ["Psychic", "Fighting"],
		 baseStats: {hp: 80, atk: 130, def: 70, spa: 130, spd: 70, spe: 120},
		 abilities: {0: "Scrappy", H: "Infiltrator"},
	 },
	 mesprit: {
		 inherit: true,
		 types: ["Psychic", "Fairy"],
		 baseStats: {hp: 85, atk: 90, def: 115, spa: 115, spd: 115, spe: 80},
		 abilities: {0: "Levitate", H: "Magic Guard"},
	 },
	 uxie: {
		 inherit: true,
		 baseStats: {hp: 80, atk: 90, def: 135, spa: 70, spd: 135, spe: 90},
		 abilities: {0: "Levitate", H: "Marvel Scale"},
	 },
	 butterfree: {
		 inherit: true,
		 types: ["Bug", "Psychic"],
		 baseStats: {hp: 75, atk: 50, def: 80, spa: 120, spd: 105, spe: 95},
		 abilities: {0: "Tinted Lens", H: "Magic Guard"},
	 },
	 beedrill: {
		 inherit: true,
		 baseStats: {hp: 75, atk: 120, def: 70, spa: 45, spd: 90, spe: 125},
		 abilities: {0: "Skill Link", H: "Sniper"},
	 },
	 beautifly: {
		 inherit: true,
		 types: ["Bug", "Fairy"],
		 baseStats: {hp: 90, atk: 40, def: 90, spa: 130, spd: 90, spe: 85},
		 abilities: {0: "Competitive", H: "Triage"},
	 },
	 dustox: {
		 inherit: true,
		 baseStats: {hp: 100, atk: 40, def: 110, spa: 90, spd: 120, spe: 65},
		 abilities: {0: "Corrosion", H: "Intimidate"},
	 },
};
