'use strict';

exports.BattleStatuses = {
shadowsky: {
		effectType: 'Weather',
		duration: 5,
		durationCallback: function (source, effect) {
		if (source && source.hasItem('shadowrock')) {
				return 8;
			}
			return 5;
		},
		onWeatherModifyDamage: function (damage, attacker, defender, move) {
			if (move.type === 'Dark' || move.type === 'Ghost') {
			//	this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
		},
		onStart: function (battle, source, effect) {
			if (effect && effect.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-weather', 'ShadowSky', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'ShadowSky');
			}
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'ShadowSky', '[upkeep]');
			this.eachEvent('Weather');
		},
		onEnd: function () {
			this.add('-weather', 'none');
		},
	},
  };
