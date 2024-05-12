const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Configure middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = new sqlite3.Database('./hospital.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the database');
    }
});

// Routes
app.get('/', function(req, res) {
    db.all('SELECT DISTINCT specialty FROM doctors', function(err, rows) {
        if (err) {
            console.error('Error fetching specialties:', err.message);
            res.status(500).send('Error fetching specialties');
            return;
        }
        const specialties = rows.map(row => row.specialty);
        res.render('register', { specialties });
    });
});

app.post('/register', function(req, res) {
    const { name, email, specialty } = req.body;
    const query = `
        SELECT doctors.*, hospitals.name AS hospital_name
        FROM doctors
        INNER JOIN hospitals ON doctors.hospital_id = hospitals.id
        WHERE doctors.specialty = ?
    `;
    db.all(query, [specialty], function(err, doctors) {
        if (err) {
            console.error('Error fetching doctors:', err.message);
            res.status(500).send('Error fetching doctors');
            return;
        }
        res.render('doctors', { doctors, name, email });
    });
});

app.post('/book', function(req, res) {
    const { name, email, doctorId, dateTime } = req.body;
    db.get('SELECT * FROM users WHERE email = ?', [email], function(err, user) {
        if (err) {
            console.error('Error checking user:', err.message);
            res.status(500).send('Error checking user');
            return;
        }

        if (!user) {
            db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function(err) {
                if (err) {
                    console.error('Error creating user:', err.message);
                    res.status(500).send('Error creating user');
                    return;
                }
                bookAppointment(this.lastID);
            });
        } else {
            bookAppointment(user.id);
        }
    });

    function bookAppointment(userId) {
        db.run('INSERT INTO appointments (user_id, doctor_id, date_time) VALUES (?, ?, ?)', [userId, doctorId, dateTime], function(err) {
            if (err) {
                console.error('Error booking appointment:', err.message);
                res.status(500).send('Error booking appointment');
                return;
            }
            res.redirect("/");
        });
    }
});

// Start the server
app.listen(8080, function() {
    console.log("Server running on port 8080!");
});
