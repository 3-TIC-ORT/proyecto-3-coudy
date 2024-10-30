const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3000;

// Crear o abrir la base de datos sqlite.
let db = new sqlite3.Database('./users.db');

// Es necesario usar CORS ya que los requests se envían desde un dominio diferente.
app.use(cors());
app.use(express.json());

// Crear la tabla 'users' si no existe.
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)');

// Ruta de registración
// Define este endpoint, donde req es el request, res el result, y extrae los parámetros 'username' y 'password' del req.body (es decir, del body del request).
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Chequea en la base de datos si el usaurio ya existe.
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            // Acá falló el query a la base de datos, por lo cual devuelve un error 500 (Server error).
            res.status(500).json({ message: 'Server error' });
            return;
        }
        if (row) {
            // Query exitoso, y encontró un row para ese username, lo cual quiere decir que el usuario ya existía.
            // Devuelve error 409 y sale.
            res.status(409).json({ message: 'Username already exists' });
            return;
        }

        // Si llegó hasta acá, quiere decir que el query a la base de datos fue exitoso y que el username no existía.
        // Por lo tanto inserta ese username con el password especificado en la base de datos.
        db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err) {
            if (err) {
                // Si falla el insert, devuelve error 500.
                res.status(500).json({ message: 'Server error: Unable to register user' });
                return;
            }
            // Si llega hasta acá, todo existoso por lo cual devuelve código 200 (OK).
            res.status(200).json({ id: this.lastID, message: 'User registered successfully' });
        });
    });
});

// Ruta de login
app.post('/login', (req, res) => {
    // Extrae username del body
	const username = req.body.username;
    // Extrae password del body
	const password = req.body.password;
	
    // Lo de abajo es la forma más compacta para hacer lo mismo (la utilizada en la ruta de register).
    // const { username, password } = req.body;

    // Busca en la base de datos un registro que matchee con el usuario y el password extraidos del request.
    // Mete el err el error (si lo hubiera), y en row el registro obtenido (si lo hubiera).
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            // Si err tiene contenido, es que hubo un error, por lo cual devuelve error 500.
            // Appendea a la respuesta el contenido de err para poder loguearlo en la consola desde el lado del cliente si quisiéramos.
            res.status(500).json({ message: 'Server error: ' + err });
            return;
        }
        if (row) {
            // Si row tiene contenido, es que encontró un registro que matchea con username y password, con lo cual el login fue exitoso.
            // Devuelve 200 (OK)
            res.status(200).json({ message: 'Login successful' });
        } else {
            // Si llega hasta acá, es que no hubo error pero tampoco un registro en la base de datos que matchee, por lo cual las credenciales son inválidas.
            // Devuelve error 401 (Unauthorized)
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
