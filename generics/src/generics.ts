/**
 * Classe Generica
 *
 * Esta classe é uma implementação genérica que aceita um tipo `T` como parâmetro,
 * permitindo que o tipo de dado utilizado seja flexível. O valor armazenado na classe
 * será do tipo `T`, e o método `getValue` retorna esse valor, mantendo a tipagem consistente.
 * 
 * @template T - O tipo genérico que será utilizado para o valor armazenado.
 */
class Generica<T> {
  // Propriedade privada que armazenará o valor do tipo genérico
  private _value: T;

  /**
   * Construtor da classe Generica.
   *
   * Este construtor recebe um valor de tipo genérico `T` e o armazena na propriedade `_value`.
   *
   * @param value - O valor que será armazenado. O tipo deste valor será inferido
   *                pelo TypeScript ou especificado no momento da criação da instância.
   */
  constructor(value: T) {
    this._value = value;
  }

  /**
   * Método que retorna o valor armazenado na classe.
   * 
   * Este método é genérico e retorna um valor do tipo `T`, ou seja, o tipo de dado
   * que foi passado no momento da criação da instância da classe.
   * 
   * @returns O valor armazenado na propriedade `_value` da instância.
   */
  getValue(): T {
    return this._value;
  }
}

// Exemplo de instância com valor do tipo string
const ex1 = new Generica('string_value');
console.log(ex1); // Saída: Generica { _value: 'string_value' }

// Exemplo de instância com valor do tipo number
const ex2 = new Generica<number>(21123);
console.log(ex2.getValue()); // Saída: 21123
