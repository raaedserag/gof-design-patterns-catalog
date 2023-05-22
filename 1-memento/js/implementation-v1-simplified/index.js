const  Originator = require("./Originator.js")
const  CareTeker = require("./CareTeker.js")

function main(){
    const originator = new Originator();
    const careTeker = new CareTeker();

    careTeker.push(originator.createMemento());
    originator.setState('state1');
    console.log(originator.getState());

    careTeker.push(originator.createMemento());
    originator.setState('state2');
    console.log(originator.getState());

    careTeker.push(originator.createMemento());
    originator.setState('state3');
    console.log(originator.getState());

    originator.restoreMemento(careTeker.pop());
    console.log(originator.getState());
}
main();