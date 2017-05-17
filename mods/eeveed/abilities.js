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
	"bravery": {
		shortDesc: "This Pokemon's Attack is raised 1 stage if hit by a Dark move; Dark immunity.",
		onTryHitPriority: 1,
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Dark') {
				if (!this.boost({atk:1})) {
					this.add('-immune', target, '[msg]', '[from] ability: Bravery');
				}
				return null;
			}
		},
		onAllyTryHitSide: function (target, source, move) {
			if (target === this.effectData.target || target.side !== source.side) return;
			if (move.type === 'Dark') {
				this.boost({atk:1}, this.effectData.target);
			}
		},
		id: "bravery",
		name: "Bravery",
		rating: 3.5,
	},
	"hiddensoul": {
		shortDesc: "This Pokemon's Special Defense is raised by 1 stage after it is damaged by a move.",
		onAfterDamage: function (damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && effect.id !== 'confused') {
				this.boost({spd:1});
			}
		},
		id: "hiddensoul",
		name: "Hidden Soul",
		rating: 2,
	},
	"frostborn": {
		shortDesc: "This Pokemon's Attack is raised 1 stage if hit by an Ice move; Ice immunity.",
		onTryHitPriority: 1,
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Ice') {
				if (!this.boost({atk:1})) {
					this.add('-immune', target, '[msg]', '[from] ability: Frostborn');
				}
				return null;
			}
		},
		onAllyTryHitSide: function (target, source, move) {
			if (target === this.effectData.target || target.side !== source.side) return;
			if (move.type === 'Ice') {
				this.boost({atk:1}, this.effectData.target);
			}
		},
		id: "frostborn",
		name: "Frostborn",
		rating: 3.5,
	},
	"lucky": {
		shortDesc: "This mons attacks always crit unless Lucky Shield, shell armour or battle armour are active.",
		onModifyCritRatio: function(critRatio) {
			return critRatio + 6;
		},
		id: "lucky",
		name: "Lucky",
		rating: 3.5,
	},
};        
