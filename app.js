const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_management'
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }

  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM students ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }

    res.render('index', { students: results, keyword: '' });
  });
});

app.get('/students/search', (req, res) => {
  const keyword = typeof req.query.keyword === 'string'
    ? req.query.keyword.trim()
    : '';
  const searchValue = `%${keyword}%`;
  const sql = `
    SELECT * FROM students
    WHERE student_id LIKE ?
       OR first_name LIKE ?
       OR last_name LIKE ?
       OR email LIKE ?
       OR course LIKE ?
    ORDER BY id DESC
  `;

  db.query(
    sql,
    [searchValue, searchValue, searchValue, searchValue, searchValue],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Search error');
      }

      res.render('index', { students: results, keyword });
    }
  );
});

app.get('/students/add', (req, res) => {
  res.render('add');
});

app.post('/students/add', (req, res) => {
  const {
    student_id,
    first_name,
    last_name,
    course,
    year_level,
    email
  } = req.body;

  const sql = `
    INSERT INTO students
      (student_id, first_name, last_name, course, year_level, email)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [
    student_id,
    first_name,
    last_name,
    course,
    year_level,
    email
  ];

  db.query(sql, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Unable to save student');
    }

    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});