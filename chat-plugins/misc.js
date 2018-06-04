/**
 * Miscellaneous commands
 */

'use strict';
/*eslint no-restricted-modules: [0]*/

let moment = require('moment');
let request = require('request');

let messages = [
	"has vanished into nothingness!",
	"used Explosion!",
	"fell into the void.",
	"went into a cave without a repel!",
	"has left the building.",
	"was forced to give StevoDuhHero's mom an oil massage!",
	"was hit by Magikarp's Revenge!",
	"ate a bomb!",
	"is blasting off again!",
	"(Quit: oh god how did this get here i am not good with computer)",
	"was unfortunate and didn't get a cool message.",
	"{{user}}'s mama accidently kicked {{user}} from the server!",
];

function clearRoom(room) {
	let len = (room.log && room.log.length) || 0;
	let users = [];
	while (len--) {
		room.log[len] = '';
	}
	for (let u in room.users) {
		users.push(u);
		Users.get(u).leaveRoom(room, Users.get(u).connections[0]);
	}
	len = users.length;
	setTimeout(function () {
		while (len--) {
			Users.get(users[len]).joinRoom(room, Users.get(users[len]).connections[0]);
		}
	}, 1000);
}

exports.commands = {
	stafflist: 'authority',
	auth: 'authority',
	authlist: 'authority',
	authority: function (target, room, user, connection) {
		let rankLists = {};
		let ranks = Object.keys(Config.groups);
		for (let u in Users.usergroups) {
			let rank = Users.usergroups[u].charAt(0);
			// In case the usergroups.csv file is not proper, we check for the server ranks.
			if (ranks.indexOf(rank) > -1) {
				let name = Users.usergroups[u].substr(1);
				if (!rankLists[rank]) rankLists[rank] = [];
				if (name) rankLists[rank].push(((Users.getExact(name) && Users.getExact(name).connected) ? '**' + name + '**' : name));
			}
		}

		let buffer = [];
		Object.keys(rankLists).sort(function (a, b) {
			return (Config.groups[b] || {rank: 0}).rank - (Config.groups[a] || {rank: 0}).rank;
		}).forEach(function (r) {
			buffer.push((Config.groups[r] ? r + Config.groups[r].name + "s (" + rankLists[r].length + ")" : r) + ":\n" + rankLists[r].sort().join(", "));
		});

		if (!buffer.length) {
			return connection.popup("This server has no auth.");
		}
		connection.popup(buffer.join("\n\n"));
	},

	clearall: function (target, room, user) {
		if (!this.can('declare')) return false;
		if (room.battle) return this.sendReply("You cannot clearall in battle rooms.");

		clearRoom(room);
	},

	gclearall: 'globalclearall',
	globalclearall: function (target, room, user) {
		if (!this.can('gdeclare')) return false;

		for (let u in Users.users) {
			Users.users[u].popup("All rooms are being clear.");
		}
		Rooms.rooms.forEach(clearRoom);
	},

	hide: function (target, room, user) {
		if (!this.can('lock')) return false;
		user.hiding = true;
		user.updateIdentity();
		this.sendReply("You have hidden your staff symbol.");
	},

	rk: 'kick',
	roomkick: 'kick',
	kick: function (target, room, user) {
		if (!target) return this.parse('/help kick');
		if (!this.canTalk() && !user.can('bypassall')) {
			return this.sendReply("You cannot do this while unable to talk.");
		}

		target = this.splitTarget(target);
		let targetUser = this.targetUser;
		if (!targetUser || !targetUser.connected) return this.sendReply("User \"" + this.targetUsername + "\" not found.");
		if (!this.can('mute', targetUser, room)) return false;

		this.addModAction(targetUser.name + " was kicked from the room by " + user.name + ".");
		this.modlog('KICK');
		targetUser.popup("You were kicked from " + room.id + " by " + user.name + ".");
		targetUser.leaveRoom(room.id);
	},
	kickhelp: ["/kick - Kick a user out of a room. Requires: % @ # & ~"],

	masspm: 'pmall',
	pmall: function (target, room, user) {
		if (!this.can('pmall')) return false;
		if (!target) return this.parse('/help pmall');

		let pmName = ' Server PM [Do not reply]';

		Users.users.forEach(function (user) {
			let message = '|pm|' + pmName + '|' + user.getIdentity() + '|' + target;
			user.send(message);
		});
	},
	pmallhelp: ["/pmall [message] - PM all users in the server."],

	staffpm: 'pmallstaff',
	pmstaff: 'pmallstaff',
	pmallstaff: function (target, room, user) {
		if (!this.can('forcewin')) return false;
		if (!target) return this.parse('/help pmallstaff');

		let pmName = ' Staff PM [Do not reply]';

		Users.users.forEach(function (user) {
			if (!user.isStaff) return;
			let message = '|pm|' + pmName + '|' + user.getIdentity() + '|' + target;
			user.send(message);
		});
	},
	pmallstaffhelp: ["/pmallstaff [message] - Sends a PM to every staff member online."],

	d: 'poof',
	cpoof: 'poof',
	poof: function (target, room, user) {
		if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
		if (target && !this.can('broadcast')) return false;
		if (room.id !== 'lobby') return false;
		let message = target || messages[Math.floor(Math.random() * messages.length)];
		if (message.indexOf('{{user}}') < 0) message = '{{user}} ' + message;
		message = message.replace(/{{user}}/g, user.name);
		if (!this.canTalk(message)) return false;

		let colour = '#' + [1, 1, 1].map(function () {
			let part = Math.floor(Math.random() * 0xaa);
			return (part < 0x10 ? '0' : '') + part.toString(16);
		}).join('');

		room.addRaw("<strong><font color=\"" + colour + "\">~~ " + Chat.escapeHTML(message) + " ~~</font></strong>");
		user.disconnectAll();
	},
	poofhelp: ["/poof - Disconnects the user and leaves a message in the room."],

	poofon: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = false;
		return this.sendReply("Poof is now enabled.");
	},
	poofonhelp: ["/poofon - Enable the use /poof command."],

	nopoof: 'poofoff',
	poofoff: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = true;
		return this.sendReply("Poof is now disabled.");
	},
	poofoffhelp: ["/poofoff - Disable the use of the /poof command."],

	regdate: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target || !toId(target)) return this.parse('/help regdate');
		let username = toId(target);
		request('http://pokemonshowdown.com/users/' + username, function (error, response, body) {
			if (error && response.statusCode !== 200) {
				this.sendReplyBox(Chat.escapeHTML(target) + " is not registered.");
				return room.update();
			}
			let regdate = body.split('<small>')[1].split('</small>')[0].replace(/(<em>|<\/em>)/g, '');
			if (regdate === '(Unregistered)') {
				this.sendReplyBox(Chat.escapeHTML(target) + " is not registered.");
			} else if (regdate === '(Account disabled)') {
				this.sendReplyBox(Chat.escapeHTML(target) + "'s account is disabled.");
			} else {
				this.sendReplyBox(Chat.escapeHTML(target) + " was registered on " + regdate.slice(7) + ".");
			}
			room.update();
		}.bind(this));
	},
	regdatehelp: ["/regdate - Please specify a valid username."],

	show: function (target, room, user) {
		if (!this.can('lock')) return false;
		user.hiding = false;
		user.updateIdentity();
		this.sendReply("You have revealed your staff symbol.");
	},

	sb: 'showdownboilerplate',
	showdownboilerplate: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReply("|raw|This server uses <a href='https://github.com/CreaturePhil/Showdown-Boilerplate'>Showdown-Boilerplate</a>.");
	},
	showdownboilerplatehelp: ["/showdownboilerplate - Links to the Showdown-Boilerplate repository on Github."],

	seen: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (!target) return this.parse('/help seen');
		let targetUser = Users.get(target);
		if (targetUser && targetUser.connected) return this.sendReplyBox(targetUser.name + " is <b>currently online</b>.");
		target = Chat.escapeHTML(target);
		let seen = Db.seen.get(toId(target));
		if (!seen) return this.sendReplyBox(target + " has never been online on this server.");
		this.sendReplyBox(target + " was last seen <b>" + moment(seen).fromNow() + "</b>.");
	},
	seenhelp: ["/seen - Shows when the user last connected on the server."],
	ytmusic: "music",
	music: function (target, room, user, connection, cmd) {
		if (!target) return this.parse('/help music');
		if (!this.runBroadcast()) return;
		let musick = Chat.escapeHTML(target.trim());
		if(cmd=="ytmusic")
		{
			if(musick.substring(0,8)=="https://") musick = musick.substring(7,musick.length);
			if(musick.substring(0,7)=="http://") musick = musick.substring(6,musick.length);
			this.sendReplyBox('<audio  style="width: 99.6%;border: 6px solid #F74823; color:green;" controls="" src="http://www.youtubeinmp3.com/fetch/?video='+musick+'" >Your user agent does not support the HTML5 Audio element.</audio>');
			return;
		}
		this.sendReplyBox('<audio  style="width: 99.6%" controls="" src="'+target+'" border: 5px solid #E9DF15; background-color:Blue">Your user agent does not support the HTML5 Audio element.</audio>');
	},
	musichelp: ["/music <mp3 link>: Shows a box which can play mp3 music."],
