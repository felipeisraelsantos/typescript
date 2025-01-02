// Classes e Objetos
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): void {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa('João', 30);
pessoa1.apresentar(); // Saída: Olá, meu nome é João e tenho 30 anos.

// Herança
class Estudante extends Pessoa {
  curso: string;

  constructor(nome: string, idade: number, curso: string) {
    super(nome, idade);
    this.curso = curso;
  }

  apresentar(): void {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`);
  }
}

const estudante1 = new Estudante('Maria', 22, 'Engenharia');
estudante1.apresentar(); // Saída: Olá, meu nome é Maria, tenho 22 anos e estudo Engenharia.

// Polimorfismo
class Animal {
  fazerSom(): void {
    console.log('O animal faz um som.');
  }
}

class Cachorro extends Animal {
  fazerSom(): void {
    console.log('O cachorro late: Au au!');
  }
}

class Gato extends Animal {
  fazerSom(): void {
    console.log('O gato mia: Miau!');
  }
}

const cachorro = new Cachorro();
const gato = new Gato();

cachorro.fazerSom(); // Saída: O cachorro late: Au au!
gato.fazerSom(); // Saída: O gato mia: Miau!

// Encapsulamento
class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}.`);
  }

  public sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log('Saldo insuficiente.');
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}.`);
    }
  }

  public consultarSaldo(): void {
    console.log(`Saldo atual: R$${this.saldo}.`);
  }
}

const conta1 = new ContaBancaria(1000);
conta1.consultarSaldo(); // Saída: Saldo atual: R$1000.
conta1.depositar(500);    // Saída: Depósito de R$500 realizado. Saldo atual: R$1500.
conta1.sacar(2000);       // Saída: Saldo insuficiente.
conta1.sacar(300);        // Saída: Saque de R$300 realizado. Saldo atual: R$1200.

// Interfaces
interface PessoaInterface {
  nome: string;
  idade: number;
  apresentar(): void;
}

class EstudanteInterface implements PessoaInterface {
  nome: string;
  idade: number;
  curso: string;

  constructor(nome: string, idade: number, curso: string) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
  }

  apresentar(): void {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`);
  }
}

const estudanteInterface = new EstudanteInterface('Carlos', 21, 'Biologia');
estudanteInterface.apresentar(); // Saída: Olá, meu nome é Carlos, tenho 21 anos e estudo Biologia.

// Interfaces para funções
interface Operacao {
  (a: number, b: number): number;
}

const somar: Operacao = (a, b) => a + b;
console.log(somar(2, 3)); // Saída: 5

// Interface com herança
interface Animal {
  nome: string;
  emitirSom(): void;
}

interface Mamifero extends Animal {
  amamentar(): void;
}

class CachorroMamifero implements Mamifero {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
  fazerSom(): void {
    throw new Error("Method not implemented.");
  }

  emitirSom(): void {
    console.log('Au au!');
  }

  amamentar(): void {
    console.log(`${this.nome} está amamentando.`);
  }
}

const cachorroMamifero = new CachorroMamifero('Rex');
cachorroMamifero.emitirSom();    // Saída: Au au!
cachorroMamifero.amamentar();    // Saída: Rex está amamentando.

// Interface opcional e propriedades de somente leitura
interface Configuracao {
  readonly id: number; // Propriedade somente leitura
  nome: string;
  descricao?: string; // Propriedade opcional
}

const config: Configuracao = {
  id: 1,
  nome: 'Configuração padrão',
};

console.log(config.nome); // Saída: Configuração padrão
// Erro ao tentar modificar 'id' que é somente leitura
// config.id = 2; // Erro: Cannot assign to 'id' because it is a read-only property

// Métodos Estáticos
class Matematica {
  static somar(a: number, b: number): number {
    return a + b;
  }
}

console.log(Matematica.somar(5, 3)); // Saída: 8

// Genéricos
interface Resposta<T> {
  data: T;
  success: boolean;
}

const resposta: Resposta<{ id: number; nome: string }> = {
  data: { id: 1, nome: 'Produto A' },
  success: true,
};

console.log(resposta); // Saída: { data: { id: 1, nome: 'Produto A' }, success: true }

// Namespaces
namespace Loja {
  export class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
      this.nome = nome;
      this.preco = preco;
    }

    exibir(): void {
      console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
    }
  }
}

const produto = new Loja.Produto('Notebook', 3000);
produto.exibir(); // Saída: Produto: Notebook, Preço: R$3000
