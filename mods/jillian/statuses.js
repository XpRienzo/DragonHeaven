'use strict';

exports.BattleStatuses = {

		"poisonscent": {
			effectType: 'Weather',
			duration: 5,
		},
		onStart: function(battle, source, effect) {
			if (effect && effect.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-weather', 'Poison Scent', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Poison Scent');
			}
		},
		onResidualOrder: 1,
		onResidual: function() {
			this.add('-weather', 'Poison Scent', '[upkeep]');
			if (this.isWeather('Poison Scent')) this.eachEvent('Weather');
		},
		onWeather: function(target) {
			let typeMod = this.clampIntRange(pokemon.runEffectiveness('Poison'), -6, 6);
			if (pokemon.hasType('Steel'))
				this.damage === 0;
			elseif(pokemon.hasType('Poison'))
			this.damage === 0;
			else this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
		}
	},
	onEnd: function() {
		this.add('-weather', 'none');
	},
};
