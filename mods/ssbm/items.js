'use strict';

exports.BattleItems = {
	"keyboard": {
		id: "keyboard",
		name: "Keyboard",
		megaStone: "Missingno.",
		megaEvolves: "Unown",
		onTakeItem: function () {
			return false;
		},
		gen: 6,
		desc: "If holder is an Unown, this item allows it to Mega Evolve in battle?",
	},
	"hustleorb": {
		id: "hustleorb",
		name: "Hustle Orb",
		onModifyAtk: function (atk) {
			return this.modify(atk, 1.5);
		},
		onSourceModifyAccuracy: function (accuracy) {
			if (typeof accuracy === 'number') {
				return accuracy * 0.8;
			}
		},
		gen: 7,
		desc: "Increases the power of physical attacks by 1.5x but lowers accuracy by 0.8x",
	}
};
