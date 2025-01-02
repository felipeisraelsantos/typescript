// Classe base genérica para representar entidades
abstract class Entity<Props> {
  // Construtor que recebe as propriedades da entidade
  constructor(protected props: Props) {}

  /**
   * Retorna as propriedades da entidade como um objeto JSON.
   * @returns Um objeto contendo as propriedades da entidade.
   */
  toJSON(): Props {
    return { ...this.props };
  }
}

// Tipo que define as propriedades de uma categoria
type CategoryProperties = { 
  name: string;        // Nome da categoria
  description: string; // Descrição da categoria
};

// Classe que representa uma categoria, estendendo a classe base Entity
class Category extends Entity<CategoryProperties> {}

// Criação de uma instância de Category
const category1 = new Category({
  name: 'string',        // Nome atribuído à categoria
  description: 'string'  // Descrição atribuída à categoria
});

// Exibição das propriedades da categoria em formato JSON
console.log(category1.toJSON()); // Saída: { name: 'string', description: 'string' }

// ***********************

// Tipo que define as propriedades de um produto
type ProductProperties = { 
  title: string;  // Título do produto
  price: number;  // Preço do produto
};

// Classe que representa um produto, estendendo a classe base Entity
class Product extends Entity<ProductProperties> {}

// Criação de uma instância de Product
const product1 = new Product({
  title: 'title',  // Título atribuído ao produto
  price: 12.2      // Preço atribuído ao produto
});

// Exibição das propriedades do produto em formato JSON
console.log(product1.toJSON()); // Saída: { title: 'title', price: 12.2 }
