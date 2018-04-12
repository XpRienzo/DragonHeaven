'use strict';

exports.BattleAbilities = {

/* 
Bulletproof	Protects the Pokémon from some ball, bomb, cannon and blast moves. (List of "cannon" and "blast" moves: Steam Eruption, Flash Cannon, Techno Blast, Fire Blast, Moonblast, Aeroblast, Bullet Fire, Twineedle, Plume Cannon, Draco Meteor, Bullet Punch, Spike Cannon, Fleur Cannon, Meteor Shower, Hydro Cannon) 
Dimension Warp	Sets up Inverse Room upon switchin. Under Inverse Room, Weakness and Resistances (Not immunities) are reversed
Disperal	Boosts Bullet Seed, Seed Bomb, and Seed Flare by 1.2x power, and Leech Seed deals 20% more damage and heals 30% more HP each turn.
Forecast	If this Pokémon is holding a Weather Rock, its secondary typing becomes Water/Fire/Rock/Ice/Flying/Dark (depending on the rock) and summon the corresponding weather upon entering the field. Under Strong Winds, this mon gains the added Flying type.
Knight's Blade	Boosts the power of sword, cut, slash, and blade moves by 1.5x (List: Psycho Cut, Cut, Slash, Night Slash, Solar Blade, Leaf Blade, X-Scissor, Cross Poison, Air Slash, Air Cutter, Fury Cutter, Sacred Sword, Secret Sword, Razor Shell)
Mega Launcher	Boosts the power of Pulse and Ballistic moves by 1.5x. (List: Steam Eruption, Flash Cannon, Techno Blast, Fire Blast, Moonblast, Aeroblast, Bullet Fire, Twineedle, Plume Cannon, Draco Meteor, Bullet Punch, Spike Cannon, Fleur Cannon, Meteor Shower, Hydro Cannon, Blast Burn)
Misty Surge	Summons Misty Terrain upon switching-in. Misty Terrain now boosts Fairy-type moves by 1.5x.
Obstinacy	User gains a boost in it's moves the lower it's HP gets. Formula:  (1.0 - [Current percentage of HP in decimal form]) + 1.0
Time Warp	Sets Trick Room upon entry
*/
	"shadowsurge": {
		shortDesc: "Summons Shadow Sky upon switching in.",
		onStart: function (source) {
			this.setWeather('shadowsky');
			this.add('Shadow Surge');
		},
		id: "shadowsurge",
		name: "Shadow Surge",
	},
	"airstream": {
		shortDesc: "Summons Air Current upon switching in.",
		onStart: function (source) {
			this.setWeather('aircurrent');
			this.add('Air Stream');
		},
		id: "airstream",
		name: "Air Stream",
	},
	"timewarp": {
		shortDesc: "On switch-in, this Pokemon summons Trick Room.",
		onStart: function (source) {
			this.useMove('Trick Room', source);
		},
		id: "timewarp",
		name: "Time Warp",
	},
	mindtrick: {
		shortDesc: "Stat changes are received by the opposing pokemon and vice versa",
		onStart: function (target, source) {
			let targetBoosts = {};
			let sourceBoosts = {};

			for (let i in target.boosts) {
				targetBoosts[i] = target.boosts[i];
				sourceBoosts[i] = source.boosts[i];
			}

			target.setBoost(sourceBoosts);
			source.setBoost(targetBoosts);

			this.add('-swapboost', source, target, '[from] ability: Mind Trick');
		},
		id: "mindtrick",
	name: "Mind Trick",
	},
	housekeeping: {
		shortDesc: "Removes hazards upon switch-in.",
	onStart: function (pokemon) {
				let sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.getEffect(condition).name, '[from] ability: Housekeeping', '[of] ' + pokemon);
					}
				}
			},
		id: "housekeeping",
	name: "Housekeeping",
	},