distor: function (target, room, user, connection, cmd) {
	if (!this.runBroadcast()) return;
	this.sendReplyBox('<div class="message"><ul class="utilichart"><li class="result"><span class="col numcol"><b>Istor</b></span> <span class="col iconcol"><span style="background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -40px -2430px"></span></span> <span class="col pokemonnamecol" style="white-space:nowrap"><a href="https://github.com/XpRienzo/DragonHeaven/blob/master/mods/aurora/README.md" target="_blank">Yddraig</a></span> <span class="col typecol"><img src="//play.pokemonshowdown.com/sprites/types/Dragon.png" alt="Dragon" height="14" width="32"></span> <span style="float:left;min-height:26px"><span class="col abilitycol">Infernal Scales / Shed Skin</span><span class="col abilitycol"></span></span><span style="float:left;min-height:26px"><span class="col statcol"><em>HP</em><br>60</span> <span class="col statcol"><em>Atk</em><br>60</span> <span class="col statcol"><em>Def</em><br>55</span> <span class="col statcol"><em>SpA</em><br>75</span> <span class="col statcol"><em>SpD</em><br>55</span> <span class="col statcol"><em>Spe</em><br>85</span> <span class="col bstcol"><em>BST<br>390</em></span> </span></li><li style="clear:both"></li></ul></div>');	
	
	},
	tell: function (target, room, user, connection) {
		if (!target) return this.parse('/help tell');
		target = this.splitTarget(target);
		let targetUser = this.targetUser;
		if (!target) {
			this.sendReply("You forgot the comma.");
			return this.parse('/help tell');
		}

		if (targetUser && targetUser.connected) {
			return this.parse('/pm ' + this.targetUsername + ', ' + target);
		}

		if (user.locked) return this.popupReply("You may not send offline messages when locked.");
		if (target.length > 255) return this.popupReply("Your message is too long to be sent as an offline message (>255 characters).");

		if (Config.tellrank === 'autoconfirmed' && !user.autoconfirmed) {
			return this.popupReply("You must be autoconfirmed to send an offline message.");
		} else if (!Config.tellrank || Config.groupsranking.indexOf(user.group) < Config.groupsranking.indexOf(Config.tellrank)) {
			return this.popupReply("You cannot send an offline message because offline messaging is " +
				(!Config.tellrank ? "disabled" : "only available to users of rank " + Config.tellrank + " and above") + ".");
		}

		let userid = toId(this.targetUsername);
		if (userid.length > 18) return this.popupReply("\"" + this.targetUsername + "\" is not a legal username.");

		let sendSuccess = Tells.addTell(user, userid, target);
		if (!sendSuccess) {
			if (sendSuccess === false) {
				return this.popupReply("User " + this.targetUsername + " has too many offline messages queued.");
			} else {
				return this.popupReply("You have too many outgoing offline messages queued. Please wait until some have been received or have expired.");
			}
		}
		return connection.send('|pm|' + user.getIdentity() + '|' +
			(targetUser ? targetUser.getIdentity() : ' ' + this.targetUsername) +
			"|/text This user is currently offline. Your message will be delivered when they are next online.");
	},
	tellhelp: ["/tell [username], [message] - Send a message to an offline user that will be received when they log in."],

	credits: function (target, room, user) {
		let color = require('../config/color'), hashColor = function(name, bold) {
			return (bold ? "<b>" : "") + "<font color=" + color(name) + ">" + (Users(name) && Users(name).connected && Users.getExact(name) ? Chat.escapeHTML(Users.getExact(name).name) : Chat.escapeHTML(name)) + "</font>" + (bold ? "</b>" : "");
		};
		this.popupReply("|html|" + "<font size=4><center><u><b>Dragon Heaven Credits!</b></u></center></font><br />" +
					"<u>Owner:</u><br />" +
					"- " + hashColor('Spandan', true) + " (Development)<br />" +
					"- " + hashColor('Snaquaza', true) + " (Sysadmin, Policy, Formats, Development)<br />" +
					"<br />" +
					"- " + hashColor('XpRienzo', true) + " (Founder, Sysadmin)<br />" +
										"<br />" +
					"<u>Development:</u><br />" +
					"- " + hashColor('charizard8888', true) + " (Development, Roomintros, HTML, CSS)<br/>" +
					"- " + hashColor('Nixola', true) + " (Host)<br />" +
					"<br />" +
					"<u>Contributors:</u><br />" +
					"- " + hashColor('ClassyZ', true) + " (DHSSB, Development)<br />" +
					"- " + hashColor('Eternal Mayhem', true) + " (Roomintros)<br />" +
					"- " + hashColor('LightiumZ', true) + " (Development)<br />" +
					"- " + hashColor('Ludicrousity', true) + " (Development)<br />" +
					"<br />" +
					"<u>Special Thanks:</u><br />" +
					"- Current staff team<br />" +
					"- Our regular users<br />");
	},
