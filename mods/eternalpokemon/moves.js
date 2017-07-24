'use strict';

exports.BattleMovedex = {
        "wrathofnature": {
            num: 20000,
            accuracy: 100,
            basePower: 100,
            category: "Physical",
            desc: "This move combines Fighting in its type effectiveness against the target.",
            shortDesc: "Combines Fighting in its type effectiveness.",
            id: "wrathofnature",
            name: "Wrath Of Nature",
            pp: 10,
            priority: 0,
            flags: {
                contact: 1,
                protect: 1,
                mirror: 1
            },
            onEffectiveness: function(typeMod, type, move) {
                return typeMod + this.getEffectiveness('Fighting', type);
            },
            critRatio: 0,
            secondary: false,
            target: "normal",
            type: "Grass",
            zMovePower: 180
        },
        "volcanicexplosion": {
            num: 20001,
            accuracy: 100,
            basePower: 140,
            category: "Special",
            desc: "Has a 50% chance to burn the target. Also Thaws the user.",
            shortDesc: "50% chance to burn the target. Thaws user.",
            id: "volcanicexplosion",
            name: "Volcanic Explosion",
            pp: 5,
            priority: 0,
            flags: {
                defrost: 1,
                distance: 1,
                protect: 1,
                mirror: 1
            },
        },
        critRatio: 0,
        secondary: false,
        target: "allAdjacent",
        type: "Fire",
        zMovePower: 200
    },
    "seenoevil": {
        num: 20002,
        accuracy: 100,
        basePower: 100,
        category: "Special",
        desc: "Has a 30% chance to lower the targets accuracy.",
        shortDesc: "30% chance to lower the targets accuracy.",
        id: "seenoevil",
        name: "See No Evil",
        pp: 10,
        priority: 0,
        flags: {
            protect: 1,
            mirror: 1
        },
    },
    critRatio: 0,
    secondary: {
        chance: 40,
        boosts: {
            accuracy: -1,
        },
    },
    target: "normal",
    type: "Water",
    zMovePower: 180
},
"gigavoltimpact":
num: 20003,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    defensiveCategory: "Special",
    desc: "Deals damage to the target based on its Special Defense instead of Defense.",
    shortDesc: "Damages target based on Sp. Def, not Defense.",
    id: "gigavoltimpact",
    name: "Gigavolt Impact",
    pp: 10,
    priority: 0,
    flags: {
        protect: 1,
        mirror: 1
    },
    critRatio: 0,
    secondary: false,
    target: "normal",
    type: "Electric",
    zMovePower: 180
},
"darkcrowdive": {
    num: 20005
    accuracy: 95,
    basePower: 150,
    category: "Physical",
    desc: "This move combines Flying in its type effectiveness against the target.",
    shortDesc: "combines Flying in its type effectiveness.",
    id: "darkcrowdive",
    name: "Dark Crow Dive",
    pp: 5,
    priority: 0,
    flags: {
        Contact: 1,
        Protect: 1,
        Mirror: 1
    },
    onEffectiveness: function(typeMod, type, move) {
        return typeMod + this.getEffectiveness('Flying', type);
    },
    critRatio: 0,
    secondary: false,
    target: "normal",
    type: "Dark",
    zMovePower: 200
},
};
