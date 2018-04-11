'use strict'
exports.BattleMovedex = {
"backdraft": {
        accuracy: 100,
        basePower: 80,
        category: "Physical",
        shortDesc: "If this attack damages a target, the User's Attack rises one stage. If this attack targets a Fire-type Pokemon, the User's Attack rises by two stages.",
        id: "backdraft",
        name: "Backdraft",
        pp: 16,
        priority: 0,
        flags: {protect: 1, mirror: 1, contact: 1},
        secondary: false,
			onUpdate: function (pokemon, target) {
			if (target.type !== 'Fire') {
				this.boost({atk: 1});
			}
			else if (target.type === 'Fire') { 
				this.boost({atk: 2});
			}
		},
        target: "normal",
        type: "Fire",
        zMovePower: 160, 
    },
	"overclock": {
        accuracy: 100,
        basePower: 40,
        category: "Physical",
        shortDesc: "This move's Base Power rises by 40 for every stage the Attack stat is boosted. User recovers 50% of the damage dealt.",
        id: "overclock",
        name: "Overclock",
        pp: 8,
        priority: 0,
        flags: {protect: 1, mirror: 1, contact: 1, punch: 1},
		  drain: [1, 2],
        secondary: false,
        target: "normal",
        type: "Fire",
        zMovePower: 160, 
    },
		 "syncrekick": {
        accuracy: 100,
        basePower: 70,
        category: "Physical",
        shortDesc: "This move's Base Power rises by 30 for every kick move executed by this Pokemon since switching in.",
        id: "syncrekick",
        name: "Syncrekick",
        pp: 8,
        priority: 0,
        flags: {protect: 1, mirror: 1, contact: 1},
        secondary: false,
        target: "normal",
        type: "Water",
        zMovePower: 160,
    },
		 "poisonmelt": {
        accuracy: 100,
        basePower: 0,
        category: "Special",
        shortDesc: "This attack hits Steel-types super effectively and has a 30% chance to decrease the target’s SpD by 1 stage.",
        id: "poisonmelt",
        name: "Poison Melt",
        pp: 16,
        priority: 0,
        flags: {protect: 1, mirror: 1,},
        secondary: {
			chance: 30,
			boosts: {
				spd: -1,
			},
		},
		  onEffectiveness: function (typeMod, type) {
			if (type === 'Steel') return 1;
		},
        target: "normal",
        type: "Poison",
        zMovePower: 175,
    },

};
