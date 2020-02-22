SQL cheatsheet
==============
- show database;
- create database <name>; 
- drop database <name>; 
- use <database_name>; use the database
- select database(); show current using database
- show warnings;
- show tables;
- drop table <table_name>;
- show triggers;
- drop trigger <trigger_name>;
- source <sql_file_name>; < execute the sql file
- select concat (<column>, <column>) ...; < check out more by sql server functions - w3schools
- DISTINCT, ORDER BY, LIMIT, GROUP BY, SUM
- LIKE '%string%', '%\%%' escape string, '____' < amount of underscore refer to number of char or digit
- COUNT(*), COUNT(DISTINCT <column>), MIN, MAX, AVG
- select title, pages from books where pages = (select max(pages) from books); << To be more effective (this is 2 queries), can use below
- select titile, pages from books order by pages asc limit 1;
- Take care use of float and double, prefer using decimal where you can set the precision eg (10, 2)
- CURDATE(), CURTIME(), NOW(); eg. select NOW(),
- change_at TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP < auto update the time when update query is executed
- NOT LIKE '%abc%', !=, =, >, >= , <, <=, &&, ||, BETWEEN 1 AND 100, IN('King', 'Queen'), NOT IN('a', 'b'), %
- FOREIGN KEY(customer_id) REFERENCES customers(id)

COLUMN MODIFIER
---------------
- NOT NULL
- default <default_value>
- autoincrement
- , primary key (<column>)

Others
------
- select a as 'a haha'
- select * from table where haha = 'hoho'

```
CREATE TABLE <table_name>
(
    <column_name> <data_type>
)
```

- show columns from <database_name> || desc <database_name>;

INSERT SINGLE RECORD
--------------------
- insert into <table_name>(<column>, <column if any>) values (<value> <value>);
e.g. insert into person(name, age) values ('Kitty', 6);

INSERT MULTIPLE RECORD
----------------------
- insert into <table_name>(<column>, <column if any>) values (<value> <value>), (<value> <value>), (<value> <value>);

UPDATE RECORD
-------------
- update person set name = 'haha' where name = 'kiki';

DELETE RECORD
-------------
- delete from person where name = 'king kong';

DELETE ALL RECRODS IN PARTICULAR TABLE
--------------------------------------
- delete from <table_name>;

CASE STATEMENTS
---------------
```
select title, released_year,
    case
        when released_year >= 2000 then 'Modern Lit'
        else '20th century lit'
    end as genre
from books;
```

CREATE TRIGGER
--------------
```
CREATE TRIGGER <trigger_name>
    <trigger_time> <trigger_event> ON <table_name> FOR EACH ROW
    BEGIN
    ...
    END;
```