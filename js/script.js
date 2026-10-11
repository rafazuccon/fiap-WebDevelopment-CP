// Exercício 1 - Operadores
console.log('********** Exercício 1 **********');
console.log(5 != 3);
console.log(5 === '5');
console.log(10 >= 8);

// Exercício 2 - IMC
console.log('********** Exercício 2 **********');
let peso = Number(prompt('Digite seu peso em kg:'));
let altura = Number(prompt('Digite sua altura em metros (exemplo: 1.75):'));
let imc = peso / (altura * altura);
console.log('Seu IMC é:', imc.toFixed(2));
if (imc < 18.5) {
  console.log('Abaixo do peso');
} else if (imc <= 24.9) {
  console.log('Peso ideal');
} else {
  console.log('Acima do peso');
}

// Exercício 3 - For
console.log('********** Exercício 3 **********');
for (let i = 1; i <= 10; i++) {
  console.log('O valor da contagem é:', i);
}

// Exercício 4 - Array
console.log('********** Exercício 4 **********');
let herois = ['Thor', 'Hulk', 'Capitão América', 'Arqueiro', 'Viúva Negra'];
console.log(herois);

// Exercício 5 - Operador ternário
console.log('********** Exercício 5 **********');
let idade = Number(prompt('Digite sua idade:'));
let permissao = idade >= 18 ? 'Tem permissão' : 'Não tem permissão';
console.log(permissao);

// Exercício 6 - Login
console.log('********** Exercício 6 **********');
let usuario = prompt('Digite o usuário:');
let senha = prompt('Digite a senha:');
if (usuario === 'admin' && senha === '1234') {
  console.log('Login realizado com sucesso');
} else {
  console.log('Falha na autenticação');
}

// Exercício 7 - Média de 7 notas
console.log('********** Exercício 7 **********');
let nota1 = 7;
let nota2 = 8;
let nota3 = 6;
let nota4 = 5;
let nota5 = 9;
let nota6 = 7;
let nota7 = 7;
let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;
console.log('Média:', media.toFixed(2));
if (media >= 6) {
  console.log('Aprovado');
} else {
  console.log('Reprovado');
}

// Exercício 8 - Template string
console.log('********** Exercício 8 **********');
let nome = prompt('Digite seu nome:');
console.log(`Olá dev ${nome}`);

// Exercício 9 - Alterar senha
console.log('********** Exercício 9 **********');
let senhaAtual = '1234';
let novaSenha = prompt('Digite a nova senha:');
if (novaSenha !== senhaAtual && novaSenha !== '') {
  senhaAtual = novaSenha;
  console.log('Senha alterada com sucesso');
} else {
  console.log('A nova senha precisa ser diferente da atual e não pode estar vazia');
}

// Exercício 10 - Desconto
console.log('********** Exercício 10 **********');
let valorProduto = 150;
let valorDesconto = 30;
let valorFinal = valorProduto - valorDesconto;
console.log('Valor final: R$', valorFinal);
