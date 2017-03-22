'use strict';

exports.BattleMovedex = {
  "scorchingwater": {
          accuracy: 100,
          basePower: 70,
          category: "Special",
	        shortDesc: "10% chance to OHKO Grass, Bug, Steel, Ice, Rock",
          id: "scorchingwater",
          isViable: true,
	  name: "Scorching Water",
          pp: 15,
          priority: 0,
          flags: {protect: 1, mirror: 1},
          thawsTarget: true,
          onEffectiveness: function (typeMod, type) {
			    if (type === 'Water') return 1;
		      },
          secondary: {
                    chance: 30,
	                  status: 'brn',
          },
	  onPrepareHit: function (target, source) {
			    this.attrLastMove('[still]');
			    this.add('-anim', source, "Scald", target);
	    },
          target:"normal",
          type: "Water",
  },      
};
