///////////////
// PURCHASES //
///////////////

document.getElementById("skeletonPurchase").onclick = function(key) {
    if (gameData.count.bones >= 206 * gameData.production.buyModifier) {
            gameData.count.bones -= 206 * gameData.production.buyModifier
            gameData.count.skeletons += gameData.production.buyModifier
    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }        
}

theAlmightyBone.onclick = function() {
    gameData.count.bones += gameData.production.clickValue
    containers.alert.innerHTML = ""

    theAlmightyBone.src = "assets/images/boneSmall.png"
}

document.getElementById("warriorBuy").onclick = function() {
    if (gameData.count.skeletons >= gameData.production.buyModifier) {
        gameData.count.skeletons -= gameData.production.buyModifier
        gameData.count.warriors += gameData.production.buyModifier
    }
}

document.getElementById("alchemistBuy").onclick = function() {
    if (gameData.count.skeletons >= gameData.production.buyModifier) {
        gameData.count.skeletons -= gameData.production.buyModifier
        gameData.count.alchemists += gameData.production.buyModifier
        containers.upgrades.style.display = "block"
    }
}

document.getElementById("workerBuy").onclick = function() {
    if (gameData.count.skeletons >= gameData.production.buyModifier) {
        gameData.count.skeletons -= gameData.production.buyModifier
        gameData.count.workers += gameData.production.buyModifier
        gameData.production.bps += gameData.production.buyModifier
    }
}

//////////////
// UPGRADES //
//////////////

document.getElementById("milk").onclick = function() {
    if (gameData.count.bones >= 50){
        gameData.count.bones -= 50
        gameData.production.clickValue *= 2
        document.getElementById("milk").style.display = "none"

    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }
}

document.getElementById("tools").onclick = function() {
    if (gameData.count.bones >= 50 && gameData.count.alchemists >= 1) {
        gameData.count.bones -= 50
        gameData.production.workModifier *= 2
        document.getElementById("tools").style.display = "none"
        
    }
    else if (gameData.count.alchemists <= 1) {
        containers.alert.innerHTML = "Not Enough Alchemists!"

    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }
}

document.getElementById("weapons").onclick = function() {
    if (gameData.count.bones >= 50 && gameData.count.alchemists >= 1) {
        gameData.count.bones -= 50
        gameData.production.workModifier *= 2
        document.getElementById("weapons").style.display = "none"
    }
    else if (gameData.count.alchemists <= 1) {
        containers.alert.innerHTML = "Not Enough Alchemists!"

    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }
}

document.getElementById("wipeBtn").onclick = function() {
    let confirm = window.confirm("THIS CANNOT BE UNDONE, CONTINUE?")
    if (confirm) {
        wipeData()
        location.reload()
    }
}

///////////
// OTHER //
///////////

window.onkeydown = function(key) {
    pressedKey = key;
}
window.onkeyup = function() {
    pressedKey = NaN;
}