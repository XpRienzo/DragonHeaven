/*
List of flags and their descriptions:
authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Ability Strong Jaw.
bullet: Has no effect on Pokemon with the Ability Bulletproof.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Ability Dancer can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
mystery: Unknown effect.
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
        "flamebullet": {
                accuracy: 100,
                basePower: 40,
                category: "Special",
                desc: "Usually goes first.",
                shortDesc: "Usually goes first.",
                id: "flamebullet",
                isViable: true,
                name: "Flame Bullet",
                pp: 30,
                priority: 1,
                flags: {bullet: 1, defrost: 1, mirror: 1, protect: 1},
                secondary: false,
                target: "normal",
                type: "Fire",
                zMovePower: 100,
                contestType: "Beautiful",
        },
        "wildcharge": {
                inherit: true,
                accuracy: 80,
                basePower: 150,
                shortDesc: "Has 1/2 recoil",
                zMovePower: 200,
        },
        "meteorshower": {
                accuracy: 100,
                basePower: 130,
                category: "Special",
                desc: "Lowers the user's Special Attack by 2 stages.",
                shortDesc: "Lowers the user's Sp. Atk by 2.",
                id: "meteorshower",
                isViable: true,
                name: "Meteor Shower",
                pp: 5,
                priority: 0,
                flags: {mirror: 1, protect: 1},
                self: {
                        boosts: {
				                        spa: -2,
			                  },
		            },
                secondary: false,
                target: "normal",
                type: "Rock",
                zMovePower: 195,
                contestType: "Beautiful",
        },
		"teleport": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "The user switches out after successful use.",
		shortDesc: "The user switches out after successful use.",
		id: "teleport",
		name: "Teleport",
		pp: 32,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		onTryHit: false,
		secondary: false,
		target: "normal",
		type: "Psychic",
		zMovePower: '140',
		contestType: "Cool",
	},
	"plumecannon": {
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "plumecannon",
		isViable: true,
		name: "Plume Cannon",
		pp: 8,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: false,
		target: "normal",
		type: "Flying",
		zMovePower: 140,
		contestType: "Tough",
	},
	 "slipstream": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "The user switches out after successful use. Deals double damage under Tailwind",
		shortDesc: "The user switches out after successful use. Deals double damage under Tailwind",
		id: "slipstream",
		isViable: true,
		name: "Slipstream",
		pp: 32,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon) {
			if (this.issideCondition(['tailwind'])) {
				return this.chainModify(2);
			}
		},
		selfSwitch: true,
		secondary: false,
		target: "normal",
		type: "Flying",
		zMovePower: 120,
		contestType: "Cute",
	},
		"thunderclap": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent Pokemon.",
		id: "thunderclap",
		isViable: true,
		name: "Thunder Clap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: false,
		target: "allAdjacent",
		type: "Electric",
		zMovePower: 200,
		contestType: "Tough",
	},
		"rinseoff": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Heals the user by 50% (66% in rain, 25% in sun)",
		shortDesc: "Heals the user by 50% (66% in rain, 25% in sun)",
		id: "rinseoff",
		isViable: true,
		name: "Rinse Off",
		pp: 16,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit: function (pokemon) {
			if (this.isWeather(['raindance', 'primordialsea'])) {
				return this.heal(this.modify(pokemon.maxhp, 0.667));
			} else if (this.isWeather(['sunnyday', 'desolateland'])) {
				return this.heal(this.modify(pokemon.maxhp, 0.25));
			} else {
				return this.heal(this.modify(pokemon.maxhp, 0.5));
			}
		},
		secondary: false,
		target: "self",
		type: "Water",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"acidmelt": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "10% chance to burn the opponent and is super effective against Steel-types.",
		shortDesc: "10% chance to burn the opponent and is super effective against Steel-types.",
		id: "acidmelt",
		isViable: true,
		name: "Acid Melt",
		pp: 32,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness: function (typeMod, type) {
			if (type === 'Steel') return 1;
		},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Poison",
		zMovePower: 140,
		contestType: "Beautiful",
	},
	"fairycharge": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "The user receives 1/3 damage inflicted in recoil. Has a 10% chance to decrease the target's Atk by 1 stage.",
		shortDesc: "The user receives 1/3 damage inflicted in recoil. Has a 10% chance to decrease the target's Atk by 1 stage.",
		id: "fairycharge",
		isViable: true,
		name: "Fairy Charge",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 3],
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		zMovePower: 180,
		contestType: "Cute",
	},
		"jetstream": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Has +1 Priority and can thaw the user. ",
		shortDesc: "Has +1 Priority and can thaw the user. ",
		id: "jetstream",
		isViable: true,
		name: "Jetstream",
		pp: 48,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		target: "normal",
		type: "Flying",
		zMovePower: 190,
		contestType: "Cool",
	},
	"recrystalize": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Heals up to 50% of the user's max HP; Ice-types recover 67% in Hail and Rock-types recover 67% in Sandstorm.",
		shortDesc: "Heals up to 50% of the user's max HP; Ice-types recover 67% in Hail and Rock-types recover 67% in Sandstorm.",
		id: "recrystalize",
		isViable: true,
		name: "Recrystalize",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit: function (pokemon) {
			if (this.isWeather(['hail', 'sandstorm'])) {
				return this.heal(this.modify(pokemon.maxhp, 0.667));
			}  else {
				return this.heal(this.modify(pokemon.maxhp, 0.5));
			}
		},
		secondary: false,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"stalwartsword": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Has a high critical hit ratio and a 30% chance to increase the user’s Def by 1 stage. (Contact, Blade)",
		shortDesc: "Has a high critical hit ratio and a 30% chance to increase the user’s Def by 1 stage. (Contact, Blade)",
		id: "stalwartsword",
		isViable: true,
		name: "Stalwart Sword",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		critRatio: 2,
		secondary: {
			chance: 30,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 175,
		contestType: "Cool",
	},
	"ionabsorb": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Applies the Charge effect to the user after doing damage (If used while boosted by Charge, effect is not applied)",
		shortDesc: "Applies the Charge effect to the user after doing damage (If used while boosted by Charge, effect is not applied)",
		id: "ionabsorb",
		isViable: true,
		name: "Ion Absorb",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onHit: function (pokemon) {
			this.add('-activate', pokemon, 'move: Charge');
		},
		effect: {
			duration: 2,
			onRestart: function (pokemon) {
				this.effectData.duration = 2;
			},
			onBasePowerPriority: 3,
			onBasePower: function (basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('charge boost');
					return this.chainModify(2);
				}
			},
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spd: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 175,
		contestType: "Cool",
	},
	"morningsun": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, 2/3 of its maximum HP if the weather is Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		id: "morningsun",
		isViable: true,
		name: "Morning Sun",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit: function (pokemon) {
			if (this.isWeather(['desolateland'])) {
				return this.heal(this.modify(pokemon.maxhp, 0.667));
			} else {
				return this.heal(this.modify(pokemon.maxhp, 0.5));
			}
		},
		secondary: false,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
	},
	"moonlight": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, 2/3 of its maximum HP if the weather is Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		id: "moonlight",
		isViable: true,
		name: "Moonlight",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit: function (pokemon) {
			if (this.isWeather(['desolateland'])) {
				return this.heal(this.modify(pokemon.maxhp, 0.667));
			} else {
				return this.heal(this.modify(pokemon.maxhp, 0.5));
			}
		},
		secondary: false,
		target: "self",
		type: "Fairy",
		zMoveEffect: 'clearnegativeboost',
	},
	"synthesis": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP if no weather conditions are in effect, 2/3 of its maximum HP if the weather is Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		id: "synthesis",
		isViable: true,
		name: "Synthesis",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit: function (pokemon) {
			if (this.isWeather(['desolateland'])) {
				return this.heal(this.modify(pokemon.maxhp, 0.667));
			} else {
				return this.heal(this.modify(pokemon.maxhp, 0.5));
			}
		},
		secondary: false,
		target: "self",
		type: "Grass",
		zMoveEffect: 'clearnegativeboost',
	},
	"bugbite": {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately. Items lost to this move cannot be regained with Recycle or the Ability Harvest.",
		shortDesc: "User steals and eats the target's Berry. 1.5x power if the foe has a removable item.",
		id: "bugbite",
		name: "Bug Bite",
		pp: 32,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePowerPriority: 4,
		onBasePower: function (basePower, source, target, move) {
			let item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemData, target, source, move, item)) return;
			if (item.id) {
				return this.chainModify(1.5);
			}
		},
		onHit: function (target, source) {
			let item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Bug Bite', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		secondary: false,
		target: "normal",
		type: "Bug",
		zMovePower: 120,
		contestType: "Cute",
	},
	"pluck": {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately. Items lost to this move cannot be regained with Recycle or the Ability Harvest.",
		shortDesc: "User steals and eats the target's Berry. 1.5x power if the foe has a removable item.",
		id: "pluck",
		name: "Pluck",
		pp: 32,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePowerPriority: 4,
		onBasePower: function (basePower, source, target, move) {
			let item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemData, target, source, move, item)) return;
			if (item.id) {
				return this.chainModify(1.5);
			}
		},
		onHit: function (target, source) {
			let item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Bug Bite', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		secondary: false,
		target: "normal",
		type: "Flying",
		zMovePower: 120,
	},
	"incinerate": {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately. Items lost to this move cannot be regained with Recycle or the Ability Harvest.",
		shortDesc: "User steals and eats the target's Berry. 1.5x power if the foe has a removable item.",
		id: "incinerate",
		name: "Incinerate",
		pp: 32,
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
		onHit: function (target, source) {
			let item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Bug Bite', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		secondary: false,
		target: "normal",
		type: "Fire",
		zMovePower: 120,
	},
	doublehit: {
		inherit: true,
		basePower: 50,
		pp: 16,
		zMovePower: 100,
	},
	doublekick: {
		inherit: true,
		basePower: 50,
		pp: 16,
		zMovePower: 100,
	},
	"twineedle": {
		num: 41,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		desc: "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 20% chance to poison.",
		id: "twineedle",
		name: "Twineedle",
		pp: 16,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		multihit: [2, 2],
		secondary: {
			chance: 20,
			status: 'psn',
		},
		target: "normal",
		type: "Bug",
		zMovePower: 100,
		contestType: "Cool",
	},
	dualchop: {
		inherit: true,
		pp: 16,
		zMovePower: 100,
	},
	"seedbomb": { // 50% chance to seed the target
		num: 402,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "seedbomb",
		isViable: true,
		name: "Seed Bomb",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Grass",
		zMovePower: 160,
		contestType: "Tough",
	},
	"dragonrage": {
		num: 82,
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Special",
		desc: "Deals fixed damage equal to the user's level",
		shortDesc: "Deals fixed damage equal to the user's level",
		id: "dragonrage",
		name: "Dragon Rage",
		pp: 16,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Dragon",
		zMovePower: 100,
		contestType: "Cool",
	},
	"sonicboom": {
		num: 49,
		accuracy: 90,
		basePower: 0,
		damage: 'level',
		category: "Special",
		desc: "Deals fixed damage equal to the user's level",
		shortDesc: "Deals fixed damage equal to the user's level",
		id: "sonicboom",
		name: "Sonic Boom",
		pp: 32,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cool",
	},
	"psywave": {
		num: 149,
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Special",
		desc: "Deals fixed damage equal to the user's level",
		shortDesc: "Deals fixed damage equal to the user's level",
		id: "psywave",
		name: "Psywave",
		pp: 24,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Psychic",
		zMovePower: 100,
		contestType: "Clever",
	},
	/*Air Current	Flying	Status	--	16 Max	See abilities page under "Air Stream"	Raises the user's Speed by 1
All-Terrain Blast	Normal	Special	50, 100%	16 Max	Does double damage in terrains and becomes the same type of the terrain	Breakneck Blitz (160 BP), will turn into the appropriate Z-Move that matches the terrain
Gear Grind	Steel	Physical	50, 90%	16 Max	Hits twice (Contact)	Corkscrew Crash (100 BP)
Haunting Scream	Ghost	Special	90, 100%	16 Max	Inflicts the Perish Song  effect on the opponent 30% of the time. (Sound)	Never-Ending Nightmare (175 BP)
Meteor Shower	Rock	Special	130, 100%	8 Max	User's Special Attack goes down by 2 stages after use	Continental Crush (195 BP)
Seed Bomb	Grass	Physical	80, 100%	24 Max	50% Chance to seed target (Ballistic, non-contact)	Bloom Doom (160 BP)
Shadow Charge	Ghost	Physical	85, 95%	24 Max	Power is boosted 1.5x if target is switching in. (Contact)	Never-Ending Nightmare (160 BP)
Shadow Sky	Ghost	Status	--	16 Max	See abilities page under "Shadow Surge"	Raises the user's Speed by 1
Swampland	Water	Status	--	16 Max	Envelops the opponent’s side of the field in a Swamp (halves the opponent's team's Speed for 4 turns)	Raises the user's Special Attack by 1
*/
}; 
