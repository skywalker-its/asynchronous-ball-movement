
var database , Hball;
var position;


function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    Hball = createSprite(250,250,10,10);
    Hball.shapeColor = "red";
    Hballposition = database.ref("ball/position");
    Hballposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(position!== "undefined"){ 
        
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    } 
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
    database.ref("ball/position").set({
        "x" : position.x + x,
        "y" : position.y + y
    })
    console.log(position.x);
    
    // Hball.x = ball.x + x;
    // ball.y = ball.y + y;
}

function readposition(data){
   position = data.val();
   console.log(position);
   Hball.x = position.x;
   Hball.y = position.y;


}

function showerror (){ 
    console.log("error in reading");
}
