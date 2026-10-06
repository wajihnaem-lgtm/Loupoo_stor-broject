<<<<<<< HEAD
CREATE TABLE products (
    id int NOT NULL,
    name text NOT NULL,
    category text,
    price real,
    description text,
    image_url text,
    PRIMARY KEY (id)
);

CREATE TABLE customers (
    id int NOT NULL,
    name text NOT NULL,
    phone text,
    address text,
    PRIMARY KEY (id)
);

CREATE TABLE orders (
    id int NOT NULL,
    customer_id int,
    order_date text,
    status text,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE order_items (
    id int NOT NULL,
    order_id int,
    product_id int,
    quantity int,
    price_at_order real,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

=======
CREATE TABLE products (
    id int NOT NULL,
    name text NOT NULL,
    category text,
    price real,
    description text,
    image_url text,
    PRIMARY KEY (id)
);

CREATE TABLE customers (
    id int NOT NULL,
    name text NOT NULL,
    phone text,
    address text,
    PRIMARY KEY (id)
);

CREATE TABLE orders (
    id int NOT NULL,
    customer_id int,
    order_date text,
    status text,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE order_items (
    id int NOT NULL,
    order_id int,
    product_id int,
    quantity int,
    price_at_order real,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

>>>>>>> 12b5e82367390f20c32f5fda317b8868384c10a3
CREATE INDEX idx_category ON products (category);