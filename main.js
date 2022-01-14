let bone_count
let clickAmount
let skeleton
let Warriors
let Workers
let Alchemists
let production_amt
let saveTimer


if (localStorage.getItem("save_data")) {
    loadData();
}
else {
    bone_count = 0;
    clickAmount = 1;
    skeleton = 0;
    Warriors = 0
    Workers = 0
    Alchemists = 0
    production_amt = 0.25;
    saveTimer = 600000
}

const skeletonCost = 206;
const counter = document.getElementById('bones');
const fartus = document.getElementById('status');
const Upgrades = document.getElementById('upgrades');
const SkeletonCost = document.getElementById('skeletons');
const SkeleJobs = document.getElementById('SkeleButtons');
const SkeleCount = document.getElementById('SkeleAssign');
const cps = setInterval(production, 1000);
const totalUpdate = setInterval(totalCounter, 10);
const autoSave = setInterval(saveData, saveTimer)



///////////
//BUTTONS//
/////////// 

//clicker function, increased bone count every time the bone is clicked 
if (document.getElementById('clicker')){
    document.getElementById('clicker').onclick = function() {
        bone_count += clickAmount;
        counter.innerHTML = "Bones: " + bone_count;
        fartus.innerHTML = "";
        document.getElementById("clicker").src = "images/Bonesmalll.png"
        
    }
}

if (document.getElementById('warriorButton')){
    document.getElementById('warriorButton').onclick = function() {
        if (skeleton >= 1) {
            skeleton--;
            Warriors++;
        }
    }
}

if (document.getElementById('alchemistButton')){
    document.getElementById('alchemistButton').onclick = function() {
        if (skeleton >= 1) {
            skeleton--;
            Alchemists++;
            Upgrades.style.display = "block";
        }
    }
}

if (document.getElementById('workerButton')){
    document.getElementById('workerButton').onclick = function() {
        if (skeleton >= 1) {
            skeleton--;
            Workers++;
        }
    }
}

////////////
//UPGRADES//
////////////

if (document.getElementById('skeletons')){
    document.getElementById('skeletons').onclick = function() {
        if (bone_count >= skeletonCost){
        bone_count -= skeletonCost;
        skeleton++;
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
        if (bone_count >= 50){
            bone_count -= 50;
            clickAmount *= 2;
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
        if (bone_count >= 50 && Alchemists >= 1) {
            bone_count-= 50;
            production_amt *= 2;
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
        if (bone_count >= 50 && Alchemists >= 1) {
            bone_count -= 50;
            production_amt *= 2;
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
        if (confirm = true)
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

function production() {
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
    localStorage.setItem("bone_count",bone_count)
    localStorage.setItem("warriors",Warriors)
    localStorage.setItem("alchemists",Alchemists)
    localStorage.setItem("workers", Workers)
    localStorage.setItem("skeleton",skeleton)
    localStorage.setItem("production_amt",production_amt)
    localStorage.setItem("click_amt",clickAmount)
    localStorage.setItem("saveTimer",saveTimer)
    console.log("Done.")
}

function loadData() {
    bone_count = Number(localStorage.getItem("bone_count"))
    skeleton = Number(localStorage.getItem("skeleton"))
    production_amt = Number(localStorage.getItem("production_amt"))
    Warriors = Number(localStorage.getItem("warriors"))
    Alchemists = Number(localStorage.getItem("alchemists"))
    Workers = Number(localStorage.getItem("workers"))
    clickAmount = Number(localStorage.getItem("click_amt"))
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
}