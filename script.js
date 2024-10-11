const sliderElement = document.querySelector('#slider')
const buttonElement = document.querySelector('#button')

const valueInput = document.querySelector('#valor')
const password = document.querySelector('#password')

const containerPassword = document.querySelector('#container-password')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%'
let novaSenha = ''

valueInput.innerHTML = sliderElement.value


slider.oninput = function() {
    valueInput.innerHTML = this.value
}

function generatePassword() {
    let pass = ''
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
        
    }
    containerPassword.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass
}

function copyPassword() {
    alert('Senha copiada!')
    navigator.clipboard.writeText(novaSenha)
}