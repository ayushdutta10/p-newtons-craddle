var bob1,bob2,bob3,bob4,bob5


function setup(){
canvas = createCanvas(windowWidth/2, windowHeight/2);
engine = Engine.create();
world = engine.world;

let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();

let options = {

 mouse : canvasmouse

};
mConstraint = MouseConstraint.create(engine, options)
World.add(world, mConstraint);

bob1 = new Pendulum(20,20,windowWidth/2-20,windowHeight/2+50);

}

function draw(){



}

function mouseDragged(){
Matter.Body.setPosition(pendulum1.body, { x : mouseX, y : mouseY });
    
}