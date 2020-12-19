class wall{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            density : 2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world,this.body);
    }
    display(){
        fill("red");
        strokeWeight(3);
        stroke("white");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}