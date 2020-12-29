const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup()
{
  createCanvas(1200,800);
  
  engine = Engine.create;
  world = engine.world;

  ground = new Ground(600, 790, 1200, 20);
  box1 = new Box (700,100,70,70)
  box2 = new Box (700,100,70,70)
  box3 = new Box (700,100,70,70)
  box4 = new Box (700,100,70,70)
  box5 = new Box (700,100,70,70)
  box6 = new Box (700,100,70,70)

}
function draw()
{
  background(220); 
  Engine.update(engine);
  
  ground.display();
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()


}