/**
 * Decorador para aplicar validação de comprimento mínimo em uma propriedade.
 * @param length - Comprimento mínimo exigido para o valor da propriedade.
 */
function minLength(length: number) {
  // Retorna o decorador real, que será aplicado na propriedade
  return (target: any, key: string) => {
    // Armazena o valor inicial da propriedade
    let val = target[key];

    // Getter: Retorna o valor da propriedade
    const getter = () => val;

    // Setter: Define o valor da propriedade, com validação
    const setter = (value: string) => {
      if (value.length < length) {
        // Lança um erro se o comprimento for menor que o exigido
        throw new Error(`Value for ${key} needs to have at least ${length} characters.`);
      }
      val = value; // Define o valor se a validação for bem-sucedida
    };

    // Define a propriedade com o getter e o setter personalizados
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

/**
 * Classe `Category` que utiliza o decorador `minLength` para validar o título.
 */
class Category {
  @minLength(3) // Aplica o decorador para exigir que o título tenha pelo menos 3 caracteres
  private title: string;

  /**
   * Construtor da classe.
   * @param t - Título da categoria.
   */
  constructor(t: string) {
    this.title = t; // Validação ocorre aqui ao definir o título
  }
}

// Exemplo de uso: Criação de uma instância da classe `Category`
console.log(new Category('Mobile')); // Instância criada com sucesso

// Exemplo de erro: Título com menos de 3 caracteres
// console.log(new Category('Io')); // Lança um erro: "Value for title needs to have at least 3 characters."

export default {};
