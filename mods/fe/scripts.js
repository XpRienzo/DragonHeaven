	//Sensu Dancer
if ((move.flags['dance'] || move.type === 'Fairy') && moveDidSomething && !move.isExternal) {
    let sensudancers = [];
    for (const side of this.sides) {
        for (const currentPoke of side.active) {
            if (!currentPoke || !currentPoke.hp || pokemon === currentPoke) continue;
            if (currentPoke.hasAbility('sensudancer') && !currentPoke.isSemiInvulnerable()) {
                sensudancers.push(currentPoke);
            }
        }
    }
    // Dancer activates in order of lowest speed stat to highest
    // Ties go to whichever Pokemon has had the ability for the least amount of time
    sensudancers.sort(function(a, b) {
        return -(b.stats['spe'] - a.stats['spe']) || b.abilityOrder - a.abilityOrder;
    });
    for (const dancer of sensudancers) {
        if (this.faintMessages()) break;
        this.add('-activate', dancer, 'ability: Sensu Dancer');
        this.runMove(baseMove.id, dancer, 0, this.getAbility('sensudancer'), undefined, true);
    }
}
if (noLock && pokemon.volatiles.lockedmove) delete pokemon.volatiles.lockedmove;
},

//Baile Dancer
if ((move.flags['dance'] || move.type === 'Grass') && moveDidSomething && !move.isExternal) {
    let bailedancers = [];
    for (const side of this.sides) {
        for (const currentPoke of side.active) {
            if (!currentPoke || !currentPoke.hp || pokemon === currentPoke) continue;
            if (currentPoke.hasAbility('bailedancer') && !currentPoke.isSemiInvulnerable()) {
                bailedancers.push(currentPoke);
            }
        }
    }
    // Dancer activates in order of lowest speed stat to highest
    // Ties go to whichever Pokemon has had the ability for the least amount of time
    bailedancers.sort(function(a, b) {
        return -(b.stats['spe'] - a.stats['spe']) || b.abilityOrder - a.abilityOrder;
    });
    for (const dancer of bailedancers) {
        if (this.faintMessages()) break;
        this.add('-activate', dancer, 'ability: Baile Dancer');
        this.runMove(baseMove.id, dancer, 0, this.getAbility('bailedancer'), undefined, true);
    }
}
if (noLock && pokemon.volatiles.lockedmove) delete pokemon.volatiles.lockedmove;
},

//Pau Dancer
if ((move.flags['dance'] || move.type === 'Psychic') && moveDidSomething && !move.isExternal) {
    let paudancers = [];
    for (const side of this.sides) {
        for (const currentPoke of side.active) {
            if (!currentPoke || !currentPoke.hp || pokemon === currentPoke) continue;
            if (currentPoke.hasAbility('paudancer') && !currentPoke.isSemiInvulnerable()) {
                paudancers.push(currentPoke);
            }
        }
    }
    // Dancer activates in order of lowest speed stat to highest
    // Ties go to whichever Pokemon has had the ability for the least amount of time
    paudancers.sort(function(a, b) {
        return -(b.stats['spe'] - a.stats['spe']) || b.abilityOrder - a.abilityOrder;
    });
    for (const dancer of paudancers) {
        if (this.faintMessages()) break;
        this.add('-activate', dancer, 'ability: Pau Dancer');
        this.runMove(baseMove.id, dancer, 0, this.getAbility('paudancer'), undefined, true);
    }
}
if (noLock && pokemon.volatiles.lockedmove) delete pokemon.volatiles.lockedmove;
},

//Pom Pom Dancer
if ((move.flags['dance'] || move.type === 'Electric') && moveDidSomething && !move.isExternal) {
    let pompomdancers = [];
    for (const side of this.sides) {
        for (const currentPoke of side.active) {
            if (!currentPoke || !currentPoke.hp || pokemon === currentPoke) continue;
            if (currentPoke.hasAbility('pompomdancer') && !currentPoke.isSemiInvulnerable()) {
                paudancers.push(currentPoke);
            }
        }
    }
    // Dancer activates in order of lowest speed stat to highest
    // Ties go to whichever Pokemon has had the ability for the least amount of time
    pompomdancers.sort(function(a, b) {
        return -(b.stats['spe'] - a.stats['spe']) || b.abilityOrder - a.abilityOrder;
    });
    for (const dancer of pompomdancers) {
        if (this.faintMessages()) break;
        this.add('-activate', dancer, 'ability: Pom-Pom Dancer');
        this.runMove(baseMove.id, dancer, 0, this.getAbility('pompomdancer'), undefined, true);
    }
}
if (noLock && pokemon.volatiles.lockedmove) delete pokemon.volatiles.lockedmove;
},