formc: function (target, room, user, connection, cmd) {
    if (!this.runBroadcast()) return;
    if (!target) return this.parse('/formchelp');
    if (!target) target = 'help';
    let separated = target.split("/");
	 let target1 = (("" + separated[0]).trim()).toLowerCase();
    let target2 = (("" + separated[1]).trim());
    let target3 = (("" + separated[2]).trim());
    let target4 = (("" + separated[3]).trim());
    let target5 = (("" + separated[4]).trim());
    let target6 = (("" + separated[5]).trim());
    let target7 = (("" + separated[6]).trim());
    let target8 = (("" + separated[7]).trim());
    let target9 = (("" + separated[8]).trim());
    let target10 = (("" + separated[9]).trim());
    let target11 = (("" + separated[10]).trim());
    let target12 = (("" + separated[11]).trim());
    let target13 = (("" + separated[12]).trim());
    let target14 = (("" + separated[13]).trim());
    let target15 = (("" + separated[14]));
    this.sendReplyBox('<center><button name="receive" value="|html|'+target1+': {<br>num: '+target2+',<br> species: &quot;'+target3+'&quot;,<br> baseSpecies: &quot;'+target4+'&quot;,<br> forme: &quot;'+target5+'&quot;,<br>formeLetter: &quot;'+target6+'&quot;, <br> types: [<b>&quot;'+target7+'&quot;</b>], <br>baseStats:{hp: '+target8+', atk: '+target9+', def: '+target10+', spa: '+target11+', spd: '+target12+', spe: '+target13+'},<br>abilities: {<b>'+target14+'</b>}, <br> weightkg: '+target15+', <br> }," style="background-color:black;color:aqua;font-size:36px;border: 6px solid aqua;">Generate</button></center><br><marquee direction="left"><img src="http://www.pokestadium.com/assets/img/sprites/misc/icons/charizard-mega-x.png" width="40" height="30"></marquee>');

	},
	formchelp:function (target, room, user, connection, cmd) {
	this.sendReplyBox('/formc name, Dex Num, Name, Base, Forme, Forme Letter, Types, HP, Atk, Def, SpA, SpD, Spe, Abilities, Weight <br> <b>name:</b> For the first name add no hypens so it should be like charizardmegax <br> <b>Dex Num</b> is the Dex Number <br><b>Name:</b> Now type the name as you want it to be seen in battle like Charizard-Mega-X <br> <b>Base:</b> is for the base forme which in this case is Charizard <br> <b>Forme:</b> Eternal / Alola in this case it is Mega <br> <b>Forme Letter:</b> M for Mega, E for Eternal, A for Alola <br> <b>Types:</b> If the mon is a monotyped Pokemon like Dugtrio - Ground then just type that in and move on but if it is dual typed like Megazard X type in Fire, Dragon and after getting the output make add &quot; after Fire and before Dragon (Dont do this before or the command show broken result) | It should look like this &quot;Fire&quot;, &quot;Dragon&quot; | Two of the quote marks would be already there <br> Then come the stats HP, Atk, Def, SpA, SpD, Spe <br><b>Abilties:</b> This is complex <br><b>Weight:</b> The mon&#39;s weight<br>Use / (Forwards Slash) as separator <br><br><b>Example:</b><br>/formc charizardmegax/6/Charizard-Mega-X/Charizard/Mega/M/Fire, Dragon/78/130/111/130/85/100/0: Tough Claws/110.5 <br><br>Hit Generate and we&#39;re good!<br>Contact <b><font color=#FFA000>charizard8888</font></b> or <b><font color=#AC33D1>Ludicrousity</font></b> for more info!');
},

monc: function (target, room, user, connection, cmd) {
    if (!this.runBroadcast()) return;
    if (!target) return this.parse('/monchelp');
    if (!target) target = 'help';
    let separated = target.split("/");
	 let target1 = (("" + separated[0]).trim()).toLowerCase();
    let target2 = (("" + separated[1]).trim());
    let target3 = (("" + separated[2]).trim());
    let target4 = (("" + separated[3]).trim());
    let target5 = (("" + separated[4]).trim());
    let target6 = (("" + separated[5]).trim());
    let target7 = (("" + separated[6]).trim());
    let target8 = (("" + separated[7]).trim());
    let target9 = (("" + separated[8]).trim());
    let target10 = (("" + separated[9]).trim());
    let target11 = (("" + separated[10]).trim());
    let target12 = (("" + separated[11]).trim());
    let target13 = (("" + separated[12]).trim());
    let target14 = (("" + separated[13]).trim());
    let target15 = (("" + separated[14]));
    this.sendReplyBox('<center><button name="receive" value="|html|'+target1+': {<br>num: '+target2+',<br> species: &quot;'+target3+'&quot;,<br> types: [<b>&quot;'+target4+'&quot;</b>], <br>baseStats:{hp: '+target5+', atk: '+target6+', def: '+target7+', spa: '+target8+', spd: '+target9+', spe: '+target10+'},<br>abilities: {<b>'+target11+'</b>}, <br> weightkg: '+target12+', <br> }," style="background-color:black;color:aqua;font-size:36px;border: 6px solid aqua;">Generate</button></center><br><marquee direction="left"><img src="http://www.pokestadium.com/assets/img/sprites/misc/icons/charizard-mega-x.png" width="40" height="30"></marquee>');

	},
