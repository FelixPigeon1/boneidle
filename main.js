let saveTimer
let production = {click: 1, work: 1};
let count = {workers: 0, alchemists: 0, warriors: 0, skeletons: 0, bones: 0};

//Dectects if a save exsists, if not, sets all values to default. 
if (localStorage.getItem("save_data")) {
    loadData();
}
else {
    count.bones = 0
    production.click = 1
    count.skeletons = 0
    count.warriors = 0
    count.workers = 0
    count.alchemists = 0
    production.work = 1
    saveTimer = 600000
}

const skeletonCost = 206;
const counter = document.getElementById('bones');
const fartus = document.getElementById('status');
const Upgrades = document.getElementById('upgrades');
const SkeletonCost = document.getElementById('skeletons');
const SkeleJobs = document.getElementById('SkeleButtons');
const SkeleCount = document.getElementById('SkeleAssign');
const cps = setInterval(bps, 1000);
const totalUpdate = setInterval(totalCounter, 10);
const autoSave = setInterval(saveData, saveTimer)



///////////
//BUTTONS//
/////////// 

//clicker function, increased bone count every time the bone is clicked 
if (document.getElementById('clicker')){
    document.getElementById('clicker').onclick = function() {
        count.bones += production.click;
        counter.innerHTML = "Bones: " + count.bones;
        fartus.innerHTML = "";

        btnCreate("test", 1, 0, "click", 5)
        document.getElementById("clicker").src = "images/Bonesmalll.png"
        
    }
}

if (document.getElementById('warriorButton')){
    document.getElementById('warriorButton').onclick = function() {
        if (count.skeletons >= 1) {
            count.skeletons--;
            count.warriors++;
        }
    }
}

if (document.getElementById('alchemistButton')){
    document.getElementById('alchemistButton').onclick = function() {
        if (count.skeletons >= 1) {
            count.skeletons--;
            count.alchemists++;
            Upgrades.style.display = "block";
        }
    }
}

if (document.getElementById('workerButton')){
    document.getElementById('workerButton').onclick = function() {
        if (count.skeletons >= 1) {
            count.skeletons--;
            count.workers++;
        }
    }
}

////////////
//UPGRADES//
////////////

if (document.getElementById('skeletons')){
    document.getElementById('skeletons').onclick = function() {
        if (count.bones>= skeletonCost){
        count.bones -= skeletonCost;
        count.skeletons++;
        SkeletonCost.innerHTML = "Buy Skeleton: " + skeletonCost;
        SkeleJobs.style.display = "block";
        }
        else {
            fartus.innerHTML = "Not enough bones!";
        }
    }
}

if (document.getElementById('milk')){
    document.getElementById('Bmilk').onclick = function() {
        if (count.bones >= 50){
            count.bones -= 50;
            production.click *= 2;
            const milkbutton = document.getElementById('milk')
            milkbutton.style.display = "none"

        }
        else {
            fartus.innerHTML = "Not enough bones!";
        }
    }
}

if (document.getElementById('tools')){
    document.getElementById('Btools').onclick = function() {
        if (count.bones >= 50 && Alchemists >= 1) {
            count.bones-= 50;
            production.work *= 2;
            const toolsbutton = document.getElementById('tools')
            toolsbutton.remove()
            
        }
        else if (Alchemists <= 1) {
            fartus.innerHTML = "Not Enough Alchemists!";

        }
        else {
            fartus.innerHTML = "Not enough bones!";
        }
    }
}

if (document.getElementById('weapons')){
    document.getElementById('Bweapons').onclick = function() {
        if (count.bones >= 50 && Alchemists >= 1) {
            count.bones -= 50;
            production.work *= 2;
            const weaponsbutton = document.getElementById('weapons')
            weaponsbutton.remove()
            
        }
        else if (Alchemists <= 1) {
            fartus.innerHTML = "Not Enough Alchemists!";

        }
        else {
            fartus.innerHTML = "Not enough bones!";
        }
    }
}

if (document.getElementById('saveBtn')){
    document.getElementById('saveBtn').onclick = function() {
        saveData();
    }
}
if (document.getElementById('exportBtn')){
    document.getElementById('exportBtn').onclick = function() {
        exportData();
    }
}
if (document.getElementById('wipeBtn')){
    document.getElementById('wipeBtn').onclick = function() {
        let confirm = window.confirm("THIS CANNOT BE UNDONE, CONTINUNE?")
        if (confirm)
        {
            wipeData();
        }
        
    }
}

if (document.getElementById('autoBtn')){
    document.getElementById('autoBtn').onclick = function() {
        let option = document.getElementById("autosave")
        let save_option = option.value
        if (save_option > 0)
        {
            saveTimer = save_option * 60000
        }
        else
        {
            saveTimer = 99999999999999999999
        }
        
    }
}

//////////////////////////
//PRODUCTION AND COUNTER//
//////////////////////////

function btnCreate(name, cost, alch_req, target, up_amt) {
    let btn = document.createElement("BUTTON");
    btn.onclick = function() {
        target *= (up_amt)
    }
    btn.setAttribute('button')
    btn.append("Buy" + name +": " + cost + "bones")
    if (Alchemists >= alch_req) {
        btn.append("Need " + alch_req + "alchemists!")
    }
}
function bps() {
    bone_count += Workers * production_amt;

}

setInterval(boneimagereset, 180)
function boneimagereset () {
    document.getElementById("clicker").src = "images/Bone.png"
}

function totalCounter() {
    counter.innerHTML = "Bones: " + bone_count + " Skeletons: " + skeleton;
    SkeleCount.innerHTML = "Warriors: " + Warriors + " Alchemists: " + Alchemists + " Workers: " + Workers;
    if (Alchemists >= 1) {
        document.getElementById("Btools").innerHTML = "Buy Tools: 100 bones";
        
        document.getElementById("Bweapons").innerHTML = "Buy Weapons: 100 bones"
    }
}

function saveData() {
    console.log("saving... ");
    localStorage.setItem("save_data",true);
    localStorage.setItem("count", JSON.stringify(count))
    localStorage.setItem("production", JSON.stringify(production))
    localStorage.setItem("saveTimer",saveTimer)
    console.log("Done.")
}

function loadData() {
    let save = localStorage.getItem('count')
    count = JSON.parse('save')
    save = localStorage.getItem('production')
    production = JSON.parse('save')
    saveTimer = Number(localStorage.getItem("saveTimer"))
}

function exportData() {
    console.log(localStorage.getItem("skeleton"))
    console.log(localStorage.getItem("bone_count"))
    console.log(localStorage.getItem("workers"))
    console.log(localStorage.getItem("alchemists"))
    console.log(localStorage.getItem("warriors"))
    console.log(localStorage.getItem("saveTimer"))
    }

function wipeData () {
    localStorage.removeItem("save_data")
    localStorage.removeItem("bone_count")
    localStorage.removeItem("workers")
    localStorage.removeItem("alchemists")
    localStorage.removeItem("warriors")
    localStorage.removeItem("skeleton")
    localStorage.removeItem("saveTimer")
    location.reload()
}