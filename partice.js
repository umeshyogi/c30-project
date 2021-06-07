class Partice{
    constructor(x,y,radius){
     var options = {
         restitution :0.5,
         friction:0.1,
         density:0.5,

     }
     this.radius=radius;
     this.x=x;
     this.y=y;

     this.Body=Bodies.circle(x,y,radius,options);
     this.color=color(random(0,255),random(0,255),random(0,255));
     World.add(world,this.Body)
    }
    display(){
        push()
        translate(this.Body.position.x,this.Body.position.y);
        rotate(this.Body.angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop ()

    }
    
}