-- Don't forget to add your create table SQL 

CREATE TABLE shopping_list (
	id SERIAL PRIMARY KEY,
	item varchar(25),
	quantity integer,
	unit varchar(25),
	is_purchased boolean default false
);

INSERT INTO shopping_list (item, quantity, unit) 
VALUES ('Apples', 5, 'lbs'),
		('Bread', 1, 'Loaf'),
		('Milk', 1, 'Gallon');

UPDATE shopping_list SET is_purchased = true WHERE id = id;

DELETE FROM shopping_list WHERE id = id;

DELETE FROM shopping_list;

UPDATE shopping_list SET is_purchased = false;

-- It is also helpful to include some test data

hello