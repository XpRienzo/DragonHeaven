'use strict';

/**@type {{[k: string]: EffectData}} */
let BattleStatuses = {
	//Therapeutic and Shut Up and Jam allow movement under status at all times (excluding Sleep for the former).
	par: {
		name: 'par',
		id: 'par',
		num: 0,
		effectType: 'Status',
		onStart: function (target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'par', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'par');
			}
		},
		onModifySpe: function (spe, pokemon) {
			if (!pokemon.hasAbility('quickfeet')) {
				return this.chainModify(0.5);
			}
		},
		onBeforeMovePriority: 1,
		onBeforeMove: function (pokemon) {
			if (this.randomChance(1, 4) && !pokemon.hasAbility('therapeutic') && !pokemon.hasAbility('shutupandjam')) {
				this.add('cant', pokemon, 'par');
				return false;
			}
		},
	},
	frz: {
		name: 'frz',
		id: 'frz',
		num: 0,
		effectType: 'Status',
		onStart: function (target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frz', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'frz');
			}
			if (target.template.species === 'Shaymin-Sky' && target.baseTemplate.baseSpecies === 'Shaymin') {
				let template = this.getTemplate('Shaymin');
				target.formeChange(template);
				target.baseTemplate = template;
				target.setAbility(template.abilities['0'], null, true);
				target.baseAbility = target.ability;
				target.details = template.species + (target.level === 100 ? '' : ', L' + target.level) + (target.gender === '' ? '' : ', ' + target.gender) + (target.set.shiny ? ', shiny' : '');
				this.add('detailschange', target, target.details);
				this.add('-formechange', target, 'Shaymin', '[msg]');
			}
		},
		onBeforeMovePriority: 10,
		onBeforeMove: function (pokemon, target, move) {
			if (move.flags['defrost']) return;
			if (this.randomChance(1, 5)) {
				pokemon.cureStatus();
				return;
			}
			this.add('cant', pokemon, 'frz');
			if (pokemon.hasAbility('therapeutic') || pokemon.hasAbility('shutupandjam')){
				return;
			}
			return false;
		},
		onModifyMove: function (move, pokemon) {
			if (move.flags['defrost']) {
				this.add('-curestatus', pokemon, 'frz', '[from] move: ' + move);
				pokemon.setStatus('');
			}
		},
		onHit: function (target, source, move) {
			if (move.thawsTarget || move.type === 'Fire' && move.category !== 'Status') {
				target.cureStatus();
			}
		},
	},
solarsnow: {
		name: 'SolarSnow',
		id: 'solarsnow',
		num: 0,
		effectType: 'Weather',
		duration: 5,
		durationCallback: function (source, effect) {
			if (source && (source.hasItem('icyrock') || source.hasItem('heatrock'))) {
				return 8;
			}
			return 5;
		},
		onWeatherModifyDamage: function (damage, attacker, defender, move) {
			if (move.type === 'Fire' && !(defender.hasType('Grass') || defender.hasType('Fire') || defender.hasType('Ice'))) {
				this.debug('Solar Snow fire boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Water') {
				this.debug('Solar Snow water suppress');
				return this.chainModify(0.5);
			}
		},
		onStart: function (battle, source, effect) {
			if (effect && effect.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-weather', 'SolarSnow', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'SolarSnow');
				this.add('SolarSnow');
			}
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'SolarSnow', '[upkeep]');
			if (this.isWeather('solarsnow')) this.eachEvent('Weather');
		},
		onWeather: function (target) {
         if (!target.hasType('Grass') && !target.hasType('Fire') && !target.hasType('Ice')){
			  this.damage(target.maxhp / 16);
                        }
		},
		onEnd: function () {
			this.add('-weather', 'none');
		},
	},

