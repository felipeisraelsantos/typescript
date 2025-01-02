/**
 * Classe básica para representar uma pessoa.
 */
class Person {
  /**
   * @param name - Nome da pessoa.
   * @param age - Idade da pessoa.
   */
  constructor(public name: string, public age: number) { }
}

/**
 * Função genérica para exibir informações de uma pessoa.
 *
 * @template T - Um tipo que deve estender a classe `Person`.
 * @template U - Um tipo que pode ser uma string ou um número.
 * @param person - Instância de uma pessoa (ou classe que estende `Person`).
 * @param prm2 - Um segundo parâmetro adicional (string ou número).
 */
const display = <T extends Person, U extends string | number>(person: T, prm2: U): void => {
  console.log(person.name); // Exibe o nome da pessoa no console.
};

// Exemplo 1: Criando e exibindo uma instância de `Person`.
const p1 = new Person('Carlos', 12); // Instância de Person.
display(p1, 123); // Exibe "Carlos" no console.

/**
 * Classe `User` que herda de `Person`.
 * Utiliza as mesmas propriedades e funcionalidades.
 */
class User extends Person { }

// Exemplo 2: Criando e exibindo uma instância de `User`.
const user1 = new User('Carlos', 12); // Instância de User.
display<Person, number>(user1, 123); // Exibe "Carlos" no console.

/**
 * Função genérica para acessar propriedades de um objeto.
 *
 * @template T - Tipo do objeto.
 * @template K - Chave válida do tipo `T`.
 * @param obj - O objeto no qual a propriedade será acessada.
 * @param key - A chave da propriedade a ser acessada.
 * @returns O valor da propriedade correspondente.
 */
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key]; // Retorna o valor da propriedade.
};

// Exemplo 3: Objeto representando informações sobre TypeScript.
let typescriptInfo = {
  name: 'TypeScript',
  skills: ['JS', 'TS'], // Habilidades associadas.
  level: 'hard',        // Nível de dificuldade.
};

// Exemplo 4: Outro objeto com propriedades similares, mas diferentes.
let typescriptInfo2 = {
  fullName: 'TypeScript', // Nome completo da linguagem.
  skills: ['JS', 'TS'],
  level: 'hard',
};

// Acessando a propriedade 'fullName' de `typescriptInfo2`.
getProperty(typescriptInfo2, 'fullName'); // Retorna "TypeScript".

export { };
