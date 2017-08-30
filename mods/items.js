'use strict';

exports.BattleItems = {
        "roomextender": {
		            id: "roomextender",
		            name: "Room Extender",
		            fling: {
		           	        basePower: 60,
		            },
            		desc: "Holder's use of Electric/Grassy/Misty/Psychic Terrain lasts 8 turns instead of 5.",
       	},
        "assaultvest": {
	             	id: "assaultvest",
		            name: "Assault Vest",
            		spritenum: 581,
	            	fling: {
                   			basePower: 80,
            		},
            		onModifySpDPriority: 1,
            		onModifySpD: function (def) {
                  			return this.chainModify(1.5);
             		},
            		onDisableMove: function (pokemon) {
                   			let moves = pokemon.moveset;
                   			for (let i = 0; i < moves.length; i++) {
                        				if (this.getMove(moves[i].move).category === 'Status') {
	                              				pokemon.disableMove(moves[i].id);
	                        			}
                   			}
            		},
             		desc: "Holder's Def is 1.5x, but it can only select damaging moves.",
       	},
};
