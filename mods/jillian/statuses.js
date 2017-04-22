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
		let typeMod = this.clampIntRange(target.runEffectiveness('Poison'), -6, 6);
		this.damage(target.maxhp * Math.pow(2, typeMod) / 8);
	},
	onEnd: function() {
		this.add('-weather', 'none');
	},
        "pooptimebomb": {
	         effectType: 'Weather',
	         duration: 3,
        },
	onStart: function(battle, source, effect) {
		if (effect && effect.effectType === 'Ability') {
			if (this.gen <= 5) this.effectData.duration = 0;
			this.add('-weather', 'Poop Time Bomb', '[from] ability: ' + effect, '[of] ' + source);
		} else {
			this.add('-weather', 'Poop Time Bomb');
		}
	},
        onResidualOrder: 1,
	onResidual: function() {
		this.add('-weather', 'Poop Time Bomb', '[upkeep]');
		if (this.isWeather('Poop Time Bomb')) this.eachEvent('Weather');
	},
	onEnd: function() {
		this.add('-weather', 'none');
	},
        onEnd: function (target) {
	target.faint();
	},
};
