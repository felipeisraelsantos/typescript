/**
 * Interface genérica para repositórios.
 * Define operações básicas para manipulação de dados, como encontrar, listar e deletar.
 *
 * @template T - Tipo do objeto que o repositório irá manipular.
 * @template U - Tipo do retorno do método `destroy` (padrão: boolean).
 */
interface RepositoryInterface<T, U = boolean> {
  /**
   * Encontra uma entidade pelo ID.
   * @param id - Identificador único da entidade.
   * @returns A entidade encontrada.
   */
  findById(id: string): T;

  /**
   * Retorna todas as entidades disponíveis.
   * @returns Um array contendo todas as entidades.
   */
  findAll(): T[];

  /**
   * Remove uma entidade pelo ID.
   * @param id - Identificador único da entidade a ser removida.
   * @returns Resultado da operação de exclusão.
   */
  destroy(id: string): U;
}

/**
 * Exemplo de implementação de um repositório usando a interface genérica.
 * Aqui, o tipo do repositório é `string`, apenas como exemplo.
 */
const object1: RepositoryInterface<string> = {
  findById: function (id: string): string {
    throw new Error("Function not implemented."); // Exemplo: Lança um erro ao ser chamado.
  },
  findAll: function (): string[] {
    throw new Error("Function not implemented."); // Exemplo: Lança um erro ao ser chamado.
  },
  destroy: function (id: string): boolean {
    throw new Error("Function not implemented."); // Exemplo: Lança um erro ao ser chamado.
  }
};

/**
 * Classe que representa um produto.
 */
class Product { }

/**
 * Interface específica para repositórios de produtos.
 * Extende a interface genérica `RepositoryInterface` com o tipo `Product` e `destroy` retornando um `Product`.
 */
interface ProductRepositoryInterface extends RepositoryInterface<Product, Product> { }

/**
 * Implementação de um repositório para produtos.
 */
class ProductRepository implements ProductRepositoryInterface {
  findById(id: string): Product {
    // Simula encontrar um produto pelo ID
    return new Product();
  }

  findAll(): Product[] {
    // Simula retornar todos os produtos
    return [new Product()];
  }

  destroy(id: string): Product {
    // Simula a remoção de um produto pelo ID, retornando o produto removido
    return new Product();
  }
}

/**
 * Classe que representa um usuário.
 */
class User { }

/**
 * Interface específica para repositórios de usuários.
 * Extende a interface genérica `RepositoryInterface` com o tipo `User`.
 */
interface UserRepositoryInterface extends RepositoryInterface<User> { }

/**
 * Implementação de um repositório para usuários.
 */
class UserRepository implements UserRepositoryInterface {
  findById(id: string): User {
    // Simula encontrar um usuário pelo ID
    return new User();
  }

  findAll(): User[] {
    // Simula retornar todos os usuários
    return [new User()];
  }

  destroy(id: string): boolean {
    // Simula a remoção de um usuário pelo ID, retornando true como resultado
    return true;
  }
}

export { }; // Garantir que o arquivo seja tratado como um módulo.
