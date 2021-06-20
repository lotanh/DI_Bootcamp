PART-1
SELECT * FROM items ORDER BY price;
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;
SELECT first_name FROM customers ORDER BY first_name;
SELECT last_name FROM customers;
ORDER BY last_name DESC;

SELECT * FROM customers_new
SELECT * FROM items_new
SELECT * FROM purchases


CREATE TABLE purchases(
	customer_id integer,
	item_id integer,
	FOREIGN KEY(customer_id) REFERENCES customers_new(id),
	FOREIGN KEY(item_id) REFERENCES items_new(id)
);
INSERT INTO purchases(customer_id) values (2);

INSERT INTO purchases (customer_id, item_id) values (2,1),(1, 1),(2, 2),(1, 2),(2, 2);

SELECT * FROM purchases

SELECT * FROM purchases INNER JOIN customers_new ON (purchases.customer_id = customers_new.id);

select * from purchases INNER JOIN 
items_new ON (purchases.item_id = items_new.id) where purchases.item_id = 1 or purchases.item_id = 2

INSERT INTO items_new (item, price) values ('hard drive', 480)

INSERT INTO purchases(customer_id, item_id) values (3, 4)

SELECT * FROM purchases inner join items_new on (purchases.item_id = items_new.id)

Part-2

SELECT * FROM customer

SELECT first_name ||' '|| last_name as full_name from customer

SELECT DISTINCT
		create_date
FROM customer

   SELECT * FROM customer
ORDER BY
    first_name DESC

SELECT film_id, title, description, release_year, rental_rate from film
ORDER BY
rental_rate;

SELECT address, district, phone FROM address
WHERE district='Texas'

SELECT * FROM film WHERE film_id = 15 or film_id = 150

select * from film
where title='Ocean Eleven';

SELECT film_id, title, description, length, rental_rate FROM film
WHERE title LIKE 'Oc%';

SELECT * FROM film
ORDER BY replacement_cost ASC
FETCH FIRST 10 ROW ONLY

select * from film
order by 
rental_rate
 limit 10 offset 10;

SELECT
    customer.customer_id, amount, payment_date
FROM
    customer
INNER JOIN payment
    ON customer.customer_id = payment.customer_id

SELECT 
    country,city
FROM
    city
INNER JOIN country
    ON country.country_id = city.country_id