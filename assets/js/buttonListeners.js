///////////////
// PURCHASES //
///////////////

theAlmightyBone.onclick = function() {
    count.bones += production.clickValue
    containers.alert.innerHTML = ""

    theAlmightyBone.src = "assets/images/boneSmall.png"
}

document.getElementById("warriorBuy").onclick = function() {
    if (count.skeletons >= 1) {
        count.skeletons--
        count.warriors++
    }
}

document.getElementById("alchemistBuy").onclick = function() {
    if (count.skeletons >= 1) {
        count.skeletons--
        count.alchemists++
        containers.upgrades.style.display = "block"
    }
}

document.getElementById("workerBuy").onclick = function() {
    if (count.skeletons >= 1) {
        count.skeletons--
        count.workers++
        production.bps++
    }
}

//////////////
// UPGRADES //
//////////////

document.getElementById("skeletonPurchase").onclick = function() {
    if (count.bones >= 206){
        count.bones -= 206
        count.skeletons++
        containers.skeletonsJobs.style.display = "block"
    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }
}
document.getElementById("skeletonPurchase10").onclick = function() {
    if (count.bones >= 2060){
        count.bones -= 2060
        count.skeletons += 10
        containers.skeletonsJobs.style.display = "block"
    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }
}
document.getElementById("skeletonPurchase100").onclick = function() {
    if (count.bones >= 20600){
        count.bones -= 20600
        count.skeletons += 100
        containers.skeletonsJobs.style.display = "block"
    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }
}

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
    let confirm = window.confirm("THIS CANNOT BE UNDONE, CONTINUNE?")
    if (confirm)
    {
        wipeData()
    }
}