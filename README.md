# React Shopping List


Isn't it just the worst when you come back from grocery shopping only to realize you forgot the most important thing! We're going to make a simple shopping list app to solve that problem. 

## Technologies

- *S*QL
- *E*xpress
- *R*eact
- *N*ode

## Requirements

We want to store a list of items to buy in a database, so we can build up our list over a period of time and then go shopping. 

There should be a form at the top of the page where we can add new items to the list.

Each item can have a:

- Name - text, allow up to 80 characters (required)
- Quantity - allow for decimal numbers (required)
- Unit - text, allow up to 20 characters (optional)

When the page first loads, all the existing items should be displayed with the quantity & unit combined together for display. Each item should also have an option to remove it from the list or mark it as purchased. Once purchased, the buttons should be hidden and the item should show as "Purchased". 

Items should initially appear alphabetically, but as items are marked purchased they should sort to the end of the list.

The `Reset` button should clear the purchased status from all items, allowing the list to be re-used. The `Clear` button should remove all items from the list, deleting them from the database.

#### Hint for Marking as purchased/removing item
>> If you've set up your components as we have shown, you should have an `Item` Component. That item should have access to every property of the item *object* -- this will be critical to successfully calling a PUT or DELETE route with the id (`/:id`). 

### Sample Wireframe

![wireframe](wireframe.jpg)

### Tips for Teams

- Remember to use branches and GitHub Pull-Requests. Make sure to protect your `main` branch as you setup the project.

- Plan your database structure as a group, making sure that you consider all of your required features.

- Plan to break down the UI (user interface) into smaller components. Discussing this upfront as a team is very helpful as you start to discuss tasks.

- Consider the naming for routes while planning to make sure everyone has the same expecations. Note the url in the tasks. 

- __Don't__ have team members work *only* on client or *only* on server code. Everyone needs to practice working with both sides. One option is to break features out as slices that include both the client and server code. Another is to create separate tasks for client and server code, but plan so that all team members get both a client task and a server task, even if they are for different features.

- Aim to ensure that everyone is always able to move forward on a task (or at least part of a task) without waiting for someone else to complete their work. For example, by setting up test data in the database, team members can work on getting items & adding items at the same time. Also, by starting work on the server side code to do a delete while the UI is being created allows work to move forward before there is a place to click a button. 


## Stretch Features 

- Update this Readme file to use the [Template](https://github.com/PrimeAcademy/readme-template) and fill in the sections.

- Add a confirmation dialog to the reset and clear button so that when the user clicks,  they are prompted to confirm whether they *really* want to perform that action. (Check out [Sweet Alerts](https://www.npmjs.com/package/@sweetalert/with-react).)

- Add indicators to the UI to show which fields are required.  On Save, validate that all inputs have a value. 
  - On the client side, you can do this by making the HTML inputs `required`. 
  - However you should also do this on the server side and send back a friendly message if the required data is not provided.
  - Optionally, make sure the text entered isn't too long.

- Improve the styling of the page
  - When items are purchased, grey them out. 
  - Make the buttons more UX friendly. For example, red for remove, but green or blue for save & buy.
  - Add a icons to improve the display, for example a check mark for purchased, a trash can for remove, etc. (Check out [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react).)

- Currently, if you typo something, it must be removed and re-added to fix it. An edit feature would be a great enhancement. Add an `Edit` button which will have the existing data show in the input form at the top of the page to allow an easier edit. 

  > Hint: For the edit, add a boolean indicator to the component state to indicate if the item is in view or edit mode.
=======
## Description

Duration: 2 days

This project is a React shopping list. It is a fullstack CRUD application that allows users to add a new item to the shopping list using a Post request. The item is saved in the database and then fetched using a Get request. The item along with a few buttons are mapped onto the DOM from there.

There are a multiple buttons on the page with different functionality to them once items are added to the list. Each item has a "Delete" button to remove the item from the list and the database. Items also have a "Purchase" button which will change the boolean value of "is_purchased" to true on click. This also affects the DOM with some conditional rendering to show the item as purchased. There are two buttons on the page by default as well. One to "Reset" all items back to false for the "is_purchased" header and one to "Clear" the page which will delete all items from the list and database.

## Prerequisites

- Node.js
- Express
- Postgres
- Postico (or app to manage database)

## Installation

1. Create a database named "react_shopping_list"
2. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an npm install
4. Run npm run server in your terminal
5. Run npm run client in your a seperate terminal
6. The npm run client command will open up a new browser tab for you!

## Usage

- Add an item!

1. Once page loads if there is any information in the database you will see that displayed on the DOM
2. Add a new item by inputting the item name, item quantity, item unit and clicking "Save", that new item should then be displayed on the DOM

- Use the buttons!

1. The "Clear" button will delete all items from the database and leave you with an empty list
2. The "Reset" button will mark all items as not purchased, allowing you to start over with the same list
3. The "Remove" buttons that display with each item will remove the item from the database on click.
4. The "Buy" buttons that also display with each item will mark that specific item as purchased and render "Purchased" in the item container

## Built With

- Javascript
  - React
  - Node.js
  - Express
  - Postgres
- HTML
- CSS
- SQL

## Acknowledgement

Thanks to Blaine and Mason for the great instruction on React this week!

