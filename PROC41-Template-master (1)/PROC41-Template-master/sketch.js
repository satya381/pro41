

function setup(){
   var maxDrops=100;
    
}

function draw(){
    for(var i=0;i<maxDrops;i++){
        drops.push(new createDrop (random(0,400),random(0,400)));
    }
    if(this.rain.position.y>height){
        MutationObserver.body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}   

