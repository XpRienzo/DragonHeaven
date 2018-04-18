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
		"unbreakable": {
		shortDesc: "This Pokemon is immune to punch-based moves.",
		onTryHit: function (target, source, move) {
			if (move.flags['punch']) {
				this.add('-immune', target, '[msg]', '[from] ability: Unbreakable');
				return null;
			}
		},
		onAllyTryHitSide: function (target, source, move) {
			if (move.flags['punch']) {
				this.add('-immune', this.effectData.target, '[msg]', '[from] ability: Unbreakable');
			}
		},
		id: "unbreakable",
		name: "Unbreakable",
		rating: 2,
	},
	"lucky": {
		shortDesc: "This mons attacks always crit unless Lucky Shield, shell armour or battle armour are active.",
		onModifyCritRatio: function (critRatio) {
			return critRatio + 6;
		},
		id: "lucky",
		name: "Lucky",
	},
"quickclaws": {
		shortDesc: "Any attack with 60 BP or less gets a +1 to priority",
		onModifyMove: function (basePower, pokemon, priority, move) {
			if (move.basePower <= 60) return priority + 1;
		},
		id: "quickclaws",
		name: "Quick Claws",
	},
		"reaperslice": { /* Make the 1.2 somehow 1.3 + Add the infiltrating effect*/
		desc: "Ghost type moves can bypass Subsitutes, they have also x1.3 power",
		shortDesc: "Ghost type moves can bypass Subsitutes, they have also x1.3 power",
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Ghost';
				move.refrigerateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.refrigerateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "reaperslice",
		name: "Reaper Slice",
		rating: 4,
	},
};        
