'use strict';

exports.BattleStatuses = {
    taunt: {
        // Included as a separate volatile for Scheming Steam, etc.
        duration: 3,
        onStart: function (target) {
            if (target.activeTurns && !this.willMove(target)) {
                this.effectData.duration++;
            }
            this.add('-start', target, 'move: Taunt');
        },
        onResidualOrder: 12,
        onEnd: function (target) {
            this.add('-end', target, 'move: Taunt');
        },
        onDisableMove: function (pokemon) {
            let moves = pokemon.moveset;
            for (let i = 0; i < moves.length; i++) {
                if (this.getMove(moves[i].move).category === 'Status') {
                    pokemon.disableMove(moves[i].id);
                }
            }
        },
        onBeforeMovePriority: 5,
        onBeforeMove: function (attacker, defender, move) {
            if (!move.isZ && move.category === 'Status') {
                this.add('cant', attacker, 'move: Taunt', move);
                return false;
            }
        },
    }
    deathknell: {
        duration: 5,
        durationCallback: function (target, source) {
            if (source.hasItem('gripclaw')) return 7;
            return this.random(4, 6);
        },
        onStart: function (pokemon, source) {
            this.add('-activate', pokemon, 'move: ' + this.effectData.sourceEffect, '[of] ' + source);
        },
        onResidualOrder: 11,
        onResidual: function (pokemon) {
            if (this.effectData.source && (!this.effectData.source.isActive || this.effectData.source.hp <= 0 || !this.effectData.source.activeTurns)) {
		delete pokemon.volatiles['deathknell'];
		return;
	    }
            if (target.deductPP(target.lastMove, 4)) {
		this.add('-activate', target, 'move: Spite', this.getMove(target.lastMove).name, 4);
		return;
	    }
        },
        onEnd: function (pokemon) {
	    this.add('-end', pokemon, this.effectData.sourceEffect, '[deathknell]');
	},
	onTrapPokemon: function (pokemon) {
	    if (this.effectData.source && this.effectData.source.isActive) pokemon.tryTrap();
	},
    },
    leechseed: {
        // Included as a separate volatile for Cactus Sting, Stealth Seeds, etc.
        onStart: function (target) {
            this.add('-start', target, 'move: ' + this.effectData.sourceEffect);
        },
        onResidualOrder: 8,
        onResidual: function (pokemon) {
            let target = this.effectData.source.side.active[pokemon.volatiles['leechseed'].sourcePosition];
            if (!target || target.fainted || target.hp <= 0) {
                this.debug('Nothing to leech into');
                return;
            }
            let damage = this.damage(pokemon.maxhp / 8, pokemon, target);
            if (damage) {
                this.heal(damage, target, pokemon);
            }
        },
    },
    sleeptrap: {
        duration: 1,
        durationCallback: function (target, source) {
            // Duration depends on sleep counter
            if (target.status === 'slp') return target.statusData.time;
        },
        onStart: function (pokemon, source) {
            this.add('-activate', pokemon, 'move: ' + this.effectData.sourceEffect, '[of] ' + source);
        },
        onEnd: function (pokemon) {
	    this.add('-end', pokemon, this.effectData.sourceEffect, '[sleeptrap]');
	},
	onTrapPokemon: function (pokemon) {
	    if (this.effectData.source && this.effectData.source.isActive) pokemon.tryTrap();
	},
    },
    mechrhythm: {
        duration: 2,
        flinch: false,
        onResidual: function (target) {
            if (target.status === 'slp') {
		// don't lock, and bypass confusion for calming
		delete target.volatiles['mechrhythm'];
	    }
	    this.effectData.trueDuration--;
	},
        onStart: function (target, source, effect) {
	    this.effectData.trueDuration = this.random(2, 4);
            this.effectData.flinch = this.effectData.trueDuration > this.effectData.duration; //flinch becomes true if duration is 3
	    this.effectData.move = effect.id;
	},
	onRestart: function () {
	    if (this.effectData.trueDuration >= 2) {
		this.effectData.duration = 2;
	    }
	},
	onEnd: function (target) {
	    if (this.effectData.trueDuration > 1) return;
	    target.addVolatile('confusion');
	},
	onLockMove: function (pokemon) {
	    return this.effectData.move;
	},
    },
};