monchelp:function (target, room, user, connection, cmd) {
	this.sendReplyBox('/monc name, Dex Num, Name, Types, HP, Atk, Def, SpA, SpD, Spe, Abilities, Weight <br> <b>name:</b> For the first name add no hypens so it should be like charizard <br> <b>Dex Num</b> is the Dex Number <br><b>Name:</b> Now type the name as you want it to be seen in battle like Charizard <br><b>Types:</b> If the mon is a monotyped Pokemon like Dugtrio - Ground then just type that in and move on but if it is dual typed like Zard type in Fire, Flying and after getting the output make add &quot; after Fire and before Flying (Dont do this before or the command show broken result) | It should look like this &quot;Fire&quot;, &quot;Flying&quot; | Two of the quote marks would be already there <br> Then come the stats HP, Atk, Def, SpA, SpD, Spe <br><b>Abilties:</b> This is complex <br><b>Weight:</b> The mon&#39;s weight <br>Use / (Forwards Slash) as separator <br><br><b>Example:</b><br>/monc charizard/6/Charizard/Fire, Flying/78/84/78/109/85/100/0: Blaze, H: Solar Power/90.5 <br><br>Hit Generate and we&#39;re good!<br>Contact <b><font color=#FFA000>charizard8888</font></b> or <b><font color=#AC33D1>Ludicrousity</font></b> for more info!');
},
	mfat: function (target, room, user, connection, cmd) {
    if (!this.runBroadcast()) return;
    if (!target) return this.parse('/mfathelp');
    if (!target) target = 'help';
    let separated = target.split(",");
	 let target1 = (("" + separated[0]).trim());
    let target2 = (("" + separated[0]).trim()).toLowerCase();
    let target3 = (("" + separated[1]).trim());
    let target4 = (("" + separated[2]).trim());
    let target5 = (("" + separated[3]).trim());
    let target6 = (("" + separated[4]).trim());
    let target7 = (("" + separated[5]).trim());
    let target8 = (("" + separated[6]).trim());
    let target9 = (("" + separated[7]).trim());
    let target10 = (("" + separated[8]).trim());
    let target11 = (("" + separated[9]).trim());
    let target12 = (("" + separated[10]).trim());
    let target13 = (("" + separated[11]).trim());
    let target14 = (("" + separated[12]).trim()).toUpperCase();
    let target15 = (("" + separated[13]));
    let target16 = (("" + separated[14]));
    let target17 = (("" + separated[15]));
    this.sendReplyBox('<center><button name="receive" value="|html|<a href=>pokedex.js</a><br><br>'+target2+'mega : {<br>num: '+target3+',<br> species: &quot;'+target1+'-Mega&quot;,<br> baseSpecies: &quot;'+target1+'&quot;,<br> forme: &quot;Mega&quot;,<br>formeLetter: &quot;M&quot;, <br> types: [&quot;'+target4+'&quot;, &quot;'+target5+'&quot;], <br>baseStats:{hp: '+target6+', atk: '+target7+', def: '+target8+', spa: '+target9+', spd: '+target10+', spe: '+target11+'},<br>abilities: {0: &quot;'+target12+'&quot;}, <br> weightkg: '+target13+', <br> };<br><br><a href=>items.js</a><br><br>&quot;'+target1+'ite: {<br>id:&quot;'+target1+'ite&quot;, <br>name:&quot;'+target2+'ite&quot;,<br>megaStone: &quot;'+target1+'-Mega&quot;, <br> megaEvolves: &quot;'+target1+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target1+', this item allows it to Mega Evolve in battle.&quot;,<br>}, <br><br><a href=>formats-data.js</a><br><br>'+target2+'mega: {<br>randomBattleMoves: [&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;,], <br>randomDoubleBattleMoves: [&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;,],<br>requiredItem: &quot;'+target2+'ite&quot;,<br>tier: &quot;'+target14+'&quot;,<br>}, <br><br><a href=>learnsets.js</a><br>'+target2+': {learnset: {<br>'+target15+': [&quot;7L1&quot;],<br>'+target16+': [&quot;7L1&quot;], <br> '+target17+': [&quot;7L1&quot;,]<br>}},,<br><br><a href=http://jsbeautifier.org/>jsbeautifier</a>" style="background-color:black;color:aqua;font-size:36px;border: 6px solid aqua;"><img src="http://play.pokemonshowdown.com/sprites/xyani/marshadow.gif" width="43" height="63">Generate<img src="http://play.pokemonshowdown.com/sprites/xyani/marshadow.gif" width="43" height="63"></button></center><br><marquee direction="left"><img src="http://www.pokestadium.com/assets/img/sprites/misc/icons/charizard-mega-x.png" width="40" height="30"></marquee>');

	},
	mfathelp:function (target, room, user, connection, cmd) {
	this.sendReplyBox('/mfat Pokemon, Dex#, Type 1, Type 2, HP, Atk, Def, SpA, SpD, Spe, Ability, Weight, Tier, New Move 1, New Move 2, New Move 3');
},
mfam: function (target, room, user, connection, cmd) {
    if (!this.runBroadcast()) return;
    if (!target) return this.parse('/mfamhelp');
    if (!target) target = 'help';
    let separated = target.split(",");
	 let target1 = (("" + separated[0]).trim());
    let target2 = (("" + separated[0]).trim()).toLowerCase();
    let target3 = (("" + separated[1]).trim());
    let target4 = (("" + separated[2]).trim());
    let target5 = (("" + separated[3]).trim());
    let target6 = (("" + separated[4]).trim());
    let target7 = (("" + separated[5]).trim());
    let target8 = (("" + separated[6]).trim());
    let target9 = (("" + separated[7]).trim());
    let target10 = (("" + separated[8]).trim());
    let target11 = (("" + separated[9]).trim());
    let target12 = (("" + separated[10]).trim());
    let target13 = (("" + separated[11]).trim()).toUpperCase();
    let target14 = (("" + separated[12]).trim());
    let target15 = (("" + separated[13]).trim());
    let target16 = (("" + separated[14]).trim());
    this.sendReplyBox('<center><button name="receive" value="|html|<a href=>pokedex.js</a><br><br>'+target2+'mega : {<br>num: '+target3+',<br> species: &quot;'+target1+'-Mega&quot;,<br> baseSpecies: &quot;'+target1+'&quot;,<br> forme: &quot;Mega&quot;,<br>formeLetter: &quot;M&quot;, <br> types: [&quot;'+target4+'&quot;], <br>baseStats:{hp: '+target5+', atk: '+target6+', def: '+target7+', spa: '+target8+', spd: '+target9+', spe: '+target10+'},<br>abilities: {0: &quot;'+target11+'&quot;}, <br> weightkg: '+target12+', <br> };<br><br><a href=>items.js</a><br><br>&quot;'+target1+'ite: {<br>id:&quot;'+target1+'ite&quot;, <br>name:&quot;'+target2+'ite&quot;,<br>megaStone: &quot;'+target1+'-Mega&quot;, <br> megaEvolves: &quot;'+target1+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target1+', this item allows it to Mega Evolve in battle.&quot;,<br>}, <br><br><a href=>formats-data.js</a><br><br>'+target2+'mega: {<br>randomBattleMoves: [&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;,], <br>randomDoubleBattleMoves: [&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;,],<br>requiredItem: &quot;'+target2+'ite&quot;,<br>tier: &quot;'+target13+'&quot;,<br>},<br><br> <a href=>learnsets.js</a><br>'+target2+': {learnset: {<br>'+target14+': [&quot;7L1&quot;],<br>'+target15+': [&quot;7L1&quot;], <br> '+target16+': [&quot;7L1&quot;,]<br>}} <br><br><a href=http://jsbeautifier.org/>jsbeautifier</a>" style="background-color:black;color:aqua;font-size:36px;border: 6px solid aqua;"><img src="http://play.pokemonshowdown.com/sprites/xyani/marshadow.gif" width="43" height="63">Generate<img src="http://play.pokemonshowdown.com/sprites/xyani/marshadow.gif" width="43" height="63"></button></center><br><marquee direction="left"><img src="http://www.pokestadium.com/assets/img/sprites/misc/icons/charizard-mega-x.png" width="40" height="30"></marquee>');

	},
	mfamhelp:function (target, room, user, connection, cmd) {
	this.sendReplyBox('/mfat Pokemon, Dex#, Type, HP, Atk, Def, SpA, SpD, Spe, Ability, Weight, Tier, New Move 1, New Move 2, New Move 3');
},
learnc: function (target, room, user, connection, cmd) {
    if (!this.runBroadcast()) return;
    if (!target) return this.parse('/learnchelp');
    if (!target) target = 'help';
    let separated = target.split(",");
	 let target1 = (("" + separated[0]).trim()).toLowerCase();
    let target2 = (("" + separated[1]).trim()).toLowerCase();
    let target3 = (("" + separated[2]).trim()).toLowerCase();
    let target4 = (("" + separated[3]).trim()).toLowerCase();
    let target5 = (("" + separated[4]).trim()).toLowerCase();
    let target6 = (("" + separated[5]).trim()).toLowerCase();
    let target7 = (("" + separated[6]).trim()).toLowerCase();
    let target8 = (("" + separated[7]).trim()).toLowerCase();
    let target9 = (("" + separated[8]).trim()).toLowerCase();
    let target10 = (("" + separated[9]).trim()).toLowerCase();
    let target11 = (("" + separated[10]).trim()).toLowerCase();
    let target12 = (("" + separated[11]).trim()).toLowerCase();
    let target13 = (("" + separated[12]).trim()).toLowerCase();
    let target14 = (("" + separated[13]).trim()).toLowerCase();
    let target15 = (("" + separated[14]).trim()).toLowerCase();
    let target16 = (("" + separated[15]).trim()).toLowerCase();
    let target17 = (("" + separated[16]).trim()).toLowerCase();
    let target18 = (("" + separated[17]).trim()).toLowerCase();
    let target19 = (("" + separated[18]).trim()).toLowerCase();
    let target20 = (("" + separated[19]).trim()).toLowerCase();
    let target21 = (("" + separated[20]).trim()).toLowerCase();
    let target22 = (("" + separated[21]).trim()).toLowerCase();
    let target23 = (("" + separated[22]).trim()).toLowerCase();
    let target24 = (("" + separated[23]).trim()).toLowerCase();
    let target25 = (("" + separated[24]).trim()).toLowerCase();
    let target26 = (("" + separated[25]).trim()).toLowerCase();
    let target27 = (("" + separated[26]).trim()).toLowerCase();
    let target28 = (("" + separated[27]).trim()).toLowerCase();
    let target29 = (("" + separated[28]).trim()).toLowerCase();
    let target30 = (("" + separated[29]).trim()).toLowerCase();
    let target31 = (("" + separated[30]).trim()).toLowerCase();
    let target32 = (("" + separated[31]).trim()).toLowerCase();
    let target33 = (("" + separated[32]).trim()).toLowerCase();
    let target34 = (("" + separated[33]).trim()).toLowerCase();
    let target35 = (("" + separated[34]).trim()).toLowerCase();
    let target36 = (("" + separated[35]).trim()).toLowerCase();
    let target37 = (("" + separated[36]).trim()).toLowerCase();
    let target38 = (("" + separated[37]).trim()).toLowerCase();
    let target39 = (("" + separated[38]).trim()).toLowerCase();
    let target40 = (("" + separated[39]).trim()).toLowerCase();
    let target41 = (("" + separated[40]).trim()).toLowerCase();
    let target42 = (("" + separated[41]).trim()).toLowerCase();
    let target43 = (("" + separated[42]).trim()).toLowerCase();
    let target44 = (("" + separated[43]).trim()).toLowerCase();
    let target45 = (("" + separated[44]).trim()).toLowerCase();
    let target46 = (("" + separated[45]).trim()).toLowerCase();
    let target47 = (("" + separated[46]).trim()).toLowerCase();
    let target48 = (("" + separated[47]).trim()).toLowerCase();
    let target49 = (("" + separated[48]).trim()).toLowerCase();
    let target50 = (("" + separated[49]).trim()).toLowerCase();
   this.sendReplyBox('<center><button name="receive" value="|html|'+target1+':{learnset: {<br>'+target2+': [&quot;7L1&quot;],<br>'+target3+': [&quot;7L1&quot;],<br>'+target4+': [&quot;7L1&quot;],<br>'+target5+': [&quot;7L1&quot;],<br>'+target6+': [&quot;7L1&quot;],<br>'+target7+': [&quot;7L1&quot;],<br>'+target8+': [&quot;7L1&quot;],<br>'+target9+': [&quot;7L1&quot;],<br>'+target10+': [&quot;7L1&quot;],<br>'+target11+': [&quot;7L1&quot;],<br>'+target12+': [&quot;7L1&quot;],<br>'+target13+': [&quot;7L1&quot;],<br>'+target14+': [&quot;7L1&quot;],<br>'+target15+': [&quot;7L1&quot;],<br>'+target16+': [&quot;7L1&quot;],<br>'+target17+': [&quot;7L1&quot;],<br>'+target18+': [&quot;7L1&quot;],<br>'+target19+': [&quot;7L1&quot;],<br>'+target20+': [&quot;7L1&quot;],<br>'+target21+': [&quot;7L1&quot;],<br>'+target22+': [&quot;7L1&quot;],<br>'+target23+': [&quot;7L1&quot;],<br>'+target24+': [&quot;7L1&quot;],<br>'+target25+': [&quot;7L1&quot;],<br>'+target26+': [&quot;7L1&quot;],<br>'+target27+': [&quot;7L1&quot;],<br>'+target28+': [&quot;7L1&quot;],<br>'+target29+': [&quot;7L1&quot;],<br>'+target30+': [&quot;7L1&quot;],<br>'+target31+': [&quot;7L1&quot;],<br>'+target32+': [&quot;7L1&quot;],<br>'+target33+': [&quot;7L1&quot;],<br>'+target34+': [&quot;7L1&quot;],<br>'+target35+': [&quot;7L1&quot;],<br>'+target36+': [&quot;7L1&quot;],<br>'+target37+': [&quot;7L1&quot;],<br>'+target38+': [&quot;7L1&quot;],<br>'+target39+': [&quot;7L1&quot;],<br>'+target40+': [&quot;7L1&quot;],<br>'+target41+': [&quot;7L1&quot;],<br>'+target42+': [&quot;7L1&quot;],<br>'+target43+': [&quot;7L1&quot;],<br>'+target44+': [&quot;7L1&quot;],<br>'+target45+': [&quot;7L1&quot;],<br>'+target46+': [&quot;7L1&quot;],<br>'+target47+': [&quot;7L1&quot;],<br>  }}," style="background-color:black;color:aqua;font-size:36px;border: 6px solid aqua;">Generate</button></center><br><marquee direction="left"><img src="http://www.pokestadium.com/assets/img/sprites/misc/icons/charizard-mega-x.png" width="40" height="30"></marquee>');

	},
