let production = {bps: 0, clickValue: 1, workModifier: 0, buyModifier: 1}
let count = {bones: 0, gashadokuro: 0, skeletons: 0, workers: 0, alchemists: 0, warriors: 0}
let upgrades = {milk: false, tools: false, weapons: false}
let pressedKey = NaN
let version = 0.3

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
    count.bones += production.bps * 0.01 * (count.gashadokuro + 1)
    containers.boneStatus.innerHTML = "BPS: " + production.bps + " Bones: " + Math.round(count.bones) + " Skeletons: " + count.skeletons
    containers.skeletonDemographic.innerHTML = "Warriors: " + count.warriors + " Alchemists: " + count.alchemists + " Workers: " + count.workers
    
    if (count.alchemists >= 1) {
        document.getElementById("tools").innerHTML = "Buy Tools: 100 bones"
        document.getElementById("weapons").innerHTML = "Buy Weapons: 100 bones"
    }

    if (pressedKey.shiftKey == true) {
        production.buyModifier = 10
    }
    else if (pressedKey.ctrlKey == true) {
        production.buyModifier = 100
    }
    else {
        production.buyModifier = 1
    }
    containers.skeletonBuy.innerHTML = "Buy " + production.buyModifier + " Skeleton(s): 2060"
    containers.warriorBuy.innerHTML = "Train " + production.buyModifier + " Warrior(s)"
    containers.alchemistBuy.innerHTML = "Train " + production.buyModifier + " Alchemist(s)"
    containers.workerBuy.innerHTML= "Train " + production.buyModifier + " Worker(s)"
}

function saveData() {
    localStorage.setItem("version", version)
    localStorage.setItem("saveData", true)
    localStorage.setItem("count", JSON.stringify(count))
    localStorage.setItem("production", JSON.stringify(production))
}

function loadData() {
    // the little + converts strings to floats
    if (+localStorage.getItem("version") < version) {
        wipeData()
        localStorage.setItem("version", version)
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