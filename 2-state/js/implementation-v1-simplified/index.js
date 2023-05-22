const Context = require("./Context.js")
const ConcreteClassA = require("./ConcreteClassA.js")
const ConcreteClassB = require("./ConcreteClassB.js")

function main() {
    const context = new Context();

    context.changeState(new ConcreteClassA());
    context.handle();

    context.changeState(new ConcreteClassB());
    context.handle();

    context.changeState(new ConcreteClassA());
    context.handle();

}
main();