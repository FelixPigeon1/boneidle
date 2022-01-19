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
        if (count.bones >= 50 && count.alchemists >= 1) {
            count.bones-= 50;
            production.work *= 2;
            const toolsbutton = document.getElementById('tools')
            toolsbutton.style.display = "none"
            //toolsbutton.remove()
            
        }
        else if (count.alchemists <= 1) {
            fartus.innerHTML = "Not Enough Alchemists!";

        }
        else {
            fartus.innerHTML = "Not enough bones!";
        }
    }
}

if (document.getElementById('weapons')){
    document.getElementById('Bweapons').onclick = function() {
        if (count.bones >= 50 && count.alchemists >= 1) {
            count.bones -= 50;
            production.work *= 2;
            const weaponsbutton = document.getElementById('weapons')
            //weaponsbutton.remove()
            weaponsbutton.style.display = "none"
        }
        else if (count.alchemists <= 1) {
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
if (document.getElementById('wipeBtn')){
    document.getElementById('wipeBtn').onclick = function() {
        let confirm = window.confirm("THIS CANNOT BE UNDONE, CONTINUNE?")
        if (confirm)
        {
            wipeData();
        }
        
    }
}

//////////////////////////
//PRODUCTION AND COUNTER//
//////////////////////////

//function btnCreate(name, cost, alch_req, target, up_amt) {
//    let btn = document.createElement("BUTTON");
//    btn.onclick = function() {
//       target *= (up_amt)
//    }
//    //btn.setAttribute('button')
//    btn.appendChild(document.getElementById("Production"))
//    btn.append("Buy" + name +": " + cost + "bones")
//    if (count.alchemists >= alch_req) {
//        btn.append("Need " + alch_req + "alchemists!")
//    }
//}
function bps() {
    count.bones += count.workers * production.work;

}

setInterval(boneimagereset, 180)
function boneimagereset () {
    document.getElementById("clicker").src = "images/Bone.png"
}

function totalCounter() {
    counter.innerHTML = "Bones: " + count.bones + " Skeletons: " + count.skeletons;
    SkeleCount.innerHTML = "Warriors: " + count.warriors + " Alchemists: " + count.alchemists + " Workers: " + count.workers;
    if (count.alchemists >= 1) {
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
    count = JSON.parse(localStorage.getItem('count'))
    production = JSON.parse(localStorage.getItem('production'))
    saveTimer = Number(localStorage.getItem("saveTimer"))
}

function wipeData () {
    localStorage.removeItem("save_data")
    localStorage.removeItem("count")
    localStorage.removeItem("produtction")
    localStorage.removeItem("saveTimer")
    location.reload()
}



//- - - - - - , - - , , , , , , - , , , , , , , , , , , , , , , , , , , , , , , , , , . . , , , , . , . , . . . . . . . , , . . . . . . . . . . . . . . . . . . . , , . . . . . . . , , . , . . . . . ,
//- - - - , - - , , - , , , , , - , , , , , , , , , , , , , , , , , , , , , , . , , , , , , , , . , , , , . . . , ~ : ~ ~ , . . . . . . . . . . . . . . . . . . . . . . . . . , . . . , . , . . . . . ,
//: # = ; * ; - # - - - - - - - , , , , , ! * ; ~ , ~ ; - , , , , , , ~ : , , ; - , , , , , , , . , , , , . . . , , , , ~ # : . . . . . . . . . . . . . . . . . . . . . . . , ~ ~ - - , . , . . . . , ,
//: $ ~ - = * - $ , - ; = ! ~ = ! , , = : $ = , , , ; $ : - - ; ; ; , ! # ~ , ; ~ - ; ; ; : , : = : ; ~ , . . . , , , , : # : . . . . . . . . . . . . . . . . . . . . . . . , : ~ - : ~ , . . . . . . ,
//: $ : = ! : - $ - : ! : = ! - * ; = ! , ~ ; ! $ : ; # , - : ; - * ~ = * , - # ~ ! # , - # - ! * , : # - . . , ; * - - - , , . . . . . . . . . . . . . . . . . . . . . . . , ~ ~ , ~ - . . . . , , , ,
//; # ~ - - - ~ $ - * = : ! ! , - # ! - , ~ ~ : # ; : # ~ ~ # ~ ~ * ~ = # - - * ~ ; # ~ ; # , ! * , ~ # - - ~ , ! = , , , , , . , . . . . . . . . . . . . . . . . . - ; ; : : : : ~ - - ~ - , . . . . ,
//~ ; - - - - - : - - : : : ~ , , * - , , ~ : : ~ - ~ : : , ~ : : ; - - ; : , ; - - ~ ; ; : , : ; , - ; , - ~ , ; * ! ! = ; , , . . . . . . . . . . . . . . . . . . , ~ ~ : ~ ~ ~ : : : - , , . . . . ,
//- - - - - - - - - , - - , , , ; ; , , , , , , , , , , , , , , , , , , , , , , , , , , , , , . . , . . , , , . . . , , , , . . . . . . . . . . . . . . . . . . . . . . . . , , . , . . , , , . . . . .
//! ! * * ! ! ! ! ! ! ! ! ! ! ! = = = = = ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; : : : : : : : : : : : ~ ~ ~ ~ ~ ~ ~ ~ ~ - - - - - ~ - - - - - - - - - - , - , , , , , - , , - - , , - - , - - - - - - , - , , .
//@ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ # # # # # # # # # # # # # # # # # # # # * # # # # # # # # # ~ .
//@ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ # $ $ # # # # # $ # # # # # # * # # # ! ; ; ; ; ; * # # # * # # # ~ .
//@ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ # # # # # $ $ # $ $ # # # # # # # # # $ # # # # $ # # # # # $ # # ~ .
//@ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ # # $ # # # # # # ! = * * # # # # # # $ # # # # # # # # $ # $ # # - .
//@ @ @ @ @ @ @ # = ; ; : : : : : : : : : : : : : : ; ; : : : : : : : : : ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; : ; ; : : : ; : : : : : : : : : : : : * # ! # # # # # # # - .
//@ @ @ @ @ @ @ : - - - - - - - - - - , , , , , , , , , , , , , , , , , , , , , , . . . . . . . . , . , . . . . . . . , . . . , . . . . . , ~ : ~ - - , . . , . . . . . , , . , = * = # # # # # # # - .
//@ @ @ @ @ @ @ : - - - - - , - - , , , , , , , , , , , , , , , . , . , , , . . . , , , . . . , - - , , . . . . . . . . . . . . . . . . . ~ : ~ . . . . . . . . . . . . . . . , = * ! # # # # # # # - .
//@ @ @ @ @ @ @ ~ - - - , , , , , , , , , , , , , , , , . , , , , , , ~ : : . . , . , , - ~ : : : ~ : ~ . . . . . . . . . . . . . . , - ~ ~ , . , . . . . . . . . . . . . . . . ; ! ! # # # # # # # - .
//@ @ @ @ @ @ @ : - - - , , , , , , , , , , , , . . , , . . . , , - : : - . , , ~ ~ : : : ~ , - ~ : ~ , . . . . . . . . . . . . . , ~ : - . . . . , . . . . . . . . . . . . . . = ! ; # # # # # # # - .
//@ @ @ @ @ @ @ : - - - , , , , , , , , , , , , , . , , , . . , ~ : ~ , , , ~ : : : ~ , . . - ~ : : , . . . . . . . . . . . . , , ~ : , . . . . . , . . . . . . . . . . . . , . = ! = # # # # # # # - .
//@ @ @ @ @ @ @ ~ - - - , , , , , , , , , , , , , , , . . . , ~ ; ~ , - : ; ~ - , . , - ~ : : ~ , . , , . . . . , , ~ ~ ~ ~ - ~ ~ ~ . , . . . . . . . . . . . . . . . . . . . . = ! ! # # # # # # # , .
//@ @ @ @ @ @ @ ~ - - , , , , , , , , , , , , , , , . , , - : : - ~ : ~ - . , , - : : ~ - , , ~ : ~ ~ ~ : , , ~ : - . , - ~ ~ : - , . . . , - - . . . . . . . . . . . . . . . , = = ! # # # # # # # , .
//@ @ @ @ @ @ @ ~ - - - , , , , , , , , , , , , , , , , - : : ~ : : ~ , , - ~ : : ~ , , . , ~ ~ , , ~ : ~ , : ~ , . - ~ ~ - ~ ~ . . . , , : - , . , , , , , , , , , . . . . . , ! = ! # # # # # # # , .
//@ @ @ @ @ @ @ : - - - , , , , , , , , , , . , , , , ~ : : : : ~ ~ : : : ~ , , . . . . - : : : ~ - , - : ~ ~ ~ ~ : - , - ~ ~ : ~ ~ : ~ , . . . . . . . . . . . . . . . . . . , ! ! = # # # # # # # , .
//@ @ @ @ @ @ @ : - - - , , , , , , , , , , , , , - : : : ; ; ~ - , , , , . . . . . . . - ~ , , - : : ~ ~ : : ~ - , , , . , ~ ~ ~ - . . . . . . . . . . . . . . . . . . . . . , ! ! ! # # # # # # # , .
//@ @ @ @ @ @ @ : - - - , , , , , , , , , - - ~ ~ : : : : ~ - - - - - - - - - - - - - - - : : ~ ~ ~ ! * * * * ; ! = ! ! ! ! = ~ ~ , , . . . , , . . . . . . . . . . . . . . . , ! = * $ # # # # # # , .
//@ @ @ @ @ @ @ : - - - - , , , , , , , - : ; ~ : : : ~ ~ ~ : : : ~ - - ~ : , , , , , , . , ~ , . = $ $ $ $ # * $ $ $ $ $ $ $ = ! $ ! ! = ; - . . . . . . . . . . . . . . . . , ! ! * $ # # # # # # , .
//@ @ @ @ @ @ @ : - - - - , , , , , , , , ~ - - ; ; , , , , ~ : , , , , ~ - . . , , , . . , ~ ~ : $ $ $ $ $ # * $ $ $ $ # $ # * ; # $ # $ # ! : . . . . . . . . . . . . . . . , * # # # # # # # # # . .
//@ @ @ @ @ @ @ : - - - , , , , , , , , . , , ~ : ~ , , , , ~ : , , , , ~ . . . . . . . . , ~ = # $ $ $ $ $ * = # $ $ $ $ # $ ! ; # # $ # $ # # : . . . . . . . . . . . . . , , * # # $ # # # # # * . .
//@ @ @ @ @ @ @ ; - - - , , , , , , , , , , , - : , , , , , , - , . , , ~ , . . . . . , . . - ~ ~ ! $ $ $ $ = ; * $ $ $ $ $ # : * $ $ $ # # $ # : , . . . . . . . . . . . . . , * # # # # # # # # * . ,
//@ @ @ @ @ @ @ ; - - - , , , , , , , , , , , ~ : , , , , , , , , , , , - , , , . , , , . . , : = * $ $ $ $ # # $ $ $ $ $ $ # ~ * $ $ $ # # # * , . . . . . . . . . . . . . . - * # # # # # # # # * . .
//@ @ @ @ @ @ @ ; - - - , , , , , , , , , , , : : - , , , , , , . , , , ~ - , . , . . , . . . ~ # $ $ $ $ $ $ $ $ $ $ $ $ $ * : # $ $ $ $ # = - . , . . . . . . . . . . . . . - # # # # # # # # # * . .
//@ @ @ @ @ @ @ ; - - - , , , , , , , , , , , , , , . , , , , , , . , . , : - . . . . . , . . : # $ $ $ $ $ $ $ $ $ $ $ $ $ * ~ = # # # # # . . . . . . . . . . . . . . . . . - # # # # # # # # $ * . ,
//@ @ @ @ @ @ @ ; - - - , , , , , , , , , , , , , , . , , , - , , , , , , , , . , . . , . . , - = $ $ $ $ $ $ $ $ $ $ $ $ $ * ; # # # # # * , .   . . . . . . . . . . . . . . - # # # # # # # # $ * . ,
//@ @ @ @ @ @ @ ; - - , , , , , , , , , , , , . , . , , ; - - : ! ! : . . . , . , . . . . , , . . , , , : = # $ $ $ $ $ # $ # # $ # # # # # , . . . . . . . . . . . . . . . . - # # # # # # # # $ ! . .
//@ @ @ @ @ @ @ ; - - , , , , , , , , , , , , , , , . , - ! ~ , - - = - , , . . . , , , . . , . . , , , . . . - : * $ # $ $ # # # # * ; : - , . . . . . . . . . . . . . . . . - * # # # # # # # $ ! . ,
//@ @ @ @ @ @ @ ; - - , , , , , , , , , , , , , , , , , . ~ ! ; ! , , , . , . . , , , , . , . , : ! ! ; , . . . . - # # $ # # ! : - , . . . . . . . . . . . . . . . . . . . . ~ # # # # # # # # $ ! . ,
//@ @ @ @ @ @ @ ; - - , , , , , , , , , , , , , , , . , , , - ! # = ! : , , : * $ $ $ # ~ , . . . , , ~ , , . . . . ! # # ! - . . . . . . . . . . . . . . . . . . . . . . . . ~ # # # # # # # # # ! . ,
//@ @ @ @ @ @ @ ; - - , , , , , , , , , , , , , , , , , . , , = $ $ ; , , . ~ * $ $ $ $ $ ! , , ~ : ! * ! - . , - ! $ # # - . . . . . , , . . . . . . . . . . . . . . . . . . : # # # # # # # # # ! . ,
//@ @ @ @ @ @ @ ; - - , , , , , , , , , , , , , , , , , , , . - $ $ : , . , , ~ # $ $ $ $ $ = - , - ~ ~ ~ ~ ; * # $ $ # # - , - ~ , - ; ~ . . . . . . . . . . . . . . . . . . : # # # # # # # # # ! . ,
//@ @ @ @ @ @ @ = - - , , , , , , , , , , , , , , , . , , . , . , : ! - . , . , ~ # $ @ $ $ $ $ $ # # # $ # $ # $ $ # # # $ * ; , , - , , . . . . . . . . . . . . . . . . . . : # # # # # # # # # ! . .
//@ @ @ @ @ @ @ = - , , , , , , , , , , , , , , , , , , , . . . , , . . . . . . . , ; $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ # # # # # # * * # # ; . . . . . . . . . . . . . . . . . : # # # # # # # # # ! . .
//@ @ @ @ @ @ @ = - , , , , , , , , , , , , , , , , . , , , , , . . . . . , . . . . , = $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ # $ # # $ # # # # # ~ . . . . . . . . . . . . . . . . . : # # # # # # # # # ! . .
//@ @ @ @ @ @ @ = , , , , , , , , , , , . . . . . . . . . , , , . . . . . , . . . , . , - ! $ $ $ $ $ $ $ $ $ $ $ $ $ # # # # # # # # * ; . . . . . . . . . . . . . . . . . . : # # # # # # # # # ! . .
//@ @ @ @ @ @ @ = , , , , , , , , , , , . , , . . . . . . . . , . . . . . . . . . . . . . ~ $ $ $ $ $ # - , ~ ; = ! * # # = ! # # # : . . . . . . . . . . . . . . . . . . . . : # # # # # # # # $ ! . .
//@ @ @ @ @ @ @ = , , , , , , , , , , , , . . . . . . . . . . . . . . . . . . . . . . . , . = $ $ $ # # = ~ - , . , , - - . ~ # * : . . . . . . . . . . . . . . . . . . . . . : # # # # # # # # $ = . .
//@ @ @ @ @ @ @ = , , , , , , , , , , , , . . . , , , . . . . . . . . . . . . . , , . . . , . - ~ ; * # # # # * ; . . . . , ; ; ,   . . . . . . . . . . . . . . . . . . . . . ; # # # # # # # # $ = . .
//@ @ @ @ @ @ @ = , , , , , , , , , , , , . . . , , . . . . . . . . . . . . . . , . . . . . . . . . . ~ * * # # * ! - . . , - . . . . . . . . . . . . . . . . . . . . . . . . ; $ # # # # # # # $ = . .
//@ @ @ @ @ @ @ = , , , , , , , , , , , , . . . , , , , . , . , . . . . . . . , , . . . . . . . . . , , , - : ; ; = : , . . . . . . . . . . . . . . . . . . . . . . . . . . . ; $ # # # # # # # $ = . .
//@ @ @ @ @ @ @ = , , , , , , , , , , , , . . , , , , , , , , . , , , . . . , . . . . . . . . . . . , ; # * ; ~ ~ ~ ; : . . . . . . . . . . . . . . . . . . . . . . . . . . . ; $ # # # # # # # # = , .
//@ @ @ @ @ @ @ = , , , , , , , . . . . , , , , , , , . . = ! , . , . . . , . . . . . . . . . . . . . . , ~ ! * * * ! ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . = # # # # # # # # # = , .
//@ @ @ @ @ @ @ = , , , , , , , , , , , , , , , , , , - : $ $ ! : - , , , , . . . . . . . . . . . . . . . . , , - - , . . . . . . . . . . . . . . . . . . . . . . . . . . . . = # # # # # # # # # = , .
//@ @ @ @ @ @ @ = , , , , , , , , , , , , , , , , , # $ @ $ @ @ @ $ : . , . . . . . . . . . . . . . . . . . . . . . : ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . = # # # # # # # # # ; , .
//@ @ @ @ @ @ @ = , , , , , , , , , , , . , , , , , ; $ @ @ @ $ @ @ # : - . . . . , . . . . , . . . . . . . . . . . = ; . . . . . . . . . . . . . . . . . . . . . . . . . . . = # # # # # # # # # ; . .
//@ @ @ @ @ @ @ = , , , , , , , , , , , . . , , , , . ~ $ @ @ $ $ $ $ $ $ * ~ , , , , . . . . . . . . . . . . . . , * * , . . . . . . . . . . . . . . . . . . . . . . . . . . = $ # # # # # # # # ; . .
//@ @ @ @ @ @ @ = , , , , , , , , , . . . . . , , , , , - * $ @ @ $ $ $ $ $ $ # ; - . , . . . . . . . . . . . . . = * # ~ . . . . . . . . . . . . . . . . . . . . . . . . . . = # # # # # # # # # ; . .
//@ @ @ @ @ @ @ = , , , , , , , , . . . . . . . . . , , , - ; $ $ @ @ $ $ $ $ $ $ * = - , , , , , , . . . . . . , * # * : . . . . . . . . . . . . . . . . . . . . . . . . . . = # # # # # # # # # ; . .
//@ @ @ @ @ @ @ ! , , , , , , . . . . . , . . . , , , , , , . : $ @ @ $ $ $ $ $ $ $ # $ # ! ~ , . . . . , , : ! # # # # ~ . . . . . . . . . . . . . . . . . . . . . . . . . . ! # # # # # # # # # ; . .
//@ @ @ @ @ @ @ ! , , , , , , , , , . . . . . . . , , , , , , , ~ * @ $ $ $ $ $ $ $ $ $ $ $ $ $ # # * # $ $ $ # $ # # * . . . . . . . . . . . . . . . . . . . . . . . . . . . ! # # # # # # # # # ; . .
//@ @ @ @ @ @ @ ! , , , , , , . , . . . . . . . . . . . . . , , , - ! $ $ @ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ # $ $ # * ; . . . . . . . . . . . . . . . . . . . . . . . . . . . * # # # # # # # # # ; . .
//@ @ @ @ @ @ @ ! , , , , , . . . . . . . . . . . . . . . . . . . , . ~ = $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ # # # ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . . * # # # # # # # # # : . .
//@ @ @ @ @ @ @ ! , , , , , , , , , . . . . . . . . . . . . . . , . , . , - ! # $ $ $ $ $ $ $ $ $ $ # # $ # # # * ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . * # # # # # # # # # : . .
//@ @ @ @ @ @ @ * , , , , , , , , . . . . . . . . . . . . . . . . . . . . , , ~ = # $ $ $ $ $ # $ $ $ # # # # = ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . * # # # # # # # $ # : . .
//@ @ @ @ @ @ @ * , , , . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . , ~ : ! $ # # * * = ! # ; . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . # # # # # # # # $ # ~ . .
//@ @ @ @ @ @ @ * , , , . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . : # ! : ~ ; # = . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . # # # # # # # # # # ~ . .
//@ @ $ @ @ @ $ # , . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . - ; * * # ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . * # # # # # # # # # ~ . .
//@ @ = ; : ; ; : : : ~ ~ ~ , . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . , . ~ * ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . # # # # # # # # # # ~ . .
//@ $ ; = # * ; ; # * # = ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ~ = # * * : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . # # # # # # # # # # ~ . .
//@ @ ; : ! # ; ; $ * # ; ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . : ; ! ! - . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . * # # # # # # # # # - . .
//@ @ ; : ! # ; = $ ! # ! ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   . , , . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . , # # # # # # # # # * - . .
//@ $ ; : = * ; : * # # ; ~ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . , # # # # # # # # # * , . .
//@ @ ; ~ ~ ~ ~ ~ ~ ~ ~ - ~ . . . , . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . , : # # # # # # # # # * , . .
//@ @ ; ~ - - - - - - - - - = ! ! ! ! ! ! ! ! ! ! ! ! ! * ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! * * * ! ! * * * * * # * # # # # # # # # # # # # # # # # # # # # # # # # * * * * # # # # # # # # # * , . .
//@ @ @ @ @ @ $ @ # * # * * # * # * @ # * * * * # # * * $ @ @ @ $ $ $ $ $ $ $ $ $ # # * # # # # $ # # * $ $ # # # $ $ $ $ $ $ # # $ $ # # # # # # # # # # # # # # # $ # # # # # # # # # # # # # * , . .
//@ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ # $ # $ $ # $ $ # $ $ $ $ # # # # # # # # # # # # # # # # # # # # # # # # # # # * . . .
//@ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ # # # # # # # # # # # # #