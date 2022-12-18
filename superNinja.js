class Ninja{
    constructor (name,health,speed,strength){
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
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

class Sensei extends Ninja{
    constructor(name,health,speed,strength,wisdom){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = wisdom;
    }
    speakWisdon(){
        this.wisdom
        console.log("I-G-G-Y put my name in bold" +this.wisdom)
    }
    showStats(){
        this.name,
        this.health,
        this.speed,
        this.strength,
        console.log("Name:" ,this.name + " Health:" + this.health + " Speed:" + this.speed + " Strength:" + this.strength);
    }
}

const superSenei = new Sensei(" Master Splinter");
superSenei.speakWisdon();

superSenei.showStats()
superSenei.drinkShake();