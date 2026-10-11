// Todos os resultados são apresentados no Console do navegador (F12).
function titulo(numero) {
  console.log('***************************************************');
  console.log(`Exercício ${numero}`);
  console.log('***************************************************');
}

function exercicio1() {
  titulo(1);
  console.log('5 != 3:', 5 != 3);          // true
  console.log('5 === "5":', 5 === '5');   // false (tipos diferentes)
  console.log('18 >= 18:', 18 >= 18);      // true
}

function exercicio2() {
  titulo(2);
  const peso = Number(prompt('Exercício 2: digite seu peso (kg):') ?? '70');
  const altura = Number(prompt('Exercício 2: digite sua altura em metros (ex.: 1.75):') ?? '1.75');
  if (!Number.isFinite(peso) || !Number.isFinite(altura) || peso <= 0 || altura <= 0) {
    console.log('Peso ou altura inválidos.');
    return;
  }
  const imc = peso / (altura * altura);
  console.log(`IMC: ${imc.toFixed(2)}`);
  if (imc < 18.5) {
    console.log('Abaixo do peso');
  } else if (imc <= 24.9) {
    console.log('Peso ideal');
  } else {
    console.log('Acima do peso');
  }
}

function exercicio3() {
  titulo(3);
  for (let contagem = 1; contagem <= 10; contagem++) {
    console.log(`O valor da contagem é: ${contagem}`);
  }
}

function exercicio4() {
  titulo(4);
  const herois = ['Thor', 'Hulk', 'Capitão América', 'Arqueiro', 'Viúva Negra'];
  console.log('Array:', herois);
  herois.forEach((heroi) => console.log(heroi));
}

function exercicio5() {
  titulo(5);
  const idade = Number(prompt('Exercício 5: digite sua idade:') ?? '18');
  const permissao = Number.isFinite(idade) && idade >= 18 ? 'Permissão concedida' : 'Permissão negada';
  console.log(permissao);
}

function exercicio6() {
  titulo(6);
  const usuario = prompt('Exercício 6: usuário:') ?? 'admin';
  const senha = prompt('Exercício 6: senha:') ?? '1234';
  if (usuario === 'admin' && senha === '1234') {
    console.log('Login realizado com sucesso!');
  } else {
    console.log('Falha de autenticação.');
  }
}

function exercicio7() {
  titulo(7);
  const notas = [7, 8, 6, 7, 9, 5, 7];
  const soma = notas.reduce((total, nota) => total + nota, 0);
  const media = soma / notas.length;
  console.log('Notas:', notas);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(media >= 6 ? 'Aluno aprovado!' : 'Aluno reprovado!');
}

function exercicio8() {
  titulo(8);
  const nome = prompt('Exercício 8: digite seu nome:') ?? 'Visitante';
  console.log(`Olá dev ${nome}!`);
}

function exercicio9() {
  titulo(9);
  let senhaAtual = '1234';
  const novaSenha = prompt('Exercício 9: digite a nova senha:') ?? '5678';
  if (novaSenha.trim() === '') {
    console.log('A nova senha não pode estar vazia.');
  } else if (novaSenha === senhaAtual) {
    console.log('A nova senha deve ser diferente da senha atual.');
  } else {
    senhaAtual = novaSenha;
    console.log('Senha alterada com sucesso!');
  }
}

function exercicio10() {
  titulo(10);
  const valorProduto = 150;
  const valorDesconto = 30;
  const valorFinal = valorProduto - valorDesconto;
  console.log(`Produto: R$ ${valorProduto.toFixed(2)}`);
  console.log(`Desconto: R$ ${valorDesconto.toFixed(2)}`);
  console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
}

function executarTudo() {
  console.clear();
  exercicio1();
  exercicio2();
  exercicio3();
  exercicio4();
  exercicio5();
  exercicio6();
  exercicio7();
  exercicio8();
  exercicio9();
  exercicio10();
  console.log('***************************************************');
  console.log('Fim dos 10 exercícios!');
}

document.getElementById('executar').addEventListener('click', executarTudo);
executarTudo();
