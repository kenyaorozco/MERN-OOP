class Ninja{
    constructor (name,health,speed=3,strength=3,){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName (){
        this.name ;
        console.log("the ninjas name is " + this.name);
    }
    showStats(){
        this.speed
        // this.strength;
        console.log("their levels are " + " Speed: " + this.speed + " Strength: " + this.strength + " Health: " + this.health );
    }
    drinkShake(){
        this.health += 10
        console.log("add to health " + this.health)
        return
    }

}
const ninja1 = new Ninja("Benny",100,3,3);
ninja1.sayName()
ninja1.showStats()
ninja1.drinkShake();

