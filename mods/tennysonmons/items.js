'use strict';

/**@type {{[k: string]: ItemData}} */
let BattleItems = {
	"omnitrix": {
		id: "omnitrix",
		name: "Omnitrix",
		onTakeItem: false,
      megaStone: ["Heat Blast-Omni Enhanced", "Upgrade-Omni Enhanced"],
		megaEvolves: ["Heat Blast", "Upgrade"],
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
