'use strict';
exports.BattleAbilities = {
	"turnabouttorrent": {
		desc: "When this Pokemon has 1/3 or more of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Water attacks do 1.5x damage. Stat changes are reversed",
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
		desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
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
				this.boost({
					atk: -1
				}, foeactive[i], pokemon);
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
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Water attacks do 1.5x damage.",
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
		desc: "This Pokemon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless.",
		shortDesc: "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender.",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Intense Rivalry');
		},
		onModifyMove: function(move) {
			move.ignoreAbility = true;
		},
		onBasePower: function(basePower, attacker, defender, move) {
			if (attacker.gender && defender.gender) {
				if (attacker.gender === defender.gender) {
					this.debug('Intense Rivalry boost');
					return this.chainModify(1.25);
				} else {
					this.debug('Intense Rivalry weaken');
					return this.chainModify(0.75);
				}
			}
		},
		id: "intenserivalry",
		name: "Intense Rivalry",
		rating: 0.5,
		num: 196
	},
	"intimidateveil": {
		desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
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
				this.boost({
					atk: -1
				}, foeactive[i], pokemon);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onModifyAccuracy: function(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.isWeather('sandstorm')) {
				this.debug('Sand Veil - decreasing accuracy');
				return accuracy * 0.8;
			}
		},
		id: "intimidateveil",
		name: "Intimidateveil",
		rating: 3.5,
		num: 197
	},
	"levipoison": {
		desc: "This Pokemon is immune to Ground. Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.",
		shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.",
		onImmunity: function(type) {
			if (type === 'Ground') return false;
			/* Levipoison (Levitate+Poison Point) - If this Pokémon is hit with a Ground-type attack, the attacker is poisoned. Grants the Pokémon with this ability an immunity to ground */
		},
		id: "levipoison",
		name: "Levipoison",
		rating: 3.5,
		num: 198,
	},
	"armorcast": {
		desc: "If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.",
		shortDesc: "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.",
		onAfterUseItem: function(item, pokemon) {
			if (pokemon !== this.effectData.target) return this.boost({
				atk: 2,
				spe: 2
			});
			return this.boost({
				def: -1,
				spd: -1
			});
		},
		onTakeItem: function(item, pokemon) {
			return this.boost({
				atk: 2,
				spe: 2
			});
			return this.boost({
				def: -1,
				spd: -1
			});
		},
		id: "armorcast",
		name: "Armor Cast",
		rating: 3.5,
		num: 199
	},
	"obliviousabsorb": {
		desc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it.",
		shortDesc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability cures it.",
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
		onImmunity: function(type, pokemon) {
			if (type === 'attract') {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Oblivious');
				return null;
			}
		},
		onTryHit: function(pokemon, target, move) {
			if (move.id === 'captivate' || move.id === 'taunt') {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Oblivious');
				this.heal(target.maxhp / 8);
				return null;
			}
		},
		id: "obliviousabsorb",
		name: "Oblivious Absorb",
		rating: 1,
		num: 200
	},
	"fear": {
		desc: "This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.",
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
				this.boost({
					atk: -1
				}, foeactive[i], pokemon);
			}
		},
		id: "fear",
		name: "FEAR",
		rating: 3,
		num: 201,
	},
	"cactuspower": {
		shortDesc: "On switch-in, this Pokemon summons Sandstorm.",
		onStart: function(source) {
			this.setWeather('sandstorm');
		},
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		id: "cactuspower",
		name: "Cactus Power",
		rating: 4.5,
		num: 202
	},
	"snowforce": {
		desc: "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "This Pokemon's Ice attacks do 1.3x in Hail; immunity to it.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (this.isWeather('hail')) {
				if (move.type === 'Ice') {
					this.debug('Snow Force boost');
					return this.chainModify([0x14CD, 0x1000]);
				}
			}
		},
		id: "snowforce",
		name: "Snow Force",
	},
	"sandyskin": {
		desc: "This Pokemon has its major status condition cured at the end of each turn if Rain Dance is active.",
		shortDesc: "This Pokemon has its status cured at the end of each turn if Rain Dance is active.",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			if (pokemon.status && this.isWeather(['sandstorm'])) {
				this.debug('hydration');
				this.add('-activate', pokemon, 'ability: Hydration');
				pokemon.cureStatus();
			}
		},
		id: "sandyskin",
		name: "Sandy Skin",
		rating: 2,
		num: 203
	},
	"technicutter": {
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
		shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",
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
				if (!effect.secondaries) this.add("-fail", target, "unboost", "Attack", "[from] ability: Hyper Cutter", "[of] " + target);
			}
		},
		id: "technicutter",
		name: "Technicutter",
		rating: 4,
		num: 204
	},
	"chlorovolt": {
		shortDesc: "If Electric Terrain is active, this Pokemon's Speed is multiplied by 1.5.",
		onModifySpePriority: 6,
		onModifySpe: function(pokemon) {
			if (this.isTerrain('electricterrain')) return this.chainModify(1.5);
		},
		id: "chlorvolt",
		name: "Chloro Volt",
		rating: 0.5,
		num: 205
	},
	"healingfat": {
		desc: "If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.",
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'brn' || effect.id === 'frz') {
				this.heal(target.maxhp / 8);
				return false;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		onUpdate: function(pokemon) {
			if (pokemon.status === 'frz') {
				this.add('-activate', pokemon, 'ability: Immunity');
				pokemon.cureStatus();
			}
		},
		id: "healingfat",
		name: "Healing Fat",
		rating: 4,
		num: 206
	},
	"normalveil": {
		shortDesc: "This Pokemon is immune to Normal-type moves.",
		onImmunity: function (type, pokemon) {
			if (type === 'Normal') return false;
		},
		id: "normalveil",
		name: "Normal Veil",
	},
	"landshark": {
		shortDesc: "Lowers Opponent's defense on switch in and gets evasion boosted in sand.",
		onStart: function (pokemon) {
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
					this.boost({atk: -1}, target, pokemon);
				}
			}
		},
		onModifyAccuracy: function (accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.isWeather('sandstorm')) {
				return accuracy * 0.8;
			}
		},
		id: "landshark",
		name: "Land Shark",
	},
	"serenefocus": {
		shortDesc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
		onModifySecondaries: function (secondaries) {
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		id: "serenefocus",
		name: "Serene Focus",
	},
	"torrentveil": {
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Water attacks and the Pokemon has 1.25x evasion.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifyAccuracy: function (accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (target.hp <= target.maxhp / 3) {
				return accuracy * 0.8;
			}
		},
		id: "torrentveil",
		name: "Torrent Veil",
	},
	"mummyfortitude": {
		desc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.",
		shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",
		onTryHit: function(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function(damage, target, source, effect) {
			if (source.ability === 'mummy' && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-activate', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		id: "mummmyfortitude",
		name: "Mummy Fortitude",
	},
	"blazingbody": {
		desc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.",
		shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",
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
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		id: "blazingbody",
		name: "blazing body",
		rating: 3,
		num: 208
	},
	"noskill": {
		shortDesc: "Pressure + Super Luck.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Pressure');
		},
		onDeductPP: function (target, source) {
			if (target.side === source.side) return;
			return 1;
		},
		onModifyCritRatio: function (critRatio) {
			return critRatio + 1;
		},
		id: "noskill",
		name: "No Skill",
	},
	"sandaura": {
		shortDesc: "Sandstream + Sand Veil.",
		onStart: function (source) {
			this.setWeather('sandstorm');
		},
		onImmunity: function (type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onModifyAccuracy: function (accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.isWeather('sandstorm')) {
				return accuracy * 0.8;
			}
		},
		id: "sandaura",
		name: "Sand Aura",
	},
	"staticstorm": {
		desc: "If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",
		onWeather: function(target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.maxhp / 16);
			}
		},
		onAfterDamage: function(damage, target, source, effect) {
			if (this.random(10) < 3) {
				source.trySetStatus('par', target, effect);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "staticstorm",
		name: "static storm",
		rating: 1.5,
		num: 209
	},
	"dreadedflames": {
		desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
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
				this.boost({
					atk: -1
				}, foeactive[i], pokemon);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		id: "dreadedflames",
		name: "Dreaded Flames",
		rating: 3.5,
		num: 210
	},
	"rockygrowth": {
		desc: "This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.",
		shortDesc: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle') return null;
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		id: "rockygrowth",
		name: "Rocky Growth",
		rating: 3,
		num: 211
	},
	"pristine": {
		desc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.",
		shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",
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
			if (pokemon.status === 'brn' || pokemon.status === 'frz' || pokemon.status === 'psn' || pokemon.status === 'tox' || pokemon.status === 'par' && target.hp === target.maxhp ) {
				this.add('-activate', pokemon, 'ability: Water Veil');
				pokemon.cureStatus();
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'brn' || type === 'frz' || type === 'psn' || type === 'tox' || type === 'par' && target.hp === target.maxhp) return false;
		},
		id: "pristine",
		name: "Pristine",
		rating: 3,
		num: 212
	},
	"innerbody": {
		shortDesc: "This Pokemon cannot be made to flinch.",
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
		rating: 1.5,
		num: 213
	},
	"intimidatingfangs": {
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be poisoned.",
		onAfterDamage: function(damage, target, source, move) {
			if (move && move.flags['contact']) {
				{
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
						this.boost({
							atk: -1
						}, foeactive[i], pokemon);
					}
				}
			}
		},
		id: "intimidatingfangs",
		name: "Intimidating Fangs",
		rating: 2,
		num: 214
	},
	"intimidatingabsorption": {
		desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
		onStart: function(pokemon) {
			var foeactive = pokemon.side.foe.active;
			var activated = false;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidate');
					activated = true;
				}
				if (foeactive[i].volatiles['substitute']) {
					this.add('-activate', foeactive[i], 'Substitute', 'ability: Intimidate', '[of] ' + pokemon);
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
					this.add('-immune', target, '[msg]', '[from] ability: Water Absorb');
				}
				return null;
			}
		},
		id: "intimidatingabsorption",
		name: "Intimidating Absorption",
		rating: 3.5,
		num: 215
	},
	"keenfeet": {
		desc: "This Pokemon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe.",
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
		name: "keen feet",
		rating: 2.5,
		num: 216
	},
	"swiftabsorb": {
		desc: "This Pokemon is immune to water-type moves. The first time it is hit by a water-type move, its attacking stat is multiplied by 1.5 while using a water-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by water-type attacks.",
		shortDesc: "This Pokemon's water attacks do 1.5x damage if hit by one water move; water immunity.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'water') {
				move.accuracy = true;
				if (!target.addVolatile('swiftabsorb')) {
					this.add('-immune', target, '[msg]', '[from] ability: Flash water');
				}
				return null;
			}
		},
		onEnd: function(pokemon) {
			pokemon.removeVolatile('swiftabsorb');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function(target) {
				this.add('-start', target, 'ability: Swift Absorb');
			},
			onModifySpePriority: 5,
			onModifySpe: function(atk, attacker, defender, move) {
				this.debug('Flash water boost');
				return this.chainModify(2);
			},
			onEnd: function(target) {
				this.add('-end', target, 'ability: Flash water', '[silent]');
			}
		},
		id: "swiftabsorb",
		name: "Swift Absorb",
		rating: 3,
		num: 217
	},
	"mathsurge": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Bug attacks do 1.5x damage.",
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 3) {
				this.debug('Math surge');
				return this.chainModify(1.5);
			}
		},
		id: "mathsurge",
		name: "Math Surge",
		rating: 2,
		num: 218
	},
	"flameessence": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Fire attacks do 1.5x damage.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Flame Essence');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Flame Essence');
				return this.chainModify(1.5);
			}
		},
		id: "flameessence",
		name: "Flame Essence",
		rating: 2,
		num: 219
	},
	"naturalguard": {
		shortDesc: "Every move used by or against this Pokemon will always hit.",
		onAnyAccuracy: function(accuracy, target, source, move) {
			if (move && (source === this.effectData.target || pokemon.status === 'psn' || pokemon.status === 'tox' || pokemon.status === 'brn' || pokemon.status === 'frz' || pokemon.status === 'par')) {
				return true;
			}
			return accuracy;
		},
		onSwitchOut: function (pokemon) {
			pokemon.cureStatus();
		},
		id: "naturalguard",
		name: "Natural Guard",
		rating: 4,
		num: 220,
	},
	"stickyfloat": {
		shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's attack.",
		onTakeItem: function(item, pokemon, source) {
			if (this.suppressingAttackEvents() && pokemon !== this.activePokemon) return;
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				this.add('-activate', pokemon, 'ability: Sticky Hold');
				return false;
			}
		},
		onImmunity: function(type) {
			if (type === 'Ground') return false;
		},
		id: "stickyfloat",
		name: "Sticky Float",
		rating: 1.5,
		num: 221
	},
	"serenefire": {
		desc: "This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.",
		shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
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
			onEnd: function(target) {
				this.add('-end', target, 'ability: Flash Fire', '[silent]');
			}
		},
		id: "serenefire",
		name: "Serene Fire",
		rating: 3,
		num: 222,
	},
	"healingblaze": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Fire attacks do 1.5x damage.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
				pokemon.cureStatus();
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
				pokemon.cureStatus();
			}
		},
		id: "healingblaze",
		name: "Healing Blaze",
		rating: 2,
		num: 223,},
		"barbstance": {
			desc: "If this Pokemon is an Ferroslash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield.",
			shortDesc: "If Ferroslash, changes Forme to Blade before attacks and Shield before King's Shield.",
			onBeforeMovePriority: 11,
			onBeforeMove: function(attacker, defender, move) {
				if (attacker.template.baseSpecies !== 'Ferroslash') return;
				if (move.category === 'Status' && move.id !== 'kingsshield') return;
				var targetSpecies = (move.id === 'kingsshield' ? 'Ferroslash' : 'Ferroslash-Blade');
				if (attacker.template.species !== targetSpecies && attacker.formeChange(targetSpecies)) {
					this.add('-formechange', attacker, targetSpecies);
				}
			},
			id: "barbstance",
			name: "Barb Stance",
			rating: 5,
			num: 224,
	},
	"poweruppinch": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Fire attacks do 1.5x damage.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 5) {
				this.debug('Blaze boost');
				return this.chainModify(1.25);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 5) {
				this.debug('Blaze boost');
				return this.chainModify(1.25);
			}
		},
		id: "poweruppinch",
		name: "Power Up Pinch",
		rating: 2,
		num: 225
	},
	"electrotechnic": {
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
		shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				this.debug('Technician boost');
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
		rating: 4,
		num: 226
	},
	"speedbreak": {
		shortDesc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",
		onBoost: function(boost) {
			boost.spe *= -1;
		},
		id: "speedbreak",
		name: "Speed Break",
		rating: 4,
		num: 227
	},
