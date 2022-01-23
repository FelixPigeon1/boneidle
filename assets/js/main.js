let production = {click: 1, work: 1}
let count = {workers: 0, alchemists: 0, warriors: 0, skeletons: 0, bones: 0}

//Dectects if a save exsists, if not, sets all values to default. 
if (localStorage.getItem("save_data")) {
    loadData()
}

const containers = {
    counter: document.getElementById('bones'),
    alert: document.getElementById('alert'),
    upgrades: document.getElementById('upgrades'),
    skeletonBuy: document.getElementById('skeletons'),
    skeletonsJobs: document.getElementById('SkeleButtons'),
    skeletonDemographic: document.getElementById('SkeleAssign')
}

setInterval(bps, 1000)
setInterval(totalCounter, 10)
setInterval(saveData, 10000)
setInterval(() => {document.getElementById("clicker").src = "assets/images/bone.png"}, 180)



///////////
//BUTTONS//
/////////// 

//clicker function, increased bone count every time the bone is clicked 
if (document.getElementById('clicker')) {
    document.getElementById('clicker').onclick = function() {
        count.bones += production.click
        containers.counter.innerHTML = "Bones: " + count.bones + " Skeletons: " + count.skeletons
        containers.alert.innerHTML = ""

        document.getElementById("clicker").src = "assets/images/boneSmall.png"
    }
}

if (document.getElementById('warriorButton')) {
    document.getElementById('warriorButton').onclick = function() {
        if (count.skeletons >= 1) {
            count.skeletons--
            count.warriors++
        }
    }
}

if (document.getElementById('alchemistButton')){
    document.getElementById('alchemistButton').onclick = function() {
        if (count.skeletons >= 1) {
            count.skeletons--
            count.alchemists++
            containers.upgrades.style.display = "block"
        }
    }
}

if (document.getElementById('workerButton')){
    document.getElementById('workerButton').onclick = function() {
        if (count.skeletons >= 1) {
            count.skeletons--
            count.workers++
        }
    }
}

////////////
//UPGRADES//
////////////

if (document.getElementById('skeletons')){
    document.getElementById('skeletons').onclick = function() {
        if (count.bones >= 206){
            count.bones -= 206
            count.skeletons++
            containers.skeletonsJobs.style.display = "block"
        }
        else {
            containers.alert.innerHTML = "Not enough bones!"
        }
    }
}

if (document.getElementById('milk')){
    document.getElementById('Bmilk').onclick = function() {
        if (count.bones >= 50){
            count.bones -= 50
            production.click *= 2
            const milkbutton = document.getElementById('milk')
            milkbutton.style.display = "none"

        }
        else {
            containers.alert.innerHTML = "Not enough bones!"
        }
    }
}

if (document.getElementById('tools')){
    document.getElementById('Btools').onclick = function() {
        if (count.bones >= 50 && count.alchemists >= 1) {
            count.bones-= 50
            production.work *= 2
            const toolsbutton = document.getElementById('tools')
            toolsbutton.style.display = "none"
            //toolsbutton.remove()
            
        }
        else if (count.alchemists <= 1) {
            containers.alert.innerHTML = "Not Enough Alchemists!"

        }
        else {
            containers.alert.innerHTML = "Not enough bones!"
        }
    }
}

if (document.getElementById('weapons')){
    document.getElementById('Bweapons').onclick = function() {
        if (count.bones >= 50 && count.alchemists >= 1) {
            count.bones -= 50
            production.work *= 2
            const weaponsbutton = document.getElementById('weapons')
            //weaponsbutton.remove()
            weaponsbutton.style.display = "none"
        }
        else if (count.alchemists <= 1) {
            containers.alert.innerHTML = "Not Enough Alchemists!"

        }
        else {
            containers.alert.innerHTML = "Not enough bones!"
        }
    }
}

if (document.getElementById('wipeBtn')){
    document.getElementById('wipeBtn').onclick = function() {
        let confirm = window.confirm("THIS CANNOT BE UNDONE, CONTINUNE?")
        if (confirm)
        {
            wipeData()
        }
        
    }
}

function bps() {
    count.bones += count.workers * production.work
}

function totalCounter() {
    containers.counter.innerHTML = "Bones: " + count.bones + " Skeletons: " + count.skeletons
    containers.skeletonDemographic.innerHTML = "Warriors: " + count.warriors + " Alchemists: " + count.alchemists + " Workers: " + count.workers
    if (count.alchemists >= 1) {
        document.getElementById("Btools").innerHTML = "Buy Tools: 100 bones"
        
        document.getElementById("Bweapons").innerHTML = "Buy Weapons: 100 bones"
    }
}

function saveData() {
    localStorage.setItem("save_data", true)
    localStorage.setItem("count", JSON.stringify(count))
    localStorage.setItem("production", JSON.stringify(production))
}

function loadData() {
    count = JSON.parse(localStorage.getItem('count'))
    production = JSON.parse(localStorage.getItem('production'))
}

function wipeData () {
    localStorage.removeItem("save_data")
    localStorage.removeItem("count")
    localStorage.removeItem("produtction")
    location.reload()
}