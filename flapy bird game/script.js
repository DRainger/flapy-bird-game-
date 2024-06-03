var block = document.getElementById("block")
var hole = document.getElementById("hole")
var character = document.getElementById("character")
var jumping = 0;
var counter = 0;


hole.addEventListener("animationiteration", ()=>{
    var random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
})

setInterval(function(){
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0){
        character.style.top = (charactertop + 3) + "px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-charactertop);

    if ((charactertop > 480) || ((blockLeft < 20) && (blockLeft > - 50) && ((cTop < holeTop) || (cTop > holeTop + 130)))){
        alert("Game Over! Score: "+counter)
        character.style.top = 100 + "px";
        counter = 0;
    }

},10);

function jump(){
    jumping = 1;
    let jumpcount = 0;
    var jumpInterval = setInterval(function(){
        var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((charactertop > 6) && jumpcount < 15){
            character.style.top = (charactertop - 5) + "px";
        }
        if (jumpcount>20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpcount = 0;
        }
        jumpcount++;
    },10)
}