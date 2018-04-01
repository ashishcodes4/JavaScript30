######################
- First we select all the inputs from the page.
- querrySelectorAll will return a nodelist, not an array.
- Once the inputs are selected, we add event listeners for each item returned     in the nodeList.
- In each event listener we listen for the change event on any input.
- Any time these events are fired up, a fucntion is executed. This fucntion is    responsible for chaging the css variable value.
