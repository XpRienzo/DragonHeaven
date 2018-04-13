'use strict';

exports.BattleItems = {
	"ragecandybar": {
		id: "ragecandybar",
		name: "Rage Candy Bar",
      onStart: function(pokemon) {
			this.add('-item', pokemon, 'Rage Candy Bar');
        if (pokemon.baseTemplate.baseSpecies === 'Darmanitan') {
			this.add('-formechange', pokemon, 'Darmanitan-Zen', '[msg]');
			pokemon.formeChange("Darmanitan-Zen");
 }
		},
		fling: {
			basePower: 20,
		},
                onBasePowerPriority: 6,
		onBasePower: function (basePower, user, target, move) {
			if (move && (user.baseTemplate.num === 555) && (move.type === 'Psychic')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		gen: 7,
		desc: "If this Pokémon is a Darmanitan, it becomes Zen Mode Darmanitan just by holding it, and it's Psychic-Type moves have 1.2x more power",
	},
		"reliccharm": {
		id: "reliccharm",
		name: "Relic Charm",
      onStart: function(pokemon) {
			this.add('-item', pokemon, 'Relic Charm');
        if (pokemon.baseTemplate.baseSpecies === 'Meloetta') {
			this.add('-formechange', pokemon, 'Meloetta-Pirouette', '[msg]');
			pokemon.formeChange("Meloetta-Pirouette");
 }
		},
		fling: {
			basePower: 40,
		},
                onBasePowerPriority: 6,
		onBasePower: function (basePower, user, target, move) {
			if (move && (user.baseTemplate.num === 648) && (move.type === 'Fighting')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		gen: 7,
		desc: "If this Pokémon is a Darmanitan, it becomes Zen Mode Darmanitan just by holding it, and it's Psychic-Type moves have 1.2x more power",
	},
	"shadowrock": {
		id: "shadowrock",
		name: "Shadow Rock",
		fling: {
			basePower: 60,
		},
		gen: 7,
		desc: "Holder's use of Shadow Sky lasts 8 turns instead of 5.",
	},
	"breezerock": {
		id: "breezerock",
		name: "Breeze Rock",
		fling: {
			basePower: 60,
		},
		gen: 7,
		desc: "Holder's use of Air Current lasts 8 turns instead of 5.",
	},
	"voodoodoll": {
		id: "voodoodoll",
		name: "Voodoo Doll",
		spritenum: 417,
		fling: {
			basePower: 60,
		},
     onModifyMove: function (move, attacker, defender) {
         if (defender && defender !== attacker && move && move.flags['contact']) {
			defender.addVolatile('torment');
			}
		},
		desc: "When the opponent attacks the holder with a contact move, this item is consumed and the opponent is tormented.",
	},
	"mulpberry": {
		id: "mulpberry",
		name: "Mulp Berry",
		spritenum: 69,
		fling: {
			basePower: 10,
		},
       onUpdate: function (pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 && pokemon.hasAbility('gluttony'))) {
				pokemon.eatItem();
			}
		},
		onEat: function (source) {
			this.useMove('Stealth Rock', source);		
		},
      desc: "When at 1/4 HP or less, consumes Berry and sets Stealth Rock on the foe's side",
	        },
	"ringtarget": {
		id: "ringtarget",
		name: "Ring Target",
		spritenum: 69,
		fling: {
			basePower: 10,
		},
      onModifyMovePriority: -5,
		onModifyMove: function (move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity = true;
			}
		},
        desc: "If a Pokémon holds this item, it will ignore any type-based immunity when attacking.",
	},
	"agonyboots": {
		id: "agonyboots",
		name: "Agony Boots",
		spritenum: 69,
		fling: {
			basePower: 10,
		},
		onModifyMove: function (move, pokemon) {
			pokemon.addVolatile('torment');
		},
		onModifySpe: function (spe) {
			return this.chainModify(1.33);
		},
		desc: "Holder's Speed is 1.33x, but it can't use the same move twice in a row",
	},
	"anguishbandanna": {
		id: "anguishbandanna",
		name: "Anguish Bandanna",
		spritenum: 69,
		fling: {
			basePower: 10,
		},
		onModifyMove: function (move, pokemon) {
			pokemon.addVolatile('torment');
		},
		onModifyAtk: function (atk) {
			return this.chainModify(1.33);
		},
		desc: "Holder's Attack is 1.33x, but it can't use the same move twice in a row",
	},
		"distressglass": {
		id: "distressglass",
		name: "Distress Glass",
		spritenum: 69,
		fling: {
			basePower: 10,
		},
		onModifyMove: function (move, pokemon) {
			pokemon.addVolatile('torment');
		},
		onModifySpA: function (spa) {
			return this.chainModify(1.33);
		},
		desc: "Holder's Attack is 1.33x, but it can't use the same move twice in a row",
	},
        "roomextender": {
		            id: "roomextender",
		            name: "Room Extender",
		            fling: {
		           	        basePower: 60,
		            },
            		desc: "Holder's use of Electric/Grassy/Misty/Psychic Terrain lasts 8 turns instead of 5.",
       	},
        "assaultshield": {
	             	id: "assaultshieldt",
		            name: "Assault Shield",
            		spritenum: 581,
	            	fling: {
                   			basePower: 80,
            		},
            		onModifySpDPriority: 1,
            		onModifySpD: function (def) {
                  			return this.chainModify(1.5);
             		},
            		onDisableMove: function (pokemon) {
                   			let moves = pokemon.moveset;
                   			for (let i = 0; i < moves.length; i++) {
                        				if (this.getMove(moves[i].move).category === 'Status') {
	                              				pokemon.disableMove(moves[i].id);
	                        			}
                   			}
            		},
             		desc: "Holder's Def is 1.5x, but it can only select damaging moves.",
       	},
	"eviolith": {
		id: "eviolith",
		name: "Eviolith",
		spritenum: 130,
		fling: {
			basePower: 40,
		},
		onModifyAtkPriority: 2,
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.baseTemplate.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 2,
		onModifySpA: function (spa, pokemon) {
			if (pokemon.baseTemplate.nfe) {
				return this.chainModify(1.5);
			}
		},
		gen: 5,
		desc: "If holder's species can evolve, its Atk and Sp. Atk are 1.5x.",
	},
		/*"trickyseed": {
		id: "trickyseed",
		name: "Tricky Seed",
		spritenum: 664,
		fling: {
			basePower: 10,
		},
		onUpdate: function (pokemon) {
			if (this.ispseudoWeather('trickroom') && pokemon.useItem()) {
				this.boost({spe: -1});
			}
		},
		gen: 7,
		desc: "If the terrain is Trick Room, lowers holder's Speed by 1 stage. Single use.",
	},*/
		"stunorb": {
		id: "stunorb",
		name: "Stun Orb",
		spritenum: 515,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual: function (pokemon) {
			pokemon.trySetStatus('par', pokemon);
		},
		gen: 4,
		desc: "At the end of every turn, this item attempts to paralyze the holder.",
	},
		"shellbell": {
		id: "shellbell",
		name: "Shell Bell",
		spritenum: 438,
		fling: {
			basePower: 30,
		},
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf: function (pokemon, target, move) {
			if (move.category !== 'Status') {
				this.heal(pokemon.lastDamage / 4, pokemon);
			}
		},
		num: 253,
		gen: 3,
		desc: "After an attack, holder gains 1/4 of the damage in HP dealt to other Pokemon.",
	},
	"iceskates": {
		id: "iceskates",
		name: "Ice Skates",
		spritenum: 664,
		onImmunity: function (type, pokemon) {
			if (type === 'hail') return false;
		},
		onUpdate: function (pokemon) {
			if (this.isWeather('hail') && pokemon.useItem()) {
				this.boost({spe: 2});
			}
			},
		fling: {
			basePower: 80,
		},
		num: 881,
		gen: 7,
		desc: "If Hail is active, holder's Speed is doubled. Immune to hail.",
	},
		"lightball": {
		id: "lightball",
		name: "Light Ball",
		spritenum: 251,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onModifyAtkPriority: 1,
		onModifyAtk: function (atk, pokemon) { // Pichu, Pikachu, Raichu, Plusle, Minun, Pachirisu, Emolga, Dedenne or a Togedemaru
			if (pokemon.baseTemplate.baseSpecies === 'Pikachu' || pokemon.baseTemplate.baseSpecies === 'Pichu' || pokemon.baseTemplate.baseSpecies === 'Raichu' || pokemon.baseTemplate.baseSpecies === 'Plusle' || pokemon.baseTemplate.baseSpecies === 'Minun' || pokemon.baseTemplate.baseSpecies === 'Pachirisu' || pokemon.baseTemplate.baseSpecies === 'Emolga' || pokemon.baseTemplate.baseSpecies === 'Dedenne' || pokemon.baseTemplate.baseSpecies === 'Togedemaru') {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA: function (spa, pokemon) {
			if (pokemon.baseTemplate.baseSpecies === 'Pikachu' || pokemon.baseTemplate.baseSpecies === 'Pichu' || pokemon.baseTemplate.baseSpecies === 'Raichu' || pokemon.baseTemplate.baseSpecies === 'Plusle' || pokemon.baseTemplate.baseSpecies === 'Minun' || pokemon.baseTemplate.baseSpecies === 'Pachirisu' || pokemon.baseTemplate.baseSpecies === 'Emolga' || pokemon.baseTemplate.baseSpecies === 'Dedenne' || pokemon.baseTemplate.baseSpecies === 'Togedemaru') {
				return this.chainModify(2);
			}
		},
		num: 236,
		gen: 2,
		desc: "If held by a Pichu, Pikachu, Raichu, Plusle, Minun, Pachirisu, Emolga, Dedenne or a Togedemaru, its Attack and Sp. Atk are doubled.",
	},
		"weatherwarriorscrystal": {
		shortDesc: "When a weather is active, this peculiar crystal increases the holder's Attack and Special Attack stats by 1 stage each.",
			onUpdate: function (pokemon) {
			if (this.isWeather(['sunnyday', 'desolateland', 'hail', 'rainyday', 'primordialsea', 'sandstream', 'shadowsky']) && pokemon.useItem()) {
				this.boost({atk:1, spa: 1});
			}
		},
		fling: {
			basePower: 60,
		},
		gen: 7,
		id: "weatherwarriorscrystal",
		name: "Weather Warriors Crystal",
	},
	/* Adrenaline Orb	If the user has any of its stats lowered, its highest stat gets raised by one stage. Item does not get consumed.	80, Raises the targets highest stat by 1 stage
Agony Boots	Holder's Speed is 1.33x, but it can't use the same move twice in a row	10, N/A
Anguish Bandanna	Holders Attack is 1.33x, but it can't use the same move twice in a row	10, N/A
Blue Herb	When held, if this Pokemon has it's stats lowered, all of it's stat changes will immediately be inverted. (Consumable)	10, N/A
Breeze Rock	Allows the holder to summon an Air Current for eight turns rather than five.	60, N/A
Distress Glass	Holders Special Attack is 1.33x, but it can't use the same move twice in a row	10, N/A
Graduation Scale	If holder is a Wishiwashi, it becomes School Form and will not change back. It's ability becomes Intimidate rather than Schooling. Water moves are boosted by 1.2x	30, N/A
Home-Run Bat	Reflects Sticky Web, Stealth Rock, Spikes, and Toxic Spikes when an opponent would use it. Single-use. Does NOT break after any uses of Spikes or Toxic Spikes (Otherwise consumable). 	60, N/A
Hot Potato	When the holder comes into contact with another Pokemon, their hold item is switched with the Hot Potato.	60, Burns the opponent
Mimic Orb	When held, the first move that the holder is targeted with gets added to this Pokemon's moveset until switched out. Displays the same message as Mimic does when activated.	30, N/A
Mulp Berry	When at 1/4 HP or less, consumes Berry and sets Stealth Rock on the foe's side	10, N/A
Photocopier	Copies the opponent's stat changes upon first encountering an opponent with a stat boost. (Consumable)	80, N/A
Poppy	When the user is hit by a contact move, this item is consumed and the opponent becomes drowsy. (Consumable)	10, Makes the opponent drowsy
Rage Candy Bar	If this Pokémon is a Darmanitan, it becomes Zen Mode Darmanitan just by holding it, and it's Psychic-Type moves have 1.2x more power (Doesn't need the Zen Mode ability)	20, N/A
Relic Charm	If Meloetta holds this item, it will enter the battle in its Pirouette form and boosts the power of Fighting-type moves by 1.2x. If anything else holds this item, no effect	40, Confuses the opponent
Reverse Core	Holder's weaknesses and resistances (including immunities) are swapped like in an Inverse Battle. On switchin, displays message "[holder] is cloaked in a mysterious power!"	TBD
Ring Target	If a Pokémon holds this item, it will ignore any type-based immunity when attacking.	10, N/A
Room Extender	Extends Trick Room, Magic Room and Wonder Room to 8 turns, instead of 5	60, N/A
Serenity Brace	Protects the holder from the secondary effects of opponent’s moves.	50, N/A
Shadow Rock	Extends duration of Shadow Sky from 5 turns to 8.	60, N/A
Signature Items (Mechanic Change)	Cannot be removed if their holder is the respective species the item is supposed to work with (Light Ball is a bit suspect for this mechanic)	Varies
Voodoo Doll	When the opponent attacks the holder with a contact move, this item is consumed and the opponent is tormented. (Consumable)	30, Torments opponent
Weather Warrior's Crystal	When a weather is active, this peculiar crystal increases the holder's Attack and Special Attack stats by 1 stage each. (Consumable)	60, N/A*/
};
