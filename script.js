
let count=0;
let asianBucket = document.getElementById("container");
for (let i = 1; i <= 9; i++) {
    let ele = document.createElement("div");
    ele.setAttribute("id", "cell_" + i);
    ele.setAttribute("class", "block");
    ele.innerHTML = i;
    asianBucket.appendChild(ele);
}


function applyColor() {
    if( document.getElementById("block_id").value != "")
      rest();

    let colorName = document.getElementById("colour_id").value
        
    let blockId = parseInt(document.getElementById("block_id").value)
    
     

    if (colorName != "" && blockId != "") {
        let element = document.getElementById("cell_" + blockId);
        element.style.backgroundColor = colorName;
        document.getElementById("block_id").value = "";
        document.getElementById("colour_id").value = "";
    }

    else {
        return;
    }
}

function resetColor() {
    document.querySelectorAll(".block").forEach(block => (block.style.backgroundColor = "transparent"));
    document.getElementById("block_id").value = "";
    document.getElementById("colour_id").value = "";
}

function rest(){
    document.querySelectorAll(".block").forEach(block => (block.style.backgroundColor = "transparent"));
}