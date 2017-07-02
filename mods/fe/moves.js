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
                id: "whaleslap",
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
                id: "blazeofglory",
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
        "mindmelt": {
                accuracy: 85,
                basePower: 110,
                category: "Special",
                desc: "Has a 10% chance to burn the target. This move can hit Dark-types. Ignores the target's evasiveness.",
                shortDesc: "10% chance to burn the target. Neutral on Dark. Evasiveness ignored.",
                id: "mindmelt",
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
                name: "Scalding Vortex",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                volatileStatus: 'scaldingvortex',
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
                name: "Buggin'",
                pp: 15,
                priority: 0,
                flags: {protect: 1, mirror: 1},
                multihit: 2,
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
                name: "Shredding Scythe",
                pp: 20,
                priority: 0,
                flags: {contact: 1, protect: 1, mirror: 1},
                onHit: function (target, source) {
                        let hasContrary = source.hasAbility('contrary');
                        if ((hasContrary || source.boosts.spe !== 6) && (!hasContrary || pokemon.boosts.spe !== -6)) {
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
                        this.add('-start', source, 'Solar Flare');
                        return null;
                },
                secondary: {
                        chance: 100,
                        onHit: function (target, source, move) {
                                if (source.isActive) target.addVolatile('solartrap', source, move, 'trapper');
                        },
                },
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
};
