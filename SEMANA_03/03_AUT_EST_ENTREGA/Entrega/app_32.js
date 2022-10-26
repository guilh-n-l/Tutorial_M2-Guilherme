const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3021;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'backend/Database.db';


app.use(express.static("public"));

/* Os valores de cada banco de dados */
app.get('/identificacao', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM "Identificação"';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.get('/endereco', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM "Endereço"';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.get('/contato', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM "Contato"';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.get('/formacao', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM "Formação"';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.get('/experiencias', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM "Experiências"';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.get('/realizacoes', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM "Realizações"';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.get('/habilidades', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM "Habilidades"';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.get('/personalidade', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM "Personalidade"';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

/* Mostra que o servidor ta rodando */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
