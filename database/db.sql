CREATE TABLE posts (
    id SERIAL PRIMARY KEY,         
    title VARCHAR(255) NOT NULL,    
    content TEXT NOT NULL,         
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);