let production = {bps: 0, clickValue: 1, workModifier: 0, buyModifier: 1}
let count = {bones: 0, timebones: 0, skeletons: 0, workers: 0, alchemists: 0, warriors: 0}
let upgrades = {milk: false, tools: false, weapons: false}
let pressedKey = NaN

if (localStorage.getItem("saveData")) {
    loadData()
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
    count.bones += production.bps * 0.01
    containers.boneStatus.innerHTML = "BPS: " + production.bps + " Bones: " + Math.round(count.bones) + " Skeletons: " + count.skeletons
    containers.skeletonDemographic.innerHTML = "Warriors: " + count.warriors + " Alchemists: " + count.alchemists + " Workers: " + count.workers
    
    if (count.alchemists >= 1) {
        document.getElementById("tools").innerHTML = "Buy Tools: 100 bones"
        document.getElementById("weapons").innerHTML = "Buy Weapons: 100 bones"
    }

    if (pressedKey.shiftKey == true) {
        containers.skeletonBuy.innerHTML = "Buy 10 Skeletons: 2060"
        containers.warriorBuy.innerHTML = "Train 10 Warriors"
        containers.alchemistBuy.innerHTML = "Train 10 Alchemists"
        containers.workerBuy.innerHTML= "Train 10 Workers"

        production.buyModifier = 10
    }
    else if (pressedKey.ctrlKey == true) {
        containers.skeletonBuy.innerHTML = "Buy 100 Skeletons: 20600"
        containers.warriorBuy.innerHTML = "Train 100 Warriors"
        containers.alchemistBuy.innerHTML = "Train 100 Alchemists"
        containers.workerBuy.innerHTML = "Train 100 Workers"
        
        production.buyModifier = 100
    }
    else {
        containers.skeletonBuy.innerHTML = "Buy 1 Skeleton: 206"
        containers.warriorBuy.innerHTML = "Train Warrior"
        containers.alchemistBuy.innerHTML = "Train Alchemist"
        containers.workerBuy.innerHTML = "Train Worker"

        production.buyModifier = 1
    }
}

function saveData() {
    localStorage.setItem("version", 0.2)
    localStorage.setItem("saveData", true)
    localStorage.setItem("count", JSON.stringify(count))
    localStorage.setItem("production", JSON.stringify(production))
}

function loadData() {
    // the little + converts strings to floats
    if (+localStorage.getItem("version") < 0.2) {
        wipeData()
        localStorage.setItem("version", 0.2)
        location.reload()
    }
    count = JSON.parse(localStorage.getItem("count"))
    production = JSON.parse(localStorage.getItem("production"))
}

function wipeData () {
    localStorage.removeItem("saveData")
    localStorage.removeItem("count")
    localStorage.removeItem("production")
}