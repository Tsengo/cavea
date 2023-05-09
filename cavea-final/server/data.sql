CREATE DATABASE todoapp;

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_location VARCHAR(255) NOT NULL,
    product_price VARCHAR(255) NOT NULL,
    date VARCHAR(300)
);

CREATE TABLE users(
    email VARCHAR(255) NOT NULL,
    hashed_password VARCHAR(255)
);

INSERT INTO cavea_table (id, product_name, product_location, product_price, date)
SELECT
  generate_series(1, 300000),
  (ARRAY['T-Shirt', 'Jeans', 'Dress', 'Sweater', 'Jacket', 'Skirt', 'Blouse', 'Shorts', 'Hoodie', 'Pants'])[floor(random() * 10) + 1],
  CASE 
    WHEN random() < 0.25 THEN 'მთავარი ოფისი'
    WHEN random() < 0.5 THEN 'კავეა გალერია'
    WHEN random() < 0.75 THEN 'კავეა თბილისი მოლი'
    ELSE 'კავეა ისთ ფოინთი'
  END,
  CAST(random() * 100 AS numeric(10, 2)),
  timestamp '2023-05-09 00:00:00' + random() * (timestamp '2023-05-20 00:00:00' - timestamp '2023-05-09 00:00:00')
FROM generate_series(1, 300000);
