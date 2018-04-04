/* +--------------------+
 * | Custom CSS builder |
 * +--------------------+
 * | Should hopefully   |
 * | build custom.css   |
 * | to support custom  |
 * | icons and colors   |
 * +--------------------+
 *
 * ~UnleashOurPassion
 * 04-04-2018
 */
 
let fs = require('fs');
UOP.CONFIG_PATH = "./config/"
UOP.usercolorstring = function (user) {
    let color = UOP.colors[user];
    return `li[id*="${user}"] strong em,[id*="${user}"] strong,[id*="${user}"] span {\n    color: ${color} !important;\n}\n.chat.chatmessage-${user} strong {\n    color: ${color} !important;\n}\n`
}

UOP.colors = JSON.parse(fs.readFileSync(UOP.CONFIG_PATH + "colors.json", "utf8"));

exports.buildCustomCss = function () {

    let base = fs.readFileSync("./config/custom-base.css", "utf8");
    let customcolors = "/*****************\n * Custom colors *\n *****************/\n";
    for (let user in UOP.colors) {
        customcolors += UOP.usercolorstring(user);
    }
    let fin = base + "\n\n" + customcolors;
    fs.writeFileSync("./config/custom.css", fin);
}