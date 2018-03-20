// Other Metas plugin by Spandan
'use strict';

exports.commands = {
	'!othermetas': true,
	om: 'othermetas',
	othermetas: function (target, room, user) {
		if (!this.runBroadcast()) return;
		target = toId(target);
		let buffer = ``;

		if (target === 'all' && this.broadcasting) {
			return this.sendReplyBox(`You cannot broadcast information about all Other Metagames at once.`);
		}

		if (!target || target === 'all') {
			buffer += `- <a href="http://www.smogon.com/forums/forums/394/">Other Metagames Forum</a><br />`;
			if (!target) return this.sendReplyBox(buffer);
		}
		let showMonthly = (target === 'all' || target === 'omofthemonth' || target === 'omotm' || target === 'month');

		if (target === 'all') {
			// Display OMotM formats, with forum thread links as caption
			this.parse(`/formathelp omofthemonth`);

			// Display the rest of OM formats, with OM hub/index forum links as caption
			this.parse(`/formathelp othermetagames`);
			return this.sendReply(`|raw|<center>${buffer}</center>`);
		}
		if (showMonthly) {
			this.target = 'omofthemonth';
			this.run('formathelp');
		} else {
			this.run('formathelp');
		}
	},
	othermetashelp: [
		`/om - Provides links to information on the Other Metagames.`,
		`!om - Show everyone that information. Requires: + % @ * # & ~`,
	],

	"!crossevolve": true,
	ce: "crossevolve",
	crossevo: "crossevolve",
	crossevolve: function(target, user, room)
	{
		if (!this.runBroadcast()) return;
		if (!target || !target.includes(',')) return this.parse('/help crossevo')
		let pokes = target.split(",");
		if (!Dex.data.Pokedex[toId(pokes[0])] || !Dex.data.Pokedex[toId(pokes[1])]) {
			return this.errorReply('Error: Pokemon not found.')
		}
		let template = Object.assign({}, Dex.getTemplate(pokes[0])), crossTemplate = Object.assign({}, Dex.getTemplate(pokes[1]));
		let prevo = Dex.getTemplate(crossTemplate.prevo);
		let mixedTemplate = Object.assign({}, template);
		if (!template.evos || !template.evos.length) {
			return this.errorReply(`Error: ${template.species} does not evolve.`);
		}
		if (!prevo.exists) {
			return this.errorReply(`Error: You cannot cross evolve into ${crossTemplate.species}.`);
		}
		let setStage = 1, crossStage = 1;
		if (template.prevo) {
			setStage++;
			if (Dex.data.Pokedex[template.prevo].prevo) {
				setStage++;
			}
		}
		if (crossTemplate.prevo) {
			crossStage++;
			if (prevo.prevo) {
				crossStage++;
			}
		}
		if (setStage + 1 !== crossStage) {
			return this.sendReply(`Error: Cross evolution must follow evolutionary stages. (${template.species} is Stage ${setStage} and can only cross evolve to Stage ${setStage + 1})`);
		}
		mixedTemplate.abilities = Object.assign({}, crossTemplate.abilities);
		mixedTemplate.baseStats = {};
		for (let statName in template.baseStats) {
			mixedTemplate.baseStats[statName] = (crossTemplate.baseStats[statName] - prevo.baseStats[statName]) + Dex.data.Pokedex[template.id].baseStats[statName];
		}
		mixedTemplate.types = [Dex.data.Pokedex[template.id].types[0]];
		if (Dex.data.Pokedex[template.id].types[1]) mixedTemplate.types.push(Dex.data.Pokedex[template.id].types[1]);
		if (crossTemplate.types[0] !== prevo.types[0]) mixedTemplate.types[0] = crossTemplate.types[0];
		if (crossTemplate.types[1] !== prevo.types[1]) mixedTemplate.types[1] = crossTemplate.types[1] || crossTemplate.types[0];
		if (mixedTemplate.types[0] === mixedTemplate.types[1]) mixedTemplate.types.length = 1;
		mixedTemplate.weightkg = crossTemplate.weightkg - prevo.weightkg + Dex.data.Pokedex[template.id].weightkg;
		if (mixedTemplate.weightkg <= 0) {
			mixedTemplate.weightkg = 0.1;
		}
		for (var i in mixedTemplate.baseStats) {
			if (mixedTemplate.baseStats[i] < 1 || mixedTemplate.baseStats[i] > 255) {
				return this.errorReply(`This Cross Evolution cannot happen since a stat goes below 0 or above 255.`);
			}
		}
		mixedTemplate.tier = "CE";
		let details;
		let weighthit = 20;
		if (mixedTemplate.weightkg >= 200) {
			weighthit = 120;
		} else if (mixedTemplate.weightkg >= 100) {
			weighthit = 100;
		} else if (mixedTemplate.weightkg >= 50) {
			weighthit = 80;
		} else if (mixedTemplate.weightkg >= 25) {
			weighthit = 60;
		} else if (mixedTemplate.weightkg >= 10) {
			weighthit = 40;
		}
		details = {
			"Dex#": mixedTemplate.num,
			"Gen": mixedTemplate.gen,
			"Height": mixedTemplate.heightm + " m",
			"Weight": mixedTemplate.weightkg + " kg <em>(" + weighthit + " BP)</em>",
			"Dex Colour": mixedTemplate.color,
		};
		if (mixedTemplate.eggGroups) details["Egg Group(s)"] = mixedTemplate.eggGroups.join(", ");
		details['<font color="#686868">Does Not Evolve</font>'] = "";
		this.sendReply(`|raw|${Chat.getDataPokemonHTML(mixedTemplate)}`);
		this.sendReply('|raw|<font size="1">' + Object.keys(details).map(detail => {
				if (details[detail] === '') return detail;
				return '<font color="#686868">' + detail + ':</font> ' + details[detail];
			}).join("&nbsp;|&ThickSpace;") + '</font>');
	},
	crossevolvehelp: ["/crossevo <base pokemon>, <evolved pokemon> - Shows the type and stats for the Cross Evolved Pokemon."],

	"!mixandmega": true,
	mnm: 'mixandmega',
	mixandmega: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!toId(target) || !target.includes('@')) return this.parse('/help mixandmega');
		let sep = target.split('@');
		let stone;
		if (toId(sep[1]) === 'dragonascent') {
			stone = {
				megaStone: "Rayquaza-Mega",
				megaEvolves: "Rayquaza",
			};
		} else {
			stone = Dex.getItem(sep[1]);
		}
		let template = Object.assign({}, Dex.getTemplate(sep[0]));
		if (!stone.megaEvolves && !stone.onPrimal) return this.errorReply(`Error: Mega Stone not found.`);
		if (!template.exists) return this.errorReply(`Error: Pokemon not found.`);
		if (template.isMega || (template.evos && Object.keys(template.evos).length > 0) || template.name === 'Necrozma-Ultra') { // Mega Pokemon and Ultra Necrozma cannot be mega evolved
			this.errorReply(`Warning: You cannot mega evolve non-fully evolved Pokemon, Mega Pokemon, and Ultra Necrozma in Mix and Mega.`);
		}
		let banlist = Dex.getFormat('gen7mixandmega').banlist;
		if (banlist.includes(stone.name)) {
			this.errorReply(`Warning: ${stone.name} is banned from Mix and Mega.`);
		}
		let restrictedStones = Dex.getFormat('gen7mixandmega').restrictedStones;
		if (restrictedStones.includes(stone.name) && template.name !== stone.megaEvolves) {
			this.errorReply(`Warning: ${stone.name} is restricted to ${stone.megaEvolves} in Mix and Mega.`);
		}
		let cannotMega = Dex.getFormat('gen7mixandmega').cannotMega;
		if (cannotMega.includes(template.name) && template.name !== stone.megaEvolves && !template.isMega) { // Separate messages because there's a difference between being already mega evolved / NFE and being banned from mega evolving
			this.errorReply(`Warning: ${template.name} is banned from mega evolving with a non-native mega stone in Mix and Mega.`);
		}
		if (['Multitype', 'RKS System'].includes(template.abilities['0']) && !['Arceus', 'Silvally'].includes(template.name)) {
			this.errorReply(`Warning: ${template.name} is required to hold ${template.baseSpecies === 'Silvally' ? template.requiredItem : 'either ' + template.requiredItems[0] + ' or ' + template.requiredItems[1]}.`);
		}
		if (stone.isUnreleased) {
			this.errorReply(`Warning: ${stone.name} is unreleased and is not usable in current Mix and Mega.`);
		}
		if (toId(sep[1]) === 'dragonascent' && !['smeargle', 'rayquaza', 'rayquazamega'].includes(toId(sep[0]))) {
			this.errorReply(`Warning: Only Pokemon with access to Dragon Ascent can mega evolve with Mega Rayquaza's traits.`);
		}
		// Fake Pokemon and Mega Stones
		if (template.isNonstandard) {
			this.errorReply(`Warning: ${template.name} is not a real Pokemon and is therefore not usable in Mix and Mega.`);
		}
		if (stone.isNonstandard) {
			this.errorReply(`Warning: ${stone.name} is a fake mega stone created by the CAP Project and is restricted to the CAP ${stone.megaEvolves}.`);
		}
		let baseTemplate = Dex.getTemplate(stone.megaEvolves);
		let megaTemplate = Dex.getTemplate(stone.megaStone);
		if (stone.id === 'redorb') { // Orbs do not have 'Item.megaStone' or 'Item.megaEvolves' properties.
			megaTemplate = Dex.getTemplate("Groudon-Primal");
			baseTemplate = Dex.getTemplate("Groudon");
		} else if (stone.id === 'blueorb') {
			megaTemplate = Dex.getTemplate("Kyogre-Primal");
			baseTemplate = Dex.getTemplate("Kyogre");
		}
		let deltas = {
			baseStats: {},
			weightkg: megaTemplate.weightkg - baseTemplate.weightkg,
		};
		for (let statId in megaTemplate.baseStats) {
			deltas.baseStats[statId] = megaTemplate.baseStats[statId] - baseTemplate.baseStats[statId];
		}
		if (megaTemplate.types.length > baseTemplate.types.length) {
			deltas.type = megaTemplate.types[1];
		} else if (megaTemplate.types.length < baseTemplate.types.length) {
			deltas.type = baseTemplate.types[0];
		} else if (megaTemplate.types[1] !== baseTemplate.types[1]) {
			deltas.type = megaTemplate.types[1];
		}
		//////////////////////////////////////////
		let mixedTemplate = Object.assign({}, template);
		mixedTemplate.abilities = Object.assign({}, megaTemplate.abilities);
		if (mixedTemplate.types[0] === deltas.type) { // Add any type gains
			mixedTemplate.types = [deltas.type];
		} else if (deltas.type) {
			mixedTemplate.types = [mixedTemplate.types[0], deltas.type];
		}
		mixedTemplate.baseStats = {};
		for (let statName in template.baseStats) { // Add the changed stats and weight
			mixedTemplate.baseStats[statName] = Dex.clampIntRange(Dex.data.Pokedex[template.id].baseStats[statName] + deltas.baseStats[statName], 1, 255);
		}
		mixedTemplate.weightkg = Math.round(Math.max(0.1, template.weightkg + deltas.weightkg) * 100) / 100;
		mixedTemplate.tier = "MnM";
		let details;
		let weighthit = 20;
		if (mixedTemplate.weightkg >= 200) {
			weighthit = 120;
		} else if (mixedTemplate.weightkg >= 100) {
			weighthit = 100;
		} else if (mixedTemplate.weightkg >= 50) {
			weighthit = 80;
		} else if (mixedTemplate.weightkg >= 25) {
			weighthit = 60;
		} else if (mixedTemplate.weightkg >= 10) {
			weighthit = 40;
		}
		details = {
			"Dex#": mixedTemplate.num,
			"Gen": mixedTemplate.gen,
			"Height": mixedTemplate.heightm + " m",
			"Weight": mixedTemplate.weightkg + " kg <em>(" + weighthit + " BP)</em>",
			"Dex Colour": mixedTemplate.color,
		};
		if (mixedTemplate.eggGroups) details["Egg Group(s)"] = mixedTemplate.eggGroups.join(", ");
		details['<font color="#686868">Does Not Evolve</font>'] = "";
		this.sendReply(`|raw|${Chat.getDataPokemonHTML(mixedTemplate)}`);
		this.sendReply('|raw|<font size="1">' + Object.keys(details).map(detail => {
			if (details[detail] === '') return detail;
			return '<font color="#686868">' + detail + ':</font> ' + details[detail];
		}).join("&nbsp;|&ThickSpace;") + '</font>');
	},
	mixandmegahelp: [`/mnm <pokemon> @ <mega stone> - Shows the Mix and Mega evolved Pokemon's type and stats.`],

	'!stone': true,
	orb: 'stone',
	megastone: 'stone',
	stone: function (target) {
		if (!this.runBroadcast()) return;
		let targetid = toId(target);
		if (!targetid) return this.parse('/help stone');
		let stone;
		if (targetid === 'dragonascent') {
			stone = {
				megaStone: "Rayquaza-Mega",
				megaEvolves: "Rayquaza",
			};
		} else {
			stone = Dex.getItem(target);
		}
		if (!stone.megaEvolves && !stone.onPrimal) return this.errorReply(`Error: Mega Stone not found.`);
		let banlist = Dex.getFormat('gen7mixandmega').banlist;
		if (banlist.includes(stone.name)) {
			this.errorReply(`Warning: ${stone.name} is banned from Mix and Mega.`);
		}
		let restrictedStones = Dex.getFormat('gen7mixandmega').restrictedStones;
		if (restrictedStones.includes(stone.name)) {
			this.errorReply(`Warning: ${stone.name} is restricted to ${stone.megaEvolves} in Mix and Mega.`);
		}
		if (stone.isUnreleased) {
			this.errorReply(`Warning: ${stone.name} is unreleased and is not usable in current Mix and Mega.`);
		}
		if (targetid === 'dragonascent') {
			this.errorReply(`Warning: Only Pokemon with access to Dragon Ascent can mega evolve with Mega Rayquaza's traits.`);
		}
		// Fake Mega Stones
		if (stone.isNonstandard) {
			this.errorReply(`Warning: ${stone.name} is a fake mega stone created by the CAP Project and is restricted to the CAP ${stone.megaEvolves}.`);
		}
		let baseTemplate = Dex.getTemplate(stone.megaEvolves);
		let megaTemplate = Dex.getTemplate(stone.megaStone);
		if (stone.id === 'redorb') { // Orbs do not have 'Item.megaStone' or 'Item.megaEvolves' properties.
			baseTemplate = Dex.getTemplate("Groudon");
			megaTemplate = Dex.getTemplate("Groudon-Primal");
		} else if (stone.id === 'blueorb') {
			baseTemplate = Dex.getTemplate("Kyogre");
			megaTemplate = Dex.getTemplate("Kyogre-Primal");
		}
		let deltas = {
			baseStats: {},
			weightkg: megaTemplate.weightkg - baseTemplate.weightkg,
		};
		for (let statId in megaTemplate.baseStats) {
			deltas.baseStats[statId] = megaTemplate.baseStats[statId] - baseTemplate.baseStats[statId];
		}
		if (megaTemplate.types.length > baseTemplate.types.length) {
			deltas.type = megaTemplate.types[1];
		} else if (megaTemplate.types.length < baseTemplate.types.length) {
			deltas.type = baseTemplate.types[0];
		} else if (megaTemplate.types[1] !== baseTemplate.types[1]) {
			deltas.type = megaTemplate.types[1];
		}
		let details = {
			"Gen": 6,
			"Weight": (JSON.stringify(deltas.weightkg).startsWith("-") ? "" : "+") + Math.round(deltas.weightkg * 100) / 100 + " kg",
		};
		let tier;
		if (['redorb', 'blueorb'].includes(stone.id)) {
			tier = "Orb";
		} else if (targetid === "dragonascent") {
			tier = "Move";
		} else {
			tier = "Stone";
		}
		let buf = `<li class="result">`;
		buf += `<span class="col numcol">${tier}</span> `;
		if (targetid === "dragonascent") {
			buf += `<span class="col itemiconcol"></span>`;
		} else {
			buf += `<span class="col itemiconcol"><psicon item="${targetid}"/></span> `;
		}
		if (targetid === "dragonascent") {
			buf += `<span class="col movenamecol" style="white-space:nowrap"><a href="https://pokemonshowdown.com/dex/moves/${targetid}" target="_blank">Dragon Ascent</a></span> `;
		} else {
			buf += `<span class="col pokemonnamecol" style="white-space:nowrap"><a href="https://pokemonshowdown.com/dex/items/${stone.id}" target="_blank">${stone.name}</a></span> `;
		}
		if (deltas.type) {
			buf += `<span class="col typecol"><img src="https://play.pokemonshowdown.com/sprites/types/${deltas.type}.png" alt="${deltas.type}" height="14" width="32"></span> `;
		} else {
			buf += `<span class="col typecol"></span>`;
		}
		buf += `<span style="float:left;min-height:26px">`;
		buf += `<span class="col abilitycol">${megaTemplate.abilities['0']}</span>`;
		buf += `<span class="col abilitycol"></span>`;
		buf += `</span>`;
		buf += `<span style="float:left;min-height:26px">`;
		buf += `<span class="col statcol"><em>HP</em><br />0</span> `;
		buf += `<span class="col statcol"><em>Atk</em><br />${deltas.baseStats.atk}</span> `;
		buf += `<span class="col statcol"><em>Def</em><br />${deltas.baseStats.def}</span> `;
		buf += `<span class="col statcol"><em>SpA</em><br />${deltas.baseStats.spa}</span> `;
		buf += `<span class="col statcol"><em>SpD</em><br />${deltas.baseStats.spd}</span> `;
		buf += `<span class="col statcol"><em>Spe</em><br />${deltas.baseStats.spe}</span> `;
		buf += `<span class="col bstcol"><em>BST<br />100</em></span> `;
		buf += `</span>`;
		buf += `</li>`;
		this.sendReply(`|raw|<div class="message"><ul class="utilichart">${buf}<li style="clear:both"></li></ul></div>`);
		this.sendReply(`|raw|<font size="1"><font color="#686868">Gen:</font> ${details["Gen"]}&nbsp;|&ThickSpace;<font color="#686868">Weight:</font> ${details["Weight"]}</font>`);
	},
	stonehelp: [`/stone <mega stone> - Shows the changes that a mega stone/orb applies to a Pokemon.`],

	'!350cup': true,
	'350': '350cup',
	'350cup': function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!toId(target)) return this.parse('/help 350cup');
		let template = Object.assign({}, Dex.getTemplate(target));
		if (!template.exists) return this.errorReply("Error: Pokemon not found.");
		let bst = 0;
		for (let i in template.baseStats) {
			bst += template.baseStats[i];
		}
		let newStats = {};
		for (let i in template.baseStats) {
			newStats[i] = template.baseStats[i] * (bst <= 350 ? 2 : 1);
		}
		template.baseStats = Object.assign({}, newStats);
		this.sendReply(`|html|${Chat.getDataPokemonHTML(template)}`);
	},
	'350cuphelp': [`/350 OR /350cup <pokemon> - Shows the base stats that a Pokemon would have in 350 Cup.`],

	'!tiershift': true,
	ts: 'tiershift',
	tiershift: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!toId(target)) return this.parse('/help tiershift');
		let template = Object.assign({}, Dex.getTemplate(target));
		if (!template.exists) return this.errorReply("Error: Pokemon not found.");
		let boosts = {
			'UU': 10,
			'BL2': 10,
			'RU': 20,
			'BL3': 20,
			'NU': 30,
			'BL4': 30,
			'PU': 40,
			'NFE': 40,
			'LC Uber': 40,
			'LC': 40,
		};
		if (!(template.tier in boosts)) return this.sendReply(`|html|${Chat.getDataPokemonHTML(template)}`);
		let boost = boosts[template.tier];
		let newStats = Object.assign({}, template.baseStats);
		for (let statName in template.baseStats) {
			newStats[statName] = Dex.clampIntRange(newStats[statName] + boost, 1, 255);
		}
		template.baseStats = Object.assign({}, newStats);
		this.sendReply(`|raw|${Chat.getDataPokemonHTML(template)}`);
	},
	tiershifthelp: [`/ts OR /tiershift <pokemon> - Shows the base stats that a Pokemon would have in Tier Shift.`],

	//Misc commands for DragonHeaven
	ns: 'natureswap',
        'natureswap': function(target, room, user) {
		if (!this.runBroadcast()) return;
		let arg=target,by=user;
		let natures = Object.assign({}, Dex.data.Natures);
		let pokemen = Object.assign({}, Dex.data.Pokedex);
                let text = "";
                if (arg == " " || arg == '') {
                        text += "Usage: <code>/ns &lt;Nature> &lt;Pokemon></code>";
                } else {
                        let tar = arg.split(' ');
                        let poke = tar[1],
                                nat = toId(tar[0]),
                                p = toId(poke);
                        if (p == "mega")
                                poke = tar[2] + "mega";
                        if (p.charAt(0) == "m" && pokemen[p.substring(1, p.length) + "mega"] != undefined)
                                poke = poke.substring(1, poke.length) + "mega";
                        let temp = "";
                        p = toId(poke);
                        if (pokemen[p] == undefined) {
                                text += "Error: Pokemon not found";
                        } else if (natures[nat] == undefined) {
                                text += "Error: Nature not found";
                        } else {
                                let pokeobj = {
                                        hp: "" + pokemen[p].baseStats.hp,
                                        atk: "" + pokemen[p].baseStats.atk,
                                        def: "" + pokemen[p].baseStats.def,
                                        spa: "" + pokemen[p].baseStats.spa,
                                        spd: "" + pokemen[p].baseStats.spd,
                                        spe: "" + pokemen[p].baseStats.spe,
                                        name: pokemen[p].species,
                                };
                                let natureobj = natures[nat];
                                if (natureobj.plus && natureobj.minus) {
                                        temp = "<b>" + pokeobj[natureobj['plus']] + "</b>";
                                        pokeobj[natureobj['plus']] = "<b>" + pokeobj[natureobj['minus']] + "</b>";
                                        pokeobj[natureobj['minus']] = temp;
                                }
                                text += "The new stats for " + pokeobj['name'] + " are: " + pokeobj['hp'] + "/" + pokeobj['atk'] + "/" + pokeobj['def'] + "/" + pokeobj['spa'] + "/" + pokeobj['spd'] + "/" + pokeobj['spe'] + "";
                        }
                }
                this.sendReplyBox(text);
        },
	fuse: function(target, room, user) {
		if (!this.runBroadcast()) return;
		if(!target || target === ' ' || !target.includes(',')) return this.errorReply('Error: Invalid Argument(s).')
		let text = "";
		let separated = target.split(",");
		let name = toId(separated[0]), name2 = toId(separated[1]);
		if (!Dex.data.Pokedex[name] || !Dex.data.Pokedex[name2]) {
			return this.errorReply("Error: Pokemon not found");;
		}
		let baseStats = {}, fusedTemplate = Object.assign({}, Dex.getTemplate(name)), template = Object.assign({}, Dex.getTemplate(name2));
		Object.keys(fusedTemplate.baseStats).forEach(stat => {
			baseStats[stat] = Math.floor((fusedTemplate.baseStats[stat] + template.baseStats[stat]) / 2);
		});
		fusedTemplate.baseStats = Object.assign({}, baseStats);
		fusedTemplate.types = [fusedTemplate.types[0]];
		let type = (separated[2] && toId(separated[2]) === 'shiny' && template.types[1]) ? 1 : 0;
		if(template.types[type] && template.types[type] !== fusedTemplate.types[0]) fusedTemplate.types.push(template.types[type]);
		let weight = (Dex.data.Pokedex[fusedTemplate.id].weightkg + template.weightkg) / 2;
		fusedTemplate.weightkg = weight;
		fusedTemplate.abilities = Object.assign({'S': `<b>${template.abilities['0']}</b>`}, Dex.data.Pokedex[fusedTemplate.id].abilities);
		this.sendReply(`|html|${Chat.getDataPokemonHTML(fusedTemplate)}`);
		let details;
		let weighthit = 20;
		if (fusedTemplate.weightkg >= 200) {
			weighthit = 120;
		} else if (fusedTemplate.weightkg >= 100) {
			weighthit = 100;
		} else if (fusedTemplate.weightkg >= 50) {
			weighthit = 80;
		} else if (fusedTemplate.weightkg >= 25) {
			weighthit = 60;
		} else if (fusedTemplate.weightkg >= 10) {
			weighthit = 40;
		}
		details = {
			"Dex#": fusedTemplate.num,
			"Gen": fusedTemplate.gen,
			"Height": fusedTemplate.heightm + " m",
			"Weight": fusedTemplate.weightkg + " kg <em>(" + weighthit + " BP)</em>",
			"Dex Colour": fusedTemplate.color,
		};
		details['<font color="#686868">Does Not Evolve</font>'] = "";
		this.sendReply('|raw|<font size="1">' + Object.keys(details).map(detail => {
				if (details[detail] === '') return detail;
				return '<font color="#686868">' + detail + ':</font> ' + details[detail];
			}).join("&nbsp;|&ThickSpace;") + '</font>');
	},
	learnistor: function(target, room, user) {
		if (!this.runBroadcast()) return;
		let learnstor = Dex.mod('istor').data.Learnsets, movestor = Dex.mod('istor').data.Movedex, dexstor = Dex.mod('istor').data.Pokedex;
		if (!target || toId(target) === '') return this.sendReply("/learnistor: Shows the whether a Pokemon can learn a move, including Pokemon and Moves from istor.");
		let targets = target.split(','), mon = targets[0], move = targets[1];
		if (!mon || !dexstor[toId(mon)]) return this.errorReply("Error: Pokemon not found");
		if (!learnstor[toId(mon)]) return this.errorReply("Error: Learnset not found");
		if (!move || !movestor[toId(move)]) return this.errorReply("Error: Move not found");
		mon = dexstor[toId(mon)];
		move = movestor[toId(move)];
		if (learnstor[toId(mon.species)].learnset[toId(move.name)]) {
			return this.sendReplyBox("In Istor, " + mon.species + ' <font color="green"><u><b>can<b><u></font> learn ' + move.name);
		}
		return this.sendReplyBox("In Istor, " + mon.species + ' <font color="red"><u><b>can\'t<b><u></font> learn ' + move.name);
	},
	
	'bnb' : 'badnboosted',
	badnboosted : function (target, room, user) {
		if (!this.runBroadcast()) return;
		if(!Dex.data.Pokedex[toId(target)]) {
			return this.errorReply("Error: Pokemon not found.")
		}
		let template = Object.assign({}, Dex.getTemplate(target));
		let newStats = Object.values(template.baseStats).map(function (stat) {
 			return (stat <= 70) ? (stat * 2) : stat;
 		});
		this.sendReplyBox(`${Dex.data.Pokedex[toId(target)].species} in Bad 'n Boosted: <br /> ${newStats.join('/')}`);
	},
	badnboostedhelp: ["/bnb <pokemon> - Shows the base stats that a Pokemon would have in Bad 'n Boosted."],

	istorlist: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Istor Pokemon</h2></center>`;
		let istorDex = require('../mods/istor/pokedex.js').BattlePokedex;
		if (!istorDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(istorDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Istor" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	istorlisthelp: ["/istorlist - Shows the list of Istor Pokemon."],
	felist: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/fe/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, FE" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	felisthelp: ["/felist - Shows the list of Pokemon in Fusion Evolution."],
	nerfmons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Nerfed Pokemon</h2></center>`;
		let feDex = require('../mods/nerfmons/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching Nerf Data.");
		Object.values(feDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, nerfmons" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	nerfmonshelp: ["/nerfmons - Shows the list of Nerfed Pokemon."],
	optimons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Optimized Pokemon</h2></center>`;
		let feDex = require('../mods/opti/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching Opti Data.");
		Object.values(feDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, opti" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	optimonshelp: ["/optimons - Shows the list of Optimized."],
	jillianlist: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Jillian Pokemon</h2></center>`;
		let jillianDex = require('../mods/jillian/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Jillian" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	jillianlisthelp: ["/jillianlist - Shows the list of Pokemon in Jillian."],
	eternalmons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Eternal Pokemon</h2></center>`;
		let jillianDex = require('../mods/eternal/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Eternal" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	eternalmonsthelp: ["/eternalmons - Shows the list of Pokemon in Eternal Pokemon."],
	eternallearn: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Eternal Pokemon</h2></center>`;
		let jillianDex = require('../mods/eternal/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `this.modData('Learnsets', ${mon.id}.learnset.move = ['7L1']&#59; <br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	eternallearnthelp: ["/eternalmons - Shows the list of Pokemon in Eternal Pokemon."],
	eternalmoves: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Eternal Pokemon Moves</h2></center>`;
		let eternalDex = require('../mods/eternal/moves.js').BattleMovedex;
		if (!eternalDex) return this.errorReply("Error Fetching Eternal Data.");
		Object.values(eternalDex).forEach(move => {
			buf += `<button name="send" value="/dt ${move.id}, Eternal" style="background:none;border:none;">${move.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
typeopt: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Type Optimisation Pokemon</h2></center>`;
		let jillianDex = require('../mods/typeopt/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Typeopt" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
typeopthelp: ["/eternalmons - Shows the list of Pokemon in Type Optimisation Pokemon."],
	usv: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Ultra Space Variants Pokemon</h2></center>`;
		let jillianDex = require('../mods/usv/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Usv" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	usvhelp: ["/eternalmons - Shows the list of Pokemon in Ultra Space Variant."],
	clovermons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Clovermons</h2></center>`;
		let jillianDex = require('../mods/clovermons/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Clovermons" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	clovermonshelp: ["/clovermons - Shows the list of Clovermons."],
		eeveed: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Eeeved Pokemon</h2></center>`;
		let jillianDex = require('../mods/eeveed/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, eeveed" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	eeveedhelp: ["/eeveed - Shows the list of Pokemon in Eeevee'd."],
	eeveedabilities: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Coded Eeveed Abilities</h2></center>`;
		let feDex = require('../mods/eeveed/abilities.js').BattleAbilities;
		if (!feDex) return this.errorReply("Error Fetching Eeveed Data.");
		Object.values(feDex).forEach(ability => {
			buf += `<button name="send" value="/dt ${ability.id}, Eeveed" style="background:none;border:none;">${ability.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	
	tnfg: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of PTNFG Pokemon</h2></center>`;
		let jillianDex = require('../mods/thefirstnewgen/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, thefirstnewgen" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	tnfghelp: ["/tnfg - Shows the list of Pokemon in Pokemon: The New First Gen."],
	
		mfa: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of MFA Pokemon</h2><br>Clickable list!</center>`;
		let mfaDex = require('../mods/megasforall/pokedex.js').BattlePokedex;
		if (!mfaDex) return this.errorReply("Error Fetching MFA Data.");
		Object.values(mfaDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, megasforall" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
		mfahelp: ["/mfa - Shows the list of Pokemon in Megas For All."],
	 alola: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/alola/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, alola" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	alolahelp: ["/alola - Shows the list of Pokemon in Alola Formes."],
	femegas: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Mega Stones</h2></center>`;
		let feDex = require('../mods/fe/items.js').BattleItems;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(item => {
			buf += `<button name="send" value="/dt ${item.name}, FE" style="background:none;border:none;">${item.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	femegashelp: ["/femegas - Shows the list of Mega Stones in Fusion Evolution."],
	feabilities: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Coded Fusion Evolution Abilities</h2></center>`;
		let feDex = require('../mods/fe/abilities.js').BattleAbilities;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(ability => {
			buf += `<button name="send" value="/dt ${ability.id}, FE" style="background:none;border:none;">${ability.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
sylveitems: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Sylvemons Items Additions/Alterations</h2></center>`;
		let sylveDex = require('../mods/sylvemons/items.js').BattleItems;
		if (!sylveDex) return this.errorReply("Error Fetching Sylvemons Data.");
		Object.values(sylveDex).forEach(item => {
			buf += `<button name="send" value="/dt ${item.id}, Sylvemons" style="background:none;border:none;">${item.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	sylvemoves: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Sylvemons Moves Additions/Alterations</h2></center>`;
		let sylveDex = require('../mods/sylvemons/moves.js').BattleMovedex;
		if (!sylveDex) return this.errorReply("Error Fetching Sylvemons Data.");
		Object.values(sylveDex).forEach(move => {
			buf += `<button name="send" value="/dt ${move.id}, Sylvemons" style="background:none;border:none;">${move.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	sylveabilities: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Sylvemons Abilities Additions/Alterations</h2></center>`;
		let sylveDex = require('../mods/sylvemons/abilities.js').BattleAbilities;
		if (!sylveDex) return this.errorReply("Error Fetching Sylvemons Data.");
		Object.values(sylveDex).forEach(ability => {
			buf += `<button name="send" value="/dt ${ability.id}, Sylvemons" style="background:none;border:none;">${ability.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
gutter: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/fe/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `&quot;${mon.species}&quot;: {<br> &quot;t1&quot;: &quot;${mon.types[0]}&quot;, <br>&quot;t2&quot;: &quot;${mon.types[1]}&quot;,<br> &quot;bs&quot;: { <br>&quot;hp&quot;: ${mon.baseStats.hp}, <br>&quot;at&quot;: ${mon.baseStats.atk}, <br> &quot;df&quot;: ${mon.baseStats.def}, <br> &quot;sa&quot;: ${mon.baseStats.spa},<br>&quot;sd&quot;: ${mon.baseStats.spd}, <br>&quot;sp&quot;: ${mon.baseStats.spe} <br> }, <br> },`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	egutter: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/eternal/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `&quot;${mon.species}&quot;: {<br> &quot;t1&quot;: &quot;${mon.types[0]}&quot;, <br>&quot;t2&quot;: &quot;${mon.types[1]}&quot;,<br> &quot;bs&quot;: { <br>&quot;hp&quot;: ${mon.baseStats.hp}, <br>&quot;at&quot;: ${mon.baseStats.atk}, <br> &quot;df&quot;: ${mon.baseStats.def}, <br> &quot;sa&quot;: ${mon.baseStats.spa},<br>&quot;sd&quot;: ${mon.baseStats.spd}, <br>&quot;sp&quot;: ${mon.baseStats.spe} <br> }, <br> },`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
		mgutter: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/megasforall/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			if (mon.forme === 'Mega') {
			buf += `&quot;${mon.species}&quot;: {<br> &quot;t1&quot;: &quot;${mon.types[0]}&quot;, <br>&quot;t2&quot;: &quot;${mon.types[1]}&quot;,<br> &quot;bs&quot;: { <br>&quot;hp&quot;: ${mon.baseStats.hp}, <br>&quot;at&quot;: ${mon.baseStats.atk}, <br> &quot;df&quot;: ${mon.baseStats.def}, <br> &quot;sa&quot;: ${mon.baseStats.spa},<br>&quot;sd&quot;: ${mon.baseStats.spd}, <br>&quot;sp&quot;: ${mon.baseStats.spe} <br> }, <br> &quot;w&quot;: ${mon.weightkg}<br> },`;
}});
		this.sendReplyBox(`${buf}</div>`);
	},
	egutter2: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/eternal/moves.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(move => {
			buf += `'${move.name}': {<br> ${move.basePower}, 'category': ${move.category},<br>},`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	fespeed: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/fe/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			let speedtierplusscarf = (2.2 * mon.baseStats.spe + 108.9) * 1.5;
			let speedtierscarf = (2 * mon.baseStats.spe + 99) * 1.5;
			let speedtierplus = 2.2 * mon.baseStats.spe + 108.9;
			let speedtier = 2 * mon.baseStats.spe + 99;
			let speedtierzero = 2 * mon.baseStats.spe + 36;
			buf += `${speedtierplus}: Fast+ ${mon.species}<br>${speedtier}: Fast ${mon.species}<br>${speedtierzero}: Bulky ${mon.species}<br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	eternalspeed: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/eternal/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			let speedtierplusscarf = (2.2 * mon.baseStats.spe + 108.9) * 1.5;
			let speedtierscarf = (2 * mon.baseStats.spe + 99) * 1.5;
			let speedtierplus = 2.2 * mon.baseStats.spe + 108.9;
			let speedtier = 2 * mon.baseStats.spe + 99;
			let speedtierzero = 2 * mon.baseStats.spe + 36;
			buf += `${speedtierplusscarf}: Scarf Fast+ ${mon.species}<br>${speedtierscarf}: Scarf Fast ${mon.species}<br>${speedtierplus}: Fast+ ${mon.species}<br>${speedtier}: Fast ${mon.species}<br>${speedtierzero}: Bulky ${mon.species}<br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	mfaspeed: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/megasforall/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			let speedtierplusscarf = (2.2 * mon.baseStats.spe + 108.9) * 1.5;
			let speedtierscarf = (2 * mon.baseStats.spe + 99) * 1.5;
			let speedtierplus = 2.2 * mon.baseStats.spe + 108.9;
			let speedtier = 2 * mon.baseStats.spe + 99;
			let speedtierzero = 2 * mon.baseStats.spe + 36;
			if (mon.forme === 'Mega') {
			buf += `${speedtierplus}: Fast+ ${mon.species}<br>${speedtier}: Fast ${mon.species}<br>${speedtierzero}: Bulky ${mon.species}<br>`;
		}
		}
		);
		this.sendReplyBox(`${buf}</div>`);
	},
	fespeedscarf: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/fe/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			let speedtierplusscarf = (2.2 * mon.baseStats.spe + 108.9) * 1.5;
			let speedtierscarf = (2 * mon.baseStats.spe + 99) * 1.5;
			let speedtierplus = 2.2 * mon.baseStats.spe + 108.9;
			let speedtier = 2 * mon.baseStats.spe + 99;
			let speedtierzero = 2 * mon.baseStats.spe + 36;
			buf += `${speedtierplusscarf}: Scarf Fast+ ${mon.species}<br>${speedtierscarf}: Scarf Fast ${mon.species}<br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
};
