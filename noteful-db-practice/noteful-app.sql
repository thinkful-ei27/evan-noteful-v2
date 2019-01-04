-- DROP TABLE IF EXISTS notes;

-- CREATE TABLE notes (
--   id serial PRIMARY KEY,
--   title text NOT NULL,
--   content text,
--   created  TIMESTAMP WITH TIME ZONE NOT NULL
-- DEFAULT now()
-- )

INSERT INTO notes 
  (title, content) VALUES
    ('My title', 'My content'), 
    ('Wow more title', 'wow great content'),
    ('Wow more of another title', 'wow great content'),
    ('Wow cool title', 'wow great content'),
    ('Wow another cool title', 'wow great content'),
    ('Wow another great title', 'wow great content');