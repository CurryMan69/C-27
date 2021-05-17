class constraint {
   constructor(bodyA,bodyB){
     var options  = { 
         stiffness: 0.04,
         bodyA:bodyA,
         bodyB:bodyB,
         length:10,
     }
     this.chain = Constraint.create(options)
     World.add(world, this.chain)
   }
display() {
strokeWeight(2)
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y, this.chain.bodyB.position.x,this.chain.bodyB.position.y)
}


}