etheralfist: {
	shortDesc: "Punch Moves become Special and gain 1.2x damage (Same Moves effected as Iron Fist).",
	onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
	onModifyMovePriority: 8,
	onModifyMove: function (move, pokemon) {
		if  (move.flags['punch'] && move.category === 'Physical') move.category = 'Special';
	},
	id: "etheralfist",
	name: "Etheral Fist",
},
	"magichealing": {
		id: "magichealing",
		name: "Magic Healing",
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual: function (pokemon) {
			if (this.isTerrain('grassyterrain')) return;
			this.heal(pokemon.maxhp / 16);
		},
		onTerrain: function (pokemon) {
			if (!this.isTerrain('grassyterrain')) return;
			this.heal(pokemon.maxhp / 16);
		},
		desc: "At the end of every turn, the Pokemon restores 1/16 of its max HP.",
	},

	"swarm": {
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.",
		shortDesc: "This Pokemon's attacking stat is 1.5x with Bug attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		id: "swarm",
		name: "Swarm",
		rating: 2,
		num: 68,
	},
	"blaze": {
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "This Pokemon's attacking stat is 1.5x with Fire attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		id: "blaze",
		name: "Blaze",
		rating: 2,
		num: 66,
	},
	"torrent": {
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.",
		shortDesc: "This Pokemon's attacking stat is 1.5x with Water attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		id: "torrent",
		name: "Torrent",
		rating: 2,
		num: 67,
	},
	"overgrow": {
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.",
		shortDesc: "This Pokemon's attacking stat is 1.5x with Grass attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		id: "overgrow",
		name: "Overgrow",
		rating: 2,
		num: 65,
	},
	"technician": {
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
		shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (basePower <= 75) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		id: "technician",
		name: "Technician",
		rating: 4,
		num: 101,
	},
	"megalauncher": {
		desc: "This Pokemon's pulse, ball and bomb moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
		shortDesc: "This Pokemon's pulse, ball and bomb moves have 1.5x power. Heal Pulse heals 3/4 target's max HP.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.flags['pulse' || 'bullet']) {
				return this.chainModify(1.5);
			}
		},
		id: "megalauncher",
		name: "Mega Launcher",
		rating: 3.5,
		num: 178,
	},
	"thickfat": {
		desc: "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat. Immune to hail damage, burn, and freeze.",
		onModifyAtkPriority: 6,
		onSourceModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail') return false;
		},
		onUpdate: function (pokemon) {
			if (pokemon.status === 'brn' || pokemon.status === 'frz') {
				this.add('-activate', pokemon, 'ability: Thick Fat');
				pokemon.cureStatus();
			}
		},
		id: "thickfat",
		name: "Thick Fat",
		rating: 3.5,
		num: 47,
	},
	"liquidvoice": {
		desc: "This Pokemon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's sound-based moves become Water type and power up by 1.2x times.",
		onModifyMovePriority: -1,
		onModifyMove: function (move) {
			if (move.flags['sound']) {
				move.type = 'Water';
				move.liquidvoiceBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.liquidvoiceBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "liquidvoice",
		name: "Liquid Voice",
		rating: 2.5,
		num: 204,
	},
	"scrappy": {
		shortDesc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves.",
		onModifyMovePriority: -5,
		onModifyMove: function (move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity = true;
			}
		},
		id: "scrappy",
		name: "Scrappy",
		rating: 3,
		num: 113,
	},
	"guardup": {
		desc: "On switch-in, this Pokemon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
		shortDesc: "Upon switch-in, this Pokemon's Defense or Special Defense goes up by 1 stage depending on the opponent's higher attacking stat (Download clone).",
		onStart: function (pokemon) {
			let foeactive = pokemon.side.foe.active;
			let totalatk = 0;
			let totalspa = 0;
			for (let i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || foeactive[i].fainted) continue;
				totalatk += foeactive[i].getStat('atk', false, true);
				totalspa += foeactive[i].getStat('spa', false, true);
			}
			if (totalatk && totalspa >= totalspa) {
				this.boost({spd: 1});
			} else if (totalspa) {
				this.boost({def: 1});
			}
		},
		id: "guardup",
		name: "Guard Up",
		rating: 4,
		num: 88,
	},
	"corrosion": {
		inherit: true,
		onModifyMovePriority: -5,
		onModifyMove: function (move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Steel'] = true;
				move.ignoreImmunity['Poison'] = true;
			}
		},
		id: "corrosion",
		name: "Corrosion",
		rating: 3,
		num: 113,
	},
	"flareboost": {
		desc: "While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.",
		shortDesc: "While this Pokemon is burned, its special attacks have 2x power.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (attacker.status === 'brn' && move.category === 'Special') {
				return this.chainModify(2);
			}
		},
		id: "flareboost",
		name: "Flare Boost",
		rating: 2.5,
		num: 138,
	},
};
