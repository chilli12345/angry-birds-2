class SlingShot{
    constructor(objectA,pointB){
        this.objectA=objectA;
        this.pointB=pointB;
        var options={
            bodyA:objectA,
            pointB:pointB,
            length:10,
            stiffness:0.06
        }  
        this.sling=Constraint.create(options);
        World.add(world, this.sling);   
    }

    display(){
       if(this.sling.bodyA){
            stroke("red");
            line(this.objectA.position.x,this.objectA.position.y,
                this.pointB.x,this.pointB.y); 
        }      
    }

    fly(){
        this.sling.bodyA=null;
        console.log("I am inside fly");
    }
}