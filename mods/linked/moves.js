'use strict';

exports.BattleMovedex = {
	/**
	 * Artificial priority
	 *
	 */
	pursuit: {
		inherit: true,
		beforeTurnCallback: function (pokemon, target) {
			let linkedMoves = pokemon.getLinkedMoves();
			if (linkedMoves.length && !linkedMoves.disabled) {
				if (linkedMoves[0] === 'pursuit' && linkedMoves[1] !== 'pursuit') return;
				if (linkedMoves[0] !== 'pursuit' && linkedMoves[1] === 'pursuit') return;
			}

			target.side.addSideCondition('pursuit', pokemon);
			if (!target.side.sideConditions['pursuit'].sources) {
				target.side.sideConditions['pursuit'].sources = [];
			}
			target.side.sideConditions['pursuit'].sources.push(pokemon);
		},
	},
	mefirst: {
		inherit: true,
		onTryHit: function (target, pokemon) {
			let action = this.willMove(target);
			if (action) {
				let noMeFirst = [
					'chatter', 'counter', 'covet', 'focuspunch', 'mefirst', 'metalburst', 'mirrorcoat', 'struggle', 'thief',
				];
				// Mod-specific: Me First copies the first move in the link
				let move = this.getMove(action.linked ? action.linked[0] : action.move);
				if (move.category !== 'Status' && !noMeFirst.includes(move)) {
					pokemon.addVolatile('mefirst');
					this.useMove(move, pokemon, target);
					return null;
				}
			}
			return false;
		},
	},

	/**
	 *	Sucker Punch
	 *	Will miss on two linked Status moves
	 *
	 */

	suckerpunch: {
		inherit: true,
		onTry: function (source, target) {
			let action = this.willMove(target);
			if (!action || action.choice !== 'move') {
				this.attrLastMove('[still]');
				this.add('-fail', source);
				return null;
			}
			if (target.volatiles.mustrecharge && target.volatiles.mustrecharge.duration < 2) {
				// Duration may not be lower than 2 if Sucker Punch is used as a low-priority move
				// i.e. if Sucker Punch is linked with a negative priority move
				this.attrLastMove('[still]');
				this.add('-fail', source);
				return null;
			}
			if (!target.linked && action.move.category === 'Status' && action.move.id !== 'mefirst') {
				this.attrLastMove('[still]');
				this.add('-fail', source);
				return null;
			}
			if (target.linked) {
				for (let i = 0; i < target.linked.length; i++) {
					let linkedMove = this.getMove(target.linked[i]);
					if (linkedMove.category !== 'Status' || linkedMove.id === 'mefirst') return;
				}
				this.attrLastMove('[still]');
				this.add('-fail', source);
				return null;
			}
		},
	},

	/**
	 * Mimic and Sketch
	 * When any of them is linked, the link will get updated for the new move
	 * They will copy the last absolute single move used by the foe.
	 *
	 **/

	sketch: {
		inherit: true,
		onHit: function (target, source) {
			let disallowedMoves = ['chatter', 'sketch', 'struggle'];
			let lastMove = target.getLastMoveAbsolute();
			if (source.transformed || !lastMove || disallowedMoves.includes(lastMove) || source.moves.indexOf(lastMove) >= 0) return false;
			let sketchIndex = source.moves.indexOf('sketch');
			if (sketchIndex < 0) return false;
			let move = this.getMove(lastMove);
			let sketchedMove = {
				move: move.name,
				id: move.id,
				pp: move.pp,
				maxpp: move.pp,
				target: move.target,
				disabled: false,
				used: false,
			};
			source.moveSlots[sketchIndex] = sketchedMove;
			source.baseMoveSlots[sketchIndex] = sketchedMove;
			this.add('-activate', source, 'move: Sketch', move.name);
		},
	},
	mimic: {
		inherit: true,
		onHit: function (target, source) {
			let disallowedMoves = ['chatter', 'mimic', 'sketch', 'struggle', 'transform'];
			let lastMove = target.getLastMoveAbsolute();
			if (source.transformed || !lastMove || disallowedMoves.includes(lastMove) || source.moves.indexOf(lastMove) >= 0) return false;
			let mimicIndex = source.moves.indexOf('mimic');
			if (mimicIndex < 0) return false;
			let move = this.getMove(lastMove);
			source.moveSlots[mimicIndex] = {
				move: move.name,
				id: move.id,
				pp: move.pp,
				maxpp: move.pp,
				target: move.target,
				disabled: false,
				used: false,
				virtual: true,
			};
			this.add('-start', source, 'Mimic', move.name);
		},
	},

	/**
	 * Copycat and Mirror Move
	 * Copy/call the last absolute move used by the target
	 *
	 */

	mirrormove: {
		inherit: true,
		onTryHit: function (target, pokemon) {
			let lastMove = target.getLastMoveAbsolute();
			if (!lastMove || !this.getMove(lastMove).flags['mirror']) {
				return false;
			}
			this.useMove(lastMove, pokemon, target);
			return null;
		},
	},
	// Yo Kris fam, i've updated the code till here; mind doin the rest?
	/**
	 * Disable, Encore and Torment
	 * Disabling effects
	 *
	 */

	disable: {
		inherit: true,
		effect: {
			duration: 4,
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (pokemon, source, effect) {
				let lastMove = pokemon.getLastMoveAbsolute();
				if (!this.willMove(pokemon)) {
					this.effectData.duration++;
				}
				if (!lastMove) {
					this.debug('pokemon hasn\'t moved yet');
					return false;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === lastMove.id) {
						if (!moveSlot.pp) {
							this.debug('Move out of PP');
							return false;
						} else {
							if (effect.id === 'cursedbody') {
								this.add('-start', pokemon, 'Disable', moveSlot.move, '[from] ability: Cursed Body', '[of] ' + source);
							} else {
								this.add('-start', pokemon, 'Disable', moveSlot.move);
							}
							this.effectData.move = lastMove.id;
							return;
						}
					}
				}
				return false;
			},
			onResidualOrder: 14,
			onEnd: function (pokemon) {
				this.add('-end', pokemon, 'Disable');
			},
			onBeforeMovePriority: 7,
			onBeforeMove: function (attacker, defender, move) {
				if (move.id === this.effectData.move) {
					this.add('cant', attacker, 'Disable', move);
					return false;
				}
			},
			onDisableMove: function (pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === this.effectData.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
	},
	encore: {
		inherit: true,
		effect: {
			duration: 3,
			noCopy: true,
			onStart: function (target) {
				let noEncore = ['assist', 'copycat', 'encore', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'sketch', 'sleeptalk', 'struggle', 'transform'];
				let linkedMoves = target.getLinkedMoves();
				let lastMove = target.getLastMoveAbsolute();
				let moveIndex = target.moves.indexOf(lastMove);
				if (linkedMoves.includes(lastMove)) {
					if (noEncore.includes(linkedMoves[0]) && noEncore.includes(linkedMoves[1])) {
						// both moves are unencoreable
						delete target.volatiles['encore'];
						return false;
					}
					this.effectData.linked = linkedMoves;
				} else if (!lastMove || this.getMove(lastMove).isZ || noEncore.includes(lastMove) || (target.moveSlots[moveIndex] && target.moveSlots[moveIndex].pp <= 0)) {
					// it failed
					delete target.volatiles['encore'];
					return false;
				}
				this.effectData.move = target.lastMove;
				this.add('-start', target, 'Encore');
				if (!this.willMove(target)) {
					this.effectData.duration++;
				}
			},
			onOverrideAction: function (pokemon, target, move) {
				if (this.effectData.linked && !this.effectData.linked.includes(move.id)) return this.effectData.linked[1];
				if (move.id !== this.effectData.move) return this.effectData.move;
			},
			onResidualOrder: 13,
			onResidual: function (target) {
				if (target.moves.indexOf(target.lastMove) >= 0 && target.moveSlots[target.moves.indexOf(target.lastMove)].pp <= 0) { // early termination if you run out of PP
					delete target.volatiles.encore;
					this.add('-end', target, 'Encore');
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'Encore');
			},
			onDisableMove: function (pokemon) {
				if (!this.effectData.move || !pokemon.hasMove(this.effectData.move)) {
					return;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (this.effectData.linked && !this.effectData.linked.includes(moveSlot.id)) {
						pokemon.disableMove(moveSlot.id);
					} else if (moveSlot.id !== this.effectData.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		effect: {
			duration: 3,
			noCopy: true, // doesn't get copied by Z-Baton Pass
			onStart: function (target) {
				let noEncore = ['assist', 'copycat', 'encore', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'sketch', 'sleeptalk', 'struggle', 'transform'];
				let lastMove = target.getLastMoveAbsolute();
				let linkedMoves = target.getLinkedMoves();
				let moveIndex = lastMove ? target.moves.indexOf(target.lastMove) : -1;
				if (linkedMoves.includes(lastMove) && noEncore.includes(linkedMoves[0]) && noEncore.includes(linkedMoves[1])) {
					// both moves are ones which cannot be encored
					delete target.volatiles['encore'];;
					return false;
				}
				if (!target.lastMove || target.lastMove.isZ || noEncore.includes(target.lastMove.id) || (target.moveSlots[moveIndex] && target.moveSlots[moveIndex].pp <= 0)) {
					// it failed
					delete target.volatiles['encore'];
					return false;
				}
				this.effectData.move = lastMove;
				this.add('-start', target, 'Encore');
				if (linkedMoves.includes(lastMove)) {
					this.effectData.move = linkedMoves;
				}
				if (!this.willMove(target)) {
					this.effectData.duration++;
				}
			},
			onOverrideAction: function (pokemon, target, move) {
				if (Array.isArray(this.effectData.move) && this.effectData.move[0] !== move.id && this.effectData.move[1] !== move.id) return this.effectData.move[0];
				if (move.id !== this.effectData.move) return this.effectData.move;
			},
			onResidualOrder: 13,
			onResidual: function (target) {
				if (target.moves.includes(this.effectData.move) && target.moveSlots[target.moves.indexOf(this.effectData.move)].pp <= 0) { // early termination if you run out of PP
					delete target.volatiles.encore;
					this.add('-end', target, 'Encore');
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'Encore');
			},
			onDisableMove: function (pokemon) {
				if (Array.isArray(this.effectData.move)) {
					for (const moveSlot of pokemon.moveSlots) {
						if (moveSlot.id !== this.effectData.move[0] && moveSlot.id !== this.effectData.move[1]) {
							pokemon.disableMove(moveSlot.id);
						}
					}
				}
				if (!this.effectData.move || !pokemon.hasMove(this.effectData.move)) {
					return;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id !== this.effectData.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
	},
	torment: {
		inherit: true,
		effect: {
			onStart: function (pokemon) {
				this.add('-start', pokemon, 'Torment');
			},
			onEnd: function (pokemon) {
				this.add('-end', pokemon, 'Torment');
			},
			onDisableMove: function (pokemon) {
				let lastMove = pokemon.lastMove;
				if (lastMove.id === 'struggle') return;

				if (Array.isArray(lastMove)) {
					for (const move of lastMove) {
						pokemon.disableMove(move.id);
					}
				} else {
					pokemon.disableMove(lastMove.id);
				}
			},
		},
	},

	/**
	 * Spite and Grudge
	 * Decrease the PP of the last absolute move used by the target
	 * Also, Grudge's effect won't be removed by its linked move, if any
	 *
	 */

	grudge: {
		inherit: true,
		effect: {
			onStart: function (pokemon) {
				this.add('-singlemove', pokemon, 'Grudge');
			},
			onFaint: function (target, source, effect) {
				if (!source || source.fainted || !effect) return;
				let lastMove = source.getLastMoveAbsolute();
				if (!lastMove) throw new Error("Pokemon.getLastMoveAbsolute() is null");
				if (effect.effectType === 'Move' && !effect.isFutureMove) {
					for (const moveSlot of source.moveSlots) {
						if (moveSlot.id === lastMove.id) {
							moveSlot.pp = 0;
							this.add('-activate', source, 'move: Grudge', this.getMove(lastMove.id).name);
						}
					}
				}
			},
			onBeforeMovePriority: 100,
			onBeforeMove: function (pokemon) {
				if (pokemon.moveThisTurn) return; // Second stage of a Linked move
				this.debug('removing Grudge before attack');
				pokemon.removeVolatile('grudge');
			},
		},
	},
	spite: {
		inherit: true,
		onHit: function (target) {
			let lastMove = target.getLastMoveAbsolute();
			if (lastMove && target.deductPP(lastMove.id, 4)) {
				this.add("-activate", target, 'move: Spite', this.getMove(lastMove.id).name, 4);
				return;
			}
			return false;
		},
	},

	/**
	 * Other moves that check `pokemon.lastMove`
	 * (may behave counter-intuitively if left unmodded)
	 *
	 **/

	conversion2: {
		inherit: true,
		onHit: function (target, source) {
			let lastMove = target.getLastMoveAbsolute();
			if (!lastMove) return false;
			let possibleTypes = [];
			let attackType = lastMove.type;
			for (let type in this.data.TypeChart) {
				if (source.hasType(type) || target.hasType(type)) continue;
				let typeCheck = this.data.TypeChart[type].damageTaken[attackType];
				if (typeCheck === 2 || typeCheck === 3) {
					possibleTypes.push(type);
				}
			}
			if (!possibleTypes.length) {
				return false;
			}
			let randomType = this.sample(possibleTypes);

			if (!source.setType(randomType)) return false;
			this.add('-start', source, 'typechange', randomType);
		},
	},
	destinybond: {
		inherit: true,
		effect: {
			onStart: function (pokemon) {
				this.add('-singlemove', pokemon, 'Destiny Bond');
			},
			onFaint: function (target, source, effect) {
				if (!source || !effect || target.side === source.side) return;
				if (effect.effectType === 'Move' && !effect.isFutureMove) {
					this.add('-activate', target, 'move: Destiny Bond');
					source.faint();
				}
			},
			onBeforeMovePriority: -1,
			onBeforeMove: function (pokemon, target, move) {
				// Second stage of a Linked move does not remove Destiny Bond
				if (pokemon.moveThisTurn || move.id === 'destinybond') return;
				this.debug('removing Destiny Bond before attack');
				pokemon.removeVolatile('destinybond');
			},
			onMoveAborted: function (pokemon, target, move) {
				pokemon.removeVolatile('destinybond');
			},
			onBeforeSwitchOutPriority: 1,
			onBeforeSwitchOut: function (pokemon) {
				pokemon.removeVolatile('destinybond');
			},
		},
	},
	trumpcard: {
		inherit: true,
		basePowerCallback: function (pokemon) {
			let move = pokemon.getMoveData(pokemon.getLastMoveAbsolute()); // Account for calling Trump Card via other moves
			switch (move.pp) {
			case 0:
				return 200;
			case 1:
				return 80;
			case 2:
				return 60;
			case 3:
				return 50;
			default:
				return 40;
			}
		},
	},
};
