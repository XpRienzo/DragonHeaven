// Other Metas plugin by Spandan
'use strict';

exports.commands = {
	'!othermetas': true,
	om: 'othermetas',
	othermetas: function (target, room, user) {
		if (!this.runBroadcast()) return;
		target = toId(target);
		let buffer = "";

		if (target === 'all' && this.broadcasting) {
			return this.sendReplyBox("You cannot broadcast information about all Other Metagames at once.");
		}

		if (!target || target === 'all') {
			buffer += "- <a href=\"https://www.smogon.com/forums/forums/other-metagames.394/\">Other Metagames Forum</a><br />";
			buffer += "- <a href=\"https://www.smogon.com/forums/forums/om-analyses.416/\">Other Metagames Analyses</a><br />";
			if (!target) return this.sendReplyBox(buffer);
		}
		let showMonthly = (target === 'all' || target === 'omofthemonth' || target === 'omotm' || target === 'month');

		if (target === 'all') {
			// Display OMotM formats, with forum thread links as caption
			this.parse('/formathelp omofthemonth');

			// Display the rest of OM formats, with OM hub/index forum links as caption
			this.parse('/formathelp othermetagames');
			return this.sendReply('|raw|<center>' + buffer + '</center>');
		}
		if (showMonthly) {
			this.target = 'omofthemonth';
			this.run('formathelp');
		} else {
			this.run('formathelp');
		}
	},
	othermetashelp: ["/om - Provides links to information on the Other Metagames.",
		"!om - Show everyone that information. Requires: + % @ * # & ~"],

	ce: "crossevolve",
	crossevo: "crossevolve",
	crossevolve: function(target, user, room)
	{
		if (!this.runBroadcast()) return;
		if (!target || !target.includes(',')) return this.parse('/help crossevo')
		let pokes = target.split(",");
		if (!Tools.data.Pokedex[toId(pokes[0])] || !Tools.data.Pokedex[toId(pokes[1])]) {
			return this.errorReply('Error: Pokemon not found.')
		}
		let template = Object.assign({}, Tools.getTemplate(pokes[0])), crossTemplate = Object.assign({}, Tools.getTemplate(pokes[1]));
		let prevo = Tools.getTemplate(crossTemplate.prevo);
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
			if (Tools.data.Pokedex[template.prevo].prevo) {
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
			return this.sendReply(`Error: Cross evolution must follow evolutionary stages. (${poke1.species} is Stage ${setStage} and can only cross evolve to Stage ${setStage + 1})`);
		}
		mixedTemplate.abilities = Object.assign({}, crossTemplate.abilities);
		mixedTemplate.baseStats = {};
		for (let statName in template.baseStats) {
			mixedTemplate.baseStats[statName] = (crossTemplate.baseStats[statName] - prevo.baseStats[statName]) + Tools.data.Pokedex[template.id].baseStats[statName];
		}
		mixedTemplate.types = [Tools.data.Pokedex[template.id].types[0]];
		if (Tools.data.Pokedex[template.id].types[1]) mixedTemplate.types.push(Tools.data.Pokedex[template.id].types[1]);
		if (crossTemplate.types[0] !== prevo.types[0]) mixedTemplate.types[0] = crossTemplate.types[0];
		if (crossTemplate.types[1] !== prevo.types[1]) mixedTemplate.types[1] = crossTemplate.types[1] || crossTemplate.types[0];
		if (mixedTemplate.types[0] === mixedTemplate.types[1]) mixedTemplate.types.length = 1;
		mixedTemplate.weightkg = crossTemplate.weightkg - prevo.weightkg + Tools.data.Pokedex[template.id].weightkg;
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

	mnm: 'mixandmega',
	mixandmega: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!toId(target) || !target.includes('@')) return this.parse('/help mixandmega');
		let sep = target.split('@');
		let stone = toId(sep[1]);
		let template = toId(sep[0]);
		if (!Tools.data.Items[stone] || (Tools.data.Items[stone] && !Tools.data.Items[stone].megaEvolves && !Tools.data.Items[stone].onPrimal)) {
			return this.errorReply(`Error: Mega Stone not found`);
		}
		if (!Tools.data.Pokedex[toId(template)]) {
			return this.errorReply(`Error: Pokemon not found`);
		}
		template = Object.assign({}, Tools.getTemplate(template));
		stone = Object.assign({}, Tools.getItem(stone));
		if (template.isMega || (template.evos && Object.keys(template.evos).length > 0)) { // Mega Pokemon cannot be mega evolved
			return this.errorReply(`You cannot mega evolve ${template.name} in Mix and Mega.`);
		}
		let baseTemplate = Tools.getTemplate(stone.megaEvolves);
		let megaTemplate = Tools.getTemplate(stone.megaStone);
		if (stone.id === 'redorb') { // Orbs do not have 'Item.megaStone' or 'Item.megaEvolves' properties.
			megaTemplate = Tools.getTemplate("Groudon-Primal");
			baseTemplate = Tools.getTemplate("Groudon");
		} else if (stone.id === 'blueorb') {
			megaTemplate = Tools.getTemplate("Kyogre-Primal");
			baseTemplate = Tools.getTemplate("Kyogre");
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
			mixedTemplate.types = [types[0], deltas.type];
		}
		mixedTemplate.baseStats = {};
		for (let statName in template.baseStats) { // Add the changed stats and weight
			mixedTemplate.baseStats[statName] = Tools.clampIntRange(Tools.data.Pokedex[template.id].baseStats[statName] + deltas.baseStats[statName], 1, 255);
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
	mixandmegahelp: ["/mnm <pokemon> @ <mega stone> - Shows the Mix and Mega evolved Pokemon's type and stats."],

	'350': '350cup',
	'350cup': function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!Tools.data.Pokedex[toId(target)]) {
			return this.errorReply("Error: Pokemon not found.");
		}
		let bst = 0;
		let mixedTemplate = Object.assign({}, Tools.getTemplate(target));
		for (let i in mixedTemplate.baseStats) {
			bst += mixedTemplate.baseStats[i];
		}
		let newStats = {};
		for (let i in mixedTemplate.baseStats) {
			newStats[i] = mixedTemplate.baseStats[i] * (bst <= 350 ? 2 : 1);
		}
		mixedTemplate.baseStats = Object.assign({}, newStats);
		mixedTemplate.tier = "350Cup";
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
	'350cuphelp': ["/350 OR /350cup <pokemon> - Shows the base stats that a Pokemon would have in 350 Cup."],

	ts: 'tiershift',
	tiershift: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!Tools.data.Pokedex[toId(target)]) {
			return this.errorReply("Error: Pokemon not found.");
		}
		let boosts = {
			'UU': 5,
			'BL2': 5,
			'RU': 10,
			'BL3': 10,
			'NU': 15,
			'BL4': 15,
			'PU': 20,
			'NFE': 20,
			'LC Uber': 20,
			'LC': 20,
		};
		let mixedTemplate = Object.assign({}, Tools.getTemplate(target));
		let boost = boosts[mixedTemplate.tier];
		if (!(mixedTemplate.tier in boosts)) boost = 0;
		let newStats = {};
		for (let statName in mixedTemplate.baseStats) {
			newStats[statName] = Tools.clampIntRange(mixedTemplate.baseStats[statName] + boost, 1, 255);
		}
		mixedTemplate.baseStats = Object.assign({}, newStats);
		mixedTemplate.tier = "TS";
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
	'tiershifthelp': ["/ts OR /tiershift <pokemon> - Shows the base stats that a Pokemon would have in Tier Shift."],

	//Misc commands for DragonHeaven
	ns: 'natureswap',
        'natureswap': function(target, room, user) {
		if (!this.runBroadcast()) return;
		let arg=target,by=user;
		let natures = Object.assign({}, Tools.data.Natures);
		let pokemen = Object.assign({}, Tools.data.Pokedex);
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
		let text = "";
		let separated = target.split(",");
		let name = (("" + separated[0]).trim()).toLowerCase();
		let name2 = (("" + separated[1]).trim()).toLowerCase();
		name = toId(name);
		name2 = toId(name2);
		let pokemen = Tools.data.Pokedex;
		if (pokemen[name] == undefined || pokemen[name2] == undefined)
		{
			this.errorReply("Error: Pokemon not found");
			return;
		}
		else {
			let baseStats = {};
			baseStats['avehp'] = Math.floor((pokemen[name].baseStats.hp + pokemen[name2].baseStats.hp) / 2);
			baseStats['aveatk'] = Math.floor((pokemen[name].baseStats.atk + pokemen[name2].baseStats.atk) / 2);
			baseStats['avedef'] = Math.floor((pokemen[name].baseStats.def + pokemen[name2].baseStats.def) / 2);
			baseStats['avespa'] = Math.floor((pokemen[name].baseStats.spa + pokemen[name2].baseStats.spa) / 2);
			baseStats['avespd'] = Math.floor((pokemen[name].baseStats.spd + pokemen[name2].baseStats.spd) / 2);
			baseStats['avespe'] = Math.floor((pokemen[name].baseStats.spe + pokemen[name2].baseStats.spe) / 2);
			let type = pokemen[name].types[0];
			let ability = "";
			let weight = (pokemen[name].weightkg + pokemen[name2].weightkg) / 2;
			for (let i in pokemen[name].abilities) {
				ability += pokemen[name].abilities[i] + "/";
			}
			ability = ability.substring(0, ability.length - 1);
			ability = ability + " + " + pokemen[name2].abilities['0'];
			if (separated[2] && toId(separated[2]) === "shiny" && pokemen[name2].types[1])
				type = type + '/' + pokemen[name2].types[1];
			else if (pokemen[name].types[0] != pokemen[name2].types[0])
				type = type + '/' + pokemen[name2].types[0];
			if (type.split("/")[0] === type.split("/")[1]) {
				type = type.split("/")[0];
			}
			let bst = baseStats['avehp'] + baseStats['aveatk'] + baseStats['avedef'] + baseStats['avespa'] + baseStats['avespd'] + baseStats['avespe'];
			text = "<b>Stats</b>: " + baseStats['avehp'] + "/" + baseStats['aveatk'] + "/" + baseStats['avedef'] + "/" + baseStats['avespa'] + "/" + baseStats['avespd'] + "/" + baseStats['avespe'] + "<br /><b>BST</b>:" + bst + "<br /><b>Type:</b> " + type + "<br /><b>Abilities</b>: " + ability + "<br /><b>Weight</b>: " + weight + " kg";
			this.sendReplyBox(text);
		}
	},
	di: 'distor',
	dataistor: 'distor',
	distor: function(target, room, user) {
        	 if (!this.runBroadcast()) return;
                 if(!target || toId(target) === '') return this.sendReply("/distor: Shows the data for a Pokemon/Ability/Move, including ones from istor.");
		let name = toId(target);
		let abilistor = Tools.mod('istor').data.Abilities, movestor = Tools.mod('istor').data.Movedex, pokemen = Tools.mod('istor').data.Pokedex, itemstor = Tools.mod('istor').data.Items;
		if(pokemen[name]) {
			let baseStats = pokemen[name].baseStats;
			let types = pokemen[name].types;
			let type = '<span class="col typecol">';
			for(let i = 0; i<types.length;i++) {
				type = type+ '<img src="https://play.pokemonshowdown.com/sprites/types/'+types[i]+'.png" alt="'+types[i]+'" height="14" width="32">';
			}
			type = type+"</span>";
			let ability = "";
			let weight = pokemen[name].weightkg;
			for(let i in pokemen[name].abilities) {
				ability+=pokemen[name].abilities[i]+"/";
			}
			ability = ability.substring(0,ability.length-1);
			let bst = baseStats['hp'] + baseStats['atk'] + baseStats['def'] + baseStats['spa'] + baseStats['spd'] + baseStats['spe'];
			let text = "<b>Stats</b>: " + baseStats['hp'] + "/" + baseStats['atk'] + "/" + baseStats['def'] + "/" + baseStats['spa'] + "/" + baseStats['spd'] + "/" + baseStats['spe'] + "<br /><b>BST</b>:" + bst + "<br /><b>Type:</b> " + type + "<br /><b>Abilities</b>: " +ability+ "<br /><b>Weight</b>: "+weight+" kg";
			return this.sendReplyBox(text);
		}
		else if(movestor[name] && (movestor.desc || movestor[name].shortDesc)) {
			return this.sendReplyBox(`<ul class="utilichart"><li class="result"><span class="col movenamecol">${movestor[name].name}</span> <span class="col typecol"><img src="//play.pokemonshowdown.com/sprites/types/${(movestor[name].type)}.png" alt="${(movestor[name].type)}" height="14" width="32"><img src="//play.pokemonshowdown.com/sprites/categories/${(movestor[name].category)}.png" alt="${(movestor[name].category)}" height="14" width="32"></span> <span class="col labelcol"><em>Power</em><br>${(movestor[name].basePower)}</span> <span class="col widelabelcol"><em>Accuracy</em><br>${(movestor[name].accuracy)}%</span> <span class="col pplabelcol"><em>PP</em><br>${(movestor[name].pp)}</span> <span class="col movedesccol">${(movestor[name].shortDesc)}</span> </li><li style="clear:both"></li></ul><div class="chat"><font size="1"><font color="#686868">Priority:</font> ${(movestor[name].priority)}|<font color="#686868">Gen:</font> Istor |<font color="#686868"> Target:</font>${(movestor[name].target)}</div>`);
		}
		else if(abilistor[name] && (abilistor[name].desc || abilistor[name].shortDesc)) {
			return this.sendReplyBox(`<b>${abilistor[name].name}</b>: ${(abilistor[name].desc || abilistor[name].shortDesc)}`);
		}
		else if(itemstor[name] && (itemstor[name].desc || itemstor[name].shortDesc)) {
			return this.sendReplyBox(`<b>${itemstor[name].name}</b>: ${(itemstor[name].desc || itemstor[name].shortDesc)}`);
		}
		else 
			return this.errorReply("Error: Pokemon/Ability/Move not found");
		
	},
        learnistor: function(target, room, user) {
                if (!this.runBroadcast()) return;
		let learnstor = Tools.mod('istor').data.Learnsets, movestor = Tools.mod('istor').data.Movedex, dexstor = Tools.mod('istor').data.Pokedex;
                if(!target || toId(target) === '') return this.sendReply("/learnistor: Shows the whether a Pokemon can learn a move, including Pokemon and Moves from istor.");
                let targets = target.split(','), mon = targets[0], move = targets[1];
                if(!mon || !dexstor[toId(mon)]) return this.errorReply("Error: Pokemon not found");
                if(!learnstor[toId(mon)]) return this.errorReply("Error: Learnset not found");
                if(!move || !movestor[toId(move)]) return this.errorReply("Error: Move not found");
                mon = dexstor[toId(mon)];
                move = movestor[toId(move)];
                if(learnstor[toId(mon.species)].learnset[toId(move.name)]) {
                        return this.sendReplyBox("In Istor, "+mon.species+' <font color="green"><u><b>can<b><u></font> learn '+move.name);
                }
                return this.sendReplyBox("In Istor, "+mon.species+' <font color="red"><u><b>can\'t<b><u></font> learn '+move.name);
        },
	istorlist: function(target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox(' <div class=infobox-limited><center><h2>List Of Istor Pokemon</h2></center><button name="send" value="/dt Yddraig, Istor,Istor" style="background:none;border:none;">Yddraig</button><br> <button name="send" value="/dt Detuoy, Istor,Istor" style="background:none;border:none;">Detuoy</button><br> <button name="send" value="/dt Mycelore,Istor,Istor" style="background:none;border:none;">Mycelore</button><br> <button name="send" value="/dt Muceptio,Istor,Istor" style="background:none;border:none;">Muceptio</button><br> <button name="send" value="/dt Malifery,Istor,Istor" style="background:none;border:none;">Malifery</button><br> <button name="send" value="/dt Canos,Istor,Istor" style="background:none;border:none;">Canos</button><br> <button name="send" value="/dt Mortos,Istor,Istor" style="background:none;border:none;">Mortos</button><br> <button name="send" value="/dt Narwander,Istor,Istor" style="background:none;border:none;">Narwander</button><br> <button name="send" value="/dt Ortuska,Istor,Istor" style="background:none;border:none;">Ortuska</button><br> <button name="send" value="/dt Larvary,Istor,Istor" style="background:none;border:none;">Larvary</button><br> <button name="send" value="/dt Burnabee,Istor ,Istor" style="background:none;border:none;">Burnabee</button><br> <button name="send" value="/dt Freezabee,Istor,Istor" style="background:none;border:none;">Freezabee</button><br> <button name="send" value="/dt Parabee,Istor" style="background:none;border:none;">Parabee</button><br> <button name="send" value="/dt Drowzabee,Istor" style="background:none;border:none;">Drowzabee</button><br> <button name="send" value="/dt Toxabee,Istor" style="background:none;border:none;">Toxabee</button><br> <button name="send" value="/dt Molaxy,Istor" style="background:none;border:none;">Molaxy</button><br> <button name="send" value="/dt Magnalith,Istor" style="background:none;border:none;">Magnalith</button><br> <button name="send" value="/dt Panoir,Istor" style="background:none;border:none;">Panoir</button><br> <button name="send" value="/dt Warkoal,Istor" style="background:none;border:none;">Warkoal</button><br> <button name="send" value="/dt Frigalt,Istor" style="background:none;border:none;">Frigalt</button><br> <button name="send" value="/dt Manakley,Istor" style="background:none;border:none;">Manakley</button><br> <button name="send" value="/dt Maniakley,Istor" style="background:none;border:none;">Maniakley</button><br> <button name="send" value="/dt Sparklet,Istor" style="background:none;border:none;">Sparklet</button><br> <button name="send" value="/dt Spoark,Istor" style="background:none;border:none;">Spoark</button><br> <button name="send" value="/dt Spoark-Wild,Istor" style="background:none;border:none;">Spoark-Wild</button><br> <button name="send" value="/dt Impite,Istor" style="background:none;border:none;">Impite</button><br> <button name="send" value="/dt Pacteorite,Istor" style="background:none;border:none;">Pacteorite</button><br> <button name="send" value="/dt Rafilly,Istor" style="background:none;border:none;">Rafilly</button><br> <button name="send" value="/dt Decapony,Istor" style="background:none;border:none;">Decapony</button><br> <button name="send" value="/dt Vertahan,Istor" style="background:none;border:none;">Vertahan</button><br> <button name="send" value="/dt Alpy,Istor" style="background:none;border:none;">Alpy</button><br> <button name="send" value="/dt Alpike,Istor" style="background:none;border:none;">Alpike</button><br> <button name="send" value="/dt Alpra,Istor" style="background:none;border:none;">Alpra</button><br> <button name="send" value="/dt Chy,Istor" style="background:none;border:none;">Chy</button><br> <button name="send" value="/dt Quemelo,Istor" style="background:none;border:none;">Quemelo</button><br> <button name="send" value="/dt Glatise,Istor" style="background:none;border:none;">Glatise</button><br> <button name="send" value="/dt Suctopus,Istor" style="background:none;border:none;">Suctopus</button><br> <button name="send" value="/dt Octangle,Istor" style="background:none;border:none;">Octangle</button><br> <button name="send" value="/dt Chibacco,Istor" style="background:none;border:none;">Chibacco</button><br> <button name="send" value="/dt Obsetsun,Istor" style="background:none;border:none;">Obsetsun</button><br> <button name="send" value="/dt Tobaka,Istor" style="background:none;border:none;">Tobaka</button><br> <button name="send" value="/dt Ammonisk,Istor" style="background:none;border:none;">Ammonisk</button><br> <button name="send" value="/dt Nochu,Istor" style="background:none;border:none;">Nochu</button><br> <button name="send" value="/dt Peruin,Istor" style="background:none;border:none;">Peruin</button><br> <button name="send" value="/dt Elyrentz,Istor" style="background:none;border:none;">Elyrentz</button><br> <button name="send" value="/dtEffuvium ,Istor" style="background:none;border:none;">Effuvium</button><br> <button name="send" value="/dt Babieti,Istor" style="background:none;border:none;">Babieti</button><br> <button name="send" value="/dt Glacieti,Istor" style="background:none;border:none;">Glacieti</button><br> <button name="send" value="/dt Ogannach,Istor" style="background:none;border:none;">Ogannach</button><br> <button name="send" value="/dt Ifrinnach,Istor" style="background:none;border:none;">Ifrinnach</button><br> <button name="send" value="/dt Zerazay,Istor" style="background:none;border:none;">Zerazay</button><br> <button name="send" value="/dt Zoulzura,Istor" style="background:none;border:none;">Zoulzura</button><br> <button name="send" value="/dt Koltie,Istor" style="background:none;border:none;">Koltie</button><br> <button name="send" value="/dt Kelperial,Istor" style="background:none;border:none;">Kelperial</button><br> <button name="send" value="/dt Allight,Istor" style="background:none;border:none;">Allight</button><br> <button name="send" value="/dt Anxurity,Istor" style="background:none;border:none;">Anxurity</button><br> <button name="send" value="/dt Bushrie,Istor" style="background:none;border:none;">Bushrie</button><br> <button name="send" value="/dt Shrierra,Istor" style="background:none;border:none;">Shrierra</button><br> <button name="send" value="/dt Neshrill,Istor" style="background:none;border:none;">Neshrill</button><br> <button name="send" value="/dt Uisge,Istor" style="background:none;border:none;">Uisge</button><br> <button name="send" value="/dt Talamh,Istor" style="background:none;border:none;">Talamh</button><br> <button name="send" value="/dt Adhair,Istor" style="background:none;border:none;">Adhair</button><br> <button name="send" value="/dt Infineer,Istor" style="background:none;border:none;">Infineer</button><br> <button name="send" value="/dt Infineer-Special,Istor" style="background:none;border:none;">Infineer-Special</button><br> <button name="send" value="/dt Remordial,Istor" style="background:none;border:none;">Remordial</button><br> <button name="send" value="/dt Remordial-Special,Istor" style="background:none;border:none;">Remordial-Special</button><br> <button name="send" value="/dt Doduo-Istor,Istor" style="background:none;border:none;">Doduo-Istor</button><br> <button name="send" value="/dt Dodrio-Istor,Istor" style="background:none;border:none;">Dodrio-Istor</button><br> <button name="send" value="/dt Lapras-Istor,Istor" style="background:none;border:none;">Lapras-Istor</button><br> <button name="send" value="/dt Riolu-Istor,Istor" style="background:none;border:none;">Riolu-Istor</button><br> <button name="send" value="/dt Lucario-Istor,Istor" style="background:none;border:none;">Lucario-Istor</button><br> <button name="send" value="/dt Solosis-Istor,Istor" style="background:none;border:none;">Solosis-Istor</button><br> <button name="send" value="/dt Duosion-Istor,Istor" style="background:none;border:none;">Duosion-Istor</button><br> <button name="send" value="/dt Reuniclus-Istor,Istor" style="background:none;border:none;">Reuniclus-Istor</button></div>');
	},
	dgen: 'dnewgen',
	dnewgen: function(target, room, user) {
        	 if (!this.runBroadcast()) return;
                 if(!target || toId(target) === '') return this.sendReply("/dgen: Shows the data for a Pokemon/Ability/Move/Item, including ones from Pokemon The New First Gen.");
		let name = toId(target);
		let abiliden = Tools.mod('thefirstnewgen').data.Abilities, moveden = Tools.mod('thefirstnewgen').data.Movedex, pokegen = Tools.mod('thefirstnewgen').data.Pokedex, itemgen = Tools.mod('thefirstnewgen').data.Items;
		if(pokegen[name]) {
			let baseStats = pokegen[name].baseStats;
			let types = pokegen[name].types;
			let type = '<span class="col typecol">';
			for(let i = 0; i<types.length;i++) {
				type = type+ '<img src="https://play.pokemonshowdown.com/sprites/types/'+types[i]+'.png" alt="'+types[i]+'" height="14" width="32">';
			}
			type = type+"</span>";
			let ability = "";
			let info = pokegen[name].gender;
			let weight = pokegen[name].weightkg;
			for(let i in pokegen[name].abilities) {
				ability+=pokegen[name].abilities[i]+"/";
			}
			ability = ability.substring(0,ability.length-1);
			let bst = baseStats['hp'] + baseStats['atk'] + baseStats['def'] + baseStats['spa'] + baseStats['spd'] + baseStats['spe'];
			let text = ""+info+"</button><br><b>Stats</b>: " + baseStats['hp'] + "/" + baseStats['atk'] + "/" + baseStats['def'] + "/" + baseStats['spa'] + "/" + baseStats['spd'] + "/" + baseStats['spe'] + "<br /><b>BST</b>:" + bst + "<br /><b>Type:</b> " + type + "<br /><b>Abilities</b>: " +ability+ "<br /><b>Weight</b>: "+weight+" kg";
			return this.sendReplyBox(text);
		}
		else if(moveden[name]) {
			return this.sendReplyBox(`<ul class="utilichart"><li class="result"><span class="col movenamecol">${moveden[name].name}</span> <span class="col typecol"><img src="//play.pokemonshowdown.com/sprites/types/${(moveden[name].type)}.png" alt="${(moveden[name].type)}" height="14" width="32"><img src="//play.pokemonshowdown.com/sprites/categories/${(moveden[name].category)}.png" alt="${(moveden[name].category)}" height="14" width="32"></span> <span class="col labelcol"><em>Power</em><br>${(moveden[name].basePower)}</span> <span class="col widelabelcol"><em>Accuracy</em><br>${(moveden[name].accuracy)}%</span> <span class="col pplabelcol"><em>PP</em><br>${(moveden[name].pp)}</span> <span class="col movedesccol">${(moveden[name].shortDesc)}</span> </li><li style="clear:both"></li></ul><div class="chat"><font size="1"><font color="#686868">Priority:</font> ${(moveden[name].priority)}|<font color="#686868">Gen:</font> New First Gen |<font color="#686868"> Target:</font>${(moveden[name].target)}</div>`);
		}
		else if(abiliden[name]) {
			return this.sendReplyBox(`<b>${abiliden[name].name}</b>: ${(abiliden[name].shortDesc)}`);
		}
		else if(itemgen[name]) {
			return this.sendReplyBox(`<b>${itemgen[name].name}</b>: ${(itemgen[name].desc || itemgen[name].shortDesc)}`);
		}
		else 
			return this.errorReply("Error: Pokemon/Ability/Move/Item not found");
	},
	
	'bnb' : 'badnboosted',
	badnboosted : function (target, room, user) {
		if (!this.runBroadcast()) return;
		if(!Tools.data.Pokedex[toId(target)]) {
			return this.errorReply("Error: Pokemon not found.")
		}
		let template = Object.assign({}, Tools.getTemplate(target));
		let newStats = Object.values(template.baseStats).map(function (stat) {
 			return (stat <= 70) ? (stat * 2) : stat;
 		});
		this.sendReplyBox(`${Tools.data.Pokedex[toId(target)].species} in Bad 'n Boosted: <br /> ${newStats.join('/')}`);
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
};
