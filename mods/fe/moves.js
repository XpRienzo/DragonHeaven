'use strict';

exports.BattleMovedex = {
        "scorchingwater": {
                accuracy: 100,
                basePower: 70,
                category: "Special",
                desc: "Has a 30% chance to burn the target. This move's type effectiveness against Ice is changed to be super effective no matter what this move's type is.",
                shortDesc: "30% chance to burn the target. Thaws user. Super effective on Ice.",
                id: "scorchingwater",
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
                name: "Frenetic Crush",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondaries: [
                        {
                                chance: 100,
                                self: {
                                        boosts: {
                                                spe: 1,
                                        },
                                },
                        }, {
                                chance: 50,
                                self: {
                                        boosts: {
                                                atk: 1,
                                        },
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                id: "whaleslap",
                isViable: true,
                name: "Whale Slap",
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
                name: "Death Knell",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                volatileStatus: 'deathknell',
                effect: {
                        duration: 5,
                        durationCallback: function (target, source) {
                                if (source.hasItem('gripclaw')) return 7;
                                return this.random(4, 6);
                        },
                        onStart: function (pokemon, source) {
                                this.add('-activate', pokemon, 'move: ' + this.effectData.sourceEffect, '[of] ' + source);
                        },
                        onResidualOrder: 11,
                        onResidual: function (pokemon) {
                                if (this.effectData.source && (!this.effectData.source.isActive || this.effectData.source.hp <= 0 || !this.effectData.source.activeTurns)) {
                                        delete pokemon.volatiles['deathknell'];
                                        return;
                                }
                                if (target.deductPP(target.lastMove, 4)) {
                                        this.add('-activate', target, 'move: Death Knell', this.getMove(target.lastMove).name, 4);
                                        return;
                                }
                        },
                        onEnd: function (pokemon) {
                                this.add('-end', pokemon, this.effectData.sourceEffect, '[deathknell]');
                        },
                        onTrapPokemon: function (pokemon) {
                                if (this.effectData.source && this.effectData.source.isActive) pokemon.tryTrap();
                        },
                },
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
                isViable: true,
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
                isViable: true,
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
                id: "blazeofglory",
                isViable: true,
                name: "Blaze of Glory",
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
                id: "beakblade",
                isViable: true,
                name: "Beak Blade",
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
                id: "cactussting",
                isViable: true,
                name: "Cactus Sting",
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
                name: "Ion Pulse",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
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
                isViable: true,
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
                isViable: true,
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
                volatileStatus: 'hypnospore',
                effect: {
                        duration: 1,
                        durationCallback: function (target, source) {
                                // Duration depends on sleep counter
                                if (target.status === 'slp') return target.statusData.time;
                        },
                        onStart: function (pokemon, source) {
                                this.add('-activate', pokemon, 'move: ' + this.effectData.sourceEffect, '[of] ' + source);
                        },
                        onEnd: function (pokemon) {
                                this.add('-end', pokemon, this.effectData.sourceEffect, '[sleeptrap]');
                        },
                        onTrapPokemon: function (pokemon) {
                                if (this.effectData.source && this.effectData.source.isActive) pokemon.tryTrap();
                        },
                },
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
                isViable: true,
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
                isViable: true,
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
                desc: "Has a 20% chance to flinch the target. Sets up Stealth Rock if a foe is targeted and the hazard is not already on the foe's side of the field.",
                shortDesc: "20% chance to flinch the target. Sets up Stealth Rock if targeting a foe.",
                id: "rubble",
                isViable: true,
                name: "Rubble",
                pp: 10,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                onHit: function (target, source, move) {
                        if (source.side !== target.side) {
                                target.side.addSideCondition('stealthrock');
                        }
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
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
                isViable: true,
                name: "Mechanical Rhythm",
                pp: 10,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                self: {
                        volatileStatus: 'lockedmove',
                },
                onAfterMove: function (pokemon) {
                        if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
                                pokemon.removeVolatile('lockedmove');
                        }
                },
                effect: {
                        duration: 2,
                        onResidual: function (target) {
                                if (target.status === 'slp') {
                                        // don't lock, and bypass confusion for calming
                                        delete target.volatiles['lockedmove'];
                                }
                                this.effectData.trueDuration--;
                        },
                        onStart: function (target, source, effect) {
                                this.effectData.trueDuration = this.random(2, 4);
                                this.effectData.move = effect.id;
                                // flinch becomes true if duration is maximum
                                this.effectData.flinch = this.effectData.trueDuration > this.effectData.duration;
                        },
                        onRestart: function () {
                                if (this.effectData.trueDuration >= 2) {
                                        this.effectData.duration = 2;
                                }
                        },
                        onEnd: function (target) {
                                if (this.effectData.trueDuration > 1) return;
                                target.addVolatile('confusion');
                        },
                        onLockMove: function (pokemon) {
                                return this.effectData.move;
                        },
                },
                secondary: {
                        chance: 100,
                        onHit: function (target, source) {
                                if (this.effectData.flinch) {
                                        target.addVolatile('flinch');
                                }
                        },
                },
                target: "randomNormal",
                type: "Steel",
                zMovePower: 190,
                contestType: "Cool",
        },
        "mindmelt": {
                accuracy: 85,
                basePower: 110,
                category: "Special",
                desc: "Has a 10% chance to burn the target. This move can hit Dark-types. Ignores the target's evasiveness.",
                shortDesc: "10% chance to burn the target. Neutral on Dark. Evasiveness ignored.",
                id: "mindmelt",
                isViable: true,
                name: "Mind Melt",
                pp: 5,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                ignoreEvasion: true,
                ignoreImmunity: {'Psychic': true},
                secondary: {
                        chance: 10,
                        status: 'brn',
                },
                target: "normal",
                type: "Psychic",
                zMovePower: 185,
                contestType: "Clever",
        },
        "mindblast": {
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "This move's type effectiveness against Poison is changed to be super effective no matter what this move's type is.",
                shortDesc: "Super effective on Poison.",
                id: "mindblast",
                isViable: true,
                name: "Mind Blast",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                onEffectiveness: function (typeMod, type) {
                        if (type === 'Poison') return 1;
                },
                secondary: false,
                target: "normal",
                type: "Fairy",
                zMovePower: 160,
                contestType: "Beautiful",
        },
        "snap": {
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "Has a 100% chance to lower the target's Special Attack by 1 stage and a 20% chance to flinch the target.",
                shortDesc: "100% chance to lower the target's Sp. Atk by 1. 20% chance to flinch the target.",
                id: "snap",
                isViable: true,
                name: "Snap",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
                secondaries: [
                        {
                                chance: 100,
                                boosts: {
                                        spa: -1,
                                },
                        },
                        {
                                chance: 20,
                                volatileStatus: 'flinch',
                        },
                ],
                target: "normal",
                type: "Water",
                zMovePower: 140,
                contestType: "Tough",
        },
        "hydraulicjaws": {
                accuracy: 85,
                basePower: 110,
                category: "Physical",
                desc: "Has a 30% chance to flinch the target.",
                shortDesc: "30% chance to flinch the target.",
                id: "hydraulicjaws",
                isViable: true,
                name: "Hydraulic Jaws",
                pp: 5,
                priority: 0,
                flags: {bite: 1, protect: 1, mirror: 1},
                secondary: {
                        chance: 30,
                        volatileStatus: 'flinch',
                },
                target: "normal",
                type: "Water",
                zMovePower: 185,
                contestType: "Tough",
        },
        "scaldingvortex": {
                accuracy: 90,
                basePower: 35,
                category: "Special",
                desc: "Prevents the target from switching for four or five turns; seven turns if the user is holding Grip Claw. Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, and has a 30% chance to burn the target at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute. This effect is not stackable or reset by using this or another partial-trapping move.",
                shortDesc: "Traps and damages the target for 4-5 turns. 30% chance to burn after damage.",
                id: "scaldingvortex",
                isViable: true,
                name: "Scalding Vortex",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                volatileStatus: 'scaldingvortex',
                effect: {
                        duration: 5,
                        durationCallback: function (target, source) {
                                if (source.hasItem('gripclaw')) return 7;
                                return this.random(4, 6);
                        },
                        onStart: function (pokemon, source) {
                                this.add('-activate', pokemon, 'move: ' + this.effectData.sourceEffect, '[of] ' + source);
                        },
                        onResidualOrder: 11,
                        onResidual: function (pokemon) {
                                if (this.effectData.source && (!this.effectData.source.isActive || this.effectData.source.hp <= 0 || !this.effectData.source.activeTurns)) {
                                        delete pokemon.volatiles['scaldingvortex'];
                                        return;
                                }
                                if (this.effectData.source.hasItem('bindingband')) {
                                        this.damage(pokemon.maxhp / 6);
                                } else {
                                        this.damage(pokemon.maxhp / 8);
                                }
                                // 30% chance to burn
                                if (this.random(10) < 3) {
                                        pokemon.trySetStatus('brn', pokemon.side.foe.active[0]);
                                }
                        },
                        onEnd: function (pokemon) {
                                this.add('-end', pokemon, this.effectData.sourceEffect, '[scaldingvortex]');
                        },
                        onTrapPokemon: function (pokemon) {
                                if (this.effectData.source && this.effectData.source.isActive) pokemon.tryTrap();
                        },
                },
                secondary: false,
                target: "normal",
                type: "Water",
                zMovePower: 100,
                contestType: "Beautiful",
        },
        "sonicburst": {
                accuracy: 100,
                basePower: 60,
                category: "Special",
                desc: "No additional effect.",
                shortDesc: "Usually goes first.",
                id: "sonicburst",
                isViable: true,
                name: "Sonic Burst",
                pp: 20,
                priority: 1,
                flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
                secondary: false,
                target: "normal",
                type: "Normal",
                zMovePower: 120,
                contestType: "Cool",
        },
        "steampress": {
                accuracy: 85,
                basePower: 85,
                category: "Physical",
                desc: "Has a 30% chance to burn the target. The target thaws out if it is frozen. Prevents the target from switching for four or five turns; seven turns if the user is holding Grip Claw. Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute. This effect is not stackable or reset by using this or another partial-trapping move.",
                shortDesc: "30% chance to burn the target. Traps and damages the target for 4-5 turns.",
                id: "steampress",
                isViable: true,
                name: "Steam Press",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1, defrost: 1},
                volatileStatus: 'partiallytrapped',
                thawsTarget: true,
                secondary: {
                        chance: 30,
                        status: 'brn',
                },
                target: "normal",
                type: "Water",
                zMovePower: 160,
                contestType: "Tough",
        },
        "steamyring": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "The user has 1/16 of its maximum HP, rounded down, restored at the end of each turn while it remains active. If the user is hit by a contact move during this effect, the attacker is burned. If the user uses Baton Pass, the replacement will receive the effect.",
                shortDesc: "User recovers 1/16 max HP per turn. Effect burns on contact with the user.",
                id: "steamyring",
                isViable: true,
                name: "Steamy Ring",
                pp: 20,
                priority: 0,
                flags: {snatch: 1},
                volatileStatus: 'steamyring',
                effect: {
                        onStart: function (pokemon) {
                                this.add('-start', pokemon, 'Steamy Ring');
                        },
                        onResidualOrder: 6,
                        onResidual: function (pokemon) {
                                this.heal(pokemon.maxhp / 16);
                        },
                        onHit: function (pokemon, source, move) {
                                if (move.flags['contact']) {
                                        source.trySetStatus('brn', pokemon);
                                }
                        }
                },
                secondary: false,
                target: "self",
                type: "Water",
                zMoveBoost: {def: 1},
                contestType: "Beautiful",
        },
        "buggin": {
                accuracy: 90,
                basePower: 50,
                category: "Physical",
                desc: "Hits twice, with each hit having a 100% chance to lower the target's Attack by 1 stage.",
                shortDesc: "Hits 2 times. Each hit has 100% chance to lower the target's Attack by 1.",
                id: "buggin",
                isViable: true,
                name: "Buggin'",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                multihit: [2, 2],
                secondary: {
                        chance: 100,
                        boosts: {
                                atk: -1,
                        },
                },
                target: "normal",
                type: "Bug",
                zMovePower: 180,
                contestType: "Clever",
        },
        "shreddingscythe": {
                accuracy: 100,
                basePower: 50,
                category: "Physical",
                desc: "Has a 100% chance to raise the user's Speed by 1 stage. If the user's Speed was changed, the user's weight is reduced by 50kg as long as it remains active. This effect is stackable but cannot reduce the user's weight to less than 0.1kg.",
                shortDesc: "100% chance to raise the user's Speed by 1 and decrease the user's weight by 50 kg.",
                id: "shreddingscythe",
                isViable: true,
                name: "Shredding Scythe",
                pp: 20,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                onHit: function (target, source) {
                        let hasContrary = source.hasAbility('contrary');
                        if ((hasContrary || source.boosts.spe !== 6) && (!hasContrary || source.boosts.spe !== -6)) {
                                source.addVolatile('shreddingscythe');
                        }
                },
                effect: {
                        noCopy: true,
                        onStart: function (pokemon) {
                                if (pokemon.template.weightkg > 0.1) {
                                        this.effectData.multiplier = 1;
                                        this.add('-start', pokemon, 'Shredding Scythe');
                                }
                        },
                        onRestart: function (pokemon) {
                                if (pokemon.template.weightkg - (this.effectData.multiplier * 50) > 0.1) {
                                        this.effectData.multiplier++;
                                        this.add('-start', pokemon, 'Shredding Scythe');
                                }
                        },
                        onModifyWeightPriority: 1,
                        onModifyWeight: function (weight, pokemon) {
                                if (this.effectData.multiplier) {
                                        weight -= this.effectData.multiplier * 50;
                                        if (weight < 0.1) weight = 0.1;
                                        return weight;
                                }
                        },
                },
                secondary: {
                        chance: 100,
                        self: {
                                boosts: {
                                        spe: 1,
                                },
                        },
                },
                target: "normal",
                type: "Bug",
                zMovePower: 100,
                contestType: "Cool",
        },
        "suresight": {
                accuracy: 85,
                basePower: 110,
                category: "Special",
                desc: "Causes the target to have its positive evasiveness stat stage ignored while it is active. This move can hit Ghost-types.",
                shortDesc: "Neutral on Ghost. Evasiveness ignored.",
                id: "suresight",
                isViable: true,
                name: "Suresight",
                pp: 5,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                ignoreEvasion: true,
                ignoreImmunity: {'Normal': true},
                secondary: false,
                target: "normal",
                type: "Normal",
                zMovePower: 185,
                contestType: "Clever",
        },
        "stoke": {
                accuracy: 100,
                basePower: 90,
                category: "Special",
                desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
                shortDesc: "User recovers 50% of the damage dealt.",
                id: "stoke",
                isViable: true,
                name: "Stoke",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1, heal: 1},
                drain: [1, 2],
                secondary: false,
                target: "normal",
                type: "Fire",
                zMovePower: 175,
                contestType: "Beautiful",
        },
        "starstrike": {
                accuracy: 100,
                basePower: 120,
                category: "Physical",
                desc: "Lowers the user's Defense and Special Defense by 1 stage.",
                shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
                id: "starstrike",
                isViable: true,
                name: "Star Strike",
                pp: 5,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                self: {
                        boosts: {
                                def: -1,
                                spd: -1,
                        },
                },
                secondary: false,
                target: "normal",
                type: "Water",
                zMovePower: 190,
                contestType: "Tough",
        },
        "celestialfist": {
                accuracy: 50,
                basePower: 100,
                category: "Physical",
                defensiveCategory: "Special",
                desc: "Deals damage to the target based on its Special Defense instead of Defense. Has a 100% chance to confuse the target if its Defense is higher than its Special Defense.",
                shortDesc: "Damages target based on Sp. Def, not Defense. 100% chance to confuse if target has low Sp. Def.",
                pp: 10,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
                secondary: {
                        chance: 100,
                        onHit: function (target) {
                                if (target.stats.def > target.stats.spd) target.addVolatile('confusion');
                        },
                },
                target: "normal",
                type: "Fighting",
                zMovePower: 180,
                contestType: "Beautiful",
        },
        "thundervirus": {
                // Is this adequate for paralyzing Electric-types? - Mygavolt
                accuracy: 100,
                basePower: 0,
                category: "Status",
                desc: "Paralyzes the target regardless of its typing.",
                shortDesc: "Paralyzes the target regardless of its typing.",
                pp: 15,
                priority: 0,
                flags: {protect: 1, reflectable: 1, mirror: 1},
                status: 'par',
                ignoreImmunity: true,
                secondary: false,
                target: "normal",
                type: "Electric",
                zMoveBoost: {spd: 1},
                contestType: "Clever",
        },
        "solarflare": {
                accuracy: 100,
                basePower: 140,
                category: "Special",
                desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Between the time of executing the move and the turn the move does damage, the target is prevented from switching out by means other than Shed Shell, Baton Pass, Parting Shot, U-turn, or Volt Switch. The move fails if it, Future Sight, or Doom Desire is already in effect for the target's position.",
                shortDesc: "Hits two turns after being used. Traps target before the hit.",
                id: "solarflare",
                isViable: true,
                name: "Solar Flare",
                pp: 5,
                priority: 0,
                flags: {},
                isFutureMove: true,
                onTry: function (source, target) {
                        target.side.addSideCondition('futuremove');
                        if (target.side.sideConditions['futuremove'].positions[target.position]) {
                                return false;
                        }
                        target.side.sideConditions['futuremove'].positions[target.position] = {
                                duration: 3,
                                move: 'solarflare',
                                source: source,
                                moveData: {
                                        id: 'solarflare',
                                        name: "Solar Flare",
                                        accuracy: 100,
                                        basePower: 140,
                                        category: "Special",
                                        priority: 0,
                                        flags: {},
                                        effectType: 'Move',
                                        isFutureMove: true,
                                        type: 'Fire',
                                },
                        };
                        target.addVolatile('solarflare');
                        this.add('-start', source, 'Solar Flare');
                        return null;
                },
                effect: {
                        duration: 3,
                        noCopy: true,
                        onTrapPokemon: function (pokemon) {
                                pokemon.tryTrap();
                        },
                        onStart: function (target) {
                                this.add('-activate', target, 'solarflare');
                        },
                },
                secondary: false,
                target: "normal",
                type: "Fire",
                zMovePower: 200,
                contestType: "Beautiful",
        },
        "blossomdance": {
                accuracy: 100,
                basePower: 120,
                category: "Physical",
                desc: "If this move KOs the target, the user recovers 1/3 the HP lost by the target, rounded half up. Otherwise, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
                shortDesc: "33% drain if KO, otherwise 33% recoil.",
                id: "blossomdance",
                isViable: true,
                name: "Blossom Dance",
                pp: 10,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                onHit: function (target, pokemon) {
                        pokemon.addVolatile('blossomdance');
                },
                effect: {
                        duration: 1,
                        onAfterMoveSecondarySelf: function (pokemon, target, move) {
                                let damage = this.getDamage(pokemon, target, move);
                                if (!target || target.fainted || target.hp <= 0) {
                                        this.heal(Math.ceil(damage * 1 / 3), pokemon, target, 'drain');
                                } else {
                                        this.damage(this.calcRecoilDamage(damage, move), pokemon, target, 'recoil');
                                }
                                pokemon.removeVolatile('blossomdance');
                        },
                },
                secondary: false,
                target: "normal",
                type: "Grass",
                zMovePower: 190,
                contestType: "Cool",
        },
        "leechshield": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have 1/4 of their max HP drained. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails or if the user's last move used is not Detect, Endure, Leech Shield, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard. Fails if the user moves last this turn.",
                shortDesc: "Protects from attacks. Contact: drains 1/4 HP.",
                id: "leechshield",
                isViable: true,
                name: "Leech Shield",
                pp: 10,
                priority: 4,
                flags: {},
                stallingMove: true,
                volatileStatus: 'leechshield',
                onTryHit: function (pokemon) {
                        return !!this.willAct() && this.runEvent('StallMove', pokemon);
                },
                onHit: function (pokemon) {
                        pokemon.addVolatile('stall');
                },
                effect: {
                        duration: 1,
                        onStart: function (target) {
                                this.add('-singleturn', target, 'Protect');
                        },
                        onSourcePrepareHit: function (source, target, effect) {
                                if (effect.effectType !== 'Move' || !effect.flags['protect'] || effect.category === 'Status') return;
                                if (effect.flags['contact']) {
                                        effect.ignoreImmunity = true;
                                }
                        },
                        onTryHitPriority: 3,
                        onTryHit: function (target, source, move) {
                                if (!move.flags['protect'] || move.category === 'Status') {
                                        if (move.isZ) move.zBrokeProtect = true;
                                        return;
                                }
                                this.add('-activate', target, 'move: Protect');
                                let lockedmove = source.getVolatile('lockedmove');
                                if (lockedmove) {
                                        // Outrage counter is reset
                                        if (source.volatiles['lockedmove'].duration === 2) {
                                                delete source.volatiles['lockedmove'];
                                        }
                                }
                                if (move.flags['contact']) {
                                        let damage = this.damage(pokemon.maxhp / 4, pokemon, target);
                                        if (damage) {
                                                this.heal(damage, target, pokemon);
                                        }
                                }
                                return null;
                        },
                },
                secondary: false,
                target: "self",
                type: "Grass",
                zMoveEffect: 'clearnegativeboost',
                contestType: "Clever",
        },
        "flamingtail": {
                accuracy: 100,
                basePower: 70,
                category: "Physical",
                desc: "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target used Ingrain previously, has the Ability Suction Cups, or this move hit a substitute.",
                shortDesc: "Forces the target to switch to a random ally.",
                id: "flamingtail",
                isViable: true,
                name: "Flaming Tail",
                pp: 10,
                priority: -6,
                flags: {contact: 1, protect: 1, mirror: 1},
                forceSwitch: true,
                target: "normal",
                type: "Fire",
                zMovePower: 140,
                contestType: "Tough",
        },
        "gearthird": {
                accuracy: 85,
                basePower: 30,
                basePowerCallback: function (pokemon) {
                        pokemon.addVolatile('gearthird');
                        return 10 * pokemon.volatiles['gearthird'].hit;
                },
                category: "Physical",
                desc: "Hits three times. Power increases to 40 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids any of the hits. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit three times.",
                shortDesc: "Hits 3 times. Each hit can miss, but power rises.",
                id: "gearthird",
                isViable: true,
                name: "Gear Third",
                pp: 10,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                multihit: 3,
                multiaccuracy: true,
                effect: {
                        duration: 1,
                        onStart: function () {
                                this.effectData.hit = 1;
                        },
                        onRestart: function () {
                                this.effectData.hit++;
                        },
                },
                onAfterMove: function (pokemon) {
                        pokemon.removeVolatile('gearthird');
                },
                secondary: false,
                target: "normal",
                type: "Fighting",
                zMovePower: 190,
                contestType: "Clever",
        },
        "highflyinggears": {
                accuracy: 90,
                basePower: 60,
                category: "Physical",
                desc: "Hits twice. This move checks accuracy for each hit, and the attack ends if the target avoids either of the hits. If the attack ends as such, the user loses a quarter of its maximum HP, rounded down, as crash damage. Pokemon with the Ability Magic Guard are unaffected by crash damage. If the first hit breaks the target's substitute, it will take damage for the second hit. If the user has the Ability Skill Link, this move will always hit twice.",
                shortDesc: "Hits 2 times. Each hit can miss, and user is hurt by 25% of its max HP if a hit misses.",
                id: "highflyinggears",
                isViable: true,
                name: "High Flying Gears",
                pp: 10,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
                multihit: 2,
                multiaccuracy: true,
                hasCustomRecoil: true,
                onHit: function (pokemon) {
                        pokemon.addVolatile('highflyinggears');
                },
                onMoveFail: function (target, source, move) {
                        this.damage(source.maxhp / 4, source, source, 'highflyinggears');
                },
                effect: {
                        duration: 1,
                        onStart: function () {
                                this.effectData.hit = 1;
                        },
                        onRestart: function () {
                                this.effectData.hit++;
                        },
                },
                onAfterMove: function (pokemon) {
                        if (this.effectData.hit < 2) {
                                this.damage(source.maxhp / 4, source, source, 'highflyinggears');
                        }
                        pokemon.removeVolatile('highflyinggears');
                },
                secondary: false,
                target: "normal",
                type: "Steel",
                zMovePower: 190,
                contestType: "Cool",
        },
        "turvytorrent": {
                accuracy: 100,
                basePower: 90,
                category: "Special",
                desc: "This move's effectiveness is treated as if in an Inverse Battle.",
                shortDesc: "Has inverse type effectiveness.",
                id: "turvytorrent",
                isViable: true,
                name: "Turvy Torrent",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1, nonsky: 1},
                onEffectiveness: function (typeMod, type, move) {
                        switch (typeMod) {
                                case 0:
                                        return typeMod;
                                        break;
                                case 1:
                                        return 2;
                                        break;
                                default:
                                        return 1;
                                       }
                },
                secondary: false,
                target: "allAdjacent",
                type: "Water",
                zMovePower: 175,
                contestType: "Clever",
        },
        "negativezone": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "For 5 turns, all Pokemon's stat changes are reversed.",
                shortDesc: "For 5 turns, stat changes are reversed.",
                id: "negativezone",
                isViable: true,
                name: "Negative Zone",
                pp: 15,
                priority: 0,
                flags: {mirror: 1},
                onHitField: function (target, source, effect) {
                        if (this.pseudoWeather['negativezone']) {
                                this.removePseudoWeather('negativezone', source, effect, '[of] ' + source);
                        } else {
                                this.addPseudoWeather('negativezone', source, effect, '[of] ' + source);
                        }
                },
                effect: {
                        duration: 5,
                        onStart: function (side, source) {
                                this.add('-fieldstart', 'move: Negative Zone', '[of] ' + source);
                        },
                        onBoost: function (boost, target, source, effect) {
                                if (effect && effect.id === 'zpower') return;
                                for (let i in boost) {
                                        boost[i] *= -1;
                                }
                        },
                        onResidualOrder: 23,
                        onEnd: function () {
                                this.add('-fieldend', 'move: Negative Zone');
                        },
                },
                secondary: false,
                target: "all",
                type: "Dark",
                zMoveBoost: {atk: 1},
                contestType: "Clever",
        },
        "neuramancy": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Lowers the user's Speed by 2 stages and raises the user's Attack by 2 stages and its Defense, Special Attack, and Special Defense by 1 stage. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
                shortDesc: "Charges, then +2 Atk, +1 Def, +1 SpA, +1 SpD, -1 Spe turn 2.",
                id: "neuramancy",
                isViable: true,
                name: "Neuramancy",
                pp: 5,
                priority: 0,
                flags: {charge: 1},
                onTry: function (attacker, defender, move) {
                        if (attacker.removeVolatile(move.id)) {
                                return;
                        }
                        this.add('-prepare', attacker, move.name, defender);
                        if (!this.runEvent('ChargeMove', attacker, defender, move)) {
                                this.add('-anim', attacker, move.name, defender);
                                attacker.removeVolatile(move.id);
                                return;
                        }
                        attacker.addVolatile('twoturnmove', defender);
                        return null;
                },
                boosts: {
                        atk: 2,
                        def: 1,
                        spa: 1,
                        spd: 1,
                        spe: -1,
                },
                secondary: false,
                target: "self",
                type: "Bug",
                zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
                contestType: "Beautiful",
        },
        "ropeburn": {
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Has a 10% chance to burn lighter or equally light targets; has a 70% chance to burn heavier targets.",
                shortDesc: "70% chance to burn if target is heavier; 10% chance otherwise",
                id: "ropeburn",
                isViable: true,
                name: "Rope Burn",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1, nonsky: 1},
                secondary: {
                        chance: 100,
                        onHit: function (target, source) {
                                let result = this.random(10);
                                let chance = 1 * (target.getWeight() > source.getWeight() ? 7 : 1);
                                if (result < chance) source.trySetStatus('brn', target);
                        }
                },
                target: "normal",
                type: "Grass",
                zMovePower: 160,
                contestType: "Tough",
        },
        "sacredstorm": {
                accuracy: 100,
                basePower: 65,
                basePowerCallback: function (pokemon, target, move) {
                        if (target.positiveBoosts() > 0) {
                                return move.basePower * 2;
                        }
                        return move.basePower;
                },
                category: "Special",
                // The move is supposed to ignore positive stat changes,
                // but I don't know if that can be done in moves.js alone. - Mygavolt
                desc: "Power doubles if the target is boosted in at least one stat. Ignores the target's stat stage changes, including evasiveness.",
                shortDesc: "Power doubles if target is boosted. Ignores target's stat stage changes.",
                id: "sacredstorm",
                isViable: true,
                name: "Sacred Storm",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                ignoreEvasion: true,
                ignoreDefensive: true,
                secondary: false,
                target: "normal",
                type: "Water",
                zMovePower: 120,
                contestType: "Cool",
        },
        "spitesiphon": {
                accuracy: 100,
                basePower: 0,
                category: "Status",
                desc: "Causes the target's last move used to lose 3 PP. If applicable, lost PP is transferred to the user's move with the most used PP other than this move. Fails if the target has not made a move, if the move has 0 PP, or if it no longer knows the move.",
                shortDesc: "Transfers 3 PP from the target to the user.",
                id: "spitesiphon",
                isViable: true,
                name: "Spite Siphon",
                pp: 10,
                priority: 0,
                flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
                onHit: function (target, source) {
                        if (target.deductPP(target.lastMove, 3)) {
                                this.add("-activate", target, 'move: Spite Siphon', this.getMove(target.lastMove).name, 3);
                                // Determine which move to restore PP to
                                let i = 0;
                                for (let m in source.moveset) {
                                        let currentMove = source.moveset[m];
                                        let mostUsedMove = source.moveset[i];
                                        if (currentMove.maxpp - currentMove.pp > mostUsedMove.maxpp - mostUsedMove.pp && currentMove.id !== 'spitesiphon') {
                                                i = m;
                                        }
                                }
                                // Add PP to the move in question (if it's not Spite Siphon)
                                if (source.moveset[i].id !== 'spitesiphon') {
                                        source.moveset[i].pp = Math.min(source.moveset[i].pp + 3, source.moveset[i].maxpp);
                                }
                                return;
                        }
                        return false;
                },
                secondary: false,
                target: "normal",
                type: "Ghost",
                zMoveEffect: 'heal',
                contestType: "Tough",
        },
        "shadowkiss": {
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
                shortDesc: "User recovers 75% of the damage dealt.",
                id: "shadowkiss",
                isViable: true,
                name: "Shadow Kiss",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1, heal: 1},
                drain: [3, 4],
                secondary: false,
                target: "normal",
                type: "Ghost",
                zMovePower: 160,
                contestType: "Cute",
        },
        "ironblooddrench": {
                accuracy: 100,
                basePower: 0,
                category: "Status",
                desc: "Lowers the target's Attack, Special Attack, and Speed by 1. Raises the user's Defense by 2 stages.",
                shortDesc: "Lowers target's Atk, Sp. Atk, and Speed by 1. Raises user's Defense by 2.",
                id: "ironblooddrench",
                isViable: true,
                name: "Iron Blood Drench",
                pp: 15,
                priority: 0,
                flags: {protect: 1, reflectable: 1, mirror: 1},
                boosts: {
                        atk: -1,
                        spa: -1,
                        spe: -1,
                },
                secondary: {
                        chance: 100,
                        self: {
                                boosts: {
                                        def: 2,
                                },
                        },
                },
                target: "normal",
                type: "Steel",
                zMoveBoost: {def: 1},
                contestType: "Clever",
        },
        "xcross": {
                accuracy: 100,
                basePower: 65,
                category: "Physical",
                desc: "Has a higher chance for a critical hit.",
                shortDesc: "Usually goes first. High critical hit ratio.",
                id: "xcross",
                isViable: true,
                name: "X-Cross",
                pp: 20,
                priority: 1,
                flags: {contact: 1, protect: 1, mirror: 1},
                critRatio: 2,
                secondary: false,
                target: "normal",
                type: "Steel",
                zMovePower: 120,
                contestType: "Tough",
        },
        "neurofang": {
                accuracy: 100,
                basePower: 80,
                category: "Physical",
                defensiveCategory: "Special",
                desc: "Deals damage to the target based on its Special Defense instead of Defense.",
                shortDesc: "Damages target based on Sp. Def, not Defense.",
                id: "neurofang",
                isViable: true,
                name: "Neuro Fang",
                pp: 10,
                priority: 0,
                flags: {bite: 1, protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Fire",
                zMovePower: 160,
                contestType: "Beautiful",
        },
        "explosiverobustion": {
                accuracy: 95,
                basePower: 125,
                category: "Physical",
                desc: "Lowers the user's Attack by 2 stages.",
                shortDesc: "Lowers the user's Atk by 2.",
                id: "explosiverobustion",
                isViable: true,
                name: "Explosive Robustion",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                self: {
                        boosts: {
                                atk: -2,
                        },
                },
                secondary: false,
                target: "allAdjacent",
                type: "Fire",
                zMovePower: 190,
                contestType: "Beautiful",
        },
        "lusterblitz": {
                accuracy: 100,
                basePower: 120,
                category: "Physical",
                desc: "If the target lost HP, the user or the target (determined by a 50% chance) takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP. Has a 10% chance to lower the target's Special Defense by 1 stage.",
                shortDesc: "33% recoil to user or target. 10% chance to lower target's Sp. Def by 1.",
                id: "lusterblitz",
                isViable: true,
                name: "Luster Blitz",
                pp: 10,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                onHit: function (target, pokemon) {
                        pokemon.addVolatile('lusterblitz');
                },
                effect: {
                        duration: 1,
                        onAfterMoveSecondarySelf: function (pokemon, target, move) {
                                let damage = this.getDamage(pokemon, target, move);
                                let recoilTarget = this.random(1);
                                if (recoilTarget) {
                                        this.damage(this.calcRecoilDamage(damage, move), target, pokemon, 'recoilToTarget');
                                } else {
                                        this.damage(this.calcRecoilDamage(damage, move), pokemon, target, 'recoilToUser');
                                }
                                pokemon.removeVolatile('lusterblitz');
                        },
                },
                secondary: {
                        chance: 10,
                        boosts: {
                                spd: -1,
                        },
                },
                target: "normal",
                type: "Psychic",
                zMovePower: 190,
                contestType: "Clever",
        },
        "shadowbind": {
                accuracy: 85,
                basePower: 100,
                category: "Special",
                desc: "Has a higher chance for a critical hit. Prevents the target from switching for four or five turns; seven turns if the user is holding Grip Claw. Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute. This effect is not stackable or reset by using this or another partial-trapping move.",
                shortDesc: "High critical hit ratio. Traps and damages the target for 4-5 turns.",
                id: "shadowbind",
                isViable: true,
                name: "Shadow Bind",
                pp: 5,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                critRatio: 2,
                volatileStatus: 'partiallytrapped',
                secondary: false,
                target: "normal",
                type: "Dark",
                zMovePower: 180,
                contestType: "Tough",
        },
        "duststorm": {
                accuracy: 85,
                basePower: 105,
                category: "Special",
                desc: "Has a 30% chance to confuse the target and a 30% chance to lower its Special Attack by 1 stage. This move can hit a target using Bounce, Fly, or Sky Drop. If the weather is Sunny Day, this move does not check accuracy. If the weather is Hail, this move's accuracy is 60%.",
                shortDesc: "30% chance to confuse. 30% chance to lower Sp. Atk. Can't miss in sun.",
                id: "duststorm",
                isViable: true,
                name: "Dust Storm",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                onModifyMove: function (move) {
                        if (this.isWeather(['sunnyday', 'desolateland'])) {
                                move.accuracy = true;
                        } else if (this.isWeather('hail')) {
                                move.accuracy = 60;
                        }
                },
                secondaries: [
                        {
                                chance: 30,
                                volatileStatus: 'confusion',
                        }, {
                                chance: 30,
                                boosts: {
                                        spa: -1,
                                },
                        },
                ],
                target: "allAdjacentFoes",
                type: "Fairy",
                zMovePower: 180,
                contestType: "Tough",
        },
        "solarwind": {
                accuracy: 95,
                basePower: 80,
                category: "Special",
                desc: "Has a 20% chance to raise the user's Defense by 1 stage and a 20% chance to flinch the target.",
                shortDesc: "20% chance to raise user's Def. 20% chance to flinch.",
                id: "solarwind",
                isViable: true,
                name: "Solar Wind",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondaries: [
                        {
                                chance: 20,
                                self: {
                                        boosts: {
                                                def: 1,
                                        },
                                },
                        }, {
                                chance: 20,
                                volatileStatus: 'flinch',
                        },
                ],
                target: "allAdjacentFoes",
                type: "Flying",
                zMovePower: 160,
                contestType: "Beautiful",
        },
        "lunaticblast": {
                accuracy: 85,
                basePower: 110,
                category: "Special",
                desc: "Has a 30% chance to lower the target's Special Attack by 1 stage.",
                shortDesc: "30% chance to lower the target's Sp. Atk by 1.",
                id: "lunaticblast",
                isViable: true,
                name: "Lunatic Blast",
                pp: 5,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: {
                        chance: 30,
                        boosts: {
                                spa: -1,
                        },
                },
                target: "normal",
                type: "Fairy",
                zMovePower: 185,
                contestType: "Beautiful",
        },
        "phantomcrash": {
                accuracy: 100,
                basePower: 90,
                category: "Physical",
                desc: "Has a 20% chance to raise the user's Attack by 1 stage. If this move is successful, it breaks through the target's Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
                shortDesc: "20% chance to raise the user's Attack by 1. Breaks protection.",
                id: "phantomcrash",
                isViable: true,
                name: "Phantom Crash",
                pp: 10,
                priority: 0,
                flags: {contact: 1, mirror: 1},
                breaksProtect: true,
                secondary: {
                        chance: 20,
                        self: {
                                boosts: {
                                        atk: 1,
                                },
                        },
                },
                target: "normal",
                type: "Ghost",
                zMovePower: 175,
                contestType: "Cool",
        },
        "bulkybug": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Lowers the user's Speed by 2 stages. Raises the user's Attack and Defense by 2 stages.",
                shortDesc: "Lowers Spe by 2; raises Atk, Def by 2.",
                id: "bulkybug",
                isViable: true,
                name: "Bulky Bug",
                pp: 20,
                priority: 0,
                flags: {snatch: 1},
                boosts: {
                        spe: -2,
                        atk: 2,
                        def: 2,
                },
                secondary: false,
                target: "self",
                type: "Bug",
                zMoveBoost: {atk: 1},
                contestType: "Cool",
        },
        "wrigglingwall": {
                accuracy: 100,
                basePower: 0,
                damageCallback: function (pokemon) {
                        if (!pokemon.volatiles['wrigglingwall']) return 0;
                        return pokemon.volatiles['wrigglingwall'].damage || 1;
                },
                category: "Physical",
                desc: "Deals damage to the last foe to hit the user with an attack this turn equal to twice the HP lost by the user from that attack, and lowers the attacker's higher attacking stat by 1 stage. If the user did not lose HP from the attack, this move deals damage with a Base Power of 1 instead. If that foe's position is no longer in use, the damage is done to a random foe in range. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by a foe's attack this turn.",
                shortDesc: "If hit by an attack, returns double damage and lowers the attacker's higher attacking stat.",
                id: "wrigglingwall",
                isViable: true,
                name: "Wriggling Wall",
                pp: 10,
                priority: -2,
                flags: {protect: 1, mirror: 1},
                beforeTurnCallback: function (pokemon) {
                        pokemon.addVolatile('wrigglingwall');
                },
                onTryHit: function (target, source, move) {
                        if (!source.volatiles['wrigglingwall']) return false;
                        if (source.volatiles['wrigglingwall'].position === null) return false;
                },
                effect: {
                        duration: 1,
                        noCopy: true,
                        onStart: function (target, source, source2, move) {
                                this.effectData.position = null;
                                this.effectData.damage = 0;
                        },
                        onRedirectTargetPriority: -1,
                        onRedirectTarget: function (target, source, source2) {
                                if (source !== this.effectData.target) return;
                                return source.side.foe.active[this.effectData.position];
                        },
                        onDamagePriority: -101,
                        onDamage: function (damage, target, source, effect) {
                                if (effect && effect.effectType === 'Move' && source.side !== target.side) {
                                        this.effectData.position = source.position;
                                        this.effectData.damage = 2 * damage;
                                }
                        },
                },
                secondary: {
                        chance: 100,
                        onHit: function (target, source, move) {
                                if (target.getStat('atk') >= target.getStat('spa')) {
                                        this.boost({atk:-1}, target, source, move);
                                } else {
                                        this.boost({spa:-1}, target, source, move);
                                }
                        },
                },
                target: "scripted",
                type: "Bug",
                zMovePower: 100,
                contestType: "Cute",
        },
        "breakbite": {
                accuracy: 100,
                basePower: 75,
                category: "Physical",
                desc: "If this move is successful and the user has not fainted, the target loses its held item. If the held item is a Berry, the user eats it immediately. This move cannot remove Z-Crystals, cause Pokemon with the Ability Sticky Hold to lose their held item, cause Pokemon that can Mega Evolve to lose the Mega Stone for their species, or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, or Memory respectively. Items lost to this move cannot be regained with Recycle or the Ability Harvest.",
                shortDesc: "Removes target's item. If the item is a Berry, the user consumes it.",
                id: "breakbite",
                isViable: true,
                name: "Break Bite",
                pp: 20,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                onHit: function (target, source) {
                        if (source.hp) {
                                let item = target.takeItem();
                                if (item.isBerry) {
                                        this.add('-enditem', target, item.name, '[from] stealeat', '[move] Break Bite', '[of] ' + source);
                                        if (this.singleEvent('Eat', item, null, source, null, null)) {
                                                this.runEvent('EatItem', source, null, null, item);
                                        }
                                        if (item.onEat) source.ateBerry = true;
                                } else if (item) {
                                        this.add('-enditem', target, item.name, '[from] move: Break Bite', '[of] ' + source);
                                }
                        }
                },
                secondary: false,
                target: "normal",
                type: "Bug",
                zMovePower: 140,
                contestType: "Cool",
        },
        "shadowyretreat": {
                accuracy: 100,
                basePower: 70,
                category: "Special",
                desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
                shortDesc: "User switches out after damaging the target.",
                id: "shadowyretreat",
                isViable: true,
                name: "Shadowy Retreat",
                pp: 20,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                selfSwitch: true,
                secondary: false,
                target: "normal",
                type: "Ghost",
                zMovePower: 140,
                contestType: "Cool",
        },
        "cryoblast": {
                accuracy: 90,
                basePower: 140,
                category: "Special",
                desc: "Lowers the user's Special Attack by 2 stages. Has a 10% chance to freeze the target.",
                shortDesc: "Lowers the user's Sp. Atk by 2. 10% chance to freeze the target.",
                id: "cryoblast",
                isViable: true,
                name: "Cryoblast",
                pp: 5,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                self: {
                        boosts: {
                                spa: -2,
                        },
                },
                secondary: {
                        chance: 10,
                        status: 'frz',
                },
                target: "normal",
                type: "Ice",
                zMovePower: 200,
                contestType: "Beautiful",
        },
        "chargemind": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Raises the user's Special Defense by 2 stages and its Special Attack by 1 stage. If the user uses an Electric-type or Psychic-type attack on the next turn, its power will be multiplied by 1.5.",
                shortDesc: "Boosts next Electric or Psychic move. +1 SpA, +2 SpD.",
                id: "chargemind",
                isViable: true,
                name: "Charge Mind",
                pp: 20,
                priority: 0,
                flags: {snatch: 1},
                volatileStatus: 'chargemind',
                onHit: function (pokemon) {
                        this.add('-activate', pokemon, 'move: Charge Mind');
                },
                effect: {
                        duration: 2,
                        onRestart: function (pokemon) {
                                this.effectData.duration = 2;
                        },
                        onBasePowerPriority: 3,
                        onBasePower: function (basePower, attacker, defender, move) {
                                if (move.type === 'Electric' || move.type === 'Psychic') {
                                        this.debug('Charge Mind boost');
                                        return this.chainModify(1.5);
                                }
                        },
                },
                boosts: {
                        spa: 1,
                        spd: 2,
                },
                secondary: false,
                target: "self",
                type: "Electric",
                zMoveEffect: 'clearnegativeboost',
                contestType: "Clever",
        },
        "fightingspirit": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Raises the user's Attack, Defense, and Speed by 1 stage.",
                shortDesc: "Raises the user's Atk, Def, Speed by 1.",
                id: "fightingspirit",
                isViable: true,
                name: "Fighting Spirit",
                pp: 15,
                priority: 0,
                flags: {snatch: 1},
                boosts: {
                        atk: 1,
                        def: 1,
                        spe: 1,
                },
                secondary: false,
                target: "self",
                type: "Fighting",
                zMoveEffect: 'crit2',
                contestType: "Cool",
        },
        "boostbuster": {
                accuracy: 100,
                basePower: 100,
                basePowerCallback: function (pokemon, target, move) {
                        if (target.boosts.def > 0 || target.boosts.spd > 0) return move.basePower * 2;
                        return move.basePower;
                },
                category: "Physical",
                desc: "Power doubles if the target is boosted in Defense or Special Defense.",
                shortDesc: "Power doubles if target has boosted Def or SpD.",
                id: "boostbuster",
                isViable: true,
                name: "Boost Buster",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "allAdjacent",
                type: "Steel",
                zMovePower: 180,
                contestType: "Tough",
        },
        "pollutionball": {
                accuracy: 95,
                basePower: 50,
                basePowerCallback: function (pokemon, target, move) {
                        if (this.weather) return move.basePower * 2;
                        return move.basePower;
                },
                category: "Special",
                desc: "Has a 100% chance to poison the target. Power doubles during weather effects and this move's type changes to match; Ice type during Hail, Water type during Rain Dance, Rock type during Sandstorm, and Fire type during Sunny Day.",
                shortDesc: "100% chance to poison the target. Power doubles and type varies in each weather.",
                id: "pollutionball",
                isViable: true,
                name: "Pollution Ball",
                pp: 25,
                priority: 0,
                flags: {bullet: 1, protect: 1, mirror: 1},
                onModifyMove: function (move) {
                        switch (this.effectiveWeather()) {
                        case 'sunnyday':
                        case 'desolateland':
                                move.type = 'Fire';
                                break;
                        case 'raindance':
                        case 'primordialsea':
                                move.type = 'Water';
                                break;
                        case 'sandstorm':
                                move.type = 'Rock';
                                break;
                        case 'hail':
                                move.type = 'Ice';
                                break;
                        }
                },
                secondary: {
                        chance: 100,
                        status: 'psn',
                },
                target: "normal",
                type: "Normal",
                zMovePower: 160,
                contestType: "Clever",
        },
        "torturingslumber": {
                accuracy: 70,
                basePower: 0,
                category: "Status",
                desc: "Causes the target to fall asleep and lose 1/4 of its maximum HP, rounded down, at the end of each turn as long as it is asleep.",
                shortDesc: "Puts the target to sleep and hurts it by 1/4 max HP per turn asleep.",
                id: "torturingslumber",
                isViable: true,
                name: "Torturing Slumber",
                pp: 10,
                priority: 0,
                flags: {protect: 1, reflectable: 1, mirror: 1},
                onHit: function (target) {
                        if (!target.setStatus('slp')) return false;
                        this.add('-status', target, 'slp', '[from] move: Torturing Slumber');
                        target.addVolatile('nightmare');
                },
                secondary: false,
                target: "normal",
                type: "Ghost",
                zMoveBoost: {spa: 1},
                contestType: "Clever",
        },
        "playfulgrace": {
                accuracy: 100,
                basePower: 50,
                basePowerCallback: function (pokemon, target, move) {
                        if (target.newlySwitched || this.willMove(target)) {
                                return move.basePower;
                        }
                        return move.basePower * 2;
                },
                category: "Special",
                desc: "Power doubles on targets that move before the user; power is not doubled on targets that switch out.",
                shortDesc: "Power doubles on targets that move before the user.",
                id: "playfulgrace",
                isViable: true,
                name: "Playful Grace",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "allAdjacentFoes",
                type: "Fairy",
                zMovePower: 100,
                contestType: "Beautiful",
        },
        "ushield": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "The user is protected from most attacks made by other Pokemon during this turn, and switches out if affected by a contact move. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails or if the user's last move used is not Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard. Fails if the user moves last this turn.",
                shortDesc: "Protects from attacks. Contact causes switching.",
                id: "ushield",
                isViable: true,
                name: "U-Shield",
                pp: 10,
                priority: 4,
                flags: {},
                stallingMove: true,
                volatileStatus: 'kingsshield',
                onTryHit: function (pokemon) {
                        return !!this.willAct() && this.runEvent('StallMove', pokemon);
                },
                onHit: function (pokemon) {
                        pokemon.addVolatile('stall');
                },
                effect: {
                        duration: 1,
                        onStart: function (target) {
                                this.add('-singleturn', target, 'Protect');
                        },
                        onSourcePrepareHit: function (source, target, effect) {
                                if (effect.effectType !== 'Move' || !effect.flags['protect'] || effect.category === 'Status') return;
                                if (effect.flags['contact']) {
                                        effect.ignoreImmunity = true;
                                }
                        },
                        onTryHitPriority: 3,
                        onTryHit: function (target, source, move) {
                                if (!move.flags['protect'] || move.category === 'Status') {
                                        if (move.isZ) move.zBrokeProtect = true;
                                        return;
                                }
                                this.add('-activate', target, 'move: Protect');
                                let lockedmove = source.getVolatile('lockedmove');
                                if (lockedmove) {
                                        // Outrage counter is reset
                                        if (source.volatiles['lockedmove'].duration === 2) {
                                                delete source.volatiles['lockedmove'];
                                        }
                                }
                                if (move.flags['contact'] && this.canSwitch(target.side)) {
                                        target.switchFlag = true;
                                }
                                return null;
                        },
                },
                secondary: false,
                target: "self",
                type: "Bug",
                zMoveEffect: 'clearnegativeboost',
                contestType: "Cool",
        },
        "downgradekick": {
                accuracy: 100,
                basePower: 55,
                category: "Special",
                desc: "Hits twice, with each hit having a 100% chance to lower the target's Special Attack by 1 stage. If the first hit breaks the target's substitute, it will take damage for the second hit.",
                shortDesc: "Hits 2 times. Each hit has 100% chance to lower Sp. Atk.",
                id: "downgradekick",
                isViable: true,
                name: "Downgrade Kick",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                multihit: [2, 2],
                secondary: {
                        chance: 100,
                        boosts: {
                                spa: -1,
                        },
                },
                target: "allAdjacentFoes",
                type: "Dark",
                zMovePower: 100,
                contestType: "Tough",
        },
        "fakespite": {
                accuracy: 100,
                basePower: 40,
                category: "Physical",
                desc: "Has a 100% chance to flinch the target and, if applicable, cause its last move used to lose 4 PP. Fails unless it is the user's first turn on the field.",
                shortDesc: "Hits first. First turn out only. 100% flinch chance. Lowers target's PP.",
                id: "fakespite",
                isViable: true,
                name: "Fake Spite",
                pp: 10,
                priority: 3,
                flags: {protect: 1, mirror: 1},
                onTry: function (pokemon, target) {
                        if (pokemon.activeTurns > 1) {
                                this.add('-fail', pokemon);
                                this.add('-hint', "Fake Spite only works on your first turn out.");
                                return null;
                        }
                },
                onHit: function (target) {
                        if (target.deductPP(target.lastMove, 4)) {
                                this.add("-activate", target, 'move: Fake Spite', this.getMove(target.lastMove).name, 4);
                                return;
                        }
                        return false;
                },
                secondary: {
                        chance: 100,
                        volatileStatus: 'flinch',
                },
                target: "normal",
                type: "Ghost",
                zMovePower: 100,
                contestType: "Cute",
        },
        "wavecrash": {
                accuracy: 100,
                basePower: 40,
                category: "Special",
                desc: "Hits two to five times, with each hit having a 20% chance to confuse the target. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
                shortDesc: "Hits 2-5 times in one turn. Each hit has a 20% chance to confuse.",
                id: "wavecrash",
                isViable: true,
                name: "Wave Crash",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                multihit: [2, 5],
                secondary: {
                        chance: 20,
                        volatileStatus: 'confusion',
                },
                target: "normal",
                type: "Water",
                zMovePower: 190,
                contestType: "Tough",
        },
        "scaldingburst": {
                accuracy: 100,
                basePower: 0,
                damageCallback: function (pokemon) {
                        if (!pokemon.volatiles['scaldingburst']) return 0;
                        return pokemon.volatiles['scaldingburst'].damage || 1;
                },
                category: "Special",
                desc: "Deals damage to the last foe to hit the user with an attack this turn equal to the HP lost by the user from that attack. Has a 100% chance to burn the target if successful. If the user did not lose HP from the attack, this move deals damage with a Base Power of 1 instead. If that foe's position is no longer in use, the damage is done to a random foe in range. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by a foe's attack this turn.",
                shortDesc: "If hit by an attack, returns 1x damage. 100% chance to burn.",
                id: "scaldingburst",
                isViable: true,
                name: "Metal Burst",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                beforeTurnCallback: function (pokemon) {
                        pokemon.addVolatile('scaldingburst');
                },
                onTryHit: function (target, source, move) {
                        if (!source.volatiles['scaldingburst']) return false;
                        if (source.volatiles['scaldingburst'].position === null) return false;
                },
                effect: {
                        duration: 1,
                        noCopy: true,
                        onStart: function (target, source, source2, move) {
                                this.effectData.position = null;
                                this.effectData.damage = 0;
                        },
                        onRedirectTargetPriority: -1,
                        onRedirectTarget: function (target, source, source2) {
                                if (source !== this.effectData.target) return;
                                return source.side.foe.activate[this.effectData.position];
                        },
                        onDamagePriority: -101,
                        onDamage: function (damage, target, source, effect) {
                                if (effect && effect.effectType === 'Move' && source.side !== target.side) {
                                        this.effectData.position = source.position;
                                        this.effectData.damage = damage;
                                }
                        },
                },
                secondary: {
                        chance: 100,
                        status: 'brn',
                },
                target: "scripted",
                type: "Water",
                zMovePower: 100,
                contestType: "Tough",
        },
        "deafeningwind": {
                accuracy: 70,
                basePower: 110,
                category: "Special",
                desc: "Has a 40% chance to lower the target's Special Defense by 2 stages.",
                shortDesc: "40% chance to lower the target's Sp. Def by 2.",
                id: "deafeningwind",
                isViable: true,
                name: "Deafening Wind",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: {
                        chance: 40,
                        boosts: {
                                spd: -2,
                        },
                },
                target: "allAdjacentFoes",
                type: "Flying",
                zMovePower: 185,
                contestType: "Tough",
        },
        "suffering": {
                accuracy: 100,
                basePower: 0,
                category: "Status",
                desc: "The user loses 1/16 of its maximum HP, rounded down, at the end of each turn and cannot select the same move for use two turns in a row. This effect lasts until the target leaves the field.",
                shortDesc: "Target loses 1/16 max HP per turn and can't select the same move twice in a row.",
                id: "suffering",
                isViable: true,
                name: "Suffering",
                pp: 10,
                priority: 0,
                flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
                volatileStatus: 'suffering',
                effect: {
                        noCopy: true,
                        onStart: function (pokemon) {
                                this.add('-start', pokemon, 'Suffering');
                        },
                        onResidualOrder: 6,
                        onResidual: function (pokemon) {
                                this.damage(pokemon.maxhp / 16);
                        },
                        onDisableMove: function (pokemon) {
                                if (pokemon.lastMove !== 'struggle') pokemon.disableMove(pokemon.lastMove);
                        },
                },
                secondary: false,
                target: "normal",
                type: "Dark",
                zMoveBoost: {def: 1},
                contestType: "Tough",
        },
        "arcticpulse": {
                accuracy: 90,
                basePower: 60,
                category: "Special",
                desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Abilities Battle Armor or Shell Armor.",
                shortDesc: "Always results in a critical hit.",
                id: "arcticpulse",
                isViable: true,
                name: "Arctic Pulse",
                pp: 10,
                priority: 0,
                flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
                willCrit: true,
                secondary: false,
                target: "any",
                type: "Ice",
                zMovePower: 120,
                contestType: "Beautiful",
        },
        "dimensionalscissor": {
                accuracy: 100,
                basePower: 80,
                category: "Physical",
                defensiveCategory: "Special",
                desc: "Deals damage to the target based on its Special Defense instead of Defense.",
                shortDesc: "Damages target based on Sp. Def, not Defense.",
                id: "dimensionalscissor",
                isViable: true,
                name: "Dimensional Scissor",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Bug",
                zMovePower: 160,
                contestType: "Cool",
        },
        "pixiepaw": {
                accuracy: 90,
                basePower: 50,
                category: "Physical",
                desc: "Has a 100% chance to lower the target's Attack by 2 stages.",
                shortDesc: "100% chance to lower the target's Attack by 2.",
                id: "pixiepaw",
                isViable: true,
                name: "Pixie Paw",
                pp: 35,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: {
                        chance: 100,
                        boosts: {
                                atk: -2,
                        },
                },
                target: "normal",
                type: "Fairy",
                zMovePower: 100,
                contestType: "Cute",
        },
        "shadowpsyche": {
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "The target's raised stat stages are stolen from it and applied to the user before dealing damage.",
                shortDesc: "Steals target's boosts before dealing damage.",
                id: "shadowpsyche",
                isViable: true,
                name: "Shadow Psyche",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1, authentic: 1},
                stealsBoosts: true,
                // Boost stealing implemented in scripts.js
                secondary: false,
                target: "normal",
                type: "Ghost",
                zMovePower: 160,
                contestType: "Clever",
        },
        "wizardshift": {
                accuracy: 100,
                basePower: 0,
                category: "Status",
                desc: "The user's major status condition is transferred to the target, and the user is then cured. Fails if the target already has a major status condition. If applicable, the user swaps its held item with the target's held item.",
                shortDesc: "Transfers the user's status ailment to the target. User switches its held item with the target's.",
                id: "wizardshift",
                isViable: true,
                name: "Wizard Shift",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                onHit: function (target, source, move) {
                        if (source.status && !target.status && target.trySetStatus(source.status)) {
                                source.cureStatus();
                                if (!target.hasAbility('stickyhold')) {
                                        let yourItem = target.takeItem(source);
                                        let myItem = source.takeItem();
                                        if (target.item || source.item || (!youritem && !myitem)) {
                                                if (yourItem) target.item = yourItem.id;
                                                if (myItem) source.item = myItem.id;
                                                return false;
                                        }
                                        if ((myItem && !this.singleEvent('TakeItem', myItem, source.itemData, target, source, move, myItem)) || (yourItem && !this.singleEvent('TakeItem', yourItem, target.itemData, source, target, move, yourItem))) {
                                                if (yourItem) target.item = yourItem.id;
                                                if (myItem) source.item = myItem.id;
                                                return false;
                                        }
                                        this.add('-activate', source, 'move: Wizard Shift', '[of] ' + target);
                                        if (myItem) {
                                                target.setItem(myItem);
                                                this.add('-item', target, myItem, '[from] move: Wizard Shift');
                                        } else {
                                                this.add('-enditem', target, yourItem, '[silent]', '[from] move: Wizard Shift');
                                        }
                                        if (yourItem) {
                                                source.setItem(yourItem);
                                                this.add('-item', source, yourItem, '[from] move: Wizard Shift');
                                        } else {
                                                this.add('-enditem', source, myItem, '[silent]', '[from] move: Wizard Shift');
                                        }
                                }
                        } else {
                                return false;
                        }
                },
                secondary: false,
                target: "normal",
                type: "Normal",
                zMoveBoost: {spe: 2},
                contestType: "Clever",
        },
        "cuttingseeds": {
                accuracy: 100,
                basePower: 25,
                category: "Special",
                desc: "Hits two to five times, with each hit having a higher critical hit ratio. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
                shortDesc: "Hits 2-5 times in one turn. Each hit has a higher critical hit ratio.",
                id: "cuttingseeds",
                isViable: true,
                name: "Cutting Seeds",
                pp: 30,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                multihit: [2, 5],
                self: {
                        volatileStatus: 'cuttingseeds',
                },
                effect: {
                        duration: 1,
                        onStart: function () {
                                this.effectData.critRatio = 1;
                        },
                        onRestart: function () {
                                this.effectData.critRatio++;
                        },
                },
                secondary: false,
                target: "allAdjacentFoes",
                type: "Grass",
                zMovePower: 140,
                contestType: "Cool",
        },
        "muddyseed": {
                accuracy: 100,
                basePower: 25,
                category: "Physical",
                desc: "Hits two to five times, with each hit having a 100% chance to lower the target's accuracy by 1 stage. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
                shortDesc: "Hits 2-5 times in one turn. Each hit has 100% chance to lower accuracy.",
                id: "muddyseed",
                isViable: true,
                name: "Muddy Seed",
                pp: 30,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                multihit: [2, 5],
                secondary: {
                        chance: 100,
                        boosts: {
                                accuracy: -1,
                        },
                },
                target: "normal",
                type: "Grass",
                zMovePower: 140,
                contestType: "Cool",
        },
        "gaiablade": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "Has a higher chance for a critical hit.",
                shortDesc: "High critical hit ratio.",
                id: "gaiablade",
                isViable: true,
                name: "Gaia Blade",
                pp: 10,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                critRatio: 2,
                secondary: false,
                target: "allAdjacent",
                type: "Grass",
                zMovePower: 180,
                contestType: "Tough",
        },
        "scorchedearth": {
                accuracy: 100,
                basePower: 130,
                category: "Special",
                desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Rain Dance, or Sandstorm. If the user is holding a Power Herb or the weather is Sunny Day, the move completes in one turn. Has a 100% chance to burn unless the weather is Rain Dance.",
                shortDesc: "Charges turn 1. Hits turn 2. No charge in sunlight. 100% chance to burn except in rain.",
                id: "scorchedearth",
                isViable: true,
                name: "Scorched Earth",
                pp: 10,
                priority: 0,
                flags: {charge: 1, protect: 1, mirror: 1},
                onTry: function (attacker, defender, move) {
                        if (attacker.removeVolatile(move.id)) {
                                return;
                        }
                        this.add('-prepare', attacker, move.name, defender);
                        if (this.isWeather(['sunnyday', 'desolateland']) || !this.runEvent('ChargeMove', attacker, defender, move)) {
                                this.add('-anim', attacker, move.name, defender);
                                return;
                        }
                        attacker.addVolatile('twoturnmove', defender);
                        return null;
                },
                onBasePowerPriority: 4,
                onBasePower: function (basePower, pokemon, target) {
                        if (this.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
                                this.debug('weakened by weather');
                                return this.chainModify(0.5);
                        }
                },
                secondary: {
                        chance: 100,
                        onHit: function (target, source) {
                                if (!this.isWeather(['raindance', 'primordialsea'])) {
                                        target.trySetStatus('brn', source);
                                }
                        },
                },
                target: "allAdjacent",
                type: "Grass",
                zMovePower: 195,
                contestType: "Cool",
        },
        "chargeupbeam": {
                accuracy: 90,
                basePower: 50,
                category: "Special",
                desc: "Has a 70% chance to raise the user's Special Attack and Special Defense by 1 stage. If the user uses an Electric-type attack on the next turn, its power will be doubled.",
                shortDesc: "Boosts next Electric move. 70% chance to raise the user's Sp. Atk and Sp. Def by 1.",
                id: "chargeupbeam",
                isViable: true,
                name: "Charge Up Beam",
                pp: 20,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                self: {
                        volatileStatus: 'charge',
                },
                secondary: {
                        chance: 70,
                        self: {
                                boosts: {
                                        spa: 1,
                                        spd: 1,
                                },
                        },
                },
                target: "normal",
                type: "Electric",
                zMovePower: 100,
                contestType: "Beautiful",
        },
        "pursuingbeam": {
                accuracy: 90,
                basePower: 150,
                category: "Special",
                desc: "If an adjacent foe switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after a foe using Parting Shot, U-turn, or Volt Switch, but not Baton Pass, it will hit that foe before it leaves the field. No accuracy check is done if the user hits a foe switching out, and the user's turn is over; if a foe faints from this, the replacement Pokemon does not become active until the end of the turn. Otherwise, if this move is successful, the user must recharge on the following turn and cannot make a move.",
                shortDesc: "Unless a foe is switching out, user cannot move next turn.",
                id: "pursuingbeam",
                isViable: true,
                name: "Pursuing Beam",
                pp: 5,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                beforeTurnCallback: function (pokemon, target) {
                        target.side.addSideCondition('pursuingbeam', pokemon);
                        if (!target.side.sideConditions['pursuingbeam'].sources) {
                                target.side.sideConditions['pursuingbeam'].sources = [];
                        }
                        target.side.sideConditions['pursuingbeam'].sources.push(pokemon);
                },
                onModifyMove: function (move, source, target) {
                        if (target && target.beingCalledBack) move.accuracy = true;
                },
                onTryHit: function (target, pokemon) {
                        target.side.removeSideCondition('pursuingbeam');
                },
                self: {
                        onHit: function (pokemon, target) {
                                if (!target.beingCalledBack) {
                                        pokemon.addVolatile('mustrecharge');
                                }
                        },
                },
                effect: {
                        duration: 1,
                        onBeforeSwitchOut: function (pokemon) {
                                this.debug('Pursuing Beam start');
                                let sources = this.effectData.sources;
                                let alreadyAdded = false;
                                for (let i = 0; i < sources.length; i++) {
                                        if (sources[i].moveThisTurn || sources[i].fainted) continue;
                                        if (!alreadyAdded) {
                                                this.add('-activate', pokemon, 'move: Pursuing Beam');
                                                alreadyAdded = true;
                                        }
                                        this.cancelMove(sources[i]);
                                        // Run through each decision in queue to check if the Pursuing Beam user is supposed to Mega Evolve this turn.
                                        // If it is, then Mega Evolve before moving.
                                        if (sources[i].canMegaEvo) {
                                                for (let j = 0; j < this.queue.length; j++) {
                                                        if (this.queue[j].pokemon === sources[i] && this.queue[j].choice === 'megaEvo') {
                                                                this.runMegaEvo(sources[i]);
                                                                this.queue.splice(j, 1);
                                                                break;
                                                        }
                                                }
                                        }
                                        this.runMove('pursuingbeam', sources[i], this.getTargetLoc(pokemon, sources[i]));
                                }
                        },
                },
                secondary: false,
                target: "normal",
                type: "Dark",
                zMovePower: 200,
                contestType: "Clever",
        },
        "turtledance": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Raises the user's Defense, Special Attack, and Speed by 1 stage.",
                shortDesc: "Raises the user's Def, Sp. Atk, Speed by 1.",
                id: "turtledance",
                isViable: true,
                name: "Turtle Dance",
                pp: 20,
                priority: 0,
                flags: {snatch: 1, dance: 1},
                boosts: {
                        def: 1,
                        spa: 1,
                        spe: 1,
                },
                secondary: false,
                target: "self",
                type: "Water",
                zMoveEffect: 'clearnegativeboost',
                contestType: "Cute",
        },
        "healingcrystals": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "The target restores 1/2 of its maximum HP, rounded half up. Raises the target's Defense by 2 stages.",
                shortDesc: "Heals the target by 50% of its max HP. Raises the target's Defense by 2.",
                id: "healingcrystals",
                isViable: true,
                name: "Healing Crystals",
                pp: 5,
                priority: 0,
                flags: {protect: 1, reflectable: 1, heal: 1},
                onHit: function (target, source) {
                        this.heal(Math.ceil(target.maxhp * 0.5));
                },
                secondary: {
                        boosts: {
                                def: 2,
                        },
                },
                target: "adjacentAlly",
                type: "Rock",
                zMoveEffect: 'clearnegativeboost',
                contestType: "Beautiful",
        },
        "primordialwaves": {
                accuracy: 100,
                basePower: 60,
                category: "Special",
                desc: "Power doubles and target's stats are lowered if the target has less than or equal to half of its maximum HP remaining.",
                shortDesc: "Power doubles and target's stats lowered if target's HP is 50% or less.",
                id: "primordialwaves",
                isViable: true,
                name: "Primordial Waves",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                onBasePowerPriority: 4,
                onBasePower: function (basePower, pokemon, target) {
                        if (target.hp * 2 < target.maxhp) {
                                return this.chainModify(2);
                        }
                },
                secondary: {
                        chance: 100,
                        onHit: function (target, source, move) {
                                if (target.hp * 2 < target.maxhp) {
                                        this.boost({atk: -1, def: -1, spa: -1, spd: -1, spe: -1}, target, source, move);
                                }
                        },
                },
                target: "normal",
                type: "Water",
                zMovePower: 120,
                contestType: "Tough",
        },
        "sacreddance": {
                accuracy: 95,
                basePower: 100,
                category: "Physical",
                desc: "Has a 50% chance to raise the user's Attack and Speed by 1 stage.",
                shortDesc: "50% chance to raise the user's Atk and Spe by 1.",
                id: "sacreddance",
                isViable: true,
                name: "Sacred Dance",
                pp: 20,
                priority: 0,
                flags: {protect: 1, mirror: 1, dance: 1},
                secondary: {
                        chance: 50,
                        self: {
                                boosts: {
                                        atk: 1,
                                        spe: 1,
                                },
                        },
                },
                target: "normal",
                type: "Dragon",
                zMovePower: 180,
                contestType: "Beautiful",
        },
        "grounddivider": {
                accuracy: 100,
                basePower: 100,
                category: "Special",
                desc: "Has a higher chance for a critical hit.",
                shortDesc: "High critical hit ratio. Hits adjacent foes.",
                id: "grounddivider",
                isViable: true,
                name: "Ground Divider",
                pp: 25,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                critRatio: 2,
                secondary: false,
                target: "allAdjacentFoes",
                type: "Flying",
                zMovePower: 160,
                contestType: "Cool",
        },
        "sleeperthread": {
                accuracy: 80,
                basePower: 0,
                category: "Status",
                desc: "Causes the target to fall asleep and have its Speed lowered by 1 stage per turn asleep.",
                shortDesc: "Puts the foe(s) to sleep, lowering Spe by 1 every turn.",
                id: "sleeperthread",
                isViable: true,
                name: "Sleeper Thread",
                pp: 5,
                priority: 0,
                flags: {protect: 1, reflectable: 1, mirror: 1},
                status: 'slp',
                onHit: function (target) {
                        if (!target.setStatus('slp')) return false;
                        this.add('-status', target, 'slp', '[from] move: Sleeper Thread');
                        target.addVolatile('sleeperthread');
                },
                effect: {
                        duration: 1,
                        durationCallback: function (target, source) {
                                // Duration depends on sleep counter
                                if (target.status === 'slp') return target.statusData.time;
                        },
                        onStart: function (pokemon, source) {
                                this.add('-activate', pokemon, 'move: ' + this.effectData.sourceEffect, '[of] ' + source);
                        },
                        onResidual: function (pokemon) {
                                this.boost({spe: -1});
                        },
                        onEnd: function (pokemon) {
                                this.add('-end', pokemon, this.effectData.sourceEffect, '[sleeperthread]');
                        },
                },
                secondary: false,
                target: "allAdjacent",
                type: "Bug",
                zMoveBoost: {spe: 1},
                contestType: "Clever",
        },
        "slumberswitch": {
                accuracy: 80,
                basePower: 0,
                category: "Status",
                desc: "Causes the target to fall asleep. If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
                shortDesc: "Puts the foe(s) to sleep. User switches out afterwards.",
                id: "slumberswitch",
                isViable: true,
                name: "Slumber Switch",
                pp: 20,
                priority: 0,
                flags: {protect: 1, reflectable: 1, mirror: 1},
                status: 'slp',
                selfSwitch: true,
                secondary: false,
                target: "allAdjacentFoes",
                type: "Dark",
                zMoveBoost: {spe: 2},
                contestType: "Clever",
        },
        "sweetwish": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "At the end of the next turn, the Pokemon at the user's position has 1/2 of the user's maximum HP restored to it, rounded half up. Fails if this move is already in effect for the user's position. If such is the case, attackers that make contact are confused.",
                shortDesc: "Next turn, 50% of the user's max HP is restored. Contact: causes confusion.",
                id: "sweetwish",
                isViable: true,
                name: "Sweet Wish",
                pp: 5,
                priority: 0,
                flags: {snatch: 1, heal: 1},
                sideCondition: 'Sweet Wish',
                effect: {
                        duration: 2,
                        onStart: function (side, source) {
                                this.effectData.hp = source.maxhp / 2;
                        },
                        onHit: function (pokemon, source, move) {
                                if (move.flags['contact']) {
                                        source.addVolatile('confusion');
                                }
                        },
                        onResidualOrder: 4,
                        onEnd: function (side) {
                                let target = side.active[this.effectData.sourcePosition];
                                if (target && !target.fainted) {
                                        let source = this.effectData.source;
                                        let damage = this.heal(this.effectData.hp, target, target);
                                        if (damage) this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + source.name);
                                }
                        },
                },
                secondary: false,
                target: "self",
                type: "Fairy",
                zMoveBoost: {spd: 1},
                contestType: "Cute",
        },
        "trifog": {
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Has a 30% chance to clear the effects of Spikes, Toxic Spikes, Stealth Rock, and Sticky Web from the user's side.",
                shortDesc: "30% chance to clear user side's hazards.",
                id: "trifog",
                isViable: true,
                name: "Tri-Fog",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: {
                        chance: 30,
                        onHit: function (target, source, move) {
                                let removeUser = {spikes:1, toxicspikes:1, stealthrock:1, stickyweb:1, cosmicweb:1};
                                for (let sideCondition in removeUser) {
                                        if (source.side.removeSideCondition(sideCondition)) {
                                                this.add('-sideend', source.side, this.getEffect(sideCondition).name, '[from] move: Tri-Fog', '[of] ' + source);
                                        }
                                }
                        },
                },
                target: "normal",
                type: "Normal",
                zMovePower: 160,
                contestType: "Cool",
        },
        "drainage": {
                accuracy: 100,
                basePower: 75,
                category: "Physical",
                desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
                shortDesc: "User recovers 50% of the damage dealt.",
                id: "drainage",
                isViable: true,
                name: "Drainage",
                pp: 10,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
                drain: [1, 2],
                secondary: false,
                target: "normal",
                type: "Dark",
                zMovePower: 140,
                contestType: "Tough",
        },
        "landfragments": {
                accuracy: 100,
                basePower: 40,
                category: "Special",
                desc: "No additional effect.",
                shortDesc: "Usually goes first.",
                id: "landfragments",
                isViable: true,
                name: "Land Fragments",
                pp: 30,
                priority: 1,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Ground",
                zMovePower: 100,
                contestType: "Beautiful",
        },
        "boulderblast": {
                accuracy: 100,
                basePower: 40,
                category: "Physical",
                desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
                shortDesc: "100% chance to lower adjacent Pkmn Speed by 1.",
                id: "boulderblast",
                isViable: true,
                name: "Boulder Blast",
                pp: 20,
                priority: 1,
                flags: {protect: 1, mirror: 1},
                secondary: {
                        chance: 100,
                        boosts: {
                                spe: -1,
                        },
                },
                target: "allAdjacent",
                type: "Ground",
                zMovePower: 100,
                contestType: "Tough",
        },
        "shattershard": {
                accuracy: 70,
                basePower: 40,
                category: "Physical",
                desc: "Has a 20% chance to KO the target, unless the target is at a higher level or has the Ability Sturdy.",
                shortDesc: "20% chance to KO target, if applicable.",
                id: "shattershard",
                isViable: true,
                name: "Shatter Shard",
                pp: 20,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: {
                        chance: 20,
                        onHit: function (target, source, move) {
                                if (source.level >= target.level && !target.hasAbility('sturdy')) {
                                        this.add('-ohko');
                                }
                        },
                },
                target: "normal",
                type: "Ground",
                zMovePower: 100,
                contestType: "Tough",
        },
        "wispwasp": {
                accuracy: 100,
                basePower: 40,
                category: "Physical",
                desc: "Has a 100% chance to burn the target.",
                shortDesc: "100% chance to burn the target.",
                id: "wispwasp",
                isViable: true,
                name: "Wisp Wasp",
                pp: 30,
                priority: 1,
                flags: {protect: 1, mirror: 1},
                secondary: {
                        chance: 100,
                        status: 'brn',
                },
                target: "normal",
                type: "Fire",
                zMovePower: 100,
                contestType: "Beautiful",
        },
        "spinningpunch": {
                accuracy: 100,
                basePower: 0,
                basePowerCallback: function (pokemon, target) {
                        let power = (Math.floor(25 * target.getStat('spe') / pokemon.getStat('spe')) || 1);
                        if (power > 150) power = 150;
                        this.debug('' + power + ' bp');
                        return power;
                },
                category: "Physical",
                desc: "Power is equal to (25 * target's current Speed / user's current Speed), rounded down, + 1, but not more than 150.",
                shortDesc: "More power the slower the user than the target.",
                id: "spinningpunch",
                isViable: true,
                name: "Spinning Punch",
                pp: 15,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
                secondary: false,
                target: "normal",
                type: "Ghost",
                zMovePower: 160,
                contestType: "Cool",
        },
        "phantomcombo": {
                accuracy: 90,
                basePower: 45,
                category: "Physical",
                desc: "Hits twice. If this move is successful, it breaks through the target's Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. If the first hit breaks the target's substitute, it will take damage for the second hit.",
                shortDesc: "Hits 2 times in one turn. Breaks protection.",
                id: "phantomcombo",
                isViable: true,
                name: "Phantom Combo",
                pp: 10,
                priority: 0,
                flags: {contact: 1, mirror: 1},
                multihit: 2,
                breaksProtect: true,
                secondary: false,
                target: "normal",
                type: "Ghost",
                zMovePower: 100,
                contestType: "Cool",
        },
        "mentalscramble": {
                accuracy: 90,
                basePower: 80,
                category: "Physical",
                desc: "If applicable, causes the target's Ability to become the same as the user's.",
                shortDesc: "The target's Ability changes to match the user's.",
                id: "mentalscramble",
                isViable: true,
                name: "Mental Scramble",
                pp: 15,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                onHit: function (target, source) {
                        if (target === source) return false;
                        let bannedTargetAbilities = {comatose:1, multitype:1, schooling:1, stancechange:1, truant:1};
                        let bannedSourceAbilities = {comatose:1, flowergift:1, forecast:1, illusion:1, imposter:1, multitype:1, stancechange:1, trace:1, zenmode:1};
                        if (bannedTargetAbilities[target.ability] || bannedSourceAbilities[source.ability] || target.ability === source.ability) {
                                return false;
                        }
                        let oldAbility = target.setAbility(source.ability);
                        if (oldAbility) {
                                this.add('-ability', target, this.getAbility(target.ability).name, '[from] move: Mental Scramble');
                                return;
                        }
                        return false;
                },
                secondary: false,
                target: "normal",
                type: "Psychic",
                zMovePower: 160,
                contestType: "Clever",
        },
        "dragonflydance": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Raises the user's Speed by 2 stages and its Attack, Special Attack, and Special Defense by 1 stage.",
                shortDesc: "Raises the user's Speed by 2 and Atk, Sp. Atk, and Sp. Def by 1.",
                id: "dragonflydance",
                isViable: true,
                name: "Dragonfly Dance",
                pp: 10,
                priority: 0,
                flags: {snatch: 1, dance: 1},
                boosts: {
                        atk: 1,
                        spa: 1,
                        spd: 1,
                        spe: 2,
                },
                secondary: false,
                target: "self",
                type: "Dragon",
                zMoveEffect: 'clearnegativeboost',
                contestType: "Beautiful",
        },
        "sacrilege": {
                accuracy: 90,
                basePower: 100,
                category: "Physical",
                desc: "Ignores the target's stat stage changes, including evasiveness. Has a 50% chance to burn the target.",
                shortDesc: "Ignores the target's stat stage changes. 50% chance to burn the target.",
                id: "sacrilege",
                isViable: true,
                name: "Sacrilege",
                pp: 5,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                ignoreEvasion: true,
                ignoreDefensive: true,
                secondary: {
                        chance: 50,
                        status: 'brn',
                },
                target: "normal",
                type: "Fire",
                zMovePower: 180,
                contestType: "Cool",
        },
        "mineraldive": {
                accuracy: 95,
                basePower: 95,
                category: "Physical",
                desc: "Has a 20% chance to flinch the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
                shortDesc: "20% chance to flinch the target. Has 33% recoil.",
                id: "mineraldive",
                isViable: true,
                name: "Mineral Dive",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                recoil: [33, 100],
                secondary: {
                        chance: 20,
                        volatileStatus: 'flinch',
                },
                target: "normal",
                type: "Rock",
                zMovePower: 175,
                contestType: "Cool",
        },
        "terriblefate": {
                accuracy: 100,
                basePower: 60,
                category: "Physical",
                desc: "Has a 100% chance to lower the target's Attack, Defense, and Speed by 1 stage.",
                shortDesc: "100% chance to lower target's Atk, Def, and Spe by 1.",
                id: "terriblefate",
                isViable: true,
                name: "Terrible Fate",
                pp: 20,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: {
                        chance: 100,
                        boosts: {
                                atk: -1,
                                def: -1,
                                spe: -1,
                        },
                },
                target: "allAdjacent",
                type: "Normal",
                zMovePower: 120,
                contestType: "Tough",
        },
        "antiheroburst": {
                accuracy: true,
                basePower: 70,
                category: "Special",
                desc: "This move does not check accuracy. Fails if the target did not select a physical attack, special attack, or Me First for use this turn, or if the target moves before the user.",
                shortDesc: "Usually goes first. Does not check accuracy. Fails if target is not attacking.",
                id: "antiheroburst",
                isViable: true,
                name: "Antihero Burst",
                pp: 5,
                priority: 1,
                flags: {protect: 1, mirror: 1},
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
                zMovePower: 140,
                contestType: "Clever",
        },
        "sludgysap": {
                accuracy: 100,
                basePower: 75,
                category: "Special",
                desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
                shortDesc: "User recovers 50% of the damage dealt.",
                id: "sludgysap",
                isViable: true,
                name: "Sludgy Sap",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1, heal: 1},
                drain: [1, 2],
                secondary: false,
                target: "normal",
                type: "Poison",
                zMovePower: 140,
                contestType: "Clever",
        },
        "dirtyescape": {
                accuracy: 100,
                basePower: 70,
                category: "Special",
                desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member, whose Special Attack is raised by 2 stages. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
                shortDesc: "User switches out after damaging the target. Replacement gains +2 SpA.",
                id: "dirtyescape",
                isViable: true,
                name: "Dirty Escape",
                pp: 20,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                selfSwitch: true,
                sideCondition: 'dirtyescape',
                effect: {
                        duration: 1,
                        onStart: function (source) {
                                let side = source.side;
                                this.add('-sidestart', side, 'move: Dirty Escape');
                        },
                        onSwitchIn: function (pokemon) {
                                this.add('-activate', pokemon, 'move: Dirty Escape');
                                this.boost({spa: 2}, pokemon, this.effectData.positions[pokemon.position], this.getMove('dirtyescape'));
                                pokemon.side.removeSideCondition('dirtyescape');
                        },
                        onEnd: function () {
                                this.add('-sideend', 'move: Dirty Escape');
                        },
                },
                secondary: false,
                target: "normal",
                type: "Dark",
                zMovePower: 140,
                contestType: "Clever",
        },
        "roarofthesun": {
                accuracy: 100,
                basePower: 90,
                category: "Special",
                desc: "The weather becomes Sunny Day.",
                shortDesc: "Summons Sunny Day.",
                id: "roarofthesun",
                isViable: true,
                name: "Roar of the Sun",
                pp: 20,
                priority: 0,
                flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
                secondary: {
                        chance: 100,
                        self: {
                                onHit: function () {
                                        this.setWeather('sunnyday');
                                },
                        },
                },
                target: "allAdjacentFoes",
                type: "Fire",
                zMovePower: 175,
                contestType: "Beautiful",
        },
        "brinydrake": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Raises the user's Attack and Speed by 1 stage if the user has more than half of its maximum HP remaining. Otherwise, raises the user's Attack and Speed by 2 stages.",
                shortDesc: "Raises the user's Attack and Speed by 1 if above 50% HP, otherwise by 2.",
                id: "brinydrake",
                isViable: true,
                name: "Briny Drake",
                pp: 10,
                priority: 0,
                flags: {snatch: 1},
                onHit: function (pokemon) {
                        if (pokemon.hp * 2 < pokemon.maxhp) {
                                this.boost({atk: 2, spe: 2});
                        } else {
                                this.boost({atk: 1, spe: 1});
                        }
                },
                secondary: false,
                target: "self",
                type: "Dragon",
                zMoveEffect: 'clearnegativeboost',
                contestType: "Tough",
        },
        "pulseswitch": {
                accuracy: 100,
                basePower: 60,
                category: "Special",
                desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
                shortDesc: "User switches out after damaging the target.",
                id: "pulseswitch",
                isViable: true,
                name: "Pulse Switch",
                pp: 20,
                priority: 0,
                flags: {protect: 1, pulse: 1, mirror: 1},
                selfSwitch: true,
                secondary: false,
                target: "normal",
                type: "Electric",
                zMovePower: 120,
                contestType: "Cool",
        },
        "hauntedslam": {
                accuracy: 100,
                basePower: 80,
                category: "Physical",
                desc: "Has a 30% chance to lower the target's Defense by 1 stage.",
                shortDesc: "30% chance to lower the target's Defense by 1.",
                id: "hauntedslam",
                isViable: true,
                name: "Haunted Slam",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: {
                        chance: 20,
                        boosts: {
                                def: -1,
                        },
                },
                target: "normal",
                type: "Ghost",
                zMovePower: 160,
                contestType: "Tough",
        },
        "hydratate": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "The user restores 1/2 of its maximum HP, rounded half down. If the weather is Rain Dance, the user instead restores 2/3 of its maximum HP, rounded half down.",
                shortDesc: "User restores 1/2 its max HP; 2/3 in rain.",
                id: "hydratate",
                isViable: true,
                name: "Hydratate",
                pp: 10,
                priority: 0,
                flags: {snatch: 1, heal: 1},
                onHit: function (pokemon) {
                        if (this.isWeather('raindance')) {
                                this.heal(this.modify(pokemon.maxhp, 0.667));
                        } else {
                                this.heal(this.modify(pokemon.maxhp, 0.5));
                        }
                },
                secondary: false,
                target: "self",
                type: "Water",
                zMoveEffect: 'clearnegativeboost',
                contestType: "Beautiful",
        },
        "royalflush": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "This attack charges on the first turn and boosts its Special Attack and Special Defense by 2 stages on the second. On the first turn, the user avoids all attacks other than Surf and Whirlpool but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
                shortDesc: "Dives underwater turn 1, then raises SpA and SpD by 2 turn 2.",
                id: "royalflush",
                isViable: true,
                name: "Royal Flush",
                pp: 20,
                priority: 0,
                flags: {charge: 1, nonsky: 1},
                onTry: function (attacker, defender, move) {
                        if (attacker.removeVolatile(move.id)) {
                                return;
                        }
                        this.add('-prepare', attacker, move.name, defender);
                        if (!this.runEvent('ChargeMove', attacker, defender, move)) {
                                this.add('-anim', attacker, move.name, defender);
                                return;
                        }
                        attacker.addVolatile('twoturnmove', defender);
                        return null;
                },
                effect: {
                        duration: 2,
                        onImmunity: function (type, pokemon) {
                                if (type === 'sandstorm' || type === 'hail') return false;
                        },
                        onAccuracy: function (accuracy, target, source, move) {
                                if (move.id === 'surf' || move.id === 'whirlpool' || move.id === 'helpinghand') {
                                        return;
                                }
                                if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
                                        return;
                                }
                                if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
                                return 0;
                        },
                        onSourceModifyDamage: function (damage, source, target, move) {
                                if (move.id === 'surf' || move.id === 'whirlpool') {
                                        return this.chainModify(2);
                                }
                        },
                },
                boosts: {
                        spa: 2,
                        spd: 2,
                },
                secondary: false,
                target: "self",
                type: "Water",
                zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
                contestType: "Beautiful",
        },
        "trappingroots": {
                accuracy: 90,
                basePower: 0,
                category: "Status",
                desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. At the end of each turn while the target remains active, the user has 1/16 of its maximum HP restored. The effect ends if the user leaves the field.",
                shortDesc: "Prevents the target from switching out. User recovers 1/16 max HP per turn while target is trapped.",
                id: "trappingroots",
                isViable: true,
                name: "Trapping Roots",
                pp: 20,
                priority: 0,
                flags: {protect: 1, reflectable: 1, mirror: 1, nonsky: 1},
                volatileStatus: 'trappingroots',
                effect: {
                        onStart: function (target) {
                                this.add('-start', target, 'move: Trapping Roots');
                        },
                        onTrapPokemon: function (pokemon) {
                                pokemon.tryTrap();
                        },
                        onResidualOrder: 7,
                        onResidual: function (pokemon) {
                                let target = this.effectData.source.side.active[pokemon.volatiles['trappingroots'].sourcePosition];
                                if (target && !target.fainted && target.hp > 0) {
                                        this.debug('No trapped target');
                                        return;
                                }
                                this.heal(pokemon.maxhp / 16);
                        },
                },
                secondary: false,
                target: "normal",
                type: "Grass",
                zMoveBoost: {spd: 1},
                contestType: "Clever",
        },
        "cosmicweb": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Sets up a hazard on the foe's side of the field, lowering the Defense and Special Defense by 1 stage of each foe that switches in, unless it is a Flying-type Pokemon or has the Ability Levitate. Can be used only once before failing. Can be removed from the foe's side if any foe uses Rapid Spin or Defog, or is hit by Defog.",
                shortDesc: "Lowers Defense and Sp. Def of grounded foes by 1 on switch-in.",
                id: "cosmicweb",
                isViable: true,
                name: "Cosmic Web",
                pp: 20,
                priority: 0,
                flags: {reflectable: 1},
                sideCondition: 'cosmicweb',
                effect: {
                        onStart: function (side) {
                                this.add('-sidestart', side, 'move: Cosmic Web');
                        },
                        onSwitchIn: function (pokemon) {
                                if (!pokemon.isGrounded()) return;
                                this.add('-activate', pokemon, 'move: Cosmic Web');
                                this.boost({def: -1, spd: -1}, pokemon, pokemon.side.foe.active[0], this.getMove('cosmicweb'));
                        },
                },
                secondary: false,
                target: "foeSide",
                type: "Psychic",
                zMoveBoost: {spd: 1},
                contestType: "Beautiful",
        },
        "draconictrade": {
                accuracy: 100,
                basePower: 85,
                category: "Special",
                desc: "Has a 100% chance to swap the user's Ability with the target's Ability, if applicable.",
                shortDesc: "100% chance for the user and target to trade Abilities.",
                id: "draconictrade",
                isViable: true,
                name: "Draconic Trade",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: {
                        chance: 100,
                        onHit: function (target, source, move) {
                                let bannedAbilities = {comatose:1, illusion:1, multitype:1, schooling:1, stancechange:1, wonderguard:1};
                                if (!bannedAbilities[target.ability] && !bannedAbilities [source.ability]) {
                                        let targetAbility = this.getAbility(target.ability);
                                        let sourceAbility = this.getAbility(source.ability);
                                        if (target.side === source.side) {
                                                this.add('-activate', source, 'move: Draconic Trade', '', '', '[of] ' + target);
                                        } else {
                                                this.add('-activate', source, 'move: Draconic Trade', targetAbility, sourceAbility, '[of] ' + target);
                                        }
                                        source.battle.singleEvent('End', sourceAbility, source.abilityData, source);
                                        target.battle.singleEvent('End', targetAbility, target.abilityData, target);
                                        if (targetAbility.id !== sourceAbility.id) {
                                                source.ability = targetAbility.id;
                                                target.ability = sourceAbility.id;
                                                source.abilityData = {id: source.ability.id, target: source};
                                                target.abilityData = {id: target.ability.id, target: target};
                                        }
                                        source.battle.singleEvent('Start', targetAbility, source.abilityData, source);
                                        target.battle.singleEvent('Start', sourceAbility, target.abilityData, target);
                                }
                        },
                },
                target: "normal",
                type: "Dragon",
                zMovePower: 160,
                contestType: "Clever",
        },
        "dragonscage": {
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Has a 100% chance to prevent all of the user's foes from using any Dragon-type moves as long as the user remains active.",
                shortDesc: "100% chance to prevent foes from using Dragon-type moves.",
                id: "dragonscage",
                isViable: true,
                name: "Dragon's Cage",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1, distance: 1},
                secondary: {
                        chance: 100,
                        self: {
                                volatileStatus: 'dragonscage';
                        },
                },
                effect: {
                        noCopy: true,
                        onStart: function (target) {
                                this.add('-start', target, 'move: Dragon\'s Cage');
                        },
                        onFoeDisableMove: function (pokemon) {
                                let foeMoves = this.effectData.source.moveset;
                                for (let f = 0; f < foeMoves.length; f++) {
                                        if (foeMoves[f].id === 'struggle') continue;
                                        pokemon.disableMove(foeMoves[f].id, 'hidden');
                                }
                                pokemon.maybeDisabled = true;
                        },
                        onFoeBeforeMovePriority: 4,
                        onFoeBeforeMove: function (attacker, defender, move) {
                                if (move.id !== 'struggle' && move.type === "Dragon") {
                                        this.add('cant', attacker, 'move: Dragon\'s Cage', move);
                                        return false;
                                }
                        },
                },
                pressureTarget: "foeSide",
                target: "any",
                type: "Dragon",
                zMovePower: 170,
                contestType: "Clever",
        },
        "coaststones": {
                accuracy: 100,
                basePower: 70,
                category: "Special",
                desc: "Has a 30% chance to burn the target and, if a foe is targeted, a 30% chance to set up Stealth Rock on the foe's side.",
                shortDesc: "30% chance to burn. 30% chance to set up Stealth Rock if a foe is targeted.",
                id: "coaststones",
                isViable: true,
                name: "Coast Stones",
                pp: 20,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondaries: [
                        {
                                chance: 30,
                                status: 'brn',
                        }, {
                                chance: 30,
                                onHit: function (target, source, move) {
                                        if (source.side !== target.side) {
                                                target.side.addSideCondition('stealthrock');
                                        }
                                },
                        },
                ],
                target: "normal",
                type: "Rock",
                zMovePower: 140,
                contestType: "Tough",
        },
        "switchstrike": {
                accuracy: true,
                basePower: 70,
                category: "Physical",
                desc: "This move does not check accuracy. If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
                shortDesc: "This mvoe does not check accuracy. User switches out after damaging the target.",
                id: "switchstrike",
                isViable: true,
                name: "Switch Strike",
                pp: 20,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                selfSwitch: true,
                secondary: false,
                target: "normal",
                type: "Steel",
                zMovePower: 140,
                contestType: "Cool",
        },
        "negativebits": {
                accuracy: 100,
                basePower: 40,
                category: "Physical",
                desc: "The target's positive stat stages become negative and vice versa.",
                shortDesc: "Usually goes first. Inverts the target's stat stages.",
                id: "negativebits",
                isViable: true,
                name: "Negative Bits",
                pp: 20,
                priority: 1,
                flags: {protect: 1, mirror: 1},
                onHit: function (target) {
                        for (let i in target.boosts) {
                                if (target.boosts[i] === 0) continue;
                                target.boosts[i] = -target.boosts[i];
                        }
                        this.add('-invertboost', target, '[from] move: Negative Bits');
                },
                target: "normal",
                type: "Dark",
                zMovePower: 100,
                contestType: "Clever",
        },
        "aquadrain": {
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "The user restores its HP equal to the target's Attack stat calculated with its stat stage before this move was used. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
                shortDesc: "User heals HP=target's Atk stat.",
                id: "aquadrain",
                isViable: true,
                name: "Aquadrain",
                pp: 15,
                priority: 0,
                flags: {protect: 1, reflectable: 1, mirror: 1},
                onHit: function (target, source) {
                        let atk = target.getStat('atk', false, true);
                        this.heal(atk, source, target);
                },
                secondary: false,
                target: "normal",
                type: "Water",
                zMoveBoost: {def: 1},
                contestType: "Clever",
        },
        "richteruption": {
                accuracy: 95,
                basePower: 110,
                category: "Special",
                desc: "This move has a variable chance to burn; 5% chances for 0% and 60% burn chances, 10% chances for 10% and 50% burn chances, 20% chances for 20% and 40% burn chances, and 30% chance for 30% burn chance.",
                shortDesc: "Chance to burn varies from 0% to 60%.",
                id: "richteruption",
                isViable: true,
                name: "Richteruption",
                pp: 5,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                magnitude: 4, // just for insurance
                onModifyMove: function (move, pokemon) {
                        let i = this.random(100);
                        if (i < 5) {
                                move.magnitude = 4;
                        } else if (i < 15) {
                                move.magnitude = 5;
                        } else if (i < 35) {
                                move.magnitude = 6;
                        } else if (i < 65) {
                                move.magnitude = 7;
                        } else if (i < 85) {
                                move.magnitude = 8;
                        } else if (i < 95) {
                                move.magnitude = 9;
                        } else {
                                move.magnitude = 10;
                        }
                },
                onUseMoveMessage: function (pokemon, target, move) {
                        this.add('-activate', pokemon, 'move: Richteruption', move.magnitude);
                },
                secondary: {
                        chance: (4 - move.magnitude) * 10,
                        status: 'brn',
                },
                target: "normal",
                type: "Ground",
                zMovePower: 185,
                contestType: "Tough",
        },
        "viralcore": {
                accuracy: 100,
                basePower: 100,
                category: "Special",
                desc: "100% chance to suppress the target's Ability for the duration of the turn, hit neutral regardless of the target's typing, or trap the target.",
                shortDesc: "100% chance to suppress target's Ability, hit neutral, or trap target.",
                id: "viralcore",
                isViable: true,
                name: "Viral Core",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                onModifyMove: function (move, pokemon) {
                        let i = this.random(3);
                        switch (i) {
                        case 0:
                                move.onHit = function (target) {
                                        if (target.ability in {multitype:1, stancechange:1}) return;
                                        if (!this.willMove(target)) target.addVolatile('gastroacid');
                                };
                                move.onAfterSubDamage = function (target) {
                                        if (target.ability in {multitype:1, stancechange:1}) return;
                                        if (!this.willMove(target)) target.addVolatile('gastroacid');
                                };
                                break;
                        case 1:
                                move.onEffectiveness = function (typeMod, type) {
                                        if (typeMod !== 0) return 0;
                                };
                                move.ignoreImmunity = {Normal: true};
                                break;
                        case 2:
                                move.onHit = function (target, source, move) {
                                        if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
                                };
                                break;
                        }
                },
                target: "normal",
                type: "Normal",
                zMovePower: 140,
                contestType: "Tough",
        },
        "tremorpower": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
                shortDesc: "Varies in type based on the user's IVs.",
                id: "tremorpower",
                name: "Tremor Power",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                onModifyMove: function (move, pokemon) {
                        move.type = pokemon.hpType || 'Dark';
                },
                secondary: false,
                target: "allAdjacent",
                type: "Normal",
                zMovePower: 180,
                contestType: "Clever",
        },
        "tremorpowerbug": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                name: "Tremor Power Bug",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Bug",
                contestType: "Clever",
        },
        "tremorpowerdark": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                name: "Tremor Power Dark",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Dark",
                contestType: "Clever",
        },
        "tremorpowerdragon": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                name: "Tremor Power Dragon",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Dragon",
                contestType: "Clever",
        },
        "tremorpowerelectric": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                isViable: true,
                name: "Tremor Power Electric",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Electric",
                contestType: "Clever",
        },
        "tremorpowerfighting": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                isViable: true,
                name: "Tremor Power Fighting",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Fighting",
                contestType: "Clever",
        },
        "tremorpowerfire": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                isViable: true,
                name: "Tremor Power Fire",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Fire",
                contestType: "Clever",
        },
        "tremorpowerflying": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                isViable: true,
                name: "Tremor Power Flying",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Flying",
                contestType: "Clever",
        },
        "tremorpowerghost": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                name: "Tremor Power Ghost",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Ghost",
                contestType: "Clever",
        },
        "tremorpowergrass": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                isViable: true,
                name: "Tremor Power Grass",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Grass",
                contestType: "Clever",
        },
        "tremorpowerground": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                name: "Tremor Power Ground",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Ground",
                contestType: "Clever",
        },
        "tremorpowerice": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                isViable: true,
                name: "Tremor Power Ice",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Ice",
                contestType: "Clever",
        },
        "tremorpowerpoison": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                name: "Tremor Power Poison",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Poison",
                contestType: "Clever",
        },
        "tremorpowerpsychic": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                name: "Tremor Power Psychic",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Psychic",
                contestType: "Clever",
        },
        "tremorpowerrock": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                name: "Tremor Power Rock",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Rock",
                contestType: "Clever",
        },
        "tremorpowersteel": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                name: "Tremor Power Steel",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Steel",
                contestType: "Clever",
        },
        "tremorpowerwater": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "",
                shortDesc: "",
                id: "tremorpower",
                name: "Tremor Power Water",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Water",
                contestType: "Clever",
        },
        "flashfault": {
                accuracy: 100,
                basePower: 60,
                category: "Physical",
                desc: "No additional effect.",
                shortDesc: "Usually goes first.",
                id: "flashfault",
                isViable: true,
                name: "Flash Fault",
                pp: 10,
                priority: 1,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "normal",
                type: "Ground",
                zMovePower: 120,
                contestType: "Cool",
        },
        "squirmsequence": {
                accuracy: 90,
                basePower: 20,
                category: "Physical",
                desc: "Hits two to five times, with each hit having a 20% to lower the target's Special Attack by 1 stage. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
                shortDesc: "Hits 2-5 times. Each hit has 20% chance to lower the target's Sp. Atk by 1.",
                id: "squirmsequence",
                isViable: true,
                name: "Squirm Sequence",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                multihit: [2, 5],
                secondary: {
                        chance: 20,
                        boosts: {
                                spa: -1,
                        },
                },
                target: "normal",
                type: "Bug",
                zMovePower: 140,
                contestType: "Cute",
        },
        "duplexshock": {
                accuracy: 90,
                basePower: 40,
                category: "Physical",
                desc: "Hits twice, with each hit having a 70% chance to raise the user's Special Attack by 1 stage. If the first hit breaks the target's substitute, it will take damage for the second hit.",
                shortDesc: "Hits 2 times. Each hit has 70% chance to raise the user's Sp. Atk by 1.",
                id: "duplexshock",
                isViable: true,
                name: "Duplex Shock",
                pp: 20,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                multihit: [2, 2],
                secondary: {
                        chance: 70,
                        self: {
                                boosts: {
                                        spa: 1,
                                },
                        },
                },
                target: "normal",
                type: "Electric",
                zMovePower: 100,
                contestType: "Cool",
        },
        "teslahorns": {
                accuracy: 100,
                basePower: 80,
                category: "Physical",
                desc: "Has a 20% chance to paralyze the target and a 20% chance to flinch it.",
                shortDesc: "20% chance to paralyze. 20% chance to flinch.",
                id: "teslahorns",
                isViable: true,
                name: "Tesla Horns",
                pp: 15,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                secondaries: [
                        {
                                chance: 20,
                                status: 'par',
                        }, {
                                chance: 20,
                                volatileStatus: 'flinch',
                        },
                ],
                target: "normal",
                type: "Electric",
                zMovePower: 160,
                contestType: "Tough",
        },
        "arise": {
                accuracy: 100,
                basePower: 90,
                category: "Physical",
                desc: "Ignores the target's stat stage changes, including evasiveness. Temporarily causes the user to levitate on electromagnetism.",
                shortDesc: "Ignores the target's stat stage changes. Causes the user to levitate.",
                id: "arise",
                isViable: true,
                name: "Arise",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                onHit: function (target, source) {
                        source.addVolatile('magnetrise');
                },
                ignoreEvasion: true,
                ignoreDefensive: true,
                secondary: false,
                target: "normal",
                type: "Electric",
                zMovePower: 180,
                contestType: "Clever",
        },
        "earthshatter": {
                accuracy: 95,
                basePower: 90,
                category: "Physical",
                desc: "This move can hit airborne Pokemon, which includes Flying-type Pokemon, Pokemon with the Ability Levitate, Pokemon holding an Air Balloon, and Pokemon under the effect of Magnet Rise or Telekinesis. If the target is not grounded, this move deals neutral damage regardless of its other type(s). This move can hit a target using Bounce, Fly, or Sky Drop.",
                shortDesc: "Hits airborne targets for neutral damage.",
                id: "earthshatter",
                isViable: true,
                name: "Earth Shatter",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                onEffectiveness: function (typeMod, type, move) {
                        if (move.type !== 'Ground') return;
                        let target = this.activeTarget;
                        if (!target) return; // avoid crashing when called from a chat plugin
                        // ignore effectiveness if the target is immune to Ground
                        if (!target.runImmunity('Ground')) {
                                return 0;
                        }
                },
                ignoreImmunity: {'Ground': true},
                secondary: false,
                target: "normal",
                type: "Ground",
                zMovePower: 175,
                contestType: "Cool",
        },
        "darkchop": {
                accuracy: 90,
                basePower: 40,
                category: "Physical",
                desc: "Hits twice, with each hit having a 50% chance to cause the target to fall asleep. This move cannot be used successfully unless the user's current form, while considering Transform, is Darkchomp.",
                shortDesc: "Darkchomp: Hits 2 times. Each hit has a 50% chance to sleep target.",
                id: "darkchop",
                isViable: true,
                name: "Dark Chop",
                pp: 15,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                multihit: [2, 2],
                onTryMove: function (pokemon, target, move) {
                        if (pokemon.template.species === 'Darkchomp') {
                                return;
                        }
                        this.add('-fail', pokemon, 'move: Dark Chop');
                        this.add('-hint', "Only a Pokemon whose form is Darkchomp can use this move.");
                        return null;
                },
                secondary: {
                        chance: 50,
                        status: 'slp',
                },
                target: "normal",
                type: "Dark",
                zMovePower: 100,
                contestType: "Clever",
        },
        "cheapshot": {
                accuracy: true,
                basePower: 50,
                category: "Physical",
                desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. This move does not check accuracy.",
                shortDesc: "Hits 2 times in one turn. This move does not check accuracy.",
                id: "cheapshot",
                isViable: true,
                name: "Cheap Shot",
                pp: 20,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                multihit: 2,
                secondary: false,
                target: "normal",
                type: "Dark",
                zMovePower: 100,
                contestType: "Clever",
        },
        "meteorcrash": {
                accuracy: 100,
                basePower: 100,
                category: "Physical",
                desc: "Lowers the user's Attack by 2 stages. If the target is holding an item that can be removed from it, ignoring the Ability Sticky Hold, this move's power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot remove Z-Crystals, cause Pokemon with the Ability Sticky Hold to lose their held item, cause Pokemon that can Mega Evolve to lose the Mega Stone for their species, or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, or Memory respectively. Items lost to this move cannot be regained with Recycle or the Ability Harvest.",
                shortDesc: "Lowers the user's Atk by 2 stages. 1.5x damage if foe holds an item. Removes item.",
                id: "meteorcrash",
                isViable: true,
                name: "Meteor Crash",
                pp: 5,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                self: {
                        boosts: {
                                atk: -2,
                        },
                },
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
                                        this.add('-enditem', target, item.name, '[from] move: Meteor Crash', '[of] ' + source);
                                }
                        }
                },
                secondary: false,
                target: "normal",
                type: "Dragon",
                zMovePower: 180,
                contestType: "Clever",
        },
        "passivepenalty": {
                accuracy: 100,
                basePower: 100,
                basePowerCallback: function (pokemon, target, move) {
                        if (target.lastMove && this.getMove(target.lastMove).category === "Status") {
                                return move.basePower * 2;
                        }
                        return move.basePower;
                },
                category: "Physical",
                desc: "Power doubles on targets whose last used move was of the Status category.",
                shortDesc: "Power doubles on targets whose last used move was of the Status category.",
                id: "passivepenalty",
                isViable: true,
                name: "Passive Penalty",
                pp: 10,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                secondary: false,
                target: "allAdjacent",
                type: "Dark",
                zMovePower: 200,
                contestType: "Clever",
        },
        "acidreflux": {
                accuracy: 100,
                basePower: 90,
                category: "Special",
                desc: "Causes the target's Ability to be rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. Fails if the target's Ability is Multitype or Stance Change.",
                shortDesc: "Nullifies foe(s) Abilities.",
                id: "acidreflux",
                isViable: true,
                name: "Acid Reflux",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                onHit: function (target, source) {
                        let bannedAbilities = {comatose:1, multitype:1, schooling:1, stancechange:1};
                        if (!bannedAbilities[target.ability]) {
                                target.addVolatile('gastroacid');
                        }
                },
                secondary: false,
                target: "allAdjacent",
                type: "Poison",
                zMovePower: 175,
                contestType: "Tough",
        },
};
