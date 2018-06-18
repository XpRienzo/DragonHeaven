'use strict';
exports.BattleAbilities = {
	"forecast": {
		desc: "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm.",
		shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm.",
		onUpdate: function (pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Castform' || pokemon.transformed) return;
			let forme = null;
			switch (this.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
         case 'solarsnow':
				if (pokemon.template.speciesid !== 'castformsunny') forme = 'Castform-Sunny';
				break;
			case 'raindance':
			case 'primordialsea':
				if (pokemon.template.speciesid !== 'castformrainy') forme = 'Castform-Rainy';
				break;
			case 'hail':
				if (pokemon.template.speciesid !== 'castformsnowy') forme = 'Castform-Snowy';
				break;
			default:
				if (pokemon.template.speciesid !== 'castform') forme = 'Castform';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme);
				this.add('-formechange', pokemon, forme, '[msg]', '[from] ability: Forecast');
			}
		},
		id: "forecast",
		name: "Forecast",
		rating: 3,
		num: 59,
	},
		"dryskin": {
		desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day.",
		shortDesc: "This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Dry Skin');
				}
				return null;
			}
		},
		onBasePowerPriority: 7,
		onFoeBasePower: function (basePower, attacker, defender, move) {
			if (this.effectData.target !== defender) return;
			if (move.type === 'Fire') {
				return this.chainModify(1.25);
			}
		},
		onWeather: function (target, source, effect) {
			if (['raindance', 'primordialsea', 'desolateland', 'solarsnow', 'sunnyday'].includes(effect.id)){
				if (['desolateland', 'solarsnow', 'sunnyday'].includes(effect.id) == (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak'])) {
					this.damage(target.maxhp / 8, target, target);
				} else {
				this.heal(target.maxhp / 8);
				}
			}
		},
		id: "dryskin",
		name: "Dry Skin",
		rating: 3,
		num: 87,
	},
	"chlorophyll": {
		shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
		onModifySpe: function (spe, pokemon) {
			if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			}
		},
		id: "chlorophyll",
		name: "Chlorophyll",
		rating: 3,
		num: 34,
	},

	"slushrush": {
		shortDesc: "If Hail is active, this Pokemon's Speed is doubled.",
		onModifySpe: function (spe, pokemon) {
			if (this.isWeather(['hail', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			}
		},
		id: "slushrush",
		name: "Slush Rush",
		rating: 2.5,
		num: 202,
	},
	"flowergift": {
		desc: "If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5.",
		shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",
		onStart: function (pokemon) {
			delete this.effectData.forme;
		},
		onUpdate: function (pokemon) {
			if (!pokemon.isActive || pokemon.baseTemplate.baseSpecies !== 'Cherrim' || pokemon.transformed) return;
			if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				if (pokemon.template.speciesid !== 'cherrimsunshine') {
					pokemon.formeChange('Cherrim-Sunshine');
					this.add('-formechange', pokemon, 'Cherrim-Sunshine', '[msg]', '[from] ability: Flower Gift');
				}
			} else {
				if (pokemon.template.speciesid === 'cherrimsunshine') {
					pokemon.formeChange('Cherrim');
					this.add('-formechange', pokemon, 'Cherrim', '[msg]', '[from] ability: Flower Gift');
				}
			}
		},
		onModifyAtkPriority: 3,
		onAllyModifyAtk: function (atk, pokemon) {
			if (this.effectData.target.baseTemplate.baseSpecies !== 'Cherrim') return;
			if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(1.5);
				} 	else {
					return this.chainModify(0.66667);
				}
			}
		},
		onModifySpDPriority: 4,
		onAllyModifySpD: function (spd, pokemon) {
			if (this.effectData.target.baseTemplate.baseSpecies !== 'Cherrim') return;
			if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(1.5);
				} 	else {
					return this.chainModify(0.66667);
				}
			}
		},
		id: "flowergift",
		name: "Flower Gift",
		rating: 2.5,
		num: 122,
	},

	"icebody": {
		desc: "If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",
		onWeather: function (target, source, effect) {
			if (effect.id === 'hail' || effect.id === 'solarsnow') {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.heal(target.maxhp / 16);
				} else {
					this.damage(target.maxhp / 16, target, target);
				}
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail' || type === 'solarsnow') return false;
		},
		id: "icebody",
		name: "Ice Body",
		rating: 1.5,
		num: 115,
	},
	"leafguard": { //TODO: Add effects in inverted Sun.
		desc: "If Sunny Day is active, this Pokemon cannot gain a major status condition and Rest will fail for it.",
		shortDesc: "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.",
		onSetStatus: function (status, target, source, effect) {
			if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				if (effect && effect.status) this.add('-immune', target, '[msg]', '[from] ability: Leaf Guard');
				return false;
			}
		},
		onTryAddVolatile: function (status, target) {
			if (status.id === 'yawn' && this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				this.add('-immune', target, '[msg]', '[from] ability: Leaf Guard');
				return null;
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'solarsnow') return false;
		},
		id: "leafguard",
		name: "Leaf Guard",
		rating: 1,
		num: 102,
	},

	"solarpower": {
		desc: "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn.",
		shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
		onModifySpAPriority: 5,
		onModifySpA: function (spa, pokemon) {
			if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(1.5);
				} 	else {
					return this.chainModify(0.66667);
				}
			}
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'sunnyday' || effect.id === 'desolateland' || effect.id === 'solarsnow') {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.damage(target.maxhp / 8, target, target);
				} else {
					this.heal(target.maxhp / 8);
				}
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'solarsnow') return false;
		},
		id: "solarpower",
		name: "Solar Power",
		rating: 1.5,
		num: 94,
	},

	"snowcloak": {
		desc: "If Hail is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail.",
		onImmunity: function (type, pokemon) {
			if (type === 'hail' || type === 'solarsnow') return false;
		},
		onModifyAccuracy: function (accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (this.isWeather(['hail', 'solarsnow'])) {
				if (target && (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak'])){
					this.debug('Snow Cloak - decreasing accuracy');
					return accuracy * 0.8;
				} else {
					this.debug('Inverted Snow Cloak - boosting accuracy');
					return accuracy * 1.25;
				}
			}
		},
		id: "snowcloak",
		name: "Snow Cloak",
		rating: 1.5,
		num: 81,
	},

	"drought": {
		shortDesc: "On switch-in, this Pokemon summons Sunny Day.",
		onStart: function (source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.template.speciesid === 'groudon') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
         if(!this.isWeather('solarsnow')) this.setWeather('sunnyday');          
		},
		id: "drought",
		name: "Drought",
		rating: 4.5,
		num: 70,
	},
	"snowwarning": {
		shortDesc: "On switch-in, this Pokemon summons Hail.",
		onStart: function (source) {
			if(!this.isWeather('solarsnow')) this.setWeather('hail');
		},
		id: "snowwarning",
		name: "Snow Warning",
		rating: 4,
		num: 117,
	},
	"overcoat": {
		shortDesc: "This Pokemon is immune to powder moves and damage from Sandstorm or Hail.",
		onImmunity: function (type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'solarsnow' || type === 'powder') return false;
		},
		onTryHitPriority: 1,
		onTryHit: function (target, source, move) {
			if (move.flags['powder'] && target !== source && this.getImmunity('powder', target)) {
				this.add('-immune', target, '[msg]', '[from] ability: Overcoat');
				return null;
			}
		},
		id: "overcoat",
		name: "Overcoat",
		rating: 2.5,
		num: 142,
	},
	"harvest": {
		desc: "If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.",
		shortDesc: "If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.",
		id: "harvest",
		name: "Harvest",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			if ((this.isWeather(['sunnyday', 'desolateland', 'solarsnow']) || this.randomChance(1, 2)) == (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak'])) {
				if (pokemon.hp && !pokemon.item && this.getItem(pokemon.lastItem).isBerry) {
					pokemon.setItem(pokemon.lastItem);
					pokemon.lastItem = '';
					this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Harvest');
				}
			}
		},
		rating: 2.5,
		num: 139,
	},
	"raindish": {
		desc: "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn.",
		shortDesc: "If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.",
		onWeather: function (target, source, effect) {
			if (effect.id === 'rain') {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.heal(target.maxhp / 16);
				} else {
					this.damage(target.maxhp / 16, target, target);
				}
			}
		},
		id: "raindish",
		name: "Rain Dish",
		rating: 1.5,
		num: 44,
	},
	"swiftswim": {
		shortDesc: "If Rain Dance is active, this Pokemon's Speed is doubled.",
		onModifySpe: function (spe, pokemon) {
			if (this.isWeather(['raindance', 'primordialsea'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			}
		},
		id: "swiftswim",
		name: "Swift Swim",
		rating: 3,
		num: 33,
	},
	"sandveil": {
		desc: "If Sandstorm is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm.",
		onImmunity: function (type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onModifyAccuracy: function (accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (this.isWeather('sandstorm')) {
				if (target && (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak'])){
					this.debug('Sand Veil - decreasing accuracy');
					return accuracy * 0.8;
				} else {
					this.debug('Inverted Sand Veil - boosting accuracy');
					return accuracy * 1.25;
				}
			}
		},
		id: "sandveil",
		name: "Sand Veil",
		rating: 1.5,
		num: 8,
	},
	"sandrush": {
		desc: "If Sandstorm is active, this Pokemon's Speed is doubled. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm.",
		onModifySpe: function (spe, pokemon) {
			if (this.isWeather('sandstorm')) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandrush",
		name: "Sand Rush",
		rating: 3,
		num: 146,
	},
	"sandforce": {
		desc: "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (this.isWeather('sandstorm')) {
				if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel') {
					if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
						this.debug('Sand Force boost');
						return this.chainModify([0x14CD, 0x1000]);
					} 	else {
						this.debug('Inverted Sand Force suppress');
						return this.chainModify(0.769230769);
					}
				}
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandforce",
		name: "Sand Force",
		rating: 2,
		num: 159,
	},
	"turnabouttorrent": {
		shortDesc: "Water-type moves of the user is boosted by 50% as long as user is above 1/3 HP; the user's stat changes are reversed.",
		onBoost: function(boost) {
			for (var i in boost) {
				boost[i] *= -1;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp >= attacker.maxhp / 3) {
				this.debug('Turnabout Torrent boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp >= attacker.maxhp / 3) {
				this.debug('Turnabout Torrent boost');
				return this.chainModify(1.5);
			}
		},
		id: "turnabouttorrent",
		name: "Turnabout Torrent",
	},
	"intimidatingscales": {
		shortDesc: "Gains 1.5 defense when afflicted with status, and lowers the opponent's attack on switch in.",
		onStart: function (pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidating Scales', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target, '[msg]');
				} else {
					this.boost({atk: -1}, target, pokemon);
				}
			}
		},
		onModifyDefPriority: 6,
		onModifyDef: function(def, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		id: "intimidatingscales",
		name: "Intimidating Scales",
	},
	"hugetorrent": {
		shortDesc: "Doubles Attack at 30% of HP or less.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(2);
			}
		},
		id: "hugetorrent",
		name: "Huge Torrent",
	},
	"intenserivalry": {
		shortDesc: "Bypasses targets' abilities if they could hinder or prevent a move if the target is the same gender",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Intense Rivalry');
		},
		onModifyMove: function(basePower, attacker, defender, move) {
			if (attacker.gender && defender.gender && attacker.gender === defender.gender) {
				move.ignoreAbility = true;
			}
		},
		id: "intenserivalry",
		name: "Intense Rivalry",
	},
	"levipoison": {
		shortDesc: "If the opponent uses a Ground-type move it becomes Poisoned; Ground immunity.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Levi Poison');
				if (move && !source.status) {
					source.setStatus('psn', target);
				}
				return null;
			}
		},
		id: "levipoison",
		name: "Levipoison",
	},
	"glassing": {
		shortDesc: "If the opponent uses a Ground-type move it becomes Burned; Ground immunity.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Glassing');
				if (move && !source.status) {
					source.setStatus('brn', target);
				}
				return null;
			}
		},
		id: "glassing",
		name: "Glassing",
	},
	"armorcast": {
		shortDesc: "When an item is used or lost, Attack and Speed are raised by two stages, while Defense and Special Defense are lowered by one.",
		onAfterUseItem: function (item, pokemon) {
			if (pokemon !== this.effectData.target) return;
			pokemon.addVolatile('armorcast');
		},
		onTakeItem: function (item, pokemon) {
			if (pokemon !== this.effectData.target) return;
			pokemon.addVolatile('armorcast');
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('armorcast');
		},
		effect: {
			duration: 1,
			onStart: function (pokemon){
				let stat = this.sample(['def', 'spa', 'spd']);
				this.boost({atk: 2, [stat]: -1, spe: 2}, pokemon);	
				pokemon.removeVolatile('armorcast');
			},
		},
		id: "armorcast",
		name: "Armor Cast",
	},
	"obliviousabsorb": {
		shortDesc: "Immune to infatuation, taunting, and electric moves, and if hit by one restores HP by 1/8 of its maximum.",
		onUpdate: function(pokemon) {
			if (pokemon.volatiles['attract']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] ability: Oblivious');
			}
			if (pokemon.volatiles['taunt']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('taunt');
				// Taunt's volatile already sends the -end message when removed
			}
		},
		onTryHit: function(pokemon, target, move) {
			if (move.id === 'captivate' || move.id === 'taunt' || move.type === 'Electric' || move.id === 'attract') {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Oblivious Absorb');
				this.heal(pokemon.maxhp / 8);
				return null;
			}
		},
		id: "obliviousabsorb",
		name: "Oblivious Absorb",
	},
	"fear": {
		shortDesc: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle') return null;
		},
		onStart: function(pokemon) {
			var foeactive = pokemon.side.foe.active;
			var activated = false;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidate');
					activated = true;
				}
			}
			if (foeactive[i].volatiles['substitute']) {
				this.add('-activate', foeactive[i], 'Substitute', 'ability: Intimidate', '[of] ' + pokemon);
			} else {
				this.boost({atk: -1}, foeactive[i], pokemon);
			}
		},
		id: "fear",
		name: "FEAR",
	},
	"cactuspower": {
		shortDesc: "Summons Sandstorm upon switching in. Grass-type moves have their power increased 20%.",
		onStart: function(source) {
			this.setWeather('sandstorm');
		},
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				return this.chainModify(1.2);
			}
		},
		id: "cactuspower",
		name: "Cactus Power",
	},
	"snowforce": {
		shortDesc: "Strengthens Ice-type moves to 1.33× their power during hail.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (this.isWeather(['hail', 'solarsnow']) && move.type === 'Ice') {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					this.debug('Snow Force boost');
					return this.chainModify(1.33);
				} else {
					this.debug('Inverted Snow Force suppress');
					return this.chainModify(0.75);
				}
			}
		},
		id: "snowforce",
		name: "Snow Force",
	},
	"sandyskin": {
		shortDesc: "Cures any major status ailment after each turn during sand. User is immune to sand damage.",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			if (pokemon.status && this.isWeather(['sandstorm'])) {
				this.add('-activate', pokemon, 'ability: Sandy Skin');
				pokemon.cureStatus();
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandyskin",
		name: "Sandy Skin",
	},
	"technicutter": {
		shortDesc: "Moves of or below 60 BP get boosted by 1.5x, and attack cannot be lowered.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost['atk'] && boost['atk'] < 0) {
				boost['atk'] = 0;
				if (!effect.secondaries) this.add("-fail", target, "unboost", "Attack", "[from] ability: Technicutter", "[of] " + target);
			}
		},
		id: "technicutter",
		name: "Technicutter",
	},
	"chlorovolt": {
		shortDesc: "If Electric Terrain is active, this Pokemon's Speed is doubled.",
		onModifySpePriority: 6,
		onModifySpe: function(pokemon) {
			if (this.isTerrain('electricterrain')) return this.chainModify(2);
		},
		id: "chlorvolt",
		name: "Chloro Volt",
	},
	"healingfat": {
		shortDesc: "HP is restored by 1/8th every turn when burned or frozen. Prevents the attack drop from Burn status and the immobilization by Frozen status.",
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'brn' || effect.id === 'frz') {
				this.heal(target.maxhp / 8);
				return false;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.status === 'brn') {
				return this.chainModify(1.5);
			}
		},
		onUpdate: function(pokemon) {
			if (pokemon.status === 'frz') {
				this.add('-activate', pokemon, 'ability: Healing Fat');
				pokemon.cureStatus();
			}
		},
		id: "healingfat",
		name: "Healing Fat",
	},
	"normalveil": {
		shortDesc: "This Pokemon is immune to Normal-type moves.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Normal') {
				this.add('-immune', target, '[msg]', '[from] ability: Normal Veil');
				return null;
			}
		},
		id: "normalveil",
		name: "Normal Veil",
	},
	"landshark": {
		shortDesc: "Lowers Opponent's defense on switch in and gets evasion boosted in sand.",
		onStart: function(pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Land Shark', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target, '[msg]');
				} else {
					this.boost({
						def: -1
					}, target, pokemon);
				}
			}
		},
		onModifyAccuracy: function(accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (this.isWeather('sandstorm')) {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					return accuracy * 0.8;
				} else {
					return accuracy * 1.25;
				}
			}
		},
		id: "landshark",
		name: "Land Shark",
	},
	"serenefocus": {
		shortDesc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
		onModifySecondaries: function(secondaries) {
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		id: "serenefocus",
		name: "Serene Focus",
	},
	"torrentveil": {
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Water attacks and the Pokemon has 1.25x evasion.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifyAccuracy: function(accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (target.hp <= target.maxhp / 3) {
				return accuracy * 0.8;
			}
		},
		id: "torrentveil",
		name: "Torrent Veil",
	},
	"mummyfortitude": {
		shortDesc: "Cofagreelix changes the ability of any attacker that makes contact to Mummy. If attacked by an enemy with the Mummy ability, Cofagreelix can endure a hit at one hit point if that hit would faint it.",
		onTryHit: function(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function(damage, target, source, effect) {
			if (source.ability === 'mummy' && damage >= target.hp && target.hp >= 2 && effect && effect.effectType === 'Move') {
				this.add('-activate', target, 'Mummy Fortitude');
				return target.hp - 1;
			}
		},
		onAfterDamage: function(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact'] && source.ability !== 'mummy') {
				let oldAbility = source.setAbility('mummy', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Mummy Fortitude', this.getAbility(oldAbility).name, '[of] ' + source);
				}
			}
		},
		id: "mummmyfortitude",
		name: "Mummy Fortitude",
	},
	"blazingbody": {
		shortDesc: "Sturdy + Blaze.",
		onTryHit: function(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Blazing Body');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		id: "blazingbody",
		name: "Blazing Body",
	},
	"noskill": {
		shortDesc: "Pressure + Super Luck.",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Pressure');
		},
		onDeductPP: function(target, source) {
			if (target.side === source.side) return;
			return 1;
		},
		onModifyCritRatio: function(critRatio) {
			return critRatio + 1;
		},
		id: "noskill",
		name: "No Skill",
	},
	"sandaura": {
		shortDesc: "Sand Stream + Sand Veil.",
		onStart: function(source) {
			this.setWeather('sandstorm');
		},
		onImmunity: function(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onModifyAccuracy: function(accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (this.isWeather('sandstorm')) {
				if (target && (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak'])){
					this.debug('Sand Veil - decreasing accuracy');
					return accuracy * 0.8;
				} else {
					this.debug('Inverted Sand Veil - boosting accuracy');
					return accuracy * 1.25;
				}
			}
		},
		id: "sandaura",
		name: "Sand Aura",
	},
	"staticstorm": {
		shortDesc: "30% chance to paralyze the opponent each turn if Hail is active.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function(pokemon, effect) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				if (this.isWeather(['hail', 'solarsnow']) && this.random(10) < 3) {
					if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
						target.trySetStatus('par', target, effect);
					} else {
						target.cureStatus();
					}
				}
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail' || type === 'solarsnow') return false;
		},
		id: "staticstorm",
		name: "Static Storm",
	},
	"dreadedflames": {
		shortDesc: "Gains a 1.5x boost to fire moves on the turn of entry, and lowers opponent's Attack on entry.",
		onStart: function (pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Dreaded Flames', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target, '[msg]');
				} else {
					this.boost({atk: -1}, target, pokemon);
				}
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.activeTurns > 1) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && !attacker.activeTurns > 1) {
				return this.chainModify(1.5);
			}
		},
		id: "dreadedflames",
		name: "Dreaded Flames",
	},
	"rockygrowth": {
		shortDesc: "This Pokemon takes no recoil from moves and the power of moves that would cause recoil increases by 50% when HP is below 33%.",
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil && attacker.hp < attacker.maxhp / 3) {
				this.debug('Reckless boost');
				return this.chainModify(1.5);
			}
		},
		id: "rockygrowth",
		name: "Rocky Growth",
		rating: 3,
		num: 211
	},
	"pristine": {
		shortDesc: "Cannot be OHKOed. Immune to major status conditions if its HP is full.",
		onTryHit: function(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp = pokemon.maxhp && pokemon.status === 'brn' || pokemon.status === 'frz' || pokemon.status === 'psn' || pokemon.status === 'tox' || pokemon.status === 'par') {
				this.add('-activate', pokemon, 'ability: Pristine');
				pokemon.cureStatus();
			}
		},
		onImmunity: function(type, pokemon) {
			if (pokemon.hp = pokemon.maxhp && pokemon.status === 'brn' || pokemon.status === 'frz' || pokemon.status === 'psn' || pokemon.status === 'tox' || pokemon.status === 'par') return false;
		},
		id: "pristine",
		name: "Pristine",
	},
	"innerbody": {
		shortDesc: "This pokemon cannot flinch, and contact moves have a 33% chance to burn the opponent.",
		onFlinch: false,
		onAfterDamage: function(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.random(10) < 3) {
					source.trySetStatus('brn', target, move);
				}
			}
		},
		id: "innerbody",
		name: "Inner Body",
	},
	"intimidatingfangs": {
		shortDesc: "Pokemon making contact with this Pokemon have their Attack lowered by 1 stage.",
		onAfterDamage: function(damage, target, source, effect) {
			if (effect && effect.flags['contact']) {
				this.add('-ability', target, 'Intimidating Fangs');
				this.boost({
					atk: -1
				}, source, target, null, true);
			}
		},
		id: "intimidatingfangs",
		name: "Intimidating Fangs",
	},
	"intimidatingabsorption": {
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage. This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.",
		onStart: function(pokemon) {
			var foeactive = pokemon.side.foe.active;
			var activated = false;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidating Absorption');
					activated = true;
				}
				if (foeactive[i].volatiles['substitute']) {
					this.add('-activate', foeactive[i], 'Substitute', 'ability: Intimidating Absorption', '[of] ' + pokemon);
				} else {
					this.boost({
						atk: -1
					}, foeactive[i], pokemon);
				}
			}
		},
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Intimidating Absorption');
				}
				return null;
			}
		},
		id: "intimidatingabsorption",
		name: "Intimidating Absorption",
	},
	"keenfeet": {
		shortDesc: "Doubles Evasion whenever a stat is lowered (doesn't activate with self-inflicted drops).",
		onAfterEachBoost: function(boost, target, source) {
			if (!source || target.side === source.side) {
				return;
			}
			var statsLowered = false;
			for (var i in boost) {
				if (boost[i] < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({
					evasion: 2
				});
			}
		},
		id: "keen feet",
		name: "Keen Feet",
	},
	"swiftabsorb": {
		shortDesc: "When hit by a Water moves, Speed is doubled. Water immunity.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Water') {
				this.add('-immune', target, '[msg]', '[from] ability: Swift Absorb');
				return null;
			}
		},
		onModifySpePriority: 5,
		onModifySpe: function(spe, pokemon) {
			return this.chainModify(2);
		},
		id: "swiftabsorb",
		name: "Swift Absorb",
	},
	"mathsurge": {
		shortDesc: "1.5x power of moves with 60 BP or less. When an ally has Technician, Plus or derivatives of those two abilities, multiplier is boosted to 2x.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (basePower <= 60) {
				if (pokemon.side.active.length > 1) {
					for (const allyActive of attacker.side.active) {
						if (allyActive && allyActive.position !== attacker.position && !allyActive.fainted && allyActive.hasAbility(['minus', 'plus', 'technician', 'chargedup', 'electronrain', 'foodcoloring', 'electrotechnic', 'positivegrowth', 'codeunknown', 'positivity', 'technicutter', 'sturdytech', 'precision', 'strikeandpass', 'completelyserious', 'guerillawarfare', 'operationovergrow', 'frenzy', 'eyeofhorus', 'technicalsystem', 'engineer', 'pressurizer', 'prodigy', 'techfur', 'bingobongo', 'starburst', 'technologicalarmor'])) {
							this.debug('Greater Math Surge boost');
							return this.chainModify(2);
						}
					}
				}
				this.debug('Math Surge boost');
				return this.chainModify(1.5);
			}
		},
		id: "mathsurge",
		name: "Math Surge",
	},
	"flameessence": {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Fire-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Flame Essence boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Flame Essence boost');
				return this.chainModify(1.5);
			}
		},
		id: "flameessence",
		name: "Flame Essence",
	},
	"naturalguard": {
		shortDesc: "Starchamp's moves cannot miss unless it's suffering from a major status. Cures itself of status when it switches.",
		onAnyAccuracy: function(accuracy, target, source, move) {
			if (move && (source === this.effectData.target && !source.status)) {
				return true;
			}
			return accuracy;
		},
		onSwitchOut: function(pokemon) {
			pokemon.cureStatus();
		},
		id: "naturalguard",
		name: "Natural Guard",
	},
	"stickyfloat": {
		shortDesc: "Evades Ground-type moves, and user cannot lose their item",
		onTakeItem: function(item, pokemon, source) {
			if (this.suppressingAttackEvents() && pokemon !== this.activePokemon) return;
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				this.add('-activate', pokemon, 'ability: Sticky Hold');
				return false;
			}
		},
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Sticky Float');
				return null;
			}
		},
		id: "stickyfloat",
		name: "Sticky Float",
	},
	"serenefire": {
		shortDesc: "When hit by a Fire-Type Move, all Fire-Type moves used by Hitachi will burn. Fire-Type moves have no effect on Haitchi.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				this.add('-immune', target, '[msg]', '[from] ability: Flash Fire');
				return null;
			}
		},
		onModifyMove: function(move) {
			if (!move || !move.type === 'Fire') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 100,
				status: 'brn'
			});
		},
		id: "serenefire",
		name: "Serene Fire",
	},
	"healingblaze": {
		shortDesc: "Cures status when it uses a Fire-type move. Fire type moves are boosted by 50% whenever Healing Blaze is activated.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
				attacker.cureStatus();
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
				attacker.cureStatus();
			}
		},
		id: "healingblaze",
		name: "Healing Blaze",
	},
	"barbstance": {
		shortDesc: "Switches to blade form when attacking, switches to shield form upon using king's shield. Deals 1/8 HP to contactors when in shield form.",
		onBeforeMovePriority: 11,
		onBeforeMove: function(attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Ferroslash') return;
			if (move.category === 'Status' && move.id !== 'kingsshield' && move.id !== 'leechshield') return;
			var targetSpecies = ((move.id === 'kingsshield' || move.id === 'leechshield') ? 'Ferroslash' : 'Ferroslash-Blade');
			if (attacker.template.species !== targetSpecies && attacker.formeChange(targetSpecies)) {
				this.add('-formechange', attacker, targetSpecies);
			}
		},
		onAfterDamageOrder: 1,
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact'] && target.template.species === 'Ferroslash') {
				this.damage(source.maxhp / 8, source, target);
			}
		},
		id: "barbstance",
		name: "Barb Stance",
	},
	"poweruppinch": {
		shortDesc: "All attacks x1.25 stronger if health is 50% or below",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.25);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.25);
			}
		},
		id: "poweruppinch",
		name: "Power Up Pinch",
	},
	"electrotechnic": {
		shortDesc: "This Pokemon's moves with 60 BP or less have their power increased by 50%; if on the field there is another Pokemon with Plus, Minus or derivates, their power is doubled.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(spa, pokemon) {
			var allyActive = pokemon.side.active;
			if (allyActive.length === 1) {
				return;
			}
			for (var i = 0; i < allyActive.length; i++) {
				if (allyActive[i] && allyActive[i].position !== pokemon.position && !allyActive[i].fainted && allyActive[i].hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		id: "electrotechnic",
		name: "ElectroTechnic",
	},
	"speedbreak": {
		shortDesc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",
		onBoost: function(boost) {
			boost.spe *= -1;
		},
		id: "speedbreak",
		name: "Speed Break",
	},
	"justicepower": {
           desc: "When this Pokemon is hit by a dark type attack, its attack is raised by 1 stage, and that attack's PP is halved unless it is already at 1.",
			shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move. That move's PP is then halved.",
			onAfterDamage: function(damage, target, source, effect) {
				if (effect && effect.type === 'Dark') {
					this.boost({
						atk: 1
					});
					for (const moveSlot of source.moveSlots) {
						if (moveSlot.id === source.lastMove.id) {
							moveSlot.pp = (moveSlot.pp+1)/2;
							this.add('-activate', source, 'ability: Justice Power', this.getMove(source.lastMove.id).name);
						}
					}
				}
			},
			id: "justicepower",
			name: "Justice Power",
			rating: 2,
			num: 228
		},
	"cursedtrace": {
		shortDesc: "Traces and nulls the foe's ability.",
		onUpdate: function(pokemon) {
			if (!pokemon.isStarted) return;
			let possibleTargets = [];
			for (let i = 0; i < pokemon.side.foe.active.length; i++) {
				if (pokemon.side.foe.active[i] && !pokemon.side.foe.active[i].fainted) possibleTargets.push(pokemon.side.foe.active[i]);
			}
			while (possibleTargets.length) {
				let rand = 0;
				if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
				let target = possibleTargets[rand];
				let ability = this.getAbility(target.ability);
				let bannedAbilities = {
					adaptableillusion: 1,
					aeroform: 1,
					appropriation: 1,
					battlebond: 1,
					barbstance: 1,
					beastcostume: 1,
					comatose: 1,
					combinationdrive: 1,
					compression: 1,
					coolasice: 1,
					cosmology: 1,
					crystallizedshield: 1,
					cursedcloak: 1,
					cursedtrace: 1,
					desertmirage: 1,
					disguise: 1,
					disguiseburden: 1,
					effectsetter: 1,
					errormacro: 1,
					flowergift: 1,
					forecast: 1,
					foundation: 1,
					geneticalgorithm: 1,
					geologist: 1,
					godoffertility: 1,
					hideandseek: 1,
					illusion: 1,
					imposter: 1,
					justiceillusion: 1,
					magicalwand: 1,
					miraclemorph: 1,
					mirrormirror: 1,
					mitosis: 1,
					monsoon: 1,
					multitype: 1,
					optimize: 1,
					pawprayer: 1,
					powerofalchemy: 1,
					prototype: 1,
					receiver: 1,
					resurrection: 1,
					rhythm: 1,
					rkssystem: 1,
					sandyconstruct: 1,
					schooling: 1,
					shieldsdown: 1,
					sleepingsystem: 1,
					sociallife: 1,
					spiralpower: 1,
					stancechange: 1,
					stanceshield: 1,
					tacticalcomputer: 1,
					techequip: 1,
					technicalsystem: 1,
					troll: 1,
					triagesystem: 1,
					typeillusionist: 1,
					unfriend: 1,
					victorysystem: 1,
					weathercaster: 1,
					weatherfront: 1,
					whatdoesthisdo: 1,
					zenmode: 1
				};
				if (bannedAbilities[target.ability]) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				this.add('-ability', pokemon, ability, '[from] ability: Cursed Trace', '[of] ' + target);
				if (pokemon.setAbility(ability)) target.addVolatile('gastroacid');
				return;
			}
		},
		id: "cursedtrace",
		name: "Cursed Trace",
	},
	/*"sheerflight": {
		desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed.",
		shortDesc: "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Ground') {
            this.add('-immune', target, '[msg]', '[from] ability: Sheer Flight');
				return null;
			}
		},
		onModifyMove: function(move, pokemon) {
			if (move.secondaries) {
				delete move.secondaries;
				// Actual negation of `AfterMoveSecondary` effects implemented in scripts.js
				pokemon.addVolatile('sheerforce');
			}
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function(basePower, pokemon, target, move) {
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		id: "sheerflight",
		name: "Sheer Flight",
		rating: 4,
		num: 230
	},*/
	"evaporation": {
		shortDesc: "If this Pokemon is hit by a Water-type move, its Fire-type moves have their power increased by 50%; immune to Water-type moves.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Water') {
				move.accuracy = true;
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[msg]', '[from] ability: Flash Fire');
				}
				return null;
			}
		},
		onEnd: function(pokemon) {
			pokemon.removeVolatile('flashfire');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function(target) {
				this.add('-start', target, 'ability: Flash Fire');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function(atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function(atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					return this.chainModify(1.5);
				}
			},
			onEnd: function(target) {
				this.add('-end', target, 'ability: Flash Fire', '[silent]');
			}
		},
		id: "evaporation",
		name: "Evaporation",
	},
	"hardbody": {
		shortDesc: "Stat drops inflicted either by moves, abilities or status are ignored.",
		onBoost: function(boost, target, source, effect) {
			if (boost[i] < 0) {
				delete boost[i];
				showMsg = true;
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Hard Body", "[of] " + target);
		},
		onModifySpe: function(spe, pokemon) {
			if (pokemon.status === 'par') {
				return this.chainModify(2);
			}
		},
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.status === 'brn') {
				return this.chainModify(2);
			}
		},
		id: "hardbody",
		name: "Hard Body",
	},
	"gutbreaker": {
		shortDesc: "Abilities that hinder attacks are nullified and gets attack boosted by 1.5x when burned.",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Gut Breaker');
		},
		stopAttackEvents: true,
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.status === 'brn') {
				return this.chainModify(3);
			}
		},
		id: "gutbreaker",
		name: "Gut Breaker",
	},
	"synchofloat": {
		shortDesc: "Immune to Ground-type moves. Opposing Pokemon's ability is changed to Levitate.",
		onTryHit: function(source, target, move) {
			if (target !== source && move.type === 'Ground') {
			this.add('-immune', source, '[msg]', '[from] ability: Syncho Float');
			let oldAbility = target.setAbility('levitate', target, 'levitate', true);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Levitate', oldAbility, '[of] ' + target);
				}
			return null;
			}
		},
		id: "synchofloat",
		name: "Synchofloat",
	},
	"magicianswand": {
		shortDesc: "Swaps item with target when hit with an Electric-type attack.",
		onHit: function(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				var yourItem = target.takeItem(source);
				var myItem = source.takeItem();
				if (target.item || source.item || (!yourItem && !myItem) || (myItem.onTakeItem && myItem.onTakeItem(myItem, target) === false)) {
					if (yourItem) target.item = yourItem;
					if (myItem) source.item = myItem;
					return false;
				}
				this.add('-activate', source, 'move: Trick', '[of] ' + target);
				if (myItem) {
					target.setItem(myItem);
					this.add('-item', target, myItem, '[from] Trick');
				}
				if (yourItem) {
					source.setItem(yourItem);
					this.add('-item', source, yourItem, '[from] Trick');
				}
			}
		},
		id: "magicianswand",
		name: "Magician's Wand",
	},
	"cleanmatch": {
		shortDesc: "Pokemon not holding an item have their attack and speed increased by 50%. This ability's bonus does not stack with other abilities derived from or named Guts or Unburden.",
		onModifySpe: function(spe, pokemon) {
			if (!pokemon.item) {
				return this.chainModify(1.5);
			}
		},
		onModifyAtk: function(atk, pokemon) {
			if (!pokemon.item) {
				return this.chainModify(1.5);
			}
		},
		id: "cleanmatch",
		name: "Clean Match",
	},
	"positivegrowth": {
		shortDesc: "When this Pokemon's health is low, it gains a 50% boost to its Sp. Atk stat.",
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 3) {
				this.debug('Math surge');
				return this.chainModify(1.5);
			}
		},
		id: "positive growth",
		name: "Positive Growth",
	},
	"errormacro": {
		shortDesc: "Physical moves hit off of special attack, and vice versa for special attacks. Stance change forms remain.",
		getCategory: function(move) {
			move = this.getMove(move);
			if (move.category === 'Status') return 'Status';
			if (move.category === 'Physical') return 'Special';
			return 'Physical';
		},
		onModifyMove: function (move){
			if ((!move.defensiveCategory && move.category === 'Special') || (move.defensiveCategory && move.defensiveCategory === 'Special')) move.defensiveCategory = "Physical";	
			else if ((!move.defensiveCategory && move.category === 'Physical') || (move.defensiveCategory && move.defensiveCategory === 'Physical')) move.defensiveCategory = "Special";
		},
		onBeforeMovePriority: 11,
		onBeforeMove: function(attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Aegiline') return;
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			var targetSpecies = (move.id === 'kingsshield' ? 'Aegiline' : 'Aegiline-Blade');
			if (attacker.template.species !== targetSpecies && attacker.formeChange(targetSpecies)) {
				this.add('-formechange', attacker, targetSpecies);
			}
		},
		id: "errormacro",
		name: "Error Macro",
	},
	"latebloomer": {
		shortDesc: "Has a 30% chance of infatuating the opponent at the end of its turn if it moves last.",
		OnAfterDamagePriority: 8,
		onAfterDamage: function(damage, attacker, defender, move) {
			if (!this.willMove(defender)) {
				if (this.random(10) < 3) {
					defender.addVolatile('attract', attacker);
				}
			}
		},
		id: "latebloomer",
		name: "Late Bloomer",
	},
	"tangledflames": {
		shortDesc: "This pokemon's fire attacks are boosted 2x when confused. Fire Immunity.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				move.accuracy = true;
					this.add('-immune', target, '[msg]', '[from] ability: Tangled Flames');
				return null;
			}
		},
			onModifyAtkPriority: 5,
			onModifyAtk: function(atk, attacker, defender, move) {
				if (move.type === 'Fire' || attacker && attacker.volatiles['confusion']) {
					return this.chainModify(2);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function(atk, attacker, defender, move) {
				if (move.type === 'Fire' || attacker && attacker.volatiles['confusion']) {
					return this.chainModify(2);
				}
		},
		id: "tangledflames",
		name: "Tangled Flames",
	},
	"breaker": {
		shortDesc: "This pokemon's attacks aren't hindered by stat boosts, drops or abilities.",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Mold Breaker');
		},
		stopAttackEvents: true,
		onBoost: function(boost, target, source, effect) {
			for (var i in boost) {
				if (boost[i] < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Breaker", "[of] " + target);
		},
		onAnyModifyBoost: function(boosts, target) {
			var source = this.effectData.target;
			if (source === target) return;
			if (source === this.activePokemon && target === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (target === this.activePokemon && source === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		id: "breaker",
		name: "Breaker",
	},
	"hammerspace": {
		shortDesc: "If its item is used or lost during battle, the item will regenerate after it switches out.",
		onSwitchOut: function(pokemon) {
			pokemon.setItem(pokemon.lastItem);
			this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Hammer Space');
		},
		id: "hammer space",
		name: "Hammer Space",
	},
	"underpressure": {
		shortDesc: "This Pokemon's status is cured at the end of each turn, but it uses 2 PP every time it attacks.",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			if (pokemon.status) {
				this.debug('under pressure');
				this.add('-activate', pokemon, 'ability: Under Pressure');
				pokemon.cureStatus();
			}
		},
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Under Pressure');
		},
		onDeductPP: function(pokemon) {
			return 1;
		},
		id: "underpressure",
		name: "Under Pressure",
	},
	"naturaleye": {
		shortDesc: "Pidgemie avoids status moves if they're not 100% accurate.",
		onFoeModifyAccuracyPriority: 10,
		onFoeModifyAccuracy: function(accuracy, target, source, move) {
			if (move.category === 'Status' && move.accuracy !== '100') {
				this.debug('Wonder Skin - setting accuracy to 50');
				return 0;
			}
		},
		id: "naturaleye",
		name: "Natural Eye",
	},
	"overwhelmingpresence": {
		shortDesc: "Whenever this poke is on the field, all abilities and items the opponent has is negated.",
		onStart: function(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				this.add('-start', target, 'Embargo');
				target.addVolatile('gastroacid');
			}
		},
		onUpdate: function(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				this.add('-start', target, 'Embargo', '[silent]');
				target.addVolatile('gastroacid');
			}
		},
		id: "overwhelmingpresence",
		name: "Overwhelming Presence",
	},
	"monsoon": {
		desc: "If this Pokemon is a Casting, its type changes to the current weather condition's type, except Sandstorm. In weather, protects from Ground-type moves.",
		shortDesc: "Casting's secondary type changes to the current weather condition's type, except Sandstorm, and it gets protected from Ground-type moves.",
		onUpdate: function(pokemon) {
			if (pokemon.baseTemplate.species !== 'Casting' || pokemon.transformed) return;
			var forme = null;
			switch (this.effectiveWeather()) {
				case 'sunnyday':
				case 'desolateland':
					if (pokemon.template.speciesid !== 'castingsunny') forme = 'Casting-Sunny';
					break;
				case 'raindance':
				case 'primordialsea':
					if (pokemon.template.speciesid !== 'castingrainy') forme = 'Casting-Rainy';
					break;
				case 'hail':
					if (pokemon.template.speciesid !== 'castingsnowy') forme = 'Casting-Snowy';
					break;
				default:
					if (pokemon.template.speciesid !== 'casting') forme = 'Casting';
					break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme);
				this.add('-formechange', pokemon, forme, '[msg]');
			}
		},
         onTryHit: function(target, source, move) {
			if (target !== source && target.template.speciesid !== 'casting' && move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Monsoon');
				return null;
			}
		},
		id: "monsoon",
		name: "Monsoon",
	},
	"monsoonaltered": {
		desc: "If this Pokemon is a Casting, its type changes to the current weather condition's type, except Sandstorm.",
		shortDesc: "Casting's secondary type changes to the current weather condition's type, except Sandstorm.",
		onUpdate: function(pokemon) {
			if (pokemon.baseTemplate.species !== 'Casting' || pokemon.transformed) return;
			var forme = null;
			switch (this.effectiveWeather()) {
				case 'sunnyday':
				case 'desolateland':
					if (pokemon.template.speciesid !== 'castingsunny') forme = 'Casting-Sunny';
					break;
				case 'raindance':
				case 'primordialsea':
					if (pokemon.template.speciesid !== 'castingrainy') forme = 'Casting-Rainy';
					break;
				case 'hail':
					if (pokemon.template.speciesid !== 'castingicy') forme = 'Casting-Icy';
					break;
				default:
					if (pokemon.template.speciesid !== 'casting') forme = 'Casting';
					break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme);
				this.add('-formechange', pokemon, forme, '[msg]');
			}
		},
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Monsoon Altered');
				return null;
			}
		},
		id: "monsoonaltered",
		name: "Monsoon-Altered",
	},
	"justifiedfire": {
		shortDesc: "Raises user's Special Attack when hit with a Fire-type attack. Grants immunity to Fire.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({
						spa: 1
					})) {
					this.add('-immune', target, '[msg]', '[from] ability: Justified Fire');
				}
				return null;
			}
		},
		onAnyRedirectTarget: function(target, source, source2, move) {
			if (move.type !== 'Fire' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (this.validTarget(this.effectData.target, source, move.target)) {
				if (this.effectData.target !== target) {
					this.add('-activate', this.effectData.target, 'ability: Justified Fire');
				}
				return this.effectData.target;
			}
		},
		id: "justifiedfire",
		name: "Justified Fire",
	},
	"sturdytempo": {
		desc: "Sturdy + Own Tempo.",
		shortDesc: "Sturdy + Own Tempo",
		onTryHit: function(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy Tempo');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onUpdate: function(pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Sturdy Tempo');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile: function(status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit: function(target, source, move) {
			if (move && move.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Sturdy Tempo');
			}
		},
		id: "sturdytempo",
		name: "Sturdy Tempo",
	},
	"hydrostream": {
		shortDesc: "On switch-in, this Pokemon summons Rain Dance.",
		onStart: function(source) {
			for (let i = 0; i < this.queue.length; i++) {
				if (this.queue[i].choice === 'runPrimal' && this.queue[i].pokemon === source && source.template.speciesid === 'kyogre') return;
				if (this.queue[i].choice !== 'runSwitch' && this.queue[i].choice !== 'runPrimal') break;
			}
			this.setWeather('raindance');
		},
		id: "hydrostream",
		name: "Hydro Stream",
	},
	"hydrate": {
		desc: "This Pokemon's Normal-type moves become Water-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Water type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Water';
				move.hydrateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, pokemon, target, move) {
			if (move.hydrateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "hydrate",
		name: "Hydrate",
	},
	"leafstream": {
		shortDesc: "On switch-in, this Pokemon summons Sunny Day.",
		onStart: function(source) {
			for (let i = 0; i < this.queue.length; i++) {
				if (this.queue[i].choice === 'runPrimal' && this.queue[i].pokemon === source && source.template.speciesid === 'groudon') return;
				if (this.queue[i].choice !== 'runSwitch' && this.queue[i].choice !== 'runPrimal') break;
			}
			this.setWeather('sunnyday');
		},
		id: "leafstream",
		name: "Leaf Stream",
	},
	"cybercriminal": {
		desc: "This Pokemon's Special Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Special Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
		onSourceFaint: function(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({
					spa: 1
				}, source);
			}
		},
		id: "cybercriminal",
		name: "Cyber Criminal",
	},
	"cleartempo": {
		shortDesc: "Immune to stat drops and confusion.",
		onUpdate: function(pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Clear Tempo');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile: function(status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit: function(target, source, move) {
			if (move && move.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Clear Tempo');
			}
		},
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				if (boost[i] < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Clear Tempo", "[of] " + target);
		},
		id: "cleartempo",
		name: "Clear Tempo",
	},
	"sandyeyes": {
		desc: "In Sand, Accuracy is upped by one third, immunity to sand damage.",
		shortDesc: "x1.33 Accuracy in Sand.",
		onSourceModifyAccuracy: function(accuracy) {
			if (this.isWeather('sandstorm')) {
				if (typeof accuracy !== 'number') return;
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.debug('Sandy Eyes - enhancing accuracy');
					return accuracy * 1.333333;
				} else {
					this.debug('Inverted Sandy Eyes - reducing accuracy');
					return accuracy * 0.75;
				}
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandyeyes",
		name: "Sandy Eyes",
	},
	"sharparmor": {
		shortDesc: "Atk is raised by 2 when hit by a Water-type move and lowered by 2 when hit by a Fire-type; gives immunity to Water-type moves.",
		onAfterDamage: function (damage, target, source, effect) {
			if (effect && effect.type === 'Fire') {
				this.boost({atk: -2});
			}
		},
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({atk: 2})) {
					this.add('-immune', target, '[msg]', '[from] ability: Sharp Armor');
				}
				return null;
			}
		},
		id: "sharparmor",
		name: "Sharp Armor",
	},
	"dreamcrusher": {
		shortDesc: "The user deals 2x damage to sleeping targets.",
		onModifyDamage: function(damage, source, pokemon, move) {
			for (const target of pokemon.side.foe.active) {
			if (!target || !target.hp) continue;
			if (target.status && target.status == 'slp') {
				this.debug('Dream Crusher boost');
				return this.chainModify(2);
			}
			}
		},
		id: "dreamcrusher",
		name: "Dream Crusher",
	},
	"desertsnow": {
		desc: "This pokemon's Ground/Rock/Steel/Ice attacks do 1.3x in Sandstorm and Hail, opposing attacks of those types heal by 1/16 under the same weather conditions.",
		shortDesc: "This pokemon's Ground/Rock/Steel/Ice attacks do 1.3x in Sandstorm and Hail, opposing attacks of those types heal by 1/16 under the same weather conditions.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (this.isWeather(['hail', 'solarsnow'])) {
				if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel' || move.type === 'Ice') {
					this.debug('Desert Snow boost');
					return this.chainModify(1.3);
				}
			}
		},
		onTryHit: function(target, source, move) {
			if (this.isWeather(['hail', 'solarsnow'])) {
				if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel' || move.type === 'Ice') {
					if (!this.heal(target.maxhp / 16)) {
						this.add('-immune', target, '[msg]', '[from] ability: Desert Snow');
					}
				}
				return null;
			}
		},
		id: "desertsnow",
		name: "Desert Snow",
	},
	"magicbreak": {
		shortDesc: "This Pokemon's attacks ignore the effects of the opponent's items.",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Magic Break');
		},
		onModifyMove: function(move) {
			move.ignoreItem = true;
		},
		id: "magicbreak",
		name: "Magic Break",
	},
	"raptorhead": {
		desc: "Prevents recoil damage and Attack reduction.",
		shortDesc: "Prevents recoil damage and Attack reduction.",
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle') return null;
		},
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost['atk'] && boost['atk'] < 0) {
				delete boost['atk'];
				if (!effect.secondaries) this.add("-fail", target, "unboost", "Attack", "[from] ability: Raptor Head", "[of] " + target);
			}
		},
		id: "raptorhead",
		name: "Raptor Head",
	},
	"steadfastluck": {
		shortDesc: "When this Fusion Evolution flinches, its speed and critical hit ratio are raised by 1 stage.",
		onFlinch: function(pokemon) {
			this.boost({
				spe: 1,
				critRatio: 1,
			});
		},
		id: "steadfastluck",
		name: "Steadfast Luck",
	},
	"thunderousembers": {
		desc: "Raises Special Attack by 1.5x when hit by a fire attack move; immunity to fire attacks.",
		shortDesc: "Raises Special Attack by 1.5x when hit by a fire attack move; immunity to fire attacks.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({
						spa: 1
					})) {
					this.add('-immune', target, '[msg]', '[from] ability: Thunderous Embers');
				}
				return null;
			}
		},
		onAnyRedirectTarget: function(target, source, source2, move) {
			if (move.type !== 'Fire' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (this.validTarget(this.effectData.target, source, move.target)) {
				if (this.effectData.target !== target) {
					this.add('-activate', this.effectData.target, 'ability: Thunderous Embers');
				}
				return this.effectData.target;
			}
		},
		id: "thunderousembers",
		name: "Thunderous Embers",
	},
	"torrentialvoltage": {
		desc: "Electric immunity, and when hit by an Electric-type move, this Pokemon's Electric moves gain a 50% power boost.",
		shortDesc: "Electric immunity, and when hit by an Electric-type move, this Pokemon's Electric moves gain a 50% power boost.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				move.accuracy = true;
				if (!target.addVolatile('torrentialvoltage')) {
					this.add('-immune', target, '[msg]', '[from] ability: Torrential Voltage');
				}
				return null;
			}
		},
		onEnd: function(pokemon) {
			pokemon.removeVolatile('torrentialvoltage');
		},
		effect: {
			noCopy: true,
			onStart: function(target) {
				this.add('-start', target, 'ability: Torrential Voltage');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function(atk, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('Torrential Voltage boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function(atk, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('Torrential Voltage boost');
					return this.chainModify(1.5);
				}
			},
			onEnd: function(target) {
				this.add('-end', target, 'ability: Torrential Voltage', '[silent]');
			},
		},
		id: "torrentialvoltage",
		name: "Torrential Voltage",
	},
	"seamonster": {
		desc: "Lowers opponent's attack one stage upon switching in. Water-type attacks are boosted 10%.",
		shortDesc: "Lowers opponent's attack one stage upon switching in. Water-type attacks are boosted 10%.",
		onStart: function(pokemon) {
			let foeactive = pokemon.side.foe.active;
			let activated = false;
			for (let i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Sea Monster', 'boost');
					activated = true;
				}
				if (foeactive[i].volatiles['substitute']) {
					this.add('-immune', foeactive[i], '[msg]');
				} else {
					this.boost({
						atk: -1
					}, foeactive[i], pokemon);
				}
			}
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Water') {
				return this.chainModify(1.1);
			}
		},
		id: "seamonster",
		name: "Sea Monster",
	},
	"sereneeyes": {
		shortDesc: "Moves with secondary effect chances have their accuracy doubled.",
		onModifyMovePriority: -2,
		onModifyMove: function(move) {
			if (move.secondaries) {
				return move.accuracy * 2;
			}
		},
		id: "sereneeyes",
		name: "Serene Eyes",
	},
	"fromashes": {
		desc: "If the Pokémon is burned, it will gain 1/8 of its maximum HP at the end of each turn instead of taking damage. The Pokémon with this Ability does not lose Attack due to burn.",
		shortDesc: "If the Pokémon is burned, it will gain 1/8 of its maximum HP at the end of each turn instead of taking damage. The Pokémon with this Ability does not lose Attack due to burn.",
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'brn') {
				this.heal(target.maxhp / 8);
				return false;
			}
		},
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.status === 'brn') {
				return this.chainModify(1);
			}
		},
		id: "fromashes",
		name: "From Ashes",
	},
	"sturdytech": {
		shortDesc: "Sturdy + Technician",
		onTryHit: function(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		id: "sturdytech",
		name: "Sturdy Tech",
	},
	"armoredguts": {
		shortDesc: "When statused, this Pokemon gains a 1.5x Attack Boost and it cannot be struck by Critical hits.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		onCriticalHit: false,
		id: "armoredguts",
		name: "Armored Guts",
	},
	"shakeitoff": {
		shortDesc: "Boosts the Special Attack stat by two stages when statused.",
	    onSetStatus: function (status, target, source, effect) {
			if (!effect || !status) return false;
			this.boost({spa: 2});
		},
		id: "shakeitoff",
		name: "Shake it Off",
	},
	"prankstar": {
		shortDesc: "This pokemon's moves of 70% accuracy or less have +1 Priority.",
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move.accuracy <= 70) return priority + 1;
		},
		id: "prankstar",
		name: "Prankstar",
	},
	"sturdyfire": {
		shortDesc: "Sturdy + Flash Fire",
		onTryHit: function(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				move.accuracy = true;
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[msg]', '[from] ability: Flash Fire');
				}
				return null;
			}
		},
		onEnd: function(pokemon) {
			pokemon.removeVolatile('flashfire');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function(target) {
				this.add('-start', target, 'ability: Flash Fire');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function(atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function(atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onEnd: function(target) {
				this.add('-end', target, 'ability: Flash Fire', '[silent]');
			},
		},
		id: "sturdyfire",
		name: "Sturdy Fire",
	},
	"kindle": {
		shortDesc: "During hail or sun, this Pokemon's Special Attack is 1.5x and recovers 1/16 HP every turn. Stacks when both are active.",
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (this.isWeather(['sunnday', 'desolateland', 'hail'])) {
				this.debug('Blaze boost');
				if (attacker.volatiles['atmosphericperversion'] == attacker.volatiles['weatherbreak']){
					return this.chainModify(1.5);
				} else {
					return this.chainModify(0.6666667);
				}
			} else if (this.isWeather(['solarsnow'])) {
				this.debug('Blaze boost');
				if (attacker.volatiles['atmosphericperversion'] == attacker.volatiles['weatherbreak']){
					return this.chainModify(2.25);
				} else {
					return this.chainModify(0.44444);
				}
			}
		},
		onWeather: function(target, source, effect) {
			if (effect.id === 'hail' || effect.id === 'sunnyday' || effect.id === 'desolatelland') {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.heal(target.maxhp / 16, target, target);
				} else {
					this.damage(target.maxhp / 16, target, target);
				}
			} else if (effect.id === 'solarsnow') {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.heal(target.maxhp / 8, target, target);
				} else {
					this.damage(target.maxhp / 8, target, target);
				}
			}
		},
		id: "kindle",
		name: "Kindle",
	},
	"durablebarbs": {
		shortDesc: "Sturdy + Iron Barbs",
		onTryHit: function(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onAfterDamageOrder: 1,
		onAfterDamage: function(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.maxhp / 8, source, target);
			}
		},
		id: "durablebarbs",
		name: "Durable Barbs",
	},
	"rapidgrowth": {
		shortDesc: "Grass-type moves have their priority increased by 1.",
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move && move.type === 'Grass') return priority + 1;
		},
		id: "rapidgrowth",
		name: "Rapid Growth",
	},
	"amazingbulk": {
		shortDesc: "This Pokemon receives 1/2 damage from supereffective attacks.",
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Filter neutralize');
				return this.chainModify(0.5);
			}
		},
		id: "amazingbulk",
		name: "Amazing Bulk",
	},
	"chargedup": {
		shortDesc: "Users Special Attack is doubled.",
		onModifySpAPriority: 5,
		onModifySpA: function(atk) {
			return this.chainModify(2);
		},
		id: "chargedup",
		name: "Charged Up",
	},
	"khanqueror": {
		desc: "Ignores type immunities while attacking, be it through abilities or type matchups.",
		shortDesc: "Ignores type immunities while attacking",
		onModifyMovePriority: -5,
		onModifyMove: function(move) {
			move.ignoreAbility = true;
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity = true;
			}
		},
		id: "khanqueror",
		name: "Khanqueror",
	},
	"synchrostall": {
		shortDesc: "On switch-in, this Pokemon summons Trick Room.",
		onStart: function(source) {
			this.useMove('Trick Room', source);
		},
		id: "Synchrostall",
		name: "Synchrostall",
	},
	"permafrost": {
		shortDesc: "Immune to Fire and Ground.",
		onTryHit: function(target, source, move) {
			if (target !== source && (move.type === 'Ground' || move.type === 'Fire')) {
				this.add('-immune', target, '[msg]', '[from] ability: Permafrost');
				return null;
			}
		},
		id: "permafrost",
		name: "Permafrost",
	},
	"heavyarmor": {
		shortDesc: "If a physical attack hits this Pokemon, defense is raised by 1, speed is lowered by 1.",
		onAfterDamage: function(damage, target, source, move) {
			if (move.category === 'Physical') {
				this.boost({
					def: 1,
					spe: -1
				}, target, target);
			}
		},
		id: "heavyarmor",
		name: "Heavy Armor",
	},
		"negativebody": {
		desc: "On switch-in, this Pokemon resets the stats of adjacent opposing Pokemon by 1 stage.",
		shortDesc: "On switch-in, this Pokemon resets the stats of adjacent opponents by 1 stage.",
		onStart: function (pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Negative Body', 'boost');
					activated = true;
				}
				target.clearBoosts();
			}
		},
		id: "negativebody",
		name: "Negative Body",
	},
	"stunningbug": {
		shortDesc: "Bug-type moves have their priority increased by 1.",
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move && move.type === 'Bug') return priority + 1;
		},
		id: "stunningbug",
		name: "Stunning Bug",
	},
	"champion": {
		shortDesc: "User's Attack is 1.5x.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk) {
			return this.chainModify(1.5);
		},
		id: "champion",
		name: "Champion",
	},
	'venomstream': {
		shortDesc: "Uses Toxic Spikes on switch in",
		onStartPriority: -1,
		onStart: function(source) {
			this.useMove('Toxic Spikes', source);
		},
		id: "venomstream",
		name: "Venom Stream",
	},
	"sunaura": {
		shortDesc: "Powers up each Pokemon's Fire-type moves by 33%.",
		onBasePowerPriority: 8,
		onBasePower: function(type, attacker, defender, move) {
			if (type === 'Fire') {
				return this.chainModify(1.3);
			}
		},
		id: "sunaura",
		name: "Sun Aura",
	},
	"tropicalstorm": {
		shortDesc: "Tailwind on switch in",
		onStart: function(source) {
			this.useMove('Tailwind', source);
		},
		id: "tropicalstorm",
		name: "Tropical Storm",
	},
	"flamedrive": {
		shortDesc: "If this Pokemon is struck by a Fire type move, its speed is raised by one stage. Fire type immunity.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				this.add('-immune', target, '[msg]', '[from] ability: Flame Drive');
				return null;
			}
		},
		onModifySpe: function(spe, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(1.5);
			}
		},
		id: "flamedrive",
		name: "Flame Drive",
	},
		'boosttrace': {
		shortDesc: "Copies opponent's stat boosts (not drops) on switch in.",
		onStart: function(pokemon) {
			let possibleTargets = pokemon.side.foe.active.filter(foeActive => foeActive && this.isAdjacent(pokemon, foeActive));
			while (possibleTargets.length) {
				let rand = 0;
                                let buffed = false;
				if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
				let target = possibleTargets[rand];
				for (let i in target.boosts) {
                                  if (target.boosts[i] > 0){
				    source.boosts[i] = target.boosts[i];
                                    buffed = true;
                                  }
			        }
				if (!buffed) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				return;
			}
		},
		id: "boosttrace",
		name: "Boost Trace",
	},
	"masochist": {
		shortDesc: "This Pokemon's Atk & Defense are raised by 1 stage after it is damaged by a move.",
		onAfterDamage: function(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && effect.id !== 'confused') {
				this.boost({
					def: 1,
					atk: 1
				});
			}
		},
		id: "masochist",
		name: "Masochist",
	},
	'flamingpresence': {
		shortDesc: "Upon switching in, this pokemon burns all opposing pokemon that can be burned.",
		onStart: function(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				if (!target.status) {
				target.trySetStatus('brn', pokemon);
			}
			}
		},
		id: "flamingpresence",
		name: "Flaming Presence",
	},
	"kaleidocope": {
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Filter neutralize');
				return this.chainModify(0.5);
			}
		},
		onModifyDamage: function(damage, source, target, move) {
			if (move.typeMod < 0) {
				return this.chainModify(2);
			}
		},
		id: "kaleidocope",
		name: "Kaleidocope",
	},
	"hazmatfur": {
		shortDesc: "This Pokemon takes 1/2 damage from contact and Fire moves.",
		onSourceModifyDamage: function(damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire') mod /= 2;
			if (move.flags['contact']) mod /= 2;
			return this.chainModify(mod);
		},
		id: "hazmatfur",
		name: "Hazmat Fur",
	},
	"indulgence": {
		shortDesc: "This Pokemon's healing moves have their priority increased by 3.",
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move && move.category === 'Status' || move && move.flags['heal']) return priority + 3;
		},
		onModifyMove: function(move) {
			if (move && move.category === 'Status') {}
		},
		id: "indulgence",
		name: "Indulgence",
	},
	"determination": {
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack or Special Attack stat stages.",
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			if (boost['atk'] && boost['atk'] < 0) {
				delete boost['atk'];
				showMsg = true;
			}
			if (boost['spa'] && boost['spa'] < 0) {
				delete boost['spa'];
				showMsg = true;			
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Determination", "[of] " + target);

		},
		id: "determination",
		name: "Determination",
	},
	"outrageous": {
		shortDesc: "This Pokemon's SpA is 1.5x as long as it is confused.",
		onModifySpA: function(spa, target) {
			if (target && target.volatiles['confusion']) {
				return spa * 1.5;
				this.add('-ability', target, 'Outrageous');
			}
		},
		id: "outrageous",
		name: "Outrageous",
	},
	"woodhead": {
		shortDesc: "This Pokémon does not take recoil damage; when this Pokémon's HP are under 33%, the power of recoil moves is raised by 50%.",
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle') return null;
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		id: "woodhead",
		name: "Wood Head",
	},
	"blazerush": {
		shortDesc: "The Pokémon's Speed is doubled when its HP falls below 1/3 of the maximum.",
		onModifySpe: function(spe, attacker) {
			if (attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(2);
			}
		},
		id: "blazerush",
		name: "Blaze Rush",
	},
	"swiftretreat": {
		shortDesc: "This Pokemon's speed is doubled until its HP falls below 50%, then it switches out.",
		onModifySpe: function(spe, attacker) {
			if (attacker.hp > attacker.maxhp / 2) {
				return this.chainModify(2);
			}
		},
		onAfterMoveSecondary: function(target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			if (target.hp <= target.maxhp / 2 && target.hp + move.totalDamage > target.maxhp / 2) {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
				target.switchFlag = true;
				source.switchFlag = false;
				this.add('-activate', target, 'ability: Emergency Exit');
			}
		},
		onAfterDamage: function(damage, target, source, effect) {
			if (!target.hp || effect.effectType === 'Move') return;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
				target.switchFlag = true;
				this.add('-activate', target, 'ability: Emergency Exit');
			}
		},
		id: "swiftretreat",
		name: "Swift Retreat",
	},
	"championsspirit": {
		shortDesc: "This Pokemon's Atk & Defense are raised by 1 stage after it is damaged by a move.",
		onAfterDamage: function(damage, target, source, effect, move) {
			if (effect && effect.effectType === 'Move' && effect.id !== 'confused' && !move.crit) {
				this.boost({
					def: 1,
					atk: 1
				});
			}
		},
		onHit: function(target, source, move) {
			if (!target.hp) return;
			if (move && move.effectType === 'Move' && move.crit) {
				target.setBoost({
					atk: 3,
					def: 3
				});
				this.add('-setboost', target, 'atk', 12, '[from] ability: Champions Spirit');
			}
		},
		id: "championsspirit",
		name: "Champions Spirit",
	},
	"Beasts Focus": {
		shortDesc: "If Pokémon would be flinched, buffs highest non-HP stat instead.",
		onFlinch: function(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({
					[stat]: 1
				}, source);
			}
		},
		id: "beastsfocus",
		name: "Beasts Focus",
	},
	"volttorrent": {
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Electric attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Electric' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Electric' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		id: "volttorrent",
		name: "Volt Torrent",
	},
	"ancientmariner": {
		shortDesc: "Steelworker + No Guard.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		onAnyAccuracy: function(accuracy, target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target)) {
				return true;
			}
			return accuracy;
		},
		id: "ancientmariner",
		name: "Ancient Mariner",
	},
	"monkeyseemonkeydo": {
		shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",
		onUpdate: function(pokemon) {
			if (!pokemon.isStarted) return;
			let possibleTargets = pokemon.side.foe.active.filter(foeActive => foeActive && this.isAdjacent(pokemon, foeActive));
			while (possibleTargets.length) {
				let rand = 0;
				if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
				let target = possibleTargets[rand];
				let ability = this.getAbility(target.ability);
				let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'zenmode'];
				if (bannedAbilities.includes(target.ability)) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				this.add('-ability', pokemon, ability, '[from] ability: Monkey See Monkey Do', '[of] ' + target);
				pokemon.setAbility(ability);
				return;
			}
		},
		id: "monkeyseemonkeydo",
		name: "Monkey See Monkey Do",
	},
	"overwhelming": {
		shortDesc: "This Pokemon's moves ignore the immunities of the target. To any pokemon which resist the typing of this Pokemon's attack this Pokemon deals doubled damage.",
		onModifyMovePriority: -5,
		onModifyMove: function(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity = true;
			}
		},
		onModifyDamage: function(damage, source, target, move) {
			if (move.typeMod < 0) {
				return this.chainModify(2);
			}
		},
		id: "overwhelming",
		name: "Overwhelming",
	},
	"pixielure": {
		shortDesc: "Prevents Fairy-types from switching out.",
		onFoeTrapPokemon: function (pokemon) {
			if (pokemon.hasType('Fairy') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function (pokemon, source) {
			if (!source) source = this.effectData.target;
			if ((!pokemon.knownType || pokemon.hasType('Fairy')) && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		id: "pixielure",
		name: "Pixie Lure",
	},
	"flowerpower": {
		shortDesc: "Increases Attack and Special Defense by 1.5x, no ifs or buts about it.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			return this.chainModify(1.5);
		},
		onModifyDefPriority: 5,
		onModifyDef: function(def, pokemon) {
			return this.chainModify(1.5);
		},
		isUnbreakable: true,
		id: "flowerpower",
		name: "Flower Power",
	},
	"guerillawarfare": {
		shortDesc: "Attacks with 60 BP or less get a 50% power boost and have the added effect of causing the user to switch out.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				return this.chainModify(1.5);
			}
		},
		onModifyMove: function(move) {
			if (move.basePower <= 60) {
				move.selfSwitch = true;
			}
		},
		id: "guerillawarfare",
		name: "Guerilla Warfare",
	},
	"lightspeed": {
		shortDesc: "This Pokemon's Speed is doubled.",
		onModifySpe: function(spe, pokemon) {
			return this.chainModify(2);
		},
		id: "lightspeed",
		name: "Light Speed",
	},
	"highstakes": {
		desc: "The Attack of this Pokemon is boosted by x2.5, at the cost of losing 25% percent accuracy on Physical moves.",
		shortDesc: "This Pokemon has x2.5 Attack, but x0.75 Accuracy.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk) {
			return this.modify(atk, 2.5);
		},
		onModifyMovePriority: -1,
		onModifyMove: function(move) {
			if (move.category === 'Physical' && typeof move.accuracy === 'number') {
				move.accuracy *= 0.75;
			}
		},
		id: "highstakes",
		name: "High Stakes",
	},
	"fearshield": {
		shortDesc: "Immune to Ghost, Dark, and Bug-type moves.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Bug' || move.type === 'Dark' || move.type === 'Ghost') {
				this.add('-immune', target, '[msg]', '[from] ability: Fear Shield');
				return null;
			}
		},
		id: "fearshield",
		name: "Fear Shield",
	},
	"puffycloud": {
		shortDesc: "Negates weather effects. Powers up physical attacks by a factor of 1.5 while any weather is in play.",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Puffy Cloud');
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(pokemon, atk) {
			if (this.isWeather(['sunnyday', 'desolateland', 'hail', 'raindance', 'primordialsea', 'sandstream', 'shadowdance', 'solarsnow', 'deltastream']) && pokemon.useItem()) {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					return this.chainModify(0.66667);
				} else {
					return this.chainModify(1.5);
				}
			}
		},
		suppressWeather: true,
		id: "puffycloud",
		name: "Puffy Cloud",
	},
	"tinkering": {
		shortDesc: "This Pokemon's status moves and moves that switch the user out have +1 priority. This Pokemon heals status conditions upon switching out.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Status' || move.selfSwitch) {
				return priority + 1;
			}
		},
		onSwitchOut: function(pokemon) {
			pokemon.cureStatus();
		},
		id: "tinkering",
		name: "Tinkering",
	},
	"bamboozled": {
		shortDesc: "Immune to status moves. Status moves used by this fusion have +1 priority.",
		onImmunity: function(pokemon, move) {
			if (move.category === 'Status') return false;
		},
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				return priority + 1;
			}
		},
		onModifyMove: function(move) {
			if (move && move.category === 'Status') {}
		},
		id: "bamboozled",
		name: "Bamboozled",
	},
	"electronrain": {
		shortDesc: "Sp. Atk under Rain is 1.5x. Summons Rain upon switching in.",
		onStart: function(source) {
			for (let i = 0; i < this.queue.length; i++) {
				if (this.queue[i].choice === 'runPrimal' && this.queue[i].pokemon === source && source.template.speciesid === 'kyogre') return;
				if (this.queue[i].choice !== 'runSwitch' && this.queue[i].choice !== 'runPrimal') break;
			}
			this.setWeather('raindance');
		},
		onModifySpAPriority: 5,
		onModifySpA: function(spa, pokemon) {
			if (this.isWeather(['rainyday', 'primordialsea'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(1.5);
				} 	else {
					return this.chainModify(0.66667);
				}
			}
		},
		id: "electronrain",
		name: "Electron Rain",
	},
	'prestidigitation': {
		shortDesc: "Switches item on switch in",
		onStart: function(source) {
			this.useMove('Switcheroo', source);
		},
		id: "prestidigitation",
		name: "Prestidigitation",
	},
	"revvedup": {
		shortDesc: "Users Speed is double upon switch-in.",
		onModifySpe: function(spe) {
			return this.chainModify(2);
		},
		id: "revvedup",
		name: "Revved Up",
	},
	"mistysupercharge": {
		desc: "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Normal' || move.type === 'Electric' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fairy';
				move.mistysuperchargeBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, pokemon, target, move) {
			if (move.mistysuperchargeBoosted) return this.chainModify(1.3);
		},
		onStart: function(source) {
			this.setTerrain('mistyterrain');
		},
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fairy' && this.isTerrain('mistyterrain')) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fairy' && this.isTerrain('mistyterrain')) {
				return this.chainModify(1.5);
			}
		},
		id: "mistysupercharge",
		name: "Misty Supercharge",
	},
	"grassworker": {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Grass-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				return this.chainModify(1.5);
			}
		},
		id: "grassworker",
		name: "Grassworker",
	},
	"bubbleslip": {
		shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved.",
		onModifyAtkPriority: 5,
		onSourceModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onUpdate: function(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Bubble');
				pokemon.cureStatus();
			}
		},
		onSetStatus: function(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[msg]', '[from] ability: Water Bubble');
			return false;
		},
		onModifyMove: function(move) {
			if (move.type === 'Water') {
				move.selfSwitch = true;
			}
		},
		id: "bubbleslip",
		name: "Bubble Slip",
	},
	"operationovergrow": {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.75 while using a Grass-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				return this.chainModify(1.75);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				return this.chainModify(1.75);
			}
		},
		id: "operationovergrow",
		name: "Operation: Overgrow",
	},
	"lightningfist": {
		shortDesc: "This Pokemon's punch-based attacks have their priorities increased by 1.",
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move.flags['punch']) return priority + 1;
		},
		id: "lightningfist",
		name: "Lightning Fist",
	},
	"flarewings": {
		shortDesc: "While Burned, holder's Speed is doubled; immune to Burn damage.",
		onModifySpe: function(spe, pokemon) {
			if (pokemon.status === 'brn') {
				return this.chainModify(2);
			}
		},
		onDamagePriority: 1,
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'brn') {
				return false;
			}
		},
		id: "flarewings",
		name: "Flare Wings",
	},
	"peckingorder": {
		desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
		onStart: function(pokemon) {
			let foeactive = pokemon.side.foe.active;
			let activated = false;
			for (let i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Pecking Order', 'boost');
					activated = true;
				}
				if (foeactive[i].volatiles['substitute']) {
					this.add('-immune', foeactive[i], '[msg]');
				} else {
					this.boost({
						def: -1
					}, foeactive[i], pokemon);
				}
			}
		},
		id: "peckingorder",
		name: "Pecking Order",
	},
	"hydrodynamic": {
		shortDesc: "Aloha's Speed increases by one stage at the end of every turn, prevents opponent's moves and abilities from decreasing this Pokémon's Speed stat.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({
					spe: 1
				});
			}
		},
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost['atk'] && boost['atk'] < 0) {
				delete boost['spe'];
				if (!effect.secondaries) this.add("-fail", target, "unboost", "Attack", "[from] ability: Hydrodynamic", "[of] " + target);
			}
		},
		id: "hydrodynamic",
		name: "Hydrodynamic",
	},
	"engineer": {
		shortDesc: "60 or lower BP moves inflict 1.5x damage and ignore opponent's ability.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		onModifyMove: function(move) {
			if (move.basePower <= 60) {
				move.ignoreAbility = true;
			}
		},
		id: "engineer",
		name: "Engineer",
	},
	"soulpower": {
		shortDesc: "Doubles the user's Special Attack stat.",
		onModifySpAPriority: 5,
		onModifySpA: function(atk, pokemon) {
			return this.chainModify(2);
		},
		id: "soulpower",
		name: "Soul Power",
	},
	"landsshield": {
		shortDesc: "Halves damage taken if either at full health or hit Super Effectively, both stack.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				return this.chainModify(0.5);
			}
			if (move.typeMod > 0) {
				return this.chainModify(0.5);
			}
		},
		id: "landsshield",
		name: "Land's Shield",
	},
	"godlikepowers": {
		shortDesc: "This Pokemon's Attack is doubled.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk) {
			return this.chainModify(2);
		},
		onModifySpAPriority: 5,
		onModifySpA: function(spa) {
			return this.chainModify(2);
		},
		onModifyDefPriority: 5,
		onModifyDef: function(def) {
			return this.chainModify(2);
		},
		onModifySpDPriority: 5,
		onModifySpD: function(spd) {
			return this.chainModify(2);
		},
		onModifySpe: function(spe) {
			return this.chainModify(2);
		},
		id: "godlikepowers",
		name: "Godlike Powers",
	},
	"softenup": {
		shortDesc: "On switch-in, the foe's Attack and Special Attack are lowered by one stage. When this Pokémon knocks out an opponent, its Attack and Special Attack are raised by one stage.",
		onStart: function(pokemon) {
			let foeactive = pokemon.side.foe.active;
			let activated = false;
			for (let i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Soften Up', 'boost');
					activated = true;
				}
				if (foeactive[i].volatiles['substitute']) {
					this.add('-immune', foeactive[i], '[msg]');
				} else {
					this.boost({
						atk: -1,
						spa: -1
					}, foeactive[i], pokemon);
				}
			}
		},
		onSourceFaint: function(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({
					atk: 1,
					spa: 1
				}, source);
			}
		},
		id: "softenup",
		name: "Soften Up",
	},
	"mistymind": {
		desc: "This Pokemon ignores other Pokemon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon's Defense, Special Defense, and evasiveness stat stages when dealing damage.",
		shortDesc: "This Pokemon ignores other Pokemon's stat stages when taking or doing damage.",
		id: "mistymind",
		name: "Misty Mind",
		onSetStatus: function(status, target, source, effect) {
			if (effect && effect.status) {
				this.add('-activate', target, 'move: Misty Mind');
			}
			return false;
		},
		onAnyModifyBoost: function(boosts, target) {
			let source = this.effectData.target;
			if (source === target) return;
			if (source === this.activePokemon && target === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (target === this.activePokemon && source === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
	},
	"unstablevoltage": {
		shortDesc: "Attacks that either target this Pokémon or are used by it have perfect accuracy. Ignores abilities when attacking and attacked.",
		onAnyAccuracy: function(accuracy, target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target)) {
				return true;
			}
			return accuracy;
		},
          onFoeBeforeMove: function(pokemon, target) {
			  let allActives = pokemon.side.active.concat(pokemon.side.foe.active);
			for (const target of allActives) {
			  if (target !== pokemon) {
          pokemon.addVolatile('teraarmor');
			  }
		  	}
			 },
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Unstable Voltage');
		},
		onModifyMove: function(move) {
			move.ignoreAbility = true;
		},
		id: "unstablevoltage",
		name: "Unstable Voltage",
	},
	"hugebubble": {
		shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved. When it has 1/3 or less of its max HP, its Water power is 3x instead of 2x.",
		onModifyAtkPriority: 5,
		onSourceModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			} else if (move.type === 'Water' & attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(3);
			}
		},
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			} else if (move.type === 'Water' & attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(3);
			}
		},
		onUpdate: function(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Huge Bubble');
				pokemon.cureStatus();
			}
		},
		onSetStatus: function(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[msg]', '[from] ability: Water Bubble');
			return false;
		},
		id: "hugebubble",
		name: "Huge Bubble",
	},
	"ambition": {
		shortDesc: "This Pokemon's moves ignore screens, Aurora Veil, Substitutes, Mist, Safeguard, accuracy drops, and evasion boosts.",
		onModifyMove: function(move) {
			move.infiltrates = true;
		},
		onModifyMove: function(move) {
			move.ignoreEvasion = true;
		},
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost['accuracy'] && boost['accuracy'] < 0) {
				delete boost['accuracy'];
				if (!effect.secondaries) this.add("-fail", target, "unboost", "accuracy", "[from] ability: Ambition", "[of] " + target);
			}
		},
		id: "ambition",
		name: "Ambition",
	},
	"poweroftwo": {
		shortDesc: "This Pokemon's Attack and Speed are doubled under rain.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			if (this.isWeather(['raindance', 'primordialsea'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			}
		},
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather(['raindance', 'primordialsea'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			}
		},
		id: "poweroftwo",
		name: "Power of Two",
	},
	"chlorocoat": {
		shortDesc: "This Pokemon's Speed and Defense are doubled.",
		onModifyDefPriority: 5,
		onModifyDef: function(def) {
			return this.chainModify(2);
		},
		onModifySpe: function(spe) {
			return this.chainModify(2);
		},
		id: "chlorocoat",
		name: "Chlorocoat",
	},
	"photosynthesissurge": {
		shortDesc: "On switch-in, this Pokemon summons Sun + Grassy Terrain.",
		onStart: function(source) {
			this.setTerrain('grassyterrain');
			for (let i = 0; i < this.queue.length; i++) {
				if (this.queue[i].choice === 'runPrimal' && this.queue[i].pokemon === source && source.template.speciesid === 'groudon') return;
				if (this.queue[i].choice !== 'runSwitch' && this.queue[i].choice !== 'runPrimal') break;
			}
			this.setWeather('sunnyday');
		},
		id: "photosynthesissurge",
		name: "Photosynthesis Surge",
	},
	"blacksmith": {
		shortDesc: "Traps in Fire and Steel types, and absorbs moves of these typed to get a boost on it's Fire-Type attacks.",
		onFoeTrapPokemon: function(pokemon) {
			if (pokemon.hasType('Steel') || pokemon.hasType('Fire') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function(pokemon, source) {
			if (!source) source = this.effectData.target;
			if ((!pokemon.knownType || pokemon.hasType('Steel') || pokemon.hasType('Fire')) && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire' || move.type === 'Steel') {
				move.accuracy = true;
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Blacksmith');
					target.addVolatile('flashfire');
				}
				return null;
			}
		},
		onEnd: function(pokemon) {
			pokemon.removeVolatile('flashfire');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function(target) {
				this.add('-start', target, 'ability: Blacksmith');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function(atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function(atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					return this.chainModify(1.5);
				}
			},
			onEnd: function(target) {
				this.add('-end', target, 'ability: Blacksmith', '[silent]');
			},
		},
		id: "blacksmith",
		name: "Blacksmith",
	},
	"magicalice": {
		shortDesc: "This Pokemon cannot have stats lowered, nor can it be confused.",
		onBoost: function (boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Magical Ice", "[of] " + target);
		},
		onUpdate: function (pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Magical Ice');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile: function (status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit: function (target, source, move) {
			if (move && move.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Magical Ice');
			}
		},
		id: "magicalice",
		name: "Magical Ice",
	},
	"codeunknown": {
		desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
		onStart: function(pokemon) {
			let foeactive = pokemon.side.foe.active;
			let activated = false;
			for (let i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Code Unknown', 'boost');
					activated = true;
				}
				if (foeactive[i].volatiles['substitute']) {
					this.add('-immune', foeactive[i], '[msg]');
				} else {
					this.boost({
						atk: -1,
						spa: -1
					}, foeactive[i], pokemon);
				}
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(spa, pokemon) {
			let allyActive = pokemon.side.active;
			if (allyActive.length === 1) {
				return;
			}
			for (let i = 0; i < allyActive.length; i++) {
				if (allyActive[i] && allyActive[i].position !== pokemon.position && !allyActive[i].fainted && allyActive[i].hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		id: "codeunknown",
		name: "Code Unknown",
	},
	"thermophilic": {
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Fire moves; Fire immunity. It also heals 1/8 of its max HP every turn in Sun.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Thermophilic');
				}
				return null;
			}
		},
		onWeather: function(target, source, effect) {
			if (effect.id === 'sunnyday' || effect.id === 'desolateland' || effect.id === 'solarsnow') {
			if (effect.id === 'hail' || effect.id === 'solarsnow') {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					this.heal(target.maxhp / 8);
				} else {
					this.damage(target.maxhp / 8, target, target);
				}
			}
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'solarsnow') return false;
		},
		id: "thermophilic",
		name: "Thermophilic",
	},
	"planinaction": {
		shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Plan In Action');
			this.boost({
				atk: 1
			});
		},
		onAnyBasePower: function(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Dark' || move.auraBoost) return;
			move.auraBoost = move.hasAuraBreak ? 0x0C00 : 0x1547;
			return this.chainModify([move.auraBoost, 0x1000]);
		},
		id: "planinaction",
		name: "Plan In Action",
	},
	"enchantedskull": {
		shortDesc: "This Pokemon's attacks with recoil damage have 1.5x power and the recoil damage is nullified.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle') return null;
		},
		id: "enchantedskull",
		name: "Enchanted Skull",
	},
	"thunderstormsurge": {
		shortDesc: "On switch-in, this Pokemon summons Rain + Electric Terrain.",
		onStart: function(source) {
			this.setTerrain('electricterrain');
			for (let i = 0; i < this.queue.length; i++) {
				if (this.queue[i].choice === 'runPrimal' && this.queue[i].pokemon === source && source.template.speciesid === 'kyogre') return;
				if (this.queue[i].choice !== 'runSwitch' && this.queue[i].choice !== 'runPrimal') break;
			}
			this.setWeather('raindance');
		},
		id: "thunderstormsurge",
		name: "Thunderstorm Surge",
	},
	"movemadness": {
		shortDesc: "This Pokemon's moves of the following types change types and get a 1.5x power boost: Normal type moves become Ground type, Ground type moves become Electric type, Electric type moves become Steel type, -Steel type moves become Rock type and Rock type moves become Normal type.",
		onModifyMovePriority: -1,
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Ground';
				move.madnessBoosted = true;
			} else if (move.type === 'Ground' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Electric';
				move.madnessBoosted = true;
			} else if (move.type === 'Electric' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Steel';
				move.madnessBoosted = true;
			} else if (move.type === 'Steel' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Rock';
				move.madnessBoosted = true;
			} else if (move.type === 'Rock' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Normal';
				move.madnessBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, pokemon, target, move) {
			if (move.madnessBoosted) return this.chainModify(1.5);
		},
		id: "movemadness",
		name: "Move Madness",
	},
	"lightarmor": {
		shortDesc: "Boosts defense by 1.5x when over 1/3 HP. Doubles speed when under 1/3 HP.",
		onModifyDefPriority: 5,
		onModifyDef: function(def, pokemon) {
			if (pokemon.hp > pokemon.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpe: function(spe, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 3) {
				return this.chainModify(2);
			}
		},
		id: "lightarmor",
		name: "Light Armor",
	},
	"cleanaura": {
		shortDesc: "This Pokemon is immune to major status conditions.",
		onSetStatus: function(status, target, source, effect) {
			if (effect && effect.status) {
				this.add('-activate', target, 'move: Clean Aura');
			}
			return false;
		},
		id: "cleanaura",
		name: "Clean Aura",
	},
	"brainfreezesurge": {
		shortDesc: "On switch-in, this Pokemon summons Hail + Psychic Terrain.",
		onStart: function(source) {
			this.setTerrain('psychicterrain');
			for (let i = 0; i < this.queue.length; i++) {
				if (this.queue[i].choice === 'runPrimal' && this.queue[i].pokemon === source && source.template.speciesid === 'kyogre') return;
				if (this.queue[i].choice !== 'runSwitch' && this.queue[i].choice !== 'runPrimal') break;
			}
			this.setWeather('hail');
		},
		id: "brainfreezesurge",
		name: "Brainfreeze Surge",
	},
	"fattrap": {
		shortDesc: "Traps Pokémon of the Fire, Ice or Steel types and takes half damage from moves of those types.",
		onFoeTrapPokemon: function(pokemon) {
			if (pokemon.hasType('Steel') || pokemon.hasType('Fire') || pokemon.hasType('Ice') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function(pokemon, source) {
			if (!source) source = this.effectData.target;
			if ((!pokemon.knownType || pokemon.hasType('Steel') || pokemon.hasType('Fire') || pokemon.hasType('Ice')) && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		onSourceModifyDamage: function(damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire' || move.type === 'Steel' || move.type === 'Ice') mod /= 2;
			return this.chainModify(mod);
		},
		id: "fattrap",
		name: "Fat Trap",
	},
	"authority": {
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move && move.category === 'Physical') {
				return priority + 1;
			}
		},
		onModifyMove: function(move) {
			if (move && move.category === 'Physical') {
				move.pranksterBoosted = true;
			}
		},
		id: "authority",
		name: "Authority",
	},
	"firebgone": {
		shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.5x power; Fire Immunity.",
		onModifyMovePriority: -1,
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Fire' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fairy';
				move.bgoneBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, pokemon, target, move) {
			if (move.bgoneBoosted) return this.chainModify(1.5);
		},
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				this.add('-immune', target, '[msg]', '[from] ability: Fire-B-Gone');
				return null;
			}
		},
		id: "firebgone",
		name: "Fire-B-Gone",
	},
	"lethalleafage": {
		shortDesc: "This Pokemon's contact and Grass-type moves are boost 1.3x. These boosts stack.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.flags['contact'] != (move.type === 'Grass')) {
				return this.chainModify(1.3);
			} else if (move.flags['contact'] && move.type === 'Grass') {
				return this.chainModify(1.69);
			}
		},
		id: "lethalleafage",
		name: "Lethal Leafage",
	},
	"sandmistsurge": {
		shortDesc: "On switch-in, this Pokemon summons Sandstorm + Misty Terrain.",
		onStart: function(source) {
			this.setTerrain('mistyterrain');
			for (let i = 0; i < this.queue.length; i++) {
				if (this.queue[i].choice === 'runPrimal' && this.queue[i].pokemon === source && source.template.speciesid === 'groudon') return;
				if (this.queue[i].choice !== 'runSwitch' && this.queue[i].choice !== 'runPrimal') break;
			}
			this.setWeather('sandstream');
		},
		id: "sandmistsurge",
		name: "Sandmist Surge",
	},
	"compactboost": {
		desc: "Upon knocking out a foe, boost Defense by two stages and highest non-Hp non-Defense stat by one stage.",
		shortDesc: "If it lands a KO, +2 to Defense and +1 to other most proficient stat.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat && source.stats[i] !== source.getStat('def', true, true)) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1, def: 2}, source);
			}
		},
		id: "compactboost",
		name: "Compact Boost",
	},
	"meteorshower": {
		shortDesc: "This Pokemon's Normal-type moves become Rock-type and have 1.5x power. All Rock-type Pokemon on the field have +50% Special Defense.",
		onModifyMovePriority: -1,
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Rock';
				move.meteorshowerBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, pokemon, target, move) {
			if (move.meteorshowerBoosted) return this.chainModify(1.5);
		},
		onModifySpDPriority: 4,
		onModifySpD: function(spd, pokemon) {
			if (pokemon.type === 'Rock') {
				return this.chainModify(1.5);
			}
		},
		id: "meteorshower",
		name: "Meteor Shower",
	},
	"blackhole": {
		shortDesc: "This Pokemon receives 1/2 damage from supereffective attacks. Immune to burn.",
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.typeMod > 0) {
				return this.chainModify(0.5);
			}
		},
		onSetStatus: function(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[msg]', '[from] ability: Black Hole');
			return false;
		},
		isUnbreakable: true,
		id: "blackhole",
		name: "Black Hole",
	},
	"gracefulanalyst": {
		shortDesc: "60% power boosting Analytic + Serene Grace",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, pokemon) {
			let boosted = true;
			let allActives = pokemon.side.active.concat(pokemon.side.foe.active);
			for (const target of allActives) {
				if (target === pokemon) continue;
				if (this.willMove(target)) {
					boosted = false;
					break;
				}
			}
			if (boosted) {
				return this.chainModify(1.6);
			}
		},
		onModifyMovePriority: -2,
		onModifyMove: function(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					// @ts-ignore
					secondary.chance *= 2;
				}
			}
		},
		id: "gracefulanalyst",
		name: "Graceful Analyst",
	},
	"underwaterscreen": {
		shortDesc: "While this Pokemon is active, Water and Rock-Type Pokemon Special Defense is boosted by 50%. Raises the power of Water and Rock-type moves by 50% when at 1/2 HP or less.",
		onModifySpDPriority: 4,
		onModifySpD: function(spd, pokemon) {
			if (pokemon.type === 'Rock' || pokemon.type === 'Water') {
				return this.chainModify(1.5);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Rock' && attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Rock' && attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		id: "underwaterscreen",
		name: "Underwater Screen",
	},
	"mountainclimber": {
		shortDesc: "Speed under Hail or Sand is 4x, immunity to both.",
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather('hail') || this.isWeather('sandstorm') || this.isWeather('solarsnow')) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(4);
				} 	else {
					return this.chainModify(0.25);
				}
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail' || type === 'sandstorm' || type === 'solarsnow') return false;
		},
		id: "mountainclimber",
		name: "Mountain Climber",
	},
	"dukeofthelightning": {
		shortDesc: "This Pokemon's Speed is doubled.",
		onModifySpe: function(spe) {
			return this.chainModify(2);
		},
		id: "dukeofthelightning",
		name: "Duke of the Lightning",
	},
	"emperorofthefire": {
		shortDesc: "This Pokemon's Attack is doubled.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk) {
			return this.chainModify(2);
		},
		id: "emperorofthefire",
		name: "Emperor of the Fire",
	},
	"overloadedhelm": {
		shortDesc: "This Pokemon's Steel and Normal-type attacks have their power multiplied 1.5x and turns them into Electric moves.",
		onModifyMovePriority: -1,
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Steel' || move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Electric';
				move.overloadedhelmBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, pokemon, target, move) {
			if (move.overloadedhelmBoosted) return this.chainModify(1.5);
		},
		id: "overloadedhelm",
		name: "Overloaded Helm",
	},
	"unrivaledclaws": {
		shortDesc: "This Pokemon's contact moves have their power multiplied by 1.67.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.flags['contact']) {
				return this.chainModify(1.67);
			}
		},
		id: "unrivaledclaws",
		name: "Unrivaled Claws",
	},
	"ouroboros": {
		shortDesc: "Upon scoring a KO or switching out, the user regains 1/3 max HP.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.heal(source.maxhp / 3);
			}
		},
		onSwitchOut: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 3);
		},
		id: "ouroboros",
		name: "Ouroboros",
	},
	"braveheart": {
		desc: "This Pokemon takes 0.75x damage from super effective moves (2x effective -> 1.5x) and has its Attack raised by 2 stages whenever it's hit by a super effective move.",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and sharply raises its Attack when hit by one.",
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.typeMod > 0) {
				return this.chainModify(0.75);
			}
		},
		onHit: function(target, source, move) {
			if (move.typeMod > 0) {
				target.setBoost({
					atk: 2
				});
				this.add('-setboost', target, 'atk', 4, '[from] ability: Braveheart');
			}
		},
		id: "braveheart",
		name: "Braveheart",
	},
	"darklight": {
		shortDesc: "Provides immunity to super effective attacks and heals 25% of its health instead. This Ability cannot be ignored.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.typeMod > 0) {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Dark Light');
				}
				return null;
			}
		},
		onDamage: function (damage, target, source, move) {
			if (move.typeMod > 0) {
				this.add('-immune', target, '[msg]', '[from] ability: Dark Light');
				return null;
			}
		},
		isUnbreakable: true,
		id: "darklight",
		name: "Dark Light",
	},
	"ancientfoliage": {
		shortDesc: "While this Pokemon is active, Grass and Rock-Type Pokemon Special Defense is boosted by 50%. Raises the power of Grass and Rock-type moves by 50% when at 1/2 HP or less.",
		onAnyModifySpDPriority: 4,
		onAnyModifySpD: function(spd, pokemon) {
			if (pokemon.hasType('Rock') || pokemon.hasType('Grass')) {
				return this.chainModify(1.5);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Rock' && attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Rock' && attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		id: "ancientfoliage",
		name: "Ancient Foliage",
	},
	"prodigy": {
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 2.25. Does affect Struggle.",
		shortDesc: "This Pokemon's moves of 60 power or less have 2.25x power. Includes Struggle.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				return this.chainModify(2.25);
			}
		},
		id: "prodigy",
		name: "Prodigy",
	},
	"toothick": {
		shortDesc: "This Pokemon takes half the damage from physical attacks.",
		onModifyDefPriority: 6,
		onModifyDef: function(def, move) {
			if (move.category === 'Physical') {
				return this.chainModify(2);
			}
		},
		id: "toothick",
		name: "Too Thick",
	},
	"techfur": {
		shortDesc: "This Pokemon's moves of 60 power or less, including Struggle, have 2x power. Defense is doubled.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				return this.chainModify(2);
			}
		},
		onModifyDefPriority: 6,
		onModifyDef: function (def) {
			return this.chainModify(2);
		},
		id: "techfur",
		name: "Tech Fur",
	},
	"soundsoul": {
		shortDesc: "Attack is raised by 1 stage when hit by sound-based moves. Receives no damage from sound-based moves.",
		onImmunity: function(move, pokemon) {
			if (move.flags['sound']) return false;
		},
		onHit: function(target, source, move) {
			if (!target.hp) return;
			if (move && move.effectType === 'Move' && move.flags['sound']) {
				target.setBoost({
					atk: 1
				});
				this.add('-setboost', target, 'atk', 1, '[from] ability: Anger Point');
			}
		},
		id: "soundsoul",
		name: "Sound Soul",
	},
	"phasethrough": {
		shortDesc: "Frisk + Natural Care",
		onStart: function(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				if (target.item) {
					this.add('-item', target, target.getItem().name, '[from] ability: Phase Through', '[of] ' + pokemon, '[identify]');
				}
			}
		},
		onCheckShow: function(pokemon) {
			// This is complicated
			// For the most part, in-game, it's obvious whether or not Natural Cure activated,
			// since you can see how many of your opponent's pokemon are statused.
			// The only ambiguous situation happens in Doubles/Triples, where multiple pokemon
			// that could have Natural Cure switch out, but only some of them get cured.
			if (pokemon.side.active.length === 1) return;
			if (pokemon.showCure === true || pokemon.showCure === false) return;
			let cureList = [];
			let noCureCount = 0;
			for (const curPoke of pokemon.side.active) {
				// pokemon not statused
				if (!curPoke || !curPoke.status) {
					// this.add('-message', "" + curPoke + " skipped: not statused or doesn't exist");
					continue;
				}
				if (curPoke.showCure) {
					// this.add('-message', "" + curPoke + " skipped: Natural Cure already known");
					continue;
				}
				let template = this.getTemplate(curPoke.species);
				// pokemon can't get Natural Cure
				if (Object.values(template.abilities).indexOf('Natural Cure') < 0) {
					// this.add('-message', "" + curPoke + " skipped: no Natural Cure");
					continue;
				}
				// pokemon's ability is known to be Natural Cure
				if (!template.abilities['1'] && !template.abilities['H']) {
					// this.add('-message', "" + curPoke + " skipped: only one ability");
					continue;
				}
				// pokemon isn't switching this turn
				if (curPoke !== pokemon && !this.willSwitch(curPoke)) {
					// this.add('-message', "" + curPoke + " skipped: not switching");
					continue;
				}
				if (curPoke.hasAbility('naturalcure')) {
					// this.add('-message', "" + curPoke + " confirmed: could be Natural Cure (and is)");
					cureList.push(curPoke);
				} else {
					// this.add('-message', "" + curPoke + " confirmed: could be Natural Cure (but isn't)");
					noCureCount++;
				}
			}
			if (!cureList.length || !noCureCount) {
				// It's possible to know what pokemon were cured
				for (const pokemon of cureList) {
					pokemon.showCure = true;
				}
			} else {
				// It's not possible to know what pokemon were cured
				// Unlike a -hint, this is real information that battlers need, so we use a -message
				this.add('-message', "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");
				for (const pokemon of cureList) {
					pokemon.showCure = false;
				}
			}
		},
		onSwitchOut: function(pokemon) {
			if (!pokemon.status) return;
			// if pokemon.showCure is undefined, it was skipped because its ability
			// is known
			if (pokemon.showCure === undefined) pokemon.showCure = true;
			if (pokemon.showCure) this.add('-curestatus', pokemon, pokemon.status, '[from] ability: Phase Through');
			pokemon.setStatus('');
			// only reset .showCure if it's false
			// (once you know a Pokemon has Natural Cure, its cures are always known)
			if (!pokemon.showCure) delete pokemon.showCure;
		},
		id: "phasethrough",
		name: "Phase Through",
	},
	"lockedshell": {
		shortDesc: "Immune to priority & status moves.",
		onImmunity: function(pokemon, move) {
			if (move.category === 'Status' || move.priority > 0) return false;
		},
		id: "lockedshell",
		name: "Locked Shell",
	},
	"healthymeal": {
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and cannot be inflicted with any major status condition.",
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.typeMod > 0) {
				return this.chainModify(0.75);
			}
		},
		onAllySetStatus: function(status, target, source, effect) {
			if (effect && effect.status) {
				this.add('-activate', target, 'ability: Healthy Meal');
				return false;
			}
		},
		id: "healthymeal",
		name: "Healthy Meal",
	},
	"christmasspirit": {
		shortDesc: "3/4 super-effective damage. Halves damage from Fire and Ice-typed moves. These stack. Cannot be bypassed by Mold Breaker or similar effects.",
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.typeMod > 0) {
				return this.chainModify(0.75);
			}
		},
		onModifyAtkPriority: 6,
		onSourceModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		isUnbreakable: true,
		id: "christmasspirit",
		name: "Christmas Spirit",
	},
	"scrumptious": {
		shortDesc: "If this Pokemon is statused, its Attack & SpA is 1.5x; ignores burn halving physical damage.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		id: "scrumptious",
		name: "Scrumptious",
	},
	"heatseeker": {
		shortDesc: "When this Pokemon is at 33.3% of its health or less, its Speed and the power of its Fire-type moves go up by 1.5x. When in rain, its speed and power of Fire moves is doubled (which essentially means that its Fire-type moves ignore the rain debuff.)",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			let mod = 1;
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
					mod *= 1.5;
			}
			if (this.isWeather(['raindance', 'primordialsea'])) {
				if (attacker.volatiles['atmosphericperversion'] == attacker.volatiles['weatherbreak']){
					mod *= 2;
				} else {
					mod *= 0.5;
				}
			}
			return this.chainModify(mod);
		},
		onModifySpe: function(spe, pokemon) {
			let mod = 1;
			if (pokemon.hp <= pokemon.maxhp / 3) {
					mod *= 1.5;
			}
			if (this.isWeather(['raindance', 'primordialsea'])) {
				if (attacker.volatiles['atmosphericperversion'] == attacker.volatiles['weatherbreak']){
					mod *= 2;
				} else {
					mod *= 0.5;
				}
			}
			return this.chainModify(mod);
		},
		id: "heatseeker",
		name: "Heat Seeker",
	},
	"bingobongo": {
		shortDesc: "Normal and Fighting-type moves have 1.5x power and can hit Ghost-types.",
		onModifyMovePriority: -5,
		onModifyMove: function(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(move) {
			if (move.type === 'Normal' || move.type === 'Fighting') {
				return this.chainModify(1.5);
			}
		},
		id: "bingobongo",
		name: "Bingo Bongo",
	},
	"panicmode": {
		shortDesc: "This Pokemon's moves have +1 priority when this Pokemon is burned, paralyzed, or poisoned. Ignores the burn Attack drop.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (pokemon.status === 'brn' || pokemon.status === 'par' || pokemon.status === 'psn') {
				return priority + 1;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.status === 'brn') {
				return this.chainModify(2);
			}
		},
		id: "panicmode",
		name: "Panic Mode",
	},
	"positivity": {
		shortDesc: "This Pokemon's stat changes are amplified to 3x their normal amount.",
		onBoost: function(boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			for (let i in boost) {
				// @ts-ignore
				boost[i] *= 3;
			}
		},
		id: "positivity",
		name: "Positivity",
	},
	"fisticuffs": {
		shortDesc: "Punching moves get a 50% boost in power. All other contact moves get a 33% boost.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				return this.chainModify(1.5);
			} else if (move.flags['contact'] && !move.flags['punch']) {
				return this.chainModify(1.3);
			}
		},
		id: "fisticuffs",
		name: "Fisticuffst",
	},
	"starburst": {
		shortDesc: "This Pokémon's moves with 60 Base Power or less or that have a secondary effect deal x1.5 damage. Secondary effects are doubled.",
		onModifyMovePriority: -2,
		onModifyMove: function(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					// @ts-ignore
					secondary.chance *= 2;
				}
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (basePower <= 60 || move.secondaries) {
				this.debug('Starburst boost');
				return this.chainModify(1.5);
			}
		},
		id: "starburst",
		name: "Starburst",
	},
	"faefist": {
		shortDesc: "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				return this.chainModify(1.7);
			} else if (move.type === 'Fairy') {
				return this.chainModify(1.2);
			} else if (move.flags['punch'] && move.type === 'Fairy') {
				return this.chainModify(2.04);
			}
		},
		onModifyMove: function(move) {
			if (move.flags['punch']) {
				move.type === 'Fairy'
			}
		},
		id: "faefist",
		name: "Fae Fist",
	},
	"malware": {
		shortDesc: "This Pokemon's Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense at the end of each full turn on the field.",
		onResidual: function (pokemon) {
               	     if (pokemon.activeTurns) {
			let totaldef = 0;
			let totalspd = 0;
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				totaldef += target.getStat('def', false, true);
				totalspd += target.getStat('spd', false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({spa: 1});
			} else if (totalspd >= totaldef) {
				this.boost({atk: 1});
			}
                    }
		},
		id: "malware",
		name: "Malware",
	},
	"nightmarefuel": {
		shortDesc: "Dark-type moves have 1.5x power and have a 33% chance to put the foe to sleep.",
		onModifyMovePriority: -1,
		onModifyMove: function(move) {
			if (move.category !== "Status") {
				move.secondaries.push({
					chance: 33,
					status: 'slp',
				});
			}
		},
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				return this.chainModify(1.5);
			}
		},
		id: "nightmarefuel",
		name: "Nightmare Fuel",
	},
	"snowabsorb": {
		shortDesc: "On switch-in, this Pokemon summons Hail.",
		onStart: function(source) {
			this.setWeather('hail');
		},
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ice') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Snow Absorb');
				}
				return null;
			}
		},
		onWeather: function(target, source, effect) {
			if (effect.id === 'hail') {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					this.heal(target.maxhp / 8);
				} else {
					this.damage(target.maxhp / 8, target, target);
				}
			}
		},
		id: "snowabsorb",
		name: "Snow Absorb",
	},
	"confidenceboost": {
		shortDesc: "All of this {okemon's stats are raised by 1 stage if it attacks and KOes another Pokemon.",
		onSourceFaint: function(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1
				}, source);
			}
		},
		id: "confidenceboost",
		name: "Confidence Boost",
	},
	"blizzardblur": {
		shortDesc: "Summons Hail upon switch-in. This Pokemon's Speed is doubled in and cannot be damaged by hail.",
		onStart: function(source) {
			this.setWeather('hail');
		},
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather(['hail', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail' || type === 'solarsnow') return false;
		},
		id: "blizzardblur",
		name: "Blizzard Blur",
	},
	"frenzy": {
		shortDesc: "This Pokemon's multi-hit attacks always hit the maximum number of times and have 1.5x power.",
		onModifyMove: function(move) {
			if (move.multihit && move.multihit.length) {
				move.multihit = move.multihit[1];
			}
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.multihit) {
				return this.chainModify(1.5);
			}
		},
		id: "frenzy",
		name: "Frenzy",
	},
	"solarpanel": {
		shortDesc: "This Pokemon is immune to Electric, Fire and Grass-type moves. If targetted by one, this Pokemon's Special Attack is raised by one stage, and harsh sunlight appears.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Electric' || move.type === 'Fire' || move.type === 'Grass') {
				this.setWeather('desolateland');
				if (!this.boost({
						spa: 1
					})) {
					this.add('-immune', target, '[msg]', '[from] ability: Solar Panel');
				}
				return null;
			}
		},
		onAnyRedirectTarget: function(target, source, source2, move) {
			if (move.type !== 'Electric' || move.type !== 'Fire' || move.type !== 'Grass' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (this.validTarget(this.effectData.target, source, move.target)) {
				if (this.effectData.target !== target) {
					this.add('-activate', this.effectData.target, 'ability: Solar Panel');
				}
				return this.effectData.target;
			}
		},
		id: "solarpanel",
		name: "Solar Panel",
	},
	"icescale": {
		shortDesc: "Halves damage taken in hail. Takes no damage from Hail.",
		onModifyDefPriority: 6,
		onModifyDef: function(def, pokemon) {
			if (this.isWeather(['hail', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			}
		},
		onModifySpDPriority: 6,
		onModifySpD: function(spd, pokemon) {
			if (this.isWeather(['hail', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail' || type === 'solarsnow') return false;
		},
		id: "icescale",
		name: "Ice Scale",
	},
	"synchscales": {
		shortDesc: "This Pokemon recieves 1/2 damage from attacks if it has a status condition.",
		onModifyDefPriority: 5,
		onModifyDef: function(def, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 5,
		onModifySpD: function(spd, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		id: "synchscales",
		name: "Synch Scales",
	},
	"poisonshield": {
		shortDesc: "Takes 50% damage from attacks when HP is full. If attacked directly when HP is full, the attacker is poisoned.",
		onSourceModifyDamage: function(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				return this.chainModify(0.5);
			}
		},
		onAfterDamage: function(damage, target, source, move) {
			if (move && move.flags['contact'] && !source.status && source.runStatusImmunity('powder') && source.hp >= source.maxhp) {
				source.setStatus('psn', target);
			}
		},
		id: "poisonshield",
		name: "Poison Shield",
	},
	"rebel": {
		shortDesc: "Boosts Attack by one stage upon switch-in and by two stages for every stat drop.",
		onStart: function(pokemon) {
			this.boost({
				atk: 1
			});
		},
		onAfterEachBoost: function(boost, target, source) {
			if (!source || target.side === source.side) {
				return;
			}
			let statsLowered = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({
					atk: 2
				}, target, target, null, true);
			}
		},
		id: "rebel",
		name: "Rebel",
	},
	"fullsteamahead": {
		shortDesc: "Upon entering the field, this Pokémon sets up Rain. This Pokémon heals for 25% of its max HP per turn while Rain is active.",
		onStart: function(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.template.speciesid === 'kyogre') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.setWeather('raindance');
		},
		onWeather: function(target, source, effect) {
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.heal(target.maxhp / 4);
				} else {
					this.damage(target.maxhp / 4, target, target);
				}
			}
		},
		id: "fullsteamahead",
		name: "Full Steam Ahead",
	},
	"juggernaut": {
		shortDesc: "Recoil-inducing moves have the added effect of boosting its Speed one stage when used. Does not take recoil damage.",
		onModifyMovePriority: -1,
		onModifyMove: function(move) {
			if (move.category !== "Status" && move.recoil) {
				move.secondaries.push({
					chance: 100,
					self: {
						boosts: {
							spe: 1,
						}
					}
				});
			}
		},
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		id: "juggernaut",
		name: "Juggernaut",
	},
	"flashweather": { //TODO: Have it do something else when in inverted weather.
		shortDesc: "In Sun, absorbs Fire moves, in Rain Water, in Hail Ice, and in Sand, Rock.",
		onTryHit: function(target, source, move) {
			if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
				if (target !== source && move.type === 'Fire' && this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
					if (!this.heal(target.maxhp / 4)) {
						this.add('-immune', target, '[msg]', '[from] ability: Flash Weather');
					}
					return null;
				} else if (target !== source && move.type === 'Water' && this.isWeather(['raindance', 'primordialsea'])) {
					if (!this.heal(target.maxhp / 4)) {
						this.add('-immune', target, '[msg]', '[from] ability: Flash Weather');
					}
					return null;
				} else if (target !== source && move.type === 'Rock' && this.isWeather(['sandstorm'])) {
					if (!this.heal(target.maxhp / 4)) {
						this.add('-immune', target, '[msg]', '[from] ability: Flash Weather');
					}
					return null;
				} else if (target !== source && move.type === 'Ice' && this.isWeather(['hail', 'solarsnow'])) {
					if (!this.heal(target.maxhp / 4)) {
						this.add('-immune', target, '[msg]', '[from] ability: Flash Weather');
					}
					return null;
				} else if (target !== source && move.type === 'Ghost' && this.isWeather(['shadowdance'])) {
					if (!this.heal(target.maxhp / 4)) {
						this.add('-immune', target, '[msg]', '[from] ability: Flash Weather');
					}
					return null;
				}
			}
		},
		id: "flashweather",
		name: "Flash Weather",
	},
	"clearfocus": {
		shortDesc: "Resets stat drops at the end of each turn (including self-inflicted).",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			let activate = false;
			let boosts = {};
			for (let i in pokemon.boosts) {
				if (pokemon.boosts[i] < 0) {
					activate = true;
					boosts[i] = 0;
				}
			}
			pokemon.setBoost(boosts);
		},
		id: "clearfocus",
		name: "Clear Focus",
	},
	"charmstar": {
		shortDesc: "Moves without a secondary effect have a 20% chance to attract the opponent.",
		onModifyMovePriority: -1,
		onModifyMove: function (move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'attract',
				});
			}
		},
		id: "charmstar",
		name: "Charm Star",
	},
	"magicfat": {
		shortDesc: "Immune to Fire and Ice type moves as long as it holds an item. Halves damage from those moves if it's not holding an item.",
		onTryHit: function(target, source, move) {
			if (target !== source && target.item && move.type === 'Fire' || move.type === 'Ice') {
				this.add('-immune', target, '[msg]', '[from] ability: Magic Fat');
				return null;
			}
		},
		onSourceModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		id: "magicfat",
		name: "Magic Fat",
	},
	"forestfire": {
		shortDesc: "Immunity to fire attacks; when hit by a fire move, the opponent takes 1/16th of their health.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				this.add('-immune', target, '[msg]', '[from] ability: Forest Fire');
				this.damage(source.maxhp / 8, source, source);
				return null;
			}
		},
		id: "forestfire",
		name: "Forest Fire",
	},
	"disconnect": {
		shortDesc: "The foe's same-type attack bonus (STAB) is 0.75 instead of 1.5.",
		onFoeModifyMove: function (move) {
			move.stab = 0.75;
		},
		id: "disconnect",
		name: "Dis/connect",
	},
	"pondscum": {
		shortDesc: "Water-type moves have a 25% chance to flinch the foe.",
		onModifyMovePriority: -1,
		onModifyMove: function(move) {
			if (move.category !== "Status" && move.type === 'Water') {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {}
				move.secondaries.push({
					chance: 25,
					volatileStatus: 'flinch',
				});
			}
		},
		id: "pondscum",
		name: "Pond Scum",
	},
	"compelling": {
		shortDesc: "If this Pokémon's stats are lowered, its Special Attack is raised by 2 stages, and the opponent cannot switch. This ability cannot be triggered by self-inflicted stat drops.",
		onAfterEachBoost: function(boost, target, source) {
			if (!source || target.side === source.side) {
				return;
			}
			let statsLowered = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({
					spa: 2
				}, target, target, null, true);
				source.addVolatile('trapped', source, 'trapper')
			}
		},
		id: "compelling",
		name: "Compelling",
	},
	"stormlauncher": {
		shortDesc: "Boosts launching attacks by 50% in no weather. Doubles their power and doubles the user's speed in rain. Quarters their power and halves the users speed in the sun.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.flags['pulse']) {
				return this.chainModify(1.5);
			} else if (move.flags['pulse'] && this.isWeather(['raindance', 'primordialsea'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.25);
				}
			} else if (move.flags['pulse'] && this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(0.25);
				} 	else {
					return this.chainModify(2);
				}
			}
		},
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather(['raindance', 'primordialsea'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			} else if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(0.5);
				} 	else {
					return this.chainModify(2);
				}
			}
		},
		id: "stormlauncher",
		name: "Storm Launcher",
	},
	"staticswitch": {
		shortDesc: "30% chance to paralyze the opponent whenever the user switches out.",
		onSwitchOut: function(source, target) {
			if (this.randomChance(3, 10)) {
				source.trySetStatus('par', target);
			}
		},
		id: "staticswitch",
		name: "Static Switch",
	},
	"reflex": {
		shortDesc: "Protects the Pokémon from opposing recoil and crash moves.",
		onTryHit: function(pokemon, target, move) {
			if (move.recoil || move.name === 'High Jump Kick' || move.name === 'Jump Kick') {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Reflex');
				return null;
			}
		},
		id: "reflex",
		name: "Reflex",
	},
	"clearpouch": {
		shortDesc: "When this Pokemon consumes a Berry, it regains 33% of its maximum HP and any negative stat changes are removed.",
		onEatItem: function(item, pokemon) {
			this.heal(pokemon.maxhp / 3);
			let boosts = {};
			for (let i in pokemon.boosts) {
				if (pokemon.boosts[i] < 0) {
					boosts[i] = 0;
				}
			}
			pokemon.setBoost(boosts);
			this.add('-clearnegativeboost', pokemon);
		},
		id: "clearpouch",
		name: "Clear Pouch",
	},
	"precision": {
		shortDesc: "Technician + Hustle.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				return this.chainModify(1.5);
				move.technicianBoosted = true;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk) {
			return this.modify(atk, 1.5);
		},
		onModifyMovePriority: -1,
		onModifyMove: function(move) {
			if (move.category === 'Physical' && typeof move.accuracy === 'number') {
				move.accuracy *= 0.8;
			}
		},
		id: "precision",
		name: "Precision",
	},
	"sleepwalker": {
		shortDesc: "When hit by a sleeping move, Speed will increase by 1 stage. Immune to Sleep.",
		onUpdate: function(pokemon) {
			if (pokemon.status === 'slp') {
				this.add('-activate', pokemon, 'ability: Insomnia');
				pokemon.cureStatus();
				this.boost({
					spe: 1
				});
			}
		},
		onSetStatus: function(status, target, source, effect) {
			if (status.id !== 'slp') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[msg]', '[from] ability: Insomnia');
			this.boost({
				spe: 1
			});
			return false;
		},
		id: "sleepwalker",
		name: "Sleepwalker",
	},
	"absolutezero": {
		shortDesc: "Biting and normal-type moves used by this Pokemon are treated as being ice-type in addition to their usual type and receive a 30% power boost.",
		onEffectiveness: function(typeMod, type, move) {
			if (move.flags['bite'] || move.type === 'Normal') {
				return typeMod + this.getEffectiveness('Ice', type);
			}
		},
		id: "absolutezero",
		name: "Absolute Zero",
	},
	"taintedlens": {
		shortDesc: "Not very effective moves will also badly poison the target.",
		onModifyDamage: function(damage, source, target, move) {
			if (move.typeMod < 0) {
				return this.chainModify(2);
				source.setStatus('psn', target);
			}
		},
		id: "taintedlens",
		name: "Tainted Lens",
	},
	"purethug": {
		shortDesc: "This Pokemon cannot be statused. Should this happen, its Attack is boosted.",
		onSetStatus: function(status, target, source, effect) {
			if (status.id === 'slp') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[msg]', '[from] ability: Pure Thug');
			this.boost({
				atk: 1
			});
			return false;
		},
		onUpdate: function(pokemon) {
			if (pokemon.status) {
				this.add('-activate', pokemon, 'ability: Pure Thug');
			        this.boost({
			        	atk: 1
			        });
				pokemon.cureStatus();
			}
		},
		id: "purethug",
		name: "Pure Thug",
	},
	"mysticwave": {
		shortDesc: "Boosts the power of Water-type moves by 50% as long as the user holds an item.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.item) {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.item) {
				return this.chainModify(2);
			}
		},
		id: "mysticwave",
		name: "Mystic Wave",
	},
	"titanicstrength": {
		shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.",
		onAfterUseItem: function (item, pokemon) {
			if (pokemon !== this.effectData.target) return;
			pokemon.addVolatile('titanicstrength');
		},
		onTakeItem: function (item, pokemon) {
			pokemon.addVolatile('titanicstrength');
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('titanicstrength');
		},
		id: "titanicstrength",
		name: "Titanic Strength",
	},
	"hygroscopy": {
		shortDesc: "Upon being hit by a water- or steel-type move, restores 1/4 of this Pokemon's maximum HP. Water- and steel-type opponents cannot switch out while this Pokemon is active.",
		onFoeTrapPokemon: function(pokemon) {
			if (pokemon.hasType('Steel') || pokemon.hasType('Water') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function(pokemon, source) {
			if (!source) source = this.effectData.target;
			if ((!pokemon.knownType || pokemon.hasType('Steel') || pokemon.hasType('Water')) && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Water' || move.type === 'Steel') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Hygroscopy');
				}
				return null;
			}
		},
		id: "hygroscopy",
		name: "Hygroscopy",
	},
	"wonderlust": {
		shortDesc: "This Pokemon is immune to status.",
		onSetStatus: function(status, target, source, effect) {
			if (effect && effect.status) {
				this.add('-immune', target, '[msg]', '[from] ability: Hygroscopy');
			}
			return false;
		},
		id: "wonderlust",
		name: "Wonderlust",
	},
	"prisoncell": {
		shortDesc: "Prevents adjacent Dark-type foes from choosing to switch.",
		onFoeTrapPokemon: function(pokemon) {
			if (pokemon.hasType('Dark') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function(pokemon, source) {
			if (!source) source = this.effectData.target;
			if ((!pokemon.knownType || pokemon.hasType('Dark')) && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		id: "prisoncell",
		name: "Prison Cell",
	},
	"venomglare": {
		shortDesc: "On switch-in, the bearer poisons adjacent opponents.",
		onStart: function(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
			if (!target.status) {
				target.setStatus('psn', pokemon);
			}
			}
		},
		id: "venomglare",
		name: "Venom Glare",
	},
	"terrorize": {
		shortDesc: "On switch-in, the bearer poisons adjacent opponents.",
		onStart: function(target, source) {
			source.addVolatile('gastroacid');
		},
		id: "terrorize",
		name: "Terrorize",
	},
	"clearlevitation": {
		shortDesc: "Immune to Ground-type attacks and non-self inflicted stat drops",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Clear Levitation');
				return null;
			}
		},
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Clear Levitation", "[of] " + target);
		},
		id: "clearlevitation",
		name: "Clear Levitation",
	},
	"grounddrive": {
		shortDesc: "Speed is raised by 1 when hit by a Ground-type move; Ground immunity.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Clear Levitation');
				this.boost({
					atk: 1
				});
				return null;
			}
		},
		id: "grounddrive",
		name: "Ground Drive",
	},
	"topgear": {
		shortDesc: "This Pokemon is immune to electric-type attacks and has its attack raised by one stage if it would be hit by one. This Pokemon's attacks' secondary effects are converted into a 33% power boost.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({
						atk: 1
					})) {
					this.add('-immune', target, '[msg]', '[from] ability: Top Gear');
				}
				return null;
			}
		},
		onModifyMove: function(move, pokemon) {
			if (move.secondaries) {
				delete move.secondaries;
				// Actual negation of `AfterMoveSecondary` effects implemented in scripts.js
				move.hasSheerForce = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, pokemon, target, move) {
			if (move.hasSheerForce) return this.chainModify([0x14CD, 0x1000]);
		},
		id: "topgear",
		name: "Top Gear",
	},
	"surgebloom": {
		shortDesc: "Allied Grass type Pokemon have their Grass STAB increased by x1.5 and their stats can't be lowered..",
		onAllyBoost: function(boost, target, source, effect) {
			if ((source && target === source) || !target.hasType('Grass')) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add('-fail', this.effectData.target, 'unboost', '[from] ability: Surge Bloom', '[of] ' + target);
		},
		onAllySetStatus: function(status, target, source, effect) {
			if (target.hasType('Grass')) {
				if (!effect || !effect.status) return false;
				this.add('-activate', this.effectData.target, 'ability: Surge Bloom', '[of] ' + target);
				return null;
			}
		},
		onAllyModifyMove: function(move, pokemon) {
			if (pokemon.type === 'Grass' || move.type === 'Grass') {
				move.stab = 3;
			}
		},
		id: "surgebloom",
		name: "Surge Bloom",
	},
	'unparalleledtechnique': {
		shortDesc: "This Pokemon imprisons adjacent targets on switch-in.",
		onStart: function(source) {
			this.useMove('Imprison', source);
		},
		id: "unparalleledtechnique",
		name: "Unparalleled Technique",
	},
	'obliterate': {
		shortDesc: "Deletes the opponent's item upon switch-in if it isn't a Mega Stone. The deleted item is treated as if it were knocked off, so Recycle cannot recover it.",
		onStart: function (pokemon) {
			for (const target of pokemon.side.foe.active) {
			if (!target || target.fainted) continue;
			target.takeItem();
			if (target.item) {
			this.add('-enditem', target, 'item', '[from] ability: Obliterate', '[of] ' + target);
				}
			}
		},
		id: "obliterate",
		name: "Obliterate",
	},
	"shaggycoat": {
		shortDesc: "This Pokemon's defense stat is doubled. When at 1/3 HP or lower, this Pokemon's defense stat is tripled.",
		onModifyDefPriority: 6,
		onModifyDef: function(def, pokemon) {
			if (pokemon.hp > pokemon.maxhp / 3) {
				return this.chainModify(2);
			} else if (pokemon.hp <= pokemon.maxhp / 3) {
				return this.chainModify(3);
			}
		},
		id: "shaggycoat",
		name: "Shaggy Coat",
	},
	"clearabsorb": {
		shortDesc: "Whenever this Pokemon's stats would be lowered, its health is restored by up to 25% instead. This does not include self-induced stat drops.",
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					this.heal(target.maxhp / 4);
					this.add('-ability', target, 'Clear Absorb');
				}
			}
		},
		id: "clearabsorb",
		name: "Clear Absorb",
	},
	"evaporate": {
	    shortDesc: "30% chance of healing 1/4 of its max HP instead of taking damage whenever hit by a super-effective attack.",
	    onTryHit: function(target, source, move) {
	        if (this.randomChance(3, 10) && target !== source && move.typeMod > 0) {
	            if (!this.heal(target.maxhp / 4)) {
	                this.add('-immune', target, '[msg]', '[from] ability: Evaporate');
	            }
	            this.add('-ability', target, 'Evaporate');
	            return null;
	        }
	    },
	    id: "evaporate",
	    name: "Evaporate",
	},
	"caestus": {
		shortDesc: "Arm, hand, and punching moves do 20% more damage. Raise this Pokémon's Attack by two stages when this Pokemon’s stats are lowered.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.flags['punch'] || move.name === 'Arm Thrust' || move.name === 'Needle Arm') {
				return this.chainModify(1.2);
			}
		},
		onAfterEachBoost: function (boost, target, source) {
			if (!source || target.side === source.side) {
				return;
			}
			let statsLowered = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({atk: 2}, target, target, null, true);
			}
		},
		id: "caestus",
		name: "Caestus",
	},
	"fusionpowered": {
		shortDesc: "This Pokémon's STAB moves do 3x damage rather than 1.5x, but have 33% recoil. Moves with a recoil element do 1.25x bonus damage.",
		onModifyMove: function(move) {
			move.stab = 2;
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil || attacker.hasType(move.type)) {
				this.debug('Reckless boost');
				return this.chainModify(1.2);
			}
		},
		id: "fusionpowered",
		name: "Fusion Powered",
	},
	"hyperprotection": {
		shortDesc: "This Pokemon is imune to Ground-Type moves. If a move against this Pokémon ended up on a Critical Hit, it won't affect the Pokémon.",
		onTryHit: function(target, source, move) {
			if (move && move.effectType === 'Move' && move.crit || move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Hyper Protection');
				return null;
			}
		},
		id: "hyperprotection",
		name: "Hyper Protection",
	},
	"sandslurp": {
		desc: "Being the target of Ground- and Water-type moves heals this Pokémon for 1/4th of its maximum health. Immunity to Ground- and Water-type moves.",
		shortDesc: "Nullifies Ground- and Water-type damage to heal this Pokémon for 1/4th of its maximum health.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Water' || move.type === 'Ground') {
				if (!this.heal(target.maxhp / 4)){
					this.add('-immune', target, '[msg]', '[from] ability: Sand Slurp');
				}
				return null;
			}
		},
		id: "sandslurp",
		name: "Sand Slurp",
	},
	"sandystorm": {
		shortDesc: "The user summons a sandstorm, and while the user is in a sandstorm, all moves used by all pokemon cost double PP.",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Sandy Storm');
			this.setWeather('sandstorm');
		},
		onDeductPP: function(target, source) {
			if (!this.isWeather('sandstorm')) return;
			return 1;
		},
		id: "sandystorm",
		name: "Sandy Storm",
	},
	"hotairballoon": {
		shortDesc: "Immune to Ground type attacks. If the opponent attempts to use a Ground-type attack on this pokemon, the attacker is burned.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Hot Air Balloon');
				if (move && !source.status) {
					source.setStatus('brn', target);
				}
				return null;
			}
		},
		id: "hotairballoon",
		name: "Hot Air Balloon",
	},
	"fatalgrace": {
		shortDesc: "If those with this ability are poisoned, they recover HP every turn and have secondary effect chances multiplied by 2.5.",
		onDamagePriority: 1,
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.maxhp / 8);
				return false;
			}
		},
		onModifyMovePriority: -2,
		onModifyMove: function(move, pokemon) {
			if (move.secondaries && pokemon.status === 'psn' || pokemon.status === 'tox') {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					// @ts-ignore
					secondary.chance *= 2.5;
				}
			}
		},
		id: "fatalgrace",
		name: "Fatal Grace",
	},
	"meangirl": {
		shortDesc: "Raises Attack by 1 stage whenever a Pokemon of the same gender enters battle. This also triggers when switching in on such a Pokemon.",
		onSwitchIn: function (pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
			if (pokemon.gender && target.gender) {
					this.boost({atk: 1}, pokemon);
			}
			}
		},
		onFoeSwitchIn: function (pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
			if (pokemon.gender && target.gender) {
					this.boost({atk: 1}, pokemon);
			}
			}
		},
		id: "meangirl",
		name: "Mean Girl",
	},
	"serenesurge": {
		shortDesc: "Upon switching in, set Psychic Terrain. During this Psychic Terrain, all affected Pokemon's moves have their secondary effect chances doubled.",
		onStart: function(source) {
			this.setTerrain('psychicterrain');
		},
		onModifyMovePriority: -2,
		onModifyMove: function(move, target, source) {
			if (move.secondaries && this.isTerrain('psychicterrain') && !target.isGrounded() || target.isSemiInvulnerable() || target.side === source.side) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					// @ts-ignore
					secondary.chance *= 2;
				}
			}
		},
		id: "serenesurge",
		name: "Serene Surge",
	},
	"ashestoashes": {
		shortDesc: "When this Pokémon is below 50% health, the Base Power and secondary effect chance of moves with secondary effects are doubled.",
		onModifyMovePriority: -2,
		onModifyMove: function(move, pokemon) {
			if (move.secondaries && pokemon.hp <= pokemon.maxhp / 3) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					// @ts-ignore
					secondary.chance *= 2;
				}
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 3 && move.secondaries) {
				return this.chainModify(2);
			}
		},
		id: "ashestoashes",
		name: "Ashes to Ashes",
	},
	"beastbarbs": {
		shortDesc: "When hit by direct contact,the Pokémon's highest non-HP stat is boosted by one stage.",
		onAfterDamageOrder: 1,
		onAfterDamage: function(damage, target, source, move) {
			if (move && move.flags['contact']) {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in target.stats) {
					if (target.stats[i] > bestStat) {
						stat = i;
						bestStat = target.stats[i];
					}
				}
				this.boost({[stat]: 1}, target);
			}
		},
		id: "beastbarbs",
		name: "Beast Barbs",
	},
	"subdue": {
        shortDesc: "Lowers the opponent's highest stat by one, and boosts that same stat by one on yourself upon switch-in.",
        onStart: function (pokemon) {
            let activated = false;
            for (const target of pokemon.side.foe.active) {
                let stat = 'atk';
                let bestStat = 0;
                for (let i in target.stats) {
                    if (target.stats[i] > bestStat) {
                        stat = i;
                        bestStat = target.stats[i];
                    }
                }
                if (!target || !this.isAdjacent(target, pokemon)) continue;
                if (!activated) {
                   if(pokemon.ability === "subdue") {
 								this.add('-ability', pokemon, 'Subdue', 'boost');
							}
                    activated = true;
                }
                if (target.volatiles['substitute']) {
                    this.add('-immune', target, '[msg]');
                } else {
                    this.boost({[stat]: -1}, target, pokemon);
                    this.boost({[stat]: 1}, pokemon);
                }
            }
        },
        id: "subdue",
        name: "Subdue",
    },
		"sunbath": {
		shortDesc: "Under Sun or Rain, Speed is doubled and regains 1/8 of max health at the end of the turn. Ignores Sun's Water Debuff.",
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather(['raindance', 'primordialsea', 'sunnyday', 'desolateland', 'solarsnow'])) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(0.5);
				}
			}
		},
		onWeather: function(target, source, effect) {
			if (effect.id === 'sunnyday' || effect.id === 'desolateland' || effect.id === 'solarsnow' || effect.id === 'raindance' || effect.id === 'primordialsea') {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.heal(target.maxhp / 8, target, target);
				} 	else {
					this.damage(target.maxhp / 8, target, target);
				}
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Water' && this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				if (attacker.volatiles['atmosphericperversion'] == attacker.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(2 / 3);
				}
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Water' && this.isWeather(['sunnyday', 'desolateland', 'solarsnow'])) {
				if (attacker.volatiles['atmosphericperversion'] == attacker.volatiles['weatherbreak']){
					return this.chainModify(2);
				} 	else {
					return this.chainModify(2 / 3);
				}
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'solarsnow') return false;
		},
		id: "sunbath",
		name: "Sun Bath",
	},
	"pixiegrace": {
		shortDesc: "Normal-Type moves become Fairy, Moves with secondary effects have the chance of the effects happening doubled, and both Normal-Type and Moves with secondary effect gain a 1.2x boost.",
		onModifyMovePriority: -1,
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fairy';
				move.pixilateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, pokemon, target, move) {
			if (move.pixilateBoosted) {
				return this.chainModify([0x1333, 0x1000]);
			} else if (move.secondaries && move.type === 'Fairy' || move.type === 'Normal') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onModifyMovePriority: -2,
		onModifyMove: function(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					// @ts-ignore
					secondary.chance *= 2;
				}
			}
		},
		id: "pixiegrace",
		name: "Pixie Grace",
	},
	"turborise": {
		shortDesc: "User is immune to Ground-type attacks. This immunity cannot be bypassed by Mold Breaker-esque effects.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Water Absorb');
				return null;
			}
		},
		isUnbreakable: true,
		id: "turborise",
		name: "Turborise",
	},
	"queenscommand": {
		shortDesc: "Immune to priority moves. Attack raised by one if hit by one.",
		onFoeTryMove: function(target, source, effect) {
			if ((source.side === this.effectData.target.side || effect.id === 'perishsong') && effect.priority > 0.1 && effect.target !== 'foeSide') {
				this.attrLastMove('[still]');
				this.add('cant', this.effectData.target, 'ability: Queens Command', effect, '[of] ' + target);
				this.boost({atk: 1}, source, target);
				return false;
			}
		},
		id: "queenscommand",
		name: "Queen's Command",
	},
	"soulforgeddiamond": {
		shortDesc: "This Pokemon receives 0.665x damage from supereffective attacks.",
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.typeMod > 0) {
				return this.chainModify(0.665);
			}
		},
		id: "soulforgeddiamond",
		name: "Soulforged Diamond",
	},
	'slowsurge': {
		shortDesc: "Summons Trick Room for 5 turns upon entering the field; if Trick Room is already active when the holder is switched in, it will disappear from the field.",
		onStart: function(source) {
			this.useMove('Trick Room', source);
		},
		id: "slowsurge",
		name: "Slow Surge",
	},
	'petrify': {
		shortDesc: "Prevents all adjacent opponent from using sound-based moves for two turns.",
		onStart: function(pokemon) {
			for (const target of pokemon.side.foe.active) {
			if (!target || target.fainted) continue;
			target.addVolatile('throatchop');
			}
		},
		id: "petrify",
		name: "Petrify",
	},
	"triggered": {
		shortDesc: "Heals 1/4 of its max HP from Psychic-type moves and 1/8 of its max HP in Psychic Terrain; Psychic immunity. Takes 1.25x damage from Dark-type moves.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Psychic') {
					this.heal(target.maxhp / 4)
					this.add('-immune', target, '[msg]', '[from] ability: Triggered');
					return null;
			}
		},
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			if (this.isTerrain('psychicterrain')) {
				this.heal(pokemon.maxhp / 8)
				this.add('-ability', pokemon, 'Triggered');
			}	else if (this.isTerrain('darkterrain')) {
				this.damage(pokemon.maxhp / 8, pokemon, pokemon)
			}
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Dark') return this.chainModify(1.25);
		},
		id: "triggered",
		name: "Triggered",
	},
	"sharpshooter": {
		shortDesc: "This Pokemon's attacks always result in a critical hit, but use 2 PP instead of 1.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Pressure');
		},
		onDeductPP: function (pokemon) {
			return 1;
		},
		onModifyMove: function(move) {
			move.willCrit = true;
		},
		id: "sharpshooter",
		name: "Sharpshooter",
	},
	"rubberup": {
		shortDesc: "When this Pokemon has a stat lowered by the foe, +2 Special Attack. If an opponent faints, the holder gets +1 Special Attack, +2 if the foe had a lowered stat upon death. Multiple stats lowered do not stack.",
		onAfterEachBoost: function (boost, target, source) {
			if (!source || target.side === source.side) {
				return;
			}
			let statsLowered = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({spa: 2}, target, target, null, true);
			}
		},
		onAnyFaint: function (pokemon) {
			let loweredstats = false;
			for (let stat in pokemon.boosts) {
				if (pokemon.boosts[stat] < 0) {
					loweredstats = true;
				}
			}
			if (loweredstats){
				this.boost({spa: 2}, this.effectData.target);
			} else {
				this.boost({spa: 1}, this.effectData.target);
			}
		},
		id: "rubberup",
		name: "Rubber Up",
	},
	"shadowguard": {
		shortDesc: "Immune to attacking moves while at full HP.",
		onTryHit: function (target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			this.debug('Wonder Guard immunity: ' + move.id);
			if (target.hp >= target.maxhp) {
				this.add('-immune', target, '[msg]', '[from] ability: Shadow Guard');
				return null;
			}
		},
		id: "shadowguard",
		name: "Shadow Guard",
	},
	"spiralflames": {
		shortDesc: "Stat boosts and drops are inverted on this Pokémon and ignored on the opponent.",
		onBoost: function (boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			for (let i in boost) {
				// @ts-ignore
				boost[i] *= -1;
			}
		},
		onAnyModifyBoost: function (boosts, target) {
			let source = this.effectData.target;
			if (source === target) return;
			if (source === this.activePokemon && target === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (target === this.activePokemon && source === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		id: "spiralflames",
		name: "Spiral Flames",
	},
	"pixieabsorb": {
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Fairy moves; Fairy immunity.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fairy') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Pixie Absorb');
				}
				return null;
			}
		},
		id: "pixieabsorb",
		name: "Pixie Absorb",
	},
	"peerpressure": {
		shortDesc: "The opponent's highest non-HP stat is halved.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Peer Pressure');
		},
		onFoeModifyAtkPriority: 5,
		onFoeModifyAtk: function(atk, pokemon) {
			let stat = 'atk';
			let bestStat = 0;
			for (let i in pokemon.stats) {
				if (pokemon.stats[i] > bestStat) {
					stat = i;
					bestStat = pokemon.stats[i];
				}
			}
			if (stat === 'atk' && !pokemon.hasAbility('hardbody')) {     
          return this.chainModify(0.5);
			}
		},
		onFoeModifyDefPriority: 6,
		onFoeModifyDef: function(def, pokemon) {
			let stat = 'atk';
			let bestStat = 0;
			for (let i in pokemon.stats) {
				if (pokemon.stats[i] > bestStat) {
					stat = i;
					bestStat = pokemon.stats[i];
				}
			}
			if (stat === 'def' && !pokemon.hasAbility('hardbody')) {
				return this.chainModify(0.5);
			}
		},
		onFoeModifySpAPriority: 5,
		onFoeModifySpA: function(spa, pokemon) {
			let stat = 'atk';
			let bestStat = 0;
			for (let i in pokemon.stats) {
				if (pokemon.stats[i] > bestStat) {
					stat = i;
					bestStat = pokemon.stats[i];
				}
			}
			if (stat === 'spa' && !pokemon.hasAbility('hardbody')) {
				return this.chainModify(0.5);
			}
		},
		onFoeModifySpDPriority: 5,
		onFoeModifySpD: function(spd, pokemon) {
			let stat = 'atk';
			let bestStat = 0;
			for (let i in pokemon.stats) {
				if (pokemon.stats[i] > bestStat) {
					stat = i;
					bestStat = pokemon.stats[i];
				}
			}
			if (stat === 'spd' && !pokemon.hasAbility('hardbody')) {
				return this.chainModify(0.5);
			}
		},
		onFoeModifySpe: function(spe, pokemon) {
			let stat = 'atk';
			let bestStat = 0;
			for (let i in pokemon.stats) {
				if (pokemon.stats[i] > bestStat) {
					stat = i;
					bestStat = pokemon.stats[i];
				}
			}
			if (stat === 'spe' && !pokemon.hasAbility('hardbody')) {
				return this.chainModify(0.5);
            }
		},
		id: "peerpressure",
		name: "Peer Pressure",
	},
	"rhythm": {
		shortDesc: "At the end of every turn, Darmin switches from Darmin-Up to Darmin-Down, or vice versa.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			if (pokemon.name === 'Darmin') {
			this.add('-formechange', pokemon, 'Darmin-Down', '[msg]');
			pokemon.formeChange("Darmin-Down");
			}
			else if (pokemon.name === 'Darmin-Down') {
			this.add('-formechange', pokemon, 'Darmin', '[msg]');
			pokemon.formeChange("Darmin");
			}
		},
		id: "rhythm",
		name: "Rhythm",
	},
	"magicalwand": {
		shortDesc: "Critical hit ratio is raised by one stage. Transforms into Star-Butterfly after it gets a critical hit. In butterfly form, critical hit ratio is raised by two stages.",
		onModifyCritRatio: function(critRatio, pokemon) {
			if (pokemon.template.speciesid === 'starbutterfly') {
				return critRatio + 2;
			} else if (pokemon.baseTemplate.species === 'Star') {
				return critRatio + 1;
			}
		},
		onHit: function(target, source, move) {
			if (!target.hp) return;
			if (target.baseTemplate.baseSpecies === 'Star' && move && move.effectType === 'Move' && move.crit && target.template.speciesid !== 'starbutterfly') {
				this.add('-formechange', target, 'Star-Butterfly', '[msg]');
				target.formeChange("Star-Butterfly");
				this.add('-ability', target, 'Magical Wand');
			}
		},
		id: "magicalwand",
		name: "Magical Wand",
	},
	"medicalexpert": {
		shortDesc: "This Pokemon's moves have 1.3x the power when inflicted with a status condition or when it moves last. These bonuses stack.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.3);
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon) {
			let boosted = true;
			let allActives = pokemon.side.active.concat(pokemon.side.foe.active);
			for (const target of allActives) {
				if (target === pokemon) continue;
				if (this.willMove(target)) {
					boosted = false;
					break;
				}
			}
			if (boosted) {
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		id: "medicalexpert",
		name: "Medical Expert",
	},
	'badinfluence': {
		shortDesc: "When the user switches in, all opponents on the field have their stat changes inverted.",
		onStart: function(source) {
			this.useMove('Topsy-Turvy', source);
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Bad Influence', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target, '[msg]');
				} else {
					for (let i in target.boosts) {
						if (target.boosts[i] === 0) continue;
						target.boosts[i] = -target.boosts[i];
					}
					this.add('-invertboost', target, '[from] ability: Bad Influence');
				}
			}
		},
		id: "badinfluence",
		name: "Bad Influence",
	},
	"scout": {
		shortDesc: "Exits the battle if it senses that the opposing Pokemon has super effective or OHKO moves.",
		onStart: function (pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (target.fainted) continue;
				for (const moveSlot of target.moveSlots) {
					let move = this.getMove(moveSlot.move);
					if (move.category !== 'Status' && (this.getImmunity(move.type, pokemon) && this.getEffectiveness(move.type, pokemon) > 0 || move.ohko)) {
						this.add('-ability', pokemon, 'Scout');
						pokemon.switchFlag = true;
						return;
					}
				}
			}
		},
		id: "scout",
		name: "Scout",
	},
	"rejuvenation": {
		shortDesc: "Every time this Pokemon KOs another Pokemon, it heals 20% of it's HP. If this Pokemon is at full health, it's highest non-HP stat will be increased by 1 stage instead.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move' && source.hp === source.maxhp) {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
			}
			else if (effect && effect.effectType === 'Move') {
				this.heal(source.maxhp / 5);
			}
		},
		id: "rejuvenation",
		name: "Rejuvenation",
	},
	"forcedrain": {
		shortDesc: "While this Pokemon is active, attacks with secondary effects used by adjacent foes have 0.75x power and the secondary effects are nullified.",
		onModifySecondaries: function (secondaries) {
			this.debug('Shield Dust prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		onSourceBasePower: function (basePower, attacker, defender, move) {
			if (move.secondaries) {
				return this.chainModify(0.75);
			}
		},
		id: "forcedrain",
		name: "Force Drain",
	},
		"foundation": {
		shortDesc: "This Pokemon's STAB bonus is 2x rather than 1.5x. When this Pokemon is at or below half of its maximum HP, this Pokemon transforms into Zeeeee-Complete. Zeeeee-Complete's STAB bonus becomes 2.33x rather than 2x.",
			onModifyMove: function (move, pokemon) {
			if (pokemon.baseTemplate.species === 'Zeeeee') {
			move.stab = 2;
			}
			else if (pokemon.template.speciesid === 'zeeeeecomplete') {
			move.stab = 2.33;
			}
		},
		onResidualOrder: 27,
		onResidual: function (pokemon) {
			if (pokemon.baseTemplate.baseSpecies === 'Zeeeee' && pokemon.hp <= pokemon.maxhp / 2 && pokemon.template.speciesid !== 'zeeeeecomplete') {
			this.add('-formechange', pokemon, 'Zeeeee-Complete', '[msg]');
			pokemon.formeChange("Zeeeee-Complete");
			this.add('-ability', pokemon, 'Foundation');
		}
		},
		id: "foundation",
		name: "Foundation",
	},
	"barbsboost": {
		shortDesc: "When defeating an opponent or when touched by a contact move, boost the user's highest non-HP stat by one stage. An attacker loses 1/8 HP when using a contact move on this Pokémon.",
		onAfterDamageOrder: 1,
		onAfterDamage: function (damage, pokemon, source, move) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
			let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
			if (target && target !== source && move && move.flags['contact']) {
				this.damage(target.maxhp / 8, target, source);
				this.boost({[stat]: 1}, source);
			}
			}
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
			}
		},
		id: "barbsboost",
		name: "Barbs Boost",
	},
	'atmosphericpull': {
		shortDesc: "Summons Gravity upon switch-in.",
		onStart: function(source) {
			this.useMove('Gravity', source);
		},
		id: "atmosphericpull",
		name: "Atmospheric Pull",
	},
	"trickyglare": {
		shortDesc: "Status moves have +1 priority. If the opposing Pokemon attempts to use status moves, the move will fail and their attack will drop by 1 stage.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		onTryHit: function (target, source, move) {
			if (target !== source && move.category === 'Status') {
				this.boost({atk: -1}, source, target);
				this.add('-immune', target, '[msg]', '[from] ability: Tricky Glare');
				return null;
			}
		},
		id: "trickyglare",
		name: "Tricky Glare",
	},
	"confiscation": {
		shortDesc: "Any Pokemon that tries to switch out on it will lose its item as a result.",
		onFoeSwitchOut: function (pokemon) {
			pokemon.takeItem();
			if (pokemon.item) {
			this.add('-enditem', pokemon, 'item', '[from] ability: Confiscation', '[of] ' + pokemon);
			}
		},
		onSwitchOut: function (pokemon) {
			pokemon.takeItem();
			if (pokemon.item) {
			this.add('-enditem', pokemon, 'item', '[from] ability: Confiscation', '[of] ' + pokemon);
			}
		},
		id: "confiscation",
		name: "Confiscation",
	},
	"statharvesting": {
		shortDesc: "When this Pokemon uses it's berry, it has a 50% chance to immediately re-gain it's berry. Every time this happens, this Pokemon's highest non-HP stat goes up by 1. The chance goes up to 100% in the sun. Berries cannot be harvested twice in one turn.",
		id: "statharvesting",
		name: "Stat Harvesting",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			let stat = 'atk';
				let bestStat = 0;
				for (let i in pokemon.stats) {
					if (pokemon.stats[i] > bestStat) {
						stat = i;
						bestStat = pokemon.stats[i];
					}
				}
			if (this.randomChance(1, 2)) {
				if (pokemon.hp && !pokemon.item && this.getItem(pokemon.lastItem).isBerry) {
					pokemon.setItem(pokemon.lastItem);
					this.boost({[stat]: 1}, pokemon);
					pokemon.lastItem = '';
					this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Stat Harvesting');
					}
				}
		},
	},
	"familiarmaneuvering": {
		shortDesc: "This Pokemon's STAB moves have +1 priority (including status moves that would be STAB).",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (pokemon.hasType(move.type)) return priority + 1;
		},
		id: "familiarmaneuvering",
		name: "Familiar Maneuvering",
	},
	"powersurge": {
		shortDesc: "Higher crit ratio. Immune to Electric-type moves. When hit by one, next attack is a guaranteed crit.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Electric') {
					this.add('-immune', target, '[msg]', '[from] ability: Power Surge');
					target.addVolatile('laserfocus');
					return null;
			}
		},
		onModifyCritRatio: function (critRatio) {
			return critRatio + 1;
		},
		id: "powersurge",
		name: "Power Surge",
	},
	"sheerfat": {
		shortDesc: "This Pokemon's attacks with secondary effects have their power multiplied 1.3x and have their effects nullified. This Pokemon takes half the damage it would normally have taken from moves with secondary effects.",
		onModifyMove: function (move, pokemon) {
			if (move.secondaries) {
				delete move.secondaries;
				// Actual negation of `AfterMoveSecondary` effects implemented in scripts.js
				move.hasSheerForce = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.hasSheerForce) return this.chainModify([0x14CD, 0x1000]);
		},
		onBasePowerPriority: 7,
		onFoeBasePower: function (basePower, attacker, defender, move) {
			if (this.effectData.target !== defender) return;
			if (move.secondaries) {
				return this.chainModify(0.5);
			}
		},
		id: "sheerfat",
		name: "Sheer Fat",
	},
	"oceanshield": {
		shortDesc: "When at full HP, the holder takes half damage from moves; when the holder is hit by a non-status move while at full HP, the power of its Water-type moves is boosted by 50%.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				return this.chainModify(0.5);
			}
		},
		onAfterDamage: function(damage, target, source, move) {
			if (move && source.hp >= source.maxhp) {
				move.oceanshieldBoost = true;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.oceanshieldBoost) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.oceanshieldBoost) {
				return this.chainModify(1.5);
			}
		},
		id: "oceanshield",
		name: "Ocean Shield",
	},
	"persistentmorale": {
		shortDesc: "Takes 50% less damage from Fire, Ice, and Dark-type moves. If hit by a move of said types, Attack is raised by one stage.",
		onModifyAtkPriority: 6,
		onSourceModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire' || move.type === 'Dark') {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire' || move.type === 'Dark') {
				return this.chainModify(0.5);
			}
		},
		onAfterDamage: function (damage, target, source, effect) {
			if (effect && effect.type === 'Dark' || effect.type === 'Fire' || effect.type === 'Ice') {
				this.boost({atk: 1});
			}
		},
		id: "persistentmorale",
		name: "Persistent Morale",
	},
	"dazzlebeast": {
		shortDesc: "Priority moves won't work against this Pokémon. Attempts to do so result in +1 to its highest non-HP stat.",
		onTryHit: function (pokemon, source, effect) {
			for (const target of pokemon.side.foe.active) {
			if ((target.side === this.effectData.source.side || effect.id === 'perishsong') && effect.priority > 0.1 && effect.target !== 'foeSide') {
				this.add('-immune', target, '[msg]', '[from] ability: Dazzle Beast');
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
				return null;
			}
			}
		},
		id: "dazzlebeast",
		name: "Dazzle Beast",
	},
	"contagiousyawn": {
		shortDesc: "On switch-in, the opposing Pokemon's ability is changed to Truant.",
		onSwitchInPriority: 1,
		onSwitchIn: function	(pokemon, source, move) {
		for (const target of pokemon.side.foe.active) {
		let oldAbility = target.setAbility('truant', target, 'truant', true);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Truant', oldAbility, '[of] ' + target);
				}
			}
		},
		id: "contagiousyawn",
		name: "Contagious Yawn",
	},
	"enchanted": {
		shortDesc: "Immune to Fairy and Ground moves. This Pokemon's Normal type moves become Fairy type and have 1.2x power.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground' || move.type === 'Fairy') {
				this.add('-immune', target, '[msg]', '[from] ability: Enchanted');
				return null;
			}
		},
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fairy';
				move.pixilateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.pixilateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "enchanted",
		name: "Enchanted",
	},
		"magicsponge": {
		shortDesc: "The Pokémon only takes damage from attacks. If indirect damage or a water-type attack is used on it, it will health 25% of its life instead.",
		onTryHit: function (target, source, move, effect) {
			if (target !== source && move.type === 'Water' || effect.effectType !== 'Move') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Magic Sponge');
				}
				return null;
			}
		},
		id: "magicsponge",
		name: "Magic Sponge",
	},
	"groundleecher": {
		shortDesc: "Wielder is inmune to Ground-type attacks and it heals 1/3 of its maximum HP when hit by a ground attack and on switching out.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Ground') {
				if (!this.heal(target.maxhp / 3)) {
					this.add('-immune', target, '[msg]', '[from] ability: Ground Leecher');
				}
				return null;
			}
		},
		onSwitchOut: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 3);
		},
		id: "groundleecher",
		name: "Ground Leecher",
	},
	"bloodthirst": {
		shortDesc: "This Pokemon's Attack and the highest stat is raised by 1 if it attacks and KOes another Pokemon.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
				this.boost({atk: 1}, source);
			}
		},
		id: "bloodthirst",
		name: "Bloodthirst",
	},
	"electrotorrent": {
		shortDesc: "When this Pokemon enters the field, the opposing Pokemon is paralyzed and rain is set up for 5 turns.",
		onStart: function (source, pokemon) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.template.speciesid === 'kyogre') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.setWeather('raindance');
			for (const target of pokemon.side.foe.active) {
			source.setStatus('par', target);
			}
		},
		id: "electrotorrent",
		name: "Electrotorrent",
	},
	"darksurge": {
		shortDesc: "On switch-in, this Pokemon summons Dark Terrain.",
		onStart: function (source) {
			this.setTerrain('darkterrain');
		},
		id: "darksurge",
		name: "Dark Surge",
	},
	"blazingbeast": {
		shortDesc: "Gets a Flash Fire boost when this Pokémon takes out another.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				source.addVolatile('flashfire')
			}
		},
		id: "blazingbeast",
		name: "Blazing Beast",
	},
	"jailbreak": {
		shortDesc: "If this Pokemon is holding an item, its speed and the power of its Dark-type moves are 1.33x. If it is not holding an item, its speed and the power of its Dark-type moves are doubled.",
		onModifySpe: function (spe, pokemon) {
			if (pokemon.item) {
				return this.chainModify(1.33);
			}
			else if (!pokemon.item) {
				return this.chainModify(2);
			}	
		},
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Dark' && attacker.item) {
				return this.chainModify(1.33);
			}
			else 	if (move.type === 'Dark' && !attacker.item) {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Dark' && attacker.item) {
				return this.chainModify(1.33);
			}
			else 	if (move.type === 'Dark' && !attacker.item) {
				return this.chainModify(2);
			}
		},
		id: "jailbreak",
		name: "Jailbreak",
	},
	"paralyzedwithfear": {
		shortDesc: "If the opponent is paralyzed, they lose 1/8 of their HP each turn.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.status === 'par') {
					this.damage(target.maxhp / 8, target, pokemon);
				}
			}
		},
		id: "paralyzedwithfear",
		name: "Paralyzed With Fear",
	},
	"flipout": {
		shortDesc: "This Pokémon's multi-strike moves hit the maximum amount of times and deal 33% extra damage. Such moves also heal this Pokémon for 33% of the damage dealt.",
		onModifyMove: function(move) {
			if (move.multihit && move.multihit.length) {
				move.multihit = move.multihit[1];
				move.drain = [1, 3];
			}
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.multihit) {
				return this.chainModify(1.33);
			}
		},
		id: "flipout",
		name: "Flip Out",
	},
	"lastnightmare": {
		shortDesc: "When this Pokemon faints, the opponent is damaged for 25% of their max HP and falls asleep.",
		id: "lastnightmare",
		name: "Last Nightmare",
		onAfterDamageOrder: 1,
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact'] && !target.hp) {
				this.damage(source.maxhp / 4, source, target);
				source.setStatus('slp', target);
			}
		},
	},
	"adaptiveabsorption": {
		shortDesc: "Immune to STAB moves. When hit by one, restores 50% of its HP.",
		onTryHit: function (target, source, move) {
			if (target !== source && source.hasType(move.type)) {
				if (!this.heal(target.maxhp / 2)) {
					this.add('-immune', target, '[msg]', '[from] ability: Adaptive Absorption');
				}
				return null;
			}
		},
		id: "adaptiveabsorption",
		name: "Adaptive Absorption",
	},
	'brilliantbrightness': {
		shortDesc: "Resets foe's stat changes upon switch in. This pokémon cannot have it's status lowered by external means, and doing so will reduce the foe's attack by one stage.",
		onStart: function(source) {
			this.useMove('Haze', source);
		},
		onBoost: function (boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					this.boost({atk: -1}, target, source);
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Brilliant Brightness", "[of] " + target);
		},
		id: "brilliantbrightness",
		name: "Brilliant Brightness",
	},
	"recoveryshield": {
		shortDesc: "Shadow Shield + Regenerator.",
		onSwitchOut: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 3);
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				return this.chainModify(0.5);
			}
		},
		isUnbreakable: true,
		id: "recoveryshield",
		name: "Recovery Shield",
	},
	"airbornelighting": {
		shortDesc: "This Pokemon draws Electric & Ground moves to itself to raise Sp. Atk by 1; Electric & Ground immunity.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Electric' || move.type === 'Ground') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[msg]', '[from] ability: Airborne Lighting');
				}
				return null;
			}
		},
		onAnyRedirectTarget: function (target, source, source2, move) {
			if (move.type !== 'Electric' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (this.validTarget(this.effectData.target, source, move.target)) {
				if (this.effectData.target !== target) {
					this.add('-activate', this.effectData.target, 'ability: Airborne Lighting');
				}
				return this.effectData.target;
			}
		},
		id: "airbornelighting",
		name: "Airborne Lighting",
	},
	"sonar": {
		shortDesc: "Immune to sound based and Ground-type moves.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground' || move.flags['sound']) {
				this.add('-immune', target, '[msg]', '[from] ability: S.O.N.A.R');
				return null;
			}
		},
		id: "sonar",
		name: "S.O.N.A.R",
	},
	"threateningglare": {
		shortDesc: "If another Pokémon's attack brings it down past 50% of its HP, that Pokémon is forced out.",
		onAfterMoveSecondary: function (target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			if (target.hp <= target.maxhp / 2 && target.hp + move.totalDamage > target.maxhp / 2) {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
				source.switchFlag = true;
				target.switchFlag = false;
				this.add('-activate', target, 'ability: Threatening Glare');
			}
		},
		onAfterDamage: function (damage, target, source, effect) {
			if (!target.hp || effect.effectType === 'Move') return;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
				source.switchFlag = true;
				this.add('-activate', target, 'ability: Threatening Glare');
			}
		},
		id: "threateningglare",
		name: "Threatening Glare",
	},
	"diamondshield": {
		shortDesc: "While this Pokemon is active, Rock type Pokemon receive 3/4 damage from all attacks.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (target.type === 'Rock') {
				return this.chainModify(0.75);
			}
		},
		id: "diamondshield",
		name: "Diamond Shield",
	},
	"sunsteelskin": {
		shortDesc: "Immune to Water and Fire. Unaffected by stat drops (that aren't self-inflicted). If hit by a Water or Fire move, or when it would have a stat lowered, recovers 25% of its max HP. Heals 12.5% of its max HP every turn that it's in Sun. This ability cannot be bypassed.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Water' || move.type === 'Fire') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Water Absorb');
				}
				return null;
			}
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'sunnyday' || effect.id === 'desolateland' || effect.id === 'solarsnow') {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					this.heal(target.maxhp / 8);
				} else {
					this.damage(target.maxhp / 8, target, target);
				}
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'solarsnow') return false;
		},
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					this.heal(target.maxhp / 4);
					this.add('-ability', target, 'Clear Absorb');
				}
			}
		},
		isUnbreakable: true,
		id: "sunsteelskin",
		name: "Sunsteel Skin",
	},
	"mudabsorb": {
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water & Ground moves; Water & Ground immunity.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Water' || move.type === 'Ground') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Mud Absorb');
				}
				return null;
			}
		},
		id: "mudabsorb",
		name: "Mud Absorb",
	},
	"fluffyfur": {
		shortDesc: "This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves. Doubled Defense.",
		onSourceModifyDamage: function (damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire') mod *= 2;
			if (move.flags['contact']) mod /= 2;
			return this.chainModify(mod);
		},
		  onModifyDefPriority: 6,
		  onModifyDef: function (def) {
			return this.chainModify(2);
		},
		id: "fluffyfur",
		name: "Fluffy Fur",
	},
	"laserbeam": {
		shortDesc: "Steel-types lose 25% of their HP when switching out.",
		onFoeSwitchOut: function (pokemon) {
			if (pokemon.hasType('Steel')) {
				pokemon.damage(pokemon.maxhp / 4);
			}
		},
		id: "laserbeam",
		name: "Laser Beam",
	},
	"magnumopus": {
		shortDesc: "This Pokémon's stat boosts are inverted. This Pokémon's super-effective attacks deal 25% more damage.",
		onBoost: function (boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			for (let i in boost) {
				// @ts-ignore
				boost[i] *= -1;
			}
		},
		onModifyDamage: function (damage, source, target, move) {
			if (move && move.typeMod > 0) {
				return this.chainModify(1.25);
			}
		},
		id: "magnumopus",
		name: "Magnum Opus",
	},
	"adaptiveeye": {
		shortDesc: "This Pokemon's STAB moves have perfect accuracy.",
		onAnyAccuracy: function (accuracy, pokemon, move) {
			if (pokemon.hasType(move.type)) {
				return true;
			}
			return accuracy;
		},
		id: "adaptiveeye",
		name: "Adaptive Eye",
	},
	"aquabooster": {
		shortDesc: "Whenever this pokemon get hit with a water type move or scores a KO, the highest non-hp stat get boosted by a stage and recover ¼ of its max hp. Also has a water immunity.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
				this.heal(source.maxhp / 4);
			}
		},
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Water') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (target.stats[i] > bestStat) {
						stat = i;
						bestStat = target.stats[i];
					}
				}
					this.heal(target.maxhp / 4);
					this.boost({[stat]: 1}, target);
					this.add('-immune', target, '[msg]', '[from] ability: Aqua Booster');
				return null;
			}
		},
		id: "aquabooster",
		name: "Aqua Booster",
	},
	"gracefulexit": {
		shortDesc: "When this Pokemon switches out, the opponent flinches.",
		onSwitchOut: function (pokemon) {
			for (const target of pokemon.side.foe.active) {
			target.addVolatile('flinch');
			}
		},
		id: "gracefulexit",
		name: "Graceful Exit",
	},
	"coldbody": {
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be frozen.",
		onAfterDamage: function (damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('frz', target);
				}
			}
		},
		id: "coldbody",
		name: "Cold Body",
	},
	"dangerousaddiction": {
		shortDesc: "When this pokemon is hit by a move, the move's user lose an equal amount of HP.",
		onAfterDamageOrder: 1,
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move) {
				this.damage(damage, source, target);
			}
		},
		id: "dangerousaddiction",
		name: "Dangerous Addiction",
	},
	"rootrum": {
		shortDesc: "This Pokemon is immune to Ground and Grass-type moves.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Grass' || move.type === 'Ground') {
					this.add('-immune', target, '[msg]', '[from] ability: Root Rum');
				return null;
			}
		},
		id: "rootrum",
		name: "Root Rum",
	},
	"healinghell": {
		shortDesc: "Heals 1/8th of this pokemon health at the end of each turn. If poisoned, ignore poison damage and heals another 1/8th at the end of each turn (for a total of 1/4).",
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual: function(pokemon) {
			if (this.isTerrain('grassyterrain')) return;
			this.heal(pokemon.maxhp / 16);
		},
		onTerrain: function(pokemon) {
			if (!this.isTerrain('grassyterrain')) return;
			this.heal(pokemon.maxhp / 16);
		},
		onDamagePriority: 1,
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.maxhp / 8);
				return false;
			}
		},
		id: "healinghell",
		name: "Healing Hell",
	},
		"shatteredprism": {
		desc: "This Pokemon receives 3/4 damage from supereffective attacks This Pokémon’s Not-Very-Effective moves deal more damage against the foe. This Pokémon’s moves ignores the foe’s ability. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and deals more damage with not-very-effective moves",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Shattered Prism neutralize');
				return this.chainModify(0.75);
			}
		},
		onModifyMove: function (move) {
			move.ignoreAbility = true;
		},
		onModifyDamage: function (damage, source, target, move) {
			if (move.typeMod < 0) {
				this.debug('Shattered Prism boost');
				return this.chainModify(1.75);
			}
		},
		isUnbreakable: true,
		id: "shatteredprism",
		name: "Shattered Prism",
	},
	"firewall": {
		shortDesc: "Upon switch-in, this Pokemon sets up Reflect or Light Screen depending on the opponent's higher Attacking stat. If they are tied, this Pokemon sets up Aurora Veil.",
		onStart: function (pokemon) {
			let totaldef = 0;
			let totalspd = 0;
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				totaldef += target.getStat('atk', false, true);
				totalspd += target.getStat('spa', false, true);
			}
			if (totaldef && totaldef > totalspd) {
				this.useMove('Reflect', pokemon);
			} else if (totalspd > totaldef) {
				this.useMove('Light Screen', pokemon);
			}
			else {
				this.useMove('Aurora Veil', pokemon);
			}
		},
		id: "firewall",
		name: "Firewall",
	},	
	"solarsnow": {
		shortDesc: "On switch-in, this Pokemon summons a combination of Sun and Hail.",
		onStart: function (source) {
			this.setWeather('solarsnow');
		},
		id: "solarsnow",
		name: "Solar Snow",
	},
	"beastguard": {
		desc: "The user is impervious to indirect damage. In situations where it would normally take indirect damage, its highest non-HP stat is boosted by one stage.",
		shortDesc: "Boosts this Pokemon's highest stat instead of taking indirect damage.",
		onDamage: function (damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in target.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = target.stats[i];
					}
				}
				this.boost({[stat]: 1}, target);
				return false;
			}
		},
		id: "beastguard",
		name: "Beast Guard",
	},
	"hardenedbody": {
		desc: "This Pokemon receives 3/4 damage from supereffective attacks. When hit by a supereffective attack, boosts all stats by one stage. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and gets boosted all it's stats when hit by one.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Prism Armor neutralize');
				return this.chainModify(0.75);
			}
		},
		onHit: function (target, source, move) {
			if (move.typeMod > 0) {
			this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1});
				}
		},
		isUnbreakable: true,
		id: "hardenedbody",
		name: "Hardened Body",
	},
		"friskybeast": {
		shortDesc: "Upon switchin, identifies the highest invested stat of the opponent and boosts its corresponding stat by one stage.",
		onStart: function (pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in target.stats) {
					if (target.stats[i] > bestStat) {
						stat = i;
						bestStat = target.stats[i];
					}
				}
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Frisky Beast', 'boost');
					activated = true;
				}
				this.boost({[stat]: 1}, pokemon);
				
			}
		},
		id: "friskybeast",
		name: "Frisky Beast",
	},
		"uninhabitable": {
		shortDesc: "If this Pokemon is on the field, Grass-type moves won't work.",
		id: "uninhabitable",
		onAnyTryMove: function (target, source, effect) {
			if (effect.type === 'Grass') {
				this.attrLastMove('[still]');
				this.add('cant', this.effectData.target, 'ability: Uninhabitable', effect, '[of] ' + target);
				return false;
			}
		},
		name: "Uninhabitable",
	},
	"crushing": {
		shortDesc: "Recoil from moves used against this Pokemon is doubled.",
		onFoeModifyDamage: function (damage, source, target, effect) {
			if (effect.id === 'recoil') {
				this.chainModify(2);
			}
		},
		id: "crushing",
		name: "Crushing",
	},
		"gtolerance": {
		shortDesc: "This Pokemon is immune to moves with 1/2 or less of their PP remaining.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.pp*2 <= move.maxpp) {
				this.add('-immune', target, '[msg]', '[from] ability: G-Tolerance');
				return null;
			}
		},
		id: "gtolerance",
		name: "G-Tolerance",
	},
		"aeroform": {
		desc: "If this Pokemon is a Polyform2, its type changes to the current weather condition's type, and its ability changes so that it can summon said weather for the rest of the battle",
		shortDesc: "Changes type and ability for the rest of the battle to account for the weather, which will be summoned by the new ability.",
		onUpdate: function (pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Polyform2' || pokemon.transformed) return;
			let forme = null;
			switch (this.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				if (pokemon.template.speciesid !== 'polyform2sunny') forme = 'Polyform2-Sunny';
				break;
         case 'solarsnow':
				if (pokemon.template.speciesid !== 'polyform2sunsnow') forme = 'Polyform2-Sunsnow';
				break;
			case 'raindance':
			case 'primordialsea':
				if (pokemon.template.speciesid !== 'polyform2rainy') forme = 'Polyform2-Rainy';
				break;
			case 'hail':
				if (pokemon.template.speciesid !== 'polyform2snowy') forme = 'Polyform2-Snowy';
				break;
			case 'sandstorm':
				if (pokemon.template.speciesid !== 'polyform2sandy') forme = 'Polyform2-Sandy';
				break;
			case 'shadowdance':
				if (pokemon.template.speciesid !== 'polyform2spooky') forme = 'Polyform2-Spooky';
				break;
			default:
				if (pokemon.template.speciesid !== 'polyform2') forme = 'Polyform2';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme);
				this.add('-formechange', pokemon, forme, '[msg]', '[from] ability: Aeroform');
			}
		},
		id: "aeroform",
		name: "Aeroform",
	},
		"therapeutic": {
		desc: "This Pokemon is healed by 1/8 of its max HP each turn when statused; unaffected by status's secondary effects (except sleep) i.e. Poison's HP loss, Thunder Wave's Speed Drop, and Burn's Attack drop.",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when statused; Statuses are ignored.",
		onDamagePriority: 1,
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox' || effect.id === 'brn') {
				this.heal(target.maxhp / 8);
				return false;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.status === 'brn') {
				return this.chainModify(2);
			}
			},
		onModifySpe: function (spe, pokemon) {
			if (pokemon.status === 'par') {
				return this.chainModify(2);
			}
			},
		onResidual: function (pokemon) {
			if (!pokemon.hp) return;
				if (pokemon.status === 'par' || pokemon.status === 'slp') {
					this.heal(target.maxhp / 8);
				}
		},
                //TODO: Allow holder to move if Frozen; Prevent Full Paralysis
		id: "therapeutic",
		name: "Therapeutic",
	},
		"recklessbody": {
		shortDesc: "The bearer's attacks with recoil or crash damage have 1.1x power and have no recoil/crash damage.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil) {
				this.debug('Reckless boost');
				return this.chainModify(1.1);
			}
		},
               onDamage: function (damage, target, source, effect) {
		if (effect.id === 'recoil' || effect.id === 'jumpkick' || effect.id === 'highjumpkick') {
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			      if (this.activeMove.id !== 'struggle') return null;
		        }
		},
		id: "recklessbody",
		name: "Reckless Body",
	},
		"weatherfront": {
		desc: "Cherform's type and form change depending on weather (Grass/fire in sun, Grass/water in rain, Grass/ice in hail, Grass/rock in sandstorm) and the Sp. Att. and Sp. Def. stats of the user and allies are boosted 50% in all weathers.",
		shortDesc: "Changes holder's secondary type in weather and buffs allies' Special stats.",
		onUpdate: function (pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Cherform' || pokemon.transformed) return;
			let forme = null;
			switch (this.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
                        case 'solarsnow':
				if (pokemon.template.speciesid !== 'cherformsunny') forme = 'Cherform-Sunny';
				break;
			case 'raindance':
			case 'primordialsea':
				if (pokemon.template.speciesid !== 'cherformrainy') forme = 'Cherform-Rainy';
				break;
			case 'hail':
				if (pokemon.template.speciesid !== 'cherformsnowy') forme = 'Cherform-Snowy';
				break;
			case 'sandstorm':
				if (pokemon.template.speciesid !== 'cherformsandy') forme = 'Cherform-Sandy';
				break;
			default:
				if (pokemon.template.speciesid !== 'cherform') forme = 'Cherform';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme);
				this.add('-formechange', pokemon, forme, '[msg]', '[from] ability: Weather Front');
			}
		},
		onModifySpAPriority: 3,
		onAllyModifySpA: function (atk) {
			if (this.effectData.target.baseTemplate.baseSpecies !== 'Cherform') return;
			if (this.isWeather()) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(1.5);
				} 	else {
					return this.chainModify(0.66667);
				}
			}
		},
		onModifySpDPriority: 4,
		onAllyModifySpD: function (spd) {
			if (this.effectData.target.baseTemplate.baseSpecies !== 'Cherform') return;
			if (this.isWeather()) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					return this.chainModify(1.5);
				} 	else {
					return this.chainModify(0.66667);
				}
			}
		},
		id: "weatherfront",
		name: "Weather Front",
	},
	"justiceillusion": {
		desc: "When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon's attack unless it's Dark-type. This Pokemon's actual level and HP are displayed instead of those of the mimicked Pokemon.",
		shortDesc: "This Pokemon appears as the last Pokemon in the party until it takes direct damage from a non-Dark-type attack.",
		onBeforeSwitchIn: function (pokemon) {
			pokemon.illusion = null;
			let i;
			for (i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
				if (!pokemon.side.pokemon[i]) continue;
				if (!pokemon.side.pokemon[i].fainted) break;
			}
			if (!pokemon.side.pokemon[i]) return;
			if (pokemon === pokemon.side.pokemon[i]) return;
			pokemon.illusion = pokemon.side.pokemon[i];
		},
		onAfterDamage: function (damage, target, source, effect) {
			if (target.illusion && effect && effect.effectType === 'Move' && effect.id !== 'confused' && effect.type !== 'Dark') {
				this.singleEvent('End', this.getAbility('Illusion'), target.abilityData, target, source, effect);
			}
		},
		onEnd: function (pokemon) {
			if (pokemon.illusion) {
				this.debug('illusion cleared');
				pokemon.illusion = null;
				let details = pokemon.template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('replace', pokemon, details);
				this.add('-end', pokemon, 'Illusion');
			}
		},
		onFaint: function (pokemon) {
			pokemon.illusion = null;
		},
		isUnbreakable: true,
		id: "justiceillusion",
		name: "Justice Illusion",
	},
		"steamsauna": {
		shortDesc: "If the opponent uses a Water-type move, this Pokemon restores 25% of its HP and 30% chance to burn each opponent; Water immunity.",
		onTryHit: function(target, source, pokemon, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Steam Sauna');
				}
				if (move && !source.status) {
					source.trySetStatus('brn', target);
				}
			        for (const target of pokemon.side.foe.active) {
                                    let activated = false;
                                    if (!target || !this.isAdjacent(target, pokemon)) continue;
				    if (!activated) {
					activated = true;
				     }
				     if (!target.volatiles['substitute'] && this.randomChance(3, 10)){
					source.trySetStatus('brn', target);
				     }
			}
				return null;
			}
		},
		id: "steamsauna",
		name: "Steam Sauna",
	},
	"smokebody": {
		shortDesc: "Damages the opposing Pokemon for 1/8 of its HP at the end of each turn while it is asleep or if it tries to lower Dank's stats, stats cannot be lowered.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.status === 'slp' || target.hasAbility('comatose') || target.hasAbility('sleepingsystem')) {
					this.damage(target.maxhp / 8, target, target);
				}
			}
		},
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					this.damage(source.maxhp / 8, source, target);
               delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Smoke Body", "[of] " + target);
		},
		id: "smokebody",
		name: "Smoke Body",
	},
	"strikeandpass": {
		shortDesc: "All moves at 60 base power or below get boosted by x1.5 and gain a U-Turn switching effect.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				return this.chainModify(1.5);
			}
		},
		onModifyMove: function(move) {
			if (move.target && !move.nonGhostTarget && (move.target === "normal" || move.target === "any" || move.target === "randomNormal" || move.target === "allAdjacent" || move.target === "allAdjacentFoes") && move.basePower <= 60) {
				move.selfSwitch = true;
			}
		},
		id: "strikeandpass",
		name: "Strike and Pass",
	},
	"beastsfocus": {
		shortDesc: "If PokÃ©mon would be flinched, buffs highest non-HP stat by 1 instead.",
		onFlinch: function(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				this.boost({[stat]: 1}, source);
			}
                       return false;
                      }
		},
		id: "beastsfocus",
		name: "Beasts Focus",
	},
	"poisonveil": {
		shortDesc: "Can't have stats lowered nor can be statused; Poison is inflicted on whoever tries to inflict either on the holder.",
		onAfterSetStatus: function (status, target, source, effect) {
			target.cureStatus();
			if (!source || source === target) return;
			if (effect && effect.id === 'toxicspikes') return;
			this.add('-activate', target, 'ability: Poison Veil');
			// @ts-ignore
			source.trySetStatus('psn', target);
		},
		onBoost: function(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					source.trySetStatus('psn', target);
                      delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Poison Veil", "[of] " + target);
		},
		id: "poison",
		name: "Poison Veil",
	},
	"thermogenesis": {
		shortDesc: "This Pokemon has the resistances of fire types.",
		onEffectiveness: function(typeMod, target, type, move) {
			let typeCheck = this.battle.getEffectiveness(move, 'Fire');
			typeCheck = this.battle.singleEvent('Effectiveness', move, null, 'Fire', move, null, typeCheck);
			if (typeCheck < 0){
				return typeMod - 1;
			}
			return typeMod;
		},
		id: "thermogenesis",
		name: "Thermogenesis",
	},
	"echo": {
		shortDesc: "This Pokemon is immune to sound moves. Whenever a Pokemon uses a sound move, it repeats that move right after.",
		onTryHit: function (target, source, move) {
			if (move.flags['sound']) {
				this.add('-immune', target, '[msg]', '[from] ability: Echo');
				let newMove = this.getMoveCopy(move.id);
				if (target.ability !== 'echo') {
				this.useMove(newMove, this.effectData.target, source);
				}
				return null;
			}
		},
		onAllyTryHitSide: function (target, source, move) {
			if (move.flags['sound']) {
			this.add('-immune', this.effectData.target, '[msg]', '[from] ability: Echo');
			let newMove = this.getMoveCopy(move.id);
			if (target.ability !== 'echo') {
			this.useMove(newMove, this.effectData.target, source);
			}
			}
			return null;
		},
		effect: {
			duration: 1,
		},
		id: "echo",
		name: "Echo",
	},
	"carelessforce": {
		shortDesc: "If this pokemon is holding an item, the item does nothing and this pokemon gets a 1.5x boost to physical moves.",
		onUpdate: function(pokemon) {
                  this.add('-start', pokemon, 'Embargo', '[silent]');
                },
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.item) {
				return this.chainModify(1.5);
			}
		},
		onEnd: function (pokemon) {
                        //Find some way to remove it. Gastro Acid, Skill Swap...
			pokemon.removeVolatile('embargo');
		},
		id: "carelessforce",
		name: "Careless Force",
	},
	"photosyntheticgrace": {
	    shortDesc: "If Sunny Day is active, this Pokemon's stats are doubled. In any other weather, this Pokemon's stats are quartered.",
	    onModifyAtkPriority: 5,
	    onModifyAtk: function(atk, pokemon) {
	        if (this.isWeather()) {
				  if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow']) == (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak'])) {
						return this.chainModify(2);
					} 	else {
						return this.chainModify(0.25);
					}
			  }
	    },
	    onModifySpAPriority: 5,
	    onModifySpA: function(spa, pokemon) {
	        if (this.isWeather()) {
				  if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow']) == (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak'])) {
						return this.chainModify(2);
					} 	else {
						return this.chainModify(0.25);
					}
			  }
	    },
	    onModifyDefPriority: 5,
	    onModifyDef: function(def, pokemon) {
	        if (this.isWeather()) {
				  if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow']) == (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak'])) {
						return this.chainModify(2);
					} 	else {
						return this.chainModify(0.25);
					}
			  }
	    },
	    onModifySpDPriority: 5,
	    onModifySpD: function(spd, pokemon) {
	        if (this.isWeather()) {
				  if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow']) == (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak'])) {
						return this.chainModify(2);
					} 	else {
						return this.chainModify(0.25);
					}
			  }
	    },
	    onModifySpe: function(spe, pokemon) {
	        if (this.isWeather()) {
				  if (this.isWeather(['sunnyday', 'desolateland', 'solarsnow']) == (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak'])) {
						return this.chainModify(2);
					} 	else {
						return this.chainModify(0.25);
					}
			  }
	    },
	    id: "photosyntheticgrace",
	    name: "Photosynthetic Grace",
	},
	"completelyserious": {
		desc: "Moves of 60 BP or less gain a 50% damage bonus. They do double damage, and the user’s raw Speed is doubled, if the user consumes or is not holding a Held Item.",
		shortDesc: "Moves of 60BP or less deal x1.5 damage. With an item, Speed is doubled and the damage multiplier for the aforementioned moves hits x3 instead.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (basePower <= 60) {
				this.debug('Technician boost');
				if (!attacker.item) {
					return this.chainModify(3);
				} else{
					return this.chainModify(1.5);
				}
			}
		},
		onModifySpe: function (spe, pokemon) {
			if (!pokemon.item) {
				return this.chainModify(2);
			}
		},
		id: "completelyserious",
		name: "Completely Serious",
	},
	"minefield": {
		shortDesc: "If the opponent uses a Ground-type move against this Pokemon, it becomes trapped; Ground immunity.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Mine Field');
				source.addVolatile('trapped', source, move, 'trapper')
				return null;
			}
		},
		id: "minefield",
		name: "Mine Field",
	},
	"greekfire": {
		shortDesc: "Immune to fire type moves. If hit by one, its own fire attacks are boosted by 1.5 and the opponent loses 1/8 max HP.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				move.accuracy = true;
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[msg]', '[from] ability: Greek Fire');
				        this.damage(source.maxhp / 8, source, target);
				}
				return null;
			}
		},
		onEnd: function(pokemon) {
			pokemon.removeVolatile('flashfire');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function(target) {
				this.add('-start', target, 'ability: Greek Fire');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function(atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function(atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					return this.chainModify(1.5);
				}
			},
			onEnd: function(target) {
				this.add('-end', target, 'ability: Greek Fire', '[silent]');
			}
		},
		id: "greekfire",
		name: "Greek Fire",
	},
	"grassyheal": {
		shortDesc: "Activates Grassy Terrain for 5 turns when the Pokemon enters a battle. HP is restored by 1/8th of the maximum HP every turn while Grassy Terrain is active. Immune to Poison under Grassy Terrain.",
		onStart: function (source) {
			this.setTerrain('grassyterrain');
		},
		onSetStatus: function (status, target, source, effect) {
			if (this.isTerrain('grassyterrain') && (status.id === 'psn' || status.id === 'tox')) {
				if (effect && effect.status) this.add('-immune', target, '[msg]', '[from] ability: Grassy Heal');
				return false;
			}
		},
	   onResidual: function (pokemon) {
			if (this.isTerrain('grassyterrain')) this.heal(pokemon.maxhp / 8);
		},
		id: "grassyheal",
		name: "Grassy Heal",
	},
	"dragonhide": {
		shortDesc: "Deals 1/8 recoil to the opponent whenever this Pokemon is statused. Status effects are removed upon switching out.",
		onAfterDamage: function (damage, target, source, move) {
			if (target.status) {
				this.damage(damage/8, source, target);
			}
		},
		onSwitchOut: function(pokemon) {
			pokemon.cureStatus();
		},
		id: "dragonhide",
		name: "dragonhide",
	},
	"choochoo": {
		shortDesc: "Removes Burn status every other turn. Immune to Burns on the turn Burn is removed.",
		onBeforeMovePriority: 9,
		onBeforeMove: function (pokemon, target, move) {
			if (pokemon.removeVolatile('choochoo') && pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Choo Choo');
				pokemon.cureStatus();
			}
			pokemon.addVolatile('choochoo');
		},
		effect: {
			duration: 2,
		},
		id: "choochoo",
		name: "Choo Choo",
	},
	'tollbooth': {
		shortDesc: "Pokemon that switch out while this Pokemon is active have their held item removed. If this Pokemon is not holding an item, it gains the removed item.",
		beforeTurnCallback: function (source, target) {
		  for (const side of this.sides) {
                        if (side === target.side) continue;
			if (target.hp) {
				let item = target.takeItem();
				if (item) {
					this.add('-enditem', pokemon, item.name, '[from] ability: Toll Booth', '[of] ' + source);
                                        if (!source.item) source.setItem(item);
				}
			}
                     }
		},
                //TODO: Check to see if it's implemented correctly
		id: "tollbooth",
		name: "Toll Booth",
	},
	"eyeofhorus": {
		shortDesc: "Technician + Inner Focus",
		onFlinch: false,
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (basePower <= 60) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		id: "eyeofhorus",
		name: "Eye of Horus",
	},
	"insidioustentacles": {
		shortDesc: "This Pokemon's contact moves lower a hit target's highest stat by one stage and trap it.",
		// upokecenter says this is implemented as an added secondary effect
		onModifyMove: function (move, source, target) {
			if (!move || !move.flags['contact']) return;
			let activated = false;
                        let stat = 'atk';
                        let bestStat = 0;
                        for (let i in target.stats) {
                            if (target.stats[i] > bestStat) {
                                stat = i;
                                bestStat = target.stats[i];
                            }
                        }
                        if (!target.volatiles['substitute']) {
                            this.boost({[stat]: -1}, target, source);
                            if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
                        }
		},
                //TODO: Check to see if it's implemented correctly
		id: "insidioustentacles",
		name: "Insidious Tentacles",
	},
	"burningheart": {
		shortDesc: "Special Attack is raised by 1 stage if this Pokemon is hit with a Fire-type attack or scores a KO. Immunity to Fire-type attacks and burns.",
		onTryHitPriority: 1,
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[msg]', '[from] ability: Burning Heart');
				}
				return null;
			}
		},
		onAllyTryHitSide: function (target, source, move) {
			if (target === this.effectData.target || target.side !== source.side) return;
			if (move.type === 'Fire') {
				this.boost({spa: 1}, this.effectData.target);
			}
		},
		onUpdate: function (pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Burning Heart');
				pokemon.cureStatus();
			}
		},
		onSetStatus: function (status, target, source, effect) {
			if (status.id !== 'brn') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[msg]', '[from] ability: Burning Heart');
			return false;
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: 1}, source);
			}
		},
		id: "burningheart",
		name: "Burning Heart",
	},
	"ogresswamp": {
		shortDesc: "Poison heals user by 1/4 HP each turn. Secondary effects of moves are replaced with a 100% chance to badly poison the foe.",
		onDamagePriority: 1,
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.maxhp / 4);
				return false;
			}
		},
		onModifyMove: function (move, pokemon) {
			if (move.secondaries) {
				move.secondaries = [];
			        move.secondaries.push({
				chance: 100,
				status: 'tox',
				ability: this.getAbility('ogresswamp'),
			});
			}
		},
		id: "ogresswamp",
		name: "Ogre's Swamp",
	},
	"contrabubble": {
		shortDesc: "Reverses the effectiveness of Fire and Water attacks on all active Pokemon, and the effects of burn on this Pokemon.",
		onAnyEffectiveness: function (typeMod, target, type, move) {
			if (move.type === 'Water' || move.type === 'Fire') {
				if (move && !this.getImmunity(move, type)) return 1;
				return -typeMod;
			}
		},
      //TODO: Check to see if this is actually implemented properly.
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.status === 'burn') {
                                //Invert Burn's reduction.
				return this.chainModify(4);
			}
		},
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'brn') {
				this.heal(target.maxhp / 16);
				return false;
			}
		},
		id: "contrabubble",
		name: "Contra-Bubble",
	},
	"brokenheart": {
		shortDesc: "Soul-Heart + Pressure",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Broken Heart');
		},
		onAnyFaint: function () {
			this.boost({spa: 1}, this.effectData.target);
		},
		onDeductPP: function (target, source) {
			if (target.side === source.side) return;
			return 1;
		},
		id: "brokenheart",
		name: "Broken Heart",
	},
	"lazycamo": {
		shortDesc: "This Pokemon is under the effects of Protean every other turn.",
		onPrepareHit: function (source, target, move) {
			if (source.removeVolatile('lazycamo')) {
			        if (move.hasBounced) return;
			        let type = move.type;
			        if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] Lazy Camo');
			    }
			}
			source.addVolatile('lazycamo');
		},
		effect: {
			duration: 2,
		},
		id: "lazycamo",
		name: "Lazy Camo",
	},
	"fungalshield": {
		desc: "Takes half damage from direct attacks at full HP. If the shield is broken by a contact move, the offender is inflicted with either Sleep, Paralysis or Poison. Cannot be bypassed by ability ignoring abilities and moves.",
		shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved. Inflicts a status if a contact move breaks the shield.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Shadow Shield weaken');
				return this.chainModify(0.5);
			}
		},
		onAfterDamage: function (damage, target, source, move) {
			if (move && move.flags['contact'] && !source.status && source.runStatusImmunity('powder') && (damage + target.hp >= target.maxhp)) {
				let r = this.random(30);
				if (r < 11) {
					source.setStatus('slp', target);
				} else if (r < 21) {
					source.setStatus('par', target);
				} else {
					source.setStatus('psn', target);
				}
			}
		},
		isUnbreakable: true,
		id: "fungalshield",
		name: "Fungal Shield",
	},
	"normalizedenemy": {
		shortDesc: "If this Pokemon is active, then enemies' moves will turn Normal-type.",
		onFoeModifyMovePriority: 1,
		onFoeModifyMove: function (move, pokemon) {
			if (!(move.isZ && move.category !== 'Status') && !['hiddenpower', 'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'struggle', 'technoblast', 'weatherball'].includes(move.id)) {
				move.type = 'Normal';
			}
		},
		id: "normalizedenemy",
		name: "Normalized Enemy",
	},
	"manapotion": {
		shortDesc: "Powers up Fairy-type moves by 33%. When an item is consumed, the power of Fairy-type moves is doubled instead.",
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Fairy') {
				return this.chainModify(1.33);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Fairy') {
				return this.chainModify(1.33);
			}
		},
		onAfterUseItem: function (item, pokemon) {
			if (pokemon !== this.effectData.target) return;
			pokemon.addVolatile('manapotion');
		},
		onTakeItem: function (item, pokemon) {
			pokemon.addVolatile('manapotion');
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('manapotion');
		},
		effect: {
	                onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Fairy' && !attacker.item) {
				return this.chainModify(1.5);
			}
                        },
		      onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Fairy' && !attacker.item) {
				return this.chainModify(1.5);
			}
		        },
		},
		id: "manapotion",
		name: "Mana Potion",
	},
	"piercinggaze": {
		desc: "This Pokémon cannot be inflicted with a move’s secondary effect. Any move with a secondary effect used against this Pokémon loses 2 PP instead of 1.",
		shortDesc: "Immune to secondary effects. Any move that would otherwise have one uses up 2PP instead of 1.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Piercing Gaze');
		},
		onDeductPP: function (target, source, move) {
			if (target.side === source.side || !move.secondaries) return;
			return 1;
		},
		onModifySecondaries: function (secondaries) {
			this.debug('Shield Dust prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},

		id: "piercinggaze",
		name: "Piercing Gaze",
	},
	"pressuredinnards": {
		shortDesc: "If this Pokémon is KOed with a move, that move loses all its PP.",
		id: "pressuredinnards",
		name: "Pressured Innards",
		onFaint: function (target, source, effect) {
				if (!source || source.fainted || !effect) return;
				if (effect.effectType === 'Move' && !effect.isFutureMove && source.lastMove) {
					for (const moveSlot of source.moveSlots) {
						if (moveSlot.id === source.lastMove.id) {
							moveSlot.pp = 0;
							this.add('-activate', source, 'ability: Pressured Innards', this.getMove(source.lastMove.id).name);
						}
					}
				}
			},
	},
	"extremist": {
		desc: "Upon scoring a KO, its most proficient stat rises two stages, while its least proficient stat drops one stage.",
		shortDesc: "If it KOs another Pokemon, this Pokemon gets +2 to its highest stat and -1 to its lowest.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let statalpha = 'atk';
                                let statbeta = 'atk';
				let bestStat = 0;
                                let worstStat = source.stats['atk'];
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						statalpha = i;
						bestStat = source.stats[i];
					}
					if (source.stats[i] < worstStat) {
						statbeta = i;
						worstStat = source.stats[i];
					}
				}
                                if (bestStat !== worstStat){
				  this.boost({[statalpha]: 2, [statbeta]: -1}, source);
                                } else {
                                  //Event that literally every single stat on this mon is equal
                                  this.boost({atk: 2, spe: -1}, source);
                                }
			}
		},
		id: "extremist",
		name: "Extremist",
	},
	"quarantine": {
		shortDesc: "Attacks against this Pokémon use one extra PP. This Pokémon cannot be inflicted with status conditions of any kind, including Taunt.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Quarantine');
		},
		onDeductPP: function (target, source) {
			if (target.side === source.side) return;
			return 1;
		},
		onUpdate: function (pokemon) {
			if (pokemon.status) {
				this.add('-activate', pokemon, 'ability: Quarantine');
				pokemon.cureStatus();
			}
			if (pokemon.volatiles['taunt']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('taunt');
				// Taunt's volatile already sends the -end message when removed
			}
		},
		onSetStatus: function (status, target, source, effect) {
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[msg]', '[from] ability: Quarantine');
			return false;
		},
		onTryHit: function (pokemon, target, move) {
			if (move.id === 'taunt') {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Quarantine (where\'d rev get this part again?)');
				return null;
			}
		},
		id: "quarantine",
		name: "Quarantine",
	},
	"blazingcontrary": {
		shortDesc: "Inverts stat changes that happen to the user, but only if the Pokémon's HP is above 1/3 of it's HP.",
		onBoost: function (boost, target, source, effect) {
			if ((effect && effect.id === 'zpower') || target.hp <= target.maxhp / 3) return;
			for (let i in boost) {
				// @ts-ignore
				boost[i] *= -1;
			}
		},
		id: "blazingcontrary",
		name: "Blazing Contrary",
	},
	"optimize": {
		desc: "This Pokemon's secondary typing changes depending on what plate or Z-Crystal it is holding. This Pokemon's Normal-type moves also become that type and have 1.2x power.",
		shortDesc: "Secondary typing and Normal-type moves change to match its plate or Z-Crystal. Moves that would otherwise be Normal-type have 1.2x power.",
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
				// @ts-ignore
				let type = pokemon.getItem().onPlate;
				// @ts-ignore
				if (!type || type === true) {
					type = 'Normal';
			}
			if (type === 'Electric'){
				pokemon.setType('Electric');
			} else {
				pokemon.setType('Electric', type);
			}
		},
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (pokemon.getItem() && move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = pokemon.getItem().onPlate;
				move.optimizeBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.optimizeBoosted) return this.chainModify([0x1333, 0x1000]);
		},
                //TODO: Have Form Changes for A Rave-Alola
		id: "optimize",
		name: "Optimize",
	},
	"tetraforce": {
		desc: "Attacks with secondary effects lose their effects, gain a 30% boost in power and ignore hindering abilities. LO recoil gets ignored.",
		shortDesc: "This Pokemon's attacks with secondary effects have 1.3x power and ignores abilities; nullifies the effects.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Tetra Force');
		},
		onModifyMove: function (move, pokemon) {
			if (move.secondaries) {
			        move.ignoreAbility = true;
				delete move.secondaries;
				// Actual negation of `AfterMoveSecondary` effects implemented in scripts.js
				move.hasSheerForce = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.hasSheerForce) return this.chainModify([0x14CD, 0x1000]);
		},
		id: "tetraforce",
		name: "Tetra Force",
		// TODO: Ignore hindering abilities
	},
	"torrenttempo": {
		shortDesc: "Instead of being confused, this Pokémon gets a 50% boost to its Water-type moves.",
		onUpdate: function (pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Torrent Tempo');
				pokemon.removeVolatile('confusion');
            pokemon.addVolatile('torrenttempo');
			}
		},
		onHit: function (target, source, move) {
			if (move && move.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Own Tempo');
			}
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (target) {
				this.add('-start', target, 'ability: Torrent Tempo');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function (atk, attacker, defender, move) {
				if (move.type === 'Water') {
					this.debug('Torrent Tempo boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function (atk, attacker, defender, move) {
				if (move.type === 'Water') {
					this.debug('Torrent Tempo boost');
					return this.chainModify(1.5);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'ability: Torrent Tempo', '[silent]');
			},
		},
		id: "torrenttempo",
		name: "Torrent Tempo",
	},
	"torrentialrage": {
		shortDesc: "At half HP gets a 50% boost to Water moves that lasts even once outside of that range or through Mega Evolution.",
		onAfterMoveSecondary: function (target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			if (target.hp <= target.maxhp / 2 && target.hp + move.totalDamage > target.maxhp / 2) {
                                source.addVolatile('torrentialrage');
			}
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (target) {
				this.add('-start', target, 'ability: Torrential Rage');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function (atk, attacker, defender, move) {
				if (move.type === 'Water') {
					this.debug('Torrential Rage boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function (atk, attacker, defender, move) {
				if (move.type === 'Water') {
					this.debug('Torrential Rage boost');
					return this.chainModify(1.5);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'ability: Torrential Rage', '[silent]');
			},
		},
		id: "torrentialrage",
		name: "Torrent Rage",
	},
	"flutteringheart": {
		shortDesc: "After another Pokemon uses a special attack, this pokemon uses the same move. Special Attack is raised by one stage after knocking out an opponent.",
		onAnyTryPrimaryHit: function (target, source, move) {
			if (target === source || move.category !== 'Special') return;
                        let newMove = this.getMoveCopy(move.id);
								if (target.ability !== 'flutteringheart') {
                        this.useMove(newMove, this.effectData.target, source);
								}
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: 1}, source);
			}
		},
		id: "flutteringheart",
		name: "Fluttering Heart",
	},
	"vexingvalor": {
		desc: "On switch-in, the PP of all of this Pokemon's moves are halved and this Pokemon's attack is raised two stages.",
		shortDesc: "Halves all of this Pokemon's moves' PP upon switch-in, but raises Attack by two stages.",
		onStart: function (pokemon) {
			this.boost({atk: 2});
			for (const moveSlot of pokemon.moveSlots) {
					moveSlot.pp = (moveSlot.pp+1)/2;
			}		
		},
		id: "vexingvalor",
		name: "Vexing Valor",
	},
	"fearless": {
		shortDesc: "The priority of all the user's Flying type attacks are at +1, as long as its attack is not lowered.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.type === 'Flying' && pokemon.boosts.atk >= 0) return priority + 1;
		},
		id: "fearless",
		name: "Fearless",
	},
	"limbenhancers": {
		desc: "When this Pokemon knocks out an opponent, this Pokemon's highest non-HP non-Defense stat is raised by one stage along with its Defense.",
		shortDesc: "This Pokemon's Defense and other highest stat are raised by 1 if it attacks and KOes another Pokemon.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat && source.stats[i] !== source.getStat('def', true, true)) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1, def: 1}, source);
			}
		},
		id: "limbenhancers",
		name: "Limb Enhancers",
	},
	"mirrormirror": {
		desc: "On switchin, transforms the foe it is facing into this Pokémon. If it was going to use a move, it uses it after it transforms.",
		shortDesc: "On switch-in, the opponent transforms into it.",
		onStart: function (pokemon) {
			if (this.activeMove && this.activeMove.id === 'skillswap') return;
			let target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
			if (target) {
				target.transformInto(pokemon, target, this.getAbility('imposter'));
			}
		},
		id: "mirrormirror",
		name: "Mirror Mirror",
	},
	"voltboost": {
		shortDesc: "Teravolt + Speed Boost.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Volt Boost');
		},
		onModifyMove: function (move) {
			move.ignoreAbility = true;
		},
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe: 1});
			}
		},
		id: "voltboost",
		name: "Volt Boost",
	},
	"nightterror": {
		shortDesc: "No Guard + Bad Dreams.",
		onAnyAccuracy: function (accuracy, target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target)) {
				return true;
			}
			return accuracy;
		},
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.status === 'slp' || target.hasAbility('comatose')) {
					this.damage(target.maxhp / 8, target, pokemon);
				}
			}
		},
		id: "nightterror",
		name: "Night Terror",
	},
	"mercilessbeast": {
		shortDesc: "If it lands a hit on a poisoned Pokémon, its most proficient stat goes up by 1.",
		onSourceHit: function (target, source, effect) {
			if (target && ['psn', 'tox'].includes(target.status)){
            if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
			}
                        }
		},
		id: "mercilessbeast",
		name: "Merciless Beast",
	},
	"ability": {
		shortDesc: "Fire-type attacking moves have their power doubled and their PP halved.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Blaze boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Blaze boost');
				return this.chainModify(2);
			}
		},
		onDeductPP: function(pokemon, move) {
			if (move.type === 'Fire') return 1;
		},
		id: "ability",
		name: "Ability",
	},
	"typetrap": {
		desc: "Prevents Pokemon from leaving the battle arena if they are the same type as the Plate/Z-Crystal Nose God is holding.",
		shortDesc: "Prevents adjacent foes from choosing to switch if they match the type of a held Plate/Z-Crystal.",
                //TODO: (Possibly) implement form changes
		onFoeTrapPokemon: function (pokemon) {
			if (pokemon.hasType(pokemon.getItem().onPlate) && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function (pokemon, source) {
			if (!source) source = this.effectData.target;
			if ((!pokemon.knownType || pokemon.hasType(pokemon.getItem().onPlate)) && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		id: "typetrap",
		name: "Type Trap",
	},
	"constellation": {
		shortDesc: "Contact Moves used by the holder don't make contact; whenever the holder uses a contact move, its status is cured.",
		onModifyMove: function (move, pokemon) {
                        if (move.flags['contact']){
			      pokemon.cureStatus();
                        }
			delete move.flags['contact'];
		},
		id: "constellation",
		name: "Constellation",
	},
	"lavadive": {
                Desc: "On odd-numbered turns, Fire-type moves have 1.5x power. On even-numbered turns, Fire-type moves have 0.5x power.",
		shortDesc: "Power of Fire-type moves alternates between x1.5 and x0.5 when it attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (attacker.removeVolatile('lavadive') && move.type === 'Fire') {
				this.debug('Lava Dive reduction');
				return this.chainModify(0.5);
			}
                        else if (move.type === 'Fire') {
				this.debug('Lava Dive boost');
				return this.chainModify(1.5);
                        }
			attacker.addVolatile('lavadive');
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (attacker.removeVolatile('lavadive') && move.type === 'Fire') {
				this.debug('Lava Dive reduction');
				return this.chainModify(0.5);
			}
                        else if (move.type === 'Fire') {
				this.debug('Lava Dive boost');
				return this.chainModify(1.5);
                        }
			attacker.addVolatile('lavadive');
		},
		effect: {
			duration: 2,
		},
		id: "lavadive",
		name: "Lava Dive",
	},
	"disguiseburden": {
		desc: "The first time the Pokémon is hit while its disguise is up, the damage will be negated, busting the disguise and doubling its speed. If switched back in, its disguise will still be busted, but the speed boost will be gone.",
		shortDesc: "The first hit this Pokemon takes in battle deals 0 neutral damage and doubles its Speed.",
		onDamagePriority: 1,
		onDamage: function (damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && target.template.speciesid === 'mimiblim' && !target.transformed) {
				this.add('-activate', target, 'ability: Disguise Burden');
				this.effectData.busted = true;
				target.addVolatile('disguiseburden');
				return 0;
			}
		},
		onEffectiveness: function (typeMod, target, type, move) {
			if (!this.activeTarget) return;
			let pokemon = this.activeTarget;
			if (pokemon.template.speciesid !== 'mimiblim' || pokemon.transformed || (pokemon.volatiles['substitute'] && !(move.flags['authentic'] || move.infiltrates))) return;
			if (!pokemon.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate: function (pokemon) {
			if (pokemon.template.speciesid === 'mimiblim' && this.effectData.busted) {
				let template = this.getTemplate('Mimiblim-Busted');
				pokemon.formeChange(template);
				pokemon.baseTemplate = template;
				pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('detailschange', pokemon, pokemon.details);
			}
		},
		effect: {
			onModifySpe: function (spe, pokemon) {
				return this.chainModify(2);
			},
			onEnd: function (pokemon) {
			pokemon.removeVolatile('disguiseburden');
			},
		},
		id: "disguiseburden",
		name: "Disguise Burden",
	},
	"twofaced": {
	    desc: "This Pokemon's stat changes are reversed, unless they affect this Pokemon's highest non-HP stat. When this Pokemon recieves a stat change affected by the first part of this ability or knocks out an opponent, its highest non-HP stat is raised by one stage. If two stats are tied for the highest, neither of them are affected by the inverse stat changes.",
	    shortDesc: "All stats except for the highest have inverted stat changes. The highest stat is boosted whenever this Pokemon lands a KO or has a different stat changed.",
	    onBoost: function(boost, target, source, effect) {
	        if (effect && effect.id === 'zpower') return;
	        let stat = 'atk';
	        let bestStat = 0;
	        for (let i in source.stats) {
	            if (source.stats[i] > bestStat) {
	                stat = i;
	                bestStat = source.stats[i];
	            }
	        }
	        for (let i in boost) {
	            // @ts-ignore
	            if (source.stats[i] != bestStat) {
	                boost[i] *= -1;
	                this.boost({
	                    [stat]: 1
	                }, source);
	            }
	        }
	    },
	    onSourceFaint: function(target, source, effect) {
	        if (effect && effect.effectType === 'Move') {
	            let stat = 'atk';
	            let bestStat = 0;
	            for (let i in source.stats) {
	                if (source.stats[i] > bestStat) {
	                    stat = i;
	                    bestStat = source.stats[i];
	                }
	            }
	            this.boost({
	                [stat]: 1
	            }, source);
	        }
	    },
	    id: "twofaced",
	    name: "Two-Faced",
	},
	"genometree": {
         desc: "The user's Normal- and Fighting-type attacks ignore stat changes and Ghost's immunities. If the user attacks a boosted or Ghost-type Pokémon with a Normal- or Fighting-type attack, then the user's highest non-HP stat is boosted by 1 stage.",
		shortDesc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves. If it does so or hits a boosted Pokemon with such a move, boosts its highest stat.",
		onModifyMovePriority: -5,
		onModifyMove: function (move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
			}
		},
		onSourceHit: function (target, source, move) {
			if (!move || !target) return;
			if (target !== source && move.category !== 'Status' && (move.type === 'Normal' || move.type === 'Fighting')) {
				  let buffed = false;
                                  for (let i in target.boosts) { 
                                  if (target.boosts[i] > 0){
				    source.boosts[i] = target.boosts[i];
                                    buffed = true;
                                  }
                                  if (buffed === true || target.hasType('Ghost')){
				    let stat = 'atk';
				    let bestStat = 0;
				    for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				    }
				    this.boost({[stat]: 1}, source);
											 }
			}
			}
		},
		id: "genometree",
		name: "Genome Tree",
	},
	"blessedprotection": {
		shortDesc: "Infiltrator effects + when a move break this Pokémon’s substitute, that move gets disabled until the target switches out.",
		onModifyMove: function (move) {
			move.infiltrates = true;
		},
                //Code to disable moves that break the substitute is under Substitute.
		id: "blessedprotection",
		name: "Blessed Protection",
	},
	"gutsybeast": {

	    desc: "If this Pokemon has a major status condition, its most proficient stat is multiplied by 1.5; burn's physical damage halving is ignored if highest stat is Attack, and paralysis's speed halving is ignored if highest stat is Speed.",
	    shortDesc: "If this Pokemon is statused, its highest stat is 1.5x; ignores status halving this stat.",
	    onModifyAtkPriority: 5,
	    onModifyAtk: function(atk, pokemon) {
	        let stat = 'atk';
	        let bestStat = 0;
	        for (let i in pokemon.stats) {
	            if (pokemon.stats[i] > bestStat) {
	                stat = i;
	                bestStat = pokemon.stats[i];
	            }
	        }
	        if (pokemon.status && stat === 'atk') {
	            if (pokemon.status === 'brn') {
	                return this.chainModify(3);
	            } else {
	                return this.chainModify(1.5);
	            }
	        }
	    },
	    onModifyDefPriority: 6,
	    onModifyDef: function(def, pokemon) {
	        let stat = 'atk';
	        let bestStat = 0;
	        for (let i in pokemon.stats) {
	            if (pokemon.stats[i] > bestStat) {
	                stat = i;
	                bestStat = pokemon.stats[i];
	            }
	        }
	        if (pokemon.status && stat === 'def') {
	            return this.chainModify(1.5);
	        }
	    },
	    onModifySpAPriority: 5,
	    onModifySpA: function(spa, pokemon) {
	        let stat = 'atk';
	        let bestStat = 0;
	        for (let i in pokemon.stats) {
	            if (pokemon.stats[i] > bestStat) {
	                stat = i;
	                bestStat = pokemon.stats[i];
	            }
	        }
	        if (pokemon.status && stat === 'spa') {
	            return this.chainModify(1.5);
	        }
	    },
	    onModifySpDPriority: 5,
	    onModifySpD: function(spd, pokemon) {
	        let stat = 'atk';
	        let bestStat = 0;
	        for (let i in pokemon.stats) {
	            if (pokemon.stats[i] > bestStat) {
	                stat = i;
	                bestStat = pokemon.stats[i];
	            }
	        }
	        if (pokemon.status && stat === 'spd') {
	            return this.chainModify(1.5);
	        }
	    },
	    onModifySpe: function(spe, pokemon) {
	        let stat = 'atk';
	        let bestStat = 0;
	        for (let i in pokemon.stats) {
	            if (pokemon.stats[i] > bestStat) {
	                stat = i;
	                bestStat = pokemon.stats[i];
	            }
	        }
	        if (pokemon.status && stat === 'spe') {
	            if (pokemon.status === 'par') {
	                return this.chainModify(3);
	            } else {
	                return this.chainModify(1.5);
	            }
	        }
	    },
	    id: "gutsybeast",
	    name: "Gutsy Beast",
	},
	"auraoffailure": {
		shortDesc: "Halves Attack and Special Attack of all Pokemon on the field at 50% max HP or less.",
		onUpdate: function (pokemon) {
			if (this.effectData.target.hp <= this.effectData.target.maxhp / 2) {
				this.debug('Aura of Failure');
				pokemon.addVolatile('auraoffailure');
			}
		},
		effect: {
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, pokemon) {
				return this.chainModify(0.5);
		},
		onFoeModifyAtk: function (atk, pokemon) {
				return this.chainModify(0.5);
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, pokemon) {
				return this.chainModify(0.5);
			},
		onFoeModifySpA: function (atk, pokemon) {
				return this.chainModify(0.5);
			},
		},
		id: "auraoffailure",
		name: "Aura of Failure",
	},
	"slownsteady": {
		shortDesc: "This Pokemon takes 1/2 damage from attacks if it moves last.",
		onFoeBasePowerPriority: 8,
		onFoeBasePower: function (basePower, pokemon) {
			let boosted = true;
			let allActives = pokemon.side.active.concat(pokemon.side.foe.active);
			for (const target of allActives) {
				if (target === pokemon) continue;
				if (this.willMove(target)) {
					boosted = false;
					break;
				}
			}
			if (boosted) {
				this.debug('Analytic boost');
				return this.chainModify(0.5);
			}
		},
		id: "slownsteady",
		name: "Slow 'n' Steady",
	},
	"clearpouch": {
	    desc: "When this Pokemon consumes a Berry, it regains 33% of its maximum HP and any negative stat changes are removed.",
	    shortDesc: "If this Pokemon eats a Berry, it restores 1/3 of its max HP and clears stat drops.",
	    onEatItem: function(item, pokemon) {
	        this.heal(pokemon.maxhp / 3);
	        for (let i in pokemon.boosts) {
	            if (pokemon.boosts[i] < 0) {
	                delete pokemon.boosts[i];
	            }
	        }
	    },
	    id: "clearpouch",
	    name: "Clear Pouch",
	},
	"chainheal": {
		shortDesc: "Upon switching out, this Pokemon is healed for 1/3 of its max HP. Its replacement's ability is then replaced with Chain Heal.",
		onBeforeSwitchOut: function (pokemon){
			pokemon.side.addSideCondition('chainheal', pokemon, 'chainheal');
		},
		onSwitchOut: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 3);
		},
		id: "chainheal",
		name: "Chain Heal",
	},
	"360noscope": {
		shortDesc: "All of this Pokémon's attacking moves strike for a critical hit. Crit power is 2*.",
		onModifyCritRatio: function (critRatio, source, target) {
			return 5;
		},
  	    onModifyDamage: function (damage, source, target, move) {
			if (move.crit) {
				this.debug('Sniper boost');
				return this.chainModify(2);
			}
		},
		id: "360noscope",
		name: "360 No-Scope",
	},
	"agelessblizzard": {
		desc: "On switchin, Hail begins and and cannot be removed (even by Primordial Sea/Desolate Land/Delta Stream/Cloud Nine/Air Lock and the like) unless this Ability is removed or this Pokémon switches out.",
		shortDesc: "On switch-in, hail starts and only ends when this Ability is not active in battle.",
                //TODO: Prevent Air Lock, Cloud Nine, etc. from working. Dunno if Atmospheric Perversion affects this hail so ;d
		onStart: function (source) {
                        //Code to make it last a very long time will be under Hail's code.
			this.setWeather('hail');
		},
		onAnySetWeather: function (target, source, weather) {
			if (this.getWeather().id === 'hail') return false;
		},
		onEnd: function (pokemon) {
			if (this.weatherData.source !== pokemon) return;
			for (const side of this.sides) {
				for (const target of side.active) {
					if (target === pokemon) continue;
					if (target && target.hp && target.hasAbility('agelessblizzard')) {
						this.weatherData.source = target;
						return;
					}
				}
			}
			this.clearWeather();
		},
		id: "agelessblizzard",
		name: "Ageless Blizzard",
	},
	"deceiver": {
		desc: "Inverts stat changes on user's SpA. Additionally boosts SpA whenever it claims a kill (doesn't take invertion in account here, just like Z-moves).",
      shortDesc: "Inverts SpA changes. Boosts this stat if it lands a KO.",
		onBoost: function (boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.spa && boost.spa < 0) {
				boost.spa *= -1;
			}
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: -1}, source);
			}
		},
		id: "deceiver",
		name: "Deceiver",
	},
	"stanceshield": {
		desc: "Whenever this Pokémon uses King's Shield or any move that could potentially induce a status condition it switches to its Meteor Form, when this Pokémon uses any attacking move, it switches to its blade form.",
		shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",
		onBeforeMovePriority: 0.5,
		onBeforeMove: function (attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Minislash' || attacker.transformed) return;
                        //TODO: Have Minislash change forms if it uses a status move that can inflict status.
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			let targetSpecies = (move.id === 'kingsshield' ? 'Minislash' : 'Minislash-Blade');
			if (attacker.template.species !== targetSpecies && attacker.formeChange(targetSpecies)) {
				this.add('-formechange', attacker, targetSpecies, '[from] ability: Stance Shield');
			}
		},
		id: "stanceshield",
		name: "Stance Shield",
	},
	"staredown": {
		desc: "The user cannot use a move every other turn. However, if the user stays in, the opponent's Attack stat is lowered by one stage at the beginning of the turn.",
		shortDesc: "This Pokemon skips every other turn instead of using a move, but lowers opponents' Attack in doing so.",
		onBeforeMovePriority: 9,
		onBeforeMove: function (pokemon, target, move) {
			if (pokemon.removeVolatile('staredown')) {
				this.add('cant', pokemon, 'ability: Stare Down');
			   let activated = false;
			   for (const target of pokemon.side.foe.active) {
				   if (!target || !this.isAdjacent(target, pokemon)) continue;
				   if (!activated) {
					    	this.add('-ability', pokemon, 'Stare Down', 'boost');
				        	activated = true;
			      }
				   if (target.volatiles['substitute']) {
				        	this.add('-immune', target, '[msg]');
				   } else {
				        	this.boost({atk: -1}, target, pokemon);
				   }
        		 }
		     return false;
		     }
		    pokemon.addVolatile('staredown');
		},
		effect: {
			duration: 2,
		},
		id: "staredown",
		name: "Stare Down",
	},
	"dirtnap": {
		shortDesc: "The Evasion stats of the opponents are ignored.",
		onModifyMovePriority: -1,
		onModifyMove: function (move) {
			move.accuracy = true;
		},
		id: "dirtnap",
		name: "Dirt Nap",
	},
	"quicktrap": {
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are Electric-type.",
		shortDesc: "Prevents adjacent foes from choosing to switch unless they are Electric-type.",
		onFoeTrapPokemon: function (pokemon) {
			if (!this.isAdjacent(pokemon, this.effectData.target)) return;
			if (!pokemon.hasType('Electric')) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function (pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!this.isAdjacent(pokemon, source)) return;
			if (!pokemon.hasType('Electric')) {
				pokemon.maybeTrapped = true;
			}
		},
		id: "quicktrap",
		name: "Quick Trap",
	},
	"teraarmor": {
        shortDesc: "Moves targeting this Pokémon are unaffected by the Ability of the move user.",
        onFoeBeforeMove: function(pokemon, target) {
			  let allActives = pokemon.side.active.concat(pokemon.side.foe.active);
			for (const target of allActives) {
			  if (target !== pokemon) {
                pokemon.addVolatile('teraarmor');
			  }
		  	}
        },
        id: "teraarmor",
        name: "Tera Armor",
    },
	"turbocurse": {
        shortDesc: "Moves targeting this Pokémon are unaffected by the Ability of the move user.",
        onFoeBeforeMove: function(pokemon, target) {
			  let allActives = pokemon.side.active.concat(pokemon.side.foe.active);
			for (const target of allActives) {
			  if (target !== pokemon) {
                pokemon.addVolatile('teraarmor');
			  }
		  	}
        },
        id: "turbocurse",
        name: "Turbo Curse",
    },
	"melodyoftheheart": {
		shortDesc: "Recovers 33% of max HP upon switching out, or at the end of every turn in Hail. Takes no Hail damage.",
		onWeather: function (target, source, effect) {
			if (effect.id === 'hail' || effect.id === 'solarsnow') {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.heal(target.maxhp / 3);
				} else {
					this.damage(target.maxhp / 3, target, target);
				}
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail' || type === 'solarsnow') return false;
		},
		onSwitchOut: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 3);
		},
		id: "melodyoftheheart",
		name: "Melody of the Heart",
	},
	"mixtape": {
			shortDesc: "If hit by a Fire-type or Sound-based move, the Pokemon's own moves of that sort are powered up. Immune to both. ",
          onTryHit: function (target, source, move) {
			if (target !== source && (move.type === 'Fire' || move.flags['sound'])) {
				move.accuracy = true;
				if (!target.addVolatile('mixtape')) {
					this.add('-immune', target, '[msg]', '[from] ability: Mix Tape');
				}
				return null;
			}
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('mixtape');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (target) {
				this.add('-start', target, 'ability: Mix Tape');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function (atk, attacker, defender, move) {
				if (move.type === 'Fire' || move.flags['sound']) {
					this.debug('Mix Tape boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function (atk, attacker, defender, move) {
				if (move.type === 'Fire' || move.flags['sound']) {
					this.debug('Mix Tape boost');
					return this.chainModify(1.5);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'ability: Mix Tape', '[silent]');
			},
		},
		id: "mixtape",
		name: "Mix Tape",
		},
	"beastroar": {
        shortDesc: "Lowers the foe’s highest stat by 1 stage.",
		onStart: function (pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
			let stat = 'atk';
				let bestStat = 0;
				for (let i in target.stats) {
					if (target.stats[i] > bestStat) {
						stat = i;
						bestStat = target.stats[i];
					}
				}
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Beast Roar', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target, '[msg]');
				} else {
					this.boost({[stat]: -1}, target, pokemon);
				}
			}
			}
		},
        id: "beastroar",
        name: "Beast Roar",
    },
	"sturdymold": {
        shortDesc: "This Pokemon cannot be KO'd in one hit, and the abilities of attacking Pokemon are nullified.",
        onFoeBeforeMove: function(pokemon, target) {
			  let allActives = pokemon.side.active.concat(pokemon.side.foe.active);
			for (const target of allActives) {
			  if (target !== pokemon) {
                              pokemon.addVolatile('teraarmor');
			  }
		  	}
        },
		onTryHit: function (pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function (damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy Mold');
				return target.hp - 1;
			}
		},
        id: "sturdymold",
        name: "Sturdy Mold",
    },
	"moldedstall": {
        shortDesc: "No abilities have an effect, other than this one, until after this Pokemon acts.",
        onFoeBeforeMove: function(pokemon, target) {
				let allActives = pokemon.side.active.concat(pokemon.side.foe.active);
				for (const target of allActives) {
			  		if (target !== pokemon && this.willMove(target)) {
                  pokemon.addVolatile('teraarmor');
			  		}
		  		}
        },
		onModifyMove: function(move) {
			move.ignoreAbility = true;
		},	
        id: "moldedstall",
        name: "Molded Stall",
    },
	"unamazed": {
		shortDesc: "Moves used by and against this Pokémon ignore the foe’s ability and stat changes.",
                onFoeBeforeMove: function(pokemon, target) {
			  let allActives = pokemon.side.active.concat(pokemon.side.foe.active);
			for (const target of allActives) {
			  if (target !== pokemon) {
                              pokemon.addVolatile('teraarmor');
			  }
		  	}
	},
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Unamazed');
		},
		onModifyMove: function(move) {
			move.ignoreAbility = true;
		},
		onAnyModifyBoost: function (boosts, target) {
			let source = this.effectData.target;
			if (source === target) return;
			if (source === this.activePokemon && target === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (target === this.activePokemon && source === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		id: "unamazed",
		name: "Unamazed",
	},
	"jealousaggressor": {
		shortDesc: "Deals double damage to Pokemon not holding an item.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender) {
			if (!defender.item) {
				this.debug('Jealous Aggressor boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender) {
			if (!defender.item) {
				this.debug('Jealous Aggressor boost');
				return this.chainModify(2);
			}
		},
		id: "jealousaggressor",
		name: "Jealous Aggressor",
	},
	"snowsucker": {
		desc: "This Pokemon summons hail when it switches in. In hail or when it is targeted by an Electric-type move, this Pokemon heals 25% of its HP back and summons Hail; Electric immunity.",
		shortDesc: "Summons hail upon switch-in; This Pokemon heals 1/4 of its max HP and summons hail when hit by Electric moves or under hail; Immune to both.",
		onStart: function (source) {
			this.setWeather('hail');
		},
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Snow Sucker');
				}
            this.setWeather('hail');
				return null;
			}
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'hail' || effect.id === 'solarsnow') {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.heal(target.maxhp / 4);
				} else {
					this.damage(target.maxhp / 4, target, target);
				}
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail' || type === 'solarsnow') return false;
		},
		id: "snowsucker",
		name: "Snow Sucker",
	},
	"hailveil": {
		desc: "This Pokemon cannot be burned. If it would have been burned, it instead sets up hail. At the end of each turn in hail, this Pokemon heals 1/16 of its maximum HP.",
		shortDesc: "Cannot be burned. Sets up Hail if it would otherwise be burned, and heals 6.25% of HP in that weather.",
		onUpdate: function (pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Veil');
            this.setWeather('hail');
				pokemon.cureStatus();
			}
		},
		onSetStatus: function (status, target, source, effect) {
			if (status.id !== 'brn') return;
			if (!effect || !effect.status) return false;
         if (!this.setWeather('hail')){
			    this.add('-immune', target, '[msg]', '[from] ability: Hail Veil');
         }
			return false;
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'hail' || effect.id === 'solarsnow') {
				if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
					this.heal(target.maxhp / 16);
				} else {
					this.damage(target.maxhp / 16, target, target);
				}
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail' || type === 'solarsnow') return false;
		},
		id: "hailveil",
		name: "Hail Veil",
	},
	"veteran": {
		shortDesc: "Sniper + Merciless, with the addition that if it crits a non-poisoned mon, the target will get poisoned.",
		onModifyCritRatio: function (critRatio, source, target) {
			if (target && ['psn', 'tox'].includes(target.status)) return 5;
		},
		onModifyDamage: function (damage, source, target, move) {
			if (move.crit) {
				this.debug('Sniper boost');
				source.trySetStatus('psn', target);
				return this.chainModify(1.5);
			}
		},
		id: "veteran",
		name: "Veteran",
	},
	"lighteninglightning": {
		shortDesc: "When this Pokemon consumes its held item, its speed is doubled. Also restores 25% of its max HP when hit by an Electric-type move or when consuming its held item.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Volt Absorb');
				}
				return null;
			}
		},
		onAfterUseItem: function (item, pokemon) {
			if (pokemon !== this.effectData.target) return;
                        this.heal(pokemon.maxhp / 4);
			pokemon.addVolatile('lighteninglightning');
		},
		onTakeItem: function (item, pokemon) {
                        this.heal(pokemon.maxhp / 4);
			pokemon.addVolatile('lighteninglightning');
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('lighteninglightning');
		},
		effect: {
			onModifySpe: function (spe, pokemon) {
				if (!pokemon.item) {
					return this.chainModify(2);
				}
			},
		},
		id: "lighteninglightning",
		name: "Lightening Lightning",
	},
	"technologicalarmor": {
		shortDesc: "Attacks with a BP of 60 or less that target the user have their power halved.",
		onBasePowerPriority: 6,
		onSourceBasePower: function (basePower, attacker, defender, move) {
			if (basePower <= 60) {
				return this.chainModify(0.5);
			}
		},
		id: "technologicalarmor",
		name: "Technological Armor",
	},
	"solidsand": {
		desc: "Upon switching in, the user summons Sandstorm for 5 turns (8 if holding Smooth Rock). If skies are clear and the user is hit by direct damage that would KO it, the user instead survives at 1 HP and summons Sandstorm again.",
		shortDesc: "On switch-in, this Pokemon summons Sandstorm. Cannot be OHKO'd in clear skies, summoning Sandstorm if this would happen.",
		onStart: function (source) {
			this.setWeather('sandstorm');
		},
		onTryHit: function (pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Solid Sand');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function (damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move' && !this.isWeather()) {
				this.add('-ability', target, 'Solid Sand');
			        this.setWeather('sandstorm');
				return target.hp - 1;
			}
		},
		id: "sandstream",
		name: "Solid Sand",
	},
	"ambulance": {
		shortDesc: "This Pokemon cannot be statused, sharply raising Speed if this happens. Doubles Speed upon use of item.",
		onUpdate: function (pokemon) {
			if (pokemon.status) {
				this.add('-activate', pokemon, 'ability: Ambulance');
				this.boost({spe: 2}, pokemon);
				pokemon.cureStatus();
			}
		},
		onSetStatus: function (status, target, source, effect) {
			if (!effect || !effect.status) return false;
			this.boost({spe: 2}, target);
			this.add('-immune', target, '[msg]', '[from] ability: Ambulance');
			return false;
		},
		onAfterUseItem: function (item, pokemon) {
			if (pokemon !== this.effectData.target) return;
			pokemon.addVolatile('ambulance');
		},
		onTakeItem: function (item, pokemon) {
			pokemon.addVolatile('ambulance');
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('ambulance');
		},
		effect: {
			onModifySpe: function (spe, pokemon) {
				if (!pokemon.item) {
					return this.chainModify(2);
				}
			},
		},
		id: "ambulance",
		name: "Ambulance",
	},
	"temporaryguard": {
		shortDesc: "The user is immune to non-super-effective attacks for the first 5 turns after it is sent out.",
		onStart: function (pokemon) {
			pokemon.addVolatile('temporaryguard');
		},
		onEnd: function (pokemon) {
			delete pokemon.volatiles['temporaryguard'];
			this.add('-end', pokemon, 'Temporary Guard', '[silent]');
		},
		effect: {
			duration: 5,
			onStart: function (target) {
				this.add('-start', target, 'ability: Temporary Guard');
			},
             onTryHit: function (target, source, move) {
			  if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			  this.debug('Wonder Guard immunity: ' + move.id);
			  if (target.runEffectiveness(move) <= 0) {
				this.add('-immune', target, '[msg]', '[from] ability: Temporary Guard');
				return null;
			}
			},
			onEnd: function (target) {
				this.add('-end', target, 'Temporary Guard');
			},
		},
		id: "temporaryguard",
		name: "Temporary Guard",
	},
		"synchroveil": {
		desc: "If it gets afflicted with a status ailment, the Pokemon instantly cures itself. If another Pokémon inflicted the status, the Pokémon attempts to inflict that status on the other Pokémon.",
		shortDesc: "If another Pokemon burns/poisons/paralyzes this Pokemon, the status is transferred onto that Pokemon.",
		onAfterSetStatus: function (status, target, source, effect) {
			if (!source || source === target) return;
			this.add('-activate', target, 'ability: Synchro Veil');
			if (effect && effect.id === 'toxicspikes'){ 
                        source.cureStatus();
                        return;}
			if (status.id === 'slp' || status.id === 'frz'){ 
                          source.cureStatus();
                          return;}
			// @ts-ignore
			source.trySetStatus(status, target, {status: status.id, id: 'synchroveil'});
                        source.cureStatus();
		},
		id: "synchroveil",
		name: "Synchro Veil",
	},
	"pressuratefried": {
		shortDesc: "Post Pressurate ability.",
		id: "pressuratefried",
		name: "Pressurate Fried",
		rating: 0,
	},
	"pressurate": {
		shortDesc: "Opponent's moves' PPs are halved when this Pokémon enters the field.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Pressurate');
			for (const target of pokemon.side.foe.active) {
				if (target.fainted) continue;
				for (const moveSlot of target.moveSlots) {
					moveSlot.pp = (moveSlot.pp+1)/2;
				}
			}
			pokemon.baseAbility = 'pressuratefried';
		},
		id: "pressurate",
		name: "Pressurate",
	},
	"metalmonster": {
		shortDesc: "This Pokemon's Steel-type moves deal 1.5x damage and if this Pokemon gets a KO with a Steel-type move, its highest non-HP stat goes up by 2 stages.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move' && effect.type === 'Steel') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 2}, source);
			}
		},
		id: "metalmonster",
		name: "Metal Monster",
	},
	"shatteredprism": {
		desc: "This Pokémon receives 3/4 damage from super-effective attacks. Not-very-effective moves used by this Pokémon do 75% more damage, and this Pokémon's moves ignore the foe's Ability, whereas this Pokémon's Ability cannot be ignored by foes.",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and deals 1.75x damage with resisted hits. Ignores abilities when attacking.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Prism Armor neutralize');
				return this.chainModify(0.75);
			}
		},
		onModifyMove: function (move) {
			move.ignoreAbility = true;
		},
		onModifyDamage: function (damage, source, target, move) {
			if (move.typeMod < 0) {
				this.debug('Tinted Lens boost');
				return this.chainModify(1.75);
			}
		},
		isUnbreakable: true,
		id: "Shattered Prism",
		name: "Shattered Prism",
	},
