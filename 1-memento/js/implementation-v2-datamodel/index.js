const Originator = require("./Originator.js")
const CareTeker = require("./CareTeker.js")
const DataModel = require("./DataModel.js");

function main() {
    const originator = new Originator();
    const careTeker = new CareTeker();

    careTeker.push(originator.createMemento());
    originator.setState(new DataModel('state1', null, null));
    originator.printState();

    careTeker.push(originator.createMemento());
    originator.setState(new DataModel('state2', null, null));
    originator.printState();

    careTeker.push(originator.createMemento());
    originator.setState(new DataModel('state3', null, null));
    originator.printState();

    originator.restoreMemento(careTeker.pop());
    originator.printState();
}
main();