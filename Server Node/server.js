import { onEvent, sendEvent, startServer } from "soquetic";
import Database from 'better-sqlite3';
import cors from 'cors';
import express from 'express';

const app = express();
const port = 3000;

// Crear o abrir la base de datos sqlite.
//let db = new sqlite3.Database('./users.db');
const db = new Database('./users.db');

// Es necesario usar CORS ya que los requests se envían desde un dominio diferente.
app.use(cors());
app.use(express.json());

// Crear la tabla 'users' si no existe.
db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, mail TEXT UNIQUE, password TEXT, perfilImagen TEXT, experienciaProgramacion TEXT, razonAprender TEXT, teSentisIdentificado TEXT, nivelHtmlAlcanzado INTEGER, nivelCssAlcanzado INTEGER, nivelJsAlcanzado INTEGER, animacionCssFinished INTEGER, animacionJsFinished INTEGER)');
startServer();

// Evento "register"
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
        // Manda con el return al frontend el result
        return result;            
    });    

    // Evento 'login'
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