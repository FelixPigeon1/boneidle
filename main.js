let count = 306;
let clickAmount = 1;
let skeleton = [1, 206];
let skeletonAssign = [0,8,0];
let production_amt = 0.25;
const counter = document.getElementById('bones');
const fartus = document.getElementById('status');
const Upgrades = document.getElementById('upgrades');
const SkeletonCost = document.getElementById('skeletons');
const SkeleJobs = document.getElementById('SkeleButtons');
const SkeleCount = document.getElementById('SkeleAssign');
const BoneImage = document.getElementById('clicker')
const cps = setInterval(production, 1000);
const totalUpdate = setInterval(totalCounter, 10);

///////////
//BUTTONS//
/////////// 

//hides upgrade buttons on page start
if (document.getElementById('SkeleButtons')){
    SkeleJobs.style.display = "none";
    Upgrades.style.display = "none";
}

//clicker function, increased bone count every time the bone is clicked 
if (document.getElementById('clicker')){
    document.getElementById('clicker').onclick = function() {
        count += clickAmount;
        counter.innerHTML = "Bones: " + count;
        fartus.innerHTML = "";
        BoneImage.style.resize = "width:90 height:90";
        
    }
}

if (document.getElementById('warriorButton')){
    document.getElementById('warriorButton').onclick = function() {
        if (skeleton[0] >= 1) {
            skeleton[0]--;
            skeletonAssign[0]++;
        }
    }
}

if (document.getElementById('alchemistButton')){
    document.getElementById('alchemistButton').onclick = function() {
        if (skeleton[0] >= 1) {
            skeleton[0]--;
            skeletonAssign[1]++;
            Upgrades.style.display = "block";
        }
    }
}

if (document.getElementById('workerButton')){
    document.getElementById('workerButton').onclick = function() {
        if (skeleton[0] >= 1) {
            skeleton[0]--;
            skeletonAssign[2]++;
        }
    }
}

////////////
//UPGRADES//
////////////

if (document.getElementById('skeletons')){
    document.getElementById('skeletons').onclick = function() {
        if (count >= skeleton[1]){
        count -= skeleton[1];
        skeleton[0]++;
        SkeletonCost.innerHTML = "Buy Skeleton: " + skeleton[1];
        SkeleJobs.style.display = "block";
        }
        else {
            fartus.innerHTML = "Not enough bones!";
        }
    }
}

if (document.getElementById('milk')){
    document.getElementById('Bmilk').onclick = function() {
        if (count >= 100){
            count -= 100;
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
        if (count >= 100 && skeletonAssign[1] >= 10) {
            count -= 100;
            production_amt *= 2;
            const toolsbutton = document.getElementById('tools')
            toolsbutton.remove()
            
        }
        else if (skeletonAssign[1] < 10) {
            fartus.innerHTML = "Not Enough Alchemists!";

        }
        else {
            fartus.innerHTML = "Not enough bones!";
        }
    }
}

if (document.getElementById('weapons')){
    document.getElementById('Bweapons').onclick = function() {
        if (count >= 100 && skeletonAssign[1] >= 10) {
            count -= 100;
            production_amt *= 2;
            const weaponsbutton = document.getElementById('weapons')
            weaponsbutton.remove()
            
        }
        else if (skeletonAssign[1] < 10) {
            fartus.innerHTML = "Not Enough Alchemists!";

        }
        else {
            fartus.innerHTML = "Not enough bones!";
        }
    }
}

//////////////////////////
//PRODUCTION AND COUNTER//
//////////////////////////

function production() {
    count += skeletonAssign[2] * production_amt;

}

function totalCounter() {
    counter.innerHTML = "Bones: " + count + " Skeletons: " + skeleton[0];
    SkeleCount.innerHTML = "Warriors: " + skeletonAssign[0] + " Alchemists: " + skeletonAssign[1] + " Workers: " + skeletonAssign[2];
    if (skeletonAssign[1] >= 10) {
        document.getElementById("Btools").innerHTML = "Buy tools: 100 bones";
        document.getElementById("Bweapons").innerHTML = "Buy weapons: 100 bones"
    }
}

function boneAnim () {
    BoneImage.style.width = "112px"
    BoneImage.style.height = "112px"
}