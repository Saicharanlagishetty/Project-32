const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png" ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
     background(backgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here
   

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response =await  fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJson = await response.json();
    console.log("Time",responseJson)
    
    // write code slice the datetime
    var datetime = responseJson.datetime;
    var  hour = datetime.slice(11,13);

    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour >=4 && hour <=6 ){
        bg="sunrise1.png";
    
    }else  if(hour >=6 && hour <=8 ){
             bg="sunrise2.png";
    
    }else if(hour >=23 && hour <=0 ){
        bg="sunset10.png";
    
    }else if(hour >=0 && hour <=03 ){
        bg="sunset11.png";
    }else{
        bg="sunset12.png";
    }
    
    //load the image in backgroundImg variable here
     backgroundImg= loadImage(bg);
}
