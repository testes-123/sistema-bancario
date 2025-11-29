let saldo = 0
let extrato = []

// Funções
function adicionarSaldo() {
    let adicionar = parseFloat(prompt("Coloque o valor de entrada: "))
    if (adicionar > 0) {
        saldo += adicionar
        let textoExtrato = `O valor de ${adicionar} foi adicionado ao seu saldo`
        extrato.push(textoExtrato)
    } else {
        console.log("Valor inválido.")
    }
}

function removerSaldo() {
    let remover = parseFloat(prompt("Coloque o valor da saida: "))
    if (remover > 0) {
        if (remover <= saldo) {
            saldo -= remover
            let textoExtrato = `O valor de ${remover} foi removido de seu saldo`
            extrato.push(textoExtrato)
        } else {
            console.log("Saldo insuficiente.")
        }
    } else {
        console.log("Valor inválido.")
    }
}

function verExtrato() {
    if (extrato.length === 0) {
        console.log("Nenhuma movimentação registrada.")
    } else {
        for (let i = 0; i < extrato.length; i++) {
            console.log(extrato[i])
        }
    }
}

// Objeto para armazenar dados do usuário
let usuario = {}

// Cadastro
do {
    usuario.nome = prompt("Digite seu nome: ")
    usuario.idade = parseInt(prompt("Digite sua idade: "))
    usuario.senha = prompt("Crie sua senha: ")

    if (usuario.idade < 18) {
        console.log("Você não pode fazer login. É necessário ter 18 anos ou mais.")
    } else if (usuario.nome === "" || usuario.senha === "") {
        console.log("Preencha todos os campos corretamente para concluir o cadastro.")
    }
} while (usuario.idade < 18 || usuario.nome === "" || usuario.senha === "")

console.log("Cadastro realizado com sucesso!")

// Login
console.log("Faça seu login")

let nomeLogin = prompt("Digite seu nome: ")
let senhaLogin = prompt("Digite sua senha: ")

while (nomeLogin !== usuario.nome || senhaLogin !== usuario.senha) {
    console.log("Senha ou nome inválidos. Tente novamente.")
    nomeLogin = prompt("Digite seu nome: ")
    senhaLogin = prompt("Digite sua senha: ")
}

console.log("Login feito com sucesso!")

// Função para repetir a escolha do usuário
function repetirmenu() {
    let menu = parseInt(prompt("O que você deseja fazer?\n1. Ver Saldo\n2. Adicionar entrada\n3. Adicionar saida\n4. Ver extrato\n5. Sair "))
    return menu
}

let menu

// Menu principal
while (menu !== 5) {
    menu = repetirmenu()
    switch (menu) {
        case 1:
            console.log(`Seu saldo atual é de ${saldo}`)
            break
        case 2:
            adicionarSaldo()
            break
        case 3:
            removerSaldo()
            break
        case 4:
            verExtrato()
            break
        case 5:
            console.log("Até mais")
            break
        default:
            console.log("Por favor escolha uma opção válida")
            break
    }
}
