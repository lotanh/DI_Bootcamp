CREATE table items(item CHAR(255), price INT)

CREATE table customers(first_name CHAR(100),last_name CHAR(100) )

INSERT INTO customers (first_name, last_name) 
VALUES
	('Greg' , 'Jones'),
	('Sandra' , 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie' ,'Johnson');

INSERT INTO items (item, price) 
VALUES
	('Small desk' , 100),
	('Large desk' , 300),
	('Fan', 80);

SELECT * FROM items
SELECT * FROM items WHERE price > 80
SELECT * FROM items WHERE price <= 300
SELECT * FROM customers WHERE last_name = 'Smith'
SELECT * FROM customers WHERE last_name = 'Jones'
SELECT * FROM customers WHERE first_name != 'Scott'

