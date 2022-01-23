///////////////
// PURCHASES //
///////////////

document.getElementById('clicker').onclick = function() {
    count.bones += production.click
    containers.boneStatus.innerHTML = "Bones: " + count.bones + " Skeletons: " + count.skeletons
    containers.alert.innerHTML = ""

    document.getElementById("clicker").src = "assets/images/boneSmall.png"
}

document.getElementById('warriorBuy').onclick = function() {
    if (count.skeletons >= 1) {
        count.skeletons--
        count.warriors++
    }
}

document.getElementById('alchemistBuy').onclick = function() {
    if (count.skeletons >= 1) {
        count.skeletons--
        count.alchemists++
        containers.upgrades.style.display = "block"
    }
}

document.getElementById('workerBuy').onclick = function() {
    if (count.skeletons >= 1) {
        count.skeletons--
        count.workers++
    }
}

//////////////
// UPGRADES //
//////////////

document.getElementById('skeletonPurchase').onclick = function() {
    if (count.bones >= 206){
        count.bones -= 206
        count.skeletons++
        containers.skeletonsJobs.style.display = "block"
    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }
}

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

document.getElementById('Bweapons').onclick = function() {
    if (count.bones >= 50 && count.alchemists >= 1) {
        count.bones -= 50
        production.work *= 2
        const weaponsbutton = document.getElementById('weapons')
        weaponsbutton.style.display = "none"
    }
    else if (count.alchemists <= 1) {
        containers.alert.innerHTML = "Not Enough Alchemists!"

    }
    else {
        containers.alert.innerHTML = "Not enough bones!"
    }
}

document.getElementById('wipeBtn').onclick = function() {
    let confirm = window.confirm("THIS CANNOT BE UNDONE, CONTINUNE?")
    if (confirm)
    {
        wipeData()
    }
}