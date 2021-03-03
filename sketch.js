const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var t, t1,t2, t3, t4
var engine, world;
var drops =[]
var r
var u
var md = 100
var tFrame = 0

function preload(){
    t1 = loadImage("thunderbolt/1.png")
    t2 = loadImage("thunderbolt/2.png")
    t3 = loadImage("thunderbolt/3.png")
    t4 = loadImage("thunderbolt/4.png")
}

function setup(){
   engine = Engine.create()
    world = engine.world
    createCanvas(400,700)
    u = new Umbrella (200, 500)
    if (frameCount % 150 === 0){
        for (var i = 0; i < md; i++){
            drops.push(new Drop(random(0, 400), random(0,400)))
        }
    }
}

function draw(){
    Engine.update(engine)
    background(0)
    r = Math.round (random(1,4))
    if (frameCount % 80 === 0){
        tFrame = frameCount 
        t = createSprite(random(10,370), random (10, 30), 10, 10)
        switch(r) {
            case 1: t.addImage(t1)
            break;
            case 2: t.addImage(t2)
            break;
            case 3: t.addImage(t3)
            break;
            case 4: t.addImage(t4)
            break;
            default: break;
        }
        t.scale = random(0.3, 0.6)
    }
    u.display();
    drawSprites();
}   

