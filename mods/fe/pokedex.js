'use strict';

exports.BattlePokedex = {
swampert: {
		num: 260,
		species: "Swampert",
		types: ["Water", "Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60},
		abilities: {0: "Torrent", H: "Damp"},
		heightm: 1.5,
		weightkg: 81.9,
		color: "Blue",
		prevo: "marshtomp",
		evoLevel: 36,
		eggGroups: ["Monster", "Water 1"],
		otherFormes: ["swampertmega"],
	},
	malamar: {
		num: 687,
		species: "Malamar",
		types: ["Dark", "Psychic"],
		baseStats: {hp: 86, atk: 92, def: 88, spa: 68, spd: 75, spe: 73},
		abilities: {0: "Contrary", 1: "Suction Cups", H: "Infiltrator"},
		heightm: 1.5,
		weightkg: 47,
		color: "Blue",
		prevo: "inkay",
		evoLevel: 30,
		eggGroups: ["Water 1", "Water 2"],
	},
    swampamar: {
        num: 75001,
        species: "Swampamar",
        types: ["Dark", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 103,
            atk: 111,
            def: 99,
            spa: 86,
            spd: 92,
            spe: 76
        },
        abilities: {
            0: "Turnabout Torrent"
        },
        heightm: 1.5,
        weightkg: 64.45,
        color: "Black",
		  fusion: ["Swampert", "Malamar"],
        eggGroups: ["Undiscovered"],
    },
    swampamarmega: {
        num: 75001,
        species: "Swampamar-Mega",
        baseSpecies: "Swampamar",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Water"],
        baseStats: {
            hp: 103,
            atk: 151,
            def: 119,
            spa: 96,
            spd: 112,
            spe: 86
        },
        abilities: {
            0: "Swift Swim"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Blue",
        eggGroups: ["Water 2"],
    },
    gyarotic: {
        num: 75002,
        species: "Gyarotic",
        types: ["Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 105,
            atk: 102,
            def: 89,
            spa: 90,
            spd: 122,
            spe: 91
        },
        abilities: {
            0: "Intimidating Scales"
        },
        heightm: 6.35,
        weightkg: 198.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    gyaroticmega: {
        num: 75002,
        species: "Gyarotic-Mega",
        baseSpecies: "Gyarotic",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 105,
            atk: 132,
            def: 119,
            spa: 100,
            spd: 152,
            spe: 91
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Blue",
        eggGroups: ["Water 2"],
    },
    azurninja: {
        num: 75003,
        species: "Azuninja",
        types: ["Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 96,
            atk: 82,
            def: 83,
            spa: 91,
            spd: 85,
            spe: 96
        },
        abilities: {
            0: "Huge Torrent"
        },
        heightm: 1.145,
        weightkg: 34.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    chandeform: {
        num: 75004,
        species: "Chandeform",
        types: ["Ghost", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 72,
            def: 90,
            spa: 117,
            spd: 90,
            spe: 85
        },
        abilities: {
            0: "Flash Weather"
        },
        heightm: 0.645,
        weightkg: 17.55,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mismatross: {
        num: 75005,
        species: "Mismatross",
        types: ["Electric", "Ghost"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 97,
            def: 80,
            spa: 115,
            spd: 102,
            spe: 87
        },
        abilities: {
            0: "Levitate"
        },
        heightm: 1.5,
        weightkg: 42.45,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    haxardos: {
        num: 75006,
        species: "Haxardos",
        types: ["Dragon", "Rock"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 96,
            atk: 166,
            def: 85,
            spa: 72,
            spd: 70,
            spe: 87
        },
        abilities: {
            0: "Intense Rivalry"
        },
        heightm: 1.7,
        weightkg: 104,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    pangleye: {
        num: 75007,
        species: "Pangleye",
        types: ["Fighting", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 109,
            def: 86,
            spa: 77,
            spd: 78,
            spe: 64
        },
        abilities: {
            0: "Molded Stall"
        },
        heightm: 1.31,
        weightkg: 73.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    pangleyemega: {
        num: 75007,
        species: "Pangleye-Mega",
        baseSpecies: "Pangleye-",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fighting", "Dark"],
        baseStats: {
            hp: 82,
            atk: 119,
            def: 136,
            spa: 97,
            spd: 128,
            spe: 34
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Human-Like"],
    },
    garchados: {
        num: 75008,
        species: "Garchados",
        types: ["Ground", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 111,
            atk: 137,
            def: 97,
            spa: 80,
            spd: 102,
            spe: 101
        },
        abilities: {
            0: "Intimidate + Sand Veil"
        },
        heightm: 4.205,
        weightkg: 165,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    garchadosmegax: {
        num: 75008,
        species: "Garchados-Mega-X",
        baseSpecies: "Garchados",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ground", "Water"],
        baseStats: {
            hp: 111,
            atk: 177,
            def: 117,
            spa: 120,
            spd: 112,
            spe: 91
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Dragon"],
    },
    garchadosmegay: {
        num: 75008,
        species: "Garchados-Mega-Y",
        baseSpecies: "Garchados",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 111,
            atk: 167,
            def: 127,
            spa: 90,
            spd: 132,
            spe: 101
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Dragon"],
    },
    wailcatty: {
        num: 75009,
        species: "Wailcatty",
        types: ["Normal", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 130,
            atk: 87,
            def: 65,
            spa: 82,
            spd: 60,
            spe: 75
        },
        abilities: {
            0: "Normal Veil"
        },
        heightm: 7.795,
        weightkg: 215.3,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    gargatr: {
        num: 750010,
        species: "Gargatr",
        types: ["Dragon", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 106,
            atk: 127,
            def: 107,
            spa: 89,
            spd: 94,
            spe: 100
        },
        abilities: {
            0: "Torrent Veil"
        },
        heightm: 2.11,
        weightkg: 91.9,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    gargatrmega: {
        num: 750010,
        species: "Gargatr-Mega",
        baseSpecies: "Gargatr",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Water"],
        baseStats: {
            hp: 106,
            atk: 167,
            def: 127,
            spa: 129,
            spd: 104,
            spe: 90
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Dragon"],
    },
    dragon: {
        num: 750011,
        species: "Dragon",
        types: ["Dark", "Poison"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 88,
            atk: 100,
            def: 100,
            spa: 121,
            spd: 116,
            spe: 81
        },
        abilities: {
            0: "Levipoison"
        },
        heightm: 1.8,
        weightkg: 120.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    hawlusharp: {
        num: 750012,
        species: "Hawlusharp",
        types: ["Fighting", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 81,
            atk: 118,
            def: 97,
            spa: 77,
            spd: 76,
            spe: 104
        },
        abilities: {
            0: "Armor Cast"
        },
        heightm: 1.195,
        weightkg: 45.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    cofagreelix: {
        num: 750013,
        species: "Cofagreelix",
        types: ["Steel", "Ghost"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 76,
            atk: 77,
            def: 182,
            spa: 85,
            spd: 95,
            spe: 40
        },
        abilities: {
            0: "Mummy Fortitude"
        },
        heightm: 5.445,
        weightkg: 238.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    cofagreelixmega: {
        num: 750013,
        species: "Cofagreelix-Mega",
        baseSpecies: "Cofagreelix",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 76,
            atk: 117,
            def: 212,
            spa: 85,
            spd: 125,
            spe: 40
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Mineral"],
    },
    joltlord: {
        num: 750014,
        species: "Joltlord",
        types: ["Electric", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 127,
            atk: 87,
            def: 62,
            spa: 110,
            spd: 80,
            spe: 105
        },
        abilities: {
            0: "Oblivious Absorb"
        },
        heightm: 7.645,
        weightkg: 211.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    vepsicor: {
        num: 750015,
        species: "Vepsicor",
        types: ["Bug", "Ground"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 97,
            def: 123,
            spa: 72,
            spd: 98,
            spe: 77
        },
        abilities: {
            0: "Sand Pressure"
        },
        heightm: 1.6,
        weightkg: 40.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    aggrodos: {
        num: 758888,
        species: "Aggrodos",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 92,
            atk: 127,
            def: 139,
            spa: 70,
            spd: 90,
            spe: 75
        },
        abilities: {
            0: "FEAR"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Monster"],
    },

    aggrodosmegax: {
        num: 758888,
        species: "Aggrodos-Mega-X",
        baseSpecies: "Aggrodos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 92,
            atk: 157,
            def: 169,
            spa: 80,
            spd: 120,
            spe: 75
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Monster"],
    },
    aggrodosmegay: {
        num: 758888,
        species: "Aggrodos-Mega-Y",
        baseSpecies: "Aggrodos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Steel"],
        baseStats: {
            hp: 92,
            atk: 157,
            def: 189,
            spa: 70,
            spd: 110,
            spe: 75
        },
        abilities: {
            0: "Filter"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Monster"],
    },
    zorcanine: {
        num: 750016,
        species: "Zorcanine",
        types: ["Fire", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 117,
            def: 80,
            spa: 120,
            spd: 80,
            spe: 110
        },
        abilities: {
            0: "Mental Fear"
        },
        heightm: 1.755,
        weightkg: 118.05,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    archedactyl: {
        num: 750017,
        species: "Archedactyl",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 87,
            atk: 132,
            def: 75,
            spa: 96,
            spd: 80,
            spe: 130
        },
        abilities: {
            0: "Aura of Failure"
        },
        heightm: 1.6,
        weightkg: 45.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    archedactylmega: {
        num: 750017,
        species: "Archedactyl-Mega",
        baseSpecies: "Archedactyl",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Flying"],
        baseStats: {
            hp: 87,
            atk: 162,
            def: 95,
            spa: 106,
            spd: 100,
            spe: 150
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Flying"],
    },
    chesdon: {
        num: 750018,
        species: "Chesdon",
        types: ["Grass", "Ground"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 108,
            atk: 119,
            def: 130,
            spa: 81,
            spd: 83,
            spe: 65
        },
        abilities: {
            0: "Cactus Power"
        },
        heightm: 1.805,
        weightkg: 195,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mamodrill: {
        num: 750019,
        species: "Mamodrill",
        types: ["Ground", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 120,
            atk: 142,
            def: 80,
            spa: 70,
            spd: 72,
            spe: 94
        },
        abilities: {
            0: "Snow Force"
        },
        heightm: 1.6,
        weightkg: 165.7,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    heliodra: {
        num: 750020,
        species: "Heliodra",
        types: ["Dragon", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 86,
            atk: 87,
            def: 71,
            spa: 119,
            spd: 132,
            spe: 104
        },
        abilities: {
            0: "Sandy Skin"
        },
        heightm: 1.5,
        weightkg: 85.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    syscor: {
        num: 750021,
        species: "Scyscor",
        types: ["Bug", "Ground"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 112,
            def: 112,
            spa: 60,
            spd: 87,
            spe: 110
        },
        abilities: {
            0: "Technicutter"
        },
        heightm: 1.755,
        weightkg: 49.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    joltry: {
        num: 750022,
        species: "Joltry",
        types: ["Grass", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 87,
            atk: 92,
            def: 70,
            spa: 110,
            spd: 87,
            spe: 115
        },
        abilities: {
            0: "ChloroVolt"
        },
        heightm: 1.045,
        weightkg: 42.05,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    azumaloom: {
        num: 750023,
        species: "Azumaloom",
        types: ["Water", "Grass"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 100,
            def: 90,
            spa: 70,
            spd: 80,
            spe: 70
        },
        abilities: {
            0: "Healing Fat"
        },
        heightm: 0.99,
        weightkg: 33.85,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    sawkape: {
        num: 750024,
        species: "Sawkape",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 124,
            def: 83,
            spa: 77,
            spd: 83,
            spe: 106
        },
        abilities: {
            0: "Blazing Body"
        },
        heightm: 1.295,
        weightkg: 53,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    wasol: {
        num: 750025,
        species: "Weasol",
        types: ["Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 77,
            atk: 135,
            def: 72,
            spa: 70,
            spd: 82,
            spe: 110
        },
        abilities: {
            0: "Pressure + Super Luck"
        },
        heightm: 1.14,
        weightkg: 40.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    weasolmega: {
        num: 750025,
        species: "Weasol-Mega",
        baseSpecies: "Weasol",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Ice"],
        baseStats: {
            hp: 82,
            atk: 160,
            def: 77,
            spa: 115,
            spd: 87,
            spe: 155
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Field"],
    },
    tyranichomp: {
        num: 750026,
        species: "Tyranichomp",
        types: ["Rock", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 114,
            atk: 142,
            def: 112,
            spa: 97,
            spd: 102,
            spe: 91
        },
        abilities: {
            0: "Sand Aura"
        },
        heightm: 1.96,
        weightkg: 148.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    tyranichompmegax: {
        num: 750026,
        species: "Tyranichomp-Mega-X",
        baseSpecies: "Tyranichomp",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Dragon"],
        baseStats: {
            hp: 114,
            atk: 172,
            def: 152,
            spa: 97,
            spd: 122,
            spe: 101
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Monster"],
    },
    tyranichompmegax: {
        num: 750026,
        species: "Tyranichomp-Mega-X",
        baseSpecies: "Tyranichomp",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Dragon"],
        baseStats: {
            hp: 114,
            atk: 172,
            def: 152,
            spa: 97,
            spd: 122,
            spe: 101
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Monster"],
    },

    tyranichompmegay: {
        num: 750026,
        species: "Tyranichomp-Mega-Y",
        baseSpecies: "Tyranichomp",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Dragon"],
        baseStats: {
            hp: 114,
            atk: 182,
            def: 132,
            spa: 137,
            spd: 112,
            spe: 81
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Monster"],
    },
    railie: {
        num: 750027,
        species: "Railie",
        types: ["Ice", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 95,
            def: 77,
            spa: 95,
            spd: 90,
            spe: 105
        },
        abilities: {
            0: "Static Storm"
        },
        heightm: 1.145,
        weightkg: 143.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    railiemega: {
        num: 750027,
        species: "Railie-Mega",
        baseSpecies: "Railie",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ice", "Electric"],
        baseStats: {
            hp: 80,
            atk: 135,
            def: 77,
            spa: 135,
            spd: 90,
            spe: 125
        },
        abilities: {
            0: "Refigerate"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Fairy"],
    },
    charatos: {
        num: 750028,
        species: "Charatos",
        types: ["Fire", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 97,
            atk: 115,
            def: 89,
            spa: 95,
            spd: 103,
            spe: 101
        },
        abilities: {
            0: "Dreaded Flames"
        },
        heightm: 4.1,
        weightkg: 162.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    charatosmegay: {
        num: 750028,
        species: "Charatos-Mega-Y",
        baseSpecies: "Charatos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Water"],
        baseStats: {
            hp: 97,
            atk: 135,
            def: 89,
            spa: 145,
            spd: 133,
            spe: 101
        },
        abilities: {
            0: "Drought"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Dragon"],
    },

    charatosmegax: {
        num: 750028,
        species: "Charatos-Mega-X",
        baseSpecies: "Charatos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        baseStats: {
            hp: 97,
            atk: 161,
            def: 122,
            spa: 116,
            spd: 103,
            spe: 101
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Dragon"],
    },

    charatosmegaz: {
        num: 750028,
        species: "Charatos-Mega-Z",
        baseSpecies: "Charatos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Dark"],
        baseStats: {
            hp: 97,
            atk: 145,
            def: 119,
            spa: 105,
            spd: 133,
            spe: 101
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Dragon"],
    },
    aggrosaur: {
        num: 750029,
        species: "Aggrosaur",
        types: ["Grass", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 106,
            def: 141,
            spa: 90,
            spd: 90,
            spe: 75
        },
        abilities: {
            0: "Rocky Growth"
        },
        heightm: 2.06,
        weightkg: 230,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    aggrosaurmegax: {
        num: 750029,
        species: "Aggrosaur-Mega-X",
        baseSpecies: "Aggrosaur",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Steel"],
        baseStats: {
            hp: 85,
            atk: 124,
            def: 181,
            spa: 112,
            spd: 110,
            spe: 75
        },
        abilities: {
            0: "Thick Fat"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Monster"],
    },

    aggrosaurmegay: {
        num: 750029,
        species: "Aggrosaur-Mega-Y",
        baseSpecies: "Aggrosaur",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Steel"],
        baseStats: {
            hp: 85,
            atk: 136,
            def: 191,
            spa: 90,
            spd: 110,
            spe: 75
        },
        abilities: {
            0: "Filter"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Monster"],
    },
    blastninja: {
        num: 750030,
        species: "Blastinja",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 104,
            def: 98,
            spa: 109,
            spd: 103,
            spe: 115
        },
        abilities: {
            0: "Torrent"
        },
        heightm: 1.55,
        weightkg: 62.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    blastinjamega: {
        num: 750030,
        species: "Blastinja-Mega",
        baseSpecies: "Blastinja",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 90,
            atk: 124,
            def: 118,
            spa: 159,
            spd: 113,
            spe: 115
        },
        abilities: {
            0: "Mega Launcher"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Blue",
        eggGroups: ["Water 1"],
    },

    skaria: {
        num: 750031,
        species: "Skaria",
        types: ["Steel", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 85,
            def: 125,
            spa: 65,
            spd: 97,
            spe: 85
        },
        abilities: {
            0: "Pristine"
        },
        heightm: 1.395,
        weightkg: 35.55,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    skariamega: {
        num: 750031,
        species: "Skaria-Mega",
        baseSpecies: "Skaria",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 80,
            atk: 125,
            def: 145,
            spa: 105,
            spd: 97,
            spe: 85
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Flying"],
    },
    magmozam: {
        num: 750032,
        species: "Magmozam",
        types: ["Fire", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 82,
            def: 66,
            spa: 140,
            spd: 105,
            spe: 111
        },
        abilities: {
            0: "Inner Body"
        },
        heightm: 1.55,
        weightkg: 58,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    magmozammega: {
        num: 750032,
        species: "Magmozam-Mega",
        baseSpecies: "Magmozam",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Psychic"],
        baseStats: {
            hp: 75,
            atk: 82,
            def: 86,
            spa: 180,
            spd: 105,
            spe: 141
        },
        abilities: {
            0: "Trace"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Human-Like"],
    },
    glakiss: {
        num: 750033,
        species: "Glakiss",
        types: ["Fairy", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 92,
            atk: 75,
            def: 97,
            spa: 110,
            spd: 107,
            spe: 90
        },
        abilities: {
            0: "Serene Focus (Shield Dust)"
        },
        heightm: 1.5,
        weightkg: 147.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    glakissmega: {
        num: 750033,
        species: "Glakiss-Mega",
        baseSpecies: "Glakiss",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fairy", "Ice"],
        baseStats: {
            hp: 92,
            atk: 115,
            def: 97,
            spa: 150,
            spd: 107,
            spe: 110
        },
        abilities: {
            0: "Refigerate"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Fairy"],
    },
    sharpedos: {
        num: 750034,
        species: "Sharpedos",
        types: ["Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 92,
            atk: 132,
            def: 69,
            spa: 87,
            spd: 80,
            spe: 98
        },
        abilities: {
            0: "Intimidating Fangs"
        },
        heightm: 4.15,
        weightkg: 161.9,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    sharpedosmegax: {
        num: 750034,
        species: "Sharpedos-Mega-X",
        baseSpecies: "Sharpedos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water"],
        baseStats: {
            hp: 92,
            atk: 152,
            def: 99,
            spa: 102,
            spd: 105,
            spe: 108
        },
        abilities: {
            0: "Strong Jaw"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Water 1"],
    },

    sharpedosmegay: {
        num: 750034,
        species: "Sharpedos-Mega-Y",
        baseSpecies: "Sharpedos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 92,
            atk: 162,
            def: 99,
            spa: 97,
            spd: 110,
            spe: 98
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Water 1"],
    },
    vapornine: {
        num: 750035,
        species: "Vapornine",
        types: ["Water", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 120,
            atk: 97,
            def: 80,
            spa: 115,
            spd: 97,
            spe: 90
        },
        abilities: {
            0: "Intimidating Absorption"
        },
        heightm: 1.45,
        weightkg: 92,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    pidgetot: {
        num: 750036,
        species: "Pidgetot",
        types: ["Normal", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 89,
            atk: 82,
            def: 70,
            spa: 91,
            spd: 66,
            spe: 106
        },
        abilities: {
            0: "Keen Feet"
        },
        heightm: 1.005,
        weightkg: 20.7,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    pidgetotmega: {
        num: 750036,
        species: "Pidgetot-Mega",
        baseSpecies: "Pidgetot",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 89,
            atk: 82,
            def: 75,
            spa: 156,
            spd: 76,
            spe: 126
        },
        abilities: {
            0: "No Guard"
        },
        heightm: 2,
        weightkg: 75.5,
        color: "Brown",
        eggGroups: ["Flying"],
    },
    goracanion: {
        num: 750037,
        species: "Goracanion",
        types: ["Fire", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 67,
            atk: 97,
            def: 112,
            spa: 140,
            spd: 90,
            spe: 75
        },
        abilities: {
            0: "Swift Absorb"
        },
        heightm: 1.75,
        weightkg: 108.8,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    klazor: {
        num: 750038,
        species: "Klazor",
        types: ["Bug", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 105,
            def: 100,
            spa: 82,
            spd: 85,
            spe: 61
        },
        abilities: {
            0: "Math Surge"
        },
        heightm: 1.205,
        weightkg: 84.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    klazormega: {
        num: 750038,
        species: "Klazor-Mega",
        baseSpecies: "Klazor",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 75,
            atk: 125,
            def: 140,
            spa: 92,
            spd: 105,
            spe: 71
        },
        abilities: {
            0: "Technician"
        },
        heightm: 1.8,
        weightkg: 117.5,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    pidgemie: {
        num: 750039,
        species: "Pidgemie",
        types: ["Water", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 84,
            atk: 77,
            def: 80,
            spa: 95,
            spd: 80,
            spe: 122
        },
        abilities: {
            0: "Natural Eye"
        },
        heightm: 1.295,
        weightkg: 59.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    pidgemiemega: {
        num: 750039,
        species: "Pidgemie-Mega",
        baseSpecies: "Pidgemie",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Normal"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 84,
            atk: 77,
            def: 85,
            spa: 160,
            spd: 90,
            spe: 142
        },
        abilities: {
            0: "No Guard"
        },
        heightm: 1.5,
        weightkg: 39.5,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    eek: {
        num: 750040,
        species: "Eek",
        types: ["Electric", "Poison"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 105,
            atk: 120,
            def: 87,
            spa: 95,
            spd: 100,
            spe: 60
        },
        abilities: {
            0: "Sticky Float"
        },
        heightm: 1.65,
        weightkg: 55.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    hitachi: {
        num: 750041,
        species: "Hitachi",
        types: ["Fire", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 95,
            atk: 95,
            def: 113,
            spa: 130,
            spd: 113,
            spe: 81
        },
        abilities: {
            0: "Serene Fire"
        },
        heightm: 1,
        weightkg: 215.55,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    shaynizard: {
        num: 750042,
        species: "Shaymizard",
        types: ["Fire", "Grass"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 89,
            atk: 102,
            def: 89,
            spa: 114,
            spd: 92,
            spe: 120
        },
        abilities: {
            0: "Healing Blaze"
        },
        heightm: 0.95,
        weightkg: 46.3,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    shaymizardmegax: {
        num: 750042,
        species: "Shaymizard-Mega-X",
        baseSpecies: "Shaymizard",
        forme: "Mega-X",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 89,
            atk: 148,
            def: 122,
            spa: 135,
            spd: 92,
            spe: 120
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.8,
        weightkg: 105.5,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    shaymizardmegay: {
        num: 750042,
        species: "Shaymizard-Mega-Y",
        baseSpecies: "Shaymizard",
        forme: "Mega-Y",
        formeLetter: "M",
        types: ["Fire", "Grass"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 89,
            atk: 122,
            def: 89,
            spa: 164,
            spd: 122,
            spe: 120
        },
        abilities: {
            0: "Drought"
        },
        heightm: 1.8,
        weightkg: 105.5,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    ferroslashshield: {
        num: 750043,
        species: "Ferroslash-Shield",
        types: ["Steel", "Grass"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 77,
            atk: 82,
            def: 150,
            spa: 62,
            spd: 133,
            spe: 50
        },
        abilities: {
            0: "Barb Stance"
        },
        heightm: 1.345,
        weightkg: 81.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    hazard: {
        num: 750044,
        species: "Hazard",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 87,
            atk: 125,
            def: 94,
            spa: 94,
            spd: 82,
            spe: 108
        },
        abilities: {
            0: "Power-up Pinch"
        },
        heightm: 1.75,
        weightkg: 98,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    hazardmegax: {
        num: 750044,
        species: "Hazard-Mega-X",
        baseSpecies: "Hazard",
        forme: "Mega-X",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 87,
            atk: 171,
            def: 127,
            spa: 115,
            spd: 82,
            spe: 108
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.8,
        weightkg: 105.5,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
    },
    hazardmegay: {
        num: 750044,
        species: "Hazard-Mega-Y",
        baseSpecies: "Hazard",
        forme: "Mega-Y",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 87,
            atk: 145,
            def: 94,
            spa: 144,
            spd: 112,
            spe: 108
        },
        abilities: {
            0: "Drought"
        },
        heightm: 1.8,
        weightkg: 105.5,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
    },

    hitmonklang: {
        num: 750045,
        species: "Hitmonklang",
        types: ["Steel", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 55,
            atk: 115,
            def: 110,
            spa: 52,
            spd: 105,
            spe: 90
        },
        abilities: {
            0: "Electrotechnic"
        },
        heightm: 1.005,
        weightkg: 64.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    maladuck: {
        num: 750046,
        species: "Maladuck",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 93,
            atk: 97,
            def: 93,
            spa: 91,
            spd: 87,
            spe: 89
        },
        abilities: {
            0: "Atmospheric Perversion"
        },
        heightm: 1.6,
        weightkg: 61.8,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    yangarde: {
        num: 750047,
        species: "Yangarde",
        types: ["Dragon", "Bug"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 97,
            atk: 111,
            def: 118,
            spa: 98,
            spd: 85,
            spe: 95
        },
        abilities: {
            0: "Speed Break"
        },
        heightm: 3.455,
        weightkg: 178.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    suirizion: {
        num: 750048,
        species: "Suirizion",
        types: ["Grass", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 104,
            atk: 82,
            def: 100,
            spa: 110,
            spd: 122,
            spe: 100
        },
        abilities: {
            0: "Justice Power"
        },
        heightm: 2.01,
        weightkg: 193.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    jellivoir: {
        num: 750049,
        species: "Jellivoir",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 94,
            atk: 72,
            def: 77,
            spa: 115,
            spd: 120,
            spe: 80
        },
        abilities: {
            0: "Cursed Trace"
        },
        heightm: 1.905,
        weightkg: 91.7,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    jellivoirmega: {
        num: 750049,
        species: "Jellivoir-Mega",
        baseSpecies: "Jellivoir",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 94,
            atk: 92,
            def: 77,
            spa: 155,
            spd: 140,
            spe: 100
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 1.6,
        weightkg: 90.0,
        color: "Blue",
        eggGroups: ["Amorphous"],
    },
    metabat: {
        num: 750050,
        species: "Metabat",
        types: ["Steel", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 132,
            def: 115,
            spa: 82,
            spd: 85,
            spe: 110
        },
        abilities: {
            0: "Clear Focus"
        },
        heightm: 1.7,
        weightkg: 312.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    metabatmega: {
        num: 750050,
        species: "Metabat-Mega",
        baseSpecies: "Metabat",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 82,
            atk: 142,
            def: 135,
            spa: 92,
            spd: 105,
            spe: 150
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 2.0,
        weightkg: 90.0,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    dartios: {
        num: 750051,
        species: "Dartios",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 130,
            def: 70,
            spa: 80,
            spd: 85,
            spe: 113
        },
        abilities: {
            0: "Sheer Flight"
        },
        heightm: 1.655,
        weightkg: 76.45,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    dartiosmega: {
        num: 750051,
        species: "Dartios-Mega",
        baseSpecies: "Dartios",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 100,
            atk: 170,
            def: 90,
            spa: 110,
            spd: 95,
            spe: 133
        },
        abilities: {
            0: "Levitate"
        },
        heightm: 2.0,
        weightkg: 80.0,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    grenheatja: {
        num: 750052,
        species: "Grenheatja",
        types: ["Water", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 81,
            atk: 92,
            def: 92,
            spa: 126,
            spd: 92,
            spe: 119
        },
        abilities: {
            0: "Evaporation"
        },
        heightm: 1.6,
        weightkg: 235,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    moltie: {
        num: 750053,
        species: "Moltie",
        types: ["Fairy", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 100,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 79
        },
        abilities: {
            0: "Calamity"
        },
        heightm: 1.36,
        weightkg: 34.4,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    banegross: {
        num: 750054,
        species: "Banegross",
        types: ["Ghost", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 72,
            atk: 135,
            def: 97,
            spa: 89,
            spd: 86,
            spe: 87
        },
        abilities: {
            0: "Hard Body"
        },
        heightm: 1.345,
        weightkg: 281.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    banegrossmegax: {
        num: 750054,
        species: "Banegross-Mega-X",
        baseSpecies: "Banegross",
        forme: "Mega-X",
        formeLetter: "M",
        types: ["Steel", "Ghost"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 72,
            atk: 145,
            def: 117,
            spa: 99,
            spd: 106,
            spe: 127
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.6,
        weightkg: 550.0,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    banegrossmegay: {
        num: 750054,
        species: "Banegross-Mega-Y",
        baseSpecies: "Banegross",
        forme: "Mega-Y",
        formeLetter: "M",
        types: ["Steel", "Ghost"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 72,
            atk: 185,
            def: 107,
            spa: 99,
            spd: 106,
            spe: 97
        },
        abilities: {
            0: "Prankster"
        },
        heightm: 1.6,
        weightkg: 550.0,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    herasir: {
        num: 750055,
        species: "Herasir",
        types: ["Fighting", "Bug"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 135,
            def: 97,
            spa: 57,
            spd: 92,
            spe: 95
        },
        abilities: {
            0: "Gut Breaker"
        },
        heightm: 1.5,
        weightkg: 54.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    herasirmegah: {
        num: 750055,
        species: "Herasir-Mega-H",
        baseSpecies: "Herasir",
        forme: "Mega-H",
        formeLetter: "M",
        types: ["Fighting", "Bug"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 82,
            atk: 195,
            def: 137,
            spa: 57,
            spd: 102,
            spe: 85
        },
        abilities: {
            0: "Skill Link"
        },
        heightm: 1.6,
        weightkg: 70.0,
        color: "Blue",
        eggGroups: ["Bug"],
    },
    herasirmegap: {
        num: 750055,
        species: "Herasir-Mega-P",
        baseSpecies: "Herasir",
        forme: "Mega-P",
        formeLetter: "M",
        types: ["Fighting", "Bug"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 82,
            atk: 155,
            def: 117,
            spa: 67,
            spd: 102,
            spe: 115
        },
        abilities: {
            0: "Aerilate"
        },
        heightm: 1.6,
        weightkg: 60.0,
        color: "Blue",
        eggGroups: ["Bug"],
    },
    mismagivoir: {
        num: 750056,
        species: "Mismagivoir",
        types: ["Fairy", "Ghost"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 74,
            atk: 72,
            def: 72,
            spa: 125,
            spd: 120,
            spe: 102
        },
        abilities: {
            0: "Synchofloat"
        },
        heightm: 1.245,
        weightkg: 26.4,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mismagivoirmega: {
        num: 750056,
        species: "Mismagivoir-Mega",
        baseSpecies: "Mismagivoir",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 74,
            atk: 92,
            def: 92,
            spa: 165,
            spd: 140,
            spe: 122
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 1.6,
        weightkg: 90.0,
        color: "Pink",
        eggGroups: ["Amorphous"],
    },
    harem: {
        num: 750057,
        species: "Harem",
        types: ["Dragon", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 158,
            def: 90,
            spa: 110,
            spd: 80,
            spe: 101
        },
        abilities: {
            0: "Overwhelming Presence"
        },
        heightm: 2.4,
        weightkg: 215.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mana: {
        num: 750058,
        species: "Mana",
        types: ["Ghost", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 92,
            def: 80,
            spa: 127,
            spd: 95,
            spe: 107
        },
        abilities: {
            0: "Magician's Wand"
        },
        heightm: 1.005,
        weightkg: 24.6,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    manamega: {
        num: 750058,
        species: "Mana-Mega",
        baseSpecies: "Mana",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Electric"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 75,
            atk: 92,
            def: 100,
            spa: 157,
            spd: 115,
            spe: 137
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 1.5,
        weightkg: 90.0,
        color: "Pink",
        eggGroups: ["Undiscovered"],
    },
    lucharma: {
        num: 750059,
        species: "Lucharma",
        types: ["Fighting", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 121,
            atk: 116,
            def: 77,
            spa: 67,
            spd: 71,
            spe: 94
        },
        abilities: {
            0: "Clean Match"
        },
        heightm: 1.55,
        weightkg: 137.65,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    swank: {
        num: 750060,
        species: "Swank",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 125,
            def: 105,
            spa: 80,
            spd: 90,
            spe: 81
        },
        abilities: {
            0: "Positive Growth"
        },
        heightm: 1.055,
        weightkg: 81.45,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    swankmega: {
        num: 750060,
        species: "Swankz-Mega",
        baseSpecies: "Swank",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 85,
            atk: 165,
            def: 125,
            spa: 90,
            spd: 110,
            spe: 91
        },
        abilities: {
            0: "Swift Swim"
        },
        heightm: 1.5,
        weightkg: 90.0,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    casting: {
        num: 750061,
        species: "Casting",
        types: ["Poison", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 78,
            atk: 90,
            def: 105,
            spa: 88,
            spd: 80,
            spe: 75
        },
        abilities: {
            0: "Monsoon"
        },
        heightm: 0.745,
        weightkg: 5.15,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    sablemimez: {
        num: 750062,
        species: "Sablemimez",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 55,
            atk: 70,
            def: 80,
            spa: 92,
            spd: 102,
            spe: 80
        },
        abilities: {
            0: "Slow 'n' Steady"
        },
        heightm: 0.905,
        weightkg: 32.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    sablemimezmega: {
        num: 750062,
        species: "Sablemimez-Mega",
        baseSpecies: "Sablemimez",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 55,
            atk: 80,
            def: 130,
            spa: 112,
            spd: 152,
            spe: 50
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 1.6,
        weightkg: 60.0,
        color: "Pink",
        eggGroups: ["Human-Like"],
    },
    aegilineshield: {
        num: 750063,
        species: "Aegiline-Shield",
        types: ["Steel", "Bug"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 65,
            atk: 85,
            def: 132,
            spa: 85,
            spd: 132,
            spe: 99
        },
        abilities: {
            0: "Error Macro"
        },
        heightm: 1.6,
        weightkg: 67.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    houndlion: {
        num: 750064,
        species: "Houndlion",
        types: ["Dark", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 83,
            atk: 90,
            def: 98,
            spa: 120,
            spd: 76,
            spe: 112
        },
        abilities: {
            0: "Justified Fire"
        },
        heightm: 1.755,
        weightkg: 142.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    houndlionmega: {
        num: 750064,
        species: "Houndlion-Mega",
        baseSpecies: "Houndlion",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 83,
            atk: 90,
            def: 138,
            spa: 150,
            spd: 86,
            spe: 132
        },
        abilities: {
            0: "Solar Power"
        },
        heightm: 2.1,
        weightkg: 250,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    loppeye: {
        num: 750065,
        species: "Loppeye",
        types: ["Ghost", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 67,
            atk: 85,
            def: 89,
            spa: 69,
            spd: 91,
            spe: 87
        },
        abilities: {
            0: "Late Bloomer"
        },
        heightm: 0.85,
        weightkg: 22.15,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },

    loppeyemegax: {
        num: 750065,
        species: "Loppeye-Mega-X",
        baseSpecies: "Loppeye",
        forme: "Mega-X",
        formeLetter: "M",
        types: ["Ghost", "Normal"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 67,
            atk: 95,
            def: 139,
            spa: 89,
            spd: 141,
            spe: 57
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 1.6,
        weightkg: 60.0,
        color: "Brown",
        eggGroups: ["Human-Like"],
    },
    loppeyemegay: {
        num: 750065,
        species: "Loppeye-Mega-Y",
        baseSpecies: "Loppeye",
        forme: "Mega-Y",
        formeLetter: "M",
        types: ["Ghost", "Fighting"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 67,
            atk: 145,
            def: 99,
            spa: 69,
            spd: 91,
            spe: 117
        },
        abilities: {
            0: "Scrappy"
        },
        heightm: 1.6,
        weightkg: 60.0,
        color: "Brown",
        eggGroups: ["Human-Like"],
    },
    bastioking: {
        num: 750066,
        species: "Bastioking",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 88,
            atk: 74,
            def: 134,
            spa: 84,
            spd: 134,
            spe: 40
        },
        abilities: {
            0: "Sturdy Tempo"
        },
        heightm: 1.655,
        weightkg: 114.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    peatran: {
        num: 750067,
        species: "Peatran",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 87,
            atk: 85,
            def: 90,
            spa: 120,
            spd: 88,
            spe: 109
        },
        abilities: {
            0: "Tangled Flames"
        },
        heightm: 1.6,
        weightkg: 234.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    manatar: {
        num: 750068,
        species: "Manatar",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 117,
            def: 105,
            spa: 117,
            spd: 100,
            spe: 100
        },
        abilities: {
            0: "Hydro Stream (Drizzle)"
        },
        heightm: 1.155,
        weightkg: 101.7,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    manatarmega: {
        num: 750068,
        species: "Manatar-Mega",
        baseSpecies: "Manatar",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 100,
            atk: 147,
            def: 145,
            spa: 117,
            spd: 120,
            spe: 110
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 2.0,
        weightkg: 202.0,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    aurortoise: {
        num: 750069,
        species: "Aurortoise",
        types: ["Water", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 111,
            atk: 90,
            def: 96,
            spa: 102,
            spd: 108,
            spe: 78
        },
        abilities: {
            0: "Hydrate"
        },
        heightm: 2.145,
        weightkg: 155.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    aurortoisemega: {
        num: 750069,
        species: "Aurortoise-Mega",
        baseSpecies: "Aurortoise",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Ice"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 111,
            atk: 110,
            def: 116,
            spa: 152,
            spd: 118,
            spe: 78
        },
        abilities: {
            0: "Mega Launcher"
        },
        heightm: 1.6,
        weightkg: 85.5,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    metsir: {
        num: 750070,
        species: "Metsir",
        types: ["Steel", "Bug"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 72,
            atk: 150,
            def: 115,
            spa: 75,
            spd: 80,
            spe: 97
        },
        abilities: {
            0: "Breaker"
        },
        heightm: 1.55,
        weightkg: 302.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    metsirmegam: {
        num: 750070,
        species: "Mestir-Mega-M",
        baseSpecies: "Metsir",
        forme: "Mega-M",
        formeLetter: "M",
        types: ["Steel", "Bug"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 72,
            atk: 160,
            def: 135,
            spa: 95,
            spd: 100,
            spe: 137
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.6,
        weightkg: 550.0,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    metsirmegap: {
        num: 750070,
        species: "Metsir-Mega-P",
        baseSpecies: "Metsir",
        forme: "Mega-P",
        formeLetter: "M",
        types: ["Steel", "Bug"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 72,
            atk: 180,
            def: 135,
            spa: 85,
            spd: 90,
            spe: 117
        },
        abilities: {
            0: "Aerilate"
        },
        heightm: 1.6,
        weightkg: 550.0,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    fablesteel: {
        num: 750071,
        species: "Fablesteel",
        types: ["Fairy", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 72,
            def: 120,
            spa: 103,
            spd: 120,
            spe: 55
        },
        abilities: {
            0: "Bodyguard"
        },
        heightm: 1.605,
        weightkg: 122.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    houdini: {
        num: 750072,
        species: "Houdini",
        types: ["Ghost", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 106,
            atk: 85,
            def: 93,
            spa: 110,
            spd: 108,
            spe: 60
        },
        abilities: {
            0: "Hammer Space"
        },
        heightm: 0.8,
        weightkg: 20,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    houdinimega: {
        num: 750072,
        species: "Houdini-Mega",
        baseSpecies: "Houdini",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 106,
            atk: 85,
            def: 133,
            spa: 130,
            spd: 148,
            spe: 60
        },
        abilities: {
            0: "Healer"
        },
        heightm: 1.1,
        weightkg: 31.0,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    shot: {
        num: 750073,
        species: "Shot",
        types: ["Grass", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 103,
            atk: 100,
            def: 75,
            spa: 105,
            spd: 75,
            spe: 120
        },
        abilities: {
            0: "Serene Eyes"
        },
        heightm: 0.955,
        weightkg: 22.35,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    shotmega: {
        num: 750073,
        species: "Shot-Mega",
        baseSpecies: "Shot",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 103,
            atk: 100,
            def: 80,
            spa: 170,
            spd: 85,
            spe: 140
        },
        abilities: {
            0: "No Guard"
        },
        heightm: 1.5,
        weightkg: 39.5,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    leafadon: {
        num: 750074,
        species: "Leafadon",
        types: ["Grass", "Ground"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 96,
            atk: 121,
            def: 134,
            spa: 74,
            spd: 78,
            spe: 66
        },
        abilities: {
            0: "Leaf Stream (Drought)"
        },
        heightm: 1.5,
        weightkg: 162.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mampharos: {
        num: 750075,
        species: "Mampharos",
        types: ["Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 95,
            atk: 90,
            def: 87,
            spa: 125,
            spd: 90,
            spe: 95
        },
        abilities: {
            0: "Static"
        },
        heightm: 1.45,
        weightkg: 50.85,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mampharosmegam: {
        num: 750075,
        species: "Mampharos-Mega-M",
        baseSpecies: "Mampharos",
        forme: "Mega-M",
        formeLetter: "M",
        types: ["Electric"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 95,
            atk: 90,
            def: 107,
            spa: 155,
            spd: 110,
            spe: 125
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 1.4,
        weightkg: 61.5,
        color: "Yellow",
        eggGroups: ["Field"],
    },
    mampharosmegaa: {
        num: 750075,
        species: "Mampharos-Mega-A",
        baseSpecies: "Mampharos",
        forme: "Mega-A",
        formeLetter: "M",
        types: ["Electric", "Dragon"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 95,
            atk: 110,
            def: 107,
            spa: 175,
            spd: 110,
            spe: 85
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 1.4,
        weightkg: 61.5,
        color: "Yellow",
        eggGroups: ["Field"],
    },
    krookz: {
        num: 750076,
        species: "Krook-Z",
        types: ["Ground", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 98,
            def: 70,
            spa: 120,
            spd: 72,
            spe: 111
        },
        abilities: {
            0: "Cyber Criminal"
        },
        heightm: 1.195,
        weightkg: 65.15,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    entaria: {
        num: 750077,
        species: "Entaria",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 95,
            atk: 110,
            def: 100,
            spa: 80,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Under Pressure"
        },
        heightm: 1.6,
        weightkg: 109.3,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    entariamega: {
        num: 750077,
        species: "Entaria-Mega",
        baseSpecies: "Entaria",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 95,
            atk: 150,
            def: 120,
            spa: 120,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 2.1,
        weightkg: 198.0,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    pidgetran: {
        num: 758889,
        species: "Pidgetran",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 87,
            atk: 85,
            def: 90,
            spa: 120,
            spd: 88,
            spe: 109
        },
        abilities: {
            0: "Tangled Flames"
        },
        heightm: 1.5,
        weightkg: 31.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
        otherFormes: ["pidgetranmega"],
    },
    pidgetranmega: {
        num: 758889,
        species: "Pidgetran-Mega",
        baseSpecies: "Pidgetran",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 87,
            atk: 85,
            def: 95,
            spa: 185,
            spd: 98,
            spe: 129
        },
        abilities: {
            0: "No Guard"
        },
        heightm: 1.5,
        weightkg: 39.5,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    blasterain: {
        num: 750078,
        species: "Blasterain",
        types: ["Water", "Bug"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 84,
            atk: 81,
            def: 91,
            spa: 92,
            spd: 103,
            spe: 79
        },
        abilities: {
            0: "Sea Monster"
        },
        heightm: 1.195,
        weightkg: 44.55,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    blasterainmega: {
        num: 750078,
        species: "Blasterain-Mega",
        baseSpecies: "Blasterain",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Bug"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 84,
            atk: 101,
            def: 111,
            spa: 142,
            spd: 113,
            spe: 79
        },
        abilities: {
            0: "Mega Launcher"
        },
        heightm: 1.6,
        weightkg: 111.1,
        color: "Blue",
        eggGroups: ["Water1"],
    },
    dianbro: {
        num: 750079,
        species: "Dianbro",
        types: ["Water", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 90,
            def: 130,
            spa: 100,
            spd: 130,
            spe: 40
        },
        abilities: {
            0: "Clear Tempo"
        },
        heightm: 1.155,
        weightkg: 43.65,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    chatotorus: {
        num: 750080,
        species: "Chatotorus",
        types: ["Normal", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 93,
            atk: 105,
            def: 78,
            spa: 134,
            spd: 81,
            spe: 116
        },
        abilities: {
            0: "Sandy Eyes"
        },
        heightm: 1.005,
        weightkg: 34.95,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    blisskiss: {
        num: 750081,
        species: "Blisskiss",
        types: ["Normal", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 185,
            atk: 45,
            def: 67,
            spa: 112,
            spd: 140,
            spe: 82
        },
        abilities: {
            0: "Serene Grace"
        },
        heightm: 1.5,
        weightkg: 42.4,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    toxisharp: {
        num: 750082,
        species: "Toxisharp",
        types: ["Dark", "Poison"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 84,
            atk: 125,
            def: 92,
            spa: 83,
            spd: 77,
            spe: 87
        },
        abilities: {
            0: "Sharp Armor"
        },
        heightm: 1.45,
        weightkg: 57.2,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    darmega: {
        num: 750083,
        species: "Darmega",
        types: ["Dark", "Bug"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 83,
            def: 88,
            spa: 140,
            spd: 76,
            spe: 120
        },
        abilities: {
            0: "Dream Crusher"
        },
        heightm: 1.705,
        weightkg: 51,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    lagi: {
        num: 750084,
        species: "Lag-I",
        types: ["Ground", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 84,
            atk: 112,
            def: 85,
            spa: 107,
            spd: 80,
            spe: 110
        },
        abilities: {
            0: "Sand Force + Ice Body"
        },
        heightm: 1.5,
        weightkg: 162.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    heatloom: {
        num: 750085,
        species: "Heatloom",
        types: ["Steel", "Grass"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 95,
            atk: 130,
            def: 93,
            spa: 95,
            spd: 83,
            spe: 73
        },
        abilities: {
            0: "From Ashes"
        },
        heightm: 1.445,
        weightkg: 234.6,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    golislashdefense: {
        num: 750086,
        species: "Golislash-Defense",
        types: ["Ghost", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 74,
            atk: 87,
            def: 115,
            spa: 52,
            spd: 115,
            spe: 52
        },
        abilities: {
            0: "Combination Drive"
        },
        heightm: 2.245,
        weightkg: 191.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    hooporus: {
        num: 750087,
        species: "Hooporus",
        types: ["Ghost", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 78,
            atk: 148,
            def: 75,
            spa: 105,
            spd: 100,
            spe: 103
        },
        abilities: {
            0: "Magic Break"
        },
        heightm: 1.155,
        weightkg: 57.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    lopunnini: {
        num: 750088,
        species: "Lopunnini",
        types: ["Fire", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 83,
            atk: 88,
            def: 92,
            spa: 77,
            spd: 98,
            spe: 103
        },
        abilities: {
            0: "Charm Star"
        },
        heightm: 0.8,
        weightkg: 18.65,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    volcagon: {
        num: 750089,
        species: "Volcagon",
        types: ["Fire", "Ground"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 92,
            atk: 90,
            def: 82,
            spa: 117,
            spd: 102,
            spe: 110
        },
        abilities: {
            0: "Glassing"
        },
        heightm: 1.805,
        weightkg: 64,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    enterrak: {
        num: 750090,
        species: "Enterrak",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 112,
            atk: 132,
            def: 90,
            spa: 81,
            spd: 90,
            spe: 114
        },
        abilities: {
            0: "Justice Power"
        },
        heightm: 2.01,
        weightkg: 229,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    aeroraptor: {
        num: 750091,
        species: "Aeroraptor",
        types: ["Normal", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 92,
            atk: 122,
            def: 77,
            spa: 65,
            spd: 77,
            spe: 125
        },
        abilities: {
            0: "Raptor Head"
        },
        heightm: 1.495,
        weightkg: 41.95,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    sans: {
        num: 750092,
        species: "Sans",
        types: ["Normal", "Ground"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 122,
            atk: 140,
            def: 115,
            spa: 80,
            spd: 70,
            spe: 92
        },
        abilities: {
            0: "Lazy Bones"
        },
        heightm: 1.5,
        weightkg: 80,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    lucasol: {
        num: 750093,
        species: "Lucasol",
        types: ["Fighting", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 78,
            atk: 130,
            def: 75,
            spa: 105,
            spd: 75,
            spe: 93
        },
        abilities: {
            0: "Steadfast Luck"
        },
        heightm: 1.19,
        weightkg: 50.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    sceptilusaur: {
        num: 750094,
        species: "Sceptilusaur",
        types: ["Poison", "Grass"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 98,
            def: 88,
            spa: 117,
            spd: 107,
            spe: 115
        },
        abilities: {
            0: "Overgrow"
        },
        heightm: 1.855,
        weightkg: 76.1,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    houndectric: {
        num: 750095,
        species: "Houndectric",
        types: ["Electric", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 83,
            atk: 93,
            def: 65,
            spa: 118,
            spd: 80,
            spe: 110
        },
        abilities: {
            0: "Thunderous Embers"
        },
        heightm: 1.45,
        weightkg: 37.6,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    exdoom: {
        num: 750096,
        species: "Exdoom",
        types: ["Normal", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 100,
            def: 66,
            spa: 111,
            spd: 86,
            spe: 92
        },
        abilities: {
            0: "Amplify"
        },
        heightm: 1.45,
        weightkg: 59.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    gyaramence: {
        num: 750097,
        species: "Gyaramence",
        types: ["Water", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 110,
            atk: 145,
            def: 94,
            spa: 100,
            spd: 105,
            spe: 105
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 4,
        weightkg: 168.8,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    thunderblast: {
        num: 750098,
        species: "Thunderblast",
        types: ["Water", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 94,
            def: 90,
            spa: 130,
            spd: 100,
            spe: 100
        },
        abilities: {
            0: "Torrential Voltage"
        },
        heightm: 2.3,
        weightkg: 73.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    snoopa: {
        num: 750099,
        species: "Snoopa",
        types: ["Ghost", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 130,
            atk: 129,
            def: 70,
            spa: 110,
            spd: 120,
            spe: 50
        },
        abilities: {
            0: "Magic Fat"
        },
        heightm: 1.31,
        weightkg: 234.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    empoleking: {
        num: 7500100,
        species: "Empoleking",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 99,
            atk: 90,
            def: 94,
            spa: 115,
            spd: 115,
            spe: 65
        },
        abilities: {
            0: "Torrent Tempo"
        },
        heightm: 1.855,
        weightkg: 82,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    heathorn: {
        num: 7500101,
        species: "Heathorn",
        types: ["Grass", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 93,
            atk: 92,
            def: 129,
            spa: 102,
            spd: 121,
            spe: 49
        },
        abilities: {
            0: "Forest Fire"
        },
        heightm: 1.345,
        weightkg: 270,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    galvantulys: {
        num: 7500102,
        species: "Galvantulys",
        types: ["Electric", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 60,
            atk: 86,
            def: 85,
            spa: 110,
            spd: 85,
            spe: 150
        },
        abilities: {
            0: "Compound Pressure"
        },
        heightm: 1.245,
        weightkg: 37.55,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    hazygon: {
        num: 7500103,
        species: "Hazygon",
        types: ["Psychic", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 83,
            atk: 115,
            def: 80,
            spa: 145,
            spd: 80,
            spe: 126
        },
        abilities: {
            0: "Levitate"
        },
        heightm: 1.05,
        weightkg: 80.15,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    jellie: {
        num: 7500104,
        species: "Jellie",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 80,
            def: 130,
            spa: 94,
            spd: 130,
            spe: 55
        },
        abilities: {
            0: "Clear Absorb"
        },
        heightm: 1.46,
        weightkg: 71.9,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    zaggron: {
        num: 7500105,
        species: "Zaggron",
        types: ["Flying", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 100,
            def: 150,
            spa: 92,
            spd: 95,
            spe: 77
        },
        abilities: {
            0: "Crushing"
        },
        heightm: 1.855,
        weightkg: 206.3,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    malaras: {
        num: 7500106,
        species: "Malaras",
        types: ["Dark", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 119,
            atk: 98,
            def: 94,
            spa: 86,
            spd: 95,
            spe: 77
        },
        abilities: {
            0: "Advocate Scale"
        },
        heightm: 1.995,
        weightkg: 133.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    umbord: {
        num: 7500107,
        species: "Umbord",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 143,
            atk: 87,
            def: 88,
            spa: 85,
            spd: 98,
            spe: 72
        },
        abilities: {
            0: "Apathy"
        },
        heightm: 7.745,
        weightkg: 212.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    eruption: {
        num: 7500108,
        species: "Eruption",
        types: ["Fire", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 79,
            atk: 105,
            def: 100,
            spa: 130,
            spd: 100,
            spe: 55
        },
        abilities: {
            0: "Evaporate"
        },
        heightm: 1.805,
        weightkg: 207.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    porygardezy: {
        num: 7500109,
        species: "Porygarde-Zy",
        types: ["Normal", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 97,
            atk: 110,
            def: 95,
            spa: 115,
            spd: 95,
            spe: 95
        },
        abilities: {
            0: "Dis/connect"
        },
        heightm: 2.945,
        weightkg: 169.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    raptorus: {
        num: 7500110,
        species: "Raptorus",
        types: ["Ground", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 89,
            atk: 150,
            def: 80,
            spa: 77,
            spd: 65,
            spe: 115
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 1.245,
        weightkg: 46.45,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    sickle: {
        num: 7500111,
        species: "Sickle",
        types: ["Bug", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 55,
            atk: 80,
            def: 175,
            spa: 42,
            spd: 165,
            spe: 45
        },
        abilities: {
            0: "Technician + Sturdy"
        },
        heightm: 1.205,
        weightkg: 69.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    koulion: {
        num: 7500112,
        species: "Koulion",
        types: ["Electric", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 99,
            atk: 102,
            def: 102,
            spa: 102,
            spd: 102,
            spe: 111
        },
        abilities: {
            0: "Justice Power"
        },
        heightm: 2.01,
        weightkg: 214,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    dongoro: {
        num: 7500113,
        species: "Dongoro",
        types: ["Ground", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 102,
            atk: 132,
            def: 109,
            spa: 74,
            spd: 75,
            spe: 64
        },
        abilities: {
            0: "Sturdy Mold"
        },
        heightm: 1.6,
        weightkg: 128,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
	 garchomp: {
        num: 445,
        species: "Garchomp",
        types: ["Dragon", "Ground"],
        baseStats: {hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102},
        abilities: {0: "Sand Veil", H: "Rough Skin"},
        heightm: 1.9,
        weightkg: 95,
        color: "Blue",
        prevo: "gabite",
        evoLevel: 48,
        eggGroups: ["Monster", "Dragon"],
        otherFormes: ["garchompmega"],
    },
    darkrai: {
        num: 491,
        species: "Darkrai",
        types: ["Dark"],
        gender: "N",
        baseStats: {hp: 70, atk: 90, def: 90, spa: 135, spd: 90, spe: 125},
        abilities: {0: "Bad Dreams"},
        heightm: 1.5,
        weightkg: 50.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
darkchomp: {
        num: 7500114,
        species: "Darkchomp",
        types: ["Dark", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 109,
            atk: 130,
            def: 92,
            spa: 107,
            spd: 87,
            spe: 113
        },
        abilities: {
            0: "Rough Skin"
        },
        heightm: 1.705,
        weightkg: 72.75,
			fusion: ["darkrai", "garchomp"],
    },
    jelluk: {
        num: 7500115,
        species: "Jelluk",
        types: ["Poison", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 112,
            atk: 92,
            def: 82,
            spa: 85,
            spd: 112,
            spe: 65
        },
        abilities: {
            0: "Pond Scum"
        },
        heightm: 1.7,
        weightkg: 82.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    crustlecross: {
        num: 7500116,
        species: "Crustlecross",
        types: ["Rock", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 120,
            def: 110,
            spa: 62,
            spd: 95,
            spe: 75
        },
        abilities: {
            0: "Armored Guts"
        },
        heightm: 1.45,
        weightkg: 127,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    wigglyman: {
        num: 7500117,
        species: "Wigglyman",
        types: ["Water", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 120,
            atk: 85,
            def: 80,
            spa: 110,
            spd: 80,
            spe: 81
        },
        abilities: {
            0: "Shake it Off"
        },
        heightm: 0.645,
        weightkg: 6.7,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    magnetic: {
        num: 7500118,
        species: "Magnetic",
        types: ["Water", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 102,
            atk: 65,
            def: 107,
            spa: 135,
            spd: 107,
            spe: 70
        },
        abilities: {
            0: "Compelling"
        },
        heightm: 3.695,
        weightkg: 171,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    zorogonz: {
        num: 7500119,
        species: "Zorogon-Z",
        types: ["Normal", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 72,
            atk: 92,
            def: 65,
            spa: 147,
            spd: 67,
            spe: 117
        },
        abilities: {
            0: "Adaptable Illusion"
        },
        heightm: 1.245,
        weightkg: 57.55,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    thundini: {
        num: 7500120,
        species: "Thundini",
        types: ["Electric", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 118,
            def: 85,
            spa: 123,
            spd: 90,
            spe: 126
        },
        abilities: {
            0: "Prankstar"
        },
        heightm: 0.955,
        weightkg: 32.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    clawdra: {
        num: 7500121,
        species: "Clawdra",
        types: ["Water", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 83,
            atk: 94,
            def: 102,
            spa: 118,
            spd: 102,
            spe: 82
        },
        abilities: {
            0: "Storm Launcher"
        },
        heightm: 1.55,
        weightkg: 93.65,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    shaymode: {
        num: 7500122,
        species: "Shaymode",
        types: ["Grass", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 75,
            def: 90,
            spa: 105,
            spd: 100,
            spe: 130
        },
        abilities: {
            0: "Static Switch"
        },
        heightm: 0.695,
        weightkg: 34.35,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    armortran: {
        num: 7500123,
        species: "Armortran",
        types: ["Steel", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 85,
            def: 134,
            spa: 85,
            spd: 105,
            spe: 73
        },
        abilities: {
            0: "Sturdy Fire"
        },
        heightm: 1.7,
        weightkg: 240.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    gonzap: {
        num: 7500124,
        species: "Gonzap",
        types: ["Dragon", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 95,
            atk: 99,
            def: 100,
            spa: 125,
            spd: 100,
            spe: 110
        },
        abilities: {
            0: "G-Tolerance"
        },
        heightm: 1.7,
        weightkg: 106.3,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    bouffanine: {
        num: 7500125,
        species: "Bouffanine",
        types: ["Normal", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 102,
            atk: 120,
            def: 97,
            spa: 80,
            spd: 97,
            spe: 85
        },
        abilities: {
            0: "Reflex"
        },
        heightm: 1.755,
        weightkg: 124.8,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    dedsteel: {
        num: 7500126,
        species: "Dedsteel",
        types: ["Steel", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 66,
            def: 110,
            spa: 78,
            spd: 124,
            spe: 75
        },
        abilities: {
            0: "Clear Pouch"
        },
        heightm: 1.055,
        weightkg: 103.6,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    avaizard: {
        num: 7500127,
        species: "Avaizard",
        types: ["Ice", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 96,
            atk: 110,
            def: 141,
            spa: 86,
            spd: 75,
            spe: 74
        },
        abilities: {
            0: "Kindle"
        },
        heightm: 1.855,
        weightkg: 297.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    cargolure: {
        num: 7500128,
        species: "Cargolure",
        types: ["Ghost", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 70,
            atk: 67,
            def: 120,
            spa: 125,
            spd: 100,
            spe: 70
        },
        abilities: {
            0: "Flame Body"
        },
        heightm: 0.89,
        weightkg: 44.65,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    alakario: {
        num: 7500129,
        species: "Alakario",
        types: ["Psychic", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 77,
            atk: 95,
            def: 72,
            spa: 140,
            spd: 97,
            spe: 120
        },
        abilities: {
            0: "Inner Focus"
        },
        heightm: 1.345,
        weightkg: 51,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    cazantor: {
        num: 7500130,
        species: "Cazantor",
        types: ["Bug", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 74,
            atk: 130,
            def: 116,
            spa: 62,
            spd: 74,
            spe: 97
        },
        abilities: {
            0: "Precision"
        },
        heightm: 1.05,
        weightkg: 75.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    gallete: {
        num: 7500131,
        species: "Gallete",
        types: ["Fighting", "Ghost"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 76,
            atk: 130,
            def: 75,
            spa: 84,
            spd: 99,
            spe: 82
        },
        abilities: {
            0: "Steadfast + Insomnia"
        },
        heightm: 1.345,
        weightkg: 32.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    aurantrum: {
        num: 7500132,
        species: "Aurantrum",
        types: ["Ice", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 112,
            atk: 109,
            def: 105,
            spa: 94,
            spd: 85,
            spe: 74
        },
        abilities: {
            0: "Absolute Zero"
        },
        heightm: 2.59,
        weightkg: 247.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    steelthorn: {
        num: 7500133,
        species: "Steelthorn",
        types: ["Grass", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 100,
            def: 176,
            spa: 65,
            spd: 101,
            spe: 35
        },
        abilities: {
            0: "Durable Barbs"
        },
        heightm: 5.09,
        weightkg: 255,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    venoqueen: {
        num: 7500134,
        species: "Venoqueen",
        types: ["Ground", "Bug"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 97,
            def: 73,
            spa: 92,
            spd: 80,
            spe: 83
        },
        abilities: {
            0: "Tainted Lens"
        },
        heightm: 1.4,
        weightkg: 36.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
       polyform2: {
        num: 7500135,
        species: "Polyform2",
        types: ["Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Aeroform"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        otherFormes: ["polyform2sunny", "polyform2sunsnow", "polyform2rainy", "polyform2snowy", "polyform2sandy"],
    },
    polyform2sunny: {
        num: 7500135,
        species: "Polyform2-Sunny",
        baseSpecies: "Polyform2",
        forme: "Sunny",
        formeLetter: "S",
        types: ["Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Drought"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    polyform2sunsnow: {
        num: 7500135,
        species: "Polyform2",
        species: "Polyform2-Sunsnow",
        baseSpecies: "Polyform2",
        forme: "Sunsnow",
        formeLetter: "S",
        types: ["Fire", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Solar Snow"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    polyform2rainy: {
        num: 7500135,
        species: "Polyform2",
        species: "Polyform2-Rainy",
        baseSpecies: "Polyform2",
        forme: "Rainy",
        formeLetter: "R",
        types: ["Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Drizzle"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    polyform2snowy: {
        num: 7500135,
        species: "Polyform2",
        species: "Polyform2-Snowy",
        baseSpecies: "Polyform2",
        forme: "Snowy",
        formeLetter: "S",
        types: ["Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Snow Warning"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    polyform2sandy: {
        num: 7500135,
        species: "Polyform2",
        species: "Polyform2-Sandy",
        baseSpecies: "Polyform2",
        forme: "Sandy",
        formeLetter: "S",
        types: ["Rock"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    scraftia: {
        num: 7500136,
        species: "Scraftia",
        types: ["Fighting", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 90,
            def: 112,
            spa: 67,
            spd: 120,
            spe: 79
        },
        abilities: {
            0: "Pure Thug"
        },
        heightm: 1.09,
        weightkg: 25.3,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    slurpum: {
        num: 7500137,
        species: "Slurpum",
        types: ["Fairy", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 81,
            atk: 115,
            def: 93,
            spa: 82,
            spd: 77,
            spe: 81
        },
        abilities: {
            0: "Therapeutic"
        },
        heightm: 0.99,
        weightkg: 22.1,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    thundersauras: {
        num: 7500138,
        species: "Thundersaurus",
        types: ["Grass", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 100,
            def: 90,
            spa: 120,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Rapid Growth"
        },
        heightm: 1.755,
        weightkg: 80.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    rhyperlax: {
        num: 7500139,
        species: "Rhyperlax",
        types: ["Normal", "Rock"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 147,
            atk: 135,
            def: 107,
            spa: 70,
            spd: 92,
            spe: 45
        },
        abilities: {
            0: "Amazing Bulk"
        },
        heightm: 2.25,
        weightkg: 371.4,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    lopunne: {
        num: 7500140,
        species: "Lopunne",
        types: ["Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 81,
            atk: 83,
            def: 82,
            spa: 62,
            spd: 88,
            spe: 112
        },
        abilities: {
            0: "Dieting Dolt"
        },
        heightm: 0.85,
        weightkg: 32.9,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    hootoise: {
        num: 7500141,
        species: "Hootoise",
        types: ["Water", "Ghost"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 83,
            atk: 96,
            def: 100,
            spa: 130,
            spd: 120,
            spe: 74
        },
        abilities: {
            0: "Mystic Wave"
        },
        heightm: 1.055,
        weightkg: 47.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    lietaur: {
        num: 7500142,
        species: "Lietaur",
        types: ["Normal", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 79,
            atk: 104,
            def: 82,
            spa: 74,
            spd: 70,
            spe: 118
        },
        abilities: {
            0: "Titanic Strength"
        },
        heightm: 1.245,
        weightkg: 62.95,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    laprazone: {
        num: 7500143,
        species: "Laprazone",
        types: ["Ice", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 106,
            atk: 77,
            def: 110,
            spa: 110,
            spd: 110,
            spe: 60
        },
        abilities: {
            0: "Hygroscopy"
        },
        heightm: 1.84,
        weightkg: 200,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    hydraulic: {
        num: 7500144,
        species: "Hydraulic",
        types: ["Water", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 103,
            atk: 92,
            def: 94,
            spa: 122,
            spd: 117,
            spe: 99
        },
        abilities: {
            0: "Wonderlust"
        },
        heightm: 4,
        weightkg: 161,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    klinkle: {
        num: 7500145,
        species: "Klinkle",
        types: ["Electric", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 70,
            atk: 75,
            def: 77,
            spa: 77,
            spd: 90,
            spe: 112
        },
        abilities: {
            0: "Magnetic Surge"
        },
        heightm: 0.51,
        weightkg: 42.6,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    metanlee: {
        num: 7500146,
        species: "Metanlee",
        types: ["Steel", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 138,
            def: 102,
            spa: 65,
            spd: 100,
            spe: 89
        },
        abilities: {
            0: "Reckless Body"
        },
        heightm: 1.55,
        weightkg: 299.9,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    kangoruskhan: {
        num: 7500147,
        species: "Kangorus-Khan",
        types: ["Normal", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 131,
            def: 95,
            spa: 60,
            spd: 85,
            spe: 103
        },
        abilities: {
            0: "Khanqueror"
        },
        heightm: 2.005,
        weightkg: 92.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    heebleye: {
        num: 7500148,
        species: "Heebleye",
        types: ["Psychic", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 72,
            atk: 85,
            def: 85,
            spa: 105,
            spd: 90,
            spe: 55
        },
        abilities: {
            0: "Synchrostall"
        },
        heightm: 0.75,
        weightkg: 22.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    crygotran: {
        num: 7500149,
        species: "Crygotran",
        types: ["Ice", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 70,
            def: 88,
            spa: 120,
            spd: 130,
            spe: 93
        },
        abilities: {
            0: "Permafrost"
        },
        heightm: 1.395,
        weightkg: 289,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    dugterra: {
        num: 7500150,
        species: "Dugterra",
        types: ["Fighting", "Ground"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 73,
            atk: 124,
            def: 70,
            spa: 61,
            spd: 80,
            spe: 134
        },
        abilities: {
            0: "Prison Cell"
        },
        heightm: 1.31,
        weightkg: 146.65,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    garbagorde: {
        num: 7500151,
        species: "Garbagorde",
        types: ["Poison", "Ground"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 105,
            atk: 105,
            def: 105,
            spa: 70,
            spd: 105,
            spe: 85
        },
        abilities: {
            0: "Heavy Armor"
        },
        heightm: 3.455,
        weightkg: 206.15,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    cherform: {
        num: 7500152,
        species: "Cherform",
        types: ["Grass", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 75,
            def: 80,
            spa: 88,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "Weather Front"
        },
        heightm: 0.405,
        weightkg: 5.05,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    porygrigus: {
        num: 7500153,
        species: "Porygrigus",
        types: ["Normal", "Ghost"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 65,
            def: 130,
            spa: 108,
            spd: 100,
            spe: 45
        },
        abilities: {
            0: "Negative Body"
        },
        heightm: 1.155,
        weightkg: 54.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    zoroldeo: {
        num: 7500154,
        species: "Zoroldeo",
        types: ["Dark", "Fighting"],
        baseStats: {
            hp: 75,
            atk: 106,
            def: 81,
            spa: 125,
            spd: 81,
            spe: 115
        },
        abilities: {
            0: "Justice Illusion"
        },
        weightkg: 64.8,
    },
    stundos: {
        num: 7500155,
        species: "Stundos",
        types: ["Ground", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 110,
            atk: 88,
            def: 115,
            spa: 123,
            spd: 115,
            spe: 76
        },
        abilities: {
            0: "Power Drain"
        },
        heightm: 1.155,
        weightkg: 31.8,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    /*{
    num: 7500156,
    species: "The unnamed illegitimate love child of Gastrodon and Magcargo",
    types: ["Fire","Ground"],
    genderRatio: {M: 0.0, F: 0.0},
    baseStats: {hp: 90, atk: 86, def: 104, spa: 96, spd: 91, spe: 44},
    abilities: {0: "Steam Sauna"},
    heightm: 0.84,
    weightkg: 42.45,
    color: "Black",
    eggGroups: ["Undiscovered"],
    },*/
    dank: {
        num: 7500157,
        species: "Dank",
        types: ["Dark", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 70,
            atk: 70,
            def: 120,
            spa: 107,
            spd: 120,
            spe: 102
        },
        abilities: {
            0: "Smoke Body"
        },
        heightm: 0.9,
        weightkg: 28.1,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    rapipom: {
        num: 7500158,
        species: "Rapipom",
        types: ["Normal", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 110,
            def: 78,
            spa: 80,
            spd: 83,
            spe: 120
        },
        abilities: {
            0: "Strike and Pass"
        },
        heightm: 1.445,
        weightkg: 57.65,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    tadpole: {
        num: 7500159,
        species: "Tadpole",
        types: ["Dragon", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 124,
            def: 105,
            spa: 95,
            spd: 105,
            spe: 85
        },
        abilities: {
            0: "Power Forward"
        },
        heightm: 1.755,
        weightkg: 132,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    draegarados: {
        num: 7500160,
        species: "Draegarados",
        types: ["Poison", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 110,
            def: 95,
            spa: 89,
            spd: 122,
            spe: 73
        },
        abilities: {
            0: "Venom Glare"
        },
        heightm: 4.15,
        weightkg: 158.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    grangoro: {
        num: 7500161,
        species: "Grangoro",
        types: ["Dark", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 102,
            atk: 132,
            def: 86,
            spa: 74,
            spd: 75,
            spe: 61
        },
        abilities: {
            0: "Terrorize"
        },
        heightm: 1.755,
        weightkg: 92.35,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    babuffe: {
        num: 7500162,
        species: "Babuffe",
        types: ["Ghost", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 137,
            atk: 84,
            def: 71,
            spa: 68,
            spd: 70,
            spe: 59
        },
        abilities: {
            0: "Toll Booth"
        },
        heightm: 1.195,
        weightkg: 20.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    galionz: {
        num: 7500163,
        species: "Galion-Z",
        types: ["Normal", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 80,
            def: 75,
            spa: 137,
            spd: 92,
            spe: 115
        },
        abilities: {
            0: "Adapting Body"
        },
        heightm: 1.195,
        weightkg: 145.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    steelweez: {
        num: 7500164,
        species: "Steelweez",
        types: ["Poison", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 82,
            def: 145,
            spa: 80,
            spd: 130,
            spe: 55
        },
        abilities: {
            0: "Clear Levitation"
        },
        heightm: 1.55,
        weightkg: 107.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    thunderbee: {
        num: 7500165,
        species: "Thundurbee",
        types: ["Bug", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 72,
            atk: 120,
            def: 55,
            spa: 85,
            spd: 90,
            spe: 105
        },
        abilities: {
            0: "Stunning Bug"
        },
        heightm: 1.245,
        weightkg: 45.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    gallatross: {
        num: 7500166,
        species: "Gallatross",
        types: ["Electric", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 86,
            atk: 130,
            def: 82,
            spa: 95,
            spd: 107,
            spe: 75
        },
        abilities: {
            0: "Ground Drive"
        },
        heightm: 1.855,
        weightkg: 66.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    victant: {
        num: 7500167,
        species: "Victant",
        types: ["Bug", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 111,
            def: 110,
            spa: 74,
            spd: 85,
            spe: 116
        },
        abilities: {
            0: "Champion"
        },
        heightm: 0.355,
        weightkg: 18.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    rosetteeternal: {
        num: 7500168,
        species: "Rosette-Eternal",
        types: ["Fairy", "Poison"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 77,
            atk: 67,
            def: 65,
            spa: 135,
            spd: 126,
            spe: 101
        },
        abilities: {
            0: "Poison Veil"
        },
        heightm: 0.545,
        weightkg: 7.7,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    conkelvire: {
        num: 7500169,
        species: "Conkelvire",
        types: ["Fighting", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 141,
            def: 91,
            spa: 85,
            spd: 85,
            spe: 80
        },
        abilities: {
            0: "Top Gear"
        },
        heightm: 1.6,
        weightkg: 112.8,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    landia: {
        num: 7500170,
        species: "Landia",
        types: ["Dragon", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 86,
            atk: 105,
            def: 100,
            spa: 75,
            spd: 107,
            spe: 74
        },
        abilities: {
            0: "Dragon Hide"
        },
        heightm: 1.345,
        weightkg: 79.8,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    odelay: {
        num: 7500171,
        species: "Odelay",
        types: ["Water", "Rock"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 78,
            atk: 91,
            def: 148,
            spa: 93,
            spd: 86,
            spe: 66
        },
        abilities: {
            0: "Horsetail Armor"
        },
        heightm: 1.5,
        weightkg: 96.45,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    thundercast: {
        num: 7500172,
        species: "Thundercast",
        types: ["Electric", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 74,
            atk: 102,
            def: 70,
            spa: 107,
            spd: 75,
            spe: 110
        },
        abilities: {
            0: "Weather Caster"
        },
        heightm: 0.9,
        weightkg: 30.9,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    sceptetteeternal: {
        num: 7500173,
        species: "Sceptette-Eternal",
        types: ["Fairy", "Grass"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 72,
            atk: 75,
            def: 66,
            spa: 125,
            spd: 116,
            spe: 126
        },
        abilities: {
            0: "Surge Bloom"
        },
        heightm: 0.95,
        weightkg: 26.55,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    raillink: {
        num: 7500174,
        species: "Rail Link",
        types: ["Normal", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 170,
            atk: 135,
            def: 82,
            spa: 102,
            spd: 65,
            spe: 90
        },
        abilities: {
            0: "Choo Choo"
        },
        heightm: 8.255,
        weightkg: 264.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    agrippa: {
        num: 7500175,
        species: "Agrippa",
        types: ["Fighting", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 134,
            def: 99,
            spa: 74,
            spd: 80,
            spe: 74
        },
        abilities: {
            0: "Caestus"
        },
        heightm: 1.855,
        weightkg: 103,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    basculinbasculin: {
        num: 7500176,
        species: "Basculin-Basculin",
        types: ["Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 102,
            def: 75,
            spa: 90,
            spd: 65,
            spe: 108
        },
        abilities: {
            0: "Fusion Powered"
        },
        heightm: 0.99,
        weightkg: 18,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mewelli: {
        num: 7500177,
        species: "Mewelli",
        types: ["Water", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 97,
            def: 102,
            spa: 97,
            spd: 102,
            spe: 81
        },
        abilities: {
            0: "Unparalleled Technique"
        },
        heightm: 1.31,
        weightkg: 69.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    bael: {
        num: 7500178,
        species: "Bael",
        types: ["Ghost", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 86,
            atk: 110,
            def: 100,
            spa: 82,
            spd: 88,
            spe: 100
        },
        abilities: {
            0: "Obliterate"
        },
        heightm: 3.045,
        weightkg: 158.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    simigoat: {
        num: 7500179,
        species: "Simigoat",
        types: ["Fire", "Grass"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 109,
            atk: 109,
            def: 72,
            spa: 107,
            spd: 82,
            spe: 94
        },
        abilities: {
            0: "Vegetarian"
        },
        heightm: 1.345,
        weightkg: 59.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    miltrank: {
        num: 7500180,
        species: "Miltrank",
        types: ["Normal", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 101,
            atk: 105,
            def: 105,
            spa: 85,
            spd: 100,
            spe: 88
        },
        abilities: {
            0: "Thermogenesis"
        },
        heightm: 1.445,
        weightkg: 252.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    furfraught: {
        num: 7500181,
        species: "Furfraught",
        types: ["Normal", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 91,
            atk: 103,
            def: 101,
            spa: 79,
            spd: 92,
            spe: 93
        },
        abilities: {
            0: "Shaggy Coat"
        },
        heightm: 1.395,
        weightkg: 59,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    tyranking: {
        num: 7500182,
        species: "Tyranking",
        types: ["Rock", "Poison"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 128,
            def: 103,
            spa: 100,
            spd: 97,
            spe: 83
        },
        abilities: {
            0: "Venom Stream"
        },
        heightm: 1.705,
        weightkg: 132,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    supermuk: {
        num: 7500183,
        species: "Supermuk",
        types: ["Ghost", "Poison"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 105,
            atk: 112,
            def: 108,
            spa: 71,
            spd: 97,
            spe: 62
        },
        abilities: {
            0: "Golden Touch"
        },
        heightm: 1.445,
        weightkg: 34.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mentor: {
        num: 7500184,
        species: "Mentor",
        types: ["Ghost", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 117,
            def: 132,
            spa: 80,
            spd: 132,
            spe: 57
        },
        abilities: {
            0: "Black Hole"
        },
        heightm: 1.905,
        weightkg: 328.3,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    elektra: {
        num: 7500185,
        species: "Elektra",
        types: ["Psychic", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 57,
            atk: 50,
            def: 57,
            spa: 127,
            spd: 87,
            spe: 150
        },
        abilities: {
            0: "Echo"
        },
        heightm: 1.345,
        weightkg: 57.3,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    escagon: {
        num: 7500186,
        species: "Escagon",
        types: ["Dragon", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 128,
            def: 103,
            spa: 80,
            spd: 103,
            spe: 70
        },
        abilities: {
            0: "Hyper Protection"
        },
        heightm: 1.5,
        weightkg: 57.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    golmanitan: {
        num: 7500187,
        species: "Golmanitan",
        types: ["Ground", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 142,
            def: 70,
            spa: 43,
            spd: 70,
            spe: 95
        },
        abilities: {
            0: "Careless Force"
        },
        heightm: 2.045,
        weightkg: 211.45,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    sunflorrim: {
        num: 7500188,
        species: "Sunflorrim",
        types: ["Grass"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 77,
            def: 72,
            spa: 106,
            spd: 91,
            spe: 67
        },
        abilities: {
            0: "Photosynthetic Grace"
        },
        heightm: 0.65,
        weightkg: 8.9,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    unconventional: {
        num: 7500189,
        species: "Unconventional",
        types: ["Fire", "Rock"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 87,
            atk: 82,
            def: 100,
            spa: 132,
            spd: 87,
            spe: 70
        },
        abilities: {
            0: "Sand Slurp"
        },
        heightm: 1.345,
        weightkg: 181.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    ambiccino: {
        num: 7500190,
        species: "Ambiccino",
        types: ["Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 113,
            def: 78,
            spa: 78,
            spd: 78,
            spe: 130
        },
        abilities: {
            0: "Technician"
        },
        heightm: 0.85,
        weightkg: 13.9,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    parp: {
        num: 7500191,
        species: "Parp",
        types: ["Normal", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 74,
            atk: 89,
            def: 65,
            spa: 86,
            spd: 67,
            spe: 120
        },
        abilities: {
            0: "Completely Serious"
        },
        heightm: 1.04,
        weightkg: 34.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    zyflare: {
        num: 7500192,
        species: "Zyflare",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 106,
            atk: 120,
            def: 90,
            spa: 100,
            spd: 115,
            spe: 80
        },
        abilities: {
            0: "Sun Aura"
        },
        heightm: 2.945,
        weightkg: 165,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    probs: {
        num: 7500193,
        species: "Probs",
        types: ["Dragon", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 67,
            def: 122,
            spa: 92,
            spd: 140,
            spe: 90
        },
        abilities: {
            0: "Mine Field"
        },
        heightm: 1.4,
        weightkg: 190,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    hentai: {
        num: 7500194,
        species: "Hentai",
        types: ["Poison", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 80,
            def: 88,
            spa: 120,
            spd: 120,
            spe: 98
        },
        abilities: {
            0: "Greek Fire"
        },
        heightm: 1.65,
        weightkg: 242.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    tornastar: {
        num: 7500195,
        species: "Tornastar",
        types: ["Flying", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 90,
            def: 100,
            spa: 131,
            spd: 90,
            spe: 85
        },
        abilities: {
            0: "Tropical Storm"
        },
        heightm: 1.245,
        weightkg: 49,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    magmovire: {
        num: 7500196,
        species: "Magmovire",
        types: ["Fire", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 119,
            def: 77,
            spa: 120,
            spd: 100,
            spe: 99
        },
        abilities: {
            0: "Flame Drive"
        },
        heightm: 1.7,
        weightkg: 103.3,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    volgon: {
        num: 7500197,
        species: "Volgon",
        types: ["Ground", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 93,
            atk: 100,
            def: 100,
            spa: 127,
            spd: 92,
            spe: 86
        },
        abilities: {
            0: "Levitate"
        },
        heightm: 1.755,
        weightkg: 63.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    tapuloom: {
        num: 7500198,
        species: "Tapu Loom",
        types: ["Grass", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 140,
            def: 100,
            spa: 75,
            spd: 80,
            spe: 75
        },
        abilities: {
            0: "Grassy Heal"
        },
        heightm: 1.55,
        weightkg: 42.35,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    lucashadow: {
        num: 7500199,
        species: "Lucashadow",
        types: ["Fighting", "Ghost"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 131,
            def: 80,
            spa: 110,
            spd: 80,
            spe: 120
        },
        abilities: {
            0: "Technician + Inner Focus"
        },
        heightm: 0.95,
        weightkg: 38.1,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    cradilego: {
        num: 7500200,
        species: "Cradilego",
        types: ["Poison", "Grass"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 102,
            atk: 67,
            def: 86,
            spa: 121,
            spd: 123,
            spe: 74
        },
        abilities: {
            0: "Insidious Tentacles"
        },
        heightm: 1.345,
        weightkg: 57.95,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    astrolithclear: {
        num: 7500201,
        species: "Astrolith-Clear",
        types: ["Rock", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 75,
            def: 85,
            spa: 75,
            spd: 85,
            spe: 65
        },
        abilities: {
            0: "Cosmology"
        },
        heightm: 0.3,
        weightkg: 20.4,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    kyraurem: {
        num: 7500202,
        species: "Kyraurem",
        types: ["Rock", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 120,
            atk: 140,
            def: 108,
            spa: 120,
            spd: 103,
            spe: 78
        },
        abilities: {
            0: "Sandy Storm"
        },
        heightm: 2.505,
        weightkg: 263.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    hetrarna: {
        num: 7500203,
        species: "Hetrarna",
        types: ["Fire", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 93,
            atk: 93,
            def: 114,
            spa: 137,
            spd: 114,
            spe: 91
        },
        abilities: {
            0: "Burning Heart"
        },
        heightm: 1.345,
        weightkg: 255.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    xurkivoir: {
        num: 7500204,
        species: "Xurkivoir",
        types: ["Electric", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 80,
            atk: 80,
            def: 68,
            spa: 165,
            spd: 100,
            spe: 90
        },
        abilities: {
            0: "Boost Trace"
        },
        heightm: 2.705,
        weightkg: 74.2,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    vikarona: {
        num: 7500205,
        species: "Vikarona",
        types: ["Electric", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 91,
            atk: 75,
            def: 88,
            spa: 150,
            spd: 100,
            spe: 82
        },
        abilities: {
            0: "Hot Air Balloon"
        },
        heightm: 1.55,
        weightkg: 45.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mudgoat: {
        num: 7500206,
        species: "Mudgoat",
        types: ["Grass", "Ground"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 121,
            atk: 122,
            def: 91,
            spa: 86,
            spd: 93,
            spe: 61
        },
        abilities: {
            0: "Masochist"
        },
        heightm: 2.095,
        weightkg: 505.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    theridel: {
        num: 7500207,
        species: "Theridel",
        types: ["Ghost", "Ground"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 74,
            atk: 100,
            def: 90,
            spa: 145,
            spd: 85,
            spe: 105
        },
        abilities: {
            0: "Flaming Presence"
        },
        heightm: 1.145,
        weightkg: 51.15,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    shrek: {
        num: 7500208,
        species: "Shrek",
        types: ["Grass", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 55,
            def: 87,
            spa: 90,
            spd: 97,
            spe: 67
        },
        abilities: {
            0: "Fatal Grace"
        },
        heightm: 0.955,
        weightkg: 21.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    vitality: {
        num: 7500209,
        species: "Vitality",
        types: ["Normal", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    necromega: {
        num: 7500210,
        species: "Necromega",
        types: ["Flying", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 91,
            atk: 91,
            def: 100,
            spa: 131,
            spd: 92,
            spe: 90
        },
        abilities: {
            0: "Kaleidocope"
        },
        heightm: 2.15,
        weightkg: 140.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    malaquanid: {
        num: 7500211,
        species: "Malaquanid",
        types: ["Dark", "Bug"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 87,
            atk: 91,
            def: 100,
            spa: 69,
            spd: 113,
            spe: 67
        },
        abilities: {
            0: "Contra-Bubble"
        },
        heightm: 1.65,
        weightkg: 64.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    scrapunny: {
        num: 7500212,
        species: "Scrapunny",
        types: ["Normal", "Dark"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 93,
            def: 109,
            spa: 59,
            spd: 115,
            spe: 91
        },
        abilities: {
            0: "Mean Girl"
        },
        heightm: 1.14,
        weightkg: 31.65,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    bezog: {
        num: 7500213,
        species: "Bezong",
        types: ["Normal", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 113,
            atk: 114,
            def: 100,
            spa: 67,
            spd: 100,
            spe: 46
        },
        abilities: {
            0: "Hazmat Fur"
        },
        heightm: 1.705,
        weightkg: 161,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    valcro: {
        num: 7500214,
        species: "Valcro",
        types: ["Normal", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 92,
            def: 97,
            spa: 82,
            spd: 97,
            spe: 122
        },
        abilities: {
            0: "Tech Equip"
        },
        heightm: 2.055,
        weightkg: 87.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    smelly: {
        num: 7500215,
        species: "Smelly",
        types: ["Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 57,
            def: 85,
            spa: 57,
            spd: 90,
            spe: 85
        },
        abilities: {
            0: "Technical System"
        },
        heightm: 1.75,
        weightkg: 79.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    tapumeme: {
        num: 7500216,
        species: "Tapu Meme",
        types: ["Psychic", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 81,
            def: 81,
            spa: 133,
            spd: 141,
            spe: 103
        },
        abilities: {
            0: "Serene Surge"
        },
        heightm: 0.9,
        weightkg: 12.55,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    comcott: {
        num: 7500217,
        species: "Comcott",
        types: ["Fairy", "Grass"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 65,
            atk: 69,
            def: 97,
            spa: 89,
            spd: 102,
            spe: 118
        },
        abilities: {
            0: "Indulgence"
        },
        heightm: 0.405,
        weightkg: 3.45,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    minislashmeteor: {
        num: 7500218,
        species: "Minislash-Meteor",
        types: ["Rock", "Ghost"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 70,
            atk: 65,
            def: 135,
            spa: 65,
            spd: 135,
            spe: 70
        },
        abilities: {
            0: "Stance Shield"
        },
        heightm: 1,
        weightkg: 46.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    crematoria: {
        num: 7500219,
        species: "Crematoria",
        types: ["Flying", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 104,
            atk: 81,
            def: 78,
            spa: 139,
            spd: 107,
            spe: 100
        },
        abilities: {
            0: "Ashes to Ashes"
        },
        heightm: 1.155,
        weightkg: 48.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    crematoriamegax: {
        num: 7500219,
        species: "Crematoria-Mega X",
        baseSpecies: "Crematoria",
        forme: "Mega",
        formeLetter: "X",
        types: ["Flying", "Dragon"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 104,
            atk: 127,
            def: 111,
            spa: 160,
            spd: 107,
            spe: 100
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.7,
        weightkg: 117,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },

    crematoriamegay: {
        num: 7500219,
        species: "Crematoria-Mega Y",
        baseSpecies: "Crematoria",
        forme: "Mega",
        formeLetter: "Y",
        types: ["Flying", "Psychic"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 104,
            atk: 101,
            def: 78,
            spa: 189,
            spd: 137,
            spe: 100
        },
        abilities: {
            0: "Drought"
        },
        heightm: 1.7,
        weightkg: 107,
        color: "Orange",
        eggGroups: ["Undiscovered"],
    },
    pherrothorn: {
        num: 7500220,
        species: "Pherothorn",
        types: ["Bug", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 72,
            atk: 115,
            def: 94,
            spa: 95,
            spd: 96,
            spe: 95
        },
        abilities: {
            0: "Beast Barbs"
        },
        heightm: 1.395,
        weightkg: 67.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    archking: {
        num: 7500221,
        species: "Archking",
        types: ["Water", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 145,
            def: 100,
            spa: 91,
            spd: 67,
            spe: 102
        },
        abilities: {
            0: "Determination"
        },
        heightm: 1.35,
        weightkg: 46,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    slampa: {
        num: 7500222,
        species: "Slampa",
        types: ["Water", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 96,
            atk: 77,
            def: 107,
            spa: 127,
            spd: 95,
            spe: 43
        },
        abilities: {
            0: "Outrageous"
        },
        heightm: 2.3,
        weightkg: 131.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    slampamega: {
        num: 7500222,
        species: "Slampa-Mega",
        baseSpecies: "Slampa",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dragon"],
        genderRatio: {
            M: 0.60,
            F: 0.40
        },
        baseStats: {
            hp: 96,
            atk: 77,
            def: 177,
            spa: 157,
            spd: 95,
            spe: 43
        },
        abilities: {
            0: "Shell Armor"
        },
        heightm: 2.3,
        weightkg: 163.25,
        color: "Pink",
        eggGroups: ["Monster", ],
    },
    decidactyl: {
        num: 7500223,
        species: "Decidactyl",
        types: ["Ghost", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 89,
            atk: 116,
            def: 80,
            spa: 90,
            spd: 97,
            spe: 110
        },
        abilities: {
            0: "Wood Head"
        },
        heightm: 1.7,
        weightkg: 47.8,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    lycanape: {
        num: 7500224,
        species: "Lycanape",
        types: ["Rock", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 119,
            def: 78,
            spa: 89,
            spd: 78,
            spe: 120
        },
        abilities: {
            0: "Blaze Rush"
        },
        heightm: 0.99,
        weightkg: 40,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    golisoptops: {
        num: 7500225,
        species: "Golisotops",
        types: ["Bug", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 77,
            atk: 130,
            def: 132,
            spa: 72,
            spd: 90,
            spe: 70
        },
        abilities: {
            0: "Swift Retreat"
        },
        heightm: 1.655,
        weightkg: 74.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    pewearalola: {
        num: 7500226,
        species: "Perwear-Alola",
        types: ["Fighting", "Dark"],
        baseStats: {
            hp: 102,
            atk: 102,
            def: 80,
            spa: 75,
            spd: 72,
            spe: 97
        },
        abilities: {
            0: "Fluffy Fur"
        },

    },

    mudape: {
        num: 7500227,
        species: "Mudape",
        types: ["Fighting", "Ground"],
        baseStats: {
            hp: 92,
            atk: 125,
            def: 90,
            spa: 67,
            spd: 87,
            spe: 75
        },
        abilities: {
            0: "Champion's Spirit"
        },

    },

    kira: {
        num: 7500228,
        species: "Kira",
        types: ["Dragon", "Steel"],
        baseStats: {
            hp: 75,
            atk: 173,
            def: 132,
            spa: 79,
            spd: 65,
            spe: 101
        },
        abilities: {
            0: "Beast's Focus"
        },

    },

    exelegoalola: {
        num: 7500229,
        species: "Exelego-Alola",
        types: ["Rock", "Dragon"],
        baseStats: {
            hp: 105,
            atk: 83,
            def: 71,
            spa: 131,
            spd: 113,
            spe: 95
        },
        abilities: {
            0: "Frisky Beast"
        },

    },

    joltarina: {
        num: 7500230,
        species: "Joltarina",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 82,
            atk: 79,
            def: 77,
            spa: 128,
            spd: 115,
            spe: 105
        },
        abilities: {
            0: "Volt Torrent"
        },

    },

    dhelchamp: {
        num: 7500231,
        species: "Dhelchamp",
        types: ["Grass", "Fighting"],
        baseStats: {
            hp: 100,
            atk: 147,
            def: 90,
            spa: 75,
            spd: 100,
            spe: 47
        },
        abilities: {
            0: "Ancient Mariner"
        },

    },

    mimian: {
        num: 7500232,
        species: "Mimian",
        types: ["Psychic", "Fighting"],
        baseStats: {
            hp: 100,
            atk: 115,
            def: 95,
            spa: 70,
            spd: 95,
            spe: 110
        },
        abilities: {
            0: "Monkey See Monkey Do"
        },

    },

    aerodako: {
        num: 7500233,
        species: "Aero Dako",
        types: ["Rock", "Electric"],
        baseStats: {
            hp: 75,
            atk: 130,
            def: 75,
            spa: 77,
            spd: 75,
            spe: 150
        },
        abilities: {
            0: "Rocky Surge"
        },

    },

    aerodakomega: {
        num: 7500233,
        species: "Aero Dako-Mega",
        baseSpecies: "Aero Dako",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Electric"],
        baseStats: {
            hp: 75,
            atk: 160,
            def: 95,
            spa: 87,
            spd: 95,
            spe: 170
        },
        abilities: {
            0: "Tough Claws"
        },

    },

    tapujojo: {
        num: 7500234,
        species: "Tapu Jojo",
        types: ["Ice", "Electric"],
        baseStats: {
            hp: 67,
            atk: 82,
            def: 60,
            spa: 125,
            spd: 85,
            spe: 132
        },
        abilities: {
            0: "Supercharge Surge"
        },

    },

    magicarticgear: {
        num: 7500235,
        species: "Magic Artic Gear",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 105,
            atk: 90,
            def: 127,
            spa: 112,
            spd: 120,
            spe: 75
        },
        abilities: {
            0: "Broken Heart"
        },

    },

    necroltres: {
        num: 7500236,
        species: "Necroltres",
        types: ["Psychic", "Fire"],
        baseStats: {
            hp: 113,
            atk: 103,
            def: 100,
            spa: 126,
            spd: 95,
            spe: 91
        },
        abilities: {
            0: "Diamond Armor"
        },

    },

    kartanbull: {
        num: 7500237,
        species: "Kartanbull",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 85,
            atk: 151,
            def: 113,
            spa: 60,
            spd: 46,
            spe: 97
        },
        abilities: {
            0: "Subdue"
        },

    },

    venustoise: {
        num: 7500238,
        species: "Venustoise",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 89,
            atk: 92,
            def: 101,
            spa: 102,
            spd: 112,
            spe: 89
        },
        abilities: {
            0: "Sun Bath"
        },

    },

    venustoisemegag: {
        num: 7500238,
        species: "Venustoise-Mega G",
        baseSpecies: "Venustoise",
        forme: "Mega",
        formeLetter: "G",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 89,
            atk: 110,
            def: 141,
            spa: 124,
            spd: 132,
            spe: 89
        },
        abilities: {
            0: "Thick Fat"
        },

    },

    venustoisemegab: {
        num: 7500238,
        species: "Venustoise-Mega B",
        baseSpecies: "Venustoise",
        forme: "Mega",
        formeLetter: "B",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 89,
            atk: 112,
            def: 121,
            spa: 152,
            spd: 122,
            spe: 89
        },
        abilities: {
            0: "Mega Launcher"
        },

    },

    kingkek: {
        num: 7500239,
        species: "King Kek",
        types: ["Normal"],
        baseStats: {
            hp: 115,
            atk: 135,
            def: 95,
            spa: 72,
            spd: 102,
            spe: 80
        },
        abilities: {
            0: "Lazy Camo"
        },

    },

    sigillow: {
        num: 7500240,
        species: "Sigillow",
        types: ["Normal", "Psychic"],
        baseStats: {
            hp: 76,
            atk: 81,
            def: 80,
            spa: 99,
            spd: 75,
            spe: 121
        },
        abilities: {
            0: "Overwhelming"
        },

    },
    covally: {
        num: 7500241,
        species: "Covally",
        types: ["Normal", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallyfire: {
        num: 7500241,
        species: "Covally-Fire",
        baseSpecies: "Covally",
        forme: "Fire",
        formeLetter: "F",
        types: ["Fire", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallywater: {
        num: 7500241,
        species: "Covally-Water",
        baseSpecies: "Covally",
        forme: "Water",
        formeLetter: "W",
        types: ["Water", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallyelectric: {
        num: 7500241,
        species: "Covally-Electric",
        baseSpecies: "Covally",
        forme: "Electric",
        formeLetter: "E",
        types: ["Electric", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallygrass: {
        num: 7500241,
        species: "Covally-Grass",
        baseSpecies: "Covally",
        forme: "Grass",
        formeLetter: "G",
        types: ["Grass", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallyice: {
        num: 7500241,
        species: "Covally-Ice",
        baseSpecies: "Covally",
        forme: "Ice",
        formeLetter: "I",
        types: ["Ice", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallyfighting: {
        num: 7500241,
        species: "Covally-Fighting",
        baseSpecies: "Covally",
        forme: "Fighting",
        formeLetter: "H",
        types: ["Fighting", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallypoison: {
        num: 7500241,
        species: "Covally-Poison",
        baseSpecies: "Covally",
        forme: "Poison",
        formeLetter: "P",
        types: ["Poison", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallyground: {
        num: 7500241,
        species: "Covally-Ground",
        baseSpecies: "Covally",
        forme: "Ground",
        formeLetter: "Q",
        types: ["Ground", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallyflying: {
        num: 7500241,
        species: "Covally-Fire",
        baseSpecies: "Covally",
        forme: "Flying",
        formeLetter: "L",
        types: ["Flying", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallypsychic: {
        num: 7500241,
        species: "Covally-Psychic",
        baseSpecies: "Covally",
        forme: "Psychic",
        formeLetter: "Y",
        types: ["Fire", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },


    covallybug: {
        num: 7500241,
        species: "Covally-Bug",
        baseSpecies: "Covally",
        forme: "Bug",
        formeLetter: "B",
        types: ["Fire", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallyrock: {
        num: 7500241,
        species: "Covally-Rock",
        baseSpecies: "Covally",
        forme: "Rock",
        formeLetter: "R",
        types: ["Rock", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallyghost: {
        num: 7500241,
        species: "Covally-Ghost",
        baseSpecies: "Covally",
        forme: "Ghost",
        formeLetter: "O",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallydragon: {
        num: 7500241,
        species: "Covally-Dragon",
        baseSpecies: "Covally",
        forme: "Dragon",
        formeLetter: "D",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallydark: {
        num: 7500241,
        species: "Covally-Dark",
        baseSpecies: "Covally",
        forme: "Dark",
        formeLetter: "K",
        types: ["Dark", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallysteel: {
        num: 7500241,
        species: "Covally-Steel",
        baseSpecies: "Covally",
        forme: "Steel",
        formeLetter: "S",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    covallyfairy: {
        num: 7500241,
        species: "Covally-Fairy",
        baseSpecies: "Covally",
        forme: "Fairy",
        formeLetter: "A",
        types: ["Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },

    },

    toxamola: {
        num: 7500242,
        species: "Toxamola",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 123,
            atk: 84,
            def: 131,
            spa: 61,
            spd: 109,
            spe: 65
        },
        abilities: {
            0: "Regenerator"
        },

    },
    melon: {
        num: 7500243,
        species: "Melon",
        types: ["Fairy", "Paychic"],
        baseStats: {
            hp: 97,
            atk: 71,
            def: 71,
            spa: 139,
            spd: 149,
            spe: 75
        },
        abilities: {
            0: "Pixie Grace"
        },
    },

    melonpirouette: {
        num: 7500243,
        species: "Melon-Pirouette",
        baseSpecies: "Pokemon",
        forme: "Pirouette",
        formeLetter: "P",
        types: ["Fairy", "Fighting"],
        baseStats: {
            hp: 97,
            atk: 139,
            def: 75,
            spa: 71,
            spd: 71,
            spe: 149
        },
        abilities: {
            0: "Pixie Grace"
        },
    },

    kyutomwhite: {
        num: 7500244,
        species: "Kyutom-White",
        types: ["Ice", "Electric"],
        baseStats: {
            hp: 87,
            atk: 95,
            def: 93,
            spa: 132,
            spd: 93,
            spe: 108
        },
        abilities: {
            0: "Turborise"
        },
    },

    xernemite: {
        num: 7500245,
        species: "Xernemite",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 90,
            atk: 83,
            def: 92,
            spa: 113,
            spd: 86,
            spe: 82
        },
        abilities: {
            0: "Pixie Lure"
        },
    },

    cherron: {
        num: 7500246,
        species: "Cherron",
        types: ["Grass", "Ground"],
        baseStats: {
            hp: 105,
            atk: 125,
            def: 105,
            spa: 93,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "Flower Power"
        },
    },

    cherronprimal: {
        num: 7500246,
        species: "Cherron-Primal",
        baseSpecies: "Cherron",
        forme: "Primal",
        formeLetter: "P",
        types: ["Grass", "Fire"],
        baseStats: {
            hp: 105,
            atk: 155,
            def: 125,
            spa: 143,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "A1"
        },
    },

    dialcatty: {
        num: 7500247,
        species: "Dialcatty",
        types: ["Steel", "Normal"],
        baseStats: {
            hp: 85,
            atk: 107,
            def: 92,
            spa: 107,
            spd: 77,
            spe: 110
        },
        abilities: {
            0: "Normalized Enemy"
        },
    },

    lunatic: {
        num: 7500248,
        species: "Lunatic",
        types: ["Fairy", "Ghost"],
        baseStats: {
            hp: 118,
            atk: 79,
            def: 90,
            spa: 120,
            spd: 110,
            spe: 63
        },
        abilities: {
            0: "Fungal Shield"
        },
    },

    granho: {
        num: 7500249,
        species: "Gran-Ho",
        types: ["Fairy", "Fire"],
        baseStats: {
            hp: 100,
            atk: 140,
            def: 100,
            spa: 85,
            spd: 110,
            spe: 69
        },
        abilities: {
            0: "Pressurate"
        },
    },

    lies: {
        num: 7500250,
        species: "Lies",
        types: ["Fairy", "Dark"],
        baseStats: {
            hp: 115,
            atk: 109,
            def: 72,
            spa: 109,
            spd: 74,
            spe: 122
        },
        abilities: {
            0: "Mana Potion"
        },
    },

    viva: {
        num: 7500251,
        species: "Viva",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 110,
            atk: 86,
            def: 88,
            spa: 120,
            spd: 90,
            spe: 91
        },
        abilities: {
            0: "Piercing Gaze"
        },
    },

    girutukumuka: {
        num: 7500252,
        species: "Girutukumuka",
        types: ["Water", "Ghost"],
        baseStats: {
            hp: 122,
            atk: 90,
            def: 130,
            spa: 65,
            spd: 130,
            spe: 47
        },
        abilities: {
            0: "Pressured Innards"
        },
    },
    omneus: {
        num: 7500253,
        species: "Omneus",
        types: ["Water", "Normal"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneusfire: {
        num: 7500253,
        species: "Omneus-Fire",
        baseSpecies: "Omneus",
        forme: "Fire",
        formeLetter: "F",
        types: ["Water", "Fire"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneuswater: {
        num: 7500253,
        species: "Omneus-Water",
        baseSpecies: "Omneus",
        forme: "Water",
        formeLetter: "W",
        types: ["Water"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneuselectric: {
        num: 7500253,
        species: "Omneus-Electric",
        baseSpecies: "Omneus",
        forme: "Electric",
        formeLetter: "E",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneusgrass: {
        num: 7500253,
        species: "Omneus-Grass",
        baseSpecies: "Omneus",
        forme: "Grass",
        formeLetter: "G",
        types: ["Water", "Grass"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneusice: {
        num: 7500253,
        species: "Omneus-Ice",
        baseSpecies: "Omneus",
        forme: "Ice",
        formeLetter: "I",
        types: ["Water", "Ice"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneusfighting: {
        num: 7500253,
        species: "Omneus-Fighting",
        baseSpecies: "Omneus",
        forme: "Fighting",
        formeLetter: "H",
        types: ["Water", "Fighting"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneuspoison: {
        num: 7500253,
        species: "Omneus-Poison",
        baseSpecies: "Omneus",
        forme: "Poison",
        formeLetter: "P",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneusground: {
        num: 7500253,
        species: "Omneus-Ground",
        baseSpecies: "Omneus",
        forme: "Ground",
        formeLetter: "U",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneusflying: {
        num: 7500253,
        species: "Omneus-Flying",
        baseSpecies: "Omneus",
        forme: "Flying",
        formeLetter: "L",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneuspsychic: {
        num: 7500253,
        species: "Omneus-Psychic",
        baseSpecies: "Omneus",
        forme: "Psychic",
        formeLetter: "Y",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneusbug: {
        num: 7500253,
        species: "Omneus-Bug",
        baseSpecies: "Omneus",
        forme: "Bug",
        formeLetter: "B",
        types: ["Water", "Bug"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneusdragon: {
        num: 7500253,
        species: "Omneus-Dragon",
        baseSpecies: "Omneus",
        forme: "Dragon",
        formeLetter: "D",
        types: ["Water", "Fire"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneusdark: {
        num: 7500253,
        species: "Omneus-Dark",
        baseSpecies: "Omneus",
        forme: "Dark",
        formeLetter: "D",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneussteel: {
        num: 7500253,
        species: "Omneus-Steel",
        baseSpecies: "Omneus",
        forme: "Steel",
        formeLetter: "S",
        types: ["Water", "Steel"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    omneusfairy: {
        num: 7500253,
        species: "Omneus-Fairy",
        baseSpecies: "Omneus",
        forme: "Fairy",
        formeLetter: "A",
        types: ["Water", "Fire"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
    },

    pheralie: {
        num: 7500254,
        species: "Pheralie",
        types: ["Ice", "Fighting"],
        baseStats: {
            hp: 75,
            atk: 123,
            def: 58,
            spa: 123,
            spd: 58,
            spe: 125
        },
        abilities: {
            0: "Extremist"
        },
    },

    pheraliemega: {
        num: 7500254,
        species: "Pheralie-Mega",
        baseSpecies: "Pheralie",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ice", "Fighting"],
        baseStats: {
            hp: 75,
            atk: 163,
            def: 58,
            spa: 163,
            spd: 58,
            spe: 145
        },
        abilities: {
            0: "Refrigerate"
        },
    },

    tsarakion: {
        num: 7500255,
        species: "Tsarakion",
        types: ["Grass", "Fighting"],
        baseStats: {
            hp: 82,
            atk: 140,
            def: 94,
            spa: 61,
            spd: 99,
            spe: 110
        },
        abilities: {
            0: "Queen's Command"
        },
    },

    scipod: {
        num: 7500256,
        species: "Scipod",
        types: ["Steel", "Bug"],
        baseStats: {
            hp: 82,
            atk: 137,
            def: 130,
            spa: 67,
            spd: 95,
            spe: 62
        },
        abilities: {
            0: "Guerilla Warfare"
        },
    },

    scipodmega: {
        num: 7500256,
        species: "Scipod-Mega",
        baseSpecies: "Scipod",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Bug"],
        baseStats: {
            hp: 82,
            atk: 157,
            def: 170,
            spa: 77,
            spd: 115,
            spe: 72
        },
        abilities: {
            0: "Technician"
        },
    },

    necrozmerupt: {
        num: 7500257,
        species: "Necrozmerupt",
        types: ["Fire", "Psychic"],
        baseStats: {
            hp: 103,
            atk: 103,
            def: 85,
            spa: 136,
            spd: 82,
            spe: 59
        },
        abilities: {
            0: "Soulforged Diamond"
        },
    },

    necrozmeruptmega: {
        num: 7500257,
        species: "Necrozmerupt-Mega",
        baseSpecies: "Necrozmerupt",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Psychic"],
        baseStats: {
            hp: 103,
            atk: 123,
            def: 115,
            spa: 176,
            spd: 112,
            spe: 39
        },
        abilities: {
            0: "Sheer Force"
        },
    },

    banekyu: {
        num: 7500258,
        species: "Banekyu",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 69,
            atk: 112,
            def: 82,
            spa: 76,
            spd: 94,
            spe: 90
        },
        abilities: {
            0: "Cursed Cloak"
        },
    },

    banekyumega: {
        num: 7500258,
        species: "Banekyu-Mega",
        baseSpecies: "Banekyu",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 69,
            atk: 162,
            def: 92,
            spa: 86,
            spd: 114,
            spe: 100
        },
        abilities: {
            0: "Prankster"
        },
    },

    ninxys: {
        num: 7500259,
        species: "Ninxys",
        types: ["Psychic", "Bug"],
        baseStats: {
            hp: 56,
            atk: 93,
            def: 68,
            spa: 93,
            spd: 70,
            spe: 190
        },
        abilities: {
            0: "Light Speed"
        },
    },

    heratana: {
        num: 7500260,
        species: "Heratana",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 70,
            atk: 173,
            def: 103,
            spa: 49,
            spd: 83,
            spe: 97
        },
        abilities: {
            0: "Gutsy Beast"
        },
    },

    heratanamega: {
        num: 7500260,
        species: "Heratana-Mega",
        baseSpecies: "Heratana",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 70,
            atk: 233,
            def: 143,
            spa: 49,
            spd: 93,
            spe: 87
        },
        abilities: {
            0: "Skill Link"
        },
    },

    plumin: {
        num: 7500261,
        species: "Plumin",
        types: ["Electric"],
        baseStats: {
            hp: 70,
            atk: 55,
            def: 55,
            spa: 90,
            spd: 90,
            spe: 105
        },
        abilities: {
            0: "Charged Up"
        },
    },

    oxyblissdefense: {
        num: 7500262,
        species: "Oxybliss-Defense",
        types: ["Psychic", "Normal"],
        baseStats: {
            hp: 162,
            atk: 40,
            def: 105,
            spa: 72,
            spd: 157,
            spe: 72
        },
        abilities: {
            0: "Quarantine"
        },
    },

    diggercatealola: {
        num: 7500263,
        species: "Diggercate-Alola",
        types: ["Normal", "Ground"],
        baseStats: {
            hp: 90,
            atk: 73,
            def: 83,
            spa: 55,
            spd: 88,
            spe: 87
        },
        abilities: {
            0: "High Stakes"
        },
    },

    inferperior: {
        num: 7500264,
        species: "Inferperior",
        types: ["Grass", "Fire"],
        baseStats: {
            hp: 75,
            atk: 89,
            def: 83,
            spa: 89,
            spd: 83,
            spe: 110
        },
        abilities: {
            0: "Blazing Contrary"
        },
    },

    mimukyu: {
        num: 7500265,
        species: "Mimukyu",
        types: ["Dark", "Fairy"],
        baseStats: {
            hp: 90,
            atk: 107,
            def: 87,
            spa: 67,
            spd: 112,
            spe: 83
        },
        abilities: {
            0: "Appropriation"
        },
    },

    axatree: {
        num: 7500266,
        species: "Axatree",
        types: ["Psychic", "Electric"],
        baseStats: {
            hp: 69,
            atk: 69,
            def: 58,
            spa: 174,
            spd: 83,
            spe: 121
        },
        abilities: {
            0: "Beast Guard"
        },
    },

    axatreemega: {
        num: 7500266,
        species: "Axatree-Mega",
        baseSpecies: "Axatree",
        forme: "Mega",
        formeLetter: "M",
        types: ["Psychic", "Electric"],
        baseStats: {
            hp: 69,
            atk: 69,
            def: 78,
            spa: 214,
            spd: 93,
            spe: 151
        },
        abilities: {
            0: "Trace"
        },
    },

    cresspal: {
        num: 7500267,
        species: "Cresspal",
        types: ["Normal", "Psychic"],
        baseStats: {
            hp: 112,
            atk: 80,
            def: 110,
            spa: 70,
            spd: 110,
            spe: 65
        },
        abilities: {
            0: "Fear Shield"
        },
    },

    necrior: {
        num: 7500268,
        species: "Necrior",
        types: ["Grass", "Psychic"],
        baseStats: {
            hp: 86,
            atk: 91,
            def: 100,
            spa: 120,
            spd: 92,
            spe: 115
        },
        abilities: {
            0: "Inverse Armor"
        },
    },

    cinshado: {
        num: 7500269,
        species: "Cinshado",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 82,
            atk: 130,
            def: 70,
            spa: 77,
            spd: 75,
            spe: 140
        },
        abilities: {
            0: "Frenzy"
        },
    },

    altellow: {
        num: 7500270,
        species: "Altellow",
        types: ["Dragon", "Normal"],
        baseStats: {
            hp: 77,
            atk: 87,
            def: 85,
            spa: 82,
            spd: 87,
            spe: 112
        },
        abilities: {
            0: "Puffy Cloud"
        },
    },

    altellowmega: {
        num: 7500270,
        species: "Altellow-Mega",
        baseSpecies: "Altellow",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 77,
            atk: 127,
            def: 105,
            spa: 122,
            spd: 87,
            spe: 112
        },
        abilities: {
            0: "Pixilate"
        },
    },

    rebell: {
        num: 7500271,
        species: "Rebell",
        types: ["Fighting", "Psychic"],
        baseStats: {
            hp: 70,
            atk: 85,
            def: 80,
            spa: 67,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Tinkering"
        },
    },

    combarde: {
        num: 7500272,
        species: "Combarde",
        types: ["Fighting", "Ground"],
        baseStats: {
            hp: 94,
            atk: 112,
            def: 100,
            spa: 83,
            spd: 77,
            spe: 75
        },
        abilities: {
            0: "Sluggish Aura"
        },
    },

    dittsey: {
        num: 7500273,
        species: "Dittsey",
        types: ["Normal"],
        baseStats: {
            hp: 167,
            atk: 31,
            def: 36,
            spa: 61,
            spd: 106,
            spe: 51
        },
        abilities: {
            0: "Troll"
        },
    },
    aravealola: {
        num: 7500274,
        species: "A Rave-Alola",
        types: ["Electric", "Normal"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolafire: {
        num: 7500274,
        species: "A Rave-Alola-Fire",
        baseSpecies: "A Rave-Alola",
        forme: "Fire",
        formeLetter: "F",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolawater: {
        num: 7500274,
        species: "A Rave-Alola-Water",
        baseSpecies: "A Rave-Alola",
        forme: "Water",
        formeLetter: "W",
        types: ["Electric", "Water"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolaelectric: {
        num: 7500274,
        species: "A Rave-Alola-Electric",
        baseSpecies: "A Rave-Alola",
        forme: "Electric",
        formeLetter: "E",
        types: ["Electric", ],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolagrass: {
        num: 7500274,
        species: "A Rave-Alola-Grass",
        baseSpecies: "A Rave-Alola",
        forme: "Grass",
        formeLetter: "G",
        types: ["Electric", "Grass"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolaice: {
        num: 7500274,
        species: "A Rave-Alola-Ice",
        baseSpecies: "A Rave-Alola",
        forme: "Ice",
        formeLetter: "I",
        types: ["Electric", "Ice"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolafighting: {
        num: 7500274,
        species: "A Rave-Alola-Fighting",
        baseSpecies: "A Rave-Alola",
        forme: "Fighting",
        formeLetter: "H",
        types: ["Electric", "Fighting"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolapoison: {
        num: 7500274,
        species: "A Rave-Alola-Poison",
        baseSpecies: "A Rave-Alola",
        forme: "Poison",
        formeLetter: "P",
        types: ["Electric", "Poison"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolaground: {
        num: 7500274,
        species: "A Rave-Alola-Ground",
        baseSpecies: "A Rave-Alola",
        forme: "Ground",
        formeLetter: "U",
        types: ["Electric", "Ground"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolaflying: {
        num: 7500274,
        species: "A Rave-Alola-Flying",
        baseSpecies: "A Rave-Alola",
        forme: "Flying",
        formeLetter: "L",
        types: ["Electric", "Flying"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolapsychic: {
        num: 7500274,
        species: "A Rave-Alola-Psychic",
        baseSpecies: "A Rave-Alola",
        forme: "Psychic",
        formeLetter: "Y",
        types: ["Electric", "Psychic"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolabug: {
        num: 7500274,
        species: "A Rave-Alola-Bug",
        baseSpecies: "A Rave-Alola",
        forme: "Bug",
        formeLetter: "B",
        types: ["Electric", "Bug"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolarock: {
        num: 7500274,
        species: "A Rave-Alola-Rock",
        baseSpecies: "A Rave-Alola",
        forme: "Rock",
        formeLetter: "R",
        types: ["Electric", "Rock"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolaghost: {
        num: 7500274,
        species: "A Rave-Alola-Ghost",
        baseSpecies: "A Rave-Alola",
        forme: "Ghost",
        formeLetter: "O",
        types: ["Electric", "Ghost"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealoladragon: {
        num: 7500274,
        species: "A Rave-Alola-Dragon",
        baseSpecies: "A Rave-Alola",
        forme: "Dragon",
        formeLetter: "D",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealoladark: {
        num: 7500274,
        species: "A Rave-Alola-Dark",
        baseSpecies: "A Rave-Alola",
        forme: "Dark",
        formeLetter: "K",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolasteel: {
        num: 7500274,
        species: "A Rave-Alola-Steel",
        baseSpecies: "A Rave-Alola",
        forme: "Steel",
        formeLetter: "S",
        types: ["Electric", "Steel"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    aravealolafairy: {
        num: 7500274,
        species: "A Rave-Alola-Fairy",
        baseSpecies: "A Rave-Alola",
        forme: "Fairy",
        formeLetter: "A",
        types: ["Electric", "Fairy"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
    },

    miminja: {
        num: 7500275,
        species: "Miminja",
        types: ["Dark", "Ghost"],
        baseStats: {
            hp: 63,
            atk: 112,
            def: 78,
            spa: 76,
            spd: 88,
            spe: 124
        },
        abilities: {
            0: "Resurrection"
        },
    },

    miminjareborn: {
        num: 7500275,
        species: "Miminja-Reborn",
        baseSpecies: "Pokemon",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Ghost"],
        baseStats: {
            hp: 63,
            atk: 162,
            def: 78,
            spa: 126,
            spd: 88,
            spe: 134
        },
        abilities: {
            0: "Resurrection"
        },
    },

    murkaleo: {
        num: 7500276,
        species: "Murkaleo",
        types: ["Flying", "Steel"],
        baseStats: {
            hp: 98,
            atk: 115,
            def: 79,
            spa: 99,
            spd: 81,
            spe: 114
        },
        abilities: {
            0: "Bamboozled"
        },
    },

    zecronaw: {
        num: 7500277,
        species: "Zecronaw",
        types: ["Electric", "Water"],
        baseStats: {
            hp: 82,
            atk: 130,
            def: 100,
            spa: 99,
            spd: 81,
            spe: 99
        },
        abilities: {
            0: "Tetra Force"
        },
    },

    quinda: {
        num: 7500278,
        species: "Quinda",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 102,
            atk: 102,
            def: 105,
            spa: 80,
            spd: 105,
            spe: 87
        },
        abilities: {
            0: "Weather Contradiction"
        },
    },

    sablegigas: {
        num: 7500279,
        species: "sablegigas",
        types: ["Normal", "Ghost"],
        baseStats: {
            hp: 90,
            atk: 122,
            def: 102,
            spa: 72,
            spd: 102,
            spe: 75
        },
        abilities: {
            0: "Slow Surge"
        },
    },

    sablegigasmega: {
        num: 7500279,
        species: "Sablegigas-Mega",
        baseSpecies: "Sablegigas",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Ghost"],
        baseStats: {
            hp: 90,
            atk: 132,
            def: 152,
            spa: 92,
            spd: 152,
            spe: 45
        },
        abilities: {
            0: "Magic Bounce"
        },
    },

    galvillonme: {
        num: 7500280,
        species: "Galvillon",
        types: ["Electric", "Flying"],
        baseStats: {
            hp: 90,
            atk: 79,
            def: 70,
            spa: 108,
            spd: 70,
            spe: 113
        },
        abilities: {
            0: "Compound Eyes"
        },
    },

    kyonun: {
        num: 7500281,
        species: "Kyonun",
        types: ["Electric", "Water"],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 90,
            spa: 122,
            spd: 122,
            spe: 92
        },
        abilities: {
            0: "Electron Rain"
        },
    },

    kyonunprimal: {
        num: 7500281,
        species: "Kyonun-Primal",
        baseSpecies: "Pokemon",
        forme: "Primal",
        formeLetter: "P",
        types: ["Electric", "Water"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 90,
            spa: 152,
            spd: 142,
            spe: 92
        },
        abilities: {
            0: "Primordial Sea"
        },
    },

    abomasorus: {
        num: 7500282,
        species: "Abomasorus",
        types: ["Ice", "Ground"],
        baseStats: {
            hp: 95,
            atk: 125,
            def: 90,
            spa: 105,
            spd: 90,
            spe: 80
        },
        abilities: {
            0: "Petrify"
        },
    },
    abomasorusmega: {
        num: 7500282,
        species: "Abomasorus-Mega",
        baseSpecies: "Pokemon",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ice", "Ground"],
        baseStats: {
            hp: 95,
            atk: 165,
            def: 120,
            spa: 145,
            spd: 110,
            spe: 50
        },
        abilities: {
            0: "Snow Warning"
        },
    },

    toxicario: {
        num: 7500283,
        species: "Toxicario",
        types: ["Poison", "Fighting"],
        baseStats: {
            hp: 86,
            atk: 118,
            def: 77,
            spa: 110,
            spd: 77,
            spe: 97
        },
        abilities: {
            0: "Triggered"
        },
    },

    toxicariomega: {
        num: 7500283,
        species: "Toxicario-Mega",
        baseSpecies: "Toxicario",
        forme: "Mega",
        formeLetter: "M",
        types: ["Poison", "Ground"],
        baseStats: {
            hp: 86,
            atk: 153,
            def: 95,
            spa: 135,
            spd: 77,
            spe: 119
        },
        abilities: {
            0: "Adaptability"
        },
    },

    washoxchromosome: {
        num: 7500284,
        species: "Washox-Chromosome",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 47,
            atk: 145,
            def: 100,
            spa: 145,
            spd: 102,
            spe: 110
        },
        abilities: {
            0: "Mitosis"
        },
    },

    washoxstrand: {
        num: 7500284,
        species: "Washox-Strand",
        baseSpecies: "Washox-Chromosome",
        forme: "Strand",
        formeLetter: "S",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 47,
            atk: 20,
            def: 14,
            spa: 20,
            spd: 14,
            spe: 120
        },
        abilities: {
            0: "Mitosis"
        },
    },

    hoorbok: {
        num: 7500285,
        species: "Hoorbok",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 90,
            atk: 135,
            def: 65,
            spa: 120,
            spd: 105,
            spe: 90
        },
        abilities: {
            0: "Prestidigitation"
        },
    },

    ninetalesprime: {
        num: 7500286,
        species: "Ninetales-Prime",
        types: ["Ice", "Fire"],
        baseStats: {
            hp: 83,
            atk: 81,
            def: 85,
            spa: 91,
            spd: 110,
            spe: 114
        },
        abilities: {
            0: "Solar Snow"
        },
    },

    blampa: {
        num: 7500287,
        species: "Blampa",
        types: ["Water", "Dragon"],
        baseStats: {
            hp: 88,
            atk: 81,
            def: 102,
            spa: 120,
            spd: 108,
            spe: 67
        },
        abilities: {
            0: "Torrential Rage"
        },
    },

    blampamega: {
        num: 7500287,
        species: "Blampa-Mega",
        baseSpecies: "Blampa",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dragon"],
        baseStats: {
            hp: 88,
            atk: 101,
            def: 122,
            spa: 170,
            spd: 118,
            spe: 67
        },
        abilities: {
            0: "Mega Launcher"
        },
    },

    origamiswan: {
        num: 7500288,
        species: "Origami-Swan",
        types: ["Psychic", "Steel"],
        baseStats: {
            hp: 87,
            atk: 82,
            def: 92,
            spa: 124,
            spd: 112,
            spe: 79
        },
        abilities: {
            0: "Fluttering Heart"
        },
    },

    kecleus: {
        num: 7500289,
        species: "Kecleus",
        types: ["Normal"],
        baseStats: {
            hp: 90,
            atk: 105,
            def: 100,
            spa: 105,
            spd: 120,
            spe: 100
        },
        abilities: {
            0: "Prototype"
        },
    },

    fearroh: {
        num: 7500290,
        species: "Fear-Roh",
        types: ["Flying"],
        baseStats: {
            hp: 85,
            atk: 125,
            def: 97,
            spa: 85,
            spd: 107,
            spe: 100
        },
        abilities: {
            0: "Sharpshooter"
        },
    },

    neoprene: {
        num: 7500291,
        species: "Neoprene",
        types: ["Steel"],
        baseStats: {
            hp: 100,
            atk: 90,
            def: 108,
            spa: 135,
            spd: 108,
            spe: 62
        },
        abilities: {
            0: "Rubber Up"
        },
    },

    maroramalola: {
        num: 7500292,
        species: "Maroram-Alola",
        types: ["Fire"],
        baseStats: {
            hp: 80,
            atk: 108,
            def: 108,
            spa: 108,
            spd: 108,
            spe: 80
        },
        abilities: {
            0: "Turbo Curse"
        },
    },

    genny: {
        num: 7500293,
        species: "Genny",
        types: ["Bug"],
        baseStats: {
            hp: 73,
            atk: 131,
            def: 87,
            spa: 115,
            spd: 87,
            spe: 95
        },
        abilities: {
            0: "Revved Up"
        },
    },

    sylvoko: {
        num: 7500294,
        species: "Sylvoko",
        types: ["Fairy"],
        baseStats: {
            hp: 82,
            atk: 100,
            def: 75,
            spa: 112,
            spd: 102,
            spe: 115
        },
        abilities: {
            0: "Misty Supercharge"
        },
    },

    miniancieore: {
        num: 7500295,
        species: "Miniancie-Ore",
        types: ["Rock"],
        baseStats: {
            hp: 55,
            atk: 80,
            def: 145,
            spa: 80,
            spd: 145,
            spe: 55
        },
        abilities: {
            0: "Crystallized Shield"
        },
    },

    minianciejewel: {
        num: 7500295,
        species: "Miniancie-Jewel",
        baseSpecies: "Miniancie-Ore",
        forme: "Jewel",
        formeLetter: "J",
        types: ["Rock"],
        baseStats: {
            hp: 55,
            atk: 145,
            def: 80,
            spa: 145,
            spd: 80,
            spe: 115
        },
        abilities: {
            0: "A1"
        },
    },

    tapudede: {
        num: 7500296,
        species: "Tapu Dede",
        types: ["Grass"],
        baseStats: {
            hp: 79,
            atk: 150,
            def: 110,
            spa: 85,
            spd: 100,
            spe: 57
        },
        abilities: {
            0: "Grassworker"
        },
    },

    shenala: {
        num: 7500297,
        species: "Shenala",
        types: ["Ghost"],
        baseStats: {
            hp: 69,
            atk: 111,
            def: 67,
            spa: 103,
            spd: 68,
            spe: 78
        },
        abilities: {
            0: "Shadow Guard"
        },
    },

    entir: {
        num: 7500298,
        species: "Entir",
        types: ["Fire", "Bug"],
        baseStats: {
            hp: 90,
            atk: 140,
            def: 92,
            spa: 72,
            spd: 72,
            spe: 112
        },
        abilities: {
            0: "Vexing Valor"
        },
    },

    entirmega: {
        num: 7500298,
        species: "Entir-Mega",
        baseSpecies: "Entir",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Flying"],
        baseStats: {
            hp: 90,
            atk: 170,
            def: 112,
            spa: 82,
            spd: 92,
            spe: 132
        },
        abilities: {
            0: "Aerilate"
        },
    },
    giramini: {
        num: 7500299,
        species: "Giramini",
        types: ["Ghost", "Rock"],
        baseStats: {
            hp: 110,
            atk: 80,
            def: 125,
            spa: 80,
            spd: 125,
            spe: 80
        },
        abilities: {
            0: "Compression"
        },
    },
    giraminiunleashed: {
        num: 7500299,
        species: "Giramini-Unleashed",
        baseSpecies: "Giramini",
        forme: "Unleashed",
        formeLetter: "U",
        types: ["Ghost", "Rock"],
        baseStats: {
            hp: 110,
            atk: 125,
            def: 80,
            spa: 125,
            spd: 80,
            spe: 140
        },
        abilities: {
            0: "Compression"
        },
    },

    aquapod: {
        num: 7500300,
        species: "Aquapod",
        types: ["Water", "Bug"],
        baseStats: {
            hp: 81,
            atk: 107,
            def: 126,
            spa: 65,
            spd: 121,
            spe: 51
        },
        abilities: {
            0: "Bubble Slip"
        },
    },
    reshivine: {
        num: 7500301,
        species: "Reshivine",
        types: ["Dragon", "Grass"],
        baseStats: {
            hp: 80,
            atk: 90,
            def: 90,
            spa: 120,
            spd: 100,
            spe: 105
        },
        abilities: {
            0: "Spiral Flames"
        },
    },
    rosium: {
        num: 7500302,
        species: "Rosium",
        types: ["Poison", "Grass"],
        baseStats: {
            hp: 80,
            atk: 86,
            def: 92,
            spa: 114,
            spd: 112,
            spe: 95
        },
        abilities: {
            0: "Operation Overgrow"
        },
    },

    valveon: {
        num: 7500303,
        species: "Valveon",
        types: ["Water", "Fairy"],
        baseStats: {
            hp: 122,
            atk: 75,
            def: 72,
            spa: 120,
            spd: 122,
            spe: 72
        },
        abilities: {
            0: "Pixie Absorb"
        },
    },

    raptalon: {
        num: 7500304,
        species: "Raptalon",
        types: ["Flying", "Fire"],
        baseStats: {
            hp: 91,
            atk: 110,
            def: 80,
            spa: 72,
            spd: 74,
            spe: 123
        },
        abilities: {
            0: "Fearless"
        },
    },

    deoxurkoutlet: {
        num: 7500305,
        species: "Deoxurk-Outlet",
        types: ["Psychic", "Electric"],
        baseStats: {
            hp: 86,
            atk: 79,
            def: 120,
            spa: 131,
            spd: 120,
            spe: 86
        },
        abilities: {
            0: "Peer Pressure"
        },
    },

    dio: {
        num: 7500306,
        species: "Dio",
        types: ["Steel", "Normal"],
        baseStats: {
            hp: 90,
            atk: 90,
            def: 100,
            spa: 92,
            spd: 87,
            spe: 60
        },
        abilities: {
            0: "Time Stop"
        },
    },

    generott: {
        num: 7500307,
        species: "Generott",
        types: ["Water", "Bug"],
        baseStats: {
            hp: 85,
            atk: 120,
            def: 90,
            spa: 120,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Upgrade"
        },
    },

    darminup: {
        num: 7500308,
        species: "Darmin-Up",
        types: ["Fire", "Normal"],
        baseStats: {
            hp: 137,
            atk: 160,
            def: 87,
            spa: 72,
            spd: 70,
            spe: 107
        },
        abilities: {
            0: "Rhythm"
        },
    },

    darmindown: {
        num: 7500308,
        species: "Darmin-Down",
        baseSpecies: "Darmin-Up",
        forme: "Down",
        formeLetter: "D",
        types: ["Fire", "Psychic"],
        baseStats: {
            hp: 137,
            atk: 72,
            def: 137,
            spa: 160,
            spd: 120,
            spe: 67
        },
        abilities: {
            0: "Rhythm"
        },
    },

    conkeldurus: {
        num: 7500309,
        species: "Conkeldurus",
        types: ["Electric", "Fighting"],
        baseStats: {
            hp: 92,
            atk: 135,
            def: 92,
            spa: 90,
            spd: 92,
            spe: 81
        },
        abilities: {
            0: "Lightning Fist"
        },
    },

    fisktres: {
        num: 7500310,
        species: "Fisktres",
        types: ["Ground", "Flying"],
        baseStats: {
            hp: 111,
            atk: 83,
            def: 90,
            spa: 120,
            spd: 100,
            spe: 61
        },
        abilities: {
            0: "Flare Wings"
        },
    },

    landana: {
        num: 7500311,
        species: "Landana",
        types: ["Ground", "Flying"],
        baseStats: {
            hp: 82,
            atk: 137,
            def: 77,
            spa: 96,
            spd: 75,
            spe: 112
        },
        abilities: {
            0: "Pecking Order"
        },
    },

    regimiki: {
        num: 7500312,
        species: "Regimiki",
        types: ["Normal", "Water"],
        baseStats: {
            hp: 82,
            atk: 130,
            def: 120,
            spa: 55,
            spd: 120,
            spe: 72
        },
        abilities: {
            0: "Vomit"
        },
    },

    star: {
        num: 7500313,
        species: "Star",
        types: ["Fairy", "Dark"],
        baseStats: {
            hp: 78,
            atk: 72,
            def: 81,
            spa: 131,
            spd: 93,
            spe: 121
        },
        abilities: {
            0: "Magical Wand"
        },
    },

    starbutterfly: {
        num: 7500313,
        species: "Star-Butterfly",
        baseSpecies: "Star",
        forme: "Butterfly",
        formeLetter: "B",
        types: ["Fairy", "Dark"],
        baseStats: {
            hp: 78,
            atk: 122,
            def: 81,
            spa: 181,
            spd: 103,
            spe: 131
        },
        abilities: {
            0: "Magical Wand"
        },
    },

    gardelego: {
        num: 7500314,
        species: "Gardelego",
        types: ["Fairy", "Poison"],
        baseStats: {
            hp: 108,
            atk: 59,
            def: 76,
            spa: 126,
            spd: 123,
            spe: 101
        },
        abilities: {
            0: "Beast's Copycat"
        },
    },

    gardelegomega: {
        num: 7500314,
        species: "Gardelego-Mega",
        baseSpecies: "Gardelego",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fairy", "Poison"],
        baseStats: {
            hp: 108,
            atk: 79,
            def: 76,
            spa: 166,
            spd: 143,
            spe: 121
        },
        abilities: {
            0: "Pixilate"
        },
    },

    maltarione: {
        num: 7500315,
        species: "Maltarione",
        types: ["Steel", "Dragon"],
        baseStats: {
            hp: 82,
            atk: 70,
            def: 102,
            spa: 120,
            spd: 107,
            spe: 70
        },
        abilities: {
            0: "Medical Expert"
        },
    },

    maltarionemega: {
        num: 7500315,
        species: "Maltarione-Mega",
        baseSpecies: "Maltarione",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 82,
            atk: 110,
            def: 122,
            spa: 160,
            spd: 107,
            spe: 70
        },
        abilities: {
            0: "Pixilate"
        },
    },

    maskle: {
        num: 7500316,
        species: "Maskle",
        types: ["Bug", "Rock"],
        baseStats: {
            hp: 55,
            atk: 45,
            def: 156,
            spa: 65,
            spd: 166,
            spe: 52
        },
        abilities: {
            0: "Bad Influence"
        },
    },

    cowardice: {
        num: 7500317,
        species: "Cowardice",
        types: ["Bug", "Ground"],
        baseStats: {
            hp: 78,
            atk: 112,
            def: 133,
            spa: 70,
            spd: 98,
            spe: 48
        },
        abilities: {
            0: "Scout"
        },
    },

    guzzbro: {
        num: 7500318,
        species: "Guzzbro",
        types: ["Dragon", "Water"],
        baseStats: {
            hp: 168,
            atk: 88,
            def: 92,
            spa: 110,
            spd: 77,
            spe: 37
        },
        abilities: {
            0: "Rejuvenation"
        },
    },

    guzzbromega: {
        num: 7500318,
        species: "Guzzbro-Mega",
        baseSpecies: "Guzzbro",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Water"],
        baseStats: {
            hp: 168,
            atk: 88,
            def: 162,
            spa: 140,
            spd: 77,
            spe: 37
        },
        abilities: {
            0: "Shell Armor"
        },
    },

    zycannon: {
        num: 7500319,
        species: "Zycannon",
        types: ["Ground", "Normal"],
        baseStats: {
            hp: 67,
            atk: 130,
            def: 73,
            spa: 68,
            spd: 80,
            spe: 107
        },
        abilities: {
            0: "Force Drain"
        },
    },

    zeeeee: {
        num: 7500320,
        species: "Zeeeee",
        types: ["Ground", "Normal"],
        baseStats: {
            hp: 82,
            atk: 91,
            def: 100,
            spa: 63,
            spd: 90,
            spe: 75
        },
        abilities: {
            0: "Foundation"
        },
    },

    zeeeeecomplete: {
        num: 7500320,
        species: "Zeeeee-Complete",
        baseSpecies: "Zeeeee",
        forme: "Complete",
        formeLetter: "C",
        types: ["Ground", "Normal"],
        baseStats: {
            hp: 190,
            atk: 91,
            def: 100,
            spa: 63,
            spd: 90,
            spe: 75
        },
        abilities: {
            0: "Foundation"
        },
    },

    peridot: {
        num: 7500321,
        species: "Peridot",
        types: ["Flying", "Electric"],
        baseStats: {
            hp: 83,
            atk: 84,
            def: 93,
            spa: 121,
            spd: 70,
            spe: 112
        },
        abilities: {
            0: "Limb Enhancers"
        },
    },

    peridotmega: {
        num: 7500321,
        species: "Peridot-Mega",
        baseSpecies: "Peridot",
        forme: "Mega",
        formeLetter: "M",
        types: ["Flying", "Electric"],
        baseStats: {
            hp: 83,
            atk: 84,
            def: 98,
            spa: 186,
            spd: 80,
            spe: 132
        },
        abilities: {
            0: "No Guard"
        },
    },

    stundicuno: {
        num: 7500322,
        species: "Stundicuno",
        types: ["Ground", "Ice"],
        baseStats: {
            hp: 115,
            atk: 75,
            def: 94,
            spa: 100,
            spd: 120,
            spe: 60
        },
        abilities: {
            0: "Dirt Nap"
        },
    },

    aloha: {
        num: 7500323,
        species: "Aloha",
        types: ["Psychic", "Dark"],
        baseStats: {
            hp: 103,
            atk: 137,
            def: 79,
            spa: 112,
            spd: 74,
            spe: 103
        },
        abilities: {
            0: "Hydrodynamic"
        },
    },

    alohamega: {
        num: 7500323,
        species: "Aloha-Mega",
        baseSpecies: "Aloha",
        forme: "Mega",
        formeLetter: "M",
        types: ["Psychic", "Dark"],
        baseStats: {
            hp: 103,
            atk: 157,
            def: 109,
            spa: 127,
            spd: 99,
            spe: 113
        },
        abilities: {
            0: "Strong Jaw"
        },
    },

    zekloom: {
        num: 7500324,
        species: "Zekloom",
        types: ["Electric", "Fighting"],
        baseStats: {
            hp: 80,
            atk: 140,
            def: 100,
            spa: 90,
            spd: 100,
            spe: 100
        },
        abilities: {
            0: "Engineer"
        },
    },

    gengalure: {
        num: 7500325,
        species: "Gengalure",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 85,
            spa: 147,
            spd: 92,
            spe: 105
        },
        abilities: {
            0: "Blessed Protection"
        },
    },

    ferrolord: {
        num: 7500326,
        species: "Ferrolord",
        types: ["Steel", "Dragon"],
        baseStats: {
            hp: 148,
            atk: 107,
            def: 102,
            spa: 75,
            spd: 104,
            spe: 31
        },
        abilities: {
            0: "Barbs Boost"
        },
    },

    dad: {
        num: 7500327,
        species: "Dad",
        types: ["Normal", "Dark"],
        baseStats: {
            hp: 69,
            atk: 60,
            def: 51,
            spa: 41,
            spd: 51,
            spe: 56
        },
        abilities: {
            0: "Mirror Mirror"
        },
    },

    glaive: {
        num: 7500328,
        species: "Glaive",
        types: ["Ghost", "Ground"],
        baseStats: {
            hp: 100,
            atk: 130,
            def: 145,
            spa: 73,
            spd: 90,
            spe: 63
        },
        abilities: {
            0: "Atmospheric Pull"
        },
    },

    glaiveprimal: {
        num: 7500328,
        species: "Glaive-Primal",
        baseSpecies: "Glaive",
        forme: "Primal",
        formeLetter: "P",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 100,
            atk: 160,
            def: 165,
            spa: 123,
            spd: 90,
            spe: 63
        },
        abilities: {
            0: "Desolate Land"
        },
    },

    kyurpedo: {
        num: 7500329,
        species: "Kyurpedo",
        types: ["Ice", "Dark"],
        baseStats: {
            hp: 105,
            atk: 145,
            def: 70,
            spa: 125,
            spd: 75,
            spe: 95
        },
        abilities: {
            0: "Volt Boost"
        },
    },

    kyurpedomega: {
        num: 7500329,
        species: "Kyurpedo-Mega",
        baseSpecies: "Kyurpedo",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ice", "Dark"],
        baseStats: {
            hp: 105,
            atk: 165,
            def: 100,
            spa: 140,
            spd: 100,
            spe: 105
        },
        abilities: {
            0: "Strong Jaw"
        },
    },

    gearchamp: {
        num: 7500330,
        species: "Gearchamp",
        types: ["Fighting", "Fairy"],
        baseStats: {
            hp: 80,
            atk: 84,
            def: 95,
            spa: 105,
            spd: 95,
            spe: 85
        },
        abilities: {
            0: "Soul Power"
        },
    },

    luau: {
        num: 7500331,
        species: "Luau",
        types: ["Ghost", "Ground"],
        baseStats: {
            hp: 113,
            atk: 107,
            def: 79,
            spa: 139,
            spd: 97,
            spe: 73
        },
        abilities: {
            0: "Land's Shield"
        },
    },

    luaumega: {
        num: 7500331,
        species: "Luau-Mega",
        baseSpecies: "Luau",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Ground"],
        baseStats: {
            hp: 113,
            atk: 127,
            def: 109,
            spa: 179,
            spd: 127,
            spe: 53
        },
        abilities: {
            0: "Sheer Force"
        },
    },

    dotsensu: {
        num: 7500332,
        species: "Dot-Sensu",
        types: ["Normal", "Ghost"],
        baseStats: {
            hp: 61,
            atk: 59,
            def: 59,
            spa: 93,
            spd: 59,
            spe: 90
        },
        abilities: {
            0: "Danceposter"
        },
    },

    darkhunter: {
        num: 7500333,
        species: "Dark Hunter",
        types: ["Rock", "Dark"],
        baseStats: {
            hp: 78,
            atk: 123,
            def: 83,
            spa: 105,
            spd: 83,
            spe: 114
        },
        abilities: {
            0: "Night Terror"
        },
    },

    guzzpex: {
        num: 7500334,
        species: "Guzzpex",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 136,
            atk: 82,
            def: 122,
            spa: 75,
            spd: 117,
            spe: 39
        },
        abilities: {
            0: "Merciless Beast"
        },
    },

    dedede: {
        num: 7500335,
        species: "Dedede",
        types: ["Ice", "Electric"],
        baseStats: {
            hp: 66,
            atk: 66,
            def: 61,
            spa: 83,
            spd: 66,
            spe: 98
        },
        abilities: {
            0: "Royal Strength"
        },
    },

    cosmill: {
        num: 7500336,
        species: "Cosmill",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 56,
            atk: 44,
            def: 40,
            spa: 44,
            spd: 40,
            spe: 38
        },
        abilities: {
            0: "Godlike Powers"
        },
    },

    maginera: {
        num: 7500337,
        species: "Maginera",
        types: ["Fairy", "Fire"],
        baseStats: {
            hp: 87,
            atk: 110,
            def: 117,
            spa: 110,
            spd: 117,
            spe: 62
        },
        abilities: {
            0: "Soften Up"
        },
    },

    catdeer: {
        num: 7500338,
        species: "Catdeer",
        types: ["Normal", "Dark"],
        baseStats: {
            hp: 79,
            atk: 102,
            def: 66,
            spa: 97,
            spd: 68,
            spe: 106
        },
        abilities: {
            0: "Tricky Glare"
        },
    },

    hooptrio: {
        num: 7500339,
        species: "Hooptrio",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 75,
            atk: 140,
            def: 55,
            spa: 120,
            spd: 100,
            spe: 100
        },
        abilities: {
            0: "Confiscation"
        },
    },

    fablefin: {
        num: 7500340,
        species: "Fablefin",
        types: ["Fairy"],
        baseStats: {
            hp: 85,
            atk: 72,
            def: 106,
            spa: 100,
            spd: 125,
            spe: 80
        },
        abilities: {
            0: "Misty Mind"
        },
    },

    klefz: {
        num: 7500341,
        species: "Klef-Z",
        types: ["Normal", "Fairy"],
        baseStats: {
            hp: 81,
            atk: 80,
            def: 80,
            spa: 117,
            spd: 81,
            spe: 102
        },
        abilities: {
            0: "Familiar Maneuvering"
        },
    },

    tropisteela: {
        num: 7500342,
        species: "Tropisteela",
        types: ["Flying", "Steel"],
        baseStats: {
            hp: 100,
            atk: 90,
            def: 104,
            spa: 90,
            spd: 104,
            spe: 56
        },
        abilities: {
            0: "Stat Harvesting"
        },
    },

    pokemon: {
        num: 7500343,
        species: "Pokemon",
        types: ["Water", "Fighting"],
        baseStats: {
            hp: 77,
            atk: 129,
            def: 76,
            spa: 114,
            spd: 86,
            spe: 110
        },
        abilities: {
            0: "Ability"
        },
    },

    nosegod: {
        num: 7500344,
        species: "Nose God",
        types: ["Normal", "Rock"],
        baseStats: {
            hp: 75,
            atk: 103,
            def: 133,
            spa: 88,
            spd: 110,
            spe: 80
        },
        abilities: {
            0: "Type Trap"
        },
    },

    swampterra: {
        num: 7500345,
        species: "Swampterra",
        types: ["Ground", "Water"],
        baseStats: {
            hp: 107,
            atk: 119,
            def: 107,
            spa: 90,
            spd: 97,
            spe: 68
        },
        abilities: {
            0: "Uninhabitable"
        },
    },

    swampterramega: {
        num: 7500345,
        species: "Swampterra-Mega",
        baseSpecies: "Swampterra",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ground", "Water"],
        baseStats: {
            hp: 107,
            atk: 159,
            def: 127,
            spa: 100,
            spd: 117,
            spe: 78
        },
        abilities: {
            0: "Swift Swim"
        },
    },

    zeklade: {
        num: 7500346,
        species: "Zeklade",
        types: ["Dragon", "Steel"],
        baseStats: {
            hp: 100,
            atk: 130,
            def: 135,
            spa: 82,
            spd: 95,
            spe: 62
        },
        abilities: {
            0: "Unstable Voltage"
        },
    },

    grequa: {
        num: 7500347,
        species: "Grequa",
        types: ["Water", "Bug"],
        baseStats: {
            hp: 82,
            atk: 92,
            def: 89,
            spa: 86,
            spd: 111,
            spe: 92
        },
        abilities: {
            0: "Huge Bubble"
        },
    },

    alteyer: {
        num: 7500348,
        species: "Alteyer",
        types: ["Ghost", "Flying"],
        baseStats: {
            hp: 86,
            atk: 98,
            def: 92,
            spa: 95,
            spd: 112,
            spe: 85
        },
        abilities: {
            0: "Constellation"
        },
    },

    alteyermega: {
        num: 7500348,
        species: "Alteyer-Mega",
        baseSpecies: "Alteyer",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 86,
            atk: 138,
            def: 112,
            spa: 135,
            spd: 112,
            spe: 85
        },
        abilities: {
            0: "Pixilate"
        },
    },
    scrafting: {
        num: 7500349,
        species: "Scrafting",
        types: ["Fighting", "Normal"],
        baseStats: {
            hp: 117,
            atk: 135,
            def: 115,
            spa: 80,
            spd: 97,
            spe: 89
        },
        abilities: {
            0: "Stare Down"
        },
    },

    not: {
        num: 7500350,
        species: "Not",
        types: ["Flying", "Normal"],
        baseStats: {
            hp: 94,
            atk: 85,
            def: 87,
            spa: 93,
            spd: 85,
            spe: 122
        },
        abilities: {
            0: "Ambition"
        },
    },

    notmega: {
        num: 7500350,
        species: "Not-Mega",
        baseSpecies: "Not",
        forme: "Mega",
        formeLetter: "M",
        types: ["Flying", "Normal"],
        baseStats: {
            hp: 94,
            atk: 85,
            def: 92,
            spa: 158,
            spd: 95,
            spe: 142
        },
        abilities: {
            0: "No Guard"
        },
    },

    joltsol: {
        num: 7500351,
        species: "Joltsol",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 75,
            atk: 107,
            def: 70,
            spa: 102,
            spd: 87,
            spe: 112
        },
        abilities: {
            0: "Power Surge"
        },
    },

    joltsolmega: {
        num: 7500351,
        species: "Joltsol-Mega",
        baseSpecies: "Joltsol",
        forme: "Mega",
        formeLetter: "M",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 75,
            atk: 127,
            def: 70,
            spa: 142,
            spd: 87,
            spe: 152
        },
        abilities: {
            0: "Magic Bounce"
        },
    },

    topaz: {
        num: 7500352,
        species: "Topaz",
        types: ["Rock", "Fairy"],
        baseStats: {
            hp: 90,
            atk: 92,
            def: 102,
            spa: 72,
            spd: 85,
            spe: 95
        },
        abilities: {
            0: "Power Of Two"
        },
    },

    dolphin: {
        num: 7500353,
        species: "Dolphin",
        types: ["Fire", "Normal"],
        baseStats: {
            hp: 122,
            atk: 124,
            def: 96,
            spa: 114,
            spd: 92,
            spe: 112
        },
        abilities: {
            0: "Lava Dive"
        },
    },

    snorligatr: {
        num: 7500354,
        species: "Snorligatr",
        types: ["Normal", "Water"],
        baseStats: {
            hp: 132,
            atk: 117,
            def: 92,
            spa: 82,
            spd: 106,
            spe: 64
        },
        abilities: {
            0: "Sheer Fat"
        },
    },

    emponite: {
        num: 7500355,
        species: "Emponite",
        types: ["Steel", "Dragon"],
        baseStats: {
            hp: 97,
            atk: 120,
            def: 101,
            spa: 115,
            spd: 110,
            spe: 80
        },
        abilities: {
            0: "Ocean Shield"
        },
    },

    leafrou: {
        num: 7500356,
        species: "Leafrou",
        types: ["Normal", "Grass"],
        baseStats: {
            hp: 80,
            atk: 105,
            def: 105,
            spa: 72,
            spd: 87,
            spe: 108
        },
        abilities: {
            0: "Chlorocoat"
        },
    },

    mimiblim: {
        num: 7500357,
        species: "Mimiblim",
        types: ["Ghost"],
        baseStats: {
            hp: 112,
            atk: 95,
            def: 72,
            spa: 80,
            spd: 89,
            spe: 98
        },
        abilities: {
            0: "Disguise Burden"
        },
    },

    warcanein: {
        num: 7500358,
        species: "Warcanein",
        types: ["Water", "Fire"],
        baseStats: {
            hp: 110,
            atk: 105,
            def: 95,
            spa: 107,
            spd: 95,
            spe: 90
        },
        abilities: {
            0: "Persistent Morale"
        },
    },

    zorarce: {
        num: 7500359,
        species: "Zorarce",
        types: ["Normal", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcefire: {
        num: 7500359,
        species: "Zorarce-Fire",
        baseSpecies: "Zorarce",
        forme: "Fire",
        formeLetter: "F",
        types: ["Fire", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcewater: {
        num: 7500359,
        species: "Zorarce-Water",
        baseSpecies: "Zorarce",
        forme: "Water",
        formeLetter: "W",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarceelectric: {
        num: 7500359,
        species: "Zorarce-Electric",
        baseSpecies: "Zorarce",
        forme: "Electric",
        formeLetter: "E",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcegrass: {
        num: 7500359,
        species: "Zorarce-Grass",
        baseSpecies: "Zorarce",
        forme: "Grass",
        formeLetter: "G",
        types: ["Grass", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarceice: {
        num: 7500359,
        species: "Zorarce-Ice",
        baseSpecies: "Zorarce",
        forme: "Ice",
        formeLetter: "I",
        types: ["Ice", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcefighting: {
        num: 7500359,
        species: "Zorarce-Fighting",
        baseSpecies: "Zorarce",
        forme: "Fighting",
        formeLetter: "H",
        types: ["Fighting", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcepoison: {
        num: 7500359,
        species: "Zorarce-Poison",
        baseSpecies: "Zorarce",
        forme: "Poison",
        formeLetter: "P",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarceground: {
        num: 7500359,
        species: "Zorarce-Ground",
        baseSpecies: "Zorarce",
        forme: "Ground",
        formeLetter: "U",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarceflying: {
        num: 7500359,
        species: "Zorarce-Flying",
        baseSpecies: "Zorarce",
        forme: "Flying",
        formeLetter: "L",
        types: ["Flying", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcepsychic: {
        num: 7500359,
        species: "Zorarce-Psychic",
        baseSpecies: "Zorarce",
        forme: "Psychic",
        formeLetter: "Y",
        types: ["Psychic", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcebug: {
        num: 7500359,
        species: "Zorarce-Bug",
        baseSpecies: "Zorarce",
        forme: "Bug",
        formeLetter: "B",
        types: ["Bug", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcerock: {
        num: 7500359,
        species: "Zorarce-Rock",
        baseSpecies: "Zorarce",
        forme: "Rock",
        formeLetter: "R",
        types: ["Rock", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarceghost: {
        num: 7500359,
        species: "Zorarce-Ghost",
        baseSpecies: "Zorarce",
        forme: "Ghost",
        formeLetter: "O",
        types: ["Ghost", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcedragon: {
        num: 7500359,
        species: "Zorarce-dragon",
        baseSpecies: "Zorarce",
        forme: "Dragon",
        formeLetter: "D",
        types: ["Dragon", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcedark: {
        num: 7500359,
        species: "Zorarce-Dark",
        baseSpecies: "Zorarce",
        forme: "Dark",
        formeLetter: "K",
        types: ["Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcesteel: {
        num: 7500359,
        species: "Zorarce-Steel",
        baseSpecies: "Zorarce",
        forme: "Steel",
        formeLetter: "S",
        types: ["Steel", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    zorarcefairy: {
        num: 7500359,
        species: "Zorarce-Fairy",
        baseSpecies: "Zorarce",
        forme: "Fairy",
        formeLetter: "A",
        types: ["Fairy", "Dark"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
    },

    happislashfriendly: {
        num: 7500360,
        species: "Happislash-Friendly",
        types: ["Ghost", "Normal"],
        baseStats: {
            hp: 80,
            atk: 27,
            def: 97,
            spa: 32,
            spd: 127,
            spe: 45
        },
        abilities: {
            0: "Unfriend"
        },
    },

    happislashunfriendly: {
        num: 7500360,
        species: "Happislash-Unfriendly",
        baseSpecies: "Happislash-Friendly",
        forme: "Unfriendly",
        formeLetter: "U",
        types: ["Ghost", "Normal"],
        baseStats: {
            hp: 80,
            atk: 97,
            def: 27,
            spa: 127,
            spd: 32,
            spe: 45
        },
        abilities: {
            0: "Unfriend"
        },
    },

    torkobulu: {
        num: 7500361,
        species: "Torko Bulu",
        types: ["Grass", "Fire"],
        baseStats: {
            hp: 70,
            atk: 107,
            def: 127,
            spa: 105,
            spd: 102,
            spe: 47
        },
        abilities: {
            0: "Photosynthesis Surge"
        },
    },

    pheroxish: {
        num: 7500362,
        species: "Pheroxish",
        types: ["Water", "Fighting"],
        baseStats: {
            hp: 69,
            atk: 122,
            def: 53,
            spa: 122,
            spd: 53,
            spe: 141
        },
        abilities: {
            0: "Dazzle Beast"
        },
    },

    padunk: {
        num: 7500363,
        species: "Padunk",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 93,
            atk: 101,
            def: 68,
            spa: 89,
            spd: 65,
            spe: 105
        },
        abilities: {
            0: "Rage Potion"
        },
    },

    magnelure: {
        num: 7500364,
        species: "Magnelure",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 65,
            atk: 62,
            def: 102,
            spa: 147,
            spd: 100,
            spe: 90
        },
        abilities: {
            0: "Blacksmith"
        },
    },

    shucklord: {
        num: 7500365,
        species: "Shucklord",
        types: ["Bug", "Dragon"],
        baseStats: {
            hp: 141,
            atk: 55,
            def: 141,
            spa: 73,
            spd: 141,
            spe: 24
        },
        abilities: {
            0: "Two-Faced"
        },
    },

    mtndew: {
        num: 7500366,
        species: "Mtn Dew",
        types: ["Steel", "Psychic"],
        baseStats: {
            hp: 79,
            atk: 114,
            def: 106,
            spa: 94,
            spd: 74,
            spe: 114
        },
        abilities: {
            0: "Contagious Yawn"
        },
    },

    altearnia: {
        num: 7500367,
        species: "Altearnia",
        types: ["Dragon", "Steel"],
        baseStats: {
            hp: 90,
            atk: 100,
            def: 102,
            spa: 109,
            spd: 110,
            spe: 72
        },
        abilities: {
            0: "Compassionate Soul"
        },
    },

    altearniamega: {
        num: 7500367,
        species: "Altearnia-Mega",
        baseSpecies: "Altearnia",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 90,
            atk: 140,
            def: 122,
            spa: 149,
            spd: 110,
            spe: 72
        },
        abilities: {
            0: "Pixilate"
        },
    },

    regigiot: {
        num: 7500368,
        species: "Regigiot",
        types: ["Flying", "Ice"],
        baseStats: {
            hp: 81,
            atk: 65,
            def: 87,
            spa: 105,
            spd: 135,
            spe: 95
        },
        abilities: {
            0: "Magical Ice"
        },
    },

    regigiotmega: {
        num: 7500368,
        species: "Regigiot-Mega",
        baseSpecies: "Regigiot",
        forme: "Mega",
        formeLetter: "M",
        types: ["Flying", "Ice"],
        baseStats: {
            hp: 81,
            atk: 65,
            def: 92,
            spa: 170,
            spd: 145,
            spe: 115
        },
        abilities: {
            0: "No Guard"
        },
    },

    kasukabe: {
        num: 7500369,
        species: "Kasukabe",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 109,
            atk: 117,
            def: 109,
            spa: 47,
            spd: 83,
            spe: 103
        },
        abilities: {
            0: "Genome Tree"
        },
    },

    sakamaki: {
        num: 7500370,
        species: "Sakamaki",
        types: ["Dragon", "Steel"],
        baseStats: {
            hp: 80,
            atk: 128,
            def: 100,
            spa: 90,
            spd: 85,
            spe: 115
        },
        abilities: {
            0: "Code Unknown"
        },
    },

    sakamakimega: {
        num: 7500370,
        species: "Sakamaki-Mega",
        baseSpecies: "Sakamaki",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Steel"],
        baseStats: {
            hp: 80,
            atk: 138,
            def: 150,
            spa: 100,
            spd: 95,
            spe: 135
        },
        abilities: {
            0: "Aerilate"
        },
    },

    mapuiasu: {
        num: 7500371,
        species: "Mapu Iasu",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 75,
            atk: 85,
            def: 93,
            spa: 98,
            spd: 120,
            spe: 90
        },
        abilities: {
            0: "Sensu Dancer"
        },
    },

    mapuauhe: {
        num: 7500372,
        species: "Mapu Auhe",
        types: ["Fire", "Grass"],
        baseStats: {
            hp: 75,
            atk: 120,
            def: 98,
            spa: 93,
            spd: 85,
            spe: 90
        },
        abilities: {
            0: "Baile Dancer"
        },
    },

    mapumoli: {
        num: 7500373,
        species: "Mapu Moli",
        types: ["Electric"],
        baseStats: {
            hp: 75,
            atk: 93,
            def: 89,
            spa: 98,
            spd: 85,
            spe: 120
        },
        abilities: {
            0: "Pom-Pom Dancer"
        },
    },

    mapubupa: {
        num: 7500374,
        species: "Mapu Bupa",
        types: ["Psychic"],
        baseStats: {
            hp: 75,
            atk: 90,
            def: 85,
            spa: 120,
            spd: 93,
            spe: 98
        },
        abilities: {
            0: "Pau Dancer"
        },
    },

    meazle: {
        num: 7500375,
        species: "Meazle",
        types: ["Psychic", "Poison"],
        baseStats: {
            hp: 84,
            atk: 82,
            def: 100,
            spa: 105,
            spd: 100,
            spe: 108
        },
        abilities: {
            0: "Ailment Master"
        },
    },

    parantis: {
        num: 7500376,
        species: "Parantis",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 75,
            atk: 110,
            def: 95,
            spa: 80,
            spd: 95,
            spe: 47
        },
        abilities: {
            0: "Thermophilic"
        },
    },

    dinna: {
        num: 7500377,
        species: "Dinna",
        types: ["Normal", "Psychic"],
        baseStats: {
            hp: 82,
            atk: 36,
            def: 46,
            spa: 57,
            spd: 51,
            spe: 56
        },
        abilities: {
            0: "Move~Stat"
        },
    },

    sylvias: {
        num: 7500378,
        species: "Sylvias",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 107,
            atk: 72,
            def: 97,
            spa: 110,
            spd: 130,
            spe: 85
        },
        abilities: {
            0: "Enchanted"
        },
    },

    sylviasmega: {
        num: 7500378,
        species: "Sylvias-Mega",
        baseSpecies: "Sylvias",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 107,
            atk: 92,
            def: 127,
            spa: 140,
            spd: 150,
            spe: 85
        },
        abilities: {
            0: "A1"
        },
    },

    mightyyvel: {
        num: 7500379,
        species: "Mighty Yvel",
        types: ["Dark"],
        baseStats: {
            hp: 101,
            atk: 110,
            def: 90,
            spa: 95,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Plan In Action"
        },
    },

    tyranwak: {
        num: 7500380,
        species: "Tyranwak",
        types: ["Rock", "Ghost"],
        baseStats: {
            hp: 81,
            atk: 110,
            def: 124,
            spa: 69,
            spd: 79,
            spe: 68
        },
        abilities: {
            0: "Enchanted Skull"
        },
    },

    volcanoemblem: {
        num: 7500381,
        species: "Volcano Emblem",
        types: ["Flying", "Fire"],
        baseStats: {
            hp: 78,
            atk: 84,
            def: 100,
            spa: 130,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Magic Sponge"
        },
    },

    pelikoko: {
        num: 7500382,
        species: "Peli Koko",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 65,
            atk: 82,
            def: 92,
            spa: 115,
            spd: 72,
            spe: 117
        },
        abilities: {
            0: "Thunderstorm Surge"
        },
    },

    mimitto: {
        num: 7500383,
        species: "Mimitto",
        types: ["Normal", "Fairy"],
        baseStats: {
            hp: 71,
            atk: 89,
            def: 64,
            spa: 49,
            spd: 76,
            spe: 72
        },
        abilities: {
            0: "Hide-And-Seek"
        },
    },

    eellee: {
        num: 7500384,
        species: "Eel-Lee",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 90,
            atk: 110,
            def: 90,
            spa: 100,
            spd: 120,
            spe: 71
        },
        abilities: {
            0: "Ground Leecher"
        },
    },

    celesir: {
        num: 7500385,
        species: "Celesir",
        types: ["Steel", "Bug"],
        baseStats: {
            hp: 81,
            atk: 133,
            def: 101,
            spa: 81,
            spd: 105,
            spe: 73
        },
        abilities: {
            0: "Bloodthirst"
        },
    },

    celesirmega: {
        num: 7500385,
        species: "Celesir-Mega",
        baseSpecies: "Celesir",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 81,
            atk: 163,
            def: 121,
            spa: 91,
            spd: 125,
            spe: 93
        },
        abilities: {
            0: "Aerilate"
        },
    },

    nymph: {
        num: 7500386,
        species: "Nymph",
        types: ["Fairy", "Grass"],
        baseStats: {
            hp: 88,
            atk: 85,
            def: 105,
            spa: 115,
            spd: 105,
            spe: 105
        },
        abilities: {
            0: "Deceiver"
        },
    },

    kyokid: {
        num: 7500387,
        species: "Kyokid",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 72,
            atk: 81,
            def: 70,
            spa: 120,
            spd: 97,
            spe: 112
        },
        abilities: {
            0: "Electrotorrent"
        },
    },

    kyokidprimal: {
        num: 7500387,
        species: "Kyokid-Primal",
        baseSpecies: "Kyokid",
        forme: "Primal",
        formeLetter: "P",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 72,
            atk: 131,
            def: 70,
            spa: 150,
            spd: 117,
            spe: 112
        },
        abilities: {
            0: "Primordial Sea"
        },
    },

    lemorusincarnate: {
        num: 7500388,
        species: "Lemorus-Incarnate",
        types: ["Ground", "Electric"],
        baseStats: {
            hp: 104,
            atk: 142,
            def: 110,
            spa: 85,
            spd: 72,
            spe: 73
        },
        abilities: {
            0: "Move Madness"
        },
    },

    absoko: {
        num: 7500389,
        species: "Absoko",
        types: ["Dark", "Fairy"],
        baseStats: {
            hp: 67,
            atk: 142,
            def: 72,
            spa: 85,
            spd: 67,
            spe: 122
        },
        abilities: {
            0: "Dark Surge"
        },
    },

    absokomega: {
        num: 7500389,
        species: "Absoko-Mega",
        baseSpecies: "Absoko",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Fairy"],
        baseStats: {
            hp: 67,
            atk: 162,
            def: 72,
            spa: 125,
            spd: 67,
            spe: 162
        },
        abilities: {
            0: "Magic Bounce"
        },
    },

    permafrost: {
        num: 7500390,
        species: "Permafrost",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 83,
            atk: 99,
            def: 84,
            spa: 72,
            spd: 84,
            spe: 94
        },
        abilities: {
            0: "Special Snowflake"
        },
    },

    giradino: {
        num: 7500391,
        species: "Giradino",
        types: ["Ghost", "Normal"],
        baseStats: {
            hp: 146,
            atk: 80,
            def: 113,
            spa: 80,
            spd: 113,
            spe: 70
        },
        abilities: {
            0: "Revitalize"
        },
    },

    giradinomega: {
        num: 7500391,
        species: "Giradino-Mega",
        baseSpecies: "Giradino",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 146,
            atk: 80,
            def: 153,
            spa: 100,
            spd: 153,
            spe: 70
        },
        abilities: {
            0: "Healer"
        },
    },
    xurkizard: {
        num: 7500392,
        species: "Xurkizard",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 80,
            atk: 86,
            def: 74,
            spa: 161,
            spd: 78,
            spe: 111
        },
        abilities: {
            0: "Blazing Beast"
        },
    },

    xurkizardmegax: {
        num: 7500392,
        species: "Xurkizard-Mega",
        baseSpecies: "Xurkizard",
        forme: "Mega",
        formeLetter: "X",
        types: ["Electric", "Dragon"],
        baseStats: {
            hp: 80,
            atk: 132,
            def: 107,
            spa: 182,
            spd: 78,
            spe: 111
        },
        abilities: {
            0: "Tough Claws"
        },
    },

    xurkizardmegay: {
        num: 7500392,
        species: "Xurkizard-Mega",
        baseSpecies: "Xurkizard",
        forme: "Mega",
        formeLetter: "Y",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 80,
            atk: 106,
            def: 74,
            spa: 211,
            spd: 108,
            spe: 111
        },
        abilities: {
            0: "Drought"
        },
    },

    skarmeye: {
        num: 7500393,
        species: "Skarmeye",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 81,
            atk: 103,
            def: 117,
            spa: 80,
            spd: 95,
            spe: 80
        },
        abilities: {
            0: "Light Armor"
        },
    },

    marshern: {
        num: 7500394,
        species: "Marshern",
        types: ["Ground", "Fairy"],
        baseStats: {
            hp: 98,
            atk: 108,
            def: 100,
            spa: 106,
            spd: 95,
            spe: 80
        },
        abilities: {
            0: "Soaking Aura"
        },
    },

    grovyltal: {
        num: 7500395,
        species: "Grovyltal",
        types: ["Grass", "Dark"],
        baseStats: {
            hp: 88,
            atk: 113,
            def: 70,
            spa: 113,
            spd: 81,
            spe: 117
        },
        abilities: {
            0: "Jailbreak"
        },
    },

    rairai: {
        num: 7500396,
        species: "Rairai",
        types: ["Dark", "Electric"],
        baseStats: {
            hp: 65,
            atk: 110,
            def: 73,
            spa: 133,
            spd: 85,
            spe: 118
        },
        abilities: {
            0: "Paralyzed With Fear"
        },
    },

    dramasnow: {
        num: 7500397,
        species: "Dramasnow",
        types: ["Dragon", "Ice"],
        baseStats: {
            hp: 94,
            atk: 86,
            def: 90,
            spa: 123,
            spd: 98,
            spe: 58
        },
        abilities: {
            0: "Ageless Blizzard"
        },
    },

    dramasnowmega: {
        num: 7500397,
        species: "Dramasnow-Mega",
        baseSpecies: "Dramasnow",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Ice"],
        baseStats: {
            hp: 94,
            atk: 126,
            def: 120,
            spa: 163,
            spd: 118,
            spe: 28
        },
        abilities: {
            0: "Snow Warning"
        },
    },

    chaosii: {
        num: 7500398,
        species: "Chaos II",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 70,
            spa: 90,
            spd: 70,
            spe: 120
        },
        abilities: {
            0: "Flip Out"
        },
    },
    slowmarina: {
        num: 7500399,
        species: "Slowmarina",
        types: ["Water", "Fairy"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 97,
            atk: 84,
            def: 102,
            spa: 123,
            spd: 108,
            spe: 55
        },
        abilities: {
            0: "Magical Voice"
        },
        heightm: 1.7,
        weightkg: 61.25,
        color: "Pink",
        eggGroups: ["Undiscovered"]
    },
    slowmarinamega: {
        num: 7500399,
        species: "Slowmarina-Mega",
        baseSpecies: "Slowmarina",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Fairy"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 97,
            atk: 84,
            def: 172,
            spa: 153,
            spd: 108,
            spe: 55
        },
        abilities: {
            0: "Shell Armor"
        },
        heightm: 1.9,
        weightkg: 99.25,
        color: "Pink",
        eggGroups: ["Undiscovered"]
    },
    kartaria: {
        num: 7500400,
        species: "Kartaria",
        types: ["Steel", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 70,
            atk: 140,
            def: 110,
            spa: 70,
            spd: 70,
            spe: 108
        },
        abilities: {
            0: "Cloud Boost"
        },
        heightm: 22.8,
        weightkg: 10.35,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    kartariamega: {
        num: 7500400,
        species: "Kartaria-Mega",
        baseSpecies: "Kartaria",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 70,
            atk: 180,
            def: 130,
            spa: 110,
            spd: 70,
            spe: 108
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 22.8,
        weightkg: 10.35,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    altarbat: {
        num: 7500401,
        species: "Altarbat",
        types: ["Poison", "Dragon"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 90,
            atk: 90,
            def: 95,
            spa: 80,
            spd: 102,
            spe: 115
        },
        abilities: {
            0: "Clean Aura"
        },
        heightm: 1.1,
        weightkg: 20.6,
        color: "Purple",
        eggGroups: ["Flying"],
    },
    altarbatmega: {
        num: 7500401,
        species: "Altarbat-Mega",
        baseSpecies: "Altarbat",
        forme: "Mega",
        formeLetter: "M",
        types: ["Poison", "Fairy"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 90,
            atk: 130,
            def: 115,
            spa: 120,
            spd: 102,
            spe: 115
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 1.5,
        weightkg: 20.6,
        color: "Blue",
        eggGroups: ["Flying"],
    },
    darkelectrode: {
        num: 7500402,
        species: "Dark Electrode",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 65,
            atk: 70,
            def: 80,
            spa: 127,
            spd: 85,
            spe: 157
        },
        abilities: {
            0: "Last Nightmare"
        },
    },
    vanilele: {
        num: 7500403,
        species: "Vani Lele",
        types: ["Ice", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 70,
            atk: 90,
            def: 80,
            spa: 140,
            spd: 105,
            spe: 107
        },
        abilities: {
            0: "Brainfreeze Surge"
        },
        heightm: 1.25,
        weightkg: 38.05,
        color: "Pink",
        eggGroups: ["Undiscovered"]
    },
    shiinofey: {
        num: 7500404,
        species: "Shiinofey",
        types: ["Grass", "Fairy"],
        genderRatio: {
            M: 37.5,
            F: 62.5
        },
        baseStats: {
            hp: 65,
            atk: 58,
            def: 95,
            spa: 96,
            spd: 115,
            spe: 75
        },
        abilities: {
            0: "Spore Spreading"
        },
        heightm: 55,
        weightkg: 5.9,
        color: "Green",
        eggGroups: ["Grass"]
    },
    algantine: {
        num: 7500405,
        species: "Algantine",
        types: ["Poison", "Water"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 85,
            atk: 67,
            def: 80,
            spa: 98,
            spd: 141,
            spe: 67
        },
        abilities: {
            0: "Adapting Absorption"
        },
        heightm: 2,
        weightkg: 150.8,
        color: "White",
        eggGroups: ["Water 1"],
    },
    regetta: {
        num: 7500406,
        species: "Regetta",
        types: ["Ice", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 63,
            def: 88,
            spa: 134,
            spd: 184,
            spe: 70
        },
        abilities: {
            0: "Cool as Ice"
        },
        heightm: 1.2,
        weightkg: 90.8,
        color: "Blue",
        eggGroups: ["Undiscovered"]
    },
    regettacompressed: {
        num: 7500406,
        species: "Regetta-Compressed",
        baseSpecies: "Regetta",
        forme: "Compressed",
        formeLetter: "C",
        types: ["Ice", "Fighting"],
        baseStats: {
            hp: 90,
            atk: 134,
            def: 70,
            spa: 63,
            spd: 88,
            spe: 184
        },
        abilities: {
            0: "Cool as Ice"
        },
        heightm: 1.2,
        weightkg: 90.8,
        color: "Blue",
        eggGroups: ["Undiscovered"]
    },
    heataria: {
        num: 7500407,
        species: "Heataria",
        types: ["Dragon", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 103,
            atk: 100,
            def: 98,
            spa: 100,
            spd: 105,
            spe: 78
        },
        abilities: {
            0: "Firefighter"
        },
    },
    heatariamega: {
        num: 7500407, // 103	140	118	140	105	78
        species: "Heataria-Mega",
        baseSpecies: "Heataria",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 103,
            atk: 140,
            def: 118,
            spa: 140,
            spd: 105,
            spe: 78
        },
        abilities: {
            0: "Firefighter"
        },
    },
    gardecuno: {
        num: 7500408,
        species: "Gardecuno",
        types: ["Ice", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 75,
            def: 90,
            spa: 120,
            spd: 128,
            spe: 90
        },
        abilities: {
            0: "Goddess Trace"
        },
        heightm: 1.65,
        weightkg: 51.9,
        color: "Blue",
        eggGroups: ["Undiscovered"]
    },

    gardecunomega: {
        num: 7500408,
        species: "Gardecuno-Mega",
        baseSpecies: "Gardecuno",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ice", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 95,
            def: 90,
            spa: 160,
            spd: 148,
            spe: 110
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 1.65,
        weightkg: 51.9,
        color: "Blue",
        eggGroups: ["Undiscovered"]
    },
    sparklingart: {
        num: 7500408,
        species: "Sparkling Art",
        types: ["Steel", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 72,
            atk: 110,
            def: 92,
            spa: 60,
            spd: 92,
            spe: 115
        },
        abilities: {
            0: "Brilliant Brightness"
        },
        heightm: 0.9,
        weightkg: 53.0,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    // Vallysect 7500409
    mamozone: {
        num: 7500410,
        species: "Mamozone",
        types: ["Ground", "Steel"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 90,
            atk: 120,
            def: 97,
            spa: 100,
            spd: 95,
            spe: 70
        },
        abilities: {
            0: "Fat Trap"
        },
    },

    slakoem: {
        num: 7500411,
        species: "Slakoem",
        types: ["Normal", "Psychic"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        }, // 106	114	115	62	108	68
        baseStats: {
            hp: 106,
            atk: 114,
            def: 115,
            spa: 62,
            spd: 108,
            spe: 68
        },
        abilities: {
            0: "Singularity"
        },
    },
    audala: {
        num: 7500412,
        species: "Audala",
        types: ["Ghost", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 140,
            atk: 86,
            def: 101,
            spa: 99,
            spd: 101,
            spe: 73
        },
        abilities: {
            0: "Recovery Shield"
        },
        heightm: 2.6,
        weightkg: 75.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },

    audalamega: {
        num: 7500412,
        species: "Audala-Mega",
        baseSpecies: "Audala",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 140,
            atk: 86,
            def: 141,
            spa: 119,
            spd: 141,
            spe: 73
        },
        abilities: {
            0: "Healer"
        },
        heightm: 3.0,
        weightkg: 76.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },

    sandgarde: {
        num: 7500413,
        species: "Sandgarde",
        types: ["Ground", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 96,
            atk: 87,
            def: 115,
            spa: 110,
            spd: 105,
            spe: 65
        },
        abilities: {
            0: "Sandy Construct"
        },
        heightm: 3.1,
        weightkg: 277.5,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        otherFormes: ["sandgardecastle"],
    },

    sandgardecastle: {
        num: 7500413,
        species: "Sandgarde-Castle",
        baseSpecies: "Sandgarde",
        forme: "Castle",
        formeLetter: "C",
        types: ["Ground", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 204,
            atk: 87,
            def: 115,
            spa: 120,
            spd: 105,
            spe: 55
        },
        abilities: {
            0: "Sandy Construct"
        },
        heightm: 2.6,
        weightkg: 582.5,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },

    triagonal: {
        num: 7500414,
        species: "Triagonal",
        types: ["Electric", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 62,
            def: 55,
            spa: 120,
            spd: 97,
            spe: 125
        },
        abilities: {
            0: "Airbone Lightning"
        },
        heightm: 1.3,
        weightkg: 94.1,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },

    triagonalmega: {
        num: 7500414,
        species: "Triagonal-Mega",
        baseSpecies: "Triagonal",
        forme: "Mega",
        formeLetter: "M",
        types: ["Electric", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 62,
            def: 75,
            spa: 150,
            spd: 117,
            spe: 155
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 1.6,
        weightkg: 97.9,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },

    exfeycofa: {
        num: 7500415,
        species: "Exfey-Cola",
        types: ["Fairy", "Grass"],
        genderRatio: {
            M: 25.0,
            F: 75.0
        },
        baseStats: {
            hp: 83,
            atk: 88,
            def: 97,
            spa: 133,
            spd: 102,
            spe: 82
        },
        abilities: {
            0: "Berry Cola"
        },
        heightm: 5.5,
        weightkg: 208,
        color: "Green",
        eggGroups: ["Grass"],
    },


    komodreigon: {
        num: 7500416,
        species: "Komodreigon",
        types: ["Dragon", "Fighting"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 93,
            atk: 117,
            def: 117,
            spa: 125,
            spd: 107,
            spe: 101
        },
        abilities: {
            0: "S.O.N.A.R"
        },
        eggGroups: ["Field"],
    },

    dunking: {
        num: 7500417,
        species: "Dunking",
        types: ["Normal"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 135,
            atk: 125,
            def: 95,
            spa: 90,
            spd: 75,
            spe: 82
        },
        abilities: {
            0: "Work Ethic"
        },
        heightm: 1.8,
        weightkg: 72.3,
        color: "Yellow",
        eggGroups: ["Field"],
    },

    kudou: {
        num: 7500418,
        species: "Kudou",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 85,
            atk: 100,
            def: 80,
            spa: 140,
            spd: 85,
            spe: 129
        },
        abilities: {
            0: "Authority"
        },
        heightm: 1.4,
        weightkg: 54.7,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },

    golisorem: {
        num: 7500419,
        species: "Golisorem",
        types: ["Ice", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 147,
            def: 115,
            spa: 95,
            spd: 110,
            spe: 67
        },
        abilities: {
            0: "Threatening Glare"
        },
        heightm: 2.5,
        weightkg: 216.5,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },

    tyrazma: {
        num: 7500420,
        species: "Tyrazma",
        types: ["Rock", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 118,
            atk: 120,
            def: 105,
            spa: 121,
            spd: 104,
            spe: 70
        },
        abilities: {
            0: "Diamond Shield"
        },
        heightm: 2.4,
        weightkg: 230,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },

    tyrazmamega: {
        num: 7500420,
        species: "Tyrazma-Mega",
        baseSpecies: "Tyrazma",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 118,
            atk: 150,
            def: 145,
            spa: 121,
            spd: 124,
            spe: 80
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 2.9,
        weightkg: 283,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    parasol: {
        num: 7500421,
        species: "Parasol",
        types: ["Bug", "Steel"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 118,
            atk: 136,
            def: 93,
            spa: 86,
            spd: 84,
            spe: 63
        },
        abilities: {
            0: "Sunsteel Skin"
        },
        heightm: 2.2,
        weightkg: 129.8,
        color: "White",
        eggGroups: ["Bug"],
    },
    diceus: {
        num: 7500422,
        species: "Diceus",
        types: ["Normal"], //104	84	84	84	84	104	544
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 104,
            atk: 84,
            def: 84,
            spa: 84,
            spd: 84,
            spe: 104
        },
        abilities: {
            0: "Miracle Morph"
        },
    },
    nintwo: {
        num: 7500423,
        species: "Nintwo",
        types: ["Bug", "Psychic"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 83,
            atk: 100,
            def: 77,
            spa: 122,
            spd: 80,
            spe: 145
        },
        abilities: {
            0: "Speed Stopper"
        },
    },
    nintwomegax: {
        num: 7500423,
        species: "Nintwo-Mega-X",
        baseSpecies: "Nintwo",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Fighting"],
        baseStats: {
            hp: 83,
            atk: 180,
            def: 87,
            spa: 122,
            spd: 90,
            spe: 145
        },
        abilities: {
            0: "Steadfast"
        },
    },
    nintwomegay: {
        num: 7500423,
        species: "Nintwo-Mega-Y",
        baseSpecies: "Nintwo",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Psychic"],
        baseStats: {
            hp: 83,
            atk: 140,
            def: 57,
            spa: 162,
            spd: 110,
            spe: 155
        },
        abilities: {
            0: "Insomnia"
        },
    },
    kommew: {
        num: 7500424,
        species: "Kommew",
        types: ["Fighting", "Psychic"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 107,
            atk: 105,
            def: 112,
            spa: 110,
            spd: 112,
            spe: 92
        },
        abilities: {
            0: "Echo Chamber"
        },
    },
	tamatoa: {
        num: 7500425,
        species: "Tamatoa",
        types: ["Grass", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 70,
            atk: 140,
            def: 100,
            spa: 87,
            spd: 90,
            spe: 71
        },
        abilities: {
            0: "Kelp Surge"
        },
        heightm: 86.45,
        weightkg: 39.15,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    pelippex: {
        num: 7500426,
        species: "Pelippex",
        types: ["Water", "Poison"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 65,
            atk: 66,
            def: 136,
            spa: 84,
            spd: 116,
            spe: 60
        },
        abilities: {
            0: "Rain Regen"
        },
        heightm: 1,
        weightkg: 21.3,
        color: "Yellow",
        eggGroups: ["Water 1"],
    },

     kyzor: {
        num: 7500427,
        species: "Kyzor",
        types: ["Dragon", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 97,
            atk: 130,
            def: 105,
            spa: 92,
            spd: 105,
            spe: 90
        },
        abilities: {
            0: "Pressurizer"
        },
        heightm: 2.4,
        weightkg: 221.5,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },

    kyzormega: {
        num: 7500427,
        species: "Kyzor-Mega",
        baseSpecies: "Kyzor",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 97,
            atk: 150,
            def: 145,
            spa: 102,
            spd: 125,
            spe: 100
        },
        abilities: {
            0: "Technician"
        },
        heightm: 2.6,
        weightkg: 228.5,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },

    gumanitoos: {
        num: 7500428,
        species: "Gumanitoos",
        types: ["Normal", "Ghost"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        }, // 119	115	100	77	100	67
        baseStats: {
            hp: 119,
            atk: 115,
            def: 100,
            spa: 77,
            spd: 100,
            spe: 67
        },
        abilities: {
            0: "Levi Stakes"
        },
    },
    xurkino: {
        num: 7500429,
        species: "Xurkino",
        types: ["Electric", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 93,
            atk: 74,
            def: 98,
            spa: 116,
            spd: 98,
            spe: 66
        },
        abilities: {
            0: "Hydra"
        },
        heightm: 2.5,
        weightkg: 65.5,
        color: "White",
        eggGroups: ["Undiscovered"],
    },

    xurkinomega: {
        num: 7500429,
        species: "Xurkino-Mega",
        baseSpecies: "Xurkino",
        forme: "Mega",
        formeLetter: "M",
        types: ["Electric", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 93,
            atk: 74,
            def: 138,
            spa: 136,
            spd: 138,
            spe: 66
        },
        abilities: {
            0: "Healer"
        },
        heightm: 2.9,
        weightkg: 66.5,
        color: "White",
        eggGroups: ["Undiscovered"],
    },

    yvelchan: {
        num: 7500430,
        species: "Yvel-Chan",
        types: ["Flying", "Normal"],
        baseStats: {
            hp: 208,
            atk: 68,
            def: 70,
            spa: 83,
            spd: 101,
            spe: 74
        },
        abilities: {
            0: "Dark Aura"
        },
        heightm: 3.5,
        weightkg: 118.8,
        color: "Pink",
        eggGroups: ["Fairy"],
    },

    heatreon: {
        num: 7500431,
        species: "Heatreon",
        types: ["Steel", "Fairy"], // 100	77	100	125	130	69
        baseStats: {
            hp: 100,
            atk: 77,
            def: 100,
            spa: 125,
            spd: 130,
            spe: 69
        },
        abilities: {
            0: "Fire-B-Gone"
        },
    },

    altarigarde: {
        num: 7500432,
        species: "Altarigarde",
        types: ["Ground", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 91,
            atk: 105,
            def: 105,
            spa: 75,
            spd: 110,
            spe: 97
        },
        abilities: {
            0: "Weather Break"
        },
        heightm: 3.05,
        weightkg: 162.8,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },

    altarigardemega: {
        num: 7500432,
        species: "Altarigarde-Mega",
        baseSpecies: "Altarigarde",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ground", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 91,
            atk: 145,
            def: 125,
            spa: 115,
            spd: 110,
            spe: 97
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 3.45,
        weightkg: 162.8,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    flycanion: {
        num: 7500433,
        species: "Flycanion",
        types: ["Ground", "Fire"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 100,
            atk: 105,
            def: 110,
            spa: 105,
            spd: 95,
            spe: 85
        },
        abilities: {
            0: "Mud Absorb"
        },
        heightm: 1.9,
        weightkg: 138.5,
        color: "Brown",
        eggGroups: ["Bug"],
    },

    belle: {
        num: 7500434,
        species: "Belle",
        types: ["Steel", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 85,
            def: 100,
            spa: 110,
            spd: 110,
            spe: 60
        },
        abilities: {
            0: "Greedy Princess"
        },
        heightm: 1146.3,
        weightkg: 519.95,
        color: "Pink",
        eggGroups: ["Undiscovered"],
    },

    maui: {
        num: 7500435,
        species: "Māui",
        types: ["Electric", "Poison"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 110,
            def: 81,
            spa: 110,
            spd: 80,
            spe: 120
        },
        abilities: {
            0: "Radioactive Surge"
        },
        heightm: 90.95,
        weightkg: 41.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },

    garzone: {
num: 75004346,
species: "Garzone",
types: ["Dragon", "Electric"], 
baseStats:{hp: 100, atk: 110, def: 105, spa: 115, spd: 90, spe: 85},
abilities: {0: "Laser Beam"}, 
},
	garzonemega: {
        num: 75004346,
        species: "Garzone-Mega",
        baseSpecies: "Garzone",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Electric"], // 100	150	125	155	100	75
        baseStats: {
            hp: 100,
            atk: 150,
            def: 125,
            spa: 155,
            spd: 100,
            spe: 75
        },
        abilities: {
            0: "Sand Force"
        },
    },

    shitpost: {
        num: 7500437,
        species: "Shitpost",
        types: ["Dark", "Steel"],
        genderRatio: {
            M: 50.0,
            F: 50.0
        },
        baseStats: {
            hp: 113,
            atk: 120,
            def: 81,
            spa: 98,
            spd: 80,
            spe: 70
        },
        abilities: {
            0: "Meme Stealer"
        },
        heightm: 5.3,
        weightkg: 529.8,
        color: "Green",
        eggGroups: ["Field", "Grass"],
    },
// Cat Bed: 75004348
	catbed: {
        num: 7500438,
        species: "Cat Bed",
        types: ["Fire", "Fairy"],
        baseStats: { // 85	65	120	120	112	82
            hp: 85,
            atk: 65,
            def: 120,
            spa: 120,
            spd: 112,
            spe: 82
        },
        abilities: {
            0: "Beautiful Obliteration Weapon"
        },
        heightm: 5.3,
        weightkg: 529.8,
    },
	 trampoline: {
        num: 7500439,
        species: "Trampoline",
        types: ["Electric", "Dark"], 
        baseStats: {
            hp: 102,
            atk: 105,
            def: 97,
            spa: 107,
            spd: 100,
            spe: 67
        },
         abilities: {0: "Scarily Adorable"},
    },
    
trampolinemega: {
        num: 7500439,
        species: "Trampoline-Mega",
        baseSpecies: "Trampoline",
        forme: "Mega",
        formeLetter: "M",
        types: ["Electric", "Dark"], 
        baseStats: {
            hp: 102,
            atk: 125,
            def: 117,
            spa: 157,
            spd: 120,
            spe: 57
        },
        abilities: {0: "Mold Breaker"},
    }, 

arcalie: {
        num: 7500440,
        species: "Arcalie",
        types: ["Fire", "Dark"],
        baseStats: {
            hp: 87,
            atk: 109,
            def: 75,
            spa: 104,
            spd: 75,
            spe: 110
        },
         abilities: {0: "Creepy"},
    },

stakeye: {
        num: 7500441,
        species: "Stakeye",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 75,
            atk: 123,
            def: 143,
            spa: 59,
            spd: 83,
            spe: 31
        },
         abilities: {0: "Beast Eye"},
    },
    
stakeyemega: {
        num: 7500441,
        species: "Stakeye-Mega",
        baseSpecies: "Stakeye",
        forme: "Mega",
        formeLetter: "M",
       types: ["Steel", "Ghost"],
        baseStats: {
            hp: 75,
            atk: 133,
            def: 193,
            spa: 79,
            spd: 133,
            spe: 1
        },
         abilities: {0: "Magic Bounce"},
    },

lycanperiordusk: {
        num: 7500442,
        species: "Lycanperior-Dusk",
        types: ["Rock", "Grass"],
        baseStats: {
            hp: 85,
            atk: 106,
            def: 90,
            spa: 75,
            spd: 90,
            spe: 121
        },
         abilities: {0: "Lethal Leafage"},
    },

gigafini: {
        num: 7500443,
        species: "Giga Fini",
        types: ["Rock", "Water"],
        baseStats: {
            hp: 97,
            atk: 105,
            def: 142,
            spa: 77,
            spd: 105,
            spe: 55
        },
         abilities: {0: "Sandmist Surge"},
    },

stalossaka: {
        num: 7500444,
        species: "Stalossaka",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 83,
            atk: 113,
            def: 160,
            spa: 76,
            spd: 108,
            spe: 24
        },
         abilities: {0: "Compact Boost"},
    },

Stakamise: {
        num: 7500444,
        species: "Stalossaka",
        types: ["Steel", "Grass"],
        baseStats: {
            hp: 85,
            atk: 136,
            def: 155,
            spa: 69,
            spd: 110,
            spe: 26
        },
         abilities: {0: "Metal Monster"},
    },

deoxysconfused : {
        num: 7500446,
        species: "Deoxys-Confused",
        types: ["Psychic"],
        baseStats: {
            hp: 75,
            atk: 130,
            def: 105,
            spa: 130,
            spd: 105,
            spe: 125
        },
         abilities: {0: "Pressure"},
    },

auroritar: {
        num: 7500447,
        species: "Auroritar",
        types: ["Rock"],
        baseStats: {
            hp: 121,
            atk: 115,
            def: 101,
            spa: 107,
            spd: 106,
            spe: 69
        },
         abilities: {0: "Meteor Shower"},
    },

auroritarmega: {
        num: 7500447,
        species: "Auroritar-Mega",
        baseSpecies: "Auroritar",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock"],
        baseStats: {
            hp: 121,
            atk: 145,
            def: 141,
            spa: 107,
            spd: 106,
            spe: 69
        },
        abilities: {0: "Meteor Shower"},
    }, 
 necrynxcutewig: {
		num: 7500448,
		species: "Necrynx-Cute-Wig",
		types: ["Ice", "Psychic"],
		baseStats: {
			hp: 90,
			atk: 81,
			def: 72,
			spa: 155,
			spd: 111,
			spe: 98
		},
		abilities: {
			0: "Prism Skin"
		},
	},
	necrynxultra: {
		num: 7500448,
		species: "Necrynx-Ultra",
		baseSpecies: "Necrynx-Cute-Wig",
		forme: "Ultra",
		formeLetter: "U",
		types: ["Ice", "Dragon"],
		baseStats: { // 90  165 81  165 81  150
			hp: 90,
			atk: 165,
			def: 81,
			spa: 165,
			spd: 81,
			spe: 150,
		},
		abilities: {
			0: "Neuroforce"
		},
	},
	hippally: {
		num: 7500449,
		species: "Hippally",
		types: ["Ground", "Normal"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71,
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallyfire: {
		num: 7500450,
		species: "Hippally-Fire",
		baseSpecies: "Hippally",
		forme: "Fire",
		formeLetter: "F",
		types: ["Ground", "Fire"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallywater: {
		num: 7500450,
		species: "Hippally-Water",
		baseSpecies: "Hippally",
		forme: "Water",
		formeLetter: "W",
		types: ["Ground", "Water"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallyelectric: {
		num: 7500450,
		species: "Hippally-Electric",
		baseSpecies: "Hippally",
		forme: "Electric",
		formeLetter: "E",
		types: ["Ground", "Electric"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallygrass: {
		num: 7500450,
		species: "Hippally-Grass",
		baseSpecies: "Hippally",
		forme: "Grass",
		formeLetter: "G",
		types: ["Ground", "Grass"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallyice: {
		num: 7500450,
		species: "Hippally-Ice",
		baseSpecies: "Hippally",
		forme: "Ice",
		formeLetter: "I",
		types: ["Ground", "Ice"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallyfighting: {
		num: 7500450,
		species: "Hippally-Fighting",
		baseSpecies: "Hippally",
		forme: "Fighting",
		formeLetter: "F",
		types: ["Ground", "Fighting"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallyground: {
		num: 7500450,
		species: "Hippally-Ground",
		baseSpecies: "Hippally",
		forme: "Fighting",
		formeLetter: "F",
		types: ["Ground"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallypoison: {
		num: 7500450,
		species: "Hippally-Poison",
		baseSpecies: "Hippally",
		forme: "Poison",
		formeLetter: "P",
		types: ["Ground", "Poison"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallyflying: {
		num: 7500450,
		species: "Hippally-Flying",
		baseSpecies: "Hippally",
		forme: "Flying",
		formeLetter: "F",
		types: ["Ground", "Flying"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallypsychic: {
		num: 7500450,
		species: "Hippally-Psychic",
		baseSpecies: "Hippally",
		forme: "Psychic",
		formeLetter: "P",
		types: ["Ground", "Psychic"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallybug: {
		num: 7500450,
		species: "Hippally-Bug",
		baseSpecies: "Hippally",
		forme: "Bug",
		formeLetter: "B",
		types: ["Ground", "Bug"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallyrock: {
		num: 7500450,
		species: "Hippally-Rock",
		baseSpecies: "Hippally",
		forme: "Rock",
		formeLetter: "R",
		types: ["Ground", "Rock"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallyghost: {
		num: 7500450,
		species: "Hippally-Ghost",
		baseSpecies: "Hippally",
		forme: "Ghost",
		formeLetter: "G",
		types: ["Ground", "Ghost"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallydragon: {
		num: 7500450,
		species: "Hippally-Dragon",
		baseSpecies: "Hippally",
		forme: "Dragon",
		formeLetter: "D",
		types: ["Ground", "Dragon"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallydark: {
		num: 7500450,
		species: "Hippally-Dark",
		baseSpecies: "Hippally",
		forme: "Dark",
		formeLetter: "D",
		types: ["Ground", "Dark"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallysteel: {
		num: 7500450,
		species: "Hippally-Psychic",
		baseSpecies: "Hippally",
		forme: "Psychic",
		formeLetter: "P",
		types: ["Ground", "Psychic"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	hippallyfairy: {
		num: 7500450,
		species: "Hippally-Fairy",
		baseSpecies: "Hippally",
		forme: "Fairy",
		formeLetter: "F",
		types: ["Ground", "Fairy"],
		baseStats: {
			hp: 101,
			atk: 123,
			def: 106,
			spa: 81,
			spd: 103,
			spe: 71
		},
		abilities: {
			0: "Effect Setter"
		},
	},
	necroquaduskbubble: {
		num: 7500451,
		species: "Necroqua-Dusk-Bubble",
		types: ["Steel", "Water"],
		baseStats: {
			hp: 102,
			atk: 120,
			def: 109,
			spa: 81,
			spd: 125,
			spe: 69
		},
		abilities: {
			0: "Black Hole"
		},
	},
	necrynxultra: {
		num: 7500451,
		species: "Necroqua-Ultra",
		baseSpecies: "Necroqua-Dusk-Bubble",
		forme: "Ultra",
		formeLetter: "U",
		types: ["Steel", "Dragon"],
		baseStats: {
			hp: 102,
			atk: 130,
			def: 95,
			spa: 130,
			spd: 95,
			spe: 121,
		},
		abilities: {
			0: "Neuroforce"
		},
	},
	poize: {
		num: 7500452,
		species: "Poize",
		types: ["Electric", "Poison"],
		baseStats: {
			hp: 83,
			atk: 111,
			def: 93,
			spa: 116,
			spd: 83,
			spe: 101
		},
		abilities: {
			0: "Terabeast"
		},
	},
	magnettanorth: {
		num: 7500453,
		species: "Magnetta-North",
		types: ["Steel", "Fighting"],
		baseStats: {
			hp: 85,
			atk: 75,
			def: 96,
			spa: 145,
			spd: 118,
			spe: 90,
		},
		abilities: {
			0: "Graceful Analyst"
		},
	},
	magnettasouth: {
		num: 7500453,
		species: "Magnetta-South",
		baseSpecies: "Magnetta-North",
		forme: "South",
		formeLetter: "S",
		types: ["Steel", "Fighting"],
		baseStats: {
			hp: 85,
			atk: 145,
			def: 90,
			spa: 73,
			spd: 96,
			spe: 118,
		},
		abilities: {
			0: "Graceful Analyst"
		},
	},
	kromork: {
		num: 7500454,
		species: "Kromork",
		types: ["Electric", "Ground"],
		baseStats: {
			hp: 80,
			atk: 115,
			def: 115,
			spa: 101,
			spd: 101,
			spe: 80,
		},
		abilities: {
			0: "Tera Armor"
		},
	},
	watafak: {
		num: 7500455,
		species: "Watafak",
		types: ["Steel", "Psychic"],
		baseStats: {
			hp: 145,
			atk: 102,
			def: 134,
			spa: 43,
			spd: 79,
			spe: 23
		},
		abilities: {
			0: "Sadistic"
		},
	},
	necrozeraindawndisguise: {
		num: 7500456,
		species: "Necrozerain-Dawn-Disguise",
		types: ["Bug", "Ghost"],
		baseStats: { // 83  86  85  148 104 98
			hp: 83,
			atk: 86,
			def: 85,
			spa: 148,
			spd: 104,
			spe: 98,
		},
		abilities: {
			0: "Fearmonger"
		},
	},
	necrozrainultra: {
		num: 7500456,
		species: "Necrozerain-Ultra",
		baseSpecies: "Necrozerain-Dawn-Disguise",
		forme: "Ultra",
		formeLetter: "U",
		types: ["Bug", "Dragon"],
		baseStats: { //83  158 74  158 74  150 697
			hp: 83,
			atk: 158,
			def: 74,
			spa: 158,
			spd: 74,
			spe: 150,
		},
		abilities: {
			0: "Neuroforce"
		},
	},
	quagsirom: {
		num: 7500457,
		species: "Quagsirom",
		types: ["Water", "Electric"],
		baseStats: { // 117 117 102 92  102 62  592
			hp: 117,
			atk: 117,
			def: 102,
			spa: 92,
			spd: 102,
			spe: 62,
		},
		abilities: {
			0: "Unamazed"
		},
	},
	bunny: {
		num: 7500458,
		species: "Bunny",
		types: ["Dragon", "Normal"],
		baseStats: {
			hp: 70,
			atk: 85,
			def: 70,
			spa: 60,
			spd: 70,
			spe: 101,
		},
		abilities: {
			0: "What Does This Do?"
		},
	},
	kingrat: {
		num: 7500459,
		species: "King Rat",
		types: ["Normal"],
		baseStats: {
			hp: 113,
			atk: 131,
			def: 90,
			spa: 83,
			spd: 78,
			spe: 109,
		},
		abilities: {
			0: "Power Saver"
		},
	},
	gamera: {
		num: 7500460,
		species: "Gamera",
		types: ["Water", "Dark"],
		baseStats: {
			hp: 99,
			atk: 118,
			def: 115,
			spa: 100,
			spd: 112,
			spe: 79,
		},
		abilities: {
			0: "Underwater Screen"
		},
	},
	gameramegax: {
		num: 7500460,
		species: "Gamera-Mega-X",
		baseSpecies: "Gamera",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Dark"],
		baseStats: {
			hp: 99,
			atk: 148,
			def: 155,
			spa: 100,
			spd: 132,
			spe: 89,
		},
		abilities: {
			0: "Sand Stream"
		},
	},
	gameramegay: {
		num: 7500460,
		species: "Gamera-Mega-Y",
		baseSpecies: "Gamera",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Dark"],
		baseStats: {
			hp: 99,
			atk: 138,
			def: 135,
			spa: 150,
			spd: 122,
			spe: 79,
		},
		abilities: {
			0: "Mega Launcher"
		},
	},
	sandslashprime: {
		num: 7500461,
		species: "Sandslash-Prime",
		types: ["Ground", "Ice"],
		baseStats: {
			hp: 85,
			atk: 110,
			def: 125,
			spa: 45,
			spd: 70,
			spe: 75,
		},
		abilities: {
			0: "Mountain Climber"
		},
	},
	suiceon: {
		num: 7500462,
		species: "Suiceon",
		types: ["Water"],
		baseStats: {
			hp: 125,
			atk: 75,
			def: 94,
			spa: 100,
			spd: 112,
			spe: 86,
		},
		abilities: {
			0: "Monarch of the Rain"
		},
	},
	raikeon: {
		num: 7500463,
		species: "Raikeon",
		types: ["Electric"],
		baseStats: {
			hp: 93,
			atk: 85,
			def: 75,
			spa: 112,
			spd: 100,
			spe: 125,
		},
		abilities: {
			0: "Duke of the Lightning"
		},
	},
	enteon: {
		num: 7500464,
		species: "Enteon",
		types: ["Fire"],
		baseStats: {
			hp: 93,
			atk: 125,
			def: 75,
			spa: 100,
			spd: 112,
			spe: 85,
		},
		abilities: {
			0: "Emperor of the Fire"
		},
	},
	vilossom: {
		num: 7500465,
		species: "Vilossom",
		types: ["Poison", "Grass"],
		baseStats: {
			hp: 90,
			atk: 95,
			def: 105,
			spa: 115,
			spd: 110,
			spe: 65,
		},
		abilities: {
			0: "Chlorophyll"
		},
	},
	gholemisealola: {
		num: 7500466,
		species: "Gholemise-Alola",
		types: ["Electric", "Grass"],
		baseStats: {
			hp: 85,
			atk: 135,
			def: 125,
			spa: 70,
			spd: 87,
			spe: 42,
		},
		abilities: {
			0: "Overloaded Helm"
		},
	},
	tallsteelegg: {
		num: 7500467,
		species: "Tall Steel Egg",
		types: ["Dragon", "Steel"],
		baseStats: {
			hp: 106,
			atk: 103,
			def: 104,
			spa: 116,
			spd: 108,
			spe: 53,
		},
		abilities: {
			0: "Farmer's Delight"
		},
	},
	zerpuff: {
		num: 7500468,
		species: "Zerpuff",
		types: ["Electric", "Fairy"],
		baseStats: {
			hp: 85,
			atk: 116,
			def: 80,
			spa: 93,
			spd: 77,
			spe: 127,
		},
		abilities: {
			0: "Lightening Lightning"
		},
	},
	lycakingdusk: {
		num: 7500469,
		species: "Lycaking-Dusk",
		types: ["Rock", "Ground"],
		baseStats: {
			hp: 88,
			atk: 119,
			def: 81,
			spa: 80,
			spd: 80,
			spe: 107,
		},
		abilities: {
			0: "Unrivaled Claws"
		},
	},
	tornadelnaga: {
		num: 7500470,
		species: "Tornadel-Naga",
		types: ["Flying", "Poison"],
		baseStats: {
			hp: 83,
			atk: 89,
			def: 79,
			spa: 127,
			spd: 83,
			spe: 127,
		},
		abilities: {
			0: "Ouroboros"
		},
	},
	necropurugly: {
		num: 7500471,
		species: "Necropur-Ugly",
		types: ["Steel", "Normal"],
		baseStats: {
			hp: 84,
			atk: 139,
			def: 109,
			spa: 88,
			spd: 84,
			spe: 100,
		},
		abilities: {
			0: "Braveheart"
		},
	},
	necropurbeautiful: {
		num: 7500471,
		species: "Necropur-Beautiful",
		baseSpecies: "Necropur-Ugly",
		forme: "Beautiful",
		formeLetter: "B",
		types: ["Steel", "Dragon"],
		baseStats: {
			hp: 84,
			atk: 149,
			def: 79,
			spa: 149,
			spd: 79,
			spe: 152,
		},
		abilities: {
			0: "Neuroforce"
		},
	},
	flyorusguard: {
		num: 7500472,
		species: "Flyorus Guard",
		types: ["Ground", "Dragon"],
		baseStats: {
			hp: 84,
			atk: 122,
			def: 105,
			spa: 92,
			spd: 80,
			spe: 115,
		},
		abilities: {
			0: "Guard's Shield"
		},
	},
	lamparadenoche: {
		num: 7500473,
		species: "Lampara-De-Noche",
		types: ["Water", "Psychic"],
		baseStats: {
			hp: 113,
			atk: 89,
			def: 103,
			spa: 119,
			spd: 113,
			spe: 73,
		},
		abilities: {
			0: "Dark Light"
		},
	},
	lamparadelava: {
		num: 7500473,
		species: "Lampara-De-Lava",
		baseSpecies: "Lampara-De-Noche",
		forme: "Ultra",
		formeLetter: "U",
		types: ["Water", "Dragon"],
		baseStats: {
			hp: 113,
			atk: 129,
			def: 83,
			spa: 129,
			spd: 83,
			spe: 125
		},
		abilities: {
			0: "Neuroforce"
		},
	},
	balloon: {
		num: 7500474,
		species: "Balloon",
		types: ["Ghost", "Fire"],
		baseStats: {
			hp: 101,
			atk: 103,
			def: 68,
			spa: 120,
			spd: 66,
			spe: 113,
		},
		abilities: {
			0: "Hot Air Balloon"
		},
	},
	tyrannosaurus: {
		num: 7500475,
		species: "Tyrannosaurus",
		types: ["Grass", "Rock"],
		baseStats: {
			hp: 100,
			atk: 118,
			def: 106,
			spa: 107,
			spd: 110,
			spe: 80,
		},
		abilities: {
			0: "Ancient Foliage"
		},
	},
	tyrannosaurusmegax: {
		num: 7500475,
		species: "Tyrannosaurus-Mega-X",
		baseSpecies: "Tyrannosaurus",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass", "Rock"],
		baseStats: {
			hp: 100,
			atk: 138,
			def: 146,
			spa: 127,
			spd: 130,
			spe: 80
		},
		abilities: {
			0: "Thick Fat"
		},
	},
	tyrannosaurusmegay: {
		num: 7500475,
		species: "Tyrannosaurus-Mega-Y",
		baseSpecies: "Tyrannosaurus",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass", "Rock"],
		baseStats: {
			hp: 100,
			atk: 148,
			def: 146,
			spa: 107,
			spd: 130,
			spe: 90,
		},
		abilities: {
			0: "Sand Stream"
		},
	},
	espeord: {
		num: 7500476,
		species: "Espeord",
		types: ["Psychic", "Water"],
		baseStats: {
			hp: 127,
			atk: 87,
			def: 62,
			spa: 120,
			spd: 80,
			spe: 95,
		},
		abilities: {
			0: "Synchro Veil"
		},
	},
	glacord: {
		num: 7500477,
		species: "Glacord",
		types: ["Ice", "Water"],
		baseStats: {
			hp: 127,
			atk: 85,
			def: 87,
			spa: 120,
			spd: 80,
			spe: 72,
		},
		abilities: {
			0: "Hail Veil"
		},
	},
	hypango: {
		num: 7500478,
		species: "Hypango",
		types: ["Psychic", "Fighting"],
		baseStats: {
			hp: 100,
			atk: 108,
			def: 84,
			spa: 81,
			spd: 103,
			spe: 72,
		},
		abilities: {
			0: "Sensei"
		},
	},
	scizion: {
		num: 7500479,
		species: "Scizion",
		types: ["Bug", "Poison"],
		baseStats: {
			hp: 80,
			atk: 120,
			def: 115,
			spa: 67,
			spd: 87,
			spe: 90
		},
		abilities: {
			0: "Prodigy"
		},
	},
	scizionmega: {
		num: 7500479,
		species: "Scizion-Mega",
		baseSpecies: "Scizion",
		forme: "Mega",
		formeLetter: "M",
		types: ["Bug", "Poison"],
		baseStats: {
			hp: 80,
			atk: 140,
			def: 155,
			spa: 77,
			spd: 107,
			spe: 100,
		},
		abilities: {
			0: "Technician"
		},
	},
	fluorine: {
		num: 7500480,
		species: "Fluorine",
		types: ["Fairy", "Normal"],
		baseStats: {
			hp: 100,
			atk: 72,
			def: 87,
			spa: 96,
			spd: 130,
			spe: 72,
		},
		abilities: {
			0: "Titanium Toothpaste"
		},
	},
	fluorinemega: {
		num: 7500480,
		species: "Fluorine-Mega",
		baseSpecies: "Fluorine",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fairy"],
		baseStats: {
			hp: 100,
			atk: 72,
			def: 127,
			spa: 116,
			spd: 170,
			spe: 72,
		},
		abilities: {
			0: "Healer"
		},
	},
	wallray: {
		num: 7500481,
		species: "Wallray",
		types: ["Ice", "Electric"],
		baseStats: {
			hp: 105,
			atk: 110,
			def: 94,
			spa: 105,
			spd: 94,
			spe: 77,
		},
		abilities: {
			0: "Too Thick"
		},
	},
	persianprime: {
		num: 7500482,
		species: "Persian-Prime",
		types: ["Normal", "Dark"],
		baseStats: {
			hp: 75,
			atk: 75,
			def: 70,
			spa: 80,
			spd: 75,
			spe: 125,
		},
		abilities: {
			0: "Tech Fur"
		},
	},
	octapex: {
		num: 7500483,
		species: "Octapex",
		types: ["Water", "Poison"],
		baseStats: {
			hp: 72,
			atk: 94,
			def: 123,
			spa: 89,
			spd: 118,
			spe: 50,
		},
		abilities: {
			0: "Veteran"
		},
	},
	gooo: {
		num: 7500484,
		species: "Goo-o",
		types: ["Dragon"],
		baseStats: {
			hp: 92,
			atk: 115,
			def: 107,
			spa: 115,
			spd: 137,
			spe: 92
		},
		abilities: {
			0: "Sound Soul"
		},
	},
	noivian: {
		num: 7500485,
		species: "Noivian",
		types: ["Flying", "Dragon"],
		baseStats: {
			hp: 90,
			atk: 80,
			def: 95,
			spa: 90,
			spd: 102,
			spe: 120,
		},
		abilities: {
			0: "Phase Through"
		},
	},
	novianmega: {
		num: 7500485,
		species: "Noivian-Mega",
		baseSpecies: "Noivian",
		forme: "Mega",
		formeLetter: "M",
		types: ["Flying", "Fairy"],
		baseStats: {
			hp: 90,
			atk: 120,
			def: 115,
			spa: 130,
			spd: 102,
			spe: 120,
		},
		abilities: {
			0: "Pixilate"
		},
	},
	cruski: {
		num: 7500486,
		species: "Cruski",
		types: ["Steel", "Bug"],
		baseStats: {
			hp: 73,
			atk: 102,
			def: 118,
			spa: 82,
			spd: 91,
			spe: 70,
		},
		abilities: {
			0: "Locked Shell"
		},
	},
	periurora: {
		num: 7500487,
		species: "Periurora",
		types: ["Ice", "Rock"],
		baseStats: {
			hp: 129,
			atk: 118,
			def: 111,
			spa: 87,
			spd: 83,
			spe: 59,
		},
		abilities: {
			0: "Christmas Parade"
		},
	},
	apouprobo: {
		num: 7500488,
		species: "Apou Probo",
		types: ["Steel", "Fairy"],
		baseStats: {
			hp: 85,
			atk: 85,
			def: 115,
			spa: 105,
			spd: 112,
			spe: 85,
		},
		abilities: {
			0: "Magnetic Surge"
		},
	},
	shedigigas: {
		num: 7500489,
		species: "Shedigigas",
		types: ["Bug", "Normal"],
		baseStats: {
			hp: 75,
			atk: 140,
			def: 77,
			spa: 55,
			spd: 75,
			spe: 70,
		},
		abilities: {
			0: "Temporary Guard"
		},
	},
	chazmaegg: {
		num: 7500490,
		species: "Chazma-Egg",
		types: ["Normal", "Ghost"],
		baseStats: {
			hp: 193,
			atk: 59,
			def: 57,
			spa: 96,
			spd: 136,
			spe: 63,
		},
		abilities: {
			0: "Healthy Meal"
		},
	},
	chazmahatched: {
		num: 7500490,
		species: "Chazma-Hatched",
		baseSpecies: "Chazma",
		forme: "Hatched",
		formeLetter: "H",
		types: ["Normal", "Dragon"],
		baseStats: {
			hp: 193,
			atk: 106,
			def: 106,
			spa: 106,
			spd: 106,
			spe: 115,
		},
		abilities: {
			0: "Neuroforce"
		},
	},
	smolitizer: {
		num: 7500491,
		species: "Smolitizer",
		types: ["Ice", "Steel"],
		baseStats: {
			hp: 118,
			atk: 148,
			def: 103,
			spa: 86,
			spd: 84,
			spe: 63,
		},
		abilities: {
			0: "Christmas Spirit"
		},
	},
	smolitizerultra: {
		num: 7500491,
		species: "Smolitizer-Ultra",
		baseSpecies: "Smolitizer",
		forme: "Ultra",
		formeLetter: "U",
		types: ["Ice", "Dragon"],
		baseStats: {
			hp: 118,
			atk: 158,
			def: 73,
			spa: 158,
			spd: 73,
			spe: 115,
		},
		abilities: {
			0: "Neuroforce"
		},
	},
	noirtic: {
		num: 7500492,
		species: "Noirtic",
		types: ["Ghost", "Flying"],
		baseStats: {
			hp: 93,
			atk: 95,
			def: 125,
			spa: 85,
			spd: 145,
			spe: 76,
		},
		abilities: {
			0: "Pressure"
		},
	},
	casserole: {
		num: 7500493,
		species: "Casserole",
		types: ["Flying", "Normal"],
		baseStats: {
			hp: 87,
			atk: 122,
			def: 72,
			spa: 103,
			spd: 67,
			spe: 127,
		},
		abilities: {
			0: "Scrumptious"
		},
	},
	blazel: {
		num: 7500494,
		species: "Blazel",
		types: ["Fire", "Water"],
		baseStats: {
			hp: 92,
			atk: 122,
			def: 72,
			spa: 107,
			spd: 70,
			spe: 107,
		},
		abilities: {
			0: "Heat Seeker"
		},
	},
	blazelmega: {
		num: 7500494,
		species: "Blazel-Mega",
		baseSpecies: "Pokemon",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fire", "Water"],
		baseStats: {
			hp: 92,
			atk: 162,
			def: 82,
			spa: 127,
			spd: 80,
			spe: 127,
		},
		abilities: {
			0: "Speed Boost"
		},
	},
	funsparret: {
		num: 7500495,
		species: "Funsparret",
		types: ["Normal"],
		baseStats: {
			hp: 102,
			atk: 83,
			def: 77,
			spa: 65,
			spd: 70,
			spe: 77,
		},
		abilities: {
			0: "Effective Strategy"
		},
	},
	claytar: {
		num: 7500496,
		species: "Claytar",
		types: ["Ground", "Dark"],
		baseStats: {
			hp: 100,
			atk: 102,
			def: 127,
			spa: 82,
			spd: 110,
			spe: 68,
		},
		abilities: {
			0: "Floating Grounds"
		},
	},
	claytarmega: {
		num: 7500496,
		species: "Claytar-Mega",
		baseSpecies: "Claytar",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ground", "Dark"],
		baseStats: {
			hp: 100,
			atk: 132,
			def: 167,
			spa: 82,
			spd: 130,
			spe: 78,
		},
		abilities: {
			0: "Sand Stream"
		},
	},
	komally: {
		num: 7500497,
		species: "Komally",
		types: ["Normal"],
		baseStats: {
			hp: 85,
			atk: 105,
			def: 95,
			spa: 105,
			spd: 95,
			spe: 80,
		},
		abilities: {
			0: "Sleeping System"
		},
	},
	joltalesalola: {
		num: 7500498,
		species: "Joltales-Alola",
		types: ["Electric", "Ice"],
		baseStats: {
			hp: 79,
			atk: 76,
			def: 77,
			spa: 105,
			spd: 107,
			spe: 129,
		},
		abilities: {
			0: "Snow Sucker"
		},
	},
	
};
