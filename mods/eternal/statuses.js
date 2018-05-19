'use strict';

/**@type {{[k: string]: EffectData}} */
let BattleStatuses = {

despoilingvines: {
		name: 'despoilingvines',
		id: 'despoilingvines',
		num: 0,
		duration: 5,
		durationCallback: function (target, source) {
			if (source.hasItem('gripclaw')) return 8;
			return this.random(5, 7);
		},
		onStart: function (pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectData.sourceEffect, '[of] ' + source);
		},
		onResidualOrder: 11,
		onResidual: function(pokemon) {
				for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				let damage = this.damage(pokemon.maxhp / 8, pokemon, target);
				if (damage) {
					this.heal(damage, target, pokemon);
				}
				}
			},
		onEnd: function (pokemon) {
			this.add('-end', pokemon, this.effectData.sourceEffect, '[despoilingvines]');
		},
		onTrapPokemon: function (pokemon) {
			if (this.effectData.source && this.effectData.source.isActive) pokemon.tryTrap();
		},
	},
  
  };

exports.BattleStatuses = BattleStatuses;
