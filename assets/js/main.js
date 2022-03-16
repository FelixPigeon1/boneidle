let gameData = {
    production: {bps: 0, clickValue: 1, workModifier: 0, buyModifier: 1},
    count: {bones: 0, gashadokuro: 0, skeletons: 0, workers: 0, alchemists: 0, warriors: 0},
    upgrades: {milk: false, tools: false, weapons: false},
    lastPlayed: 0,
    version: 0.3
}
let pressedKey = NaN

if (localStorage.getItem("gameData") != null) {
    // the little + converts strings to floats
    if (+JSON.parse(localStorage.getItem("gameData")).version < gameData.version) {
        wipeData()
        location.reload()
    }

    gameData = JSON.parse(localStorage.getItem("gameData"))
    gameData.count.bones += gameData.production.bps * ((Date.now() - gameData.lastPlayed) / 1000)
}

const containers = {
    theAlmightyBone: document.getElementById("theAlmightyBone"),
    boneStatus: document.getElementById("bones"),
    alert: document.getElementById("alert"),
    upgrades: document.getElementById("upgrades"),
    skeletonBuy: document.getElementById("skeletonPurchase"),
    skeletonsJobs: document.getElementById("skeletonJobs"),
    warriorBuy: document.getElementById("warriorBuy"),
    alchemistBuy: document.getElementById("alchemistBuy"),
    workerBuy: document.getElementById("workerBuy"),
    skeletonDemographic: document.getElementById("skeletonDemographic")
}

setInterval(updateGame, 10)
setInterval(saveData, 10000)
setInterval(() => {theAlmightyBone.src = "assets/images/bone.png"}, 180)

function updateGame() {
    gameData.count.bones += gameData.production.bps * 0.01 * (gameData.count.gashadokuro + 1)
    containers.boneStatus.innerHTML = "BPS: " + gameData.production.bps + " Bones: " + Math.round(gameData.count.bones) + " Skeletons: " + gameData.count.skeletons
    containers.skeletonDemographic.innerHTML = "Warriors: " + gameData.count.warriors + " Alchemists: " + gameData.count.alchemists + " Workers: " + gameData.count.workers
    
    if (gameData.count.alchemists >= 1) {
        document.getElementById("tools").innerHTML = "Buy Tools: 100 bones"
        document.getElementById("weapons").innerHTML = "Buy Weapons: 100 bones"
    }

    if (pressedKey.shiftKey == true) {
        gameData.production.buyModifier = 10
    }
    else if (pressedKey.ctrlKey == true) {
        gameData.production.buyModifier = 100
    }
    else {
        gameData.production.buyModifier = 1
    }
    containers.skeletonBuy.innerHTML = "Buy " + gameData.production.buyModifier + " Skeleton(s): " + (206 * gameData.production.buyModifier)
    containers.warriorBuy.innerHTML = "Train " + gameData.production.buyModifier + " Warrior(s)"
    containers.alchemistBuy.innerHTML = "Train " + gameData.production.buyModifier + " Alchemist(s)"
    containers.workerBuy.innerHTML= "Train " + gameData.production.buyModifier + " Worker(s)"

    gameData.lastPlayed = Date.now()
}

function saveData() {
    localStorage.setItem("gameData", JSON.stringify(gameData))
}

function wipeData() {
    localStorage.removeItem("gameData")
}
