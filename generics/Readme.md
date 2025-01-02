### Como o código funciona

1. **Interface Genérica (`RepositoryInterface`):**

   - Define um contrato para repositórios com métodos padrão:
     - `findById`: Encontra uma entidade pelo ID.
     - `findAll`: Retorna todas as entidades.
     - `destroy`: Remove uma entidade pelo ID.

2. **Implementações Específicas:**

   - `ProductRepository` e `UserRepository` implementam a interface genérica para trabalhar com os tipos `Product` e `User`, respectivamente.
   - Cada repositório ajusta o comportamento do método `destroy` conforme necessário:
     - Para `ProductRepository`, retorna o produto excluído.
     - Para `UserRepository`, retorna um booleano indicando sucesso/falha.

3. **Objeto `object1`:**

   - É uma implementação simples da interface genérica para o tipo `string`, usada como exemplo.

4. **Reutilização:**
   - A interface genérica permite criar diferentes repositórios com comportamento consistente, mas ajustado às necessidades específicas de cada tipo de entidade.

Esse código é uma boa prática para sistemas que precisam de repositórios reutilizáveis e extensíveis.

Segue o código reorganizado, com explicações detalhadas sobre como cada trecho funciona e o propósito de cada parte:

1. **Classe `Person`:**

   - Representa uma pessoa com `name` (nome) e `age` (idade).
   - Utiliza o modificador de acesso `public`, permitindo que as propriedades sejam acessadas diretamente.

2. **Função Genérica `display`:**

   - Aceita dois parâmetros: um objeto que estende `Person` e um valor adicional (`string` ou `number`).
   - Exibe apenas o nome da pessoa.

3. **Classe `User`:**

   - Herda as propriedades e métodos de `Person`.
   - Demonstra como herança pode ser usada com a função genérica `display`.

4. **Função Genérica `getProperty`:**

   - Acessa dinamicamente propriedades de um objeto usando o tipo da chave.
   - Garantia de segurança de tipo, pois a chave deve existir no objeto.

5. **Objetos `typescriptInfo` e `typescriptInfo2`:**

   - Usados para demonstrar como acessar propriedades específicas de objetos.

6. **Exportação:**
   - O `export {}` garante que o arquivo seja tratado como módulo, evitando conflitos de escopo.

---

### Resultado Final

O código demonstra:

- O uso de classes com propriedades públicas.
- Funções genéricas para manipular e exibir dados de forma flexível.
- Como acessar propriedades específicas de objetos de forma segura com TypeScript.
