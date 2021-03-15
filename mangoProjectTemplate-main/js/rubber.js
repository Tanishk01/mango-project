class rubber{
    constructor (body,point){
        var options = {
            bodyA:body,
            pointB:point,
            stiffness:0.004,
            length:1
        }
        this.bodyA = body
        this.pointB = point
        this.rubber = Constraint.create(options)
        World.add(world,this.rubber)
    }
    attach(body){
        this.rubber.body = body;
    }
    display(){
        if (this.rubber.bodyA){
            var pointA = this.bodyA.position
            var pointB = this.pointB
           line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    fly () {
        this.rubber.bodyA=null;
    }
}