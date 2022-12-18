class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,resilience){
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }
    showStats(){
        this.name;
        this.cost;
        this.power;
        this.resilience;
        console.log(`Name:${this.name} cost:${this.cost} Power:${this.power} Resilience:${this.resilience}`);
    }
    hardAlgo(){
        this.resilience +=3;
        this.cost -= 2
        console.log("Card resilience went up " + this.resilience + " Card Cost: " + this.cost);
        }
    pairProgram(){
        // this.cost -=3;
        this.power +=2;
        console.log("Increase Power: " + this.power);
    }
    promiseRejection(){
        this.resilience -=2;
        console.log("Resilience went down: " + this.resilience);
    }
}





const redBelt = new Unit ("Red Belt",3,3,4);
redBelt.showStats();
redBelt.hardAlgo();
redBelt.promiseRejection();
redBelt.pairProgram();

const blackBelt = new Unit ("Black Belt", 4,5,4)
blackBelt.showStats();

