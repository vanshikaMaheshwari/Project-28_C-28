class Tree{
    constructor(x,y){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,500,500,options);
        this.image = loadImage("tree1.png");
        //World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        fill(255);
        stroke(255);
        image(this.image, 0, 0, 500, 500);
        pop();
    }
}