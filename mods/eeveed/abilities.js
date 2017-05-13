'use strict';

exports.BattleAbilities = {
        "miracledash": {
                shortDesc: "If Psychic Terrain is active, this Pokemon's Speed is doubled.",
		            onModifySpe: function (spe) {
			                  if (this.isTerrain('psychicterrain')) {
				                        return this.chainModify(2);
			                  }
		            },
		            id: "miracledash",
		            name: "Miracle Dash",
	      },
};        