/*	"justicepower": {
		shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
		onAfterDamage: function(damage, target, source, effect) {
			if (effect && effect.type === 'Dark') {
				this.boost({
					atk: 1
				});
			}
		},
		onDeductPP: function(damage, target, source, effect) {
			if (effect && effect.type === 'Dark') return;
			return 1;
		},
		id: "justicepower",
		name: "Justice Power",
		rating: 2,
		num: 228
	},*/
	"cursedtrace": {
		desc: "On switch-in, this Pokemon copies a random adjacent opposing Pokemon's Ability. If there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, and Zen Mode.",
		shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",
		onUpdate: function (pokemon) {
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
				let bannedAbilities = {comatose:1, disguise:1, flowergift:1, forecast:1, illusion:1, imposter:1, multitype:1, schooling:1, stancechange:1, trace:1, zenmode:1};
				if (bannedAbilities[target.ability]) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
				if (pokemon.setAbility(ability)) target.addVolatile('gastroacid');
				return;
			}
		},
		id: "cursedtrace",
		name: "cursed Trace",
		rating: 3,
		num: 229,
	},
	"sheerflight": {
		desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed.",
		shortDesc: "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects.",
		onImmunity: function(move, pokemon, type) {
			{
				if (move.secondaries) {
					if (type === 'Ground') return false;
				}
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
	},
	"evaporation": {
		desc: "This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.",
		shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
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
			}
		},
		id: "evaporation",
		name: "Evaporation",
	},
	"hardbody": {
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
		onBoost: function(boost, target, source, effect) {
			if (boost[i] < 0) {
				delete boost[i];
				showMsg = true;
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Clear Body", "[of] " + target);
		},
		onModifySpe: function(spe, pokemon) {
			if (pokemon.status === 'par') {
				return this.chainModify(1.5);
			}
		},
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.status === 'brn') {
				return this.chainModify(1.5);
			}
		},
		id: "hardbody",
		name: "Hard Body",
		rating: 2,
		num: 231
	},
	"gutbreaker": {
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Mold Breaker');
		},
		stopAttackEvents: true,
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		id: "gutbreaker",
		name: "Gut Breaker",
		rating: 3.5,
		num: 232
	},
	"synchofloat": {
		desc: "This Pokemon is immune to Ground. Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.",
		shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.",
		onImmunity: function(type) {
			if (type === 'Ground') return false;
			let oldAbility = source.setAbility('levitate', source, 'levitate', true);
			if (oldAbility) {
				this.add('-activate', target, 'ability: Levitate', oldAbility, '[of] ' + source);
			}
		},
		id: "synchofloat",
		name: "Synchofloat",
		rating: 3.5,
		num: 233
	},
	"magicianswand": {
		desc: "This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.",
		onTryHit: function(target) {
			if (target.hasAbility('stickyhold')) {
				this.add('-immune', target, '[msg]');
				return null;
			}
		},
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
		rating: 3.5,
		num: 234
	},
	"cleanmatch": {
		desc: "If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.",
		shortDesc: "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.",
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
		name: "cleanmatch",
		rating: 3.5,
		num: 235
	},
	"positivegrowth": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Bug attacks do 1.5x damage.",
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 3) {
				this.debug('Math surge');
				return this.chainModify(1.5);
			}
		},
		id: "positive growth",
		name: "Positive Growth",
		rating: 2,
		num: 236
	},

	"errormacro": {
		desc: "If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield.",
		shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",
		getCategory: function(move) {
			move = this.getMove(move);
			if (move.category === 'Status') return 'Status';
			if (move.category === 'Physical') return 'Special';
			return 'Physical';
		},
		onBeforeMovePriority: 11,
		onBeforeMove: function(attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Aegislash') return;
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			var targetSpecies = (move.id === 'kingsshield' ? 'Aegilene' : 'Aegislash-Saber');
			if (attacker.template.species !== targetSpecies && attacker.formeChange(targetSpecies)) {
				this.add('-formechange', attacker, targetSpecies);
			}
		},
		id: "errormacro",
		name: "Error Macro",
		rating: 5,
		num: 238
	},
	"latebloomer": {
		desc: "The power of this Pokemon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.",
		shortDesc: "This Pokemon's attacks have 1.3x power if it is the last to move in a turn.",
		OnAfterDamagePriority: 8,
		onAfterDamage: function(damage, attacker, defender, move) {
			if (!this.willMove(defender)) {
				if (this.random(10) < 3) {
					source.addVolatile('attract', target);
				}
			}
		},
		id: "latebloomer",
		name: "Late Bloomer",
		rating: 2,
		num: 239
	},
	"sturdytempo": {
		desc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.",
		shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",
		onUpdate: function(pokemon) {
			if (pokemon.volatiles['confusion']) {
				pokemon.removeVolatile('confusion');
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'confusion') {
				this.add('-immune', pokemon, 'confusion');
				return false;
			}
		},
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
		id: "sturdytempo",
		name: "Sturdy Tempo",
		rating: 3,
		num: 240
	},
	"tangledflames": {
		desc: "This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.",
		shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
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
			onModifyAtk: function(atk, target, attacker, defender, move) {
				if (move.type === 'Fire' || target && target.volatiles['confusion']) {
					this.debug('Flash Fire boost');
					return this.chainModify(2);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function(atk, attacker, defender, move) {
				if (move.type === 'Fire' || target && target.volatiles['confusion']) {
					this.debug('Flash Fire boost');
					return this.chainModify(2);
				}
			},
			onEnd: function(target) {
				this.add('-end', target, 'ability: Flash Fire', '[silent]');
			}
		},
		id: "tangledflames",
		name: "Tangled Flames",
		rating: 3,
		num: 241
	},
	"hydrostream": {
		shortDesc: "On switch-in, this Pokemon summons Rain Dance.",
		onStart: function(source) {
			this.setWeather('raindance');
		},
		id: "hydrostream",
		name: "Hydro Stream",
		rating: 4.5,
		num: 242
	},
	"hydrate": {
		desc: "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Ice type and have 1.3x power.",
		onModifyMovePriority: -1,
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Normal' && move.id !== 'naturalgift') {
				move.type = 'Water';
				if (move.category !== 'Status') pokemon.addVolatile('refrigerate');
			}
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function(basePower, pokemon, target, move) {
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		id: "hydrate",
		name: "Hydrate",
		rating: 4,
		num: 243
	},
	"breaker": {
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
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
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Clear Body", "[of] " + target);
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
		rating: 2,
		num: 244
	},
	"hammerspace": {
		shortDesc: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",
		onSwitchOut: function(pokemon) {
			pokemon.setItem(pokemon.lastItem);
			this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Hammer Space');
		},
		id: "hammer space",
		name: "Hammer Space",
		rating: 4,
		num: 245
	},
	"sereneeyes": {
		shortDesc: "This Pokemon's moves have their secondary effect chance doubled.",
		onModifyMovePriority: -2,
		onModifyMove: function(move) {
			if (move.secondaries && move.id !== 'secretpower') {
				this.debug('doubling secondary chance');
				move.accuracy *= 2;
			}
		},
		id: "sereneeyes",
		name: "Serene Eyes",
		rating: 4,
		num: 246
	},
	"leafstream": {
		shortDesc: "On switch-in, this Pokemon summons Sunny Day.",
		onStart: function(source) {
			this.setWeather('sunnyday');
		},
		id: "leafstream",
		name: "LeafStream",
		rating: 4.5,
		num: 247
	},
	"cybercriminal": {
		desc: "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
		onSourceFaint: function(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({
					spa: 1
				}, source);
			}
		},
		id: "cybercriminal",
		name: "Cyber Criminal",
		rating: 3.5,
		num: 248
	},

	"underpressure": {
		desc: "This Pokemon has its major status condition cured at the end of each turn if Rain Dance is active.",
		shortDesc: "This Pokemon has its status cured at the end of each turn if Rain Dance is active.",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			if (pokemon.status) {
				this.debug('under pressure');
				this.add('-activate', pokemon, 'ability: Hydration');
				pokemon.cureStatus();
			}
		},
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Pressure');
		},
		onDeductPP: function(target, source) {
			if (target.side === source.side) return;
			return 1;
		},
		id: "underpressure",
		name: "Under Pressure",
		rating: 2,
		num: 250
	},
	"naturaleye": {
		desc: "All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.",
		shortDesc: "Status moves with accuracy checks are 50% accurate when used on this Pokemon.",
		onModifyAccuracyPriority: 10,
		onModifyAccuracy: function(accuracy, target, source, move) {
			if (move.category === 'Status' && typeof move.accuracy === 'number') {
				this.debug('Wonder Skin - setting accuracy to 50');
				return 0;
			}
		},
		id: "naturaleye",
		name: "Natural Eye",
		rating: 2,
		num: 251
	},
	"overwhelmingpresence": {
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
		onStart: function(pokemon) {
			this.add('-start', pokemon, 'Embargo');
			this.add('-endability', pokemon);
			this.singleEvent('End', this.getAbility(pokemon.ability), pokemon.abilityData, pokemon, pokemon, 'gastroacid')
		},
		// Item suppression implemented in BattlePokemon.ignoringItem() within battle-engine.js
		// Ability suppression implemented in BattlePokemon.ignoringAbility() within battle-engine.js
		onResidualOrder: 18,
		onEnd: function(pokemon) {
			this.add('-end', pokemon, 'Embargo');
		},
		id: "overwhelmingpresence",
		name: "Overwhelming Presence",
		rating: 3.5,
		num: 252
	},
	"monsoon": {
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
		id: "monsoon",
		name: "Monsoon",
		rating: 3,
		num: 253
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
		onImmunity: function(type) {
			if (type === 'Ground') return false;
		},
		id: "monsoonaltered",
		name: "Monsoon-Altered",
		rating: 3,
		num: 254
	},
		"justifiedfire": {
		desc: "Raises user's Special Attack when hit with a Fire-type attack. Grants immunity to Fire.",
		shortDesc: "Raises user's Special Attack when hit with a Fire-type attack. Grants immunity to Fire.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[msg]', '[from] ability: Justified Fire');
				}
				return null;
			}
		},
		onAnyRedirectTarget: function (target, source, source2, move) {
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
		rating: 3.5,
		num: 32,
	},

	"sturdytempo": {
		desc: "Sturdy + Own Tempo.",
		shortDesc: "Sturdy + Own Tempo",
		onTryHit: function (pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy Tempo');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function (damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onUpdate: function (pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Sturdy Tempo');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile: function (status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit: function (target, source, move) {
			if (move && move.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Sturdy Tempo');
			}
		},
		id: "sturdytempo",
		name: "Sturdy Tempo",
	},


	"hydrostream": {
		shortDesc: "On switch-in, this Pokemon summons Rain Dance.",
		onStart: function (source) {
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
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Water';
				move.hydrateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
		if (move.hydrateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "hydrate",
		name: "Hydrate",
	},
	"leafstream": {
		shortDesc: "On switch-in, this Pokemon summons Sunny Day.",
		onStart: function (source) {
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
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: 1}, source);
			}
		},
		id: "cybercriminal",
		name: "Cyber Criminal",
		rating: 3.5,
		num: 153,
	},
	"cleartempo": {
		shortDesc: "Immune to stat drops and confusion.",
		onUpdate: function (pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Clear Tempo');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile: function (status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit: function (target, source, move) {
			if (move && move.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Clear Tempo');
			}
		},
		onBoost: function (boost, target, source, effect) {
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
		desc: "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",
		onSourceModifyAccuracy: function (accuracy) {
			if (this.isWeather('sandstorm')) {
			if (typeof accuracy !== 'number') return;
			this.debug('sandyeyes - enhancing accuracy');
			return accuracy * 1.3;
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandyeyes",
		name: "Sandy Eyes",
	},
	"sharparmor": {
		shortDesc: "Atk is raised by 2 when hit by a Water-type move and lowered by 2 when hit by a Fire-type; gives immunity to Water-type moves.",
		onAfterDamage: function (damage, target, source, effect) {
			if (effect && effect.type === 'Water') {
				this.boost({atk: 2});
			}
		},
		onAfterDamage: function (damage, target, source, effect) {
			if (effect && effect.type === 'Fire') {
				this.boost({atk: -2});
			}
		},
				onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Water') {
				move.accuracy = true;
				if (!target.addVolatile('sharparmor')) {
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
		onModifyDamage: function (damage, source, target, move) {
			if (pokemon.status && pokemon.status == 'slp') {
				this.debug('Dream Crusher boost');
				return this.chainModify(2);
			}
		},
		id: "dreamcrusher",
		name: "Dream Crusher",
	},
	"desertsnow": {
		desc: "This pokemon's Ground/Rock/Steel/Ice attacks do 1.3x in Sandstorm and Hail, opposing attacks of those types heal by 1/16 under the same weather conditions.",
		shortDesc: "This pokemon's Ground/Rock/Steel/Ice attacks do 1.3x in Sandstorm and Hail, opposing attacks of those types heal by 1/16 under the same weather conditions.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (this.isWeather('hail')) {
				if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel' || move.type === 'Ice') {
					this.debug('Desert Snow boost');
					return this.chainModify([0x14CD, 0x1000]);
				}
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onTryHit: function (target, source, move) {
			if (this.isWeather('hail')) {
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
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Magic Break');
		},
		onModifyMove: function (move) {
			move.ignoreItem = true;
		},
		id: "magicbreak",
		name: "Magic Break",
	},
		"raptorhead": {
		desc: "Prevents recoil damage and Attack reduction.",
		shortDesc: "Prevents recoil damage and Attack reduction.",
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle') return null;
		},
		onBoost: function (boost, target, source, effect) {
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
		onFlinch: function (pokemon) {
			this.boost({spe: 1, critRatio :1});
		},
		id: "steadfastluck",
		name: "Steadfast Luck",
	},
	"thunderousembers": {
		desc: "Raises Special Attack by 1.5x when hit by a fire attack move; immunity to fire attacks.",
		shortDesc: "Raises Special Attack by 1.5x when hit by a fire attack move; immunity to fire attacks.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[msg]', '[from] ability: Thunderous Embers');
				}
				return null;
			}
		},
		onAnyRedirectTarget: function (target, source, source2, move) {
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
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Electric') {
				move.accuracy = true;
				if (!target.addVolatile('torrentialvoltage')) {
					this.add('-immune', target, '[msg]', '[from] ability: Torrential Voltage');
				}
				return null;
			}
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('torrentialvoltage');
		},
		effect: {
			noCopy: true,
			onStart: function (target) {
				this.add('-start', target, 'ability: Torrential Voltage');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function (atk, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('Torrential Voltage boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function (atk, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('Torrential Voltage boost');
					return this.chainModify(1.5);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'ability: Torrential Voltage', '[silent]');
			},
		},
		id: "torrentialvoltage",
		name: "Torrential Voltage",
	},
		"seamonster": {
		desc: "Lowers opponent's attack one stage upon switching in. Water-type attacks are boosted 10%.",
		shortDesc: "Lowers opponent's attack one stage upon switching in. Water-type attacks are boosted 10%.",
		onStart: function (pokemon) {
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
					this.boost({atk: -1}, foeactive[i], pokemon);
				}
			}
		},
		onBasePower: function (basePower, user, target, move) {
			if (move.type === 'Water') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		id: "seamonster",
		name: "Sea Monster",
		},

	"sereneeyes": {
		shortDesc: "Moves with secondary effect chances have their accuracy doubled.",
		onModifyMovePriority: -2,
		onModifyMove: function (move) {
			if (move.secondaries) {
			return accuracy * 1.3;
			}
		},
		id: "sereneeyes",
		name: "Serene Eyes",
	},
	"fromashes": {
		desc: "If the Pokémon is burned, it will gain 1/8 of its maximum HP at the end of each turn instead of taking damage. The Pokémon with this Ability does not lose Attack due to burn.",
		shortDesc: "If the Pokémon is burned, it will gain 1/8 of its maximum HP at the end of each turn instead of taking damage. The Pokémon with this Ability does not lose Attack due to burn.",
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'brn') {
				this.heal(target.maxhp / 8);
				return false;
			}
		},
		id: "fromashes",
		name: "From Ashes",
	},
	"sturdytech": {
		shortDesc: "Sturdy + Technician",
		onTryHit: function (pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function (damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
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
		onModifyAtk: function (atk, pokemon) {
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
		onUpdate: function (spa, pokemon) {
			if (pokemon.status) {
				this.boost({spa: 1});
			}
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
		onTryHit: function (pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function (damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fire') {
				move.accuracy = true;
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[msg]', '[from] ability: Flash Fire');
				}
				return null;
			}
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('flashfire');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (target) {
				this.add('-start', target, 'ability: Flash Fire');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function (atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function (atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'ability: Flash Fire', '[silent]');
			},
		},
		id: "sturdyfire",
		name: "Sturdy Fire",
	},
	"kindle": {
		shortDesc: "During hail, it's Fire moves are powered up by 1.5x and recovers 1/16 HP every turn.",
		onModifySpAPriority: 5,
		onModifySpA: function (spa, pokemon) {
			if (this.isWeather('sunnyday')) {
				return this.chainModify(1.5);
			}
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.maxhp / 16, target, target);
			}
		},
		id: "kindle",
		name: "Kindle",
	},
	"durablebarbs": {
		shortDesc: "Sturdy + Iron Barbs",
		onTryHit: function (pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage: function (damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onAfterDamageOrder: 1,
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.maxhp / 8, source, target);
			}
		},
		id: "durablebarbs",
		name: "Durable Barbs",
	},
	"rapidgrowth": {
		shortDesc: "Grass-type moves have their priority increased by 1.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.type === 'Grass') return priority + 1;
		},
		id: "rapidgrowth",
		name: "Rapid Growth",
	},
	"amazingbulk": {
		shortDesc: "This Pokemon receives 1/2 damage from supereffective attacks.",
		onSourceModifyDamage: function (damage, source, target, move) {
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
		onModifySpA: function (atk) {
				return this.chainModify(2);
		},
		id: "chargedup",
		name: "Charged Up",
	},
	"khanqueror": {
		shortDesc: "Ignores type immunities while attacking",
		onModifyMovePriority: -5,
		onModifyMove: function (move) {
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
		onStart: function (source) {
			this.useMove('Trick Room', source);
		},
		id: "Synchrostall",
		name: "Synchrostall",
	},
	"permafrost": {
		shortDesc: "Immune to Fire and Ground.",
		onImmunity: function (type, pokemon) {
			if (type === 'Fire' || type === 'Ground') return false;
		},
		id: "permafrost",
		name: "Permafrost",
	},
	"heavyarmor": {
		shortDesc: "If a physical attack hits this Pokemon, defense is raised by 1, speed is lowered by 1.",
		onAfterDamage: function (damage, target, source, move) {
			if (move.category === 'Physical') {
				this.boost({def: 1, spe: -1}, target, target);
			}
		},
		id: "heavyarmor",
		name: "Heavy Armor",
	},
	'negativebody': {
		shortDesc: "Resets all stat changes of the opponent upon switching in.",
		onStart: function (source) {
			this.useMove('Haze', source);
		},
		id: "negativebody",
		name: "Negative Body",
	},
	"strikeandpass": {
		shortDesc: "All moves at 60 base power or below get boosted by x1.5 and gain a U-Turn switching effect.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (basePower <= 60) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		onModifyMove: function(move) {
			if (move.target && !move.nonGhostTarget && (move.target === "normal" || move.target === "any" || move.target === "randomNormal" || move.target === "allAdjacent" || move.target === "allAdjacentFoes")) {
				move.selfSwitch = true;
			}
		},
		id: "strikeandpass",
		name: "Strike and Pass",
	},
	"stunningbug": {
		shortDesc: "Bug-type moves have their priority increased by 1.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.type === 'Bug') return priority + 1;
		},
		id: "stunningbug",
		name: "Stunning Bug",
	},
	"champion": {
		shortDesc: "Users Attack is 1.5x.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk) {
				return this.chainModify(1.5);
		},
		id: "champion",
		name: "Champion",
	},
	'venomstream': {
		shortDesc: "Uses Toxic Spikes on switch in",
		onStart: function (source) {
			this.useMove('Toxic Spikes', source);
		},
		id: "venomstream",
		name: "Venom Stream",
	},
	"sunaura": {
		shortDesc: "Powers up each Pokemon's Fire-type moves by 33%.",
		onBasePowerPriority: 8,
		onBasePower: function (type, attacker, defender, move) {
			if (type === 'Fire') {
				return this.chainModify(1.3);
			}
		},
		id: "sunaura",
		name: "Sun Aura",
	},
	'tropicalstorm': {
		shortDesc: "Tailwind on switch in",
		onStart: function (source) {
			this.useMove('Tailwind', source);
		},
		id: "tropicalstorm",
		name: "Tropical Storm",
	},
	"flamedrive": {
		shortDesc: "If this Pokemon is struck by a Fire type move, its speed is raised by one stage. Fire type immunity.",
		onImmunity: function (type, pokemon) {
			if (type === 'Fire') return false;
			this.add('-ability', pokemon, 'Flame Drive');
		},
		onModifySpe: function (spe, attacker, defender, move) {
				if (move.type === 'Fire') {
					return this.chainModify(1.5);
				}
			},
		id: "flamedrive",
		name: "Flame Drive",
	},
	"flamedrive": {
		shortDesc: "If this Pokemon is struck by a Fire type move, its speed is raised by one stage. Fire type immunity.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: 1}, source);
			}
		},
		onModifySpAPriority: 5,
			onModifySpA: function (atk, attacker, defender, move) {
				if (move.type === 'Flying') {
					return this.chainModify(1.5);
				}
			},
		id: "flamedrive",
		name: "Flame Drive",
	},
	'boosttrace': {
		shortDesc: "Copies opponent's stat boosts (not drops) on switch in.",
		onStart: function (source) {
			this.useMove('Psych Up', source);
		},
		id: "boosttrace",
		name: "Boost Trace",
	},
	"masochist": {
		shortDesc: "This Pokemon's Atk & Defense are raised by 1 stage after it is damaged by a move.",
		onAfterDamage: function (damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && effect.id !== 'confused') {
				this.boost({def: 1, atk: 1});
			}
		},
		id: "masochist",
		name: "Masochist",
	},
	'flamingpresence': {
		shortDesc: "Upon switching in, this pokemon burns all opposing pokemon that can be burned.",
		onStart: function (source) {
			this.useMove('Will-O-Wisp', source);
		},
		id: "flamingpresence",
		name: "Flaming Presence",
	},
	"kaleidocope": {
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Filter neutralize');
				return this.chainModify(0.5);
			}
		},
		onModifyDamage: function (damage, source, target, move) {
			if (move.typeMod < 0) {
				return this.chainModify(2);
			}
		},
		id: "kaleidocope",
		name: "Kaleidocope",
	},
	"hazmatfur": {
		shortDesc: "This Pokemon takes 1/2 damage from contact and Fire moves.",
		onSourceModifyDamage: function (damage, source, target, move) {
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
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Status' || move && move.flags['heal']) return priority + 3;
		},
		onModifyMove: function (move) {
			if (move && move.category === 'Status') {
			}
		},
		id: "indulgence",
		name: "Indulgence",
	},
	"determination": {
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack stat stage.",
		onBoost: function (boost, target, source, effect) {
			if (source && target === source) return;
			if (boost['atk'] && boost['atk'] < 0 && target.hp <= target.maxhp / 2) {
				delete boost['atk'];
				if (!effect.secondaries) this.add("-fail", target, "unboost", "Attack", "[from] ability: Determination", "[of] " + target);
			}
		},
		id: "determination",
		name: "Determination",
	},
	"outrageous": {
		shortDesc: "This Pokemon's SpA is 1.5x as long as it is confused.",
		onModifySpA: function (spa, target) {
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
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle') return null;
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		id: "woodhead",
		name: "Wood Head",
	},
	"blazerush": {
		shortDesc: "The Pokémon's Speed is doubled when its HP falls below 1/3 of the maximum.",
		onModifySpe: function (spe, attacker) {
			if (attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(2);
			}
		},
		id: "blazerush",
		name: "Blaze Rush",
	},
	"swiftretreat": {
		shortDesc: "This Pokemon's speed is doubled until its HP falls below 50%, then it switches out.",
			onModifySpe: function (spe, attacker) {
			if (attacker.hp > attacker.maxhp / 2) {
				return this.chainModify(2);
			}
		},
		onAfterMoveSecondary: function (target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			if (target.hp <= target.maxhp / 2 && target.hp + move.totalDamage > target.maxhp / 2) {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
				target.switchFlag = true;
				source.switchFlag = false;
				this.add('-activate', target, 'ability: Emergency Exit');
			}
		},
		onAfterDamage: function (damage, target, source, effect) {
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
		onAfterDamage: function (damage, target, source, effect, move) {
			if (effect && effect.effectType === 'Move' && effect.id !== 'confused' && !move.crit) {
				this.boost({def: 1, atk: 1});
			}
		},
		onHit: function (target, source, move) {
			if (!target.hp) return;
			if (move && move.effectType === 'Move' && move.crit) {
				target.setBoost({atk: 3, def: 3});
				this.add('-setboost', target, 'atk', 12, '[from] ability: Champions Spirit');
			}
		},
		id: "championsspirit",
		name: "Champions Spirit",
	},
	"Beasts Focus": {
		shortDesc: "If Pokémon would be flinched, buffs highest non-HP stat instead.",
		onFlinch: function (target, source, effect) {
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
		id: "beastsfocus",
		name: "Beasts Focus",
	},
	"volttorrent": {
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Electric attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Electric' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
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
		onAnyAccuracy: function (accuracy, target, source, move) {
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
		onModifyMove: function (move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity = true;
			}
		},
		onModifyDamage: function (damage, source, target, move) {
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
			if (!pokemon.hasAbility('shadowtag') && this.isAdjacent(pokemon, this.effectData.target) && pokemon.type === 'Fairy') {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function (pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!pokemon.hasAbility('shadowtag') && this.isAdjacent(pokemon, source) && pokemon.type === 'Fairy') {
				pokemon.maybeTrapped = true;
			}
		},
		id: "pixielure",
		name: "Pixie Lure",
	},
	"flowerpower": {
		shortDesc: "Increases Attack and Special Defense by 1.5x, no ifs or buts about it.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, pokemon) {
				return this.chainModify(1.5);
		},
		onModifyDefPriority: 5,
		onModifyDef: function (def, pokemon) {
				return this.chainModify(1.5);
		},
		isUnbreakable: true,
		id: "flowerpower",
		name: "Flower Power",
	},
	"guerillawarfare": {
		shortDesc: "Attacks with 60 BP or less get a 50% power boost and have the added effect of causing the user to switch out.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
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
		onModifySpe: function (spe, pokemon) {
				return this.chainModify(2);
		},
		id: "lightspeed",
		name: "Light Speed",
	},
	"highstakes": {
		shortDesc: "The Attack of this Pokemon is boosted by x2.5, at the cost of loosing 25% percent accuracy on Physical moves.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk) {
			return this.modify(atk, 2.5);
		},
		onModifyMovePriority: -1,
		onModifyMove: function (move) {
			if (move.category === 'Physical' && typeof move.accuracy === 'number') {
				move.accuracy *= 0.75;
			}
		},
		id: "highstakes",
		name: "High Stakes",
	},
	"fearshield": {
		shortDesc: "Immune to Ghost, Dark, and Bug-type moves.",
		onImmunity: function(type) {
			if (type === 'Bug' || type === 'Dark' || type === 'Ghost') return false;
		},
		id: "fearshield",
		name: "Fear Shield",
	},
	"puffycloud": {
		shortDesc: "Negates weather effects. Powers up physical attacks by a factor of 1.5 while any weather is in play.",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Puffy Cloud');
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function (pokemon, atk) {
			if (this.isWeather(['sunnyday', 'desolateland', 'hail', 'rainyday', 'primordialsea', 'sandstream', 'shadowsky', 'aircurrent']) && pokemon.useItem()) {
				return this.chainModify(1.5);
			}
		},
		suppressWeather: true,
		id: "puffycloud",
		name: "Puffy Cloud",
	},
	"tinkering": {
		shortDesc: "This Pokemon's status moves and moves that switch the user out have +1 priority. this Pokemon heals status conditions upon switching out..",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Status' || move.selfSwitch === 'true') {
				return priority + 1;
			}
		},
		onModifyMove: function (move) {
			if (move && move.category === 'Status' || move.selfSwitch === 'true') {
			}
		},
		onCheckShow: function (pokemon) {
			// This is complicated
			// For the most part, in-game, it's obvious whether or not Natural Cure activated,
			// since you can see how many of your opponent's pokemon are statused.
			// The only ambiguous situation happens in Doubles/Triples, where multiple pokemon
			// that could have Natural Cure switch out, but only some of them get cured.
			if (pokemon.side.active.length === 1) return;
			if (pokemon.showCure === true || pokemon.showCure === false) return;

			let active = pokemon.side.active;
			let cureList = [];
			let noCureCount = 0;
			for (let i = 0; i < active.length; i++) {
				let curPoke = active[i];
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
				for (let i = 0; i < cureList.length; i++) {
					cureList[i].showCure = true;
				}
			} else {
				// It's not possible to know what pokemon were cured

				// Unlike a -hint, this is real information that battlers need, so we use a -message
				this.add('-message', "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");

				for (let i = 0; i < cureList.length; i++) {
					cureList[i].showCure = false;
				}
			}
		},
		onSwitchOut: function (pokemon) {
			if (!pokemon.status) return;

			// if pokemon.showCure is undefined, it was skipped because its ability
			// is known
			if (pokemon.showCure === undefined) pokemon.showCure = true;

			if (pokemon.showCure) this.add('-curestatus', pokemon, pokemon.status, '[from] ability: Natural Cure');
			pokemon.setStatus('');

			// only reset .showCure if it's false
			// (once you know a Pokemon has Natural Cure, its cures are always known)
			if (!pokemon.showCure) delete pokemon.showCure;
		},
		id: "tinkering",
		name: "Tinkering",
	},
	"bamboozled": {
		shortDesc: "Immune to status moves. Status moves used by this fusion have +1 priority.",
		onImmunity: function (pokemon, move) {
			if (move.category === 'Status') return false;
		},
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				return priority + 1;
			}
		},
		onModifyMove: function (move) {
			if (move && move.category === 'Status') {
			}
		},
		id: "bamboozled",
		name: "Bamboozled",
	},
	"electronrain": {
		shortDesc: "Sp. Atk under Rain is 1.5x. Summons Rain upon switching in.",
		onStart: function (source) {
			for (let i = 0; i < this.queue.length; i++) {
				if (this.queue[i].choice === 'runPrimal' && this.queue[i].pokemon === source && source.template.speciesid === 'kyogre') return;
				if (this.queue[i].choice !== 'runSwitch' && this.queue[i].choice !== 'runPrimal') break;
			}
			this.setWeather('raindance');
		},
		onModifySpAPriority: 5,
		onModifySpA: function (spa, pokemon) {
			if (this.isWeather(['rainyday', 'primordialsea'])) {
				return this.chainModify(1.5);
			}
		},
		id: "electronrain",
		name: "Electron Rain",
	},	
	'prestidigitation': {
		shortDesc: "Switches item on switch in",
		onStart: function (source) {
			this.useMove('Switcheroo', source);
		},
		id: "prestidigitation",
		name: "Prestidigitation",
	},
	"revvedup": {
		shortDesc: "Users Speed is double upon switch-in.",
		onModifySpe: function (spe) {
				return this.chainModify(2);
		},
		id: "revvedup",
		name: "Revved Up",
	},
	"mistysupercharge": {
		desc: "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' || move.type === 'Electric' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fairy';
				move.mistysuperchargeBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
		if (move.mistysuperchargeBoosted) return this.chainModify(1.3);
		},
		onStart: function (source) {
			this.setTerrain('mistyterrain');
		},
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Fairy' && this.isTerrain('mistyterrain')) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
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
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
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
		onSourceModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onUpdate: function (pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Bubble');
				pokemon.cureStatus();
			}
		},
		onSetStatus: function (status, target, source, effect) {
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
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				return this.chainModify(1.75);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				return this.chainModify(1.75);
			}
		},
		id: "operationovergrow",
		name: "Operation: Overgrow",
	},
	"lightningfist": {
		shortDesc: "This Pokemon's punch-based attacks have their priorities increased by 1.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move.flags['punch']) return priority + 1;
		},
		id: "lightningfist",
		name: "Lightning Fist",
	},
	"flarewings": {
		shortDesc: "While Burned, holder's Speed is doubled; immune to Burn damage.",
		onModifySpe: function (spe, pokemon) {
			if (pokemon.status === 'brn') {
				return this.chainModify(2);
			}
		},
		onDamagePriority: 1,
		onDamage: function (damage, target, source, effect) {
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
		onStart: function (pokemon) {
			let foeactive = pokemon.side.foe.active;
			let activated = false;
			for (let i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidate', 'boost');
					activated = true;
				}
				if (foeactive[i].volatiles['substitute']) {
					this.add('-immune', foeactive[i], '[msg]');
				} else {
					this.boost({def: -1}, foeactive[i], pokemon);
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
		onResidual: function (pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe: 1});
			}
		},
		onBoost: function (boost, target, source, effect) {
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
		onBasePower: function (basePower, attacker, defender, move) {
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
		onModifySpA: function (atk, pokemon) {
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
			else if (move.typeMod > 0) {
				return this.chainModify(0.5);
			}
			else if (move.typeMod > 0 && target.hp >= target.maxhp) {
				return this.chainModify(0.25);
			}
		},
		id: "landsshield",
		name: "Lands Shield",
	},
	"godlikepowers": {
		shortDesc: "This Pokemon's Attack is doubled.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk) {
			return this.chainModify(2);
		},
		onModifySpAPriority: 5,
		onModifySpA: function (spa) {
			return this.chainModify(2);
		},
		onModifyDefPriority: 5,
		onModifyDef: function (def) {
			return this.chainModify(2);
		},
		onModifySpDPriority: 5,
		onModifySpD: function (spd) {
			return this.chainModify(2);
		},
		onModifySpe: function (spe) {
			return this.chainModify(2);
		},
		id: "godlikepowers",
		name: "Godlike Powers",
	},
	"softenup": {
		shortDesc: "On switch-in, the foe's Attack and Special Attack are lowered by one stage. When this Pokémon knocks out an opponent, its Attack and Special Attack are raised by one stage.",
		onStart: function (pokemon) {
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
					this.boost({atk: -1, spa: -1}, foeactive[i], pokemon);
				}
			}
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: 1, spa: 1}, source);
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
		onSetStatus: function (status, target, source, effect) {
				if (effect && effect.status) {
					this.add('-activate', target, 'move: Misty Mind');
				}
				return false;
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
	},
	"unstablevoltage": {
		shortDesc: "Attacks that either target this Pokémon or are used by it have perfect accuracy. Ignores abilities when attacking and attacked.",
		onAnyAccuracy: function (accuracy, target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target)) {
				return true;
			}
			return accuracy;
		},
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Unstable Voltage');
		},
		onModifyMove: function (move) {
			move.ignoreAbility = true;
		},
		id: "unstablevoltage",
		name: "Unstable Voltage",
	},
	"hugebubble": {
		shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved. When it has 1/3 or less of its max HP, its Water power is 3x instead of 2x.",
		onModifyAtkPriority: 5,
		onSourceModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
			else if (move.type === 'Water' & attacker.hp <= attacker.maxhp /3) {
				return this.chainModify(3);
			}
		},
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
			else if (move.type === 'Water' & attacker.hp <= attacker.maxhp /3) {
				return this.chainModify(3);
			}
		},
		onUpdate: function (pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Huge Bubble');
				pokemon.cureStatus();
			}
		},
		onSetStatus: function (status, target, source, effect) {
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
		onModifyMove: function (move) {
			move.infiltrates = true;
		},
		onModifyMove: function (move) {
			move.ignoreEvasion = true;
		},
		onBoost: function (boost, target, source, effect) {
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
		shortDesc: "This Pokemon's Attack and Speed is doubled.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk) {
			return this.chainModify(2);
		},
		onModifySpe: function (spe) {
			return this.chainModify(2);
		},
		id: "poweroftwo",
		name: "Power of Two",
	},
	"chlorocoat": {
		shortDesc: "This Pokemon's Speed and Defense is doubled.",
		onModifyDefPriority: 5,
		onModifyDef: function (def) {
			return this.chainModify(2);
		},
		onModifySpe: function (spe) {
			return this.chainModify(2);
		},
		id: "chlorocoat",
		name: "Chlorocoat",
	},
	"photosynthesissurge": {
		shortDesc: "On switch-in, this Pokemon summons Sun + Grassy Terrain.",
		onStart: function (source) {
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
		onFoeTrapPokemon: function (pokemon) {
			if (pokemon.hasType('Steel') || pokemon.hasType('Fire') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function (pokemon, source) {
			if (!source) source = this.effectData.target;
			if ((!pokemon.knownType || pokemon.hasType('Steel') || pokemon.hasType('Fire')) && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fire' || move.type === 'Fire') {
				move.accuracy = true;
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[msg]', '[from] ability: Blacksmith');
				}
				return null;
			}
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('flashfire');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (target) {
				this.add('-start', target, 'ability: Blacksmith');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function (atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function (atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					return this.chainModify(1.5);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'ability: Blacksmith', '[silent]');
			},
		},
		id: "blacksmith",
		name: "Blacksmith",
	},
	"magicalice": {
		shortDesc: "This pokemon is immune being confused and stats drop.",
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
		onBoost: function (boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				if (boost[i] < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Magical Ice", "[of] " + target);
		},
		id: "magicalice",
		name: "Magical Ice",
	},
	"codeunkown": {
		desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
		onStart: function (pokemon) {
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
					this.boost({atk: -1, spa: -1}, foeactive[i], pokemon);
				}
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (spa, pokemon) {
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
		id: "codeunkown",
		name: "Code Unknown",
	},
	"thermophilic": {
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Fire moves; Fire immunity. It also heals 1/8 of its max HP every turn in Sun.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Thermophilic');
				}
				return null;
			}
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.heal(target.maxhp / 8, target, target);
			}
		},
		id: "thermophilic",
		name: "Thermophilic",
	},
	"planinaction": {
		shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
		onStart: function (pokemon) {
				this.add('-ability', pokemon, 'Plan In Action');
				this.boost({atk: 1});
		},
		onAnyBasePower: function (basePower, source, target, move) {
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
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle') return null;
		},
		id: "enchantedskull",
		name: "Enchanted Skull",
	},
	"thunderstormsurge": {
		shortDesc: "On switch-in, this Pokemon summons Rain + Electric Terrain.",
		onStart: function (source) {
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
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Ground';
				move.madnessBoosted = true;
			}
			else if (move.type === 'Ground' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Electric';
				move.madnessBoosted = true;
			}
			else if (move.type === 'Electric' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Steel';
				move.madnessBoosted = true;
			}
			else if (move.type === 'Steel' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Rock';
				move.madnessBoosted = true;
			}
			else if (move.type === 'Rock' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Normal';
				move.madnessBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
		if (move.madnessBoosted) return this.chainModify(1.5);
		},
		id: "movemadness",
		name: "Move Madness",
	},
	"lightarmor": {
		shortDesc: "Boosts defense by 1.5x when over 1/3 HP. Doubles speed when under 1/3 HP.",
		onModifyDefPriority: 5,
		onModifyDef: function (def, pokemon) {
			if (pokemon.hp > pokemon.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpe: function (spe, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 3) {
				return this.chainModify(2);
			}
		},
		id: "lightarmor",
		name: "Light Armor",
	},
	"cleanaura": {
		shortDesc: "This Pokemon is immune to major status conditions.",
		onSetStatus: function (status, target, source, effect) {
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
		onStart: function (source) {
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
		onFoeTrapPokemon: function (pokemon) {
			if (pokemon.hasType('Steel') || pokemon.hasType('Fire') || pokemon.hasType('Ice') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function (pokemon, source) {
			if (!source) source = this.effectData.target;
			if ((!pokemon.knownType || pokemon.hasType('Steel') || pokemon.hasType('Fire') || pokemon.hasType('Ice')) && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire' || move.type === 'Steel' || move.type === 'Ice') mod /= 2;
			return this.chainModify(mod);
		},
		id: "fattrap",
		name: "Fat Trap",
	},
	"authority": {
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Physical') {
				return priority + 1;
			}
		},
		onModifyMove: function (move) {
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
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Fire' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fairy';
				move.bgoneBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
		if (move.bgoneBoosted) return this.chainModify(1.5);
		},
		onImmunity: function (type, pokemon) {
			if (type === 'Fire') return false;
		},
		id: "firebgone",
		name: "Fire-B-Gone",
	},
	"lethalleafage": {
		shortDesc: "This Pokemon's contact and Grass-type moves are boost 1.3x. These boosts stack.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.flags['contact'] || move.type === 'Grass') {
				return this.chainModify(1.3);
			}
			else if (move.flags['contact'] && move.type === 'Grass') {
				return this.chainModify(1.69);
			}
		},
		id: "lethalleafage",
		name: "Lethal Leafage",
	},
	"sandmistsurge": {
		shortDesc: "On switch-in, this Pokemon summons Sandstorm + Misty Terrain.",
		onStart: function (source) {
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
		shortDesc: "Boosts Defense by two stages + highest non-hp non-def stat by one stage upon KOing a foe.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				let secondBest = 'spa';
				for (let i in source.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = source.stats[i];
						secondBest = source.stats > bestStat;
					}
				}
				if (stat !== 'def') { 
				this.boost({[stat]: 1}, source);
				}
				else if (stat === 'def') {
				this.boost({[secondBest]: 1}, source);
				}
				this.boost({def: 2}, source);
			}
		},
		id: "compactboost",
		name: "Compact Boost",
	},
	"meteorshower": {
		shortDesc: "This Pokemon's Normal-type moves become Rock-type and have 1.5x power. All Rock-type Pokemon on the field have +50% Special Defense.",
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Rock';
				move.meteorshowerBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
		if (move.meteorshowerBoosted)	return this.chainModify(1.5);
		},
		onModifySpDPriority: 4,
		onModifySpD: function (spd, pokemon) {
			if (pokemon.type === 'Rock') {
				return this.chainModify(1.5);
			}
		},
		id: "meteorshower",
		name: "Meteor Shower",
	},
	"blackhole": {
		shortDesc: "This Pokemon receives 1/2 damage from supereffective attacks. Immune to burn.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				return this.chainModify(0.5);
			}
		},
		onSetStatus: function (status, target, source, effect) {
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
				return this.chainModify(1.6);
			}
		},
		onModifyMovePriority: -2,
		onModifyMove: function (move) {
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
		onModifySpD: function (spd, pokemon) {
			if (pokemon.type === 'Rock' || pokemon.type === 'Water') {
				return this.chainModify(1.5);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Rock' && attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Rock' && attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		id: "underwaterscreen",
		name: "Underwater Screen",
	},
	"mountainclimber": {
		shortDesc: "Speed under Hail or Sand is 2.5x, immunity to both.",
		onModifySpe: function (spe, pokemon) {
			if (this.isWeather('hail') || this.isWeather('sandstorm')) {
				return this.chainModify(2.5);
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail' || type === 'sandstorm') return false;
		},
		id: "mountainclimber",
		name: "Mountain Climber",
	},
	"monarchoftherain": {
		shortDesc: "Speed under Hail or Sand is 2.5x, immunity to both.",
		onModifySpe: function (spe, pokemon) {
			if (this.isWeather('hail') || this.isWeather('sandstorm')) {
				return this.chainModify(2.5);
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail' || type === 'sandstorm') return false;
		},
		id: "monarchoftherain",
		name: "Monarch of the Rain",
	},
	"dukeofthelightning": {
		shortDesc: "This Pokemon's Speed is doubled.",
		onModifySpe: function (spe) {
			return this.chainModify(2);
		},
		id: "dukeofthelightning",
		name: "Duke of the Lightning",
	},
	"emperorofthefire": {
		shortDesc: "This Pokemon's Attack is doubled.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk) {
			return this.chainModify(2);
		},
		id: "emperorofthefire",
		name: "Emperor of the Fire",
	},
	"overloadedhelm": {
		shortDesc: "This Pokemon's Steel and Normal-type attacks have their power multiplied 1.5x and turns them into Electric moves.",
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Steel' || move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Electric';
				move.overloadedhelmBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
		if (move.overloadedhelmBoosted) return this.chainModify(1.5);
		},
		id: "overloadedhelm",
		name: "Overloaded Helm",
	},
	"unrivaledclaws": {
		shortDesc: "This Pokemon's contact moves have their power multiplied by 1.67.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
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
				this.heal(target.maxhp / 3);
			}
		},
		id: "ouroboros",
		name: "Ouroboros",
	},
	"braveheart": {
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				return this.chainModify(0.75);
			}
		},
		onHit: function (target, source, move) {
			if (move.typeMod > 0) {
				target.setBoost({atk: 2});
				this.add('-setboost', target, 'atk', 4, '[from] ability: Braveheart');
			}
		},
		id: "braveheart",
		name: "Braveheart",
	},
	"darklight": {
		shortDesc: "Provides inmunity to super effective attacks and heals 25% of its health instead. This Ability cannot be ignored.",
		onImmunity: function (move) {
			if (move.typeMod > 0) return false;
		},
		onTryHit: function (target, source, move) {
			if (target !== source && move.typeMod > 0) {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Dark Light');
				}
				return null;
			}
		},
		isUnbreakable: true,
		id: "darklight",
		name: "Dark Light",
	},
	"ancientfoilage": {
		shortDesc: "While this Pokemon is active, Grass and Rock-Type Pokemon Special Defense is boosted by 50%. Raises the power of Grass and Rock-type moves by 50% when at 1/2 HP or less.",
		onModifySpDPriority: 4,
		onModifySpD: function (spd, pokemon) {
			if (pokemon.type === 'Rock' || pokemon.type === 'Grass') {
				return this.chainModify(1.5);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Rock' && attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Rock' && attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		id: "ancientfoilage",
		name: "Ancient Foliage",
	},
	"prodigy": {
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 2.35. Does affect Struggle.",
		shortDesc: "This Pokemon's moves of 60 power or less have 2.25x power. Includes Struggle.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
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
		onModifyDef: function (def, move) {
			if (move.category === 'Physical') {
			return this.chainModify(2);
			}
		},
		id: "toothick",
		name: "Too Thick",
	},
	"techfur": {
		shortDesc: "This Pokemon's moves of 60 power or less have 3x power. Includes Struggle.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (basePower <= 60) {
				return this.chainModify(3);
			}
		},
		id: "techfur",
		name: "Tech Fur",
	},
	"soundsoul": {
		shortDesc: "Attack is raised by 1 stage when hit by sound-based moves. Receives no damage from sound-based moves.",
		onImmunity: function (move, pokemon) {
			if (move.flags['sound']) return false;
		},
		onHit: function (target, source, move) {
			if (!target.hp) return;
			if (move && move.effectType === 'Move' && move.flags['sound']) {
				target.setBoost({atk: 1});
				this.add('-setboost', target, 'atk', 1, '[from] ability: Anger Point');
			}
		},
		id: "soundsoul",
		name: "Sound Soul",
	},
	"phasethrough": {
		shortDesc: "Frisk + Natural Care",
		onStart: function (pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				if (target.item) {
					this.add('-item', target, target.getItem().name, '[from] ability: Phase Through', '[of] ' + pokemon, '[identify]');
				}
			}
		},
		onCheckShow: function (pokemon) {
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
		onSwitchOut: function (pokemon) {
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
	"us": {
		shortDesc: "Immune to priority & status moves.",
		onImmunity: function (pokemon, move) {
			if (move.category === 'Status' || move.priority > 0) return false;
		},
		id: "us",
		name: "US",
	},
"healthymeal": {
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and cannot be inflicted with any major status condition.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				return this.chainModify(0.75);
			}
		},
		onSetStatus: function (status, target, source, effect) {
				if (effect && effect.status) {
					this.add('-activate', target, 'move: Healthy Meal');
				}
				return false;
			},
		id: "healthymeal",
		name: "Healthy Meal",
	},
	"christmasspirit": {
		shortDesc: "Halves super-effective damage. Halves damage from Fire and Ice-typed moves. These stack. Cannot be bypassed by Mold Breaker or similar effects.",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				return this.chainModify(0.75);
			}
		},
		onModifyAtkPriority: 6,
		onSourceModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function (atk, attacker, defender, move) {
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
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, pokemon) {
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
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
			if (this.isWeather(['raindance', 'primordialsea'])) {
				return this.chainModify(2);
			}
		},
		onModifySpe: function (spe, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		id: "heatseeker",
		name: "Heat Seeker",
	},
	"bingobongo": {
		shortDesc: "Normal and Fighting-type moves have 1.5x power and can hit Ghost-types.",
		onBasePowerPriority: 8,
		onBasePower: function (move) {
			if (move.type === 'Normal' || move.type ==='Fighting') {
				return this.chainModify(1.5);
			}
		},
		onModifyMovePriority: -5,
		onModifyMove: function (move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
			}
		},
		id: "bingobongo",
		name: "Bingo Bongo",
	},
	"panicmode": {
		shortDesc: "This Pokemon's moves have +1 priority when this Pokemon is burned, paralyzed, or poisoned. Ignores the burn Attack drop.",
		onModifyPriority: function (priority, move, effect) {
			if (effect.id === 'psn' || effect.id === 'tox' || effect.id === 'brn' || effect.id === 'par') return priority + 1;
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.effect.id === 'brn') {
				return this.chainModify(2);
			}
		},
		id: "panicmode",
		name: "Panic Mode",
	},
	"positivity": {
		shortDesc: "This Pokemon's stat changes are amplified to 3x their normal amount.",
		onBoost: function (boost, target, source, effect) {
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
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				return this.chainModify(1.5);
			}
			else if (move.flags['contact'] && !move.flags['punch']) {
				return this.chainModify(1.3);
			}
			
		},
		id: "fisticuffs",
		name: "Fisticuffst",
	},
	"starburst": {
		shortDesc: "This Pokémon's moves with 60 Base Power or less or that have a secondary effect have their base power doubled. These effects stack.",
		onModifyMovePriority: -2,
		onModifyMove: function (move) {
			if (move.secondaries && move.basePower <= 60) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					// @ts-ignore
					secondary.chance *= 2;
				}
			}
		},
		id: "starburst",
		name: "Starburst",
	},
	"faefist": {
		shortDesc: "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				return this.chainModify(1.7);
			}
			else if (move.type === 'Fairy') {
				return this.chainModify(1.2);
			}
			else if (move.flags['punch'] && move.type === 'Fairy') {
				return this.chainModify(2.04);
			}
		},
		onModifyMove: function (move) {
			if (move.flags['punch']) {
				move.type === 'Fairy'
			}
		},
		id: "faefist",
		name: "Fae Fist",
	},
	"malware": {
		shortDesc: "This Pokemon's Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense at the end of each full turn on the field.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			let totaldef = 0;
			let totalspd = 0;
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				totaldef += target.getStat('def', false, true);
				totalspd += target.getStat('spd', false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({spa: 1});
			} else if (totalspd) {
				this.boost({atk: 1});
			}
		},
		id: "malware",
		name: "Malware",
	},
	"nightmarefuel": {
		shortDesc: "Dark-type moves have 1.5x power and have a 33% chance to put the foe to sleep.",
		onModifyMovePriority: -1,
		onModifyMove: function (move) {
			if (move.category !== "Status") {
				move.secondaries.push({
					chance: 33,
					status: 'slp',
				});
			}
		},
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				return this.chainModify(1.5);
			}
		},
		id: "nightmarefuel",
		name: "Nightmare Fuel",
	},
	"snowabsorb": {
		shortDesc: "On switch-in, this Pokemon summons Hail.",
		onStart: function (source) {
			this.setWeather('hail');
		},
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Snow Absorb');
				}
				return null;
			}
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.maxhp / 8, target, target);
			}
		},
		id: "snowabsorb",
		name: "Snow Absorb",
	},
	"confidenceboost": {
		shortDesc: "All of this {okemon's stats are raised by 1 stage if it attacks and KOes another Pokemon.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1}, source);
			}
		},
		id: "confidenceboost",
		name: "Confidence Boost",
	},
	"blizzardblur": {
		shortDesc: "Summons Hail upon switch-in. This Pokemon's Speed is doubled in Hail. This Pokemon cannot be damaged by hail.",
		onStart: function (source) {
			this.setWeather('hail');
		},
		onModifySpe: function (spe, pokemon) {
			if (this.isWeather('hail')) {
				return this.chainModify(2);
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "blizzardblur",
		name: "Blizzard Blur",
	},
		"frenzy": {
		shortDesc: "This Pokemon's multi-hit attacks always hit the maximum number of times.",
		onModifyMove: function (move) {
			if (move.multihit && move.multihit.length) {
				move.multihit = move.multihit[1];
			}
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.multihit) {
				return this.chainModify(1.5);
			}
		},
		id: "frenzy",
		name: "Frenzy",
	},
	"solarpanel": {
		shortDesc: "This Pokemon is immune to Electric, Fire and Grass-type moves. If targetted by one, this Pokemon's Special Attack is raised by one stage, and harsh sunlight appears.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Electric' || move.type === 'Fire' || move.type === 'Grass') {
				this.setWeather('desolateland');
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[msg]', '[from] ability: Solar Panel');
				}
				return null;
			}
		},
		onAnyRedirectTarget: function (target, source, source2, move) {
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
		onModifyDef: function (def, effect) {
			if (this.isWeather(['hail'])) {
			return this.chainModify(2);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD: function (spd, effect) {
			if (this.isWeather(['hail'])) {
			return this.chainModify(2);
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "icescale",
		name: "Ice Scale",
	},
	"synchscales": {
		shortDesc: "This Pokemon recieves 1/2 damage from attacks if it has a status condition.",
		onModifyDefPriority: 5,
		onModifyDef: function (def, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 5,
		onModifySpD: function (spd, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		id: "synchscales",
		name: "Synch Scales",
	},
	"poisonshield": {
		shortDesc: "Takes 50% damage from attacks when HP is full. If attacked directly when HP is full, the attacker is poisoned.",
         onSourceModifyDamage: function (damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				return this.chainModify(0.5);
			}
		},
		onAfterDamage: function (damage, target, source, move) {
			if (move && move.flags['contact'] && !source.status && source.runStatusImmunity('powder') && source.hp >= source.maxhp) {
			source.setStatus('psn', target);
         }		
		},
		id: "poisonshield",
		name: "Poison Shield",
	},
	"rebel": {
		shortDesc: "Boosts Attack by one stage upon switch-in and by two stages for every stat drop.",
		onStart: function (pokemon) {
				this.boost({atk: 1});
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
		id: "rebel",
		name: "Rebel",
	},
	"fullsteamahead": {
		shortDesc: "Upon entering the field, this Pokémon sets up Rain. This Pokémon heals for 25% of its max HP per turn while Rain is active.",
		onStart: function (source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.template.speciesid === 'kyogre') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.setWeather('raindance');
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.maxhp / 4, target, target);
			}
		},
		id: "fullsteamahead",
		name: "Full Steam Ahead",
	},
	"juggernaut": {
		shortDesc: "Recoil-inducing moves have the added effect of boosting its Speed one stage when used. Does not take recoil damage.",
		onModifyMovePriority: -1,
		onModifyMove: function (move) {
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
		onDamage: function (damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		id: "juggernaut",
		name: "Juggernaut",
	},
	"flashweather": {
		shortDesc: "In Sun, absorbs Fire moves, in Rain Water, in Hail Ice, and in Sand, Rock.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fire' && this.isWeather(['sunnyday', 'desolateland'])) {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Flash Weather');
				}
				return null;
			}
			else if (target !== source && move.type === 'Water' && this.isWeather(['raindance', 'primordialsea'])) {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Flash Weather');
				}
				return null;
			}
			else if (target !== source && move.type === 'Rock' && this.isWeather(['sandstream'])) {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Flash Weather');
				}
				return null;
			}
			else if (target !== source && move.type === 'Ice' && this.isWeather(['hail'])) {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]', '[from] ability: Flash Weather');
				}
				return null;
			}
		},
		id: "flashweather",
		name: "Flash Weather",
	},
	"clearfocus": {
		shortDesc: "Resets stat drops at the end of each turn (including self-inflicted).",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
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
				for (const secondary of move.secondaries) {
					if (!move.secondaries) return;
				}
				move.secondaries.push({
					chance: 20,
					volatileStatus: 'attract',
				});
			}
		},
		id: "charmstar",
		name: "Charm Star",
	},
	"magicfat": {
		shortDesc: "Immune to Fire and Ice type moves as long as it holds an item.",
		onImmunity: function (type, pokemon) {
			if (pokemon.item && type === 'Fire' || type === 'Ice') return false;
		},
		id: "magicfat",
		name: "Magic Fat",
	},
	/*slowandsteady: {
		shortDesc: "This Pokemon takes 1/2 damage from attacks if it moves last.",
		onModifyDamage: function (damage, source, target, move) {
			if (target.lastDamage > 0 && source.lastAttackedBy && source.lastAttackedBy.thisTurn && source.lastAttackedBy.pokemon === target) {
				return this.chainModify(0.5);
			}
		},
		id: "slowandsteady",
		name: "Slow And Steady",
	},*/
/*
	
	"torrenttempo": {
		shortDesc: "If this Pokemon is confused, it snaps out of that confusion and gains a 50% boost to its Water-moves.",
		onUpdate: function (pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Torrent Tempo');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile: function (status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit: function (target, source, move) {
			if (move && move.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Torrent Tempo');
			}
		},
		id: "torrenttempo",
		name: "Torrent Tempo",
	},
	 */
};
