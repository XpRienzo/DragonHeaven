'use strict';

exports.BattleAbilities = {
	"inverseivy": {
		shortDesc: "The Pokemon's Grass type moves work like in inverse battles.",
		onEffectiveness: function (typeMod, target, type, move) {
			if (move && move.type !== "Grass") return;
			if (move && !this.getImmunity(move, type)) return 1;
			for (let i in typeMod) {
			typeMod[i] *= -1;
			}
		},
		id: "inverseivy",
		name: "Inverse Ivy",
	},
	"crystalreflection": {
		shortDesc: "Any special move has 50% of the damage dealt back to the user.",
		onAfterDamageOrder: 1,
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.category === "Special") {
				this.damage(damage / 2, source, target);
			}
		},
		id: "crystalreflection",
		name: "Crystal Reflection",
	},
	"torridsand": {
		shortDesc: "The user's Ground-type moves deal Super Effective damage on Water-types",
		onModifyMove: function(move) {
			if (move.type !== "Ground") return;
			move.onEffectiveness = function(typeMod, type) {
				if (type === 'Water') return 1;
			};
		},
		id: "torridsand",
		name: "Torrid Sand",
	},
	"acidictouch": {
		shortDesc: "The user's Poison moves deal Super Effective damage to Steel, Rock, and Water.",
		onModifyMove: function(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Poison'] = true;
			}
			if (move.type !== "Poison") return;
			move.onEffectiveness = function(typeMod, type) {
				if (type === 'Steel' || type === 'Water' || type === 'Rock') return 1;
			}
		},
		id: "acidictouch",
		name: "Acidic Touch",
	},
	"electrojection": {
		shortDesc: "This Pokemon can paralyze other Pokemon regardless of their typing.",
		// Implemented in sim/pokemon.js:Pokemon#setStatus
		id: "electrojection",
		name: "Electrojection",
	},
	"miracledash": {
		shortDesc: "If Psychic Terrain is active, this Pokemon's Speed is doubled.",
		onModifySpe: function(spe) {
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
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Dark') {
				if (!this.boost({
						atk: 1
					})) {
					this.add('-immune', target, '[msg]', '[from] ability: Bravery');
				}
				return null;
			}
		},
		onAllyTryHitSide: function(target, source, move) {
			if (target === this.effectData.target || target.side !== source.side) return;
			if (move.type === 'Dark') {
				this.boost({
					atk: 1
				}, this.effectData.target);
			}
		},
		id: "bravery",
		name: "Bravery",
		rating: 3.5,
	},
	"hiddensoul": {
		shortDesc: "This Pokemon's Special Defense is raised by 1 stage after it is damaged by a move.",
		onAfterDamage: function(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && effect.id !== 'confused') {
				this.boost({
					spd: 1
				});
			}
		},
		id: "hiddensoul",
		name: "Hidden Soul",
		rating: 2,
	},
	"frostborn": {
		shortDesc: "This Pokemon's Attack is raised 1 stage if hit by an Ice move; Ice immunity.",
		onTryHitPriority: 1,
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ice') {
				if (!this.boost({
						atk: 1
					})) {
					this.add('-immune', target, '[msg]', '[from] ability: Frostborn');
				}
				return null;
			}
		},
		onAllyTryHitSide: function(target, source, move) {
			if (target === this.effectData.target || target.side !== source.side) return;
			if (move.type === 'Ice') {
				this.boost({
					atk: 1
				}, this.effectData.target);
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
		onTryHit: function(target, source, move) {
			if (move.flags['punch']) {
				this.add('-immune', target, '[msg]', '[from] ability: Unbreakable');
				return null;
			}
		},
		onAllyTryHitSide: function(target, source, move) {
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
		onModifyCritRatio: function(critRatio) {
			return critRatio + 6;
		},
		id: "lucky",
		name: "Lucky",
	},
	"quickclaws": {
		shortDesc: "Any attack with 60 BP or less gets a +1 to priority",
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move.basePower <= 60) return priority + 1;
		},
		id: "quickclaws",
		name: "Quick Claws",
	},
	"reaperslice": { /* Make the 1.2 somehow 1.3 + Add the infiltrating effect*/
		desc: "Ghost type moves can bypass Subsitutes, they have also x1.3 power",
		shortDesc: "Ghost type moves can bypass Subsitutes, they have also x1.3 power",
		onModifyMovePriority: -1,
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Ghost';
				move.sliceBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, pokemon, target, move) {
			if (move.sliceBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "reaperslice",
		name: "Reaper Slice",
		rating: 4,
	},
};
