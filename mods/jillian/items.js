'use strict';

exports.BattleItems = {

	"luxraynitea": {
		id: "luxraynitea",
		name: "Luxraynite A",
		megaStone: "Luxray-Mega-A",
		megaEvolves: "Luxray",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Luxray, this item allows it to Mega Evolve in battle.",
	},
	"luxrayniteb": {
		id: "luxrayniteb",
		name: "Luxraynite B",
		megaStone: "Luxray-Mega-B",
		megaEvolves: "Luxray",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Luxray, this item allows it to Mega Evolve in battle.",
	},
	"arcaninite": {
		id: "arcaninite",
		name: "Arcaninite",
		megaStone: "Arcanine-Mega",
		megaEvolves: "Arcanine",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is an Arcanine, this item allows it to Mega Evolve in battle.",
	},
	"haxorunite": {
		id: "haxorunite",
		name: "Haxorunite",
		megaStone: "Haxorus-Mega",
		megaEvolves: "Haxorus",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Haxorus, this item allows it to Mega Evolve in battle.",
	},
	"mienshaonite": {
		id: "mienshaonite",
		name: "Mienshaonite",
		megaStone: "Mienshao-Mega",
		megaEvolves: "Mienshao",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Mienshao, this item allows it to Mega Evolve in battle.",
	},
	"primapite": {
		id: "primapite",
		name: "Primapite",
		megaStone: "Primeape-Mega",
		megaEvolves: "Primeape",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Primeape, this item allows it to Mega Evolve in battle.",
	},
	"gothitellite": {
		id: "gothitellite",
		name: "Gothitellite",
		megaStone: "Gothitelle-Mega",
		megaEvolves: "Gothitelle",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Gothitelle, this item allows it to Mega Evolve in battle.",
	},
	"magnezite": {
		id: "magnezite",
		name: "magnezite",
		megaStone: "Magnezone-Mega",
		megaEvolves: "Magnezone",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Magnezone, this item allows it to Mega Evolve in battle.",
	},
	"ninjite": {
		id: "ninjite",
		name: "Ninjite",
		megaStone: "Ninjask-Mega",
		megaEvolves: "Ninjask",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Ninjask, this item allows it to Mega Evolve in battle.",
	},
	"zangoosite": {
		id: "zangoosite",
		name: "Zangoosite",
		megaStone: "Zangoose-Mega",
		megaEvolves: "Zangoose",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Zangoose, this item allows it to Mega Evolve in battle.",
	},
	"dedennite": {
		id: "dedennite",
		name: "Dedennite",
		megaStone: "Dedenne-Mega",
		megaEvolves: "Dedenne",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Dedenne, this item allows it to Mega Evolve in battle.",
	},
	"bisharpite": {
		id: "bisharpite",
		name: "Bisharpite",
		megaStone: "Bisharp-Mega",
		megaEvolves: "Bisharp",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Bisharp, this item allows it to Mega Evolve in battle.",
	},
	"weavilite": {
		id: "weavilite",
		name: "Weavilite",
		megaStone: "Weavile-Mega",
		megaEvolves: "Weavile",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Weavile, this item allows it to Mega Evolve in battle.",
	},
	"dugtrite": {
		id: "dugtrite",
		name: "Dugtrite",
		megaStone: "Dugtrio-Mega",
		megaEvolves: "Dugtrio",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Dugtrio, this item allows it to Mega Evolve in battle.",
	},
	"hippowdonite": {
		id: "hippowdonite",
		name: "Hippowdonite",
		megaStone: "Hippowdon-Mega",
		megaEvolves: "Hippowdon",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Hippowdon, this item allows it to Mega Evolve in battle.",
	},
	"quagsirite": {
		id: "quagsirite",
		name: "Quagsirite",
		megaStone: "Quagsire-Mega",
		megaEvolves: "Quagsire",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Quagsire, this item allows it to Mega Evolve in battle.",
	},
	"chandelurite": {
		id: "chandelurite",
		name: "Chandelurite",
		megaStone: "Chandelure-Mega",
		megaEvolves: "Chandelure",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Chandelure, this item allows it to Mega Evolve in battle.",
	},
	"spiritombite": {
		id: "spiritombite",
		name: "Spiritombite",
		megaStone: "Spiritomb-Mega",
		megaEvolves: "Spiritomb",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Spiritomb, this item allows it to Mega Evolve in battle.",
	},
	"grumpigite": {
		id: "grumpigite",
		name: "Grumpigite",
		megaStone: "Grumpig-Mega",
		megaEvolves: "Grumpig",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Grumpig, this item allows it to Mega Evolve in battle.",
	},
	"blisseynite": {
		id: "blisseynite",
		name: "Blisseynite",
		megaStone: "Blissey-Mega",
		megaEvolves: "Blissey",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Blissey, this item allows it to Mega Evolve in battle.",
	},
	"druddigonite": {
		id: "druddigonite",
		name: "Druddigonite",
		megaStone: "Druddigon-Mega",
		megaEvolves: "Druddigon",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Druddigon, this item allows it to Mega Evolve in battle.",
	},
	"corsolite": {
		id: "corsolite",
		name: "Corsolite",
		megaStone: "Corsola-Mega",
		megaEvolves: "Corsola",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Corsola, this item allows it to Mega Evolve in battle.",
	},
	"seviperite": {
		id: "seviperite",
		name: "Seviperite",
		megaStone: "Seviper-Mega",
		megaEvolves: "Seviper",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Seviper, this item allows it to Mega Evolve in battle.",
	},
	"meganiumite": {
		id: "meganiumite",
		name: "Meganiumite",
		megaStone: "Meganium-Mega",
		megaEvolves: "Meganium",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Meganium, this item allows it to Mega Evolve in battle.",
	},
	"typhlosionite": {
		id: "typhlosionite",
		name: "Typhlosionite",
		megaStone: "Typhlosion-Mega",
		megaEvolves: "Typhlosion",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Typhlosion, this item allows it to Mega Evolve in battle.",
	},
	"chimechonite": {
		id: "chimechonite",
		name: "Chimechonite",
		megaStone: "Chimecho-Mega",
		megaEvolves: "Chimecho",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Chimecho, this item allows it to Mega Evolve in battle.",
	},
	"feraligatrite": {
		id: "feraligatrite",
		name: "Feraligatrite",
		megaStone: "Feraligatr-Mega",
		megaEvolves: "Feraligatr",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Feraligatr, this item allows it to Mega Evolve in battle.",
	},
	"florgite": {
		id: "florgite",
		name: "Florgite",
		megaStone: "Florges-Mega",
		megaEvolves: "Florges",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Florges, this item allows it to Mega Evolve in battle.",
	},
	"flygonite": {
		id: "flygonite",
		name: "Flygonite",
		megaStone: "Flygon-Mega",
		megaEvolves: "Flygon",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Flygon, this item allows it to Mega Evolve in battle.",
	},
	"hydreigonite": {
		id: "hydreigonite",
		name: "Hydreigonite",
		megaStone: "Hydreigon-Mega",
		megaEvolves: "Hydreigon",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Hydreigon, this item allows it to Mega Evolve in battle.",
	},
	"miloticanite": {
		id: "miloticanite",
		name: "Miloticanite",
		megaStone: "Milotic-Mega",
		megaEvolves: "Milotic",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Milotic, this item allows it to Mega Evolve in battle.",
	},
	"vileplumite": {
		id: "vileplumite",
		name: "Vileplumite",
		megaStone: "Vileplume-Mega",
		megaEvolves: "Vileplume",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Vileplume, this item allows it to Mega Evolve in battle.",
	},
	"trickystone": {
		id: "trickystone",
		name: "Tricky Stone",
		fling: {
			basePower: 60,
		},
		gen: 7,
		desc: "Holder's use of Trick Room lasts 8 turns instead of 5.",
	},
	"magicstone": {
		id: "magicstone",
		name: "Magic Stone",
		fling: {
			basePower: 60,
		},
		gen: 7,
		desc: "Holder's use of Magic Room lasts 8 turns instead of 5.",
	},
	"wonderstone": {
		id: "wonderstone",
		name: "Wonder Stone",
		fling: {
			basePower: 60,
		},
		gen: 7,
		desc: "Holder's use of Wonder Room lasts 8 turns instead of 5.",
	},
	"toxicrock": {
		id: "toxicrock",
		name: "Toxic Rock",
		fling: {
			basePower: 40,
		},
		gen: 7,
		desc: "Holder's use of Poison Scent lasts 8 turns instead of 5.",
	},
	"assaultsword": {
		id: "assaultsword",
		name: "Assault Sword",
		fling: {
			basePower: 80,
		},
		onModifyAtkPriority: 1,
		onModifyAtk: function (atk) {
			return this.chainModify(1.5);
		},
		onDisableMove: function (pokemon) {
			let moves = pokemon.moveset;
			for (let i = 0; i < moves.length; i++) {
				if (this.getMove(moves[i].move).category === 'Status') {
					pokemon.disableMove(moves[i].id);
				}
			}
		},
		gen: 7,
		desc: "Holder's Atk is 1.5x, but it can only select damaging moves.",
	},
	"assaultshield": {
		id: "assaultshield",
		name: "Assault Shield",
		fling: {
			basePower: 80,
		},
		onModifyDefPriority: 1,
		onModifyDef: function (def) {
			return this.chainModify(1.5);
		},
		onDisableMove: function (pokemon) {
			let moves = pokemon.moveset;
			for (let i = 0; i < moves.length; i++) {
				if (this.getMove(moves[i].move).category === 'Status') {
					pokemon.disableMove(moves[i].id);
				}
			}
		},
		gen: 7,
		desc: "Holder's Def is 1.5x, but it can only select damaging moves.",
	},
	"assaultshoes": {
		id: "assaultshoes",
		name: "Assault Shoes",
		fling: {
			basePower: 80,
		},
		onModifySpePriority: 1,
		onModifySpe: function (spe) {
			return this.chainModify(1.5);
		},
		onDisableMove: function (pokemon) {
			let moves = pokemon.moveset;
			for (let i = 0; i < moves.length; i++) {
				if (this.getMove(moves[i].move).category === 'Status') {
					pokemon.disableMove(moves[i].id);
				}
			}
		},
		gen: 7,
		desc: "Holder's Speed is 1.5x, but it can only select damaging moves.",
	},
	"assaultwand": {
		id: "assaultwand",
		name: "Assault Wand",
		fling: {
			basePower: 80,
		},
		onModifySpAPriority: 1,
		onModifySpA: function (spa) {
			return this.chainModify(1.5);
		},
		onDisableMove: function (pokemon) {
			let moves = pokemon.moveset;
			for (let i = 0; i < moves.length; i++) {
				if (this.getMove(moves[i].move).category === 'Status') {
					pokemon.disableMove(moves[i].id);
				}
			}
		},
		gen: 7,
		desc: "Holder's Sp. Atk is 1.5x, but it can only select damaging moves.",
	},
	"treenomiumz": {
		id: "treenomiumz",
		name: "Treenomium Z",
		spritenum: 635,
		onTakeItem: false,
		zMove: "Rage of Mother Nature",
		zMoveFrom: "Nature Tricks",
		zMoveUser: ["Treenomian"],
		gen: 7,
		desc: "If holder is a Treenomian with Nature Tricks, it can use Rage of Mother Nature.",
	
	},
	"volcanoliumz": {
		id: "volcanoliumz",
		name: "Volcanolium Z",
		spritenum: 632,
		onTakeItem: false,
		zMove: "Infernal Lava Growl",
		zMoveFrom: "Propulsor Beam",
		zMoveUser: ["Volcanolion"],
		gen: 7,
		desc: "If holder is a Volcanolion with Propulsor Beam, it can use Infernal Lava Growl.",	
	},
	"poseidiumz": {
		id: "poseidiumz",
		name: "Poseidium Z",
		spritenum: 633,
		onTakeItem: false,
		zMove: "Giant Tidal Wave",
		zMoveFrom: "Surf",
		zMoveUser: ["Poseidocze"],
		gen: 7,
		desc: "If holder is a Poseidocze with Surf, it can use Giant Tidal Wave.",
	},
	"flareoniumz": {
		id: "flareoniumz",
		name: "Flareonium Z",
		spritenum: 632,
		onTakeItem: false,
		zMove: "Red Flare Rush",
		zMoveFrom: "Flame Charge",
		zMoveUser: ["Flareon"],
		gen: 7,
		desc: "If holder is a Flareon with Flame Charge, it can use Red Flare Rush.",
	},
	"vaporeoniumz": {
		id: "vaporeoniumz",
		name: "Vaporeonium Z",
		spritenum: 633,
		onTakeItem: false,
		zMove: "Blue Ocean Depths",
		zMoveFrom: "Scald",
		zMoveUser: ["Vaporeon"],
		gen: 7,
		desc: "If holder is a Vaporeon with Scald, it can use Blue Ocean Depths.",
	},
	"jolteoniumz": {
		id: "jolteoniumz",
		name: "Jolteonium Z",
		spritenum: 634,
		onTakeItem: false,
		zMove: "High Voltage Discharge",
		zMoveFrom: "Thunderbolt",
		zMoveUser: ["Jolteon"],
		gen: 7,
		desc: "If holder is a Jolteon with Thunderbolt, it can use High Voltage Discharge.",
	},
	"glaceoniumz": {
		id: "glaceoniumz",
		name: "Glaceonium Z",
		spritenum: 636,
		onTakeItem: false,
		zMove: "Icy Wind of the Far North",
		zMoveFrom: "Blizzard",
		zMoveUser: ["Glaceon"],
		gen: 7,
		desc: "If holder is a Glaceon with Blizzard, it can use Icy Wind of the Far North.",
	},
	"leafeoniumz": {
		id: "leafeoniumz",
		name: "Leafeonium Z",
		spritenum: 635,
		onTakeItem: false,
		zMove: "Meditation of Nature",
		zMoveFrom: "Synthesis",
		zMoveUser: ["Leafeon"],
		gen: 7,
		desc: "If holder is a Leafeon with Synthesis, it can use Meditation of Nature.",
	},
	"espeoniumz": {
		id: "espeoniumz",
		name: "Espeonium Z",
		spritenum: 641,
		onTakeItem: false,
		zMove: "Mental's Evilness Crusher",
		zMoveFrom: "Psyshock",
		zMoveUser: ["Espeon"],
		gen: 7,
		desc: "If holder is a Espeon with Psyshock, it can use Mental's Evilness Crusher.",
	},
	"umbreoniumz": {
		id: "umbreoniumz",
		name: "Umbreonium Z",
		spritenum: 646,
		onTakeItem: false,
		zMove: "Ultimate Madness",
		zMoveFrom: "Foul Play",
		zMoveUser: ["Umbreon"],
		gen: 7,
		desc: "If holder is a Umbreon with Foul Play, it can use Ultimate Madness.",	
	},
	"sylveoniumz": {
		id: "sylveoniumz",
		name: "Sylveonium Z",
		spritenum: 648,
		onTakeItem: false,
		zMove: "Blessing of the Gods",
		zMoveFrom: "Moonblast",
		zMoveUser: ["Sylveon"],
		gen: 7,
		desc: "If holder is a Sylveon with Moonblast, it can use Blessing of the Gods.",
	},
	"puncheoniumz": {
		id: "puncheoniumz",
		name: "Puncheonium Z",
		spritenum: 637,
		onTakeItem: false,
		zMove: "Extreme Pummeling",
		zMoveFrom: "Megaton Punch",
		zMoveUser: ["Puncheon"],
		gen: 7,
		desc: "If holder is a Puncheon with Megaton Punch, it can use Extreme Pummeling.",
	},
	"zephyreoniumz": {
		id: "zephyreoniumz",
		name: "Zephyreonium Z",
		spritenum: 640,
		onTakeItem: false,
		zMove: "Warth of Shining Skies",
		zMoveFrom: "Hurricane",
		zMoveUser: ["Zephyreon"],
		gen: 7,
		desc: "If holder is a Zephyreon with Hurricane, it can use Warth of Shining Skies.",
	},
	"landineoniumz": {
		id: "landineoniumz",
		name: "Landineonium Z",
		spritenum: 639,
		onTakeItem: false,
		zMove: "Giant Sand Burial",
		zMoveFrom: "Earthquake",
		zMoveUser: ["Landineon"],
		gen: 7,
		desc: "If holder is a Landineon with Earthquake, it can use Giant Sand Burial.",
	},
	"tombeoniumz": {
		id: "tombeoniumz",
		name: "Tombeonium Z",
		spritenum: 644,
		onTakeItem: false,
		zMove: "Sentence of the Walking Dead",
		zMoveFrom: "Hex",
		zMoveUser: ["Tombeon"],
		gen: 7,
		desc: "If holder is a Tombeon with Hex, it can use Sentence of the Walking Dead.",
	},
	"quetzaleoniumz": {
		id: "quetzaleoniumz",
		name: "Quetzaleonium Z",
		spritenum: 645,
		onTakeItem: false,
		zMove: "Rage of The Superior Dragon",
		zMoveFrom: "Outrage",
		zMoveUser: ["Quetzaleon"],
		gen: 7,
		desc: "If holder is a Quetzaleon with Outrage, it can use Rage of The Superior Dragon.",
	},
	"groudoniumz": {
		id: "groudoniumz",
		name: "Groudonium Z",
		spritenum: 639,
		onTakeItem: false,
		zMove: "Volcanic Apocalypse",
		zMoveFrom: "Precipice Blades",
		zMoveUser: ["Groudon"],
		gen: 7,
		desc: "If holder is a Groudon with Precipice Blades, it can use Volcanic Apocalypse.",
	},
	"kyogriumz": {
		id: "kyogriumz",
		name: "Kyogrium Z",
		spritenum: 633,
		onTakeItem: false,
		zMove: "Outrage of the Seven Seas",
		zMoveFrom: "Origin Pulse",
		zMoveUser: ["Kyogre"],
		gen: 7,
		desc: "If holder is a Kyogre with Origin Pulse, it can use Outrage of the Seven Seas.",
	},
	"rayquazaniumz": {
		id: "rayquazaniumz",
		name: "Rayquazanium Z",
		spritenum: 640,
		onTakeItem: false,
		zMove: "Ultimate Power of The Skies",
		zMoveFrom: "Dragon Ascent",
		zMoveUser: ["Rayquaza"],
		gen: 7,
		desc: "If holder is a Rayquaza with Dragon Ascent, it can use Ultimate Power of The Skies.",
	},
	"jirachiumz": {
		id: "jirachiumz",
		name: "Jirachium Z",
		spritenum: 647,
		onTakeItem: false,
		zMove: "Jirachi's Eternal Wishes",
		zMoveFrom: "Doom Desire",
		zMoveUser: ["Jirachi"],
		gen: 7,
		desc: "If holder is a Jirachi with Doom Desire, it can use Jirachi's Eternal Wishes.",
	},
	"deoxyiumz": {
		id: "deoxyiumz",
		name: "Deoxyium Z",
		spritenum: 641,
		onTakeItem: false,
		zMove: "Ultimate Mind Control",
		zMoveFrom: "Psycho Boost",
		zMoveUser: ["Deoxys"],
		gen: 7,
		desc: "If holder is a Deoxys with Psycho Boost, it can use Ultimate Mind Control.",
	},
	"torkoaliumz": {
		id: "torkoaliumz",
		name: "Torkoalium Z",
		spritenum: 632,
		onTakeItem: false,
		zMove: "Lava Shielding Defense",
		zMoveFrom: "Lava Plume",
		zMoveUser: ["Torkoal"],
		gen: 7,
		desc: "If holder is a Torkoal with Lava Plume, it can use Lava Shielding Defense.",
	},
	"ninetalesiumz": {
		id: "ninetalesiumz",
		name: "Ninetalesium Z",
		spritenum: 644,
		onTakeItem: false,
		zMove: "Prophetical Curse",
		zMoveFrom: "Hex",
		zMoveUser: ["Ninetales"],
		gen: 7,
		desc: "If holder is a Ninetales with Hex, it can use Prophetical Curse.",
	},		
};
