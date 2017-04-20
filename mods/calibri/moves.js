/*
List of flags and their descriptions:
authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Ability Strong Jaw.
bullet: Has no effect on Pokemon with the Ability Bulletproof.
charge: The user is unable to make a move between turns.
contact: Makes contact.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Ability Overcoat, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Pokemon with the Ability Mega Launcher.
punch: Power is multiplied by 1.2 when used by a Pokemon with the Ability Iron Fist.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Ability Magic Bounce.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Ability Soundproof.
*/

'use strict';

exports.BattleMovedex = {
    "eradicate": {
		num: 1000,
		accuracy: 65,
		basePower: 145,
		category: "Physical",
		desc: "This move combines Ground in its type effectiveness against the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "Combines Ground in type effectiveness. 1/4 Recoil.",
		id: "eradicate",
		name: "Eradicate",
		pp: 5,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nonsky: 1},
	        recoil: [1, 4],
		onEffectiveness: function (typeMod, type, move) {
			return typeMod + this.getEffectiveness('Ground', type);
		},
		priority: 0,
		secondary: false,
		target: "allAdjacent",
		type: "Dragon",
		zMovePower: 200,
		contestType: "Cool",
    },
    "hitandrun": {
		num: 1001,
		accuracy: 90,
		basePower: 95,
		category: "Physical",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
		shortDesc: "Forces user to switch out. 1/8 Recoil.",
		id: "hitandrun",
		isViable: true,
		name: "Hit And Run",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
	        recoil: [1, 8],
	        selfSwitch: true,
		secondary: false,
		target: "normal",
		type: "Normal",
		zMovePower: 135,
		contestType: "Cute",
    },
    "shieldstrike": {
		num: 1002,
		accuracy: false,
		basePower: 75,
		category: "Physical",
		desc: "Doesn't make accuracy check; Guaranteed to hit. Protects the user from critical hits for 1 turn.",
		shortDesc: "No accuracy check. Blocks crits for 1 turn.",
		id: "shieldstrike",
		name: "Shield Strike",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		sideCondition: 'luckychant',
		effect: {
			duration: 1,
			onStart: function (side) {
				this.add('-sidestart', side, 'move: Lucky Chant'); // "The Lucky Chant shielded [side.name]'s team from critical hits!"
			},
			onCriticalHit: false,
			onResidualOrder: 21,
			onResidualSubOrder: 5,
			onEnd: function (side) {
				this.add('-sideend', side, 'move: Lucky Chant'); // "[side.name]'s team's Lucky Chant wore off!"
			},
		},
		secondary: false,
		target: "normal",
		type: "Fighting",
		zMoveBoost: {evasion: 2},
		contestType: "Tough",
    },
    "tundrasweep": {
		num: 1003,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		shortDesc: "Hits all Pokemon. 20% chance to freeze.",
		id: "tundrasweep",
		isViable: true,
		name: "Tundra Sweep",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'frz',
		},
		target: "allAdjacent",
		type: "Ice",
		zMovePower: 135,
		contestType: "Beautiful",
	},
    
};
	    
