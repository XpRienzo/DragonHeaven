'use strict'
exports.BattleMovedex = {
"backdraft": {
        accuracy: 100,
        basePower: 80,
        category: "Physical",
        shortDesc: "If this attack damages a target, the User's Attack rises one stage. If this attack targets a Fire-type Pokemon, the User's Attack rises by two stages.",
        id: "backdraft",
        name: "Backdraft",
        pp: 16,
        priority: 0,
        flags: {protect: 1, mirror: 1, contact: 1},
      	secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
				},
			},
			},
		 onHit: function (source, target) {
			 if (target.hasType('Fire')) {
				  source.boost({atk: 1});
			 }
		 },
        target: "normal",
        type: "Fire",
        zMovePower: 160, 
    },
	"overclock": {
        accuracy: 100,
        basePower: 40,
			basePowerCallback: function (pokemon, target, move) {
			return move.basePower + 40 * pokemon.positiveBoosts();
			},
        category: "Physical",
        shortDesc: "This move's Base Power rises by 40 for every stage the Attack stat is boosted. User recovers 50% of the damage dealt.",
        id: "overclock",
        name: "Overclock",
        pp: 8,
        priority: 0,
        flags: {protect: 1, mirror: 1, contact: 1, punch: 1},
		  drain: [1, 2],
        secondary: false,
        target: "normal",
        type: "Fire",
        zMovePower: 160, 
    },
		 "syncrekick": {
        accuracy: 100,
        basePower: 70,
        category: "Physical",
        shortDesc: "This move's Base Power rises by 30 for every kick move executed by this Pokemon since switching in.",
        id: "syncrekick",
        name: "Syncrekick",
        pp: 8,
        priority: 0,
        flags: {protect: 1, mirror: 1, contact: 1},
        secondary: false,
        target: "normal",
        type: "Water",
        zMovePower: 160,
    },
		 "poisonmelt": {
        accuracy: 100,
        basePower: 0,
        category: "Special",
        shortDesc: "This attack hits Steel-types super effectively and has a 30% chance to decrease the target’s SpD by 1 stage.",
        id: "poisonmelt",
        name: "Poison Melt",
        pp: 16,
        priority: 0,
        flags: {protect: 1, mirror: 1,},
        secondary: {
			chance: 30,
			boosts: {
				spd: -1,
			},
		},
		  onEffectiveness: function (typeMod, type) {
			if (type === 'Steel') return 1;
		},
        target: "normal",
        type: "Poison",
        zMovePower: 175,
    },
	"passiveagressivity": {
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Special",
		desc: "Deals damage to the target equal to the user's level. 20% chance of raising the user's defences by 1 stage each.",
		shortDesc: "Does damage equal to the user's level. 20% chance of raising the user's defences by 1 stage each.",
		id: "seismictoss",
		isViable: true,
		name: "Passive-Agressivity",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					def: 1,
					spd: 1,
				},
			},
		},
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Tough",
	},
	"flutterdust": {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		desc: "Lowers the target's SpD, SpA and Spe by 1 stage.",
		shortDesc: "Lowers the target's SpD, SpA and Spe by 1 stage",
		id: "flutterdust",
		isViable: true,
		name: "Flutter Dust",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		boosts: {
				spa: -1,
				spd: -1,
				spe: -1,
			},
		target: "normal",
		type: "Bug",
		zMovePower: 100,
		contestType: "Cute",
	},
	"beautydrain": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Heals for 50% of the damage done.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "beautydrain",
		name: "Beauty Drain",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: false,
		target: "normal",
		type: "Fairy",
		zMovePower: 160,
		contestType: "Cute",
	},
	"toxicturmoil": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Removes 4 PP from last used move. If the opponent is poisoned, the PP reduction is doubled.",
		shortDesc: "Removes 4 PP from last used move. If the opponent is poisoned, the PP reduction is doubled.",
		id: "toxicturmoil",
		name: "Toxic Turmoil",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onHit: function (target) {
			if (target.lastMove) {
				let ppDeducted = target.deductPP(target.lastMove.id, 4);
				if (target.status === 'psn' || target.status === 'tox') {
					ppDeducted = target.deductPP(target.lastMove.id, 8);
				}
				if (ppDeducted) {
					this.add("-activate", target, 'move: Spite', this.getMove(target.lastMove.id).name, ppDeducted);
					return;
				}
			}
			return false;
		},
		secondary: false,
		target: "normal",
		type: "Poison",
		zMoveBoost: {spd: 1},
		contestType: "Tough",
	},
	"stingstorm": {
		accuracy: 100,
		basePower: 200,
		category: "Physical",
		desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Ability Damp.",
		shortDesc: "Hits adjacent Pokemon. The user faints.",
		id: "stingstorm",
		isViable: true,
		name: "Sting Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: false,
		target: "allAdjacent",
		type: "Normal",
		zMovePower: 180,
		contestType: "Beautiful",
	},
};
