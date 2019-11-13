DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  isbn VARCHAR(255),
  image_url TEXT,
  description TEXT,
  bookshelf VARCHAR(255)
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) 
VALUES ('Who Is Michael Jordan?', 'Kirsten Anderson', '9780451532459', 'https://books.google.com/books/content?id=6-GCDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'Jordan had always been competitive--even as a young boy, he fought for attention. His need to be the best made him a star player on his college basketball team and helped him become an NBA legend. Here, readers are taken through each exciting moment, detailing the iconic events of his storied career', 'sports');

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) 
VALUES ('Playing for Keeps', 'David Halberstam', '9781453286142', 'https://books.google.com/books/content?id=QnAG5M8lpm4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'book description', 'sports');