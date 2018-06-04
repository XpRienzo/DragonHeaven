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

/**@type {{[k: string]: MoveData}} */
let BattleMovedex = {
"digslash": {
        num: 40000,
        accuracy: 100,
        basePower: 95,
        category: "Physical",
        desc: "Has a higher chance for a critical hit.",
        shortDesc: "High critical hit ratio",
        id: "digslash",
        name: "Dig Slash",
        pp: 10,
        priority: 0,
        flags: {protect: 1, mirror: 1, authentic: 1, contact: 1, distance: 1},
        critRatio: 2,
        secondary: false,
        target: "normal",
        type: "Ground",
        zMovePower: 175,
    },
    "chargehandle": {
        num: 40001,
        accuracy: 90,
        basePower: 150,
        category: "Physical",
        desc: "This attack charges on the first turn and executes on the second. Lowers speed by 1 stage after use. Breaks the foes protection.",
        shortDesc: "Charges, then hits turn 2. Breaks protection. Lowers speed after use.",
        id: "chargehandle",
        name: "Charge Handle",
        pp: 5,
        priority: 0,
        flags: {contact: 1, charge: 1, mirror: 1},
        breaksProtect: true,
        secondary: false,
        target: "normal",
        type: "Steel",
        zMovePower: 200,
    },
    "hairwhip": {
        num: 40002,
        accuracy: 90,
        basePower: 120,
        category: "Physical",
        desc: "Has a higher chance for a critical hit.",
        shortDesc: "High critical hit ratio.",
        id: "hairwhip",
        name: "Hair Whip",
        pp: 10,
        priority: 0,
        flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
        critRatio: 2,
        secondary: false,
        target: "normal",
        type: "Psychic",
        zMovePower: 190,
        contestType: "Tough",
    },
    "phasingram": {
        num: 40004,
        accuracy: 100,
        basePower: 90,
        category: "Physical",
        desc: "Ignores the target's stat stage changes, including evasiveness.",
        shortDesc: "Ignores the target's stat stage changes.",
        id: "phasingram",
        isViable: true,
        name: "Phasing Ram",
        pp: 10,
        priority: 0,
        flags: {protect: 1, mirror: 1},
        ignoreEvasion: true,
        ignoreDefensive: true,
        secondary: false,
        target: "normal",
        type: "Ghost",
        zMovePower: 175,
    },
        "knifetoss": {
        num: 40005,
        accuracy: 95,
        basePower: 55,
        category: "Special",
        desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. Each hit has 30% chance to badly poison the target.",
        shortDesc: "Hits 2 times in one turn. 30% chance to badly poison target per hit.",
        id: "knifetoss",
        isViable: true,
        name: "Knife Toss",
        pp: 5,
        priority: 0,
        flags: {protect: 1, mirror: 1},
        multihit: 2,
        secondary: {
            chance: 30,
            status: 'tox',
        },
        target: "normal",
        type: "Flying",
        zMovePower: 180,
    },
    "liarshot": {
        num: 40006,
        accuracy: 100,
        basePower: 80,
        category: "Physical",
        desc: "Has a 30% chance to flinch the target.",
        shortDesc: "30% chance to flinch the target.",
        id: "liarshot",
        isViable: true,
        name: "Liar Shot",
        pp: 15,
        priority: 0,
        flags: {protect: 1, mirror: 1},
        secondary: {
            chance: 30,
            volatileStatus: 'flinch',
        },
        target: "normal",
        type: "Dark",
        zMovePower: 160,
    },
    "thorntrap": {
        num: 40007,
        accuracy: 95,
        basePower: 35,
        category: "Physical",
        desc: "Prevents the target from switching for four or five turns; seven turns if the user is holding Grip Claw. Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute. This effect is not stackable or reset by using this or another partial-trapping move.",
        shortDesc: "Traps and damages the target for 4-5 turns.",
        id: "thorntrap",
        name: "Thorn Trap",
        pp: 20,
        priority: 0,
        flags: {protect: 1, mirror: 1},
        volatileStatus: 'partiallytrapped',
        secondary: false,
        target: "normal",
        type: "Grass",
        zMovePower: 100,
    },
    "sunrise": {
        num: 40007,
        accuracy: true,
        basePower: 0,
        category: "Status",
        desc: "The user restores 66.7% of its maximum HP, rounded half up.",
        shortDesc: "Heals the user by 66.7% of its max HP.",
        id: "sunrise",
        isViable: true,
        name: "Sunrise",
        pp: 5,
        priority: 0,
        flags: {snatch: 1, heal: 1},
        heal: [2, 3],
        secondary: false,
        target: "self",
        type: "Fire",
        zMoveEffect: 'clearnegativeboost',
    },
    "chargeshot": {
        num: 40008,
        accuracy: 100,
        basePower: 95,
        category: "Special",
        desc: "No secondary effect.",
        shortDesc: "No secondary effect.",
        id: "chargeshot",
        isViable: true,
        name: "Charge Shot",
        pp: 10,
        priority: 0,
        flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
        secondary: false,
        target: "any",
        type: "Electric",
        zMovePower: 175,
    },
    "rockout": {
        num: 40008,
        accuracy: 100,
        basePower: 100,
        category: "Special",
        desc: "If it hits a target, wakes them up. Hits all adjacent foes.",
        shortDesc: "The target wakes up.",
        id: "rockout",
        name: "Rock Out",
        pp: 10,
        priority: 0,
        flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
        secondary: {
            dustproof: true,
            chance: 100,
            onHit: function (target) {
                if (target.status === 'slp') target.cureStatus();
            },
        },
        target: "allAdjacent",
        type: "Rock",
        zMovePower: 180,
    },
    "minigun": {
        num: 40009,
        accuracy: 100,
        basePower: 0,
        basePowerCallback: function (pokemon, target) {
            let power = (Math.floor(25 * target.getStat('spe') / pokemon.getStat('spe')) || 1);
            if (power > 150) power = 150;
            this.debug('' + power + ' bp');
            return power;
        },
        category: "Special",
        desc: "Power is equal to (25 * target's current Speed / user's current Speed), rounded down, + 1, but not more than 150.",
        shortDesc: "More power the slower the user than the target.",
        id: "minigun",
        isViable: true,
        name: "Minigun",
        pp: 5,
        priority: 0,
        flags: {bullet: 1, protect: 1, mirror: 1},
        secondary: false,
        target: "normal",
        type: "Normal",
        zMovePower: 160,
    },
    "fantasyseal": {
        num: 40010,
        accuracy: true,
        basePower: 90,
        category: "Special",
        desc: "This move's type effectiveness against Dark and Ghost is changed to be super effective no matter what this move's type is.",
        shortDesc: "Super effective on Dark and Ghost.",
        id: "fantasyseal",
        isViable: true,
        name: "Fantasy Seal",
        pp: 20,
        priority: 0,
        flags: {protect: 1, mirror: 1},
        onEffectiveness: function (typeMod, type) {
            if (type === 'Dark' || type === 'Ghost') return 1;
        },
        secondary: false,
        target: "normal",
        type: "Flying",
        zMovePower: 140,
    },
    "genkigirl": {
        num: 40011,
        accuracy: true,
        basePower: 0,
        category: "Status",
        desc: "The user restores 1/2 of its maximum HP, rounded half up. The user is healed of major status conditions.",
        shortDesc: "Heals the user by 50% of its max HP. Major status conditions healed.",
        id: "genkigirl",
        isViable: true,
        name: "Genki Girl",
        pp: 10,
        priority: 0,
        flags: {snatch: 1, heal: 1},
        heal: [1, 2],
        onHit: function (pokemon) {
            if (['', 'slp', 'frz'].includes(pokemon.status)) return false;
            pokemon.cureStatus();
        },
        secondary: false,
        target: "self",
        type: "Fairy",
        zMoveEffect: 'clearnegativeboost',
    },
        "masterspark": {
        num: 40012,
        accuracy: 100,
        basePower: 100,
        category: "Special",
        desc: "Has a 30% chance to lower the target's Special Defense by 1 stage.",
        shortDesc: "30% chance to lower the target's Sp. Def by 1.",
        id: "masterspark",
        isViable: true,
        name: "Master Spark",
        pp: 10,
        priority: 0,
        flags: {protect: 1, mirror: 1},
        secondary: {
            chance: 30,
            boosts: {
                spd: -1,
            },
        },
        target: "normal",
        type: "Electric",
        zMovePower: 180,
    },
    "pipewarp": {
        num: 40013,
        accuracy: 100,
        basePower: 130,
        category: "Special",
        desc: "This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes.",
        shortDesc: "Physical if user's Atk > Sp. Atk.",
        id: "pipewarp",
        isViable: true,
        name: "Pipe Warp",
        pp: 10,
        priority: 0,
        flags: {protect: 1, mirror: 1},
        onModifyMove: function (move, pokemon) {
            if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
        },
        secondary: false,
        target: "normal",
        type: "Steel",
        zMovePower: 195,
    },
    "chaosenergy": {
        num: 40014,
        accuracy: true,
        basePower: 130,
        category: "Special",
        desc: "This move cannot be used successfully unless the user's current form, while considering Transform, is Sonic. If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
        shortDesc: "Sonic: Breaks protection.",
        id: "chaosenergy",
        isViable: true,
        name: "Chaos Energy",
        pp: 5,
        priority: 0,
        flags: {mirror: 1, authentic: 1},
        breaksProtect: true,
        onTry: function (pokemon) {
            if (pokemon.template.species === 'Sonic') {
                return;
            }
            this.add('-hint', "Only a Pokemon whose form is Sonic can use this move.");
            if (pokemon.template.species === 'Hoopa') {
                this.add('-fail', pokemon, 'move: Chaos Energy', '[forme]');
                return null;
            }
            this.add('-fail', pokemon, 'move: Chaos Energy');
            return null;
        },
        secondary: false,
        target: "normal",
        type: "Normal",
        zMovePower: 195,
    },
    "leafviolin": {
        num: 40015,
        accuracy: 100,
        basePower: 110,
        category: "Special",
        desc: "20% chance to raise Sp. Def by 1 stage.",
        shortDesc: "20% chance to raise Sp. Def by 1. Hits adjacent foes.",
        id: "leafviolin",
        isViable: true,
        name: "Leaf Violin",
        pp: 10,
        priority: 0,
        flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
        secondary: {
            chance: 20,
            self: {
                boosts: {
                    spd: 1,
                },
            },
        },
        target: "allAdjacentFoes",
        type: "Grass",
        zMovePower: 175,
        contestType: "Cool",
    },
        "hammerthrow": {
        num: 40016,
        accuracy: 100,
        basePower: 90,
        category: "Physical",
        desc: "Has a 30% chance to burn the target.",
        shortDesc: "30% chance to burn the target.",
        id: "hammerthrow",
        isViable: true,
        name: "Hammer Throw",
        pp: 15,
        priority: 0,
        flags: {protect: 1, mirror: 1,},
        thawsTarget: true,
        secondary: {
            chance: 30,
            status: 'brn',
        },
        target: "normal",
        type: "Flying",
        zMovePower: 175,
    },
        "hammerbarrage": {
        num: 40017,
        accuracy: 100,
        basePower: 20,
        category: "Physical",
        desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
        shortDesc: "Hits 2-5 times in one turn.",
        id: "hammerbarrage",
        isViable: true,
        name: "Hammer Barrage",
        pp: 30,
        priority: 0,
        flags: {protect: 1, mirror: 1},
        multihit: [2, 5],
        secondary: false,
        target: "normal",
        type: "Rock",
        zMovePower: 140,
    },
    "pinktyphoon": {
        num: 40018,
        accuracy: 85,
        basePower: 100,
        category: "Physical",
        desc: "Has a 30% chance to confuse the target.",
        shortDesc: "30% chance to confuse the target.",
        id: "pinktyphoon",
        name: "Pink Typhoon",
        pp: 15,
        priority: 0,
        flags: {contact: 1, protect: 1, mirror: 1},
        secondary: {
            chance: 30,
            volatileStatus: 'confusion',
        },
        target: "normal",
        type: "Fairy",
        zMovePower: 180,
    },
        "vanish": {
        num: 40019,
        accuracy: true,
        basePower: 100,
        category: "Physical",
        desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. Only Zelda-Sheik or pokemon in the form of Zelda-Shiek may use this move.",
        shortDesc: "Breaks the target's protection for this turn. Only usable on Zelda-Shiek.",
        id: "vanish",
        name: "Vanish",
        pp: 5,
        priority: 0,
        flags: {mirror: 1, authentic: 1},
        onTry: function (pokemon) {
            if (pokemon.template.species === 'Zelda-Shiek') {
                return;
            }
            this.add('-hint', "Only a Pokemon whose form is Zelda-Shiek can use this move.");
            if (pokemon.template.species === 'Zelda') {
                this.add('-fail', pokemon, 'move: Vanish', '[forme]');
                return null;
            }
            this.add('-fail', pokemon, 'move: Vanish');
            return null;
        },
        breaksProtect: true,
        secondary: false,
        target: "normal",
        type: "Psychic",
        zMovePower: 180,
    },
    "warlockpunch": {
        num: 40020,
        accuracy: 100,
        basePower: 110,
        category: "Physical",
        desc: "Has a 32% chance to flinch the target.",
        shortDesc: "20% chance to flinch the target.",
        id: "warlockpunch",
        isViable: true,
        name: "Warlock Punch",
        pp: 10,
        priority: 0,
        flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
        secondary: {
            chance: 20,
            volatileStatus: 'flinch',
        },
        target: "normal",
        type: "Dark",
        zMovePower: 185,
    },
    "crossslash": {
        num: 40021,
        accuracy: 90,
        basePower: 30,
        category: "Physical",
        desc: "Hits two to four times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit four times.",
        shortDesc: "Hits 2-4 times in one turn.",
        id: "crossslash",
        name: "Cross Slash",
        pp: 20,
        priority: 0,
        flags: {protect: 1, mirror: 1},
        multihit: [2, 4],
        secondary: false,
        target: "normal",
        type: "Steel",
        zMovePower: 140,
    },
    "thundaga": {
        num: 40022,
        accuracy: 100,
        basePower: 80,
        category: "Special",
        desc: "No additional effect.",
        shortDesc: "No additional effect.",
        id: "thundaga",
        isViable: true,
        name: "Thundaga",
        pp: 15,
        priority: 0,
        flags: {protect: 1,mirror: 1},
        secondary: false,
        target: "any",
        type: "Electric",
        zMovePower: 160,
    },
    "firaga": {
        num: 40023,
        accuracy: 100,
        basePower: 80,
        category: "Special",
        desc: "No additional effect.",
        shortDesc: "No additional effect.",
        id: "firaga",
        isViable: true,
        name: "Firaga",
        pp: 15,
        priority: 0,
        flags: {protect: 1,mirror: 1},
        secondary: false,
        target: "any",
        type: "Fire",
        zMovePower: 160,
    },
    "blizzaga": {
        num: 40024,
        accuracy: 100,
        basePower: 80,
        category: "Special",
        desc: "No additional effect.",
        shortDesc: "No additional effect.",
        id: "blizzaga",
        isViable: true,
        name: "Blizzaga",
        pp: 15,
        priority: 0,
        flags: {protect: 1,mirror: 1},
        secondary: false,
        target: "any",
        type: "Ice",
        zMovePower: 160,
    },
    "fireball": {
        num: 40025,
        accuracy: 100,
        basePower: 85,
        category: "Physical",
        desc: "Has a 10% chance to burn the target. The target thaws out if it is frozen.",
        shortDesc: "10% chance to burn the target. Thaws target.",
        id: "fireball",
        isViable: true,
        name: "Fireball",
        pp: 15,
        priority: 0,
        flags: {protect: 1, mirror: 1, defrost: 1},
        thawsTarget: true,
        secondary: {
            chance: 10,
            status: 'brn',
        },
        target: "normal",
        type: "Fire",
        zMovePower: 160,
    },
    "cannonballblast": {
        num: 40026,
        accuracy: 100,
        basePower: 140,
        category: "Physical",
        desc: "Has a 10% chance to flinch the target.",
        shortDesc: "10% chance to flinch the target.",
        id: "cannonballblast",
        isViable: true,
        name: "Cannonball Blast",
        pp: 10,
        priority: 0,
        flags: {protect: 1, mirror: 1},
        secondary: {
            chance: 10,
            volatileStatus: 'flinch',
        },
        target: "normal",
        type: "Steel",
        zMovePower: 200,
    },
};

exports.BattleMovedex = BattleMovedex;
