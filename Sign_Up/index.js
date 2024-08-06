const SignUpForm = document.querySelector('#SignUpForm')
SignUpForm.addEventListener
(
    'submit', (e)=>
{

    e.preventDefault()
    const name = document.querySelector('#name').value
    const mail = document.querySelector('#mail').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.mail === mail)
    
    if (isUserRegistered)
    {

    return alert('el usuario ya esta registrado')

    }

    Users.push({name: name, mail: mail, password: password}) 
    localStorage.setItem('users', JSON.stringify(Users))
    alert ("registro exitoso")
    window.location.href = '../Wireframe-23/index.html'

}
)