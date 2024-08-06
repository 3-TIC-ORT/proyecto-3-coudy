document.addEventListener("DOMContentLoaded", function() {
const logInForm = document.querySelector('#logInForm')
logInForm.addEventListener
(
    'submit', (e)=>
{

    e.preventDefault()
    const mail = document.querySelector('#mail').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.mail === mail)
    
    const validUser = Users.find(user => user.mail === mail && user.password === password)
    if (!validUser)
        {
            return alert("usuario y/o contraseña incorrectos")
        }
            alert ("bienvenido")
        })
        })