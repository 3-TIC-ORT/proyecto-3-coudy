import { onEvent, sendEvent, startServer } from "soquetic";
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const port = 3000;

// Crear o abrir la base de datos sqlite.
//let db = new sqlite3.Database('./users.db');
import Database from 'better-sqlite3';
const db = new Database('./users.db');

// Es necesario usar CORS ya que los requests se envían desde un dominio diferente.
app.use(cors());
app.use(express.json());

// Crear la tabla 'users' si no existe.
db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, mail TEXT UNIQUE, password TEXT, perfilImagen TEXT, experienciaProgramacion TEXT, razonAprender TEXT, teSentisIdentificado TEXT, nivelHtmlAlcanzado INTEGER, nivelCssAlcanzado INTEGER, nivelJsAlcanzado INTEGER, animacionCssFinished INTEGER, animacionJsFinished INTEGER)');

onEvent("register", async (data) =>  
    {        
        let result = {};
       
        // PARTE 1: Chequea en la base de datos si el usurio ya existe.
        const row = db.prepare('SELECT * FROM users WHERE username = ?')
        .get(data.user_name);        
        if (row)                       
        {                            
            // Query exitoso, y encontró un row para ese username, lo cual quiere decir que el usuario ya existía.                                
            result.result = "ya_existe";                                    
        }                    
        else                
        {
            // PARTE 2: Credenciales no encontradas -> podemos seguir!!
            // Si llegó hasta acá, quiere decir que el query a la base de datos fue exitoso y que el username no existía.
            // Por lo tanto inserta ese username con el password especificado en la base de datos.
            const info = db.prepare('INSERT INTO users (username, mail, password) VALUES (?, ?, ?)')
            .run(data.user_name, data.mail, data.password);
            
            result.result= "registro_exitoso";            
            result.user_id = info.lastInsertRowid;
        }

        return result;            
    });    

    onEvent("login", async (data) =>          
        {
            console.log("login requested:");
            console.log(`mail_or_user: ${data.mail_or_user}`);
            console.log(`password: ${data.password}`);
            
            let result = {};
            const row = db.prepare('SELECT * FROM users WHERE username = ? AND password = ?')        
            .get(data.mail_or_user, data.password);        
            if (row)                       
            {                            
                // Query exitoso, y encontró un row para ese username, lo cual quiere decir que el usuario ya existía.                                
                result.user = row;
            }            

            return result;
        });

        onEvent("get_user", async (data) =>          
            {
                console.log("get_user requested:");
                console.log(`user_id: ${data.user_id}`);                
                
                let result = {};
                const row = db.prepare('SELECT * FROM users WHERE id = ?')
                .get(data.user_id);        
                if (row)                       
                {                            
                    // Query exitoso, y encontró un row para ese username, lo cual quiere decir que el usuario ya existía.                                
                    result.user = row;
                    return result;
                }
                else
                {
                    console.log("El usuario " + data.user_id + " no fue encontrado en la base de datos.");
                    return null;
                }                
            });
            
            onEvent("update_user", async (data) =>          
                {
                    console.log("update_user requested:");
                    console.log(`user_id: ${data.user_id}`);
                    console.log(`key: ${data.key}`);
                    console.log(`new_value: ${data.new_value}`);
                    
                    let result = {};
                    const row = db.prepare('SELECT * FROM users WHERE id = ?')
                    .get(data.user_id);
                    if (row)
                    {
                        try
                        {
                            let sql = `UPDATE users SET ${data.key} = ? WHERE id = ?`;
                            console.log("Ejecutando SQL: " + sql);
                            const stmt = db.prepare(sql).run(data.new_value, data.user_id);
                        }
                        catch (err)
                        {
                            let error = "Error actualizando el usuario, asignando " + data.new_Value + " al campo " + data.key + ": " + err;
                            result.error = error;
                            console.log(error);
                        }                                               
                    }
                    else
                    {
                        result.error="Usuario id " + data.user_id + " no encontrado";
                        console.log("Usuario id " + data.user_id + " no encontrado");
                    }
        
                    return result;
                });





















    
    import express from 'express';
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

startServer();

// Start the server
//app.listen(port, () => {
//    console.log(`Server running on http://localhost:${port}`);
//});
