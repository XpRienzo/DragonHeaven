'use strict';
exports.BattleAbilities = {
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
				this.add('-activate', foeactive[i], 'Substitute', 'ability: Intimidating Scales', '[of] ' + pokemon);
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
			if (attacker.gender && defender.gender) {
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
			pokemon.addVolatile('armorcast');
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('armorcast');
		},
		effect: {
			onModifySpe: function (spe, pokemon) {
				if (!pokemon.item) {
					return this.chainModify(2);
				}
			},
			onModifyAtk: function (atk, pokemon) {
				if (!pokemon.item) {
					return this.chainModify(2);
				}
			},
			onModifyDef: function (def, pokemon) {
				if (!pokemon.item) {
					return this.chainModify(2);
				}
			},
			onModifySpD: function (spd, pokemon) {
				if (!pokemon.item) {
					return this.chainModify(2);
				}
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
		onImmunity: function(type, pokemon) {
			if (type === 'attract') {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Oblivious');
				return null;
			}
		},
		onTryHit: function(pokemon, target, move) {
			if (move.id === 'captivate' || move.id === 'taunt' || move.type === 'Electric') {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Oblivious');
				this.heal(target.maxhp / 8);
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
			if (this.isWeather('hail')) {
				if (move.type === 'Ice') {
					this.debug('Snow Force boost');
					return this.chainModify(1.33);
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
						atk: -1
					}, target, pokemon);
				}
			}
		},
		onModifyAccuracy: function(accuracy) {
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
			if (source.ability === 'mummy' && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-activate', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		onAfterDamage: function(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact'] && source.ability !== 'mummy') {
				let oldAbility = source.setAbility('mummy', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Mummy', this.getAbility(oldAbility).name, '[of] ' + source);
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
		shortDesc: "Sandstream + Sand Veil.",
		onStart: function(source) {
			this.setWeather('sandstorm');
		},
		onImmunity: function(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onModifyAccuracy: function(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.isWeather('sandstorm')) {
				return accuracy * 0.8;
			}
		},
		id: "sandaura",
		name: "Sand Aura",
	},
	"staticstorm": {
		shortDesc: "30% chance to paralyze the opponent each turn if Hail is active.",
		onAfterDamage: function(damage, target, source, effect) {
			if (this.random(10) < 3) {
				source.trySetStatus('par', target, effect);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "staticstorm",
		name: "Static storm",
	},
	"dreadedflames": {
		shortDesc: "Gains a 1.5x boost to fire moves on the turn of entry, and lowers opponent's defence on entry.",
		onStart: function(pokemon) {
			var foeactive = pokemon.side.foe.active;
			var activated = false;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Dreaded Flames');
					activated = true;
				}
			}
			if (foeactive[i].volatiles['substitute']) {
				this.add('-activate', foeactive[i], 'Substitute', 'ability: Dreaded Flames', '[of] ' + pokemon);
			} else {
				this.boost({
					atk: -1
				}, foeactive[i], pokemon);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3 && attacker.activeTurns > 1) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3 && attacker.activeTurns > 1) {
				return this.chainModify(1.5);
			}
		},
		id: "dreadedflames",
		name: "Dreaded Flames",
	},
	"rockygrowth": {
		shortDesc: "This Pokemon takes no recoil from moves and the power of moves that would cause recoil increases by 50% when HP is below 33%.",
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle') return null;
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (effect.id === 'recoil' && this.activeMove.id !== 'struggle' && attacker.hp <= attacker.maxhp / 3) {
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
			if (pokemon.hp === pokemon.maxhp && pokemon.status === 'brn' || pokemon.status === 'frz' || pokemon.status === 'psn' || pokemon.status === 'tox' || pokemon.status === 'par') {
				this.add('-activate', pokemon, 'ability: Pristine');
				pokemon.cureStatus();
			}
		},
		onImmunity: function(type, pokemon) {
			if (pokemon.hp === pokemon.maxhp && pokemon.status === 'brn' || pokemon.status === 'frz' || pokemon.status === 'psn' || pokemon.status === 'tox' || pokemon.status === 'par') return false;
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
			if (target !== source && move.type === 'water') {
				this.add('-immune', target, '[msg]', '[from] ability: Flash water');
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
		shortDesc: "Increases Special Attack to 1.5x at 1/3 max HP or less.",
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp / 3) {
				this.debug('Math surge');
				return this.chainModify(1.5);
			}
		},
		id: "mathsurge",
		name: "Math Surge",
	},
	"flameessence": {
		shortDesc: "Fire-type Moves are counted as STAB.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Fire') {}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Fire') {}
		},
		id: "flameessence",
		name: "Flame Essence",
	},
	"naturalguard": {
		shortDesc: "Starchamp's moves cannot miss unless it's suffering from a major status. Cures itself of status when it switches.",
		onAnyAccuracy: function(accuracy, target, source, move) {
			if (move && (source === this.effectData.target && source.status === 'psn' && source.status === 'tox' && source.status === 'brn' && source.status === 'frz' && source.status === 'par')) {
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
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			var targetSpecies = (move.id === 'kingsshield' ? 'Ferroslash' : 'Ferroslash-Blade');
			if (attacker.template.species !== targetSpecies && attacker.formeChange(targetSpecies)) {
				this.add('-formechange', attacker, targetSpecies);
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
		shortDesc: "Traces the foe's ability. The foe's ability now has no effect on the foe.",
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
					comatose: 1,
					disguise: 1,
					flowergift: 1,
					forecast: 1,
					illusion: 1,
					imposter: 1,
					multitype: 1,
					schooling: 1,
					stancechange: 1,
					trace: 1,
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
	},
	"gutbreaker": {
		shortDesc: "Abilities that hinder attacks are nullified and gets attack boosted by 1.5x when burned.",
		onStart: function(pokemon) {
			this.add('-ability', pokemon, 'Gut Breaker');
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
		onDeductPP: function(target, source) {
			if (target.side === source.side) return;
			return 1;
		},
		id: "underpressure",
		name: "Under Pressure",
	},
	"naturaleye": {
		shortDesc: "Pidgemie avoids status moves if they're not 100% accurate.",
		onModifyAccuracyPriority: 10,
		onModifyAccuracy: function(accuracy, target, source, move) {
			if (move.category === 'Status' && !move.accuracy === '100') {
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
		desc: "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",
		onSourceModifyAccuracy: function(accuracy) {
			if (this.isWeather('sandstorm')) {
				if (typeof accuracy !== 'number') return;
				this.debug('sandyeyes - enhancing accuracy');
				return accuracy * 1.3;
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
		onAfterDamage: function(damage, target, source, effect) {
			if (effect && effect.type === 'Water') {
				this.boost({
					atk: 2
				});
			}
		},
		onAfterDamage: function(damage, target, source, effect) {
			if (effect && effect.type === 'Fire') {
				this.boost({
					atk: -2
				});
			}
		},
		onTryHit: function(target, source, move) {
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
			if (this.isWeather('hail')) {
				if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel' || move.type === 'Ice') {
					this.debug('Desert Snow boost');
					return this.chainModify(1.3);
				}
			}
		},
		onTryHit: function(target, source, move) {
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
		onUpdate: function(spa, pokemon) {
			if (pokemon.status) {
				this.boost({
					spa: 1
				});
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
		shortDesc: "During hail, its Fire moves are powered up by 1.5x and recovers 1/16 HP every turn.",
		onModifySpAPriority: 5,
		onModifySpA: function(spa, pokemon) {
			if (this.isWeather('sunnyday')) {
				return this.chainModify(1.5);
			}
		},
		onWeather: function(target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.maxhp / 16, target, target);
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
		shortDesc: "Ignores type immunities while attacking",
		onModifyMovePriority: -5,
		onModifyMove: function(move) {
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
			if (target !== source && move.type === 'Ground' || move.type === 'Fire') {
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
	'negativebody': {
		shortDesc: "Resets all stat changes of the opponent upon switching in.",
		onStart: function(source) {
			this.useMove('Haze', source);
		},
		id: "negativebody",
		name: "Negative Body",
	},
	"strikeandpass": {
		shortDesc: "All moves at 60 base power or below get boosted by x1.5 and gain a U-Turn switching effect.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
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
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move && move.type === 'Bug') return priority + 1;
		},
		id: "stunningbug",
		name: "Stunning Bug",
	},
	"champion": {
		shortDesc: "Users Attack is 1.5x.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk) {
			return this.chainModify(1.5);
		},
		id: "champion",
		name: "Champion",
	},
	'venomstream': {
		shortDesc: "Uses Toxic Spikes on switch in",
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
	'tropicalstorm': {
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
		onStart: function(source) {
			this.useMove('Psych Up', source);
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
		onStart: function(source) {
			this.useMove('Will-O-Wisp', source);
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
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack stat stage.",
		onBoost: function(boost, target, source, effect) {
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
		onFoeTrapPokemon: function(pokemon) {
			if (!pokemon.hasAbility('shadowtag') && this.isAdjacent(pokemon, this.effectData.target) && pokemon.type === 'Fairy') {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function(pokemon, source) {
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
		shortDesc: "The Attack of this Pokemon is boosted by x2.5, at the cost of loosing 25% percent accuracy on Physical moves.",
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
				this.add('-immune', target, '[msg]', '[from] ability: Lightning Rod');
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
		onModifyPriority: function(priority, pokemon, target, move) {
			if (move && move.category === 'Status' || move.selfSwitch === 'true') {
				return priority + 1;
			}
		},
		onModifyMove: function(move) {
			if (move && move.category === 'Status' || move.selfSwitch === 'true') {}
		},
		onCheckShow: function(pokemon) {
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
		onSwitchOut: function(pokemon) {
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
				return this.chainModify(1.5);
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
					this.add('-ability', pokemon, 'Intimidate', 'boost');
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				return this.chainModify(0.5);
			} else if (move.typeMod > 0) {
				return this.chainModify(0.5);
			} else if (move.typeMod > 0 && target.hp >= target.maxhp) {
				return this.chainModify(0.25);
			}
		},
		id: "landsshield",
		name: "Lands Shield",
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
		shortDesc: "This Pokemon's Attack and Speed is doubled.",
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk) {
			return this.chainModify(2);
		},
		onModifySpe: function(spe) {
			return this.chainModify(2);
		},
		id: "poweroftwo",
		name: "Power of Two",
	},
	"chlorocoat": {
		shortDesc: "This Pokemon's Speed and Defense is doubled.",
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
		shortDesc: "This pokemon is immune being confused and stats drop.",
		onUpdate: function(pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Magical Ice');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile: function(status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit: function(target, source, move) {
			if (move && move.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Magical Ice');
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
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Magical Ice", "[of] " + target);
		},
		id: "magicalice",
		name: "Magical Ice",
	},
	"codeunkown": {
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
		id: "codeunkown",
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
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.heal(target.maxhp / 8, target, target);
			}
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
			if (move.flags['contact'] || move.type === 'Grass') {
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
		shortDesc: "Boosts Defense by two stages + highest non-hp non-def stat by one stage upon KOing a foe.",
		onSourceFaint: function(target, source, effect) {
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
					this.boost({
						[stat]: 1
					}, source);
				} else if (stat === 'def') {
					this.boost({
						[secondBest]: 1
					}, source);
				}
				this.boost({
					def: 2
				}, source);
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
		shortDesc: "Speed under Hail or Sand is 2.5x, immunity to both.",
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather('hail') || this.isWeather('sandstorm')) {
				return this.chainModify(2.5);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail' || type === 'sandstorm') return false;
		},
		id: "mountainclimber",
		name: "Mountain Climber",
	},
	"monarchoftherain": {
		shortDesc: "Speed under Hail or Sand is 2.5x, immunity to both.",
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather('hail') || this.isWeather('sandstorm')) {
				return this.chainModify(2.5);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail' || type === 'sandstorm') return false;
		},
		id: "monarchoftherain",
		name: "Monarch of the Rain",
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
		onSourceFaint: function(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.heal(target.maxhp / 3);
			}
		},
		id: "ouroboros",
		name: "Ouroboros",
	},
	"braveheart": {
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
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
		shortDesc: "Provides inmunity to super effective attacks and heals 25% of its health instead. This Ability cannot be ignored.",
		onImmunity: function(move) {
			if (move.typeMod > 0) return false;
		},
		onTryHit: function(target, source, move) {
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
		onModifySpD: function(spd, pokemon) {
			if (pokemon.type === 'Rock' || pokemon.type === 'Grass') {
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
		id: "ancientfoilage",
		name: "Ancient Foliage",
	},
	"prodigy": {
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 2.35. Does affect Struggle.",
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
		shortDesc: "This Pokemon's moves of 60 power or less have 3x power. Includes Struggle.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				return this.chainModify(3);
			}
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
	"us": {
		shortDesc: "Immune to priority & status moves.",
		onImmunity: function(pokemon, move) {
			if (move.category === 'Status' || move.priority > 0) return false;
		},
		id: "us",
		name: "US",
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
		shortDesc: "Halves super-effective damage. Halves damage from Fire and Ice-typed moves. These stack. Cannot be bypassed by Mold Breaker or similar effects.",
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
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
			if (this.isWeather(['raindance', 'primordialsea'])) {
				return this.chainModify(2);
			}
		},
		onModifySpe: function(spe, pokemon) {
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
		onBasePower: function(move) {
			if (move.type === 'Normal' || move.type === 'Fighting') {
				return this.chainModify(1.5);
			}
		},
		onModifyMovePriority: -5,
		onModifyMove: function(move) {
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
		onModifyPriority: function(priority, move, effect) {
			if (effect.id === 'psn' || effect.id === 'tox' || effect.id === 'brn' || effect.id === 'par') return priority + 1;
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.effect.id === 'brn') {
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
		shortDesc: "This Pokémon's moves with 60 Base Power or less or that have a secondary effect have their base power doubled. These effects stack.",
		onModifyMovePriority: -2,
		onModifyMove: function(move) {
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
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			let totaldef = 0;
			let totalspd = 0;
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				totaldef += target.getStat('def', false, true);
				totalspd += target.getStat('spd', false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({
					spa: 1
				});
			} else if (totalspd) {
				this.boost({
					atk: 1
				});
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
				this.heal(target.maxhp / 8, target, target);
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
		shortDesc: "Summons Hail upon switch-in. This Pokemon's Speed is doubled in Hail. This Pokemon cannot be damaged by hail.",
		onStart: function(source) {
			this.setWeather('hail');
		},
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather('hail')) {
				return this.chainModify(2);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
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
		onModifyDef: function(def, effect) {
			if (this.isWeather(['hail'])) {
				return this.chainModify(2);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD: function(spd, effect) {
			if (this.isWeather(['hail'])) {
				return this.chainModify(2);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
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
				this.heal(target.maxhp / 4, target, target);
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
	"flashweather": {
		shortDesc: "In Sun, absorbs Fire moves, in Rain Water, in Hail Ice, and in Sand, Rock.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Fire' && this.isWeather(['sunnyday', 'desolateland'])) {
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
			} else if (target !== source && move.type === 'Ice' && this.isWeather(['hail'])) {
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
		onModifyMove: function(move) {
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
		onTryHit: function(target, source, move) {
			if (target !== source && target.item && move.type === 'Fire' || move.type === 'Ice') {
				this.add('-immune', target, '[msg]', '[from] ability: Magic Fat');
				return null;
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
		onModifyMove: function(move, pokemon) {
			for (const target of pokemon.side.foe.active) {
				target.move.stab = 0.75;
			}
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
				return this.chainModify(2);
			} else if (move.flags['pulse'] && this.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(0.25);
			}
		},
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather(['raindance', 'primordialsea'])) {
				return this.chainModify(2);
			} else if (this.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(0.5);
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
	"bulletproof": {
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
		id: "clearpouch",
		name: "Clear Pouch",
	},
	"precision": {
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
		shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (basePower <= 75) {
				return this.chainModify(2);
				move.technicianBoosted = true;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, move) {
			if (!move.technicianBoosted) {
				return this.modify(atk, 1.33);
			}
		},
		onModifyMovePriority: -1,
		onModifyMove: function(move) {
			if (move.category === 'Physical' && typeof move.accuracy === 'number') {
				move.accuracy *= 0.9;
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
		shortDesc: "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.",
		onSetStatus: function(status, target, source, effect) {
			if (status.id !== 'brn' || status.id !== 'psn' || status.id !== 'tox' || status.id !== 'par' || status.id !== 'frz') return;
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
		onTakeItem: function(item, pokemon, source) {
			if (this.suppressingAttackEvents() && pokemon !== this.activePokemon || !pokemon.hp || pokemon.item === 'stickybarb') return;
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				this.add('-activate', pokemon, 'ability: Sticky Hold');
				pokemon.setBoost({
					atk: 6
				});
				this.add('-setboost', pokemon, 'atk', 12, '[from] ability: Titanic Strength');
			}
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
		onStart: function(target, source) {
			if (!source.status) {
				source.setStatus('psn', target);
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
		onStart: function(target, source) {
			if (source.hp) {
				let item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] ability: Obliterate', '[of] ' + source);
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
	"Evaporate": {
		shortDesc: "30% chance of healing 1/4 of its max HP instead of taking damage whenever hit by a super-effective attack.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.typeMod > 0) {
				if (this.randomChance(3, 10)) {
					this.heal(target.maxhp / 4);
					this.add('-ability', target, 'Evaporate');
				}
			}
		},
		id: "evaporate",
		name: "Evaporate",
	},
	"smokebody": {
		shortDesc: "Damages the opposing Pokemon for 1/8 of its HP at the end of each turn while it is asleep or if it tries to lower Dank's stats, stats cannot be lowered.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.status === 'slp' || target.hasAbility('comatose')) {
					this.damage(pokemon.maxhp / 8, pokemon, pokemon);
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
					this.damage(source.maxhp / 8, source, target);;
				}
			}
		},
		id: "smokebody",
		name: "Smoke Body",
	},
	"caestus": {
		shortDesc: "Arm, hand, and punching moves do 25% more damage where applicable and raise this Pokémon's Attack by one stage after their use.",
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.flags['punch'] || move.name === 'Helping Hand' || move.name === 'Arm Thrust' || move.name === 'Hammer Arm' || move.name === 'Needle Arm') {
				return this.chainModify(1.25);
			}
		},
		onUpdate: function(move) {
			if (move.flags['punch'] || move.name === 'Helping Hand' || move.name === 'Arm Thrust' || move.name === 'Hammer Arm' || move.name === 'Needle Arm') {
				this.boost({
					atk: 1
				});
			}
		},
		id: "caestus",
		name: "Caestus",
	},
	"fusionpowered": {
		shortDesc: "This Pokémon's STAB moves do 3x damage rather than 1.5x, but have 33% recoil. Moves with a recoil element do 1.25x bonus damage.",
		onModifyMove: function(move) {
			move.stab = 3;
			if (move.stab) {
				move.recoil = [1, 3];
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil) {
				this.debug('Reckless boost');
				return this.chainModify(1.25);
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
		shortDesc: "Using or being the target of Ground- and Water-type moves heals this Pokémon for 1/8th of its maximum health. This increases to 1/6th in Sandstorm.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Water' || move.type === 'Ground') {
				this.add('-immune', target, '[msg]', '[from] ability: Sand Slurp');
				this.heal(target.maxhp / 8);
				return null;
			} else if (target !== source && move.type === 'Water' || move.type === 'Ground' && this.isWeather('sandstorm')) {
				this.add('-immune', target, '[msg]', '[from] ability: Sand Slurp');
				this.heal(target.maxhp / 16);
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
			if (target.side === source.side && this.isWeather('sandstorm')) return;
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
		onUpdate: function(basePower, attacker, defender) {
			if (attacker.gender && defender.gender) {
				if (attacker.gender === defender.gender) {
					this.boost({
						atk: 1
					});
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
		onBasePower: function(basePower, attacker, defender, move) {
			if (attacker.hp <= attacker.maxhp) {
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
		id: "beastbarbs",
		name: "Beast Barbs",
	},
	"subdue": {
		shortDesc: "Lowers the opponent's highest stat by one, and boosts that same stat by one on yourself upon switch-in.",
		onStart: function(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in target.stats) {
					if (target.stats[i] > bestStat) {
						stat = i;
						bestStat = target.stats[i];
					}
				}
				this.boost({
					[stat]: -1
				}, target);
				this.boost({
					[stat]: 1
				}, source);
			}
		},
		id: "subdue",
		name: "Subdue",
	},
	"sunbath": {
		shortDesc: "Under Sun or Rain, Speed is doubled and regains 1/8 of max health at the end of the turn. Ignores Sun's Water Debuff.",
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather(['raindance', 'primordialsea', 'sunnyday', 'desolateland'])) {
				return this.chainModify(2);
			}
		},
		onWeather: function(target, source, effect) {
			if (effect.id === 'sunnyday' || effect.id === 'desolateland' || effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.maxhp / 8, target, target);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function(atk, attacker, defender, move) {
			if (move.type === 'Water' && this.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function(atk, attacker, defender, move) {
			if (move.type === 'Water' && this.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(2);
			}
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
				this.boost({
					atk: 1
				});
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
				this.heal(pokemon.maxhp / 4)
				this.add('-ability', pokemon, 'Triggered');
			}
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Dark') mod *= 1.25;
			return this.chainModify(mod);
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
		shortDesc: "Whenever another Pokémon faints or has its stats lowered, this Pokémon has its Special Attack stat boosted by 2 combat stages.",
		onAfterEachBoost: function (boost, pokemon, source) {
		for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
			let statsLowered = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({atk: 2}, pokemon, pokemon, null, true);
			}
		}
		},
		onAnyFaint: function () {
			this.boost({spa: 2}, this.effectData.target);
		},
		id: "rubberup",
		name: "Rubber Up",
	},
	"shadowguard": {
		shortDesc: "Immune to attacking moves while at full HP.",
		onTryHit: function (target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			this.debug('Wonder Guard immunity: ' + move.id);
			if (target.hp = target.maxhp) {
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
		onStart: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let stat = 'atk';
				let bestStat = 0;
				for (let i in target.stats) {
					if (source.stats[i] > bestStat) {
						stat = i;
						bestStat = target.stats[i];
					}
				}
				this.boost({[stat]: -2}, target);
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
			if (pokemon.name === 'Darmin-Up') {
			this.add('-formechange', pokemon, 'Darmin-Down', '[msg]');
			pokemon.formeChange("Darmin-Down");
			}
			else if (pokemon.name === 'Darmin-Down') {
			this.add('-formechange', pokemon, 'Darmin-Up', '[msg]');
			pokemon.formeChange("Darmin-Up");
			}
		},
		id: "rhythm",
		name: "Rhythm",
	},
		"magicalwand": {
	shortDesc: "Critical hit ratio is raised by one stage. Transforms into Star-Butterfly after it gets a critical hit. In butterfly form, critical hit ratio is raised by two stages.",
	onModifyCritRatio: function(critRatio, pokemon) {
		if (pokemon.baseTemplate.species === 'Star') {
			return critRatio + 1;
		} else if (pokemon.template.speciesid === 'starbutterfly') {
			return critRatio + 2;
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
		shortDesc: "Immune to Electric-type moves. When hit by one, next attack is a guaranteed crit.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Electric') {
					this.add('-immune', target, '[msg]', '[from] ability: Power Surge');
					target.addVolatile('laserfocus');
					return null;
			}
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
				this.add('-immune', target, '[msg]', '[from] ability: Clear Levitation');
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
				if (target.status === 'par' || target.hasAbility('comatose')) {
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
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.heal(target.maxhp / 8, target, target);
			}
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
	"firewall": {
		shortDesc: "Upon switch-in, this Pokemon sets up Reflect or Light Screen depending on the opponent's higher Attacking stat. If they are tied, this Pokemon sets up Aurora Veil.",
		onStart: function (pokemon) {
			let totaldef = 0;
			let totalspd = 0;
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				totaldef += target.getStat('def', false, true);
				totalspd += target.getStat('spd', false, true);
			}
			if (totaldef && totaldef > totalspd) {
				this.useMove('Reflect', pokemon);
			} else if (totalspd > totaldef) {
				this.useMove('Light Screen', pokemon);
			}
			else if (totalspd = totaldef) {
				this.useMove('Aurora Veil', pokemon);
			}
		},
		id: "firewall",
		name: "Firewall",
	},	
	"shatteredprism": {
		desc: "This Pokemon receives 3/4 damage from supereffective attacks This Pokémon’s Not-Very-Effective moves deal more damage against the foe. This Pokémon’s moves ignores the foe’s ability. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and deals more damage with not-very-effective moves",
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Shattered Prism neutralize');
				return this.chainModify(0.75);
			}
		onModifyMove: function (move) {
			move.ignoreAbility = true;
		},
		onModifyDamage: function (damage, source, target, move) {
			if (move.typeMod < 0) {
				this.debug('Shattered Prism boost');
				return this.chainModify(1.75);
			}
		},
		},
		isUnbreakable: true,
		id: "shatteredprism",
		name: "Shattered Prism",
		rating: 4,
		num: ,
	},
	
};
