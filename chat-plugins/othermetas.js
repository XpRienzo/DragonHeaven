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
			buffer += "- <a href=\"http://www.smogon.com/forums/forums/other-metagames.394/\">Other Metagames Forum</a><br />";
			buffer += "- <a href=\"http://www.smogon.com/forums/forums/om-analyses.416/\">Other Metagames Analyses</a><br />";
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
		if (template.isMega || (template.evos && Object.keys(template.evos).length > 0)) { // Mega Pokemon cannot be mega evolved
			this.errorReply(`Warning: You cannot mega evolve non-fully evolved Pokemon and Mega Pokemon in Mix and Mega.`);
		}
		let bannedStones = {'beedrillite':1, 'blazikenite':1, 'gengarite':1, 'kangaskhanite':1, 'mawilite':1, 'medichamite':1};
		if (stone.id in bannedStones && template.name !== stone.megaEvolves) {
			this.errorReply(`Warning: ${stone.name} is restricted to ${stone.megaEvolves} in Mix and Mega; therefore, ${template.name} cannot use ${stone.name} in actual play.`);
		}
		if (Dex.mod("mixandmega").getTemplate(sep[0]).tier === "Uber" && !template.isMega) { // Separate messages because there's a difference between being already mega evolved / NFE and being banned from mega evolving
			this.errorReply(`Warning: ${template.name} is banned from mega evolving with a non-native mega stone in Mix and Mega and therefore cannot use ${toId(sep[1]) === 'dragonascent' ? 'Dragon Ascent' : stone.name} in actual play.`);
		}
		if (stone.isUnreleased) {
			this.errorReply(`Warning: ${stone.name} is unreleased and is not usable in current Mix and Mega.`);
		}
		let dragonAscentUsers = {'smeargle':1, 'rayquaza':1, 'rayquazamega':1};
		if (toId(sep[1]) === 'dragonascent' && !(toId(sep[0]) in dragonAscentUsers)) {
			this.errorReply(`Warning: Only Pokemon with access to Dragon Ascent can mega evolve with Mega Rayquaza's traits; therefore, ${template.name} cannot mega evolve with Dragon Ascent.`);
		}
		// Fake Pokemon and Mega Stones
		if (template.isNonstandard) {
			this.errorReply(`Warning: ${template.name} is not a real Pokemon and is therefore not usable in Mix and Mega.`);
		}
		if (toId(sep[1]) === 'crucibellite') {
			this.errorReply(`Warning: Crucibellite is a fake mega stone created by the CAP Project and is restricted to the CAP Crucibelle.`);
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
	mixandmegahelp: ["/mnm <pokemon> @ <mega stone> - Shows the Mix and Mega evolved Pokemon's type and stats."],

	"!350cup": true,
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
	'350cuphelp': ["/350 OR /350cup <pokemon> - Shows the base stats that a Pokemon would have in 350 Cup."],

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
	'tiershifthelp': ["/ts OR /tiershift <pokemon> - Shows the base stats that a Pokemon would have in Tier Shift."],

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
		let buf = `<div class=infobox-limited><center><h2>List Of Type Eternal Pokemon</h2></center>`;
		let jillianDex = require('../mods/eternal/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Eternal" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	eternalmonsthelp: ["/eternalmons - Shows the list of Pokemon in Eternal Pokemon."],
	typeopt: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Type Optimisation Pokemon</h2></center>`;
		let tyepoptDex = require('../mods/typeoptimisation/pokedex.js').BattlePokedex;
		if (!tyepoptDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(tyepoptDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, typeoptimisation" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	typeopthelp: ["/typeopt - Shows the list of Pokemon in Type Optimisation."],
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
};
