'use strict';

exports.BattleScripts = {
	runDecision: function (decision) {
		// returns whether or not we ended in a callback
		switch (decision.choice) {
		case 'start': {
			// I GIVE UP, WILL WRESTLE WITH EVENT SYSTEM LATER
			let format = this.getFormat();

			// Remove Pokémon duplicates remaining after `team` decisions.
			this.p1.pokemon = this.p1.pokemon.slice(0, this.p1.pokemonLeft);
			this.p2.pokemon = this.p2.pokemon.slice(0, this.p2.pokemonLeft);

			if (format.teamLength && format.teamLength.battle) {
				// Trim the team: not all of the Pokémon brought to Preview will battle.
				this.p1.pokemon = this.p1.pokemon.slice(0, format.teamLength.battle);
				this.p1.pokemonLeft = this.p1.pokemon.length;
				this.p2.pokemon = this.p2.pokemon.slice(0, format.teamLength.battle);
				this.p2.pokemonLeft = this.p2.pokemon.length;
			}

			this.add('start');
			for (let pos = 0; pos < this.p1.active.length; pos++) {
				this.switchIn(this.p1.pokemon[pos], pos);
			}
			for (let pos = 0; pos < this.p2.active.length; pos++) {
				this.switchIn(this.p2.pokemon[pos], pos);
			}
			for (let pos = 0; pos < this.p1.pokemon.length; pos++) {
				let pokemon = this.p1.pokemon[pos];
				this.singleEvent('Start', this.getEffect(pokemon.species), pokemon.speciesData, pokemon);
			}
			for (let pos = 0; pos < this.p2.pokemon.length; pos++) {
				let pokemon = this.p2.pokemon[pos];
				this.singleEvent('Start', this.getEffect(pokemon.species), pokemon.speciesData, pokemon);
			}
			this.midTurn = true;
			break;
		}

		case 'move':
			if (!decision.pokemon.isActive) return false;
			if (decision.pokemon.fainted) return false;
			this.runMove(decision.move, decision.pokemon, decision.targetLoc, decision.sourceEffect, decision.zmove);
			break;
		case 'megaEvo':
			this.runMegaEvo(decision.pokemon);
			break;
		case 'beforeTurnMove': {
			if (!decision.pokemon.isActive) return false;
			if (decision.pokemon.fainted) return false;
			this.debug('before turn callback: ' + decision.move.id);
			let target = this.getTarget(decision.pokemon, decision.move, decision.targetLoc);
			if (!target) return false;
			decision.move.beforeTurnCallback.call(this, decision.pokemon, target);
			break;
		}

		case 'event':
			this.runEvent(decision.event, decision.pokemon);
			break;
		case 'team': {
			decision.side.pokemon.splice(decision.index, 0, decision.pokemon);
			decision.side.pokemon[5].baseAbility = 'illusion';
			decision.pokemon.position = decision.index;
			// we return here because the update event would crash since there are no active pokemon yet
			return;
		}

		case 'pass':
			if (!decision.priority || decision.priority <= 101) return;
			if (decision.pokemon) {
				decision.pokemon.switchFlag = false;
			}
			break;
		case 'instaswitch':
		case 'switch':
			if (decision.choice === 'switch' && decision.pokemon.status && this.data.Abilities.naturalcure) {
				this.singleEvent('CheckShow', this.data.Abilities.naturalcure, null, decision.pokemon);
			}
			if (decision.pokemon.hp) {
				decision.pokemon.beingCalledBack = true;
				let lastMove = this.getMove(decision.pokemon.lastMove);
				if (lastMove.selfSwitch !== 'copyvolatile') {
					this.runEvent('BeforeSwitchOut', decision.pokemon);
					if (this.gen >= 5) {
						this.eachEvent('Update');
					}
				}
				if (!this.runEvent('SwitchOut', decision.pokemon)) {
					// Warning: DO NOT interrupt a switch-out
					// if you just want to trap a pokemon.
					// To trap a pokemon and prevent it from switching out,
					// (e.g. Mean Look, Magnet Pull) use the 'trapped' flag
					// instead.

					// Note: Nothing in BW or earlier interrupts
					// a switch-out.
					break;
				}
			}
			decision.pokemon.illusion = null;
			this.singleEvent('End', this.getAbility(decision.pokemon.ability), decision.pokemon.abilityData, decision.pokemon);
			if (!decision.pokemon.hp && !decision.pokemon.fainted) {
				// a pokemon fainted from Pursuit before it could switch
				if (this.gen <= 4) {
					// in gen 2-4, the switch still happens
					decision.priority = -101;
					this.queue.unshift(decision);
					this.add('-hint', 'Pursuit target fainted, switch continues in gen 2-4');
					break;
				}
				// in gen 5+, the switch is cancelled
				this.debug('A Pokemon can\'t switch between when it runs out of HP and when it faints');
				break;
			}
			if (decision.target.isActive) {
				this.add('-hint', 'Switch failed; switch target is already active');
				break;
			}
			if (decision.choice === 'switch' && decision.pokemon.activeTurns === 1) {
				let foeActive = decision.pokemon.side.foe.active;
				for (let i = 0; i < foeActive.length; i++) {
					if (foeActive[i].isStale >= 2) {
						decision.pokemon.isStaleCon++;
						decision.pokemon.isStaleSource = 'switch';
						break;
					}
				}
			}

			this.switchIn(decision.target, decision.pokemon.position);
			break;
		case 'runUnnerve':
			this.singleEvent('PreStart', decision.pokemon.getAbility(), decision.pokemon.abilityData, decision.pokemon);
			break;
		case 'runSwitch':
			this.runEvent('SwitchIn', decision.pokemon);
			if (this.gen <= 2 && !decision.pokemon.side.faintedThisTurn && decision.pokemon.draggedIn !== this.turn) this.runEvent('AfterSwitchInSelf', decision.pokemon);
			if (!decision.pokemon.hp) break;
			decision.pokemon.isStarted = true;
			if (!decision.pokemon.fainted) {
				this.singleEvent('Start', decision.pokemon.getAbility(), decision.pokemon.abilityData, decision.pokemon);
				decision.pokemon.abilityOrder = this.abilityOrder++;
				this.singleEvent('Start', decision.pokemon.getItem(), decision.pokemon.itemData, decision.pokemon);
			}
			delete decision.pokemon.draggedIn;
			break;
		case 'runPrimal':
			if (!decision.pokemon.transformed) this.singleEvent('Primal', decision.pokemon.getItem(), decision.pokemon.itemData, decision.pokemon);
			break;
		case 'shift': {
			if (!decision.pokemon.isActive) return false;
			if (decision.pokemon.fainted) return false;
			decision.pokemon.activeTurns--;
			this.swapPosition(decision.pokemon, 1);
			let foeActive = decision.pokemon.side.foe.active;
			for (let i = 0; i < foeActive.length; i++) {
				if (foeActive[i].isStale >= 2) {
					decision.pokemon.isStaleCon++;
					decision.pokemon.isStaleSource = 'switch';
					break;
				}
			}
			break;
		}

		case 'beforeTurn':
			this.eachEvent('BeforeTurn');
			break;
		case 'residual':
			this.add('');
			this.clearActiveMove(true);
			this.updateSpeed();
			this.residualEvent('Residual');
			this.add('upkeep');
			break;

		case 'skip':
			throw new Error("Decision illegally skipped!");
		}

		// phazing (Roar, etc)
		for (let i = 0; i < this.p1.active.length; i++) {
			let pokemon = this.p1.active[i];
			if (pokemon.forceSwitchFlag) {
				if (pokemon.hp) this.dragIn(pokemon.side, pokemon.position);
				pokemon.forceSwitchFlag = false;
			}
		}
		for (let i = 0; i < this.p2.active.length; i++) {
			let pokemon = this.p2.active[i];
			if (pokemon.forceSwitchFlag) {
				if (pokemon.hp) this.dragIn(pokemon.side, pokemon.position);
				pokemon.forceSwitchFlag = false;
			}
		}

		this.clearActiveMove();

		// fainting

		this.faintMessages();
		if (this.ended) return true;

		// switching (fainted pokemon, U-turn, Baton Pass, etc)

		if (!this.queue.length || (this.gen <= 3 && this.queue[0].choice in {move:1, residual:1})) {
			// in gen 3 or earlier, switching in fainted pokemon is done after
			// every move, rather than only at the end of the turn.
			this.checkFainted();
		} else if (decision.choice === 'pass') {
			this.eachEvent('Update');
			return false;
		} else if (decision.choice === 'megaEvo' && this.gen >= 7) {
			this.eachEvent('Update');
			// In Gen 7, the decision order is recalculated for a Pokémon that mega evolves.
			const moveIndex = this.queue.findIndex(queuedDecision => queuedDecision.pokemon === decision.pokemon && queuedDecision.choice === 'move');
			if (moveIndex >= 0) {
				const moveDecision = this.queue.splice(moveIndex, 1)[0];
				this.insertQueue(moveDecision, true);
			}
			return false;
		} else if (this.queue.length && this.queue[0].choice === 'instaswitch') {
			return false;
		}

		let p1switch = this.p1.active.some(mon => mon && mon.switchFlag);
		let p2switch = this.p2.active.some(mon => mon && mon.switchFlag);

		if (p1switch && !this.canSwitch(this.p1)) {
			for (let i = 0; i < this.p1.active.length; i++) {
				this.p1.active[i].switchFlag = false;
			}
			p1switch = false;
		}
		if (p2switch && !this.canSwitch(this.p2)) {
			for (let i = 0; i < this.p2.active.length; i++) {
				this.p2.active[i].switchFlag = false;
			}
			p2switch = false;
		}

		if (p1switch || p2switch) {
			if (this.gen >= 5) {
				this.eachEvent('Update');
			}
			this.makeRequest('switch');
			return true;
		}

		this.eachEvent('Update');

		return false;
	}
};