"magicmirror": {
		shortDesc: "Non-damaging moves and Dark-type moves targeting this Pokemon increase its Attack by 1 stage and are reflected back to the opponent.",
		id: "magicmirror",
		name: "Magic Mirror",
		onTryHitPriority: 1,
		onTryHit: function (target, source, move) {
			if (((target === source || !move.flags['reflectable']) && move.type !== 'Dark') || move.hasBounced) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.boost({atk: 1}, source);
			if (target.ability !== 'magicmirror') {
         this.useMove(newMove, this.effectData.target, source);
			}
			return null;
		},
		onAllyTryHitSide: function (target, source, move) {
			if (((target === source || !move.flags['reflectable']) && move.type !== 'Dark') || move.hasBounced) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.boost({atk: 1}, source);
			if (target.ability !== 'magicmirror') {
         this.useMove(newMove, this.effectData.target, source);
			}
			return null;
		},
		effect: {
			duration: 1,
		},
	},
"beautifulobliterationweapon": {
		desc: "This Pokemon summons Beautiful Terrain upon switching in. Beautiful Terrain multiplies the power of Fire and Fairy-type moves 1.5x and burns anything that can be burnt. When this terrain fades, this ability functions just like Flame Body.",
		shortDesc: "On switch-in, this Pokemon summons Beautiful Terrain, which powers up Fire- and Fairy-type moves and burns anything that can be burned. Contact can inflict burn.",
		onStart: function (pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Beautiful Obliteration Weapon', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute'] || target.hasType('Fire')) {
					this.add('-immune', target, '[msg]');
				} else {
					this.boost({atk: -2}, target, pokemon);
				}
			}
		},
		onSwitchIn: function (source) {
			this.setTerrain('beautifulterrain');
		},
		id: "beautifulobliterationweapon",
		name: "Beautiful Obliteration Weapon",
	},
	
	"advocatescale": {
		shortDesc: "Weaknesses become resistances, and resistances become weaknesses.",
		onEffectiveness: function(typeMod, target, type, move) {
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
		id: "advocatescale",
		name: "Advocate Scale",
	},
"inversearmor": {
    desc: "Type effectiveness of moves that the holder uses or is hit by is inverted (Inverse Battle rules apply; type effectiveness of moves used by Mold Breaker variants users is not influenced by this ability).",
    shortDesc: "Type effectiveness in moves that target or are used by this Pokemon is inverted.",
	 onModifyMove: function (move) {
		if (!move.ignoreImmunity) move.ignoreImmunity = {};
		if (move.ignoreImmunity !== true) {
			move.ignoreImmunity[move.type] = true;
		}
	 },
	 onSourceModifyMove: function (move) {
		if (!move.ignoreImmunity) move.ignoreImmunity = {};
		if (move.ignoreImmunity !== true) {
			move.ignoreImmunity[move.type] = true;
		}
	 },
    onEffectiveness: function(typeMod, target, type, move) {
        if (move && !this.getImmunity(move, type)) return 1;
        return -typeMod;
    },
    onSourceEffectiveness: function(typeMod, target, type, move) {
        if (move && !this.getImmunity(move, type)) return 1;
        return -typeMod;
    },
    id: "inversearmor",
    name: "Inverse Armor",
},
	"mentalfear": {
		shortDesc: "Always appear as full health to the opponent.",
		onUpdate: function (pokemon) {
				let details = (pokemon.hp === pokemon.maxhp);
				this.add('replace', pokemon, details);
		},
		id: "mentalfear",
		name: "Mental Fear",
	},
	"magicworker": {
	    desc: "If the bearer would take indirect damage in a turn, it does not take damage, and the power of its attacking moves is 1.5*; multiple instances of passive damage do not affect the power multiplier.",
	    shortDesc: "Indirect damage powers up this Pokemon's attacks and is nullified.",
	    onDamage: function(damage, target, source, effect) {
	        if (effect.effectType !== 'Move') {
	            target.addVolatile('magicworker')
	            return false;
	        }
	    },
	    onEnd: function(pokemon) {
	        pokemon.removeVolatile('magicworker');
	    },
	    effect: {
	        noCopy: true, // doesn't get copied by Baton Pass
	        onStart: function(target) {
	            this.add('-start', target, 'ability: Magicworker');
	        },
	        onModifyAtkPriority: 5,
	        onModifyAtk: function(atk, attacker, defender, move) {
	            this.debug('Magicworker boost');
	            return this.chainModify(1.5);
	        },
	        onModifySpAPriority: 5,
	        onModifySpA: function(atk, attacker, defender, move) {
	            this.debug('Magicworker boost');
	            return this.chainModify(1.5);
	        },
	        onEnd: function(target) {
	            this.add('-end', target, 'ability: Magicworker', '[silent]');
	        },
	    },
	    id: "magicworker",
	    name: "Magicworker",
	},
	"poisonpores": {
	    desc: "When this Pokemon is on the field, all Poison and Steel-types have their speed doubled. If a Pokemon is poisoned, their speed is halved.",
	    shortDesc: "Doubles the speed of all active Poison- and Steel-types, and halves the speed of all active poisoned Pokemon.",
		 //TODO: Implement Corrosion effects. The heart of the system has Corrosion's effects hard-coded into it.
	    onAnyModifySpe: function(spe, pokemon) {
	        if (pokemon.hasType('Poison') || pokemon.hasType('Steel')) {
	            return this.chainModify(2);
	        }
	    },
	    id: "poisonpores",
	    name: "Poison Pores",
	},
	
	"paudancer": {
		desc: "Whenever another Pokémon or the user uses a dance or a Psychic-type move, a Pokémon with the ability Pa'u Dancer will immediatly use that move as well. Using a move through Pa'u Dancer is a separate action to usin the move originally selected. Pa'u Dancer will not actiavte for a move copied by Pa'u Dancer, or any Dancer-based abilities.",
		shortDesc: "After another Pokemon uses a dance move or a Psychic-type move, this Pokemon uses the same move.",
		onTryHit: function (target, source, move) {
			if (move.type === 'Psychic' || move.flags['dance']) {
				let newMove = this.getMoveCopy(move.id);
				if (target.ability !== 'dancer' || target.ability !== 'paudancer') {
				this.useMove(newMove, source);
				}
			}
		},
		id: "paudancer",
		name: "Pa'u Dancer",
		// implemented in runMove in scripts.js
	},
	
	
	"pompomdancer": {
		desc: "Whenever another Pokémon or the user uses a dance or an Electric-type move, a Pokémon with the ability Pom-Pom Dancer will immediately use that move as well. Using a move through Pom-Pom Dancer is a separate action to using the move originally selected. Pom-Pom Dancer will not activate for a move copied by Pom-Pom Dancer, or any Dancer-based abilities.",
		shortDesc: "After another Pokemon uses a dance move or an Electric-type move, this Pokemon uses the same move.",
		onFoeAfterMove: function (target, source, move) {
			if (move.type === 'Electric' || move.flags['dance']) {
				let newMove = this.getMoveCopy(move.id);
				if (target.ability !== 'dancer' || target.ability !== 'pompomdancer') {
				this.useMove(newMove, source);
				}
			}
		},
		id: "pompomdancer",
		name: "Pom-Pom Dancer",
		// implemented in runMove in scripts.js
	},
	
	"bailedancer": {
		desc: "Whenever another Pokémon or the user uses a dance or a Grass-type move, a Pokémon with the ability Baile Dancer will immediatly use that move as well. Using a move through Baile Dancer is a separate action to usin the move originally selected. Baile Dancer will not actiavte for a move copied by Baile Dancer, or any Dancer-based abilities.",
		shortDesc: "After another Pokemon uses a dance move or a Grass-type move, this Pokemon uses the same move.",
		onTryHit: function (target, source, move) {
			if (move.type === 'Grass' || move.flags['dance']) {
				let newMove = this.getMoveCopy(move.id);
				if (target.ability !== 'dancer' || target.ability !== 'bailedancer') {
				this.useMove(newMove, source);
				}
			}
		},
		id: "bailedancer",
		name: "Baile Dancer",
		// implemented in runMove in scripts.js
	},
	
	"sensudancer": {
		desc: "Whenever another Pokémon or the user uses a dance or a Fairy-type move, a Pokémon with the ability Sensu Dancer will immediatly use that move as well. Using a move through Sensu Dancer is a separate action to usin the move originally selected. Sensu Dancer will not actiavte for a move copied by Sensu Dancer, or any Dancer-based abilities.",
		shortDesc: "After another Pokemon uses a dance move or a Fairy-type move, this Pokemon uses the same move.",
		onTryHit: function (target, source, move) {
			if (move.type === 'Fairy' || move.flags['dance']) {
				let newMove = this.getMoveCopy(move.id);
				if (target.ability !== 'dancer' || target.ability !== 'sensudancer') {
				this.useMove(newMove, source);
				}
			}
		},
		id: "sensudancer",
		name: "Sensu Dancer",
		// implemented in runMove in scripts.js
	},
	
	"radioactivesurge": {
		desc: "This Pokemon summons Radioactive Terrain upon switching in. Radioactive Terrain multiplies the power of Electric and Poison-type moves 1.5x and poisons anything that can be poisoned. When this terrain fades, this ability functions just like Poison Point.",
		shortDesc: "On switch-in, this Pokemon summons Radioactive Terrain, which powers up Electric- and Poison-type moves and poisons anything that can be poisoned. Contact can inflict poison.",
		onStart: function (source) {
			this.setTerrain('radioactiveterrain');
		},
		id: "radioactivesurge",
		name: "Radioactive Surge",
	},
	
	"zeroawareness": {
		shortDesc: "Increases power of moves with secondary effects by 30%. Ignores the opponent's stat boosts and their moves' secondary effects.",
		onModifyMove: function (move, pokemon) {
			if (move.secondaries) {
				move.hasSheerForce = true;
			}
		},
		onAnyModifyBoost: function (boosts, target) {
			let source = this.effectData.target;
			if (source === target) return;
			if (source === this.activePokemon && target === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (target === this.activePokemon && source === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.hasSheerForce) return this.chainModify([0x14CD, 0x1000]);
		},
		onModifySecondaries: function (secondaries) {
			this.debug('Shield Dust prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		id: "zeroawareness",
		name: "Zero Awareness",
	},
	"ravage": {
		shortDesc: "This Pokémon's moves always crit and it cannot be critted.",
		onModifyMove: function(move) {
			move.willCrit = true;
		},
		onCriticalHit: false,
		id: "ravage",
		name: "Ravage",
	},
	"noimmigrants": {
		shortDesc: "If a Pokémon switches in, this Pokémon's highest stat is raised by one, and if the Pokémon is knocked out, this Pokémon receives another +1 boost to its highest stat.",
		onFoeSwitchIn: function (target, source, effect) {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				this.boost({[stat]: 1}, source);
			}
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
			}
		},
		id: "noimmigrants",
		name: "NO IMMIGRANTS",
	},
	"dramaticrage": {
		shortDesc: "This Pokémon's Special Attacks with secondary effects are boosted by 1.5* and have their secondary effects removed. When this Pokémon is below half health, this rises to 2*. Also removes Life Orb recoil.",
		onModifyMove: function (move, pokemon) {
			if (move.secondaries && move.category === 'Special') {
				delete move.secondaries;
				// Actual negation of `AfterMoveSecondary` effects implemented in scripts.js
				move.hasSheerForce = true;
			}	
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
		if (move.hasSheerForce && pokemon.hp > pokemon.maxhp / 2) {
				return this.chainModify(1.5);
			}
		else if (move.hasSheerForce && pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(2);
			}
		},
		id: "dramaticrage",
		name: "Dramatic Rage",
	},
	"nautralcurse": {
		shortDesc: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",
		onSwitchOut: function (pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				target.addVolatile('disable', this.effectData.source);
			}
		},
		id: "nautralcurse",
		name: "Nautral Curse",
	},
	"thehiddenone": {
		shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy.",
		id: "thehiddenone",
		name: "The Hidden One",
		onUpdate: function	(pokemon, source, move) {
		for (const target of pokemon.side.foe.active) {
		let oldAbility = target.setAbility('mummy', target, 'truant', true);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Mummy', oldAbility, '[of] ' + target, '[silent]');
				}
			}
		},
		onFoeTrapPokemon: function (pokemon) {
			if (pokemon.hasType('Steel') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function (pokemon, source) {
			if (!source) source = this.effectData.target;
			if ((!pokemon.knownType || pokemon.hasType('Steel')) && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact'] && source.ability !== 'mummy') {
				let oldAbility = source.setAbility('mummy', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Mummy', this.getAbility(oldAbility).name, '[of] ' + source);
					target.tryTrap(true);
				}
			}
		},
	},
	"compoundpressure": {
		shortDesc: "Doubles accuracy, but moves with less than 100 accuracy will use up 2 PP rather than 1.",
		onModifyMove: function (move) {
			if (move.accuracy < 100) {
				move.compoundpressure = true;
			}
		},
		onSourceModifyAccuracy: function (accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('compoundeyes - enhancing accuracy');
			return accuracy * 2;
		},
		onSourceDeductPP: function (move) {
			if (!move.compoundpressure) return;
			return 1;
		},
		id: "compoundpressure",
		name: "Compound Pressure",
	},
	"sanddreams": {
		shortDesc: "Opposing sleeping Pokemon take sandstorm chip damage while on the field with this Pokemon.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				if (!this.getImmunity('sandstorm', pokemon)) {
					 return null;
					 }
				else {
					if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
						this.damage(target.maxhp / 16, target, target);
					} else {
						this.heal(target.maxhp / 16);
					}
				}
			}
		},
		id: "sanddreams",
		name: "Sand Dreams",
	},
	"horsetailarmor": { // TODO: This is a WIP
	    shortDesc: "Multi-strike attacks always hit the maximum number of times. This Pokemon is immune to moves and entry hazards of the same type as any multi-strike moves it knows, as long as it is holding an item.",
	    onModifyMove: function(move) {
	        if (move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
	            move.multihit = move.multihit[1];
	        }
	        if (move.multiaccuracy) {
	            delete move.multiaccuracy;
	        }
	    },
	    onTryHit: function(source, target, move) {
	        for (const moveSlot of target.moveSlots) {
	            if (moveSlot.id && move.type === moveSlot.id.type && moveSlot.id.multihit) {
	                this.add('-immune', target, '[msg]', '[from] ability: Horsetail Armor');
	                return null;
	            }
	        }
	    },
	    id: "horsetailarmor",
	    name: "Horsetail Armor",
	},
	"sandpressure": { //TODO: Make it work once per weather change
		shortDesc: "Opponent's moves' PPs are halved when this Pokémon and Sandstorm become active simultaneously.",
		onWeather: function (pokemon) {    
			this.add('-ability', pokemon, 'Sand Pressure');
			for (const target of pokemon.side.foe.active) {
				if (target.fainted) continue;
				for (const moveSlot of target.moveSlots) {
					if (this.isWeather('sandstorm')) {
						if (target.volatiles['atmosphericperversion'] == target.volatiles['weatherbreak']){
							moveSlot.pp = (moveSlot.pp+1)/2;
						} else {
							moveSlot.pp = moveSlot.pp*2;
							if (moveSlot.pp > moveSlot.maxpp){
								moveSlot.pp = moveSlot.maxpp;
							}
						}
					}
				}
			}
		},
		id: "sandpressure",
		name: "Sand Pressure",
	},
	"sheerflight": { // TODO: Remove Life Orb recoil on usage of a secondary move
		shortDesc: "During the turn that a move with a secondary effect was used by this Pokemon, it is immune to ground and takes no Life Orb recoil.",
		onModifyMove: function (move, source) {
			if (move.secondaries) {
				move.sheerflight = true;
				source.addVolatile('sheerflight');
			}
		},
		effect: {
			duration: 1,
			onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Ground' && target.volatiles['sheerflight']) {
					this.add('-immune', target, '[msg]', '[from] ability: Sheer Flight');
				return null;
			}
		},
		},
		id: "sheerflight",
		name: "Sheer Flight",
	},
	"powerforward": {
		shortDesc: "Moves with a chance to flinch heal this Pokémon for 12.5% of its HP.",
		onTryHit: function (target, source, move) {
			for (const secondary of move.secondaries) {
					if (!move.secondaries) move.secondaries = [];
					if (target !== source && secondary.volatileStatus === 'flinch') {
					if (!this.heal(target.maxhp / 8)) {
					this.add('-immune', target, '[msg]', '[from] ability: Power Forward');
				}
				return null;
				}
			}
		},
		id: "powerforward",
		name: "Power Forward",
	},
	"weathercaster": {
		shortDesc: "While this Pokemon is active, its secondary type changes.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Weather Caster');
			let type = this.getMove(pokemon.moveSlots[0].id).type;
			if (type === 'Fire') {
			pokemon.setType('Electric', 'Fire');
			this.setWeather('sunnyday');
			}
			if (type === 'Water') {
			pokemon.setType('Electric', 'Water');
			this.setWeather('raindance');
			}
			if (type === 'Ice') {
			pokemon.setType('Electric', 'Ice');
			this.setWeather('hail');
			}
			this.add('-start', pokemon, 'typechange', type);
		},
		id: "weathercaster",
		name: "Weather Caster",
	},
	"victorysystem": { // TODO: Check if this works
		shortDesc: "Holding a Memory changes this Pokemon's primary type and multiplies its accuracy by 1.5.",
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
				// @ts-ignore
				let type = pokemon.getItem().onMemory;
				// @ts-ignore
				if (!type || type === true) {
					type = 'Normal';
				}
			if(type === 'Fire'){
				pokemon.setType('Fire');
			} else {
				pokemon.setType([type, 'Fire']);
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'embargo' && pokemon.getItem() && pokemon.getItem().onMemory) return false;
		},
		onTryHit: function (pokemon, target, move) {
			if (move.id === 'embargo' && pokemon.getItem() && pokemon.getItem().onMemory) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Victory System');
				return null;
			}
		},
		onTakeItem: function (item, pokemon, source) {
			if (!pokemon.getItem().onMemory || this.suppressingAttackEvents() && pokemon !== this.activePokemon || !pokemon.hp) return;
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				return false;
			}
		},
		onSourceModifyAccuracy: function (accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('compoundeyes - enhancing accuracy');
			return accuracy * 1.5;
		},
		id: "victorysystem",
		name: "Victory System",
	},
	"resurrection": {
		shortDesc: "When this Pokémon gets KOed for the first time, it gains 50% of its original HP and changes to Reborn form.",
		onDamage: function (damage, target, source, effect) {
			if (target.baseTemplate.species === 'Miminja' && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Resurrection');
				return target.hp - 1;
			}
		},
		onAfterDamage: function (damage, target, source, move) {
			if (target.baseTemplate.species === 'Miminja' && target.baseTemplate.forme !== 'Reborn' && target.hp === 1) {
				this.add('-activate', target, 'ability: Resurrection');
				this.add('-formechange', target, 'Miminja-Reborn', '[msg]');
				target.formeChange("Miminja-Reborn");
				this.heal(target.maxhp / 2);
				let oldAbility = target.setAbility('resurrectiondone', target, 'resurrectiondone', true);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Resurrection Done', oldAbility, '[of] ' + target);
				}
			}
		},
		id: "resurrection",
		name: "Resurrection",
	},
	"resurrectiondone": {
		shortDesc: "Post Resurrection ability.",
		id: "resurrectiondone",
		name: "Resurrection Done",
	},
	"upgrade": { 
		shortDesc: "On switch in, doubles the power of Water- or Bug-type moves, in base of the effectiveness on the opponent (for example if opponent is resistant to Water-type, the power of Bug-type moves is doubled).",
		onStart: function (pokemon) {
			pokemon.addVolatile('upgrade');
			this.add('-ability', pokemon, 'Upgrade');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (target) {
				this.add('-start', target, 'ability: Upgrade');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function (atk, attacker, defender, move) {
				if (defender.hasType('Dragon') ||defender.hasType('Grass') || defender.hasType('Water') && move.type === 'Bug') {
					this.debug('Upgrade boost');
					return this.chainModify(1.5);
				}
				else if (move.type === 'Water') {
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function (atk, attacker, defender, move) {
				if (defender.hasType('Dragon') ||defender.hasType('Grass') || defender.hasType('Water') && move.type === 'Bug') {
					this.debug('Upgrade boost');
					return this.chainModify(1.5);
				}
				else if (move.type === 'Water') {
					return this.chainModify(1.5);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'ability: Upgrade', '[silent]');
			},
		},
		id: "upgrade",
		name: "Upgrade",
	},
	"danceposter": {
		shortDesc: "On switchin, this Pokémon uses each of the foe's moves in a random order.",
		onStart: function (pokemon, source) {
			for (const target of pokemon.side.foe.active) {
				if (target.fainted) continue;
				for (const moveSlot of target.moveSlots) {
					this.add('-ability', pokemon, 'Dance Poster');
					let moves = this.getMove(moveSlot.move);
					this.useMove(moves, pokemon);
				}
			}
		},
		id: "danceposter",
		name: "Danceposter",
	},
	"cosmology": {
		desc: "Changes forms depending on the weather (Astrolith-Star (rock/fire) during sun, Astrolith-Comet (rock/water) during rain, Astrolith-Neutron (rock/ice) during hail, and Astrolith-Meteor (rock/flying) during sand).",
		shortDesc: "Astrolith's type changes depending on the weather.",
		onUpdate: function (pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Astrolith' || pokemon.transformed) return;
			let forme = null;
			switch (this.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
         case 'solarsnow':
				if (pokemon.template.speciesid !== 'astrolithstar') forme = 'Astrolith-Star';
				break;
			case 'raindance':
			case 'primordialsea':
				if (pokemon.template.speciesid !== 'astrolithcomet') forme = 'Astrolith-Comet';
				break;
			case 'hail':
				if (pokemon.template.speciesid !== 'astrolithneutron') forme = 'Astrolith-Neutron';
				break;
			case 'sandstorm':
				if (pokemon.template.speciesid !== 'astrolithmeteor') forme = 'Astrolith-Meteor';
				break;
			case 'shadowdance':
				if (pokemon.template.speciesid !== 'astrolithnova') forme = 'Astrolith-Nova';
				break;
			default:
				if (pokemon.template.speciesid !== 'astrolith') forme = 'Astrolith';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme);
				this.add('-formechange', pokemon, forme, '[msg]', '[from] ability: Cosmology');
			}
		},
		id: "cosmology",
		name: "Cosmology",
	},
	"summonspirits": {
		shortDesc: "On switch-in, this Pokemon summons Spirit Skies.",
		onStart: function (source) {
			this.setWeather('shadowdance');
		},
		id: "summonspirits",
		name: "Summon Spirits",
	},
	"rockysurge": {
		shortDesc: "On switch-in, this Pokemon summons Rocky Terrain.",
		onStart: function (source) {
			this.setTerrain('rockyterrain');
		},
		id: "rockysurge",
		name: "Rocky Surge",
	},
	"spiralpower": { // TODO: Check if this works
		shortDesc: "Changes secondary type and doubles Speed while holding a plate or Z-Crystal.",
		// Form Changes implemented in statuses.js
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			let type = 'Normal';
			// @ts-ignore
			type = pokemon.getItem().onPlate;
			// @ts-ignore
			if (!type || type === true) {
				type = 'Normal';
			}
			if(type === 'Water'){
				pokemon.setType('Water');
			} else {
				pokemon.setType(['Water', type]);
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'embargo' && pokemon.getItem() && pokemon.getItem().onPlate) return false;
		},
		onTryHit: function (pokemon, target, move) {
			if (move.id === 'embargo' && pokemon.getItem() && pokemon.getItem().onPlate) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Spiral Power');
				return null;
			}
		},
		onTakeItem: function (item, pokemon, source) {
			if (!pokemon.getItem().onPlate || this.suppressingAttackEvents() && pokemon !== this.activePokemon || !pokemon.hp) return;
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				return false;
			}
		},
		onModifySpe: function (spe, pokemon) {
			if (pokemon.getItem() && pokemon.getItem().onPlate) {
				return this.chainModify(2);
			}
		},
		id: "spiralpower",
		name: "Spiral Power",
	},
	"compassionatesoul": { 
		desc: "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: 1}, source);
				source.cureStatus();
			}
		},
		onSwitchOut: function (pokemon) {
			if (!pokemon.status) {
				return;
			}
			else {
				pokemon.cureStatus();
				pokemon.addVolatile('compassionatesoul');
			}
		},
		effect: {
			duration: 2,
			onStart: function (side, source) {
				this.debug('Compassionate Soul started on ' + side.name);
				this.effectData.positions = [];
				// @ts-ignore
				for (const i of side.active.keys()) {
					this.effectData.positions[i] = false;
				}
				this.effectData.positions[source.position] = true;
			},
			onRestart: function (side, source) {
				this.effectData.positions[source.position] = true;
			},
			onSwitchInPriority: 1,
			onSwitchIn: function (target) {
				const positions = /**@type {boolean[]} */ (this.effectData.positions);
				if (target.position !== this.effectData.sourcePosition) {
					return;
				}
				if (!target.fainted) {
					target.boost({spa: 1});
				}
				if (!positions.some(affected => affected === true)) {
					target.side.removeSideCondition('compassionatesoul');
				}
			},
		},
		id: "compassionatesoul",
		name: "Compassionate Soul",
	},
	"movestat": { // TODO: Make the stats work properly
		shortDesc: "On switchin, this Pokémon makes its base stats equal to that of the foes' move of the highest power.",
		onStart: function (pokemon) {
			/**@type {(Move|Pokemon)[][]} */
			let warnMoves = [];
			let warnBp = 1;
			for (const target of pokemon.side.foe.active) {
				if (target.fainted) continue;
				for (const moveSlot of target.moveSlots) {
					let move = this.getMove(moveSlot.move);
					let bp = move.basePower;
					if (move.ohko) bp = 160;
					if (move.id === 'counter' || move.id === 'metalburst' || move.id === 'mirrorcoat') bp = 120;
					if (!bp && move.category !== 'Status') bp = 80;
					if (bp > warnBp) {
						warnMoves = [[move]];
						warnBp = bp;
					} else if (bp === warnBp) {
						warnMoves.push([move]);
					}
				}
			}
			if (warnMoves.length){
				pokemon.baseStats.hp = warnBp;
				pokemon.baseStats.atk = warnBp;
				pokemon.baseStats.def = warnBp;
				pokemon.baseStats.spa = warnBp;
				pokemon.baseStats.spd = warnBp;
				pokemon.baseStats.spe = warnBp;
			}
		},
		id: "movestat",
		name: "Move~Stat",
	},
	"revitalize": {
		shortDesc: "Upon switching out, this Pokemon regains 1/3 of its max HP and 1/3 of the PP of all its moves (rounded down).",
		onSwitchOut: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 3);
			for (const moveSlot of pokemon.moveSlots) {
						moveSlot.pp = moveSlot.pp + moveSlot.maxpp / 3;
						if (moveSlot.pp > moveSlot.maxpp){
							moveSlot.pp = moveSlot.maxpp;
						}
				}
			},
		id: "revitalize",
		name: "Revitalize",
	},
	"soakingaura": {
		shortDesc: "Moves of this Pokémon that have a type which is immune to its attacks (For example, Electric moves) as well as Fairy moves have 1.33x power.",
		onBasePowerPriority: 8,
		onBasePower: function (attacker, defender, move) {
			if (move.type === 'Psychic' || move.type === 'Dragon' || move.type === 'Electric' || move.type === 'Fighting' || move.type === 'Ghost' || move.type === 'Normal' || move.type === 'Poison' || move.type === 'Ground' || move.type === 'Fairy') {
				this.debug('Technician boost');
				return this.chainModify(1.33);
			}
		},
		id: "soakingaura",
		name: "Soaking Aura",
	},
	"cloudboost": {
		shortDesc: "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon or it's under weather. Blocks the effects of weather.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Cloud Boost');
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
			}
		},
		onWeather: function (pokemon) {
			pokemon.addVolatile('cloudboost');
		},
		effect: {
			duration: 1,
			onStart: function (pokemon) {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in pokemon.stats) {
					if (pokemon.stats[i] > bestStat) {
						stat = i;
						bestStat = pokemon.stats[i];
					}
				}
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					this.boost({[stat]: 1}, pokemon);
				} else {
					this.boost({[stat]: -1}, pokemon);
				}
			}
		},
		suppressWeather: true,
		id: "pokemon",
		name: "Cloud Boost",
	},
	"sporespreading": {
		shortDesc: "Healing Moves and moves with a chance to Poison, Sleep, or Paralyze the opponent have +1 priority.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.flags['heal'] || move.id === 'triattack' || (move.secondary && move.secondary.status && (move.secondary.status === 'psn' || move.secondary.status === 'par' || move.secondary.status === 'slp')) || (move.status && (move.status === 'psn' || move.status === 'slp' || move.status === 'par'))) return priority + 1;
		},
		id: "sporespreading",
		name: "Spore Spreading",
	},
	"goddesstrace": {
		shortDesc: "Upon being sent out, the Pokemon copies the opposing Pokemon's ability and halves the PP of their moves.",
		onUpdate: function (pokemon) {
			if (!pokemon.isStarted) return;
			let possibleTargets = pokemon.side.foe.active.filter(foeActive => foeActive && this.isAdjacent(pokemon, foeActive));
			while (possibleTargets.length) {
				let rand = 0;
				if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
				let target = possibleTargets[rand];
				let ability = this.getAbility(target.ability);
				let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'zenmode'];
				if (bannedAbilities.includes(target.ability)) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				this.add('-ability', pokemon, ability, '[from] ability: Goddess Trace', '[of] ' + target);
				pokemon.setAbility(ability);
				for (const moveSlot of target.moveSlots) {
					moveSlot.pp = (moveSlot.pp+1)/2;
				}
				pokemon.baseAbility = 'trace';
				return;
			}
		},
		id: "goddesstrace",
		name: "Goddess Trace",
	},
		"sensei": {
	    shortDesc: "This Pokemon's punching moves have the same base power as its most powerful move.",
	    onBasePowerPriority: 8,
	    onBasePower: function(basePower, attacker, defender, move) {
	        if (move.flags['punch']) {
	            this.debug('Iron Fist boost');
	            let warnMoves = [];
	            let warnBp = move.basePower;
	            for (const moveSlot of attacker.moveSlots) {
	                let moves = this.getMove(moveSlot.move);
	                let bp = moves.basePower;
	                if (moves.ohko) bp = 160;
	                if (moves.id === 'counter' || moves.id === 'metalburst' || moves.id === 'mirrorcoat') bp = 120;
	                if (!bp && moves.category !== 'Status') bp = 80;
	                if (bp > warnBp) {
	                    warnMoves = [
	                        [moves, attacker]
	                    ];
	                    warnBp = bp;
	                } else if (bp === warnBp) {
	                    warnMoves.push([moves, attacker]);
	                }
	            }
	            return this.chainModify(warnBp / move.basePower);
	        }
	    },
	    id: "sensei",
	    name: "Sensei",
	},
		"appropriation": {
	    desc: "Allows the bearer to avoid damage for one attack. Once it takes an attack and its disguise is broken, it automatically copies the ability of whatever attacked it.",
	    shortDesc: "If this Pokemon is a Mimukyu, the first hit it takes in battle deals 0 neutral damage and copies the attacker's ability.",
	    onDamagePriority: 1,
	    onDamage: function(damage, target, source, effect) {
	        if (effect && effect.effectType === 'Move' && target.template.speciesid === 'mimukyu' && !target.transformed) {
	            this.add('-activate', target, 'ability: Appropriation');
	            this.effectData.busted = true;
	            let ability = this.getAbility(source.ability);
	            let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'wonderguard', 'zenmode'];
	            if (!bannedAbilities.includes(source.ability)) target.setAbility(ability);
	            return 0;
	        }
	    },
	    onEffectiveness: function(typeMod, target, type, move) {
	        if (!this.activeTarget) return;
	        let pokemon = this.activeTarget;
	        if (pokemon.template.speciesid !== 'mimukyu' || pokemon.transformed || (pokemon.volatiles['substitute'] && !(move.flags['authentic'] || move.infiltrates))) return;
	        if (!pokemon.runImmunity(move.type)) return;
	        return 0;
	    },
	    onUpdate: function(pokemon) {
	        if (pokemon.template.speciesid === 'mimukyu' && this.effectData.busted) {
	            let template = this.getTemplate('Mimukyu-Busted');
	            pokemon.formeChange(template);
	            pokemon.baseTemplate = template;
	            pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
	            this.add('detailschange', pokemon, pokemon.details);
	        }
	    },
	    id: "appropriation",
	    name: "Appropriation",
	},
	"scarilyadorable": {
		shortDesc: "On switch-in, the foe's attack and speed is lowered by one stage. If this Pokemon is targeted with a contact move, the foe has a 30% chance to have their Attack lowered by one stage.",
		onStart: function (pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Scarily Adorable', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target, '[msg]');
				} else {
					this.boost({atk: -1, spe: -1}, target, pokemon);
				}
			}
		},
		onAfterDamage: function (damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					this.boost({atk: -1}, source, target);
				}
			}
		},
		id: "scarilyadorable",
		name: "Scarily Adorable",
	},
	"creepy": {
		shortDesc: "Status moves have +1 priority and lower the foe's Attack by one stage.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		onSourceHit: function (target, source, move) {
			if (target !== source && move.pranksterBoosted && move.target === 'normal' || move.target === 'foeSide' || move.target === 'allAdjacentFoes') {
				this.boost({atk: -1}, target, source);
			}
		},
		id: "creepy",
		name: "Creepy",
	},
	"prismskin": {
		shortDesc: "Restores 1/4 HP when hit by a super-effective move (recovery first then damage). Super-effective moves do 1/2 of the damage. This ability can be bypassed by Fire-type moves and only Fire-type moves, regardless of whether the attacker has Mold Breaker or its variants.",
		onFoeBeforeMove: function (target, source, move) {
			if (target !== source && move.typeMod > 0 && move.type !== 'Fire') {
				this.heal(target.maxhp / 4)
			}
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0 && move.type !== 'Fire') {
				this.debug('Prism Armor neutralize');
				return this.chainModify(0.5);
			}
		},
		isUnbreakable: true,
		id: "prismskin",
		name: "Prism Skin",
	},
	"terabeast": { //TODO: Checkthis
		desc: "This Pokemon's move with the highest base power deals 1.5x damage and ignores the target's ability.",
		shortDesc: "This Pokemon's move with the highest base power deals 1.5x damage and ignores the target's ability.",
		onModifyMove: function (pokemon) {
			/**@type {(Move|Pokemon)[][]} */
			let warnMoves = [];
			let warnBp = 1;
				for (const moveSlot of pokemon.moveSlots) {
					let move = this.getMove(moveSlot.move);
					let bp = move.basePower;
					if (move.ohko) bp = 160;
					if (move.id === 'counter' || move.id === 'metalburst' || move.id === 'mirrorcoat') bp = 120;
					if (!bp && move.category !== 'Status') bp = 80;
					if (bp > warnBp) {
						warnMoves = [[move, pokemon]];
						warnBp = bp;
					} else if (bp === warnBp) {
						warnMoves.push([move, pokemon]);
					}
				}
			if (!warnMoves.length) return;
			const [warnMoveName, warnTarget] = this.sample(warnMoves);
			warnMoves.ignoreAbility = true;
			return warnMoves.chainModify(1.5);
		},
		id: "terabeast",
		name: "Terabeast",
	},
	"powersaver": {
		shortDesc: "Physical moves do 50% more damage every other turn.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, pokemon) {
			return this.modify(atk, 1.5);
			pokemon.addVolatile('powersaver');
		},
		effect: {
			duration: 2,
		},
		id: "powersaver",
		name: "Power Saver",
	},
	"christmasparade": {
		shortDesc: "Super effective attacks against this Pokemon becomes Ice-type and do 0.75x damage. Normal-type moves become Ice-type and do 1.75x damage.",
		onFoeModifyMove: function (source, target, move) {
			if (move.typeMod > 0) {
				move.type === 'Ice';
				move.christmasparadeboosted = true;
			}
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Ice';
				move.christmasparade = true;
			}
		},
		onFoeBasePowerPriority: 8,
		onFoeBasePower: function (basePower, pokemon, target, move) {
			if (move.christmasparade) return this.chainModify(1.75);
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.christmasparadeboosted) {
				return this.chainModify(0.75);
			}
		},
		isUnbreakable: true,
		id: "christmasparade",
		name: "Christmas Parade",
	},
	"shocktrap": { // TODO: Make part 2 work only once
		shortDesc: "Takes 50% damage from all attacks when its HP is full. If it takes a direct attack at full HP, the attacker is paralyzed. (Note: the latter effect only works once.)",
		onSourceModifyDamage: function(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				return this.chainModify(0.5);
			}
		},
		onAfterDamage: function(damage, target, source, move) {
			if (move && move.flags['contact'] && !source.status && source.runStatusImmunity('powder') && source.hp >= source.maxhp) {
				source.setStatus('par', target);
			}
		},
		id: "shocktrap",
		name: "Shock Trap",
	},
	"auraofpain": {
		shortDesc: "While this Pokemon is active, all Pokemon are prevented from healing.",
		onUpdate: function(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				for (const moveSlot of target.moveSlots) {
					if (this.getMove(moveSlot.id).flags['heal']) {
						target.disableMove(moveSlot.id);
						}
						for (const moveSlot of pokemon.moveSlots) {
						if (this.getMove(moveSlot.id).flags['heal']) {
						pokemon.disableMove(moveSlot.id);
					}
					}
				}
			}
		},
		onFoeBeforeMove: function (pokemon, target, move) {
				if (move.flags['heal']) {
					this.add('cant', pokemon, 'ability: Aura Of Pain', move);
					return false;
				}
			},
		id: "auraofpain",
		name: "Aura Of Pain",
	},
	"pouchaura": {
		shortDesc: "While this Pokémon is on the field, moves that heal the user gain a 1.7x boost and heal for 1.7x more than usual.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.flags['drain'] || move.flags['heal']) {
				return this.chainModify(1.7);
			}
		},
		onModifyMove: function (move) {
			if (move.flags['heal']) {
				move.heal *= 1.7;
			}
		},
		id: "pouchaura",
		name: "Pouch Aura",
	},
	"voltfield": {
		shortDesc: "As long as the holder is on the field, opponent is under the effect of Taunt.",
		onStart: function(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				target.addVolatile('taunt');
			}
		},
		onUpdate: function(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				target.addVolatile('taunt');
			}
		},
		id: "voltfield",
		name: "Volt Field",
	},
	"hiddenadvantage": {
		shortDesc: "This Pokemon is immune to types of its moves.",
		onTryHit: function (target, source, move) {
				for (const moveSlot of target.moveSlots) {
					let hiddenmove = this.getMove(moveSlot.move);
					if (target !== source && ((!(['hiddenpower', 'hiddengem'].includes(hiddenmove) && move.type === 'Normal') && (move.type === hiddenmove.type)) || (['hiddenpower', 'hiddengem'].includes(hiddenmove) && move.type === target.hpType))) {
						this.add('-immune', target, '[msg]', '[from] ability: Hidden Advantage');
						return null;
				}
			}
		},
		id: "hiddenadvantage",
		name: "Hidden Advantage",
	},
	"galelevitation": {
		shortDesc: "This Pokémon is not grounded and can't be hit with Ground or Flying-Type moves. Attempting to use one of those moves on this Pokémon gives this Pokémon +1 priority to all its attacks untill it switches out.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Ground' || move.type === 'Flying') {
				this.add('-immune', target, '[msg]', '[from] ability: Gale Levitation');
				target.addVolatile('galelevitation');
				return null;
			}
		},
		effect: {
			onModifyPriority: function (priority, pokemon, target, move) {
				return priority + 1;
			},
		},
		id: "galelevitation",
		name: "Gale Levitation",
	},
	"frictioncharge": {
		shortDesc: "When hit by an Electric-type move or contact move, increases the power of own contact moves by 1.5x (similar to what Flash Fire does with Fire moves). Grants immunity to Electric-type moves.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Electric') {
				move.accuracy = true;
				if (!target.addVolatile('frictioncharge')) {
					this.add('-immune', target, '[msg]', '[from] ability: Friction Charge');
				}
				return null;
			}
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('frictioncharge');
		},
		onAfterDamage: function (damage, target, source, effect) {
			if (effect && effect.flags['contact']) {
				this.add('-ability', target, 'Friction Charge');
				target.addVolatile('frictioncharge');
			}
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (target) {
				this.add('-start', target, 'ability: Friction Charge');
			},
			onBasePowerPriority: 8,
			onBasePower: function (basePower, attacker, defender, move) {
				if (move.flags['contact']) {
					return this.chainModify(1.5);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'ability: Friction Charge', '[silent]');
			},
		},
		id: "frictioncharge",
		name: "Friction Charge",
	},
	"tommysroom": {
		shortDesc: "This Pokémon ignores other Pokémon's stat stages when attacking or being attacked. Takes half damage from Pokémon with stat changes.",
		id: "tommysroom",
		name: "Tommy's Room",
		onAnyModifyBoost: function (boosts, target) {
			let source = this.effectData.target;
			if (source === target) return;
			if (source === this.activePokemon && target === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (target === this.activePokemon && source === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		onSourceModifyDamage: function (damage, source, target, boosts) {
			if (target.boosts > 0) {
				return this.chainModify(0.5);
			}
		},
	},
		"crystallizedshield": {
		desc: "If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by major status conditions. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
		shortDesc: "If Miniancie, switch-in/end of turn it changes to Jewel at 1/2 max HP or less, else Ore.",
		onStart: function (pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Miniancie' || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 2) {
				if (pokemon.template.speciesid === 'minianciejewel') {
					pokemon.formeChange(pokemon.set.species);
					this.add('-formechange', pokemon, pokemon.set.species, '[from] ability: Crystallized Shield');
				}
			} else {
				if (pokemon.template.speciesid !== 'minianciejewel') {
					pokemon.formeChange('Miniancie-Jewel');
					this.add('-formechange', pokemon, 'Miniancie-Jewel', '[from] ability: Crystallized Shield');
				}
			}
		},
		onResidualOrder: 27,
		onResidual: function (pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Miniancie' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.hp > pokemon.maxhp / 2) {
				if (pokemon.template.speciesid === 'minianciejewel') {
					pokemon.formeChange(pokemon.set.species);
					this.add('-formechange', pokemon, pokemon.set.species, '[msg]', '[from] ability: Crystallized Shield');
				}
			} else {
				if (pokemon.template.speciesid !== 'minianciejewel') {
					pokemon.formeChange('Miniancie-Jewel');
					this.add('-formechange', pokemon, 'Miniancie-Jewel', '[msg]', '[from] ability: Crystallized Shield');
				}
			}
		},
		onSetStatus: function (status, target, source, effect) {
			if (target.template.speciesid !== 'miniancie' || target.transformed) return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[msg]', '[from] ability: Crystallized Shield');
			return false;
		},
		onTryAddVolatile: function (status, target) {
			if (target.template.speciesid !== 'miniancie' || target.transformed) return;
			if (status.id !== 'yawn') return;
			this.add('-immune', target, '[msg]', '[from] ability: Crystallized Shield');
			return null;
		},
		onBoost: function (boost, target, source, effect) {
			if ((source && target === source) || target.template.speciesid !== 'miniancie' || target.transformed) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Crystallized Shield", "[of] " + target);
		},
		isUnbreakable: true,
		id: "crystallizedshield",
		name: "Crystallized Shield",
	},
	"foodcoloring": { // TODO: Make it eat certain berries earlier
		desc: "This Pokemon eats certain berries earlier. If a Pokemon on this team (including itself) is holding a berry, this Pokemon has 1.5x Special Attack.",
		shortDesc: "This Pokemon eats certain berries earlier. If a Pokemon on this team (including itself) is holding a berry, this Pokemon has 1.5x Special Attack.",
		onModifySpAPriority: 5,
		onModifySpA: function (spa, pokemon) {
			if (pokemon.side.active.length === 1) {
				return;
			}
			for (const allyActive of pokemon.side.active) {
				if (allyActive && allyActive.position !== pokemon.position && !allyActive.fainted && allyActive.item.isBerry || pokemon.item.isBerry) {
					return this.chainModify(1.5);
				}
			}
		},
		id: "foodcoloring",
		name: "Food Coloring",
	},
	"scarysandwich": {
		shortDesc: "The foe cannot eat berries or use Ground, Rock or Steel-type moves. This Pokemon's moves have 1.3x power if it is holding a berry.",
		onPreStart: function (pokemon) {
			this.add('-ability', pokemon, 'Scary Sandwich', pokemon.side.foe);
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (pokemon.item.naturalGift) return this.chainModify(1.3);
		},
		onDisableMove: function (pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id.type === 'Rock' || moveSlot.id.type === 'Ground' || moveSlot.id.type === 'Steel') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		onFoeTryEatItem: false,
		id: "scarysandwich",
		name: "Scary Sandwich",
	},
	"testcram": {
		desc: "This Pokemon is immune to Ground-type moves. When this Pokemon is asleep, it is grounded and can ONLY be hit by Ground-type moves.",
		shortDesc: "This Pokemon is immune to Ground-type moves. When this Pokemon is asleep, it is grounded and can ONLY be hit by Ground-type moves.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Ground' && target.status !== 'slp') {
				this.add('-immune', target, '[msg]', '[from] ability: Test Cram');
				return null;
			}
			else if (target !== source && move.type !== 'Ground' && target.status === 'slp') {
				this.add('-immune', target, '[msg]', '[from] ability: Test Cram');
				return null;
			}
		},
		id: "testcram",
		name: "Test Cram",
	},
	"sippityhoo": {
		desc: "If a foe with a removable item attacks the Pokémon with this ability, the item is lost and this Pokémon's Attack goes up by one stage. Furthermore, if the pokémon with this ability is not holding an item, it will steal the item and won't take damage from the attack. ",
		shortDesc: "If a foe with a removable item attacks the Pokémon with this ability, the item is lost and this Pokémon's Attack goes up by one stage. Furthermore, if the pokémon with this ability is not holding an item, it will steal the item and won't take damage from the attack. ",
		onSourceHit: function (target, source, move) {
			if (!move || !target) return;
			if (target !== source && move.category !== 'Status') {
				if (source.item || source.volatiles['gem'] || source.volatiles['fling']) return;
				let yourItem = target.takeItem(source);
				if (!yourItem) return;
				if (!source.setItem(yourItem)) {
					target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
					source.addVolatile('sippityhoo');
					return;
				}
				this.add('-item', source, yourItem, '[from] ability: Sippity Hoo', '[of] ' + target);
			}
		},
		onTryHit: function (target, source, move) {
			if (target !== source && target.volatiles['sippityhoo']) {
				this.add('-immune', target, '[msg]', '[from] ability: Sippity Hoo');
				target.removeVolatile('sippityhoo');
				return null;
			}
			if (target !== source && target.item) {
				target.takeItem();
				this.add('-activate', source, 'ability: Sippity Hoo');
			}
		},
		id: "sippityhoo",
		name: "Sippity Hoo",
	},
	"mirage": {
		shortDesc: "If the foe has any boosted stat, this Pokemon is immune to their contact moves.",
		onTryHit: function (target, source, move) {
			if (target !== source && target.positiveBoosts() > 0 && move.flags['contact']) {
					this.add('-immune', target, '[msg]', '[from] ability: Mirage');
				return null;
			}
		},
		id: "mirage",
		name: "Mirage",
	},
	"titaniumtoothpaste": {
		shortDesc: "This Pokemon cannot be statused or have its stats lowered. If either of these would have occured or if this Pokemon is switching out, it heals 33% of its HP.",
		onBoost: function (boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) {
			this.add("-fail", target, "unboost", "[from] ability: Titanium Toothpaste", "[of] " + target);
				this.heal(target.maxhp / 3);
			}
		},
		onSetStatus: function (status, target, source, effect) {
				if (effect && effect.status) {
					this.add('-activate', target, 'ability: Titanium Toothpaste');
					this.heal(target.maxhp / 3);
				}
				return false;
			},
		id: "titaniumtoothpaste",
		name: "Titanium Toothpaste",
	},
	"farmersdelight": {
		desc: "Upon consuming a Berry or knocking a foe out, boosts this pokémon's highest non-HP stat by one stage. Upon knocking a foe out, or under sun, 100% chance to restore berry. Otherwise, 50% chance to restore berry at the end of every turn.",
		shortDesc: "Upon consuming a Berry or knocking a foe out, boosts this pokémon's highest non-HP stat by one stage. Upon knocking a foe out, or under sun, 100% chance to restore berry. Otherwise, 50% chance to restore berry at the end of every turn.",
		id: "farmersdelight",
		name: "Farmer's Delight",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			if ((this.isWeather(['sunnyday', 'desolateland', 'solarsnow']) || this.randomChance(1, 2)) == (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak'])) {
				if (pokemon.hp && !pokemon.item && this.getItem(pokemon.lastItem).isBerry) {
					pokemon.setItem(pokemon.lastItem);
					pokemon.lastItem = '';
					this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Farmer\'s Delight');
					let stat = 'atk';
					let bestStat = 0;
					for (let i in pokemon.stats) {
					if (pokemon.stats[i] > bestStat) {
						stat = i;
						bestStat = pokemon.stats[i];
					}
				}
				this.boost({[stat]: 1}, pokemon);
				}
			}
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
				source.setItem(source.lastItem);
					source.lastItem = '';
					this.add('-item', source, source.getItem(), '[from] ability: Farmer\'s Delight');
			}
		},
	},
	"calamity": { // TODO: Check this
		shortDesc: "Prevents the increase the PP cost of the user.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Calamity');
		},
		onTryDeductPP: function (pokemon) {
			return null;
		},
		id: "calamity",
		name: "Calamity",
	},
	"blackhole": {
		desc: "Any moves used against this Pokemon that would affect its stats negatively will fail. Note that abilities like Intimidate can decrease its stats.",
		shortDesc: "Any moves used against this Pokemon that would affect its stats negatively will fail. Note that abilities like Intimidate can decrease its stats.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.boosts < 0) {
					this.add('-immune', target, '[msg]', '[from] ability: Black Hole');
				return null;
			}
		},
		id: "blackhole",
		name: "Black Hole",
	},
		"itemize": {
	    desc: "This Pokemon's Normal-Type moves change type to match this Pokémon's held item and gain a 1.2x boost. (Type-Changing Items: All Drives, all Memories, all Plates, Silk Scarf clones, Berries (Takes Nature Gift types into account), Z-Crystals, Gems)",
	    shortDesc: "Normal-type moves change to match the held item. Moves that would otherwise be Normal-type have 1.2x power.",
	    onModifyMovePriority: -1,
	    onModifyMove: function(move, pokemon) {
	        if (pokemon.getItem() && move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
	            let item = pokemon.getItem();
	            let boosted = true;
	            if (item.onPlate) {
	                move.type = item.onPlate;
	            } else if (item.onMemory) {
	                move.type = item.onMemory;
	            } else if (item.onDrive) {
	                move.type = item.onDrive;
	            } else if (item.onItemize) {
	                move.type = item.onItemize;
	            } else if (item.naturalGift) {
	                move.type = item.nautralGift.type;
	            } else {
	                boosted = false;
	            }
	            move.itemizeBoosted = boosted;
	        }
	    },
	    onBasePowerPriority: 8,
	    onBasePower: function(basePower, pokemon, target, move) {
	        if (move.itemizeBoosted) return this.chainModify([0x1333, 0x1000]);
	    },
	    id: "itemize",
	    name: "Itemize",
	},
	"shutupandjam": { //TODO: This is a WIP
		desc: "Cannot be stopped from selecting and using a move (unless it is switching).",
		shortDesc: "Cannot be stopped from selecting and using a move (unless it is switching).",
		onBeforeMove: function(move, pokemon){
	         if (pokemon.status === 'slp') {
						move.sleepUsable = true;
				}
		},
		onUpdate: function (pokemon) {
			if (pokemon.volatiles['mustrecharge']) {
				pokemon.removeVolatile('mustrecharge');
			}
			else if (pokemon.volatiles['lockedmove']) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		onDisableMove: function (pokemon) {
				return null;
		},
		onChargeMove: function (pokemon, target, move) {
				this.debug('power herb - remove charge turn for ' + move.id);
				return false; // skip charge turn
		},
		id: "shutupandjam",
		name: "Shut Up And Jam",
	},
	"mellowvibe": { //TODO: This is a WIP as well
		desc: "This Pokémon can never be prevented from selecting a move and using it. This Pokémon is unaffected by debuffs and damage from its own moves.",
		shortDesc: "This Pokémon can never be prevented from selecting a move and using it. This Pokémon is unaffected by debuffs and damage from its own moves.",
		onBeforeMove: function(move, pokemon){
	         if (pokemon.status === 'slp') {
						move.sleepUsable = true;
				}
		},
		onUpdate: function (pokemon) {
			if (pokemon.volatiles['mustrecharge']) {
				pokemon.removeVolatile('mustrecharge');
			}
			if (pokemon.volatiles['lockedmove']) {
				pokemon.removeVolatile('lockedmove');
			}
			
		},
		onDisableMove: function (pokemon) {
				return null;
		},
		onChargeMove: function (pokemon, target, move) {
				this.debug('mellow vibe - remove charge turn for ' + move.id);
				return false; // skip charge turn
		},
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		id: "mellowvibe",
		name: "Mellow Vibe",
	},
	"hotairballoon": {
		desc: "After each consecutive kill, This pokemon gets +1 Special Attack, and +1 to it's highest stat. If Highest stat is Special Attack, then the second boost will be nullified.",
		shortDesc: "After each consecutive kill, This pokemon gets +1 Special Attack, and +1 to it's highest stat. If Highest stat is Special Attack, then the second boost will be nullified.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				source.addVolatile('hotairballoon');
			}
		},
		effect: {
			onRestart: function (target, source, effect) {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({spa: 1}, source);
				if (stat !== 'spa') {
				this.boost({[stat]: 1}, source);
				}
				source.removeVolatile('hotairballoon');
			},
		},
		id: "hotairballoon",
		name: "Hot Air Balloon",
	},
	/*"slimedrench": { //TODO: This is a WIP as well
		shortDesc: "If the foe is poisoned, whenever it tries to heal (with an item or move), it takes that amount of damage.",
		onFoeTryHeal: function (pokemon, heal) {
			for (const target of pokemon.side.foe.active) {
			if (!target || target.fainted) continue;
			return null;
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				this.damage(heal, target);
			}
			}
		},
		onFoeHeal: function (pokemon, heal) {
			for (const target of pokemon.side.foe.active) {
			if (!target || target.fainted) continue;
			return null;
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				this.damage(heal, target);
			}
			}
		},
		id: "slimedrench",
		name: "Slime Drench",
	},*/
	"bodyguard": {
		shortDesc: "Grants immunity to moves that would lower this Pokemon's stats.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.boosts < 0) {
					this.add('-immune', target, '[msg]', '[from] ability: Bodyguard');
				return null;
			}
		},
		id: "bodyguard",
		name: "Bodyguard",
	},
	"apathy": {
		shortDesc: "Whenever this pokemon is afflicted by a status or move restricting affect, it is removed from it and applied to the opposing pokemon. If the effect cannot be inflicted, it is removed. Item induced restrictions do not count.",
		id: "apathy",
		name: "Apathy",
		onTryHitPriority: 1,
		onTryHit: function (target, source, move) {
			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide: function (target, source, move) {
			if (target.side === source.side || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, this.effectData.target, source);
			return null;
		},
		onUpdate: function (pokemon) {
			if (pokemon.volatiles['attract']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] ability: Apathy');
			}
			if (pokemon.volatiles['taunt']) {
				this.add('-activate', pokemon, 'ability: Apathy');
				pokemon.removeVolatile('taunt');
				// Taunt's volatile already sends the -end message when removed
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'attract') return false;
		},
		onTryHit: function (pokemon, target, move) {
			if (move.id === 'attract' || move.id === 'captivate' || move.id === 'taunt') {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Apathy');
				return null;
			}
		},
		onSetStatus: function (status, target, source, effect) {
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[msg]', '[from] ability: Apathy');
			return false;
		},
		effect: {
			duration: 1,
		},
	},
	"powerdrain": {
		shortDesc: "Grants immunity to moves that would lower this Pokemon's stats.",
		onFoeTryDeductPP: function (pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				this.setStatus('par', target);
			}
		},
		id: "powerdrain",
		name: "Power Drain",
	},
	"adaptingbody": {
		shortDesc: "Gains Adaptability and heals for 12% max HP when in weather for more than one turn.",
		onModifyMove: function (move) {
			if (target.activeTurns > 1) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					move.stab = 2;
				} else {
					move.stab = 1;
				}
			}
		},
		onWeather: function (target, source, effect) {
			if (target.activeTurns > 1) {
				if (pokemon.volatiles['atmosphericperversion'] == pokemon.volatiles['weatherbreak']){
					this.heal(target.maxhp / 8, target, target);
				} else {
					this.damage(target.maxhp / 8, target, target);
				}
				return false;
			}
		},
		id: "adaptingbody",
		name: "Adapting Body",
	},
	"diamondarmor": {
		shortDesc: "Super-effective moves deal only ¾ of their normal damage. Negates any PP-depleting Ability.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				return this.chainModify(0.75);
			}
		},
		onTryDeductPP: function (pokemon) {
			return null;
		},
		id: "diamondarmor",
		name: "Diamond Armor",
	},
	"beastscopycat": {
		shortDesc: "Upon switchin in, replace one of user's stats with the foe's highest non-HP stat. Upon knocking a foe out, this Pokémon's highest stat is raised by one stage.",
		onStart: function (pokemon) {
				let stat = 'atk';
				let bestStat = 0;
				for (const target of pokemon.side.foe.active) {
					if (!target || !this.isAdjacent(target, pokemon)) continue;
					for (let i in target.stats) {
						if (target.stats[i] > bestStat) {
							stat = i;
							bestStat = target.stats[i];
						}
					}
				}
				pokemon.stats[stat] = target.stats[stat];
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
			}
		},
		id: "beastscopycat",
		name: "Beast's Copycat",
	},
	"unfriend": {
		shortDesc: "If Happislash, changes to Unfriendly Forme before attempting to use an attacking move, and changes to Friendly Forme before attempting to use King's Shield. Takes 1/2 damage from other Pokemon's attacks when in Friendly Forme.",
		onBeforeMovePriority: 0.5,
		onBeforeMove: function (attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Happislash' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			let targetSpecies = (move.id === 'kingsshield' ? 'Happislash' : 'Happislash-Unfriendly');
			if (attacker.template.species !== targetSpecies && attacker.formeChange(targetSpecies)) {
				this.add('-formechange', attacker, targetSpecies, '[from] ability: Unfriend');
			}
		},
		onFoeBasePowerPriority: 8,
		onFoeBasePower: function (basePower, pokemon) {
			let boosted = true;
			let allActives = pokemon.side.active.concat(pokemon.side.foe.active);
			for (const target of allActives) {
				if (target === pokemon) continue;
				if (pokemon.baseForme === 'Friendly') {
					boosted = false;
					break;
				}
			}
			if (boosted) {
				this.debug('Analytic boost');
				return this.chainModify(0.5);
			}
		},
		id: "unfriend",
		name: "Unfriend",
	},
	"beasteye": {
		shortDesc: "Highest non-HP stat can't be lowered. If this would happen or if this Pokémon is to land a KO, it gets +1 to that stat.",
		onBoost: function (boost, target, source, effect) {
			let stat = 'atk';
				let bestStat = 0;
				for (let i in target.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = target.stats[i];
					}
				}
			if (source && target === source) return;
			if (boost.stat && boost.stat < 0) {
				if (!effect.secondaries) this.add("-fail", target, "unboost", "Attack", "[from] ability: Beast Eye", "[of] " + target);
				this.boost({[stat]: 1}, target);
			}
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
					}
				}
				this.boost({[stat]: 1}, source);
			}
		},
		id: "beasteye",
		name: "Beast Eye",
	},
	"weatherbreak": {
		desc: "All weather-based effects, including abilities and passive stat increases, are reversed.",
		shortDesc: "Inverts weather effects.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Weather Break');
			for (const side of this.sides) {
				for (const target of side.active) {
					target.addVolatile('weatherbreak');
				}
			}
		},
		onAnyDamage: function (damage, target, source, effect) {
			if (effect && (effect.id === 'sandstorm' || effect.id === 'hail' || effect.id === 'solarsnow') && !target.volatiles['atmosphericperversion']) {
            this.heal(target.maxhp / 16);
				return false;
			}
		},
		onEnd: function (pokemon) {
			for (const side of this.sides) {
				for (const target of side.active) {
					if (target.hasAbility('weatherbreak')) return;
				}
			}
			for (const side of this.sides) {
				for (const target of side.active) {
					target.removeVolatile('weatherbreak');
				}
			}
		},
      //TODO: THIS IS INCOMPLETE. If two mons with Weather Break are on the field at the same time, things should only happen as if one mon with said ability was on the field. Also, Weather Ball deals halved damaged instead of doubled and has inverse type effectiveness in inverted weather. 
		id: "weatherbreak",
		name: "Weather Break",
	},
	"atmosphericperversion": {
		desc: "All weather-based effects, including abilities and passive stat increases, are reversed.",
		shortDesc: "Inverts weather effects.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Atmospheric Perversion');
			for (const side of this.sides) {
				for (const target of side.active) {
					target.addVolatile('atmosphericperversion');
				}
			}
		},
		onAnyDamage: function (damage, target, source, effect) {
			if (effect && (effect.id === 'sandstorm' || effect.id === 'hail' || effect.id === 'solarsnow') && !target.volatiles['weatherbreak']) {
            this.heal(target.maxhp / 16);
				return false;
			}
		},
		onEnd: function (pokemon) {
			for (const side of this.sides) {
				for (const target of side.active) {
					if (target.hasAbility('atmosphericperversion') || target.hasAbility('weathercontradiction')) return;
				}
			}
			for (const side of this.sides) {
				for (const target of side.active) {
					target.removeVolatile('atmosphericperversion');
				}
			}
		},
      //TODO: THIS IS INCOMPLETE. If two mons with Weather Break are on the field at the same time, things should only happen as if one mon with said ability was on the field. Also, Weather Ball deals halved damaged instead of doubled and has inverse type effectiveness in inverted weather. 
		id: "atmosphericperversion",
		name: "Atmospheric Perversion",
	},
	"weathercontradiction": {
		desc: "The effects of stat changes (for this Pokemon only) and weather is reversed.",
		shortDesc: "Inverts weather effects and stat changes.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Weather Contradiction');
			for (const side of this.sides) {
				for (const target of side.active) {
					target.addVolatile('atmosphericperversion');
				}
			}
		},
		onBoost: function (boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			for (let i in boost) {
				// @ts-ignore
				boost[i] *= -1;
			}
		},
		onAnyDamage: function (damage, target, source, effect) {
			if (effect && (effect.id === 'sandstorm' || effect.id === 'hail' || effect.id === 'solarsnow') && !target.volatiles['weatherbreak']) {
            this.heal(target.maxhp / 16);
				return false;
			}
		},
		onEnd: function (pokemon) {
			for (const side of this.sides) {
				for (const target of side.active) {
					if (target.hasAbility('atmosphericperversion') || target.hasAbility('weathercontradiction')) return;
				}
			}
			for (const side of this.sides) {
				for (const target of side.active) {
					target.removeVolatile('atmosphericperversion');
				}
			}
		},
      //TODO: THIS IS INCOMPLETE. If two mons with Weather Break are on the field at the same time, things should only happen as if one mon with said ability was on the field. Also, Weather Ball deals halved damaged instead of doubled and has inverse type effectiveness in inverted weather. 
		id: "weathercontradiction",
		name: "Weather Contradiction",
	},

	"sleepingsystem": {
      desc: "This Pokémon would change types to match it's held drive. This Pokémon counts as asleep and always holding all drives. (Multi-Attack is still Normal.)",
		shortDesc: "This Pokemon is treated as if it were alseep and also all types at once.",
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
				pokemon.setType(['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Rock', 'Bug', 'Ghost', 'Psychic', 'Dragon', 'Dark', 'Steel', 'Fairy']);
		},
		onModifyMovePriority: -1,
		onModifyMove: function (move) {
			if (move.id === 'multiattack'){
                move.type = 'Normal';
           }
		},
		onSetStatus: function (status, target, source, effect) {
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[msg]', '[from] ability: Sleeping System');
			return false;
		},
		// Permanent sleep "status" implemented in the relevant sleep-checking effects
		isUnbreakable: true,
		id: "sleepingsystem",
		name: "Sleeping System",
	},
	"prototype": { // TODO: Check if this works
		shortDesc: "Changes secondary type and doubles Speed while holding a plate or Z-Crystal.",
		// Form Changes implemented in statuses.js
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			let type1 = pokemon.getItem().onPlate;
			// @ts-ignore
			if (!type1 || type1 === true) {
				type1 = 'Normal';
			}
			let type2 = this.getMove(pokemon.moveSlots[0].id).type;
			if (!type2){
				type2 = 'Normal';
			}
			if (type1 === type2){
				pokemon.setType(type1);
				this.add('-start', pokemon, 'typechange', type1, '[from] Prototype');
			} else {
				pokemon.setType([type1, type2]);
				this.add('-start', pokemon, 'typechange', [type1, type2], '[from] Prototype');
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'embargo' && pokemon.getItem() && pokemon.getItem().onPlate) return false;
		},
		onTryHit: function (pokemon, target, move) {
			if (move.id === 'embargo' && pokemon.getItem() && pokemon.getItem().onPlate) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Prototype');
				return null;
			}
		},
		onTakeItem: function (item, pokemon, source) {
			if (!pokemon.getItem().onPlate || this.suppressingAttackEvents() && pokemon !== this.activePokemon || !pokemon.hp) return;
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				return false;
			}
		},
		id: "prototype",
		name: "Prototype",
	},
	"afterstorm": {
		desc: "Summons Rainbow Sky for 5 turns; during Rainbow Sky, moves have their secondary effect chance doubled and said moves have 50% more power; moves with no secondary effect inflict 50% less damage (also moves afflicted by Sheer Force and variants that nullify secondary effect).",
		shortDesc: "On switch-in, this Pokemon summons Rainbow Sky for five turns.",
		onStart: function (source) {
			this.setWeather('afterstorm');
		},
		id: "afterstorm",
		name: "Afterstorm",
	},
	"singularity": { //TODO: Check for the Protect part
		shortDesc: "This Pokemon can only be KOed every other turn, unless it uses Protect when it could be KOed.",
		onBeforeMovePriority: 9,
		onBeforeMove: function (pokemon, target, move) {
			if (!move.stallingMove && !pokemon.removeVolatile('singularity')) {
					pokemon.addVolatile('singularity');
			}
		},
		onTryHit: function (pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Singularity');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function (damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Singularity');
				return target.hp - 1;
			}
		},
		effect: {
			duration: 2,
		},
		id: "singularity",
		name: "Singularity",
	},
	
	"combinationdrive": {
		desc: "The Pokémon changes form depending on how it battles. Entering Power Forme empowers Punch and Slash based moves by x1.5 for one attack.",
		shortDesc: "If Golislash, changes Forme to Power before attacks and Defense before King's Shield. Certain moves are boosted whilst transitioning.",
		onBeforeMovePriority: 0.5,
		onBeforeMove: function (attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Golislash' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			let slashmoves = ['psychocut', 'cut', 'slash', 'nightslash', 'solarblade', 'leafblade', 'xscissor', 'crosspoison', 'airslash', 'aircutter', 'furycutter', 'sacredsword', 'secretsword', 'razorshell']; 
			let targetSpecies = (move.id === 'kingsshield' ? 'Golislash' : 'Golislash-Power');
			if (attacker.template.species !== targetSpecies && attacker.formeChange(targetSpecies)) {
				this.add('-formechange', attacker, targetSpecies, '[from] ability: Combination Drive');
				if (move.flags['punch'] || slashmoves.includes(move.id)){
					move.combinationdriveboosted = true;	
				}
			}
		},
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.combinationdriveboosted) {
				this.debug('Combination Drive boost');
				return this.chainModify(1.5);
			}
		},
		id: "combinationdrive",
		name: "Combination Drive",
	},
	
	"aeonflux": {
		desc: "This Pokémon's Electric-type moves and punch moves gain a 20% boost to their Base Power before applying STAB; the percentage bonuses bonuses stack multiplicatively. Additionally, this Pokémon's punch moves use its Special Attack stat to determine their damage, though they still deal physical damage.",
		shortDesc: "This Pokemon's punch-based and Electric-type attacks have 1.2x power, which stack. Punching moves calculate damage based on this Pokemon's Special Attack instead of its Attack.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			let mod = 1;
			if (move.flags['punch']) {
				mod = mod * 1.2;
			}
			if (move.type === 'Electric') {
				mod = mod * 1.2;
			}
			return this.chainModify(mod);
		},
		onModifyMovePriority: 8,
		onModifyMove: function(move, pokemon) {
			if (move.flags['punch'] && move.category === 'Physical'){
				move.category = 'Special';
				move.defensiveCategory = 'Physical';
			}
		},
		id: "aeonflux",
		name: "Aeon Flux",
	},
	"techequip": {
		shortDesc: "Holding a memory item will change the user's primary type to that of the memory, and make the user immune to that memory's type.",
		// Implemented in statuses.js
		id: "techequip",
		name: "Tech Equip",
	},
	"technicalsystem": {
		shortDesc: "If this Pokémon is holding a Memory, it changes type to match that memory and all it's moves are boosted by 1.5.",
		// Implemented in statuses.js
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
				return this.chainModify(1.5);
		},
		id: "technicalsystem",
		name: "Technical System",
	},
	"triagesystem": {
		shortDesc: "If this Pokémon is holding a Memory, it changes type to match that memory and all it's moves are boosted by 1.5.",
		// Implemented in statuses.js
		id: "triagesystem",
		name: "Triage System",
	},
	"rainregen": {
		shortDesc: "Sets Rain on switchin. Heals 33% of its max HP every time it sets Rain.",
		onStart: function (source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.template.speciesid === 'kyogre') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			if (this.setWeather('raindance')) {
				this.heal(source.maxhp / 3);
				this.add('-activate', source, 'ability: Rain Regen');
			}
		},
		onAfterMove: function (pokemon, move) {
			if (move.id === 'raindance' && pokemon.moveThisTurnResult){
				this.heal(pokemon.maxhp / 3);
				this.add('-activate', pokemon, 'ability: Rain Regen');
			}
		},
		//TODO: If it successfully uses Rain Dance, restore its HP. The problem is, emphasis is on SUCCESSFULLY.
		id: "rainregen",
		name: "Rain Regen",
	},
};
