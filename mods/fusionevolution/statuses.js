'use strict';

exports.BattleStatuses = {
    deathknell: {
        duration: 5,
        durationCallback: function (target, source) {
            if (source.hasItem('gripclaw')) return 7;
            return this.random(4, 5);
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
};
