# React Shopping List

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
