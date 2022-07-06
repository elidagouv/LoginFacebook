const email_tel = document.getElementById("email_tel")
const senha = document.getElementById("senha")
const submit = document.getElementById("submit")
const erro = document.getElementById("msg")
const div_input = document.getElementById("inputs")

function change() {
    email_tel.style.borderColor = "#1877F2"
    email_tel.style.color = "black"
}

function change1() {
    senha.style.color = "black"
    senha.style.borderColor = "#1877F2"
}

submit.addEventListener("click", function(event) {

    const emailTelValue = email_tel.value
    const senhaValue = senha.value 

    if (emailTelValue == "" || senhaValue == "") {
        erro.textContent = "Por favor, preencha todos os campos!"
        erro.style.marginTop = "20px"
        div_input.style.height = "390px"
        setTimeout(() => {
            erro.textContent = ""
            erro.style.marginTop = "0"
            div_input.style.height = "360px"
        }, 3000)
        event.preventDefault()
        return
    } 

    if (emailTelValue.indexOf("@") == -1) {
        erro.textContent = "O '@' não foi encontrado."
        erro.style.marginTop = "20px"
        div_input.style.height = "390px"
        setTimeout(() => {
            erro.textContent = ""
            erro.style.marginTop = "0"
            div_input.style.height = "360px"
        }, 3000)
        event.preventDefault()
        return
    } 

    if (emailTelValue.indexOf(".") == -1) {
        erro.textContent = "O '.' não foi encontrado."
        erro.style.marginTop = "20px"
        div_input.style.height = "390px"
        setTimeout(() => {
            erro.textContent = ""
            erro.style.marginTop = "0"
            div_input.style.height = "360px"
        }, 3000)
        event.preventDefault()
        return
    } 

    if (emailTelValue.indexOf(".") - emailTelValue.indexOf("@") == 1) {
        erro.textContent = "O '.' foi usado em uma posição incorreta."
        erro.style.marginTop = "20px"
        div_input.style.height = "390px"
        setTimeout(() => {
            erro.textContent = ""
            erro.style.marginTop = "0"
            div_input.style.height = "360px"
        }, 3000)
        event.preventDefault()
        return
    }

    if (emailTelValue.indexOf("@") - emailTelValue.indexOf(".") == 1) {
        erro.textContent = "O '.' foi usado em uma posição incorreta."
        erro.style.marginTop = "20px"
        div_input.style.height = "390px"
        setTimeout(() => {
            erro.textContent = ""
            erro.style.marginTop = "0"
            div_input.style.height = "360px"
        }, 3000)
        event.preventDefault()
        return
    }

    if (senhaValue.length < 8) {
        erro.textContent = "A senha deve conter no mínimo 8 caracteres."
        erro.style.marginTop = "20px"
        div_input.style.height = "390px"
        setTimeout(() => {
            erro.textContent = ""
            erro.style.marginTop = "0"
            div_input.style.height = "360px"
        }, 3000)
        event.preventDefault()
        return
    }

})