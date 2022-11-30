
const express = require('express'); 
const path = require('path');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'backend/dbUser.db';
const app = express();

const hostname = '127.0.0.1';
const port = 3061;
app.use(express.static("./frontend"));
app.use(express.json());

app.get('/', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.sendFile(path.join(__dirname, "../frontend/html/index.html"))
});

app.get('/personalidade', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	var db = new sqlite3.Database(DBPATH);
  var sql = 'SELECT * FROM Personalidade WHERE ID = 2';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close();
});

app.post('/personalidadeinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	sql = "INSERT INTO Personalidade (ID, Personalidade, Score) VALUES ('" + 2 + "', '" + req.body.Personalidade + "', '" + req.body.Score + "')";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close();
	res.end();
});

app.post('/personalidadedelete', urlencodedParser, (req, res) =>{
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  sql = "DELETE FROM Personalidade WHERE Cód = " + req.body.Cód;
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close();
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.post('/personalidadeupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	sql = "UPDATE Personalidade SET Personalidade = '" + req.body.Personalidade + "', Score = '" + req.body.Score + "' WHERE Cód = " + req.body.Cód;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});



