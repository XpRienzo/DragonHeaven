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
			if (this.randomChance(1, 4) && !pokemon.hasAbility('therapeutic') && !pokemon.hasAbility('shutupandjam') && !pokemon.hasAbility('mellowvibe')) {
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
			if (pokemon.hasAbility('therapeutic') || pokemon.hasAbility('shutupandjam') && !pokemon.hasAbility('mellowvibe')){
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

	desolateland: {
		name: 'DesolateLand',
		id: 'desolateland',
		num: 0,
		effectType: 'Weather',
		duration: 0,
		onTryMove: function (target, source, effect) {
			if (effect.type === 'Water' && effect.category !== 'Status' && (source.volatiles['weatherbreak'] == source.volatiles['atmosphericperversion'])) {
				this.debug('Desolate Land water suppress');
				this.add('-fail', source, effect, '[from] Desolate Land');
				return null;
			} else if (effect.type === 'Fire' && effect.category !== 'Status' && (source.volatiles['weatherbreak'] != source.volatiles['atmosphericperversion'])) {
				this.debug('Inverted Desolate Land fire suppress');
				this.add('-fail', source, effect, '[from] Desolate Land');
				return null;
			}
		},
		onWeatherModifyDamage: function (damage, attacker, defender, move) {
			if (move.type === 'Fire' && (source.volatiles['weatherbreak'] == source.volatiles['atmosphericperversion'])) {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
		},
		onStart: function (battle, source, effect) {
			this.add('-weather', 'DesolateLand', '[from] ability: ' + effect, '[of] ' + source);
		},
		onImmunity: function (type) {
			if (type === 'frz') return false;
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'DesolateLand', '[upkeep]');
			this.eachEvent('Weather');
		},
		onEnd: function () {
			this.add('-weather', 'none');
		},
	},
	
	primordialsea: {
		name: 'PrimordialSea',
		id: 'primordialsea',
		num: 0,
		effectType: 'Weather',
		duration: 0,
		onTryMove: function (target, source, effect) {
			if (effect.type === 'Fire' && effect.category !== 'Status' && (source.volatiles['weatherbreak'] == source.volatiles['atmosphericperversion'])) {
				this.debug('Primordial Sea fire suppress');
				this.add('-fail', source, effect, '[from] Primordial Sea');
				return null;
			} else if (effect.type === 'Water' && effect.category !== 'Status' && (source.volatiles['weatherbreak'] != source.volatiles['atmosphericperversion'])) {
				this.debug('Inverted Primordial Sea water suppress');
				this.add('-fail', source, effect, '[from] Primordial Sea');
				return null;
			}
		},
		onWeatherModifyDamage: function (damage, attacker, defender, move) {
			if (move.type === 'Water' && (source.volatiles['weatherbreak'] == source.volatiles['atmosphericperversion'])) {
				this.debug('Rain water boost');
				return this.chainModify(1.5);
			}
		},
		onStart: function (battle, source, effect) {
			this.add('-weather', 'PrimordialSea', '[from] ability: ' + effect, '[of] ' + source);
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'PrimordialSea', '[upkeep]');
			this.eachEvent('Weather');
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
	
afterstorm: {
    name: 'Afterstorm',
    id: 'afterstorm',
    num: 0,
    effectType: 'Weather',
    duration: 5,
    durationCallback: function(source, effect) {
        return 5;
    },
	 onModifyDamagePriority: -2,
    onWeatherModifyDamage: function(damage, attacker, defender, move) {
			if (move.secondaries == move.isInInvertedWeather) {
            this.debug('Rainbow Sky suppress');
            return this.chainModify(0.5);
        } else {
            this.debug('Rainbow Sky boost');
            return this.chainModify(1.5);
        }
    },
	 onModifyMovePriority: -2,
	 onWeatherModifyMove: function(attacker, defender, move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				if (move.isInInvertedWeather) {
					delete move.secondaries;
				}else{
					for (const secondary of move.secondaries) {
						// @ts-ignore
						secondary.chance *= 2;
					}
				}
			}
	 },
    onStart: function(battle, source, effect) {
        if (effect && effect.effectType === 'Ability') {
            if (this.gen <= 5) this.effectData.duration = 0;
            this.add('-weather', 'Afterstorm', '[from] ability: ' + effect, '[of] ' + source);
        } else {
            this.add('-weather', 'Afterstorm');
            this.add('Afterstorm');
        }
    },
    onResidualOrder: 1,
    onResidual: function() {
        this.add('-weather', 'Afterstorm', '[upkeep]');
        if (this.isWeather('afterstorm')) this.eachEvent('Weather');
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
		onTryPrimaryHit: function (target, source, move) {
			if (!source.volatiles['atmosphericperversion']){
				move.isInInvertedWeather = true;
			}
		},
		onBasePowerPriority: -1,
		onBasePower: function (basePower, attacker, defender, move, effect) {
			if (!attacker.volatiles['atmosphericperversion']){
				if (this.isWeather('sunnyday') && move.type === 'Fire') return this.chainModify(1/3);
				if (this.isWeather('solarsnow') && move.type === 'Fire' && !defender.hasType(['Ice', 'Fire', 'Grass'])) return this.chainModify(1/3);
				if (this.isWeather(['sunnyday', 'solarsnow']) && move.type === 'Water') return this.chainModify(3);
				if (this.isWeather('desolateland') && move.type === 'Water') return this.chainModify(1.5);
				if (this.isWeather('sandstorm') && defender.hasType('Rock') && move.category === 'Special') return this.chainModify(2.25);
				if (this.isWeather('raindance') && move.type === 'Water') return this.chainModify(1/3);
				if (this.isWeather('raindance') && move.type === 'Fire') return this.chainModify(3);
				if (this.isWeather('primordialsea') && move.type === 'Fire') return this.chainModify(1.5);
				if (this.isWeather('shadowdance') && move.type === 'Ghost') return this.chainModify(1/3);
			}
		},
	},
	atmosphericperversion: { // https://hastebin.com/emuxidukok.pas
		name: 'AtmosphericPerversion',
		id: 'atmosphericperversion',
		num: 0,
		onTryPrimaryHit: function (target, source, move) {
			if (!source.volatiles['weatherbreak']){
				move.isInInvertedWeather = true;
			}
		},
		onBasePowerPriority: -1,
		onBasePower: function (basePower, attacker, defender, move, effect) {
			if (!attacker.volatiles['weatherbreak']){
				if (this.isWeather('sunnyday') && move.type === 'Fire') return this.chainModify(1/3);
				if (this.isWeather('solarsnow') && move.type === 'Fire' && !defender.hasType(['Ice', 'Fire', 'Grass'])) return this.chainModify(1/3);
				if (this.isWeather(['sunnyday', 'solarsnow']) && move.type === 'Water') return this.chainModify(3);
				if (this.isWeather('desolateland') && move.type === 'Water') return this.chainModify(1.5);
				if (this.isWeather('sandstorm') && defender.hasType('Rock') && move.category === 'Special') return this.chainModify(2.25);
				if (this.isWeather('raindance') && move.type === 'Water') return this.chainModify(1/3);
				if (this.isWeather('raindance') && move.type === 'Fire') return this.chainModify(3);
				if (this.isWeather('primordialsea') && move.type === 'Fire') return this.chainModify(1.5);
				if (this.isWeather('shadowdance') && move.type === 'Ghost') return this.chainModify(1/3);
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
			if (type === 'Fire'){
				pokemon.setType('Fire', true);
			} else {
				pokemon.setType([type, 'Fire'], true);
			}
		},
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
			if (type === 'Water'){
				pokemon.setType('Water', true);
			} else {
				pokemon.setType(['Water', type], true);
			}
		},
	},
	valcro: {
		name: 'Valcro',
		id: 'valcro',
		num: 7500216,
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			let type = 'Normal';
			if (pokemon.ability === 'techequip') {
				// @ts-ignore
				type = pokemon.getItem().onMemory;
				// @ts-ignore
				if (!pokemon.getItem().onMemory) {
					type = 'Normal';
				}
			}
			if (type === 'Flying'){
				pokemon.setType('Flying', true);
			} else {
				pokemon.setType([type, 'Flying'], true);
			}
		},
		onTryHit: function (target, source, move) {
			let type = 'Normal';
			type = target.getItem().onMemory;
			if (target !== source && move.type === type) {
					this.add('-immune', target, '[msg]', '[from] ability: Tech Equip');
				return null;
			}
		},
	},
	smelly: {
		name: 'Smelly',
		id: 'smelly',
		num: 7500217,
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			let type = 'Normal';
			if (pokemon.ability === 'technicalsystem') {
				// @ts-ignore
				type = pokemon.getItem().onMemory;
				// @ts-ignore
				if (!type || type === true) {
					type = 'Normal';
				}
			}
			pokemon.setType(type, true);
		},
	},
	covally: {
		name: 'Covally',
		id: 'covally',
		num: 7500243,
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			let type = 'Normal';
			if (pokemon.ability === 'triagesystem') {
				// @ts-ignore
				type = pokemon.getItem().onMemory;
				// @ts-ignore
				if (!type || type === true) {
					type = 'Normal';
				}
			}
			if (type === 'Fairy'){
				pokemon.setType('Fairy', true);
			} else {
				pokemon.setType([type, 'Fairy'], true);
			}
		},
		onModifyPriority: function (priority, pokemon, target, move) {
			let type = 'Normal';
			if (pokemon.ability === 'triagesystem') {
				// @ts-ignore
				type = pokemon.getItem().onMemory;
				// @ts-ignore
				if (!type || type === true) {
					type = 'Normal';
				}
			}
			if (move && (move.type === type)) return priority + 3;
		},
	},
	
	chainheal: {
		// this is a side condition
		name: 'chainheal',
		id: 'chainheal',
		onStart: function (side, source, sourceEffect) {
			this.effectData.position = source.position;
			this.effectData.sourceEffect = sourceEffect;
			this.add('-activate', source, 'chainheal');
		},
		onSwitchInPriority: 1,
		onSwitchIn: function (target) {
			if (!target.fainted && target.position === this.effectData.position) {
				let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'chainheal', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'truant', 'resurrection', 'magicalwand', 'sleepingsystem', 'cursedcloak', 'appropriation', 'disguiseburden', 'hideandseek', 'beastcostume', 'spiralpower', 'optimize', 'prototype', 'typeillusionist', 'godoffertility', 'foundation', 'sandyconstruct', 'victorysystem', 'techequip', 'technicalsystem', 'triagesystem', 'geneticalgorithm', 'effectsetter', 'tacticalcomputer', 'mitosis', 'barbstance', 'errormacro', 'combinationdrive', 'stanceshield', 'unfriend', 'desertmirage', 'sociallife', 'cosmology', 'crystallizedshield', 'compression', 'whatdoesthisdo'];
				if (!bannedAbilities.includes(target.ability)){
					target.setAbility('chainheal');
				}
				target.side.removeSideCondition('chainheal');
			}
		},
	},
};

exports.BattleStatuses = BattleStatuses;
