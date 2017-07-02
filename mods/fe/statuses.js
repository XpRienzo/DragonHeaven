'use strict';

exports.BattleStatuses = {
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
        scaldingvortex: {
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
                                delete pokemon.volatiles['scaldingvortex'];
                                return;
                        }
                        if (this.effectData.source.hasItem('bindingband')) {
                                this.damage(pokemon.maxhp / 6);
                        } else {
                                this.damage(pokemon.maxhp / 8);
                        }
                        // 30% chance to burn
                        if (this.random(10) < 3) {
                                pokemon.trySetStatus('brn', pokemon.side.foe.active[0]);
                        }
                },
                onEnd: function (pokemon) {
                        this.add('-end', pokemon, this.effectData.sourceEffect, '[scaldingvortex]');
                },
                onTrapPokemon: function (pokemon) {
                        if (this.effectData.source && this.effectData.source.isActive) pokemon.tryTrap();
                },
        },
        solartrap: {
                // Trapping effect with limited duration (for Solar Flare)
                duration: 3,
                noCopy: true,
                onTrapPokemon: function (pokemon) {
                        pokemon.tryTrap();
                },
                onStart: function (target) {
                        this.add('-activate', target, 'solartrap');
                },
        },
};
