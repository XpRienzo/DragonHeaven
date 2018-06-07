'use strict';

const CHOOSABLE_TARGETS = new Set(['normal', 'any', 'adjacentAlly', 'adjacentAllyOrSelf', 'adjacentFoe']);*/

/**@type {BattleScriptsData} */
let BattleScripts = {
	
	canUltraBurst: function (pokemon) {
	if (pokemon.getItem().id === 'ultranecroziumz'){
			if (['Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane'].includes(pokemon.baseTemplate.species)) {
				return "Necrozma-Ultra";
			} else if (pokemon.baseTemplate.species === 'Necrynx') {
				return "Necrynx-Ultra";
			} else if (pokemon.baseTemplate.species === 'Necroqua') {
				return "Necroqua-Ultra";
			} else if (pokemon.baseTemplate.species === 'Necrozerain') {
				return "Necrozerain-Ultra";
			} else if (pokemon.baseTemplate.species === 'Lampara') {
				return "Lampara-De-Lava";
			} else if (pokemon.baseTemplate.species === 'Smotilizer') {
				return "Smotilizer-Ultra";
			} else if (pokemon.baseTemplate.species === 'Necropur') {
				return "Necropur-Beautiful";
			} else if (pokemon.baseTemplate.species === 'Chazma') {
				return "Chazma-Hatched";
			} else if (pokemon.baseTemplate.species === 'Necrotune') {
				return "Necrotune-Ultra";
			} else if (pokemon.baseTemplate.species === 'Nut') {
				return "Ultra Burst Nut";
			}
		}
		return null;
	},
};
exports.BattleScripts = BattleScripts;
