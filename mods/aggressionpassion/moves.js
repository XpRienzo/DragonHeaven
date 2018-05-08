'use strict';

/**@type {{[k: string]: MoveData}} */
let BattleMovedex = {
"acidarmor": {
		num: 151,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2.",
		id: "acidarmor",
		name: "Acid Armor",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		selfBoost: {
      boosts: {
			def: 2,
      }
		},
		secondary: false,
		target: "self",
		type: "Poison",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Tough",
	},
};

exports.BattleMovedex = BattleMovedex;
