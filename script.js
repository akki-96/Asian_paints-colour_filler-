
let asianBucket = document.getElementById("container");
for (let i = 1; i <= 9; i++) {
    let ele = document.createElement("div");
    ele.setAttribute("id","cell_"+i );
    ele.setAttribute("class" ,"block");
    ele.innerHTML=i;
    asianBucket.appendChild(ele);
}
// setAttributes(div, {"class":"block", "id": i, "value": i, })

function applyColor(){
    let colorName=document.getElementById("colour_id").value
    //console.log(colorName);
    let blockId=parseInt(document.getElementById("block_id").value)
    //console.log(blockId);
    if(colorName!="" && blockId!="")
    {
        let element = document.getElementById("cell_"+blockId);
        element.style.backgroundColor = colorName;
       // element.innerHTML="";
      
    }
    else{
        return;
    }
}

function resetColor(){
    document.querySelectorAll(".block").forEach(block => (block.style.backgroundColor = "transparent"));
    document.getElementById("block_id").value = "";
    document.getElementById("colour_id").value = "";
//     for (let i = 1; i <= 9; i++) {
//         let ele = document.getElementById("cell_"+i);
//         ele.innerHTML=i;
//  }
}