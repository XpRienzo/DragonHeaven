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
                      "drainingminds": {
		               accuracy: 100,
		               basePower: 80,
		               category: "Special",
		               desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		               shortDesc: "User recovers 50% of the damage dealt.",
		               id: "drainingminds",
		               name: "Draining Minds",
		               pp: 15,
		               priority: 0,
		               flags: {protect: 1, mirror: 1, heal: 1},
		               drain: [1, 2],
		               secondary: false,
		               target: "normal",
		               type: "Psychic",
		               zMovePower: 160,
		               contestType: "Clever",
                        },
                        "frostofaurora": {
		                accuracy: 90,
		                basePower: 100,
		                category: "Special",
		                desc: "This move's type effectiveness against Grass is changed to be super effective no matter what this move's type is.",
		                shortDesc: "This move deals super effective damage on Grass",
		                id: "frostofaurora",
		                isViable: true,
		                name: "Frost of Aurora",
		                pp: 10,
		                priority: 0,
		                flags: {protect: 1, mirror: 1},
                                secondary: false,
		                        onEffectiveness: function (typeMod, type) {
			                      if (type === 'Grass') return 1;
		                      },
		                target: "normal",
		                type: "Water",
		                zMovePower: 180,
		                contestType: "Beautiful",
                    },
	            "magneticbeam": {
		                accuracy: true,
		                basePower: 0,
		                category: "Status",
		                desc: "Prevents the target from switching for four or five turns; seven turns if the user is holding Grip Claw. Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute. This effect is not stackable or reset by using this or another partial-trapping move.",
		                shortDesc: "Traps and damages the target for 4-5 turns.",
		                id: "magneticbeam",
		                name: "Magnetic Beam",
		                pp: 15,
		                priority: 0,
		                flags: {protect: 1, mirror: 1},
                    		secondary: false,
		                volatileStatus: 'partiallytrapped',
		                target: "normal",
		                type: "Electric",
		                zMoveBoost: {spe: 2},
		                contestType: "Beautiful",
                    },
                    "fullpowered": {
		                accuracy: true,
		                basePower: 0,
		                category: "Status",
		                desc: "Raises the user's Attack, Defense, and Speed by 2 stages. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		                shortDesc: "Charges, then raises Atk, Def, Spe by 2 turn 2.",
		                id: "fullpowered",
		                isViable: true,
		                name: "Full Powered",
		                pp: 5,
		                priority: 0,
		                flags: {charge: 1, nonsky: 1},
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
			                    def: 2,
			                    spe: 2,
		                },
		                secondary: false,
		                target: "self",
		                type: "Steel",
		                zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		                contestType: "Clever",
                    },
	            "icyteardrop": {
		                accuracy: 100,
		                basePower: 60,
		                category: "Special",
		                desc: "Has a 30% chance to lower the target's accuracy by 2 stages.",
		                shortDesc: "30% chance to lower the target's accuracy by 2.",
		                id: "icyteardrop",
		                name: "Icy Teardrop",
		                pp: 15,
		                priority: 0,
		                flags: {protect: 1, mirror: 1},
		                secondary: {
			                      chance: 30,
			                      boosts: {
				                    accuracy: -2,
			                    }
		                },
		                target: "normal",
		                type: "Ice",
		                zMovePower: 120,
		                contestType: "Cute",
                   	},
	                "shieldoftheforest": {
		                accuracy: true,
		                basePower: 0,
		                category: "Status",
		                desc: "Raises Defense and Special Defense of the user by 2 stages each, lowers Attack, Special Attack and Speed of the user by 1 stage each",
		                shortDesc: "Raises Def and SpD by 2, lowers Atk, SpA and Spe by 1.",
		                id: "shieldoftheforest",
		                isViable: true,
		                name: "Shield of the Forest",
		                pp: 15,
		                priority: 0,
		                flags: {snatch: 1},
		                boosts: {
			                   def: 2,
			                   spd: 2,
			                   atk: -1,
			                   spa: -1,
			                   spe: -1,
		                },
		                secondary: false,
		                target: "self",
		                type: "Grass",
		                zMoveEffect: 'clearnegativeboost',
		                contestType: "Tough",
	                  },
	                  "marabunta": {
		                accuracy: true,
		                basePower: 0,
		                category: "Status",
		                desc: "Sets up a hazard on the foe's side of the field, damaging the foe according to their weakness to Bug and lowering the evasion by 1 stage of each foe that switches in, unless it is a Flying-type Pokemon or has the Ability Levitate. Can be used only once before failing. Can be removed from the foe's side if any foe uses Rapid Spin or Defog, or is hit by Defog.",
		                shortDesc: "Lowers evasion of grounded foes by 1 on switch-in, damages grounded foes, factoring Bug weakness.",
		                id: "marabunta",
		                isViable: true,
		                name: "Marabunta",
		                pp: 20,
		                priority: 0,
		                flags: {reflectable: 1},
		                sideCondition: 'marabunta',
		                   effect: {
			                   onStart: function (side) {
				                 this.add('-sidestart', side, 'move: Marabunta');
			              },
			                     onSwitchIn: function (pokemon) {
				                   if (!pokemon.isGrounded()) return;
				                   this.add('-activate', pokemon, 'move: Marabunta');
                           let typeMod = this.clampIntRange(pokemon.runEffectiveness('Bug'), -6, 6);
				                   this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
				                   this.boost({evasion: -1}, pokemon, pokemon.side.foe.active[0], this.getMove('marabunta'));
                                },
		                secondary: false,
		                target: "foeSide",
		                type: "Bug",
		                zMoveBoost: {evasion: 1},
		                contestType: "Tough",
                     },
	             "naturetricks": {
		                accuracy: 100,
		                basePower: 80,
		                category: "Physical",
		                desc: "Has a 20% chance to flinch the target.",
		                shortDesc: "20% chance to flinch the target.",
		                id: "naturetricks",
		                name: "Nature Tricks",
		                pp: 15,
		                priority: 0,
		                flags: {contact: 1, protect: 1, mirror: 1},
		                secondary: {
			                        chance: 20,
			                        volatileStatus: 'flinch',
                                        }
		                },
		                target: "normal",
		                type: "Grass",
		                zMovePower: 160,
		                contestType: "Clever",
                      },
                      "propulsorbeam": {
		                accuracy: 85,
		                basePower: 110,
		                category: "Special",
		                desc: "Has a 30% chance to burn the target.",
		                shortDesc: "30% chance to burn the target.",
		                id: "propulsorbeam",
		                isViable: true,
		                name: "Propulsor Beam",
		                pp: 10,
		                priority: 0,
		                flags: {protect: 1, mirror: 1},
		                secondary: {
			                       chance: 30,
			                       status: 'brn',
		                },
		                target: "normal",
		                type: "Fire",
		                zMovePower: 185,
		                contestType: "Beautiful",
	             },
	             "magicalwater": {
		                accuracy: true,
		                basePower: 0,
		                category: "Status",
		                desc: "The user restores 1/2 of its maximum HP, rounded half down. If the weather is Rain, the user instead restores 2/3 of its maximum HP, rounded half down.",
		                shortDesc: "User restores 1/2 its max HP; 2/3 in Rain.",
		                id: "magicalwater",
		                isViable: true,
		                name: "Magical Water",
		                pp: 10,
		                priority: 0,
		                flags: {snatch: 1, heal: 1},
		                onHit: function (pokemon) {
			                         if (this.isWeather(['raindance', 'primordialsea'])) {
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
                  "electriccloud": {
                                accuracy: 95,
                                basePower: 65,
                                category: "Special",
                                desc: "This move has 30% chance to paralyze the foe, under Rain Dance, the power is doubled",
                                shortDesc: "30% chance to paralyze the foe. In Rain, x2 power",
                                id: "electriccloud",
                                isViable: true,
                                name: "Electric Cloud",
                                pp: 15,
                                priority: 0,
                                flags: {protect: 1, mirror: 1},
                                onModifyMove: function (move) {
			                     if (this.isWeather(['raindance', 'primordialsea'])) {
				                         return move.basePower * 2;
                     		    }
		                  },
		                secondary: {
			                  chance: 30,
			                  status: 'par',
                             
		                  },
		                  target: "normal",
		                  type: "Electric",
		                  zMovePower: 140,
		                  contestType: "Cool",
	             },
                     "dynamitekick": {
		                   accuracy: 90,
		                   basePower: 100,
		                   category: "Physical",
		                   desc: "Has a 10% chance to paralyze the target. If the user misses, it loses 1/3 of its health",
		                   shortDesc: "10% chance to paralyze the target. If miss, 1/3 damage to itself",
		                   id: "dynamitekick",
                                   isViable: true,
		                   name: "Dynamite Kick",
		                   pp: 20,
		                   priority: 0,
		                   flags: {contact: 1, protect: 1, mirror: 1},
                                   hasCustomRecoil: true,
		                                  onMoveFail: function (target, source, move) {
			                          this.damage(source.maxhp / 3, source, source, 'dynamitekick');
						  },
		                   secondary: {
			                   chance: 10,
			                   status: 'par',
		                   },
		                   target: "normal",
		                   type: "Fighting",
		                   zMovePower: 190,
		                   contestType: "Cool",
                        },
                        "megatonpunch": {
                                   accuracy: 85,
                                   basePower: 130,
                                   category: "Physical",
                                   desc: "Has a 30% chance of paralyzing the foe",
                                   shortDesc: "30% chance paralyze the target",
                                   id: "megatonpunch",
                                   isViable: true,
                                   name: "Megaton Punch",
                                   flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
                                   pp: 10,
                                   priority: 0,
                                   secondary: {
                                        chance: 30,
                                        status: 'par',
                                   },
                                   target: "normal",
                                   type: "Fighting",
                                   zMovePower: 210,
                                   contestType: "Tough",
                       },
                       "bombattack": {
                                   accuracy: 55,
                                   basePower: 150,
                                   category: "Physical",
                                   desc: "Have a 40% chance of confusing the target",
                                   shortDesc: "40% chance of confusing the target",
                                   id: "bombattack",
                                   isViable: true,
                                   name: "Bomb Attack",
                                   pp: 5,
                                   priority: 0,
                                   flags: {bullet: 1, contact: 1, protect: 1, mirror: 1},
                                   secondary: {
                                        chance: 40,
                                         volatileStatus: 'confusion',
                                   },
                                   target: "normal",
                                   type: "Fighting",
                                   zMovePower: 220,
                                   contestType: "Tough",
                        },
                        "poisonscent": {
                                   accuracy: true,
                                   basePower: 0,
                                   category: "Status",
                                   desc: "This move spreads a poisoned air onto the battlefield for 5 turns, Pokemon in battle take damage factoring Poison weakness each turn",
                                   shortDesc: "Pokemon in battle take damage each turn, factoring Poison weakness",
                                   id: "poisonscent",
                                   isViable: true,
                                   name: "Poison Scent",
                                   pp: 10,
                                   priority: 0,
                                   flags: {},                       
                                   weather: 'poisonedscent',
		                   secondary: false,
		                   target: "all",
		                   type: "Poison",
		                   zMoveBoost: {spe: 1},
		                   contestType: "Clever",
                        },
                        "iciclestatue": {
                                   accuracy: 95,
                                   basePower: 130,
                                   category: "Special",
                                   desc: "This move drops the user's Special Attack by 2 stages after use. 40% chance of freezing the foe",
                                   shortDesc: "Drops the user's SpA by 2. 40% chance to freeze.",
                                   id: "iciclestatue",
                                   isViable: true,
                                   name: "Icicle Statue",
                                   pp: 5,
                                   priority: 0,
                                   flags: {protect: 1, mirror: 1},
                                   self: {
			                 boosts: {
				              spa: -2,
			                        },
		                   },
                                   secondary: {
                                         chance: 40,
                                         status: 'frz',
                         			 
		                  },     
                                  target: "normal",
                                  type: "Ice",
                                  zMovePower: 200,
                                  contestType: "Beautiful",
                         },
                         "iceberg": {
		                  accuracy: 100,
		                  basePower: 65,
		                  category: "Special",
		                  desc: "Has a 10% chance to lower the target's Speed by 2 stages.",
		                  shortDesc: "10% chance to lower the foe(s) Speed by 2.",
		                  id: "iceberg",
                                  isViable: true,
		                  name: "iceberg",
		                  pp: 20,
		                  priority: 0,
		                  flags: {protect: 1, mirror: 1},
		                  secondary: {
			                   chance: 10,
			                     boosts: {
				                        spe: -2,
			                         },
		                   },
		                   target: "normal",
		                   type: "Water",
		                   zMovePower: 130,
		                   contestType: "Cute",
                           },
                          "trickydimension": {
                                   accuracy: 60,
                                   basePower: 140,
                                   category: "Special",
                                   desc: "The Pokemon hits extremely hard so that it twists the dimensions. Setup Trick Room after damaging the target",
                                   shortDesc: "Hits extremely hard. Setup Trick Room.",
                                   id: "trickydimension",
                                   isViable: true,
                                   name: "Tricky Dimension",
                                   pp: 5,
                                   priority: 0,
                                   flags: {contact: 1, protect: 1, mirror: 1},
                                            onHit: function (source, effect) {
			                          this.addPseudoWeather('trickroom', source, effect, '[of] ' + source);
				     
                                   },
                                   secondary: false,
                                   target: "normal",
                                   type: "Psychic",
                                   zMovePower: 210,
                                   contestType: "Clever",
                           },
                           "metalcutters": {
                                   accuracy: 100,
                                   basePower: 80,
                                   category: "Physical",
                                   desc: "Has a higher chance for a critical hit",
                                   shortDesc: "High critical hit ratio",
                                   id: "metalcutters",
                                   isViable: true,
                                   name: "Metal Cutters",
                                   pp: 15,
                                   priority: 0,
                                   flags: {protect: 1, mirror: 1},
                                   critRatio: 2,
                                   secondary: false,
                                   target: "AllAdjacentFoes",
                                   type: "Steel",
                                   zMovePower: 160,
                                   contestType: "Cool",
                           },
                           "magmabomb": {
                                   accuracy: 100,
                                   basePower: 80,
                                   category: "Special",
                                   desc: "This move deals also Rock type damage in combination of Fire type damage. 20% chance to burn the foe",
                                   shortDesc: "Combined Rock type in effectiveness. 20% chance to burn",
                                   id: "magmabomb",
                                   isViable: true,
                                   name: "Magma Bomb",
                                   pp: 10,
                                   priority: 0,
                                   flags: {bullet: 1, protect: 1, mirror: 1},
                                            onEffectiveness: function (typeMod, type, move) {
			                             return typeMod + this.getEffectiveness('Rock', type);
		                   },
                                   secondary:{
                                        chance: 20,
                                        status: 'brn',
                             
                                   },
                                   target: "normal",
                                   type: "Fire",
                                   zMovePower: 160,
                                   contestType: "Tough",
                            },
                            "metalliccrush": {
                                   accuracy: 75,
                                   basePower: 150,
                                   category: "Physical",
                                   desc: "This move cause half of the damage dealt into recoil, this recoil is negated if the user has the ability Rock Head",
                                   shortDesc: "Deals 1/2 of damage dealt in recoil",
                                   id: "metalliccrush",
                                   isViable: true,
                                   name: "Metallic Crush",
                                   pp: 5,
                                   priority: 0,
                                   flags: {contact: 1, protect: 1, mirror: 1},
                                   recoil: [1, 2],
		                   secondary: false,
		                   target: "normal",
		                   type: "Steel",
		                   zMovePower: 200,
		                   contestType: "Tough",
	                   },
                           "autumnseason": {
                                   accuracy: true,
                                   basePower: 0,
                                   category: "Status",
                                   desc: "This move heals the user by 50% of its max HP, rounded half down",
                                   shortDesc: "Heals 50% of max HP",
                                   id: "autumnseason",
                                   isViable: true,
                                   name: "Autumn Season",
                                   flags: {snatch: 1, heal: 1},
                                   pp: 10,
                                   priority: 0,
                                   heal: [1, 2],
                                   secondary: false,
		                   target: "self",
		                   type: "Grass",
		                   zMoveEffect: 'clearnegativeboost',
		                   contestType: "Clever",
	                   },
                           "bellbang": {
                                   accuracy: 100,
                                   basePower: 110,
                                   category: "Special",
                                   shortDesc: "No additional effect, hits adjacent foes",
                                   id: "bellbang",
                                   isViable: true,
                                   name: "Bell Bang",
                                   flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
                                   pp: 15,
                                   priority: 0,
                                   secondary: false,
                                   target: "AllAdjacentFoes",
                                   type: "Steel",
                                   zMovePower: 190,
                                   contestType: "Clever",
                            },
                           "prayerofheaven": {
		                   accuracy: true,
		                   basePower: 0,
		                   category: "Status",
		                   desc: "Raises the user's Special Attack and Speed by 12 stages in exchange for the user losing 1/2 of its maximum HP, rounded down. Fails if the user would faint or if its Special Attack or Speed stat stage is 6.",
		                   shortDesc: "User loses 50% max HP. Maximizes Special Attack and Speed.",
		                   id: "prayerofheaven",
		                   name: "Prayer of Heaven",
		                   pp: 10,
		                   priority: 0,
		                   flags: {snatch: 1},
		                    onHit: function (target) {
			                                 if (target.hp <= target.maxhp / 2 || target.boosts.spatk >= 6 || target.boosts.spe >= 6 || target.maxhp === 1) { // Shedinja clause
				                                  return false;
			                           }
			                      this.directDamage(target.maxhp / 2);
			                      this.boost({spatk: 12, spe: 12}, target);
		                   },
		                   secondary: false,
		                   target: "self",
		                   type: "Fairy",
		                   zMoveEffect: 'heal',
		                   contestType: "Cute",
	                   },
                           "congelation": {
		                   accuracy: 100,
		                   basePower: 80,
		                   category: "Physical",
		                   desc: "Has a 30% chance to freeze the target.",
		                   shortDesc: "30% chance to freeze the target.",
		                   id: "congelation",
		                   isViable: true,
		                   name: "Congelation",
		                   pp: 15,
		                   priority: 0,
		                   flags: {contact: 1, protect: 1, mirror: 1},
		                   secondary: {
			                 chance: 30,
			                 status: 'frz',
		                   },
		                   target: "normal",
		                   type: "Ice",
		                   zMovePower: 160,
		                   contestType: "Beautiful",
	                    },
                            "timeout": {
		                   accuracy: true,
		                   basePower: 0,
		                   category: "Status",
		                   desc: "The user restores 1/2 of its maximum HP, rounded half up, priority -1",
		                   shortDesc: "Heals the user by 50% of its max HP, priority -1",
		                   id: "timeout",
		                   isViable: true,
		                   name: "Time Out",
		                   pp: 10,
		                   priority: -1,
		                   flags: {snatch: 1, heal: 1},
		                   heal: [1, 2],
		                   secondary: false,
		                   target: "self",
		                   type: "Fighting",
		                   zMoveEffect: 'clearnegativeboost',
		                   contestType: "Clever",
                           },
                           "cursedsentence": {
		                   accuracy: 100,
		                   basePower: 85,
		                   category: "Special",
		                   desc: "Power doubles if the target is Cursed.",
		                   shortDesc: "Power doubles if the target is Cursed.",
		                   id: "cursed sentence",
                                   isViable: true,
		                   name: "Cursed Sentence",
		                   pp: 10,
		                   priority: 0,
		                   flags: {protect: 1, mirror: 1},
		                        onBasePowerPriority: 4,
		                        onBasePower: function (basePower, pokemon, target) {
			                      if (target.volatileStatus === 'curse') {
				                            return this.chainModify(2);
			                        }
		                   },
		                   secondary: false,
		                   target: "normal",
		                   type: "Ghost",
		                   zMovePower: 160,
		                   contestType: "Cool",
                           },
                           "goddesssong": {
		                   accuracy: 100,
		                   basePower: 75,
		                   category: "Special",
		                   desc: "Has a 10% chance to cause the target to fall asleep.",
		                   shortDesc: "10% chance to sleep foe(s).",
		                   id: "goddesssong",
		                   isViable: true,
		                   name: "Goddess Song",
		                   pp: 10,
		                   priority: 0,
		                   flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		                   secondary: {
			                 chance: 10,
			                 status: 'slp',
		                   target: "allAdjacentFoes",
		                   type: "Normal",
		                   zMovePower: 140,
		                   contestType: "Beautiful",
	                  },
                 	  "skywarth": {
		                   accuracy: 70,
		                   basePower: 110,
		                   category: "Special",
		                   desc: "Has a 20% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop. If the weather is Rain Dance, this move does not check accuracy. If the weather is Sunny Day, this move's accuracy is 50%, lands Rain on hit",
		                   shortDesc: "20% chance to confuse target. Can't miss in rain, setup Rain on hitting",
		                   id: "skywarth",
		                   isViable: true,
		                   name: "Sky Warth",
		                   pp: 10,
		                   priority: 0,
		                   flags: {protect: 1, mirror: 1, distance: 1},
                                      onHit: function (target) {
                                         this.setWeather('raindance');
                                         }
                                   },
		                   onModifyMove: function (move) {
			                 if (this.isWeather(['raindance', 'primordialsea'])) {
				                     move.accuracy = true;
			                       } else if (this.isWeather(['sunnyday', 'desolateland'])) {
				                         move.accuracy = 50;
			                     }
		                   },
                                   secondary: {
			                chance: 30,
			                volatileStatus: 'confusion',
		                   },
		                   target: "any",
		                   type: "Flying",
		                   zMovePower: 185,
		                   contestType: "Tough",
                         },
	                 "megabeam": {
		                   accuracy: 85,
		                   basePower: 110,
		                   category: "Special",
		                   desc: "Has a 20% chance to lower the target's Special Defense by 2 stages. It also hits Electric types for double damage",
		                   shortDesc: "20% chance to lower the target's Sp. Def by 2. x2 damage on Electric",
		                   id: "megabeam",
		                   isViable: true,
		                   name: "Mega Beam",
		                   pp: 10,
		                   priority: 0,
		                   flags: {protect: 1, mirror: 1},
                                        onModifyDamage: function (damage, source, target, move) {
                                          if (target.hasType('Electric'));
					      this.debug('Mega Beam boost');
				              return this.chainModify(2);
				          },
				     },
		                   secondary: {
			                 chance: 20,
			                 boosts: {
				         spd: -2,
			              },
		                    },
		                    target: "normal",
		                    type: "Steel",
		                    zMovePower: 190,
		                    contestType: "Beautiful",
                            },
};