learnchelp:function (target, room, user, connection, cmd) {
	this.sendReplyBox('/><br>Hit Generate, copy paste in the doc, remove the additional slots of undefined <b> and we&#39;re good!<br>Contact <b><font color=#FFA000>charizard8888</font></b> or <b><font color=#AC33D1>Ludicrousity</font></b> for more info!');
}, 

fdjs: function (target, room, user, connection, cmd) {
    if (!this.runBroadcast()) return;
    if (!target) return this.parse('/fdjshelp');
    if (!target) target = 'help';
    let separated = target.split(",");
	 let target1 = (("" + separated[0]).trim()).toLowerCase();
    let target2 = (("" + separated[1]).trim()).toLowerCase();
    let target3 = (("" + separated[2]).trim()).toLowerCase();
    let target4 = (("" + separated[3]).trim()).toLowerCase();
    let target5 = (("" + separated[4]).trim()).toLowerCase();
    let target6 = (("" + separated[5]).trim()).toLowerCase();
    let target7 = (("" + separated[6]).trim()).toLowerCase();
    let target8 = (("" + separated[7]).trim()).toLowerCase();
    let target9 = (("" + separated[8]).trim()).toLowerCase();
    let target10 = (("" + separated[9]).trim()).toLowerCase();
    let target11 = (("" + separated[10]).trim()).toLowerCase();
    let target12 = (("" + separated[11]).trim()).toLowerCase();
    let target13 = (("" + separated[12]).trim()).toLowerCase();
    let target14 = (("" + separated[13]).trim()).toLowerCase();
    let target15 = (("" + separated[14]).trim()).toLowerCase();
    let target16 = (("" + separated[15]).trim()).toLowerCase();
    let target17 = (("" + separated[16]).trim()).toLowerCase();
    let target18 = (("" + separated[17]).trim()).toLowerCase();
    let target19 = (("" + separated[18]).trim()).toLowerCase();
    let target20 = (("" + separated[19]).trim()).toLowerCase();
    let target21 = (("" + separated[20]).trim()).toLowerCase();
    let target22 = (("" + separated[21]).trim()).toLowerCase();
    let target23 = (("" + separated[22]).trim()).toLowerCase();
    let target24 = (("" + separated[23]).trim()).toLowerCase();
    let target25 = (("" + separated[24]).trim()).toLowerCase();
    let target26 = (("" + separated[25]).trim()).toLowerCase();
    let target27 = (("" + separated[26]).trim()).toLowerCase();
    let target28 = (("" + separated[27]).trim()).toLowerCase();
    let target29 = (("" + separated[28]).trim()).toLowerCase();
    let target30 = (("" + separated[29]).trim()).toLowerCase();
    let target31 = (("" + separated[30]).trim()).toLowerCase();
    let target32 = (("" + separated[31]).trim()).toLowerCase();
    let target33 = (("" + separated[32]).trim()).toLowerCase();
    let target34 = (("" + separated[33]).trim()).toLowerCase();
    let target35 = (("" + separated[34]).trim()).toLowerCase();
    let target36 = (("" + separated[35]).trim()).toLowerCase();
    let target37 = (("" + separated[36]).trim()).toLowerCase();
    let target38 = (("" + separated[37]).trim()).toLowerCase();
    let target39 = (("" + separated[38]).trim()).toLowerCase();
    let target40 = (("" + separated[39]).trim()).toLowerCase();
    let target41 = (("" + separated[40]).trim()).toLowerCase();
    let target42 = (("" + separated[41]).trim()).toLowerCase();
    let target43 = (("" + separated[42]).trim()).toLowerCase();
    let target44 = (("" + separated[43]).trim()).toLowerCase();
    let target45 = (("" + separated[44]).trim()).toLowerCase();
    let target46 = (("" + separated[45]).trim()).toLowerCase();
    let target47 = (("" + separated[46]).trim()).toLowerCase();
    let target48 = (("" + separated[47]).trim()).toLowerCase();
    let target49 = (("" + separated[48]).trim()).toLowerCase();
    let target50 = (("" + separated[49]).trim()).toLowerCase();
 this.sendReplyBox('<center><button name="receive" value="|html|'+target1+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target2+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target3+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target4+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target5+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target6+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target7+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target8+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target9+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target10+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target11+': {<br>tier: &quot;OU&quot;,<br>},'+target12+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target13+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target14+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target15+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target16+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target17+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target18+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target19+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target20+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target21+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target22+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target23+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target24+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target25+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target26+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target27+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target28+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target29+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target30+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target31+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target32+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target33+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target34+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target35+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target36+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target37+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target38+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target39+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target40+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target41+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target42+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target43+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target44+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target45+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target46+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target47+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target48+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target49+': {<br>tier: &quot;OU&quot;,<br>},<br>'+target50+': {<br>tier: &quot;OU&quot;,<br>}," style="background-color:black;color:aqua;font-size:36px;border: 6px solid aqua;">Generate</button></center><br><marquee direction="left"><img src="http://www.pokestadium.com/assets/img/sprites/misc/icons/charizard-mega-x.png" width="40" height="30"></marquee>');
	},
