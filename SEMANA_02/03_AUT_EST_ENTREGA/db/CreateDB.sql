-- Criando as tabelas
CREATE TABLE "Informações" (
	"ID"	INTEGER,
	"Nome"	TEXT NOT NULL,
	"Rua (End. 1)"	TEXT,
	"N°(End. 2)"	TEXT,
	"Complemento (End. 3)"	TEXT,
	"Bairro (End. 4)"	TEXT,
	"Cidade"	TEXT NOT NULL,
	"Estado"	TEXT NOT NULL,
	"País"	TEXT NOT NULL,
	"Cargo"	TEXT NOT NULL,
	"Bio"	TEXT,
	"Foto (PATH)"	TEXT,
	PRIMARY KEY("ID")
);

CREATE TABLE "Contato" (
	"ID"	INTEGER,
	"Celular"	INTEGER NOT NULL,
	"Telefone"	INTEGER,
	"E-Mail"	TEXT NOT NULL,
	PRIMARY KEY("ID")
);

CREATE TABLE "Formação.1" (
	"Cod."	INTEGER,
	"Empresa"	TEXT NOT NULL,
	"Data de início"	INTEGER NOT NULL,
	"Data de término"	INTEGER NOT NULL,
	"Descrição"	TEXT,
	PRIMARY KEY("Cod.")
);

CREATE TABLE "Realizações.1" (
	"Cod"	INTEGER,
	"Realização"	TEXT NOT NULL,
	"Data"	INTEGER NOT NULL,
	"Descrição"	TEXT,
	PRIMARY KEY("Cod")
);

CREATE TABLE "Personalidade.1" (
	"Personalidade"	TEXT NOT NULL,
	"Score (1-5)"	INTEGER NOT NULL
);

CREATE TABLE "Habilidade.1" (
	"Habilidade"	TEXT NOT NULL,
	"Score (1-5)"	INTEGER NOT NULL
);


-- Inserindo dados nas tabelas
INSERT INTO "Informações" ("ID", "Nome", "Rua (End. 1)", "N°(End. 2)", "Complemento (End. 3)", "Bairro (End. 4)", "Cidade", "Estado", "País", "Cargo", "Bio", "Foto (PATH)") VALUES ('1', 'usr 1', 'R. Exemplo', 'nº000', 'Ap. 000', 'Exemplo', 'São Paulo', 'SP', 'BR', 'Desempregado', 'Eu sou uma pessoa muito trabalhadora', '~/img/imagem.png');

INSERT INTO "Contato" ("ID", "Celular", "E-Mail") VALUES ('1', '5511000000000', 'usr1@dom.com');

INSERT INTO "Formação.1" ("Cod.", "Empresa", "Data de início", "Data de término", "Descrição") VALUES ('1', 'Inteli', '1082022', '1082026', 'Graduação em ciência da computação');

INSERT INTO "Formação.1" ("Cod.", "Empresa", "Data de início", "Data de término", "Descrição") VALUES ('2', 'MRV', '1082026', '1082027', 'Desenvolvimento back-end');

INSERT INTO "Realizações.1" ("Cod", "Realização", "Data", "Descrição") VALUES ('1', 'Site para o MRV', '1102022', 'Desenvolvimento de uma aplicação web de contratação');

INSERT INTO "Personalidade.1" ("Personalidade", "Score (1-5)") VALUES ('Extrovertida', '3');

INSERT INTO "Personalidade.1" ("Personalidade", "Score (1-5)") VALUES ('Otimista', '4');

INSERT INTO "Habilidade.1" ("Habilidade", "Score (1-5)") VALUES ('Programação back-end', '5');

INSERT INTO "Habilidade.1" ("Habilidade", "Score (1-5)") VALUES ('Programação com node-js', '4');

INSERT INTO "Habilidade.1" ("Habilidade", "Score (1-5)") VALUES ('Programação com SQL', '4');
