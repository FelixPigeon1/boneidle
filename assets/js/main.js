let production = {clickValue: 1, bps: 0, workModifier: 0}
let count = {bones: 0, skeletons: 0, workers: 0, alchemists: 0, warriors: 0}
let pressedKey = NaN;

//Dectects if a save exsists, if not, sets all values to default. 
if (localStorage.getItem("save_data")) {
    loadData()
}

const containers = {
    theAlmightyBone: document.getElementById("theAlmightyBone"),
    boneStatus: document.getElementById("bones"),
    alert: document.getElementById("alert"),
    upgrades: document.getElementById("upgrades"),
    skeletonBuy: document.getElementById("skeletonPurchase"),
    skeletonsJobs: document.getElementById("skeletonJobs"),
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
    }
    else if (pressedKey.ctrlKey == true) {
        containers.skeletonBuy.innerHTML = "Buy 100 Skeletons: 20600"
    }
    else {
        containers.skeletonBuy.innerHTML = "Buy 1 Skeleton: 206"
    }
}

function saveData() {
    localStorage.setItem("save_data", true)
    localStorage.setItem("count", JSON.stringify(count))
    localStorage.setItem("production", JSON.stringify(production))
}

function loadData() {
    count = JSON.parse(localStorage.getItem("count"))
    production = JSON.parse(localStorage.getItem("production"))
}

function wipeData () {
    localStorage.removeItem("save_data")
    localStorage.removeItem("count")
    localStorage.removeItem("produtction")
    location.reload()
}