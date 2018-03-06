// Ready function seats up a listener for when the DOM structure
// is fully parsed though the browser and is ready to be operated on
// this is different from on load, which fires only once all the content
// of the page is loaded (including images)

$(document).ready(()=> {
  $(`body`).append(`<p>The page loaded!</p>`)
});

//----------------------------------------------//

// Selectors && Filters

$(`p`) 
// selects all the paragraphs on the document
// and returns them as a list of objects

$(`p:first`)
// filter to select only the first paragraph
// jQuery uses css-like selectors and filters

$(`#id`)
// selects by id

$(`.class`)
// selects all by class

$(`p:not(.class)`)
// selects all <p></p> except the one with the class

//----------------------------------------------//

// Adding elements

const body = $(`body`);
const fancyDiv = $(`<div class="fancy">I'm a Fancy Div</div>`);

// let's make it fancy
fancyDiv.css(`background-color`, 'pink');

// append means 
$(document).ready(()=> {
  // append means we add the element at the end
  // of the list of inner elements of body
  body.append(fancyDiv);

  // prepend means that we will add it at the
  // beginning of the list
  body.prepend(fancyDiv.clone());
  
  // REMEMBER you cannot append & prepend same element created
  // with $(), jQuery moves the same DOM element, 
  // thats why we need .clone()
});

//----------------------------------------------//

// Events
body.append(`<div class="eventDiv"></div>`);

// jQuery uses .on function to start listening to the event
// we declare the event type like 'click', 'mousemove' etc. 
// and use a callback function to handle the event (jQuery unified object)
const onMouseOver = (event) => {
  $(".eventDiv").text(`${event.type}: X = ${event.pageX}, Y = ${event.pageY}`);
}

body.on(`mousemove`, onMouseOver);

//----------------------------------------------//

// Animations


