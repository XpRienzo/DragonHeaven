'use strict';

exports.BattleAbilities = {
"fluid": {
		shortDesc: "This Pokemon's Normal-type moves become Water type and Water-type moves cannot miss and ignore all protection",
		onModifyMovePriority: 8,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Water';
			}
			if (move.type === 'Water') { // Add protection break
				delete move.flags['protect'];
				move.breaksProtect = true;
				move.accuracy = true; 
			}
		},
		id: "fluid",
		name: "Fluid",
	},
};
