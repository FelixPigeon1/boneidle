let count = 206;
let clickAmount = [1, 100];
let skeleton = [0, 206];
let skeletonAssign = [0,0,0];
const counter = document.getElementById('bones');
const fartus = document.getElementById('status');
const milkCost = document.getElementById('milk');
const SkeletonCost = document.getElementById('skeletons');
const SkeleJobs = document.getElementById('SkeleButtons');
const SkeleCount = document.getElementById('SkeleAssign');
const cps = setInterval(production, 1000);
const totalUpdate = setInterval(totalCounter, 10);

if (document.getElementById('SkeleButtons')){
    SkeleJobs.style.display = "none"
    milkCost.style.display = "none"
}

if (document.getElementById('milk')){
    document.getElementById('milk').onclick = function() {
        if (count >= clickAmount[1]){
            count -= clickAmount[1];
            clickAmount[0] *= 2;
            milkCost.style.display = "none"
        }
        else {
            fartus.innerHTML = "Not enough bones!";
        }
    };
}

if (document.getElementById('clicker')){
    document.getElementById('clicker').onclick = function() {
        count += clickAmount[0];
        counter.innerHTML = "Bones: " + count;
        fartus.innerHTML = "";
    }
}

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
            milkCost.style.display = "block";
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
function production() {
    count += skeletonAssign[2] * 0.25;

}

function totalCounter() {
    counter.innerHTML = "Bones: " + count + " Skeletons: " + skeleton[0];
    SkeleCount.innerHTML = "Warriors: " + skeletonAssign[0] + " Alchemists: " + skeletonAssign[1] + " Workers: " + skeletonAssign[2];
}

