'use strict';

/**@type {{[k: string]: MoveData}} */
let BattleMovedex = {
"acidarmor": {
		num: 151,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2.",
		id: "acidarmor",
		name: "Acid Armor",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		selfBoost: {
      boosts: {
			def: 2,
      }
		},
		secondary: false,
		target: "self",
		type: "Poison",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Tough",
	},
	"agility": {
		num: 97,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Speed by 2 stages.",
		shortDesc: "Raises the user's Speed by 2.",
		id: "agility",
		isViable: true,
		name: "Agility",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		selfBoost: {
		boosts: {
			spe: 2,
		},
		},
		secondary: false,
		target: "self",
		type: "Psychic",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cool",
	},
	"amnesia": {
		num: 133,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Special Defense by 2 stages.",
		shortDesc: "Raises the user's Sp. Def by 2.",
		id: "amnesia",
		name: "Amnesia",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		selfBoost: {
		boosts: {
			spd: 2,
		},
		},
		secondary: false,
		target: "self",
		type: "Psychic",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"aquaring": {
		num: 392,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user has 1/16 of its maximum HP, rounded down, restored at the end of each turn while it remains active. If the user uses Baton Pass, the replacement will receive the healing effect.",
		shortDesc: "User recovers 1/16 max HP per turn.",
		id: "aquaring",
		name: "Aqua Ring",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		self: {
			volatileStatus: 'aquaring',
		},
		effect: {
			onStart: function (pokemon) {
				this.add('-start', pokemon, 'Aqua Ring');
			},
			onResidualOrder: 6,
			onResidual: function (pokemon) {
				this.heal(pokemon.maxhp / 16);
			},
		},
		secondary: false,
		target: "self",
		type: "Water",
		zMoveBoost: {def: 1},
		contestType: "Beautiful",
	},
	"aromaticmist": {
		num: 597,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the target's Special Defense by 1 stage. Fails if there is no ally adjacent to the user.",
		shortDesc: "Raises an ally's Sp. Def by 1.",
		id: "aromaticmist",
		name: "Aromatic Mist",
		pp: 20,
		priority: 0,
		flags: {authentic: 1},
		selfBoost: {
		boosts: {
			spd: 1,
		},
		},
		secondary: false,
		target: "adjacentAlly",
		type: "Fairy",
		zMoveBoost: {spd: 2},
		contestType: "Beautiful",
	},
	"auroraveil": {
		num: 694,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the user and its party members take 0.5x damage from physical and special attacks, or 0.66x damage if in a Double Battle; does not reduce damage further with Reflect or Light Screen. Critical hits ignore this protection. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Brick Break and Psychic Fangs remove the effect before damage is calculated. Lasts for 8 turns if the user is holding Light Clay. Fails unless the weather is Hail.",
		shortDesc: "For 5 turns, damage to allies is halved. Hail only.",
		id: "auroraveil",
		isViable: true,
		name: "Aurora Veil",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		self: {
			sideCondition: 'auroraveil',
		},
		onTryHitSide: function () {
			if (!this.isWeather('hail')) return false;
		},
		effect: {
			duration: 5,
			durationCallback: function (target, source, effect) {
				if (source && source.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage: function (damage, source, target, move) {
				if (target !== source && target.side === this.effectData.target) {
					if ((target.side.sideConditions['reflect'] && this.getCategory(move) === 'Physical') ||
							(target.side.sideConditions['lightscreen'] && this.getCategory(move) === 'Special')) {
						return;
					}
					if (!move.crit && !move.infiltrates) {
						this.debug('Aurora Veil weaken');
						if (target.side.active.length > 1) return this.chainModify([0xAAC, 0x1000]);
						return this.chainModify(0.5);
					}
				}
			},
			onStart: function (side) {
				this.add('-sidestart', side, 'move: Aurora Veil');
			},
			onResidualOrder: 21,
			onResidualSubOrder: 1,
			onEnd: function (side) {
				this.add('-sideend', side, 'move: Aurora Veil');
			},
		},
		secondary: false,
		target: "allySide",
		type: "Ice",
		zMoveBoost: {spe: 1},
		contestType: "Beautiful",
	},
	"autotomize": {
		num: 475,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Speed by 2 stages. If the user's Speed was changed, the user's weight is reduced by 100 kg as long as it remains active. This effect is stackable but cannot reduce the user's weight to less than 0.1 kg.",
		shortDesc: "Raises the user's Speed by 2; user loses 100 kg.",
		id: "autotomize",
		isViable: true,
		name: "Autotomize",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onTryHit: function (pokemon) {
			let hasContrary = pokemon.hasAbility('contrary');
			if ((!hasContrary && pokemon.boosts.spe === 6) || (hasContrary && pokemon.boosts.spe === -6)) {
				return false;
			}
		},
		selfBoost: {
		boosts: {
			spe: 2,
		},
		},
		self: {
			volatileStatus: 'autotomize',
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (pokemon) {
				if (pokemon.template.weightkg > 0.1) {
					this.effectData.multiplier = 1;
					this.add('-start', pokemon, 'Autotomize');
				}
			},
			onRestart: function (pokemon) {
				if (pokemon.template.weightkg - (this.effectData.multiplier * 100) > 0.1) {
					this.effectData.multiplier++;
					this.add('-start', pokemon, 'Autotomize');
				}
			},
			onModifyWeightPriority: 1,
			onModifyWeight: function (weight, pokemon) {
				if (this.effectData.multiplier) {
					weight -= this.effectData.multiplier * 100;
					if (weight < 0.1) weight = 0.1;
					return weight;
				}
			},
		},
		secondary: false,
		target: "self",
		type: "Steel",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"banefulbunker": {
		num: 661,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user become poisoned. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails or if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard. Fails if the user moves last this turn.",
		shortDesc: "Protects from moves. Contact: poison.",
		id: "banefulbunker",
		isViable: true,
		name: "Baneful Bunker",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		self:{
			volatileStatus: 'banefulbunker',
		},
		onTryHit: function (target, source, move) {
			return !!this.willAct() && this.runEvent('StallMove', target);
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit: function (target, source, move) {
				if (!move.flags['protect']) {
					if (move.isZ) move.zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Protect');
				source.moveThisTurnResult = true;
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact']) {
					source.trySetStatus('psn', target);
				}
				return null;
			},
		},
		secondary: false,
		target: "self",
		type: "Poison",
		zMoveBoost: {def: 1},
		contestType: "Tough",
	},
	"barrier": {
		num: 112,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2.",
		id: "barrier",
		name: "Barrier",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		selfBoost: {
		boosts: {
			def: 2,
		},
		},
		secondary: false,
		target: "self",
		type: "Psychic",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cool",
	},
	"bellydrum": {
		num: 187,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack by 12 stages in exchange for the user losing 1/2 of its maximum HP, rounded down. Fails if the user would faint or if its Attack stat stage is 6.",
		shortDesc: "User loses 50% max HP. Maximizes Attack.",
		id: "bellydrum",
		name: "Belly Drum",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit: function (source) {
			if (source.hp <= source.maxhp / 2 || source.boosts.atk >= 6 || source.maxhp === 1) { // Shedinja clause
				return false;
			}
			this.directDamage(source.maxhp / 2);
			this.boost({atk: 12}, source);
		},
		secondary: false,
		target: "self",
		type: "Normal",
		zMoveEffect: 'heal',
		contestType: "Cute",
	},
};
	//TODO: Acupressure, Ally Switch, Aromatherapy, Assist
	// Suspect: Automize, 
exports.BattleMovedex = BattleMovedex;
