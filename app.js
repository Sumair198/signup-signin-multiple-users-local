// let setdata = () => {
//     var obj =
//     {
//         name: 'Sumair',
//         age: 22,
//         city: 'Karachi'
//     }
//     let ok = JSON.stringify(obj)
//     localStorage.setItem('Data', ok)
// }


// let getdata = () => {
//     var getData = localStorage.getItem('Data')
//     var get2 = JSON.parse(getData)
//     console.log(get2)
// }


var allUsers = []

var userGet = localStorage.getItem('data')
if(userGet !== null)
{
    allUsers = JSON.parse(userGet)
}

let signup = ()=>
{
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var user = {
        name,
        email,
        password
    }
    allUsers.push(user)
    localStorage.setItem('data',JSON.stringify(allUsers))
}

let login = () =>
{
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var userArr = allUsers.filter(data => data.email === email.value && data.password === password.value)
    if(userArr.length)
    {
        alert('User Login SuccessFully!')
    }
    else
    {
        alert('Invalid Email/Password')
    }
}



