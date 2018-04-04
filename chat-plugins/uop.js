/* +------------------------+
 * |        UOP Utils       |
 * +------------------------+
 * | Stuff UOP needs in his |
 * |          life          |
 * +------------------------+
 * 
 * +------------------------+
 * | Custom Color Framework |
 * | (modified for DH)      |
 * +------------------------+
 * | Written: 13-03-2018    |
 * | Modified: 04-04-2018   |
 * +------------------------+
 */

fs = require("fs");

if (!UOP.colors) UOP.colors = {};

UOP.isColor = function(color) {
    color = color.toUpperCase();
    if (color === "DELETE") return "delete";
    validvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    
    color = color.replace(/\s/g, "");
    
    if (color.startsWith("#")) color = color.substring(1);
    if (color.length != 6 && color.length != 3) return false;
    let ret = "#"
    if (color.length === 3) {
        for (let c in color) {
            let letter = color[c]
            if (validvalues.indexOf(letter) === -1) return false;
            ret += letter;
            ret += letter;
        }
    }
    else {
        for (let c in color) {
            let letter = color[c]
            if (validvalues.indexOf(letter) === -1) return false;
            ret += letter;
        }
    }
    return ret;
}

exports.commands = {
    customcolour: 'customcolor',
    customcolor: function (target, room, user) {
		if (!this.can('addhtml')) return false;
		if (!target || target.indexOf(',') < 0) return this.parse('/help customcolor');

		let parts = target.split(',');
		let username = toId(parts[0]);
		let color = UOP.isColor(parts[1]);
        if (color === false) {
            return this.errorReply("Please input a valid hexadecimal color value");
        }
        if (color === "delete" && username in UOP.colors) delete UOP.colors[username];
        else UOP.colors[username] = color;
        fs.writeFileSync(UOP.CONFIG_PATH + "/colors.json", JSON.stringify(UOP.colors));
        csshelper.buildCustomCss();
	},
	customcolorhelp: [
        "/customcolor [user], [color] - Sets a custom username color for the specified user. Requires ~",
        "/customcolor [user], delete - Delete custom username color for a user. Requires ~"],
}
