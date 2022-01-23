let production = {click: 1, work: 1}
let count = {workers: 0, alchemists: 0, warriors: 0, skeletons: 0, bones: 0}

//Dectects if a save exsists, if not, sets all values to default. 
if (localStorage.getItem("save_data")) {
    loadData()
}

const containers = {
    boneStatus: document.getElementById("bones"),
    alert: document.getElementById("alert"),
    upgrades: document.getElementById("upgrades"),
    skeletonBuy: document.getElementById("skeletonPurchase"),
    skeletonsJobs: document.getElementById("skeletonJobs"),
    skeletonDemographic: document.getElementById("skeletonDemographic")
}

setInterval(bps, 1000)
setInterval(totalCounter, 10)
setInterval(saveData, 10000)
setInterval(() => {document.getElementById("clicker").src = "assets/images/bone.png"}, 180)

function bps() {
    count.bones += count.workers * production.work
}

function totalCounter() {
    containers.boneStatus.innerHTML = "Bones: " + count.bones + " Skeletons: " + count.skeletons
    containers.skeletonDemographic.innerHTML = "Warriors: " + count.warriors + " Alchemists: " + count.alchemists + " Workers: " + count.workers
    if (count.alchemists >= 1) {
        document.getElementById("tools").innerHTML = "Buy Tools: 100 bones"
        
        document.getElementById("weapons").innerHTML = "Buy Weapons: 100 bones"
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