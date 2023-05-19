# Changes to v1
Added a separate data model for the originator's state. This allows the originator to be more flexible in what it stores and the caretaker to be more flexible in what it retrieves.
# Problems with the current Implementation
- The current implementation of the Memento pattern is not very flexible. The caretaker can only store and retrieve the entire state of the originator. It would be more useful if the caretaker could store and retrieve the originator's state in parts.