shadowdance: {
    name: 'ShadowDance',
    id: 'shadowdance',
    num: 0,
    effectType: 'Weather',
    duration: 5,
    durationCallback: function(source, effect) {
        if (source && (source.hasItem('damprock'))) {
            return 8;
        }
        return 5;
    },
    onWeatherModifyDamage: function(damage, attacker, defender, move) {
        if (move.type === 'Ghost') {
            this.debug('Spirit Storm ghost boost');
            return this.chainModify(1.5);
        }
    },
    onStart: function(battle, source, effect) {
        if (effect && effect.effectType === 'Ability') {
            if (this.gen <= 5) this.effectData.duration = 0;
            this.add('-weather', 'ShadowDance', '[from] ability: ' + effect, '[of] ' + source);
        } else {
            this.add('-weather', 'ShadowDance');
            this.add('ShadowDance');
        }
    },
    onResidualOrder: 1,
    onResidual: function() {
        this.add('-weather', 'ShadowDance', '[upkeep]');
        if (this.isWeather('shadowdance')) this.eachEvent('Weather');
    },
    onWeather: function(target) {
        if (!target.hasType('Water') && !target.hasType('Ghost')) {
            for (const moveSlot of target.moveSlots) {
                moveSlot.pp = moveSlot.pp - 2;
            }
        }
    },
    onEnd: function() {
        this.add('-weather', 'none');
    },
},
	titanicstrength: {
		name: 'TitanicStrength',
		id: 'titanicstrength',
		num: 0,
		duration: 1,
			onUpdate: function (pokemon) {
				if (!pokemon.item && pokemon.volatiles['titanicstrength']) {
				this.add('-start', pokemon, 'ability: Titanic Strength', '[silent]');
				this.boost({atk: 12}, pokemon);
				pokemon.removeVolatile('titanicstrength');
				}
			},
	},
	weatherbreak: { // https://hastebin.com/emuxidukok.pas
		name: 'WeatherBreak',
		id: 'weatherbreak',
		num: 0,
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (this.isWeather(['sunnyday', 'desolateland']) && move.type === 'Fire') {
				return this.chainModify(1/3);
			}
			if (this.isWeather(['sunnyday', 'desolateland']) && move.type === 'Water') {
				return this.chainModify(3);
			}
			if (this.isWeather(['sandstorm']) && defender.hasType('Rock')) {
				return this.chainModify(1.5);
			}
			if (this.isWeather(['raindance', 'primordialsea']) && move.type === 'Water') {
				return this.chainModify(1/3);
			}
			if (this.isWeather(['raindance', 'primordialsea']) && move.type === 'Fire') {
				return this.chainModify(3);
			}
		},
		onTryHeal: function (pokemon, effect) {
			if (this.isWeather(['raindance', 'primordialsea']) && effect.id === 'dryskin') {
				return null;
			}
		},
		onDamage: function (pokemon, effect) {
			if (this.isWeather(['sunnyday', 'desolateland']) && effect.id === 'solarpower') {
				return null;
			}
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'raindance' || effect.id === 'primordialsea' && effect.id === 'dryskin') {
				this.heal(target.maxhp / 8, target, target);
			}
		},
	},
	vitality: {
		name: 'Vitality',
		id: 'vitality',
		num: 7500209,
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			let type = 'Normal';
			if (pokemon.ability === 'rkssystem') {
				// @ts-ignore
				type = pokemon.getItem().onMemory;
				// @ts-ignore
				if (!type || type === true) {
					type = 'Normal';
				}
			}
			pokemon.setType(type, 'Fire');
		},
	},
	onSourceModifyAccuracy: function (accuracy, pokemon) {
			if (typeof accuracy !== 'number' && pokemon.item.name.includes("Memory")) return;
			return accuracy * 1.5;
		},
	omneus: {
		name: 'Omneus',
		id: 'omneus',
		num: 7500255,
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			let type = 'Normal';
			if (pokemon.ability === 'spiralpower') {
				// @ts-ignore
				type = pokemon.getItem().onPlate;
				// @ts-ignore
				if (!type || type === true) {
					type = 'Normal';
				}
			}
			pokemon.addType('type', true);
		},
	},
};

exports.BattleStatuses = BattleStatuses;
