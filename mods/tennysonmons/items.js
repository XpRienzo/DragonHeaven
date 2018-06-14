'use strict';

/**@type {{[k: string]: ItemData}} */
let BattleItems = {
	"omnitrix": {
		id: "omnitrix",
		name: "Omnitrix",
		onTakeItem: false,
    onStart: function(pokemon) {
			this.add('-item', pokemon, 'Omnitrix');
			if (pokemon.baseTemplate.baseSpecies === 'Heat Blast') {
				this.add('-formechange', pokemon, 'Heat Blast-Omni Enhanced', '[msg]');
				pokemon.formeChange("Heat Blast-Omni Enhanced");
			}
		},
    fling: {
			basePower: 20,
		},
		desc: "If held by an Alien with an Omni-forme, it allows the Alien to Omni enhance in battle.",
	},
  
 };

exports.BattleItems = BattleItems;
