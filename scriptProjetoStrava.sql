DROP SCHEMA if exists projeto_strava;
CREATE SCHEMA projeto_strava;
USE projeto_strava;

CREATE TABLE treinadores ( 
	id INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(100) NOT NULL, 
    email VARCHAR (100) NOT NULL, 
    senha VARCHAR (256) NOT NULL 
); 



CREATE TABLE alunos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL, 
    email VARCHAR (100) NOT NULL, 
    telefone VARCHAR (45) NOT NULL, 
    treinadores_id INT,
    FOREIGN KEY (treinadores_id) REFERENCES treinadores(id)
    ON DELETE CASCADE
);

CREATE TABLE atividades (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    observacoes VARCHAR(400),
    treinadores_id INT,
    alunos_id INT,
    FOREIGN KEY (treinadores_id) REFERENCES treinadores(id)
    ON DELETE CASCADE,
    FOREIGN KEY (alunos_id) REFERENCES alunos(id)
    ON DELETE CASCADE
);

-- ADICIONAR DADOS USUARIOS
INSERT INTO treinadores (nome, email, senha)

VALUES
    ('Paulo Ernesto', 'paulo@email.com', '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'),
	('Diogo', 'diogo@email.com', '$2b$10$2/MGT6aEKBa1DlbOMPBWS.4Xhqm5k.v9g4YBzHi78jT1xQq5vE4C.'),
	('Rafael Santana', 'rafael@email.com', '$2b$10$gabZ48YuFts8C64vhE0jy.GBOUi5ZeZbzkD5O1BK0a46WNvPiOOLK'),
    ('Roni Cleber', 'roni@email.com', '$2b$10$iXZN2CUh2NNudnv.4k8xT.C4VviqJ4p.tqvMetObTNg3DaqliVyDO');

INSERT INTO alunos (nome, email, telefone, treinadores_id)

VALUES
    ('Paulo Ernesto', 'paulo@email.com', '999999999', 1),
	('Diogo', 'diogo@email.com', '888888888', 1),
	('Rafael Santana', 'rafael@email.com', '777777777', 2),
    ('Roni Cleber', 'roni@email.com', '666666666', 3);

INSERT INTO atividades (nome, observacoes, treinadores_id, alunos_id )

VALUES
    ('Corrida', '5k', 1, 1),
	('Corrida', '20k', 1, 2),
	('Bike', '50k', 2,3),
    ('Bike', '20k', 2, 4);
    
