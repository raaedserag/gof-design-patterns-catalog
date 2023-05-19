# Example
Create a simple word editor that can save and restore documents.
Our Document class has three attributes:
- content
- fontName
- fontSize

We should allow the user to undo the changes to any of these
attributes. In the future, we may add additional attributes in this
class and these attributes should also be undoable.
Implement the undo feature using the memento pattern.