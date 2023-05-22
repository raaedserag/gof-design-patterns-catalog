# State Pattern - Behavioral

![Diagram1 of State Pattern](https://www.tutorialspoint.com/design_pattern/images/state_pattern_uml_diagram.jpg)

![Diagram2 of State Pattern](https://refactoring.guru/images/patterns/diagrams/state/structure-en.png)

- The state pattern is used to alter the behaviour of an object as its
  internal state changes. The pattern allows the class for an object to
  apparently change at run-time.

## Notes

## Example (Painting Canvas)
Create a simple painting application that allows the user to draw using
the mouse.

The application has three tools: a selection tool, a brush and an
eraser. Each tool draws differently on the canvas.

The canvas should support 2 operations:
- Mouse down
- Mouse up

When the user presses the mouse down, the canvas should call the
appropriate method of the current tool. When the user releases the
mouse, the canvas should again call the appropriate method of the
current tool.