fdjshelp:function (target, room, user, connection, cmd) {
	this.sendReplyBox('/fdjs <br>Hit Generate, copy paste in the doc, remove the additional slots of undefined <b> and we&#39;re good!<br>Contact <b><font color=#FFA000>charizard8888</font></b> or <b><font color=#AC33D1>Ludicrousity</font></b> for more info!');
},
	mite: function (target, room, user, connection, cmd) {
    if (!this.runBroadcast()) return;
    if (!target) return this.parse('/mitehelp');
    if (!target) target = 'help';
    let separated = target.split(",");
	let target1 = (("" + separated[0]).trim());
    let target2 = (("" + separated[1]).trim());
    let target3 = (("" + separated[2]).trim());
    let target4 = (("" + separated[3]).trim());
    let target5 = (("" + separated[4]).trim());
    let target6 = (("" + separated[5]).trim());
    let target7 = (("" + separated[6]).trim());
    let target8 = (("" + separated[7]).trim());
    let target9 = (("" + separated[8]).trim());
    let target10 = (("" + separated[9]).trim());
    let target11 = (("" + separated[10]).trim());
    let target12 = (("" + separated[11]).trim());
    let target13 = (("" + separated[12]).trim());
    let target14 = (("" + separated[13]).trim());
    let target15 = (("" + separated[14]).trim());
    let target16 = (("" + separated[15]).trim());
    let target17 = (("" + separated[16]).trim());
    let target18 = (("" + separated[17]).trim());
    let target19 = (("" + separated[18]).trim());
    let target20 = (("" + separated[19]).trim());
    let target21 = (("" + separated[20]).trim());
    let target22 = (("" + separated[21]).trim());
    let target23 = (("" + separated[22]).trim());
    let target24 = (("" + separated[23]).trim());
    let target25 = (("" + separated[24]).trim());
    let target26 = (("" + separated[25]).trim());
    let target27 = (("" + separated[26]).trim());
    let target28 = (("" + separated[27]).trim());
    let target29 = (("" + separated[28]).trim());
    let target30 = (("" + separated[29]).trim());
   this.sendReplyBox('<center><button name="receive" value="|html|&quot;'+target1+'ite&quot;: {<br>id:&quot;'+target1+'ite&quot;, <br>name:&quot;'+target2+'ite&quot;,<br>spritenum: 594,<br><br>megaStone: &quot;'+target1+'-Mega&quot;, <br> megaEvolves: &quot;'+target1+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target1+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target2+'ite&quot;: {<br>id:&quot;'+target2+'ite&quot;, <br>name:&quot;'+target2+'ite&quot;,<br>spritenum: 594,<br><br>megaStone: &quot;'+target2+'-Mega&quot;, <br> megaEvolves: &quot;'+target2+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target2+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target3+'ite&quot;: {<br>id:&quot;'+target3+'ite&quot;, <br>name:&quot;'+target3+'ite&quot;,<br>spritenum: 594,<br><br>megaStone: &quot;'+target3+'-Mega&quot;, <br> megaEvolves: &quot;'+target3+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target3+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target4+'ite&quot;: {<br>id:&quot;'+target4+'ite&quot;, <br>name:&quot;'+target4+'ite&quot;,<br>spritenum: 594,<br><br>megaStone: &quot;'+target4+'-Mega&quot;, <br> megaEvolves: &quot;'+target4+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target4+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target5+'ite&quot;: {<br>id:&quot;'+target5+'ite&quot;, <br>name:&quot;'+target5+'ite&quot;,<br>spritenum: 595,<br><br>megaStone: &quot;'+target5+'-Mega&quot;, <br> megaEvolves: &quot;'+target5+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target5+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target6+'ite&quot;: {<br>id:&quot;'+target6+'ite&quot;, <br>name:&quot;'+target6+'ite&quot;,<br>spritenum: 696,<br><br>megaStone: &quot;'+target6+'-Mega&quot;, <br> megaEvolves: &quot;'+target6+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target6+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target7+'ite&quot;: {<br>id:&quot;'+target7+'ite&quot;, <br>name:&quot;'+target7+'ite&quot;,<br> <br><br>megaStone: &quot;'+target7+'-Mega&quot;, <br> megaEvolves: &quot;'+target7+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target7+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target8+'ite&quot;: {<br>id:&quot;'+target8+'ite&quot;, <br>name:&quot;'+target8+'ite&quot;,<br> <br><br>megaStone: &quot;'+target8+'-Mega&quot;, <br> megaEvolves: &quot;'+target8+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target8+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target9+'ite&quot;: {<br>id:&quot;'+target9+'ite&quot;, <br>name:&quot;'+target9+'ite&quot;,<br> <br><br>megaStone: &quot;'+target9+'-Mega&quot;, <br> megaEvolves: &quot;'+target9+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target9+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target10+'ite&quot;: {<br>id:&quot;'+target10+'ite&quot;, <br>name:&quot;'+target10+'ite&quot;,<br> <br><br>megaStone: &quot;'+target10+'-Mega&quot;, <br> megaEvolves: &quot;'+target10+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target10+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target11+'ite&quot;: {<br>id:&quot;'+target11+'ite&quot;, <br>name:&quot;'+target11+'ite&quot;,<br> <br><br>megaStone: &quot;'+target11+'-Mega&quot;, <br> megaEvolves: &quot;'+target11+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target11+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target12+'ite&quot;: {<br>id:&quot;'+target12+'ite&quot;, <br>name:&quot;'+target12+'ite&quot;,<br> <br><br>megaStone: &quot;'+target12+'-Mega&quot;, <br> megaEvolves: &quot;'+target12+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target12+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target13+'ite&quot;: {<br>id:&quot;'+target13+'ite&quot;, <br>name:&quot;'+target13+'ite&quot;,<br> <br><br>megaStone: &quot;'+target13+'-Mega&quot;, <br> megaEvolves: &quot;'+target13+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target13+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target14+'ite&quot;: {<br>id:&quot;'+target14+'ite&quot;, <br>name:&quot;'+target14+'ite&quot;,<br> <br><br>megaStone: &quot;'+target14+'-Mega&quot;, <br> megaEvolves: &quot;'+target14+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target14+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target15+'ite&quot;: {<br>id:&quot;'+target15+'ite&quot;, <br>name:&quot;'+target15+'ite&quot;,<br> <br><br>megaStone: &quot;'+target15+'-Mega&quot;, <br> megaEvolves: &quot;'+target15+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target15+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target16+'ite&quot;: {<br>id:&quot;'+target16+'ite&quot;, <br>name:&quot;'+target16+'ite&quot;,<br> <br><br>megaStone: &quot;'+target16+'-Mega&quot;, <br> megaEvolves: &quot;'+target16+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target16+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target17+'ite&quot;: {<br>id:&quot;'+target17+'ite&quot;, <br>name:&quot;'+target17+'ite&quot;,<br> <br><br>megaStone: &quot;'+target17+'-Mega&quot;, <br> megaEvolves: &quot;'+target17+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target17+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target18+'ite&quot;: {<br>id:&quot;'+target18+'ite&quot;, <br>name:&quot;'+target18+'ite&quot;,<br> <br><br>megaStone: &quot;'+target18+'-Mega&quot;, <br> megaEvolves: &quot;'+target18+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target18+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target19+'ite&quot;: {<br>id:&quot;'+target19+'ite&quot;, <br>name:&quot;'+target19+'ite&quot;,<br> <br><br>megaStone: &quot;'+target19+'-Mega&quot;, <br> megaEvolves: &quot;'+target19+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target19+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target20+'ite&quot;: {<br>id:&quot;'+target20+'ite&quot;, <br>name:&quot;'+target20+'ite&quot;,<br> <br><br>megaStone: &quot;'+target20+'-Mega&quot;, <br> megaEvolves: &quot;'+target20+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target20+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target21+'ite&quot;: {<br>id:&quot;'+target21+'ite&quot;, <br>name:&quot;'+target21+'ite&quot;,<br> <br><br>megaStone: &quot;'+target21+'-Mega&quot;, <br> megaEvolves: &quot;'+target21+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target21+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target22+'ite&quot;: {<br>id:&quot;'+target22+'ite&quot;, <br>name:&quot;'+target22+'ite&quot;,<br> <br><br>megaStone: &quot;'+target22+'-Mega&quot;, <br> megaEvolves: &quot;'+target22+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target22+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target23+'ite&quot;: {<br>id:&quot;'+target23+'ite&quot;, <br>name:&quot;'+target23+'ite&quot;,<br> <br><br>megaStone: &quot;'+target23+'-Mega&quot;, <br> megaEvolves: &quot;'+target23+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target23+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target24+'ite&quot;: {<br>id:&quot;'+target24+'ite&quot;, <br>name:&quot;'+target24+'ite&quot;,<br> <br><br>megaStone: &quot;'+target24+'-Mega&quot;, <br> megaEvolves: &quot;'+target24+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target24+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target25+'ite&quot;: {<br>id:&quot;'+target25+'ite&quot;, <br>name:&quot;'+target25+'ite&quot;,<br> <br><br>megaStone: &quot;'+target25+'-Mega&quot;, <br> megaEvolves: &quot;'+target25+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target25+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target26+'ite&quot;: {<br>id:&quot;'+target26+'ite&quot;, <br>name:&quot;'+target26+'ite&quot;,<br> <br><br>megaStone: &quot;'+target26+'-Mega&quot;, <br> megaEvolves: &quot;'+target26+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target26+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target27+'ite&quot;: {<br>id:&quot;'+target27+'ite&quot;, <br>name:&quot;'+target27+'ite&quot;,<br> <br><br>megaStone: &quot;'+target27+'-Mega&quot;, <br> megaEvolves: &quot;'+target27+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target27+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target28+'ite&quot;: {<br>id:&quot;'+target28+'ite&quot;, <br>name:&quot;'+target28+'ite&quot;,<br> <br><br>megaStone: &quot;'+target28+'-Mega&quot;, <br> megaEvolves: &quot;'+target28+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target28+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target29+'ite&quot;: {<br>id:&quot;'+target29+'ite&quot;, <br>name:&quot;'+target29+'ite&quot;,<br> <br><br>megaStone: &quot;'+target29+'-Mega&quot;, <br> megaEvolves: &quot;'+target29+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target29+', this item allows it to Mega Evolve in battle.&quot;,<br>},<br>&quot;'+target30+'ite&quot;: {<br>id:&quot;'+target30+'ite&quot;, <br>name:&quot;'+target30+'ite&quot;,<br> <br><br>megaStone: &quot;'+target30+'-Mega&quot;, <br> megaEvolves: &quot;'+target30+'&quot;,<br>onTakeItem: function (item, source) {<br>if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;<br>return true;<br>},<br>gen: 6,<br>desc: &quot;If holder is a '+target30+', this item allows it to Mega Evolve in battle.&quot;,<br>}, <br><br><a href=http://jsbeautifier.org/>jsbeautifier</a>" style="background-color:black;color:aqua;font-size:36px;border: 6px solid aqua;"><img src="http://play.pokemonshowdown.com/sprites/xyani/lucario-mega.gif" width="58" height="101">Generate<img src="http://play.pokemonshowdown.com/sprites/xyani/lucario-mega.gif" width="58" height="101"></button></center><br><marquee direction="left"><img src="http://www.pokestadium.com/assets/img/sprites/misc/icons/charizard-mega-x.png" width="40" height="30"></marquee>');

	},
	mitehelp:function (target, room, user, connection, cmd) {
	this.sendReplyBox('/mite Mega Pokemon 1, 2, 3... for coding mega stones.');
},
	mdjs: function (target, room, user, connection, cmd) {
    if (!this.runBroadcast()) return;
    if (!target) return this.parse('/mdjshelp');
    if (!target) target = 'help';
    let separated = target.split(",");
	let target1 = (("" + separated[0]).trim());
    let target2 = (("" + separated[1]).trim());
    let target3 = (("" + separated[2]).trim());
    let target4 = (("" + separated[3]).trim());
    let target5 = (("" + separated[4]).trim());
    let target6 = (("" + separated[5]).trim());
    let target7 = (("" + separated[6]).trim());
    let target8 = (("" + separated[7]).trim());
    let target9 = (("" + separated[8]).trim());
    let target10 = (("" + separated[9]).trim());
    let target11 = (("" + separated[10]).trim());
    let target12 = (("" + separated[11]).trim());
    let target13 = (("" + separated[12]).trim());
    let target14 = (("" + separated[13]).trim());
    let target15 = (("" + separated[14]).trim());
    let target16 = (("" + separated[15]).trim());
    let target17 = (("" + separated[16]).trim());
    let target18 = (("" + separated[17]).trim());
    let target19 = (("" + separated[18]).trim());
    let target20 = (("" + separated[19]).trim());
    let target21 = (("" + separated[20]).trim());
    let target22 = (("" + separated[21]).trim());
    let target23 = (("" + separated[22]).trim());
    let target24 = (("" + separated[23]).trim());
    let target25 = (("" + separated[24]).trim());
    let target26 = (("" + separated[25]).trim());
    let target27 = (("" + separated[26]).trim());
    let target28 = (("" + separated[27]).trim());
    let target29 = (("" + separated[28]).trim());
    let target30 = (("" + separated[29]).trim());
    let target31 = (("" + separated[30]).trim());
    let target32 = (("" + separated[31]).trim());
    let target33 = (("" + separated[32]).trim());
    let target34 = (("" + separated[33]).trim());
    let target35 = (("" + separated[34]).trim());
    let target36 = (("" + separated[35]).trim());
    let target37 = (("" + separated[36]).trim());
    let target38 = (("" + separated[37]).trim());
    let target39 = (("" + separated[38]).trim());
    let target40 = (("" + separated[39]).trim());
    let target41 = (("" + separated[40]).trim());
    let target42 = (("" + separated[41]).trim());
    let target43 = (("" + separated[42]).trim());
    let target44 = (("" + separated[43]).trim());
    let target45 = (("" + separated[44]).trim());
    let target46 = (("" + separated[45]).trim());
    let target47 = (("" + separated[46]).trim());
    let target48 = (("" + separated[47]).trim());
    let target49 = (("" + separated[48]).trim());
    let target50 = (("" + separated[49]).trim());
   this.sendReplyBox('<center><button name="receive" value="|html|requiredItem: &quot;'+target1+'ite&quot;,<br>requiredItem: &quot;'+target2+'ite&quot;,<br>requiredItem: &quot;'+target3+'ite&quot;,<br>requiredItem: &quot;'+target4+'ite&quot;,<br>requiredItem: &quot;'+target5+'ite&quot;,<br>requiredItem: &quot;'+target6+'ite&quot;,<br>requiredItem: &quot;'+target7+'ite&quot;,<br>requiredItem: &quot;'+target8+'ite&quot;,<br>requiredItem: &quot;'+target9+'ite&quot;,<br>requiredItem: &quot;'+target10+'ite&quot;,<br>requiredItem: &quot;'+target11+'ite&quot;,<br>requiredItem: &quot;'+target12+'ite&quot;,<br>requiredItem: &quot;'+target13+'ite&quot;,<br>requiredItem: &quot;'+target14+'ite&quot;,<br>requiredItem: &quot;'+target15+'ite&quot;,<br>requiredItem: &quot;'+target16+'ite&quot;,<br>requiredItem: &quot;'+target17+'ite&quot;,<br>requiredItem: &quot;'+target18+'ite&quot;,<br>requiredItem: &quot;'+target19+'ite&quot;,<br>requiredItem: &quot;'+target20+'ite&quot;,<br>requiredItem: &quot;'+target21+'ite&quot;,<br>requiredItem: &quot;'+target22+'ite&quot;,<br>requiredItem: &quot;'+target23+'ite&quot;,<br>requiredItem: &quot;'+target24+'ite&quot;,<br>requiredItem: &quot;'+target25+'ite&quot;,<br>requiredItem: &quot;'+target26+'ite&quot;,<br>requiredItem: &quot;'+target27+'ite&quot;,<br>requiredItem: &quot;'+target28+'ite&quot;,<br>requiredItem: &quot;'+target29+'ite&quot;,<br>requiredItem: &quot;'+target30+'ite&quot;,<br>requiredItem: &quot;'+target31+'ite&quot;,<br>requiredItem: &quot;'+target32+'ite&quot;,<br>requiredItem: &quot;'+target33+'ite&quot;,<br>requiredItem: &quot;'+target34+'ite&quot;,<br>requiredItem: &quot;'+target35+'ite&quot;,<br>requiredItem: &quot;'+target36+'ite&quot;,<br>requiredItem: &quot;'+target37+'ite&quot;,<br>requiredItem: &quot;'+target38+'ite&quot;,<br>requiredItem: &quot;'+target39+'ite&quot;,<br>requiredItem: &quot;'+target40+'ite&quot;,<br>requiredItem: &quot;'+target41+'ite&quot;,<br>requiredItem: &quot;'+target42+'ite&quot;,<br>requiredItem: &quot;'+target43+'ite&quot;,<br>requiredItem: &quot;'+target44+'ite&quot;,<br>requiredItem: &quot;'+target45+'ite&quot;,<br>requiredItem: &quot;'+target46+'ite&quot;,<br>requiredItem: &quot;'+target47+'ite&quot;,<br>requiredItem: &quot;'+target48+'ite&quot;,<br>requiredItem: &quot;'+target49+'ite&quot;,<br>requiredItem: &quot;'+target50+'ite&quot;, <br><br><a href=http://jsbeautifier.org/>jsbeautifier</a>" style="background-color:black;color:aqua;font-size:36px;border: 6px solid aqua;"><img src="http://play.pokemonshowdown.com/sprites/xyani/lucario-mega.gif" width="58" height="101">Generate<img src="http://play.pokemonshowdown.com/sprites/xyani/lucario-mega.gif" width="58" height="101"></button></center><br><marquee direction="left"><img src="http://www.pokestadium.com/assets/img/sprites/misc/icons/charizard-mega-x.png" width="40" height="30"></marquee>');

	},

	mdjshelp:function (target, room, user, connection, cmd) {
	this.sendReplyBox('/mdjs Mega Pokemon 1, 2, 3... for coding mega stones requirement in formats-data.js.');
},
	movesdis: function (target, room, user, connection, cmd) {
    if (!this.runBroadcast()) return;
    if (!target) return this.parse('/learnchelp');
    if (!target) target = 'help';
    let separated = target.split(",");
	let separated2 = target.split(" ");
let move = (("" + separated2[0]).trim()).toLowerCase();
	//let move = 'replacethis';
let pokemon1 = (("" + separated[2]).trim()).toLowerCase();
let pokemon2 = (("" + separated[1]).trim()).toLowerCase();
let pokemon3 = (("" + separated[2]).trim()).toLowerCase();
let pokemon4 = (("" + separated[3]).trim()).toLowerCase();
let pokemon5 = (("" + separated[4]).trim()).toLowerCase();
let pokemon6 = (("" + separated[5]).trim()).toLowerCase();
let pokemon7 = (("" + separated[6]).trim()).toLowerCase();
let pokemon8 = (("" + separated[7]).trim()).toLowerCase();
let pokemon9 = (("" + separated[8]).trim()).toLowerCase();
let pokemon10 = (("" + separated[9]).trim()).toLowerCase();
let pokemon11 = (("" + separated[10]).trim()).toLowerCase();
let pokemon12 = (("" + separated[11]).trim()).toLowerCase();
let pokemon13 = (("" + separated[12]).trim()).toLowerCase();
let pokemon14 = (("" + separated[13]).trim()).toLowerCase();
let pokemon15= (("" + separated[14]).trim()).toLowerCase();
let pokemon16= (("" + separated[15]).trim()).toLowerCase();
let pokemon17= (("" + separated[16]).trim()).toLowerCase();
let pokemon18 = (("" + separated[17]).trim()).toLowerCase();
let pokemon19 = (("" + separated[18]).trim()).toLowerCase();
let pokemon20 = (("" + separated[19]).trim()).toLowerCase();
let pokemon21 = (("" + separated[20]).trim()).toLowerCase();
let pokemon22 = (("" + separated[21]).trim()).toLowerCase();
let pokemon23= (("" + separated[22]).trim()).toLowerCase();
let pokemon24 = (("" + separated[23]).trim()).toLowerCase();
let pokemon25 = (("" + separated[24]).trim()).toLowerCase();
let pokemon26 = (("" + separated[25]).trim()).toLowerCase();
let pokemon27 = (("" + separated[26]).trim()).toLowerCase();
let pokemon28 = (("" + separated[27]).trim()).toLowerCase();
let pokemon29 = (("" + separated[28]).trim()).toLowerCase();
let pokemon30= (("" + separated[29]).trim()).toLowerCase();
let pokemon31 = (("" + separated[30]).trim()).toLowerCase();
let pokemon32= (("" + separated[31]).trim()).toLowerCase();
let pokemon33= (("" + separated[32]).trim()).toLowerCase();
let pokemon34= (("" + separated[33]).trim()).toLowerCase();
let pokemon35= (("" + separated[34]).trim()).toLowerCase();
let pokemon36= (("" + separated[35]).trim()).toLowerCase();
let pokemon37 = (("" + separated[36]).trim()).toLowerCase();
let pokemon38= (("" + separated[37]).trim()).toLowerCase();
let pokemon39 = (("" + separated[38]).trim()).toLowerCase();
let pokemon40 = (("" + separated[39]).trim()).toLowerCase();
let pokemon41 = (("" + separated[40]).trim()).toLowerCase();
let pokemon42 = (("" + separated[41]).trim()).toLowerCase();
let pokemon43= (("" + separated[42]).trim()).toLowerCase();
let pokemon44= (("" + separated[43]).trim()).toLowerCase();
let pokemon45= (("" + separated[44]).trim()).toLowerCase();
let pokemon46= (("" + separated[45]).trim()).toLowerCase();
let pokemon47 = (("" + separated[46]).trim()).toLowerCase();
let pokemon48= (("" + separated[47]).trim()).toLowerCase();
let pokemon49 = (("" + separated[48]).trim()).toLowerCase();
let pokemon50= (("" + separated[49]).trim()).toLowerCase();
  this.sendReplyBox('<center>"&sol;&sol; '+move+'<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon1+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon2+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon3+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon4+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon5+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon6+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon7+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon8+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon9+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon10+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon11+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon12+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon13+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon14+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon15+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon16+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon17+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon18+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon19+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon20+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon21+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon22+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon23+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon24+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon25+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon26+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon27+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon28+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon29+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon30+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon31+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon32+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon33+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon34+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon35+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon36+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon37+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon38+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon39+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon40+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon41+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon42+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon43+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon44+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon45+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon46+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon47+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon48+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon49+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];<br>this.modData(&#39;Learnsets&#39;, &#39;'+pokemon50+'&#39;).learnset.'+move+' = [&#39;7L1&#39;];"');
	},
movesdishelp:function (target, room, user, connection, cmd) {
	this.sendReplyBox('Movesets coding!');
}, 
};
