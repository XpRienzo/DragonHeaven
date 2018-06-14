'use strict';

/**@type {{[k: string]: ItemData}} */
let BattleItems = {
	"omnitrix": {
		id: "omnitrix",
		name: "Omnitrix",
		onTakeItem: false,
      /*megaStone: function(pokemon) {
			if (pokemon.baseTemplate.baseSpecies === 'Heat Blast') {
				return "Heat Blast-Omni Enhanced";
			}
		},
		megaEvolves: function(pokemon) {
			if (pokemon.baseTemplate.baseSpecies === 'Heat Blast') {
				return "Heat Blast";
			}
		},*/
		megaStone: "Heat Blast-Omni Enhanced",
		megaEvolves: "Heat Blast",
		/*onStart: function(pokemon) {
			this.add('-item', pokemon, 'Omnitrix');
			if (pokemon.baseTemplate.baseSpecies === 'Heat Blast') {
				this.add('-formechange', pokemon, 'Heat Blast-Omni Enhanced', '[msg]');
				pokemon.formeChange("Heat Blast-Omni Enhanced");
				pokemon.setAbility('speedboost');
			}
			else if (pokemon.baseTemplate.baseSpecies === 'Upgrade') {
				this.add('-formechange', pokemon, 'Upgrade-Omni Enhanced', '[msg]');
				pokemon.formeChange("Upgrade-Omni Enhanced");
				pokemon.setAbility('intimidate');
			}
		},*/
    fling: {
			basePower: 20,
		},
		desc: "If held by an Alien with an Omni-forme, it allows the Alien to Omni enhance in battle.",
	},
  
 };

exports.BattleItems = BattleItems;
