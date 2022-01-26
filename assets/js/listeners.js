///////////////
// PURCHASES //
///////////////

document.getElementById("skeletonPurchase").onclick = function(key) {
    if (count.bones >= 206 * production.buyModifier) {
            count.bones -= 206 * production.buyModifier
            count.skeletons += production.buyModifier
    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }        
}

theAlmightyBone.onclick = function() {
    count.bones += production.clickValue
    containers.alert.innerHTML = ""

    theAlmightyBone.src = "assets/images/boneSmall.png"
}

document.getElementById("warriorBuy").onclick = function() {
    if (count.skeletons >= production.buyModifier) {
        count.skeletons -= production.buyModifier
        count.warriors += production.buyModifier
    }
}

document.getElementById("alchemistBuy").onclick = function() {
    if (count.skeletons >= production.buyModifier) {
        count.skeletons -= production.buyModifier
        count.alchemists += production.buyModifier
        containers.upgrades.style.display = "block"
    }
}

document.getElementById("workerBuy").onclick = function() {
    if (count.skeletons >= production.buyModifier) {
        count.skeletons -= production.buyModifier
        count.workers += production.buyModifier
        production.bps += production.buyModifier
    }
}

//////////////
// UPGRADES //
//////////////

document.getElementById("milk").onclick = function() {
    if (count.bones >= 50){
        count.bones -= 50
        production.clickValue *= 2
        const milkbutton = document.getElementById("milk")
        milkbutton.style.display = "none"

    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }
}

document.getElementById("tools").onclick = function() {
    if (count.bones >= 50 && count.alchemists >= 1) {
        count.bones -= 50
        production.workModifier *= 2
        const toolsbutton = document.getElementById("tools")
        toolsbutton.style.display = "none"
        
    }
    else if (count.alchemists <= 1) {
        containers.alert.innerHTML = "Not Enough Alchemists!"

    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }
}

document.getElementById("weapons").onclick = function() {
    if (count.bones >= 50 && count.alchemists >= 1) {
        count.bones -= 50
        production.workModifier *= 2
        const weaponsbutton = document.getElementById("weapons")
        weaponsbutton.style.display = "none"
    }
    else if (count.alchemists <= 1) {
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