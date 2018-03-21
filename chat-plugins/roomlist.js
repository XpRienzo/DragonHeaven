'use strict'

exports.commands = {
    roomlist: function (target, room, user) {
		if (!this.can('pban')) return;

		let header = ['<b><font color="#b30000" size="2">Total users connected: ' + Rooms.global.userCount + '</font></b><br />'];
		let official = ['<b><font color="#1a5e00" size="2">Official chat rooms:</font></b><br />'];
		let nonOfficial = ['<hr><b><font color="#000b5e" size="2">Public chat rooms:</font></b><br />'];
		let privateRoom = ['<hr><b><font color="#ff5cb6" size="2">Private chat rooms:</font></b><br />'];
		let groupChats = ['<hr><b><font color="#740B53" size="2">Group Chats:</font></b><br />'];
		let battleRooms = ['<hr><b><font color="#0191C6" size="2">Battle Rooms:</font></b><br />'];

		let rooms = [];

		Rooms.rooms.forEach(curRoom => {
			rooms.push(curRoom.id);
		});

		rooms.sort(function (a, b) {
			if (!Rooms(a) || !Rooms(b)) return false;
			return Number(Rooms(b).userCount) - Number(Rooms(a).userCount);
		});

		for (let u in rooms) {
			let curRoom = Rooms(rooms[u]);
			if (!curRoom || rooms[u] === 'global') continue;
			if (curRoom.type === 'battle') {
				battleRooms.push('<a href="/' + curRoom.id + '" class="ilink">' + Chat.escapeHTML(curRoom.title) + '</a> (' + curRoom.userCount + ')');
			}
			if (curRoom.type === 'chat') {
				if (curRoom.isPersonal) {
					groupChats.push('<a href="/' + curRoom.id + '" class="ilink">' + curRoom.id + '</a> (' + curRoom.userCount + ')');
					continue;
				}
				if (curRoom.isOfficial) {
					official.push('<a href="/' + toId(curRoom.title) + '" class="ilink">' + Chat.escapeHTML(curRoom.title) + '</a> (' + curRoom.userCount + ')');
					continue;
				}
				if (curRoom.isPrivate) {
					privateRoom.push('<a href="/' + toId(curRoom.title) + '" class="ilink">' + Chat.escapeHTML(curRoom.title) + '</a> (' + curRoom.userCount + ')');
					continue;
				}
			}
			if (curRoom.type !== 'battle') nonOfficial.push('<a href="/' + toId(curRoom.title) + '" class="ilink">' + curRoom.title + '</a> (' + curRoom.userCount + ')');
		}
		this.sendReplyBox(header + official.join(' ') + nonOfficial.join(' ') + privateRoom.join(' ') + (groupChats.length > 1 ? groupChats.join(' ') : '') + (battleRooms.length > 1 ? battleRooms.join(' ') : ''));
	},
}
