'use strict';

exports.BattleItems = {
  "banettiteb": {
    id: "banettiteb",
    name: "Banettite B",
    megaStone: "Banette-Blademaster-Mega",
    megaEvolves: "Banette-Blademaster",
    onTakeItem: function (item, source) {
      if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
      return true;
    },
    desc: "If held by a Banettite-Blademaster, this item allows it to Mega Evolve in battle.",
  },
};