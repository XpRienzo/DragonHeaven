'use strict';

exports.BattleMovedex = {
	"scorchingwater": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "Has a 30% chance to burn the target. This move's type effectiveness against Ice is changed to be super effective no matter what this move's type is.",
		shortDesc: "30% chance to burn the target. Thaws user. Super effective on Ice.",
		id: "scorchingwater",
		name: "Scorching Water",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onEffectiveness: function (typeMod, type) {
			if (type === 'Ice') return 1;
		},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		zMovePower: 140,
		contestType: "Tough",
	},
	"boilingpoint": {
		accuracy: 100,
		basePower: 80,
		basePowerCallback: function (pokemon, target, move) {
			if (target.status === 'brn') return move.basePower * 2;
			return move.basePower;
		},
		category: "Special",
		desc: "Power doubles if the target is burned.",
		shortDesc: "Power doubles if the target is burned.",
		id: "boilingpoint",
		name: "Boiling Point",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Water",
		zMovePower: 160,
		contestType: "Tough",
	},
	"shurikenjet": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "shurikenjet",
		name: "Shuriken Jet",
		pp: 10,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: false,
		target: "normal",
		type: "Water",
		zMovePower: 190,
		contestType: "Cool",
	},
	"thermalslam": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Has a 20% chance to burn the target. The target thaws out if it is frozen.",
		shortDesc: "20% chance to burn the target. Thaws target.",
		id: "thermalslam",
		name: "Thermal Slam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		zMovePower: 140,
		contestType: "Tough",
	},
	"toyshurikens": {
		accuracy: 85,
		basePower: 10,
		category: "Physical",
		desc: "Hits two to five times, with each hit having a 30% chance to lower the target's Attack by 1 stage. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn. Each hit has 30% chance to lower Attack.",
		id: "toyshurikens",
		name: "Toy Shurikens",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: {
			chance: 30,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Water",
		zMovePower: 100,
		contestType: "Cute",
	},
	"schemingsteam": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Prevents the target from using non-damaging moves for the duration of the turn. Pokemon with the Ability Oblivious or protected by the Ability Aroma Veil are immune to the secondary effect.",
		shortDesc: "Usually goes first. 100% Taunt chance.",
		id: "schemingsteam",
		name: "Scheming Steam",
		pp: 10,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			volatileStatus: 'taunt',
		},
		target: "normal",
		type: "Water",
		zMovePower: 100,
		contestType: "Clever",
	},
	"bodyblast": {
		accuracy: 90,
		basePower: 100,
		category: "Special",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target.",
		id: "bodyblast",
		name: "Body Blast",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 180,
		contestType: "Tough",
	},
	"possession": {
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target.",
		id: "possession",
		name: "Possession",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Ghost",
		zMovePower: 180,
		contestType: "Cool",
	},
	"rockfall": {
		accuracy: 90,
		basePower: 55,
		category: "Physical",
		desc: "Hits two times, with each hit having a 50% chance to lower the target's Speed by one stage. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 50% chance to lower Speed.",
		id: "rockfall",
		name: "Rockfall",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 2],
		secondary: {
			chance: 50,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Rock",
		zMovePower: 100,
		contestType: "Clever",
	},
	"freneticcrush": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Has a 100% chance to raise the user's Speed by 1 stage. Has a 50% chance to raise the user's Attack by 1 stage.",
		shortDesc: "100% chance to raise the user's Speed by 1. 50% chance to raise the user's Attack by 1.",
		id: "freneticcrush",
		name: "Frenetic Crush",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 100,
				boosts: {
					spe: 1,
				},
			}, {
				chance: 50,
				boosts: {
					atk: 1,
				},
			},
		],
		target: "normal",
		type: "Rock",
		zMovePower: 120,
		contestType: "Cool",
	},
	"abscond": {
		accuracy: true,
		basePower: 70,
		category: "Physical",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
		shortDesc: "User switches out after damaging the target.",
		id: "abscond",
		name: "Abscond",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: false,
		target: "normal",
		type: "Dark",
		zMovePower: 140,
		contestType: "Clever",
	},
	"septicshock": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a 20% chance to either paralyze, freeze, or confuse the target.",
		shortDesc: "20% chance to paralyze or freeze or confuse the target.",
		id: "septicshock",
		name: "Septic Shock",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			onHit: function (target, source) {
				let result = this.random(3);
				if (result === 0) {
					target.trySetStatus('par', source);
				} else if (result === 1) {
					target.trySetStatus('frz', source);
				} else {
					target.addVolatile('confusion');
				}
			},
		},
		target: "normal",
		type: "Water",
		zMovePower: 140,
		contestType: "Beautiful",
	},
	"riptide": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower adjacent Pkmn Speed by 1.",
		id: "riptide",
		name: "Riptide",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacent",
		type: "Water",
		zMovePower: 175,
		contestType: "Tough",
	},
	"hydrothermalcrash": {
		accuracy: 95,
		basePower: 120,
		category: "Physical",
		desc: "Has a 50% chance to burn the target. The target thaws out if it is frozen.",
		shortDesc: "50% chance to burn the target. Thaws target.",
		id: "hydrothermalcrash",
		name: "Hydrothermal Crash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 50,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		zMovePower: 190,
		contestType: "Tough",
	},
	"whaleslap": {
		accuracy: 90,
		basePower: 45,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: false,
		target: "normal",
		type: "Water",
		zMovePower: 195,
		contestType: "Cute",
	},
	"dragonsfire": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Has a 20% chance to burn the target. The target thaws out if it is frozen.",
		shortDesc: "30% chance to burn the target. Thaws target.",
		id: "dragonsfire",
		name: "Dragon's Fire",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "normal",
		type: "Dragon",
		zMovePower: 140,
		contestType: "Cool",
	},
	"solareclipse": {
		accuracy: 90,
		basePower: 130,
		category: "Special",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2.",
		id: "solareclipse",
		name: "Solar Eclipse",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: false,
		target: "normal",
		type: "Dark",
		zMovePower: 195,
		contestType: "Beautiful",
	},
	"quickdraw": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Higher priority if the user has no held item. Fails if the target did not select a physical attack, special attack, or Me First for use this turn, or if the target moves before the user.",
		shortDesc: "Usually goes first, especially if the user has no held item. Fails if target is not attacking.",
		id: "quickdraw",
		name: "Quick Draw",
		pp: 5,
		priority: 1,
		priorityCallback: function (pokemon, target, move) {
			if (!pokemon.item) {
				this.debug("Priority increased for no item");
				return move.priority + 1;
			}
			return move.priority;
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry: function (source, target) {
			let decision = this.willMove(target);
			if (!decision || decision.choice !== 'move' || (decision.move.category === 'Status' && decision.move.id !== 'mefirst') || target.volatiles.mustrecharge) {
				this.attrLastMove('[still]');
				this.add('-fail', source);
				return null;
			}
		},
		secondary: false,
		target: "normal",
		type: "Dark",
		zMovePower: 160,
		contestType: "Cool",
	},
	"deathknell": {
		accuracy: 95,
		basePower: 20,
		category: "Physical",
		desc: "Prevents the target from switching for four or five turns; seven turns if the user is holding Grip Claw. Causes the target's last move to lose 4 PP, if applicable, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute. This effect is not stackable or reset by using this or another partial-trapping move.",
		shortDesc: "Traps the target and lowers its PP for 4-5 turns.",
		id: "deathknell",
		name: "Death Knell",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'deathknell',
		secondary: false,
		target: "normal",
		type: "Ghost",
		zMovePower: 100,
		contestType: "Tough",
	},
	"geyser": {
		accuracy: 95,
		basePower: 90,
		category: "Special",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
		shortDesc: "User switches out after damaging the target.",
		id: "geyser",
		name: "Geyser",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: false,
		target: "normal",
		type: "Water",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"leechingsting": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 75% of the damage dealt.",
		id: "leechingsting",
		name: "Leeching Sting",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [3, 4],
		secondary: false,
		target: "normal",
		type: "Bug",
		zMovePower: 160,
		contestType: "Tough",
	},
	"blazeofglory": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 100% chance to burn the target. Fails if the target did not select a physical attack, special attack, or Me First for use this turn, or if the target moves before the user.",
		shortDesc: "Usually goes first. 100% chance to burn the target. Fails if target is not attacking.",
		pp: 5,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry: function (source, target) {
			let decision = this.willMove(target);
			if (!decision || decision.choice !== 'move' || (decision.move.category === 'Status' && decision.move.id !== 'mefirst') || target.volatiles.mustrecharge) {
				this.attrLastMove('[still]');
				this.add('-fail', source);
				return null;
			}
		},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"beakblade": {
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		defensiveCategory: "Special",
		desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Abilities Battle Armor or Shell Armor. Deals damage to the target based on its Special Defense instead of Defense.",
		shortDesc: "Always results in a critical hit. Damages target based on Sp. Def, not Defense.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		willCrit: true,
		secondary: false,
		target: "normal",
		type: "Flying",
		zMovePower: 140,
		contestType: "Tough",
	},
	"cactussting": {
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage. Applies Leech Seed to the target.",
		shortDesc: "100% chance to lower target's Speed by 1 and apply Leech Seed.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'leechseed',
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Grass",
		zMovePower: 100,
		contestType: "Tough",
	},
	"freezedrill": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Has a 20% chance to freeze the target. This move's type effectiveness against Water is changed to be super effective no matter what this move's type is.",
		shortDesc: "20% chance to freeze. Super effective on Water.",
		id: "freezedrill",
		name: "Freeze Drill",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness: function (typeMod, type) {
			if (type === 'Water') return 1;
		},
		secondary: {
			chance: 20,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		zMovePower: 175,
		contestType: "Tough",
	},
	"pulsingcharge": {
		accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "pulsingcharge",
		name: "Pulsing Charge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: false,
		target: "normal",
		type: "Electric",
		zMovePower: 160,
		contestType: "Clever",
	},
	"humdrum": {
		accuracy: 100,
		basePower: 60,
		basePowerCallback: function (pokemon, target, move) {
			if (!pokemon.item) {
				this.debug("Power doubled for no item");
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		desc: "Has a 10% chance to lower the target's Defense by 1 stage. Power doubles if the user has no held item.",
		shortDesc: "10% chance to lower the target's Defense by 1. Power doubles if the user has no held item.",
		id: "humdrum",
		name: "Humdrum",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Bug",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"ionpulse": {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		desc: "Has a 50% chance to raise the user's Special Attack by 1 stage. Summons Electric Terrain for five turns, unless Electric Terrain is already summoned.",
		shortDesc: "Summons Electric Terrain. 50% chance to raise the user's Sp. Atk by 1.",
		id: "ionpulse",
		name: "Ion Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		terrain: 'electricterrain',
		secondaries: [
			{
				chance: 50,
				self: {
					boosts: {
						spa: 1,
					},
				},
			}, {
				chance: 100,
				self: {
					onHit: function () {
						this.setTerrain('electricterrain');
					},
				},
			},
		],
		target: "allAdjacent",
		type: "Electric",
		zMovePower: 100,
		contestType: "Clever",
	},
	"terrainshock": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Summons Electric Terrain for five turns, unless Electric Terrain is already summoned.",
		shortDesc: "Summons Electric Terrain.",
		id: "terrainshock",
		name: "Terrain Shock",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			self: {
				onHit: function () {
					this.setTerrain('electricterrain');
				},
			},
		},
		target: "normal",
		type: "Electric",
		zMovePower: 100,
		contestType: "Cool",
	},
	"hypnospore": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to fall asleep for the next two turns. Sleeping targets are prevented from switching for the duration of their sleep.",
		shortDesc: "Puts the target to sleep. Traps the target during its sleep.",
		id: "hypnospore",
		name: "Hypno Spore",
		pp: 5,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		onHit: function (target) {
			if (!target.setStatus('slp')) return false;
			target.statusData.time = 3;
			target.statusData.startTime = 3;
			this.add('-status', target, 'slp', '[from] move: Hypno Spore');
		},
		volatileStatus: 'sleeptrap',
		secondary: false,
		target: "normal",
		type: "Grass",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"pyrrhicvictory": {
		accuracy: 95,
		basePower: 0,
		damageCallback: function (pokemon) {
			let damage = pokemon.hp;
			pokemon.faint();
			return damage;
		},
		category: "Physical",
		desc: "Deals damage to the target equal to the user's current HP. If this move is successful, the user faints.",
		shortDesc: "Usually goes first. Does damage equal to the user's HP. User faints.",
		id: "pyrrhicvictory",
		name: "Pyrrhic Victory",
		pp: 10,
		priority: 1,
		flags: {protect: 1},
		selfdestruct: "ifHit",
		secondary: false,
		target: "normal",
		type: "Fire",
		zMovePower: 180,
		contestType: "Cool",
	},
	"dickmove": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target's move to become Struggle this turn. Fails if used consecutively or if the target already moved this turn.",
		shortDesc: "Forces the target to Struggle.",
		id: "dickmove",
		name: "Dick Move",
		pp: 5,
		priority: 4,
		flags: {authentic: 1},
		onTryHit: function (target) {
			if (!this.willMove(target) && target.activeTurns) return false;
		},
		volatileStatus: 'dickmove',
		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-singleturn', target, 'move: Dick Move');
			},
			onOverrideDecision: function (pokemon, target, move) {
				this.debug('Dick Move making move Struggle');
				return 'struggle';
			},
		},
		secondary: false,
		target: "normal",
		type: "Dark",
		zMoveBoost: {def: 2},
		contestType: "Clever",
	},
	"rubble": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Has a 20% chance to flinch the target. Sets up Stealth Rock if the hazard is not already on the opponent's side of the field.",
		shortDesc: "20% chance to flinch the target. Sets up Stealth Rock.",
		id: "rubble",
		name: "Rubble",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		sideCondition: 'stealthrock',
		effect: {
			// this is a side condition
			onStart: function (side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onSwitchIn: function (pokemon) {
				let typeMod = this.clampIntRange(pokemon.runEffectiveness('Rock'), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Rock",
		zMovePower: 180,
		contestType: "Tough",
	},
	"flashfreeze": {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "This move's type effectiveness against Ground is changed to be super effective no matter what this move's type is. If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
		shortDesc: "Super effective on Ground. User switches out after damaging the target.",
		id: "flashfreeze",
		name: "Flash Freeze",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		onEffectiveness: function (typeMod, type) {
			if (type === 'Ground') return 1;
		},
		secondary: false,
		target: "normal",
		type: "Electric",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"scorchingheat": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "If the target is holding an item that can be removed from it, ignoring the Ability Sticky Hold, this move's power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot remove Z-Crystals, cause Pokemon with the Ability Sticky Hold to lose their held item, cause Pokemon that can Mega Evolve to lose the Mega Stone for their species, or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, or Memory respectively. Items lost to this move cannot be regained with Recycle or the Ability Harvest. If the target is not holding an item, this move has a 30% chance to burn.",
		shortDesc: "1.5x damage if foe holds an item. Removes item. 30% chance to burn otherwise.",
		id: "scorchingheat",
		name: "Scorching Heat",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePowerPriority: 4,
		onBasePower: function (basePower, source, target, move) {
			let item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemData, target, source, move, item)) return;
			if (item.id) {
				return this.chainModify(1.5);
			}
		},
		onAfterHit: function (target, source) {
			if (source.hp) {
				let item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Scorching Heat', '[of] ' + source);
				}
			}
		},
		secondary: {
			chance: 30,
			onHit: function (target, source) {
				if (!target.getItem()) {
					target.trySetStatus('brn', source);
				}
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 140,
		contestType: "Tough",
	},
	"lakeofrage": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
		shortDesc: "30% chance to burn the target. Thaws target.",
		id: "lakeofrage",
		name: "Lake of Rage",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		zMovePower: 190,
		contestType: "Cool",
	},
	"vinesmash": {
		accuracy: 85,
		basePower: 130,
		category: "Physical",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
		id: "vinesmash",
		name: "Vine Smash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		target: "normal",
		type: "Grass",
		zMovePower: 195,
		contestType: "Tough",
	},
	"stealthseed": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sets up a hazard on the foe's side of the field, applying Leech Seed to each foe that switches in. Can only be used only once before failing. Can be removed from the foe's side if any foe uses Rapid Spin or Defog, is hit by Defog, or a grounded Grass-type Pokemon switches in.",
		shortDesc: "Applies Leech Seed to foes on switch-in.",
		id: "stealthseed",
		name: "Stealth Seed",
		pp: 10,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'stealthseed',
		effect: {
			onStart: function (side) {
				this.add('-sidestart', side, 'move: Stealth Seed');
			},
			onSwitchIn: function (pokemon) {
				if (pokemon.hasType('Grass')) {
					this.add('-sideend', pokemon.side, 'move: Stealth Seed', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('stealthseed');
				} else {
					pokemon.addVolatile('leechseed');
				}
			},
		},
		secondary: false,
		target: "foeSide",
		type: "Grass",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"flashflood": {
		accuracy: true,
		basePower: 85,
		category: "Special",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target.",
		id: "flashflood",
		name: "Flash Flood",
		pp: 20,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Water",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"featherwind": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the opponent and its party members deal 0.5x damage with physical attacks, or 0.66x damage if in a Double or Triple Battle. Critical hits ignore this debuff.",
		shortDesc: "For 5 turns, physical damage of opponents is halved.",
		id: "featherwind",
		name: "Feather Wind",
		pp: 15,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'featherwind',
		effect: {
			duration: 5,
			onAnyModifyDamage: function (damage, source, target, move) {
				if (target !== source && target.side === this.effectData.target && this.getCategory(move) === 'Physical') {
					if (!move.crit && !move.infiltrates) {
						this.debug('Feather Wind weaken');
						if (target.side.active.length > 1) return this.chainModify([0xAAC, 0x1000]);
						return this.chainModify(0.5);
					}
				}
			},
			onStart: function (side) {
				this.add('-sidestart', side, 'Feather Wind');
			},
			onResidualOrder: 21,
			onEnd: function (side) {
				this.add('-sideend', side, 'Feather Wind');
			},
		},
		secondary: false,
		target: "foeSide",
		type: "Flying",
		zMoveBoost: {def: 1},
		contestType: "Cool",
	},
	"mechanicalrhythm": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent foe at random. The user spends two or three turns locked into this move and becomes confused after the last turn of the effect if it is not already. If the move lasts for three turns and the user is faster than the target, the target will always flinch. If the user is prevented from moving or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user.",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards. Flinches if it lasts three turns.",
		id: "mechanicalrhythm",
		name: "Mechanical Rhythm",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mechrhythm',
		},
		onAfterMove: function (pokemon) {
			if (pokemon.volatiles['mechrhythm'] && pokemon.volatiles['mechrhythm'].duration === 1) {
				pokemon.removeVolatile('mechrhythm');
			}
		},
		secondary: {
			chance: 100,
			onHit: function (target, source) {
				if (source.volatiles['mechrhythm'].flinch) {
					target.addVolatile('flinch');
				}
			},
		},
		target: "randomNormal",
		type: "Steel",
		zMovePower: 190,
		contestType: "Cool",
	},
};
