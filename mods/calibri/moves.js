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
    "mythicalaura": {
          accuracy: true,
          basePower: 0,
          category: "Status",
          desc: "Raises the user's accuracy by 1 stage and allows Dragon type moves to hit Fairy type Pokemon. This effect is canceled if Odor Sleuth, Foresight or Miracle Eye is used.",
          shortDesc: "Raises the user's accuracy by 1; Dragon can hit Fairy types.",
          id: "mythicalaura",
          name: "Mythical Aura",
          pp: 20,
          priority: 0,
          flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
          volatileStatus: 'miracleeye',
          onTryHit: function (target) {
            if (target.volatiles['foresight']) return false;
          },
          effect: {
            noCopy: true,
            onStart: function (pokemon) {
              this.add('-start', pokemon, 'Miracle Eye');
            },
            onNegateImmunity: function (pokemon, type) {
              if (pokemon.hasType('Fairy') && type === 'Dragon') return false;
            },
            onModifyBoost: function (boosts) {
              if (boosts.evasion && boosts.evasion > 0) {
                boosts.evasion = 0;
              }
            },
          },
          secondary: {
                      chance: 100,
                      self: {
                       boosts: {
                        acc: 1,
                },
            },
          },
          target: "normal",
          type: "Dragon",
    },
    "energygamble": {
		accuracy: true,
		basePower: 0,
		category: "Special",
		desc: "Doesn't check accuracy. Becomes either a 30 BP or 150 BP move when used. Locked Base Power of 200 when used as a Z-Move.",
		shortDesc: "Becomes either 30 or 150 Base Power on use.",
		id: "energygamble",
		name: "Energy Gamble",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		onModifyMove: function (move, pokemon, target) {
			let rand = this.random(10);
			if (rand < 6) {
				move.basePower = 30;
			} else if (rand > 6) {
				move.basePower = 150;
			}
		},
		secondary: false,
		target: "normal",
		type: "Psychic",
		zMovePower: 200,
		contestType: "Cool",
	},
	"Tundra Sweep": {
		accuracy: true,
		basePower: 110,
		category: "Special",
		desc: "Hits all adjacent Pokemon, including allies in Doubles.",
		shortDesc: "Hits all adjacent Pokemon.",
		id: "tundrasweep",
		name: "Tundra Sweep",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
	        },
		secondary: false,
		target: "allAdjacent",
		type: "Ice",
		zMovePower: 195,
		contestType: "Cool",
	},
    
};
