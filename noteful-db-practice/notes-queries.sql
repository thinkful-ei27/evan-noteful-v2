-- SELECT * FROM notes;

-- SELECT * FROM notes LIMIT 5;

-- SELECT * FROM notes 
-- ORDER BY title;

-- SELECT * FROM notes WHERE title='My title';

-- UPDATE notes 
--   SET title = 'New Title', content = 'New content'
--   WHERE id = '9'; 

DROP TABLE IF EXISTS folders;
DROP TABLE IF EXISTS notes;

CREATE TABLE folders (
    id serial PRIMARY KEY,
    name text NOT NULL
);

ALTER SEQUENCE folders_id_seq RESTART WITH 100;

INSERT INTO folders (name) VALUES
  ('Archive'),
  ('Drafts'),
  ('Personal'),
  ('Work');

  CREATE TABLE notes (
    id serial PRIMARY KEY,
    title text NOT NULL,
    content text,
    created timestamp DEFAULT now(), 
    folder_id int REFERENCES folders(id) ON DELETE SET NULL
  );

  INSERT INTO notes 
  (title, content, folder_id) VALUES
   (
    '5 life lessons learned from cats',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    100
  ),
  ('6 life lessons learned from cats',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    101);


 