# Memento (Token) Pattern - Behavioral

![Diagram of Memento Pattern](https://www.tutorialspoint.com/design_pattern/images/memento_pattern_uml_diagram.jpg)

- The memento pattern is used to restore state of an object to a
  previous state.
- The memento pattern is implemented with three objects: the originator, a
  caretaker and a memento. The originator is some object that has an
  internal state. The caretaker is going to do something to the
  originator, but wants to be able to undo the change. The caretaker
  first asks the originator for a memento object. Then it does
  whatever operation (or sequence of operations) it was going to do.
  To roll back to the state before the operations, it returns the
  memento object to the originator. The memento object itself is an
  opaque object (one which the caretaker cannot, or should not,
  change). When using this pattern, care should be taken if the
  originator may change other objects or resources - the memento
  pattern operates on a single object.
- The memento pattern is useful in cases where a system needs to be
  able to return to some previous state, for example, in case of an
  error. The memento pattern is also known as the token pattern.

## Notes
- The caretaker is responsible for the memento's safekeeping and
  never operates on or examines the contents of a memento.

## Example (Word Editor)
Create a simple word editor that can save and restore documents.
Our Document class has three attributes:
- content
- fontName
- fontSize

We should allow the user to undo the changes to any of these
attributes. In the future, we may add additional attributes in this
class and these attributes should also be undoable.
Implement the undo feature using the memento pattern.