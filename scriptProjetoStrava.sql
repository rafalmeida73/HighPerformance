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


CREATE TABLE alunos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL, 
    img VARCHAR(45),
    email VARCHAR (100) NOT NULL, 
    telefone VARCHAR (45) NOT NULL, 
    meta INT(11),
    metaFeita INT(11),
    treinadores_id INT,
    FOREIGN KEY (treinadores_id) REFERENCES treinadores(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    plano VARCHAR(45),
    tempo_plano INT(11),
    valor DECIMAL(6,2)
);


CREATE TABLE aulas (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    observacoes VARCHAR(400),
    treinadores_id INT,
    FOREIGN KEY (treinadores_id) REFERENCES treinadores(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    data_aula DATE,
    horario VARCHAR(45),
    status VARCHAR(45)
);

CREATE TABLE aulas_has_alunos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    aulas_id INT,
    alunos_id INT,
    FOREIGN KEY (aulas_id) REFERENCES aulas(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (alunos_id) REFERENCES alunos(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE contatos (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(100) NOT NULL, 
    email VARCHAR (100) NOT NULL,
    docs VARCHAR (100) NOT NULL,
    mensagem VARCHAR (1000) NOT NULL
);

CREATE TABLE depoimentos (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    img VARCHAR(100) NOT NULL, 
    nome VARCHAR (100) NOT NULL,
    profissao VARCHAR (100) NOT NULL,
    mensagem VARCHAR (1000) NOT NULL
);

CREATE TABLE presenca (
	id INT PRIMARY KEY AUTO_INCREMENT,
    aulas_id INT,
    alunos_id INT,
    FOREIGN KEY (aulas_id) REFERENCES aulas(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (alunos_id) REFERENCES alunos(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE metas (
	id INT PRIMARY KEY AUTO_INCREMENT,
	detalhes VARCHAR(100),
    alunos_id INT, 
    FOREIGN KEY (alunos_id) REFERENCES alunos(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE mensalidades (
	id INT PRIMARY KEY AUTO_INCREMENT,
    mes_ref VARCHAR(45),
    ano INT(11),
    valor DECIMAL(6,2),
    treinadores_id INT,
    FOREIGN KEY (treinadores_id) REFERENCES treinadores(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	alunos_id INT, 
    FOREIGN KEY (alunos_id) REFERENCES alunos(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    pago INT(2)
);

CREATE TABLE financas (
	id INT PRIMARY KEY AUTO_INCREMENT,
    mes VARCHAR(10),
    valor DECIMAL(6,2),
    treinadores_id INT,
    FOREIGN KEY (treinadores_id) REFERENCES treinadores(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- ADICIONAR DADOS 
INSERT INTO treinadores (nome, email, telefone, senha)

VALUES
    ('Paulo Ernesto', 'pauloernestom@gmail.com', '999999999','$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'),
	('Diogo', 'diogofcar@gmail.com', '999999999','$2b$10$2/MGT6aEKBa1DlbOMPBWS.4Xhqm5k.v9g4YBzHi78jT1xQq5vE4C.'),
	('Rafael Santana', 'rafaelsantana7213@gmail.com','999999999', '$2b$10$gabZ48YuFts8C64vhE0jy.GBOUi5ZeZbzkD5O1BK0a46WNvPiOOLK'),
    ('Roni Cleber', 'ronycleber_pm@hotmail.com','999999999', '$2b$10$iXZN2CUh2NNudnv.4k8xT.C4VviqJ4p.tqvMetObTNg3DaqliVyDO');

INSERT INTO alunos (nome, img, email, telefone, meta, metaFeita, treinadores_id, plano, tempo_plano, valor)

VALUES
    ('Paulo Ernesto','/img/paulo.png', 'paulo@email.com', '999999999', 38, 7, 1, 'Mensal', 5, 30),
	('Diogo','/img/diogo.png', 'diogo@email.com', '888888888', 38, 7, 1, 'Avulso', 10, 43),
	('Rafael Santana','/img/rafael.jpg', 'rafael@email.com', '777777777', 38, 7, 2, 'Mensal', 3, 20),
    ('Roni Cleber','/img/roni.png', 'roni@email.com', '666666666', 38, 7, 3, 'Avulso', 2, 50);

INSERT INTO aulas (nome, observacoes, treinadores_id, data_aula, horario, status)

VALUES
    ('Corrida', '5k', 1, '2020-06-17','13:00', 'a'),
	('Corrida', '20k', 1, '2020-06-18','13:00', 'a'),
	('Bike', '50k', 1, '2020-06-17','19:00', 'a'),
    ('Bike', '20k', 2, '2020-06-19','13:00', 'a'),
    ('Bike', '20k', 3, '2020-06-20','13:00', 'a');
    
INSERT INTO aulas_has_alunos (aulas_id, alunos_id)

VALUES 
	(1, 3),
    (2, 1),
    (3, 3),
    (4, 1),
    (5, 4),
    (1, 2);
    
INSERT INTO presenca (aulas_id, alunos_id)

VALUES 
	(1, 3),
    (2, 1),
    (3, 3),
    (4, 1),
    (5, 4),
    (1, 2);
    
INSERT INTO metas (detalhes, alunos_id)

VALUES
	('38k', 1),
    ('20k', 2),
    ('100k', 3),
    ('100k', 4);
    
INSERT INTO equipe_admin (nome, email, funcao, site, location, telefone, img, senha)

VALUES
	('Diogo', 'diogofcar@gmail.com', 'Sei lá','https://github.com/Dogix11', 'Brasil', '999999999', '/img/diogo.png','$2b$10$2/MGT6aEKBa1DlbOMPBWS.4Xhqm5k.v9g4YBzHi78jT1xQq5vE4C.'),
	('Paulo Ernesto', 'pauloernestom@gmail.com', 'Sei lá','https://github.com/pauloernestom', 'Brasil',  '999999999', '/img/paulo.png', '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'),
    ('Rafael Santana', 'rafaelsantana7213@gmail.com', 'Sei lá','https://github.com/rafalmeida73', 'Brasil','999999999','/img/rafael.jpg', '$2b$10$gabZ48YuFts8C64vhE0jy.GBOUi5ZeZbzkD5O1BK0a46WNvPiOOLK'),
    ('Roni Cleber', 'ronycleber_pm@hotmail.com', 'Scrum Master','https://github.com/ronycleber', 'Brasil','999999999','/img/roni.png', '$2b$10$iXZN2CUh2NNudnv.4k8xT.C4VviqJ4p.tqvMetObTNg3DaqliVyDO');

INSERT INTO financas (mes, valor, treinadores_id)

VALUES
	('Janeiro', 700, 1),
    ('Janeiro', 700, 2),
    ('Janeiro', 700, 3),
    ('Janeiro', 700, 4),
    ('Fevereiro', 700, 1),
    ('Fevereiro', 700, 2),
    ('Fevereiro', 700, 3),
    ('Fevereiro', 700, 4);
    
INSERT INTO mensalidades (mes_ref, ano, valor, treinadores_id, alunos_id, pago)

VALUES
	('Junho', 2020, 280, 3, 4, 1),
    ('Julho', 2020, 280, 3, 4, 0),
    ('Junho', 2020, 280, 1, 2, 1),
    ('Julho', 2020, 280, 1, 2, 0),
    ('Junho', 2020, 280, 4, 1, 1),
    ('Julho', 2020, 280, 4, 1, 0),
    ('Junho', 2020, 280, 2, 3, 1),
    ('Julho', 2020, 280, 2, 3, 0);