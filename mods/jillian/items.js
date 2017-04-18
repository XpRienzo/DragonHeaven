'use strict';

exports.BattleItems = {

	"luxraynitea": {
		id: "luxraynitea",
		name: "Luxraynite A",
		megaStone: "Luxray-Mega-A",
		megaEvolves: "Luxray",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Luxray, this item allows it to Mega Evolve in battle.",
	},
	"luxrayniteb": {
		id: "luxrayniteb",
		name: "Luxraynite B",
		megaStone: "Luxray-Mega-B",
		megaEvolves: "Luxray",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Luxray, this item allows it to Mega Evolve in battle.",
	},
	"arcaninite": {
		id: "arcaninite",
		name: "Arcaninite",
		megaStone: "Arcanine-Mega",
		megaEvolves: "Arcanine",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is an Arcanine, this item allows it to Mega Evolve in battle.",
	},
	"haxorunite": {
		id: "haxorunite",
		name: "Haxorunite",
		megaStone: "Haxorus-Mega",
		megaEvolves: "Haxorus",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Haxorus, this item allows it to Mega Evolve in battle.",
	},
	"mienshaonite": {
		id: "mienshaonite",
		name: "Mienshaonite",
		megaStone: "Mienshao-Mega",
		megaEvolves: "Mienshao",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Mienshao, this item allows it to Mega Evolve in battle.",
	},
	"primapite": {
		id: "primapite",
		name: "Primapite",
		megaStone: "Primeape-Mega",
		megaEvolves: "Primeape",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Primeape, this item allows it to Mega Evolve in battle.",
	},
	"gothitellite": {
		id: "gothitellite",
		name: "Gothitellite",
		megaStone: "Gothitelle-Mega",
		megaEvolves: "Gothitelle",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Gothitelle, this item allows it to Mega Evolve in battle.",
	},
	"magnezite": {
		id: "magnezite",
		name: "magnezite",
		megaStone: "Magnezone-Mega",
		megaEvolves: "Magnezone",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Magnezone, this item allows it to Mega Evolve in battle.",
	},
	"ninjite": {
		id: "ninjite",
		name: "Ninjite",
		megaStone: "Ninjask-Mega",
		megaEvolves: "Ninjask",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Ninjask, this item allows it to Mega Evolve in battle.",
	},
	"zangoosite": {
		id: "zangoosite",
		name: "Zangoosite",
		megaStone: "Zangoose-Mega",
		megaEvolves: "Zangoose",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Zangoose, this item allows it to Mega Evolve in battle.",
	},
	"dedennite": {
		id: "dedennite",
		name: "Dedennite",
		megaStone: "Dedenne-Mega",
		megaEvolves: "Dedenne",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Dedenne, this item allows it to Mega Evolve in battle.",
	},
	"bisharpite": {
		id: "bisharpite",
		name: "Bisharpite",
		megaStone: "Bisharp-Mega",
		megaEvolves: "Bisharp",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Bisharp, this item allows it to Mega Evolve in battle.",
	},
	"weavilite": {
		id: "weavilite",
		name: "Weavilite",
		megaStone: "Weavile-Mega",
		megaEvolves: "Weavile",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Weavile, this item allows it to Mega Evolve in battle.",
	},
	"dugtrite": {
		id: "dugtrite",
		name: "Dugtrite",
		megaStone: "Dugtrio-Mega",
		megaEvolves: "Dugtrio",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Dugtrio, this item allows it to Mega Evolve in battle.",
	},
	"hippowdonite": {
		id: "hippowdonite",
		name: "Hippowdonite",
		megaStone: "Hippowdon-Mega",
		megaEvolves: "Hippowdon",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Hippowdon, this item allows it to Mega Evolve in battle.",
	},
	"quagsirite": {
		id: "quagsirite",
		name: "Quagsirite",
		megaStone: "Quagsire-Mega",
		megaEvolves: "Quagsire",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Quagsire, this item allows it to Mega Evolve in battle.",
	},
	"chandelurite": {
		id: "chandelurite",
		name: "Chandelurite",
		megaStone: "Chandelure-Mega",
		megaEvolves: "Chandelure",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Chandelure, this item allows it to Mega Evolve in battle.",
	},
	"spiritombite": {
		id: "spiritombite",
		name: "Spiritombite",
		megaStone: "Spiritomb-Mega",
		megaEvolves: "Spiritomb",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Spiritomb, this item allows it to Mega Evolve in battle.",
	},
	"grumpigite": {
		id: "grumpigite",
		name: "Grumpigite",
		megaStone: "Grumpig-Mega",
		megaEvolves: "Grumpig",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Grumpig, this item allows it to Mega Evolve in battle.",
	},
	"blisseynite": {
		id: "blisseynite",
		name: "Blisseynite",
		megaStone: "Blissey-Mega",
		megaEvolves: "Blissey",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Blissey, this item allows it to Mega Evolve in battle.",
	},
	"druddigonite": {
		id: "druddigonite",
		name: "Druddigonite",
		megaStone: "Druddigon-Mega",
		megaEvolves: "Druddigon",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Druddigon, this item allows it to Mega Evolve in battle.",
	},
	"corsolite": {
		id: "corsolite",
		name: "Corsolite",
		megaStone: "Corsola-Mega",
		megaEvolves: "Corsola",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Corsola, this item allows it to Mega Evolve in battle.",
	},
	"seviperite": {
		id: "seviperite",
		name: "Seviperite",
		megaStone: "Seviper-Mega",
		megaEvolves: "Seviper",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Seviper, this item allows it to Mega Evolve in battle.",
	},
	"meganiumite": {
		id: "meganiumite",
		name: "Meganiumite",
		megaStone: "Meganium-Mega",
		megaEvolves: "Meganium",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Meganium, this item allows it to Mega Evolve in battle.",
	},
	"typhlosionite": {
		id: "typhlosionite",
		name: "Typhlosionite",
		megaStone: "Typhlosion-Mega",
		megaEvolves: "Typhlosion",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Typhlosion, this item allows it to Mega Evolve in battle.",
	},
	"chimechonite": {
		id: "chimechonite",
		name: "Chimechonite",
		megaStone: "Chimecho-Mega",
		megaEvolves: "Chimecho",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Chimecho, this item allows it to Mega Evolve in battle.",
	},
	"feraligatrite": {
		id: "feraligatrite",
		name: "Feraligatrite",
		megaStone: "Feraligatr-Mega",
		megaEvolves: "Feraligatr",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Feraligatr, this item allows it to Mega Evolve in battle.",
	},
	"florgite": {
		id: "florgite",
		name: "Florgite",
		megaStone: "Florges-Mega",
		megaEvolves: "Florges",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Florges, this item allows it to Mega Evolve in battle.",
	},
	"flygonite": {
		id: "flygonite",
		name: "Flygonite",
		megaStone: "Flygon-Mega",
		megaEvolves: "Flygon",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Flygon, this item allows it to Mega Evolve in battle.",
	},
	"hydreigonite": {
		id: "hydreigonite",
		name: "Hydreigonite",
		megaStone: "Hydreigon-Mega",
		megaEvolves: "Hydreigon",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Hydreigon, this item allows it to Mega Evolve in battle.",
	},
	"miloticanite": {
		id: "miloticanite",
		name: "Miloticanite",
		megaStone: "Milotic-Mega",
		megaEvolves: "Milotic",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Milotic, this item allows it to Mega Evolve in battle.",
	},
	"vileplumite": {
		id: "vileplumite",
		name: "Vileplumite",
		megaStone: "Vileplume-Mega",
		megaEvolves: "Vileplume",
		onTakeItem: function(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		desc: "If holder is a Vileplume, this item allows it to Mega Evolve in battle.",
	},
};
