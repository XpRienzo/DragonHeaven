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
		              onModifyAtkPriority: 5,
		              onModifyAtk: function (spatk) {
			            return this.chainModify(2);
		},
		id: "crushcoral",
		name: "Crush Coral",
		rating: 5,
		},
                "medicine": {
                     shortDesc: "On switch-in, this pokemon cures itself and its teammates of status",
                     onStart: function (pokemon) {
                    let foeactive = pokemon.side.foe.active;
                    let activated = false;
                    for (let i = 0; i < foeactive.length; i++) {
                       if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
                       if (!activated) {
                           this.add('-ability', pokemon, 'Medicine', 'boost');
                           activated = true;
                           this.useMove(215, pokemon);
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
      },
      id: "predator"
      name: "Predator"
      rating: 3
};  
