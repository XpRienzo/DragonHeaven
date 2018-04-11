'use strict';

exports.BattleAbilities = {
"fluid": {
		shortDesc: "This Pokemon's Normal-type moves become Water type and Water-type moves cannot miss and ignore all protection",
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Water';
				move.refrigerateBoosted = true;
			}
		},
    onModifyAccuracy: function (accuracy, move) {
			if (typeof accuracy !== 'number') return;
		  if (move.type === 'Water') {
      return accuracy = true
      }
		},
		id: "fluid",
		name: "Fluid",
		rating: 4,
		num: 174,
	},
};
