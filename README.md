## CODETEST RETAINER DESK
This is a codetest for Retainer Desk. 
I've used a React Starter template to easily get started with my app.

## THE PROBLEM
- Make an application with a free choose of code base
- Do a call to API
- List all employees in a list that looks good

I've choosen to approach the problem in the following way:
First I make a fetch to the API where I collect the data neccessary.
This fetch is executed in HomePage.js and the data is sent in as props to a list-item component.
I choose to deconstruct the props to avoid having to write props.name etc.

The list-item component is then rendered in a ul-component on a homepage which is then rendered in App.js.
This is not neccessary, you could choose to render the ul-component directly in App.
I chose to render it in a homepage first to keep the code in app.js to a minimum.

## TECH
- JavaScript
- React
- Styled Components