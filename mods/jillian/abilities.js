'use strict';

exports.BattleAbilities = {
	      "punchilate": {
		          desc: "This Pokemon's Normal-type moves become Fighting-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		          shortDesc: "This Pokemon's Normal-type moves become Fighting type and have 1.2x power.",
		          onModifyMovePriority: -1,
		          onModifyMove: function (move, pokemon) {
			                if (move.type === 'Normal' && move.id !== 'naturalgift' && !move.isZ) {
				                       move.type = 'Fighting';
				                       if (move.category !== 'Status') pokemon.addVolatile('punchilate');
					}
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function (basePower, pokemon, target, move) {
				return this.chainModify([0x1333, 0x1000]);
			},
		},
		id: "punchilate",
		name: "Punchilate",
		rating: 4,
    },
        "landinate": {
		          desc: "This Pokemon's Normal-type moves become Ground-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		          shortDesc: "This Pokemon's Normal-type moves become Ground type and have 1.2x power.",
		          onModifyMovePriority: -1,
		          onModifyMove: function (move, pokemon) {
			                if (move.type === 'Normal' && move.id !== 'naturalgift' && !move.isZ) {
				                       move.type = 'Ground';
				                       if (move.category !== 'Status') pokemon.addVolatile('punchilate');
				}
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function (basePower, pokemon, target, move) {
				return this.chainModify([0x1333, 0x1000]);
			},
		},
		id: "landinate",
		name: "Landinate",
		rating: 4,
    },
	        "dragonforce": {
		           shortDesc: "If this Pokemon is at full HP, its Dragon-type moves have their priority increased by 1.",
		           onModifyPriority: function (priority, pokemon, target, move) {
			         if (move && move.type === 'Dragon' && pokemon.hp === pokemon.maxhp) return priority + 1;
		},
		id: "dragonforce",
		name: "Dragon Force",
		rating: 3,
    },
		       "goddessaura": {
		            shortDesc: "This Pokemon's Special Attack is raised by 1 stage after it is damaged by a Dark-type move.",
		            onAfterDamage: function (damage, target, source, effect) {
			          if (effect && effect.type === 'Dark') {
				        this.boost({spatk:1});
			}
		},
		id: "goddessaura",
		name: "Goddess Aura",
		rating: 2,
		},
	          "gearforce": {
		             shortDesc: "This Pokemon's Steel and Electric-type attacks have their power multiplied by 1.5.",
		             onBasePowerPriority: 8,
		             onBasePower: function (basePower, attacker, defender, move) {
			                 if (move.type === 'Steel','Electric') {
				               this.debug('Gear Force boost');
				               return this.chainModify(1.5);
			}
		},
		id: "gearforce",
		name: "Gear Force",
		rating: 4.5,
    },
		   "coldblood": {
		              desc: "The power of Bug, Dark and Ghost-type attacks against this Pokemon is halved",
		              shortDesc: "The power of Bug, Dark and Ghost-type attacks against this Pokemon is halved",
		              onBasePowerPriority: 7,
		              onSourceBasePower: function (basePower, attacker, defender, move) {
			                   if (move.type === 'Bug','Ghost','Dark') {
				                 return this.chainModify(0.5);
			}
		},
		id: "coldblood",
		name: "Cold Blood",
		rating: 2.5,
		},
	            "crushcoral": {
		              shortDesc: "This Pokemon's Special Attack is doubled.",
		              onModifySpAPriority: 5,
		              onModifySpA: function (SpA) {
			            return this.chainModify(2);
		},
		id: "crushcoral",
		name: "Crush Coral",
		rating: 5,
		},
                "medicine": {
                     shortDesc: "On switch-in, this pokemon cures itself and its teammates of status",
                     onStart: function (pokemon)
                              this.useMove("Heal Bell", pokemon);
                }
            }
        },
        id: "medicine",
        name: "Medicine",
        rating: 5,
    },
         "predator": {
                     shortDesc: "This Pokemon's super effective attacks against the target have x1.3 power",
                    },
		                onModifyDamage: function (damage, source, target, move) {
			              if (move && move.typeMod > 0) {
				            return this.chainModify([0x14CD, 0x1000]);
				      }
      },
      id: "predator",
      name: "Predator",
      rating: 3,
    },
	"gatesofhell": {
		       shortDesc: "On switch-in, this pokemon uses Curse and takes halved damage from Fairy type moves",
	              },
		          onStart: function (pokemon) {
			           this.useMove("Curse", pokemon);
	     }
		  onBasePowerPriority: 7,
		  onSourceBasePower: function (basePower, attacker, defender, move) {
			                   if (move.type === 'Fairy') {
				                 return this.chainModify(0.5);
					   }
      },
      id: "gatesofhell",
      name: "Gates of Hell",
      rating: 3.5,
     },
	 "gatesofheaven": {
		       shortDesc: "On switch-in, this pokemon heals back 1/3 of its max HP and takes halved damage from Dark type moves",
	              },
			 onStart: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 3);
	      }
                  onBasePowerPriority: 7,
		  onSourceBasePower: function (basePower, attacker, defender, move) {
			                   if (move.type === 'Dark') {
				                 return this.chainModify(0.5);
					   }
     },
     id: "gatesofheaven",
     name: "Gates of Heaven",
     rating: 3.5,
     },
	 "leadership": {
		     shortDesc: "This Pokemon's attacks get a x1.3 power boost if it moves first in the turn"
	             },
			     onBasePowerPriority: 8,
		             onBasePower: function (basePower, attacker, defender, move) {
			            if (!this.willMove(attacker)) {
				       this.debug('Leadership boost');
				       return this.chainModify([0x14CD, 0x1000]);
			}
      },
      id: "leadership",
      name: "Leadership",
      rating: 2,
      },
         "fiendishshield": {
		            shortDesc: "This pokemon bounces back status moves to the user. Damage taken from sup.eff moves are reduced by 30%",
	                    },
                          onTryHitPriority: 1,
		          onTryHit: function (target, source, move) {
			       if (target === source || move.hasBounced || !move.flags['reflectable']) {
				      return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide: function (target, source, move) {
			if (target.side === source.side || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, this.effectData.target, source);
			return null;
		},
		effect: {
			duration: 1,
		     }
		},			
	onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Fiendish Shield neutralize');
				return this.chainModify(0.70);
			}
		},
                id: "fiendishshield",
	        name: "Fiendish Shield",
	        rating: 3.5,
	 },
	"heavenlyshield": {
	             shortDesc: "Heals the user by 1/6 of its max HP per turn, reduces damage from sup.eff attacks by 30%"
	              },
				onResidualOrder: 5,
		                onResidualSubOrder: 2,
		                onResidual: function (pokemon) {
			                 this.heal(pokemon.maxhp / 6);
		     }
		},			
	onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Heavenly Shield neutralize');
				return this.chainModify(0.70);
			}
		},
	        id: "heavenlyshield",
	        name: "Heavenly Shield",
	        rating: 3.5,
        },
	"finalflicker": {
		    shortDesc: "If the pokemon is Koed by a move, it uses Burn Up upon fainting",
	             },
		               onAfterDamageOrder: 1,
		               onAfterDamage: function (damage, target, source, move) {
			              if (source && source !== target && move && move.effectType === 'Move' && !target.hp) {
		                      this.useMove("Burn Up", target);
			  }
		 },
		 id: "finalflicker",
		 name: "Final Flicker",
		 rating: 4,
	},
        "magnetism": {
		 shortDesc: "On switch-in, this pokemon uses Magnet Rise, and its Electric type moves deals double damage to the foe",
		             },
		          onStart: function (pokemon) {
			           this.useMove("Magnet Rise", pokemon);
			  }
                    },
			onBasePower: function (damage, source, target, move) {
		             if (move.type === 'Electric') {
		                this.debug('Magnetism boost');
				return this.chainModify(2);
	            }
	},
	id: "magnetism",
	name: "Magnetism",
	rating: 5,		
};                
