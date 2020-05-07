DROP SCHEMA if exists projeto_strava;
CREATE SCHEMA projeto_strava;
USE projeto_strava;

CREATE TABLE treinadores ( 
	id INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(100) NOT NULL, 
    email VARCHAR (100) NOT NULL, 
    telefone VARCHAR (45) NOT NULL,
    senha VARCHAR (256) NOT NULL 
); 

CREATE TABLE equipe_admin ( 
	id INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(100) NOT NULL, 
    email VARCHAR (100) NOT NULL,
    funcao VARCHAR (100) NOT NULL,
    site VARCHAR (100) NOT NULL,
    location VARCHAR (100) NOT NULL,
    telefone VARCHAR (45) NOT NULL,
    img VARCHAR (100),
    senha VARCHAR (256) NOT NULL 
); 

CREATE TABLE contatos ( 
	id INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(100) NOT NULL, 
    email VARCHAR (100) NOT NULL, 
    docs VARCHAR (45) NOT NULL,
    mensagem VARCHAR (1000)
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


CREATE TABLE aulas (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    observacoes VARCHAR(400),
    treinadores_id INT,
    FOREIGN KEY (treinadores_id) REFERENCES treinadores(id)
    ON DELETE CASCADE,
    data_aula DATE,
    horario VARCHAR(45)
);

CREATE TABLE aulas_has_alunos (
    aulas_id INT,
    alunos_id INT,
    FOREIGN KEY (aulas_id) REFERENCES aulas(id)
    ON DELETE CASCADE,
    FOREIGN KEY (alunos_id) REFERENCES alunos(id)
    ON DELETE CASCADE
);

CREATE TABLE presenca (
	id INT PRIMARY KEY AUTO_INCREMENT,
    aulas_id INT,
    alunos_id INT,
    FOREIGN KEY (aulas_id) REFERENCES aulas(id)
    ON DELETE CASCADE,
    FOREIGN KEY (alunos_id) REFERENCES alunos(id)
    ON DELETE CASCADE
);

CREATE TABLE metas (
	id INT PRIMARY KEY AUTO_INCREMENT,
	detalhes VARCHAR(100),
    alunos_id INT, 
    FOREIGN KEY (alunos_id) REFERENCES alunos(id)
    ON DELETE CASCADE
);


-- ADICIONAR DADOS 
INSERT INTO treinadores (nome, email, telefone, senha)

VALUES
    ('Paulo Ernesto', 'paulo@email.com', '999999999','$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'),
	('Diogo', 'diogo@email.com', '999999999','$2b$10$2/MGT6aEKBa1DlbOMPBWS.4Xhqm5k.v9g4YBzHi78jT1xQq5vE4C.'),
	('Rafael Santana', 'rafael@email.com','999999999', '$2b$10$gabZ48YuFts8C64vhE0jy.GBOUi5ZeZbzkD5O1BK0a46WNvPiOOLK'),
    ('Roni Cleber', 'roni@email.com','999999999', '$2b$10$iXZN2CUh2NNudnv.4k8xT.C4VviqJ4p.tqvMetObTNg3DaqliVyDO');

INSERT INTO alunos (nome, email, telefone, treinadores_id)

VALUES
    ('Paulo Ernesto', 'paulo@email.com', '999999999', 1),
	('Diogo', 'diogo@email.com', '888888888', 1),
	('Rafael Santana', 'rafael@email.com', '777777777', 2),
    ('Roni Cleber', 'roni@email.com', '666666666', 3);

INSERT INTO aulas (nome, observacoes, treinadores_id, data_aula, horario )

VALUES
    ('Corrida', '5k', 1, '2020-05-10','13:00'),
	('Corrida', '20k', 1, '2020-05-10','13:00'),
	('Bike', '50k', 2, '2020-05-10','13:00'),
    ('Bike', '20k', 2, '2020-05-10','13:00');
    
INSERT INTO aulas_has_alunos (aulas_id, alunos_id)

VALUES 
	(1, 3),
    (2, 1),
    (1, 2);
    
INSERT INTO presenca (aulas_id, alunos_id)

VALUES 
	(1, 3),
    (2, 1),
    (1, 2);
    
INSERT INTO metas (detalhes, alunos_id)

VALUES
	('38k', 1),
    ('20k', 2),
    ('100k', 3);
    
INSERT INTO equipe_admin (nome, email, funcao, site, location, telefone, img, senha)

VALUES
	('Diogo', 'diogo@email.com', 'Sei lá','https://github.com/Dogix11', 'Brasil', '999999999', '/img/diogo.png','$2b$10$2/MGT6aEKBa1DlbOMPBWS.4Xhqm5k.v9g4YBzHi78jT1xQq5vE4C.'),
	('Paulo Ernesto', 'paulo@email.com', 'Sei lá','https://github.com/pauloernestom', 'Brasil',  '999999999', '/img/paulo.png', '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'),
    ('Rafael Santana', 'rafael@email.com', 'Sei lá','https://github.com/rafalmeida73', 'Brasil','999999999','/img/rafael.jpg', '$2b$10$gabZ48YuFts8C64vhE0jy.GBOUi5ZeZbzkD5O1BK0a46WNvPiOOLK'),
    ('Roni Cleber', 'roni@email.com', 'Scrum Master','https://github.com/ronycleber', 'Brasil','999999999','/img/roni.png', '$2b$10$iXZN2CUh2NNudnv.4k8xT.C4VviqJ4p.tqvMetObTNg3DaqliVyDO');
