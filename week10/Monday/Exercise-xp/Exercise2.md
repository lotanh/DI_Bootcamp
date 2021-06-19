SELECT * FROM students 
CREATE TABLE students (
    id serial NOT NULL ,
    Last_name varchar(255) NOT NULL,
    First_name varchar(255) NOT NULL,
    birth_date DATE
);

INSERT INTO students(Last_name ,First_name, birth_date)
VALUES
	('Marc', 'Benichou', '1998-11-02'), 
	('Yoan', 'Cohen', '2010-12-03'), 
	('Lea', 'Benichou', '1987-07-27'), 
	('Amelia', 'Dux', '1996-04-07'), 
	('David', 'Grez', '2003-06-14'), 
	('Omer', 'Simpson', '1980-10-03');

INSERT INTO students 
(Last_name ,First_name, birth_date) 
values 
('Hadad', 'Lotan', '1996-07-31');

SELECT Last_name, First_name
FROM students;
SELECT * FROM students WHERE id = 2
SELECT * FROM students WHERE Last_name = 'Benichou' and First_name = 'Marc';
SELECT * FROM students WHERE Last_name = 'Marc' or First_name = 'Benichou';

SELECT * FROM students where first_name LIKE '%a%';

SELECT * FROM students where first_name LIKE '%a';

SELECT * FROM students where first_name LIKE '%a_';

SELECT * FROM students where students_id = 1 OR students_id = 3;

SELECT * FROM students where birth_date between '2000-01-01' AND current_date;